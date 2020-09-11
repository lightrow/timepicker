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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SYW5nZVBpY2tlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9SYW5nZVBpY2tlci8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQSxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQSxtQkFBbUIsU0FBSSxJQUFJLFNBQUk7QUFDL0IsYUFBYSw2QkFBNkIsMEJBQTBCLGFBQWEsRUFBRSxxQkFBcUI7QUFDeEcsZ0JBQWdCLHFEQUFxRCxvRUFBb0UsYUFBYSxFQUFFO0FBQ3hKLHNCQUFzQixzQkFBc0IscUJBQXFCLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGtDQUFrQyxTQUFTO0FBQzNDLGtDQUFrQyxXQUFXLFVBQVU7QUFDdkQseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQSw2R0FBNkcsT0FBTyxVQUFVO0FBQzlILGdGQUFnRixpQkFBaUIsT0FBTztBQUN4Ryx3REFBd0QsZ0JBQWdCLFFBQVEsT0FBTztBQUN2Riw4Q0FBOEMsZ0JBQWdCLGdCQUFnQixPQUFPO0FBQ3JGO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTLFlBQVksYUFBYSxPQUFPLEVBQUUsVUFBVSxXQUFXO0FBQ2hFLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQSxjQUFjLFNBQUksSUFBSSxTQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixNQUFNLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxVQUFVO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiLFNBQVMsRUFBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsVUFBVTtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFFBQVEsZ0JBQWdCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBCQUEwQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUyxFQUFFO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHFDQUFxQztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMscUNBQXFDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMscUNBQXFDO0FBQ2pGO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDc0IiLCJmaWxlIjoicmFuZ2VwaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX3JlYWQgPSAodGhpcyAmJiB0aGlzLl9fcmVhZCkgfHwgZnVuY3Rpb24gKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufTtcclxudmFyIF9fc3ByZWFkID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZCkgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufTtcclxudmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn07XHJcbnZhciBob3VycyA9IFtdO1xyXG5mb3IgKHZhciBpID0gMDsgaSA8PSAyNDsgaSsrKSB7XHJcbiAgICBob3Vycy5wdXNoKGkpO1xyXG59XHJcbnZhciBnZXRPZmZzZXQgPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgIHZhciBYID0gMDtcclxuICAgIHZhciBZID0gMDtcclxuICAgIHdoaWxlIChlbCAmJiAhaXNOYU4oZWwub2Zmc2V0TGVmdCkgJiYgIWlzTmFOKGVsLm9mZnNldFRvcCkpIHtcclxuICAgICAgICBYICs9IGVsLm9mZnNldExlZnQgLSBlbC5zY3JvbGxMZWZ0O1xyXG4gICAgICAgIFkgKz0gZWwub2Zmc2V0VG9wIC0gZWwuc2Nyb2xsVG9wO1xyXG4gICAgICAgIGVsID0gZWwub2Zmc2V0UGFyZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgdG9wOiBZLCBsZWZ0OiBYIH07XHJcbn07XHJcbnZhciBjb252ZXJ0ID0gZnVuY3Rpb24gKG4pIHtcclxuICAgIHZhciBob3VycyA9IChcIjBcIiArICgobiAvIDYwKSBeIDApICUgMjQpLnNsaWNlKC0yKTtcclxuICAgIHZhciBtaW51dGVzID0gKFwiMFwiICsgKG4gJSA2MCkpLnNsaWNlKC0yKTtcclxuICAgIHJldHVybiBob3VycyArIFwiOlwiICsgbWludXRlcztcclxufTtcclxuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XHJcbiAgICB2YXIgdGltZW91dDtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xyXG4gICAgICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICghaW1tZWRpYXRlKVxyXG4gICAgICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xyXG4gICAgICAgIGlmICh0aW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcclxuICAgICAgICBpZiAoY2FsbE5vdylcclxuICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gdGhyb3R0bGUoY2FsbGJhY2ssIGxpbWl0KSB7XHJcbiAgICB2YXIgd2FpdGluZyA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXdhaXRpbmcpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgd2FpdGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgd2FpdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LCBsaW1pdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnQgdmFyIGluaXQgPSBmdW5jdGlvbiAoZWxlbWVudCwgbGFiZWwsIHZhbHVlcywgb25DaGFuZ2UsIG9wdGlvbnMpIHtcclxuICAgIHZhciByYW5nZVBpY2tlciA9IG5ldyBSYW5nZVBpY2tlcihlbGVtZW50LCBsYWJlbCwgdmFsdWVzLCBvbkNoYW5nZSwgb3B0aW9ucyk7XHJcbiAgICByZXR1cm4gcmFuZ2VQaWNrZXI7XHJcbn07XHJcbnZhciBSYW5nZVBpY2tlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJhbmdlUGlja2VyKGVsZW1lbnQsIGxhYmVsLCB2YWx1ZXMsIG9uQ2hhbmdlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcclxuICAgICAgICAgICAgc3RlcDogMTUsXHJcbiAgICAgICAgICAgIHRvdGFsOiAxNDQwLFxyXG4gICAgICAgICAgICBtYXhSYW5nZXNBbW91bnQ6IDcsXHJcbiAgICAgICAgICAgIHNlcGFyYXRvcnM6IGhvdXJzLFxyXG4gICAgICAgICAgICBjb252ZXJ0RnVuYzogY29udmVydCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucmFuZ2VzID0gW107XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH07XHJcbiAgICAgICAgdGhpcy5kcmFnQnVmZmVyID0gMDtcclxuICAgICAgICB0aGlzLmxhc3RYID0gMDtcclxuICAgICAgICB0aGlzLmluaXRpYWxNb3VzZVggPSAwO1xyXG4gICAgICAgIHRoaXMubGFiZWwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucmFuZ2VFbHMgPSBbXTtcclxuICAgICAgICB0aGlzLmRyYWdDYXB0dXJlZEZyb20gPSAwO1xyXG4gICAgICAgIHRoaXMuZHJhZ0NhcHR1cmVkVG8gPSAwO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUmFuZ2VwaWNrZXIgPSBmdW5jdGlvbiAobGFiZWwpIHtcclxuICAgICAgICAgICAgdmFyIHJhbmdlcGlja2VyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICByYW5nZXBpY2tlckVsLmNsYXNzTmFtZSA9IFwiVmFsdWVSYW5nZVBpY2tlclwiO1xyXG4gICAgICAgICAgICByYW5nZXBpY2tlckVsLmlubmVySFRNTCA9IFwiXFxuICAgICAgPGxhYmVsPlwiICsgbGFiZWwgKyBcIjwvbGFiZWw+XFxuICAgICAgPGRpdiBjbGFzcz0nb3V0ZXItYm94XCIgKyAoX3RoaXMub3B0aW9ucy5yZWFkT25seSA/IFwiIGRpc2FibGVkXCIgOiBcIlwiKSArIFwiJz5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlci1ib3hcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJzXFxcIj5cXG4gICAgICAgICAgICBcIiArIF90aGlzLm9wdGlvbnMuc2VwYXJhdG9yc1xyXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIjxkaXYgY2xhc3M9J2hlYWRlcic+XFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhlYWRlci1sYWJlbFxcXCI+XCIgKyBsYWJlbCArIFwiPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cIjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5qb2luKFwiIFwiKSArIFwiXFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZXBhcmF0b3JzXFxcIj5cXG4gICAgICAgICAgICBcIiArIF90aGlzLm9wdGlvbnMuc2VwYXJhdG9yc1xyXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPSdzZXBhcmF0b3InPjwvZGl2PlwiO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmpvaW4oXCIgXCIpICsgXCJcXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhZGRlZC1ib3hcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWxlY3Rvci1ib3hcXFwiPjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicG9wdXAtdHJhY2tcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicG9wdXBcXFwiPlxcbiAgICAgICAgICA8cD5Gcm9tOjxzcGFuIGNsYXNzPVxcXCJmcm9tLXZhbHVlXFxcIj48L3NwYW4+PC9wPlxcbiAgICAgICAgICA8cD5Ubzo8c3BhbiBjbGFzcz1cXFwidG8tdmFsdWVcXFwiPjwvc3Bhbj48L3A+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0bi1yZW1vdmVcXFwiPlJlbW92ZTwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhcnJvd1xcXCI+PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgXCI7XHJcbiAgICAgICAgICAgIHJhbmdlcGlja2VyRWwucXVlcnlTZWxlY3RvcihcIi5idG4tcmVtb3ZlXCIpLm9ucG9pbnRlcmRvd24gPSBfdGhpcy5oYW5kbGVSZW1vdmVEb3duO1xyXG4gICAgICAgICAgICByYW5nZXBpY2tlckVsLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXJlbW92ZVwiKS5vbmNsaWNrID0gX3RoaXMuaGFuZGxlUmVtb3ZlQ2xpY2s7XHJcbiAgICAgICAgICAgIHJldHVybiByYW5nZXBpY2tlckVsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jcmVhdGVSYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJhbmdlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICByYW5nZUVsLmNsYXNzTmFtZSA9IFwiUmFuZ2VcIjtcclxuICAgICAgICAgICAgcmFuZ2VFbC5kYXRhc2V0LmluZGV4ID0gX3RoaXMucmFuZ2VFbHMubGVuZ3RoLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHJhbmdlRWwudGFiSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgcmFuZ2VFbC5vbmZvY3VzID0gX3RoaXMuaGFuZGxlUmFuZ2VGb2N1cztcclxuICAgICAgICAgICAgcmFuZ2VFbC5vbmJsdXIgPSBfdGhpcy5oYW5kbGVSYW5nZUJsdXI7XHJcbiAgICAgICAgICAgIHJhbmdlRWwuaW5uZXJIVE1MID0gXCJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhhbmRsZXNcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZWZ0LWhhbmRsZVxcXCI+PC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJpZ2h0LWhhbmRsZVxcXCI+PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImxhYmVsc1xcXCI+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJsZWZ0XFxcIj48L3NwYW4+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJyaWdodFxcXCI+PC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgXCI7XHJcbiAgICAgICAgICAgIHZhciBsZWZ0SGFuZGxlID0gcmFuZ2VFbC5xdWVyeVNlbGVjdG9yKFwiLmxlZnQtaGFuZGxlXCIpO1xyXG4gICAgICAgICAgICB2YXIgcmlnaHRIYW5kbGUgPSByYW5nZUVsLnF1ZXJ5U2VsZWN0b3IoXCIucmlnaHQtaGFuZGxlXCIpO1xyXG4gICAgICAgICAgICBsZWZ0SGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBfdGhpcy5oYW5kbGVMZWZ0RHJhZ1N0YXJ0KTtcclxuICAgICAgICAgICAgcmlnaHRIYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIF90aGlzLmhhbmRsZVJpZ2h0RHJhZ1N0YXJ0KTtcclxuICAgICAgICAgICAgcmFuZ2VFbC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgX3RoaXMuaGFuZGxlTWlkRHJhZ1N0YXJ0KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJhbmdlRWw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnRvZ2dsZVJlYWRPbmx5ID0gZnVuY3Rpb24gKHJlYWRPbmx5KSB7XHJcbiAgICAgICAgICAgIF90aGlzLm9wdGlvbnMucmVhZE9ubHkgPVxyXG4gICAgICAgICAgICAgICAgcmVhZE9ubHkgIT09IHVuZGVmaW5lZCA/IHJlYWRPbmx5IDogIV90aGlzLm9wdGlvbnMucmVhZE9ubHk7XHJcbiAgICAgICAgICAgIHZhciBvdXRlckJveCA9IF90aGlzLnJhbmdlcGlja2VyRWwucXVlcnlTZWxlY3RvcihcIi5vdXRlci1ib3hcIik7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnJlYWRPbmx5ICYmICFvdXRlckJveC5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgb3V0ZXJCb3guY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCFfdGhpcy5vcHRpb25zLnJlYWRPbmx5ICYmXHJcbiAgICAgICAgICAgICAgICBvdXRlckJveC5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgb3V0ZXJCb3guY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZVZhbHVlQ2hhbmdlID0gZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgbmV3UmFuZ2VzID0gX19zcHJlYWQoX3RoaXMucmFuZ2VzKTtcclxuICAgICAgICAgICAgbmV3UmFuZ2VzW2luZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgIGZyb21UaW1lOiBNYXRoLm1heCh2YWx1ZS5mcm9tVGltZSwgMCksXHJcbiAgICAgICAgICAgICAgICB0b1RpbWU6IE1hdGgubWluKHZhbHVlLnRvVGltZSwgX3RoaXMub3B0aW9ucy50b3RhbCksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciBvdmVybGFwID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNPdmVybGFwcGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbmV3UmFuZ2VzLmZvckVhY2goZnVuY3Rpb24gKHJhbmdlLCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLmZyb21UaW1lIDwgcmFuZ2UudG9UaW1lICYmIHZhbHVlLnRvVGltZSA+IHJhbmdlLnRvVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc092ZXJsYXBwaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2UudG9UaW1lID0gdmFsdWUuZnJvbVRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS50b1RpbWUgPiByYW5nZS5mcm9tVGltZSAmJiB2YWx1ZS5mcm9tVGltZSA8IHJhbmdlLnRvVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc092ZXJsYXBwaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2UuZnJvbVRpbWUgPSB2YWx1ZS50b1RpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzT3ZlcmxhcHBpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVybGFwID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHdoaWxlIChvdmVybGFwKSB7XHJcbiAgICAgICAgICAgICAgICBfbG9vcF8xKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuc2V0UmFuZ2VzKG5ld1Jhbmdlcyk7XHJcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZW1vdmVSYW5nZSA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZGVsZXRlZFJhbmdlO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmdlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlZFJhbmdlID0gdGhpcy5yYW5nZUVscy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlZFJhbmdlWzBdLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZGVsZXRlZFJhbmdlWzBdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmFuZ2VFbHMuZm9yRWFjaChmdW5jdGlvbiAocmFuZ2VFbCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICByYW5nZUVsLmRhdGFzZXQuaW5kZXggPSBpbmRleC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUmFuZ2VVcGRhdGUgPSBmdW5jdGlvbiAocmFuZ2VFbCkge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChyYW5nZUVsLmRhdGFzZXQuaW5kZXgpO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5yYW5nZXNbaW5kZXhdLCBmcm9tVGltZSA9IF9hLmZyb21UaW1lLCB0b1RpbWUgPSBfYS50b1RpbWU7XHJcbiAgICAgICAgICAgIHJhbmdlRWwuc3R5bGUud2lkdGggPVxyXG4gICAgICAgICAgICAgICAgKCh0b1RpbWUgLSBmcm9tVGltZSkgKiAxMDApIC8gX3RoaXMub3B0aW9ucy50b3RhbCArIFwiJVwiO1xyXG4gICAgICAgICAgICByYW5nZUVsLnN0eWxlLmxlZnQgPSAoZnJvbVRpbWUgKiAxMDApIC8gX3RoaXMub3B0aW9ucy50b3RhbCArIFwiJVwiO1xyXG4gICAgICAgICAgICB2YXIgbGVmdExhYmVsID0gcmFuZ2VFbC5xdWVyeVNlbGVjdG9yKFwiLmxhYmVscyAubGVmdFwiKTtcclxuICAgICAgICAgICAgdmFyIHJpZ2h0TGFiZWwgPSByYW5nZUVsLnF1ZXJ5U2VsZWN0b3IoXCIubGFiZWxzIC5yaWdodFwiKTtcclxuICAgICAgICAgICAgbGVmdExhYmVsLmlubmVySFRNTCA9IF90aGlzLm9wdGlvbnMuY29udmVydEZ1bmMoZnJvbVRpbWUpO1xyXG4gICAgICAgICAgICByaWdodExhYmVsLmlubmVySFRNTCA9IF90aGlzLm9wdGlvbnMuY29udmVydEZ1bmModG9UaW1lKTtcclxuICAgICAgICAgICAgaWYgKHJhbmdlRWwuY2xpZW50V2lkdGggPCA3MCkge1xyXG4gICAgICAgICAgICAgICAgcmlnaHRMYWJlbC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByaWdodExhYmVsLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmFuZ2VFbC5jbGllbnRXaWR0aCA8IDMwKSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0TGFiZWwuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGVmdExhYmVsLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRSYW5nZXMgPSBmdW5jdGlvbiAocmFuZ2VzKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnJhbmdlcyA9IHJhbmdlcztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQm94Q2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLmJveEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZGVsdGEgPSBlLmNsaWVudFggLSBnZXRPZmZzZXQoX3RoaXMuYm94RWxlbWVudCkubGVmdDtcclxuICAgICAgICAgICAgX3RoaXMuaW5pdGlhbE1vdXNlWCA9IGUuY2xpZW50WDtcclxuICAgICAgICAgICAgdmFyIHRhcmdldFN0YXJ0ID0gMDtcclxuICAgICAgICAgICAgaWYgKGRlbHRhID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlbHRhUGVyY2VudCA9IGRlbHRhIC8gX3RoaXMuYm94RWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgICAgICAgICAgIHRhcmdldFN0YXJ0ID0gX3RoaXMub3B0aW9ucy50b3RhbCAqIGRlbHRhUGVyY2VudDtcclxuICAgICAgICAgICAgICAgIHRhcmdldFN0YXJ0IC09IHRhcmdldFN0YXJ0ICUgX3RoaXMub3B0aW9ucy5zdGVwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5yYW5nZXMubGVuZ3RoIDwgX3RoaXMub3B0aW9ucy5tYXhSYW5nZXNBbW91bnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciByYW5nZUVsXzEgPSBfdGhpcy5jcmVhdGVSYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuYm94RWxlbWVudC5hcHBlbmRDaGlsZChyYW5nZUVsXzEpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld1JhbmdlcyA9IF9fc3ByZWFkKF90aGlzLnJhbmdlcyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVfMSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tVGltZTogTWF0aC5tYXgoMCwgdGFyZ2V0U3RhcnQgLSA0NSksXHJcbiAgICAgICAgICAgICAgICAgICAgdG9UaW1lOiBNYXRoLm1pbih0YXJnZXRTdGFydCArIDE1LCBfdGhpcy5vcHRpb25zLnRvdGFsKSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB2YXIgb3ZlcmxhcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2xvb3BfMiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNPdmVybGFwcGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1Jhbmdlcy5mb3JFYWNoKGZ1bmN0aW9uIChyYW5nZSwgaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gaW5kZXhfMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZV8xLmZyb21UaW1lIDwgcmFuZ2UudG9UaW1lICYmIHZhbHVlXzEudG9UaW1lID4gcmFuZ2UudG9UaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc092ZXJsYXBwaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLnRvVGltZSA9IHZhbHVlXzEuZnJvbVRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlXzEudG9UaW1lID4gcmFuZ2UuZnJvbVRpbWUgJiYgdmFsdWVfMS5mcm9tVGltZSA8IHJhbmdlLnRvVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPdmVybGFwcGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZS5mcm9tVGltZSA9IHZhbHVlXzEudG9UaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc092ZXJsYXBwaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG92ZXJsYXApIHtcclxuICAgICAgICAgICAgICAgICAgICBfbG9vcF8yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuZXdSYW5nZXMucHVzaCh2YWx1ZV8xKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnNldFJhbmdlcyhuZXdSYW5nZXMpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZHJhZ2dpbmdFbCA9IHJhbmdlRWxfMTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlRWxfMS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yYW5nZUVscy5wdXNoKHJhbmdlRWxfMSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXhfMSA9IHBhcnNlSW50KF90aGlzLmRyYWdnaW5nRWwuZGF0YXNldC5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5kcmFnQ2FwdHVyZWRGcm9tID0gX3RoaXMucmFuZ2VzW2luZGV4XzFdLmZyb21UaW1lO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZHJhZ0NhcHR1cmVkVG8gPSBfdGhpcy5yYW5nZXNbaW5kZXhfMV0udG9UaW1lO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubGFzdFggPSBlLmNsaWVudFg7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5kcmFnQ2FwdHVyZWRGcm9tID0gX3RoaXMucmFuZ2VzW2luZGV4XzFdLmZyb21UaW1lO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZHJhZ0NhcHR1cmVkVG8gPSBfdGhpcy5yYW5nZXNbaW5kZXhfMV0udG9UaW1lO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJ1cCA9IF90aGlzLnN0b3BEcmFnO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQub25wb2ludGVybW92ZSA9IF90aGlzLmhhbmRsZVJpZ2h0RHJhZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jaGVja0RlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGVfMSwgX2E7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKF90aGlzLnJhbmdlcy5lbnRyaWVzKCkpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9kID0gX19yZWFkKF9jLnZhbHVlLCAyKSwgaW5kZXggPSBfZFswXSwgcmFuZ2UgPSBfZFsxXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNEcmFnRWwgPSBfdGhpcy5kcmFnZ2luZ0VsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRyYWdnaW5nRWwuZGF0YXNldC5pbmRleCA9PT0gaW5kZXgudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzRHJhZ0VsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyYW5nZS50b1RpbWUgLSByYW5nZS5mcm9tVGltZSA8IF90aGlzLm9wdGlvbnMuc3RlcCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2UuZnJvbVRpbWUgPiBfdGhpcy5vcHRpb25zLnRvdGFsIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZS50b1RpbWUgPCBfdGhpcy5vcHRpb25zLnN0ZXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlbW92ZVJhbmdlKGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNoZWNrRGVsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cclxuICAgICAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53YWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIDQwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2hlY2tEZWxldGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmFuZ2VFbHMuZm9yRWFjaChmdW5jdGlvbiAocmFuZ2VFbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlUmFuZ2VVcGRhdGUocmFuZ2VFbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5vbkNoYW5nZShfdGhpcy5yYW5nZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuZm9jdXNlZFJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yYW5nZXBpY2tlckVsLnF1ZXJ5U2VsZWN0b3IoXCIuZnJvbS12YWx1ZVwiKS5pbm5lckhUTUwgPSBfdGhpcy5mb2N1c2VkUmFuZ2UucXVlcnlTZWxlY3RvcihcIi5sYWJlbHMgLmxlZnRcIikuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmFuZ2VwaWNrZXJFbC5xdWVyeVNlbGVjdG9yKFwiLnRvLXZhbHVlXCIpLmlubmVySFRNTCA9IF90aGlzLmZvY3VzZWRSYW5nZS5xdWVyeVNlbGVjdG9yKFwiLmxhYmVscyAucmlnaHRcIikuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlUG9wdXBQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdHRsZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNoZWNrRGVsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJhbmdlRWxzLmZvckVhY2goZnVuY3Rpb24gKHJhbmdlRWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmhhbmRsZVJhbmdlVXBkYXRlKHJhbmdlRWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMub25DaGFuZ2UoX3RoaXMucmFuZ2VzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmZvY3VzZWRSYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmFuZ2VwaWNrZXJFbC5xdWVyeVNlbGVjdG9yKFwiLmZyb20tdmFsdWVcIikuaW5uZXJIVE1MID0gX3RoaXMuZm9jdXNlZFJhbmdlLnF1ZXJ5U2VsZWN0b3IoXCIubGFiZWxzIC5sZWZ0XCIpLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJhbmdlcGlja2VyRWwucXVlcnlTZWxlY3RvcihcIi50by12YWx1ZVwiKS5pbm5lckhUTUwgPSBfdGhpcy5mb2N1c2VkUmFuZ2UucXVlcnlTZWxlY3RvcihcIi5sYWJlbHMgLnJpZ2h0XCIpLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmhhbmRsZVBvcHVwUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDE2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVQb3B1cFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLmZvY3VzZWRSYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBwb3B1cCA9IF90aGlzLnJhbmdlcGlja2VyRWwucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKTtcclxuICAgICAgICAgICAgdmFyIHBvcHVwQXJyb3cgPSBfdGhpcy5yYW5nZXBpY2tlckVsLnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3dcIik7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cFRyYWNrID0gX3RoaXMuYm94RWxlbWVudDtcclxuICAgICAgICAgICAgdmFyIHRhcmdldFBvcyA9IF90aGlzLmZvY3VzZWRSYW5nZS5vZmZzZXRMZWZ0ICsgX3RoaXMuZm9jdXNlZFJhbmdlLmNsaWVudFdpZHRoIC8gMjtcclxuICAgICAgICAgICAgdmFyIG1pblBvcyA9IHBvcHVwLmNsaWVudFdpZHRoIC8gMiAtIDEyO1xyXG4gICAgICAgICAgICB2YXIgbWF4UG9zID0gcG9wdXBUcmFjay5jbGllbnRXaWR0aCAtIHBvcHVwLmNsaWVudFdpZHRoIC8gMiArIDEyO1xyXG4gICAgICAgICAgICBwb3B1cC5zdHlsZS5sZWZ0ID0gTWF0aC5taW4oTWF0aC5tYXgobWluUG9zLCB0YXJnZXRQb3MpLCBtYXhQb3MpICsgXCJweFwiO1xyXG4gICAgICAgICAgICBwb3B1cEFycm93LnN0eWxlLmxlZnQgPSBNYXRoLm1pbih0YXJnZXRQb3MsIHBvcHVwVHJhY2suY2xpZW50V2lkdGgpICsgXCJweFwiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSZW1vdmVEb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuZm9jdXNlZFJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5mb2N1c2VkUmFuZ2UuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSZW1vdmVDbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5mb2N1c2VkUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpZHggPSBfdGhpcy5mb2N1c2VkUmFuZ2UuZGF0YXNldC5pbmRleDtcclxuICAgICAgICAgICAgICAgIF90aGlzLnJlbW92ZVJhbmdlKGlkeCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUmFuZ2VGb2N1cyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcclxuICAgICAgICAgICAgaWYgKF90aGlzLnBvcHVwQ2xvc2VUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMucG9wdXBDbG9zZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLmZvY3VzZWRSYW5nZSA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICAoX2IgPSAoX2EgPSBfdGhpcy5yYW5nZXBpY2tlckVsKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcihcIi5wb3B1cC10cmFja1wiKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNsYXNzTGlzdC5yZW1vdmUoXCJjbG9zaW5nXCIpO1xyXG4gICAgICAgICAgICAoX2QgPSAoX2MgPSBfdGhpcy5yYW5nZXBpY2tlckVsKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MucXVlcnlTZWxlY3RvcihcIi5wb3B1cC10cmFja1wiKSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICBfdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUmFuZ2VCbHVyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgX3RoaXMuZm9jdXNlZFJhbmdlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuZm9jdXNlZFJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnBvcHVwQ2xvc2VUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5wb3B1cENsb3NlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3B1cFRyYWNrXzEgPSAoX2EgPSBfdGhpcy5yYW5nZXBpY2tlckVsKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcihcIi5wb3B1cC10cmFja1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcG9wdXBfMSA9IHBvcHVwVHJhY2tfMS5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3B1cEFycm93XzEgPSBwb3B1cFRyYWNrXzEucXVlcnlTZWxlY3RvcihcIi5hcnJvd1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cFRyYWNrXzEgPT09IG51bGwgfHwgcG9wdXBUcmFja18xID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwb3B1cFRyYWNrXzEuY2xhc3NMaXN0LmFkZChcImNsb3NpbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucG9wdXBDbG9zZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBUcmFja18xID09PSBudWxsIHx8IHBvcHVwVHJhY2tfMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcG9wdXBUcmFja18xLmNsYXNzTGlzdC5yZW1vdmUoXCJjbG9zaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1cFRyYWNrXzEgPT09IG51bGwgfHwgcG9wdXBUcmFja18xID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwb3B1cFRyYWNrXzEuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwXzEuc3R5bGUubGVmdCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwQXJyb3dfMS5zdHlsZS5sZWZ0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9LCA0MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc3RvcERyYWcgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBfdGhpcy5kcmFnQnVmZmVyID0gMDtcclxuICAgICAgICAgICAgZG9jdW1lbnQub25wb2ludGVybW92ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIF90aGlzLmRyYWdnaW5nRWwgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIF90aGlzLmNoZWNrRGVsZXRlKCk7XHJcbiAgICAgICAgICAgIF90aGlzLm9uQ2hhbmdlKF90aGlzLnJhbmdlcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZUxlZnREcmFnU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIF90aGlzLmRyYWdnaW5nRWwgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnRcclxuICAgICAgICAgICAgICAgIC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICBfdGhpcy5sYXN0WCA9IGV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KF90aGlzLmRyYWdnaW5nRWwuZGF0YXNldC5pbmRleCk7XHJcbiAgICAgICAgICAgIF90aGlzLmRyYWdDYXB0dXJlZEZyb20gPSBfdGhpcy5yYW5nZXNbaW5kZXhdLmZyb21UaW1lO1xyXG4gICAgICAgICAgICBfdGhpcy5kcmFnQ2FwdHVyZWRUbyA9IF90aGlzLnJhbmdlc1tpbmRleF0udG9UaW1lO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJ1cCA9IF90aGlzLnN0b3BEcmFnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbnBvaW50ZXJtb3ZlID0gX3RoaXMuaGFuZGxlTGVmdERyYWc7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZVJpZ2h0RHJhZ1N0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBfdGhpcy5kcmFnZ2luZ0VsID0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgX3RoaXMubGFzdFggPSBldmVudC5jbGllbnRYO1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChfdGhpcy5kcmFnZ2luZ0VsLmRhdGFzZXQuaW5kZXgpO1xyXG4gICAgICAgICAgICBfdGhpcy5kcmFnQ2FwdHVyZWRGcm9tID0gX3RoaXMucmFuZ2VzW2luZGV4XS5mcm9tVGltZTtcclxuICAgICAgICAgICAgX3RoaXMuZHJhZ0NhcHR1cmVkVG8gPSBfdGhpcy5yYW5nZXNbaW5kZXhdLnRvVGltZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQub25wb2ludGVydXAgPSBfdGhpcy5zdG9wRHJhZztcclxuICAgICAgICAgICAgZG9jdW1lbnQub25wb2ludGVybW92ZSA9IF90aGlzLmhhbmRsZVJpZ2h0RHJhZztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTWlkRHJhZ1N0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBfdGhpcy5kcmFnZ2luZ0VsID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICAgICAgX3RoaXMubGFzdFggPSBldmVudC5jbGllbnRYO1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChfdGhpcy5kcmFnZ2luZ0VsLmRhdGFzZXQuaW5kZXgpO1xyXG4gICAgICAgICAgICBfdGhpcy5kcmFnQ2FwdHVyZWRGcm9tID0gX3RoaXMucmFuZ2VzW2luZGV4XS5mcm9tVGltZTtcclxuICAgICAgICAgICAgX3RoaXMuZHJhZ0NhcHR1cmVkVG8gPSBfdGhpcy5yYW5nZXNbaW5kZXhdLnRvVGltZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQub25wb2ludGVydXAgPSBfdGhpcy5zdG9wRHJhZztcclxuICAgICAgICAgICAgZG9jdW1lbnQub25wb2ludGVybW92ZSA9IF90aGlzLmhhbmRsZU1pZERyYWc7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZUxlZnREcmFnID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBpc0hlbGREb3duID0gZXZlbnQuYnV0dG9ucyA9PT0gdW5kZWZpbmVkID8gZXZlbnQud2hpY2ggPT09IDEgOiBldmVudC5idXR0b25zID09PSAxO1xyXG4gICAgICAgICAgICBpZiAoIWlzSGVsZERvd24pIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnN0b3BEcmFnKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGVsID0gX3RoaXMuZHJhZ2dpbmdFbDtcclxuICAgICAgICAgICAgaWYgKCFlbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KGVsLmRhdGFzZXQuaW5kZXgpO1xyXG4gICAgICAgICAgICB2YXIgZGVsdGEgPSBldmVudC5jbGllbnRYIC0gX3RoaXMubGFzdFg7XHJcbiAgICAgICAgICAgIHZhciBkZWx0YVBlcmNlbnQgPSAoZGVsdGEgLyBlbC5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoKSAqIDEwMDtcclxuICAgICAgICAgICAgdmFyIGRlbHRhVmFsdWUgPSAoZGVsdGFQZXJjZW50IC8gMTAwKSAqIF90aGlzLm9wdGlvbnMudG90YWw7XHJcbiAgICAgICAgICAgIGRlbHRhVmFsdWUgPSBkZWx0YVZhbHVlIC0gKGRlbHRhVmFsdWUgJSBfdGhpcy5vcHRpb25zLnN0ZXApO1xyXG4gICAgICAgICAgICBpZiAoZGVsdGFWYWx1ZSAtIF90aGlzLmRyYWdCdWZmZXIgPCBfdGhpcy5vcHRpb25zLnN0ZXAgJiZcclxuICAgICAgICAgICAgICAgIGRlbHRhVmFsdWUgLSBfdGhpcy5kcmFnQnVmZmVyID4gLV90aGlzLm9wdGlvbnMuc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLmRyYWdCdWZmZXIgPSBkZWx0YVZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgbmV3U3RhcnQgPSBfdGhpcy5kcmFnQ2FwdHVyZWRGcm9tO1xyXG4gICAgICAgICAgICB2YXIgbmV3RW5kID0gX3RoaXMuZHJhZ0NhcHR1cmVkVG87XHJcbiAgICAgICAgICAgIGlmIChuZXdFbmQgLSAobmV3U3RhcnQgKyBkZWx0YVZhbHVlKSA8IDApIHtcclxuICAgICAgICAgICAgICAgIG5ld1N0YXJ0ID0gbmV3RW5kO1xyXG4gICAgICAgICAgICAgICAgbmV3RW5kID0gbmV3RW5kICsgZGVsdGFWYWx1ZSAtIChuZXdFbmQgLSBfdGhpcy5kcmFnQ2FwdHVyZWRGcm9tKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1N0YXJ0ICs9IGRlbHRhVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuaGFuZGxlVmFsdWVDaGFuZ2UoaW5kZXgsIHsgZnJvbVRpbWU6IG5ld1N0YXJ0LCB0b1RpbWU6IG5ld0VuZCB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUmlnaHREcmFnID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBpc0hlbGREb3duID0gZXZlbnQuYnV0dG9ucyA9PT0gdW5kZWZpbmVkID8gZXZlbnQud2hpY2ggPT09IDEgOiBldmVudC5idXR0b25zID09PSAxO1xyXG4gICAgICAgICAgICBpZiAoIWlzSGVsZERvd24pIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnN0b3BEcmFnKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGVsID0gX3RoaXMuZHJhZ2dpbmdFbDtcclxuICAgICAgICAgICAgaWYgKCFlbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KGVsLmRhdGFzZXQuaW5kZXgpO1xyXG4gICAgICAgICAgICB2YXIgZGVsdGEgPSBldmVudC5jbGllbnRYIC0gX3RoaXMubGFzdFg7XHJcbiAgICAgICAgICAgIHZhciBkZWx0YVBlcmNlbnQgPSAoZGVsdGEgLyBlbC5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoKSAqIDEwMDtcclxuICAgICAgICAgICAgdmFyIGRlbHRhVmFsdWUgPSAoZGVsdGFQZXJjZW50IC8gMTAwKSAqIF90aGlzLm9wdGlvbnMudG90YWw7XHJcbiAgICAgICAgICAgIGRlbHRhVmFsdWUgPSBkZWx0YVZhbHVlIC0gKGRlbHRhVmFsdWUgJSBfdGhpcy5vcHRpb25zLnN0ZXApO1xyXG4gICAgICAgICAgICBpZiAoZGVsdGFWYWx1ZSAtIF90aGlzLmRyYWdCdWZmZXIgPCBfdGhpcy5vcHRpb25zLnN0ZXAgJiZcclxuICAgICAgICAgICAgICAgIGRlbHRhVmFsdWUgLSBfdGhpcy5kcmFnQnVmZmVyID4gLV90aGlzLm9wdGlvbnMuc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLmRyYWdCdWZmZXIgPSBkZWx0YVZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgbmV3U3RhcnQgPSBfdGhpcy5kcmFnQ2FwdHVyZWRGcm9tO1xyXG4gICAgICAgICAgICB2YXIgbmV3RW5kID0gX3RoaXMuZHJhZ0NhcHR1cmVkVG87XHJcbiAgICAgICAgICAgIGlmIChuZXdFbmQgKyBkZWx0YVZhbHVlIC0gbmV3U3RhcnQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdTdGFydCA9IG5ld1N0YXJ0ICsgZGVsdGFWYWx1ZSAtIChuZXdTdGFydCAtIG5ld0VuZCk7XHJcbiAgICAgICAgICAgICAgICBuZXdFbmQgPSBfdGhpcy5kcmFnQ2FwdHVyZWRGcm9tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3RW5kICs9IGRlbHRhVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuaGFuZGxlVmFsdWVDaGFuZ2UoaW5kZXgsIHsgZnJvbVRpbWU6IG5ld1N0YXJ0LCB0b1RpbWU6IG5ld0VuZCB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTWlkRHJhZyA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB2YXIgaXNIZWxkRG93biA9IGV2ZW50LmJ1dHRvbnMgPT09IHVuZGVmaW5lZCA/IGV2ZW50LndoaWNoID09PSAxIDogZXZlbnQuYnV0dG9ucyA9PT0gMTtcclxuICAgICAgICAgICAgaWYgKCFpc0hlbGREb3duKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zdG9wRHJhZygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBlbCA9IF90aGlzLmRyYWdnaW5nRWw7XHJcbiAgICAgICAgICAgIGlmICghZWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChlbC5kYXRhc2V0LmluZGV4KTtcclxuICAgICAgICAgICAgdmFyIGRlbHRhID0gZXZlbnQuY2xpZW50WCAtIF90aGlzLmxhc3RYO1xyXG4gICAgICAgICAgICB2YXIgZGVsdGFQZXJjZW50ID0gKGRlbHRhIC8gZWwucGFyZW50RWxlbWVudC5jbGllbnRXaWR0aCkgKiAxMDA7XHJcbiAgICAgICAgICAgIHZhciBkZWx0YVZhbHVlID0gKGRlbHRhUGVyY2VudCAvIDEwMCkgKiBfdGhpcy5vcHRpb25zLnRvdGFsO1xyXG4gICAgICAgICAgICBkZWx0YVZhbHVlID0gZGVsdGFWYWx1ZSAtIChkZWx0YVZhbHVlICUgX3RoaXMub3B0aW9ucy5zdGVwKTtcclxuICAgICAgICAgICAgaWYgKGRlbHRhVmFsdWUgLSBfdGhpcy5kcmFnQnVmZmVyIDwgX3RoaXMub3B0aW9ucy5zdGVwICYmXHJcbiAgICAgICAgICAgICAgICBkZWx0YVZhbHVlIC0gX3RoaXMuZHJhZ0J1ZmZlciA+IC1fdGhpcy5vcHRpb25zLnN0ZXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5kcmFnQnVmZmVyID0gZGVsdGFWYWx1ZTtcclxuICAgICAgICAgICAgdmFyIG5ld1N0YXJ0ID0gX3RoaXMuZHJhZ0NhcHR1cmVkRnJvbSArIGRlbHRhVmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBuZXdFbmQgPSBfdGhpcy5kcmFnQ2FwdHVyZWRUbyArIGRlbHRhVmFsdWU7XHJcbiAgICAgICAgICAgIF90aGlzLmhhbmRsZVZhbHVlQ2hhbmdlKGluZGV4LCB7IGZyb21UaW1lOiBuZXdTdGFydCwgdG9UaW1lOiBuZXdFbmQgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5vcHRpb25zKSwgb3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2U7XHJcbiAgICAgICAgdGhpcy5yYW5nZXBpY2tlckVsID0gdGhpcy5jcmVhdGVSYW5nZXBpY2tlcihsYWJlbCk7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnJhbmdlcGlja2VyRWwpO1xyXG4gICAgICAgIHRoaXMuYm94RWxlbWVudCA9IHRoaXMucmFuZ2VwaWNrZXJFbC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdG9yLWJveFwiKTtcclxuICAgICAgICB0aGlzLmJveEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIHRoaXMuaGFuZGxlQm94Q2xpY2spO1xyXG4gICAgICAgIHRoaXMucmFuZ2VzID0gdmFsdWVzO1xyXG4gICAgICAgIHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uIChyYW5nZSkge1xyXG4gICAgICAgICAgICB2YXIgcmFuZ2VFbCA9IF90aGlzLmNyZWF0ZVJhbmdlKCk7XHJcbiAgICAgICAgICAgIF90aGlzLmJveEVsZW1lbnQuYXBwZW5kQ2hpbGQocmFuZ2VFbCk7XHJcbiAgICAgICAgICAgIF90aGlzLnJhbmdlRWxzLnB1c2gocmFuZ2VFbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBSYW5nZVBpY2tlcjtcclxufSgpKTtcclxuZXhwb3J0IHsgUmFuZ2VQaWNrZXIgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==