interface ValueRange {
  fromTime: number;
  toTime: number;
}

const hours: number[] = [];

for (let i = 0; i <= 24; i++) {
  hours.push(i);
}

const getOffset = (el: HTMLElement): { top: number; left: number } => {
  let X = 0;
  let Y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    X += el.offsetLeft - el.scrollLeft;
    Y += el.offsetTop - el.scrollTop;
    el = el.offsetParent as HTMLElement;
  }
  return { top: Y, left: X };
};

const convert = (n: number) => {
  const hours = `0${((n / 60) ^ 0) % 24}`.slice(-2);
  const minutes = ("0" + (n % 60)).slice(-2);
  return hours + ":" + minutes;
};

function debounce(func: () => any, wait: number, immediate?: boolean) {
  var timeout: number | null;
  return function (this: any) {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args as any);
    };
    var callNow = immediate && !timeout;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = window.setTimeout(later, wait);
    if (callNow) func.apply(context, args as any);
  };
}
function throttle(callback: () => any, limit: number) {
  var waiting = false;
  return function (this: any) {
    if (!waiting) {
      callback.apply(this, arguments as any);
      waiting = true;
      setTimeout(function () {
        waiting = false;
      }, limit);
    }
  };
}

interface PickerOptions {
  readOnly?: boolean;
  step: number;
  total: number;
  maxRangesAmount: number;
  separators: (string | number)[];
  convertFunc: (val: any) => string;
}

export const init = (
  element: HTMLElement,
  label: string,
  values: ValueRange[],
  onChange: (ranges: ValueRange[]) => void,
  options?: PickerOptions
) => {
  const rangePicker = new RangePicker(
    element,
    label,
    values,
    onChange,
    options
  );
  return rangePicker;
};

export class RangePicker {
  options: PickerOptions = {
    readOnly: false,
    step: 15,
    total: 1440,
    maxRangesAmount: 7,
    separators: hours,
    convertFunc: convert,
  };

  ranges: ValueRange[] = [];
  onChange: (ranges: ValueRange[]) => void = () => 0;
  focusedRange?: HTMLDivElement;

  dragBuffer = 0;
  lastX = 0;
  initialMouseX = 0;
  label = "";

  rangepickerEl?: HTMLDivElement;
  rangeEls: HTMLDivElement[] = [];
  draggingEl?: HTMLDivElement;
  boxElement?: HTMLDivElement;

  dragCapturedFrom = 0;
  dragCapturedTo = 0;

  constructor(
    element: HTMLElement,
    label: string,
    values: ValueRange[],
    onChange: (ranges: ValueRange[]) => void,
    options?: PickerOptions
  ) {
    if (options) {
      this.options = { ...this.options, ...options };
    }
    this.label = label;
    this.onChange = onChange;
    this.rangepickerEl = this.createRangepicker(label);
    element.appendChild(this.rangepickerEl);
    this.boxElement = this.rangepickerEl.querySelector(
      ".selector-box"
    ) as HTMLDivElement;
    this.boxElement.addEventListener("pointerdown", this.handleBoxClick);
    this.ranges = values;
    values.forEach((range) => {
      const rangeEl = this.createRange();
      this.boxElement!.appendChild(rangeEl);
      this.rangeEls.push(rangeEl);
    });
    this.update();
  }

  createRangepicker = (label: string) => {
    const rangepickerEl = document.createElement("div");

    rangepickerEl.className = "ValueRangePicker";
    rangepickerEl.innerHTML = `
      <label>${label}</label>
      <div class='outer-box${this.options.readOnly ? " disabled" : ""}'>
        <div class="header-box">
          <div class="headers">
            ${this.options.separators
              .map((label) => {
                return `<div class='header'>
                  <span class="header-label">${label}</span>
                </div>`;
              })
              .join(" ")}
          </div>
          <div class="separators">
            ${this.options.separators
              .map(() => {
                return "<div class='separator'></div>";
              })
              .join(" ")}
          </div>
        </div>
        <div class="padded-box">
          <div class="selector-box"></div>
        </div>
      </div>
      <div class="popup-track">
        <div class="popup">
          <p>From:<span class="from-value"></span></p>
          <p>To:<span class="to-value"></span></p>
          <button class="btn-remove">Remove</button>
        </div>
        <div class="arrow"></div>
      </div>
      `;

    (rangepickerEl.querySelector(
      ".btn-remove"
    ) as HTMLButtonElement).onpointerdown = this.handleRemoveDown;
    (rangepickerEl.querySelector(
      ".btn-remove"
    ) as HTMLButtonElement).onclick = this.handleRemoveClick;

    return rangepickerEl;
  };

