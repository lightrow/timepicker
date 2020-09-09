export interface TimeRange {
  fromTime: number;
  toTime: number;
}

const hours: number[] = [];

for (let i = 0; i <= 24; i++) {
  hours.push(i);
}

export class Timepicker {
  options = { step: 15, total: 1440, maxRangesAmount: 5 };

  ranges: TimeRange[] = [];

  focusedRange?: HTMLDivElement;

  dragBuffer = 0;
  lastX = 0;
  initialMouseX = 0;

  timepickerEl?: HTMLDivElement;
  rangeEls: HTMLDivElement[] = [];
  draggingEl?: HTMLDivElement;
  boxElement?: HTMLDivElement;

  dragCapturedFrom = 0;
  dragCapturedTo = 0;

  init = (
    element: HTMLElement,
    label: string,
    values: TimeRange[],
    onChange: (ranges: TimeRange[]) => void,
    options?: {
      step?: number;
      total?: number;
      maxRangesAmount?: number;
    }
  ) => {
    if (options) {
      this.options = { ...this.options, ...options };
    }
    this.onChange = onChange;
    this.timepickerEl = this.createTimepicker(label);
    element.appendChild(this.timepickerEl);
    this.boxElement = this.timepickerEl.querySelector(
      ".selector-box"
    ) as HTMLDivElement;
    this.boxElement.addEventListener("pointerdown", this.handleBoxClick);
    values.forEach((range) => {
      const rangeEl = this.createRange();
      this.boxElement!.appendChild(rangeEl);
      this.rangeEls.push(rangeEl);
    });
    this.ranges = values;
    this.update();
  };

  onChange: (ranges: TimeRange[]) => void = () => 0;

  handleValueChange = (index: number, value: TimeRange) => {
    const newRanges = [...this.ranges];
    newRanges[index] = {
      fromTime: Math.max(value.fromTime, 0),
      toTime: Math.min(value.toTime, this.options.total),
    };
    this.setRanges(newRanges);
    this.update();
  };

  removeRange = async (index: number) => {
    this.ranges.splice(index, 1);
    const deletedRange = this.rangeEls.splice(index, 1);
    if (!deletedRange[0]) {
      return;
    }
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
    rangeEl.querySelector(".labels .left")!.innerHTML = convert(fromTime);
    rangeEl.querySelector(".labels .right")!.innerHTML = convert(toTime);
  };

  update = () => {
    const allGood = this.checkOverlap();
    if (allGood) {
      this.checkDelete();
    } else {
      return;
    }
    this.rangeEls.forEach((rangeEl) => {
      this.handleRangeUpdate(rangeEl);
    });
    this.onChange(this.ranges);
    if (this.focusedRange) {
      this.timepickerEl!.querySelector(
        ".from-value"
      )!.innerHTML = this.focusedRange.querySelector(
        ".labels .left"
      )!.innerHTML;
      this.timepickerEl!.querySelector(
        ".to-value"
      )!.innerHTML = this.focusedRange.querySelector(
        ".labels .right"
      )!.innerHTML;
    }
  };

  setRanges = (ranges: TimeRange[]) => {
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
      this.setRanges([
        ...this.ranges,
        {
          fromTime: Math.max(0, targetStart - 45),
          toTime: Math.min(targetStart + 15, this.options.total),
        },
      ]);
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
    this.ranges.forEach((range, index) => {
      if ((this.draggingEl?.dataset.index as any) === index.toString()) {
        return;
      }
      if (range.toTime - range.fromTime < this.options.step * 2) {
        this.removeRange(index);
      }
    });
  };

  shiftDirection = "";

