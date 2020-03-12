interface TimeRange {
  fromTime: number;
  toTime: number;
}

const hours: number[] = [];

for (let i = 0; i <= 24; i++) {
  hours.push(i);
}

export class Timepicker {
  ranges: TimeRange[] = [];
  dragBuffers = [];

  options = { step: 15, total: 1440, maxRangesAmount: 2 };

  boxElement?: HTMLDivElement;
  initialMouseX = 0;

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
    const newRanges = [...this.ranges];
    newRanges.splice(index, 1);
    this.setRanges(newRanges);
  };

  handleRangeUpdate = (rangeEl: HTMLDivElement) => {
    
  };

  update = () => {
    this.ranges.forEach((range, index) => {
      const rangeEl = this.boxElement!.querySelector(
        ".range-" + index
      ) as HTMLDivElement;
      this.handleRangeUpdate(rangeEl);
    });
  };

  setRanges = (ranges: TimeRange[]) => {
    this.ranges = ranges;
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
      targetStart = Math.floor(this.options.total * deltaPercent);
      targetStart -= targetStart % this.options.step;
    }

    if (this.ranges.length < this.options.maxRangesAmount) {
      const rangeEl = document.createElement("div");
      rangeEl.className = "Range range-" + this.ranges.length;
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
      const leftHandle = rangeEl.querySelector(
        ".left-handle"
      ) as HTMLDivElement;
      const rightHandle = rangeEl.querySelector(
        ".right-handle"
      ) as HTMLDivElement;

      leftHandle.addEventListener("pointerdown");

      this.boxElement.appendChild(rangeEl);
      this.setRanges([
        ...this.ranges,
        {
          fromTime: Math.max(0, targetStart - 45),
          toTime: Math.min(targetStart + 15, this.options.total)
        }
      ]);
    }
  };

  checkOverlap = () => {
    this.ranges.forEach((range1, key1) => {
      this.ranges.forEach((range2, key2) => {
        if (key1 === key2) {
          return;
        }
        if (range1.fromTime < range2.toTime && range1.toTime >= range2.toTime) {
          this.handleValueChange(key1, {
            toTime: Math.min(
              this.options.total,
              range1.toTime + range2.toTime - range1.fromTime
            ),
            fromTime: Math.max(0, range2.toTime)
          });
        } else if (
          range2.fromTime < range1.toTime &&
          range2.toTime >= range1.toTime
        ) {
          this.handleValueChange(key2, {
            toTime: Math.min(
              this.options.total,
              range2.toTime + range1.toTime - range2.fromTime
            ),
            fromTime: Math.max(0, range1.toTime)
          });
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
      step: number;
      total: number;
      maxRangesAmount: number;
    }
  ) => {
    const id = "TimePicker-" + Math.random().toString();
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

  createRanges = () => {
    this.ranges.forEach(range => {
      const rangeEl = document.createElement("div");
    });
  };

  stopDrag = (e?: MouseEvent) => {
    this.dragBuffer = 0;
    document.onpointermove = null;
    this.dragging = false;

    if (delta < step * 2 && !dragging) {
      removeRange(id);
      return null;
    }
  };

  handleLeftDragStart = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    this.dragging = true;

    document.onpointerup = stopDrag;
    document.onpointermove = handleLeftDrag;
    lastX.current = event.clientX;
  };

  handleRightDragStart = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setDragging(true);
    document.onpointerup = stopDrag;
    document.onpointermove = handleRightDrag;
    lastX.current = event.clientX;
  };

  handleMidDragStart = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.nativeEvent.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    setDragging(true);
    document.onpointerup = stopDrag;
    document.onpointermove = handleMidDrag;
    lastX.current = event.clientX;
  };

  handleLeftDrag = (event: MouseEvent) => {
    const isHeldDown =
      event.buttons === undefined ? event.which === 1 : event.buttons === 1;
    if (!isHeldDown) {
      stopDrag();
      return;
    }
    const el = ref.current!;
    const delta = event.clientX - lastX.current;
    const deltaPercent = Math.floor(
      (delta / el.parentElement!.clientWidth) * 100
    );

    let deltaValue = (deltaPercent / 100) * totalValue;
    deltaValue = deltaValue - (deltaValue % step);
    if (
      deltaValue - dragBuffer.current < step &&
      deltaValue - dragBuffer.current > -step
    ) {
      return;
    }
    dragBuffer.current = deltaValue;
    let newStart = fromTime;
    let newEnd = toTime;

    if (toTime - (newStart + deltaValue) < 0) {
      newStart = toTime;
      newEnd = newEnd + deltaValue - (toTime - fromTime);
    } else {
      newStart += deltaValue;
    }

    onValueChange(id, { start: newStart, end: newEnd });
  };

  handleRightDrag = (event: MouseEvent) => {
    const isHeldDown =
      event.buttons === undefined ? event.which === 1 : event.buttons === 1;

    if (!isHeldDown) {
      stopDrag();
      return;
    }

    const el = ref.current!;
    const delta = event.clientX - lastX.current;
    const deltaPercent = (delta / el.parentElement!.clientWidth) * 100;

    let deltaValue = (deltaPercent / 100) * totalValue;
    deltaValue = deltaValue - (deltaValue % step);
    if (
      deltaValue - dragBuffer.current < step &&
      deltaValue - dragBuffer.current > -step
    ) {
      return;
    }
    dragBuffer.current = deltaValue;

    let newStart = fromTime;
    let newEnd = toTime;

    if (newEnd + deltaValue - fromTime < 0) {
      newStart = newStart + deltaValue - (fromTime - toTime);
      newEnd = fromTime;
    } else {
      newEnd += deltaValue;
    }

    onValueChange(id, { start: newStart, end: newEnd });
  };

  handleMidDrag = (event: MouseEvent) => {
    const isHeldDown =
      event.buttons === undefined ? event.which === 1 : event.buttons === 1;
    if (!isHeldDown) {
      stopDrag();
      return;
    }

    const el = ref.current!;
    const delta = event.clientX - lastX.current;
    const deltaPercent = Math.floor(
      (delta / el.parentElement!.clientWidth) * 100
    );

    let deltaValue = (deltaPercent / 100) * totalValue;
    deltaValue = deltaValue - (deltaValue % step);
    if (
      deltaValue - dragBuffer.current < step &&
      deltaValue - dragBuffer.current > -step
    ) {
      return;
    }
    dragBuffer.current = deltaValue;
    const newStart = fromTime + deltaValue;
    const newEnd = toTime + deltaValue;

    onValueChange(id, { start: newStart, end: newEnd });
  };
}

export function getOffset(el: HTMLElement): { top: number; left: number } {
  let X = 0;
  let Y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    X += el.offsetLeft - el.scrollLeft;
    Y += el.offsetTop - el.scrollTop;
    el = el.offsetParent as HTMLElement;
  }
  return { top: Y, left: X };
}
