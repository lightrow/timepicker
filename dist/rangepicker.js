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
        this.handleRangeBlur = function (e) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SYW5nZVBpY2tlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9SYW5nZVBpY2tlci8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQSxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQSxtQkFBbUIsU0FBSSxJQUFJLFNBQUk7QUFDL0IsYUFBYSw2QkFBNkIsMEJBQTBCLGFBQWEsRUFBRSxxQkFBcUI7QUFDeEcsZ0JBQWdCLHFEQUFxRCxvRUFBb0UsYUFBYSxFQUFFO0FBQ3hKLHNCQUFzQixzQkFBc0IscUJBQXFCLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGtDQUFrQyxTQUFTO0FBQzNDLGtDQUFrQyxXQUFXLFVBQVU7QUFDdkQseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQSw2R0FBNkcsT0FBTyxVQUFVO0FBQzlILGdGQUFnRixpQkFBaUIsT0FBTztBQUN4Ryx3REFBd0QsZ0JBQWdCLFFBQVEsT0FBTztBQUN2Riw4Q0FBOEMsZ0JBQWdCLGdCQUFnQixPQUFPO0FBQ3JGO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTLFlBQVksYUFBYSxPQUFPLEVBQUUsVUFBVSxXQUFXO0FBQ2hFLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQSxjQUFjLFNBQUksSUFBSSxTQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixNQUFNLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxVQUFVO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiLFNBQVMsRUFBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsVUFBVTtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFFBQVEsZ0JBQWdCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBCQUEwQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUyxFQUFFO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxxQ0FBcUM7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHFDQUFxQztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHFDQUFxQztBQUNqRjtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ3NCIiwiZmlsZSI6InJhbmdlcGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn07XHJcbnZhciBfX3NwcmVhZCA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWQpIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn07XHJcbnZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59O1xyXG52YXIgaG91cnMgPSBbXTtcclxuZm9yICh2YXIgaSA9IDA7IGkgPD0gMjQ7IGkrKykge1xyXG4gICAgaG91cnMucHVzaChpKTtcclxufVxyXG52YXIgZ2V0T2Zmc2V0ID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgICB2YXIgWCA9IDA7XHJcbiAgICB2YXIgWSA9IDA7XHJcbiAgICB3aGlsZSAoZWwgJiYgIWlzTmFOKGVsLm9mZnNldExlZnQpICYmICFpc05hTihlbC5vZmZzZXRUb3ApKSB7XHJcbiAgICAgICAgWCArPSBlbC5vZmZzZXRMZWZ0IC0gZWwuc2Nyb2xsTGVmdDtcclxuICAgICAgICBZICs9IGVsLm9mZnNldFRvcCAtIGVsLnNjcm9sbFRvcDtcclxuICAgICAgICBlbCA9IGVsLm9mZnNldFBhcmVudDtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHRvcDogWSwgbGVmdDogWCB9O1xyXG59O1xyXG52YXIgY29udmVydCA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICB2YXIgaG91cnMgPSAoXCIwXCIgKyAoKG4gLyA2MCkgXiAwKSAlIDI0KS5zbGljZSgtMik7XHJcbiAgICB2YXIgbWludXRlcyA9IChcIjBcIiArIChuICUgNjApKS5zbGljZSgtMik7XHJcbiAgICByZXR1cm4gaG91cnMgKyBcIjpcIiArIG1pbnV0ZXM7XHJcbn07XHJcbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xyXG4gICAgdmFyIHRpbWVvdXQ7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcclxuICAgICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoIWltbWVkaWF0ZSlcclxuICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcclxuICAgICAgICBpZiAodGltZW91dCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChsYXRlciwgd2FpdCk7XHJcbiAgICAgICAgaWYgKGNhbGxOb3cpXHJcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIHRocm90dGxlKGNhbGxiYWNrLCBsaW1pdCkge1xyXG4gICAgdmFyIHdhaXRpbmcgPSBmYWxzZTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF3YWl0aW5nKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIHdhaXRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHdhaXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgbGltaXQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0IHZhciBpbml0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGxhYmVsLCB2YWx1ZXMsIG9uQ2hhbmdlLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgcmFuZ2VQaWNrZXIgPSBuZXcgUmFuZ2VQaWNrZXIoZWxlbWVudCwgbGFiZWwsIHZhbHVlcywgb25DaGFuZ2UsIG9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIHJhbmdlUGlja2VyO1xyXG59O1xyXG52YXIgUmFuZ2VQaWNrZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSYW5nZVBpY2tlcihlbGVtZW50LCBsYWJlbCwgdmFsdWVzLCBvbkNoYW5nZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgICAgICAgICByZWFkT25seTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN0ZXA6IDE1LFxyXG4gICAgICAgICAgICB0b3RhbDogMTQ0MCxcclxuICAgICAgICAgICAgbWF4UmFuZ2VzQW1vdW50OiA3LFxyXG4gICAgICAgICAgICBzZXBhcmF0b3JzOiBob3VycyxcclxuICAgICAgICAgICAgY29udmVydEZ1bmM6IGNvbnZlcnQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJhbmdlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9O1xyXG4gICAgICAgIHRoaXMuZHJhZ0J1ZmZlciA9IDA7XHJcbiAgICAgICAgdGhpcy5sYXN0WCA9IDA7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsTW91c2VYID0gMDtcclxuICAgICAgICB0aGlzLmxhYmVsID0gXCJcIjtcclxuICAgICAgICB0aGlzLnJhbmdlRWxzID0gW107XHJcbiAgICAgICAgdGhpcy5kcmFnQ2FwdHVyZWRGcm9tID0gMDtcclxuICAgICAgICB0aGlzLmRyYWdDYXB0dXJlZFRvID0gMDtcclxuICAgICAgICB0aGlzLmNyZWF0ZVJhbmdlcGlja2VyID0gZnVuY3Rpb24gKGxhYmVsKSB7XHJcbiAgICAgICAgICAgIHZhciByYW5nZXBpY2tlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgcmFuZ2VwaWNrZXJFbC5jbGFzc05hbWUgPSBcIlZhbHVlUmFuZ2VQaWNrZXJcIjtcclxuICAgICAgICAgICAgcmFuZ2VwaWNrZXJFbC5pbm5lckhUTUwgPSBcIlxcbiAgICAgIDxsYWJlbD5cIiArIGxhYmVsICsgXCI8L2xhYmVsPlxcbiAgICAgIDxkaXYgY2xhc3M9J291dGVyLWJveFwiICsgKF90aGlzLm9wdGlvbnMucmVhZE9ubHkgPyBcIiBkaXNhYmxlZFwiIDogXCJcIikgKyBcIic+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItYm94XFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyc1xcXCI+XFxuICAgICAgICAgICAgXCIgKyBfdGhpcy5vcHRpb25zLnNlcGFyYXRvcnNcclxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPSdoZWFkZXInPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoZWFkZXItbGFiZWxcXFwiPlwiICsgbGFiZWwgKyBcIjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XCI7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuam9pbihcIiBcIikgKyBcIlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VwYXJhdG9yc1xcXCI+XFxuICAgICAgICAgICAgXCIgKyBfdGhpcy5vcHRpb25zLnNlcGFyYXRvcnNcclxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPGRpdiBjbGFzcz0nc2VwYXJhdG9yJz48L2Rpdj5cIjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5qb2luKFwiIFwiKSArIFwiXFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYWRkZWQtYm94XFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VsZWN0b3ItYm94XFxcIj48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInBvcHVwLXRyYWNrXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBvcHVwXFxcIj5cXG4gICAgICAgICAgPHA+RnJvbTo8c3BhbiBjbGFzcz1cXFwiZnJvbS12YWx1ZVxcXCI+PC9zcGFuPjwvcD5cXG4gICAgICAgICAgPHA+VG86PHNwYW4gY2xhc3M9XFxcInRvLXZhbHVlXFxcIj48L3NwYW4+PC9wPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4tcmVtb3ZlXFxcIj5SZW1vdmU8L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYXJyb3dcXFwiPjwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIFwiO1xyXG4gICAgICAgICAgICByYW5nZXBpY2tlckVsLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXJlbW92ZVwiKS5vbnBvaW50ZXJkb3duID0gX3RoaXMuaGFuZGxlUmVtb3ZlRG93bjtcclxuICAgICAgICAgICAgcmFuZ2VwaWNrZXJFbC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1yZW1vdmVcIikub25jbGljayA9IF90aGlzLmhhbmRsZVJlbW92ZUNsaWNrO1xyXG4gICAgICAgICAgICByZXR1cm4gcmFuZ2VwaWNrZXJFbDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUmFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByYW5nZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgcmFuZ2VFbC5jbGFzc05hbWUgPSBcIlJhbmdlXCI7XHJcbiAgICAgICAgICAgIHJhbmdlRWwuZGF0YXNldC5pbmRleCA9IF90aGlzLnJhbmdlRWxzLmxlbmd0aC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICByYW5nZUVsLnRhYkluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgIHJhbmdlRWwub25mb2N1cyA9IF90aGlzLmhhbmRsZVJhbmdlRm9jdXM7XHJcbiAgICAgICAgICAgIHJhbmdlRWwub25ibHVyID0gX3RoaXMuaGFuZGxlUmFuZ2VCbHVyO1xyXG4gICAgICAgICAgICByYW5nZUVsLmlubmVySFRNTCA9IFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoYW5kbGVzXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGVmdC1oYW5kbGVcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyaWdodC1oYW5kbGVcXFwiPjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsYWJlbHNcXFwiPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibGVmdFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicmlnaHRcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIFwiO1xyXG4gICAgICAgICAgICB2YXIgbGVmdEhhbmRsZSA9IHJhbmdlRWwucXVlcnlTZWxlY3RvcihcIi5sZWZ0LWhhbmRsZVwiKTtcclxuICAgICAgICAgICAgdmFyIHJpZ2h0SGFuZGxlID0gcmFuZ2VFbC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0LWhhbmRsZVwiKTtcclxuICAgICAgICAgICAgbGVmdEhhbmRsZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgX3RoaXMuaGFuZGxlTGVmdERyYWdTdGFydCk7XHJcbiAgICAgICAgICAgIHJpZ2h0SGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBfdGhpcy5oYW5kbGVSaWdodERyYWdTdGFydCk7XHJcbiAgICAgICAgICAgIHJhbmdlRWwuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIF90aGlzLmhhbmRsZU1pZERyYWdTdGFydCk7XHJcbiAgICAgICAgICAgIHJldHVybiByYW5nZUVsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy50b2dnbGVSZWFkT25seSA9IGZ1bmN0aW9uIChyZWFkT25seSkge1xyXG4gICAgICAgICAgICBfdGhpcy5vcHRpb25zLnJlYWRPbmx5ID1cclxuICAgICAgICAgICAgICAgIHJlYWRPbmx5ICE9PSB1bmRlZmluZWQgPyByZWFkT25seSA6ICFfdGhpcy5vcHRpb25zLnJlYWRPbmx5O1xyXG4gICAgICAgICAgICB2YXIgb3V0ZXJCb3ggPSBfdGhpcy5yYW5nZXBpY2tlckVsLnF1ZXJ5U2VsZWN0b3IoXCIub3V0ZXItYm94XCIpO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5yZWFkT25seSAmJiAhb3V0ZXJCb3guY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRcIikpIHtcclxuICAgICAgICAgICAgICAgIG91dGVyQm94LmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICghX3RoaXMub3B0aW9ucy5yZWFkT25seSAmJlxyXG4gICAgICAgICAgICAgICAgb3V0ZXJCb3guY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRcIikpIHtcclxuICAgICAgICAgICAgICAgIG91dGVyQm94LmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZSA9IGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdmFyIG5ld1JhbmdlcyA9IF9fc3ByZWFkKF90aGlzLnJhbmdlcyk7XHJcbiAgICAgICAgICAgIG5ld1Jhbmdlc1tpbmRleF0gPSB7XHJcbiAgICAgICAgICAgICAgICBmcm9tVGltZTogTWF0aC5tYXgodmFsdWUuZnJvbVRpbWUsIDApLFxyXG4gICAgICAgICAgICAgICAgdG9UaW1lOiBNYXRoLm1pbih2YWx1ZS50b1RpbWUsIF90aGlzLm9wdGlvbnMudG90YWwpLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgb3ZlcmxhcCA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzT3ZlcmxhcHBpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG5ld1Jhbmdlcy5mb3JFYWNoKGZ1bmN0aW9uIChyYW5nZSwgaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5mcm9tVGltZSA8IHJhbmdlLnRvVGltZSAmJiB2YWx1ZS50b1RpbWUgPiByYW5nZS50b1RpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNPdmVybGFwcGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLnRvVGltZSA9IHZhbHVlLmZyb21UaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUudG9UaW1lID4gcmFuZ2UuZnJvbVRpbWUgJiYgdmFsdWUuZnJvbVRpbWUgPCByYW5nZS50b1RpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNPdmVybGFwcGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLmZyb21UaW1lID0gdmFsdWUudG9UaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc092ZXJsYXBwaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxhcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB3aGlsZSAob3ZlcmxhcCkge1xyXG4gICAgICAgICAgICAgICAgX2xvb3BfMSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLnNldFJhbmdlcyhuZXdSYW5nZXMpO1xyXG4gICAgICAgICAgICBfdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucmVtb3ZlUmFuZ2UgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGRlbGV0ZWRSYW5nZTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYW5nZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZWRSYW5nZSA9IHRoaXMucmFuZ2VFbHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZWRSYW5nZVswXS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGRlbGV0ZWRSYW5nZVswXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmdlRWxzLmZvckVhY2goZnVuY3Rpb24gKHJhbmdlRWwsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2VFbC5kYXRhc2V0LmluZGV4ID0gaW5kZXgudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTsgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZVJhbmdlVXBkYXRlID0gZnVuY3Rpb24gKHJhbmdlRWwpIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQocmFuZ2VFbC5kYXRhc2V0LmluZGV4KTtcclxuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMucmFuZ2VzW2luZGV4XSwgZnJvbVRpbWUgPSBfYS5mcm9tVGltZSwgdG9UaW1lID0gX2EudG9UaW1lO1xyXG4gICAgICAgICAgICByYW5nZUVsLnN0eWxlLndpZHRoID1cclxuICAgICAgICAgICAgICAgICgodG9UaW1lIC0gZnJvbVRpbWUpICogMTAwKSAvIF90aGlzLm9wdGlvbnMudG90YWwgKyBcIiVcIjtcclxuICAgICAgICAgICAgcmFuZ2VFbC5zdHlsZS5sZWZ0ID0gKGZyb21UaW1lICogMTAwKSAvIF90aGlzLm9wdGlvbnMudG90YWwgKyBcIiVcIjtcclxuICAgICAgICAgICAgdmFyIGxlZnRMYWJlbCA9IHJhbmdlRWwucXVlcnlTZWxlY3RvcihcIi5sYWJlbHMgLmxlZnRcIik7XHJcbiAgICAgICAgICAgIHZhciByaWdodExhYmVsID0gcmFuZ2VFbC5xdWVyeVNlbGVjdG9yKFwiLmxhYmVscyAucmlnaHRcIik7XHJcbiAgICAgICAgICAgIGxlZnRMYWJlbC5pbm5lckhUTUwgPSBfdGhpcy5vcHRpb25zLmNvbnZlcnRGdW5jKGZyb21UaW1lKTtcclxuICAgICAgICAgICAgcmlnaHRMYWJlbC5pbm5lckhUTUwgPSBfdGhpcy5vcHRpb25zLmNvbnZlcnRGdW5jKHRvVGltZSk7XHJcbiAgICAgICAgICAgIGlmIChyYW5nZUVsLmNsaWVudFdpZHRoIDwgNzApIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0TGFiZWwuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmlnaHRMYWJlbC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJhbmdlRWwuY2xpZW50V2lkdGggPCAzMCkge1xyXG4gICAgICAgICAgICAgICAgbGVmdExhYmVsLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxlZnRMYWJlbC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0UmFuZ2VzID0gZnVuY3Rpb24gKHJhbmdlcykge1xyXG4gICAgICAgICAgICBfdGhpcy5yYW5nZXMgPSByYW5nZXM7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZUJveENsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKCFfdGhpcy5ib3hFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGRlbHRhID0gZS5jbGllbnRYIC0gZ2V0T2Zmc2V0KF90aGlzLmJveEVsZW1lbnQpLmxlZnQ7XHJcbiAgICAgICAgICAgIF90aGlzLmluaXRpYWxNb3VzZVggPSBlLmNsaWVudFg7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRTdGFydCA9IDA7XHJcbiAgICAgICAgICAgIGlmIChkZWx0YSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBkZWx0YVBlcmNlbnQgPSBkZWx0YSAvIF90aGlzLmJveEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRTdGFydCA9IF90aGlzLm9wdGlvbnMudG90YWwgKiBkZWx0YVBlcmNlbnQ7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRTdGFydCAtPSB0YXJnZXRTdGFydCAlIF90aGlzLm9wdGlvbnMuc3RlcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX3RoaXMucmFuZ2VzLmxlbmd0aCA8IF90aGlzLm9wdGlvbnMubWF4UmFuZ2VzQW1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmFuZ2VFbF8xID0gX3RoaXMuY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmJveEVsZW1lbnQuYXBwZW5kQ2hpbGQocmFuZ2VFbF8xKTtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdSYW5nZXMgPSBfX3NwcmVhZChfdGhpcy5yYW5nZXMpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlXzEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbVRpbWU6IE1hdGgubWF4KDAsIHRhcmdldFN0YXJ0IC0gNDUpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvVGltZTogTWF0aC5taW4odGFyZ2V0U3RhcnQgKyAxNSwgX3RoaXMub3B0aW9ucy50b3RhbCksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdmFyIG92ZXJsYXAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdmFyIF9sb29wXzIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzT3ZlcmxhcHBpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdSYW5nZXMuZm9yRWFjaChmdW5jdGlvbiAocmFuZ2UsIGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IGluZGV4XzEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVfMS5mcm9tVGltZSA8IHJhbmdlLnRvVGltZSAmJiB2YWx1ZV8xLnRvVGltZSA+IHJhbmdlLnRvVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPdmVybGFwcGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZS50b1RpbWUgPSB2YWx1ZV8xLmZyb21UaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZV8xLnRvVGltZSA+IHJhbmdlLmZyb21UaW1lICYmIHZhbHVlXzEuZnJvbVRpbWUgPCByYW5nZS50b1RpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3ZlcmxhcHBpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2UuZnJvbVRpbWUgPSB2YWx1ZV8xLnRvVGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNPdmVybGFwcGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVybGFwID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChvdmVybGFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2xvb3BfMigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmV3UmFuZ2VzLnB1c2godmFsdWVfMSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRSYW5nZXMobmV3UmFuZ2VzKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmRyYWdnaW5nRWwgPSByYW5nZUVsXzE7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByYW5nZUVsXzEuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucmFuZ2VFbHMucHVzaChyYW5nZUVsXzEpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4XzEgPSBwYXJzZUludChfdGhpcy5kcmFnZ2luZ0VsLmRhdGFzZXQuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZHJhZ0NhcHR1cmVkRnJvbSA9IF90aGlzLnJhbmdlc1tpbmRleF8xXS5mcm9tVGltZTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmRyYWdDYXB0dXJlZFRvID0gX3RoaXMucmFuZ2VzW2luZGV4XzFdLnRvVGltZTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmxhc3RYID0gZS5jbGllbnRYO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZHJhZ0NhcHR1cmVkRnJvbSA9IF90aGlzLnJhbmdlc1tpbmRleF8xXS5mcm9tVGltZTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmRyYWdDYXB0dXJlZFRvID0gX3RoaXMucmFuZ2VzW2luZGV4XzFdLnRvVGltZTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQub25wb2ludGVydXAgPSBfdGhpcy5zdG9wRHJhZztcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50Lm9ucG9pbnRlcm1vdmUgPSBfdGhpcy5oYW5kbGVSaWdodERyYWc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2hlY2tEZWxldGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlXzEsIF9hO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyhfdGhpcy5yYW5nZXMuZW50cmllcygpKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfZCA9IF9fcmVhZChfYy52YWx1ZSwgMiksIGluZGV4ID0gX2RbMF0sIHJhbmdlID0gX2RbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzRHJhZ0VsID0gX3RoaXMuZHJhZ2dpbmdFbCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kcmFnZ2luZ0VsLmRhdGFzZXQuaW5kZXggPT09IGluZGV4LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0RyYWdFbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmFuZ2UudG9UaW1lIC0gcmFuZ2UuZnJvbVRpbWUgPCBfdGhpcy5vcHRpb25zLnN0ZXAgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLmZyb21UaW1lID4gX3RoaXMub3B0aW9ucy50b3RhbCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2UudG9UaW1lIDwgX3RoaXMub3B0aW9ucy5zdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZW1vdmVSYW5nZShpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jaGVja0RlbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XHJcbiAgICAgICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMud2FpdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9LCA0MCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNoZWNrRGVsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJhbmdlRWxzLmZvckVhY2goZnVuY3Rpb24gKHJhbmdlRWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmhhbmRsZVJhbmdlVXBkYXRlKHJhbmdlRWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMub25DaGFuZ2UoX3RoaXMucmFuZ2VzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmZvY3VzZWRSYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmFuZ2VwaWNrZXJFbC5xdWVyeVNlbGVjdG9yKFwiLmZyb20tdmFsdWVcIikuaW5uZXJIVE1MID0gX3RoaXMuZm9jdXNlZFJhbmdlLnF1ZXJ5U2VsZWN0b3IoXCIubGFiZWxzIC5sZWZ0XCIpLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJhbmdlcGlja2VyRWwucXVlcnlTZWxlY3RvcihcIi50by12YWx1ZVwiKS5pbm5lckhUTUwgPSBfdGhpcy5mb2N1c2VkUmFuZ2UucXVlcnlTZWxlY3RvcihcIi5sYWJlbHMgLnJpZ2h0XCIpLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmhhbmRsZVBvcHVwUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3R0bGUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jaGVja0RlbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yYW5nZUVscy5mb3JFYWNoKGZ1bmN0aW9uIChyYW5nZUVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVSYW5nZVVwZGF0ZShyYW5nZUVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm9uQ2hhbmdlKF90aGlzLnJhbmdlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5mb2N1c2VkUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJhbmdlcGlja2VyRWwucXVlcnlTZWxlY3RvcihcIi5mcm9tLXZhbHVlXCIpLmlubmVySFRNTCA9IF90aGlzLmZvY3VzZWRSYW5nZS5xdWVyeVNlbGVjdG9yKFwiLmxhYmVscyAubGVmdFwiKS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yYW5nZXBpY2tlckVsLnF1ZXJ5U2VsZWN0b3IoXCIudG8tdmFsdWVcIikuaW5uZXJIVE1MID0gX3RoaXMuZm9jdXNlZFJhbmdlLnF1ZXJ5U2VsZWN0b3IoXCIubGFiZWxzIC5yaWdodFwiKS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVQb3B1cFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCAxNik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUG9wdXBQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFfdGhpcy5mb2N1c2VkUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcG9wdXAgPSBfdGhpcy5yYW5nZXBpY2tlckVsLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIik7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cEFycm93ID0gX3RoaXMucmFuZ2VwaWNrZXJFbC5xdWVyeVNlbGVjdG9yKFwiLmFycm93XCIpO1xyXG4gICAgICAgICAgICB2YXIgcG9wdXBUcmFjayA9IF90aGlzLmJveEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRQb3MgPSBfdGhpcy5mb2N1c2VkUmFuZ2Uub2Zmc2V0TGVmdCArIF90aGlzLmZvY3VzZWRSYW5nZS5jbGllbnRXaWR0aCAvIDI7XHJcbiAgICAgICAgICAgIHZhciBtaW5Qb3MgPSBwb3B1cC5jbGllbnRXaWR0aCAvIDIgLSAxMjtcclxuICAgICAgICAgICAgdmFyIG1heFBvcyA9IHBvcHVwVHJhY2suY2xpZW50V2lkdGggLSBwb3B1cC5jbGllbnRXaWR0aCAvIDIgKyAxMjtcclxuICAgICAgICAgICAgcG9wdXAuc3R5bGUubGVmdCA9IE1hdGgubWluKE1hdGgubWF4KG1pblBvcywgdGFyZ2V0UG9zKSwgbWF4UG9zKSArIFwicHhcIjtcclxuICAgICAgICAgICAgcG9wdXBBcnJvdy5zdHlsZS5sZWZ0ID0gTWF0aC5taW4odGFyZ2V0UG9zLCBwb3B1cFRyYWNrLmNsaWVudFdpZHRoKSArIFwicHhcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlRG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKF90aGlzLmZvY3VzZWRSYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZm9jdXNlZFJhbmdlLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuZm9jdXNlZFJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWR4ID0gX3RoaXMuZm9jdXNlZFJhbmdlLmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZW1vdmVSYW5nZShpZHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZVJhbmdlRm9jdXMgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5wb3B1cENsb3NlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLnBvcHVwQ2xvc2VUaW1lb3V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5mb2N1c2VkUmFuZ2UgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgKF9iID0gKF9hID0gX3RoaXMucmFuZ2VwaWNrZXJFbCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtdHJhY2tcIikpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xvc2luZ1wiKTtcclxuICAgICAgICAgICAgKF9kID0gKF9jID0gX3RoaXMucmFuZ2VwaWNrZXJFbCkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtdHJhY2tcIikpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgX3RoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZVJhbmdlQmx1ciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmZvY3VzZWRSYW5nZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5mb2N1c2VkUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMucG9wdXBDbG9zZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLnBvcHVwQ2xvc2VUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKF9iID0gKF9hID0gX3RoaXMucmFuZ2VwaWNrZXJFbCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtdHJhY2tcIikpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jbGFzc0xpc3QuYWRkKFwiY2xvc2luZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wb3B1cENsb3NlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IF90aGlzLnJhbmdlcGlja2VyRWwpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLXRyYWNrXCIpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2xhc3NMaXN0LnJlbW92ZShcImNsb3NpbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChfZCA9IChfYyA9IF90aGlzLnJhbmdlcGlja2VyRWwpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLXRyYWNrXCIpKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0b3BEcmFnID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgX3RoaXMuZHJhZ0J1ZmZlciA9IDA7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ucG9pbnRlcm1vdmUgPSBudWxsO1xyXG4gICAgICAgICAgICBfdGhpcy5kcmFnZ2luZ0VsID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBfdGhpcy5jaGVja0RlbGV0ZSgpO1xyXG4gICAgICAgICAgICBfdGhpcy5vbkNoYW5nZShfdGhpcy5yYW5nZXMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVMZWZ0RHJhZ1N0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBfdGhpcy5kcmFnZ2luZ0VsID0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgX3RoaXMubGFzdFggPSBldmVudC5jbGllbnRYO1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChfdGhpcy5kcmFnZ2luZ0VsLmRhdGFzZXQuaW5kZXgpO1xyXG4gICAgICAgICAgICBfdGhpcy5kcmFnQ2FwdHVyZWRGcm9tID0gX3RoaXMucmFuZ2VzW2luZGV4XS5mcm9tVGltZTtcclxuICAgICAgICAgICAgX3RoaXMuZHJhZ0NhcHR1cmVkVG8gPSBfdGhpcy5yYW5nZXNbaW5kZXhdLnRvVGltZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQub25wb2ludGVydXAgPSBfdGhpcy5zdG9wRHJhZztcclxuICAgICAgICAgICAgZG9jdW1lbnQub25wb2ludGVybW92ZSA9IF90aGlzLmhhbmRsZUxlZnREcmFnO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSaWdodERyYWdTdGFydCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgX3RoaXMuZHJhZ2dpbmdFbCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudFxyXG4gICAgICAgICAgICAgICAgLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIF90aGlzLmxhc3RYID0gZXZlbnQuY2xpZW50WDtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoX3RoaXMuZHJhZ2dpbmdFbC5kYXRhc2V0LmluZGV4KTtcclxuICAgICAgICAgICAgX3RoaXMuZHJhZ0NhcHR1cmVkRnJvbSA9IF90aGlzLnJhbmdlc1tpbmRleF0uZnJvbVRpbWU7XHJcbiAgICAgICAgICAgIF90aGlzLmRyYWdDYXB0dXJlZFRvID0gX3RoaXMucmFuZ2VzW2luZGV4XS50b1RpbWU7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ucG9pbnRlcnVwID0gX3RoaXMuc3RvcERyYWc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ucG9pbnRlcm1vdmUgPSBfdGhpcy5oYW5kbGVSaWdodERyYWc7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZU1pZERyYWdTdGFydCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgX3RoaXMuZHJhZ2dpbmdFbCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgICAgIF90aGlzLmxhc3RYID0gZXZlbnQuY2xpZW50WDtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoX3RoaXMuZHJhZ2dpbmdFbC5kYXRhc2V0LmluZGV4KTtcclxuICAgICAgICAgICAgX3RoaXMuZHJhZ0NhcHR1cmVkRnJvbSA9IF90aGlzLnJhbmdlc1tpbmRleF0uZnJvbVRpbWU7XHJcbiAgICAgICAgICAgIF90aGlzLmRyYWdDYXB0dXJlZFRvID0gX3RoaXMucmFuZ2VzW2luZGV4XS50b1RpbWU7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ucG9pbnRlcnVwID0gX3RoaXMuc3RvcERyYWc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ucG9pbnRlcm1vdmUgPSBfdGhpcy5oYW5kbGVNaWREcmFnO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVMZWZ0RHJhZyA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB2YXIgaXNIZWxkRG93biA9IGV2ZW50LmJ1dHRvbnMgPT09IHVuZGVmaW5lZCA/IGV2ZW50LndoaWNoID09PSAxIDogZXZlbnQuYnV0dG9ucyA9PT0gMTtcclxuICAgICAgICAgICAgaWYgKCFpc0hlbGREb3duKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zdG9wRHJhZygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBlbCA9IF90aGlzLmRyYWdnaW5nRWw7XHJcbiAgICAgICAgICAgIGlmICghZWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChlbC5kYXRhc2V0LmluZGV4KTtcclxuICAgICAgICAgICAgdmFyIGRlbHRhID0gZXZlbnQuY2xpZW50WCAtIF90aGlzLmxhc3RYO1xyXG4gICAgICAgICAgICB2YXIgZGVsdGFQZXJjZW50ID0gKGRlbHRhIC8gZWwucGFyZW50RWxlbWVudC5jbGllbnRXaWR0aCkgKiAxMDA7XHJcbiAgICAgICAgICAgIHZhciBkZWx0YVZhbHVlID0gKGRlbHRhUGVyY2VudCAvIDEwMCkgKiBfdGhpcy5vcHRpb25zLnRvdGFsO1xyXG4gICAgICAgICAgICBkZWx0YVZhbHVlID0gZGVsdGFWYWx1ZSAtIChkZWx0YVZhbHVlICUgX3RoaXMub3B0aW9ucy5zdGVwKTtcclxuICAgICAgICAgICAgaWYgKGRlbHRhVmFsdWUgLSBfdGhpcy5kcmFnQnVmZmVyIDwgX3RoaXMub3B0aW9ucy5zdGVwICYmXHJcbiAgICAgICAgICAgICAgICBkZWx0YVZhbHVlIC0gX3RoaXMuZHJhZ0J1ZmZlciA+IC1fdGhpcy5vcHRpb25zLnN0ZXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5kcmFnQnVmZmVyID0gZGVsdGFWYWx1ZTtcclxuICAgICAgICAgICAgdmFyIG5ld1N0YXJ0ID0gX3RoaXMuZHJhZ0NhcHR1cmVkRnJvbTtcclxuICAgICAgICAgICAgdmFyIG5ld0VuZCA9IF90aGlzLmRyYWdDYXB0dXJlZFRvO1xyXG4gICAgICAgICAgICBpZiAobmV3RW5kIC0gKG5ld1N0YXJ0ICsgZGVsdGFWYWx1ZSkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdTdGFydCA9IG5ld0VuZDtcclxuICAgICAgICAgICAgICAgIG5ld0VuZCA9IG5ld0VuZCArIGRlbHRhVmFsdWUgLSAobmV3RW5kIC0gX3RoaXMuZHJhZ0NhcHR1cmVkRnJvbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdTdGFydCArPSBkZWx0YVZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLmhhbmRsZVZhbHVlQ2hhbmdlKGluZGV4LCB7IGZyb21UaW1lOiBuZXdTdGFydCwgdG9UaW1lOiBuZXdFbmQgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZVJpZ2h0RHJhZyA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB2YXIgaXNIZWxkRG93biA9IGV2ZW50LmJ1dHRvbnMgPT09IHVuZGVmaW5lZCA/IGV2ZW50LndoaWNoID09PSAxIDogZXZlbnQuYnV0dG9ucyA9PT0gMTtcclxuICAgICAgICAgICAgaWYgKCFpc0hlbGREb3duKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zdG9wRHJhZygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBlbCA9IF90aGlzLmRyYWdnaW5nRWw7XHJcbiAgICAgICAgICAgIGlmICghZWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChlbC5kYXRhc2V0LmluZGV4KTtcclxuICAgICAgICAgICAgdmFyIGRlbHRhID0gZXZlbnQuY2xpZW50WCAtIF90aGlzLmxhc3RYO1xyXG4gICAgICAgICAgICB2YXIgZGVsdGFQZXJjZW50ID0gKGRlbHRhIC8gZWwucGFyZW50RWxlbWVudC5jbGllbnRXaWR0aCkgKiAxMDA7XHJcbiAgICAgICAgICAgIHZhciBkZWx0YVZhbHVlID0gKGRlbHRhUGVyY2VudCAvIDEwMCkgKiBfdGhpcy5vcHRpb25zLnRvdGFsO1xyXG4gICAgICAgICAgICBkZWx0YVZhbHVlID0gZGVsdGFWYWx1ZSAtIChkZWx0YVZhbHVlICUgX3RoaXMub3B0aW9ucy5zdGVwKTtcclxuICAgICAgICAgICAgaWYgKGRlbHRhVmFsdWUgLSBfdGhpcy5kcmFnQnVmZmVyIDwgX3RoaXMub3B0aW9ucy5zdGVwICYmXHJcbiAgICAgICAgICAgICAgICBkZWx0YVZhbHVlIC0gX3RoaXMuZHJhZ0J1ZmZlciA+IC1fdGhpcy5vcHRpb25zLnN0ZXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5kcmFnQnVmZmVyID0gZGVsdGFWYWx1ZTtcclxuICAgICAgICAgICAgdmFyIG5ld1N0YXJ0ID0gX3RoaXMuZHJhZ0NhcHR1cmVkRnJvbTtcclxuICAgICAgICAgICAgdmFyIG5ld0VuZCA9IF90aGlzLmRyYWdDYXB0dXJlZFRvO1xyXG4gICAgICAgICAgICBpZiAobmV3RW5kICsgZGVsdGFWYWx1ZSAtIG5ld1N0YXJ0IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgbmV3U3RhcnQgPSBuZXdTdGFydCArIGRlbHRhVmFsdWUgLSAobmV3U3RhcnQgLSBuZXdFbmQpO1xyXG4gICAgICAgICAgICAgICAgbmV3RW5kID0gX3RoaXMuZHJhZ0NhcHR1cmVkRnJvbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld0VuZCArPSBkZWx0YVZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLmhhbmRsZVZhbHVlQ2hhbmdlKGluZGV4LCB7IGZyb21UaW1lOiBuZXdTdGFydCwgdG9UaW1lOiBuZXdFbmQgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZU1pZERyYWcgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIGlzSGVsZERvd24gPSBldmVudC5idXR0b25zID09PSB1bmRlZmluZWQgPyBldmVudC53aGljaCA9PT0gMSA6IGV2ZW50LmJ1dHRvbnMgPT09IDE7XHJcbiAgICAgICAgICAgIGlmICghaXNIZWxkRG93bikge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc3RvcERyYWcoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZWwgPSBfdGhpcy5kcmFnZ2luZ0VsO1xyXG4gICAgICAgICAgICBpZiAoIWVsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoZWwuZGF0YXNldC5pbmRleCk7XHJcbiAgICAgICAgICAgIHZhciBkZWx0YSA9IGV2ZW50LmNsaWVudFggLSBfdGhpcy5sYXN0WDtcclxuICAgICAgICAgICAgdmFyIGRlbHRhUGVyY2VudCA9IChkZWx0YSAvIGVsLnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGgpICogMTAwO1xyXG4gICAgICAgICAgICB2YXIgZGVsdGFWYWx1ZSA9IChkZWx0YVBlcmNlbnQgLyAxMDApICogX3RoaXMub3B0aW9ucy50b3RhbDtcclxuICAgICAgICAgICAgZGVsdGFWYWx1ZSA9IGRlbHRhVmFsdWUgLSAoZGVsdGFWYWx1ZSAlIF90aGlzLm9wdGlvbnMuc3RlcCk7XHJcbiAgICAgICAgICAgIGlmIChkZWx0YVZhbHVlIC0gX3RoaXMuZHJhZ0J1ZmZlciA8IF90aGlzLm9wdGlvbnMuc3RlcCAmJlxyXG4gICAgICAgICAgICAgICAgZGVsdGFWYWx1ZSAtIF90aGlzLmRyYWdCdWZmZXIgPiAtX3RoaXMub3B0aW9ucy5zdGVwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuZHJhZ0J1ZmZlciA9IGRlbHRhVmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBuZXdTdGFydCA9IF90aGlzLmRyYWdDYXB0dXJlZEZyb20gKyBkZWx0YVZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgbmV3RW5kID0gX3RoaXMuZHJhZ0NhcHR1cmVkVG8gKyBkZWx0YVZhbHVlO1xyXG4gICAgICAgICAgICBfdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZShpbmRleCwgeyBmcm9tVGltZTogbmV3U3RhcnQsIHRvVGltZTogbmV3RW5kIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMub3B0aW9ucyksIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlO1xyXG4gICAgICAgIHRoaXMucmFuZ2VwaWNrZXJFbCA9IHRoaXMuY3JlYXRlUmFuZ2VwaWNrZXIobGFiZWwpO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5yYW5nZXBpY2tlckVsKTtcclxuICAgICAgICB0aGlzLmJveEVsZW1lbnQgPSB0aGlzLnJhbmdlcGlja2VyRWwucXVlcnlTZWxlY3RvcihcIi5zZWxlY3Rvci1ib3hcIik7XHJcbiAgICAgICAgdGhpcy5ib3hFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCB0aGlzLmhhbmRsZUJveENsaWNrKTtcclxuICAgICAgICB0aGlzLnJhbmdlcyA9IHZhbHVlcztcclxuICAgICAgICB2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAocmFuZ2UpIHtcclxuICAgICAgICAgICAgdmFyIHJhbmdlRWwgPSBfdGhpcy5jcmVhdGVSYW5nZSgpO1xyXG4gICAgICAgICAgICBfdGhpcy5ib3hFbGVtZW50LmFwcGVuZENoaWxkKHJhbmdlRWwpO1xyXG4gICAgICAgICAgICBfdGhpcy5yYW5nZUVscy5wdXNoKHJhbmdlRWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmFuZ2VQaWNrZXI7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFJhbmdlUGlja2VyIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=