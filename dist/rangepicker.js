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
/*! exports provided: init, RangePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
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
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = window.setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
    };
}
function throttle(callback, limit) {
    var waiting = false;
    return function () {
        if (!waiting) {
            callback.apply(this, arguments);
            waiting = true;
            setTimeout(function () {
                waiting = false;
            }, limit);
        }
    };
}
var init = function (element, label, values, onChange, options) {
    var rangePicker = new RangePicker(element, label, values, onChange, options);
    return rangePicker;
};
var RangePicker = /** @class */ (function () {
    function RangePicker(element, label, values, onChange, options) {
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
        this.creatingNew = false;
        this.createRangepicker = function (label) {
            var rangepickerEl = document.createElement("div");
            rangepickerEl.className = "ValueRangePicker";
            rangepickerEl.innerHTML = "\n      <label>" + label + "</label>\n      <div class='outer-box" + (_this.options.readOnly ? " disabled" : "") + "'>\n        <div class=\"header-box\">\n          <div class=\"headers\" style=\"margin:0 -" + 100 / 4 / _this.options.separators.length + "%\">\n            " + _this.options.separators
                .map(function (label) {
                return "<div class='header'>\n                  <span class=\"header-label\">" + label + "</span>\n                </div>";
            })
                .join(" ") + "\n          </div>\n          <div class=\"separators\"  style=\"padding:0 " + 100 / 4 / _this.options.separators.length + "%\">\n            " + _this.options.separators
                .map(function () {
                return "<div class='separator'></div>";
            })
                .join(" ") + "\n          </div>\n        </div>\n        <div class=\"padded-box\"  style=\"padding:0 " + 100 / 4 / _this.options.separators.length + "%\">\n          <div class=\"selector-box\"></div>\n        </div>\n      </div>\n      <div class=\"popup-padded-box\" style=\"padding:0 " + 100 / 4 / _this.options.separators.length + "%\">\n        <div class=\"popup-track\" >\n          <div class=\"popup\">\n            <p>From:<span class=\"from-value\"></span></p>\n            <p>To:<span class=\"to-value\"></span></p>\n            <button class=\"btn-remove\">Remove</button>\n          </div>\n          <div class=\"arrow\"></div>\n        </div>\n      </div>\n      \n      ";
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
            var leftLabel = rangeEl.querySelector(".labels .left");
            var rightLabel = rangeEl.querySelector(".labels .right");
            leftLabel.innerHTML = _this.options.convertFunc(fromTime);
            rightLabel.innerHTML = _this.options.convertFunc(toTime);
            if (rangeEl.clientWidth < 70) {
                rightLabel.style.opacity = "0";
            }
            else {
                rightLabel.style.opacity = "1";
            }
            if (rangeEl.clientWidth < 30) {
                leftLabel.style.opacity = "0";
            }
            else {
                leftLabel.style.opacity = "1";
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
                var remainder = targetStart % _this.options.step;
                var halfStep = _this.options.step / 2;
                if (remainder < halfStep) {
                    targetStart -= remainder;
                }
                else {
                    targetStart -= remainder - _this.options.step;
                }
            }
            if (_this.ranges.length < _this.options.maxRangesAmount) {
                _this.creatingNew = true;
                var rangeEl_1 = _this.createRange();
                _this.boxElement.appendChild(rangeEl_1);
                var newRanges = __spread(_this.ranges);
                // const value = {
                //   fromTime: Math.max(0, targetStart - 45),
                //   toTime: Math.min(targetStart + 15, this.options.total),
                // };
                var value_1 = {
                    fromTime: targetStart,
                    toTime: targetStart,
                };
                var index_1 = parseInt(rangeEl_1.dataset.index);
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
                if (window.requestAnimationFrame) {
                    window.requestAnimationFrame(function () {
                        _this.checkDelete();
                        _this.rangeEls.forEach(function (rangeEl) {
                            _this.handleRangeUpdate(rangeEl);
                        });
                        _this.onChange(_this.ranges);
                        if (_this.focusedRange) {
                            _this.rangepickerEl.querySelector(".from-value").innerHTML = _this.focusedRange.querySelector(".labels .left").innerHTML;
                            _this.rangepickerEl.querySelector(".to-value").innerHTML = _this.focusedRange.querySelector(".labels .right").innerHTML;
                            _this.handlePopupPosition();
                        }
                    });
                }
                else {
                    throttle(function () {
                        _this.checkDelete();
                        _this.rangeEls.forEach(function (rangeEl) {
                            _this.handleRangeUpdate(rangeEl);
                        });
                        _this.onChange(_this.ranges);
                        if (_this.focusedRange) {
                            _this.rangepickerEl.querySelector(".from-value").innerHTML = _this.focusedRange.querySelector(".labels .left").innerHTML;
                            _this.rangepickerEl.querySelector(".to-value").innerHTML = _this.focusedRange.querySelector(".labels .right").innerHTML;
                            _this.handlePopupPosition();
                        }
                    }, 16);
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
                _this.handleRangeBlur();
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
            _this.update();
        };
        this.handleRangeBlur = function () {
            _this.focusedRange = undefined;
            setTimeout(function () {
                var _a;
                if (!_this.focusedRange) {
                    if (_this.popupCloseTimeout) {
                        clearTimeout(_this.popupCloseTimeout);
                    }
                    var popupTrack_1 = (_a = _this.rangepickerEl) === null || _a === void 0 ? void 0 : _a.querySelector(".popup-track");
                    var popup_1 = popupTrack_1.querySelector(".popup");
                    var popupArrow_1 = popupTrack_1.querySelector(".arrow");
                    popupTrack_1 === null || popupTrack_1 === void 0 ? void 0 : popupTrack_1.classList.add("closing");
                    _this.popupCloseTimeout = setTimeout(function () {
                        popupTrack_1 === null || popupTrack_1 === void 0 ? void 0 : popupTrack_1.classList.remove("closing");
                        popupTrack_1 === null || popupTrack_1 === void 0 ? void 0 : popupTrack_1.classList.remove("show");
                        popup_1.style.left = "";
                        popupArrow_1.style.left = "";
                    }, 300);
                }
            }, 0);
        };
        this.stopDrag = function (e) {
            _this.dragBuffer = 0;
            if (_this.creatingNew && e && _this.draggingEl && _this.boxElement) {
                if (!_this.draggingEl.clientWidth) {
                    var delta = e.clientX - getOffset(_this.boxElement).left;
                    _this.initialMouseX = e.clientX;
                    var targetStart = 0;
                    if (delta > 0) {
                        var deltaPercent = delta / _this.boxElement.clientWidth;
                        targetStart = _this.options.total * deltaPercent;
                        var remainder = targetStart % _this.options.step;
                        var halfStep = _this.options.step / 2;
                        if (remainder < halfStep) {
                            targetStart -= remainder;
                        }
                        else {
                            targetStart -= remainder - _this.options.step;
                        }
                    }
                    var newRanges = __spread(_this.ranges);
                    var value_2 = {
                        fromTime: Math.max(0, targetStart - 60),
                        toTime: Math.min(targetStart, _this.options.total),
                    };
                    var index_2 = parseInt(_this.draggingEl.dataset.index);
                    var overlap = true;
                    var _loop_3 = function () {
                        var isOverlapping = false;
                        newRanges.forEach(function (range, i) {
                            if (i === index_2) {
                                return;
                            }
                            if (value_2.fromTime < range.toTime && value_2.toTime > range.toTime) {
                                isOverlapping = true;
                                range.toTime = value_2.fromTime;
                            }
                            if (value_2.toTime > range.fromTime &&
                                value_2.fromTime < range.toTime) {
                                isOverlapping = true;
                                range.fromTime = value_2.toTime;
                            }
                        });
                        if (!isOverlapping) {
                            overlap = false;
                        }
                    };
                    while (overlap) {
                        _loop_3();
                    }
                    newRanges[index_2] = value_2;
                    _this.setRanges(newRanges);
                    _this.update();
                }
            }
            _this.creatingNew = false;
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
            var deltaPercent = delta / el.parentElement.clientWidth;
            var deltaValue = deltaPercent * _this.options.total;
            var remainder = deltaValue % _this.options.step;
            var halfStep = _this.options.step / 2;
            if (Math.abs(remainder) < halfStep) {
                deltaValue -= remainder;
            }
            else {
                deltaValue -=
                    remainder + (deltaValue > 0 ? -_this.options.step : _this.options.step);
            }
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
            var deltaPercent = delta / el.parentElement.clientWidth;
            var deltaValue = deltaPercent * _this.options.total;
            var remainder = deltaValue % _this.options.step;
            var halfStep = _this.options.step / 2;
            if (Math.abs(remainder) < halfStep) {
                deltaValue -= remainder;
            }
            else {
                deltaValue -=
                    remainder + (deltaValue > 0 ? -_this.options.step : _this.options.step);
            }
            if (deltaValue - _this.dragBuffer < _this.options.step &&
                deltaValue - _this.dragBuffer > -_this.options.step) {
                return;
            }
            _this.dragBuffer = deltaValue;
            _this.creatingNew = false;
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
            var deltaPercent = delta / el.parentElement.clientWidth;
            var deltaValue = deltaPercent * _this.options.total;
            var remainder = deltaValue % _this.options.step;
            var halfStep = _this.options.step / 2;
            if (Math.abs(remainder) < halfStep) {
                deltaValue -= remainder;
            }
            else {
                deltaValue -=
                    remainder + (deltaValue > 0 ? -_this.options.step : _this.options.step);
            }
            if (deltaValue - _this.dragBuffer < _this.options.step &&
                deltaValue - _this.dragBuffer > -_this.options.step) {
                return;
            }
            _this.dragBuffer = deltaValue;
            _this.creatingNew = false;
            var newStart = _this.dragCapturedFrom + deltaValue;
            var newEnd = _this.dragCapturedTo + deltaValue;
            _this.handleValueChange(index, { fromTime: newStart, toTime: newEnd });
        };
        if (options) {
            this.options = __assign(__assign({}, this.options), options);
        }
        this.label = label;
        this.onChange = onChange;
        this.rangepickerEl = this.createRangepicker(label);
        element.appendChild(this.rangepickerEl);
        this.boxElement = this.rangepickerEl.querySelector(".selector-box");
        this.boxElement.addEventListener("pointerdown", this.handleBoxClick);
        this.ranges = values;
        values.forEach(function (range) {
            var rangeEl = _this.createRange();
            _this.boxElement.appendChild(rangeEl);
            _this.rangeEls.push(rangeEl);
        });
        this.update();
    }
    return RangePicker;
}());



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SYW5nZVBpY2tlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9SYW5nZVBpY2tlci8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQSxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQSxtQkFBbUIsU0FBSSxJQUFJLFNBQUk7QUFDL0IsYUFBYSw2QkFBNkIsMEJBQTBCLGFBQWEsRUFBRSxxQkFBcUI7QUFDeEcsZ0JBQWdCLHFEQUFxRCxvRUFBb0UsYUFBYSxFQUFFO0FBQ3hKLHNCQUFzQixzQkFBc0IscUJBQXFCLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGtDQUFrQyxTQUFTO0FBQzNDLGtDQUFrQyxXQUFXLFVBQVU7QUFDdkQseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQSw2R0FBNkcsT0FBTyxVQUFVO0FBQzlILGdGQUFnRixpQkFBaUIsT0FBTztBQUN4Ryx3REFBd0QsZ0JBQWdCLFFBQVEsT0FBTztBQUN2Riw4Q0FBOEMsZ0JBQWdCLGdCQUFnQixPQUFPO0FBQ3JGO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTLFlBQVksYUFBYSxPQUFPLEVBQUUsVUFBVSxXQUFXO0FBQ2hFLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQSxjQUFjLFNBQUksSUFBSSxTQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixNQUFNLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxVQUFVO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2IsU0FBUyxFQUFFO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxVQUFVO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsUUFBUSxnQkFBZ0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMEJBQTBCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTLEVBQUU7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMscUNBQXFDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxxQ0FBcUM7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxxQ0FBcUM7QUFDakY7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNzQiIsImZpbGUiOiJyYW5nZXBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59O1xyXG52YXIgX19zcHJlYWQgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59O1xyXG52YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufTtcclxudmFyIGhvdXJzID0gW107XHJcbmZvciAodmFyIGkgPSAwOyBpIDw9IDI0OyBpKyspIHtcclxuICAgIGhvdXJzLnB1c2goaSk7XHJcbn1cclxudmFyIGdldE9mZnNldCA9IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgdmFyIFggPSAwO1xyXG4gICAgdmFyIFkgPSAwO1xyXG4gICAgd2hpbGUgKGVsICYmICFpc05hTihlbC5vZmZzZXRMZWZ0KSAmJiAhaXNOYU4oZWwub2Zmc2V0VG9wKSkge1xyXG4gICAgICAgIFggKz0gZWwub2Zmc2V0TGVmdCAtIGVsLnNjcm9sbExlZnQ7XHJcbiAgICAgICAgWSArPSBlbC5vZmZzZXRUb3AgLSBlbC5zY3JvbGxUb3A7XHJcbiAgICAgICAgZWwgPSBlbC5vZmZzZXRQYXJlbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyB0b3A6IFksIGxlZnQ6IFggfTtcclxufTtcclxudmFyIGNvbnZlcnQgPSBmdW5jdGlvbiAobikge1xyXG4gICAgdmFyIGhvdXJzID0gKFwiMFwiICsgKChuIC8gNjApIF4gMCkgJSAyNCkuc2xpY2UoLTIpO1xyXG4gICAgdmFyIG1pbnV0ZXMgPSAoXCIwXCIgKyAobiAlIDYwKSkuc2xpY2UoLTIpO1xyXG4gICAgcmV0dXJuIGhvdXJzICsgXCI6XCIgKyBtaW51dGVzO1xyXG59O1xyXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcclxuICAgIHZhciB0aW1lb3V0O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKCFpbW1lZGlhdGUpXHJcbiAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XHJcbiAgICAgICAgaWYgKHRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xyXG4gICAgICAgIGlmIChjYWxsTm93KVxyXG4gICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiB0aHJvdHRsZShjYWxsYmFjaywgbGltaXQpIHtcclxuICAgIHZhciB3YWl0aW5nID0gZmFsc2U7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghd2FpdGluZykge1xyXG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICB3YWl0aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB3YWl0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIGxpbWl0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCB2YXIgaW5pdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBsYWJlbCwgdmFsdWVzLCBvbkNoYW5nZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIHJhbmdlUGlja2VyID0gbmV3IFJhbmdlUGlja2VyKGVsZW1lbnQsIGxhYmVsLCB2YWx1ZXMsIG9uQ2hhbmdlLCBvcHRpb25zKTtcclxuICAgIHJldHVybiByYW5nZVBpY2tlcjtcclxufTtcclxudmFyIFJhbmdlUGlja2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmFuZ2VQaWNrZXIoZWxlbWVudCwgbGFiZWwsIHZhbHVlcywgb25DaGFuZ2UsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdGVwOiAxNSxcclxuICAgICAgICAgICAgdG90YWw6IDE0NDAsXHJcbiAgICAgICAgICAgIG1heFJhbmdlc0Ftb3VudDogNyxcclxuICAgICAgICAgICAgc2VwYXJhdG9yczogaG91cnMsXHJcbiAgICAgICAgICAgIGNvbnZlcnRGdW5jOiBjb252ZXJ0LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yYW5nZXMgPSBbXTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfTtcclxuICAgICAgICB0aGlzLmRyYWdCdWZmZXIgPSAwO1xyXG4gICAgICAgIHRoaXMubGFzdFggPSAwO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbE1vdXNlWCA9IDA7XHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5yYW5nZUVscyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZHJhZ0NhcHR1cmVkRnJvbSA9IDA7XHJcbiAgICAgICAgdGhpcy5kcmFnQ2FwdHVyZWRUbyA9IDA7XHJcbiAgICAgICAgdGhpcy5jcmVhdGluZ05ldyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUmFuZ2VwaWNrZXIgPSBmdW5jdGlvbiAobGFiZWwpIHtcclxuICAgICAgICAgICAgdmFyIHJhbmdlcGlja2VyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICByYW5nZXBpY2tlckVsLmNsYXNzTmFtZSA9IFwiVmFsdWVSYW5nZVBpY2tlclwiO1xyXG4gICAgICAgICAgICByYW5nZXBpY2tlckVsLmlubmVySFRNTCA9IFwiXFxuICAgICAgPGxhYmVsPlwiICsgbGFiZWwgKyBcIjwvbGFiZWw+XFxuICAgICAgPGRpdiBjbGFzcz0nb3V0ZXItYm94XCIgKyAoX3RoaXMub3B0aW9ucy5yZWFkT25seSA/IFwiIGRpc2FibGVkXCIgOiBcIlwiKSArIFwiJz5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlci1ib3hcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJzXFxcIiBzdHlsZT1cXFwibWFyZ2luOjAgLVwiICsgMTAwIC8gNCAvIF90aGlzLm9wdGlvbnMuc2VwYXJhdG9ycy5sZW5ndGggKyBcIiVcXFwiPlxcbiAgICAgICAgICAgIFwiICsgX3RoaXMub3B0aW9ucy5zZXBhcmF0b3JzXHJcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChsYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPGRpdiBjbGFzcz0naGVhZGVyJz5cXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGVhZGVyLWxhYmVsXFxcIj5cIiArIGxhYmVsICsgXCI8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlwiO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmpvaW4oXCIgXCIpICsgXCJcXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlcGFyYXRvcnNcXFwiICBzdHlsZT1cXFwicGFkZGluZzowIFwiICsgMTAwIC8gNCAvIF90aGlzLm9wdGlvbnMuc2VwYXJhdG9ycy5sZW5ndGggKyBcIiVcXFwiPlxcbiAgICAgICAgICAgIFwiICsgX3RoaXMub3B0aW9ucy5zZXBhcmF0b3JzXHJcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIjxkaXYgY2xhc3M9J3NlcGFyYXRvcic+PC9kaXY+XCI7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuam9pbihcIiBcIikgKyBcIlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFkZGVkLWJveFxcXCIgIHN0eWxlPVxcXCJwYWRkaW5nOjAgXCIgKyAxMDAgLyA0IC8gX3RoaXMub3B0aW9ucy5zZXBhcmF0b3JzLmxlbmd0aCArIFwiJVxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlbGVjdG9yLWJveFxcXCI+PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwb3B1cC1wYWRkZWQtYm94XFxcIiBzdHlsZT1cXFwicGFkZGluZzowIFwiICsgMTAwIC8gNCAvIF90aGlzLm9wdGlvbnMuc2VwYXJhdG9ycy5sZW5ndGggKyBcIiVcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicG9wdXAtdHJhY2tcXFwiID5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicG9wdXBcXFwiPlxcbiAgICAgICAgICAgIDxwPkZyb206PHNwYW4gY2xhc3M9XFxcImZyb20tdmFsdWVcXFwiPjwvc3Bhbj48L3A+XFxuICAgICAgICAgICAgPHA+VG86PHNwYW4gY2xhc3M9XFxcInRvLXZhbHVlXFxcIj48L3NwYW4+PC9wPlxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0bi1yZW1vdmVcXFwiPlJlbW92ZTwvYnV0dG9uPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYXJyb3dcXFwiPjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgXFxuICAgICAgXCI7XHJcbiAgICAgICAgICAgIHJhbmdlcGlja2VyRWwucXVlcnlTZWxlY3RvcihcIi5idG4tcmVtb3ZlXCIpLm9ucG9pbnRlcmRvd24gPSBfdGhpcy5oYW5kbGVSZW1vdmVEb3duO1xyXG4gICAgICAgICAgICByYW5nZXBpY2tlckVsLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXJlbW92ZVwiKS5vbmNsaWNrID0gX3RoaXMuaGFuZGxlUmVtb3ZlQ2xpY2s7XHJcbiAgICAgICAgICAgIHJldHVybiByYW5nZXBpY2tlckVsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jcmVhdGVSYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJhbmdlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICByYW5nZUVsLmNsYXNzTmFtZSA9IFwiUmFuZ2VcIjtcclxuICAgICAgICAgICAgcmFuZ2VFbC5kYXRhc2V0LmluZGV4ID0gX3RoaXMucmFuZ2VFbHMubGVuZ3RoLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHJhbmdlRWwudGFiSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgcmFuZ2VFbC5vbmZvY3VzID0gX3RoaXMuaGFuZGxlUmFuZ2VGb2N1cztcclxuICAgICAgICAgICAgcmFuZ2VFbC5vbmJsdXIgPSBfdGhpcy5oYW5kbGVSYW5nZUJsdXI7XHJcbiAgICAgICAgICAgIHJhbmdlRWwuaW5uZXJIVE1MID0gXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhhbmRsZXNcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZWZ0LWhhbmRsZVxcXCI+PC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJpZ2h0LWhhbmRsZVxcXCI+PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImxhYmVsc1xcXCI+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJsZWZ0XFxcIj48L3NwYW4+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJyaWdodFxcXCI+PC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgXCI7XHJcbiAgICAgICAgICAgIHZhciBsZWZ0SGFuZGxlID0gcmFuZ2VFbC5xdWVyeVNlbGVjdG9yKFwiLmxlZnQtaGFuZGxlXCIpO1xyXG4gICAgICAgICAgICB2YXIgcmlnaHRIYW5kbGUgPSByYW5nZUVsLnF1ZXJ5U2VsZWN0b3IoXCIucmlnaHQtaGFuZGxlXCIpO1xyXG4gICAgICAgICAgICBsZWZ0SGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBfdGhpcy5oYW5kbGVMZWZ0RHJhZ1N0YXJ0KTtcclxuICAgICAgICAgICAgcmlnaHRIYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIF90aGlzLmhhbmRsZVJpZ2h0RHJhZ1N0YXJ0KTtcclxuICAgICAgICAgICAgcmFuZ2VFbC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgX3RoaXMuaGFuZGxlTWlkRHJhZ1N0YXJ0KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJhbmdlRWw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnRvZ2dsZVJlYWRPbmx5ID0gZnVuY3Rpb24gKHJlYWRPbmx5KSB7XHJcbiAgICAgICAgICAgIF90aGlzLm9wdGlvbnMucmVhZE9ubHkgPVxyXG4gICAgICAgICAgICAgICAgcmVhZE9ubHkgIT09IHVuZGVmaW5lZCA/IHJlYWRPbmx5IDogIV90aGlzLm9wdGlvbnMucmVhZE9ubHk7XHJcbiAgICAgICAgICAgIHZhciBvdXRlckJveCA9IF90aGlzLnJhbmdlcGlja2VyRWwucXVlcnlTZWxlY3RvcihcIi5vdXRlci1ib3hcIik7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnJlYWRPbmx5ICYmICFvdXRlckJveC5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgb3V0ZXJCb3guY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCFfdGhpcy5vcHRpb25zLnJlYWRPbmx5ICYmXHJcbiAgICAgICAgICAgICAgICBvdXRlckJveC5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgb3V0ZXJCb3guY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZVZhbHVlQ2hhbmdlID0gZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgbmV3UmFuZ2VzID0gX19zcHJlYWQoX3RoaXMucmFuZ2VzKTtcclxuICAgICAgICAgICAgbmV3UmFuZ2VzW2luZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgIGZyb21UaW1lOiBNYXRoLm1heCh2YWx1ZS5mcm9tVGltZSwgMCksXHJcbiAgICAgICAgICAgICAgICB0b1RpbWU6IE1hdGgubWluKHZhbHVlLnRvVGltZSwgX3RoaXMub3B0aW9ucy50b3RhbCksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciBvdmVybGFwID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNPdmVybGFwcGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbmV3UmFuZ2VzLmZvckVhY2goZnVuY3Rpb24gKHJhbmdlLCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLmZyb21UaW1lIDwgcmFuZ2UudG9UaW1lICYmIHZhbHVlLnRvVGltZSA+IHJhbmdlLnRvVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc092ZXJsYXBwaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2UudG9UaW1lID0gdmFsdWUuZnJvbVRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS50b1RpbWUgPiByYW5nZS5mcm9tVGltZSAmJiB2YWx1ZS5mcm9tVGltZSA8IHJhbmdlLnRvVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc092ZXJsYXBwaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2UuZnJvbVRpbWUgPSB2YWx1ZS50b1RpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzT3ZlcmxhcHBpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVybGFwID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHdoaWxlIChvdmVybGFwKSB7XHJcbiAgICAgICAgICAgICAgICBfbG9vcF8xKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuc2V0UmFuZ2VzKG5ld1Jhbmdlcyk7XHJcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZW1vdmVSYW5nZSA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZGVsZXRlZFJhbmdlO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmdlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlZFJhbmdlID0gdGhpcy5yYW5nZUVscy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlZFJhbmdlWzBdLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZGVsZXRlZFJhbmdlWzBdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmFuZ2VFbHMuZm9yRWFjaChmdW5jdGlvbiAocmFuZ2VFbCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICByYW5nZUVsLmRhdGFzZXQuaW5kZXggPSBpbmRleC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUmFuZ2VVcGRhdGUgPSBmdW5jdGlvbiAocmFuZ2VFbCkge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChyYW5nZUVsLmRhdGFzZXQuaW5kZXgpO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5yYW5nZXNbaW5kZXhdLCBmcm9tVGltZSA9IF9hLmZyb21UaW1lLCB0b1RpbWUgPSBfYS50b1RpbWU7XHJcbiAgICAgICAgICAgIHJhbmdlRWwuc3R5bGUud2lkdGggPVxyXG4gICAgICAgICAgICAgICAgKCh0b1RpbWUgLSBmcm9tVGltZSkgKiAxMDApIC8gX3RoaXMub3B0aW9ucy50b3RhbCArIFwiJVwiO1xyXG4gICAgICAgICAgICByYW5nZUVsLnN0eWxlLmxlZnQgPSAoZnJvbVRpbWUgKiAxMDApIC8gX3RoaXMub3B0aW9ucy50b3RhbCArIFwiJVwiO1xyXG4gICAgICAgICAgICB2YXIgbGVmdExhYmVsID0gcmFuZ2VFbC5xdWVyeVNlbGVjdG9yKFwiLmxhYmVscyAubGVmdFwiKTtcclxuICAgICAgICAgICAgdmFyIHJpZ2h0TGFiZWwgPSByYW5nZUVsLnF1ZXJ5U2VsZWN0b3IoXCIubGFiZWxzIC5yaWdodFwiKTtcclxuICAgICAgICAgICAgbGVmdExhYmVsLmlubmVySFRNTCA9IF90aGlzLm9wdGlvbnMuY29udmVydEZ1bmMoZnJvbVRpbWUpO1xyXG4gICAgICAgICAgICByaWdodExhYmVsLmlubmVySFRNTCA9IF90aGlzLm9wdGlvbnMuY29udmVydEZ1bmModG9UaW1lKTtcclxuICAgICAgICAgICAgaWYgKHJhbmdlRWwuY2xpZW50V2lkdGggPCA3MCkge1xyXG4gICAgICAgICAgICAgICAgcmlnaHRMYWJlbC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByaWdodExhYmVsLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmFuZ2VFbC5jbGllbnRXaWR0aCA8IDMwKSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0TGFiZWwuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGVmdExhYmVsLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRSYW5nZXMgPSBmdW5jdGlvbiAocmFuZ2VzKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnJhbmdlcyA9IHJhbmdlcztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQm94Q2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLmJveEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZGVsdGEgPSBlLmNsaWVudFggLSBnZXRPZmZzZXQoX3RoaXMuYm94RWxlbWVudCkubGVmdDtcclxuICAgICAgICAgICAgX3RoaXMuaW5pdGlhbE1vdXNlWCA9IGUuY2xpZW50WDtcclxuICAgICAgICAgICAgdmFyIHRhcmdldFN0YXJ0ID0gMDtcclxuICAgICAgICAgICAgaWYgKGRlbHRhID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlbHRhUGVyY2VudCA9IGRlbHRhIC8gX3RoaXMuYm94RWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgICAgICAgICAgIHRhcmdldFN0YXJ0ID0gX3RoaXMub3B0aW9ucy50b3RhbCAqIGRlbHRhUGVyY2VudDtcclxuICAgICAgICAgICAgICAgIHZhciByZW1haW5kZXIgPSB0YXJnZXRTdGFydCAlIF90aGlzLm9wdGlvbnMuc3RlcDtcclxuICAgICAgICAgICAgICAgIHZhciBoYWxmU3RlcCA9IF90aGlzLm9wdGlvbnMuc3RlcCAvIDI7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVtYWluZGVyIDwgaGFsZlN0ZXApIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTdGFydCAtPSByZW1haW5kZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTdGFydCAtPSByZW1haW5kZXIgLSBfdGhpcy5vcHRpb25zLnN0ZXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF90aGlzLnJhbmdlcy5sZW5ndGggPCBfdGhpcy5vcHRpb25zLm1heFJhbmdlc0Ftb3VudCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY3JlYXRpbmdOZXcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJhbmdlRWxfMSA9IF90aGlzLmNyZWF0ZVJhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5ib3hFbGVtZW50LmFwcGVuZENoaWxkKHJhbmdlRWxfMSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3UmFuZ2VzID0gX19zcHJlYWQoX3RoaXMucmFuZ2VzKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHZhbHVlID0ge1xyXG4gICAgICAgICAgICAgICAgLy8gICBmcm9tVGltZTogTWF0aC5tYXgoMCwgdGFyZ2V0U3RhcnQgLSA0NSksXHJcbiAgICAgICAgICAgICAgICAvLyAgIHRvVGltZTogTWF0aC5taW4odGFyZ2V0U3RhcnQgKyAxNSwgdGhpcy5vcHRpb25zLnRvdGFsKSxcclxuICAgICAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVfMSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tVGltZTogdGFyZ2V0U3RhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9UaW1lOiB0YXJnZXRTdGFydCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXhfMSA9IHBhcnNlSW50KHJhbmdlRWxfMS5kYXRhc2V0LmluZGV4KTtcclxuICAgICAgICAgICAgICAgIHZhciBvdmVybGFwID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHZhciBfbG9vcF8yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc092ZXJsYXBwaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3UmFuZ2VzLmZvckVhY2goZnVuY3Rpb24gKHJhbmdlLCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09PSBpbmRleF8xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlXzEuZnJvbVRpbWUgPCByYW5nZS50b1RpbWUgJiYgdmFsdWVfMS50b1RpbWUgPiByYW5nZS50b1RpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3ZlcmxhcHBpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2UudG9UaW1lID0gdmFsdWVfMS5mcm9tVGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVfMS50b1RpbWUgPiByYW5nZS5mcm9tVGltZSAmJiB2YWx1ZV8xLmZyb21UaW1lIDwgcmFuZ2UudG9UaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc092ZXJsYXBwaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLmZyb21UaW1lID0gdmFsdWVfMS50b1RpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzT3ZlcmxhcHBpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxhcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAob3ZlcmxhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9sb29wXzIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5ld1Jhbmdlcy5wdXNoKHZhbHVlXzEpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0UmFuZ2VzKG5ld1Jhbmdlcyk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5kcmFnZ2luZ0VsID0gcmFuZ2VFbF8xO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2VFbF8xLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnJhbmdlRWxzLnB1c2gocmFuZ2VFbF8xKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmRyYWdDYXB0dXJlZEZyb20gPSBfdGhpcy5yYW5nZXNbaW5kZXhfMV0uZnJvbVRpbWU7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5kcmFnQ2FwdHVyZWRUbyA9IF90aGlzLnJhbmdlc1tpbmRleF8xXS50b1RpbWU7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5sYXN0WCA9IGUuY2xpZW50WDtcclxuICAgICAgICAgICAgICAgIF90aGlzLmRyYWdDYXB0dXJlZEZyb20gPSBfdGhpcy5yYW5nZXNbaW5kZXhfMV0uZnJvbVRpbWU7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5kcmFnQ2FwdHVyZWRUbyA9IF90aGlzLnJhbmdlc1tpbmRleF8xXS50b1RpbWU7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50Lm9ucG9pbnRlcnVwID0gX3RoaXMuc3RvcERyYWc7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJtb3ZlID0gX3RoaXMuaGFuZGxlUmlnaHREcmFnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNoZWNrRGVsZXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZV8xLCBfYTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXMoX3RoaXMucmFuZ2VzLmVudHJpZXMoKSksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2QgPSBfX3JlYWQoX2MudmFsdWUsIDIpLCBpbmRleCA9IF9kWzBdLCByYW5nZSA9IF9kWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0RyYWdFbCA9IF90aGlzLmRyYWdnaW5nRWwgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZHJhZ2dpbmdFbC5kYXRhc2V0LmluZGV4ID09PSBpbmRleC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNEcmFnRWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJhbmdlLnRvVGltZSAtIHJhbmdlLmZyb21UaW1lIDwgX3RoaXMub3B0aW9ucy5zdGVwIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZS5mcm9tVGltZSA+IF90aGlzLm9wdGlvbnMudG90YWwgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLnRvVGltZSA8IF90aGlzLm9wdGlvbnMuc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVtb3ZlUmFuZ2UoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2hlY2tEZWxldGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxyXG4gICAgICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndhaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgNDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jaGVja0RlbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yYW5nZUVscy5mb3JFYWNoKGZ1bmN0aW9uIChyYW5nZUVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVSYW5nZVVwZGF0ZShyYW5nZUVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm9uQ2hhbmdlKF90aGlzLnJhbmdlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5mb2N1c2VkUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJhbmdlcGlja2VyRWwucXVlcnlTZWxlY3RvcihcIi5mcm9tLXZhbHVlXCIpLmlubmVySFRNTCA9IF90aGlzLmZvY3VzZWRSYW5nZS5xdWVyeVNlbGVjdG9yKFwiLmxhYmVscyAubGVmdFwiKS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yYW5nZXBpY2tlckVsLnF1ZXJ5U2VsZWN0b3IoXCIudG8tdmFsdWVcIikuaW5uZXJIVE1MID0gX3RoaXMuZm9jdXNlZFJhbmdlLnF1ZXJ5U2VsZWN0b3IoXCIubGFiZWxzIC5yaWdodFwiKS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVQb3B1cFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm90dGxlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2hlY2tEZWxldGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmFuZ2VFbHMuZm9yRWFjaChmdW5jdGlvbiAocmFuZ2VFbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlUmFuZ2VVcGRhdGUocmFuZ2VFbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5vbkNoYW5nZShfdGhpcy5yYW5nZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuZm9jdXNlZFJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yYW5nZXBpY2tlckVsLnF1ZXJ5U2VsZWN0b3IoXCIuZnJvbS12YWx1ZVwiKS5pbm5lckhUTUwgPSBfdGhpcy5mb2N1c2VkUmFuZ2UucXVlcnlTZWxlY3RvcihcIi5sYWJlbHMgLmxlZnRcIikuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmFuZ2VwaWNrZXJFbC5xdWVyeVNlbGVjdG9yKFwiLnRvLXZhbHVlXCIpLmlubmVySFRNTCA9IF90aGlzLmZvY3VzZWRSYW5nZS5xdWVyeVNlbGVjdG9yKFwiLmxhYmVscyAucmlnaHRcIikuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlUG9wdXBQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTsgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZVBvcHVwUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghX3RoaXMuZm9jdXNlZFJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHBvcHVwID0gX3RoaXMucmFuZ2VwaWNrZXJFbC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpO1xyXG4gICAgICAgICAgICB2YXIgcG9wdXBBcnJvdyA9IF90aGlzLnJhbmdlcGlja2VyRWwucXVlcnlTZWxlY3RvcihcIi5hcnJvd1wiKTtcclxuICAgICAgICAgICAgdmFyIHBvcHVwVHJhY2sgPSBfdGhpcy5ib3hFbGVtZW50O1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0UG9zID0gX3RoaXMuZm9jdXNlZFJhbmdlLm9mZnNldExlZnQgKyBfdGhpcy5mb2N1c2VkUmFuZ2UuY2xpZW50V2lkdGggLyAyO1xyXG4gICAgICAgICAgICB2YXIgbWluUG9zID0gcG9wdXAuY2xpZW50V2lkdGggLyAyIC0gMTI7XHJcbiAgICAgICAgICAgIHZhciBtYXhQb3MgPSBwb3B1cFRyYWNrLmNsaWVudFdpZHRoIC0gcG9wdXAuY2xpZW50V2lkdGggLyAyICsgMTI7XHJcbiAgICAgICAgICAgIHBvcHVwLnN0eWxlLmxlZnQgPSBNYXRoLm1pbihNYXRoLm1heChtaW5Qb3MsIHRhcmdldFBvcyksIG1heFBvcykgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHBvcHVwQXJyb3cuc3R5bGUubGVmdCA9IE1hdGgubWluKHRhcmdldFBvcywgcG9wdXBUcmFjay5jbGllbnRXaWR0aCkgKyBcInB4XCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZVJlbW92ZURvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5mb2N1c2VkUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmZvY3VzZWRSYW5nZS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZVJlbW92ZUNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKF90aGlzLmZvY3VzZWRSYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlkeCA9IF90aGlzLmZvY3VzZWRSYW5nZS5kYXRhc2V0LmluZGV4O1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucmVtb3ZlUmFuZ2UoaWR4KTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmhhbmRsZVJhbmdlQmx1cigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZVJhbmdlRm9jdXMgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5wb3B1cENsb3NlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLnBvcHVwQ2xvc2VUaW1lb3V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5mb2N1c2VkUmFuZ2UgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgKF9iID0gKF9hID0gX3RoaXMucmFuZ2VwaWNrZXJFbCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtdHJhY2tcIikpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xvc2luZ1wiKTtcclxuICAgICAgICAgICAgKF9kID0gKF9jID0gX3RoaXMucmFuZ2VwaWNrZXJFbCkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtdHJhY2tcIikpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgX3RoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZVJhbmdlQmx1ciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuZm9jdXNlZFJhbmdlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuZm9jdXNlZFJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnBvcHVwQ2xvc2VUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5wb3B1cENsb3NlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3B1cFRyYWNrXzEgPSAoX2EgPSBfdGhpcy5yYW5nZXBpY2tlckVsKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcihcIi5wb3B1cC10cmFja1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcG9wdXBfMSA9IHBvcHVwVHJhY2tfMS5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3B1cEFycm93XzEgPSBwb3B1cFRyYWNrXzEucXVlcnlTZWxlY3RvcihcIi5hcnJvd1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cFRyYWNrXzEgPT09IG51bGwgfHwgcG9wdXBUcmFja18xID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwb3B1cFRyYWNrXzEuY2xhc3NMaXN0LmFkZChcImNsb3NpbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucG9wdXBDbG9zZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBUcmFja18xID09PSBudWxsIHx8IHBvcHVwVHJhY2tfMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcG9wdXBUcmFja18xLmNsYXNzTGlzdC5yZW1vdmUoXCJjbG9zaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1cFRyYWNrXzEgPT09IG51bGwgfHwgcG9wdXBUcmFja18xID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwb3B1cFRyYWNrXzEuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwXzEuc3R5bGUubGVmdCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwQXJyb3dfMS5zdHlsZS5sZWZ0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc3RvcERyYWcgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBfdGhpcy5kcmFnQnVmZmVyID0gMDtcclxuICAgICAgICAgICAgaWYgKF90aGlzLmNyZWF0aW5nTmV3ICYmIGUgJiYgX3RoaXMuZHJhZ2dpbmdFbCAmJiBfdGhpcy5ib3hFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLmRyYWdnaW5nRWwuY2xpZW50V2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGEgPSBlLmNsaWVudFggLSBnZXRPZmZzZXQoX3RoaXMuYm94RWxlbWVudCkubGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5pbml0aWFsTW91c2VYID0gZS5jbGllbnRYO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRTdGFydCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlbHRhID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGFQZXJjZW50ID0gZGVsdGEgLyBfdGhpcy5ib3hFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRTdGFydCA9IF90aGlzLm9wdGlvbnMudG90YWwgKiBkZWx0YVBlcmNlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZW1haW5kZXIgPSB0YXJnZXRTdGFydCAlIF90aGlzLm9wdGlvbnMuc3RlcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhhbGZTdGVwID0gX3RoaXMub3B0aW9ucy5zdGVwIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbWFpbmRlciA8IGhhbGZTdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRTdGFydCAtPSByZW1haW5kZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRTdGFydCAtPSByZW1haW5kZXIgLSBfdGhpcy5vcHRpb25zLnN0ZXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JhbmdlcyA9IF9fc3ByZWFkKF90aGlzLnJhbmdlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlXzIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21UaW1lOiBNYXRoLm1heCgwLCB0YXJnZXRTdGFydCAtIDYwKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9UaW1lOiBNYXRoLm1pbih0YXJnZXRTdGFydCwgX3RoaXMub3B0aW9ucy50b3RhbCksXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXhfMiA9IHBhcnNlSW50KF90aGlzLmRyYWdnaW5nRWwuZGF0YXNldC5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG92ZXJsYXAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfbG9vcF8zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNPdmVybGFwcGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdSYW5nZXMuZm9yRWFjaChmdW5jdGlvbiAocmFuZ2UsIGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09PSBpbmRleF8yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlXzIuZnJvbVRpbWUgPCByYW5nZS50b1RpbWUgJiYgdmFsdWVfMi50b1RpbWUgPiByYW5nZS50b1RpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc092ZXJsYXBwaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZS50b1RpbWUgPSB2YWx1ZV8yLmZyb21UaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlXzIudG9UaW1lID4gcmFuZ2UuZnJvbVRpbWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZV8yLmZyb21UaW1lIDwgcmFuZ2UudG9UaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPdmVybGFwcGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2UuZnJvbVRpbWUgPSB2YWx1ZV8yLnRvVGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNPdmVybGFwcGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxhcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAob3ZlcmxhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfbG9vcF8zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1Jhbmdlc1tpbmRleF8yXSA9IHZhbHVlXzI7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0UmFuZ2VzKG5ld1Jhbmdlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuY3JlYXRpbmdOZXcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQub25wb2ludGVybW92ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIF90aGlzLmRyYWdnaW5nRWwgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIF90aGlzLmNoZWNrRGVsZXRlKCk7XHJcbiAgICAgICAgICAgIF90aGlzLm9uQ2hhbmdlKF90aGlzLnJhbmdlcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZUxlZnREcmFnU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIF90aGlzLmRyYWdnaW5nRWwgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnRcclxuICAgICAgICAgICAgICAgIC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICBfdGhpcy5sYXN0WCA9IGV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KF90aGlzLmRyYWdnaW5nRWwuZGF0YXNldC5pbmRleCk7XHJcbiAgICAgICAgICAgIF90aGlzLmRyYWdDYXB0dXJlZEZyb20gPSBfdGhpcy5yYW5nZXNbaW5kZXhdLmZyb21UaW1lO1xyXG4gICAgICAgICAgICBfdGhpcy5kcmFnQ2FwdHVyZWRUbyA9IF90aGlzLnJhbmdlc1tpbmRleF0udG9UaW1lO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJ1cCA9IF90aGlzLnN0b3BEcmFnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJtb3ZlID0gX3RoaXMuaGFuZGxlTGVmdERyYWc7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZVJpZ2h0RHJhZ1N0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBfdGhpcy5kcmFnZ2luZ0VsID0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgX3RoaXMubGFzdFggPSBldmVudC5jbGllbnRYO1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChfdGhpcy5kcmFnZ2luZ0VsLmRhdGFzZXQuaW5kZXgpO1xyXG4gICAgICAgICAgICBfdGhpcy5kcmFnQ2FwdHVyZWRGcm9tID0gX3RoaXMucmFuZ2VzW2luZGV4XS5mcm9tVGltZTtcclxuICAgICAgICAgICAgX3RoaXMuZHJhZ0NhcHR1cmVkVG8gPSBfdGhpcy5yYW5nZXNbaW5kZXhdLnRvVGltZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQub25wb2ludGVydXAgPSBfdGhpcy5zdG9wRHJhZztcclxuICAgICAgICAgICAgZG9jdW1lbnQub25wb2ludGVybW92ZSA9IF90aGlzLmhhbmRsZVJpZ2h0RHJhZztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTWlkRHJhZ1N0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBfdGhpcy5kcmFnZ2luZ0VsID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICAgICAgX3RoaXMubGFzdFggPSBldmVudC5jbGllbnRYO1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChfdGhpcy5kcmFnZ2luZ0VsLmRhdGFzZXQuaW5kZXgpO1xyXG4gICAgICAgICAgICBfdGhpcy5kcmFnQ2FwdHVyZWRGcm9tID0gX3RoaXMucmFuZ2VzW2luZGV4XS5mcm9tVGltZTtcclxuICAgICAgICAgICAgX3RoaXMuZHJhZ0NhcHR1cmVkVG8gPSBfdGhpcy5yYW5nZXNbaW5kZXhdLnRvVGltZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQub25wb2ludGVydXAgPSBfdGhpcy5zdG9wRHJhZztcclxuICAgICAgICAgICAgZG9jdW1lbnQub25wb2ludGVybW92ZSA9IF90aGlzLmhhbmRsZU1pZERyYWc7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZUxlZnREcmFnID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBpc0hlbGREb3duID0gZXZlbnQuYnV0dG9ucyA9PT0gdW5kZWZpbmVkID8gZXZlbnQud2hpY2ggPT09IDEgOiBldmVudC5idXR0b25zID09PSAxO1xyXG4gICAgICAgICAgICBpZiAoIWlzSGVsZERvd24pIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnN0b3BEcmFnKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGVsID0gX3RoaXMuZHJhZ2dpbmdFbDtcclxuICAgICAgICAgICAgaWYgKCFlbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KGVsLmRhdGFzZXQuaW5kZXgpO1xyXG4gICAgICAgICAgICB2YXIgZGVsdGEgPSBldmVudC5jbGllbnRYIC0gX3RoaXMubGFzdFg7XHJcbiAgICAgICAgICAgIHZhciBkZWx0YVBlcmNlbnQgPSBkZWx0YSAvIGVsLnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgICAgIHZhciBkZWx0YVZhbHVlID0gZGVsdGFQZXJjZW50ICogX3RoaXMub3B0aW9ucy50b3RhbDtcclxuICAgICAgICAgICAgdmFyIHJlbWFpbmRlciA9IGRlbHRhVmFsdWUgJSBfdGhpcy5vcHRpb25zLnN0ZXA7XHJcbiAgICAgICAgICAgIHZhciBoYWxmU3RlcCA9IF90aGlzLm9wdGlvbnMuc3RlcCAvIDI7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhyZW1haW5kZXIpIDwgaGFsZlN0ZXApIHtcclxuICAgICAgICAgICAgICAgIGRlbHRhVmFsdWUgLT0gcmVtYWluZGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVsdGFWYWx1ZSAtPVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmRlciArIChkZWx0YVZhbHVlID4gMCA/IC1fdGhpcy5vcHRpb25zLnN0ZXAgOiBfdGhpcy5vcHRpb25zLnN0ZXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkZWx0YVZhbHVlIC0gX3RoaXMuZHJhZ0J1ZmZlciA8IF90aGlzLm9wdGlvbnMuc3RlcCAmJlxyXG4gICAgICAgICAgICAgICAgZGVsdGFWYWx1ZSAtIF90aGlzLmRyYWdCdWZmZXIgPiAtX3RoaXMub3B0aW9ucy5zdGVwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuZHJhZ0J1ZmZlciA9IGRlbHRhVmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBuZXdTdGFydCA9IF90aGlzLmRyYWdDYXB0dXJlZEZyb207XHJcbiAgICAgICAgICAgIHZhciBuZXdFbmQgPSBfdGhpcy5kcmFnQ2FwdHVyZWRUbztcclxuICAgICAgICAgICAgaWYgKG5ld0VuZCAtIChuZXdTdGFydCArIGRlbHRhVmFsdWUpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgbmV3U3RhcnQgPSBuZXdFbmQ7XHJcbiAgICAgICAgICAgICAgICBuZXdFbmQgPSBuZXdFbmQgKyBkZWx0YVZhbHVlIC0gKG5ld0VuZCAtIF90aGlzLmRyYWdDYXB0dXJlZEZyb20pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3U3RhcnQgKz0gZGVsdGFWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZShpbmRleCwgeyBmcm9tVGltZTogbmV3U3RhcnQsIHRvVGltZTogbmV3RW5kIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSaWdodERyYWcgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIGlzSGVsZERvd24gPSBldmVudC5idXR0b25zID09PSB1bmRlZmluZWQgPyBldmVudC53aGljaCA9PT0gMSA6IGV2ZW50LmJ1dHRvbnMgPT09IDE7XHJcbiAgICAgICAgICAgIGlmICghaXNIZWxkRG93bikge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc3RvcERyYWcoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZWwgPSBfdGhpcy5kcmFnZ2luZ0VsO1xyXG4gICAgICAgICAgICBpZiAoIWVsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoZWwuZGF0YXNldC5pbmRleCk7XHJcbiAgICAgICAgICAgIHZhciBkZWx0YSA9IGV2ZW50LmNsaWVudFggLSBfdGhpcy5sYXN0WDtcclxuICAgICAgICAgICAgdmFyIGRlbHRhUGVyY2VudCA9IGRlbHRhIC8gZWwucGFyZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgICAgICAgdmFyIGRlbHRhVmFsdWUgPSBkZWx0YVBlcmNlbnQgKiBfdGhpcy5vcHRpb25zLnRvdGFsO1xyXG4gICAgICAgICAgICB2YXIgcmVtYWluZGVyID0gZGVsdGFWYWx1ZSAlIF90aGlzLm9wdGlvbnMuc3RlcDtcclxuICAgICAgICAgICAgdmFyIGhhbGZTdGVwID0gX3RoaXMub3B0aW9ucy5zdGVwIC8gMjtcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHJlbWFpbmRlcikgPCBoYWxmU3RlcCkge1xyXG4gICAgICAgICAgICAgICAgZGVsdGFWYWx1ZSAtPSByZW1haW5kZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZWx0YVZhbHVlIC09XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluZGVyICsgKGRlbHRhVmFsdWUgPiAwID8gLV90aGlzLm9wdGlvbnMuc3RlcCA6IF90aGlzLm9wdGlvbnMuc3RlcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRlbHRhVmFsdWUgLSBfdGhpcy5kcmFnQnVmZmVyIDwgX3RoaXMub3B0aW9ucy5zdGVwICYmXHJcbiAgICAgICAgICAgICAgICBkZWx0YVZhbHVlIC0gX3RoaXMuZHJhZ0J1ZmZlciA+IC1fdGhpcy5vcHRpb25zLnN0ZXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5kcmFnQnVmZmVyID0gZGVsdGFWYWx1ZTtcclxuICAgICAgICAgICAgX3RoaXMuY3JlYXRpbmdOZXcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIG5ld1N0YXJ0ID0gX3RoaXMuZHJhZ0NhcHR1cmVkRnJvbTtcclxuICAgICAgICAgICAgdmFyIG5ld0VuZCA9IF90aGlzLmRyYWdDYXB0dXJlZFRvO1xyXG4gICAgICAgICAgICBpZiAobmV3RW5kICsgZGVsdGFWYWx1ZSAtIG5ld1N0YXJ0IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgbmV3U3RhcnQgPSBuZXdTdGFydCArIGRlbHRhVmFsdWUgLSAobmV3U3RhcnQgLSBuZXdFbmQpO1xyXG4gICAgICAgICAgICAgICAgbmV3RW5kID0gX3RoaXMuZHJhZ0NhcHR1cmVkRnJvbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld0VuZCArPSBkZWx0YVZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLmhhbmRsZVZhbHVlQ2hhbmdlKGluZGV4LCB7IGZyb21UaW1lOiBuZXdTdGFydCwgdG9UaW1lOiBuZXdFbmQgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZU1pZERyYWcgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIGlzSGVsZERvd24gPSBldmVudC5idXR0b25zID09PSB1bmRlZmluZWQgPyBldmVudC53aGljaCA9PT0gMSA6IGV2ZW50LmJ1dHRvbnMgPT09IDE7XHJcbiAgICAgICAgICAgIGlmICghaXNIZWxkRG93bikge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc3RvcERyYWcoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZWwgPSBfdGhpcy5kcmFnZ2luZ0VsO1xyXG4gICAgICAgICAgICBpZiAoIWVsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoZWwuZGF0YXNldC5pbmRleCk7XHJcbiAgICAgICAgICAgIHZhciBkZWx0YSA9IGV2ZW50LmNsaWVudFggLSBfdGhpcy5sYXN0WDtcclxuICAgICAgICAgICAgdmFyIGRlbHRhUGVyY2VudCA9IGRlbHRhIC8gZWwucGFyZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgICAgICAgdmFyIGRlbHRhVmFsdWUgPSBkZWx0YVBlcmNlbnQgKiBfdGhpcy5vcHRpb25zLnRvdGFsO1xyXG4gICAgICAgICAgICB2YXIgcmVtYWluZGVyID0gZGVsdGFWYWx1ZSAlIF90aGlzLm9wdGlvbnMuc3RlcDtcclxuICAgICAgICAgICAgdmFyIGhhbGZTdGVwID0gX3RoaXMub3B0aW9ucy5zdGVwIC8gMjtcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHJlbWFpbmRlcikgPCBoYWxmU3RlcCkge1xyXG4gICAgICAgICAgICAgICAgZGVsdGFWYWx1ZSAtPSByZW1haW5kZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZWx0YVZhbHVlIC09XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluZGVyICsgKGRlbHRhVmFsdWUgPiAwID8gLV90aGlzLm9wdGlvbnMuc3RlcCA6IF90aGlzLm9wdGlvbnMuc3RlcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRlbHRhVmFsdWUgLSBfdGhpcy5kcmFnQnVmZmVyIDwgX3RoaXMub3B0aW9ucy5zdGVwICYmXHJcbiAgICAgICAgICAgICAgICBkZWx0YVZhbHVlIC0gX3RoaXMuZHJhZ0J1ZmZlciA+IC1fdGhpcy5vcHRpb25zLnN0ZXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5kcmFnQnVmZmVyID0gZGVsdGFWYWx1ZTtcclxuICAgICAgICAgICAgX3RoaXMuY3JlYXRpbmdOZXcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIG5ld1N0YXJ0ID0gX3RoaXMuZHJhZ0NhcHR1cmVkRnJvbSArIGRlbHRhVmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBuZXdFbmQgPSBfdGhpcy5kcmFnQ2FwdHVyZWRUbyArIGRlbHRhVmFsdWU7XHJcbiAgICAgICAgICAgIF90aGlzLmhhbmRsZVZhbHVlQ2hhbmdlKGluZGV4LCB7IGZyb21UaW1lOiBuZXdTdGFydCwgdG9UaW1lOiBuZXdFbmQgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5vcHRpb25zKSwgb3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2U7XHJcbiAgICAgICAgdGhpcy5yYW5nZXBpY2tlckVsID0gdGhpcy5jcmVhdGVSYW5nZXBpY2tlcihsYWJlbCk7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnJhbmdlcGlja2VyRWwpO1xyXG4gICAgICAgIHRoaXMuYm94RWxlbWVudCA9IHRoaXMucmFuZ2VwaWNrZXJFbC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdG9yLWJveFwiKTtcclxuICAgICAgICB0aGlzLmJveEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIHRoaXMuaGFuZGxlQm94Q2xpY2spO1xyXG4gICAgICAgIHRoaXMucmFuZ2VzID0gdmFsdWVzO1xyXG4gICAgICAgIHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uIChyYW5nZSkge1xyXG4gICAgICAgICAgICB2YXIgcmFuZ2VFbCA9IF90aGlzLmNyZWF0ZVJhbmdlKCk7XHJcbiAgICAgICAgICAgIF90aGlzLmJveEVsZW1lbnQuYXBwZW5kQ2hpbGQocmFuZ2VFbCk7XHJcbiAgICAgICAgICAgIF90aGlzLnJhbmdlRWxzLnB1c2gocmFuZ2VFbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBSYW5nZVBpY2tlcjtcclxufSgpKTtcclxuZXhwb3J0IHsgUmFuZ2VQaWNrZXIgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==