  checkOverlap = () => {
    let allGood = true;
    for (const [key1, range1] of this.ranges.entries()) {
      for (const [key2, range2] of this.ranges.entries()) {
        if (key1 !== key2) {
          const unmovedKey = this.draggingEl
            ? parseInt(this.draggingEl.dataset.index!)
            : null;

          if (
            range1.fromTime < range2.toTime &&
            range1.toTime > range2.toTime
          ) {
            if (unmovedKey === key2) {
              this.shiftDirection = "right";
              this.handleValueChange(key1, {
                toTime: Math.min(
                  this.options.total,
                  range1.toTime + range2.toTime - range1.fromTime
                ),
                fromTime: Math.max(0, range2.toTime),
              });
            } else if (unmovedKey === key1) {
              this.shiftDirection = "left";
              this.handleValueChange(key2, {
                toTime: Math.min(this.options.total, range1.fromTime),
                fromTime: Math.max(
                  0,
                  range2.fromTime - (range2.toTime - range1.fromTime)
                ),
              });
            } else if (this.shiftDirection === "right") {
              this.handleValueChange(key1, {
                toTime: Math.min(
                  this.options.total,
                  range1.toTime + range2.toTime - range1.fromTime
                ),
                fromTime: Math.max(0, range2.toTime),
              });
            } else {
              this.handleValueChange(key2, {
                toTime: Math.min(this.options.total, range1.fromTime),
                fromTime: Math.max(
                  0,
                  range2.fromTime - (range2.toTime - range1.fromTime)
                ),
              });
            }
            allGood = false;
          }
        }
      }
    }
    // this.ranges.forEach((range1, key1) => {
    //   this.ranges.forEach((range2, key2) => {

    //   });
    // });
    console.log(allGood);
    return allGood;
  };

  createTimepicker = (label: string) => {
    const timepickerEl = document.createElement("div"),
      head = document.head || document.getElementsByTagName("head")[0],
      link = document.createElement("link");

    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "/timepicker.css";

    head.appendChild(link);

    timepickerEl.className = "TimeRangePicker";
    timepickerEl.innerHTML = `
      <label>${label}</label>
      <div class='outer-box'>
        <div class="header-box">
          <div class="headers">
            ${hours
              .map((hour, index) => {
                return `<div class='header'>
                  <span class="header-label">${hour}</span>
                </div>`;
              })
              .join(" ")}
          </div>
          <div class="separators">
            ${hours
              .map((hour, index) => {
                return "<div class='separator'></div>";
              })
              .join(" ")}
          </div>
        </div>
        <div class="padded-box">
          <div class="selector-box"></div>
        </div>
      </div>
      <div class="popup">
        <p>From:<span class="from-value"></span></p>
        <p>To:<span class="to-value"></span></p>
        <button class="btn-remove">Remove</button>
      </div>
      `;

    (timepickerEl.querySelector(
      ".btn-remove"
    ) as HTMLButtonElement).onpointerdown = this.handleRemoveDown;
    (timepickerEl.querySelector(
      ".btn-remove"
    ) as HTMLButtonElement).onclick = this.handleRemoveClick;

    return timepickerEl;
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
    this.timepickerEl?.querySelector(".popup")?.classList.remove("closing");
    this.timepickerEl?.querySelector(".popup")?.classList.add("show");
    this.update();
  };

  popupCloseTimeout?: NodeJS.Timeout;

  handleRangeBlur = (e: FocusEvent) => {
    this.focusedRange = undefined;
    setTimeout(() => {
      if (!this.focusedRange) {
        if (this.popupCloseTimeout) {
          clearTimeout(this.popupCloseTimeout);
        }
        this.timepickerEl?.querySelector(".popup")?.classList.add("closing");
        this.popupCloseTimeout = setTimeout(() => {
          this.timepickerEl
            ?.querySelector(".popup")
            ?.classList.remove("closing");
          this.timepickerEl?.querySelector(".popup")?.classList.remove("show");
        }, 400);
      }
    }, 0);
  };

  createRange = () => {
    const rangeEl = document.createElement("div");
    rangeEl.className = "Range";
    rangeEl.dataset.index = this.ranges.length.toString();
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
