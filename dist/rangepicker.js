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
                .join(" ") + "\n          </div>\n        </div>\n        <div class=\"padded-box\">\n          <div class=\"selector-box\"></div>\n        </div>\n      </div>\n      <div class=\"popup-track\">\n        <div class=\"popup\">\n          <p>From:<span class=\"from-value\"></span></p>\n          <p>To:<span class=\"to-value\"></span></p>\n          <button class=\"btn-remove\">Remove</button>\n        </div>\n        <div class=\"arrow\"></div>\n      </div>\n      ";
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
            var popup = _this.rangepickerEl.querySelector(".popup");
            popup.classList.remove("transition");
            var newRanges = __spread(_this.ranges);
            newRanges[index] = {
                fromTime: Math.max(value.fromTime, 0),
                toTime: Math.min(value.toTime, _this.options.total),
            };
            var overlap = true;
            var _loop_1 = function () {
                var isOverlapping = false;
                newRanges.forEach(function (range, i) {
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
            };
            while (overlap) {
                _loop_1();
            }
            _this.setRanges(newRanges);
            _this.update();
        };
        this.removeRange = function (index) { return __awaiter(_this, void 0, void 0, function () {
            var deletedRange;
            return __generator(this, function (_a) {
                this.ranges.splice(index, 1);
                deletedRange = this.rangeEls.splice(index, 1);
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
            if (rangeEl.clientWidth < 70) {
                rangeEl.querySelector(".labels .right").style.opacity = 0;
            }
            else {
                rangeEl.querySelector(".labels .right").style.opacity = 1;
            }
            if (rangeEl.clientWidth < 30) {
                rangeEl.querySelector(".labels .left").style.opacity = 0;
            }
            else {
                rangeEl.querySelector(".labels .left").style.opacity = 1;
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
                var newRanges = __spread(_this.ranges);
                var value_1 = {
                    fromTime: Math.max(0, targetStart - 45),
                    toTime: Math.min(targetStart + 15, _this.options.total),
                };
                var overlap = true;
                var _loop_2 = function () {
                    var isOverlapping = false;
                    newRanges.forEach(function (range, i) {
                        if (i === index_1) {
                            return;
                        }
                        if (value_1.fromTime < range.toTime && value_1.toTime > range.toTime) {
                            isOverlapping = true;
                            range.toTime = value_1.fromTime;
                        }
                        if (value_1.toTime > range.fromTime && value_1.fromTime < range.toTime) {
                            isOverlapping = true;
                            range.fromTime = value_1.toTime;
                        }
                    });
                    if (!isOverlapping) {
                        overlap = false;
                    }
                };
                while (overlap) {
                    _loop_2();
                }
                newRanges.push(value_1);
                _this.setRanges(newRanges);
                _this.draggingEl = rangeEl_1;
                setTimeout(function () {
                    rangeEl_1.focus();
                }, 0);
                _this.rangeEls.push(rangeEl_1);
                var index_1 = parseInt(_this.draggingEl.dataset.index);
                _this.dragCapturedFrom = _this.ranges[index_1].fromTime;
                _this.dragCapturedTo = _this.ranges[index_1].toTime;
                _this.lastX = e.clientX;
                _this.dragCapturedFrom = _this.ranges[index_1].fromTime;
                _this.dragCapturedTo = _this.ranges[index_1].toTime;
                _this.update();
                document.onpointerup = _this.stopDrag;
                document.onpointermove = _this.handleRightDrag;
            }
        };
        this.checkDelete = function () {
            var e_1, _a;
            try {
                for (var _b = __values(_this.ranges.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), index = _d[0], range = _d[1];
                    var isDragEl = _this.draggingEl &&
                        _this.draggingEl.dataset.index === index.toString();
                    if (!isDragEl) {
                        if (range.toTime - range.fromTime < _this.options.step ||
                            range.fromTime > _this.options.total ||
                            range.toTime < _this.options.step) {
                            _this.removeRange(index);
                            _this.checkDelete();
                            return;
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        this.wait = function () {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve();
                }, 40);
            });
        };
        this.update = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.checkDelete();
                this.rangeEls.forEach(function (rangeEl) {
                    _this.handleRangeUpdate(rangeEl);
                });
                this.onChange(this.ranges);
                if (this.focusedRange) {
                    this.rangepickerEl.querySelector(".from-value").innerHTML = this.focusedRange.querySelector(".labels .left").innerHTML;
                    this.rangepickerEl.querySelector(".to-value").innerHTML = this.focusedRange.querySelector(".labels .right").innerHTML;
                    this.handlePopupPosition();
                }
                return [2 /*return*/];
            });
        }); };
        this.handlePopupPosition = function () {
            if (!_this.focusedRange) {
                return;
            }
            var popup = _this.rangepickerEl.querySelector(".popup");
            var popupArrow = _this.rangepickerEl.querySelector(".arrow");
            var popupTrack = _this.boxElement;
            var targetPos = _this.focusedRange.offsetLeft + _this.focusedRange.clientWidth / 2;
            var minPos = popup.clientWidth / 2 - 12;
            var maxPos = popupTrack.clientWidth - popup.clientWidth / 2 + 12;
            popup.style.left = Math.min(Math.max(minPos, targetPos), maxPos) + "px";
            popupArrow.style.left = Math.min(targetPos, popupTrack.clientWidth) + "px";
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
            (_b = (_a = _this.rangepickerEl) === null || _a === void 0 ? void 0 : _a.querySelector(".popup-track")) === null || _b === void 0 ? void 0 : _b.classList.remove("closing");
            (_d = (_c = _this.rangepickerEl) === null || _c === void 0 ? void 0 : _c.querySelector(".popup-track")) === null || _d === void 0 ? void 0 : _d.classList.add("show");
            var popup = _this.rangepickerEl.querySelector(".popup");
            setTimeout(function () {
                popup.classList.remove("transition");
            }, 150);
            _this.update();
        };
        this.handleRangeBlur = function (e) {
            var popup = _this.rangepickerEl.querySelector(".popup");
            popup.classList.add("transition");
            _this.focusedRange = undefined;
            setTimeout(function () {
                var _a, _b;
                if (!_this.focusedRange) {
                    if (_this.popupCloseTimeout) {
                        clearTimeout(_this.popupCloseTimeout);
                    }
                    (_b = (_a = _this.rangepickerEl) === null || _a === void 0 ? void 0 : _a.querySelector(".popup-track")) === null || _b === void 0 ? void 0 : _b.classList.add("closing");
                    _this.popupCloseTimeout = setTimeout(function () {
                        var _a, _b, _c, _d;
                        (_b = (_a = _this.rangepickerEl) === null || _a === void 0 ? void 0 : _a.querySelector(".popup-track")) === null || _b === void 0 ? void 0 : _b.classList.remove("closing");
                        (_d = (_c = _this.rangepickerEl) === null || _c === void 0 ? void 0 : _c.querySelector(".popup-track")) === null || _d === void 0 ? void 0 : _d.classList.remove("show");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SYW5nZVBpY2tlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9SYW5nZVBpY2tlci8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUEsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QiwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUJBQW1CLFNBQUksSUFBSSxTQUFJO0FBQy9CLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0EsY0FBYyxTQUFJLElBQUksU0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTSxnQkFBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1Qiw0QkFBNEIsc0JBQXNCO0FBQ2xEO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxVQUFVO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2IsU0FBUyxFQUFFO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLFVBQVU7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixRQUFRLGdCQUFnQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwwQkFBMEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVMsRUFBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxxQ0FBcUM7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHFDQUFxQztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHFDQUFxQztBQUNqRjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ3NCIiwiZmlsZSI6InJhbmdlcGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn07XHJcbnZhciBfX3NwcmVhZCA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWQpIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn07XHJcbnZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59O1xyXG52YXIgaG91cnMgPSBbXTtcclxuZm9yICh2YXIgaSA9IDA7IGkgPD0gMjQ7IGkrKykge1xyXG4gICAgaG91cnMucHVzaChpKTtcclxufVxyXG52YXIgZ2V0T2Zmc2V0ID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgICB2YXIgWCA9IDA7XHJcbiAgICB2YXIgWSA9IDA7XHJcbiAgICB3aGlsZSAoZWwgJiYgIWlzTmFOKGVsLm9mZnNldExlZnQpICYmICFpc05hTihlbC5vZmZzZXRUb3ApKSB7XHJcbiAgICAgICAgWCArPSBlbC5vZmZzZXRMZWZ0IC0gZWwuc2Nyb2xsTGVmdDtcclxuICAgICAgICBZICs9IGVsLm9mZnNldFRvcCAtIGVsLnNjcm9sbFRvcDtcclxuICAgICAgICBlbCA9IGVsLm9mZnNldFBhcmVudDtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHRvcDogWSwgbGVmdDogWCB9O1xyXG59O1xyXG52YXIgY29udmVydCA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICB2YXIgaG91cnMgPSAoXCIwXCIgKyAoKG4gLyA2MCkgXiAwKSAlIDI0KS5zbGljZSgtMik7XHJcbiAgICB2YXIgbWludXRlcyA9IChcIjBcIiArIChuICUgNjApKS5zbGljZSgtMik7XHJcbiAgICByZXR1cm4gaG91cnMgKyBcIjpcIiArIG1pbnV0ZXM7XHJcbn07XHJcbnZhciBSYW5nZVBpY2tlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJhbmdlUGlja2VyKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgICAgICAgICByZWFkT25seTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN0ZXA6IDE1LFxyXG4gICAgICAgICAgICB0b3RhbDogMTQ0MCxcclxuICAgICAgICAgICAgbWF4UmFuZ2VzQW1vdW50OiA3LFxyXG4gICAgICAgICAgICBzZXBhcmF0b3JzOiBob3VycyxcclxuICAgICAgICAgICAgY29udmVydEZ1bmM6IGNvbnZlcnQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJhbmdlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9O1xyXG4gICAgICAgIHRoaXMuZHJhZ0J1ZmZlciA9IDA7XHJcbiAgICAgICAgdGhpcy5sYXN0WCA9IDA7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsTW91c2VYID0gMDtcclxuICAgICAgICB0aGlzLmxhYmVsID0gXCJcIjtcclxuICAgICAgICB0aGlzLnJhbmdlRWxzID0gW107XHJcbiAgICAgICAgdGhpcy5kcmFnQ2FwdHVyZWRGcm9tID0gMDtcclxuICAgICAgICB0aGlzLmRyYWdDYXB0dXJlZFRvID0gMDtcclxuICAgICAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoZWxlbWVudCwgbGFiZWwsIHZhbHVlcywgb25DaGFuZ2UsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLm9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgX3RoaXMub3B0aW9ucyksIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLmxhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgICAgIF90aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2U7XHJcbiAgICAgICAgICAgIF90aGlzLnJhbmdlcGlja2VyRWwgPSBfdGhpcy5jcmVhdGVSYW5nZXBpY2tlcihsYWJlbCk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoX3RoaXMucmFuZ2VwaWNrZXJFbCk7XHJcbiAgICAgICAgICAgIF90aGlzLmJveEVsZW1lbnQgPSBfdGhpcy5yYW5nZXBpY2tlckVsLnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0b3ItYm94XCIpO1xyXG4gICAgICAgICAgICBfdGhpcy5ib3hFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBfdGhpcy5oYW5kbGVCb3hDbGljayk7XHJcbiAgICAgICAgICAgIF90aGlzLnJhbmdlcyA9IHZhbHVlcztcclxuICAgICAgICAgICAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmFuZ2VFbCA9IF90aGlzLmNyZWF0ZVJhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5ib3hFbGVtZW50LmFwcGVuZENoaWxkKHJhbmdlRWwpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucmFuZ2VFbHMucHVzaChyYW5nZUVsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jcmVhdGVSYW5nZXBpY2tlciA9IGZ1bmN0aW9uIChsYWJlbCkge1xyXG4gICAgICAgICAgICB2YXIgcmFuZ2VwaWNrZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHJhbmdlcGlja2VyRWwuY2xhc3NOYW1lID0gXCJWYWx1ZVJhbmdlUGlja2VyXCI7XHJcbiAgICAgICAgICAgIHJhbmdlcGlja2VyRWwuaW5uZXJIVE1MID0gXCJcXG4gICAgICA8bGFiZWw+XCIgKyBsYWJlbCArIFwiPC9sYWJlbD5cXG4gICAgICA8ZGl2IGNsYXNzPSdvdXRlci1ib3hcIiArIChfdGhpcy5vcHRpb25zLnJlYWRPbmx5ID8gXCIgZGlzYWJsZWRcIiA6IFwiXCIpICsgXCInPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWJveFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlcnNcXFwiPlxcbiAgICAgICAgICAgIFwiICsgX3RoaXMub3B0aW9ucy5zZXBhcmF0b3JzXHJcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChsYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPGRpdiBjbGFzcz0naGVhZGVyJz5cXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsXFxcIj5cIiArIGxhYmVsICsgXCI8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlwiO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmpvaW4oXCIgXCIpICsgXCJcXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlcGFyYXRvcnNcXFwiPlxcbiAgICAgICAgICAgIFwiICsgX3RoaXMub3B0aW9ucy5zZXBhcmF0b3JzXHJcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIjxkaXYgY2xhc3M9J3NlcGFyYXRvcic+PC9kaXY+XCI7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuam9pbihcIiBcIikgKyBcIlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFkZGVkLWJveFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlbGVjdG9yLWJveFxcXCI+PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwb3B1cC10cmFja1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwb3B1cFxcXCI+XFxuICAgICAgICAgIDxwPkZyb206PHNwYW4gY2xhc3M9XFxcImZyb20tdmFsdWVcXFwiPjwvc3Bhbj48L3A+XFxuICAgICAgICAgIDxwPlRvOjxzcGFuIGNsYXNzPVxcXCJ0by12YWx1ZVxcXCI+PC9zcGFuPjwvcD5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuLXJlbW92ZVxcXCI+UmVtb3ZlPC9idXR0b24+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFycm93XFxcIj48L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICBcIjtcclxuICAgICAgICAgICAgcmFuZ2VwaWNrZXJFbC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1yZW1vdmVcIikub25wb2ludGVyZG93biA9IF90aGlzLmhhbmRsZVJlbW92ZURvd247XHJcbiAgICAgICAgICAgIHJhbmdlcGlja2VyRWwucXVlcnlTZWxlY3RvcihcIi5idG4tcmVtb3ZlXCIpLm9uY2xpY2sgPSBfdGhpcy5oYW5kbGVSZW1vdmVDbGljaztcclxuICAgICAgICAgICAgcmV0dXJuIHJhbmdlcGlja2VyRWw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVJhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmFuZ2VFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHJhbmdlRWwuY2xhc3NOYW1lID0gXCJSYW5nZVwiO1xyXG4gICAgICAgICAgICByYW5nZUVsLmRhdGFzZXQuaW5kZXggPSBfdGhpcy5yYW5nZUVscy5sZW5ndGgudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgcmFuZ2VFbC50YWJJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICByYW5nZUVsLm9uZm9jdXMgPSBfdGhpcy5oYW5kbGVSYW5nZUZvY3VzO1xyXG4gICAgICAgICAgICByYW5nZUVsLm9uYmx1ciA9IF90aGlzLmhhbmRsZVJhbmdlQmx1cjtcclxuICAgICAgICAgICAgcmFuZ2VFbC5pbm5lckhUTUwgPSBcIlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGFuZGxlc1xcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxlZnQtaGFuZGxlXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicmlnaHQtaGFuZGxlXFxcIj48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibGFiZWxzXFxcIj5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImxlZnRcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInJpZ2h0XFxcIj48L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICBcIjtcclxuICAgICAgICAgICAgdmFyIGxlZnRIYW5kbGUgPSByYW5nZUVsLnF1ZXJ5U2VsZWN0b3IoXCIubGVmdC1oYW5kbGVcIik7XHJcbiAgICAgICAgICAgIHZhciByaWdodEhhbmRsZSA9IHJhbmdlRWwucXVlcnlTZWxlY3RvcihcIi5yaWdodC1oYW5kbGVcIik7XHJcbiAgICAgICAgICAgIGxlZnRIYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIF90aGlzLmhhbmRsZUxlZnREcmFnU3RhcnQpO1xyXG4gICAgICAgICAgICByaWdodEhhbmRsZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgX3RoaXMuaGFuZGxlUmlnaHREcmFnU3RhcnQpO1xyXG4gICAgICAgICAgICByYW5nZUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBfdGhpcy5oYW5kbGVNaWREcmFnU3RhcnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmFuZ2VFbDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudG9nZ2xlUmVhZE9ubHkgPSBmdW5jdGlvbiAocmVhZE9ubHkpIHtcclxuICAgICAgICAgICAgX3RoaXMub3B0aW9ucy5yZWFkT25seSA9XHJcbiAgICAgICAgICAgICAgICByZWFkT25seSAhPT0gdW5kZWZpbmVkID8gcmVhZE9ubHkgOiAhX3RoaXMub3B0aW9ucy5yZWFkT25seTtcclxuICAgICAgICAgICAgdmFyIG91dGVyQm94ID0gX3RoaXMucmFuZ2VwaWNrZXJFbC5xdWVyeVNlbGVjdG9yKFwiLm91dGVyLWJveFwiKTtcclxuICAgICAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMucmVhZE9ubHkgJiYgIW91dGVyQm94LmNsYXNzTGlzdC5jb250YWlucyhcImRpc2FibGVkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRlckJveC5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIV90aGlzLm9wdGlvbnMucmVhZE9ubHkgJiZcclxuICAgICAgICAgICAgICAgIG91dGVyQm94LmNsYXNzTGlzdC5jb250YWlucyhcImRpc2FibGVkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRlckJveC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlVmFsdWVDaGFuZ2UgPSBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cCA9IF90aGlzLnJhbmdlcGlja2VyRWwucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKTtcclxuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcInRyYW5zaXRpb25cIik7XHJcbiAgICAgICAgICAgIHZhciBuZXdSYW5nZXMgPSBfX3NwcmVhZChfdGhpcy5yYW5nZXMpO1xyXG4gICAgICAgICAgICBuZXdSYW5nZXNbaW5kZXhdID0ge1xyXG4gICAgICAgICAgICAgICAgZnJvbVRpbWU6IE1hdGgubWF4KHZhbHVlLmZyb21UaW1lLCAwKSxcclxuICAgICAgICAgICAgICAgIHRvVGltZTogTWF0aC5taW4odmFsdWUudG9UaW1lLCBfdGhpcy5vcHRpb25zLnRvdGFsKSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIG92ZXJsYXAgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpc092ZXJsYXBwaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBuZXdSYW5nZXMuZm9yRWFjaChmdW5jdGlvbiAocmFuZ2UsIGkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUuZnJvbVRpbWUgPCByYW5nZS50b1RpbWUgJiYgdmFsdWUudG9UaW1lID4gcmFuZ2UudG9UaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzT3ZlcmxhcHBpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZS50b1RpbWUgPSB2YWx1ZS5mcm9tVGltZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLnRvVGltZSA+IHJhbmdlLmZyb21UaW1lICYmIHZhbHVlLmZyb21UaW1lIDwgcmFuZ2UudG9UaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzT3ZlcmxhcHBpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZS5mcm9tVGltZSA9IHZhbHVlLnRvVGltZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmICghaXNPdmVybGFwcGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgd2hpbGUgKG92ZXJsYXApIHtcclxuICAgICAgICAgICAgICAgIF9sb29wXzEoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5zZXRSYW5nZXMobmV3UmFuZ2VzKTtcclxuICAgICAgICAgICAgX3RoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJlbW92ZVJhbmdlID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBkZWxldGVkUmFuZ2U7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmFuZ2VzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVkUmFuZ2UgPSB0aGlzLnJhbmdlRWxzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVkUmFuZ2VbMF0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChkZWxldGVkUmFuZ2VbMF0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYW5nZUVscy5mb3JFYWNoKGZ1bmN0aW9uIChyYW5nZUVsLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlRWwuZGF0YXNldC5pbmRleCA9IGluZGV4LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSYW5nZVVwZGF0ZSA9IGZ1bmN0aW9uIChyYW5nZUVsKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KHJhbmdlRWwuZGF0YXNldC5pbmRleCk7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnJhbmdlc1tpbmRleF0sIGZyb21UaW1lID0gX2EuZnJvbVRpbWUsIHRvVGltZSA9IF9hLnRvVGltZTtcclxuICAgICAgICAgICAgcmFuZ2VFbC5zdHlsZS53aWR0aCA9XHJcbiAgICAgICAgICAgICAgICAoKHRvVGltZSAtIGZyb21UaW1lKSAqIDEwMCkgLyBfdGhpcy5vcHRpb25zLnRvdGFsICsgXCIlXCI7XHJcbiAgICAgICAgICAgIHJhbmdlRWwuc3R5bGUubGVmdCA9IChmcm9tVGltZSAqIDEwMCkgLyBfdGhpcy5vcHRpb25zLnRvdGFsICsgXCIlXCI7XHJcbiAgICAgICAgICAgIHJhbmdlRWwucXVlcnlTZWxlY3RvcihcIi5sYWJlbHMgLmxlZnRcIikuaW5uZXJIVE1MID0gX3RoaXMub3B0aW9ucy5jb252ZXJ0RnVuYyhmcm9tVGltZSk7XHJcbiAgICAgICAgICAgIHJhbmdlRWwucXVlcnlTZWxlY3RvcihcIi5sYWJlbHMgLnJpZ2h0XCIpLmlubmVySFRNTCA9IF90aGlzLm9wdGlvbnMuY29udmVydEZ1bmModG9UaW1lKTtcclxuICAgICAgICAgICAgaWYgKHJhbmdlRWwuY2xpZW50V2lkdGggPCA3MCkge1xyXG4gICAgICAgICAgICAgICAgcmFuZ2VFbC5xdWVyeVNlbGVjdG9yKFwiLmxhYmVscyAucmlnaHRcIikuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByYW5nZUVsLnF1ZXJ5U2VsZWN0b3IoXCIubGFiZWxzIC5yaWdodFwiKS5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmFuZ2VFbC5jbGllbnRXaWR0aCA8IDMwKSB7XHJcbiAgICAgICAgICAgICAgICByYW5nZUVsLnF1ZXJ5U2VsZWN0b3IoXCIubGFiZWxzIC5sZWZ0XCIpLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmFuZ2VFbC5xdWVyeVNlbGVjdG9yKFwiLmxhYmVscyAubGVmdFwiKS5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRSYW5nZXMgPSBmdW5jdGlvbiAocmFuZ2VzKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnJhbmdlcyA9IHJhbmdlcztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQm94Q2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLmJveEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZGVsdGEgPSBlLmNsaWVudFggLSBnZXRPZmZzZXQoX3RoaXMuYm94RWxlbWVudCkubGVmdDtcclxuICAgICAgICAgICAgX3RoaXMuaW5pdGlhbE1vdXNlWCA9IGUuY2xpZW50WDtcclxuICAgICAgICAgICAgdmFyIHRhcmdldFN0YXJ0ID0gMDtcclxuICAgICAgICAgICAgaWYgKGRlbHRhID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlbHRhUGVyY2VudCA9IGRlbHRhIC8gX3RoaXMuYm94RWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgICAgICAgICAgIHRhcmdldFN0YXJ0ID0gX3RoaXMub3B0aW9ucy50b3RhbCAqIGRlbHRhUGVyY2VudDtcclxuICAgICAgICAgICAgICAgIHRhcmdldFN0YXJ0IC09IHRhcmdldFN0YXJ0ICUgX3RoaXMub3B0aW9ucy5zdGVwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5yYW5nZXMubGVuZ3RoIDwgX3RoaXMub3B0aW9ucy5tYXhSYW5nZXNBbW91bnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciByYW5nZUVsXzEgPSBfdGhpcy5jcmVhdGVSYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuYm94RWxlbWVudC5hcHBlbmRDaGlsZChyYW5nZUVsXzEpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld1JhbmdlcyA9IF9fc3ByZWFkKF90aGlzLnJhbmdlcyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVfMSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tVGltZTogTWF0aC5tYXgoMCwgdGFyZ2V0U3RhcnQgLSA0NSksXHJcbiAgICAgICAgICAgICAgICAgICAgdG9UaW1lOiBNYXRoLm1pbih0YXJnZXRTdGFydCArIDE1LCBfdGhpcy5vcHRpb25zLnRvdGFsKSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB2YXIgb3ZlcmxhcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2xvb3BfMiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNPdmVybGFwcGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1Jhbmdlcy5mb3JFYWNoKGZ1bmN0aW9uIChyYW5nZSwgaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gaW5kZXhfMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZV8xLmZyb21UaW1lIDwgcmFuZ2UudG9UaW1lICYmIHZhbHVlXzEudG9UaW1lID4gcmFuZ2UudG9UaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc092ZXJsYXBwaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLnRvVGltZSA9IHZhbHVlXzEuZnJvbVRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlXzEudG9UaW1lID4gcmFuZ2UuZnJvbVRpbWUgJiYgdmFsdWVfMS5mcm9tVGltZSA8IHJhbmdlLnRvVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPdmVybGFwcGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZS5mcm9tVGltZSA9IHZhbHVlXzEudG9UaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc092ZXJsYXBwaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG92ZXJsYXApIHtcclxuICAgICAgICAgICAgICAgICAgICBfbG9vcF8yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuZXdSYW5nZXMucHVzaCh2YWx1ZV8xKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnNldFJhbmdlcyhuZXdSYW5nZXMpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZHJhZ2dpbmdFbCA9IHJhbmdlRWxfMTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlRWxfMS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yYW5nZUVscy5wdXNoKHJhbmdlRWxfMSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXhfMSA9IHBhcnNlSW50KF90aGlzLmRyYWdnaW5nRWwuZGF0YXNldC5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5kcmFnQ2FwdHVyZWRGcm9tID0gX3RoaXMucmFuZ2VzW2luZGV4XzFdLmZyb21UaW1lO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZHJhZ0NhcHR1cmVkVG8gPSBfdGhpcy5yYW5nZXNbaW5kZXhfMV0udG9UaW1lO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubGFzdFggPSBlLmNsaWVudFg7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5kcmFnQ2FwdHVyZWRGcm9tID0gX3RoaXMucmFuZ2VzW2luZGV4XzFdLmZyb21UaW1lO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZHJhZ0NhcHR1cmVkVG8gPSBfdGhpcy5yYW5nZXNbaW5kZXhfMV0udG9UaW1lO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJ1cCA9IF90aGlzLnN0b3BEcmFnO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQub25wb2ludGVybW92ZSA9IF90aGlzLmhhbmRsZVJpZ2h0RHJhZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jaGVja0RlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGVfMSwgX2E7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKF90aGlzLnJhbmdlcy5lbnRyaWVzKCkpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9kID0gX19yZWFkKF9jLnZhbHVlLCAyKSwgaW5kZXggPSBfZFswXSwgcmFuZ2UgPSBfZFsxXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNEcmFnRWwgPSBfdGhpcy5kcmFnZ2luZ0VsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRyYWdnaW5nRWwuZGF0YXNldC5pbmRleCA9PT0gaW5kZXgudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzRHJhZ0VsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyYW5nZS50b1RpbWUgLSByYW5nZS5mcm9tVGltZSA8IF90aGlzLm9wdGlvbnMuc3RlcCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2UuZnJvbVRpbWUgPiBfdGhpcy5vcHRpb25zLnRvdGFsIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZS50b1RpbWUgPCBfdGhpcy5vcHRpb25zLnN0ZXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlbW92ZVJhbmdlKGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNoZWNrRGVsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cclxuICAgICAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53YWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIDQwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0RlbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYW5nZUVscy5mb3JFYWNoKGZ1bmN0aW9uIChyYW5nZUVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlUmFuZ2VVcGRhdGUocmFuZ2VFbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5yYW5nZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9jdXNlZFJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYW5nZXBpY2tlckVsLnF1ZXJ5U2VsZWN0b3IoXCIuZnJvbS12YWx1ZVwiKS5pbm5lckhUTUwgPSB0aGlzLmZvY3VzZWRSYW5nZS5xdWVyeVNlbGVjdG9yKFwiLmxhYmVscyAubGVmdFwiKS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYW5nZXBpY2tlckVsLnF1ZXJ5U2VsZWN0b3IoXCIudG8tdmFsdWVcIikuaW5uZXJIVE1MID0gdGhpcy5mb2N1c2VkUmFuZ2UucXVlcnlTZWxlY3RvcihcIi5sYWJlbHMgLnJpZ2h0XCIpLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVBvcHVwUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVQb3B1cFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLmZvY3VzZWRSYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBwb3B1cCA9IF90aGlzLnJhbmdlcGlja2VyRWwucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKTtcclxuICAgICAgICAgICAgdmFyIHBvcHVwQXJyb3cgPSBfdGhpcy5yYW5nZXBpY2tlckVsLnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3dcIik7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cFRyYWNrID0gX3RoaXMuYm94RWxlbWVudDtcclxuICAgICAgICAgICAgdmFyIHRhcmdldFBvcyA9IF90aGlzLmZvY3VzZWRSYW5nZS5vZmZzZXRMZWZ0ICsgX3RoaXMuZm9jdXNlZFJhbmdlLmNsaWVudFdpZHRoIC8gMjtcclxuICAgICAgICAgICAgdmFyIG1pblBvcyA9IHBvcHVwLmNsaWVudFdpZHRoIC8gMiAtIDEyO1xyXG4gICAgICAgICAgICB2YXIgbWF4UG9zID0gcG9wdXBUcmFjay5jbGllbnRXaWR0aCAtIHBvcHVwLmNsaWVudFdpZHRoIC8gMiArIDEyO1xyXG4gICAgICAgICAgICBwb3B1cC5zdHlsZS5sZWZ0ID0gTWF0aC5taW4oTWF0aC5tYXgobWluUG9zLCB0YXJnZXRQb3MpLCBtYXhQb3MpICsgXCJweFwiO1xyXG4gICAgICAgICAgICBwb3B1cEFycm93LnN0eWxlLmxlZnQgPSBNYXRoLm1pbih0YXJnZXRQb3MsIHBvcHVwVHJhY2suY2xpZW50V2lkdGgpICsgXCJweFwiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSZW1vdmVEb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuZm9jdXNlZFJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5mb2N1c2VkUmFuZ2UuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSZW1vdmVDbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5mb2N1c2VkUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpZHggPSBfdGhpcy5mb2N1c2VkUmFuZ2UuZGF0YXNldC5pbmRleDtcclxuICAgICAgICAgICAgICAgIF90aGlzLnJlbW92ZVJhbmdlKGlkeCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUmFuZ2VGb2N1cyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcclxuICAgICAgICAgICAgaWYgKF90aGlzLnBvcHVwQ2xvc2VUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMucG9wdXBDbG9zZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLmZvY3VzZWRSYW5nZSA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICAoX2IgPSAoX2EgPSBfdGhpcy5yYW5nZXBpY2tlckVsKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcihcIi5wb3B1cC10cmFja1wiKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNsYXNzTGlzdC5yZW1vdmUoXCJjbG9zaW5nXCIpO1xyXG4gICAgICAgICAgICAoX2QgPSAoX2MgPSBfdGhpcy5yYW5nZXBpY2tlckVsKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MucXVlcnlTZWxlY3RvcihcIi5wb3B1cC10cmFja1wiKSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICB2YXIgcG9wdXAgPSBfdGhpcy5yYW5nZXBpY2tlckVsLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIik7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcInRyYW5zaXRpb25cIik7XHJcbiAgICAgICAgICAgIH0sIDE1MCk7XHJcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSYW5nZUJsdXIgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgcG9wdXAgPSBfdGhpcy5yYW5nZXBpY2tlckVsLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIik7XHJcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJ0cmFuc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICBfdGhpcy5mb2N1c2VkUmFuZ2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuZm9jdXNlZFJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnBvcHVwQ2xvc2VUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5wb3B1cENsb3NlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IF90aGlzLnJhbmdlcGlja2VyRWwpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLXRyYWNrXCIpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2xhc3NMaXN0LmFkZChcImNsb3NpbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucG9wdXBDbG9zZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoX2IgPSAoX2EgPSBfdGhpcy5yYW5nZXBpY2tlckVsKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcihcIi5wb3B1cC10cmFja1wiKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNsYXNzTGlzdC5yZW1vdmUoXCJjbG9zaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoX2QgPSAoX2MgPSBfdGhpcy5yYW5nZXBpY2tlckVsKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MucXVlcnlTZWxlY3RvcihcIi5wb3B1cC10cmFja1wiKSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDQwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zdG9wRHJhZyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmRyYWdCdWZmZXIgPSAwO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJtb3ZlID0gbnVsbDtcclxuICAgICAgICAgICAgX3RoaXMuZHJhZ2dpbmdFbCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgX3RoaXMuY2hlY2tEZWxldGUoKTtcclxuICAgICAgICAgICAgX3RoaXMub25DaGFuZ2UoX3RoaXMucmFuZ2VzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTGVmdERyYWdTdGFydCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgX3RoaXMuZHJhZ2dpbmdFbCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudFxyXG4gICAgICAgICAgICAgICAgLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIF90aGlzLmxhc3RYID0gZXZlbnQuY2xpZW50WDtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoX3RoaXMuZHJhZ2dpbmdFbC5kYXRhc2V0LmluZGV4KTtcclxuICAgICAgICAgICAgX3RoaXMuZHJhZ0NhcHR1cmVkRnJvbSA9IF90aGlzLnJhbmdlc1tpbmRleF0uZnJvbVRpbWU7XHJcbiAgICAgICAgICAgIF90aGlzLmRyYWdDYXB0dXJlZFRvID0gX3RoaXMucmFuZ2VzW2luZGV4XS50b1RpbWU7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ucG9pbnRlcnVwID0gX3RoaXMuc3RvcERyYWc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ucG9pbnRlcm1vdmUgPSBfdGhpcy5oYW5kbGVMZWZ0RHJhZztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUmlnaHREcmFnU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIF90aGlzLmRyYWdnaW5nRWwgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnRcclxuICAgICAgICAgICAgICAgIC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICBfdGhpcy5sYXN0WCA9IGV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KF90aGlzLmRyYWdnaW5nRWwuZGF0YXNldC5pbmRleCk7XHJcbiAgICAgICAgICAgIF90aGlzLmRyYWdDYXB0dXJlZEZyb20gPSBfdGhpcy5yYW5nZXNbaW5kZXhdLmZyb21UaW1lO1xyXG4gICAgICAgICAgICBfdGhpcy5kcmFnQ2FwdHVyZWRUbyA9IF90aGlzLnJhbmdlc1tpbmRleF0udG9UaW1lO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJ1cCA9IF90aGlzLnN0b3BEcmFnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJtb3ZlID0gX3RoaXMuaGFuZGxlUmlnaHREcmFnO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVNaWREcmFnU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIF90aGlzLmRyYWdnaW5nRWwgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgICAgICBfdGhpcy5sYXN0WCA9IGV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KF90aGlzLmRyYWdnaW5nRWwuZGF0YXNldC5pbmRleCk7XHJcbiAgICAgICAgICAgIF90aGlzLmRyYWdDYXB0dXJlZEZyb20gPSBfdGhpcy5yYW5nZXNbaW5kZXhdLmZyb21UaW1lO1xyXG4gICAgICAgICAgICBfdGhpcy5kcmFnQ2FwdHVyZWRUbyA9IF90aGlzLnJhbmdlc1tpbmRleF0udG9UaW1lO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJ1cCA9IF90aGlzLnN0b3BEcmFnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJtb3ZlID0gX3RoaXMuaGFuZGxlTWlkRHJhZztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTGVmdERyYWcgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIGlzSGVsZERvd24gPSBldmVudC5idXR0b25zID09PSB1bmRlZmluZWQgPyBldmVudC53aGljaCA9PT0gMSA6IGV2ZW50LmJ1dHRvbnMgPT09IDE7XHJcbiAgICAgICAgICAgIGlmICghaXNIZWxkRG93bikge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc3RvcERyYWcoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZWwgPSBfdGhpcy5kcmFnZ2luZ0VsO1xyXG4gICAgICAgICAgICBpZiAoIWVsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoZWwuZGF0YXNldC5pbmRleCk7XHJcbiAgICAgICAgICAgIHZhciBkZWx0YSA9IGV2ZW50LmNsaWVudFggLSBfdGhpcy5sYXN0WDtcclxuICAgICAgICAgICAgdmFyIGRlbHRhUGVyY2VudCA9IChkZWx0YSAvIGVsLnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGgpICogMTAwO1xyXG4gICAgICAgICAgICB2YXIgZGVsdGFWYWx1ZSA9IChkZWx0YVBlcmNlbnQgLyAxMDApICogX3RoaXMub3B0aW9ucy50b3RhbDtcclxuICAgICAgICAgICAgZGVsdGFWYWx1ZSA9IGRlbHRhVmFsdWUgLSAoZGVsdGFWYWx1ZSAlIF90aGlzLm9wdGlvbnMuc3RlcCk7XHJcbiAgICAgICAgICAgIGlmIChkZWx0YVZhbHVlIC0gX3RoaXMuZHJhZ0J1ZmZlciA8IF90aGlzLm9wdGlvbnMuc3RlcCAmJlxyXG4gICAgICAgICAgICAgICAgZGVsdGFWYWx1ZSAtIF90aGlzLmRyYWdCdWZmZXIgPiAtX3RoaXMub3B0aW9ucy5zdGVwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuZHJhZ0J1ZmZlciA9IGRlbHRhVmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBuZXdTdGFydCA9IF90aGlzLmRyYWdDYXB0dXJlZEZyb207XHJcbiAgICAgICAgICAgIHZhciBuZXdFbmQgPSBfdGhpcy5kcmFnQ2FwdHVyZWRUbztcclxuICAgICAgICAgICAgaWYgKG5ld0VuZCAtIChuZXdTdGFydCArIGRlbHRhVmFsdWUpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgbmV3U3RhcnQgPSBuZXdFbmQ7XHJcbiAgICAgICAgICAgICAgICBuZXdFbmQgPSBuZXdFbmQgKyBkZWx0YVZhbHVlIC0gKG5ld0VuZCAtIF90aGlzLmRyYWdDYXB0dXJlZEZyb20pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3U3RhcnQgKz0gZGVsdGFWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZShpbmRleCwgeyBmcm9tVGltZTogbmV3U3RhcnQsIHRvVGltZTogbmV3RW5kIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSaWdodERyYWcgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIGlzSGVsZERvd24gPSBldmVudC5idXR0b25zID09PSB1bmRlZmluZWQgPyBldmVudC53aGljaCA9PT0gMSA6IGV2ZW50LmJ1dHRvbnMgPT09IDE7XHJcbiAgICAgICAgICAgIGlmICghaXNIZWxkRG93bikge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc3RvcERyYWcoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZWwgPSBfdGhpcy5kcmFnZ2luZ0VsO1xyXG4gICAgICAgICAgICBpZiAoIWVsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoZWwuZGF0YXNldC5pbmRleCk7XHJcbiAgICAgICAgICAgIHZhciBkZWx0YSA9IGV2ZW50LmNsaWVudFggLSBfdGhpcy5sYXN0WDtcclxuICAgICAgICAgICAgdmFyIGRlbHRhUGVyY2VudCA9IChkZWx0YSAvIGVsLnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGgpICogMTAwO1xyXG4gICAgICAgICAgICB2YXIgZGVsdGFWYWx1ZSA9IChkZWx0YVBlcmNlbnQgLyAxMDApICogX3RoaXMub3B0aW9ucy50b3RhbDtcclxuICAgICAgICAgICAgZGVsdGFWYWx1ZSA9IGRlbHRhVmFsdWUgLSAoZGVsdGFWYWx1ZSAlIF90aGlzLm9wdGlvbnMuc3RlcCk7XHJcbiAgICAgICAgICAgIGlmIChkZWx0YVZhbHVlIC0gX3RoaXMuZHJhZ0J1ZmZlciA8IF90aGlzLm9wdGlvbnMuc3RlcCAmJlxyXG4gICAgICAgICAgICAgICAgZGVsdGFWYWx1ZSAtIF90aGlzLmRyYWdCdWZmZXIgPiAtX3RoaXMub3B0aW9ucy5zdGVwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuZHJhZ0J1ZmZlciA9IGRlbHRhVmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBuZXdTdGFydCA9IF90aGlzLmRyYWdDYXB0dXJlZEZyb207XHJcbiAgICAgICAgICAgIHZhciBuZXdFbmQgPSBfdGhpcy5kcmFnQ2FwdHVyZWRUbztcclxuICAgICAgICAgICAgaWYgKG5ld0VuZCArIGRlbHRhVmFsdWUgLSBuZXdTdGFydCA8IDApIHtcclxuICAgICAgICAgICAgICAgIG5ld1N0YXJ0ID0gbmV3U3RhcnQgKyBkZWx0YVZhbHVlIC0gKG5ld1N0YXJ0IC0gbmV3RW5kKTtcclxuICAgICAgICAgICAgICAgIG5ld0VuZCA9IF90aGlzLmRyYWdDYXB0dXJlZEZyb207XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdFbmQgKz0gZGVsdGFWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZShpbmRleCwgeyBmcm9tVGltZTogbmV3U3RhcnQsIHRvVGltZTogbmV3RW5kIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVNaWREcmFnID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBpc0hlbGREb3duID0gZXZlbnQuYnV0dG9ucyA9PT0gdW5kZWZpbmVkID8gZXZlbnQud2hpY2ggPT09IDEgOiBldmVudC5idXR0b25zID09PSAxO1xyXG4gICAgICAgICAgICBpZiAoIWlzSGVsZERvd24pIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnN0b3BEcmFnKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGVsID0gX3RoaXMuZHJhZ2dpbmdFbDtcclxuICAgICAgICAgICAgaWYgKCFlbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KGVsLmRhdGFzZXQuaW5kZXgpO1xyXG4gICAgICAgICAgICB2YXIgZGVsdGEgPSBldmVudC5jbGllbnRYIC0gX3RoaXMubGFzdFg7XHJcbiAgICAgICAgICAgIHZhciBkZWx0YVBlcmNlbnQgPSAoZGVsdGEgLyBlbC5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoKSAqIDEwMDtcclxuICAgICAgICAgICAgdmFyIGRlbHRhVmFsdWUgPSAoZGVsdGFQZXJjZW50IC8gMTAwKSAqIF90aGlzLm9wdGlvbnMudG90YWw7XHJcbiAgICAgICAgICAgIGRlbHRhVmFsdWUgPSBkZWx0YVZhbHVlIC0gKGRlbHRhVmFsdWUgJSBfdGhpcy5vcHRpb25zLnN0ZXApO1xyXG4gICAgICAgICAgICBpZiAoZGVsdGFWYWx1ZSAtIF90aGlzLmRyYWdCdWZmZXIgPCBfdGhpcy5vcHRpb25zLnN0ZXAgJiZcclxuICAgICAgICAgICAgICAgIGRlbHRhVmFsdWUgLSBfdGhpcy5kcmFnQnVmZmVyID4gLV90aGlzLm9wdGlvbnMuc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLmRyYWdCdWZmZXIgPSBkZWx0YVZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgbmV3U3RhcnQgPSBfdGhpcy5kcmFnQ2FwdHVyZWRGcm9tICsgZGVsdGFWYWx1ZTtcclxuICAgICAgICAgICAgdmFyIG5ld0VuZCA9IF90aGlzLmRyYWdDYXB0dXJlZFRvICsgZGVsdGFWYWx1ZTtcclxuICAgICAgICAgICAgX3RoaXMuaGFuZGxlVmFsdWVDaGFuZ2UoaW5kZXgsIHsgZnJvbVRpbWU6IG5ld1N0YXJ0LCB0b1RpbWU6IG5ld0VuZCB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJhbmdlUGlja2VyO1xyXG59KCkpO1xyXG5leHBvcnQgeyBSYW5nZVBpY2tlciB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9