  createRange = () => {
    const rangeEl = document.createElement("div");
    rangeEl.className = "Range";
    rangeEl.dataset.index = this.rangeEls.length.toString();
    rangeEl.tabIndex = -1;
    rangeEl.onfocus = this.handleRangeFocus;
    rangeEl.onblur = this.handleRangeBlur;
    rangeEl.innerHTML = `
        <div class="handles">
          <div class="left-handle"></div>
          <div class="right-handle"></div>
        </div>
        <div class="labels">
          <span class="left"></span>
          <span class="right"></span>
        </div>
      `;
    const leftHandle = rangeEl.querySelector(".left-handle") as HTMLDivElement;
    const rightHandle = rangeEl.querySelector(
      ".right-handle"
    ) as HTMLDivElement;

    leftHandle.addEventListener("pointerdown", this.handleLeftDragStart);
    rightHandle.addEventListener("pointerdown", this.handleRightDragStart);
    rangeEl.addEventListener("pointerdown", this.handleMidDragStart);
    return rangeEl;
  };

  toggleReadOnly = (readOnly?: boolean) => {
    this.options.readOnly =
      readOnly !== undefined ? readOnly : !this.options.readOnly;
    const outerBox = this.rangepickerEl!.querySelector(".outer-box")!;
    if (this.options.readOnly && !outerBox.classList.contains("disabled")) {
      outerBox.classList.add("disabled");
    } else if (
      !this.options.readOnly &&
      outerBox.classList.contains("disabled")
    ) {
      outerBox.classList.remove("disabled");
    }
  };

  handleValueChange = (index: number, value: ValueRange) => {
    const newRanges = [...this.ranges];
    newRanges[index] = {
      fromTime: Math.max(value.fromTime, 0),
      toTime: Math.min(value.toTime, this.options.total),
    };
    let overlap = true;
    while (overlap) {
      let isOverlapping = false;
      newRanges.forEach((range, i) => {
        if (i === index) {
          return;
        }
        if (value.fromTime < range.toTime && value.toTime > range.toTime) {
          isOverlapping = true;
          range.toTime = value.fromTime;
        }
        if (value.toTime > range.fromTime && value.fromTime < range.toTime) {
          isOverlapping = true;
          range.fromTime = value.toTime;
        }
      });
      if (!isOverlapping) {
        overlap = false;
      }
    }
    this.setRanges(newRanges);
    this.update();
  };

  removeRange = async (index: number) => {
    this.ranges.splice(index, 1);
    const deletedRange = this.rangeEls.splice(index, 1);

    deletedRange[0].parentElement!.removeChild(deletedRange[0]);
    this.rangeEls.forEach((rangeEl, index) => {
      rangeEl.dataset.index = index.toString();
    });
  };

  handleRangeUpdate = (rangeEl: HTMLDivElement) => {
    const index = parseInt(rangeEl.dataset.index!);
    const { fromTime, toTime } = this.ranges[index];
    rangeEl.style.width =
      ((toTime - fromTime) * 100) / this.options.total + "%";
    rangeEl.style.left = (fromTime * 100) / this.options.total + "%";

    const leftLabel = rangeEl.querySelector(".labels .left") as HTMLDivElement;
    const rightLabel = rangeEl.querySelector(
      ".labels .right"
    ) as HTMLDivElement;

    leftLabel.innerHTML = this.options.convertFunc(fromTime);
    rightLabel.innerHTML = this.options.convertFunc(toTime);
    if (rangeEl.clientWidth < 70) {
      rightLabel.style.opacity = "0";
    } else {
      rightLabel.style.opacity = "1";
    }
    if (rangeEl.clientWidth < 30) {
      leftLabel.style.opacity = "0";
    } else {
      leftLabel.style.opacity = "1";
    }
  };

