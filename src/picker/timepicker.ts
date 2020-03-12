export interface TimeRange {
  fromTime: number;
  toTime: number;
}

const hours: number[] = [];

for (let i = 0; i <= 24; i++) {
  hours.push(i);
}

export class Timepicker {
  options = { step: 15, total: 1440, maxRangesAmount: 2 };

  ranges: TimeRange[] = [];

  dragBuffer = 0;
  lastX = 0;
  initialMouseX = 0;

  rangeEls: HTMLDivElement[] = [];
  draggingEl?: HTMLDivElement;
  boxElement?: HTMLDivElement;

  dragCapturedFrom = 0;
  dragCapturedTo = 0;

  onChange: (ranges: TimeRange[]) => void = () => 0;

  handleValueChange = (index: number, value: TimeRange) => {
    const newRanges = [...this.ranges];
    newRanges[index] = {
      fromTime: Math.max(value.fromTime, 0),
      toTime: Math.min(value.toTime, this.options.total)
    };
    this.setRanges(newRanges);
    this.onChange(newRanges);
  };

  removeRange = (index: number) => {
    this.ranges.splice(index, 1);
    const deletedRange = this.rangeEls.splice(index, 1);
    deletedRange[0].parentElement!.removeChild(deletedRange[0]);
    this.rangeEls.forEach((rangeEl, index) => {
      rangeEl.dataset.index = index.toString();
    });
    this.update();
  };

  handleRangeUpdate = (rangeEl: HTMLDivElement) => {
    if (!rangeEl) {
      return;
    }
    const index = parseInt(rangeEl.dataset.index!);
    const { fromTime, toTime } = this.ranges[index];
    rangeEl.style.width =
      ((toTime - fromTime) * 100) / this.options.total + "%";
    rangeEl.style.left = (fromTime * 100) / this.options.total + "%";
    rangeEl.querySelector(".labels .left")!.innerHTML = convert(fromTime);
    rangeEl.querySelector(".labels .right")!.innerHTML = convert(toTime);
  };

  update = () => {
    this.rangeEls.forEach(rangeEl => {
      this.handleRangeUpdate(rangeEl);
    });
  };

  setRanges = (ranges: TimeRange[]) => {
    this.ranges = ranges;
    this.checkOverlap();
    this.update();
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
          toTime: Math.min(targetStart + 15, this.options.total)
        }
      ]);
      this.draggingEl = rangeEl;
      this.rangeEls.push(rangeEl);
      const index = parseInt(this.draggingEl.dataset.index!);
      this.dragCapturedFrom = this.ranges[index].fromTime;
      this.dragCapturedTo = this.ranges[index].toTime;
      this.update();
      this.lastX = e.clientX;
      this.dragCapturedFrom = this.ranges[index].fromTime;
      this.dragCapturedTo = this.ranges[index].toTime;

      document.onpointerup = this.stopDrag;
      document.onpointermove = this.handleRightDrag;
    }
  };

  checkDelete = () => {
    this.ranges.forEach((range, index) => {
      if (range.toTime - range.fromTime < this.options.step * 4) {
        this.removeRange(index);
      }
    });
  };

  checkOverlap = () => {
    this.ranges.forEach((range1, key1) => {
      this.ranges.forEach((range2, key2) => {
        if (key1 === key2) {
          return;
        }
        const priorityIndex = this.draggingEl
          ? parseInt(this.draggingEl.dataset.index!)
          : null;

        if (range1.fromTime < range2.toTime && range1.toTime >= range2.toTime) {
          if (priorityIndex === key2) {
            this.handleValueChange(key1, {
              toTime: Math.min(
                this.options.total,
                range1.toTime + range2.toTime - range1.fromTime
              ),
              fromTime: Math.max(0, range2.toTime)
            });
          } else if (priorityIndex === key1) {
            this.handleValueChange(key2, {
              toTime: Math.min(this.options.total, range1.fromTime),
              fromTime: Math.max(
                0,
                range2.fromTime - (range2.toTime - range1.fromTime)
              )
            });
          } else if (priorityIndex && priorityIndex > key1) {
            this.handleValueChange(key1, {
              toTime: Math.min(
                this.options.total,
                range1.toTime + range2.toTime - range1.fromTime
              ),
              fromTime: Math.max(0, range2.toTime)
            });
          }
        }
      });
    });
  };

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
    const id = "TimePicker-" + Math.random().toString();
    if (options) {
      this.options = { ...this.options, ...options };
    }
    this.onChange = onChange;
    this.ranges = values;
    const timepicker = this.createTimepicker(label, id);
    element.appendChild(timepicker);
    setTimeout(() => {
      this.boxElement = timepicker.querySelector(
        ".selector-box"
      ) as HTMLDivElement;
      this.boxElement.addEventListener("pointerdown", this.handleBoxClick);
    }, 0);
  };

  createTimepicker = (label: string, id: string) => {
    const timepickerEl = document.createElement("div"),
      head = document.head || document.getElementsByTagName("head")[0],
      link = document.createElement("link");

    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "/timepicker.css";

    head.appendChild(link);

    timepickerEl.className = "TimeRangePicker";
    timepickerEl.id = id;
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
      </div>`;
    return timepickerEl;
  };

  createRange = () => {
    const rangeEl = document.createElement("div");
    rangeEl.className = "Range range-" + this.ranges.length;
    rangeEl.dataset.index = this.ranges.length.toString();
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
