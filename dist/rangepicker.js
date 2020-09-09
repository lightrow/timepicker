var RangePicker =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: RangePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangePicker", function() { return RangePicker; });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var hours = [];
for (var i = 0; i <= 24; i++) {
    hours.push(i);
}
var getOffset = function (el) {
    var X = 0;
    var Y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        X += el.offsetLeft - el.scrollLeft;
        Y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: Y, left: X };
};
var convert = function (n) {
    var hours = ("0" + ((n / 60) ^ 0) % 24).slice(-2);
    var minutes = ("0" + (n % 60)).slice(-2);
    return hours + ":" + minutes;
};
var RangePicker = /** @class */ (function () {
    function RangePicker() {
        var _this = this;
        this.options = {
            readOnly: false,
            step: 15,
            total: 1440,
            maxRangesAmount: 7,
            separators: hours,
            convertFunc: convert,
        };
        this.ranges = [];
        this.onChange = function () { return 0; };
        this.dragBuffer = 0;
        this.lastX = 0;
        this.initialMouseX = 0;
        this.label = "";
        this.rangeEls = [];
        this.dragCapturedFrom = 0;
        this.dragCapturedTo = 0;
        this.init = function (element, label, values, onChange, options) {
            if (options) {
                _this.options = __assign(__assign({}, _this.options), options);
            }
            _this.label = label;
            _this.onChange = onChange;
            _this.rangepickerEl = _this.createRangepicker(label);
            element.appendChild(_this.rangepickerEl);
            _this.boxElement = _this.rangepickerEl.querySelector(".selector-box");
            _this.boxElement.addEventListener("pointerdown", _this.handleBoxClick);
            _this.ranges = values;
            values.forEach(function (range) {
                var rangeEl = _this.createRange();
                _this.boxElement.appendChild(rangeEl);
                _this.rangeEls.push(rangeEl);
            });
            _this.update();
        };
        this.createRangepicker = function (label) {
            var rangepickerEl = document.createElement("div");
            rangepickerEl.className = "ValueRangePicker";
            rangepickerEl.innerHTML = "\n      <label>" + label + "</label>\n      <div class='outer-box" + (_this.options.readOnly ? " disabled" : "") + "'>\n        <div class=\"header-box\">\n          <div class=\"headers\">\n            " + _this.options.separators
                .map(function (label) {
                return "<div class='header'>\n                  <span class=\"header-label\">" + label + "</span>\n                </div>";
            })
                .join(" ") + "\n          </div>\n          <div class=\"separators\">\n            " + _this.options.separators
                .map(function () {
                return "<div class='separator'></div>";
            })
                .join(" ") + "\n          </div>\n        </div>\n        <div class=\"padded-box\">\n          <div class=\"selector-box\"></div>\n        </div>\n      </div>\n      <div class=\"popup\">\n        <p>From:<span class=\"from-value\"></span></p>\n        <p>To:<span class=\"to-value\"></span></p>\n        <button class=\"btn-remove\">Remove</button>\n      </div>\n      ";
            rangepickerEl.querySelector(".btn-remove").onpointerdown = _this.handleRemoveDown;
            rangepickerEl.querySelector(".btn-remove").onclick = _this.handleRemoveClick;
            return rangepickerEl;
        };
        this.createRange = function () {
            var rangeEl = document.createElement("div");
            rangeEl.className = "Range";
            rangeEl.dataset.index = _this.rangeEls.length.toString();
            rangeEl.tabIndex = -1;
            rangeEl.onfocus = _this.handleRangeFocus;
            rangeEl.onblur = _this.handleRangeBlur;
            rangeEl.innerHTML = "\n        <div class=\"handles\">\n          <div class=\"left-handle\"></div>\n          <div class=\"right-handle\"></div>\n        </div>\n        <div class=\"labels\">\n          <span class=\"left\"></span>\n          <span class=\"right\"></span>\n        </div>\n      ";
            var leftHandle = rangeEl.querySelector(".left-handle");
            var rightHandle = rangeEl.querySelector(".right-handle");
            leftHandle.addEventListener("pointerdown", _this.handleLeftDragStart);
            rightHandle.addEventListener("pointerdown", _this.handleRightDragStart);
            rangeEl.addEventListener("pointerdown", _this.handleMidDragStart);
            return rangeEl;
        };
        this.toggleReadOnly = function (readOnly) {
            _this.options.readOnly =
                readOnly !== undefined ? readOnly : !_this.options.readOnly;
            var outerBox = _this.rangepickerEl.querySelector(".outer-box");
            if (_this.options.readOnly && !outerBox.classList.contains("disabled")) {
                outerBox.classList.add("disabled");
            }
            else if (!_this.options.readOnly &&
                outerBox.classList.contains("disabled")) {
                outerBox.classList.remove("disabled");
            }
        };
        this.handleValueChange = function (index, value) {
            var newRanges = __spread(_this.ranges);
            newRanges[index] = {
                fromTime: Math.max(value.fromTime, 0),
                toTime: Math.min(value.toTime, _this.options.total),
            };
            _this.setRanges(newRanges);
            _this.update();
        };
        this.removeRange = function (index) { return __awaiter(_this, void 0, void 0, function () {
            var deletedRange;
            return __generator(this, function (_a) {
                this.ranges.splice(index, 1);
                deletedRange = this.rangeEls.splice(index, 1);
                if (!deletedRange[0]) {
                    return [2 /*return*/];
                }
                deletedRange[0].parentElement.removeChild(deletedRange[0]);
                this.rangeEls.forEach(function (rangeEl, index) {
                    rangeEl.dataset.index = index.toString();
                });
                return [2 /*return*/];
            });
        }); };
        this.handleRangeUpdate = function (rangeEl) {
            var index = parseInt(rangeEl.dataset.index);
            var _a = _this.ranges[index], fromTime = _a.fromTime, toTime = _a.toTime;
            rangeEl.style.width =
                ((toTime - fromTime) * 100) / _this.options.total + "%";
            rangeEl.style.left = (fromTime * 100) / _this.options.total + "%";
            rangeEl.querySelector(".labels .left").innerHTML = _this.options.convertFunc(fromTime);
            rangeEl.querySelector(".labels .right").innerHTML = _this.options.convertFunc(toTime);
        };
        this.update = function () {
            var allGood = _this.checkOverlap();
            if (allGood) {
                _this.checkDelete();
            }
            else {
                return;
            }
            _this.rangeEls.forEach(function (rangeEl) {
                _this.handleRangeUpdate(rangeEl);
            });
            _this.onChange(_this.ranges);
            if (_this.focusedRange) {
                _this.rangepickerEl.querySelector(".from-value").innerHTML = _this.focusedRange.querySelector(".labels .left").innerHTML;
                _this.rangepickerEl.querySelector(".to-value").innerHTML = _this.focusedRange.querySelector(".labels .right").innerHTML;
            }
        };
        this.setRanges = function (ranges) {
            _this.ranges = ranges;
        };
        this.handleBoxClick = function (e) {
            if (!_this.boxElement) {
                return;
            }
            var delta = e.clientX - getOffset(_this.boxElement).left;
            _this.initialMouseX = e.clientX;
            var targetStart = 0;
            if (delta > 0) {
                var deltaPercent = delta / _this.boxElement.clientWidth;
                targetStart = _this.options.total * deltaPercent;
                targetStart -= targetStart % _this.options.step;
            }
            if (_this.ranges.length < _this.options.maxRangesAmount) {
                var rangeEl_1 = _this.createRange();
                _this.boxElement.appendChild(rangeEl_1);
                _this.setRanges(__spread(_this.ranges, [
                    {
                        fromTime: Math.max(0, targetStart - 45),
                        toTime: Math.min(targetStart + 15, _this.options.total),
                    },
                ]));
                _this.draggingEl = rangeEl_1;
                setTimeout(function () {
                    rangeEl_1.focus();
                }, 0);
                _this.rangeEls.push(rangeEl_1);
                var index = parseInt(_this.draggingEl.dataset.index);
                _this.dragCapturedFrom = _this.ranges[index].fromTime;
                _this.dragCapturedTo = _this.ranges[index].toTime;
                _this.lastX = e.clientX;
                _this.dragCapturedFrom = _this.ranges[index].fromTime;
                _this.dragCapturedTo = _this.ranges[index].toTime;
                _this.update();
                document.onpointerup = _this.stopDrag;
                document.onpointermove = _this.handleRightDrag;
            }
        };
        this.checkDelete = function () {
            _this.ranges.forEach(function (range, index) {
                var _a;
                if (((_a = _this.draggingEl) === null || _a === void 0 ? void 0 : _a.dataset.index) === index.toString()) {
                    return;
                }
                if (range.toTime - range.fromTime < _this.options.step * 2) {
                    _this.removeRange(index);
                }
            });
        };
        this.shiftDirection = "";
        this.checkOverlap = function () {
            var e_1, _a, e_2, _b;
            var allGood = true;
            try {
                for (var _c = __values(_this.ranges.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var _e = __read(_d.value, 2), key1 = _e[0], range1 = _e[1];
                    try {
                        for (var _f = (e_2 = void 0, __values(_this.ranges.entries())), _g = _f.next(); !_g.done; _g = _f.next()) {
                            var _h = __read(_g.value, 2), key2 = _h[0], range2 = _h[1];
                            if (key1 !== key2) {
                                var unmovedKey = _this.draggingEl
                                    ? parseInt(_this.draggingEl.dataset.index)
                                    : null;
                                if (range1.fromTime < range2.toTime &&
                                    range1.toTime > range2.toTime) {
                                    if (unmovedKey === key2) {
                                        _this.shiftDirection = "right";
                                        _this.handleValueChange(key1, {
                                            toTime: Math.min(_this.options.total, range1.toTime + range2.toTime - range1.fromTime),
                                            fromTime: Math.max(0, range2.toTime),
                                        });
                                    }
                                    else if (unmovedKey === key1) {
                                        _this.shiftDirection = "left";
                                        _this.handleValueChange(key2, {
                                            toTime: Math.min(_this.options.total, range1.fromTime),
                                            fromTime: Math.max(0, range2.fromTime - (range2.toTime - range1.fromTime)),
                                        });
                                    }
                                    else if (_this.shiftDirection === "right") {
                                        _this.handleValueChange(key1, {
                                            toTime: Math.min(_this.options.total, range1.toTime + range2.toTime - range1.fromTime),
                                            fromTime: Math.max(0, range2.toTime),
                                        });
                                    }
                                    else {
                                        _this.handleValueChange(key2, {
                                            toTime: Math.min(_this.options.total, range1.fromTime),
                                            fromTime: Math.max(0, range2.fromTime - (range2.toTime - range1.fromTime)),
                                        });
                                    }
                                    allGood = false;
                                }
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            // this.ranges.forEach((range1, key1) => {
            //   this.ranges.forEach((range2, key2) => {
            //   });
            // });
            console.log(allGood);
            return allGood;
        };
        this.handleRemoveDown = function (e) {
            e.preventDefault();
            if (_this.focusedRange) {
                _this.focusedRange.focus();
            }
        };
        this.handleRemoveClick = function (e) {
            if (_this.focusedRange) {
                var idx = _this.focusedRange.dataset.index;
                _this.removeRange(idx);
            }
        };
        this.handleRangeFocus = function (e) {
            var _a, _b, _c, _d;
            if (_this.popupCloseTimeout) {
                clearTimeout(_this.popupCloseTimeout);
            }
            _this.focusedRange = e.target;
            (_b = (_a = _this.rangepickerEl) === null || _a === void 0 ? void 0 : _a.querySelector(".popup")) === null || _b === void 0 ? void 0 : _b.classList.remove("closing");
            (_d = (_c = _this.rangepickerEl) === null || _c === void 0 ? void 0 : _c.querySelector(".popup")) === null || _d === void 0 ? void 0 : _d.classList.add("show");
            _this.update();
        };
        this.handleRangeBlur = function (e) {
            _this.focusedRange = undefined;
            setTimeout(function () {
                var _a, _b;
                if (!_this.focusedRange) {
                    if (_this.popupCloseTimeout) {
                        clearTimeout(_this.popupCloseTimeout);
                    }
                    (_b = (_a = _this.rangepickerEl) === null || _a === void 0 ? void 0 : _a.querySelector(".popup")) === null || _b === void 0 ? void 0 : _b.classList.add("closing");
                    _this.popupCloseTimeout = setTimeout(function () {
                        var _a, _b, _c, _d;
                        (_b = (_a = _this.rangepickerEl) === null || _a === void 0 ? void 0 : _a.querySelector(".popup")) === null || _b === void 0 ? void 0 : _b.classList.remove("closing");
                        (_d = (_c = _this.rangepickerEl) === null || _c === void 0 ? void 0 : _c.querySelector(".popup")) === null || _d === void 0 ? void 0 : _d.classList.remove("show");
                    }, 400);
                }
            }, 0);
        };
        this.stopDrag = function (e) {
            _this.dragBuffer = 0;
            document.onpointermove = null;
            _this.draggingEl = undefined;
            _this.checkDelete();
            _this.onChange(_this.ranges);
        };
        this.handleLeftDragStart = function (event) {
            event.stopPropagation();
            _this.draggingEl = event.currentTarget.parentElement
                .parentElement;
            _this.lastX = event.clientX;
            var index = parseInt(_this.draggingEl.dataset.index);
            _this.dragCapturedFrom = _this.ranges[index].fromTime;
            _this.dragCapturedTo = _this.ranges[index].toTime;
            document.onpointerup = _this.stopDrag;
            document.onpointermove = _this.handleLeftDrag;
        };
        this.handleRightDragStart = function (event) {
            event.stopPropagation();
            _this.draggingEl = event.currentTarget.parentElement
                .parentElement;
            _this.lastX = event.clientX;
            var index = parseInt(_this.draggingEl.dataset.index);
            _this.dragCapturedFrom = _this.ranges[index].fromTime;
            _this.dragCapturedTo = _this.ranges[index].toTime;
            document.onpointerup = _this.stopDrag;
            document.onpointermove = _this.handleRightDrag;
        };
        this.handleMidDragStart = function (event) {
            event.stopPropagation();
            _this.draggingEl = event.currentTarget;
            _this.lastX = event.clientX;
            var index = parseInt(_this.draggingEl.dataset.index);
            _this.dragCapturedFrom = _this.ranges[index].fromTime;
            _this.dragCapturedTo = _this.ranges[index].toTime;
            document.onpointerup = _this.stopDrag;
            document.onpointermove = _this.handleMidDrag;
        };
        this.handleLeftDrag = function (event) {
            var isHeldDown = event.buttons === undefined ? event.which === 1 : event.buttons === 1;
            if (!isHeldDown) {
                _this.stopDrag();
                return;
            }
            var el = _this.draggingEl;
            if (!el) {
                return;
            }
            var index = parseInt(el.dataset.index);
            var delta = event.clientX - _this.lastX;
            var deltaPercent = (delta / el.parentElement.clientWidth) * 100;
            var deltaValue = (deltaPercent / 100) * _this.options.total;
            deltaValue = deltaValue - (deltaValue % _this.options.step);
            if (deltaValue - _this.dragBuffer < _this.options.step &&
                deltaValue - _this.dragBuffer > -_this.options.step) {
                return;
            }
            _this.dragBuffer = deltaValue;
            var newStart = _this.dragCapturedFrom;
            var newEnd = _this.dragCapturedTo;
            if (newEnd - (newStart + deltaValue) < 0) {
                newStart = newEnd;
                newEnd = newEnd + deltaValue - (newEnd - _this.dragCapturedFrom);
            }
            else {
                newStart += deltaValue;
            }
            _this.handleValueChange(index, { fromTime: newStart, toTime: newEnd });
        };
        this.handleRightDrag = function (event) {
            var isHeldDown = event.buttons === undefined ? event.which === 1 : event.buttons === 1;
            if (!isHeldDown) {
                _this.stopDrag();
                return;
            }
            var el = _this.draggingEl;
            if (!el) {
                return;
            }
            var index = parseInt(el.dataset.index);
            var delta = event.clientX - _this.lastX;
            var deltaPercent = (delta / el.parentElement.clientWidth) * 100;
            var deltaValue = (deltaPercent / 100) * _this.options.total;
            deltaValue = deltaValue - (deltaValue % _this.options.step);
            if (deltaValue - _this.dragBuffer < _this.options.step &&
                deltaValue - _this.dragBuffer > -_this.options.step) {
                return;
            }
            _this.dragBuffer = deltaValue;
            var newStart = _this.dragCapturedFrom;
            var newEnd = _this.dragCapturedTo;
            if (newEnd + deltaValue - newStart < 0) {
                newStart = newStart + deltaValue - (newStart - newEnd);
                newEnd = _this.dragCapturedFrom;
            }
            else {
                newEnd += deltaValue;
            }
            _this.handleValueChange(index, { fromTime: newStart, toTime: newEnd });
        };
        this.handleMidDrag = function (event) {
            var isHeldDown = event.buttons === undefined ? event.which === 1 : event.buttons === 1;
            if (!isHeldDown) {
                _this.stopDrag();
                return;
            }
            var el = _this.draggingEl;
            if (!el) {
                return;
            }
            var index = parseInt(el.dataset.index);
            var delta = event.clientX - _this.lastX;
            var deltaPercent = (delta / el.parentElement.clientWidth) * 100;
            var deltaValue = (deltaPercent / 100) * _this.options.total;
            deltaValue = deltaValue - (deltaValue % _this.options.step);
            if (deltaValue - _this.dragBuffer < _this.options.step &&
                deltaValue - _this.dragBuffer > -_this.options.step) {
                return;
            }
            _this.dragBuffer = deltaValue;
            var newStart = _this.dragCapturedFrom + deltaValue;
            var newEnd = _this.dragCapturedTo + deltaValue;
            _this.handleValueChange(index, { fromTime: newStart, toTime: newEnd });
        };
    }
    return RangePicker;
}());



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SYW5nZVBpY2tlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9SYW5nZVBpY2tlci8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUEsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QiwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUJBQW1CLFNBQUksSUFBSSxTQUFJO0FBQy9CLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0EsY0FBYyxTQUFJLElBQUksU0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTSxnQkFBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1Qiw0QkFBNEIsc0JBQXNCO0FBQ2xEO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxVQUFVO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYixTQUFTLEVBQUU7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLFVBQVU7QUFDekY7QUFDQTtBQUNBLHVHQUF1RyxVQUFVO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxRQUFRLGdCQUFnQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywwQkFBMEI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFFBQVEsZ0JBQWdCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBCQUEwQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHFDQUFxQztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMscUNBQXFDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMscUNBQXFDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDc0IiLCJmaWxlIjoicmFuZ2VwaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX3JlYWQgPSAodGhpcyAmJiB0aGlzLl9fcmVhZCkgfHwgZnVuY3Rpb24gKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufTtcclxudmFyIF9fc3ByZWFkID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZCkgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufTtcclxudmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn07XHJcbnZhciBob3VycyA9IFtdO1xyXG5mb3IgKHZhciBpID0gMDsgaSA8PSAyNDsgaSsrKSB7XHJcbiAgICBob3Vycy5wdXNoKGkpO1xyXG59XHJcbnZhciBnZXRPZmZzZXQgPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgIHZhciBYID0gMDtcclxuICAgIHZhciBZID0gMDtcclxuICAgIHdoaWxlIChlbCAmJiAhaXNOYU4oZWwub2Zmc2V0TGVmdCkgJiYgIWlzTmFOKGVsLm9mZnNldFRvcCkpIHtcclxuICAgICAgICBYICs9IGVsLm9mZnNldExlZnQgLSBlbC5zY3JvbGxMZWZ0O1xyXG4gICAgICAgIFkgKz0gZWwub2Zmc2V0VG9wIC0gZWwuc2Nyb2xsVG9wO1xyXG4gICAgICAgIGVsID0gZWwub2Zmc2V0UGFyZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgdG9wOiBZLCBsZWZ0OiBYIH07XHJcbn07XHJcbnZhciBjb252ZXJ0ID0gZnVuY3Rpb24gKG4pIHtcclxuICAgIHZhciBob3VycyA9IChcIjBcIiArICgobiAvIDYwKSBeIDApICUgMjQpLnNsaWNlKC0yKTtcclxuICAgIHZhciBtaW51dGVzID0gKFwiMFwiICsgKG4gJSA2MCkpLnNsaWNlKC0yKTtcclxuICAgIHJldHVybiBob3VycyArIFwiOlwiICsgbWludXRlcztcclxufTtcclxudmFyIFJhbmdlUGlja2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmFuZ2VQaWNrZXIoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcclxuICAgICAgICAgICAgc3RlcDogMTUsXHJcbiAgICAgICAgICAgIHRvdGFsOiAxNDQwLFxyXG4gICAgICAgICAgICBtYXhSYW5nZXNBbW91bnQ6IDcsXHJcbiAgICAgICAgICAgIHNlcGFyYXRvcnM6IGhvdXJzLFxyXG4gICAgICAgICAgICBjb252ZXJ0RnVuYzogY29udmVydCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucmFuZ2VzID0gW107XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH07XHJcbiAgICAgICAgdGhpcy5kcmFnQnVmZmVyID0gMDtcclxuICAgICAgICB0aGlzLmxhc3RYID0gMDtcclxuICAgICAgICB0aGlzLmluaXRpYWxNb3VzZVggPSAwO1xyXG4gICAgICAgIHRoaXMubGFiZWwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucmFuZ2VFbHMgPSBbXTtcclxuICAgICAgICB0aGlzLmRyYWdDYXB0dXJlZEZyb20gPSAwO1xyXG4gICAgICAgIHRoaXMuZHJhZ0NhcHR1cmVkVG8gPSAwO1xyXG4gICAgICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBsYWJlbCwgdmFsdWVzLCBvbkNoYW5nZSwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMub3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBfdGhpcy5vcHRpb25zKSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMubGFiZWwgPSBsYWJlbDtcclxuICAgICAgICAgICAgX3RoaXMub25DaGFuZ2UgPSBvbkNoYW5nZTtcclxuICAgICAgICAgICAgX3RoaXMucmFuZ2VwaWNrZXJFbCA9IF90aGlzLmNyZWF0ZVJhbmdlcGlja2VyKGxhYmVsKTtcclxuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChfdGhpcy5yYW5nZXBpY2tlckVsKTtcclxuICAgICAgICAgICAgX3RoaXMuYm94RWxlbWVudCA9IF90aGlzLnJhbmdlcGlja2VyRWwucXVlcnlTZWxlY3RvcihcIi5zZWxlY3Rvci1ib3hcIik7XHJcbiAgICAgICAgICAgIF90aGlzLmJveEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIF90aGlzLmhhbmRsZUJveENsaWNrKTtcclxuICAgICAgICAgICAgX3RoaXMucmFuZ2VzID0gdmFsdWVzO1xyXG4gICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAocmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIHZhciByYW5nZUVsID0gX3RoaXMuY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmJveEVsZW1lbnQuYXBwZW5kQ2hpbGQocmFuZ2VFbCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yYW5nZUVscy5wdXNoKHJhbmdlRWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgX3RoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVJhbmdlcGlja2VyID0gZnVuY3Rpb24gKGxhYmVsKSB7XHJcbiAgICAgICAgICAgIHZhciByYW5nZXBpY2tlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgcmFuZ2VwaWNrZXJFbC5jbGFzc05hbWUgPSBcIlZhbHVlUmFuZ2VQaWNrZXJcIjtcclxuICAgICAgICAgICAgcmFuZ2VwaWNrZXJFbC5pbm5lckhUTUwgPSBcIlxcbiAgICAgIDxsYWJlbD5cIiArIGxhYmVsICsgXCI8L2xhYmVsPlxcbiAgICAgIDxkaXYgY2xhc3M9J291dGVyLWJveFwiICsgKF90aGlzLm9wdGlvbnMucmVhZE9ubHkgPyBcIiBkaXNhYmxlZFwiIDogXCJcIikgKyBcIic+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItYm94XFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyc1xcXCI+XFxuICAgICAgICAgICAgXCIgKyBfdGhpcy5vcHRpb25zLnNlcGFyYXRvcnNcclxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPSdoZWFkZXInPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoZWFkZXItbGFiZWxcXFwiPlwiICsgbGFiZWwgKyBcIjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XCI7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuam9pbihcIiBcIikgKyBcIlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VwYXJhdG9yc1xcXCI+XFxuICAgICAgICAgICAgXCIgKyBfdGhpcy5vcHRpb25zLnNlcGFyYXRvcnNcclxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPGRpdiBjbGFzcz0nc2VwYXJhdG9yJz48L2Rpdj5cIjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5qb2luKFwiIFwiKSArIFwiXFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYWRkZWQtYm94XFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VsZWN0b3ItYm94XFxcIj48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInBvcHVwXFxcIj5cXG4gICAgICAgIDxwPkZyb206PHNwYW4gY2xhc3M9XFxcImZyb20tdmFsdWVcXFwiPjwvc3Bhbj48L3A+XFxuICAgICAgICA8cD5Ubzo8c3BhbiBjbGFzcz1cXFwidG8tdmFsdWVcXFwiPjwvc3Bhbj48L3A+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4tcmVtb3ZlXFxcIj5SZW1vdmU8L2J1dHRvbj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICBcIjtcclxuICAgICAgICAgICAgcmFuZ2VwaWNrZXJFbC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1yZW1vdmVcIikub25wb2ludGVyZG93biA9IF90aGlzLmhhbmRsZVJlbW92ZURvd247XHJcbiAgICAgICAgICAgIHJhbmdlcGlja2VyRWwucXVlcnlTZWxlY3RvcihcIi5idG4tcmVtb3ZlXCIpLm9uY2xpY2sgPSBfdGhpcy5oYW5kbGVSZW1vdmVDbGljaztcclxuICAgICAgICAgICAgcmV0dXJuIHJhbmdlcGlja2VyRWw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVJhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmFuZ2VFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHJhbmdlRWwuY2xhc3NOYW1lID0gXCJSYW5nZVwiO1xyXG4gICAgICAgICAgICByYW5nZUVsLmRhdGFzZXQuaW5kZXggPSBfdGhpcy5yYW5nZUVscy5sZW5ndGgudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgcmFuZ2VFbC50YWJJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICByYW5nZUVsLm9uZm9jdXMgPSBfdGhpcy5oYW5kbGVSYW5nZUZvY3VzO1xyXG4gICAgICAgICAgICByYW5nZUVsLm9uYmx1ciA9IF90aGlzLmhhbmRsZVJhbmdlQmx1cjtcclxuICAgICAgICAgICAgcmFuZ2VFbC5pbm5lckhUTUwgPSBcIlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGFuZGxlc1xcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxlZnQtaGFuZGxlXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicmlnaHQtaGFuZGxlXFxcIj48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibGFiZWxzXFxcIj5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImxlZnRcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInJpZ2h0XFxcIj48L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICBcIjtcclxuICAgICAgICAgICAgdmFyIGxlZnRIYW5kbGUgPSByYW5nZUVsLnF1ZXJ5U2VsZWN0b3IoXCIubGVmdC1oYW5kbGVcIik7XHJcbiAgICAgICAgICAgIHZhciByaWdodEhhbmRsZSA9IHJhbmdlRWwucXVlcnlTZWxlY3RvcihcIi5yaWdodC1oYW5kbGVcIik7XHJcbiAgICAgICAgICAgIGxlZnRIYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIF90aGlzLmhhbmRsZUxlZnREcmFnU3RhcnQpO1xyXG4gICAgICAgICAgICByaWdodEhhbmRsZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgX3RoaXMuaGFuZGxlUmlnaHREcmFnU3RhcnQpO1xyXG4gICAgICAgICAgICByYW5nZUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBfdGhpcy5oYW5kbGVNaWREcmFnU3RhcnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmFuZ2VFbDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudG9nZ2xlUmVhZE9ubHkgPSBmdW5jdGlvbiAocmVhZE9ubHkpIHtcclxuICAgICAgICAgICAgX3RoaXMub3B0aW9ucy5yZWFkT25seSA9XHJcbiAgICAgICAgICAgICAgICByZWFkT25seSAhPT0gdW5kZWZpbmVkID8gcmVhZE9ubHkgOiAhX3RoaXMub3B0aW9ucy5yZWFkT25seTtcclxuICAgICAgICAgICAgdmFyIG91dGVyQm94ID0gX3RoaXMucmFuZ2VwaWNrZXJFbC5xdWVyeVNlbGVjdG9yKFwiLm91dGVyLWJveFwiKTtcclxuICAgICAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMucmVhZE9ubHkgJiYgIW91dGVyQm94LmNsYXNzTGlzdC5jb250YWlucyhcImRpc2FibGVkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRlckJveC5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIV90aGlzLm9wdGlvbnMucmVhZE9ubHkgJiZcclxuICAgICAgICAgICAgICAgIG91dGVyQm94LmNsYXNzTGlzdC5jb250YWlucyhcImRpc2FibGVkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRlckJveC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlVmFsdWVDaGFuZ2UgPSBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciBuZXdSYW5nZXMgPSBfX3NwcmVhZChfdGhpcy5yYW5nZXMpO1xyXG4gICAgICAgICAgICBuZXdSYW5nZXNbaW5kZXhdID0ge1xyXG4gICAgICAgICAgICAgICAgZnJvbVRpbWU6IE1hdGgubWF4KHZhbHVlLmZyb21UaW1lLCAwKSxcclxuICAgICAgICAgICAgICAgIHRvVGltZTogTWF0aC5taW4odmFsdWUudG9UaW1lLCBfdGhpcy5vcHRpb25zLnRvdGFsKSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgX3RoaXMuc2V0UmFuZ2VzKG5ld1Jhbmdlcyk7XHJcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZW1vdmVSYW5nZSA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZGVsZXRlZFJhbmdlO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmdlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlZFJhbmdlID0gdGhpcy5yYW5nZUVscy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkZWxldGVkUmFuZ2VbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWxldGVkUmFuZ2VbMF0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChkZWxldGVkUmFuZ2VbMF0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYW5nZUVscy5mb3JFYWNoKGZ1bmN0aW9uIChyYW5nZUVsLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlRWwuZGF0YXNldC5pbmRleCA9IGluZGV4LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSYW5nZVVwZGF0ZSA9IGZ1bmN0aW9uIChyYW5nZUVsKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KHJhbmdlRWwuZGF0YXNldC5pbmRleCk7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnJhbmdlc1tpbmRleF0sIGZyb21UaW1lID0gX2EuZnJvbVRpbWUsIHRvVGltZSA9IF9hLnRvVGltZTtcclxuICAgICAgICAgICAgcmFuZ2VFbC5zdHlsZS53aWR0aCA9XHJcbiAgICAgICAgICAgICAgICAoKHRvVGltZSAtIGZyb21UaW1lKSAqIDEwMCkgLyBfdGhpcy5vcHRpb25zLnRvdGFsICsgXCIlXCI7XHJcbiAgICAgICAgICAgIHJhbmdlRWwuc3R5bGUubGVmdCA9IChmcm9tVGltZSAqIDEwMCkgLyBfdGhpcy5vcHRpb25zLnRvdGFsICsgXCIlXCI7XHJcbiAgICAgICAgICAgIHJhbmdlRWwucXVlcnlTZWxlY3RvcihcIi5sYWJlbHMgLmxlZnRcIikuaW5uZXJIVE1MID0gX3RoaXMub3B0aW9ucy5jb252ZXJ0RnVuYyhmcm9tVGltZSk7XHJcbiAgICAgICAgICAgIHJhbmdlRWwucXVlcnlTZWxlY3RvcihcIi5sYWJlbHMgLnJpZ2h0XCIpLmlubmVySFRNTCA9IF90aGlzLm9wdGlvbnMuY29udmVydEZ1bmModG9UaW1lKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYWxsR29vZCA9IF90aGlzLmNoZWNrT3ZlcmxhcCgpO1xyXG4gICAgICAgICAgICBpZiAoYWxsR29vZCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2hlY2tEZWxldGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5yYW5nZUVscy5mb3JFYWNoKGZ1bmN0aW9uIChyYW5nZUVsKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVSYW5nZVVwZGF0ZShyYW5nZUVsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLm9uQ2hhbmdlKF90aGlzLnJhbmdlcyk7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5mb2N1c2VkUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnJhbmdlcGlja2VyRWwucXVlcnlTZWxlY3RvcihcIi5mcm9tLXZhbHVlXCIpLmlubmVySFRNTCA9IF90aGlzLmZvY3VzZWRSYW5nZS5xdWVyeVNlbGVjdG9yKFwiLmxhYmVscyAubGVmdFwiKS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yYW5nZXBpY2tlckVsLnF1ZXJ5U2VsZWN0b3IoXCIudG8tdmFsdWVcIikuaW5uZXJIVE1MID0gX3RoaXMuZm9jdXNlZFJhbmdlLnF1ZXJ5U2VsZWN0b3IoXCIubGFiZWxzIC5yaWdodFwiKS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0UmFuZ2VzID0gZnVuY3Rpb24gKHJhbmdlcykge1xyXG4gICAgICAgICAgICBfdGhpcy5yYW5nZXMgPSByYW5nZXM7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZUJveENsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKCFfdGhpcy5ib3hFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGRlbHRhID0gZS5jbGllbnRYIC0gZ2V0T2Zmc2V0KF90aGlzLmJveEVsZW1lbnQpLmxlZnQ7XHJcbiAgICAgICAgICAgIF90aGlzLmluaXRpYWxNb3VzZVggPSBlLmNsaWVudFg7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRTdGFydCA9IDA7XHJcbiAgICAgICAgICAgIGlmIChkZWx0YSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBkZWx0YVBlcmNlbnQgPSBkZWx0YSAvIF90aGlzLmJveEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRTdGFydCA9IF90aGlzLm9wdGlvbnMudG90YWwgKiBkZWx0YVBlcmNlbnQ7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRTdGFydCAtPSB0YXJnZXRTdGFydCAlIF90aGlzLm9wdGlvbnMuc3RlcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX3RoaXMucmFuZ2VzLmxlbmd0aCA8IF90aGlzLm9wdGlvbnMubWF4UmFuZ2VzQW1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmFuZ2VFbF8xID0gX3RoaXMuY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmJveEVsZW1lbnQuYXBwZW5kQ2hpbGQocmFuZ2VFbF8xKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnNldFJhbmdlcyhfX3NwcmVhZChfdGhpcy5yYW5nZXMsIFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21UaW1lOiBNYXRoLm1heCgwLCB0YXJnZXRTdGFydCAtIDQ1KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9UaW1lOiBNYXRoLm1pbih0YXJnZXRTdGFydCArIDE1LCBfdGhpcy5vcHRpb25zLnRvdGFsKSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSkpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZHJhZ2dpbmdFbCA9IHJhbmdlRWxfMTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlRWxfMS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yYW5nZUVscy5wdXNoKHJhbmdlRWxfMSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChfdGhpcy5kcmFnZ2luZ0VsLmRhdGFzZXQuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZHJhZ0NhcHR1cmVkRnJvbSA9IF90aGlzLnJhbmdlc1tpbmRleF0uZnJvbVRpbWU7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5kcmFnQ2FwdHVyZWRUbyA9IF90aGlzLnJhbmdlc1tpbmRleF0udG9UaW1lO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubGFzdFggPSBlLmNsaWVudFg7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5kcmFnQ2FwdHVyZWRGcm9tID0gX3RoaXMucmFuZ2VzW2luZGV4XS5mcm9tVGltZTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmRyYWdDYXB0dXJlZFRvID0gX3RoaXMucmFuZ2VzW2luZGV4XS50b1RpbWU7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50Lm9ucG9pbnRlcnVwID0gX3RoaXMuc3RvcERyYWc7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJtb3ZlID0gX3RoaXMuaGFuZGxlUmlnaHREcmFnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNoZWNrRGVsZXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5yYW5nZXMuZm9yRWFjaChmdW5jdGlvbiAocmFuZ2UsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgICAgICBpZiAoKChfYSA9IF90aGlzLmRyYWdnaW5nRWwpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kYXRhc2V0LmluZGV4KSA9PT0gaW5kZXgudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyYW5nZS50b1RpbWUgLSByYW5nZS5mcm9tVGltZSA8IF90aGlzLm9wdGlvbnMuc3RlcCAqIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZW1vdmVSYW5nZShpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zaGlmdERpcmVjdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jaGVja092ZXJsYXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlXzEsIF9hLCBlXzIsIF9iO1xyXG4gICAgICAgICAgICB2YXIgYWxsR29vZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfYyA9IF9fdmFsdWVzKF90aGlzLnJhbmdlcy5lbnRyaWVzKCkpLCBfZCA9IF9jLm5leHQoKTsgIV9kLmRvbmU7IF9kID0gX2MubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9lID0gX19yZWFkKF9kLnZhbHVlLCAyKSwga2V5MSA9IF9lWzBdLCByYW5nZTEgPSBfZVsxXTtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfZiA9IChlXzIgPSB2b2lkIDAsIF9fdmFsdWVzKF90aGlzLnJhbmdlcy5lbnRyaWVzKCkpKSwgX2cgPSBfZi5uZXh0KCk7ICFfZy5kb25lOyBfZyA9IF9mLm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9oID0gX19yZWFkKF9nLnZhbHVlLCAyKSwga2V5MiA9IF9oWzBdLCByYW5nZTIgPSBfaFsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkxICE9PSBrZXkyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVubW92ZWRLZXkgPSBfdGhpcy5kcmFnZ2luZ0VsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcGFyc2VJbnQoX3RoaXMuZHJhZ2dpbmdFbC5kYXRhc2V0LmluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJhbmdlMS5mcm9tVGltZSA8IHJhbmdlMi50b1RpbWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2UxLnRvVGltZSA+IHJhbmdlMi50b1RpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVubW92ZWRLZXkgPT09IGtleTIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNoaWZ0RGlyZWN0aW9uID0gXCJyaWdodFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlVmFsdWVDaGFuZ2Uoa2V5MSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvVGltZTogTWF0aC5taW4oX3RoaXMub3B0aW9ucy50b3RhbCwgcmFuZ2UxLnRvVGltZSArIHJhbmdlMi50b1RpbWUgLSByYW5nZTEuZnJvbVRpbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21UaW1lOiBNYXRoLm1heCgwLCByYW5nZTIudG9UaW1lKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHVubW92ZWRLZXkgPT09IGtleTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNoaWZ0RGlyZWN0aW9uID0gXCJsZWZ0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZShrZXkyLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9UaW1lOiBNYXRoLm1pbihfdGhpcy5vcHRpb25zLnRvdGFsLCByYW5nZTEuZnJvbVRpbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21UaW1lOiBNYXRoLm1heCgwLCByYW5nZTIuZnJvbVRpbWUgLSAocmFuZ2UyLnRvVGltZSAtIHJhbmdlMS5mcm9tVGltZSkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoX3RoaXMuc2hpZnREaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlVmFsdWVDaGFuZ2Uoa2V5MSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvVGltZTogTWF0aC5taW4oX3RoaXMub3B0aW9ucy50b3RhbCwgcmFuZ2UxLnRvVGltZSArIHJhbmdlMi50b1RpbWUgLSByYW5nZTEuZnJvbVRpbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21UaW1lOiBNYXRoLm1heCgwLCByYW5nZTIudG9UaW1lKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlVmFsdWVDaGFuZ2Uoa2V5Miwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvVGltZTogTWF0aC5taW4oX3RoaXMub3B0aW9ucy50b3RhbCwgcmFuZ2UxLmZyb21UaW1lKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tVGltZTogTWF0aC5tYXgoMCwgcmFuZ2UyLmZyb21UaW1lIC0gKHJhbmdlMi50b1RpbWUgLSByYW5nZTEuZnJvbVRpbWUpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbEdvb2QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cclxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfZyAmJiAhX2cuZG9uZSAmJiAoX2IgPSBfZi5yZXR1cm4pKSBfYi5jYWxsKF9mKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XHJcbiAgICAgICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX2QgJiYgIV9kLmRvbmUgJiYgKF9hID0gX2MucmV0dXJuKSkgX2EuY2FsbChfYyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdGhpcy5yYW5nZXMuZm9yRWFjaCgocmFuZ2UxLCBrZXkxKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgdGhpcy5yYW5nZXMuZm9yRWFjaCgocmFuZ2UyLCBrZXkyKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgfSk7XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhbGxHb29kKTtcclxuICAgICAgICAgICAgcmV0dXJuIGFsbEdvb2Q7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZVJlbW92ZURvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5mb2N1c2VkUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmZvY3VzZWRSYW5nZS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZVJlbW92ZUNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKF90aGlzLmZvY3VzZWRSYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlkeCA9IF90aGlzLmZvY3VzZWRSYW5nZS5kYXRhc2V0LmluZGV4O1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucmVtb3ZlUmFuZ2UoaWR4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSYW5nZUZvY3VzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMucG9wdXBDbG9zZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5wb3B1cENsb3NlVGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuZm9jdXNlZFJhbmdlID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIChfYiA9IChfYSA9IF90aGlzLnJhbmdlcGlja2VyRWwpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2xhc3NMaXN0LnJlbW92ZShcImNsb3NpbmdcIik7XHJcbiAgICAgICAgICAgIChfZCA9IChfYyA9IF90aGlzLnJhbmdlcGlja2VyRWwpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSYW5nZUJsdXIgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBfdGhpcy5mb2N1c2VkUmFuZ2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuZm9jdXNlZFJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnBvcHVwQ2xvc2VUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5wb3B1cENsb3NlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IF90aGlzLnJhbmdlcGlja2VyRWwpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2xhc3NMaXN0LmFkZChcImNsb3NpbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucG9wdXBDbG9zZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoX2IgPSAoX2EgPSBfdGhpcy5yYW5nZXBpY2tlckVsKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNsYXNzTGlzdC5yZW1vdmUoXCJjbG9zaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoX2QgPSAoX2MgPSBfdGhpcy5yYW5nZXBpY2tlckVsKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDQwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zdG9wRHJhZyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmRyYWdCdWZmZXIgPSAwO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJtb3ZlID0gbnVsbDtcclxuICAgICAgICAgICAgX3RoaXMuZHJhZ2dpbmdFbCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgX3RoaXMuY2hlY2tEZWxldGUoKTtcclxuICAgICAgICAgICAgX3RoaXMub25DaGFuZ2UoX3RoaXMucmFuZ2VzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTGVmdERyYWdTdGFydCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgX3RoaXMuZHJhZ2dpbmdFbCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudFxyXG4gICAgICAgICAgICAgICAgLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIF90aGlzLmxhc3RYID0gZXZlbnQuY2xpZW50WDtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoX3RoaXMuZHJhZ2dpbmdFbC5kYXRhc2V0LmluZGV4KTtcclxuICAgICAgICAgICAgX3RoaXMuZHJhZ0NhcHR1cmVkRnJvbSA9IF90aGlzLnJhbmdlc1tpbmRleF0uZnJvbVRpbWU7XHJcbiAgICAgICAgICAgIF90aGlzLmRyYWdDYXB0dXJlZFRvID0gX3RoaXMucmFuZ2VzW2luZGV4XS50b1RpbWU7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ucG9pbnRlcnVwID0gX3RoaXMuc3RvcERyYWc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ucG9pbnRlcm1vdmUgPSBfdGhpcy5oYW5kbGVMZWZ0RHJhZztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUmlnaHREcmFnU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIF90aGlzLmRyYWdnaW5nRWwgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnRcclxuICAgICAgICAgICAgICAgIC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICBfdGhpcy5sYXN0WCA9IGV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KF90aGlzLmRyYWdnaW5nRWwuZGF0YXNldC5pbmRleCk7XHJcbiAgICAgICAgICAgIF90aGlzLmRyYWdDYXB0dXJlZEZyb20gPSBfdGhpcy5yYW5nZXNbaW5kZXhdLmZyb21UaW1lO1xyXG4gICAgICAgICAgICBfdGhpcy5kcmFnQ2FwdHVyZWRUbyA9IF90aGlzLnJhbmdlc1tpbmRleF0udG9UaW1lO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJ1cCA9IF90aGlzLnN0b3BEcmFnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJtb3ZlID0gX3RoaXMuaGFuZGxlUmlnaHREcmFnO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVNaWREcmFnU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIF90aGlzLmRyYWdnaW5nRWwgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgICAgICBfdGhpcy5sYXN0WCA9IGV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KF90aGlzLmRyYWdnaW5nRWwuZGF0YXNldC5pbmRleCk7XHJcbiAgICAgICAgICAgIF90aGlzLmRyYWdDYXB0dXJlZEZyb20gPSBfdGhpcy5yYW5nZXNbaW5kZXhdLmZyb21UaW1lO1xyXG4gICAgICAgICAgICBfdGhpcy5kcmFnQ2FwdHVyZWRUbyA9IF90aGlzLnJhbmdlc1tpbmRleF0udG9UaW1lO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJ1cCA9IF90aGlzLnN0b3BEcmFnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJtb3ZlID0gX3RoaXMuaGFuZGxlTWlkRHJhZztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTGVmdERyYWcgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIGlzSGVsZERvd24gPSBldmVudC5idXR0b25zID09PSB1bmRlZmluZWQgPyBldmVudC53aGljaCA9PT0gMSA6IGV2ZW50LmJ1dHRvbnMgPT09IDE7XHJcbiAgICAgICAgICAgIGlmICghaXNIZWxkRG93bikge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc3RvcERyYWcoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZWwgPSBfdGhpcy5kcmFnZ2luZ0VsO1xyXG4gICAgICAgICAgICBpZiAoIWVsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoZWwuZGF0YXNldC5pbmRleCk7XHJcbiAgICAgICAgICAgIHZhciBkZWx0YSA9IGV2ZW50LmNsaWVudFggLSBfdGhpcy5sYXN0WDtcclxuICAgICAgICAgICAgdmFyIGRlbHRhUGVyY2VudCA9IChkZWx0YSAvIGVsLnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGgpICogMTAwO1xyXG4gICAgICAgICAgICB2YXIgZGVsdGFWYWx1ZSA9IChkZWx0YVBlcmNlbnQgLyAxMDApICogX3RoaXMub3B0aW9ucy50b3RhbDtcclxuICAgICAgICAgICAgZGVsdGFWYWx1ZSA9IGRlbHRhVmFsdWUgLSAoZGVsdGFWYWx1ZSAlIF90aGlzLm9wdGlvbnMuc3RlcCk7XHJcbiAgICAgICAgICAgIGlmIChkZWx0YVZhbHVlIC0gX3RoaXMuZHJhZ0J1ZmZlciA8IF90aGlzLm9wdGlvbnMuc3RlcCAmJlxyXG4gICAgICAgICAgICAgICAgZGVsdGFWYWx1ZSAtIF90aGlzLmRyYWdCdWZmZXIgPiAtX3RoaXMub3B0aW9ucy5zdGVwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuZHJhZ0J1ZmZlciA9IGRlbHRhVmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBuZXdTdGFydCA9IF90aGlzLmRyYWdDYXB0dXJlZEZyb207XHJcbiAgICAgICAgICAgIHZhciBuZXdFbmQgPSBfdGhpcy5kcmFnQ2FwdHVyZWRUbztcclxuICAgICAgICAgICAgaWYgKG5ld0VuZCAtIChuZXdTdGFydCArIGRlbHRhVmFsdWUpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgbmV3U3RhcnQgPSBuZXdFbmQ7XHJcbiAgICAgICAgICAgICAgICBuZXdFbmQgPSBuZXdFbmQgKyBkZWx0YVZhbHVlIC0gKG5ld0VuZCAtIF90aGlzLmRyYWdDYXB0dXJlZEZyb20pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3U3RhcnQgKz0gZGVsdGFWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZShpbmRleCwgeyBmcm9tVGltZTogbmV3U3RhcnQsIHRvVGltZTogbmV3RW5kIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSaWdodERyYWcgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIGlzSGVsZERvd24gPSBldmVudC5idXR0b25zID09PSB1bmRlZmluZWQgPyBldmVudC53aGljaCA9PT0gMSA6IGV2ZW50LmJ1dHRvbnMgPT09IDE7XHJcbiAgICAgICAgICAgIGlmICghaXNIZWxkRG93bikge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc3RvcERyYWcoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZWwgPSBfdGhpcy5kcmFnZ2luZ0VsO1xyXG4gICAgICAgICAgICBpZiAoIWVsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoZWwuZGF0YXNldC5pbmRleCk7XHJcbiAgICAgICAgICAgIHZhciBkZWx0YSA9IGV2ZW50LmNsaWVudFggLSBfdGhpcy5sYXN0WDtcclxuICAgICAgICAgICAgdmFyIGRlbHRhUGVyY2VudCA9IChkZWx0YSAvIGVsLnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGgpICogMTAwO1xyXG4gICAgICAgICAgICB2YXIgZGVsdGFWYWx1ZSA9IChkZWx0YVBlcmNlbnQgLyAxMDApICogX3RoaXMub3B0aW9ucy50b3RhbDtcclxuICAgICAgICAgICAgZGVsdGFWYWx1ZSA9IGRlbHRhVmFsdWUgLSAoZGVsdGFWYWx1ZSAlIF90aGlzLm9wdGlvbnMuc3RlcCk7XHJcbiAgICAgICAgICAgIGlmIChkZWx0YVZhbHVlIC0gX3RoaXMuZHJhZ0J1ZmZlciA8IF90aGlzLm9wdGlvbnMuc3RlcCAmJlxyXG4gICAgICAgICAgICAgICAgZGVsdGFWYWx1ZSAtIF90aGlzLmRyYWdCdWZmZXIgPiAtX3RoaXMub3B0aW9ucy5zdGVwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuZHJhZ0J1ZmZlciA9IGRlbHRhVmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBuZXdTdGFydCA9IF90aGlzLmRyYWdDYXB0dXJlZEZyb207XHJcbiAgICAgICAgICAgIHZhciBuZXdFbmQgPSBfdGhpcy5kcmFnQ2FwdHVyZWRUbztcclxuICAgICAgICAgICAgaWYgKG5ld0VuZCArIGRlbHRhVmFsdWUgLSBuZXdTdGFydCA8IDApIHtcclxuICAgICAgICAgICAgICAgIG5ld1N0YXJ0ID0gbmV3U3RhcnQgKyBkZWx0YVZhbHVlIC0gKG5ld1N0YXJ0IC0gbmV3RW5kKTtcclxuICAgICAgICAgICAgICAgIG5ld0VuZCA9IF90aGlzLmRyYWdDYXB0dXJlZEZyb207XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdFbmQgKz0gZGVsdGFWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZShpbmRleCwgeyBmcm9tVGltZTogbmV3U3RhcnQsIHRvVGltZTogbmV3RW5kIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVNaWREcmFnID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBpc0hlbGREb3duID0gZXZlbnQuYnV0dG9ucyA9PT0gdW5kZWZpbmVkID8gZXZlbnQud2hpY2ggPT09IDEgOiBldmVudC5idXR0b25zID09PSAxO1xyXG4gICAgICAgICAgICBpZiAoIWlzSGVsZERvd24pIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnN0b3BEcmFnKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGVsID0gX3RoaXMuZHJhZ2dpbmdFbDtcclxuICAgICAgICAgICAgaWYgKCFlbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KGVsLmRhdGFzZXQuaW5kZXgpO1xyXG4gICAgICAgICAgICB2YXIgZGVsdGEgPSBldmVudC5jbGllbnRYIC0gX3RoaXMubGFzdFg7XHJcbiAgICAgICAgICAgIHZhciBkZWx0YVBlcmNlbnQgPSAoZGVsdGEgLyBlbC5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoKSAqIDEwMDtcclxuICAgICAgICAgICAgdmFyIGRlbHRhVmFsdWUgPSAoZGVsdGFQZXJjZW50IC8gMTAwKSAqIF90aGlzLm9wdGlvbnMudG90YWw7XHJcbiAgICAgICAgICAgIGRlbHRhVmFsdWUgPSBkZWx0YVZhbHVlIC0gKGRlbHRhVmFsdWUgJSBfdGhpcy5vcHRpb25zLnN0ZXApO1xyXG4gICAgICAgICAgICBpZiAoZGVsdGFWYWx1ZSAtIF90aGlzLmRyYWdCdWZmZXIgPCBfdGhpcy5vcHRpb25zLnN0ZXAgJiZcclxuICAgICAgICAgICAgICAgIGRlbHRhVmFsdWUgLSBfdGhpcy5kcmFnQnVmZmVyID4gLV90aGlzLm9wdGlvbnMuc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLmRyYWdCdWZmZXIgPSBkZWx0YVZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgbmV3U3RhcnQgPSBfdGhpcy5kcmFnQ2FwdHVyZWRGcm9tICsgZGVsdGFWYWx1ZTtcclxuICAgICAgICAgICAgdmFyIG5ld0VuZCA9IF90aGlzLmRyYWdDYXB0dXJlZFRvICsgZGVsdGFWYWx1ZTtcclxuICAgICAgICAgICAgX3RoaXMuaGFuZGxlVmFsdWVDaGFuZ2UoaW5kZXgsIHsgZnJvbVRpbWU6IG5ld1N0YXJ0LCB0b1RpbWU6IG5ld0VuZCB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJhbmdlUGlja2VyO1xyXG59KCkpO1xyXG5leHBvcnQgeyBSYW5nZVBpY2tlciB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9