  setRanges = (ranges: ValueRange[]) => {
    this.ranges = ranges;
  };

  handleBoxClick = (e: PointerEvent) => {
    if (!this.boxElement) {
      return;
    }

    const delta = e.clientX - getOffset(this.boxElement).left;
    this.initialMouseX = e.clientX;
    let targetStart = 0;
    if (delta > 0) {
      const deltaPercent = delta / this.boxElement.clientWidth;
      targetStart = this.options.total * deltaPercent;
      targetStart -= targetStart % this.options.step;
    }

    if (this.ranges.length < this.options.maxRangesAmount) {
      const rangeEl = this.createRange();
      this.boxElement.appendChild(rangeEl);
      const newRanges = [...this.ranges];
      const value = {
        fromTime: Math.max(0, targetStart - 45),
        toTime: Math.min(targetStart + 15, this.options.total),
      };
      let overlap = true;
      while (overlap) {
        let isOverlapping = false;
        newRanges.forEach((range, i) => {
          if (i === index) {
            return;
          }
          if (value.fromTime < range.toTime && value.toTime > range.toTime) {
            isOverlapping = true;
            range.toTime = value.fromTime;
          }
          if (value.toTime > range.fromTime && value.fromTime < range.toTime) {
            isOverlapping = true;
            range.fromTime = value.toTime;
          }
        });
        if (!isOverlapping) {
          overlap = false;
        }
      }
      newRanges.push(value);
      this.setRanges(newRanges);
      this.draggingEl = rangeEl;
      setTimeout(() => {
        rangeEl.focus();
      }, 0);

      this.rangeEls.push(rangeEl);
      const index = parseInt(this.draggingEl.dataset.index!);
      this.dragCapturedFrom = this.ranges[index].fromTime;
      this.dragCapturedTo = this.ranges[index].toTime;
      this.lastX = e.clientX;
      this.dragCapturedFrom = this.ranges[index].fromTime;
      this.dragCapturedTo = this.ranges[index].toTime;
      this.update();

      document.onpointerup = this.stopDrag;
      document.onpointermove = this.handleRightDrag;
    }
  };

  checkDelete = () => {
    for (const [index, range] of this.ranges.entries()) {
      const isDragEl =
        this.draggingEl &&
        (this.draggingEl.dataset.index as any) === index.toString();
      if (!isDragEl) {
        if (
          range.toTime - range.fromTime < this.options.step ||
          range.fromTime > this.options.total ||
          range.toTime < this.options.step
        ) {
          this.removeRange(index);
          this.checkDelete();
          return;
        }
      }
    }
  };

  shiftDirection?: string;

  wait = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 40);
    });
  };

  update = async () => {
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(() => {
        this.checkDelete();
        this.rangeEls.forEach((rangeEl) => {
          this.handleRangeUpdate(rangeEl);
        });
        this.onChange(this.ranges);
        if (this.focusedRange) {
          this.rangepickerEl!.querySelector(
            ".from-value"
          )!.innerHTML = this.focusedRange.querySelector(
            ".labels .left"
          )!.innerHTML;
          this.rangepickerEl!.querySelector(
            ".to-value"
          )!.innerHTML = this.focusedRange.querySelector(
            ".labels .right"
          )!.innerHTML;
          this.handlePopupPosition();
        }
      });
    } else {
      throttle(() => {
        this.checkDelete();
        this.rangeEls.forEach((rangeEl) => {
          this.handleRangeUpdate(rangeEl);
        });
        this.onChange(this.ranges);
        if (this.focusedRange) {
          this.rangepickerEl!.querySelector(
            ".from-value"
          )!.innerHTML = this.focusedRange.querySelector(
            ".labels .left"
          )!.innerHTML;
          this.rangepickerEl!.querySelector(
            ".to-value"
          )!.innerHTML = this.focusedRange.querySelector(
            ".labels .right"
          )!.innerHTML;
          this.handlePopupPosition();
        }
      }, 16);
    }
  };

  handlePopupPosition = () => {
    if (!this.focusedRange) {
      return;
    }
    const popup = this.rangepickerEl!.querySelector(".popup") as HTMLDivElement;
    const popupArrow = this.rangepickerEl!.querySelector(
      ".arrow"
    ) as HTMLDivElement;
    const popupTrack = this.boxElement!;

    const targetPos =
      this.focusedRange.offsetLeft + this.focusedRange.clientWidth / 2;
    const minPos = popup.clientWidth / 2 - 12;
    const maxPos = popupTrack.clientWidth - popup.clientWidth / 2 + 12;
    popup.style.left = Math.min(Math.max(minPos, targetPos), maxPos) + "px";
    popupArrow.style.left = Math.min(targetPos, popupTrack.clientWidth) + "px";
  };

  handleRemoveDown = (e: PointerEvent) => {
    e.preventDefault();
    if (this.focusedRange) {
      this.focusedRange.focus();
    }
  };

  handleRemoveClick = (e: MouseEvent) => {
    if (this.focusedRange) {
      const idx = this.focusedRange.dataset.index as any;
      this.removeRange(idx);
    }
  };

  handleRangeFocus = (e: FocusEvent) => {
    if (this.popupCloseTimeout) {
      clearTimeout(this.popupCloseTimeout);
    }
    this.focusedRange = e.target as HTMLDivElement;
    this.rangepickerEl
      ?.querySelector(".popup-track")
      ?.classList.remove("closing");
    this.rangepickerEl?.querySelector(".popup-track")?.classList.add("show");
    this.update();
  };

  popupCloseTimeout?: any;

  handleRangeBlur = (e: FocusEvent) => {
    this.focusedRange = undefined;
    setTimeout(() => {
      if (!this.focusedRange) {
        if (this.popupCloseTimeout) {
          clearTimeout(this.popupCloseTimeout);
        }
        this.rangepickerEl
          ?.querySelector(".popup-track")
          ?.classList.add("closing");
        this.popupCloseTimeout = setTimeout(() => {
          this.rangepickerEl
            ?.querySelector(".popup-track")
            ?.classList.remove("closing");
          this.rangepickerEl
            ?.querySelector(".popup-track")
            ?.classList.remove("show");
        }, 400);
      }
    }, 0);
  };

  stopDrag = (e?: MouseEvent) => {
    this.dragBuffer = 0;
    document.onpointermove = null;
    this.draggingEl = undefined;
    this.checkDelete();
    this.onChange(this.ranges);
  };

  handleLeftDragStart = (event: MouseEvent) => {
    event.stopPropagation();
    this.draggingEl = (event.currentTarget as HTMLDivElement).parentElement!
      .parentElement as HTMLDivElement;
    this.lastX = event.clientX;
    const index = parseInt(this.draggingEl.dataset.index!);
    this.dragCapturedFrom = this.ranges[index].fromTime;
    this.dragCapturedTo = this.ranges[index].toTime;

    document.onpointerup = this.stopDrag;
    document.onpointermove = this.handleLeftDrag;
  };

  handleRightDragStart = (event: MouseEvent) => {
    event.stopPropagation();
    this.draggingEl = (event.currentTarget as HTMLDivElement).parentElement!
      .parentElement as HTMLDivElement;
    this.lastX = event.clientX;
    const index = parseInt(this.draggingEl.dataset.index!);
    this.dragCapturedFrom = this.ranges[index].fromTime;
    this.dragCapturedTo = this.ranges[index].toTime;

    document.onpointerup = this.stopDrag;
    document.onpointermove = this.handleRightDrag;
  };

  handleMidDragStart = (event: MouseEvent) => {
    event.stopPropagation();
    this.draggingEl = event.currentTarget as HTMLDivElement;
    this.lastX = event.clientX;
    const index = parseInt(this.draggingEl.dataset.index!);
    this.dragCapturedFrom = this.ranges[index].fromTime;
    this.dragCapturedTo = this.ranges[index].toTime;

    document.onpointerup = this.stopDrag;
    document.onpointermove = this.handleMidDrag;
  };

  handleLeftDrag = (event: MouseEvent) => {
    const isHeldDown =
      event.buttons === undefined ? event.which === 1 : event.buttons === 1;
    if (!isHeldDown) {
      this.stopDrag();
      return;
    }

    const el = this.draggingEl;

    if (!el) {
      return;
    }
    const index = parseInt(el.dataset.index!);
    const delta = event.clientX - this.lastX;
    const deltaPercent = (delta / el.parentElement!.clientWidth) * 100;

    let deltaValue = (deltaPercent / 100) * this.options.total;
    deltaValue = deltaValue - (deltaValue % this.options.step);
    if (
      deltaValue - this.dragBuffer < this.options.step &&
      deltaValue - this.dragBuffer > -this.options.step
    ) {
      return;
    }
    this.dragBuffer = deltaValue;
    let newStart = this.dragCapturedFrom;
    let newEnd = this.dragCapturedTo;

    if (newEnd - (newStart + deltaValue) < 0) {
      newStart = newEnd;
      newEnd = newEnd + deltaValue - (newEnd - this.dragCapturedFrom);
    } else {
      newStart += deltaValue;
    }

    this.handleValueChange(index, { fromTime: newStart, toTime: newEnd });
  };

  handleRightDrag = (event: MouseEvent) => {
    const isHeldDown =
      event.buttons === undefined ? event.which === 1 : event.buttons === 1;

    if (!isHeldDown) {
      this.stopDrag();
      return;
    }

    const el = this.draggingEl;
    if (!el) {
      return;
    }

    const index = parseInt(el.dataset.index!);
    const delta = event.clientX - this.lastX;
    const deltaPercent = (delta / el.parentElement!.clientWidth) * 100;

    let deltaValue = (deltaPercent / 100) * this.options.total;
    deltaValue = deltaValue - (deltaValue % this.options.step);
    if (
      deltaValue - this.dragBuffer < this.options.step &&
      deltaValue - this.dragBuffer > -this.options.step
    ) {
      return;
    }
    this.dragBuffer = deltaValue;
    let newStart = this.dragCapturedFrom;
    let newEnd = this.dragCapturedTo;

    if (newEnd + deltaValue - newStart < 0) {
      newStart = newStart + deltaValue - (newStart - newEnd);
      newEnd = this.dragCapturedFrom;
    } else {
      newEnd += deltaValue;
    }

    this.handleValueChange(index, { fromTime: newStart, toTime: newEnd });
  };

  handleMidDrag = (event: MouseEvent) => {
    const isHeldDown =
      event.buttons === undefined ? event.which === 1 : event.buttons === 1;
    if (!isHeldDown) {
      this.stopDrag();
      return;
    }

    const el = this.draggingEl;
    if (!el) {
      return;
    }
    const index = parseInt(el.dataset.index!);
    const delta = event.clientX - this.lastX;
    const deltaPercent = (delta / el.parentElement!.clientWidth) * 100;

    let deltaValue = (deltaPercent / 100) * this.options.total;
    deltaValue = deltaValue - (deltaValue % this.options.step);
    if (
      deltaValue - this.dragBuffer < this.options.step &&
      deltaValue - this.dragBuffer > -this.options.step
    ) {
      return;
    }
    this.dragBuffer = deltaValue;
    let newStart = this.dragCapturedFrom + deltaValue;
    let newEnd = this.dragCapturedTo + deltaValue;

    this.handleValueChange(index, { fromTime: newStart, toTime: newEnd });
  };
}
