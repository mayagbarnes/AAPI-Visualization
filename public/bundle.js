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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 212);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return epsilon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return quarterPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return radians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return atan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return exp; });
/* unused harmony export floor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return hypot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return tan; });
/* harmony export (immutable) */ __webpack_exports__["b"] = acos;
/* harmony export (immutable) */ __webpack_exports__["c"] = asin;
/* harmony export (immutable) */ __webpack_exports__["m"] = haversin;
var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var tau = pi * 2;

var degrees = 180 / pi;
var radians = pi / 180;

var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;
var floor = Math.floor;
var hypot = Math.hypot;
var log = Math.log;
var pow = Math.pow;
var sin = Math.sin;
var sign = Math.sign || function (x) {
  return x > 0 ? 1 : x < 0 ? -1 : 0;
};
var sqrt = Math.sqrt;
var tan = Math.tan;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}

function haversin(x) {
  return (x = sin(x / 2)) * x;
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (specifier) {
  var n = specifier.length / 6 | 0,
      colors = new Array(n),
      i = 0;
  while (i < n) colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
  return colors;
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__ = __webpack_require__(10);


/* harmony default export */ __webpack_exports__["a"] = (scheme => Object(__WEBPACK_IMPORTED_MODULE_0_d3_interpolate__["e" /* interpolateRgbBasis */])(scheme[scheme.length - 1]));

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bisect_js__ = __webpack_require__(99);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__bisect_js__["a"]; });
/* unused harmony reexport bisectRight */
/* unused harmony reexport bisectLeft */
/* unused harmony reexport bisectCenter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending_js__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ascending_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bisector_js__ = __webpack_require__(100);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__bisector_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__count_js__ = __webpack_require__(33);
/* unused harmony reexport count */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cross_js__ = __webpack_require__(237);
/* unused harmony reexport cross */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cumsum_js__ = __webpack_require__(238);
/* unused harmony reexport cumsum */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__descending_js__ = __webpack_require__(239);
/* unused harmony reexport descending */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__deviation_js__ = __webpack_require__(102);
/* unused harmony reexport deviation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__extent_js__ = __webpack_require__(104);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_8__extent_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fsum_js__ = __webpack_require__(240);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_9__fsum_js__["a"]; });
/* unused harmony reexport fsum */
/* unused harmony reexport fcumsum */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__group_js__ = __webpack_require__(105);
/* unused harmony reexport group */
/* unused harmony reexport groups */
/* unused harmony reexport index */
/* unused harmony reexport indexes */
/* unused harmony reexport rollup */
/* unused harmony reexport rollups */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__groupSort_js__ = __webpack_require__(241);
/* unused harmony reexport groupSort */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__bin_js__ = __webpack_require__(242);
/* unused harmony reexport bin */
/* unused harmony reexport histogram */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__threshold_freedmanDiaconis_js__ = __webpack_require__(245);
/* unused harmony reexport thresholdFreedmanDiaconis */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__threshold_scott_js__ = __webpack_require__(246);
/* unused harmony reexport thresholdScott */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__threshold_sturges_js__ = __webpack_require__(111);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_15__threshold_sturges_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__max_js__ = __webpack_require__(112);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_16__max_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__maxIndex_js__ = __webpack_require__(114);
/* unused harmony reexport maxIndex */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__mean_js__ = __webpack_require__(247);
/* unused harmony reexport mean */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__median_js__ = __webpack_require__(248);
/* unused harmony reexport median */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__merge_js__ = __webpack_require__(249);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_20__merge_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__min_js__ = __webpack_require__(54);
/* unused harmony reexport min */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__minIndex_js__ = __webpack_require__(115);
/* unused harmony reexport minIndex */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__nice_js__ = __webpack_require__(110);
/* unused harmony reexport nice */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pairs_js__ = __webpack_require__(250);
/* unused harmony reexport pairs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__permute_js__ = __webpack_require__(109);
/* unused harmony reexport permute */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__quantile_js__ = __webpack_require__(53);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_26__quantile_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_26__quantile_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__quickselect_js__ = __webpack_require__(113);
/* unused harmony reexport quickselect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__range_js__ = __webpack_require__(251);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_28__range_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__least_js__ = __webpack_require__(252);
/* unused harmony reexport least */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__leastIndex_js__ = __webpack_require__(116);
/* unused harmony reexport leastIndex */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__greatest_js__ = __webpack_require__(253);
/* unused harmony reexport greatest */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__greatestIndex_js__ = __webpack_require__(254);
/* unused harmony reexport greatestIndex */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__scan_js__ = __webpack_require__(255);
/* unused harmony reexport scan */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__shuffle_js__ = __webpack_require__(256);
/* unused harmony reexport shuffle */
/* unused harmony reexport shuffler */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__sum_js__ = __webpack_require__(257);
/* unused harmony reexport sum */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ticks_js__ = __webpack_require__(52);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_36__ticks_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_36__ticks_js__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_36__ticks_js__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__transpose_js__ = __webpack_require__(117);
/* unused harmony reexport transpose */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__variance_js__ = __webpack_require__(103);
/* unused harmony reexport variance */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__zip_js__ = __webpack_require__(258);
/* unused harmony reexport zip */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__every_js__ = __webpack_require__(259);
/* unused harmony reexport every */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__some_js__ = __webpack_require__(260);
/* unused harmony reexport some */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__filter_js__ = __webpack_require__(261);
/* unused harmony reexport filter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__map_js__ = __webpack_require__(262);
/* unused harmony reexport map */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__reduce_js__ = __webpack_require__(263);
/* unused harmony reexport reduce */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__reverse_js__ = __webpack_require__(264);
/* unused harmony reexport reverse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__sort_js__ = __webpack_require__(108);
/* unused harmony reexport sort */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__difference_js__ = __webpack_require__(265);
/* unused harmony reexport difference */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__disjoint_js__ = __webpack_require__(266);
/* unused harmony reexport disjoint */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__intersection_js__ = __webpack_require__(267);
/* unused harmony reexport intersection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__subset_js__ = __webpack_require__(269);
/* unused harmony reexport subset */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__superset_js__ = __webpack_require__(118);
/* unused harmony reexport superset */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__union_js__ = __webpack_require__(270);
/* unused harmony reexport union */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53_internmap__ = __webpack_require__(106);
/* unused harmony reexport InternMap */
/* unused harmony reexport InternSet */












 // Deprecated; use bin.




















 // Deprecated; use leastIndex.





















/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (Math.random);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = initRange;
/* harmony export (immutable) */ __webpack_exports__["a"] = initInterpolator;
function initRange(domain, range) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);break;
    default:
      this.range(range).domain(domain);break;
  }
  return this;
}

function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      {
        if (typeof domain === "function") this.interpolator(domain);else this.range(domain);
        break;
      }
    default:
      {
        this.domain(domain);
        if (typeof interpolator === "function") this.interpolator(interpolator);else this.range(interpolator);
        break;
      }
  }
  return this;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = newInterval;
var t0 = new Date(),
    t1 = new Date();

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = arguments.length === 0 ? new Date() : new Date(+date)), date;
  }

  interval.floor = function (date) {
    return floori(date = new Date(+date)), date;
  };

  interval.ceil = function (date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function (date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function (date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function (start, stop, step) {
    var range = [],
        previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start); while (previous < start && start < stop);
    return range;
  };

  interval.filter = function (test) {
    return newInterval(function (date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function (date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function (start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function (step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? function (d) {
        return field(d) % step === 0;
      } : function (d) {
        return interval.count(0, d) % step === 0;
      });
    };
  }

  return interval;
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_js__ = __webpack_require__(279);
/* unused harmony reexport create */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__creator_js__ = __webpack_require__(34);
/* unused harmony reexport creator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_js__ = __webpack_require__(313);
/* unused harmony reexport local */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__matcher_js__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__matcher_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__namespace_js__ = __webpack_require__(56);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__namespace_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__namespaces_js__ = __webpack_require__(57);
/* unused harmony reexport namespaces */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pointer_js__ = __webpack_require__(124);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__pointer_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pointers_js__ = __webpack_require__(314);
/* unused harmony reexport pointers */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__select_js__ = __webpack_require__(119);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_8__select_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__selectAll_js__ = __webpack_require__(315);
/* unused harmony reexport selectAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__selection_index_js__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_10__selection_index_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__selector_js__ = __webpack_require__(58);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_11__selector_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__selectorAll_js__ = __webpack_require__(120);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_12__selectorAll_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__selection_style_js__ = __webpack_require__(123);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_13__selection_style_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__window_js__ = __webpack_require__(60);
/* unused harmony reexport window */
















/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CREATED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SCHEDULED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return STARTING; });
/* unused harmony export STARTED */
/* unused harmony export RUNNING */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENDED; });
/* harmony export (immutable) */ __webpack_exports__["g"] = init;
/* harmony export (immutable) */ __webpack_exports__["h"] = set;
/* harmony export (immutable) */ __webpack_exports__["f"] = get;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dispatch__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_timer__ = __webpack_require__(38);



var emptyOn = Object(__WEBPACK_IMPORTED_MODULE_0_d3_dispatch__["a" /* dispatch */])("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ __webpack_exports__["e"] = (function (node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
});

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = Object(__WEBPACK_IMPORTED_MODULE_1_d3_timer__["c" /* timer */])(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return Object(__WEBPACK_IMPORTED_MODULE_1_d3_timer__["b" /* timeout */])(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("cancel", node, node.__data__, o.index, o.group);
          delete schedules[i];
        }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    Object(__WEBPACK_IMPORTED_MODULE_1_d3_timer__["b" /* timeout */])(function () {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(93);
var isBuffer = __webpack_require__(215);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value_js__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__value_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_js__ = __webpack_require__(132);
/* unused harmony reexport interpolateArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basis_js__ = __webpack_require__(63);
/* unused harmony reexport interpolateBasis */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basisClosed_js__ = __webpack_require__(130);
/* unused harmony reexport interpolateBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__date_js__ = __webpack_require__(133);
/* unused harmony reexport interpolateDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__discrete_js__ = __webpack_require__(320);
/* unused harmony reexport interpolateDiscrete */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hue_js__ = __webpack_require__(321);
/* unused harmony reexport interpolateHue */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__number_js__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__number_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__numberArray_js__ = __webpack_require__(64);
/* unused harmony reexport interpolateNumberArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__object_js__ = __webpack_require__(134);
/* unused harmony reexport interpolateObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__round_js__ = __webpack_require__(322);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_10__round_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__string_js__ = __webpack_require__(135);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_11__string_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__transform_index_js__ = __webpack_require__(323);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_12__transform_index_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_12__transform_index_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__zoom_js__ = __webpack_require__(326);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_13__zoom_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__rgb_js__ = __webpack_require__(129);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_14__rgb_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_14__rgb_js__["b"]; });
/* unused harmony reexport interpolateRgbBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__hsl_js__ = __webpack_require__(327);
/* unused harmony reexport interpolateHsl */
/* unused harmony reexport interpolateHslLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__lab_js__ = __webpack_require__(328);
/* unused harmony reexport interpolateLab */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__hcl_js__ = __webpack_require__(329);
/* unused harmony reexport interpolateHcl */
/* unused harmony reexport interpolateHclLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__cubehelix_js__ = __webpack_require__(330);
/* unused harmony reexport interpolateCubehelix */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_18__cubehelix_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__piecewise_js__ = __webpack_require__(331);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_19__piecewise_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__quantize_js__ = __webpack_require__(332);
/* unused harmony reexport quantize */






















/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return root; });
/* harmony export (immutable) */ __webpack_exports__["a"] = Selection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__select_js__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectAll_js__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectChild_js__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectChildren_js__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filter_js__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_js__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__enter_js__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__exit_js__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__join_js__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__merge_js__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__order_js__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sort_js__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__call_js__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__nodes_js__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__node_js__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__size_js__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__empty_js__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__each_js__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__attr_js__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__style_js__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__property_js__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__classed_js__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__text_js__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__html_js__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__raise_js__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__lower_js__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__append_js__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__insert_js__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__remove_js__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__clone_js__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__datum_js__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__on_js__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__dispatch_js__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__iterator_js__ = __webpack_require__(312);



































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

function selection_selection() {
  return this;
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: __WEBPACK_IMPORTED_MODULE_0__select_js__["a" /* default */],
  selectAll: __WEBPACK_IMPORTED_MODULE_1__selectAll_js__["a" /* default */],
  selectChild: __WEBPACK_IMPORTED_MODULE_2__selectChild_js__["a" /* default */],
  selectChildren: __WEBPACK_IMPORTED_MODULE_3__selectChildren_js__["a" /* default */],
  filter: __WEBPACK_IMPORTED_MODULE_4__filter_js__["a" /* default */],
  data: __WEBPACK_IMPORTED_MODULE_5__data_js__["a" /* default */],
  enter: __WEBPACK_IMPORTED_MODULE_6__enter_js__["b" /* default */],
  exit: __WEBPACK_IMPORTED_MODULE_7__exit_js__["a" /* default */],
  join: __WEBPACK_IMPORTED_MODULE_8__join_js__["a" /* default */],
  merge: __WEBPACK_IMPORTED_MODULE_9__merge_js__["a" /* default */],
  selection: selection_selection,
  order: __WEBPACK_IMPORTED_MODULE_10__order_js__["a" /* default */],
  sort: __WEBPACK_IMPORTED_MODULE_11__sort_js__["a" /* default */],
  call: __WEBPACK_IMPORTED_MODULE_12__call_js__["a" /* default */],
  nodes: __WEBPACK_IMPORTED_MODULE_13__nodes_js__["a" /* default */],
  node: __WEBPACK_IMPORTED_MODULE_14__node_js__["a" /* default */],
  size: __WEBPACK_IMPORTED_MODULE_15__size_js__["a" /* default */],
  empty: __WEBPACK_IMPORTED_MODULE_16__empty_js__["a" /* default */],
  each: __WEBPACK_IMPORTED_MODULE_17__each_js__["a" /* default */],
  attr: __WEBPACK_IMPORTED_MODULE_18__attr_js__["a" /* default */],
  style: __WEBPACK_IMPORTED_MODULE_19__style_js__["a" /* default */],
  property: __WEBPACK_IMPORTED_MODULE_20__property_js__["a" /* default */],
  classed: __WEBPACK_IMPORTED_MODULE_21__classed_js__["a" /* default */],
  text: __WEBPACK_IMPORTED_MODULE_22__text_js__["a" /* default */],
  html: __WEBPACK_IMPORTED_MODULE_23__html_js__["a" /* default */],
  raise: __WEBPACK_IMPORTED_MODULE_24__raise_js__["a" /* default */],
  lower: __WEBPACK_IMPORTED_MODULE_25__lower_js__["a" /* default */],
  append: __WEBPACK_IMPORTED_MODULE_26__append_js__["a" /* default */],
  insert: __WEBPACK_IMPORTED_MODULE_27__insert_js__["a" /* default */],
  remove: __WEBPACK_IMPORTED_MODULE_28__remove_js__["a" /* default */],
  clone: __WEBPACK_IMPORTED_MODULE_29__clone_js__["a" /* default */],
  datum: __WEBPACK_IMPORTED_MODULE_30__datum_js__["a" /* default */],
  on: __WEBPACK_IMPORTED_MODULE_31__on_js__["a" /* default */],
  dispatch: __WEBPACK_IMPORTED_MODULE_32__dispatch_js__["a" /* default */],
  [Symbol.iterator]: __WEBPACK_IMPORTED_MODULE_33__iterator_js__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["b"] = (selection);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__color_js__ = __webpack_require__(61);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__color_js__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__color_js__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__color_js__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lab_js__ = __webpack_require__(318);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__lab_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__lab_js__["b"]; });
/* unused harmony reexport lch */
/* unused harmony reexport gray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cubehelix_js__ = __webpack_require__(319);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__cubehelix_js__["a"]; });




/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = projection;
/* harmony export (immutable) */ __webpack_exports__["b"] = projectionMutator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian_js__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clip_circle_js__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clip_rectangle_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compose_js__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity_js__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rotation_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transform_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fit_js__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resample_js__ = __webpack_require__(444);











var transformRadians = Object(__WEBPACK_IMPORTED_MODULE_7__transform_js__["a" /* transformer */])({
  point: function (x, y) {
    this.stream.point(x * __WEBPACK_IMPORTED_MODULE_5__math_js__["s" /* radians */], y * __WEBPACK_IMPORTED_MODULE_5__math_js__["s" /* radians */]);
  }
});

function transformRotate(rotate) {
  return Object(__WEBPACK_IMPORTED_MODULE_7__transform_js__["a" /* transformer */])({
    point: function (x, y) {
      var r = rotate(x, y);
      return this.stream.point(r[0], r[1]);
    }
  });
}

function scaleTranslate(k, dx, dy, sx, sy) {
  function transform(x, y) {
    x *= sx;y *= sy;
    return [dx + k * x, dy - k * y];
  }
  transform.invert = function (x, y) {
    return [(x - dx) / k * sx, (dy - y) / k * sy];
  };
  return transform;
}

function scaleTranslateRotate(k, dx, dy, sx, sy, alpha) {
  if (!alpha) return scaleTranslate(k, dx, dy, sx, sy);
  var cosAlpha = Object(__WEBPACK_IMPORTED_MODULE_5__math_js__["g" /* cos */])(alpha),
      sinAlpha = Object(__WEBPACK_IMPORTED_MODULE_5__math_js__["u" /* sin */])(alpha),
      a = cosAlpha * k,
      b = sinAlpha * k,
      ai = cosAlpha / k,
      bi = sinAlpha / k,
      ci = (sinAlpha * dy - cosAlpha * dx) / k,
      fi = (sinAlpha * dx + cosAlpha * dy) / k;
  function transform(x, y) {
    x *= sx;y *= sy;
    return [a * x - b * y + dx, dy - b * x - a * y];
  }
  transform.invert = function (x, y) {
    return [sx * (ai * x - bi * y + ci), sy * (fi - bi * x - ai * y)];
  };
  return transform;
}

function projection(project) {
  return projectionMutator(function () {
    return project;
  })();
}

function projectionMutator(projectAt) {
  var project,
      k = 150,
      // scale
  x = 480,
      y = 250,
      // translate
  lambda = 0,
      phi = 0,
      // center
  deltaLambda = 0,
      deltaPhi = 0,
      deltaGamma = 0,
      rotate,
      // pre-rotate
  alpha = 0,
      // post-rotate angle
  sx = 1,
      // reflectX
  sy = 1,
      // reflectX
  theta = null,
      preclip = __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian_js__["a" /* default */],
      // pre-clip angle
  x0 = null,
      y0,
      x1,
      y1,
      postclip = __WEBPACK_IMPORTED_MODULE_4__identity_js__["a" /* default */],
      // post-clip extent
  delta2 = 0.5,
      // precision
  projectResample,
      projectTransform,
      projectRotateTransform,
      cache,
      cacheStream;

  function projection(point) {
    return projectRotateTransform(point[0] * __WEBPACK_IMPORTED_MODULE_5__math_js__["s" /* radians */], point[1] * __WEBPACK_IMPORTED_MODULE_5__math_js__["s" /* radians */]);
  }

  function invert(point) {
    point = projectRotateTransform.invert(point[0], point[1]);
    return point && [point[0] * __WEBPACK_IMPORTED_MODULE_5__math_js__["h" /* degrees */], point[1] * __WEBPACK_IMPORTED_MODULE_5__math_js__["h" /* degrees */]];
  }

  projection.stream = function (stream) {
    return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
  };

  projection.preclip = function (_) {
    return arguments.length ? (preclip = _, theta = undefined, reset()) : preclip;
  };

  projection.postclip = function (_) {
    return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
  };

  projection.clipAngle = function (_) {
    return arguments.length ? (preclip = +_ ? Object(__WEBPACK_IMPORTED_MODULE_1__clip_circle_js__["a" /* default */])(theta = _ * __WEBPACK_IMPORTED_MODULE_5__math_js__["s" /* radians */]) : (theta = null, __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian_js__["a" /* default */]), reset()) : theta * __WEBPACK_IMPORTED_MODULE_5__math_js__["h" /* degrees */];
  };

  projection.clipExtent = function (_) {
    return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, __WEBPACK_IMPORTED_MODULE_4__identity_js__["a" /* default */]) : Object(__WEBPACK_IMPORTED_MODULE_2__clip_rectangle_js__["a" /* default */])(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  projection.scale = function (_) {
    return arguments.length ? (k = +_, recenter()) : k;
  };

  projection.translate = function (_) {
    return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
  };

  projection.center = function (_) {
    return arguments.length ? (lambda = _[0] % 360 * __WEBPACK_IMPORTED_MODULE_5__math_js__["s" /* radians */], phi = _[1] % 360 * __WEBPACK_IMPORTED_MODULE_5__math_js__["s" /* radians */], recenter()) : [lambda * __WEBPACK_IMPORTED_MODULE_5__math_js__["h" /* degrees */], phi * __WEBPACK_IMPORTED_MODULE_5__math_js__["h" /* degrees */]];
  };

  projection.rotate = function (_) {
    return arguments.length ? (deltaLambda = _[0] % 360 * __WEBPACK_IMPORTED_MODULE_5__math_js__["s" /* radians */], deltaPhi = _[1] % 360 * __WEBPACK_IMPORTED_MODULE_5__math_js__["s" /* radians */], deltaGamma = _.length > 2 ? _[2] % 360 * __WEBPACK_IMPORTED_MODULE_5__math_js__["s" /* radians */] : 0, recenter()) : [deltaLambda * __WEBPACK_IMPORTED_MODULE_5__math_js__["h" /* degrees */], deltaPhi * __WEBPACK_IMPORTED_MODULE_5__math_js__["h" /* degrees */], deltaGamma * __WEBPACK_IMPORTED_MODULE_5__math_js__["h" /* degrees */]];
  };

  projection.angle = function (_) {
    return arguments.length ? (alpha = _ % 360 * __WEBPACK_IMPORTED_MODULE_5__math_js__["s" /* radians */], recenter()) : alpha * __WEBPACK_IMPORTED_MODULE_5__math_js__["h" /* degrees */];
  };

  projection.reflectX = function (_) {
    return arguments.length ? (sx = _ ? -1 : 1, recenter()) : sx < 0;
  };

  projection.reflectY = function (_) {
    return arguments.length ? (sy = _ ? -1 : 1, recenter()) : sy < 0;
  };

  projection.precision = function (_) {
    return arguments.length ? (projectResample = Object(__WEBPACK_IMPORTED_MODULE_9__resample_js__["a" /* default */])(projectTransform, delta2 = _ * _), reset()) : Object(__WEBPACK_IMPORTED_MODULE_5__math_js__["v" /* sqrt */])(delta2);
  };

  projection.fitExtent = function (extent, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__fit_js__["a" /* fitExtent */])(projection, extent, object);
  };

  projection.fitSize = function (size, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__fit_js__["c" /* fitSize */])(projection, size, object);
  };

  projection.fitWidth = function (width, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__fit_js__["d" /* fitWidth */])(projection, width, object);
  };

  projection.fitHeight = function (height, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__fit_js__["b" /* fitHeight */])(projection, height, object);
  };

  function recenter() {
    var center = scaleTranslateRotate(k, 0, 0, sx, sy, alpha).apply(null, project(lambda, phi)),
        transform = scaleTranslateRotate(k, x - center[0], y - center[1], sx, sy, alpha);
    rotate = Object(__WEBPACK_IMPORTED_MODULE_6__rotation_js__["b" /* rotateRadians */])(deltaLambda, deltaPhi, deltaGamma);
    projectTransform = Object(__WEBPACK_IMPORTED_MODULE_3__compose_js__["a" /* default */])(project, transform);
    projectRotateTransform = Object(__WEBPACK_IMPORTED_MODULE_3__compose_js__["a" /* default */])(rotate, projectTransform);
    projectResample = Object(__WEBPACK_IMPORTED_MODULE_9__resample_js__["a" /* default */])(projectTransform, delta2);
    return reset();
  }

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return function () {
    project = projectAt.apply(this, arguments);
    projection.invert = project.invert && invert;
    return recenter();
  };
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const durationSecond = 1000;
/* harmony export (immutable) */ __webpack_exports__["e"] = durationSecond;

const durationMinute = durationSecond * 60;
/* harmony export (immutable) */ __webpack_exports__["c"] = durationMinute;

const durationHour = durationMinute * 60;
/* harmony export (immutable) */ __webpack_exports__["b"] = durationHour;

const durationDay = durationHour * 24;
/* harmony export (immutable) */ __webpack_exports__["a"] = durationDay;

const durationWeek = durationDay * 7;
/* harmony export (immutable) */ __webpack_exports__["f"] = durationWeek;

const durationMonth = durationDay * 30;
/* harmony export (immutable) */ __webpack_exports__["d"] = durationMonth;

const durationYear = durationDay * 365;
/* harmony export (immutable) */ __webpack_exports__["g"] = durationYear;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = identity;
/* harmony export (immutable) */ __webpack_exports__["a"] = copy;
/* harmony export (immutable) */ __webpack_exports__["d"] = transformer;
/* harmony export (immutable) */ __webpack_exports__["b"] = continuous;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant_js__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__number_js__ = __webpack_require__(83);





var unit = [0, 1];

function identity(x) {
  return x;
}

function normalize(a, b) {
  return (b -= a = +a) ? function (x) {
    return (x - a) / b;
  } : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(isNaN(b) ? NaN : 0.5);
}

function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function (x) {
    return Math.max(a, Math.min(b, x));
  };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0],
      d1 = domain[1],
      r0 = range[0],
      r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function (x) {
    return r0(d0(x));
  };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function (x) {
    var i = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["c" /* bisect */])(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}

function transformer() {
  var domain = unit,
      range = unit,
      interpolate = __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["a" /* interpolate */],
      transform,
      untransform,
      unknown,
      clamp = identity,
      piecewise,
      output,
      input;

  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
  }

  scale.invert = function (y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["c" /* interpolateNumber */])))(y)));
  };

  scale.domain = function (_) {
    return arguments.length ? (domain = Array.from(_, __WEBPACK_IMPORTED_MODULE_3__number_js__["a" /* default */]), rescale()) : domain.slice();
  };

  scale.range = function (_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.rangeRound = function (_) {
    return range = Array.from(_), interpolate = __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["f" /* interpolateRound */], rescale();
  };

  scale.clamp = function (_) {
    return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
  };

  scale.interpolate = function (_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function (t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}

function continuous() {
  return transformer()(identity, identity);
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Transition;
/* unused harmony export default */
/* harmony export (immutable) */ __webpack_exports__["b"] = newId;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attr_js__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attrTween_js__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delay_js__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__duration_js__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ease_js__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__easeVarying_js__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__filter_js__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__merge_js__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__on_js__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__remove_js__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__select_js__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__selectAll_js__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__selection_js__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__style_js__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__styleTween_js__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__text_js__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__textTween_js__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__transition_js__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__tween_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__end_js__ = __webpack_require__(356);






















var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["e" /* selection */])().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = __WEBPACK_IMPORTED_MODULE_0_d3_selection__["e" /* selection */].prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: __WEBPACK_IMPORTED_MODULE_11__select_js__["a" /* default */],
  selectAll: __WEBPACK_IMPORTED_MODULE_12__selectAll_js__["a" /* default */],
  filter: __WEBPACK_IMPORTED_MODULE_7__filter_js__["a" /* default */],
  merge: __WEBPACK_IMPORTED_MODULE_8__merge_js__["a" /* default */],
  selection: __WEBPACK_IMPORTED_MODULE_13__selection_js__["a" /* default */],
  transition: __WEBPACK_IMPORTED_MODULE_18__transition_js__["a" /* default */],
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: __WEBPACK_IMPORTED_MODULE_9__on_js__["a" /* default */],
  attr: __WEBPACK_IMPORTED_MODULE_1__attr_js__["a" /* default */],
  attrTween: __WEBPACK_IMPORTED_MODULE_2__attrTween_js__["a" /* default */],
  style: __WEBPACK_IMPORTED_MODULE_14__style_js__["a" /* default */],
  styleTween: __WEBPACK_IMPORTED_MODULE_15__styleTween_js__["a" /* default */],
  text: __WEBPACK_IMPORTED_MODULE_16__text_js__["a" /* default */],
  textTween: __WEBPACK_IMPORTED_MODULE_17__textTween_js__["a" /* default */],
  remove: __WEBPACK_IMPORTED_MODULE_10__remove_js__["a" /* default */],
  tween: __WEBPACK_IMPORTED_MODULE_19__tween_js__["a" /* default */],
  delay: __WEBPACK_IMPORTED_MODULE_3__delay_js__["a" /* default */],
  duration: __WEBPACK_IMPORTED_MODULE_4__duration_js__["a" /* default */],
  ease: __WEBPACK_IMPORTED_MODULE_5__ease_js__["a" /* default */],
  easeVarying: __WEBPACK_IMPORTED_MODULE_6__easeVarying_js__["a" /* default */],
  end: __WEBPACK_IMPORTED_MODULE_20__end_js__["a" /* default */],
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = noop;
function noop() {}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = linearish;
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__continuous_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__init_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tickFormat_js__ = __webpack_require__(177);





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function (count) {
    var d = domain();
    return Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["n" /* ticks */])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function (count, specifier) {
    var d = domain();
    return Object(__WEBPACK_IMPORTED_MODULE_3__tickFormat_js__["a" /* default */])(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function (count) {
    if (count == null) count = 10;

    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    while (maxIter-- > 0) {
      step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["l" /* tickIncrement */])(start, stop, count);
      if (step === prestep) {
        d[i0] = start;
        d[i1] = stop;
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_1__continuous_js__["b" /* default */])();

  scale.copy = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_1__continuous_js__["a" /* copy */])(scale, linear());
  };

  __WEBPACK_IMPORTED_MODULE_2__init_js__["b" /* initRange */].apply(scale, arguments);

  return linearish(scale);
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__path_js__ = __webpack_require__(374);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__path_js__["a"]; });


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}

var streamObjectType = {
  Feature: function (object, stream) {
    streamGeometry(object.geometry, stream);
  },
  FeatureCollection: function (object, stream) {
    var features = object.features,
        i = -1,
        n = features.length;
    while (++i < n) streamGeometry(features[i].geometry, stream);
  }
};

var streamGeometryType = {
  Sphere: function (object, stream) {
    stream.sphere();
  },
  Point: function (object, stream) {
    object = object.coordinates;
    stream.point(object[0], object[1], object[2]);
  },
  MultiPoint: function (object, stream) {
    var coordinates = object.coordinates,
        i = -1,
        n = coordinates.length;
    while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
  },
  LineString: function (object, stream) {
    streamLine(object.coordinates, stream, 0);
  },
  MultiLineString: function (object, stream) {
    var coordinates = object.coordinates,
        i = -1,
        n = coordinates.length;
    while (++i < n) streamLine(coordinates[i], stream, 0);
  },
  Polygon: function (object, stream) {
    streamPolygon(object.coordinates, stream);
  },
  MultiPolygon: function (object, stream) {
    var coordinates = object.coordinates,
        i = -1,
        n = coordinates.length;
    while (++i < n) streamPolygon(coordinates[i], stream);
  },
  GeometryCollection: function (object, stream) {
    var geometries = object.geometries,
        i = -1,
        n = geometries.length;
    while (++i < n) streamGeometry(geometries[i], stream);
  }
};

function streamLine(coordinates, stream, closed) {
  var i = -1,
      n = coordinates.length - closed,
      coordinate;
  stream.lineStart();
  while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}

function streamPolygon(coordinates, stream) {
  var i = -1,
      n = coordinates.length;
  stream.polygonStart();
  while (++i < n) streamLine(coordinates[i], stream, 1);
  stream.polygonEnd();
}

/* harmony default export */ __webpack_exports__["a"] = (function (object, stream) {
  if (object && streamObjectType.hasOwnProperty(object.type)) {
    streamObjectType[object.type](object, stream);
  } else {
    streamGeometry(object, stream);
  }
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return function constant() {
    return x;
  };
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dispatch_js__ = __webpack_require__(277);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dispatch_js__["a"]; });


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = hue;
/* harmony export (immutable) */ __webpack_exports__["b"] = gamma;
/* harmony export (immutable) */ __webpack_exports__["a"] = nogamma;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant_js__ = __webpack_require__(131);


function linear(a, d) {
  return function (t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function (t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Object(__WEBPACK_IMPORTED_MODULE_0__constant_js__["a" /* default */])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function (a, b) {
    return b - a ? exponential(a, b, y) : Object(__WEBPACK_IMPORTED_MODULE_0__constant_js__["a" /* default */])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : Object(__WEBPACK_IMPORTED_MODULE_0__constant_js__["a" /* default */])(isNaN(a) ? b : a);
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return function () {
    return x;
  };
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = spherical;
/* harmony export (immutable) */ __webpack_exports__["a"] = cartesian;
/* harmony export (immutable) */ __webpack_exports__["d"] = cartesianDot;
/* harmony export (immutable) */ __webpack_exports__["c"] = cartesianCross;
/* harmony export (immutable) */ __webpack_exports__["b"] = cartesianAddInPlace;
/* harmony export (immutable) */ __webpack_exports__["f"] = cartesianScale;
/* harmony export (immutable) */ __webpack_exports__["e"] = cartesianNormalizeInPlace;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);


function spherical(cartesian) {
  return [Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* atan2 */])(cartesian[1], cartesian[0]), Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* asin */])(cartesian[2])];
}

function cartesian(spherical) {
  var lambda = spherical[0],
      phi = spherical[1],
      cosPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* cos */])(phi);
  return [cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* cos */])(lambda), cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(lambda), Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(phi)];
}

function cartesianDot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function cartesianCross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

// TODO return a
function cartesianAddInPlace(a, b) {
  a[0] += b[0], a[1] += b[1], a[2] += b[2];
}

function cartesianScale(vector, k) {
  return [vector[0] * k, vector[1] * k, vector[2] * k];
}

// TODO return d
function cartesianNormalizeInPlace(d) {
  var l = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["v" /* sqrt */])(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = azimuthalRaw;
/* harmony export (immutable) */ __webpack_exports__["a"] = azimuthalInvert;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);


function azimuthalRaw(scale) {
  return function (x, y) {
    var cx = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* cos */])(x),
        cy = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* cos */])(y),
        k = scale(cx * cy);
    if (k === Infinity) return [2, 0];
    return [k * cy * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(x), k * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(y)];
  };
}

function azimuthalInvert(angle) {
  return function (x, y) {
    var z = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["v" /* sqrt */])(x * x + y * y),
        c = angle(z),
        sc = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(c),
        cc = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* cos */])(c);
    return [Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* atan2 */])(x * sc, z * cc), Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* asin */])(z && y * sc / z)];
  };
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      node,
      i = -1,
      n = nodes.length,
      k = parent.value && (x1 - x0) / parent.value;

  while (++i < n) {
    node = nodes[i], node.y0 = y0, node.y1 = y1;
    node.x0 = x0, node.x1 = x0 += node.value * k;
  }
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return tau; });
/* harmony export (immutable) */ __webpack_exports__["b"] = acos;
/* harmony export (immutable) */ __webpack_exports__["c"] = asin;
var abs = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var max = Math.max;
var min = Math.min;
var sin = Math.sin;
var sqrt = Math.sqrt;

var epsilon = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = 2 * pi;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
var slice = Array.prototype.slice;

/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return typeof x === "object" && "length" in x ? x // Array, TypedArray, NodeList, array-like
  : Array.from(x); // Map, Set, iterable, string, or anything else
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (series) {
  var n = series.length,
      o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = count;
function count(values, valueof) {
  let count = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        ++count;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        ++count;
      }
    }
  }
  return count;
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace_js__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__namespaces_js__ = __webpack_require__(57);



function creatorInherit(name) {
  return function () {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === __WEBPACK_IMPORTED_MODULE_1__namespaces_js__["b" /* xhtml */] && document.documentElement.namespaceURI === __WEBPACK_IMPORTED_MODULE_1__namespaces_js__["b" /* xhtml */] ? document.createElement(name) : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function () {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (name) {
  var fullname = Object(__WEBPACK_IMPORTED_MODULE_0__namespace_js__["a" /* default */])(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = childMatcher;
/* harmony default export */ __webpack_exports__["b"] = (function (selector) {
  return function () {
    return this.matches(selector);
  };
});

function childMatcher(selector) {
  return function (node) {
    return node.matches(selector);
  };
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rgb_js__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array_js__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date_js__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__object_js__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__string_js__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constant_js__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__numberArray_js__ = __webpack_require__(64);










/* harmony default export */ __webpack_exports__["a"] = (function (a, b) {
    var t = typeof b,
        c;
    return b == null || t === "boolean" ? Object(__WEBPACK_IMPORTED_MODULE_7__constant_js__["a" /* default */])(b) : (t === "number" ? __WEBPACK_IMPORTED_MODULE_4__number_js__["a" /* default */] : t === "string" ? (c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */])(b)) ? (b = c, __WEBPACK_IMPORTED_MODULE_1__rgb_js__["a" /* default */]) : __WEBPACK_IMPORTED_MODULE_6__string_js__["a" /* default */] : b instanceof __WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */] ? __WEBPACK_IMPORTED_MODULE_1__rgb_js__["a" /* default */] : b instanceof Date ? __WEBPACK_IMPORTED_MODULE_3__date_js__["a" /* default */] : Object(__WEBPACK_IMPORTED_MODULE_8__numberArray_js__["b" /* isNumberArray */])(b) ? __WEBPACK_IMPORTED_MODULE_8__numberArray_js__["a" /* default */] : Array.isArray(b) ? __WEBPACK_IMPORTED_MODULE_2__array_js__["a" /* genericArray */] : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? __WEBPACK_IMPORTED_MODULE_5__object_js__["a" /* default */] : __WEBPACK_IMPORTED_MODULE_4__number_js__["a" /* default */])(a, b);
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (a, b) {
  return a = +a, b = +b, function (t) {
    return a * (1 - t) + b * t;
  };
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer_js__ = __webpack_require__(66);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__timer_js__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__timer_js__["c"]; });
/* unused harmony reexport timerFlush */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timeout_js__ = __webpack_require__(335);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__timeout_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interval_js__ = __webpack_require__(336);
/* unused harmony reexport interval */






/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = tweenValue;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule_js__ = __webpack_require__(8);


function tweenRemove(id, name) {
  var tween0, tween1;
  return function () {
    var schedule = Object(__WEBPACK_IMPORTED_MODULE_0__schedule_js__["h" /* set */])(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error();
  return function () {
    var schedule = Object(__WEBPACK_IMPORTED_MODULE_0__schedule_js__["h" /* set */])(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name: name, value: value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = Object(__WEBPACK_IMPORTED_MODULE_0__schedule_js__["f" /* get */])(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
});

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function () {
    var schedule = Object(__WEBPACK_IMPORTED_MODULE_0__schedule_js__["h" /* set */])(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function (node) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__schedule_js__["f" /* get */])(node, id).value[name];
  };
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal_js__ = __webpack_require__(41);


/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return x = Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal_js__["b" /* formatDecimalParts */])(Math.abs(x)), x ? x[1] : NaN;
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = formatDecimalParts;
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return Math.abs(x = Math.round(x)) >= 1e21 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
});

// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].
function formatDecimalParts(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i,
      coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient, +x.slice(i + 1)];
}

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = rotateRadians;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose_js__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function rotationIdentity(lambda, phi) {
  return [Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(lambda) > __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* pi */] ? lambda + Math.round(-lambda / __WEBPACK_IMPORTED_MODULE_1__math_js__["x" /* tau */]) * __WEBPACK_IMPORTED_MODULE_1__math_js__["x" /* tau */] : lambda, phi];
}

rotationIdentity.invert = rotationIdentity;

function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
  return (deltaLambda %= __WEBPACK_IMPORTED_MODULE_1__math_js__["x" /* tau */]) ? deltaPhi || deltaGamma ? Object(__WEBPACK_IMPORTED_MODULE_0__compose_js__["a" /* default */])(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma)) : rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma) : rotationIdentity;
}

function forwardRotationLambda(deltaLambda) {
  return function (lambda, phi) {
    return lambda += deltaLambda, [lambda > __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* pi */] ? lambda - __WEBPACK_IMPORTED_MODULE_1__math_js__["x" /* tau */] : lambda < -__WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* pi */] ? lambda + __WEBPACK_IMPORTED_MODULE_1__math_js__["x" /* tau */] : lambda, phi];
  };
}

function rotationLambda(deltaLambda) {
  var rotation = forwardRotationLambda(deltaLambda);
  rotation.invert = forwardRotationLambda(-deltaLambda);
  return rotation;
}

function rotationPhiGamma(deltaPhi, deltaGamma) {
  var cosDeltaPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(deltaPhi),
      sinDeltaPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(deltaPhi),
      cosDeltaGamma = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(deltaGamma),
      sinDeltaGamma = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(deltaGamma);

  function rotation(lambda, phi) {
    var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(phi),
        x = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(lambda) * cosPhi,
        y = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(lambda) * cosPhi,
        z = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(phi),
        k = z * cosDeltaPhi + x * sinDeltaPhi;
    return [Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* atan2 */])(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi), Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* asin */])(k * cosDeltaGamma + y * sinDeltaGamma)];
  }

  rotation.invert = function (lambda, phi) {
    var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(phi),
        x = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(lambda) * cosPhi,
        y = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(lambda) * cosPhi,
        z = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(phi),
        k = z * cosDeltaGamma - y * sinDeltaGamma;
    return [Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* atan2 */])(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi), Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* asin */])(k * cosDeltaPhi - x * sinDeltaPhi)];
  };

  return rotation;
}

/* harmony default export */ __webpack_exports__["a"] = (function (rotate) {
  rotate = rotateRadians(rotate[0] * __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* radians */], rotate[1] * __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* radians */], rotate.length > 2 ? rotate[2] * __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* radians */] : 0);

  function forward(coordinates) {
    coordinates = rotate(coordinates[0] * __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* radians */], coordinates[1] * __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* radians */]);
    return coordinates[0] *= __WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* degrees */], coordinates[1] *= __WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* degrees */], coordinates;
  }

  forward.invert = function (coordinates) {
    coordinates = rotate.invert(coordinates[0] * __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* radians */], coordinates[1] * __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* radians */]);
    return coordinates[0] *= __WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* degrees */], coordinates[1] *= __WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* degrees */], coordinates;
  };

  return forward;
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = clipRectangle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buffer_js__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__line_js__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rejoin_js__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_array__ = __webpack_require__(3);






var clipMax = 1e9,
    clipMin = -clipMax;

// TODO Use d3-polygon’s polygonContains here for the ring check?
// TODO Eliminate duplicate buffering in clipBuffer and polygon.push?

function clipRectangle(x0, y0, x1, y1) {

  function visible(x, y) {
    return x0 <= x && x <= x1 && y0 <= y && y <= y1;
  }

  function interpolate(from, to, direction, stream) {
    var a = 0,
        a1 = 0;
    if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) {
      do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0); while ((a = (a + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }

  function corner(p, direction) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* abs */])(p[0] - x0) < __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* epsilon */] ? direction > 0 ? 0 : 3 : Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* abs */])(p[0] - x1) < __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* epsilon */] ? direction > 0 ? 2 : 1 : Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* abs */])(p[1] - y0) < __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* epsilon */] ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
  }

  function compareIntersection(a, b) {
    return comparePoint(a.x, b.x);
  }

  function comparePoint(a, b) {
    var ca = corner(a, 1),
        cb = corner(b, 1);
    return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
  }

  return function (stream) {
    var activeStream = stream,
        bufferStream = Object(__WEBPACK_IMPORTED_MODULE_1__buffer_js__["a" /* default */])(),
        segments,
        polygon,
        ring,
        x__,
        y__,
        v__,
        // first point
    x_,
        y_,
        v_,
        // previous point
    first,
        clean;

    var clipStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: polygonStart,
      polygonEnd: polygonEnd
    };

    function point(x, y) {
      if (visible(x, y)) activeStream.point(x, y);
    }

    function polygonInside() {
      var winding = 0;

      for (var i = 0, n = polygon.length; i < n; ++i) {
        for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
          a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
          if (a1 <= y1) {
            if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding;
          } else {
            if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding;
          }
        }
      }

      return winding;
    }

    // Buffer geometry within a polygon and then clip it en masse.
    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon = [], clean = true;
    }

    function polygonEnd() {
      var startInside = polygonInside(),
          cleanInside = clean && startInside,
          visible = (segments = Object(__WEBPACK_IMPORTED_MODULE_4_d3_array__["g" /* merge */])(segments)).length;
      if (cleanInside || visible) {
        stream.polygonStart();
        if (cleanInside) {
          stream.lineStart();
          interpolate(null, null, 1, stream);
          stream.lineEnd();
        }
        if (visible) {
          Object(__WEBPACK_IMPORTED_MODULE_3__rejoin_js__["a" /* default */])(segments, compareIntersection, startInside, interpolate, stream);
        }
        stream.polygonEnd();
      }
      activeStream = stream, segments = polygon = ring = null;
    }

    function lineStart() {
      clipStream.point = linePoint;
      if (polygon) polygon.push(ring = []);
      first = true;
      v_ = false;
      x_ = y_ = NaN;
    }

    // TODO rather than special-case polygons, simply handle them separately.
    // Ideally, coincident intersection points should be jittered to avoid
    // clipping issues.
    function lineEnd() {
      if (segments) {
        linePoint(x__, y__);
        if (v__ && v_) bufferStream.rejoin();
        segments.push(bufferStream.result());
      }
      clipStream.point = point;
      if (v_) activeStream.lineEnd();
    }

    function linePoint(x, y) {
      var v = visible(x, y);
      if (polygon) ring.push([x, y]);
      if (first) {
        x__ = x, y__ = y, v__ = v;
        first = false;
        if (v) {
          activeStream.lineStart();
          activeStream.point(x, y);
        }
      } else {
        if (v && v_) activeStream.point(x, y);else {
          var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))],
              b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
          if (Object(__WEBPACK_IMPORTED_MODULE_2__line_js__["a" /* default */])(a, b, x0, y0, x1, y1)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a[0], a[1]);
            }
            activeStream.point(b[0], b[1]);
            if (!v) activeStream.lineEnd();
            clean = false;
          } else if (v) {
            activeStream.lineStart();
            activeStream.point(x, y);
            clean = false;
          }
        }
      }
      x_ = x, y_ = y, v_ = v;
    }

    return clipStream;
  };
}

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = transformer;
/* unused harmony default export */ var _unused_webpack_default_export = (function (methods) {
  return {
    stream: transformer(methods)
  };
});

function transformer(methods) {
  return function (stream) {
    var s = new TransformStream();
    for (var key in methods) s[key] = methods[key];
    s.stream = stream;
    return s;
  };
}

function TransformStream() {}

TransformStream.prototype = {
  constructor: TransformStream,
  point: function (x, y) {
    this.stream.point(x, y);
  },
  sphere: function () {
    this.stream.sphere();
  },
  lineStart: function () {
    this.stream.lineStart();
  },
  lineEnd: function () {
    this.stream.lineEnd();
  },
  polygonStart: function () {
    this.stream.polygonStart();
  },
  polygonEnd: function () {
    this.stream.polygonEnd();
  }
};

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      node,
      i = -1,
      n = nodes.length,
      k = parent.value && (y1 - y0) / parent.value;

  while (++i < n) {
    node = nodes[i], node.x0 = x0, node.x1 = x1;
    node.y0 = y0, node.y1 = y0 += node.value * k;
  }
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval_js__ = __webpack_require__(6);
/* unused harmony reexport timeInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__millisecond_js__ = __webpack_require__(180);
/* unused harmony reexport timeMillisecond */
/* unused harmony reexport timeMilliseconds */
/* unused harmony reexport utcMillisecond */
/* unused harmony reexport utcMilliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__second_js__ = __webpack_require__(181);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__second_js__["a"]; });
/* unused harmony reexport timeSeconds */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_2__second_js__["a"]; });
/* unused harmony reexport utcSeconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__minute_js__ = __webpack_require__(182);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__minute_js__["a"]; });
/* unused harmony reexport timeMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hour_js__ = __webpack_require__(183);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__hour_js__["a"]; });
/* unused harmony reexport timeHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__day_js__ = __webpack_require__(184);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__day_js__["a"]; });
/* unused harmony reexport timeDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__week_js__ = __webpack_require__(185);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_6__week_js__["b"]; });
/* unused harmony reexport timeWeeks */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__week_js__["b"]; });
/* unused harmony reexport timeSundays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__week_js__["a"]; });
/* unused harmony reexport timeMondays */
/* unused harmony reexport timeTuesday */
/* unused harmony reexport timeTuesdays */
/* unused harmony reexport timeWednesday */
/* unused harmony reexport timeWednesdays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__week_js__["c"]; });
/* unused harmony reexport timeThursdays */
/* unused harmony reexport timeFriday */
/* unused harmony reexport timeFridays */
/* unused harmony reexport timeSaturday */
/* unused harmony reexport timeSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__month_js__ = __webpack_require__(186);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_7__month_js__["a"]; });
/* unused harmony reexport timeMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__year_js__ = __webpack_require__(187);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_8__year_js__["a"]; });
/* unused harmony reexport timeYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utcMinute_js__ = __webpack_require__(188);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_9__utcMinute_js__["a"]; });
/* unused harmony reexport utcMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utcHour_js__ = __webpack_require__(189);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_10__utcHour_js__["a"]; });
/* unused harmony reexport utcHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utcDay_js__ = __webpack_require__(190);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_11__utcDay_js__["a"]; });
/* unused harmony reexport utcDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utcWeek_js__ = __webpack_require__(191);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_12__utcWeek_js__["b"]; });
/* unused harmony reexport utcWeeks */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_12__utcWeek_js__["b"]; });
/* unused harmony reexport utcSundays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_12__utcWeek_js__["a"]; });
/* unused harmony reexport utcMondays */
/* unused harmony reexport utcTuesday */
/* unused harmony reexport utcTuesdays */
/* unused harmony reexport utcWednesday */
/* unused harmony reexport utcWednesdays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_12__utcWeek_js__["c"]; });
/* unused harmony reexport utcThursdays */
/* unused harmony reexport utcFriday */
/* unused harmony reexport utcFridays */
/* unused harmony reexport utcSaturday */
/* unused harmony reexport utcSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utcMonth_js__ = __webpack_require__(192);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_13__utcMonth_js__["a"]; });
/* unused harmony reexport utcMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utcYear_js__ = __webpack_require__(193);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_14__utcYear_js__["a"]; });
/* unused harmony reexport utcYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ticks_js__ = __webpack_require__(509);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_15__ticks_js__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_15__ticks_js__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_15__ticks_js__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_15__ticks_js__["a"]; });
































/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function (x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);break;
      case 1:
        this._point = 2; // proceed
      default:
        this._context.lineTo(x, y);break;
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function (context) {
  return new Linear(context);
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = point;
/* harmony export (immutable) */ __webpack_exports__["a"] = Basis;
function point(that, x, y) {
  that._context.bezierCurveTo((2 * that._x0 + that._x1) / 3, (2 * that._y0 + that._y1) / 3, (that._x0 + 2 * that._x1) / 3, (that._y0 + 2 * that._y1) / 3, (that._x0 + 4 * that._x1 + x) / 6, (that._y0 + 4 * that._y1 + y) / 6);
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        point(this, this._x1, this._y1); // proceed
      case 2:
        this._context.lineTo(this._x1, this._y1);break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function (x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);break;
      case 1:
        this._point = 2;break;
      case 2:
        this._point = 3;this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default:
        point(this, x, y);break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = (function (context) {
  return new Basis(context);
});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = point;
/* harmony export (immutable) */ __webpack_exports__["a"] = Cardinal;
function point(that, x, y) {
  that._context.bezierCurveTo(that._x1 + that._k * (that._x2 - that._x0), that._y1 + that._k * (that._y2 - that._y0), that._x2 + that._k * (that._x1 - x), that._y2 + that._k * (that._y1 - y), that._x2, that._y2);
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);break;
      case 3:
        point(this, this._x1, this._y1);break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function (x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);break;
      case 1:
        this._point = 2;this._x1 = x, this._y1 = y;break;
      case 2:
        this._point = 3; // proceed
      default:
        point(this, x, y);break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = ((function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function (tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(9);
var normalizeHeaderName = __webpack_require__(218);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(94);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(94);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {/* Ignore */}
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(217)))

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = tickIncrement;
/* harmony export (immutable) */ __webpack_exports__["c"] = tickStep;
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["a"] = (function (start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    let r0 = Math.round(start / step),
        r1 = Math.round(stop / step);
    if (r0 * step < start) ++r0;
    if (r1 * step > stop) --r1;
    ticks = new Array(n = r1 - r0 + 1);
    while (++i < n) ticks[i] = (r0 + i) * step;
  } else {
    step = -step;
    let r0 = Math.round(start * step),
        r1 = Math.round(stop * step);
    if (r0 / step < start) ++r0;
    if (r1 / step > stop) --r1;
    ticks = new Array(n = r1 - r0 + 1);
    while (++i < n) ticks[i] = (r0 + i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;else if (error >= e5) step1 *= 5;else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = quantile;
/* harmony export (immutable) */ __webpack_exports__["b"] = quantileSorted;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__max_js__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__min_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quickselect_js__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__number_js__ = __webpack_require__(101);





function quantile(values, p, valueof) {
  values = Float64Array.from(Object(__WEBPACK_IMPORTED_MODULE_3__number_js__["b" /* numbers */])(values, valueof));
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return Object(__WEBPACK_IMPORTED_MODULE_1__min_js__["a" /* default */])(values);
  if (p >= 1) return Object(__WEBPACK_IMPORTED_MODULE_0__max_js__["a" /* default */])(values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = Object(__WEBPACK_IMPORTED_MODULE_0__max_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__quickselect_js__["a" /* default */])(values, i0).subarray(0, i0 + 1)),
      value1 = Object(__WEBPACK_IMPORTED_MODULE_1__min_js__["a" /* default */])(values.subarray(i0 + 1));
  return value0 + (value1 - value0) * (i - i0);
}

function quantileSorted(values, p, valueof = __WEBPACK_IMPORTED_MODULE_3__number_js__["a" /* default */]) {
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = min;
function min(values, valueof) {
  let min;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null && (min > value || min === undefined && value >= value)) {
        min = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (min > value || min === undefined && value >= value)) {
        min = value;
      }
    }
  }
  return min;
}

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drag_js__ = __webpack_require__(278);
/* unused harmony reexport drag */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nodrag_js__ = __webpack_require__(126);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__nodrag_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__nodrag_js__["b"]; });



/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespaces_js__ = __webpack_require__(57);


/* harmony default export */ __webpack_exports__["a"] = (function (name) {
  var prefix = name += "",
      i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return __WEBPACK_IMPORTED_MODULE_0__namespaces_js__["a" /* default */].hasOwnProperty(prefix) ? { space: __WEBPACK_IMPORTED_MODULE_0__namespaces_js__["a" /* default */][prefix], local: name } : name; // eslint-disable-line no-prototype-builtins
});

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return xhtml; });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ __webpack_exports__["a"] = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function none() {}

/* harmony default export */ __webpack_exports__["a"] = (function (selector) {
  return selector == null ? none : function () {
    return this.querySelector(selector);
  };
});

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return typeof x === "object" && "length" in x ? x // Array, TypedArray, NodeList, array-like
  : Array.from(x); // Map, Set, iterable, string, or anything else
});

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (node) {
    return node.ownerDocument && node.ownerDocument.defaultView || // node is a Node
    node.document && node // node is a Window
    || node.defaultView; // node is a Document
});

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Color;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return brighter; });
/* harmony export (immutable) */ __webpack_exports__["e"] = color;
/* harmony export (immutable) */ __webpack_exports__["h"] = rgbConvert;
/* harmony export (immutable) */ __webpack_exports__["g"] = rgb;
/* harmony export (immutable) */ __webpack_exports__["b"] = Rgb;
/* unused harmony export hslConvert */
/* harmony export (immutable) */ __webpack_exports__["f"] = hsl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define_js__ = __webpack_require__(62);


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

Object(__WEBPACK_IMPORTED_MODULE_0__define_js__["a" /* default */])(Color, color, {
  copy: function (channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable: function () {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
  : l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
  : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
  : l === 4 ? rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
  : null // invalid hex
  ) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
  : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
  : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
  : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
  : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
  : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
  : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
  : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define_js__["a" /* default */])(Rgb, rgb, Object(__WEBPACK_IMPORTED_MODULE_0__define_js__["b" /* extend */])(Color, {
  brighter: function (k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function (k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function () {
    return this;
  },
  displayable: function () {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity;a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
}

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;else if (l <= 0 || l >= 1) h = s = NaN;else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;else if (g === max) h = (b - r) / s + 2;else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define_js__["a" /* default */])(Hsl, hsl, Object(__WEBPACK_IMPORTED_MODULE_0__define_js__["b" /* extend */])(Color, {
  brighter: function (k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function (k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function () {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
  },
  displayable: function () {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl: function () {
    var a = this.opacity;a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = extend;
/* harmony default export */ __webpack_exports__["a"] = (function (constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = basis;
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1,
      t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}

/* harmony default export */ __webpack_exports__["b"] = (function (values) {
  var n = values.length - 1;
  return function (t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = isNumberArray;
/* harmony default export */ __webpack_exports__["a"] = (function (a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function (t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
});

function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index_js__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transition_index_js__ = __webpack_require__(17);
/* unused harmony reexport transition */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__active_js__ = __webpack_require__(367);
/* unused harmony reexport active */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interrupt_js__ = __webpack_require__(136);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__interrupt_js__["a"]; });





/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = now;
/* harmony export (immutable) */ __webpack_exports__["a"] = Timer;
/* harmony export (immutable) */ __webpack_exports__["c"] = timer;
/* unused harmony export timerFlush */
var frame = 0,
    // is an animation frame pending?
timeout = 0,
    // is a timeout pending?
interval = 0,
    // are any timers active?
pokeDelay = 1000,
    // how frequently we check for clock skew
taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (f) {
  setTimeout(f, 17);
};

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call = this._time = this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function (callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function () {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead,
      e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(),
      delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0,
      t1 = taskHead,
      t2,
      time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var EOL = {},
    EOF = {},
    QUOTE = 34,
    NEWLINE = 10,
    RETURN = 13;

function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function (name, i) {
    return JSON.stringify(name) + ": d[" + i + "] || \"\"";
  }).join(",") + "}");
}

function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function (row, i) {
    return f(object(row), i, columns);
  };
}

// Compute unique columns in order of discovery.
function inferColumns(rows) {
  var columnSet = Object.create(null),
      columns = [];

  rows.forEach(function (row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });

  return columns;
}

function pad(value, width) {
  var s = value + "",
      length = s.length;
  return length < width ? new Array(width - length + 1).join(0) + s : s;
}

function formatYear(year) {
  return year < 0 ? "-" + pad(-year, 6) : year > 9999 ? "+" + pad(year, 6) : pad(year, 4);
}

function formatDate(date) {
  var hours = date.getUTCHours(),
      minutes = date.getUTCMinutes(),
      seconds = date.getUTCSeconds(),
      milliseconds = date.getUTCMilliseconds();
  return isNaN(date) ? "Invalid Date" : formatYear(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1, 2) + "-" + pad(date.getUTCDate(), 2) + (milliseconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "." + pad(milliseconds, 3) + "Z" : seconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "Z" : minutes || hours ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + "Z" : "");
}

/* harmony default export */ __webpack_exports__["a"] = (function (delimiter) {
  var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
      DELIMITER = delimiter.charCodeAt(0);

  function parse(text, f) {
    var convert,
        columns,
        rows = parseRows(text, function (row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }

  function parseRows(text, f) {
    var rows = [],
        // output rows
    N = text.length,
        I = 0,
        // current character index
    n = 0,
        // current line number
    t,
        // current token
    eof = N <= 0,
        // current token followed by EOF?
    eol = false; // current token followed by EOL?

    // Strip the trailing newline.
    if (text.charCodeAt(N - 1) === NEWLINE) --N;
    if (text.charCodeAt(N - 1) === RETURN) --N;

    function token() {
      if (eof) return EOF;
      if (eol) return eol = false, EOL;

      // Unescape quotes.
      var i,
          j = I,
          c;
      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE);
        if ((i = I) >= N) eof = true;else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true;else if (c === RETURN) {
          eol = true;if (text.charCodeAt(I) === NEWLINE) ++I;
        }
        return text.slice(j + 1, i - 1).replace(/""/g, "\"");
      }

      // Find next delimiter or newline.
      while (I < N) {
        if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true;else if (c === RETURN) {
          eol = true;if (text.charCodeAt(I) === NEWLINE) ++I;
        } else if (c !== DELIMITER) continue;
        return text.slice(j, i);
      }

      // Return last token before EOF.
      return eof = true, text.slice(j, N);
    }

    while ((t = token()) !== EOF) {
      var row = [];
      while (t !== EOL && t !== EOF) row.push(t), t = token();
      if (f && (row = f(row, n++)) == null) continue;
      rows.push(row);
    }

    return rows;
  }

  function preformatBody(rows, columns) {
    return rows.map(function (row) {
      return columns.map(function (column) {
        return formatValue(row[column]);
      }).join(delimiter);
    });
  }

  function format(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\n");
  }

  function formatBody(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return preformatBody(rows, columns).join("\n");
  }

  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }

  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }

  function formatValue(value) {
    return value == null ? "" : value instanceof Date ? formatDate(value) : reFormat.test(value += "") ? "\"" + value.replace(/"/g, "\"\"") + "\"" : value;
  }

  return {
    parse: parse,
    parseRows: parseRows,
    format: format,
    formatBody: formatBody,
    formatRows: formatRows,
    formatRow: formatRow,
    formatValue: formatValue
  };
});

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function responseText(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.text();
}

/* harmony default export */ __webpack_exports__["a"] = (function (input, init) {
  return fetch(input, init).then(responseText);
});

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quadtree_js__ = __webpack_require__(400);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__quadtree_js__["a"]; });


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (node, x0, y0, x1, y1) {
  this.node = node;
  this.x0 = x0;
  this.y0 = y0;
  this.x1 = x1;
  this.y1 = y1;
});

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (random) {
  return (random() - 0.5) * 1e-6;
});

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultLocale_js__ = __webpack_require__(419);
/* unused harmony reexport formatDefaultLocale */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__defaultLocale_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__defaultLocale_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__locale_js__ = __webpack_require__(149);
/* unused harmony reexport formatLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formatSpecifier_js__ = __webpack_require__(150);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__formatSpecifier_js__["a"]; });
/* unused harmony reexport FormatSpecifier */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__precisionFixed_js__ = __webpack_require__(426);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__precisionFixed_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__precisionPrefix_js__ = __webpack_require__(427);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__precisionPrefix_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__precisionRound_js__ = __webpack_require__(428);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__precisionRound_js__["a"]; });







/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (x => x);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export conicEqualAreaRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic_js__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cylindricalEqualArea_js__ = __webpack_require__(445);




function conicEqualAreaRaw(y0, y1) {
  var sy0 = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(y0),
      n = (sy0 + Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(y1)) / 2;

  // Are the parallels symmetrical around the Equator?
  if (Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* abs */])(n) < __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* epsilon */]) return Object(__WEBPACK_IMPORTED_MODULE_2__cylindricalEqualArea_js__["a" /* cylindricalEqualAreaRaw */])(y0);

  var c = 1 + sy0 * (2 * n - sy0),
      r0 = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["v" /* sqrt */])(c) / n;

  function project(x, y) {
    var r = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["v" /* sqrt */])(c - 2 * n * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(y)) / n;
    return [r * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(x *= n), r0 - r * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* cos */])(x)];
  }

  project.invert = function (x, y) {
    var r0y = r0 - y,
        l = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* atan2 */])(x, Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* abs */])(r0y)) * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["t" /* sign */])(r0y);
    if (r0y * n < 0) l -= __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* pi */] * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["t" /* sign */])(x) * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["t" /* sign */])(r0y);
    return [l / n, Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* asin */])((c - (x * x + r0y * r0y) * n * n) / (2 * n))];
  };

  return project;
}

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_1__conic_js__["a" /* conicProjection */])(conicEqualAreaRaw).scale(155.424).center([0, 33.6442]);
});

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = conicProjection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(13);



function conicProjection(projectAt) {
  var phi0 = 0,
      phi1 = __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* pi */] / 3,
      m = Object(__WEBPACK_IMPORTED_MODULE_1__index_js__["b" /* projectionMutator */])(projectAt),
      p = m(phi0, phi1);

  p.parallels = function (_) {
    return arguments.length ? m(phi0 = _[0] * __WEBPACK_IMPORTED_MODULE_0__math_js__["s" /* radians */], phi1 = _[1] * __WEBPACK_IMPORTED_MODULE_0__math_js__["s" /* radians */]) : [phi0 * __WEBPACK_IMPORTED_MODULE_0__math_js__["h" /* degrees */], phi1 * __WEBPACK_IMPORTED_MODULE_0__math_js__["h" /* degrees */]];
  };

  return p;
}

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fitExtent;
/* harmony export (immutable) */ __webpack_exports__["c"] = fitSize;
/* harmony export (immutable) */ __webpack_exports__["d"] = fitWidth;
/* harmony export (immutable) */ __webpack_exports__["b"] = fitHeight;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stream_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path_bounds_js__ = __webpack_require__(164);



function fit(projection, fitBounds, object) {
  var clip = projection.clipExtent && projection.clipExtent();
  projection.scale(150).translate([0, 0]);
  if (clip != null) projection.clipExtent(null);
  Object(__WEBPACK_IMPORTED_MODULE_0__stream_js__["a" /* default */])(object, projection.stream(__WEBPACK_IMPORTED_MODULE_1__path_bounds_js__["a" /* default */]));
  fitBounds(__WEBPACK_IMPORTED_MODULE_1__path_bounds_js__["a" /* default */].result());
  if (clip != null) projection.clipExtent(clip);
  return projection;
}

function fitExtent(projection, extent, object) {
  return fit(projection, function (b) {
    var w = extent[1][0] - extent[0][0],
        h = extent[1][1] - extent[0][1],
        k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
        x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
        y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
    projection.scale(150 * k).translate([x, y]);
  }, object);
}

function fitSize(projection, size, object) {
  return fitExtent(projection, [[0, 0], size], object);
}

function fitWidth(projection, width, object) {
  return fit(projection, function (b) {
    var w = +width,
        k = w / (b[1][0] - b[0][0]),
        x = (w - k * (b[1][0] + b[0][0])) / 2,
        y = -k * b[0][1];
    projection.scale(150 * k).translate([x, y]);
  }, object);
}

function fitHeight(projection, height, object) {
  return fit(projection, function (b) {
    var h = +height,
        k = h / (b[1][1] - b[0][1]),
        x = -k * b[0][0],
        y = (h - k * (b[1][1] + b[0][1])) / 2;
    projection.scale(150 * k).translate([x, y]);
  }, object);
}

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = mercatorRaw;
/* harmony export (immutable) */ __webpack_exports__["a"] = mercatorProjection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rotation_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_js__ = __webpack_require__(13);




function mercatorRaw(lambda, phi) {
  return [lambda, Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["o" /* log */])(Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["w" /* tan */])((__WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* halfPi */] + phi) / 2))];
}

mercatorRaw.invert = function (x, y) {
  return [x, 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* atan */])(Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["k" /* exp */])(y)) - __WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* halfPi */]];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return mercatorProjection(mercatorRaw).scale(961 / __WEBPACK_IMPORTED_MODULE_0__math_js__["x" /* tau */]);
});

function mercatorProjection(project) {
  var m = Object(__WEBPACK_IMPORTED_MODULE_2__index_js__["a" /* default */])(project),
      center = m.center,
      scale = m.scale,
      translate = m.translate,
      clipExtent = m.clipExtent,
      x0 = null,
      y0,
      x1,
      y1; // clip extent

  m.scale = function (_) {
    return arguments.length ? (scale(_), reclip()) : scale();
  };

  m.translate = function (_) {
    return arguments.length ? (translate(_), reclip()) : translate();
  };

  m.center = function (_) {
    return arguments.length ? (center(_), reclip()) : center();
  };

  m.clipExtent = function (_) {
    return arguments.length ? (_ == null ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reclip()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  function reclip() {
    var k = __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* pi */] * scale(),
        t = m(Object(__WEBPACK_IMPORTED_MODULE_1__rotation_js__["a" /* default */])(m.rotate()).invert([0, 0]));
    return clipExtent(x0 == null ? [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]] : project === mercatorRaw ? [[Math.max(t[0] - k, x0), y0], [Math.min(t[0] + k, x1), y1]] : [[x0, Math.max(t[1] - k, y0)], [x1, Math.min(t[1] + k, y1)]]);
  }

  return reclip();
}

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony export (immutable) */ __webpack_exports__["b"] = computeHeight;
/* harmony export (immutable) */ __webpack_exports__["a"] = Node;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__count_js__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__each_js__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eachBefore_js__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eachAfter_js__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__find_js__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sum_js__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sort_js__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__path_js__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ancestors_js__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__descendants_js__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__leaves_js__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__links_js__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__iterator_js__ = __webpack_require__(472);














function hierarchy(data, children) {
  if (data instanceof Map) {
    data = [undefined, data];
    if (children === undefined) children = mapChildren;
  } else if (children === undefined) {
    children = objectChildren;
  }

  var root = new Node(data),
      node,
      nodes = [root],
      child,
      childs,
      i,
      n;

  while (node = nodes.pop()) {
    if ((childs = children(node.data)) && (n = (childs = Array.from(childs)).length)) {
      node.children = childs;
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = childs[i] = new Node(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }

  return root.eachBefore(computeHeight);
}

function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}

function objectChildren(d) {
  return d.children;
}

function mapChildren(d) {
  return Array.isArray(d) ? d[1] : null;
}

function copyData(node) {
  if (node.data.value !== undefined) node.value = node.data.value;
  node.data = node.data.data;
}

function computeHeight(node) {
  var height = 0;
  do node.height = height; while ((node = node.parent) && node.height < ++height);
}

function Node(data) {
  this.data = data;
  this.depth = this.height = 0;
  this.parent = null;
}

Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: __WEBPACK_IMPORTED_MODULE_0__count_js__["a" /* default */],
  each: __WEBPACK_IMPORTED_MODULE_1__each_js__["a" /* default */],
  eachAfter: __WEBPACK_IMPORTED_MODULE_3__eachAfter_js__["a" /* default */],
  eachBefore: __WEBPACK_IMPORTED_MODULE_2__eachBefore_js__["a" /* default */],
  find: __WEBPACK_IMPORTED_MODULE_4__find_js__["a" /* default */],
  sum: __WEBPACK_IMPORTED_MODULE_5__sum_js__["a" /* default */],
  sort: __WEBPACK_IMPORTED_MODULE_6__sort_js__["a" /* default */],
  path: __WEBPACK_IMPORTED_MODULE_7__path_js__["a" /* default */],
  ancestors: __WEBPACK_IMPORTED_MODULE_8__ancestors_js__["a" /* default */],
  descendants: __WEBPACK_IMPORTED_MODULE_9__descendants_js__["a" /* default */],
  leaves: __WEBPACK_IMPORTED_MODULE_10__leaves_js__["a" /* default */],
  links: __WEBPACK_IMPORTED_MODULE_11__links_js__["a" /* default */],
  copy: node_copy,
  [Symbol.iterator]: __WEBPACK_IMPORTED_MODULE_12__iterator_js__["a" /* default */]
};

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = optional;
/* harmony export (immutable) */ __webpack_exports__["b"] = required;
function optional(f) {
  return f == null ? null : required(f);
}

function required(f) {
  if (typeof f !== "function") throw new Error();
  return f;
}

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return phi; });
/* harmony export (immutable) */ __webpack_exports__["c"] = squarifyRatio;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dice_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slice_js__ = __webpack_require__(45);



var phi = (1 + Math.sqrt(5)) / 2;

function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
  var rows = [],
      nodes = parent.children,
      row,
      nodeValue,
      i0 = 0,
      i1 = 0,
      n = nodes.length,
      dx,
      dy,
      value = parent.value,
      sumValue,
      minValue,
      maxValue,
      newRatio,
      minRatio,
      alpha,
      beta;

  while (i0 < n) {
    dx = x1 - x0, dy = y1 - y0;

    // Find the next non-empty node.
    do sumValue = nodes[i1++].value; while (!sumValue && i1 < n);
    minValue = maxValue = sumValue;
    alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
    beta = sumValue * sumValue * alpha;
    minRatio = Math.max(maxValue / beta, beta / minValue);

    // Keep adding nodes while the aspect ratio maintains or improves.
    for (; i1 < n; ++i1) {
      sumValue += nodeValue = nodes[i1].value;
      if (nodeValue < minValue) minValue = nodeValue;
      if (nodeValue > maxValue) maxValue = nodeValue;
      beta = sumValue * sumValue * alpha;
      newRatio = Math.max(maxValue / beta, beta / minValue);
      if (newRatio > minRatio) {
        sumValue -= nodeValue;break;
      }
      minRatio = newRatio;
    }

    // Position and record the row orientation.
    rows.push(row = { value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1) });
    if (row.dice) Object(__WEBPACK_IMPORTED_MODULE_0__dice_js__["a" /* default */])(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);else Object(__WEBPACK_IMPORTED_MODULE_1__slice_js__["a" /* default */])(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
    value -= sumValue, i0 = i1;
  }

  return rows;
}

/* harmony default export */ __webpack_exports__["a"] = ((function custom(ratio) {

  function squarify(parent, x0, y0, x1, y1) {
    squarifyRatio(ratio, parent, x0, y0, x1, y1);
  }

  squarify.ratio = function (x) {
    return custom((x = +x) > 1 ? x : 1);
  };

  return squarify;
})(phi));

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource_js__ = __webpack_require__(4);


/* harmony default export */ __webpack_exports__["a"] = ((function sourceRandomNormal(source) {
  function randomNormal(mu, sigma) {
    var x, r;
    mu = mu == null ? 0 : +mu;
    sigma = sigma == null ? 1 : +sigma;
    return function () {
      var y;

      // If available, use the second previously-generated uniform random.
      if (x != null) y = x, x = null;

      // Otherwise, generate a new x and y.
      else do {
          x = source() * 2 - 1;
          y = source() * 2 - 1;
          r = x * x + y * y;
        } while (!r || r > 1);

      return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
    };
  }

  randomNormal.source = sourceRandomNormal;

  return randomNormal;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource_js__["a" /* default */]));

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__normal_js__ = __webpack_require__(81);



/* harmony default export */ __webpack_exports__["a"] = ((function sourceRandomGamma(source) {
  var randomNormal = __WEBPACK_IMPORTED_MODULE_1__normal_js__["a" /* default */].source(source)();

  function randomGamma(k, theta) {
    if ((k = +k) < 0) throw new RangeError("invalid k");
    // degenerate distribution if k === 0
    if (k === 0) return () => 0;
    theta = theta == null ? 1 : +theta;
    // exponential distribution if k === 1
    if (k === 1) return () => -Math.log1p(-source()) * theta;

    var d = (k < 1 ? k + 1 : k) - 1 / 3,
        c = 1 / (3 * Math.sqrt(d)),
        multiplier = k < 1 ? () => Math.pow(source(), 1 / k) : () => 1;
    return function () {
      do {
        do {
          var x = randomNormal(),
              v = 1 + c * x;
        } while (v <= 0);
        v *= v * v;
        var u = 1 - source();
      } while (u >= 1 - 0.0331 * x * x * x * x && Math.log(u) >= 0.5 * x * x + d * (1 - v + Math.log(v)));
      return d * v * multiplier() * theta;
    };
  }

  randomGamma.source = sourceRandomGamma;

  return randomGamma;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource_js__["a" /* default */]));

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = number;
function number(x) {
  return +x;
}

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loggish;
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nice_js__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__continuous_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__init_js__ = __webpack_require__(5);






function transformLog(x) {
  return Math.log(x);
}

function transformExp(x) {
  return Math.exp(x);
}

function transformLogn(x) {
  return -Math.log(-x);
}

function transformExpn(x) {
  return -Math.exp(-x);
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10 : base === Math.E ? Math.exp : function (x) {
    return Math.pow(base, x);
  };
}

function logp(base) {
  return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), function (x) {
    return Math.log(x) / base;
  });
}

function reflect(f) {
  return function (x) {
    return -f(-x);
  };
}

function loggish(transform) {
  var scale = transform(transformLog, transformExp),
      domain = scale.domain,
      base = 10,
      logs,
      pows;

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog, transformExp);
    }
    return scale;
  }

  scale.base = function (_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function (_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function (count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.floor(i), j = Math.ceil(j);
      if (u > 0) for (; i <= j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i <= j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
      if (z.length * 2 < n) z = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["n" /* ticks */])(u, v, n);
    } else {
      z = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["n" /* ticks */])(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function (count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["a" /* format */])(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function (d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function () {
    return domain(Object(__WEBPACK_IMPORTED_MODULE_2__nice_js__["a" /* default */])(domain(), {
      floor: function (x) {
        return pows(Math.floor(logs(x)));
      },
      ceil: function (x) {
        return pows(Math.ceil(logs(x)));
      }
    }));
  };

  return scale;
}

function log() {
  var scale = loggish(Object(__WEBPACK_IMPORTED_MODULE_3__continuous_js__["d" /* transformer */])()).domain([1, 10]);

  scale.copy = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_3__continuous_js__["a" /* copy */])(scale, log()).base(scale.base());
  };

  __WEBPACK_IMPORTED_MODULE_4__init_js__["b" /* initRange */].apply(scale, arguments);

  return scale;
}

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = symlogish;
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__continuous_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__init_js__ = __webpack_require__(5);




function transformSymlog(c) {
  return function (x) {
    return Math.sign(x) * Math.log1p(Math.abs(x / c));
  };
}

function transformSymexp(c) {
  return function (x) {
    return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
  };
}

function symlogish(transform) {
  var c = 1,
      scale = transform(transformSymlog(c), transformSymexp(c));

  scale.constant = function (_) {
    return arguments.length ? transform(transformSymlog(c = +_), transformSymexp(c)) : c;
  };

  return Object(__WEBPACK_IMPORTED_MODULE_0__linear_js__["a" /* linearish */])(scale);
}

function symlog() {
  var scale = symlogish(Object(__WEBPACK_IMPORTED_MODULE_1__continuous_js__["d" /* transformer */])());

  scale.copy = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_1__continuous_js__["a" /* copy */])(scale, symlog()).constant(scale.constant());
  };

  return __WEBPACK_IMPORTED_MODULE_2__init_js__["b" /* initRange */].apply(scale, arguments);
}

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = powish;
/* unused harmony export default */
/* unused harmony export sqrt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__continuous_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__init_js__ = __webpack_require__(5);




function transformPow(exponent) {
  return function (x) {
    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
  };
}

function transformSqrt(x) {
  return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}

function transformSquare(x) {
  return x < 0 ? -x * x : x * x;
}

function powish(transform) {
  var scale = transform(__WEBPACK_IMPORTED_MODULE_1__continuous_js__["c" /* identity */], __WEBPACK_IMPORTED_MODULE_1__continuous_js__["c" /* identity */]),
      exponent = 1;

  function rescale() {
    return exponent === 1 ? transform(__WEBPACK_IMPORTED_MODULE_1__continuous_js__["c" /* identity */], __WEBPACK_IMPORTED_MODULE_1__continuous_js__["c" /* identity */]) : exponent === 0.5 ? transform(transformSqrt, transformSquare) : transform(transformPow(exponent), transformPow(1 / exponent));
  }

  scale.exponent = function (_) {
    return arguments.length ? (exponent = +_, rescale()) : exponent;
  };

  return Object(__WEBPACK_IMPORTED_MODULE_0__linear_js__["a" /* linearish */])(scale);
}

function pow() {
  var scale = powish(Object(__WEBPACK_IMPORTED_MODULE_1__continuous_js__["d" /* transformer */])());

  scale.copy = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_1__continuous_js__["a" /* copy */])(scale, pow()).exponent(scale.exponent());
  };

  __WEBPACK_IMPORTED_MODULE_2__init_js__["b" /* initRange */].apply(scale, arguments);

  return scale;
}

function sqrt() {
  return pow.apply(null, arguments).exponent(0.5);
}

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultLocale_js__ = __webpack_require__(88);
/* unused harmony reexport timeFormatDefaultLocale */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__defaultLocale_js__["a"]; });
/* unused harmony reexport timeParse */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__defaultLocale_js__["b"]; });
/* unused harmony reexport utcParse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__locale_js__ = __webpack_require__(194);
/* unused harmony reexport timeFormatLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isoFormat_js__ = __webpack_require__(195);
/* unused harmony reexport isoFormat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isoParse_js__ = __webpack_require__(510);
/* unused harmony reexport isoParse */





/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timeFormat; });
/* unused harmony export timeParse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return utcFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return utcParse; });
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale_js__ = __webpack_require__(194);


var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = Object(__WEBPACK_IMPORTED_MODULE_0__locale_js__["a" /* default */])(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__curve_linear_js__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__point_js__ = __webpack_require__(90);






/* harmony default export */ __webpack_exports__["a"] = (function (x, y) {
  var defined = Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(true),
      context = null,
      curve = __WEBPACK_IMPORTED_MODULE_3__curve_linear_js__["a" /* default */],
      output = null;

  x = typeof x === "function" ? x : x === undefined ? __WEBPACK_IMPORTED_MODULE_4__point_js__["a" /* x */] : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(x);
  y = typeof y === "function" ? y : y === undefined ? __WEBPACK_IMPORTED_MODULE_4__point_js__["b" /* y */] : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(y);

  function line(data) {
    var i,
        n = (data = Object(__WEBPACK_IMPORTED_MODULE_1__array_js__["a" /* default */])(data)).length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();else output.lineEnd();
      }
      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function (_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(+_), line) : x;
  };

  line.y = function (_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(+_), line) : y;
  };

  line.defined = function (_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(!!_), line) : defined;
  };

  line.curve = function (_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function (_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
});

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = x;
/* harmony export (immutable) */ __webpack_exports__["b"] = y;
function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = point;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cardinal_js__ = __webpack_require__(50);



function point(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > __WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* epsilon */]) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > __WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* epsilon */]) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);break;
      case 3:
        this.point(this._x2, this._y2);break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function (x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0:
        this._point = 1;this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);break;
      case 1:
        this._point = 2;break;
      case 2:
        this._point = 3; // proceed
      default:
        point(this, x, y);break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new __WEBPACK_IMPORTED_MODULE_1__cardinal_js__["a" /* Cardinal */](context, 0);
  }

  catmullRom.alpha = function (alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = sum;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none_js__ = __webpack_require__(32);


/* harmony default export */ __webpack_exports__["a"] = (function (series) {
  var sums = series.map(sum);
  return Object(__WEBPACK_IMPORTED_MODULE_0__none_js__["a" /* default */])(series).sort(function (a, b) {
    return sums[a] - sums[b];
  });
});

function sum(series) {
  var s = 0,
      i = -1,
      n = series.length,
      v;
  while (++i < n) if (v = +series[i][1]) s += v;
  return s;
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9);
var settle = __webpack_require__(219);
var buildURL = __webpack_require__(221);
var parseHeaders = __webpack_require__(222);
var isURLSameOrigin = __webpack_require__(223);
var createError = __webpack_require__(95);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(224);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(220);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const includeHTML = () => {
  var z, i, elmnt, file, filename, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      const filename = file + ".html";

      return fetch(filename).then(response => response.body).then(rb => {
        const reader = rb.getReader();

        return new ReadableStream({
          start(controller) {
            // The following function handles each data chunk
            function push() {
              // "done" is a Boolean and value a "Uint8Array"
              reader.read().then(({ done, value }) => {
                // If there is no more data to read
                if (done) {
                  controller.close();
                  return;
                }
                // Get the data and send it to the browser via the controller
                controller.enqueue(value);
                // Check chunks by logging to the console
                push();
              });
            }

            push();
          }
        });
      }).then(stream => {
        // Respond with our stream
        return new Response(stream, {
          headers: { "Content-Type": "text/html" }
        }).text();
      }).then(result => {
        // Do things with result
        elmnt.innerHTML = result;
      }).catch(() => {
        elmnt.innerHTML = "Page not found.";
      });
    }
  }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = includeHTML;


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisector_js__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number_js__ = __webpack_require__(101);




const ascendingBisect = Object(__WEBPACK_IMPORTED_MODULE_1__bisector_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__ascending_js__["a" /* default */]);
const bisectRight = ascendingBisect.right;
/* unused harmony export bisectRight */

const bisectLeft = ascendingBisect.left;
/* unused harmony export bisectLeft */

const bisectCenter = Object(__WEBPACK_IMPORTED_MODULE_1__bisector_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__number_js__["a" /* default */]).center;
/* unused harmony export bisectCenter */

/* harmony default export */ __webpack_exports__["a"] = (bisectRight);

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending_js__ = __webpack_require__(14);


/* harmony default export */ __webpack_exports__["a"] = (function (f) {
  let delta = f;
  let compare = f;

  if (f.length === 1) {
    delta = (d, x) => f(d) - x;
    compare = ascendingComparator(f);
  }

  function left(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (compare(a[mid], x) < 0) lo = mid + 1;else hi = mid;
    }
    return lo;
  }

  function right(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (compare(a[mid], x) > 0) hi = mid;else lo = mid + 1;
    }
    return lo;
  }

  function center(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    const i = left(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }

  return { left, center, right };
});

function ascendingComparator(f) {
  return (d, x) => Object(__WEBPACK_IMPORTED_MODULE_0__ascending_js__["a" /* default */])(f(d), x);
}

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = numbers;
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return x === null ? NaN : +x;
});

function* numbers(values, valueof) {
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = deviation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variance_js__ = __webpack_require__(103);


function deviation(values, valueof) {
  const v = Object(__WEBPACK_IMPORTED_MODULE_0__variance_js__["a" /* default */])(values, valueof);
  return v ? Math.sqrt(v) : v;
}

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = variance;
function variance(values, valueof) {
  let count = 0;
  let delta;
  let mean = 0;
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        delta = value - mean;
        mean += delta / ++count;
        sum += delta * (value - mean);
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        delta = value - mean;
        mean += delta / ++count;
        sum += delta * (value - mean);
      }
    }
  }
  if (count > 1) return sum / (count - 1);
}

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (values, valueof) {
  let min;
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  }
  return [min, max];
});

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = group;
/* unused harmony export groups */
/* harmony export (immutable) */ __webpack_exports__["b"] = rollup;
/* unused harmony export rollups */
/* unused harmony export index */
/* unused harmony export indexes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_internmap__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity_js__ = __webpack_require__(107);



function group(values, ...keys) {
  return nest(values, __WEBPACK_IMPORTED_MODULE_1__identity_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__identity_js__["a" /* default */], keys);
}

function groups(values, ...keys) {
  return nest(values, Array.from, __WEBPACK_IMPORTED_MODULE_1__identity_js__["a" /* default */], keys);
}

function rollup(values, reduce, ...keys) {
  return nest(values, __WEBPACK_IMPORTED_MODULE_1__identity_js__["a" /* default */], reduce, keys);
}

function rollups(values, reduce, ...keys) {
  return nest(values, Array.from, reduce, keys);
}

function index(values, ...keys) {
  return nest(values, __WEBPACK_IMPORTED_MODULE_1__identity_js__["a" /* default */], unique, keys);
}

function indexes(values, ...keys) {
  return nest(values, Array.from, unique, keys);
}

function unique(values) {
  if (values.length !== 1) throw new Error("duplicate key");
  return values[0];
}

function nest(values, map, reduce, keys) {
  return function regroup(values, i) {
    if (i >= keys.length) return reduce(values);
    const groups = new __WEBPACK_IMPORTED_MODULE_0_internmap__["a" /* InternMap */]();
    const keyof = keys[i++];
    let index = -1;
    for (const value of values) {
      const key = keyof(value, ++index, values);
      const group = groups.get(key);
      if (group) group.push(value);else groups.set(key, [value]);
    }
    for (const [key, values] of groups) {
      groups.set(key, regroup(values, i));
    }
    return map(groups);
  }(values, 0);
}

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class InternMap extends Map {
  constructor(entries, key = keyof) {
    super();
    Object.defineProperties(this, { _intern: { value: new Map() }, _key: { value: key } });
    if (entries != null) for (const [key, value] of entries) this.set(key, value);
  }
  get(key) {
    return super.get(intern_get(this, key));
  }
  has(key) {
    return super.has(intern_get(this, key));
  }
  set(key, value) {
    return super.set(intern_set(this, key), value);
  }
  delete(key) {
    return super.delete(intern_delete(this, key));
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InternMap;


class InternSet extends Set {
  constructor(values, key = keyof) {
    super();
    Object.defineProperties(this, { _intern: { value: new Map() }, _key: { value: key } });
    if (values != null) for (const value of values) this.add(value);
  }
  has(value) {
    return super.has(intern_get(this, value));
  }
  add(value) {
    return super.add(intern_set(this, value));
  }
  delete(value) {
    return super.delete(intern_delete(this, value));
  }
}
/* unused harmony export InternSet */


function intern_get({ _intern, _key }, value) {
  const key = _key(value);
  return _intern.has(key) ? _intern.get(key) : value;
}

function intern_set({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key)) return _intern.get(key);
  _intern.set(key, value);
  return value;
}

function intern_delete({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key)) {
    value = _intern.get(value);
    _intern.delete(key);
  }
  return value;
}

function keyof(value) {
  return value !== null && typeof value === "object" ? value.valueOf() : value;
}

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return x;
});

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sort;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__permute_js__ = __webpack_require__(109);



function sort(values, ...F) {
  if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
  values = Array.from(values);
  let [f = __WEBPACK_IMPORTED_MODULE_0__ascending_js__["a" /* default */]] = F;
  if (f.length === 1 || F.length > 1) {
    const index = Uint32Array.from(values, (d, i) => i);
    if (F.length > 1) {
      F = F.map(f => values.map(f));
      index.sort((i, j) => {
        for (const f of F) {
          const c = Object(__WEBPACK_IMPORTED_MODULE_0__ascending_js__["a" /* default */])(f[i], f[j]);
          if (c) return c;
        }
      });
    } else {
      f = values.map(f);
      index.sort((i, j) => Object(__WEBPACK_IMPORTED_MODULE_0__ascending_js__["a" /* default */])(f[i], f[j]));
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__permute_js__["a" /* default */])(values, index);
  }
  return values.sort(f);
}

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (source, keys) {
  return Array.from(keys, key => source[key]);
});

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = nice;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ticks_js__ = __webpack_require__(52);


function nice(start, stop, count) {
  let prestep;
  while (true) {
    const step = Object(__WEBPACK_IMPORTED_MODULE_0__ticks_js__["b" /* tickIncrement */])(start, stop, count);
    if (step === prestep || step === 0 || !isFinite(step)) {
      return [start, stop];
    } else if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
    }
    prestep = step;
  }
}

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__count_js__ = __webpack_require__(33);


/* harmony default export */ __webpack_exports__["a"] = (function (values) {
  return Math.ceil(Math.log(Object(__WEBPACK_IMPORTED_MODULE_0__count_js__["a" /* default */])(values)) / Math.LN2) + 1;
});

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = max;
function max(values, valueof) {
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null && (max < value || max === undefined && value >= value)) {
        max = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (max < value || max === undefined && value >= value)) {
        max = value;
      }
    }
  }
  return max;
}

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = quickselect;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending_js__ = __webpack_require__(14);


// Based on https://github.com/mourner/quickselect
// ISC license, Copyright 2018 Vladimir Agafonkin.
function quickselect(array, k, left = 0, right = array.length - 1, compare = __WEBPACK_IMPORTED_MODULE_0__ascending_js__["a" /* default */]) {
  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const m = k - left + 1;
      const z = Math.log(n);
      const s = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
      const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
      quickselect(array, k, newLeft, newRight, compare);
    }

    const t = array[k];
    let i = left;
    let j = right;

    swap(array, left, k);
    if (compare(array[right], t) > 0) swap(array, left, right);

    while (i < j) {
      swap(array, i, j), ++i, --j;
      while (compare(array[i], t) < 0) ++i;
      while (compare(array[j], t) > 0) --j;
    }

    if (compare(array[left], t) === 0) swap(array, left, j);else ++j, swap(array, j, right);

    if (j <= k) left = j + 1;
    if (k <= j) right = j - 1;
  }
  return array;
}

function swap(array, i, j) {
  const t = array[i];
  array[i] = array[j];
  array[j] = t;
}

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = maxIndex;
function maxIndex(values, valueof) {
  let max;
  let maxIndex = -1;
  let index = -1;
  if (valueof === undefined) {
    for (const value of values) {
      ++index;
      if (value != null && (max < value || max === undefined && value >= value)) {
        max = value, maxIndex = index;
      }
    }
  } else {
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (max < value || max === undefined && value >= value)) {
        max = value, maxIndex = index;
      }
    }
  }
  return maxIndex;
}

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = minIndex;
function minIndex(values, valueof) {
  let min;
  let minIndex = -1;
  let index = -1;
  if (valueof === undefined) {
    for (const value of values) {
      ++index;
      if (value != null && (min > value || min === undefined && value >= value)) {
        min = value, minIndex = index;
      }
    }
  } else {
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (min > value || min === undefined && value >= value)) {
        min = value, minIndex = index;
      }
    }
  }
  return minIndex;
}

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = leastIndex;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__minIndex_js__ = __webpack_require__(115);



function leastIndex(values, compare = __WEBPACK_IMPORTED_MODULE_0__ascending_js__["a" /* default */]) {
  if (compare.length === 1) return Object(__WEBPACK_IMPORTED_MODULE_1__minIndex_js__["a" /* default */])(values, compare);
  let minValue;
  let min = -1;
  let index = -1;
  for (const value of values) {
    ++index;
    if (min < 0 ? compare(value, value) === 0 : compare(value, minValue) < 0) {
      minValue = value;
      min = index;
    }
  }
  return min;
}

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__min_js__ = __webpack_require__(54);


/* harmony default export */ __webpack_exports__["a"] = (function (matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = Object(__WEBPACK_IMPORTED_MODULE_0__min_js__["a" /* default */])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = superset;
function superset(values, other) {
  const iterator = values[Symbol.iterator](),
        set = new Set();
  for (const o of other) {
    if (set.has(o)) continue;
    let value, done;
    while (({ value, done } = iterator.next())) {
      if (done) return false;
      set.add(value);
      if (Object.is(o, value)) break;
    }
  }
  return true;
}

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index_js__ = __webpack_require__(11);


/* harmony default export */ __webpack_exports__["a"] = (function (selector) {
    return typeof selector === "string" ? new __WEBPACK_IMPORTED_MODULE_0__selection_index_js__["a" /* Selection */]([[document.querySelector(selector)]], [document.documentElement]) : new __WEBPACK_IMPORTED_MODULE_0__selection_index_js__["a" /* Selection */]([[selector]], __WEBPACK_IMPORTED_MODULE_0__selection_index_js__["c" /* root */]);
});

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function empty() {
  return [];
}

/* harmony default export */ __webpack_exports__["a"] = (function (selector) {
  return selector == null ? empty : function () {
    return this.querySelectorAll(selector);
  };
});

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = EnterNode;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sparse_js__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(11);



/* harmony default export */ __webpack_exports__["b"] = (function () {
  return new __WEBPACK_IMPORTED_MODULE_1__index_js__["a" /* Selection */](this._enter || this._groups.map(__WEBPACK_IMPORTED_MODULE_0__sparse_js__["a" /* default */]), this._parents);
});

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function (child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function (child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function (selector) {
    return this._parent.querySelector(selector);
  },
  querySelectorAll: function (selector) {
    return this._parent.querySelectorAll(selector);
  }
};

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (update) {
  return new Array(update.length);
});

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = styleValue;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window_js__ = __webpack_require__(60);


function styleRemove(name) {
  return function () {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function () {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
});

function styleValue(node, name) {
  return node.style.getPropertyValue(name) || Object(__WEBPACK_IMPORTED_MODULE_0__window_js__["a" /* default */])(node).getComputedStyle(node, null).getPropertyValue(name);
}

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent_js__ = __webpack_require__(125);


/* harmony default export */ __webpack_exports__["a"] = (function (event, node) {
  event = Object(__WEBPACK_IMPORTED_MODULE_0__sourceEvent_js__["a" /* default */])(event);
  if (node === undefined) node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
});

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent) event = sourceEvent;
  return event;
});

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = yesdrag;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noevent_js__ = __webpack_require__(127);



/* harmony default export */ __webpack_exports__["a"] = (function (view) {
  var root = view.document.documentElement,
      selection = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["d" /* select */])(view).on("dragstart.drag", __WEBPACK_IMPORTED_MODULE_1__noevent_js__["a" /* default */], true);
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", __WEBPACK_IMPORTED_MODULE_1__noevent_js__["a" /* default */], true);
  } else {
    root.__noselect = root.style.MozUserSelect;
    root.style.MozUserSelect = "none";
  }
});

function yesdrag(view, noclick) {
  var root = view.document.documentElement,
      selection = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["d" /* select */])(view).on("dragstart.drag", null);
  if (noclick) {
    selection.on("click.drag", __WEBPACK_IMPORTED_MODULE_1__noevent_js__["a" /* default */], true);
    setTimeout(function () {
      selection.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", null);
  } else {
    root.style.MozUserSelect = root.__noselect;
    delete root.__noselect;
  }
}

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = nopropagation;
function nopropagation(event) {
  event.stopImmediatePropagation();
}

/* harmony default export */ __webpack_exports__["a"] = (function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();
});

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const radians = Math.PI / 180;
/* harmony export (immutable) */ __webpack_exports__["b"] = radians;

const degrees = 180 / Math.PI;
/* harmony export (immutable) */ __webpack_exports__["a"] = degrees;


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rgbBasis; });
/* unused harmony export rgbBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basis_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basisClosed_js__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color_js__ = __webpack_require__(24);





/* harmony default export */ __webpack_exports__["a"] = ((function rgbGamma(y) {
  var color = Object(__WEBPACK_IMPORTED_MODULE_3__color_js__["b" /* gamma */])(y);

  function rgb(start, end) {
    var r = color((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(start)).r, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_3__color_js__["a" /* default */])(start.opacity, end.opacity);
    return function (t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function (colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i,
        color;
    for (i = 0; i < n; ++i) {
      color = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function (t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(__WEBPACK_IMPORTED_MODULE_1__basis_js__["b" /* default */]);
var rgbBasisClosed = rgbSpline(__WEBPACK_IMPORTED_MODULE_2__basisClosed_js__["a" /* default */]);

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis_js__ = __webpack_require__(63);


/* harmony default export */ __webpack_exports__["a"] = (function (values) {
  var n = values.length;
  return function (t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return Object(__WEBPACK_IMPORTED_MODULE_0__basis_js__["a" /* basis */])((t - i / n) * n, v0, v1, v2, v3);
  };
});

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (x => () => x);

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = genericArray;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__numberArray_js__ = __webpack_require__(64);



/* unused harmony default export */ var _unused_webpack_default_export = (function (a, b) {
  return (Object(__WEBPACK_IMPORTED_MODULE_1__numberArray_js__["b" /* isNumberArray */])(b) ? __WEBPACK_IMPORTED_MODULE_1__numberArray_js__["a" /* default */] : genericArray)(a, b);
});

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = Object(__WEBPACK_IMPORTED_MODULE_0__value_js__["a" /* default */])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function (t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (a, b) {
  var d = new Date();
  return a = +a, b = +b, function (t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
});

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value_js__ = __webpack_require__(36);


/* harmony default export */ __webpack_exports__["a"] = (function (a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = Object(__WEBPACK_IMPORTED_MODULE_0__value_js__["a" /* default */])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function (t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number_js__ = __webpack_require__(37);


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function () {
    return b;
  };
}

function one(b) {
  return function (t) {
    return b(t) + "";
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0,
      // scan index for next number in b
  am,
      // current match in a
  bm,
      // current match in b
  bs,
      // string preceding current number in b, if any
  i = -1,
      // index in s
  s = [],
      // string constants and placeholders
  q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else {
      // interpolate non-matching numbers
      s[++i] = null;
      q.push({ i: i, x: Object(__WEBPACK_IMPORTED_MODULE_0__number_js__["a" /* default */])(am, bm) });
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function (t) {
    for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
    return s.join("");
  });
});

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transition_schedule_js__ = __webpack_require__(8);


/* harmony default export */ __webpack_exports__["a"] = (function (node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) {
      empty = false;continue;
    }
    active = schedule.state > __WEBPACK_IMPORTED_MODULE_0__transition_schedule_js__["d" /* STARTING */] && schedule.state < __WEBPACK_IMPORTED_MODULE_0__transition_schedule_js__["b" /* ENDING */];
    schedule.state = __WEBPACK_IMPORTED_MODULE_0__transition_schedule_js__["a" /* ENDED */];
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
});

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(10);



/* harmony default export */ __webpack_exports__["a"] = (function (a, b) {
    var c;
    return (typeof b === "number" ? __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["c" /* interpolateNumber */] : b instanceof __WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */] ? __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["d" /* interpolateRgb */] : (c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */])(b)) ? (b = c, __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["d" /* interpolateRgb */]) : __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["g" /* interpolateString */])(a, b);
});

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear_js__ = __webpack_require__(357);
/* unused harmony reexport easeLinear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quad_js__ = __webpack_require__(358);
/* unused harmony reexport easeQuad */
/* unused harmony reexport easeQuadIn */
/* unused harmony reexport easeQuadOut */
/* unused harmony reexport easeQuadInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cubic_js__ = __webpack_require__(359);
/* unused harmony reexport easeCubic */
/* unused harmony reexport easeCubicIn */
/* unused harmony reexport easeCubicOut */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__cubic_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__poly_js__ = __webpack_require__(360);
/* unused harmony reexport easePoly */
/* unused harmony reexport easePolyIn */
/* unused harmony reexport easePolyOut */
/* unused harmony reexport easePolyInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sin_js__ = __webpack_require__(361);
/* unused harmony reexport easeSin */
/* unused harmony reexport easeSinIn */
/* unused harmony reexport easeSinOut */
/* unused harmony reexport easeSinInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exp_js__ = __webpack_require__(362);
/* unused harmony reexport easeExp */
/* unused harmony reexport easeExpIn */
/* unused harmony reexport easeExpOut */
/* unused harmony reexport easeExpInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__circle_js__ = __webpack_require__(363);
/* unused harmony reexport easeCircle */
/* unused harmony reexport easeCircleIn */
/* unused harmony reexport easeCircleOut */
/* unused harmony reexport easeCircleInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bounce_js__ = __webpack_require__(364);
/* unused harmony reexport easeBounce */
/* unused harmony reexport easeBounceIn */
/* unused harmony reexport easeBounceOut */
/* unused harmony reexport easeBounceInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__back_js__ = __webpack_require__(365);
/* unused harmony reexport easeBack */
/* unused harmony reexport easeBackIn */
/* unused harmony reexport easeBackOut */
/* unused harmony reexport easeBackInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__elastic_js__ = __webpack_require__(366);
/* unused harmony reexport easeElastic */
/* unused harmony reexport easeElasticIn */
/* unused harmony reexport easeElasticOut */
/* unused harmony reexport easeElasticInOut */




















/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = tpmt;
// tpmt is two power minus ten times t scaled to [0,1]
function tpmt(x) {
  return (Math.pow(2, -10 * x) - 0.0009765625) * 1.0009775171065494;
}

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return sin; });
/* unused harmony export pi */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return epsilon; });
var abs = Math.abs;
var cos = Math.cos;
var sin = Math.sin;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = pi * 2;
var max = Math.max;
var epsilon = 1e-12;

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_js__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ascending_js__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__area_js__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constant_js__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contains_js__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__noop_js__ = __webpack_require__(381);








var cases = [[], [[[1.0, 1.5], [0.5, 1.0]]], [[[1.5, 1.0], [1.0, 1.5]]], [[[1.5, 1.0], [0.5, 1.0]]], [[[1.0, 0.5], [1.5, 1.0]]], [[[1.0, 1.5], [0.5, 1.0]], [[1.0, 0.5], [1.5, 1.0]]], [[[1.0, 0.5], [1.0, 1.5]]], [[[1.0, 0.5], [0.5, 1.0]]], [[[0.5, 1.0], [1.0, 0.5]]], [[[1.0, 1.5], [1.0, 0.5]]], [[[0.5, 1.0], [1.0, 0.5]], [[1.5, 1.0], [1.0, 1.5]]], [[[1.5, 1.0], [1.0, 0.5]]], [[[0.5, 1.0], [1.5, 1.0]]], [[[1.0, 1.5], [1.5, 1.0]]], [[[0.5, 1.0], [1.0, 1.5]]], []];

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var dx = 1,
      dy = 1,
      threshold = __WEBPACK_IMPORTED_MODULE_0_d3_array__["k" /* thresholdSturges */],
      smooth = smoothLinear;

  function contours(values) {
    var tz = threshold(values);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      var domain = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["e" /* extent */])(values),
          start = domain[0],
          stop = domain[1];
      tz = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["m" /* tickStep */])(start, stop, tz);
      tz = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["j" /* range */])(Math.floor(start / tz) * tz, Math.floor(stop / tz) * tz, tz);
    } else {
      tz = tz.slice().sort(__WEBPACK_IMPORTED_MODULE_2__ascending_js__["a" /* default */]);
    }

    return tz.map(function (value) {
      return contour(values, value);
    });
  }

  // Accumulate, smooth contour rings, assign holes to exterior rings.
  // Based on https://github.com/mbostock/shapefile/blob/v0.6.2/shp/polygon.js
  function contour(values, value) {
    var polygons = [],
        holes = [];

    isorings(values, value, function (ring) {
      smooth(ring, values, value);
      if (Object(__WEBPACK_IMPORTED_MODULE_3__area_js__["a" /* default */])(ring) > 0) polygons.push([ring]);else holes.push(ring);
    });

    holes.forEach(function (hole) {
      for (var i = 0, n = polygons.length, polygon; i < n; ++i) {
        if (Object(__WEBPACK_IMPORTED_MODULE_5__contains_js__["a" /* default */])((polygon = polygons[i])[0], hole) !== -1) {
          polygon.push(hole);
          return;
        }
      }
    });

    return {
      type: "MultiPolygon",
      value: value,
      coordinates: polygons
    };
  }

  // Marching squares with isolines stitched into rings.
  // Based on https://github.com/topojson/topojson-client/blob/v3.0.0/src/stitch.js
  function isorings(values, value, callback) {
    var fragmentByStart = new Array(),
        fragmentByEnd = new Array(),
        x,
        y,
        t0,
        t1,
        t2,
        t3;

    // Special case for the first row (y = -1, t2 = t3 = 0).
    x = y = -1;
    t1 = values[0] >= value;
    cases[t1 << 1].forEach(stitch);
    while (++x < dx - 1) {
      t0 = t1, t1 = values[x + 1] >= value;
      cases[t0 | t1 << 1].forEach(stitch);
    }
    cases[t1 << 0].forEach(stitch);

    // General case for the intermediate rows.
    while (++y < dy - 1) {
      x = -1;
      t1 = values[y * dx + dx] >= value;
      t2 = values[y * dx] >= value;
      cases[t1 << 1 | t2 << 2].forEach(stitch);
      while (++x < dx - 1) {
        t0 = t1, t1 = values[y * dx + dx + x + 1] >= value;
        t3 = t2, t2 = values[y * dx + x + 1] >= value;
        cases[t0 | t1 << 1 | t2 << 2 | t3 << 3].forEach(stitch);
      }
      cases[t1 | t2 << 3].forEach(stitch);
    }

    // Special case for the last row (y = dy - 1, t0 = t1 = 0).
    x = -1;
    t2 = values[y * dx] >= value;
    cases[t2 << 2].forEach(stitch);
    while (++x < dx - 1) {
      t3 = t2, t2 = values[y * dx + x + 1] >= value;
      cases[t2 << 2 | t3 << 3].forEach(stitch);
    }
    cases[t2 << 3].forEach(stitch);

    function stitch(line) {
      var start = [line[0][0] + x, line[0][1] + y],
          end = [line[1][0] + x, line[1][1] + y],
          startIndex = index(start),
          endIndex = index(end),
          f,
          g;
      if (f = fragmentByEnd[startIndex]) {
        if (g = fragmentByStart[endIndex]) {
          delete fragmentByEnd[f.end];
          delete fragmentByStart[g.start];
          if (f === g) {
            f.ring.push(end);
            callback(f.ring);
          } else {
            fragmentByStart[f.start] = fragmentByEnd[g.end] = { start: f.start, end: g.end, ring: f.ring.concat(g.ring) };
          }
        } else {
          delete fragmentByEnd[f.end];
          f.ring.push(end);
          fragmentByEnd[f.end = endIndex] = f;
        }
      } else if (f = fragmentByStart[endIndex]) {
        if (g = fragmentByEnd[startIndex]) {
          delete fragmentByStart[f.start];
          delete fragmentByEnd[g.end];
          if (f === g) {
            f.ring.push(end);
            callback(f.ring);
          } else {
            fragmentByStart[g.start] = fragmentByEnd[f.end] = { start: g.start, end: f.end, ring: g.ring.concat(f.ring) };
          }
        } else {
          delete fragmentByStart[f.start];
          f.ring.unshift(start);
          fragmentByStart[f.start = startIndex] = f;
        }
      } else {
        fragmentByStart[startIndex] = fragmentByEnd[endIndex] = { start: startIndex, end: endIndex, ring: [start, end] };
      }
    }
  }

  function index(point) {
    return point[0] * 2 + point[1] * (dx + 1) * 4;
  }

  function smoothLinear(ring, values, value) {
    ring.forEach(function (point) {
      var x = point[0],
          y = point[1],
          xt = x | 0,
          yt = y | 0,
          v0,
          v1 = values[yt * dx + xt];
      if (x > 0 && x < dx && xt === x) {
        v0 = values[yt * dx + xt - 1];
        point[0] = x + (value - v0) / (v1 - v0) - 0.5;
      }
      if (y > 0 && y < dy && yt === y) {
        v0 = values[(yt - 1) * dx + xt];
        point[1] = y + (value - v0) / (v1 - v0) - 0.5;
      }
    });
  }

  contours.contour = contour;

  contours.size = function (_) {
    if (!arguments.length) return [dx, dy];
    var _0 = Math.floor(_[0]),
        _1 = Math.floor(_[1]);
    if (!(_0 >= 0 && _1 >= 0)) throw new Error("invalid size");
    return dx = _0, dy = _1, contours;
  };

  contours.thresholds = function (_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(__WEBPACK_IMPORTED_MODULE_4__constant_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__array_js__["a" /* slice */].call(_)) : Object(__WEBPACK_IMPORTED_MODULE_4__constant_js__["a" /* default */])(_), contours) : threshold;
  };

  contours.smooth = function (_) {
    return arguments.length ? (smooth = _ ? smoothLinear : __WEBPACK_IMPORTED_MODULE_6__noop_js__["a" /* default */], contours) : smooth === smoothLinear;
  };

  return contours;
});

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slice; });
var array = Array.prototype;

var slice = array.slice;

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (x => () => x);

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const epsilon = 1e-6;

class Path {
  constructor() {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null; // end of current subpath
    this._ = "";
  }
  moveTo(x, y) {
    this._ += `M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  }
  lineTo(x, y) {
    this._ += `L${this._x1 = +x},${this._y1 = +y}`;
  }
  arc(x, y, r) {
    x = +x, y = +y, r = +r;
    const x0 = x + r;
    const y0 = y;
    if (r < 0) throw new Error("negative radius");
    if (this._x1 === null) this._ += `M${x0},${y0}`;else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) this._ += "L" + x0 + "," + y0;
    if (!r) return;
    this._ += `A${r},${r},0,1,1,${x - r},${y}A${r},${r},0,1,1,${this._x1 = x0},${this._y1 = y0}`;
  }
  rect(x, y, w, h) {
    this._ += `M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${+w}v${+h}h${-w}Z`;
  }
  value() {
    return this._ || null;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Path;


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Polygon {
  constructor() {
    this._ = [];
  }
  moveTo(x, y) {
    this._.push([x, y]);
  }
  closePath() {
    this._.push(this._[0].slice());
  }
  lineTo(x, y) {
    this._.push([x, y]);
  }
  value() {
    return this._.length ? this._ : null;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Polygon;


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__path_js__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__polygon_js__ = __webpack_require__(145);



class Voronoi {
  constructor(delaunay, [xmin, ymin, xmax, ymax] = [0, 0, 960, 500]) {
    if (!((xmax = +xmax) >= (xmin = +xmin)) || !((ymax = +ymax) >= (ymin = +ymin))) throw new Error("invalid bounds");
    this.delaunay = delaunay;
    this._circumcenters = new Float64Array(delaunay.points.length * 2);
    this.vectors = new Float64Array(delaunay.points.length * 2);
    this.xmax = xmax, this.xmin = xmin;
    this.ymax = ymax, this.ymin = ymin;
    this._init();
  }
  update() {
    this.delaunay.update();
    this._init();
    return this;
  }
  _init() {
    const { delaunay: { points, hull, triangles }, vectors } = this;

    // Compute circumcenters.
    const circumcenters = this.circumcenters = this._circumcenters.subarray(0, triangles.length / 3 * 2);
    for (let i = 0, j = 0, n = triangles.length, x, y; i < n; i += 3, j += 2) {
      const t1 = triangles[i] * 2;
      const t2 = triangles[i + 1] * 2;
      const t3 = triangles[i + 2] * 2;
      const x1 = points[t1];
      const y1 = points[t1 + 1];
      const x2 = points[t2];
      const y2 = points[t2 + 1];
      const x3 = points[t3];
      const y3 = points[t3 + 1];

      const dx = x2 - x1;
      const dy = y2 - y1;
      const ex = x3 - x1;
      const ey = y3 - y1;
      const bl = dx * dx + dy * dy;
      const cl = ex * ex + ey * ey;
      const ab = (dx * ey - dy * ex) * 2;

      if (!ab) {
        // degenerate case (collinear diagram)
        x = (x1 + x3) / 2 - 1e8 * ey;
        y = (y1 + y3) / 2 + 1e8 * ex;
      } else if (Math.abs(ab) < 1e-8) {
        // almost equal points (degenerate triangle)
        x = (x1 + x3) / 2;
        y = (y1 + y3) / 2;
      } else {
        const d = 1 / ab;
        x = x1 + (ey * bl - dy * cl) * d;
        y = y1 + (dx * cl - ex * bl) * d;
      }
      circumcenters[j] = x;
      circumcenters[j + 1] = y;
    }

    // Compute exterior cell rays.
    let h = hull[hull.length - 1];
    let p0,
        p1 = h * 4;
    let x0,
        x1 = points[2 * h];
    let y0,
        y1 = points[2 * h + 1];
    vectors.fill(0);
    for (let i = 0; i < hull.length; ++i) {
      h = hull[i];
      p0 = p1, x0 = x1, y0 = y1;
      p1 = h * 4, x1 = points[2 * h], y1 = points[2 * h + 1];
      vectors[p0 + 2] = vectors[p1] = y0 - y1;
      vectors[p0 + 3] = vectors[p1 + 1] = x1 - x0;
    }
  }
  render(context) {
    const buffer = context == null ? context = new __WEBPACK_IMPORTED_MODULE_0__path_js__["a" /* default */]() : undefined;
    const { delaunay: { halfedges, inedges, hull }, circumcenters, vectors } = this;
    if (hull.length <= 1) return null;
    for (let i = 0, n = halfedges.length; i < n; ++i) {
      const j = halfedges[i];
      if (j < i) continue;
      const ti = Math.floor(i / 3) * 2;
      const tj = Math.floor(j / 3) * 2;
      const xi = circumcenters[ti];
      const yi = circumcenters[ti + 1];
      const xj = circumcenters[tj];
      const yj = circumcenters[tj + 1];
      this._renderSegment(xi, yi, xj, yj, context);
    }
    let h0,
        h1 = hull[hull.length - 1];
    for (let i = 0; i < hull.length; ++i) {
      h0 = h1, h1 = hull[i];
      const t = Math.floor(inedges[h1] / 3) * 2;
      const x = circumcenters[t];
      const y = circumcenters[t + 1];
      const v = h0 * 4;
      const p = this._project(x, y, vectors[v + 2], vectors[v + 3]);
      if (p) this._renderSegment(x, y, p[0], p[1], context);
    }
    return buffer && buffer.value();
  }
  renderBounds(context) {
    const buffer = context == null ? context = new __WEBPACK_IMPORTED_MODULE_0__path_js__["a" /* default */]() : undefined;
    context.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin);
    return buffer && buffer.value();
  }
  renderCell(i, context) {
    const buffer = context == null ? context = new __WEBPACK_IMPORTED_MODULE_0__path_js__["a" /* default */]() : undefined;
    const points = this._clip(i);
    if (points === null || !points.length) return;
    context.moveTo(points[0], points[1]);
    let n = points.length;
    while (points[0] === points[n - 2] && points[1] === points[n - 1] && n > 1) n -= 2;
    for (let i = 2; i < n; i += 2) {
      if (points[i] !== points[i - 2] || points[i + 1] !== points[i - 1]) context.lineTo(points[i], points[i + 1]);
    }
    context.closePath();
    return buffer && buffer.value();
  }
  *cellPolygons() {
    const { delaunay: { points } } = this;
    for (let i = 0, n = points.length / 2; i < n; ++i) {
      const cell = this.cellPolygon(i);
      if (cell) cell.index = i, yield cell;
    }
  }
  cellPolygon(i) {
    const polygon = new __WEBPACK_IMPORTED_MODULE_1__polygon_js__["a" /* default */]();
    this.renderCell(i, polygon);
    return polygon.value();
  }
  _renderSegment(x0, y0, x1, y1, context) {
    let S;
    const c0 = this._regioncode(x0, y0);
    const c1 = this._regioncode(x1, y1);
    if (c0 === 0 && c1 === 0) {
      context.moveTo(x0, y0);
      context.lineTo(x1, y1);
    } else if (S = this._clipSegment(x0, y0, x1, y1, c0, c1)) {
      context.moveTo(S[0], S[1]);
      context.lineTo(S[2], S[3]);
    }
  }
  contains(i, x, y) {
    if ((x = +x, x !== x) || (y = +y, y !== y)) return false;
    return this.delaunay._step(i, x, y) === i;
  }
  *neighbors(i) {
    const ci = this._clip(i);
    if (ci) for (const j of this.delaunay.neighbors(i)) {
      const cj = this._clip(j);
      // find the common edge
      if (cj) loop: for (let ai = 0, li = ci.length; ai < li; ai += 2) {
        for (let aj = 0, lj = cj.length; aj < lj; aj += 2) {
          if (ci[ai] == cj[aj] && ci[ai + 1] == cj[aj + 1] && ci[(ai + 2) % li] == cj[(aj + lj - 2) % lj] && ci[(ai + 3) % li] == cj[(aj + lj - 1) % lj]) {
            yield j;
            break loop;
          }
        }
      }
    }
  }
  _cell(i) {
    const { circumcenters, delaunay: { inedges, halfedges, triangles } } = this;
    const e0 = inedges[i];
    if (e0 === -1) return null; // coincident point
    const points = [];
    let e = e0;
    do {
      const t = Math.floor(e / 3);
      points.push(circumcenters[t * 2], circumcenters[t * 2 + 1]);
      e = e % 3 === 2 ? e - 2 : e + 1;
      if (triangles[e] !== i) break; // bad triangulation
      e = halfedges[e];
    } while (e !== e0 && e !== -1);
    return points;
  }
  _clip(i) {
    // degenerate case (1 valid point: return the box)
    if (i === 0 && this.delaunay.hull.length === 1) {
      return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
    }
    const points = this._cell(i);
    if (points === null) return null;
    const { vectors: V } = this;
    const v = i * 4;
    return V[v] || V[v + 1] ? this._clipInfinite(i, points, V[v], V[v + 1], V[v + 2], V[v + 3]) : this._clipFinite(i, points);
  }
  _clipFinite(i, points) {
    const n = points.length;
    let P = null;
    let x0,
        y0,
        x1 = points[n - 2],
        y1 = points[n - 1];
    let c0,
        c1 = this._regioncode(x1, y1);
    let e0, e1;
    for (let j = 0; j < n; j += 2) {
      x0 = x1, y0 = y1, x1 = points[j], y1 = points[j + 1];
      c0 = c1, c1 = this._regioncode(x1, y1);
      if (c0 === 0 && c1 === 0) {
        e0 = e1, e1 = 0;
        if (P) P.push(x1, y1);else P = [x1, y1];
      } else {
        let S, sx0, sy0, sx1, sy1;
        if (c0 === 0) {
          if ((S = this._clipSegment(x0, y0, x1, y1, c0, c1)) === null) continue;
          [sx0, sy0, sx1, sy1] = S;
        } else {
          if ((S = this._clipSegment(x1, y1, x0, y0, c1, c0)) === null) continue;
          [sx1, sy1, sx0, sy0] = S;
          e0 = e1, e1 = this._edgecode(sx0, sy0);
          if (e0 && e1) this._edge(i, e0, e1, P, P.length);
          if (P) P.push(sx0, sy0);else P = [sx0, sy0];
        }
        e0 = e1, e1 = this._edgecode(sx1, sy1);
        if (e0 && e1) this._edge(i, e0, e1, P, P.length);
        if (P) P.push(sx1, sy1);else P = [sx1, sy1];
      }
    }
    if (P) {
      e0 = e1, e1 = this._edgecode(P[0], P[1]);
      if (e0 && e1) this._edge(i, e0, e1, P, P.length);
    } else if (this.contains(i, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
      return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
    }
    return P;
  }
  _clipSegment(x0, y0, x1, y1, c0, c1) {
    while (true) {
      if (c0 === 0 && c1 === 0) return [x0, y0, x1, y1];
      if (c0 & c1) return null;
      let x,
          y,
          c = c0 || c1;
      if (c & 0b1000) x = x0 + (x1 - x0) * (this.ymax - y0) / (y1 - y0), y = this.ymax;else if (c & 0b0100) x = x0 + (x1 - x0) * (this.ymin - y0) / (y1 - y0), y = this.ymin;else if (c & 0b0010) y = y0 + (y1 - y0) * (this.xmax - x0) / (x1 - x0), x = this.xmax;else y = y0 + (y1 - y0) * (this.xmin - x0) / (x1 - x0), x = this.xmin;
      if (c0) x0 = x, y0 = y, c0 = this._regioncode(x0, y0);else x1 = x, y1 = y, c1 = this._regioncode(x1, y1);
    }
  }
  _clipInfinite(i, points, vx0, vy0, vxn, vyn) {
    let P = Array.from(points),
        p;
    if (p = this._project(P[0], P[1], vx0, vy0)) P.unshift(p[0], p[1]);
    if (p = this._project(P[P.length - 2], P[P.length - 1], vxn, vyn)) P.push(p[0], p[1]);
    if (P = this._clipFinite(i, P)) {
      for (let j = 0, n = P.length, c0, c1 = this._edgecode(P[n - 2], P[n - 1]); j < n; j += 2) {
        c0 = c1, c1 = this._edgecode(P[j], P[j + 1]);
        if (c0 && c1) j = this._edge(i, c0, c1, P, j), n = P.length;
      }
    } else if (this.contains(i, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
      P = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax];
    }
    return P;
  }
  _edge(i, e0, e1, P, j) {
    while (e0 !== e1) {
      let x, y;
      switch (e0) {
        case 0b0101:
          e0 = 0b0100;continue; // top-left
        case 0b0100:
          e0 = 0b0110, x = this.xmax, y = this.ymin;break; // top
        case 0b0110:
          e0 = 0b0010;continue; // top-right
        case 0b0010:
          e0 = 0b1010, x = this.xmax, y = this.ymax;break; // right
        case 0b1010:
          e0 = 0b1000;continue; // bottom-right
        case 0b1000:
          e0 = 0b1001, x = this.xmin, y = this.ymax;break; // bottom
        case 0b1001:
          e0 = 0b0001;continue; // bottom-left
        case 0b0001:
          e0 = 0b0101, x = this.xmin, y = this.ymin;break; // left
      }
      if ((P[j] !== x || P[j + 1] !== y) && this.contains(i, x, y)) {
        P.splice(j, 0, x, y), j += 2;
      }
    }
    if (P.length > 4) {
      for (let i = 0; i < P.length; i += 2) {
        const j = (i + 2) % P.length,
              k = (i + 4) % P.length;
        if (P[i] === P[j] && P[j] === P[k] || P[i + 1] === P[j + 1] && P[j + 1] === P[k + 1]) P.splice(j, 2), i -= 2;
      }
    }
    return j;
  }
  _project(x0, y0, vx, vy) {
    let t = Infinity,
        c,
        x,
        y;
    if (vy < 0) {
      // top
      if (y0 <= this.ymin) return null;
      if ((c = (this.ymin - y0) / vy) < t) y = this.ymin, x = x0 + (t = c) * vx;
    } else if (vy > 0) {
      // bottom
      if (y0 >= this.ymax) return null;
      if ((c = (this.ymax - y0) / vy) < t) y = this.ymax, x = x0 + (t = c) * vx;
    }
    if (vx > 0) {
      // right
      if (x0 >= this.xmax) return null;
      if ((c = (this.xmax - x0) / vx) < t) x = this.xmax, y = y0 + (t = c) * vy;
    } else if (vx < 0) {
      // left
      if (x0 <= this.xmin) return null;
      if ((c = (this.xmin - x0) / vx) < t) x = this.xmin, y = y0 + (t = c) * vy;
    }
    return [x, y];
  }
  _edgecode(x, y) {
    return (x === this.xmin ? 0b0001 : x === this.xmax ? 0b0010 : 0b0000) | (y === this.ymin ? 0b0100 : y === this.ymax ? 0b1000 : 0b0000);
  }
  _regioncode(x, y) {
    return (x < this.xmin ? 0b0001 : x > this.xmax ? 0b0010 : 0b0000) | (y < this.ymin ? 0b0100 : y > this.ymax ? 0b1000 : 0b0000);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Voronoi;


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv_js__ = __webpack_require__(67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__dsv_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__csv_js__ = __webpack_require__(387);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__csv_js__["a"]; });
/* unused harmony reexport csvParseRows */
/* unused harmony reexport csvFormat */
/* unused harmony reexport csvFormatBody */
/* unused harmony reexport csvFormatRows */
/* unused harmony reexport csvFormatRow */
/* unused harmony reexport csvFormatValue */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tsv_js__ = __webpack_require__(388);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__tsv_js__["a"]; });
/* unused harmony reexport tsvParseRows */
/* unused harmony reexport tsvFormat */
/* unused harmony reexport tsvFormatBody */
/* unused harmony reexport tsvFormatRows */
/* unused harmony reexport tsvFormatRow */
/* unused harmony reexport tsvFormatValue */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autoType_js__ = __webpack_require__(389);
/* unused harmony reexport autoType */





/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = x;
/* harmony export (immutable) */ __webpack_exports__["b"] = y;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dispatch__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_timer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lcg_js__ = __webpack_require__(415);




function x(d) {
  return d.x;
}

function y(d) {
  return d.y;
}

var initialRadius = 10,
    initialAngle = Math.PI * (3 - Math.sqrt(5));

/* unused harmony default export */ var _unused_webpack_default_export = (function (nodes) {
  var simulation,
      alpha = 1,
      alphaMin = 0.001,
      alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),
      alphaTarget = 0,
      velocityDecay = 0.6,
      forces = new Map(),
      stepper = Object(__WEBPACK_IMPORTED_MODULE_1_d3_timer__["c" /* timer */])(step),
      event = Object(__WEBPACK_IMPORTED_MODULE_0_d3_dispatch__["a" /* dispatch */])("tick", "end"),
      random = Object(__WEBPACK_IMPORTED_MODULE_2__lcg_js__["a" /* default */])();

  if (nodes == null) nodes = [];

  function step() {
    tick();
    event.call("tick", simulation);
    if (alpha < alphaMin) {
      stepper.stop();
      event.call("end", simulation);
    }
  }

  function tick(iterations) {
    var i,
        n = nodes.length,
        node;

    if (iterations === undefined) iterations = 1;

    for (var k = 0; k < iterations; ++k) {
      alpha += (alphaTarget - alpha) * alphaDecay;

      forces.forEach(function (force) {
        force(alpha);
      });

      for (i = 0; i < n; ++i) {
        node = nodes[i];
        if (node.fx == null) node.x += node.vx *= velocityDecay;else node.x = node.fx, node.vx = 0;
        if (node.fy == null) node.y += node.vy *= velocityDecay;else node.y = node.fy, node.vy = 0;
      }
    }

    return simulation;
  }

  function initializeNodes() {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.index = i;
      if (node.fx != null) node.x = node.fx;
      if (node.fy != null) node.y = node.fy;
      if (isNaN(node.x) || isNaN(node.y)) {
        var radius = initialRadius * Math.sqrt(0.5 + i),
            angle = i * initialAngle;
        node.x = radius * Math.cos(angle);
        node.y = radius * Math.sin(angle);
      }
      if (isNaN(node.vx) || isNaN(node.vy)) {
        node.vx = node.vy = 0;
      }
    }
  }

  function initializeForce(force) {
    if (force.initialize) force.initialize(nodes, random);
    return force;
  }

  initializeNodes();

  return simulation = {
    tick: tick,

    restart: function () {
      return stepper.restart(step), simulation;
    },

    stop: function () {
      return stepper.stop(), simulation;
    },

    nodes: function (_) {
      return arguments.length ? (nodes = _, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
    },

    alpha: function (_) {
      return arguments.length ? (alpha = +_, simulation) : alpha;
    },

    alphaMin: function (_) {
      return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
    },

    alphaDecay: function (_) {
      return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
    },

    alphaTarget: function (_) {
      return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
    },

    velocityDecay: function (_) {
      return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
    },

    randomSource: function (_) {
      return arguments.length ? (random = _, forces.forEach(initializeForce), simulation) : random;
    },

    force: function (name, _) {
      return arguments.length > 1 ? (_ == null ? forces.delete(name) : forces.set(name, initializeForce(_)), simulation) : forces.get(name);
    },

    find: function (x, y, radius) {
      var i = 0,
          n = nodes.length,
          dx,
          dy,
          d2,
          node,
          closest;

      if (radius == null) radius = Infinity;else radius *= radius;

      for (i = 0; i < n; ++i) {
        node = nodes[i];
        dx = x - node.x;
        dy = y - node.y;
        d2 = dx * dx + dy * dy;
        if (d2 < radius) closest = node, radius = d2;
      }

      return closest;
    },

    on: function (name, _) {
      return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
    }
  };
});

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formatGroup_js__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formatNumerals_js__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formatSpecifier_js__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formatTrim_js__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formatTypes_js__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__formatPrefixAuto_js__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__identity_js__ = __webpack_require__(425);









var map = Array.prototype.map,
    prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

/* harmony default export */ __webpack_exports__["a"] = (function (locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? __WEBPACK_IMPORTED_MODULE_7__identity_js__["a" /* default */] : Object(__WEBPACK_IMPORTED_MODULE_1__formatGroup_js__["a" /* default */])(map.call(locale.grouping, Number), locale.thousands + ""),
      currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
      currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
      decimal = locale.decimal === undefined ? "." : locale.decimal + "",
      numerals = locale.numerals === undefined ? __WEBPACK_IMPORTED_MODULE_7__identity_js__["a" /* default */] : Object(__WEBPACK_IMPORTED_MODULE_2__formatNumerals_js__["a" /* default */])(map.call(locale.numerals, String)),
      percent = locale.percent === undefined ? "%" : locale.percent + "",
      minus = locale.minus === undefined ? "−" : locale.minus + "",
      nan = locale.nan === undefined ? "NaN" : locale.nan + "";

  function newFormat(specifier) {
    specifier = Object(__WEBPACK_IMPORTED_MODULE_3__formatSpecifier_js__["a" /* default */])(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!__WEBPACK_IMPORTED_MODULE_5__formatTypes_js__["a" /* default */][type]) precision === undefined && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = __WEBPACK_IMPORTED_MODULE_5__formatTypes_js__["a" /* default */][type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision === undefined ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i,
          n,
          c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Determine the sign. -0 is not less than 0, but 1 / -0 is!
        var valueNegative = value < 0 || 1 / value < 0;

        // Perform the initial formatting.
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = Object(__WEBPACK_IMPORTED_MODULE_4__formatTrim_js__["a" /* default */])(value);

        // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
        if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + __WEBPACK_IMPORTED_MODULE_6__formatPrefixAuto_js__["b" /* prefixExponent */] / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);break;
        default:
          value = padding + valuePrefix + value + valueSuffix;break;
      }

      return numerals(value);
    }

    format.toString = function () {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = Object(__WEBPACK_IMPORTED_MODULE_3__formatSpecifier_js__["a" /* default */])(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(Object(__WEBPACK_IMPORTED_MODULE_0__exponent_js__["a" /* default */])(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function (value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
});

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatSpecifier;
/* unused harmony export FormatSpecifier */
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}

FormatSpecifier.prototype.toString = function () {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === undefined ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prefixExponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal_js__ = __webpack_require__(41);


var prefixExponent;

/* harmony default export */ __webpack_exports__["a"] = (function (x, p) {
    var d = Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal_js__["b" /* formatDecimalParts */])(x, p);
    if (!d) return x + "";
    var coefficient = d[0],
        exponent = d[1],
        i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
        n = coefficient.length;
    return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal_js__["b" /* formatDecimalParts */])(x, Math.max(0, p + i - 1))[0]; // less than 1y!
});

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return areaRingSum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return areaStream; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stream_js__ = __webpack_require__(21);





var areaRingSum = new __WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* Adder */]();

// hello?

var areaSum = new __WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* Adder */](),
    lambda00,
    phi00,
    lambda0,
    cosPhi0,
    sinPhi0;

var areaStream = {
  point: __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */],
  lineStart: __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */],
  lineEnd: __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */],
  polygonStart: function () {
    areaRingSum = new __WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* Adder */]();
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function () {
    var areaRing = +areaRingSum;
    areaSum.add(areaRing < 0 ? __WEBPACK_IMPORTED_MODULE_1__math_js__["x" /* tau */] + areaRing : areaRing);
    this.lineStart = this.lineEnd = this.point = __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */];
  },
  sphere: function () {
    areaSum.add(__WEBPACK_IMPORTED_MODULE_1__math_js__["x" /* tau */]);
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaRingEnd() {
  areaPoint(lambda00, phi00);
}

function areaPointFirst(lambda, phi) {
  areaStream.point = areaPoint;
  lambda00 = lambda, phi00 = phi;
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* radians */];
  lambda0 = lambda, cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(phi = phi / 2 + __WEBPACK_IMPORTED_MODULE_1__math_js__["r" /* quarterPi */]), sinPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(phi);
}

function areaPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* radians */];
  phi = phi / 2 + __WEBPACK_IMPORTED_MODULE_1__math_js__["r" /* quarterPi */]; // half the angular distance from south pole

  // Spherical excess E for a spherical triangle with vertices: south pole,
  // previous point, current point.  Uses a formula derived from Cagnoli’s
  // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
  var dLambda = lambda - lambda0,
      sdLambda = dLambda >= 0 ? 1 : -1,
      adLambda = sdLambda * dLambda,
      cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(phi),
      sinPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(phi),
      k = sinPhi0 * sinPhi,
      u = cosPhi0 * cosPhi + k * Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(adLambda),
      v = k * sdLambda * Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(adLambda);
  areaRingSum.add(Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* atan2 */])(v, u));

  // Advance the previous points.
  lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function (object) {
  areaSum = new __WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* Adder */]();
  Object(__WEBPACK_IMPORTED_MODULE_3__stream_js__["a" /* default */])(object, areaStream);
  return areaSum * 2;
});

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = circleStream;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant_js__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rotation_js__ = __webpack_require__(42);





// Generates a circle centered at [0°, 0°], with a given radius and precision.
function circleStream(stream, radius, delta, direction, t0, t1) {
  if (!delta) return;
  var cosRadius = Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* cos */])(radius),
      sinRadius = Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["u" /* sin */])(radius),
      step = direction * delta;
  if (t0 == null) {
    t0 = radius + direction * __WEBPACK_IMPORTED_MODULE_2__math_js__["x" /* tau */];
    t1 = radius - step / 2;
  } else {
    t0 = circleRadius(cosRadius, t0);
    t1 = circleRadius(cosRadius, t1);
    if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * __WEBPACK_IMPORTED_MODULE_2__math_js__["x" /* tau */];
  }
  for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
    point = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["g" /* spherical */])([cosRadius, -sinRadius * Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* cos */])(t), -sinRadius * Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["u" /* sin */])(t)]);
    stream.point(point[0], point[1]);
  }
}

// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
function circleRadius(cosRadius, point) {
  point = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["a" /* cartesian */])(point), point[0] -= cosRadius;
  Object(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["e" /* cartesianNormalizeInPlace */])(point);
  var radius = Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* acos */])(-point[1]);
  return ((-point[2] < 0 ? -radius : radius) + __WEBPACK_IMPORTED_MODULE_2__math_js__["x" /* tau */] - __WEBPACK_IMPORTED_MODULE_2__math_js__["i" /* epsilon */]) % __WEBPACK_IMPORTED_MODULE_2__math_js__["x" /* tau */];
}

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var center = Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])([0, 0]),
      radius = Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(90),
      precision = Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(6),
      ring,
      rotate,
      stream = { point: point };

  function point(x, y) {
    ring.push(x = rotate(x, y));
    x[0] *= __WEBPACK_IMPORTED_MODULE_2__math_js__["h" /* degrees */], x[1] *= __WEBPACK_IMPORTED_MODULE_2__math_js__["h" /* degrees */];
  }

  function circle() {
    var c = center.apply(this, arguments),
        r = radius.apply(this, arguments) * __WEBPACK_IMPORTED_MODULE_2__math_js__["s" /* radians */],
        p = precision.apply(this, arguments) * __WEBPACK_IMPORTED_MODULE_2__math_js__["s" /* radians */];
    ring = [];
    rotate = Object(__WEBPACK_IMPORTED_MODULE_3__rotation_js__["b" /* rotateRadians */])(-c[0] * __WEBPACK_IMPORTED_MODULE_2__math_js__["s" /* radians */], -c[1] * __WEBPACK_IMPORTED_MODULE_2__math_js__["s" /* radians */], 0).invert;
    circleStream(stream, r, p, 1);
    c = { type: "Polygon", coordinates: [ring] };
    ring = rotate = null;
    return c;
  }

  circle.center = function (_) {
    return arguments.length ? (center = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])([+_[0], +_[1]]), circle) : center;
  };

  circle.radius = function (_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(+_), circle) : radius;
  };

  circle.precision = function (_) {
    return arguments.length ? (precision = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(+_), circle) : precision;
  };

  return circle;
});

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (a, b) {

  function compose(x, y) {
    return x = a(x, y), b(x[0], x[1]);
  }

  if (a.invert && b.invert) compose.invert = function (x, y) {
    return x = b.invert(x, y), x && a.invert(x[0], x[1]);
  };

  return compose;
});

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */])(function () {
  return true;
}, clipAntimeridianLine, clipAntimeridianInterpolate, [-__WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* pi */], -__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* halfPi */]]));

// Takes a line and cuts into visible segments. Return values: 0 - there were
// intersections or the line was empty; 1 - no intersections; 2 - there were
// intersections, and the first and last segments should be rejoined.
function clipAntimeridianLine(stream) {
  var lambda0 = NaN,
      phi0 = NaN,
      sign0 = NaN,
      clean; // no intersections

  return {
    lineStart: function () {
      stream.lineStart();
      clean = 1;
    },
    point: function (lambda1, phi1) {
      var sign1 = lambda1 > 0 ? __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* pi */] : -__WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* pi */],
          delta = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(lambda1 - lambda0);
      if (Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(delta - __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* pi */]) < __WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* epsilon */]) {
        // line crosses a pole
        stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? __WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* halfPi */] : -__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* halfPi */]);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        stream.point(lambda1, phi0);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* pi */]) {
        // line crosses antimeridian
        if (Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(lambda0 - sign0) < __WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* epsilon */]) lambda0 -= sign0 * __WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* epsilon */]; // handle degeneracies
        if (Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(lambda1 - sign1) < __WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* epsilon */]) lambda1 -= sign1 * __WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* epsilon */];
        phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        clean = 0;
      }
      stream.point(lambda0 = lambda1, phi0 = phi1);
      sign0 = sign1;
    },
    lineEnd: function () {
      stream.lineEnd();
      lambda0 = phi0 = NaN;
    },
    clean: function () {
      return 2 - clean; // if intersections, rejoin first and last segments
    }
  };
}

function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
  var cosPhi0,
      cosPhi1,
      sinLambda0Lambda1 = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(lambda0 - lambda1);
  return Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(sinLambda0Lambda1) > __WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* epsilon */] ? Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* atan */])((Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(phi0) * (cosPhi1 = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(phi1)) * Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(lambda1) - Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(phi1) * (cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(phi0)) * Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(lambda0)) / (cosPhi0 * cosPhi1 * sinLambda0Lambda1)) : (phi0 + phi1) / 2;
}

function clipAntimeridianInterpolate(from, to, direction, stream) {
  var phi;
  if (from == null) {
    phi = direction * __WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* halfPi */];
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* pi */], phi);
    stream.point(0, phi);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* pi */], phi);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* pi */], 0);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* pi */], -phi);
    stream.point(0, -phi);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* pi */], -phi);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* pi */], 0);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* pi */], phi);
  } else if (Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(from[0] - to[0]) > __WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* epsilon */]) {
    var lambda = from[0] < to[0] ? __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* pi */] : -__WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* pi */];
    phi = direction * lambda / 2;
    stream.point(-lambda, phi);
    stream.point(0, phi);
    stream.point(lambda, phi);
  } else {
    stream.point(to[0], to[1]);
  }
}

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buffer_js__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rejoin_js__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__polygonContains_js__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_array__ = __webpack_require__(3);






/* harmony default export */ __webpack_exports__["a"] = (function (pointVisible, clipLine, interpolate, start) {
  return function (sink) {
    var line = clipLine(sink),
        ringBuffer = Object(__WEBPACK_IMPORTED_MODULE_0__buffer_js__["a" /* default */])(),
        ringSink = clipLine(ringBuffer),
        polygonStarted = false,
        polygon,
        segments,
        ring;

    var clip = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function () {
        clip.point = pointRing;
        clip.lineStart = ringStart;
        clip.lineEnd = ringEnd;
        segments = [];
        polygon = [];
      },
      polygonEnd: function () {
        clip.point = point;
        clip.lineStart = lineStart;
        clip.lineEnd = lineEnd;
        segments = Object(__WEBPACK_IMPORTED_MODULE_4_d3_array__["g" /* merge */])(segments);
        var startInside = Object(__WEBPACK_IMPORTED_MODULE_3__polygonContains_js__["a" /* default */])(polygon, start);
        if (segments.length) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          Object(__WEBPACK_IMPORTED_MODULE_1__rejoin_js__["a" /* default */])(segments, compareIntersection, startInside, interpolate, sink);
        } else if (startInside) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
        segments = polygon = null;
      },
      sphere: function () {
        sink.polygonStart();
        sink.lineStart();
        interpolate(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };

    function point(lambda, phi) {
      if (pointVisible(lambda, phi)) sink.point(lambda, phi);
    }

    function pointLine(lambda, phi) {
      line.point(lambda, phi);
    }

    function lineStart() {
      clip.point = pointLine;
      line.lineStart();
    }

    function lineEnd() {
      clip.point = point;
      line.lineEnd();
    }

    function pointRing(lambda, phi) {
      ring.push([lambda, phi]);
      ringSink.point(lambda, phi);
    }

    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }

    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();

      var clean = ringSink.clean(),
          ringSegments = ringBuffer.result(),
          i,
          n = ringSegments.length,
          m,
          segment,
          point;

      ring.pop();
      polygon.push(ring);
      ring = null;

      if (!n) return;

      // No intersections.
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m = segment.length - 1) > 0) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
          sink.lineEnd();
        }
        return;
      }

      // Rejoin connected segments.
      // TODO reuse ringBuffer.rejoin()?
      if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));

      segments.push(ringSegments.filter(validSegment));
    }

    return clip;
  };
});

function validSegment(segment) {
  return segment.length > 1;
}

// Intersections are sorted along the clip edge. For both antimeridian cutting
// and circle clipping, the same comparison is used.
function compareIntersection(a, b) {
  return ((a = a.x)[0] < 0 ? a[1] - __WEBPACK_IMPORTED_MODULE_2__math_js__["l" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_2__math_js__["i" /* epsilon */] : __WEBPACK_IMPORTED_MODULE_2__math_js__["l" /* halfPi */] - a[1]) - ((b = b.x)[0] < 0 ? b[1] - __WEBPACK_IMPORTED_MODULE_2__math_js__["l" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_2__math_js__["i" /* epsilon */] : __WEBPACK_IMPORTED_MODULE_2__math_js__["l" /* halfPi */] - b[1]);
}

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop_js__ = __webpack_require__(18);


/* harmony default export */ __webpack_exports__["a"] = (function () {
  var lines = [],
      line;
  return {
    point: function (x, y, m) {
      line.push([x, y, m]);
    },
    lineStart: function () {
      lines.push(line = []);
    },
    lineEnd: __WEBPACK_IMPORTED_MODULE_0__noop_js__["a" /* default */],
    rejoin: function () {
      if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
    },
    result: function () {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
});

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pointEqual_js__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function Intersection(point, points, other, entry) {
  this.x = point;
  this.z = points;
  this.o = other; // another intersection
  this.e = entry; // is an entry?
  this.v = false; // visited
  this.n = this.p = null; // next & previous
}

// A generalized polygon clipping algorithm: given a polygon that has been cut
// into its visible line segments, and rejoins the segments by interpolating
// along the clip edge.
/* harmony default export */ __webpack_exports__["a"] = (function (segments, compareIntersection, startInside, interpolate, stream) {
  var subject = [],
      clip = [],
      i,
      n;

  segments.forEach(function (segment) {
    if ((n = segment.length - 1) <= 0) return;
    var n,
        p0 = segment[0],
        p1 = segment[n],
        x;

    if (Object(__WEBPACK_IMPORTED_MODULE_0__pointEqual_js__["a" /* default */])(p0, p1)) {
      if (!p0[2] && !p1[2]) {
        stream.lineStart();
        for (i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
        stream.lineEnd();
        return;
      }
      // handle degenerate cases by moving the point
      p1[0] += 2 * __WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* epsilon */];
    }

    subject.push(x = new Intersection(p0, segment, null, true));
    clip.push(x.o = new Intersection(p0, null, x, false));
    subject.push(x = new Intersection(p1, segment, null, false));
    clip.push(x.o = new Intersection(p1, null, x, true));
  });

  if (!subject.length) return;

  clip.sort(compareIntersection);
  link(subject);
  link(clip);

  for (i = 0, n = clip.length; i < n; ++i) {
    clip[i].e = startInside = !startInside;
  }

  var start = subject[0],
      points,
      point;

  while (1) {
    // Find first unvisited intersection.
    var current = start,
        isSubject = true;
    while (current.v) if ((current = current.n) === start) return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
});

function link(array) {
  if (!(n = array.length)) return;
  var n,
      i = 0,
      a = array[0],
      b;
  while (++i < n) {
    a.n = b = array[i];
    b.p = a;
    a = b;
  }
  a.n = b = array[0];
  b.p = a;
}

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function (a, b) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* abs */])(a[0] - b[0]) < __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* epsilon */] && Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* abs */])(a[1] - b[1]) < __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* epsilon */];
});

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cartesian_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(0);




function longitude(point) {
  if (Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* abs */])(point[0]) <= __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* pi */]) return point[0];else return Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["t" /* sign */])(point[0]) * ((Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* abs */])(point[0]) + __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* pi */]) % __WEBPACK_IMPORTED_MODULE_2__math_js__["x" /* tau */] - __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* pi */]);
}

/* harmony default export */ __webpack_exports__["a"] = (function (polygon, point) {
  var lambda = longitude(point),
      phi = point[1],
      sinPhi = Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["u" /* sin */])(phi),
      normal = [Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["u" /* sin */])(lambda), -Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* cos */])(lambda), 0],
      angle = 0,
      winding = 0;

  var sum = new __WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* Adder */]();

  if (sinPhi === 1) phi = __WEBPACK_IMPORTED_MODULE_2__math_js__["l" /* halfPi */] + __WEBPACK_IMPORTED_MODULE_2__math_js__["i" /* epsilon */];else if (sinPhi === -1) phi = -__WEBPACK_IMPORTED_MODULE_2__math_js__["l" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_2__math_js__["i" /* epsilon */];

  for (var i = 0, n = polygon.length; i < n; ++i) {
    if (!(m = (ring = polygon[i]).length)) continue;
    var ring,
        m,
        point0 = ring[m - 1],
        lambda0 = longitude(point0),
        phi0 = point0[1] / 2 + __WEBPACK_IMPORTED_MODULE_2__math_js__["r" /* quarterPi */],
        sinPhi0 = Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["u" /* sin */])(phi0),
        cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* cos */])(phi0);

    for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
      var point1 = ring[j],
          lambda1 = longitude(point1),
          phi1 = point1[1] / 2 + __WEBPACK_IMPORTED_MODULE_2__math_js__["r" /* quarterPi */],
          sinPhi1 = Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["u" /* sin */])(phi1),
          cosPhi1 = Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* cos */])(phi1),
          delta = lambda1 - lambda0,
          sign = delta >= 0 ? 1 : -1,
          absDelta = sign * delta,
          antimeridian = absDelta > __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* pi */],
          k = sinPhi0 * sinPhi1;

      sum.add(Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["e" /* atan2 */])(k * sign * Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["u" /* sin */])(absDelta), cosPhi0 * cosPhi1 + k * Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* cos */])(absDelta)));
      angle += antimeridian ? delta + sign * __WEBPACK_IMPORTED_MODULE_2__math_js__["x" /* tau */] : delta;

      // Are the longitudes either side of the point’s meridian (lambda),
      // and are the latitudes smaller than the parallel (phi)?
      if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
        var arc = Object(__WEBPACK_IMPORTED_MODULE_1__cartesian_js__["c" /* cartesianCross */])(Object(__WEBPACK_IMPORTED_MODULE_1__cartesian_js__["a" /* cartesian */])(point0), Object(__WEBPACK_IMPORTED_MODULE_1__cartesian_js__["a" /* cartesian */])(point1));
        Object(__WEBPACK_IMPORTED_MODULE_1__cartesian_js__["e" /* cartesianNormalizeInPlace */])(arc);
        var intersection = Object(__WEBPACK_IMPORTED_MODULE_1__cartesian_js__["c" /* cartesianCross */])(normal, arc);
        Object(__WEBPACK_IMPORTED_MODULE_1__cartesian_js__["e" /* cartesianNormalizeInPlace */])(intersection);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["c" /* asin */])(intersection[2]);
        if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }

  // First, determine whether the South pole is inside or outside:
  //
  // It is inside if:
  // * the polygon winds around it in a clockwise direction.
  // * the polygon does not (cumulatively) wind around it, but has a negative
  //   (counter-clockwise) area.
  //
  // Second, count the (signed) number of times a segment crosses a lambda
  // from the point to the South pole.  If it is zero, then the point is the
  // same side as the South pole.

  return (angle < -__WEBPACK_IMPORTED_MODULE_2__math_js__["i" /* epsilon */] || angle < __WEBPACK_IMPORTED_MODULE_2__math_js__["i" /* epsilon */] && sum < -__WEBPACK_IMPORTED_MODULE_2__math_js__["j" /* epsilon2 */]) ^ winding & 1;
});

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__circle_js__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pointEqual_js__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_js__ = __webpack_require__(156);






/* harmony default export */ __webpack_exports__["a"] = (function (radius) {
  var cr = Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* cos */])(radius),
      delta = 6 * __WEBPACK_IMPORTED_MODULE_2__math_js__["s" /* radians */],
      smallRadius = cr > 0,
      notHemisphere = Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* abs */])(cr) > __WEBPACK_IMPORTED_MODULE_2__math_js__["i" /* epsilon */]; // TODO optimise for this common case

  function interpolate(from, to, direction, stream) {
    Object(__WEBPACK_IMPORTED_MODULE_1__circle_js__["a" /* circleStream */])(stream, radius, delta, direction, from, to);
  }

  function visible(lambda, phi) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* cos */])(lambda) * Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* cos */])(phi) > cr;
  }

  // Takes a line and cuts into visible segments. Return values used for polygon
  // clipping: 0 - there were intersections or the line was empty; 1 - no
  // intersections 2 - there were intersections, and the first and last segments
  // should be rejoined.
  function clipLine(stream) {
    var point0, // previous point
    c0, // code for previous point
    v0, // visibility of previous point
    v00, // visibility of first point
    clean; // no intersections
    return {
      lineStart: function () {
        v00 = v0 = false;
        clean = 1;
      },
      point: function (lambda, phi) {
        var point1 = [lambda, phi],
            point2,
            v = visible(lambda, phi),
            c = smallRadius ? v ? 0 : code(lambda, phi) : v ? code(lambda + (lambda < 0 ? __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* pi */] : -__WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* pi */]), phi) : 0;
        if (!point0 && (v00 = v0 = v)) stream.lineStart();
        if (v !== v0) {
          point2 = intersect(point0, point1);
          if (!point2 || Object(__WEBPACK_IMPORTED_MODULE_3__pointEqual_js__["a" /* default */])(point0, point2) || Object(__WEBPACK_IMPORTED_MODULE_3__pointEqual_js__["a" /* default */])(point1, point2)) point1[2] = 1;
        }
        if (v !== v0) {
          clean = 0;
          if (v) {
            // outside going in
            stream.lineStart();
            point2 = intersect(point1, point0);
            stream.point(point2[0], point2[1]);
          } else {
            // inside going out
            point2 = intersect(point0, point1);
            stream.point(point2[0], point2[1], 2);
            stream.lineEnd();
          }
          point0 = point2;
        } else if (notHemisphere && point0 && smallRadius ^ v) {
          var t;
          // If the codes for two points are different, or are both zero,
          // and there this segment intersects with the small circle.
          if (!(c & c0) && (t = intersect(point1, point0, true))) {
            clean = 0;
            if (smallRadius) {
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
            } else {
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
              stream.lineStart();
              stream.point(t[0][0], t[0][1], 3);
            }
          }
        }
        if (v && (!point0 || !Object(__WEBPACK_IMPORTED_MODULE_3__pointEqual_js__["a" /* default */])(point0, point1))) {
          stream.point(point1[0], point1[1]);
        }
        point0 = point1, v0 = v, c0 = c;
      },
      lineEnd: function () {
        if (v0) stream.lineEnd();
        point0 = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function () {
        return clean | (v00 && v0) << 1;
      }
    };
  }

  // Intersects the great circle between a and b with the clip circle.
  function intersect(a, b, two) {
    var pa = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["a" /* cartesian */])(a),
        pb = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["a" /* cartesian */])(b);

    // We have two planes, n1.p = d1 and n2.p = d2.
    // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
    var n1 = [1, 0, 0],
        // normal
    n2 = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["c" /* cartesianCross */])(pa, pb),
        n2n2 = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["d" /* cartesianDot */])(n2, n2),
        n1n2 = n2[0],
        // cartesianDot(n1, n2),
    determinant = n2n2 - n1n2 * n1n2;

    // Two polar points.
    if (!determinant) return !two && a;

    var c1 = cr * n2n2 / determinant,
        c2 = -cr * n1n2 / determinant,
        n1xn2 = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["c" /* cartesianCross */])(n1, n2),
        A = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["f" /* cartesianScale */])(n1, c1),
        B = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["f" /* cartesianScale */])(n2, c2);
    Object(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["b" /* cartesianAddInPlace */])(A, B);

    // Solve |p(t)|^2 = 1.
    var u = n1xn2,
        w = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["d" /* cartesianDot */])(A, u),
        uu = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["d" /* cartesianDot */])(u, u),
        t2 = w * w - uu * (Object(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["d" /* cartesianDot */])(A, A) - 1);

    if (t2 < 0) return;

    var t = Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["v" /* sqrt */])(t2),
        q = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["f" /* cartesianScale */])(u, (-w - t) / uu);
    Object(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["b" /* cartesianAddInPlace */])(q, A);
    q = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["g" /* spherical */])(q);

    if (!two) return q;

    // Two intersection points.
    var lambda0 = a[0],
        lambda1 = b[0],
        phi0 = a[1],
        phi1 = b[1],
        z;

    if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;

    var delta = lambda1 - lambda0,
        polar = Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* abs */])(delta - __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* pi */]) < __WEBPACK_IMPORTED_MODULE_2__math_js__["i" /* epsilon */],
        meridian = polar || delta < __WEBPACK_IMPORTED_MODULE_2__math_js__["i" /* epsilon */];

    if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;

    // Check that the first point is between a and b.
    if (meridian ? polar ? phi0 + phi1 > 0 ^ q[1] < (Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* abs */])(q[0] - lambda0) < __WEBPACK_IMPORTED_MODULE_2__math_js__["i" /* epsilon */] ? phi0 : phi1) : phi0 <= q[1] && q[1] <= phi1 : delta > __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* pi */] ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
      var q1 = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["f" /* cartesianScale */])(u, (-w + t) / uu);
      Object(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["b" /* cartesianAddInPlace */])(q1, A);
      return [q, Object(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["g" /* spherical */])(q1)];
    }
  }

  // Generates a 4-bit vector representing the location of a point relative to
  // the small circle's bounding box.
  function code(lambda, phi) {
    var r = smallRadius ? radius : __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* pi */] - radius,
        code = 0;
    if (lambda < -r) code |= 1; // left
    else if (lambda > r) code |= 2; // right
    if (phi < -r) code |= 4; // below
    else if (phi > r) code |= 8; // above
    return code;
  }

  return Object(__WEBPACK_IMPORTED_MODULE_4__index_js__["a" /* default */])(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-__WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* pi */], radius - __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* pi */]]);
});

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__length_js__ = __webpack_require__(163);


var coordinates = [null, null],
    object = { type: "LineString", coordinates: coordinates };

/* harmony default export */ __webpack_exports__["a"] = (function (a, b) {
  coordinates[0] = a;
  coordinates[1] = b;
  return Object(__WEBPACK_IMPORTED_MODULE_0__length_js__["a" /* default */])(object);
});

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stream_js__ = __webpack_require__(21);





var lengthSum, lambda0, sinPhi0, cosPhi0;

var lengthStream = {
  sphere: __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */],
  point: __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */],
  lineStart: lengthLineStart,
  lineEnd: __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */],
  polygonStart: __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */],
  polygonEnd: __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */]
};

function lengthLineStart() {
  lengthStream.point = lengthPointFirst;
  lengthStream.lineEnd = lengthLineEnd;
}

function lengthLineEnd() {
  lengthStream.point = lengthStream.lineEnd = __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */];
}

function lengthPointFirst(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* radians */];
  lambda0 = lambda, sinPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(phi), cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(phi);
  lengthStream.point = lengthPoint;
}

function lengthPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* radians */];
  var sinPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(phi),
      cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(phi),
      delta = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(lambda - lambda0),
      cosDelta = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(delta),
      sinDelta = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(delta),
      x = cosPhi * sinDelta,
      y = cosPhi0 * sinPhi - sinPhi0 * cosPhi * cosDelta,
      z = sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosDelta;
  lengthSum.add(Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* atan2 */])(Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["v" /* sqrt */])(x * x + y * y), z));
  lambda0 = lambda, sinPhi0 = sinPhi, cosPhi0 = cosPhi;
}

/* harmony default export */ __webpack_exports__["a"] = (function (object) {
  lengthSum = new __WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* Adder */]();
  Object(__WEBPACK_IMPORTED_MODULE_3__stream_js__["a" /* default */])(object, lengthStream);
  return +lengthSum;
});

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop_js__ = __webpack_require__(18);


var x0 = Infinity,
    y0 = x0,
    x1 = -x0,
    y1 = x1;

var boundsStream = {
  point: boundsPoint,
  lineStart: __WEBPACK_IMPORTED_MODULE_0__noop_js__["a" /* default */],
  lineEnd: __WEBPACK_IMPORTED_MODULE_0__noop_js__["a" /* default */],
  polygonStart: __WEBPACK_IMPORTED_MODULE_0__noop_js__["a" /* default */],
  polygonEnd: __WEBPACK_IMPORTED_MODULE_0__noop_js__["a" /* default */],
  result: function () {
    var bounds = [[x0, y0], [x1, y1]];
    x1 = y1 = -(y0 = x0 = Infinity);
    return bounds;
  }
};

function boundsPoint(x, y) {
  if (x < x0) x0 = x;
  if (x > x1) x1 = x;
  if (y < y0) y0 = y;
  if (y > y1) y1 = y;
}

/* harmony default export */ __webpack_exports__["a"] = (boundsStream);

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conicEqualArea_js__ = __webpack_require__(74);


/* harmony default export */ __webpack_exports__["a"] = (function () {
    return Object(__WEBPACK_IMPORTED_MODULE_0__conicEqualArea_js__["a" /* default */])().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
});

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = equirectangularRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(13);


function equirectangularRaw(lambda, phi) {
  return [lambda, phi];
}

equirectangularRaw.invert = equirectangularRaw;

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */])(equirectangularRaw).scale(152.63);
});

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = packEnclose;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_js__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enclose_js__ = __webpack_require__(169);



function place(b, a, c) {
  var dx = b.x - a.x,
      x,
      a2,
      dy = b.y - a.y,
      y,
      b2,
      d2 = dx * dx + dy * dy;
  if (d2) {
    a2 = a.r + c.r, a2 *= a2;
    b2 = b.r + c.r, b2 *= b2;
    if (a2 > b2) {
      x = (d2 + b2 - a2) / (2 * d2);
      y = Math.sqrt(Math.max(0, b2 / d2 - x * x));
      c.x = b.x - x * dx - y * dy;
      c.y = b.y - x * dy + y * dx;
    } else {
      x = (d2 + a2 - b2) / (2 * d2);
      y = Math.sqrt(Math.max(0, a2 / d2 - x * x));
      c.x = a.x + x * dx - y * dy;
      c.y = a.y + x * dy + y * dx;
    }
  } else {
    c.x = a.x + c.r;
    c.y = a.y;
  }
}

function intersects(a, b) {
  var dr = a.r + b.r - 1e-6,
      dx = b.x - a.x,
      dy = b.y - a.y;
  return dr > 0 && dr * dr > dx * dx + dy * dy;
}

function score(node) {
  var a = node._,
      b = node.next._,
      ab = a.r + b.r,
      dx = (a.x * b.r + b.x * a.r) / ab,
      dy = (a.y * b.r + b.y * a.r) / ab;
  return dx * dx + dy * dy;
}

function Node(circle) {
  this._ = circle;
  this.next = null;
  this.previous = null;
}

function packEnclose(circles) {
  if (!(n = (circles = Object(__WEBPACK_IMPORTED_MODULE_0__array_js__["a" /* default */])(circles)).length)) return 0;

  var a, b, c, n, aa, ca, i, j, k, sj, sk;

  // Place the first circle.
  a = circles[0], a.x = 0, a.y = 0;
  if (!(n > 1)) return a.r;

  // Place the second circle.
  b = circles[1], a.x = -b.r, b.x = a.r, b.y = 0;
  if (!(n > 2)) return a.r + b.r;

  // Place the third circle.
  place(b, a, c = circles[2]);

  // Initialize the front-chain using the first three circles a, b and c.
  a = new Node(a), b = new Node(b), c = new Node(c);
  a.next = c.previous = b;
  b.next = a.previous = c;
  c.next = b.previous = a;

  // Attempt to place each remaining circle…
  pack: for (i = 3; i < n; ++i) {
    place(a._, b._, c = circles[i]), c = new Node(c);

    // Find the closest intersecting circle on the front-chain, if any.
    // “Closeness” is determined by linear distance along the front-chain.
    // “Ahead” or “behind” is likewise determined by linear distance.
    j = b.next, k = a.previous, sj = b._.r, sk = a._.r;
    do {
      if (sj <= sk) {
        if (intersects(j._, c._)) {
          b = j, a.next = b, b.previous = a, --i;
          continue pack;
        }
        sj += j._.r, j = j.next;
      } else {
        if (intersects(k._, c._)) {
          a = k, a.next = b, b.previous = a, --i;
          continue pack;
        }
        sk += k._.r, k = k.previous;
      }
    } while (j !== k.next);

    // Success! Insert the new circle c between a and b.
    c.previous = a, c.next = b, a.next = b.previous = b = c;

    // Compute the new closest circle pair to the centroid.
    aa = score(a);
    while ((c = c.next) !== b) {
      if ((ca = score(c)) < aa) {
        a = c, aa = ca;
      }
    }
    b = a.next;
  }

  // Compute the enclosing circle of the front chain.
  a = [b._], c = b;while ((c = c.next) !== b) a.push(c._);c = Object(__WEBPACK_IMPORTED_MODULE_1__enclose_js__["a" /* default */])(a);

  // Translate the circles to put the enclosing circle around the origin.
  for (i = 0; i < n; ++i) a = circles[i], a.x -= c.x, a.y -= c.y;

  return c.r;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function (circles) {
  packEnclose(circles);
  return circles;
});

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = shuffle;
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return typeof x === "object" && "length" in x ? x // Array, TypedArray, NodeList, array-like
  : Array.from(x); // Map, Set, iterable, string, or anything else
});

function shuffle(array) {
  var m = array.length,
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_js__ = __webpack_require__(168);


/* harmony default export */ __webpack_exports__["a"] = (function (circles) {
  var i = 0,
      n = (circles = Object(__WEBPACK_IMPORTED_MODULE_0__array_js__["b" /* shuffle */])(Array.from(circles))).length,
      B = [],
      p,
      e;

  while (i < n) {
    p = circles[i];
    if (e && enclosesWeak(e, p)) ++i;else e = encloseBasis(B = extendBasis(B, p)), i = 0;
  }

  return e;
});

function extendBasis(B, p) {
  var i, j;

  if (enclosesWeakAll(p, B)) return [p];

  // If we get here then B must have at least one element.
  for (i = 0; i < B.length; ++i) {
    if (enclosesNot(p, B[i]) && enclosesWeakAll(encloseBasis2(B[i], p), B)) {
      return [B[i], p];
    }
  }

  // If we get here then B must have at least two elements.
  for (i = 0; i < B.length - 1; ++i) {
    for (j = i + 1; j < B.length; ++j) {
      if (enclosesNot(encloseBasis2(B[i], B[j]), p) && enclosesNot(encloseBasis2(B[i], p), B[j]) && enclosesNot(encloseBasis2(B[j], p), B[i]) && enclosesWeakAll(encloseBasis3(B[i], B[j], p), B)) {
        return [B[i], B[j], p];
      }
    }
  }

  // If we get here then something is very wrong.
  throw new Error();
}

function enclosesNot(a, b) {
  var dr = a.r - b.r,
      dx = b.x - a.x,
      dy = b.y - a.y;
  return dr < 0 || dr * dr < dx * dx + dy * dy;
}

function enclosesWeak(a, b) {
  var dr = a.r - b.r + Math.max(a.r, b.r, 1) * 1e-9,
      dx = b.x - a.x,
      dy = b.y - a.y;
  return dr > 0 && dr * dr > dx * dx + dy * dy;
}

function enclosesWeakAll(a, B) {
  for (var i = 0; i < B.length; ++i) {
    if (!enclosesWeak(a, B[i])) {
      return false;
    }
  }
  return true;
}

function encloseBasis(B) {
  switch (B.length) {
    case 1:
      return encloseBasis1(B[0]);
    case 2:
      return encloseBasis2(B[0], B[1]);
    case 3:
      return encloseBasis3(B[0], B[1], B[2]);
  }
}

function encloseBasis1(a) {
  return {
    x: a.x,
    y: a.y,
    r: a.r
  };
}

function encloseBasis2(a, b) {
  var x1 = a.x,
      y1 = a.y,
      r1 = a.r,
      x2 = b.x,
      y2 = b.y,
      r2 = b.r,
      x21 = x2 - x1,
      y21 = y2 - y1,
      r21 = r2 - r1,
      l = Math.sqrt(x21 * x21 + y21 * y21);
  return {
    x: (x1 + x2 + x21 / l * r21) / 2,
    y: (y1 + y2 + y21 / l * r21) / 2,
    r: (l + r1 + r2) / 2
  };
}

function encloseBasis3(a, b, c) {
  var x1 = a.x,
      y1 = a.y,
      r1 = a.r,
      x2 = b.x,
      y2 = b.y,
      r2 = b.r,
      x3 = c.x,
      y3 = c.y,
      r3 = c.r,
      a2 = x1 - x2,
      a3 = x1 - x3,
      b2 = y1 - y2,
      b3 = y1 - y3,
      c2 = r2 - r1,
      c3 = r3 - r1,
      d1 = x1 * x1 + y1 * y1 - r1 * r1,
      d2 = d1 - x2 * x2 - y2 * y2 + r2 * r2,
      d3 = d1 - x3 * x3 - y3 * y3 + r3 * r3,
      ab = a3 * b2 - a2 * b3,
      xa = (b2 * d3 - b3 * d2) / (ab * 2) - x1,
      xb = (b3 * c2 - b2 * c3) / ab,
      ya = (a3 * d2 - a2 * d3) / (ab * 2) - y1,
      yb = (a2 * c3 - a3 * c2) / ab,
      A = xb * xb + yb * yb - 1,
      B = 2 * (r1 + xa * xb + ya * yb),
      C = xa * xa + ya * ya - r1 * r1,
      r = -(A ? (B + Math.sqrt(B * B - 4 * A * C)) / (2 * A) : C / B);
  return {
    x: x1 + xa + xb * r,
    y: y1 + ya + yb * r,
    r: r
  };
}

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = constantZero;
function constantZero() {
  return 0;
}

/* harmony default export */ __webpack_exports__["b"] = (function (x) {
  return function () {
    return x;
  };
});

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (node) {
  node.x0 = Math.round(node.x0);
  node.y0 = Math.round(node.y0);
  node.x1 = Math.round(node.x1);
  node.y1 = Math.round(node.y1);
});

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource_js__ = __webpack_require__(4);


/* harmony default export */ __webpack_exports__["a"] = ((function sourceRandomIrwinHall(source) {
  function randomIrwinHall(n) {
    if ((n = +n) <= 0) return () => 0;
    return function () {
      for (var sum = 0, i = n; i > 1; --i) sum += source();
      return sum + i * source();
    };
  }

  randomIrwinHall.source = sourceRandomIrwinHall;

  return randomIrwinHall;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource_js__["a" /* default */]));

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource_js__ = __webpack_require__(4);


/* harmony default export */ __webpack_exports__["a"] = ((function sourceRandomGeometric(source) {
  function randomGeometric(p) {
    if ((p = +p) < 0 || p > 1) throw new RangeError("invalid p");
    if (p === 0) return () => Infinity;
    if (p === 1) return () => 1;
    p = Math.log1p(-p);
    return function () {
      return 1 + Math.floor(Math.log1p(-source()) / p);
    };
  }

  randomGeometric.source = sourceRandomGeometric;

  return randomGeometric;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource_js__["a" /* default */]));

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__beta_js__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geometric_js__ = __webpack_require__(173);




/* harmony default export */ __webpack_exports__["a"] = ((function sourceRandomBinomial(source) {
  var G = __WEBPACK_IMPORTED_MODULE_2__geometric_js__["a" /* default */].source(source),
      B = __WEBPACK_IMPORTED_MODULE_1__beta_js__["a" /* default */].source(source);

  function randomBinomial(n, p) {
    n = +n;
    if ((p = +p) >= 1) return () => n;
    if (p <= 0) return () => 0;
    return function () {
      var acc = 0,
          nn = n,
          pp = p;
      while (nn * pp > 16 && nn * (1 - pp) > 16) {
        var i = Math.floor((nn + 1) * pp),
            y = B(i, nn - i + 1)();
        if (y <= pp) {
          acc += i;
          nn -= i;
          pp = (pp - y) / (1 - y);
        } else {
          nn = i - 1;
          pp /= y;
        }
      }
      var sign = pp < 0.5,
          pFinal = sign ? pp : 1 - pp,
          g = G(pFinal);
      for (var s = g(), k = 0; s <= nn; ++k) s += g();
      return acc + (sign ? k : nn - k);
    };
  }

  randomBinomial.source = sourceRandomBinomial;

  return randomBinomial;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource_js__["a" /* default */]));

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gamma_js__ = __webpack_require__(82);



/* harmony default export */ __webpack_exports__["a"] = ((function sourceRandomBeta(source) {
  var G = __WEBPACK_IMPORTED_MODULE_1__gamma_js__["a" /* default */].source(source);

  function randomBeta(alpha, beta) {
    var X = G(alpha),
        Y = G(beta);
    return function () {
      var x = X();
      return x === 0 ? 0 : x / (x + Y());
    };
  }

  randomBeta.source = sourceRandomBeta;

  return randomBeta;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource_js__["a" /* default */]));

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ordinal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init_js__ = __webpack_require__(5);


const implicit = Symbol("implicit");
/* unused harmony export implicit */


function ordinal() {
  var index = new Map(),
      domain = [],
      range = [],
      unknown = implicit;

  function scale(d) {
    var key = d + "",
        i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function (_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = new Map();
    for (const value of _) {
      const key = value + "";
      if (index.has(key)) continue;
      index.set(key, domain.push(value));
    }
    return scale;
  };

  scale.range = function (_) {
    return arguments.length ? (range = Array.from(_), scale) : range.slice();
  };

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function () {
    return ordinal(domain, range).unknown(unknown);
  };

  __WEBPACK_IMPORTED_MODULE_0__init_js__["b" /* initRange */].apply(scale, arguments);

  return scale;
}

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = tickFormat;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(72);



function tickFormat(start, stop, count, specifier) {
  var step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["m" /* tickStep */])(start, stop, count),
      precision;
  specifier = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["c" /* formatSpecifier */])(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s":
      {
        var value = Math.max(Math.abs(start), Math.abs(stop));
        if (specifier.precision == null && !isNaN(precision = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["e" /* precisionPrefix */])(step, value))) specifier.precision = precision;
        return Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["b" /* formatPrefix */])(specifier, value);
      }
    case "":
    case "e":
    case "g":
    case "p":
    case "r":
      {
        if (specifier.precision == null && !isNaN(precision = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* precisionRound */])(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
        break;
      }
    case "f":
    case "%":
      {
        if (specifier.precision == null && !isNaN(precision = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["d" /* precisionFixed */])(step))) specifier.precision = precision - (specifier.type === "%") * 2;
        break;
      }
  }
  return Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["a" /* format */])(specifier);
}

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = nice;
function nice(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
}

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calendar;
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_time__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_time_format__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__continuous_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__init_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nice_js__ = __webpack_require__(178);






function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format) {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_2__continuous_js__["b" /* default */])(),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond : minute(date) < date ? formatSecond : hour(date) < date ? formatMinute : day(date) < date ? formatHour : month(date) < date ? week(date) < date ? formatDay : formatWeek : year(date) < date ? formatMonth : formatYear)(date);
  }

  scale.invert = function (y) {
    return new Date(invert(y));
  };

  scale.domain = function (_) {
    return arguments.length ? domain(Array.from(_, number)) : domain().map(date);
  };

  scale.ticks = function (interval) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], interval == null ? 10 : interval);
  };

  scale.tickFormat = function (count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function (interval) {
    var d = domain();
    if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
    return interval ? domain(Object(__WEBPACK_IMPORTED_MODULE_4__nice_js__["a" /* default */])(d, interval)) : scale;
  };

  scale.copy = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_2__continuous_js__["a" /* copy */])(scale, calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format));
  };

  return scale;
}

function time() {
  return __WEBPACK_IMPORTED_MODULE_3__init_js__["b" /* initRange */].apply(calendar(__WEBPACK_IMPORTED_MODULE_0_d3_time__["j" /* timeTicks */], __WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* timeTickInterval */], __WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* timeYear */], __WEBPACK_IMPORTED_MODULE_0_d3_time__["e" /* timeMonth */], __WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeWeek */], __WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* timeDay */], __WEBPACK_IMPORTED_MODULE_0_d3_time__["b" /* timeHour */], __WEBPACK_IMPORTED_MODULE_0_d3_time__["c" /* timeMinute */], __WEBPACK_IMPORTED_MODULE_0_d3_time__["f" /* timeSecond */], __WEBPACK_IMPORTED_MODULE_1_d3_time_format__["a" /* timeFormat */]).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
}

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export milliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval_js__ = __webpack_require__(6);


var millisecond = Object(__WEBPACK_IMPORTED_MODULE_0__interval_js__["a" /* default */])(function () {
  // noop
}, function (date, step) {
  date.setTime(+date + step);
}, function (start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function (k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return Object(__WEBPACK_IMPORTED_MODULE_0__interval_js__["a" /* default */])(function (date) {
    date.setTime(Math.floor(date / k) * k);
  }, function (date, step) {
    date.setTime(+date + step * k);
  }, function (start, end) {
    return (end - start) / k;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (millisecond);
var milliseconds = millisecond.range;

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export seconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration_js__ = __webpack_require__(15);



var second = Object(__WEBPACK_IMPORTED_MODULE_0__interval_js__["a" /* default */])(function (date) {
  date.setTime(date - date.getMilliseconds());
}, function (date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration_js__["e" /* durationSecond */]);
}, function (start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration_js__["e" /* durationSecond */];
}, function (date) {
  return date.getUTCSeconds();
});

/* harmony default export */ __webpack_exports__["a"] = (second);
var seconds = second.range;

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export minutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration_js__ = __webpack_require__(15);



var minute = Object(__WEBPACK_IMPORTED_MODULE_0__interval_js__["a" /* default */])(function (date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * __WEBPACK_IMPORTED_MODULE_1__duration_js__["e" /* durationSecond */]);
}, function (date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration_js__["c" /* durationMinute */]);
}, function (start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration_js__["c" /* durationMinute */];
}, function (date) {
  return date.getMinutes();
});

/* harmony default export */ __webpack_exports__["a"] = (minute);
var minutes = minute.range;

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration_js__ = __webpack_require__(15);



var hour = Object(__WEBPACK_IMPORTED_MODULE_0__interval_js__["a" /* default */])(function (date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * __WEBPACK_IMPORTED_MODULE_1__duration_js__["e" /* durationSecond */] - date.getMinutes() * __WEBPACK_IMPORTED_MODULE_1__duration_js__["c" /* durationMinute */]);
}, function (date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration_js__["b" /* durationHour */]);
}, function (start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration_js__["b" /* durationHour */];
}, function (date) {
  return date.getHours();
});

/* harmony default export */ __webpack_exports__["a"] = (hour);
var hours = hour.range;

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export days */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration_js__ = __webpack_require__(15);



var day = Object(__WEBPACK_IMPORTED_MODULE_0__interval_js__["a" /* default */])(date => date.setHours(0, 0, 0, 0), (date, step) => date.setDate(date.getDate() + step), (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * __WEBPACK_IMPORTED_MODULE_1__duration_js__["c" /* durationMinute */]) / __WEBPACK_IMPORTED_MODULE_1__duration_js__["a" /* durationDay */], date => date.getDate() - 1);

/* harmony default export */ __webpack_exports__["a"] = (day);
var days = day.range;

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return monday; });
/* unused harmony export tuesday */
/* unused harmony export wednesday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return thursday; });
/* unused harmony export friday */
/* unused harmony export saturday */
/* unused harmony export sundays */
/* unused harmony export mondays */
/* unused harmony export tuesdays */
/* unused harmony export wednesdays */
/* unused harmony export thursdays */
/* unused harmony export fridays */
/* unused harmony export saturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration_js__ = __webpack_require__(15);



function weekday(i) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__interval_js__["a" /* default */])(function (date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function (start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * __WEBPACK_IMPORTED_MODULE_1__duration_js__["c" /* durationMinute */]) / __WEBPACK_IMPORTED_MODULE_1__duration_js__["f" /* durationWeek */];
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export months */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval_js__ = __webpack_require__(6);


var month = Object(__WEBPACK_IMPORTED_MODULE_0__interval_js__["a" /* default */])(function (date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function (date, step) {
  date.setMonth(date.getMonth() + step);
}, function (start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function (date) {
  return date.getMonth();
});

/* harmony default export */ __webpack_exports__["a"] = (month);
var months = month.range;

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export years */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval_js__ = __webpack_require__(6);


var year = Object(__WEBPACK_IMPORTED_MODULE_0__interval_js__["a" /* default */])(function (date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function (date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function (start, end) {
  return end.getFullYear() - start.getFullYear();
}, function (date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function (k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(__WEBPACK_IMPORTED_MODULE_0__interval_js__["a" /* default */])(function (date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (year);
var years = year.range;

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration_js__ = __webpack_require__(15);



var utcMinute = Object(__WEBPACK_IMPORTED_MODULE_0__interval_js__["a" /* default */])(function (date) {
  date.setUTCSeconds(0, 0);
}, function (date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration_js__["c" /* durationMinute */]);
}, function (start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration_js__["c" /* durationMinute */];
}, function (date) {
  return date.getUTCMinutes();
});

/* harmony default export */ __webpack_exports__["a"] = (utcMinute);
var utcMinutes = utcMinute.range;

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration_js__ = __webpack_require__(15);



var utcHour = Object(__WEBPACK_IMPORTED_MODULE_0__interval_js__["a" /* default */])(function (date) {
  date.setUTCMinutes(0, 0, 0);
}, function (date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration_js__["b" /* durationHour */]);
}, function (start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration_js__["b" /* durationHour */];
}, function (date) {
  return date.getUTCHours();
});

/* harmony default export */ __webpack_exports__["a"] = (utcHour);
var utcHours = utcHour.range;

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration_js__ = __webpack_require__(15);



var utcDay = Object(__WEBPACK_IMPORTED_MODULE_0__interval_js__["a" /* default */])(function (date) {
  date.setUTCHours(0, 0, 0, 0);
}, function (date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function (start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration_js__["a" /* durationDay */];
}, function (date) {
  return date.getUTCDate() - 1;
});

/* harmony default export */ __webpack_exports__["a"] = (utcDay);
var utcDays = utcDay.range;

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return utcSunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return utcMonday; });
/* unused harmony export utcTuesday */
/* unused harmony export utcWednesday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return utcThursday; });
/* unused harmony export utcFriday */
/* unused harmony export utcSaturday */
/* unused harmony export utcSundays */
/* unused harmony export utcMondays */
/* unused harmony export utcTuesdays */
/* unused harmony export utcWednesdays */
/* unused harmony export utcThursdays */
/* unused harmony export utcFridays */
/* unused harmony export utcSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration_js__ = __webpack_require__(15);



function utcWeekday(i) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__interval_js__["a" /* default */])(function (date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function (start, end) {
    return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration_js__["f" /* durationWeek */];
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval_js__ = __webpack_require__(6);


var utcMonth = Object(__WEBPACK_IMPORTED_MODULE_0__interval_js__["a" /* default */])(function (date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function (date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function (start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function (date) {
  return date.getUTCMonth();
});

/* harmony default export */ __webpack_exports__["a"] = (utcMonth);
var utcMonths = utcMonth.range;

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval_js__ = __webpack_require__(6);


var utcYear = Object(__WEBPACK_IMPORTED_MODULE_0__interval_js__["a" /* default */])(function (date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function (date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function (start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function (date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function (k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(__WEBPACK_IMPORTED_MODULE_0__interval_js__["a" /* default */])(function (date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (utcYear);
var utcYears = utcYear.range;

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatLocale;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_time__ = __webpack_require__(46);


function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newDate(y, m, d) {
  return { y: y, m: m, d: d, H: 0, M: 0, S: 0, L: 0 };
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function (date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, Z) {
    return function (string) {
      var d = newDate(1900, undefined, 1),
          i = parseSpecifier(d, specifier, string += "", 0),
          week,
          day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));

      // If this is utcParse, never use the local timezone.
      if (Z && !("Z" in d)) d.Z = 0;

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // If the month was not specified, inherit from the quarter.
      if (d.m === undefined) d.m = "q" in d ? d.q : 0;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? __WEBPACK_IMPORTED_MODULE_0_d3_time__["p" /* utcMonday */].ceil(week) : Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["p" /* utcMonday */])(week);
          week = __WEBPACK_IMPORTED_MODULE_0_d3_time__["m" /* utcDay */].offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
          week = day > 4 || day === 0 ? __WEBPACK_IMPORTED_MODULE_0_d3_time__["d" /* timeMonday */].ceil(week) : Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["d" /* timeMonday */])(week);
          week = __WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* timeDay */].offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return localDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || (j = parse(d, string, j)) < 0) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }

  return {
    format: function (specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function () {
        return specifier;
      };
      return f;
    },
    parse: function (specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function () {
        return specifier;
      };
      return p;
    },
    utcFormat: function (specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function () {
        return specifier;
      };
      return f;
    },
    utcParse: function (specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function () {
        return specifier;
      };
      return p;
    }
  };
}

var pads = { "-": "", "_": " ", "0": "0" },
    numberRe = /^\s*\d+/,
    // note: ignores next directive
percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  return new Map(names.map((name, i) => [name.toLowerCase(), i]));
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + __WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* timeDay */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* timeYear */])(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["g" /* timeSunday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* timeYear */])(d) - 1, d), p, 2);
}

function dISO(d) {
  var day = d.getDay();
  return day >= 4 || day === 0 ? Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["h" /* timeThursday */])(d) : __WEBPACK_IMPORTED_MODULE_0_d3_time__["h" /* timeThursday */].ceil(d);
}

function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["h" /* timeThursday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* timeYear */])(d), d) + (Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* timeYear */])(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["d" /* timeMonday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* timeYear */])(d) - 1, d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatYearISO(d, p) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = day >= 4 || day === 0 ? Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["h" /* timeThursday */])(d) : __WEBPACK_IMPORTED_MODULE_0_d3_time__["h" /* timeThursday */].ceil(d);
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + __WEBPACK_IMPORTED_MODULE_0_d3_time__["m" /* utcDay */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["x" /* utcYear */])(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["s" /* utcSunday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["x" /* utcYear */])(d) - 1, d), p, 2);
}

function UTCdISO(d) {
  var day = d.getUTCDay();
  return day >= 4 || day === 0 ? Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* utcThursday */])(d) : __WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* utcThursday */].ceil(d);
}

function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* utcThursday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["x" /* utcYear */])(d), d) + (Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["x" /* utcYear */])(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["p" /* utcMonday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["x" /* utcYear */])(d) - 1, d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = day >= 4 || day === 0 ? Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* utcThursday */])(d) : __WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* utcThursday */].ceil(d);
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isoSpecifier; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultLocale_js__ = __webpack_require__(88);


var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
    return date.toISOString();
}

var formatIso = Date.prototype.toISOString ? formatIsoNative : Object(__WEBPACK_IMPORTED_MODULE_0__defaultLocale_js__["b" /* utcFormat */])(isoSpecifier);

/* unused harmony default export */ var _unused_webpack_default_export = (formatIso);

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = copy;
/* unused harmony export default */
/* unused harmony export sequentialLog */
/* unused harmony export sequentialSymlog */
/* unused harmony export sequentialPow */
/* unused harmony export sequentialSqrt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__continuous_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__init_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__linear_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__log_js__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__symlog_js__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pow_js__ = __webpack_require__(86);








function transformer() {
  var x0 = 0,
      x1 = 1,
      t0,
      t1,
      k10,
      transform,
      interpolator = __WEBPACK_IMPORTED_MODULE_1__continuous_js__["c" /* identity */],
      clamp = false,
      unknown;

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function (_) {
    return arguments.length ? ([x0, x1] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [x0, x1];
  };

  scale.clamp = function (_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function (_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  function range(interpolate) {
    return function (_) {
      var r0, r1;
      return arguments.length ? ([r0, r1] = _, interpolator = interpolate(r0, r1), scale) : [interpolator(0), interpolator(1)];
    };
  }

  scale.range = range(__WEBPACK_IMPORTED_MODULE_0_d3_interpolate__["a" /* interpolate */]);

  scale.rangeRound = range(__WEBPACK_IMPORTED_MODULE_0_d3_interpolate__["f" /* interpolateRound */]);

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function (t) {
    transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
    return scale;
  };
}

function copy(source, target) {
  return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
}

function sequential() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_3__linear_js__["a" /* linearish */])(transformer()(__WEBPACK_IMPORTED_MODULE_1__continuous_js__["c" /* identity */]));

  scale.copy = function () {
    return copy(scale, sequential());
  };

  return __WEBPACK_IMPORTED_MODULE_2__init_js__["a" /* initInterpolator */].apply(scale, arguments);
}

function sequentialLog() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_4__log_js__["a" /* loggish */])(transformer()).domain([1, 10]);

  scale.copy = function () {
    return copy(scale, sequentialLog()).base(scale.base());
  };

  return __WEBPACK_IMPORTED_MODULE_2__init_js__["a" /* initInterpolator */].apply(scale, arguments);
}

function sequentialSymlog() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_5__symlog_js__["a" /* symlogish */])(transformer());

  scale.copy = function () {
    return copy(scale, sequentialSymlog()).constant(scale.constant());
  };

  return __WEBPACK_IMPORTED_MODULE_2__init_js__["a" /* initInterpolator */].apply(scale, arguments);
}

function sequentialPow() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_6__pow_js__["a" /* powish */])(transformer());

  scale.copy = function () {
    return copy(scale, sequentialPow()).exponent(scale.exponent());
  };

  return __WEBPACK_IMPORTED_MODULE_2__init_js__["a" /* initInterpolator */].apply(scale, arguments);
}

function sequentialSqrt() {
  return sequentialPow.apply(null, arguments).exponent(0.5);
}

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__curve_linear_js__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__line_js__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__point_js__ = __webpack_require__(90);







/* harmony default export */ __webpack_exports__["a"] = (function (x0, y0, y1) {
  var x1 = null,
      defined = Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(true),
      context = null,
      curve = __WEBPACK_IMPORTED_MODULE_3__curve_linear_js__["a" /* default */],
      output = null;

  x0 = typeof x0 === "function" ? x0 : x0 === undefined ? __WEBPACK_IMPORTED_MODULE_5__point_js__["a" /* x */] : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(+x0);
  y0 = typeof y0 === "function" ? y0 : y0 === undefined ? Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(0) : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(+y0);
  y1 = typeof y1 === "function" ? y1 : y1 === undefined ? __WEBPACK_IMPORTED_MODULE_5__point_js__["b" /* y */] : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(+y1);

  function area(data) {
    var i,
        j,
        k,
        n = (data = Object(__WEBPACK_IMPORTED_MODULE_1__array_js__["a" /* default */])(data)).length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return Object(__WEBPACK_IMPORTED_MODULE_4__line_js__["a" /* default */])().defined(defined).curve(curve).context(context);
  }

  area.x = function (_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(+_), x1 = null, area) : x0;
  };

  area.x0 = function (_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(+_), area) : x0;
  };

  area.x1 = function (_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(+_), area) : x1;
  };

  area.y = function (_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(+_), y1 = null, area) : y0;
  };

  area.y0 = function (_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(+_), area) : y0;
  };

  area.y1 = function (_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(+_), area) : y1;
  };

  area.lineX0 = area.lineY0 = function () {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function () {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function () {
    return arealine().x(x1).y(y0);
  };

  area.defined = function (_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(!!_), area) : defined;
  };

  area.curve = function (_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function (_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
});

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return curveRadialLinear; });
/* harmony export (immutable) */ __webpack_exports__["b"] = curveRadial;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear_js__ = __webpack_require__(47);


var curveRadialLinear = curveRadial(__WEBPACK_IMPORTED_MODULE_0__linear_js__["a" /* default */]);

function Radial(curve) {
  this._curve = curve;
}

Radial.prototype = {
  areaStart: function () {
    this._curve.areaStart();
  },
  areaEnd: function () {
    this._curve.areaEnd();
  },
  lineStart: function () {
    this._curve.lineStart();
  },
  lineEnd: function () {
    this._curve.lineEnd();
  },
  point: function (a, r) {
    this._curve.point(r * Math.sin(a), r * -Math.cos(a));
  }
};

function curveRadial(curve) {

  function radial(context) {
    return new Radial(curve(context));
  }

  radial._curve = curve;

  return radial;
}

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = lineRadial;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curve_radial_js__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__line_js__ = __webpack_require__(89);



function lineRadial(l) {
  var c = l.curve;

  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;

  l.curve = function (_) {
    return arguments.length ? c(Object(__WEBPACK_IMPORTED_MODULE_0__curve_radial_js__["b" /* default */])(_)) : c()._curve;
  };

  return l;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return lineRadial(Object(__WEBPACK_IMPORTED_MODULE_1__line_js__["a" /* default */])().curve(__WEBPACK_IMPORTED_MODULE_0__curve_radial_js__["a" /* curveRadialLinear */]));
});

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x, y) {
  return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
});

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(29);


/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function (context, size) {
    var r = Math.sqrt(size / __WEBPACK_IMPORTED_MODULE_0__math_js__["j" /* pi */]);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, __WEBPACK_IMPORTED_MODULE_0__math_js__["m" /* tau */]);
  }
});

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function (context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
});

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var tan30 = Math.sqrt(1 / 3),
    tan30_2 = tan30 * 2;

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function (context, size) {
    var y = Math.sqrt(size / tan30_2),
        x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
});

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(29);


var ka = 0.89081309152928522810,
    kr = Math.sin(__WEBPACK_IMPORTED_MODULE_0__math_js__["j" /* pi */] / 10) / Math.sin(7 * __WEBPACK_IMPORTED_MODULE_0__math_js__["j" /* pi */] / 10),
    kx = Math.sin(__WEBPACK_IMPORTED_MODULE_0__math_js__["m" /* tau */] / 10) * kr,
    ky = -Math.cos(__WEBPACK_IMPORTED_MODULE_0__math_js__["m" /* tau */] / 10) * kr;

/* harmony default export */ __webpack_exports__["a"] = ({
    draw: function (context, size) {
        var r = Math.sqrt(size * ka),
            x = kx * r,
            y = ky * r;
        context.moveTo(0, -r);
        context.lineTo(x, y);
        for (var i = 1; i < 5; ++i) {
            var a = __WEBPACK_IMPORTED_MODULE_0__math_js__["m" /* tau */] * i / 5,
                c = Math.cos(a),
                s = Math.sin(a);
            context.lineTo(s * r, -c * r);
            context.lineTo(c * x - s * y, s * x + c * y);
        }
        context.closePath();
    }
});

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function (context, size) {
    var w = Math.sqrt(size),
        x = -w / 2;
    context.rect(x, x, w, w);
  }
});

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var sqrt3 = Math.sqrt(3);

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function (context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
});

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var c = -0.5,
    s = Math.sqrt(3) / 2,
    k = 1 / Math.sqrt(12),
    a = (k / 2 + 1) * 3;

/* harmony default export */ __webpack_exports__["a"] = ({
    draw: function (context, size) {
        var r = Math.sqrt(size / a),
            x0 = r / 2,
            y0 = r * k,
            x1 = x0,
            y1 = r * k + r,
            x2 = -x1,
            y2 = y1;
        context.moveTo(x0, y0);
        context.lineTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
        context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
        context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
        context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
        context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
        context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
        context.closePath();
    }
});

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CardinalClosed;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop_js__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cardinal_js__ = __webpack_require__(50);



function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_0__noop_js__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_0__noop_js__["a" /* default */],
  lineStart: function () {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function () {
    switch (this._point) {
      case 1:
        {
          this._context.moveTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
      case 2:
        {
          this._context.lineTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
      case 3:
        {
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          this.point(this._x5, this._y5);
          break;
        }
    }
  },
  point: function (x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;this._x3 = x, this._y3 = y;break;
      case 1:
        this._point = 2;this._context.moveTo(this._x4 = x, this._y4 = y);break;
      case 2:
        this._point = 3;this._x5 = x, this._y5 = y;break;
      default:
        Object(__WEBPACK_IMPORTED_MODULE_1__cardinal_js__["b" /* point */])(this, x, y);break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal.tension = function (tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CardinalOpen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinal_js__ = __webpack_require__(50);


function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalOpen.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function () {
    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function (x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;break;
      case 1:
        this._point = 2;break;
      case 2:
        this._point = 3;this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);break;
      case 3:
        this._point = 4; // proceed
      default:
        Object(__WEBPACK_IMPORTED_MODULE_0__cardinal_js__["b" /* point */])(this, x, y);break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal.tension = function (tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none_js__ = __webpack_require__(32);


/* harmony default export */ __webpack_exports__["a"] = (function (series) {
  var peaks = series.map(peak);
  return Object(__WEBPACK_IMPORTED_MODULE_0__none_js__["a" /* default */])(series).sort(function (a, b) {
    return peaks[a] - peaks[b];
  });
});

function peak(series) {
  var i = -1,
      j = 0,
      n = series.length,
      vi,
      vj = -Infinity;
  while (++i < n) if ((vi = +series[i][1]) > vj) vj = vi, j = i;
  return j;
}

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Transform;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return identity; });
/* unused harmony export default */
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}

Transform.prototype = {
  constructor: Transform,
  scale: function (k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function (x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function (point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function (x) {
    return x * this.k + this.x;
  },
  applyY: function (y) {
    return y * this.k + this.y;
  },
  invert: function (location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function (x) {
    return (x - this.x) / this.k;
  },
  invertY: function (y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function (x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function (y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function () {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};

var identity = new Transform(1, 0, 0);

transform.prototype = Transform.prototype;

function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return identity;
  return node.__zoom;
}

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__includeHTML__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hashRouter_js__ = __webpack_require__(232);
const axios = __webpack_require__(213);

// import Contours from './contour';



document.addEventListener("DOMContentLoaded", () => {
  // This code will render the correct HTML file according to
  // the hash.
  // TODO: this code assumes that the hash is a valid HTML filename
  const root = document.getElementById("root");
  if (window.location.hash) {
    root.setAttribute("include-html", window.location.hash.slice(2));
  }
  Object(__WEBPACK_IMPORTED_MODULE_0__includeHTML__["a" /* includeHTML */])();
});

// let isbn = '0201558025';
// axios.get(`/books/${isbn}`)
// .then((response) => {
//     console.log(response);
// })
// .catch(function (error) {
//     console.log(error);
// });

// let query = "grace hopper";
// axios.get(`/search?string=${query}`)
// .then((response) => {
//     console.log(response);
// })
// .catch(function (error) {
//     console.log(error);
// });

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(214);

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9);
var bind = __webpack_require__(93);
var Axios = __webpack_require__(216);
var defaults = __webpack_require__(51);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(97);
axios.CancelToken = __webpack_require__(230);
axios.isCancel = __webpack_require__(96);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(231);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/***/ }),
/* 215 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer(obj) {
  return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
};

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(51);
var utils = __webpack_require__(9);
var InterceptorManager = __webpack_require__(225);
var dispatchRequest = __webpack_require__(226);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, { method: 'get' }, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

/***/ }),
/* 217 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(95);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9);

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :

// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },

    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },

    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() :

// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9);
var transformData = __webpack_require__(227);
var isCancel = __webpack_require__(96);
var defaults = __webpack_require__(51);
var isAbsoluteURL = __webpack_require__(228);
var combineURLs = __webpack_require__(229);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(config.data, config.headers, config.transformRequest);

  // Flatten headers
  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(response.data, response.headers, config.transformResponse);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
  );
};

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(97);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__includeHTML__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__show_heatmap__ = __webpack_require__(233);



// This is essentially a a router. If the hash of the window location
// changes, this file will attempt to load the appropriate HTML file
// and apply whatever set up is required with a `then` statement
window.onhashchange = () => {
  const root = document.getElementById("root");
  root.setAttribute("include-html", window.location.hash.slice(2));

  switch (window.location.hash.slice(2)) {
    case "heatmap":
      Object(__WEBPACK_IMPORTED_MODULE_0__includeHTML__["a" /* includeHTML */])().then(() => {
        Object(__WEBPACK_IMPORTED_MODULE_1__show_heatmap__["a" /* drawHeatMap */])();
      });
      return;
    default:
      return;
  }
};

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = drawHeatMap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__heatmap_background__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scatter__ = __webpack_require__(589);




const CONSTANTS = {
  shoulderWidth: 900,
  headHeight: 800
};

// export const showHeatMap = function () {
//   const showButton = document.getElementById("show-heatmap");
//   const modal = document.querySelector(".heat-map-modal");
//   const backdrop = document.querySelector(".backdrop");

//   showButton.addEventListener("click", function () {
//     modal.style.display = "block";
//     backdrop.style.display = "block";
//   });

//   const showAnchor = document.getElementById("anchor-show-heatmap");

//   showAnchor.addEventListener("click", function () {
//     modal.style.display = "block";
//     backdrop.style.display = "block";
//   });
// };

function drawHeatMap() {
  let svg = __WEBPACK_IMPORTED_MODULE_1_d3__["a" /* select */](".heat-map-modal").append("svg").attr("width", CONSTANTS.shoulderWidth).attr("height", CONSTANTS.headHeight);

  const heatmap = new __WEBPACK_IMPORTED_MODULE_0__heatmap_background__["a" /* default */](svg);
  heatmap.render();

  const hexes = new __WEBPACK_IMPORTED_MODULE_2__scatter__["a" /* default */](svg);
  hexes.render();
}

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class HeatmapBackground {
  constructor(svg) {
    this.svg = svg;
  }

  render() {
    // container dimensions
    const shoulderWidth = 900;
    const headHeight = 600;

    // black background
    this.svg.append("rect").attr("x", 0).attr("y", 0).attr("width", shoulderWidth).attr("height", headHeight).attr("background", "url('./images/body_outline.jpg')").attr("fill", "transparent");

    // legend - minor
    this.svg.append("rect").attr("x", 800).attr("y", 550).attr("width", 50).attr("height", 12).attr("fill", "#c64756");

    this.svg.append("text").attr("x", 758).attr("y", 555).attr("font-size", 14).attr("dy", ".35em").attr("font-family", "Oswald").text("Minor").style("fill", "#D5D5D5");

    // legend - moderate
    this.svg.append("rect").attr("x", 800).attr("y", 530).attr("width", 50).attr("height", 12).attr("fill", "#7b113a");

    this.svg.append("text").attr("x", 740).attr("y", 535).attr("dy", ".35em").attr("font-size", 14).attr("font-family", "Oswald").text("Moderate").style("fill", "#D5D5D5");

    // legend - severe
    this.svg.append("rect").attr("x", 800).attr("y", 510).attr("width", 50).attr("height", 12).attr("fill", "#301b3f");

    this.svg.append("text").attr("x", 755).attr("y", 515).attr("dy", ".35em").attr("font-size", 14).attr("font-family", "Oswald").text("Severe").style("fill", "#D5D5D5");
  }
}

/* harmony default export */ __webpack_exports__["a"] = (HeatmapBackground);

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_package_js__ = __webpack_require__(236);
/* unused harmony reexport version */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_array__ = __webpack_require__(3);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_axis__ = __webpack_require__(271);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_brush__ = __webpack_require__(275);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_chord__ = __webpack_require__(371);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3_color__ = __webpack_require__(12);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_d3_contour__ = __webpack_require__(377);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_d3_delaunay__ = __webpack_require__(384);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_d3_dispatch__ = __webpack_require__(23);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_d3_drag__ = __webpack_require__(55);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_d3_dsv__ = __webpack_require__(147);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_d3_ease__ = __webpack_require__(138);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_d3_fetch__ = __webpack_require__(390);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_d3_force__ = __webpack_require__(397);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_d3_format__ = __webpack_require__(72);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_d3_geo__ = __webpack_require__(429);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_d3_hierarchy__ = __webpack_require__(458);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__ = __webpack_require__(10);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_d3_path__ = __webpack_require__(20);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_d3_polygon__ = __webpack_require__(481);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_d3_quadtree__ = __webpack_require__(69);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_d3_random__ = __webpack_require__(488);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_d3_scale__ = __webpack_require__(501);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__ = __webpack_require__(514);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_d3_selection__ = __webpack_require__(7);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_selection__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_d3_shape__ = __webpack_require__(558);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_d3_time__ = __webpack_require__(46);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_d3_time_format__ = __webpack_require__(87);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_d3_timer__ = __webpack_require__(38);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_d3_transition__ = __webpack_require__(65);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_d3_zoom__ = __webpack_require__(584);
/* unused harmony namespace reexport */
































/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export version */
/* unused harmony export description */
/* unused harmony export keywords */
/* unused harmony export homepage */
/* unused harmony export license */
/* unused harmony export author */
/* unused harmony export main */
/* unused harmony export unpkg */
/* unused harmony export jsdelivr */
/* unused harmony export module */
/* unused harmony export repository */
/* unused harmony export files */
/* unused harmony export scripts */
/* unused harmony export devDependencies */
/* unused harmony export dependencies */
var name = "d3";
var version = "6.7.0";
var description = "Data-Driven Documents";
var keywords = ["dom", "visualization", "svg", "animation", "canvas"];
var homepage = "https://d3js.org";
var license = "BSD-3-Clause";
var author = { "name": "Mike Bostock", "url": "https://bost.ocks.org/mike" };
var main = "dist/d3.node.js";
var unpkg = "dist/d3.min.js";
var jsdelivr = "dist/d3.min.js";
var module = "index.js";
var repository = { "type": "git", "url": "https://github.com/d3/d3.git" };
var files = ["dist/**/*.js", "index.js"];
var scripts = { "pretest": "rimraf dist && mkdir dist && json2module package.json > dist/package.js && rollup -c", "test": "tape 'test/**/*-test.js'", "prepublishOnly": "yarn test", "postpublish": "git push && git push --tags && cd ../d3.github.com && git pull && cp ../d3/dist/d3.js d3.v${npm_package_version%%.*}.js && cp ../d3/dist/d3.min.js d3.v${npm_package_version%%.*}.min.js && git add d3.v${npm_package_version%%.*}.js d3.v${npm_package_version%%.*}.min.js && git commit -m \"d3 ${npm_package_version}\" && git push && cd - && zip -j dist/d3.zip -- LICENSE README.md API.md CHANGES.md dist/d3.js dist/d3.min.js" };
var devDependencies = { "json2module": "0.0", "rimraf": "3", "rollup": "2", "rollup-plugin-ascii": "0.0", "rollup-plugin-node-resolve": "5", "rollup-plugin-terser": "7", "tape": "4", "tape-await": "0.1" };
var dependencies = { "d3-array": "2", "d3-axis": "2", "d3-brush": "2", "d3-chord": "2", "d3-color": "2", "d3-contour": "2", "d3-delaunay": "5", "d3-dispatch": "2", "d3-drag": "2", "d3-dsv": "2", "d3-ease": "2", "d3-fetch": "2", "d3-force": "2", "d3-format": "2", "d3-geo": "2", "d3-hierarchy": "2", "d3-interpolate": "2", "d3-path": "2", "d3-polygon": "2", "d3-quadtree": "2", "d3-random": "2", "d3-scale": "3", "d3-scale-chromatic": "2", "d3-selection": "2", "d3-shape": "2", "d3-time": "2", "d3-time-format": "3", "d3-timer": "2", "d3-transition": "2", "d3-zoom": "2" };

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function length(array) {
  return array.length | 0;
}

function empty(length) {
  return !(length > 0);
}

function arrayify(values) {
  return typeof values !== "object" || "length" in values ? values : Array.from(values);
}

function reducer(reduce) {
  return values => reduce(...values);
}

function cross(...values) {
  const reduce = typeof values[values.length - 1] === "function" && reducer(values.pop());
  values = values.map(arrayify);
  const lengths = values.map(length);
  const j = values.length - 1;
  const index = new Array(j + 1).fill(0);
  const product = [];
  if (j < 0 || lengths.some(empty)) return product;
  while (true) {
    product.push(index.map((j, i) => values[i][j]));
    let i = j;
    while (++index[i] === lengths[i]) {
      if (i === 0) return reduce ? product.map(reduce) : product;
      index[i--] = 0;
    }
  }
}

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function cumsum(values, valueof) {
  var sum = 0,
      index = 0;
  return Float64Array.from(values, valueof === undefined ? v => sum += +v || 0 : v => sum += +valueof(v, index++, values) || 0);
}

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function (a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fsum */
/* unused harmony export fcumsum */
// https://github.com/python/cpython/blob/a74eea238f5baba15797e2e8b570d153bc8690a7/Modules/mathmodule.c#L1423
class Adder {
  constructor() {
    this._partials = new Float64Array(32);
    this._n = 0;
  }
  add(x) {
    const p = this._partials;
    let i = 0;
    for (let j = 0; j < this._n && j < 32; j++) {
      const y = p[j],
            hi = x + y,
            lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);
      if (lo) p[i++] = lo;
      x = hi;
    }
    p[i] = x;
    this._n = i + 1;
    return this;
  }
  valueOf() {
    const p = this._partials;
    let n = this._n,
        x,
        y,
        lo,
        hi = 0;
    if (n > 0) {
      hi = p[--n];
      while (n > 0) {
        x = hi;
        y = p[--n];
        hi = x + y;
        lo = y - (hi - x);
        if (lo) break;
      }
      if (n > 0 && (lo < 0 && p[n - 1] < 0 || lo > 0 && p[n - 1] > 0)) {
        y = lo * 2;
        x = hi + y;
        if (y == x - hi) hi = x;
      }
    }
    return hi;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Adder;


function fsum(values, valueof) {
  const adder = new Adder();
  if (valueof === undefined) {
    for (let value of values) {
      if (value = +value) {
        adder.add(value);
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if (value = +valueof(value, ++index, values)) {
        adder.add(value);
      }
    }
  }
  return +adder;
}

function fcumsum(values, valueof) {
  const adder = new Adder();
  let index = -1;
  return Float64Array.from(values, valueof === undefined ? v => adder.add(+v || 0) : v => adder.add(+valueof(v, ++index, values) || 0));
}

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__group_js__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort_js__ = __webpack_require__(108);




function groupSort(values, reduce, key) {
  return (reduce.length === 1 ? Object(__WEBPACK_IMPORTED_MODULE_2__sort_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__group_js__["b" /* rollup */])(values, reduce, key), ([ak, av], [bk, bv]) => Object(__WEBPACK_IMPORTED_MODULE_0__ascending_js__["a" /* default */])(av, bv) || Object(__WEBPACK_IMPORTED_MODULE_0__ascending_js__["a" /* default */])(ak, bk)) : Object(__WEBPACK_IMPORTED_MODULE_2__sort_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__group_js__["a" /* default */])(values, key), ([ak, av], [bk, bv]) => reduce(av, bv) || Object(__WEBPACK_IMPORTED_MODULE_0__ascending_js__["a" /* default */])(ak, bk))).map(([key]) => key);
}

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_js__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisect_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant_js__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extent_js__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity_js__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nice_js__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ticks_js__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__threshold_sturges_js__ = __webpack_require__(111);









/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var value = __WEBPACK_IMPORTED_MODULE_4__identity_js__["a" /* default */],
      domain = __WEBPACK_IMPORTED_MODULE_3__extent_js__["a" /* default */],
      threshold = __WEBPACK_IMPORTED_MODULE_7__threshold_sturges_js__["a" /* default */];

  function histogram(data) {
    if (!Array.isArray(data)) data = Array.from(data);

    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds, and nice the
    // default domain accordingly.
    if (!Array.isArray(tz)) {
      const max = x1,
            tn = +tz;
      if (domain === __WEBPACK_IMPORTED_MODULE_3__extent_js__["a" /* default */]) [x0, x1] = Object(__WEBPACK_IMPORTED_MODULE_5__nice_js__["a" /* default */])(x0, x1, tn);
      tz = Object(__WEBPACK_IMPORTED_MODULE_6__ticks_js__["a" /* default */])(x0, x1, tn);

      // If the last threshold is coincident with the domain’s upper bound, the
      // last bin will be zero-width. If the default domain is used, and this
      // last threshold is coincident with the maximum input value, we can
      // extend the niced upper bound by one tick to ensure uniform bin widths;
      // otherwise, we simply remove the last threshold. Note that we don’t
      // coerce values or the domain to numbers, and thus must be careful to
      // compare order (>=) rather than strict equality (===)!
      if (tz[tz.length - 1] >= x1) {
        if (max >= x1 && domain === __WEBPACK_IMPORTED_MODULE_3__extent_js__["a" /* default */]) {
          const step = Object(__WEBPACK_IMPORTED_MODULE_6__ticks_js__["b" /* tickIncrement */])(x0, x1, tn);
          if (isFinite(step)) {
            if (step > 0) {
              x1 = (Math.floor(x1 / step) + 1) * step;
            } else if (step < 0) {
              x1 = (Math.ceil(x1 * -step) + 1) / -step;
            }
          }
        } else {
          tz.pop();
        }
      }
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[Object(__WEBPACK_IMPORTED_MODULE_1__bisect_js__["a" /* default */])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function (_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(_), histogram) : value;
  };

  histogram.domain = function (_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function (_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array_js__["a" /* slice */].call(_)) : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(_), histogram) : threshold;
  };

  return histogram;
});

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slice; });
/* unused harmony export map */
var array = Array.prototype;

var slice = array.slice;
var map = array.map;

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return function () {
    return x;
  };
});

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__count_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quantile_js__ = __webpack_require__(53);



/* unused harmony default export */ var _unused_webpack_default_export = (function (values, min, max) {
  return Math.ceil((max - min) / (2 * (Object(__WEBPACK_IMPORTED_MODULE_1__quantile_js__["a" /* default */])(values, 0.75) - Object(__WEBPACK_IMPORTED_MODULE_1__quantile_js__["a" /* default */])(values, 0.25)) * Math.pow(Object(__WEBPACK_IMPORTED_MODULE_0__count_js__["a" /* default */])(values), -1 / 3)));
});

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__count_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deviation_js__ = __webpack_require__(102);



/* unused harmony default export */ var _unused_webpack_default_export = (function (values, min, max) {
  return Math.ceil((max - min) / (3.5 * Object(__WEBPACK_IMPORTED_MODULE_1__deviation_js__["a" /* default */])(values) * Math.pow(Object(__WEBPACK_IMPORTED_MODULE_0__count_js__["a" /* default */])(values), -1 / 3)));
});

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function mean(values, valueof) {
  let count = 0;
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        ++count, sum += value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        ++count, sum += value;
      }
    }
  }
  if (count) return sum / count;
}

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quantile_js__ = __webpack_require__(53);


/* unused harmony default export */ var _unused_webpack_default_export = (function (values, valueof) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__quantile_js__["a" /* default */])(values, 0.5, valueof);
});

/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = merge;
function* flatten(arrays) {
  for (const array of arrays) {
    yield* array;
  }
}

function merge(arrays) {
  return Array.from(flatten(arrays));
}

/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* unused harmony export pair */
function pairs(values, pairof = pair) {
  const pairs = [];
  let previous;
  let first = false;
  for (const value of values) {
    if (first) pairs.push(pairof(previous, value));
    previous = value;
    first = true;
  }
  return pairs;
}

function pair(a, b) {
  return [a, b];
}

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});

/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending_js__ = __webpack_require__(14);


function least(values, compare = __WEBPACK_IMPORTED_MODULE_0__ascending_js__["a" /* default */]) {
  let min;
  let defined = false;
  if (compare.length === 1) {
    let minValue;
    for (const element of values) {
      const value = compare(element);
      if (defined ? Object(__WEBPACK_IMPORTED_MODULE_0__ascending_js__["a" /* default */])(value, minValue) < 0 : Object(__WEBPACK_IMPORTED_MODULE_0__ascending_js__["a" /* default */])(value, value) === 0) {
        min = element;
        minValue = value;
        defined = true;
      }
    }
  } else {
    for (const value of values) {
      if (defined ? compare(value, min) < 0 : compare(value, value) === 0) {
        min = value;
        defined = true;
      }
    }
  }
  return min;
}

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending_js__ = __webpack_require__(14);


function greatest(values, compare = __WEBPACK_IMPORTED_MODULE_0__ascending_js__["a" /* default */]) {
  let max;
  let defined = false;
  if (compare.length === 1) {
    let maxValue;
    for (const element of values) {
      const value = compare(element);
      if (defined ? Object(__WEBPACK_IMPORTED_MODULE_0__ascending_js__["a" /* default */])(value, maxValue) > 0 : Object(__WEBPACK_IMPORTED_MODULE_0__ascending_js__["a" /* default */])(value, value) === 0) {
        max = element;
        maxValue = value;
        defined = true;
      }
    }
  } else {
    for (const value of values) {
      if (defined ? compare(value, max) > 0 : compare(value, value) === 0) {
        max = value;
        defined = true;
      }
    }
  }
  return max;
}

/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__maxIndex_js__ = __webpack_require__(114);



function greatestIndex(values, compare = __WEBPACK_IMPORTED_MODULE_0__ascending_js__["a" /* default */]) {
  if (compare.length === 1) return Object(__WEBPACK_IMPORTED_MODULE_1__maxIndex_js__["a" /* default */])(values, compare);
  let maxValue;
  let max = -1;
  let index = -1;
  for (const value of values) {
    ++index;
    if (max < 0 ? compare(value, value) === 0 : compare(value, maxValue) > 0) {
      maxValue = value;
      max = index;
    }
  }
  return max;
}

/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__leastIndex_js__ = __webpack_require__(116);


function scan(values, compare) {
  const index = Object(__WEBPACK_IMPORTED_MODULE_0__leastIndex_js__["a" /* default */])(values, compare);
  return index < 0 ? undefined : index;
}

/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export shuffler */
/* unused harmony default export */ var _unused_webpack_default_export = (shuffler(Math.random));

function shuffler(random) {
  return function shuffle(array, i0 = 0, i1 = array.length) {
    let m = i1 - (i0 = +i0);
    while (m) {
      const i = random() * m-- | 0,
            t = array[m + i0];
      array[m + i0] = array[i + i0];
      array[i + i0] = t;
    }
    return array;
  };
}

/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function sum(values, valueof) {
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value = +value) {
        sum += value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if (value = +valueof(value, ++index, values)) {
        sum += value;
      }
    }
  }
  return sum;
}

/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transpose_js__ = __webpack_require__(117);


/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_0__transpose_js__["a" /* default */])(arguments);
});

/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function every(values, test) {
  if (typeof test !== "function") throw new TypeError("test is not a function");
  let index = -1;
  for (const value of values) {
    if (!test(value, ++index, values)) {
      return false;
    }
  }
  return true;
}

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function some(values, test) {
  if (typeof test !== "function") throw new TypeError("test is not a function");
  let index = -1;
  for (const value of values) {
    if (test(value, ++index, values)) {
      return true;
    }
  }
  return false;
}

/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function filter(values, test) {
  if (typeof test !== "function") throw new TypeError("test is not a function");
  const array = [];
  let index = -1;
  for (const value of values) {
    if (test(value, ++index, values)) {
      array.push(value);
    }
  }
  return array;
}

/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function map(values, mapper) {
  if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
  if (typeof mapper !== "function") throw new TypeError("mapper is not a function");
  return Array.from(values, (value, index) => mapper(value, index, values));
}

/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function reduce(values, reducer, value) {
  if (typeof reducer !== "function") throw new TypeError("reducer is not a function");
  const iterator = values[Symbol.iterator]();
  let done,
      next,
      index = -1;
  if (arguments.length < 3) {
    ({ done, value } = iterator.next());
    if (done) return;
    ++index;
  }
  while (({ done, value: next } = iterator.next()), !done) {
    value = reducer(value, next, ++index, values);
  }
  return value;
}

/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function reverse(values) {
  if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
  return Array.from(values).reverse();
}

/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function difference(values, ...others) {
  values = new Set(values);
  for (const other of others) {
    for (const value of other) {
      values.delete(value);
    }
  }
  return values;
}

/***/ }),
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function disjoint(values, other) {
  const iterator = other[Symbol.iterator](),
        set = new Set();
  for (const v of values) {
    if (set.has(v)) return false;
    let value, done;
    while (({ value, done } = iterator.next())) {
      if (done) break;
      if (Object.is(v, value)) return false;
      set.add(value);
    }
  }
  return true;
}

/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__set_js__ = __webpack_require__(268);


function intersection(values, ...others) {
  values = new Set(values);
  others = others.map(__WEBPACK_IMPORTED_MODULE_0__set_js__["a" /* default */]);
  out: for (const value of values) {
    for (const other of others) {
      if (!other.has(value)) {
        values.delete(value);
        continue out;
      }
    }
  }
  return values;
}

/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = set;
function set(values) {
  return values instanceof Set ? values : new Set(values);
}

/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__superset_js__ = __webpack_require__(118);


function subset(values, other) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__superset_js__["a" /* default */])(other, values);
}

/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function union(...others) {
  const set = new Set();
  for (const other of others) {
    for (const o of other) {
      set.add(o);
    }
  }
  return set;
}

/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__axis_js__ = __webpack_require__(272);
/* unused harmony reexport axisTop */
/* unused harmony reexport axisRight */
/* unused harmony reexport axisBottom */
/* unused harmony reexport axisLeft */


/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export axisTop */
/* unused harmony export axisRight */
/* unused harmony export axisBottom */
/* unused harmony export axisLeft */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_js__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity_js__ = __webpack_require__(274);



var top = 1,
    right = 2,
    bottom = 3,
    left = 4,
    epsilon = 1e-6;

function translateX(x) {
  return "translate(" + x + ",0)";
}

function translateY(y) {
  return "translate(0," + y + ")";
}

function number(scale) {
  return d => +scale(d);
}

function center(scale, offset) {
  offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
  if (scale.round()) offset = Math.round(offset);
  return d => +scale(d) + offset;
}

function entering() {
  return !this.__axis;
}

function axis(orient, scale) {
  var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5,
      k = orient === top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === top || orient === bottom ? translateX : translateY;

  function axis(context) {
    var values = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues,
        format = tickFormat == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : __WEBPACK_IMPORTED_MODULE_1__identity_js__["a" /* default */] : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = +range[0] + offset,
        range1 = +range[range.length - 1] + offset,
        position = (scale.bandwidth ? center : number)(scale.copy(), offset),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");

    path = path.merge(path.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));

    tick = tick.merge(tickEnter);

    line = line.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x + "2", k * tickSizeInner));

    text = text.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x, k * spacing).attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

    if (context !== selection) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);

      tickExit = tickExit.transition(context).attr("opacity", epsilon).attr("transform", function (d) {
        return isFinite(d = position(d)) ? transform(d + offset) : this.getAttribute("transform");
      });

      tickEnter.attr("opacity", epsilon).attr("transform", function (d) {
        var p = this.parentNode.__axis;return transform((p && isFinite(p = p(d)) ? p : position(d)) + offset);
      });
    }

    tickExit.remove();

    path.attr("d", orient === left || orient === right ? tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1);

    tick.attr("opacity", 1).attr("transform", function (d) {
      return transform(position(d) + offset);
    });

    line.attr(x + "2", k * tickSizeInner);

    text.attr(x, k * spacing).text(format);

    selection.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");

    selection.each(function () {
      this.__axis = position;
    });
  }

  axis.scale = function (_) {
    return arguments.length ? (scale = _, axis) : scale;
  };

  axis.ticks = function () {
    return tickArguments = __WEBPACK_IMPORTED_MODULE_0__array_js__["a" /* slice */].call(arguments), axis;
  };

  axis.tickArguments = function (_) {
    return arguments.length ? (tickArguments = _ == null ? [] : __WEBPACK_IMPORTED_MODULE_0__array_js__["a" /* slice */].call(_), axis) : tickArguments.slice();
  };

  axis.tickValues = function (_) {
    return arguments.length ? (tickValues = _ == null ? null : __WEBPACK_IMPORTED_MODULE_0__array_js__["a" /* slice */].call(_), axis) : tickValues && tickValues.slice();
  };

  axis.tickFormat = function (_) {
    return arguments.length ? (tickFormat = _, axis) : tickFormat;
  };

  axis.tickSize = function (_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
  };

  axis.tickSizeInner = function (_) {
    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
  };

  axis.tickSizeOuter = function (_) {
    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
  };

  axis.tickPadding = function (_) {
    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
  };

  axis.offset = function (_) {
    return arguments.length ? (offset = +_, axis) : offset;
  };

  return axis;
}

function axisTop(scale) {
  return axis(top, scale);
}

function axisRight(scale) {
  return axis(right, scale);
}

function axisBottom(scale) {
  return axis(bottom, scale);
}

function axisLeft(scale) {
  return axis(left, scale);
}

/***/ }),
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slice; });
var slice = Array.prototype.slice;

/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return x;
});

/***/ }),
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brush_js__ = __webpack_require__(276);
/* unused harmony reexport brush */
/* unused harmony reexport brushX */
/* unused harmony reexport brushY */
/* unused harmony reexport brushSelection */


/***/ }),
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export brushSelection */
/* unused harmony export brushX */
/* unused harmony export brushY */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dispatch__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_drag__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_interpolate__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_selection__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_transition__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constant_js__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_js__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__noevent_js__ = __webpack_require__(370);









var MODE_DRAG = { name: "drag" },
    MODE_SPACE = { name: "space" },
    MODE_HANDLE = { name: "handle" },
    MODE_CENTER = { name: "center" };

const { abs, max, min } = Math;

function number1(e) {
  return [+e[0], +e[1]];
}

function number2(e) {
  return [number1(e[0]), number1(e[1])];
}

var X = {
  name: "x",
  handles: ["w", "e"].map(type),
  input: function (x, e) {
    return x == null ? null : [[+x[0], e[0][1]], [+x[1], e[1][1]]];
  },
  output: function (xy) {
    return xy && [xy[0][0], xy[1][0]];
  }
};

var Y = {
  name: "y",
  handles: ["n", "s"].map(type),
  input: function (y, e) {
    return y == null ? null : [[e[0][0], +y[0]], [e[1][0], +y[1]]];
  },
  output: function (xy) {
    return xy && [xy[0][1], xy[1][1]];
  }
};

var XY = {
  name: "xy",
  handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
  input: function (xy) {
    return xy == null ? null : number2(xy);
  },
  output: function (xy) {
    return xy;
  }
};

var cursors = {
  overlay: "crosshair",
  selection: "move",
  n: "ns-resize",
  e: "ew-resize",
  s: "ns-resize",
  w: "ew-resize",
  nw: "nwse-resize",
  ne: "nesw-resize",
  se: "nwse-resize",
  sw: "nesw-resize"
};

var flipX = {
  e: "w",
  w: "e",
  nw: "ne",
  ne: "nw",
  se: "sw",
  sw: "se"
};

var flipY = {
  n: "s",
  s: "n",
  nw: "sw",
  ne: "se",
  se: "ne",
  sw: "nw"
};

var signsX = {
  overlay: +1,
  selection: +1,
  n: null,
  e: +1,
  s: null,
  w: -1,
  nw: -1,
  ne: +1,
  se: +1,
  sw: -1
};

var signsY = {
  overlay: +1,
  selection: +1,
  n: -1,
  e: null,
  s: +1,
  w: null,
  nw: -1,
  ne: -1,
  se: +1,
  sw: +1
};

function type(t) {
  return { type: t };
}

// Ignore right-click, since that should open the context menu.
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}

function defaultExtent() {
  var svg = this.ownerSVGElement || this;
  if (svg.hasAttribute("viewBox")) {
    svg = svg.viewBox.baseVal;
    return [[svg.x, svg.y], [svg.x + svg.width, svg.y + svg.height]];
  }
  return [[0, 0], [svg.width.baseVal.value, svg.height.baseVal.value]];
}

function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}

// Like d3.local, but with the name “__brush” rather than auto-generated.
function local(node) {
  while (!node.__brush) if (!(node = node.parentNode)) return;
  return node.__brush;
}

function empty(extent) {
  return extent[0][0] === extent[1][0] || extent[0][1] === extent[1][1];
}

function brushSelection(node) {
  var state = node.__brush;
  return state ? state.dim.output(state.selection) : null;
}

function brushX() {
  return brush(X);
}

function brushY() {
  return brush(Y);
}

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return brush(XY);
});

function brush(dim) {
  var extent = defaultExtent,
      filter = defaultFilter,
      touchable = defaultTouchable,
      keys = true,
      listeners = Object(__WEBPACK_IMPORTED_MODULE_0_d3_dispatch__["a" /* dispatch */])("start", "brush", "end"),
      handleSize = 6,
      touchending;

  function brush(group) {
    var overlay = group.property("__brush", initialize).selectAll(".overlay").data([type("overlay")]);

    overlay.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", cursors.overlay).merge(overlay).each(function () {
      var extent = local(this).extent;
      Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */])(this).attr("x", extent[0][0]).attr("y", extent[0][1]).attr("width", extent[1][0] - extent[0][0]).attr("height", extent[1][1] - extent[0][1]);
    });

    group.selectAll(".selection").data([type("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", cursors.selection).attr("fill", "#777").attr("fill-opacity", 0.3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");

    var handle = group.selectAll(".handle").data(dim.handles, function (d) {
      return d.type;
    });

    handle.exit().remove();

    handle.enter().append("rect").attr("class", function (d) {
      return "handle handle--" + d.type;
    }).attr("cursor", function (d) {
      return cursors[d.type];
    });

    group.each(redraw).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", started).filter(touchable).on("touchstart.brush", started).on("touchmove.brush", touchmoved).on("touchend.brush touchcancel.brush", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  brush.move = function (group, selection) {
    if (group.tween) {
      group.on("start.brush", function (event) {
        emitter(this, arguments).beforestart().start(event);
      }).on("interrupt.brush end.brush", function (event) {
        emitter(this, arguments).end(event);
      }).tween("brush", function () {
        var that = this,
            state = that.__brush,
            emit = emitter(that, arguments),
            selection0 = state.selection,
            selection1 = dim.input(typeof selection === "function" ? selection.apply(this, arguments) : selection, state.extent),
            i = Object(__WEBPACK_IMPORTED_MODULE_2_d3_interpolate__["a" /* interpolate */])(selection0, selection1);

        function tween(t) {
          state.selection = t === 1 && selection1 === null ? null : i(t);
          redraw.call(that);
          emit.brush();
        }

        return selection0 !== null && selection1 !== null ? tween : tween(1);
      });
    } else {
      group.each(function () {
        var that = this,
            args = arguments,
            state = that.__brush,
            selection1 = dim.input(typeof selection === "function" ? selection.apply(that, args) : selection, state.extent),
            emit = emitter(that, args).beforestart();

        Object(__WEBPACK_IMPORTED_MODULE_4_d3_transition__["a" /* interrupt */])(that);
        state.selection = selection1 === null ? null : selection1;
        redraw.call(that);
        emit.start().brush().end();
      });
    }
  };

  brush.clear = function (group) {
    brush.move(group, null);
  };

  function redraw() {
    var group = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */])(this),
        selection = local(this).selection;

    if (selection) {
      group.selectAll(".selection").style("display", null).attr("x", selection[0][0]).attr("y", selection[0][1]).attr("width", selection[1][0] - selection[0][0]).attr("height", selection[1][1] - selection[0][1]);

      group.selectAll(".handle").style("display", null).attr("x", function (d) {
        return d.type[d.type.length - 1] === "e" ? selection[1][0] - handleSize / 2 : selection[0][0] - handleSize / 2;
      }).attr("y", function (d) {
        return d.type[0] === "s" ? selection[1][1] - handleSize / 2 : selection[0][1] - handleSize / 2;
      }).attr("width", function (d) {
        return d.type === "n" || d.type === "s" ? selection[1][0] - selection[0][0] + handleSize : handleSize;
      }).attr("height", function (d) {
        return d.type === "e" || d.type === "w" ? selection[1][1] - selection[0][1] + handleSize : handleSize;
      });
    } else {
      group.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
    }
  }

  function emitter(that, args, clean) {
    var emit = that.__brush.emitter;
    return emit && (!clean || !emit.clean) ? emit : new Emitter(that, args, clean);
  }

  function Emitter(that, args, clean) {
    this.that = that;
    this.args = args;
    this.state = that.__brush;
    this.active = 0;
    this.clean = clean;
  }

  Emitter.prototype = {
    beforestart: function () {
      if (++this.active === 1) this.state.emitter = this, this.starting = true;
      return this;
    },
    start: function (event, mode) {
      if (this.starting) this.starting = false, this.emit("start", event, mode);else this.emit("brush", event);
      return this;
    },
    brush: function (event, mode) {
      this.emit("brush", event, mode);
      return this;
    },
    end: function (event, mode) {
      if (--this.active === 0) delete this.state.emitter, this.emit("end", event, mode);
      return this;
    },
    emit: function (type, event, mode) {
      var d = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */])(this.that).datum();
      listeners.call(type, this.that, new __WEBPACK_IMPORTED_MODULE_6__event_js__["a" /* default */](type, {
        sourceEvent: event,
        target: brush,
        selection: dim.output(this.state.selection),
        mode,
        dispatch: listeners
      }), d);
    }
  };

  function started(event) {
    if (touchending && !event.touches) return;
    if (!filter.apply(this, arguments)) return;

    var that = this,
        type = event.target.__data__.type,
        mode = (keys && event.metaKey ? type = "overlay" : type) === "selection" ? MODE_DRAG : keys && event.altKey ? MODE_CENTER : MODE_HANDLE,
        signX = dim === Y ? null : signsX[type],
        signY = dim === X ? null : signsY[type],
        state = local(that),
        extent = state.extent,
        selection = state.selection,
        W = extent[0][0],
        w0,
        w1,
        N = extent[0][1],
        n0,
        n1,
        E = extent[1][0],
        e0,
        e1,
        S = extent[1][1],
        s0,
        s1,
        dx = 0,
        dy = 0,
        moving,
        shifting = signX && signY && keys && event.shiftKey,
        lockX,
        lockY,
        points = Array.from(event.touches || [event], t => {
      const i = t.identifier;
      t = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* pointer */])(t, that);
      t.point0 = t.slice();
      t.identifier = i;
      return t;
    });

    if (type === "overlay") {
      if (selection) moving = true;
      const pts = [points[0], points[1] || points[0]];
      state.selection = selection = [[w0 = dim === Y ? W : min(pts[0][0], pts[1][0]), n0 = dim === X ? N : min(pts[0][1], pts[1][1])], [e0 = dim === Y ? E : max(pts[0][0], pts[1][0]), s0 = dim === X ? S : max(pts[0][1], pts[1][1])]];
      if (points.length > 1) move();
    } else {
      w0 = selection[0][0];
      n0 = selection[0][1];
      e0 = selection[1][0];
      s0 = selection[1][1];
    }

    w1 = w0;
    n1 = n0;
    e1 = e0;
    s1 = s0;

    var group = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */])(that).attr("pointer-events", "none");

    var overlay = group.selectAll(".overlay").attr("cursor", cursors[type]);

    Object(__WEBPACK_IMPORTED_MODULE_4_d3_transition__["a" /* interrupt */])(that);
    var emit = emitter(that, arguments, true).beforestart();

    if (event.touches) {
      emit.moved = moved;
      emit.ended = ended;
    } else {
      var view = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */])(event.view).on("mousemove.brush", moved, true).on("mouseup.brush", ended, true);
      if (keys) view.on("keydown.brush", keydowned, true).on("keyup.brush", keyupped, true);

      Object(__WEBPACK_IMPORTED_MODULE_1_d3_drag__["a" /* dragDisable */])(event.view);
    }

    redraw.call(that);
    emit.start(event, mode.name);

    function moved(event) {
      for (const p of event.changedTouches || [event]) {
        for (const d of points) if (d.identifier === p.identifier) d.cur = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* pointer */])(p, that);
      }
      if (shifting && !lockX && !lockY && points.length === 1) {
        const point = points[0];
        if (abs(point.cur[0] - point[0]) > abs(point.cur[1] - point[1])) lockY = true;else lockX = true;
      }
      for (const point of points) if (point.cur) point[0] = point.cur[0], point[1] = point.cur[1];
      moving = true;
      Object(__WEBPACK_IMPORTED_MODULE_7__noevent_js__["a" /* default */])(event);
      move(event);
    }

    function move(event) {
      const point = points[0],
            point0 = point.point0;
      var t;

      dx = point[0] - point0[0];
      dy = point[1] - point0[1];

      switch (mode) {
        case MODE_SPACE:
        case MODE_DRAG:
          {
            if (signX) dx = max(W - w0, min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
            if (signY) dy = max(N - n0, min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
            break;
          }
        case MODE_HANDLE:
          {
            if (points[1]) {
              if (signX) w1 = max(W, min(E, points[0][0])), e1 = max(W, min(E, points[1][0])), signX = 1;
              if (signY) n1 = max(N, min(S, points[0][1])), s1 = max(N, min(S, points[1][1])), signY = 1;
            } else {
              if (signX < 0) dx = max(W - w0, min(E - w0, dx)), w1 = w0 + dx, e1 = e0;else if (signX > 0) dx = max(W - e0, min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
              if (signY < 0) dy = max(N - n0, min(S - n0, dy)), n1 = n0 + dy, s1 = s0;else if (signY > 0) dy = max(N - s0, min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
            }
            break;
          }
        case MODE_CENTER:
          {
            if (signX) w1 = max(W, min(E, w0 - dx * signX)), e1 = max(W, min(E, e0 + dx * signX));
            if (signY) n1 = max(N, min(S, n0 - dy * signY)), s1 = max(N, min(S, s0 + dy * signY));
            break;
          }
      }

      if (e1 < w1) {
        signX *= -1;
        t = w0, w0 = e0, e0 = t;
        t = w1, w1 = e1, e1 = t;
        if (type in flipX) overlay.attr("cursor", cursors[type = flipX[type]]);
      }

      if (s1 < n1) {
        signY *= -1;
        t = n0, n0 = s0, s0 = t;
        t = n1, n1 = s1, s1 = t;
        if (type in flipY) overlay.attr("cursor", cursors[type = flipY[type]]);
      }

      if (state.selection) selection = state.selection; // May be set by brush.move!
      if (lockX) w1 = selection[0][0], e1 = selection[1][0];
      if (lockY) n1 = selection[0][1], s1 = selection[1][1];

      if (selection[0][0] !== w1 || selection[0][1] !== n1 || selection[1][0] !== e1 || selection[1][1] !== s1) {
        state.selection = [[w1, n1], [e1, s1]];
        redraw.call(that);
        emit.brush(event, mode.name);
      }
    }

    function ended(event) {
      Object(__WEBPACK_IMPORTED_MODULE_7__noevent_js__["b" /* nopropagation */])(event);
      if (event.touches) {
        if (event.touches.length) return;
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function () {
          touchending = null;
        }, 500); // Ghost clicks are delayed!
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_1_d3_drag__["b" /* dragEnable */])(event.view, moving);
        view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
      }
      group.attr("pointer-events", "all");
      overlay.attr("cursor", cursors.overlay);
      if (state.selection) selection = state.selection; // May be set by brush.move (on start)!
      if (empty(selection)) state.selection = null, redraw.call(that);
      emit.end(event, mode.name);
    }

    function keydowned(event) {
      switch (event.keyCode) {
        case 16:
          {
            // SHIFT
            shifting = signX && signY;
            break;
          }
        case 18:
          {
            // ALT
            if (mode === MODE_HANDLE) {
              if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
              if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
              mode = MODE_CENTER;
              move();
            }
            break;
          }
        case 32:
          {
            // SPACE; takes priority over ALT
            if (mode === MODE_HANDLE || mode === MODE_CENTER) {
              if (signX < 0) e0 = e1 - dx;else if (signX > 0) w0 = w1 - dx;
              if (signY < 0) s0 = s1 - dy;else if (signY > 0) n0 = n1 - dy;
              mode = MODE_SPACE;
              overlay.attr("cursor", cursors.selection);
              move();
            }
            break;
          }
        default:
          return;
      }
      Object(__WEBPACK_IMPORTED_MODULE_7__noevent_js__["a" /* default */])(event);
    }

    function keyupped(event) {
      switch (event.keyCode) {
        case 16:
          {
            // SHIFT
            if (shifting) {
              lockX = lockY = shifting = false;
              move();
            }
            break;
          }
        case 18:
          {
            // ALT
            if (mode === MODE_CENTER) {
              if (signX < 0) e0 = e1;else if (signX > 0) w0 = w1;
              if (signY < 0) s0 = s1;else if (signY > 0) n0 = n1;
              mode = MODE_HANDLE;
              move();
            }
            break;
          }
        case 32:
          {
            // SPACE
            if (mode === MODE_SPACE) {
              if (event.altKey) {
                if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
                if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
                mode = MODE_CENTER;
              } else {
                if (signX < 0) e0 = e1;else if (signX > 0) w0 = w1;
                if (signY < 0) s0 = s1;else if (signY > 0) n0 = n1;
                mode = MODE_HANDLE;
              }
              overlay.attr("cursor", cursors[type]);
              move();
            }
            break;
          }
        default:
          return;
      }
      Object(__WEBPACK_IMPORTED_MODULE_7__noevent_js__["a" /* default */])(event);
    }
  }

  function touchmoved(event) {
    emitter(this, arguments).moved(event);
  }

  function touchended(event) {
    emitter(this, arguments).ended(event);
  }

  function initialize() {
    var state = this.__brush || { selection: null };
    state.extent = number2(extent.apply(this, arguments));
    state.dim = dim;
    return state;
  }

  brush.extent = function (_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_5__constant_js__["a" /* default */])(number2(_)), brush) : extent;
  };

  brush.filter = function (_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_5__constant_js__["a" /* default */])(!!_), brush) : filter;
  };

  brush.touchable = function (_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_5__constant_js__["a" /* default */])(!!_), brush) : touchable;
  };

  brush.handleSize = function (_) {
    return arguments.length ? (handleSize = +_, brush) : handleSize;
  };

  brush.keyModifiers = function (_) {
    return arguments.length ? (keys = !!_, brush) : keys;
  };

  brush.on = function () {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? brush : value;
  };

  return brush;
}

/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var noop = { value: () => {} };

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function (t) {
    var name = "",
        i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return { type: t, name: name };
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function (typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function () {
    var copy = {},
        _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function (type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function (type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({ name: name, value: callback });
  return type;
}

/* harmony default export */ __webpack_exports__["a"] = (dispatch);

/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dispatch__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nodrag_js__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__noevent_js__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constant_js__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_js__ = __webpack_require__(317);







// Ignore right-click, since that should open the context menu.
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}

function defaultContainer() {
  return this.parentNode;
}

function defaultSubject(event, d) {
  return d == null ? { x: event.x, y: event.y } : d;
}

function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var filter = defaultFilter,
      container = defaultContainer,
      subject = defaultSubject,
      touchable = defaultTouchable,
      gestures = {},
      listeners = Object(__WEBPACK_IMPORTED_MODULE_0_d3_dispatch__["a" /* dispatch */])("start", "drag", "end"),
      active = 0,
      mousedownx,
      mousedowny,
      mousemoving,
      touchending,
      clickDistance2 = 0;

  function drag(selection) {
    selection.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  function mousedowned(event, d) {
    if (touchending || !filter.call(this, event, d)) return;
    var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
    if (!gesture) return;
    Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["d" /* select */])(event.view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
    Object(__WEBPACK_IMPORTED_MODULE_2__nodrag_js__["a" /* default */])(event.view);
    Object(__WEBPACK_IMPORTED_MODULE_3__noevent_js__["b" /* nopropagation */])(event);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  }

  function mousemoved(event) {
    Object(__WEBPACK_IMPORTED_MODULE_3__noevent_js__["a" /* default */])(event);
    if (!mousemoving) {
      var dx = event.clientX - mousedownx,
          dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event);
  }

  function mouseupped(event) {
    Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["d" /* select */])(event.view).on("mousemove.drag mouseup.drag", null);
    Object(__WEBPACK_IMPORTED_MODULE_2__nodrag_js__["b" /* yesdrag */])(event.view, mousemoving);
    Object(__WEBPACK_IMPORTED_MODULE_3__noevent_js__["a" /* default */])(event);
    gestures.mouse("end", event);
  }

  function touchstarted(event, d) {
    if (!filter.call(this, event, d)) return;
    var touches = event.changedTouches,
        c = container.call(this, event, d),
        n = touches.length,
        i,
        gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
        Object(__WEBPACK_IMPORTED_MODULE_3__noevent_js__["b" /* nopropagation */])(event);
        gesture("start", event, touches[i]);
      }
    }
  }

  function touchmoved(event) {
    var touches = event.changedTouches,
        n = touches.length,
        i,
        gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        Object(__WEBPACK_IMPORTED_MODULE_3__noevent_js__["a" /* default */])(event);
        gesture("drag", event, touches[i]);
      }
    }
  }

  function touchended(event) {
    var touches = event.changedTouches,
        n = touches.length,
        i,
        gesture;

    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function () {
      touchending = null;
    }, 500); // Ghost clicks are delayed!
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        Object(__WEBPACK_IMPORTED_MODULE_3__noevent_js__["b" /* nopropagation */])(event);
        gesture("end", event, touches[i]);
      }
    }
  }

  function beforestart(that, container, event, d, identifier, touch) {
    var dispatch = listeners.copy(),
        p = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["c" /* pointer */])(touch || event, container),
        dx,
        dy,
        s;

    if ((s = subject.call(that, new __WEBPACK_IMPORTED_MODULE_5__event_js__["a" /* default */]("beforestart", {
      sourceEvent: event,
      target: drag,
      identifier,
      active,
      x: p[0],
      y: p[1],
      dx: 0,
      dy: 0,
      dispatch
    }), d)) == null) return;

    dx = s.x - p[0] || 0;
    dy = s.y - p[1] || 0;

    return function gesture(type, event, touch) {
      var p0 = p,
          n;
      switch (type) {
        case "start":
          gestures[identifier] = gesture, n = active++;break;
        case "end":
          delete gestures[identifier], --active; // nobreak
        case "drag":
          p = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["c" /* pointer */])(touch || event, container), n = active;break;
      }
      dispatch.call(type, that, new __WEBPACK_IMPORTED_MODULE_5__event_js__["a" /* default */](type, {
        sourceEvent: event,
        subject: s,
        target: drag,
        identifier,
        active: n,
        x: p[0] + dx,
        y: p[1] + dy,
        dx: p[0] - p0[0],
        dy: p[1] - p0[1],
        dispatch
      }), d);
    };
  }

  drag.filter = function (_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_4__constant_js__["a" /* default */])(!!_), drag) : filter;
  };

  drag.container = function (_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_4__constant_js__["a" /* default */])(_), drag) : container;
  };

  drag.subject = function (_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_4__constant_js__["a" /* default */])(_), drag) : subject;
  };

  drag.touchable = function (_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_4__constant_js__["a" /* default */])(!!_), drag) : touchable;
  };

  drag.on = function () {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };

  drag.clickDistance = function (_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
  };

  return drag;
});

/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select_js__ = __webpack_require__(119);



/* unused harmony default export */ var _unused_webpack_default_export = (function (name) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__select_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__creator_js__["a" /* default */])(name).call(document.documentElement));
});

/***/ }),
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector_js__ = __webpack_require__(58);



/* harmony default export */ __webpack_exports__["a"] = (function (select) {
  if (typeof select !== "function") select = Object(__WEBPACK_IMPORTED_MODULE_1__selector_js__["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* Selection */](subgroups, this._parents);
});

/***/ }),
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_js__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectorAll_js__ = __webpack_require__(120);




function arrayAll(select) {
  return function () {
    var group = select.apply(this, arguments);
    return group == null ? [] : Object(__WEBPACK_IMPORTED_MODULE_1__array_js__["a" /* default */])(group);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (select) {
  if (typeof select === "function") select = arrayAll(select);else select = Object(__WEBPACK_IMPORTED_MODULE_2__selectorAll_js__["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* Selection */](subgroups, parents);
});

/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__matcher_js__ = __webpack_require__(35);


var find = Array.prototype.find;

function childFind(match) {
  return function () {
    return find.call(this.children, match);
  };
}

function childFirst() {
  return this.firstElementChild;
}

/* harmony default export */ __webpack_exports__["a"] = (function (match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : Object(__WEBPACK_IMPORTED_MODULE_0__matcher_js__["a" /* childMatcher */])(match)));
});

/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__matcher_js__ = __webpack_require__(35);


var filter = Array.prototype.filter;

function children() {
  return this.children;
}

function childrenFilter(match) {
  return function () {
    return filter.call(this.children, match);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : Object(__WEBPACK_IMPORTED_MODULE_0__matcher_js__["a" /* childMatcher */])(match)));
});

/***/ }),
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matcher_js__ = __webpack_require__(35);



/* harmony default export */ __webpack_exports__["a"] = (function (match) {
  if (typeof match !== "function") match = Object(__WEBPACK_IMPORTED_MODULE_1__matcher_js__["b" /* default */])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* Selection */](subgroups, this._parents);
});

/***/ }),
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enter_js__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array_js__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant_js__ = __webpack_require__(286);





function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new __WEBPACK_IMPORTED_MODULE_1__enter_js__["a" /* EnterNode */](parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = new Map(),
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new __WEBPACK_IMPORTED_MODULE_1__enter_js__["a" /* EnterNode */](parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
      exit[i] = node;
    }
  }
}

function datum(node) {
  return node.__data__;
}

/* harmony default export */ __webpack_exports__["a"] = (function (value, key) {
  if (!arguments.length) return Array.from(this, datum);

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = Object(__WEBPACK_IMPORTED_MODULE_3__constant_js__["a" /* default */])(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = Object(__WEBPACK_IMPORTED_MODULE_2__array_js__["a" /* default */])(value.call(parent, parent && parent.__data__, j, parents)),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* Selection */](update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
});

/***/ }),
/* 286 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return function () {
    return x;
  };
});

/***/ }),
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sparse_js__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(11);



/* harmony default export */ __webpack_exports__["a"] = (function () {
  return new __WEBPACK_IMPORTED_MODULE_1__index_js__["a" /* Selection */](this._exit || this._groups.map(__WEBPACK_IMPORTED_MODULE_0__sparse_js__["a" /* default */]), this._parents);
});

/***/ }),
/* 288 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (onenter, onupdate, onexit) {
  var enter = this.enter(),
      update = this,
      exit = this.exit();
  enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
  if (onupdate != null) update = onupdate(update);
  if (onexit == null) exit.remove();else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
});

/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(11);


/* harmony default export */ __webpack_exports__["a"] = (function (selection) {
  if (!(selection instanceof __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* Selection */])) throw new Error("invalid merge");

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* Selection */](merges, this._parents);
});

/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
});

/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(11);


/* harmony default export */ __webpack_exports__["a"] = (function (compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* Selection */](sortgroups, this._parents).order();
});

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
});

/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Array.from(this);
});

/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
});

/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  let size = 0;
  for (const node of this) ++size; // eslint-disable-line no-unused-vars
  return size;
});

/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return !this.node();
});

/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
});

/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace_js__ = __webpack_require__(56);


function attrRemove(name) {
  return function () {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function () {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function () {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function () {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (name, value) {
  var fullname = Object(__WEBPACK_IMPORTED_MODULE_0__namespace_js__["a" /* default */])(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }

  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
});

/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function propertyRemove(name) {
  return function () {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function () {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];else this[name] = v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
});

/***/ }),
/* 300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function (name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function (name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function (name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node),
      i = -1,
      n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node),
      i = -1,
      n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function () {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function () {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function () {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()),
        i = -1,
        n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
});

/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function () {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function () {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
});

/***/ }),
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function () {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function () {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
});

/***/ }),
/* 303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return this.each(raise);
});

/***/ }),
/* 304 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return this.each(lower);
});

/***/ }),
/* 305 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator_js__ = __webpack_require__(34);


/* harmony default export */ __webpack_exports__["a"] = (function (name) {
  var create = typeof name === "function" ? name : Object(__WEBPACK_IMPORTED_MODULE_0__creator_js__["a" /* default */])(name);
  return this.select(function () {
    return this.appendChild(create.apply(this, arguments));
  });
});

/***/ }),
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector_js__ = __webpack_require__(58);



function constantNull() {
  return null;
}

/* harmony default export */ __webpack_exports__["a"] = (function (name, before) {
  var create = typeof name === "function" ? name : Object(__WEBPACK_IMPORTED_MODULE_0__creator_js__["a" /* default */])(name),
      select = before == null ? constantNull : typeof before === "function" ? before : Object(__WEBPACK_IMPORTED_MODULE_1__selector_js__["a" /* default */])(before);
  return this.select(function () {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
});

/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return this.each(remove);
});

/***/ }),
/* 308 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function selection_cloneShallow() {
  var clone = this.cloneNode(false),
      parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true),
      parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

/* harmony default export */ __webpack_exports__["a"] = (function (deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
});

/***/ }),
/* 309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
});

/***/ }),
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function contextListener(listener) {
  return function (event) {
    listener.call(this, event, this.__data__);
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function (t) {
    var name = "",
        i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name: name };
  });
}

function onRemove(typename) {
  return function () {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;else delete this.__on;
  };
}

function onAdd(typename, value, options) {
  return function () {
    var on = this.__on,
        o,
        listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = { type: typename.type, name: typename.name, value: value, listener: listener, options: options };
    if (!on) this.__on = [o];else on.push(o);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (typename, value, options) {
  var typenames = parseTypenames(typename + ""),
      i,
      n = typenames.length,
      t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
});

/***/ }),
/* 311 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window_js__ = __webpack_require__(60);


function dispatchEvent(node, type, params) {
  var window = Object(__WEBPACK_IMPORTED_MODULE_0__window_js__["a" /* default */])(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function () {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function () {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (type, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
});

/***/ }),
/* 312 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function* () {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
});

/***/ }),
/* 313 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
var nextId = 0;

function local() {
  return new Local();
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function (node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function (node, value) {
    return node[this._] = value;
  },
  remove: function (node) {
    return this._ in node && delete node[this._];
  },
  toString: function () {
    return this._;
  }
};

/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pointer_js__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sourceEvent_js__ = __webpack_require__(125);



/* unused harmony default export */ var _unused_webpack_default_export = (function (events, node) {
  if (events.target) {
    // i.e., instanceof Event, not TouchList or iterable
    events = Object(__WEBPACK_IMPORTED_MODULE_1__sourceEvent_js__["a" /* default */])(events);
    if (node === undefined) node = events.currentTarget;
    events = events.touches || [events];
  }
  return Array.from(events, event => Object(__WEBPACK_IMPORTED_MODULE_0__pointer_js__["a" /* default */])(event, node));
});

/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_js__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selection_index_js__ = __webpack_require__(11);



/* unused harmony default export */ var _unused_webpack_default_export = (function (selector) {
    return typeof selector === "string" ? new __WEBPACK_IMPORTED_MODULE_1__selection_index_js__["a" /* Selection */]([document.querySelectorAll(selector)], [document.documentElement]) : new __WEBPACK_IMPORTED_MODULE_1__selection_index_js__["a" /* Selection */]([selector == null ? [] : Object(__WEBPACK_IMPORTED_MODULE_0__array_js__["a" /* default */])(selector)], __WEBPACK_IMPORTED_MODULE_1__selection_index_js__["c" /* root */]);
});

/***/ }),
/* 316 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (x => () => x);

/***/ }),
/* 317 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = DragEvent;
function DragEvent(type, {
  sourceEvent,
  subject,
  target,
  identifier,
  active,
  x, y, dx, dy,
  dispatch
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    subject: { value: subject, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    identifier: { value: identifier, enumerable: true, configurable: true },
    active: { value: active, enumerable: true, configurable: true },
    x: { value: x, enumerable: true, configurable: true },
    y: { value: y, enumerable: true, configurable: true },
    dx: { value: dx, enumerable: true, configurable: true },
    dy: { value: dy, enumerable: true, configurable: true },
    _: { value: dispatch }
  });
}

DragEvent.prototype.on = function () {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};

/***/ }),
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export gray */
/* harmony export (immutable) */ __webpack_exports__["a"] = lab;
/* unused harmony export Lab */
/* unused harmony export lch */
/* harmony export (immutable) */ __webpack_exports__["b"] = hcl;
/* unused harmony export Hcl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define_js__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_js__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(128);




// https://observablehq.com/@mbostock/lab-and-rgb
const K = 18,
      Xn = 0.96422,
      Yn = 1,
      Zn = 0.82521,
      t0 = 4 / 29,
      t1 = 6 / 29,
      t2 = 3 * t1 * t1,
      t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) return hcl2lab(o);
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color_js__["b" /* Rgb */])) o = Object(__WEBPACK_IMPORTED_MODULE_1__color_js__["h" /* rgbConvert */])(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn),
      x,
      z;
  if (r === g && g === b) x = z = y;else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define_js__["a" /* default */])(Lab, lab, Object(__WEBPACK_IMPORTED_MODULE_0__define_js__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color_js__["a" /* Color */], {
  brighter: function (k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function (k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function () {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new __WEBPACK_IMPORTED_MODULE_1__color_js__["b" /* Rgb */](lrgb2rgb(3.1338561 * x - 1.6168667 * y - 0.4906146 * z), lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z), lrgb2rgb(0.0719453 * x - 0.2289914 * y + 1.4052427 * z), this.opacity);
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * __WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* degrees */];
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function lch(l, c, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

function hcl2lab(o) {
  if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
  var h = o.h * __WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* radians */];
  return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}

Object(__WEBPACK_IMPORTED_MODULE_0__define_js__["a" /* default */])(Hcl, hcl, Object(__WEBPACK_IMPORTED_MODULE_0__define_js__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color_js__["a" /* Color */], {
  brighter: function (k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function (k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function () {
    return hcl2lab(this).rgb();
  }
}));

/***/ }),
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cubehelix;
/* unused harmony export Cubehelix */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define_js__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_js__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(128);




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color_js__["b" /* Rgb */])) o = Object(__WEBPACK_IMPORTED_MODULE_1__color_js__["h" /* rgbConvert */])(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)),
      // NaN if l=0 or l=1
  h = s ? Math.atan2(k, bl) * __WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* degrees */] - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define_js__["a" /* default */])(Cubehelix, cubehelix, Object(__WEBPACK_IMPORTED_MODULE_0__define_js__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color_js__["a" /* Color */], {
  brighter: function (k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color_js__["c" /* brighter */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color_js__["c" /* brighter */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function (k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color_js__["d" /* darker */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color_js__["d" /* darker */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function () {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * __WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* radians */],
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new __WEBPACK_IMPORTED_MODULE_1__color_js__["b" /* Rgb */](255 * (l + a * (A * cosh + B * sinh)), 255 * (l + a * (C * cosh + D * sinh)), 255 * (l + a * (E * cosh)), this.opacity);
  }
}));

/***/ }),
/* 320 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function (range) {
  var n = range.length;
  return function (t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
});

/***/ }),
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__color_js__ = __webpack_require__(24);


/* unused harmony default export */ var _unused_webpack_default_export = (function (a, b) {
  var i = Object(__WEBPACK_IMPORTED_MODULE_0__color_js__["c" /* hue */])(+a, +b);
  return function (t) {
    var x = i(t);
    return x - 360 * Math.floor(x / 360);
  };
});

/***/ }),
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (a, b) {
  return a = +a, b = +b, function (t) {
    return Math.round(a * (1 - t) + b * t);
  };
});

/***/ }),
/* 323 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return interpolateTransformCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return interpolateTransformSvg; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse_js__ = __webpack_require__(324);



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i - 4, x: Object(__WEBPACK_IMPORTED_MODULE_0__number_js__["a" /* default */])(xa, xb) }, { i: i - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number_js__["a" /* default */])(ya, yb) });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360;else if (b - a > 180) a += 360; // shortest path
      q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number_js__["a" /* default */])(a, b) });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number_js__["a" /* default */])(a, b) });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({ i: i - 4, x: Object(__WEBPACK_IMPORTED_MODULE_0__number_js__["a" /* default */])(xa, xb) }, { i: i - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number_js__["a" /* default */])(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function (a, b) {
    var s = [],
        // string constants and placeholders
    q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function (t) {
      var i = -1,
          n = q.length,
          o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse_js__["a" /* parseCss */], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse_js__["b" /* parseSvg */], ", ", ")", ")");

/***/ }),
/* 324 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseCss;
/* harmony export (immutable) */ __webpack_exports__["b"] = parseSvg;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decompose_js__ = __webpack_require__(325);


var svgNode;

/* eslint-disable no-undef */
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? __WEBPACK_IMPORTED_MODULE_0__decompose_js__["b" /* identity */] : Object(__WEBPACK_IMPORTED_MODULE_0__decompose_js__["a" /* default */])(m.a, m.b, m.c, m.d, m.e, m.f);
}

function parseSvg(value) {
  if (value == null) return __WEBPACK_IMPORTED_MODULE_0__decompose_js__["b" /* identity */];
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return __WEBPACK_IMPORTED_MODULE_0__decompose_js__["b" /* identity */];
  value = value.matrix;
  return Object(__WEBPACK_IMPORTED_MODULE_0__decompose_js__["a" /* default */])(value.a, value.b, value.c, value.d, value.e, value.f);
}

/***/ }),
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return identity; });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ __webpack_exports__["a"] = (function (a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});

/***/ }),
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

/* harmony default export */ __webpack_exports__["a"] = ((function zoomRho(rho, rho2, rho4) {

  // p0 = [ux0, uy0, w0]
  // p1 = [ux1, uy1, w1]
  function zoom(p0, p1) {
    var ux0 = p0[0],
        uy0 = p0[1],
        w0 = p0[2],
        ux1 = p1[0],
        uy1 = p1[1],
        w1 = p1[2],
        dx = ux1 - ux0,
        dy = uy1 - uy0,
        d2 = dx * dx + dy * dy,
        i,
        S;

    // Special case for u0 ≅ u1.
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function (t) {
        return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S)];
      };
    }

    // General case.
    else {
        var d1 = Math.sqrt(d2),
            b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
            b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
            r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
            r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
        S = (r1 - r0) / rho;
        i = function (t) {
          var s = t * S,
              coshr0 = cosh(r0),
              u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
          return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / cosh(rho * s + r0)];
        };
      }

    i.duration = S * 1000 * rho / Math.SQRT2;

    return i;
  }

  zoom.rho = function (_) {
    var _1 = Math.max(1e-3, +_),
        _2 = _1 * _1,
        _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };

  return zoom;
})(Math.SQRT2, 2, 4));

/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hslLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_js__ = __webpack_require__(24);



function hsl(hue) {
  return function (start, end) {
    var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(end)).h),
        s = Object(__WEBPACK_IMPORTED_MODULE_1__color_js__["a" /* default */])(start.s, end.s),
        l = Object(__WEBPACK_IMPORTED_MODULE_1__color_js__["a" /* default */])(start.l, end.l),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color_js__["a" /* default */])(start.opacity, end.opacity);
    return function (t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  };
}

/* unused harmony default export */ var _unused_webpack_default_export = (hsl(__WEBPACK_IMPORTED_MODULE_1__color_js__["c" /* hue */]));
var hslLong = hsl(__WEBPACK_IMPORTED_MODULE_1__color_js__["a" /* default */]);

/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_js__ = __webpack_require__(24);



function lab(start, end) {
  var l = Object(__WEBPACK_IMPORTED_MODULE_1__color_js__["a" /* default */])((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* lab */])(start)).l, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* lab */])(end)).l),
      a = Object(__WEBPACK_IMPORTED_MODULE_1__color_js__["a" /* default */])(start.a, end.a),
      b = Object(__WEBPACK_IMPORTED_MODULE_1__color_js__["a" /* default */])(start.b, end.b),
      opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color_js__["a" /* default */])(start.opacity, end.opacity);
  return function (t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}

/***/ }),
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hclLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_js__ = __webpack_require__(24);



function hcl(hue) {
  return function (start, end) {
    var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* hcl */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* hcl */])(end)).h),
        c = Object(__WEBPACK_IMPORTED_MODULE_1__color_js__["a" /* default */])(start.c, end.c),
        l = Object(__WEBPACK_IMPORTED_MODULE_1__color_js__["a" /* default */])(start.l, end.l),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color_js__["a" /* default */])(start.opacity, end.opacity);
    return function (t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  };
}

/* unused harmony default export */ var _unused_webpack_default_export = (hcl(__WEBPACK_IMPORTED_MODULE_1__color_js__["c" /* hue */]));
var hclLong = hcl(__WEBPACK_IMPORTED_MODULE_1__color_js__["a" /* default */]);

/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cubehelixLong; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_js__ = __webpack_require__(24);



function cubehelix(hue) {
  return function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(end)).h),
          s = Object(__WEBPACK_IMPORTED_MODULE_1__color_js__["a" /* default */])(start.s, end.s),
          l = Object(__WEBPACK_IMPORTED_MODULE_1__color_js__["a" /* default */])(start.l, end.l),
          opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color_js__["a" /* default */])(start.opacity, end.opacity);
      return function (t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  }(1);
}

/* unused harmony default export */ var _unused_webpack_default_export = (cubehelix(__WEBPACK_IMPORTED_MODULE_1__color_js__["c" /* hue */]));
var cubehelixLong = cubehelix(__WEBPACK_IMPORTED_MODULE_1__color_js__["a" /* default */]);

/***/ }),
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = piecewise;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value_js__ = __webpack_require__(36);


function piecewise(interpolate, values) {
  if (values === undefined) values = interpolate, interpolate = __WEBPACK_IMPORTED_MODULE_0__value_js__["a" /* default */];
  var i = 0,
      n = values.length - 1,
      v = values[0],
      I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function (t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}

/***/ }),
/* 332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function (interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
});

/***/ }),
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interrupt_js__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transition_js__ = __webpack_require__(337);




__WEBPACK_IMPORTED_MODULE_0_d3_selection__["e" /* selection */].prototype.interrupt = __WEBPACK_IMPORTED_MODULE_1__interrupt_js__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_d3_selection__["e" /* selection */].prototype.transition = __WEBPACK_IMPORTED_MODULE_2__transition_js__["a" /* default */];

/***/ }),
/* 334 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interrupt_js__ = __webpack_require__(136);


/* harmony default export */ __webpack_exports__["a"] = (function (name) {
  return this.each(function () {
    Object(__WEBPACK_IMPORTED_MODULE_0__interrupt_js__["a" /* default */])(this, name);
  });
});

/***/ }),
/* 335 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer_js__ = __webpack_require__(66);


/* harmony default export */ __webpack_exports__["a"] = (function (callback, delay, time) {
  var t = new __WEBPACK_IMPORTED_MODULE_0__timer_js__["a" /* Timer */]();
  delay = delay == null ? 0 : +delay;
  t.restart(elapsed => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
});

/***/ }),
/* 336 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer_js__ = __webpack_require__(66);


/* unused harmony default export */ var _unused_webpack_default_export = (function (callback, delay, time) {
  var t = new __WEBPACK_IMPORTED_MODULE_0__timer_js__["a" /* Timer */](),
      total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  t._restart = t.restart;
  t.restart = function (callback, delay, time) {
    delay = +delay, time = time == null ? Object(__WEBPACK_IMPORTED_MODULE_0__timer_js__["b" /* now */])() : +time;
    t._restart(function tick(elapsed) {
      elapsed += total;
      t._restart(tick, total += delay, time);
      callback(elapsed);
    }, delay, time);
  };
  t.restart(callback, delay, time);
  return t;
});

/***/ }),
/* 337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transition_index_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transition_schedule_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_ease__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_timer__ = __webpack_require__(38);





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: __WEBPACK_IMPORTED_MODULE_2_d3_ease__["a" /* easeCubicInOut */]
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id} not found`);
    }
  }
  return timing;
}

/* harmony default export */ __webpack_exports__["a"] = (function (name) {
  var id, timing;

  if (name instanceof __WEBPACK_IMPORTED_MODULE_0__transition_index_js__["a" /* Transition */]) {
    id = name._id, name = name._name;
  } else {
    id = Object(__WEBPACK_IMPORTED_MODULE_0__transition_index_js__["b" /* newId */])(), (timing = defaultTiming).time = Object(__WEBPACK_IMPORTED_MODULE_3_d3_timer__["a" /* now */])(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        Object(__WEBPACK_IMPORTED_MODULE_1__transition_schedule_js__["e" /* default */])(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__transition_index_js__["a" /* Transition */](groups, this._parents, name, id);
});

/***/ }),
/* 338 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tween_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interpolate_js__ = __webpack_require__(137);





function attrRemove(name) {
  return function () {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function () {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function () {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function () {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function () {
    var string0,
        value1 = value(this),
        string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var string00, string10, interpolate0;
  return function () {
    var string0,
        value1 = value(this),
        string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (name, value) {
  var fullname = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["b" /* namespace */])(name),
      i = fullname === "transform" ? __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__["i" /* interpolateTransformSvg */] : __WEBPACK_IMPORTED_MODULE_3__interpolate_js__["a" /* default */];
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, Object(__WEBPACK_IMPORTED_MODULE_2__tween_js__["b" /* tweenValue */])(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
});

/***/ }),
/* 339 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(7);


function attrInterpolate(name, i) {
  return function (t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function (t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["a"] = (function (name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  var fullname = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["b" /* namespace */])(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
});

/***/ }),
/* 340 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule_js__ = __webpack_require__(8);


function delayFunction(id, value) {
  return function () {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule_js__["g" /* init */])(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function () {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule_js__["g" /* init */])(this, id).delay = value;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (value) {
  var id = this._id;

  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : Object(__WEBPACK_IMPORTED_MODULE_0__schedule_js__["f" /* get */])(this.node(), id).delay;
});

/***/ }),
/* 341 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule_js__ = __webpack_require__(8);


function durationFunction(id, value) {
  return function () {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule_js__["h" /* set */])(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function () {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule_js__["h" /* set */])(this, id).duration = value;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (value) {
  var id = this._id;

  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : Object(__WEBPACK_IMPORTED_MODULE_0__schedule_js__["f" /* get */])(this.node(), id).duration;
});

/***/ }),
/* 342 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule_js__ = __webpack_require__(8);


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error();
  return function () {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule_js__["h" /* set */])(this, id).ease = value;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (value) {
  var id = this._id;

  return arguments.length ? this.each(easeConstant(id, value)) : Object(__WEBPACK_IMPORTED_MODULE_0__schedule_js__["f" /* get */])(this.node(), id).ease;
});

/***/ }),
/* 343 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule_js__ = __webpack_require__(8);


function easeVarying(id, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error();
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule_js__["h" /* set */])(this, id).ease = v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (value) {
  if (typeof value !== "function") throw new Error();
  return this.each(easeVarying(this._id, value));
});

/***/ }),
/* 344 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(17);



/* harmony default export */ __webpack_exports__["a"] = (function (match) {
  if (typeof match !== "function") match = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["a" /* matcher */])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_1__index_js__["a" /* Transition */](subgroups, this._parents, this._name, this._id);
});

/***/ }),
/* 345 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(17);


/* harmony default export */ __webpack_exports__["a"] = (function (transition) {
  if (transition._id !== this._id) throw new Error();

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* Transition */](merges, this._parents, this._name, this._id);
});

/***/ }),
/* 346 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule_js__ = __webpack_require__(8);


function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function (t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0,
      on1,
      sit = start(name) ? __WEBPACK_IMPORTED_MODULE_0__schedule_js__["g" /* init */] : __WEBPACK_IMPORTED_MODULE_0__schedule_js__["h" /* set */];
  return function () {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (name, listener) {
  var id = this._id;

  return arguments.length < 2 ? Object(__WEBPACK_IMPORTED_MODULE_0__schedule_js__["f" /* get */])(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
});

/***/ }),
/* 347 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function removeFunction(id) {
  return function () {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return this.on("end.remove", removeFunction(this._id));
});

/***/ }),
/* 348 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_js__ = __webpack_require__(8);




/* harmony default export */ __webpack_exports__["a"] = (function (select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["f" /* selector */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        Object(__WEBPACK_IMPORTED_MODULE_2__schedule_js__["e" /* default */])(subgroup[i], name, id, i, subgroup, Object(__WEBPACK_IMPORTED_MODULE_2__schedule_js__["f" /* get */])(node, id));
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_1__index_js__["a" /* Transition */](subgroups, this._parents, name, id);
});

/***/ }),
/* 349 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_js__ = __webpack_require__(8);




/* harmony default export */ __webpack_exports__["a"] = (function (select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["g" /* selectorAll */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = Object(__WEBPACK_IMPORTED_MODULE_2__schedule_js__["f" /* get */])(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            Object(__WEBPACK_IMPORTED_MODULE_2__schedule_js__["e" /* default */])(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_1__index_js__["a" /* Transition */](subgroups, parents, name, id);
});

/***/ }),
/* 350 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(7);


var Selection = __WEBPACK_IMPORTED_MODULE_0_d3_selection__["e" /* selection */].prototype.constructor;

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return new Selection(this._groups, this._parents);
});

/***/ }),
/* 351 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tween_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interpolate_js__ = __webpack_require__(137);






function styleNull(name, interpolate) {
  var string00, string10, interpolate0;
  return function () {
    var string0 = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["h" /* style */])(this, name),
        string1 = (this.style.removeProperty(name), Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["h" /* style */])(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove(name) {
  return function () {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function () {
    var string0 = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["h" /* style */])(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function () {
    var string0 = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["h" /* style */])(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["h" /* style */])(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0,
      on1,
      listener0,
      key = "style." + name,
      event = "end." + key,
      remove;
  return function () {
    var schedule = Object(__WEBPACK_IMPORTED_MODULE_2__schedule_js__["h" /* set */])(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (name, value, priority) {
  var i = (name += "") === "transform" ? __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__["h" /* interpolateTransformCss */] : __WEBPACK_IMPORTED_MODULE_4__interpolate_js__["a" /* default */];
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, Object(__WEBPACK_IMPORTED_MODULE_3__tween_js__["b" /* tweenValue */])(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
});

/***/ }),
/* 352 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function styleInterpolate(name, i, priority) {
  return function (t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["a"] = (function (name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
});

/***/ }),
/* 353 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tween_js__ = __webpack_require__(39);


function textConstant(value) {
  return function () {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function () {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (value) {
  return this.tween("text", typeof value === "function" ? textFunction(Object(__WEBPACK_IMPORTED_MODULE_0__tween_js__["b" /* tweenValue */])(this, "text", value)) : textConstant(value == null ? "" : value + ""));
});

/***/ }),
/* 354 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function textInterpolate(i) {
  return function (t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["a"] = (function (value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, textTween(value));
});

/***/ }),
/* 355 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedule_js__ = __webpack_require__(8);



/* harmony default export */ __webpack_exports__["a"] = (function () {
  var name = this._name,
      id0 = this._id,
      id1 = Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["b" /* newId */])();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = Object(__WEBPACK_IMPORTED_MODULE_1__schedule_js__["f" /* get */])(node, id0);
        Object(__WEBPACK_IMPORTED_MODULE_1__schedule_js__["e" /* default */])(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* Transition */](groups, this._parents, name, id1);
});

/***/ }),
/* 356 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule_js__ = __webpack_require__(8);


/* harmony default export */ __webpack_exports__["a"] = (function () {
  var on0,
      on1,
      that = this,
      id = that._id,
      size = that.size();
  return new Promise(function (resolve, reject) {
    var cancel = { value: reject },
        end = { value: function () {
        if (--size === 0) resolve();
      } };

    that.each(function () {
      var schedule = Object(__WEBPACK_IMPORTED_MODULE_0__schedule_js__["h" /* set */])(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });

    // The selection was empty, resolve end immediately
    if (size === 0) resolve();
  });
});

/***/ }),
/* 357 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const linear = t => +t;
/* unused harmony export linear */


/***/ }),
/* 358 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export quadIn */
/* unused harmony export quadOut */
/* unused harmony export quadInOut */
function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}

/***/ }),
/* 359 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export cubicIn */
/* unused harmony export cubicOut */
/* harmony export (immutable) */ __webpack_exports__["a"] = cubicInOut;
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

/***/ }),
/* 360 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export polyIn */
/* unused harmony export polyOut */
/* unused harmony export polyInOut */
var exponent = 3;

var polyIn = function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
}(exponent);

var polyOut = function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
}(exponent);

var polyInOut = function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
}(exponent);

/***/ }),
/* 361 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sinIn */
/* unused harmony export sinOut */
/* unused harmony export sinInOut */
var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return +t === 1 ? 1 : 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}

/***/ }),
/* 362 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export expIn */
/* unused harmony export expOut */
/* unused harmony export expInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(139);


function expIn(t) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* tpmt */])(1 - +t);
}

function expOut(t) {
  return 1 - Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* tpmt */])(t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* tpmt */])(1 - t) : 2 - Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* tpmt */])(t - 1)) / 2;
}

/***/ }),
/* 363 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export circleIn */
/* unused harmony export circleOut */
/* unused harmony export circleInOut */
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}

/***/ }),
/* 364 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bounceIn */
/* unused harmony export bounceOut */
/* unused harmony export bounceInOut */
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}

/***/ }),
/* 365 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export backIn */
/* unused harmony export backOut */
/* unused harmony export backInOut */
var overshoot = 1.70158;

var backIn = function custom(s) {
  s = +s;

  function backIn(t) {
    return (t = +t) * t * (s * (t - 1) + t);
  }

  backIn.overshoot = custom;

  return backIn;
}(overshoot);

var backOut = function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((t + 1) * s + t) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
}(overshoot);

var backInOut = function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
}(overshoot);

/***/ }),
/* 366 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export elasticIn */
/* unused harmony export elasticOut */
/* unused harmony export elasticInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(139);


var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* tpmt */])(- --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function (a) {
    return custom(a, p * tau);
  };
  elasticIn.period = function (p) {
    return custom(a, p);
  };

  return elasticIn;
}(amplitude, period);

var elasticOut = function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* tpmt */])(t = +t) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function (a) {
    return custom(a, p * tau);
  };
  elasticOut.period = function (p) {
    return custom(a, p);
  };

  return elasticOut;
}(amplitude, period);

var elasticInOut = function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0 ? a * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* tpmt */])(-t) * Math.sin((s - t) / p) : 2 - a * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* tpmt */])(t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function (a) {
    return custom(a, p * tau);
  };
  elasticInOut.period = function (p) {
    return custom(a, p);
  };

  return elasticInOut;
}(amplitude, period);

/***/ }),
/* 367 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transition_index_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transition_schedule_js__ = __webpack_require__(8);



var root = [null];

/* unused harmony default export */ var _unused_webpack_default_export = (function (node, name) {
  var schedules = node.__transition,
      schedule,
      i;

  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).state > __WEBPACK_IMPORTED_MODULE_1__transition_schedule_js__["c" /* SCHEDULED */] && schedule.name === name) {
        return new __WEBPACK_IMPORTED_MODULE_0__transition_index_js__["a" /* Transition */]([[node]], root, name, +i);
      }
    }
  }

  return null;
});

/***/ }),
/* 368 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (x => () => x);

/***/ }),
/* 369 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = BrushEvent;
function BrushEvent(type, {
  sourceEvent,
  target,
  selection,
  mode,
  dispatch
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    selection: { value: selection, enumerable: true, configurable: true },
    mode: { value: mode, enumerable: true, configurable: true },
    _: { value: dispatch }
  });
}

/***/ }),
/* 370 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = nopropagation;
function nopropagation(event) {
  event.stopImmediatePropagation();
}

/* harmony default export */ __webpack_exports__["a"] = (function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();
});

/***/ }),
/* 371 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chord_js__ = __webpack_require__(372);
/* unused harmony reexport chord */
/* unused harmony reexport chordTranspose */
/* unused harmony reexport chordDirected */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ribbon_js__ = __webpack_require__(373);
/* unused harmony reexport ribbon */
/* unused harmony reexport ribbonArrow */



/***/ }),
/* 372 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export chordTranspose */
/* unused harmony export chordDirected */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(140);


function range(i, j) {
  return Array.from({ length: j - i }, (_, k) => i + k);
}

function compareValue(compare) {
  return function (a, b) {
    return compare(a.source.value + a.target.value, b.source.value + b.target.value);
  };
}

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return chord(false, false);
});

function chordTranspose() {
  return chord(false, true);
}

function chordDirected() {
  return chord(true, false);
}

function chord(directed, transpose) {
  var padAngle = 0,
      sortGroups = null,
      sortSubgroups = null,
      sortChords = null;

  function chord(matrix) {
    var n = matrix.length,
        groupSums = new Array(n),
        groupIndex = range(0, n),
        chords = new Array(n * n),
        groups = new Array(n),
        k = 0,
        dx;

    matrix = Float64Array.from({ length: n * n }, transpose ? (_, i) => matrix[i % n][i / n | 0] : (_, i) => matrix[i / n | 0][i % n]);

    // Compute the scaling factor from value to angle in [0, 2pi].
    for (let i = 0; i < n; ++i) {
      let x = 0;
      for (let j = 0; j < n; ++j) x += matrix[i * n + j] + directed * matrix[j * n + i];
      k += groupSums[i] = x;
    }
    k = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* max */])(0, __WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* tau */] - padAngle * n) / k;
    dx = k ? padAngle : __WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* tau */] / n;

    // Compute the angles for each group and constituent chord.
    {
      let x = 0;
      if (sortGroups) groupIndex.sort((a, b) => sortGroups(groupSums[a], groupSums[b]));
      for (const i of groupIndex) {
        const x0 = x;
        if (directed) {
          const subgroupIndex = range(~n + 1, n).filter(j => j < 0 ? matrix[~j * n + i] : matrix[i * n + j]);
          if (sortSubgroups) subgroupIndex.sort((a, b) => sortSubgroups(a < 0 ? -matrix[~a * n + i] : matrix[i * n + a], b < 0 ? -matrix[~b * n + i] : matrix[i * n + b]));
          for (const j of subgroupIndex) {
            if (j < 0) {
              const chord = chords[~j * n + i] || (chords[~j * n + i] = { source: null, target: null });
              chord.target = { index: i, startAngle: x, endAngle: x += matrix[~j * n + i] * k, value: matrix[~j * n + i] };
            } else {
              const chord = chords[i * n + j] || (chords[i * n + j] = { source: null, target: null });
              chord.source = { index: i, startAngle: x, endAngle: x += matrix[i * n + j] * k, value: matrix[i * n + j] };
            }
          }
          groups[i] = { index: i, startAngle: x0, endAngle: x, value: groupSums[i] };
        } else {
          const subgroupIndex = range(0, n).filter(j => matrix[i * n + j] || matrix[j * n + i]);
          if (sortSubgroups) subgroupIndex.sort((a, b) => sortSubgroups(matrix[i * n + a], matrix[i * n + b]));
          for (const j of subgroupIndex) {
            let chord;
            if (i < j) {
              chord = chords[i * n + j] || (chords[i * n + j] = { source: null, target: null });
              chord.source = { index: i, startAngle: x, endAngle: x += matrix[i * n + j] * k, value: matrix[i * n + j] };
            } else {
              chord = chords[j * n + i] || (chords[j * n + i] = { source: null, target: null });
              chord.target = { index: i, startAngle: x, endAngle: x += matrix[i * n + j] * k, value: matrix[i * n + j] };
              if (i === j) chord.source = chord.target;
            }
            if (chord.source && chord.target && chord.source.value < chord.target.value) {
              const source = chord.source;
              chord.source = chord.target;
              chord.target = source;
            }
          }
          groups[i] = { index: i, startAngle: x0, endAngle: x, value: groupSums[i] };
        }
        x += dx;
      }
    }

    // Remove empty chords.
    chords = Object.values(chords);
    chords.groups = groups;
    return sortChords ? chords.sort(sortChords) : chords;
  }

  chord.padAngle = function (_) {
    return arguments.length ? (padAngle = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* max */])(0, _), chord) : padAngle;
  };

  chord.sortGroups = function (_) {
    return arguments.length ? (sortGroups = _, chord) : sortGroups;
  };

  chord.sortSubgroups = function (_) {
    return arguments.length ? (sortSubgroups = _, chord) : sortSubgroups;
  };

  chord.sortChords = function (_) {
    return arguments.length ? (_ == null ? sortChords = null : (sortChords = compareValue(_))._ = _, chord) : sortChords && sortChords._;
  };

  return chord;
}

/***/ }),
/* 373 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ribbonArrow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_js__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant_js__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_js__ = __webpack_require__(140);





function defaultSource(d) {
  return d.source;
}

function defaultTarget(d) {
  return d.target;
}

function defaultRadius(d) {
  return d.radius;
}

function defaultStartAngle(d) {
  return d.startAngle;
}

function defaultEndAngle(d) {
  return d.endAngle;
}

function defaultPadAngle() {
  return 0;
}

function defaultArrowheadRadius() {
  return 10;
}

function ribbon(headRadius) {
  var source = defaultSource,
      target = defaultTarget,
      sourceRadius = defaultRadius,
      targetRadius = defaultRadius,
      startAngle = defaultStartAngle,
      endAngle = defaultEndAngle,
      padAngle = defaultPadAngle,
      context = null;

  function ribbon() {
    var buffer,
        s = source.apply(this, arguments),
        t = target.apply(this, arguments),
        ap = padAngle.apply(this, arguments) / 2,
        argv = __WEBPACK_IMPORTED_MODULE_1__array_js__["a" /* slice */].call(arguments),
        sr = +sourceRadius.apply(this, (argv[0] = s, argv)),
        sa0 = startAngle.apply(this, argv) - __WEBPACK_IMPORTED_MODULE_3__math_js__["d" /* halfPi */],
        sa1 = endAngle.apply(this, argv) - __WEBPACK_IMPORTED_MODULE_3__math_js__["d" /* halfPi */],
        tr = +targetRadius.apply(this, (argv[0] = t, argv)),
        ta0 = startAngle.apply(this, argv) - __WEBPACK_IMPORTED_MODULE_3__math_js__["d" /* halfPi */],
        ta1 = endAngle.apply(this, argv) - __WEBPACK_IMPORTED_MODULE_3__math_js__["d" /* halfPi */];

    if (!context) context = buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])();

    if (ap > __WEBPACK_IMPORTED_MODULE_3__math_js__["c" /* epsilon */]) {
      if (Object(__WEBPACK_IMPORTED_MODULE_3__math_js__["a" /* abs */])(sa1 - sa0) > ap * 2 + __WEBPACK_IMPORTED_MODULE_3__math_js__["c" /* epsilon */]) sa1 > sa0 ? (sa0 += ap, sa1 -= ap) : (sa0 -= ap, sa1 += ap);else sa0 = sa1 = (sa0 + sa1) / 2;
      if (Object(__WEBPACK_IMPORTED_MODULE_3__math_js__["a" /* abs */])(ta1 - ta0) > ap * 2 + __WEBPACK_IMPORTED_MODULE_3__math_js__["c" /* epsilon */]) ta1 > ta0 ? (ta0 += ap, ta1 -= ap) : (ta0 -= ap, ta1 += ap);else ta0 = ta1 = (ta0 + ta1) / 2;
    }

    context.moveTo(sr * Object(__WEBPACK_IMPORTED_MODULE_3__math_js__["b" /* cos */])(sa0), sr * Object(__WEBPACK_IMPORTED_MODULE_3__math_js__["f" /* sin */])(sa0));
    context.arc(0, 0, sr, sa0, sa1);
    if (sa0 !== ta0 || sa1 !== ta1) {
      if (headRadius) {
        var hr = +headRadius.apply(this, arguments),
            tr2 = tr - hr,
            ta2 = (ta0 + ta1) / 2;
        context.quadraticCurveTo(0, 0, tr2 * Object(__WEBPACK_IMPORTED_MODULE_3__math_js__["b" /* cos */])(ta0), tr2 * Object(__WEBPACK_IMPORTED_MODULE_3__math_js__["f" /* sin */])(ta0));
        context.lineTo(tr * Object(__WEBPACK_IMPORTED_MODULE_3__math_js__["b" /* cos */])(ta2), tr * Object(__WEBPACK_IMPORTED_MODULE_3__math_js__["f" /* sin */])(ta2));
        context.lineTo(tr2 * Object(__WEBPACK_IMPORTED_MODULE_3__math_js__["b" /* cos */])(ta1), tr2 * Object(__WEBPACK_IMPORTED_MODULE_3__math_js__["f" /* sin */])(ta1));
      } else {
        context.quadraticCurveTo(0, 0, tr * Object(__WEBPACK_IMPORTED_MODULE_3__math_js__["b" /* cos */])(ta0), tr * Object(__WEBPACK_IMPORTED_MODULE_3__math_js__["f" /* sin */])(ta0));
        context.arc(0, 0, tr, ta0, ta1);
      }
    }
    context.quadraticCurveTo(0, 0, sr * Object(__WEBPACK_IMPORTED_MODULE_3__math_js__["b" /* cos */])(sa0), sr * Object(__WEBPACK_IMPORTED_MODULE_3__math_js__["f" /* sin */])(sa0));
    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  if (headRadius) ribbon.headRadius = function (_) {
    return arguments.length ? (headRadius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(+_), ribbon) : headRadius;
  };

  ribbon.radius = function (_) {
    return arguments.length ? (sourceRadius = targetRadius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(+_), ribbon) : sourceRadius;
  };

  ribbon.sourceRadius = function (_) {
    return arguments.length ? (sourceRadius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(+_), ribbon) : sourceRadius;
  };

  ribbon.targetRadius = function (_) {
    return arguments.length ? (targetRadius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(+_), ribbon) : targetRadius;
  };

  ribbon.startAngle = function (_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(+_), ribbon) : startAngle;
  };

  ribbon.endAngle = function (_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(+_), ribbon) : endAngle;
  };

  ribbon.padAngle = function (_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(+_), ribbon) : padAngle;
  };

  ribbon.source = function (_) {
    return arguments.length ? (source = _, ribbon) : source;
  };

  ribbon.target = function (_) {
    return arguments.length ? (target = _, ribbon) : target;
  };

  ribbon.context = function (_) {
    return arguments.length ? (context = _ == null ? null : _, ribbon) : context;
  };

  return ribbon;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return ribbon();
});

function ribbonArrow() {
  return ribbon(defaultArrowheadRadius);
}

/***/ }),
/* 374 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const pi = Math.PI,
      tau = 2 * pi,
      epsilon = 1e-6,
      tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path();
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function (x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function () {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function (x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function (x1, y1, x, y) {
    this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function (x1, y1, x2, y2, x, y) {
    this._ += "C" + +x1 + "," + +y1 + "," + +x2 + "," + +y2 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function (x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon)) ;

      // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
      // Equivalently, is (x1,y1) coincident with (x2,y2)?
      // Or, is the radius zero? Line to (x1,y1).
      else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
          this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
        }

        // Otherwise, draw an arc!
        else {
            var x20 = x2 - x0,
                y20 = y2 - y0,
                l21_2 = x21 * x21 + y21 * y21,
                l20_2 = x20 * x20 + y20 * y20,
                l21 = Math.sqrt(l21_2),
                l01 = Math.sqrt(l01_2),
                l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
                t01 = l / l01,
                t21 = l / l21;

            // If the start tangent is not coincident with (x0,y0), line to.
            if (Math.abs(t01 - 1) > epsilon) {
              this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
            }

            this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
          }
  },
  arc: function (x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
        this._ += "L" + x0 + "," + y0;
      }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
        this._ += "A" + r + "," + r + ",0," + +(da >= pi) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
      }
  },
  rect: function (x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + +w + "v" + +h + "h" + -w + "Z";
  },
  toString: function () {
    return this._;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (path);

/***/ }),
/* 375 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slice; });
var slice = Array.prototype.slice;

/***/ }),
/* 376 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return function () {
    return x;
  };
});

/***/ }),
/* 377 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contours_js__ = __webpack_require__(141);
/* unused harmony reexport contours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__density_js__ = __webpack_require__(382);
/* unused harmony reexport contourDensity */



/***/ }),
/* 378 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (a, b) {
  return a - b;
});

/***/ }),
/* 379 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (ring) {
  var i = 0,
      n = ring.length,
      area = ring[n - 1][1] * ring[0][0] - ring[n - 1][0] * ring[0][1];
  while (++i < n) area += ring[i - 1][1] * ring[i][0] - ring[i - 1][0] * ring[i][1];
  return area;
});

/***/ }),
/* 380 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (ring, hole) {
  var i = -1,
      n = hole.length,
      c;
  while (++i < n) if (c = ringContains(ring, hole[i])) return c;
  return 0;
});

function ringContains(ring, point) {
  var x = point[0],
      y = point[1],
      contains = -1;
  for (var i = 0, n = ring.length, j = n - 1; i < n; j = i++) {
    var pi = ring[i],
        xi = pi[0],
        yi = pi[1],
        pj = ring[j],
        xj = pj[0],
        yj = pj[1];
    if (segmentContains(pi, pj, point)) return 0;
    if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) contains = -contains;
  }
  return contains;
}

function segmentContains(a, b, c) {
  var i;return collinear(a, b, c) && within(a[i = +(a[0] === b[0])], c[i], b[i]);
}

function collinear(a, b, c) {
  return (b[0] - a[0]) * (c[1] - a[1]) === (c[0] - a[0]) * (b[1] - a[1]);
}

function within(p, q, r) {
  return p <= q && q <= r || r <= q && q <= p;
}

/***/ }),
/* 381 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {});

/***/ }),
/* 382 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_js__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blur_js__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant_js__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contours_js__ = __webpack_require__(141);






function defaultX(d) {
  return d[0];
}

function defaultY(d) {
  return d[1];
}

function defaultWeight() {
  return 1;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var x = defaultX,
      y = defaultY,
      weight = defaultWeight,
      dx = 960,
      dy = 500,
      r = 20,
      // blur radius
  k = 2,
      // log2(grid cell size)
  o = r * 3,
      // grid offset, to pad for blur
  n = dx + o * 2 >> k,
      // grid width
  m = dy + o * 2 >> k,
      // grid height
  threshold = Object(__WEBPACK_IMPORTED_MODULE_3__constant_js__["a" /* default */])(20);

  function density(data) {
    var values0 = new Float32Array(n * m),
        values1 = new Float32Array(n * m);

    data.forEach(function (d, i, data) {
      var xi = +x(d, i, data) + o >> k,
          yi = +y(d, i, data) + o >> k,
          wi = +weight(d, i, data);
      if (xi >= 0 && xi < n && yi >= 0 && yi < m) {
        values0[xi + yi * n] += wi;
      }
    });

    // TODO Optimize.
    Object(__WEBPACK_IMPORTED_MODULE_2__blur_js__["a" /* blurX */])({ width: n, height: m, data: values0 }, { width: n, height: m, data: values1 }, r >> k);
    Object(__WEBPACK_IMPORTED_MODULE_2__blur_js__["b" /* blurY */])({ width: n, height: m, data: values1 }, { width: n, height: m, data: values0 }, r >> k);
    Object(__WEBPACK_IMPORTED_MODULE_2__blur_js__["a" /* blurX */])({ width: n, height: m, data: values0 }, { width: n, height: m, data: values1 }, r >> k);
    Object(__WEBPACK_IMPORTED_MODULE_2__blur_js__["b" /* blurY */])({ width: n, height: m, data: values1 }, { width: n, height: m, data: values0 }, r >> k);
    Object(__WEBPACK_IMPORTED_MODULE_2__blur_js__["a" /* blurX */])({ width: n, height: m, data: values0 }, { width: n, height: m, data: values1 }, r >> k);
    Object(__WEBPACK_IMPORTED_MODULE_2__blur_js__["b" /* blurY */])({ width: n, height: m, data: values1 }, { width: n, height: m, data: values0 }, r >> k);

    var tz = threshold(values0);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      var stop = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["f" /* max */])(values0);
      tz = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["m" /* tickStep */])(0, stop, tz);
      tz = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["j" /* range */])(0, Math.floor(stop / tz) * tz, tz);
      tz.shift();
    }

    return Object(__WEBPACK_IMPORTED_MODULE_4__contours_js__["a" /* default */])().thresholds(tz).size([n, m])(values0).map(transform);
  }

  function transform(geometry) {
    geometry.value *= Math.pow(2, -2 * k); // Density in points per square pixel.
    geometry.coordinates.forEach(transformPolygon);
    return geometry;
  }

  function transformPolygon(coordinates) {
    coordinates.forEach(transformRing);
  }

  function transformRing(coordinates) {
    coordinates.forEach(transformPoint);
  }

  // TODO Optimize.
  function transformPoint(coordinates) {
    coordinates[0] = coordinates[0] * Math.pow(2, k) - o;
    coordinates[1] = coordinates[1] * Math.pow(2, k) - o;
  }

  function resize() {
    o = r * 3;
    n = dx + o * 2 >> k;
    m = dy + o * 2 >> k;
    return density;
  }

  density.x = function (_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_3__constant_js__["a" /* default */])(+_), density) : x;
  };

  density.y = function (_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_3__constant_js__["a" /* default */])(+_), density) : y;
  };

  density.weight = function (_) {
    return arguments.length ? (weight = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_3__constant_js__["a" /* default */])(+_), density) : weight;
  };

  density.size = function (_) {
    if (!arguments.length) return [dx, dy];
    var _0 = +_[0],
        _1 = +_[1];
    if (!(_0 >= 0 && _1 >= 0)) throw new Error("invalid size");
    return dx = _0, dy = _1, resize();
  };

  density.cellSize = function (_) {
    if (!arguments.length) return 1 << k;
    if (!((_ = +_) >= 1)) throw new Error("invalid cell size");
    return k = Math.floor(Math.log(_) / Math.LN2), resize();
  };

  density.thresholds = function (_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(__WEBPACK_IMPORTED_MODULE_3__constant_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__array_js__["a" /* slice */].call(_)) : Object(__WEBPACK_IMPORTED_MODULE_3__constant_js__["a" /* default */])(_), density) : threshold;
  };

  density.bandwidth = function (_) {
    if (!arguments.length) return Math.sqrt(r * (r + 1));
    if (!((_ = +_) >= 0)) throw new Error("invalid bandwidth");
    return r = Math.round((Math.sqrt(4 * _ * _ + 1) - 1) / 2), resize();
  };

  return density;
});

/***/ }),
/* 383 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = blurX;
/* harmony export (immutable) */ __webpack_exports__["b"] = blurY;
// TODO Optimize edge cases.
// TODO Optimize index calculation.
// TODO Optimize arguments.
function blurX(source, target, r) {
  var n = source.width,
      m = source.height,
      w = (r << 1) + 1;
  for (var j = 0; j < m; ++j) {
    for (var i = 0, sr = 0; i < n + r; ++i) {
      if (i < n) {
        sr += source.data[i + j * n];
      }
      if (i >= r) {
        if (i >= w) {
          sr -= source.data[i - w + j * n];
        }
        target.data[i - r + j * n] = sr / Math.min(i + 1, n - 1 + w - i, w);
      }
    }
  }
}

// TODO Optimize edge cases.
// TODO Optimize index calculation.
// TODO Optimize arguments.
function blurY(source, target, r) {
  var n = source.width,
      m = source.height,
      w = (r << 1) + 1;
  for (var i = 0; i < n; ++i) {
    for (var j = 0, sr = 0; j < m + r; ++j) {
      if (j < m) {
        sr += source.data[i + j * n];
      }
      if (j >= r) {
        if (j >= w) {
          sr -= source.data[i + (j - w) * n];
        }
        target.data[i + (j - r) * n] = sr / Math.min(j + 1, m - 1 + w - j, w);
      }
    }
  }
}

/***/ }),
/* 384 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__delaunay_js__ = __webpack_require__(385);
/* unused harmony reexport Delaunay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__voronoi_js__ = __webpack_require__(146);
/* unused harmony reexport Voronoi */



/***/ }),
/* 385 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_delaunator__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path_js__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__polygon_js__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voronoi_js__ = __webpack_require__(146);





const tau = 2 * Math.PI,
      pow = Math.pow;

function pointX(p) {
  return p[0];
}

function pointY(p) {
  return p[1];
}

// A triangulation is collinear if all its triangles have a non-null area
function collinear(d) {
  const { triangles, coords } = d;
  for (let i = 0; i < triangles.length; i += 3) {
    const a = 2 * triangles[i],
          b = 2 * triangles[i + 1],
          c = 2 * triangles[i + 2],
          cross = (coords[c] - coords[a]) * (coords[b + 1] - coords[a + 1]) - (coords[b] - coords[a]) * (coords[c + 1] - coords[a + 1]);
    if (cross > 1e-10) return false;
  }
  return true;
}

function jitter(x, y, r) {
  return [x + Math.sin(x + y) * r, y + Math.cos(x - y) * r];
}

class Delaunay {
  static from(points, fx = pointX, fy = pointY, that) {
    return new Delaunay("length" in points ? flatArray(points, fx, fy, that) : Float64Array.from(flatIterable(points, fx, fy, that)));
  }
  constructor(points) {
    this._delaunator = new __WEBPACK_IMPORTED_MODULE_0_delaunator__["a" /* default */](points);
    this.inedges = new Int32Array(points.length / 2);
    this._hullIndex = new Int32Array(points.length / 2);
    this.points = this._delaunator.coords;
    this._init();
  }
  update() {
    this._delaunator.update();
    this._init();
    return this;
  }
  _init() {
    const d = this._delaunator,
          points = this.points;

    // check for collinear
    if (d.hull && d.hull.length > 2 && collinear(d)) {
      this.collinear = Int32Array.from({ length: points.length / 2 }, (_, i) => i).sort((i, j) => points[2 * i] - points[2 * j] || points[2 * i + 1] - points[2 * j + 1]); // for exact neighbors
      const e = this.collinear[0],
            f = this.collinear[this.collinear.length - 1],
            bounds = [points[2 * e], points[2 * e + 1], points[2 * f], points[2 * f + 1]],
            r = 1e-8 * Math.hypot(bounds[3] - bounds[1], bounds[2] - bounds[0]);
      for (let i = 0, n = points.length / 2; i < n; ++i) {
        const p = jitter(points[2 * i], points[2 * i + 1], r);
        points[2 * i] = p[0];
        points[2 * i + 1] = p[1];
      }
      this._delaunator = new __WEBPACK_IMPORTED_MODULE_0_delaunator__["a" /* default */](points);
    } else {
      delete this.collinear;
    }

    const halfedges = this.halfedges = this._delaunator.halfedges;
    const hull = this.hull = this._delaunator.hull;
    const triangles = this.triangles = this._delaunator.triangles;
    const inedges = this.inedges.fill(-1);
    const hullIndex = this._hullIndex.fill(-1);

    // Compute an index from each point to an (arbitrary) incoming halfedge
    // Used to give the first neighbor of each point; for this reason,
    // on the hull we give priority to exterior halfedges
    for (let e = 0, n = halfedges.length; e < n; ++e) {
      const p = triangles[e % 3 === 2 ? e - 2 : e + 1];
      if (halfedges[e] === -1 || inedges[p] === -1) inedges[p] = e;
    }
    for (let i = 0, n = hull.length; i < n; ++i) {
      hullIndex[hull[i]] = i;
    }

    // degenerate case: 1 or 2 (distinct) points
    if (hull.length <= 2 && hull.length > 0) {
      this.triangles = new Int32Array(3).fill(-1);
      this.halfedges = new Int32Array(3).fill(-1);
      this.triangles[0] = hull[0];
      this.triangles[1] = hull[1];
      this.triangles[2] = hull[1];
      inedges[hull[0]] = 1;
      if (hull.length === 2) inedges[hull[1]] = 0;
    }
  }
  voronoi(bounds) {
    return new __WEBPACK_IMPORTED_MODULE_3__voronoi_js__["a" /* default */](this, bounds);
  }
  *neighbors(i) {
    const { inedges, hull, _hullIndex, halfedges, triangles, collinear } = this;

    // degenerate case with several collinear points
    if (collinear) {
      const l = collinear.indexOf(i);
      if (l > 0) yield collinear[l - 1];
      if (l < collinear.length - 1) yield collinear[l + 1];
      return;
    }

    const e0 = inedges[i];
    if (e0 === -1) return; // coincident point
    let e = e0,
        p0 = -1;
    do {
      yield p0 = triangles[e];
      e = e % 3 === 2 ? e - 2 : e + 1;
      if (triangles[e] !== i) return; // bad triangulation
      e = halfedges[e];
      if (e === -1) {
        const p = hull[(_hullIndex[i] + 1) % hull.length];
        if (p !== p0) yield p;
        return;
      }
    } while (e !== e0);
  }
  find(x, y, i = 0) {
    if ((x = +x, x !== x) || (y = +y, y !== y)) return -1;
    const i0 = i;
    let c;
    while ((c = this._step(i, x, y)) >= 0 && c !== i && c !== i0) i = c;
    return c;
  }
  _step(i, x, y) {
    const { inedges, hull, _hullIndex, halfedges, triangles, points } = this;
    if (inedges[i] === -1 || !points.length) return (i + 1) % (points.length >> 1);
    let c = i;
    let dc = pow(x - points[i * 2], 2) + pow(y - points[i * 2 + 1], 2);
    const e0 = inedges[i];
    let e = e0;
    do {
      let t = triangles[e];
      const dt = pow(x - points[t * 2], 2) + pow(y - points[t * 2 + 1], 2);
      if (dt < dc) dc = dt, c = t;
      e = e % 3 === 2 ? e - 2 : e + 1;
      if (triangles[e] !== i) break; // bad triangulation
      e = halfedges[e];
      if (e === -1) {
        e = hull[(_hullIndex[i] + 1) % hull.length];
        if (e !== t) {
          if (pow(x - points[e * 2], 2) + pow(y - points[e * 2 + 1], 2) < dc) return e;
        }
        break;
      }
    } while (e !== e0);
    return c;
  }
  render(context) {
    const buffer = context == null ? context = new __WEBPACK_IMPORTED_MODULE_1__path_js__["a" /* default */]() : undefined;
    const { points, halfedges, triangles } = this;
    for (let i = 0, n = halfedges.length; i < n; ++i) {
      const j = halfedges[i];
      if (j < i) continue;
      const ti = triangles[i] * 2;
      const tj = triangles[j] * 2;
      context.moveTo(points[ti], points[ti + 1]);
      context.lineTo(points[tj], points[tj + 1]);
    }
    this.renderHull(context);
    return buffer && buffer.value();
  }
  renderPoints(context, r = 2) {
    const buffer = context == null ? context = new __WEBPACK_IMPORTED_MODULE_1__path_js__["a" /* default */]() : undefined;
    const { points } = this;
    for (let i = 0, n = points.length; i < n; i += 2) {
      const x = points[i],
            y = points[i + 1];
      context.moveTo(x + r, y);
      context.arc(x, y, r, 0, tau);
    }
    return buffer && buffer.value();
  }
  renderHull(context) {
    const buffer = context == null ? context = new __WEBPACK_IMPORTED_MODULE_1__path_js__["a" /* default */]() : undefined;
    const { hull, points } = this;
    const h = hull[0] * 2,
          n = hull.length;
    context.moveTo(points[h], points[h + 1]);
    for (let i = 1; i < n; ++i) {
      const h = 2 * hull[i];
      context.lineTo(points[h], points[h + 1]);
    }
    context.closePath();
    return buffer && buffer.value();
  }
  hullPolygon() {
    const polygon = new __WEBPACK_IMPORTED_MODULE_2__polygon_js__["a" /* default */]();
    this.renderHull(polygon);
    return polygon.value();
  }
  renderTriangle(i, context) {
    const buffer = context == null ? context = new __WEBPACK_IMPORTED_MODULE_1__path_js__["a" /* default */]() : undefined;
    const { points, triangles } = this;
    const t0 = triangles[i *= 3] * 2;
    const t1 = triangles[i + 1] * 2;
    const t2 = triangles[i + 2] * 2;
    context.moveTo(points[t0], points[t0 + 1]);
    context.lineTo(points[t1], points[t1 + 1]);
    context.lineTo(points[t2], points[t2 + 1]);
    context.closePath();
    return buffer && buffer.value();
  }
  *trianglePolygons() {
    const { triangles } = this;
    for (let i = 0, n = triangles.length / 3; i < n; ++i) {
      yield this.trianglePolygon(i);
    }
  }
  trianglePolygon(i) {
    const polygon = new __WEBPACK_IMPORTED_MODULE_2__polygon_js__["a" /* default */]();
    this.renderTriangle(i, polygon);
    return polygon.value();
  }
}
/* unused harmony export default */


function flatArray(points, fx, fy, that) {
  const n = points.length;
  const array = new Float64Array(n * 2);
  for (let i = 0; i < n; ++i) {
    const p = points[i];
    array[i * 2] = fx.call(that, p, i, points);
    array[i * 2 + 1] = fy.call(that, p, i, points);
  }
  return array;
}

function* flatIterable(points, fx, fy, that) {
  let i = 0;
  for (const p of points) {
    yield fx.call(that, p, i, points);
    yield fy.call(that, p, i, points);
    ++i;
  }
}

/***/ }),
/* 386 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const EPSILON = Math.pow(2, -52);
const EDGE_STACK = new Uint32Array(512);

class Delaunator {

    static from(points, getX = defaultGetX, getY = defaultGetY) {
        const n = points.length;
        const coords = new Float64Array(n * 2);

        for (let i = 0; i < n; i++) {
            const p = points[i];
            coords[2 * i] = getX(p);
            coords[2 * i + 1] = getY(p);
        }

        return new Delaunator(coords);
    }

    constructor(coords) {
        const n = coords.length >> 1;
        if (n > 0 && typeof coords[0] !== 'number') throw new Error('Expected coords to contain numbers.');

        this.coords = coords;

        // arrays that will store the triangulation graph
        const maxTriangles = Math.max(2 * n - 5, 0);
        this._triangles = new Uint32Array(maxTriangles * 3);
        this._halfedges = new Int32Array(maxTriangles * 3);

        // temporary arrays for tracking the edges of the advancing convex hull
        this._hashSize = Math.ceil(Math.sqrt(n));
        this._hullPrev = new Uint32Array(n); // edge to prev edge
        this._hullNext = new Uint32Array(n); // edge to next edge
        this._hullTri = new Uint32Array(n); // edge to adjacent triangle
        this._hullHash = new Int32Array(this._hashSize).fill(-1); // angular edge hash

        // temporary arrays for sorting points
        this._ids = new Uint32Array(n);
        this._dists = new Float64Array(n);

        this.update();
    }

    update() {
        const { coords, _hullPrev: hullPrev, _hullNext: hullNext, _hullTri: hullTri, _hullHash: hullHash } = this;
        const n = coords.length >> 1;

        // populate an array of point indices; calculate input data bbox
        let minX = Infinity;
        let minY = Infinity;
        let maxX = -Infinity;
        let maxY = -Infinity;

        for (let i = 0; i < n; i++) {
            const x = coords[2 * i];
            const y = coords[2 * i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
            this._ids[i] = i;
        }
        const cx = (minX + maxX) / 2;
        const cy = (minY + maxY) / 2;

        let minDist = Infinity;
        let i0, i1, i2;

        // pick a seed point close to the center
        for (let i = 0; i < n; i++) {
            const d = dist(cx, cy, coords[2 * i], coords[2 * i + 1]);
            if (d < minDist) {
                i0 = i;
                minDist = d;
            }
        }
        const i0x = coords[2 * i0];
        const i0y = coords[2 * i0 + 1];

        minDist = Infinity;

        // find the point closest to the seed
        for (let i = 0; i < n; i++) {
            if (i === i0) continue;
            const d = dist(i0x, i0y, coords[2 * i], coords[2 * i + 1]);
            if (d < minDist && d > 0) {
                i1 = i;
                minDist = d;
            }
        }
        let i1x = coords[2 * i1];
        let i1y = coords[2 * i1 + 1];

        let minRadius = Infinity;

        // find the third point which forms the smallest circumcircle with the first two
        for (let i = 0; i < n; i++) {
            if (i === i0 || i === i1) continue;
            const r = circumradius(i0x, i0y, i1x, i1y, coords[2 * i], coords[2 * i + 1]);
            if (r < minRadius) {
                i2 = i;
                minRadius = r;
            }
        }
        let i2x = coords[2 * i2];
        let i2y = coords[2 * i2 + 1];

        if (minRadius === Infinity) {
            // order collinear points by dx (or dy if all x are identical)
            // and return the list as a hull
            for (let i = 0; i < n; i++) {
                this._dists[i] = coords[2 * i] - coords[0] || coords[2 * i + 1] - coords[1];
            }
            quicksort(this._ids, this._dists, 0, n - 1);
            const hull = new Uint32Array(n);
            let j = 0;
            for (let i = 0, d0 = -Infinity; i < n; i++) {
                const id = this._ids[i];
                if (this._dists[id] > d0) {
                    hull[j++] = id;
                    d0 = this._dists[id];
                }
            }
            this.hull = hull.subarray(0, j);
            this.triangles = new Uint32Array(0);
            this.halfedges = new Uint32Array(0);
            return;
        }

        // swap the order of the seed points for counter-clockwise orientation
        if (orient(i0x, i0y, i1x, i1y, i2x, i2y)) {
            const i = i1;
            const x = i1x;
            const y = i1y;
            i1 = i2;
            i1x = i2x;
            i1y = i2y;
            i2 = i;
            i2x = x;
            i2y = y;
        }

        const center = circumcenter(i0x, i0y, i1x, i1y, i2x, i2y);
        this._cx = center.x;
        this._cy = center.y;

        for (let i = 0; i < n; i++) {
            this._dists[i] = dist(coords[2 * i], coords[2 * i + 1], center.x, center.y);
        }

        // sort the points by distance from the seed triangle circumcenter
        quicksort(this._ids, this._dists, 0, n - 1);

        // set up the seed triangle as the starting hull
        this._hullStart = i0;
        let hullSize = 3;

        hullNext[i0] = hullPrev[i2] = i1;
        hullNext[i1] = hullPrev[i0] = i2;
        hullNext[i2] = hullPrev[i1] = i0;

        hullTri[i0] = 0;
        hullTri[i1] = 1;
        hullTri[i2] = 2;

        hullHash.fill(-1);
        hullHash[this._hashKey(i0x, i0y)] = i0;
        hullHash[this._hashKey(i1x, i1y)] = i1;
        hullHash[this._hashKey(i2x, i2y)] = i2;

        this.trianglesLen = 0;
        this._addTriangle(i0, i1, i2, -1, -1, -1);

        for (let k = 0, xp, yp; k < this._ids.length; k++) {
            const i = this._ids[k];
            const x = coords[2 * i];
            const y = coords[2 * i + 1];

            // skip near-duplicate points
            if (k > 0 && Math.abs(x - xp) <= EPSILON && Math.abs(y - yp) <= EPSILON) continue;
            xp = x;
            yp = y;

            // skip seed triangle points
            if (i === i0 || i === i1 || i === i2) continue;

            // find a visible edge on the convex hull using edge hash
            let start = 0;
            for (let j = 0, key = this._hashKey(x, y); j < this._hashSize; j++) {
                start = hullHash[(key + j) % this._hashSize];
                if (start !== -1 && start !== hullNext[start]) break;
            }

            start = hullPrev[start];
            let e = start,
                q;
            while (q = hullNext[e], !orient(x, y, coords[2 * e], coords[2 * e + 1], coords[2 * q], coords[2 * q + 1])) {
                e = q;
                if (e === start) {
                    e = -1;
                    break;
                }
            }
            if (e === -1) continue; // likely a near-duplicate point; skip it

            // add the first triangle from the point
            let t = this._addTriangle(e, i, hullNext[e], -1, -1, hullTri[e]);

            // recursively flip triangles from the point until they satisfy the Delaunay condition
            hullTri[i] = this._legalize(t + 2);
            hullTri[e] = t; // keep track of boundary triangles on the hull
            hullSize++;

            // walk forward through the hull, adding more triangles and flipping recursively
            let n = hullNext[e];
            while (q = hullNext[n], orient(x, y, coords[2 * n], coords[2 * n + 1], coords[2 * q], coords[2 * q + 1])) {
                t = this._addTriangle(n, i, q, hullTri[i], -1, hullTri[n]);
                hullTri[i] = this._legalize(t + 2);
                hullNext[n] = n; // mark as removed
                hullSize--;
                n = q;
            }

            // walk backward from the other side, adding more triangles and flipping
            if (e === start) {
                while (q = hullPrev[e], orient(x, y, coords[2 * q], coords[2 * q + 1], coords[2 * e], coords[2 * e + 1])) {
                    t = this._addTriangle(q, i, e, -1, hullTri[e], hullTri[q]);
                    this._legalize(t + 2);
                    hullTri[q] = t;
                    hullNext[e] = e; // mark as removed
                    hullSize--;
                    e = q;
                }
            }

            // update the hull indices
            this._hullStart = hullPrev[i] = e;
            hullNext[e] = hullPrev[n] = i;
            hullNext[i] = n;

            // save the two new edges in the hash table
            hullHash[this._hashKey(x, y)] = i;
            hullHash[this._hashKey(coords[2 * e], coords[2 * e + 1])] = e;
        }

        this.hull = new Uint32Array(hullSize);
        for (let i = 0, e = this._hullStart; i < hullSize; i++) {
            this.hull[i] = e;
            e = hullNext[e];
        }

        // trim typed triangle mesh arrays
        this.triangles = this._triangles.subarray(0, this.trianglesLen);
        this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
    }

    _hashKey(x, y) {
        return Math.floor(pseudoAngle(x - this._cx, y - this._cy) * this._hashSize) % this._hashSize;
    }

    _legalize(a) {
        const { _triangles: triangles, _halfedges: halfedges, coords } = this;

        let i = 0;
        let ar = 0;

        // recursion eliminated with a fixed-size stack
        while (true) {
            const b = halfedges[a];

            /* if the pair of triangles doesn't satisfy the Delaunay condition
             * (p1 is inside the circumcircle of [p0, pl, pr]), flip them,
             * then do the same check/flip recursively for the new pair of triangles
             *
             *           pl                    pl
             *          /||\                  /  \
             *       al/ || \bl            al/    \a
             *        /  ||  \              /      \
             *       /  a||b  \    flip    /___ar___\
             *     p0\   ||   /p1   =>   p0\---bl---/p1
             *        \  ||  /              \      /
             *       ar\ || /br             b\    /br
             *          \||/                  \  /
             *           pr                    pr
             */
            const a0 = a - a % 3;
            ar = a0 + (a + 2) % 3;

            if (b === -1) {
                // convex hull edge
                if (i === 0) break;
                a = EDGE_STACK[--i];
                continue;
            }

            const b0 = b - b % 3;
            const al = a0 + (a + 1) % 3;
            const bl = b0 + (b + 2) % 3;

            const p0 = triangles[ar];
            const pr = triangles[a];
            const pl = triangles[al];
            const p1 = triangles[bl];

            const illegal = inCircle(coords[2 * p0], coords[2 * p0 + 1], coords[2 * pr], coords[2 * pr + 1], coords[2 * pl], coords[2 * pl + 1], coords[2 * p1], coords[2 * p1 + 1]);

            if (illegal) {
                triangles[a] = p1;
                triangles[b] = p0;

                const hbl = halfedges[bl];

                // edge swapped on the other side of the hull (rare); fix the halfedge reference
                if (hbl === -1) {
                    let e = this._hullStart;
                    do {
                        if (this._hullTri[e] === bl) {
                            this._hullTri[e] = a;
                            break;
                        }
                        e = this._hullPrev[e];
                    } while (e !== this._hullStart);
                }
                this._link(a, hbl);
                this._link(b, halfedges[ar]);
                this._link(ar, bl);

                const br = b0 + (b + 1) % 3;

                // don't worry about hitting the cap: it can only happen on extremely degenerate input
                if (i < EDGE_STACK.length) {
                    EDGE_STACK[i++] = br;
                }
            } else {
                if (i === 0) break;
                a = EDGE_STACK[--i];
            }
        }

        return ar;
    }

    _link(a, b) {
        this._halfedges[a] = b;
        if (b !== -1) this._halfedges[b] = a;
    }

    // add a new triangle given vertex indices and adjacent half-edge ids
    _addTriangle(i0, i1, i2, a, b, c) {
        const t = this.trianglesLen;

        this._triangles[t] = i0;
        this._triangles[t + 1] = i1;
        this._triangles[t + 2] = i2;

        this._link(t, a);
        this._link(t + 1, b);
        this._link(t + 2, c);

        this.trianglesLen += 3;

        return t;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Delaunator;


// monotonically increases with real angle, but doesn't need expensive trigonometry
function pseudoAngle(dx, dy) {
    const p = dx / (Math.abs(dx) + Math.abs(dy));
    return (dy > 0 ? 3 - p : 1 + p) / 4; // [0..1]
}

function dist(ax, ay, bx, by) {
    const dx = ax - bx;
    const dy = ay - by;
    return dx * dx + dy * dy;
}

// return 2d orientation sign if we're confident in it through J. Shewchuk's error bound check
function orientIfSure(px, py, rx, ry, qx, qy) {
    const l = (ry - py) * (qx - px);
    const r = (rx - px) * (qy - py);
    return Math.abs(l - r) >= 3.3306690738754716e-16 * Math.abs(l + r) ? l - r : 0;
}

// a more robust orientation test that's stable in a given triangle (to fix robustness issues)
function orient(rx, ry, qx, qy, px, py) {
    const sign = orientIfSure(px, py, rx, ry, qx, qy) || orientIfSure(rx, ry, qx, qy, px, py) || orientIfSure(qx, qy, px, py, rx, ry);
    return sign < 0;
}

function inCircle(ax, ay, bx, by, cx, cy, px, py) {
    const dx = ax - px;
    const dy = ay - py;
    const ex = bx - px;
    const ey = by - py;
    const fx = cx - px;
    const fy = cy - py;

    const ap = dx * dx + dy * dy;
    const bp = ex * ex + ey * ey;
    const cp = fx * fx + fy * fy;

    return dx * (ey * cp - bp * fy) - dy * (ex * cp - bp * fx) + ap * (ex * fy - ey * fx) < 0;
}

function circumradius(ax, ay, bx, by, cx, cy) {
    const dx = bx - ax;
    const dy = by - ay;
    const ex = cx - ax;
    const ey = cy - ay;

    const bl = dx * dx + dy * dy;
    const cl = ex * ex + ey * ey;
    const d = 0.5 / (dx * ey - dy * ex);

    const x = (ey * bl - dy * cl) * d;
    const y = (dx * cl - ex * bl) * d;

    return x * x + y * y;
}

function circumcenter(ax, ay, bx, by, cx, cy) {
    const dx = bx - ax;
    const dy = by - ay;
    const ex = cx - ax;
    const ey = cy - ay;

    const bl = dx * dx + dy * dy;
    const cl = ex * ex + ey * ey;
    const d = 0.5 / (dx * ey - dy * ex);

    const x = ax + (ey * bl - dy * cl) * d;
    const y = ay + (dx * cl - ex * bl) * d;

    return { x, y };
}

function quicksort(ids, dists, left, right) {
    if (right - left <= 20) {
        for (let i = left + 1; i <= right; i++) {
            const temp = ids[i];
            const tempDist = dists[temp];
            let j = i - 1;
            while (j >= left && dists[ids[j]] > tempDist) ids[j + 1] = ids[j--];
            ids[j + 1] = temp;
        }
    } else {
        const median = left + right >> 1;
        let i = left + 1;
        let j = right;
        swap(ids, median, i);
        if (dists[ids[left]] > dists[ids[right]]) swap(ids, left, right);
        if (dists[ids[i]] > dists[ids[right]]) swap(ids, i, right);
        if (dists[ids[left]] > dists[ids[i]]) swap(ids, left, i);

        const temp = ids[i];
        const tempDist = dists[temp];
        while (true) {
            do i++; while (dists[ids[i]] < tempDist);
            do j--; while (dists[ids[j]] > tempDist);
            if (j < i) break;
            swap(ids, i, j);
        }
        ids[left + 1] = ids[j];
        ids[j] = temp;

        if (right - i + 1 >= j - left) {
            quicksort(ids, dists, i, right);
            quicksort(ids, dists, left, j - 1);
        } else {
            quicksort(ids, dists, left, j - 1);
            quicksort(ids, dists, i, right);
        }
    }
}

function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function defaultGetX(p) {
    return p[0];
}
function defaultGetY(p) {
    return p[1];
}

/***/ }),
/* 387 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return csvParse; });
/* unused harmony export csvParseRows */
/* unused harmony export csvFormat */
/* unused harmony export csvFormatBody */
/* unused harmony export csvFormatRows */
/* unused harmony export csvFormatRow */
/* unused harmony export csvFormatValue */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv_js__ = __webpack_require__(67);


var csv = Object(__WEBPACK_IMPORTED_MODULE_0__dsv_js__["a" /* default */])(",");

var csvParse = csv.parse;
var csvParseRows = csv.parseRows;
var csvFormat = csv.format;
var csvFormatBody = csv.formatBody;
var csvFormatRows = csv.formatRows;
var csvFormatRow = csv.formatRow;
var csvFormatValue = csv.formatValue;

/***/ }),
/* 388 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tsvParse; });
/* unused harmony export tsvParseRows */
/* unused harmony export tsvFormat */
/* unused harmony export tsvFormatBody */
/* unused harmony export tsvFormatRows */
/* unused harmony export tsvFormatRow */
/* unused harmony export tsvFormatValue */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv_js__ = __webpack_require__(67);


var tsv = Object(__WEBPACK_IMPORTED_MODULE_0__dsv_js__["a" /* default */])("\t");

var tsvParse = tsv.parse;
var tsvParseRows = tsv.parseRows;
var tsvFormat = tsv.format;
var tsvFormatBody = tsv.formatBody;
var tsvFormatRows = tsv.formatRows;
var tsvFormatRow = tsv.formatRow;
var tsvFormatValue = tsv.formatValue;

/***/ }),
/* 389 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function autoType(object) {
  for (var key in object) {
    var value = object[key].trim(),
        number,
        m;
    if (!value) value = null;else if (value === "true") value = true;else if (value === "false") value = false;else if (value === "NaN") value = NaN;else if (!isNaN(number = +value)) value = number;else if (m = value.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)) {
      if (fixtz && !!m[4] && !m[7]) value = value.replace(/-/g, "/").replace(/T/, " ");
      value = new Date(value);
    } else continue;
    object[key] = value;
  }
  return object;
}

// https://github.com/d3/d3-dsv/issues/45
const fixtz = new Date("2019-01-01T00:00").getHours() || new Date("2019-07-01T00:00").getHours();

/***/ }),
/* 390 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blob_js__ = __webpack_require__(391);
/* unused harmony reexport blob */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buffer_js__ = __webpack_require__(392);
/* unused harmony reexport buffer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dsv_js__ = __webpack_require__(393);
/* unused harmony reexport dsv */
/* unused harmony reexport csv */
/* unused harmony reexport tsv */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__image_js__ = __webpack_require__(394);
/* unused harmony reexport image */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__json_js__ = __webpack_require__(395);
/* unused harmony reexport json */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__text_js__ = __webpack_require__(68);
/* unused harmony reexport text */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__xml_js__ = __webpack_require__(396);
/* unused harmony reexport xml */
/* unused harmony reexport html */
/* unused harmony reexport svg */








/***/ }),
/* 391 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function responseBlob(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.blob();
}

/* unused harmony default export */ var _unused_webpack_default_export = (function (input, init) {
  return fetch(input, init).then(responseBlob);
});

/***/ }),
/* 392 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function responseArrayBuffer(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.arrayBuffer();
}

/* unused harmony default export */ var _unused_webpack_default_export = (function (input, init) {
  return fetch(input, init).then(responseArrayBuffer);
});

/***/ }),
/* 393 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* unused harmony export csv */
/* unused harmony export tsv */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dsv__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__text_js__ = __webpack_require__(68);



function dsvParse(parse) {
  return function (input, init, row) {
    if (arguments.length === 2 && typeof init === "function") row = init, init = undefined;
    return Object(__WEBPACK_IMPORTED_MODULE_1__text_js__["a" /* default */])(input, init).then(function (response) {
      return parse(response, row);
    });
  };
}

function dsv(delimiter, input, init, row) {
  if (arguments.length === 3 && typeof init === "function") row = init, init = undefined;
  var format = Object(__WEBPACK_IMPORTED_MODULE_0_d3_dsv__["b" /* dsvFormat */])(delimiter);
  return Object(__WEBPACK_IMPORTED_MODULE_1__text_js__["a" /* default */])(input, init).then(function (response) {
    return format.parse(response, row);
  });
}

var csv = dsvParse(__WEBPACK_IMPORTED_MODULE_0_d3_dsv__["a" /* csvParse */]);
var tsv = dsvParse(__WEBPACK_IMPORTED_MODULE_0_d3_dsv__["c" /* tsvParse */]);

/***/ }),
/* 394 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function (input, init) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    for (var key in init) image[key] = init[key];
    image.onerror = reject;
    image.onload = function () {
      resolve(image);
    };
    image.src = input;
  });
});

/***/ }),
/* 395 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function responseJson(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  if (response.status === 204 || response.status === 205) return;
  return response.json();
}

/* unused harmony default export */ var _unused_webpack_default_export = (function (input, init) {
  return fetch(input, init).then(responseJson);
});

/***/ }),
/* 396 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export html */
/* unused harmony export svg */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__text_js__ = __webpack_require__(68);


function parser(type) {
  return (input, init) => Object(__WEBPACK_IMPORTED_MODULE_0__text_js__["a" /* default */])(input, init).then(text => new DOMParser().parseFromString(text, type));
}

/* unused harmony default export */ var _unused_webpack_default_export = (parser("application/xml"));

var html = parser("text/html");

var svg = parser("image/svg+xml");

/***/ }),
/* 397 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__center_js__ = __webpack_require__(398);
/* unused harmony reexport forceCenter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collide_js__ = __webpack_require__(399);
/* unused harmony reexport forceCollide */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__link_js__ = __webpack_require__(413);
/* unused harmony reexport forceLink */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manyBody_js__ = __webpack_require__(414);
/* unused harmony reexport forceManyBody */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__radial_js__ = __webpack_require__(416);
/* unused harmony reexport forceRadial */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__simulation_js__ = __webpack_require__(148);
/* unused harmony reexport forceSimulation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__x_js__ = __webpack_require__(417);
/* unused harmony reexport forceX */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__y_js__ = __webpack_require__(418);
/* unused harmony reexport forceY */









/***/ }),
/* 398 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function (x, y) {
  var nodes,
      strength = 1;

  if (x == null) x = 0;
  if (y == null) y = 0;

  function force() {
    var i,
        n = nodes.length,
        node,
        sx = 0,
        sy = 0;

    for (i = 0; i < n; ++i) {
      node = nodes[i], sx += node.x, sy += node.y;
    }

    for (sx = (sx / n - x) * strength, sy = (sy / n - y) * strength, i = 0; i < n; ++i) {
      node = nodes[i], node.x -= sx, node.y -= sy;
    }
  }

  force.initialize = function (_) {
    nodes = _;
  };

  force.x = function (_) {
    return arguments.length ? (x = +_, force) : x;
  };

  force.y = function (_) {
    return arguments.length ? (y = +_, force) : y;
  };

  force.strength = function (_) {
    return arguments.length ? (strength = +_, force) : strength;
  };

  return force;
});

/***/ }),
/* 399 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_quadtree__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jiggle_js__ = __webpack_require__(71);




function x(d) {
  return d.x + d.vx;
}

function y(d) {
  return d.y + d.vy;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function (radius) {
  var nodes,
      radii,
      random,
      strength = 1,
      iterations = 1;

  if (typeof radius !== "function") radius = Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(radius == null ? 1 : +radius);

  function force() {
    var i,
        n = nodes.length,
        tree,
        node,
        xi,
        yi,
        ri,
        ri2;

    for (var k = 0; k < iterations; ++k) {
      tree = Object(__WEBPACK_IMPORTED_MODULE_0_d3_quadtree__["a" /* quadtree */])(nodes, x, y).visitAfter(prepare);
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        ri = radii[node.index], ri2 = ri * ri;
        xi = node.x + node.vx;
        yi = node.y + node.vy;
        tree.visit(apply);
      }
    }

    function apply(quad, x0, y0, x1, y1) {
      var data = quad.data,
          rj = quad.r,
          r = ri + rj;
      if (data) {
        if (data.index > node.index) {
          var x = xi - data.x - data.vx,
              y = yi - data.y - data.vy,
              l = x * x + y * y;
          if (l < r * r) {
            if (x === 0) x = Object(__WEBPACK_IMPORTED_MODULE_2__jiggle_js__["a" /* default */])(random), l += x * x;
            if (y === 0) y = Object(__WEBPACK_IMPORTED_MODULE_2__jiggle_js__["a" /* default */])(random), l += y * y;
            l = (r - (l = Math.sqrt(l))) / l * strength;
            node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
            node.vy += (y *= l) * r;
            data.vx -= x * (r = 1 - r);
            data.vy -= y * r;
          }
        }
        return;
      }
      return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
    }
  }

  function prepare(quad) {
    if (quad.data) return quad.r = radii[quad.data.index];
    for (var i = quad.r = 0; i < 4; ++i) {
      if (quad[i] && quad[i].r > quad.r) {
        quad.r = quad[i].r;
      }
    }
  }

  function initialize() {
    if (!nodes) return;
    var i,
        n = nodes.length,
        node;
    radii = new Array(n);
    for (i = 0; i < n; ++i) node = nodes[i], radii[node.index] = +radius(node, i, nodes);
  }

  force.initialize = function (_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };

  force.iterations = function (_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function (_) {
    return arguments.length ? (strength = +_, force) : strength;
  };

  force.radius = function (_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(+_), initialize(), force) : radius;
  };

  return force;
});

/***/ }),
/* 400 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = quadtree;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_js__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cover_js__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_js__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extent_js__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__find_js__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__remove_js__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__root_js__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__size_js__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__visit_js__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__visitAfter_js__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__x_js__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__y_js__ = __webpack_require__(412);













function quadtree(nodes, x, y) {
  var tree = new Quadtree(x == null ? __WEBPACK_IMPORTED_MODULE_10__x_js__["b" /* defaultX */] : x, y == null ? __WEBPACK_IMPORTED_MODULE_11__y_js__["b" /* defaultY */] : y, NaN, NaN, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}

function Quadtree(x, y, x0, y0, x1, y1) {
  this._x = x;
  this._y = y;
  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  this._root = undefined;
}

function leaf_copy(leaf) {
  var copy = { data: leaf.data },
      next = copy;
  while (leaf = leaf.next) next = next.next = { data: leaf.data };
  return copy;
}

var treeProto = quadtree.prototype = Quadtree.prototype;

treeProto.copy = function () {
  var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
      node = this._root,
      nodes,
      child;

  if (!node) return copy;

  if (!node.length) return copy._root = leaf_copy(node), copy;

  nodes = [{ source: node, target: copy._root = new Array(4) }];
  while (node = nodes.pop()) {
    for (var i = 0; i < 4; ++i) {
      if (child = node.source[i]) {
        if (child.length) nodes.push({ source: child, target: node.target[i] = new Array(4) });else node.target[i] = leaf_copy(child);
      }
    }
  }

  return copy;
};

treeProto.add = __WEBPACK_IMPORTED_MODULE_0__add_js__["b" /* default */];
treeProto.addAll = __WEBPACK_IMPORTED_MODULE_0__add_js__["a" /* addAll */];
treeProto.cover = __WEBPACK_IMPORTED_MODULE_1__cover_js__["a" /* default */];
treeProto.data = __WEBPACK_IMPORTED_MODULE_2__data_js__["a" /* default */];
treeProto.extent = __WEBPACK_IMPORTED_MODULE_3__extent_js__["a" /* default */];
treeProto.find = __WEBPACK_IMPORTED_MODULE_4__find_js__["a" /* default */];
treeProto.remove = __WEBPACK_IMPORTED_MODULE_5__remove_js__["a" /* default */];
treeProto.removeAll = __WEBPACK_IMPORTED_MODULE_5__remove_js__["b" /* removeAll */];
treeProto.root = __WEBPACK_IMPORTED_MODULE_6__root_js__["a" /* default */];
treeProto.size = __WEBPACK_IMPORTED_MODULE_7__size_js__["a" /* default */];
treeProto.visit = __WEBPACK_IMPORTED_MODULE_8__visit_js__["a" /* default */];
treeProto.visitAfter = __WEBPACK_IMPORTED_MODULE_9__visitAfter_js__["a" /* default */];
treeProto.x = __WEBPACK_IMPORTED_MODULE_10__x_js__["a" /* default */];
treeProto.y = __WEBPACK_IMPORTED_MODULE_11__y_js__["a" /* default */];

/***/ }),
/* 401 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addAll;
/* harmony default export */ __webpack_exports__["b"] = (function (d) {
  const x = +this._x.call(null, d),
        y = +this._y.call(null, d);
  return add(this.cover(x, y), x, y, d);
});

function add(tree, x, y, d) {
  if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points

  var parent,
      node = tree._root,
      leaf = { data: d },
      x0 = tree._x0,
      y0 = tree._y0,
      x1 = tree._x1,
      y1 = tree._y1,
      xm,
      ym,
      xp,
      yp,
      right,
      bottom,
      i,
      j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return tree._root = leaf, tree;

  // Find the existing leaf for the new point, or add it.
  while (node.length) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;else y1 = ym;
    if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
  }

  // Is the new point is exactly coincident with the existing point?
  xp = +tree._x.call(null, node.data);
  yp = +tree._y.call(null, node.data);
  if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;

  // Otherwise, split the leaf node until the old and new point are separated.
  do {
    parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;else y1 = ym;
  } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | xp >= xm));
  return parent[j] = node, parent[i] = leaf, tree;
}

function addAll(data) {
  var d,
      i,
      n = data.length,
      x,
      y,
      xz = new Array(n),
      yz = new Array(n),
      x0 = Infinity,
      y0 = Infinity,
      x1 = -Infinity,
      y1 = -Infinity;

  // Compute the points and their extent.
  for (i = 0; i < n; ++i) {
    if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
    xz[i] = x;
    yz[i] = y;
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }

  // If there were no (valid) points, abort.
  if (x0 > x1 || y0 > y1) return this;

  // Expand the tree to cover the new points.
  this.cover(x0, y0).cover(x1, y1);

  // Add the new points.
  for (i = 0; i < n; ++i) {
    add(this, xz[i], yz[i], data[i]);
  }

  return this;
}

/***/ }),
/* 402 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x, y) {
  if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points

  var x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1;

  // If the quadtree has no extent, initialize them.
  // Integer extent are necessary so that if we later double the extent,
  // the existing quadrant boundaries don’t change due to floating point error!
  if (isNaN(x0)) {
    x1 = (x0 = Math.floor(x)) + 1;
    y1 = (y0 = Math.floor(y)) + 1;
  }

  // Otherwise, double repeatedly to cover.
  else {
      var z = x1 - x0 || 1,
          node = this._root,
          parent,
          i;

      while (x0 > x || x >= x1 || y0 > y || y >= y1) {
        i = (y < y0) << 1 | x < x0;
        parent = new Array(4), parent[i] = node, node = parent, z *= 2;
        switch (i) {
          case 0:
            x1 = x0 + z, y1 = y0 + z;break;
          case 1:
            x0 = x1 - z, y1 = y0 + z;break;
          case 2:
            x1 = x0 + z, y0 = y1 - z;break;
          case 3:
            x0 = x1 - z, y0 = y1 - z;break;
        }
      }

      if (this._root && this._root.length) this._root = node;
    }

  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  return this;
});

/***/ }),
/* 403 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var data = [];
  this.visit(function (node) {
    if (!node.length) do data.push(node.data); while (node = node.next);
  });
  return data;
});

/***/ }),
/* 404 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (_) {
    return arguments.length ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1]) : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
});

/***/ }),
/* 405 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quad_js__ = __webpack_require__(70);


/* harmony default export */ __webpack_exports__["a"] = (function (x, y, radius) {
  var data,
      x0 = this._x0,
      y0 = this._y0,
      x1,
      y1,
      x2,
      y2,
      x3 = this._x1,
      y3 = this._y1,
      quads = [],
      node = this._root,
      q,
      i;

  if (node) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad_js__["a" /* default */](node, x0, y0, x3, y3));
  if (radius == null) radius = Infinity;else {
    x0 = x - radius, y0 = y - radius;
    x3 = x + radius, y3 = y + radius;
    radius *= radius;
  }

  while (q = quads.pop()) {

    // Stop searching if this quadrant can’t contain a closer node.
    if (!(node = q.node) || (x1 = q.x0) > x3 || (y1 = q.y0) > y3 || (x2 = q.x1) < x0 || (y2 = q.y1) < y0) continue;

    // Bisect the current quadrant.
    if (node.length) {
      var xm = (x1 + x2) / 2,
          ym = (y1 + y2) / 2;

      quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad_js__["a" /* default */](node[3], xm, ym, x2, y2), new __WEBPACK_IMPORTED_MODULE_0__quad_js__["a" /* default */](node[2], x1, ym, xm, y2), new __WEBPACK_IMPORTED_MODULE_0__quad_js__["a" /* default */](node[1], xm, y1, x2, ym), new __WEBPACK_IMPORTED_MODULE_0__quad_js__["a" /* default */](node[0], x1, y1, xm, ym));

      // Visit the closest quadrant first.
      if (i = (y >= ym) << 1 | x >= xm) {
        q = quads[quads.length - 1];
        quads[quads.length - 1] = quads[quads.length - 1 - i];
        quads[quads.length - 1 - i] = q;
      }
    }

    // Visit this point. (Visiting coincident points isn’t necessary!)
    else {
        var dx = x - +this._x.call(null, node.data),
            dy = y - +this._y.call(null, node.data),
            d2 = dx * dx + dy * dy;
        if (d2 < radius) {
          var d = Math.sqrt(radius = d2);
          x0 = x - d, y0 = y - d;
          x3 = x + d, y3 = y + d;
          data = node.data;
        }
      }
  }

  return data;
});

/***/ }),
/* 406 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = removeAll;
/* harmony default export */ __webpack_exports__["a"] = (function (d) {
  if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points

  var parent,
      node = this._root,
      retainer,
      previous,
      next,
      x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1,
      x,
      y,
      xm,
      ym,
      right,
      bottom,
      i,
      j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return this;

  // Find the leaf node for the point.
  // While descending, also retain the deepest parent with a non-removed sibling.
  if (node.length) while (true) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;else y1 = ym;
    if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
    if (!node.length) break;
    if (parent[i + 1 & 3] || parent[i + 2 & 3] || parent[i + 3 & 3]) retainer = parent, j = i;
  }

  // Find the point to remove.
  while (node.data !== d) if (!(previous = node, node = node.next)) return this;
  if (next = node.next) delete node.next;

  // If there are multiple coincident points, remove just the point.
  if (previous) return next ? previous.next = next : delete previous.next, this;

  // If this is the root point, remove it.
  if (!parent) return this._root = next, this;

  // Remove this leaf.
  next ? parent[i] = next : delete parent[i];

  // If the parent now contains exactly one leaf, collapse superfluous parents.
  if ((node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
    if (retainer) retainer[j] = node;else this._root = node;
  }

  return this;
});

function removeAll(data) {
  for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
  return this;
}

/***/ }),
/* 407 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return this._root;
});

/***/ }),
/* 408 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var size = 0;
  this.visit(function (node) {
    if (!node.length) do ++size; while (node = node.next);
  });
  return size;
});

/***/ }),
/* 409 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quad_js__ = __webpack_require__(70);


/* harmony default export */ __webpack_exports__["a"] = (function (callback) {
  var quads = [],
      q,
      node = this._root,
      child,
      x0,
      y0,
      x1,
      y1;
  if (node) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad_js__["a" /* default */](node, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
      var xm = (x0 + x1) / 2,
          ym = (y0 + y1) / 2;
      if (child = node[3]) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad_js__["a" /* default */](child, xm, ym, x1, y1));
      if (child = node[2]) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad_js__["a" /* default */](child, x0, ym, xm, y1));
      if (child = node[1]) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad_js__["a" /* default */](child, xm, y0, x1, ym));
      if (child = node[0]) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad_js__["a" /* default */](child, x0, y0, xm, ym));
    }
  }
  return this;
});

/***/ }),
/* 410 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quad_js__ = __webpack_require__(70);


/* harmony default export */ __webpack_exports__["a"] = (function (callback) {
  var quads = [],
      next = [],
      q;
  if (this._root) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad_js__["a" /* default */](this._root, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    var node = q.node;
    if (node.length) {
      var child,
          x0 = q.x0,
          y0 = q.y0,
          x1 = q.x1,
          y1 = q.y1,
          xm = (x0 + x1) / 2,
          ym = (y0 + y1) / 2;
      if (child = node[0]) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad_js__["a" /* default */](child, x0, y0, xm, ym));
      if (child = node[1]) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad_js__["a" /* default */](child, xm, y0, x1, ym));
      if (child = node[2]) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad_js__["a" /* default */](child, x0, ym, xm, y1));
      if (child = node[3]) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad_js__["a" /* default */](child, xm, ym, x1, y1));
    }
    next.push(q);
  }
  while (q = next.pop()) {
    callback(q.node, q.x0, q.y0, q.x1, q.y1);
  }
  return this;
});

/***/ }),
/* 411 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = defaultX;
function defaultX(d) {
  return d[0];
}

/* harmony default export */ __webpack_exports__["a"] = (function (_) {
  return arguments.length ? (this._x = _, this) : this._x;
});

/***/ }),
/* 412 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = defaultY;
function defaultY(d) {
  return d[1];
}

/* harmony default export */ __webpack_exports__["a"] = (function (_) {
  return arguments.length ? (this._y = _, this) : this._y;
});

/***/ }),
/* 413 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jiggle_js__ = __webpack_require__(71);



function index(d) {
  return d.index;
}

function find(nodeById, nodeId) {
  var node = nodeById.get(nodeId);
  if (!node) throw new Error("node not found: " + nodeId);
  return node;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function (links) {
  var id = index,
      strength = defaultStrength,
      strengths,
      distance = Object(__WEBPACK_IMPORTED_MODULE_0__constant_js__["a" /* default */])(30),
      distances,
      nodes,
      count,
      bias,
      random,
      iterations = 1;

  if (links == null) links = [];

  function defaultStrength(link) {
    return 1 / Math.min(count[link.source.index], count[link.target.index]);
  }

  function force(alpha) {
    for (var k = 0, n = links.length; k < iterations; ++k) {
      for (var i = 0, link, source, target, x, y, l, b; i < n; ++i) {
        link = links[i], source = link.source, target = link.target;
        x = target.x + target.vx - source.x - source.vx || Object(__WEBPACK_IMPORTED_MODULE_1__jiggle_js__["a" /* default */])(random);
        y = target.y + target.vy - source.y - source.vy || Object(__WEBPACK_IMPORTED_MODULE_1__jiggle_js__["a" /* default */])(random);
        l = Math.sqrt(x * x + y * y);
        l = (l - distances[i]) / l * alpha * strengths[i];
        x *= l, y *= l;
        target.vx -= x * (b = bias[i]);
        target.vy -= y * b;
        source.vx += x * (b = 1 - b);
        source.vy += y * b;
      }
    }
  }

  function initialize() {
    if (!nodes) return;

    var i,
        n = nodes.length,
        m = links.length,
        nodeById = new Map(nodes.map((d, i) => [id(d, i, nodes), d])),
        link;

    for (i = 0, count = new Array(n); i < m; ++i) {
      link = links[i], link.index = i;
      if (typeof link.source !== "object") link.source = find(nodeById, link.source);
      if (typeof link.target !== "object") link.target = find(nodeById, link.target);
      count[link.source.index] = (count[link.source.index] || 0) + 1;
      count[link.target.index] = (count[link.target.index] || 0) + 1;
    }

    for (i = 0, bias = new Array(m); i < m; ++i) {
      link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
    }

    strengths = new Array(m), initializeStrength();
    distances = new Array(m), initializeDistance();
  }

  function initializeStrength() {
    if (!nodes) return;

    for (var i = 0, n = links.length; i < n; ++i) {
      strengths[i] = +strength(links[i], i, links);
    }
  }

  function initializeDistance() {
    if (!nodes) return;

    for (var i = 0, n = links.length; i < n; ++i) {
      distances[i] = +distance(links[i], i, links);
    }
  }

  force.initialize = function (_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };

  force.links = function (_) {
    return arguments.length ? (links = _, initialize(), force) : links;
  };

  force.id = function (_) {
    return arguments.length ? (id = _, force) : id;
  };

  force.iterations = function (_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function (_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant_js__["a" /* default */])(+_), initializeStrength(), force) : strength;
  };

  force.distance = function (_) {
    return arguments.length ? (distance = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant_js__["a" /* default */])(+_), initializeDistance(), force) : distance;
  };

  return force;
});

/***/ }),
/* 414 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_quadtree__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jiggle_js__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__simulation_js__ = __webpack_require__(148);





/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var nodes,
      node,
      random,
      alpha,
      strength = Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(-30),
      strengths,
      distanceMin2 = 1,
      distanceMax2 = Infinity,
      theta2 = 0.81;

  function force(_) {
    var i,
        n = nodes.length,
        tree = Object(__WEBPACK_IMPORTED_MODULE_0_d3_quadtree__["a" /* quadtree */])(nodes, __WEBPACK_IMPORTED_MODULE_3__simulation_js__["a" /* x */], __WEBPACK_IMPORTED_MODULE_3__simulation_js__["b" /* y */]).visitAfter(accumulate);
    for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
  }

  function initialize() {
    if (!nodes) return;
    var i,
        n = nodes.length,
        node;
    strengths = new Array(n);
    for (i = 0; i < n; ++i) node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
  }

  function accumulate(quad) {
    var strength = 0,
        q,
        c,
        weight = 0,
        x,
        y,
        i;

    // For internal nodes, accumulate forces from child quadrants.
    if (quad.length) {
      for (x = y = i = 0; i < 4; ++i) {
        if ((q = quad[i]) && (c = Math.abs(q.value))) {
          strength += q.value, weight += c, x += c * q.x, y += c * q.y;
        }
      }
      quad.x = x / weight;
      quad.y = y / weight;
    }

    // For leaf nodes, accumulate forces from coincident quadrants.
    else {
        q = quad;
        q.x = q.data.x;
        q.y = q.data.y;
        do strength += strengths[q.data.index]; while (q = q.next);
      }

    quad.value = strength;
  }

  function apply(quad, x1, _, x2) {
    if (!quad.value) return true;

    var x = quad.x - node.x,
        y = quad.y - node.y,
        w = x2 - x1,
        l = x * x + y * y;

    // Apply the Barnes-Hut approximation if possible.
    // Limit forces for very close nodes; randomize direction if coincident.
    if (w * w / theta2 < l) {
      if (l < distanceMax2) {
        if (x === 0) x = Object(__WEBPACK_IMPORTED_MODULE_2__jiggle_js__["a" /* default */])(random), l += x * x;
        if (y === 0) y = Object(__WEBPACK_IMPORTED_MODULE_2__jiggle_js__["a" /* default */])(random), l += y * y;
        if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
        node.vx += x * quad.value * alpha / l;
        node.vy += y * quad.value * alpha / l;
      }
      return true;
    }

    // Otherwise, process points directly.
    else if (quad.length || l >= distanceMax2) return;

    // Limit forces for very close nodes; randomize direction if coincident.
    if (quad.data !== node || quad.next) {
      if (x === 0) x = Object(__WEBPACK_IMPORTED_MODULE_2__jiggle_js__["a" /* default */])(random), l += x * x;
      if (y === 0) y = Object(__WEBPACK_IMPORTED_MODULE_2__jiggle_js__["a" /* default */])(random), l += y * y;
      if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
    }

    do if (quad.data !== node) {
      w = strengths[quad.data.index] * alpha / l;
      node.vx += x * w;
      node.vy += y * w;
    } while (quad = quad.next);
  }

  force.initialize = function (_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };

  force.strength = function (_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(+_), initialize(), force) : strength;
  };

  force.distanceMin = function (_) {
    return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
  };

  force.distanceMax = function (_) {
    return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
  };

  force.theta = function (_) {
    return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
  };

  return force;
});

/***/ }),
/* 415 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use
const a = 1664525;
const c = 1013904223;
const m = 4294967296; // 2^32

/* harmony default export */ __webpack_exports__["a"] = (function () {
  let s = 1;
  return () => (s = (a * s + c) % m) / m;
});

/***/ }),
/* 416 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant_js__ = __webpack_require__(25);


/* unused harmony default export */ var _unused_webpack_default_export = (function (radius, x, y) {
  var nodes,
      strength = Object(__WEBPACK_IMPORTED_MODULE_0__constant_js__["a" /* default */])(0.1),
      strengths,
      radiuses;

  if (typeof radius !== "function") radius = Object(__WEBPACK_IMPORTED_MODULE_0__constant_js__["a" /* default */])(+radius);
  if (x == null) x = 0;
  if (y == null) y = 0;

  function force(alpha) {
    for (var i = 0, n = nodes.length; i < n; ++i) {
      var node = nodes[i],
          dx = node.x - x || 1e-6,
          dy = node.y - y || 1e-6,
          r = Math.sqrt(dx * dx + dy * dy),
          k = (radiuses[i] - r) * strengths[i] * alpha / r;
      node.vx += dx * k;
      node.vy += dy * k;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i,
        n = nodes.length;
    strengths = new Array(n);
    radiuses = new Array(n);
    for (i = 0; i < n; ++i) {
      radiuses[i] = +radius(nodes[i], i, nodes);
      strengths[i] = isNaN(radiuses[i]) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function (_) {
    nodes = _, initialize();
  };

  force.strength = function (_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant_js__["a" /* default */])(+_), initialize(), force) : strength;
  };

  force.radius = function (_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant_js__["a" /* default */])(+_), initialize(), force) : radius;
  };

  force.x = function (_) {
    return arguments.length ? (x = +_, force) : x;
  };

  force.y = function (_) {
    return arguments.length ? (y = +_, force) : y;
  };

  return force;
});

/***/ }),
/* 417 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant_js__ = __webpack_require__(25);


/* unused harmony default export */ var _unused_webpack_default_export = (function (x) {
  var strength = Object(__WEBPACK_IMPORTED_MODULE_0__constant_js__["a" /* default */])(0.1),
      nodes,
      strengths,
      xz;

  if (typeof x !== "function") x = Object(__WEBPACK_IMPORTED_MODULE_0__constant_js__["a" /* default */])(x == null ? 0 : +x);

  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i,
        n = nodes.length;
    strengths = new Array(n);
    xz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(xz[i] = +x(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function (_) {
    nodes = _;
    initialize();
  };

  force.strength = function (_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant_js__["a" /* default */])(+_), initialize(), force) : strength;
  };

  force.x = function (_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant_js__["a" /* default */])(+_), initialize(), force) : x;
  };

  return force;
});

/***/ }),
/* 418 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant_js__ = __webpack_require__(25);


/* unused harmony default export */ var _unused_webpack_default_export = (function (y) {
  var strength = Object(__WEBPACK_IMPORTED_MODULE_0__constant_js__["a" /* default */])(0.1),
      nodes,
      strengths,
      yz;

  if (typeof y !== "function") y = Object(__WEBPACK_IMPORTED_MODULE_0__constant_js__["a" /* default */])(y == null ? 0 : +y);

  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i,
        n = nodes.length;
    strengths = new Array(n);
    yz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function (_) {
    nodes = _;
    initialize();
  };

  force.strength = function (_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant_js__["a" /* default */])(+_), initialize(), force) : strength;
  };

  force.y = function (_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant_js__["a" /* default */])(+_), initialize(), force) : y;
  };

  return force;
});

/***/ }),
/* 419 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatPrefix; });
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale_js__ = __webpack_require__(149);


var locale;
var format;
var formatPrefix;

defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = Object(__WEBPACK_IMPORTED_MODULE_0__locale_js__["a" /* default */])(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

/***/ }),
/* 420 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (grouping, thousands) {
  return function (value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
});

/***/ }),
/* 421 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (numerals) {
  return function (value) {
    return value.replace(/[0-9]/g, function (i) {
      return numerals[+i];
    });
  };
});

/***/ }),
/* 422 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
/* harmony default export */ __webpack_exports__["a"] = (function (s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".":
        i0 = i1 = i;break;
      case "0":
        if (i0 === 0) i0 = i;i1 = i;break;
      default:
        if (!+s[i]) break out;if (i0 > 0) i0 = 0;break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
});

/***/ }),
/* 423 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formatPrefixAuto_js__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formatRounded_js__ = __webpack_require__(424);




/* harmony default export */ __webpack_exports__["a"] = ({
  "%": (x, p) => (x * 100).toFixed(p),
  "b": x => Math.round(x).toString(2),
  "c": x => x + "",
  "d": __WEBPACK_IMPORTED_MODULE_0__formatDecimal_js__["a" /* default */],
  "e": (x, p) => x.toExponential(p),
  "f": (x, p) => x.toFixed(p),
  "g": (x, p) => x.toPrecision(p),
  "o": x => Math.round(x).toString(8),
  "p": (x, p) => Object(__WEBPACK_IMPORTED_MODULE_2__formatRounded_js__["a" /* default */])(x * 100, p),
  "r": __WEBPACK_IMPORTED_MODULE_2__formatRounded_js__["a" /* default */],
  "s": __WEBPACK_IMPORTED_MODULE_1__formatPrefixAuto_js__["a" /* default */],
  "X": x => Math.round(x).toString(16).toUpperCase(),
  "x": x => Math.round(x).toString(16)
});

/***/ }),
/* 424 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal_js__ = __webpack_require__(41);


/* harmony default export */ __webpack_exports__["a"] = (function (x, p) {
    var d = Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal_js__["b" /* formatDecimalParts */])(x, p);
    if (!d) return x + "";
    var coefficient = d[0],
        exponent = d[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
});

/***/ }),
/* 425 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return x;
});

/***/ }),
/* 426 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent_js__ = __webpack_require__(40);


/* harmony default export */ __webpack_exports__["a"] = (function (step) {
  return Math.max(0, -Object(__WEBPACK_IMPORTED_MODULE_0__exponent_js__["a" /* default */])(Math.abs(step)));
});

/***/ }),
/* 427 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent_js__ = __webpack_require__(40);


/* harmony default export */ __webpack_exports__["a"] = (function (step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Object(__WEBPACK_IMPORTED_MODULE_0__exponent_js__["a" /* default */])(value) / 3))) * 3 - Object(__WEBPACK_IMPORTED_MODULE_0__exponent_js__["a" /* default */])(Math.abs(step)));
});

/***/ }),
/* 428 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent_js__ = __webpack_require__(40);


/* harmony default export */ __webpack_exports__["a"] = (function (step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, Object(__WEBPACK_IMPORTED_MODULE_0__exponent_js__["a" /* default */])(max) - Object(__WEBPACK_IMPORTED_MODULE_0__exponent_js__["a" /* default */])(step)) + 1;
});

/***/ }),
/* 429 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__area_js__ = __webpack_require__(152);
/* unused harmony reexport geoArea */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bounds_js__ = __webpack_require__(430);
/* unused harmony reexport geoBounds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__centroid_js__ = __webpack_require__(431);
/* unused harmony reexport geoCentroid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__circle_js__ = __webpack_require__(153);
/* unused harmony reexport geoCircle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clip_antimeridian_js__ = __webpack_require__(155);
/* unused harmony reexport geoClipAntimeridian */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__clip_circle_js__ = __webpack_require__(161);
/* unused harmony reexport geoClipCircle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__clip_extent_js__ = __webpack_require__(433);
/* unused harmony reexport geoClipExtent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__clip_rectangle_js__ = __webpack_require__(43);
/* unused harmony reexport geoClipRectangle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contains_js__ = __webpack_require__(435);
/* unused harmony reexport geoContains */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__distance_js__ = __webpack_require__(162);
/* unused harmony reexport geoDistance */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graticule_js__ = __webpack_require__(436);
/* unused harmony reexport geoGraticule */
/* unused harmony reexport geoGraticule10 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__interpolate_js__ = __webpack_require__(437);
/* unused harmony reexport geoInterpolate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__length_js__ = __webpack_require__(163);
/* unused harmony reexport geoLength */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__path_index_js__ = __webpack_require__(438);
/* unused harmony reexport geoPath */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__projection_albers_js__ = __webpack_require__(165);
/* unused harmony reexport geoAlbers */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__projection_albersUsa_js__ = __webpack_require__(446);
/* unused harmony reexport geoAlbersUsa */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__projection_azimuthalEqualArea_js__ = __webpack_require__(447);
/* unused harmony reexport geoAzimuthalEqualArea */
/* unused harmony reexport geoAzimuthalEqualAreaRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__projection_azimuthalEquidistant_js__ = __webpack_require__(448);
/* unused harmony reexport geoAzimuthalEquidistant */
/* unused harmony reexport geoAzimuthalEquidistantRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__projection_conicConformal_js__ = __webpack_require__(449);
/* unused harmony reexport geoConicConformal */
/* unused harmony reexport geoConicConformalRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__projection_conicEqualArea_js__ = __webpack_require__(74);
/* unused harmony reexport geoConicEqualArea */
/* unused harmony reexport geoConicEqualAreaRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__projection_conicEquidistant_js__ = __webpack_require__(450);
/* unused harmony reexport geoConicEquidistant */
/* unused harmony reexport geoConicEquidistantRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__projection_equalEarth_js__ = __webpack_require__(451);
/* unused harmony reexport geoEqualEarth */
/* unused harmony reexport geoEqualEarthRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__projection_equirectangular_js__ = __webpack_require__(166);
/* unused harmony reexport geoEquirectangular */
/* unused harmony reexport geoEquirectangularRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__projection_gnomonic_js__ = __webpack_require__(452);
/* unused harmony reexport geoGnomonic */
/* unused harmony reexport geoGnomonicRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__projection_identity_js__ = __webpack_require__(453);
/* unused harmony reexport geoIdentity */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__projection_index_js__ = __webpack_require__(13);
/* unused harmony reexport geoProjection */
/* unused harmony reexport geoProjectionMutator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__projection_mercator_js__ = __webpack_require__(77);
/* unused harmony reexport geoMercator */
/* unused harmony reexport geoMercatorRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__projection_naturalEarth1_js__ = __webpack_require__(454);
/* unused harmony reexport geoNaturalEarth1 */
/* unused harmony reexport geoNaturalEarth1Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__projection_orthographic_js__ = __webpack_require__(455);
/* unused harmony reexport geoOrthographic */
/* unused harmony reexport geoOrthographicRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__projection_stereographic_js__ = __webpack_require__(456);
/* unused harmony reexport geoStereographic */
/* unused harmony reexport geoStereographicRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__projection_transverseMercator_js__ = __webpack_require__(457);
/* unused harmony reexport geoTransverseMercator */
/* unused harmony reexport geoTransverseMercatorRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__rotation_js__ = __webpack_require__(42);
/* unused harmony reexport geoRotation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__stream_js__ = __webpack_require__(21);
/* unused harmony reexport geoStream */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__transform_js__ = __webpack_require__(44);
/* unused harmony reexport geoTransform */






 // DEPRECATED! Use d3.geoIdentity().clipExtent(…).




























/***/ }),
/* 430 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area_js__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cartesian_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stream_js__ = __webpack_require__(21);






var lambda0, phi0, lambda1, phi1, // bounds
lambda2, // previous lambda-coordinate
lambda00, phi00, // first point
p0, // previous 3D point
deltaSum, ranges, range;

var boundsStream = {
  point: boundsPoint,
  lineStart: boundsLineStart,
  lineEnd: boundsLineEnd,
  polygonStart: function () {
    boundsStream.point = boundsRingPoint;
    boundsStream.lineStart = boundsRingStart;
    boundsStream.lineEnd = boundsRingEnd;
    deltaSum = new __WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* Adder */]();
    __WEBPACK_IMPORTED_MODULE_1__area_js__["b" /* areaStream */].polygonStart();
  },
  polygonEnd: function () {
    __WEBPACK_IMPORTED_MODULE_1__area_js__["b" /* areaStream */].polygonEnd();
    boundsStream.point = boundsPoint;
    boundsStream.lineStart = boundsLineStart;
    boundsStream.lineEnd = boundsLineEnd;
    if (__WEBPACK_IMPORTED_MODULE_1__area_js__["a" /* areaRingSum */] < 0) lambda0 = -(lambda1 = 180), phi0 = -(phi1 = 90);else if (deltaSum > __WEBPACK_IMPORTED_MODULE_3__math_js__["i" /* epsilon */]) phi1 = 90;else if (deltaSum < -__WEBPACK_IMPORTED_MODULE_3__math_js__["i" /* epsilon */]) phi0 = -90;
    range[0] = lambda0, range[1] = lambda1;
  },
  sphere: function () {
    lambda0 = -(lambda1 = 180), phi0 = -(phi1 = 90);
  }
};

function boundsPoint(lambda, phi) {
  ranges.push(range = [lambda0 = lambda, lambda1 = lambda]);
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
}

function linePoint(lambda, phi) {
  var p = Object(__WEBPACK_IMPORTED_MODULE_2__cartesian_js__["a" /* cartesian */])([lambda * __WEBPACK_IMPORTED_MODULE_3__math_js__["s" /* radians */], phi * __WEBPACK_IMPORTED_MODULE_3__math_js__["s" /* radians */]]);
  if (p0) {
    var normal = Object(__WEBPACK_IMPORTED_MODULE_2__cartesian_js__["c" /* cartesianCross */])(p0, p),
        equatorial = [normal[1], -normal[0], 0],
        inflection = Object(__WEBPACK_IMPORTED_MODULE_2__cartesian_js__["c" /* cartesianCross */])(equatorial, normal);
    Object(__WEBPACK_IMPORTED_MODULE_2__cartesian_js__["e" /* cartesianNormalizeInPlace */])(inflection);
    inflection = Object(__WEBPACK_IMPORTED_MODULE_2__cartesian_js__["g" /* spherical */])(inflection);
    var delta = lambda - lambda2,
        sign = delta > 0 ? 1 : -1,
        lambdai = inflection[0] * __WEBPACK_IMPORTED_MODULE_3__math_js__["h" /* degrees */] * sign,
        phii,
        antimeridian = Object(__WEBPACK_IMPORTED_MODULE_3__math_js__["a" /* abs */])(delta) > 180;
    if (antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
      phii = inflection[1] * __WEBPACK_IMPORTED_MODULE_3__math_js__["h" /* degrees */];
      if (phii > phi1) phi1 = phii;
    } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
      phii = -inflection[1] * __WEBPACK_IMPORTED_MODULE_3__math_js__["h" /* degrees */];
      if (phii < phi0) phi0 = phii;
    } else {
      if (phi < phi0) phi0 = phi;
      if (phi > phi1) phi1 = phi;
    }
    if (antimeridian) {
      if (lambda < lambda2) {
        if (angle(lambda0, lambda) > angle(lambda0, lambda1)) lambda1 = lambda;
      } else {
        if (angle(lambda, lambda1) > angle(lambda0, lambda1)) lambda0 = lambda;
      }
    } else {
      if (lambda1 >= lambda0) {
        if (lambda < lambda0) lambda0 = lambda;
        if (lambda > lambda1) lambda1 = lambda;
      } else {
        if (lambda > lambda2) {
          if (angle(lambda0, lambda) > angle(lambda0, lambda1)) lambda1 = lambda;
        } else {
          if (angle(lambda, lambda1) > angle(lambda0, lambda1)) lambda0 = lambda;
        }
      }
    }
  } else {
    ranges.push(range = [lambda0 = lambda, lambda1 = lambda]);
  }
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
  p0 = p, lambda2 = lambda;
}

function boundsLineStart() {
  boundsStream.point = linePoint;
}

function boundsLineEnd() {
  range[0] = lambda0, range[1] = lambda1;
  boundsStream.point = boundsPoint;
  p0 = null;
}

function boundsRingPoint(lambda, phi) {
  if (p0) {
    var delta = lambda - lambda2;
    deltaSum.add(Object(__WEBPACK_IMPORTED_MODULE_3__math_js__["a" /* abs */])(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
  } else {
    lambda00 = lambda, phi00 = phi;
  }
  __WEBPACK_IMPORTED_MODULE_1__area_js__["b" /* areaStream */].point(lambda, phi);
  linePoint(lambda, phi);
}

function boundsRingStart() {
  __WEBPACK_IMPORTED_MODULE_1__area_js__["b" /* areaStream */].lineStart();
}

function boundsRingEnd() {
  boundsRingPoint(lambda00, phi00);
  __WEBPACK_IMPORTED_MODULE_1__area_js__["b" /* areaStream */].lineEnd();
  if (Object(__WEBPACK_IMPORTED_MODULE_3__math_js__["a" /* abs */])(deltaSum) > __WEBPACK_IMPORTED_MODULE_3__math_js__["i" /* epsilon */]) lambda0 = -(lambda1 = 180);
  range[0] = lambda0, range[1] = lambda1;
  p0 = null;
}

// Finds the left-right distance between two longitudes.
// This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
// the distance between ±180° to be 360°.
function angle(lambda0, lambda1) {
  return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
}

function rangeCompare(a, b) {
  return a[0] - b[0];
}

function rangeContains(range, x) {
  return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function (feature) {
  var i, n, a, b, merged, deltaMax, delta;

  phi1 = lambda1 = -(lambda0 = phi0 = Infinity);
  ranges = [];
  Object(__WEBPACK_IMPORTED_MODULE_4__stream_js__["a" /* default */])(feature, boundsStream);

  // First, sort ranges by their minimum longitudes.
  if (n = ranges.length) {
    ranges.sort(rangeCompare);

    // Then, merge any ranges that overlap.
    for (i = 1, a = ranges[0], merged = [a]; i < n; ++i) {
      b = ranges[i];
      if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
        if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
        if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
      } else {
        merged.push(a = b);
      }
    }

    // Finally, find the largest gap between the merged ranges.
    // The final bounding box will be the inverse of this gap.
    for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i) {
      b = merged[i];
      if ((delta = angle(a[1], b[0])) > deltaMax) deltaMax = delta, lambda0 = b[0], lambda1 = a[1];
    }
  }

  ranges = range = null;

  return lambda0 === Infinity || phi0 === Infinity ? [[NaN, NaN], [NaN, NaN]] : [[lambda0, phi0], [lambda1, phi1]];
});

/***/ }),
/* 431 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stream_js__ = __webpack_require__(21);





var W0, W1, X0, Y0, Z0, X1, Y1, Z1, X2, Y2, Z2, lambda00, phi00, // first point
x0, y0, z0; // previous point

var centroidStream = {
  sphere: __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */],
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function () {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function () {
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  }
};

// Arithmetic mean of Cartesian vectors.
function centroidPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* radians */];
  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(phi);
  centroidPointCartesian(cosPhi * Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(lambda), cosPhi * Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(lambda), Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(phi));
}

function centroidPointCartesian(x, y, z) {
  ++W0;
  X0 += (x - X0) / W0;
  Y0 += (y - Y0) / W0;
  Z0 += (z - Z0) / W0;
}

function centroidLineStart() {
  centroidStream.point = centroidLinePointFirst;
}

function centroidLinePointFirst(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* radians */];
  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(phi);
  x0 = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(lambda);
  y0 = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(lambda);
  z0 = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(phi);
  centroidStream.point = centroidLinePoint;
  centroidPointCartesian(x0, y0, z0);
}

function centroidLinePoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* radians */];
  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(phi),
      x = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(lambda),
      y = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(lambda),
      z = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(phi),
      w = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* atan2 */])(Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["v" /* sqrt */])((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

// See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
// J. Applied Mechanics 42, 239 (1975).
function centroidRingStart() {
  centroidStream.point = centroidRingPointFirst;
}

function centroidRingEnd() {
  centroidRingPoint(lambda00, phi00);
  centroidStream.point = centroidPoint;
}

function centroidRingPointFirst(lambda, phi) {
  lambda00 = lambda, phi00 = phi;
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* radians */];
  centroidStream.point = centroidRingPoint;
  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(phi);
  x0 = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(lambda);
  y0 = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(lambda);
  z0 = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(phi);
  centroidPointCartesian(x0, y0, z0);
}

function centroidRingPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* radians */];
  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(phi),
      x = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(lambda),
      y = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(lambda),
      z = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(phi),
      cx = y0 * z - z0 * y,
      cy = z0 * x - x0 * z,
      cz = x0 * y - y0 * x,
      m = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["n" /* hypot */])(cx, cy, cz),
      w = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* asin */])(m),
      // line weight = angle
  v = m && -w / m; // area weight multiplier
  X2.add(v * cx);
  Y2.add(v * cy);
  Z2.add(v * cz);
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}

/* unused harmony default export */ var _unused_webpack_default_export = (function (object) {
  W0 = W1 = X0 = Y0 = Z0 = X1 = Y1 = Z1 = 0;
  X2 = new __WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* Adder */]();
  Y2 = new __WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* Adder */]();
  Z2 = new __WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* Adder */]();
  Object(__WEBPACK_IMPORTED_MODULE_3__stream_js__["a" /* default */])(object, centroidStream);

  var x = +X2,
      y = +Y2,
      z = +Z2,
      m = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["n" /* hypot */])(x, y, z);

  // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
  if (m < __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* epsilon2 */]) {
    x = X1, y = Y1, z = Z1;
    // If the feature has zero length, fall back to arithmetic mean of point vectors.
    if (W1 < __WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* epsilon */]) x = X0, y = Y0, z = Z0;
    m = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["n" /* hypot */])(x, y, z);
    // If the feature still has an undefined ccentroid, then return.
    if (m < __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* epsilon2 */]) return [NaN, NaN];
  }

  return [Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* atan2 */])(y, x) * __WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* degrees */], Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* asin */])(z / m) * __WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* degrees */]];
});

/***/ }),
/* 432 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return function () {
    return x;
  };
});

/***/ }),
/* 433 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rectangle_js__ = __webpack_require__(43);


/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var x0 = 0,
      y0 = 0,
      x1 = 960,
      y1 = 500,
      cache,
      cacheStream,
      clip;

  return clip = {
    stream: function (stream) {
      return cache && cacheStream === stream ? cache : cache = Object(__WEBPACK_IMPORTED_MODULE_0__rectangle_js__["a" /* default */])(x0, y0, x1, y1)(cacheStream = stream);
    },
    extent: function (_) {
      return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], cache = cacheStream = null, clip) : [[x0, y0], [x1, y1]];
    }
  };
});

/***/ }),
/* 434 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (a, b, x0, y0, x1, y1) {
  var ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;

  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
  if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
  return true;
});

/***/ }),
/* 435 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polygonContains_js__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__distance_js__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(0);




var containsObjectType = {
  Feature: function (object, point) {
    return containsGeometry(object.geometry, point);
  },
  FeatureCollection: function (object, point) {
    var features = object.features,
        i = -1,
        n = features.length;
    while (++i < n) if (containsGeometry(features[i].geometry, point)) return true;
    return false;
  }
};

var containsGeometryType = {
  Sphere: function () {
    return true;
  },
  Point: function (object, point) {
    return containsPoint(object.coordinates, point);
  },
  MultiPoint: function (object, point) {
    var coordinates = object.coordinates,
        i = -1,
        n = coordinates.length;
    while (++i < n) if (containsPoint(coordinates[i], point)) return true;
    return false;
  },
  LineString: function (object, point) {
    return containsLine(object.coordinates, point);
  },
  MultiLineString: function (object, point) {
    var coordinates = object.coordinates,
        i = -1,
        n = coordinates.length;
    while (++i < n) if (containsLine(coordinates[i], point)) return true;
    return false;
  },
  Polygon: function (object, point) {
    return containsPolygon(object.coordinates, point);
  },
  MultiPolygon: function (object, point) {
    var coordinates = object.coordinates,
        i = -1,
        n = coordinates.length;
    while (++i < n) if (containsPolygon(coordinates[i], point)) return true;
    return false;
  },
  GeometryCollection: function (object, point) {
    var geometries = object.geometries,
        i = -1,
        n = geometries.length;
    while (++i < n) if (containsGeometry(geometries[i], point)) return true;
    return false;
  }
};

function containsGeometry(geometry, point) {
  return geometry && containsGeometryType.hasOwnProperty(geometry.type) ? containsGeometryType[geometry.type](geometry, point) : false;
}

function containsPoint(coordinates, point) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__distance_js__["a" /* default */])(coordinates, point) === 0;
}

function containsLine(coordinates, point) {
  var ao, bo, ab;
  for (var i = 0, n = coordinates.length; i < n; i++) {
    bo = Object(__WEBPACK_IMPORTED_MODULE_1__distance_js__["a" /* default */])(coordinates[i], point);
    if (bo === 0) return true;
    if (i > 0) {
      ab = Object(__WEBPACK_IMPORTED_MODULE_1__distance_js__["a" /* default */])(coordinates[i], coordinates[i - 1]);
      if (ab > 0 && ao <= ab && bo <= ab && (ao + bo - ab) * (1 - Math.pow((ao - bo) / ab, 2)) < __WEBPACK_IMPORTED_MODULE_2__math_js__["j" /* epsilon2 */] * ab) return true;
    }
    ao = bo;
  }
  return false;
}

function containsPolygon(coordinates, point) {
  return !!Object(__WEBPACK_IMPORTED_MODULE_0__polygonContains_js__["a" /* default */])(coordinates.map(ringRadians), pointRadians(point));
}

function ringRadians(ring) {
  return ring = ring.map(pointRadians), ring.pop(), ring;
}

function pointRadians(point) {
  return [point[0] * __WEBPACK_IMPORTED_MODULE_2__math_js__["s" /* radians */], point[1] * __WEBPACK_IMPORTED_MODULE_2__math_js__["s" /* radians */]];
}

/* unused harmony default export */ var _unused_webpack_default_export = (function (object, point) {
  return (object && containsObjectType.hasOwnProperty(object.type) ? containsObjectType[object.type] : containsGeometry)(object, point);
});

/***/ }),
/* 436 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* unused harmony export graticule10 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function graticuleX(y0, y1, dy) {
  var y = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["j" /* range */])(y0, y1 - __WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* epsilon */], dy).concat(y1);
  return function (x) {
    return y.map(function (y) {
      return [x, y];
    });
  };
}

function graticuleY(x0, x1, dx) {
  var x = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["j" /* range */])(x0, x1 - __WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* epsilon */], dx).concat(x1);
  return function (y) {
    return x.map(function (x) {
      return [x, y];
    });
  };
}

function graticule() {
  var x1,
      x0,
      X1,
      X0,
      y1,
      y0,
      Y1,
      Y0,
      dx = 10,
      dy = dx,
      DX = 90,
      DY = 360,
      x,
      y,
      X,
      Y,
      precision = 2.5;

  function graticule() {
    return { type: "MultiLineString", coordinates: lines() };
  }

  function lines() {
    return Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["j" /* range */])(Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* ceil */])(X0 / DX) * DX, X1, DX).map(X).concat(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["j" /* range */])(Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* ceil */])(Y0 / DY) * DY, Y1, DY).map(Y)).concat(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["j" /* range */])(Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* ceil */])(x0 / dx) * dx, x1, dx).filter(function (x) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(x % DX) > __WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* epsilon */];
    }).map(x)).concat(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["j" /* range */])(Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* ceil */])(y0 / dy) * dy, y1, dy).filter(function (y) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(y % DY) > __WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* epsilon */];
    }).map(y));
  }

  graticule.lines = function () {
    return lines().map(function (coordinates) {
      return { type: "LineString", coordinates: coordinates };
    });
  };

  graticule.outline = function () {
    return {
      type: "Polygon",
      coordinates: [X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1))]
    };
  };

  graticule.extent = function (_) {
    if (!arguments.length) return graticule.extentMinor();
    return graticule.extentMajor(_).extentMinor(_);
  };

  graticule.extentMajor = function (_) {
    if (!arguments.length) return [[X0, Y0], [X1, Y1]];
    X0 = +_[0][0], X1 = +_[1][0];
    Y0 = +_[0][1], Y1 = +_[1][1];
    if (X0 > X1) _ = X0, X0 = X1, X1 = _;
    if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
    return graticule.precision(precision);
  };

  graticule.extentMinor = function (_) {
    if (!arguments.length) return [[x0, y0], [x1, y1]];
    x0 = +_[0][0], x1 = +_[1][0];
    y0 = +_[0][1], y1 = +_[1][1];
    if (x0 > x1) _ = x0, x0 = x1, x1 = _;
    if (y0 > y1) _ = y0, y0 = y1, y1 = _;
    return graticule.precision(precision);
  };

  graticule.step = function (_) {
    if (!arguments.length) return graticule.stepMinor();
    return graticule.stepMajor(_).stepMinor(_);
  };

  graticule.stepMajor = function (_) {
    if (!arguments.length) return [DX, DY];
    DX = +_[0], DY = +_[1];
    return graticule;
  };

  graticule.stepMinor = function (_) {
    if (!arguments.length) return [dx, dy];
    dx = +_[0], dy = +_[1];
    return graticule;
  };

  graticule.precision = function (_) {
    if (!arguments.length) return precision;
    precision = +_;
    x = graticuleX(y0, y1, 90);
    y = graticuleY(x0, x1, precision);
    X = graticuleX(Y0, Y1, 90);
    Y = graticuleY(X0, X1, precision);
    return graticule;
  };

  return graticule.extentMajor([[-180, -90 + __WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* epsilon */]], [180, 90 - __WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* epsilon */]]]).extentMinor([[-180, -80 - __WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* epsilon */]], [180, 80 + __WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* epsilon */]]]);
}

function graticule10() {
  return graticule()();
}

/***/ }),
/* 437 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);


/* unused harmony default export */ var _unused_webpack_default_export = (function (a, b) {
  var x0 = a[0] * __WEBPACK_IMPORTED_MODULE_0__math_js__["s" /* radians */],
      y0 = a[1] * __WEBPACK_IMPORTED_MODULE_0__math_js__["s" /* radians */],
      x1 = b[0] * __WEBPACK_IMPORTED_MODULE_0__math_js__["s" /* radians */],
      y1 = b[1] * __WEBPACK_IMPORTED_MODULE_0__math_js__["s" /* radians */],
      cy0 = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* cos */])(y0),
      sy0 = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(y0),
      cy1 = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* cos */])(y1),
      sy1 = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(y1),
      kx0 = cy0 * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* cos */])(x0),
      ky0 = cy0 * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(x0),
      kx1 = cy1 * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* cos */])(x1),
      ky1 = cy1 * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(x1),
      d = 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* asin */])(Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["v" /* sqrt */])(Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["m" /* haversin */])(y1 - y0) + cy0 * cy1 * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["m" /* haversin */])(x1 - x0))),
      k = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(d);

  var interpolate = d ? function (t) {
    var B = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(t *= d) / k,
        A = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(d - t) / k,
        x = A * kx0 + B * kx1,
        y = A * ky0 + B * ky1,
        z = A * sy0 + B * sy1;
    return [Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* atan2 */])(y, x) * __WEBPACK_IMPORTED_MODULE_0__math_js__["h" /* degrees */], Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* atan2 */])(z, Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["v" /* sqrt */])(x * x + y * y)) * __WEBPACK_IMPORTED_MODULE_0__math_js__["h" /* degrees */]];
  } : function () {
    return [x0 * __WEBPACK_IMPORTED_MODULE_0__math_js__["h" /* degrees */], y0 * __WEBPACK_IMPORTED_MODULE_0__math_js__["h" /* degrees */]];
  };

  interpolate.distance = d;

  return interpolate;
});

/***/ }),
/* 438 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__identity_js__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stream_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area_js__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bounds_js__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__centroid_js__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__context_js__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__measure_js__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__string_js__ = __webpack_require__(443);









/* unused harmony default export */ var _unused_webpack_default_export = (function (projection, context) {
  var pointRadius = 4.5,
      projectionStream,
      contextStream;

  function path(object) {
    if (object) {
      if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
      Object(__WEBPACK_IMPORTED_MODULE_1__stream_js__["a" /* default */])(object, projectionStream(contextStream));
    }
    return contextStream.result();
  }

  path.area = function (object) {
    Object(__WEBPACK_IMPORTED_MODULE_1__stream_js__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_2__area_js__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_2__area_js__["a" /* default */].result();
  };

  path.measure = function (object) {
    Object(__WEBPACK_IMPORTED_MODULE_1__stream_js__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_6__measure_js__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_6__measure_js__["a" /* default */].result();
  };

  path.bounds = function (object) {
    Object(__WEBPACK_IMPORTED_MODULE_1__stream_js__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_3__bounds_js__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_3__bounds_js__["a" /* default */].result();
  };

  path.centroid = function (object) {
    Object(__WEBPACK_IMPORTED_MODULE_1__stream_js__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_4__centroid_js__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_4__centroid_js__["a" /* default */].result();
  };

  path.projection = function (_) {
    return arguments.length ? (projectionStream = _ == null ? (projection = null, __WEBPACK_IMPORTED_MODULE_0__identity_js__["a" /* default */]) : (projection = _).stream, path) : projection;
  };

  path.context = function (_) {
    if (!arguments.length) return context;
    contextStream = _ == null ? (context = null, new __WEBPACK_IMPORTED_MODULE_7__string_js__["a" /* default */]()) : new __WEBPACK_IMPORTED_MODULE_5__context_js__["a" /* default */](context = _);
    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
    return path;
  };

  path.pointRadius = function (_) {
    if (!arguments.length) return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path;
  };

  return path.projection(projection).context(context);
});

/***/ }),
/* 439 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop_js__ = __webpack_require__(18);




var areaSum = new __WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* Adder */](),
    areaRingSum = new __WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* Adder */](),
    x00,
    y00,
    x0,
    y0;

var areaStream = {
  point: __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */],
  lineStart: __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */],
  lineEnd: __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */],
  polygonStart: function () {
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function () {
    areaStream.lineStart = areaStream.lineEnd = areaStream.point = __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */];
    areaSum.add(Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(areaRingSum));
    areaRingSum = new __WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* Adder */]();
  },
  result: function () {
    var area = areaSum / 2;
    areaSum = new __WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* Adder */]();
    return area;
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaPointFirst(x, y) {
  areaStream.point = areaPoint;
  x00 = x0 = x, y00 = y0 = y;
}

function areaPoint(x, y) {
  areaRingSum.add(y0 * x - x0 * y);
  x0 = x, y0 = y;
}

function areaRingEnd() {
  areaPoint(x00, y00);
}

/* harmony default export */ __webpack_exports__["a"] = (areaStream);

/***/ }),
/* 440 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);


// TODO Enforce positive area for exterior, negative area for interior?

var X0 = 0,
    Y0 = 0,
    Z0 = 0,
    X1 = 0,
    Y1 = 0,
    Z1 = 0,
    X2 = 0,
    Y2 = 0,
    Z2 = 0,
    x00,
    y00,
    x0,
    y0;

var centroidStream = {
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function () {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function () {
    centroidStream.point = centroidPoint;
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  },
  result: function () {
    var centroid = Z2 ? [X2 / Z2, Y2 / Z2] : Z1 ? [X1 / Z1, Y1 / Z1] : Z0 ? [X0 / Z0, Y0 / Z0] : [NaN, NaN];
    X0 = Y0 = Z0 = X1 = Y1 = Z1 = X2 = Y2 = Z2 = 0;
    return centroid;
  }
};

function centroidPoint(x, y) {
  X0 += x;
  Y0 += y;
  ++Z0;
}

function centroidLineStart() {
  centroidStream.point = centroidPointFirstLine;
}

function centroidPointFirstLine(x, y) {
  centroidStream.point = centroidPointLine;
  centroidPoint(x0 = x, y0 = y);
}

function centroidPointLine(x, y) {
  var dx = x - x0,
      dy = y - y0,
      z = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["v" /* sqrt */])(dx * dx + dy * dy);
  X1 += z * (x0 + x) / 2;
  Y1 += z * (y0 + y) / 2;
  Z1 += z;
  centroidPoint(x0 = x, y0 = y);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

function centroidRingStart() {
  centroidStream.point = centroidPointFirstRing;
}

function centroidRingEnd() {
  centroidPointRing(x00, y00);
}

function centroidPointFirstRing(x, y) {
  centroidStream.point = centroidPointRing;
  centroidPoint(x00 = x0 = x, y00 = y0 = y);
}

function centroidPointRing(x, y) {
  var dx = x - x0,
      dy = y - y0,
      z = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["v" /* sqrt */])(dx * dx + dy * dy);

  X1 += z * (x0 + x) / 2;
  Y1 += z * (y0 + y) / 2;
  Z1 += z;

  z = y0 * x - x0 * y;
  X2 += z * (x0 + x);
  Y2 += z * (y0 + y);
  Z2 += z * 3;
  centroidPoint(x0 = x, y0 = y);
}

/* harmony default export */ __webpack_exports__["a"] = (centroidStream);

/***/ }),
/* 441 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PathContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop_js__ = __webpack_require__(18);



function PathContext(context) {
  this._context = context;
}

PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function (_) {
    return this._radius = _, this;
  },
  polygonStart: function () {
    this._line = 0;
  },
  polygonEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    if (this._line === 0) this._context.closePath();
    this._point = NaN;
  },
  point: function (x, y) {
    switch (this._point) {
      case 0:
        {
          this._context.moveTo(x, y);
          this._point = 1;
          break;
        }
      case 1:
        {
          this._context.lineTo(x, y);
          break;
        }
      default:
        {
          this._context.moveTo(x + this._radius, y);
          this._context.arc(x, y, this._radius, 0, __WEBPACK_IMPORTED_MODULE_0__math_js__["x" /* tau */]);
          break;
        }
    }
  },
  result: __WEBPACK_IMPORTED_MODULE_1__noop_js__["a" /* default */]
};

/***/ }),
/* 442 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop_js__ = __webpack_require__(18);




var lengthSum = new __WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* Adder */](),
    lengthRing,
    x00,
    y00,
    x0,
    y0;

var lengthStream = {
  point: __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */],
  lineStart: function () {
    lengthStream.point = lengthPointFirst;
  },
  lineEnd: function () {
    if (lengthRing) lengthPoint(x00, y00);
    lengthStream.point = __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */];
  },
  polygonStart: function () {
    lengthRing = true;
  },
  polygonEnd: function () {
    lengthRing = null;
  },
  result: function () {
    var length = +lengthSum;
    lengthSum = new __WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* Adder */]();
    return length;
  }
};

function lengthPointFirst(x, y) {
  lengthStream.point = lengthPoint;
  x00 = x0 = x, y00 = y0 = y;
}

function lengthPoint(x, y) {
  x0 -= x, y0 -= y;
  lengthSum.add(Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["v" /* sqrt */])(x0 * x0 + y0 * y0));
  x0 = x, y0 = y;
}

/* harmony default export */ __webpack_exports__["a"] = (lengthStream);

/***/ }),
/* 443 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PathString;
function PathString() {
  this._string = [];
}

PathString.prototype = {
  _radius: 4.5,
  _circle: circle(4.5),
  pointRadius: function (_) {
    if ((_ = +_) !== this._radius) this._radius = _, this._circle = null;
    return this;
  },
  polygonStart: function () {
    this._line = 0;
  },
  polygonEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    if (this._line === 0) this._string.push("Z");
    this._point = NaN;
  },
  point: function (x, y) {
    switch (this._point) {
      case 0:
        {
          this._string.push("M", x, ",", y);
          this._point = 1;
          break;
        }
      case 1:
        {
          this._string.push("L", x, ",", y);
          break;
        }
      default:
        {
          if (this._circle == null) this._circle = circle(this._radius);
          this._string.push("M", x, ",", y, this._circle);
          break;
        }
    }
  },
  result: function () {
    if (this._string.length) {
      var result = this._string.join("");
      this._string = [];
      return result;
    } else {
      return null;
    }
  }
};

function circle(radius) {
  return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
}

/***/ }),
/* 444 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transform_js__ = __webpack_require__(44);




var maxDepth = 16,
    // maximum depth of subdivision
cosMinDistance = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(30 * __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* radians */]); // cos(minimum angular distance)

/* harmony default export */ __webpack_exports__["a"] = (function (project, delta2) {
  return +delta2 ? resample(project, delta2) : resampleNone(project);
});

function resampleNone(project) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__transform_js__["a" /* transformer */])({
    point: function (x, y) {
      x = project(x, y);
      this.stream.point(x[0], x[1]);
    }
  });
}

function resample(project, delta2) {

  function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
    var dx = x1 - x0,
        dy = y1 - y0,
        d2 = dx * dx + dy * dy;
    if (d2 > 4 * delta2 && depth--) {
      var a = a0 + a1,
          b = b0 + b1,
          c = c0 + c1,
          m = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["v" /* sqrt */])(a * a + b * b + c * c),
          phi2 = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* asin */])(c /= m),
          lambda2 = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(c) - 1) < __WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* epsilon */] || Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(lambda0 - lambda1) < __WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* epsilon */] ? (lambda0 + lambda1) / 2 : Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* atan2 */])(b, a),
          p = project(lambda2, phi2),
          x2 = p[0],
          y2 = p[1],
          dx2 = x2 - x0,
          dy2 = y2 - y0,
          dz = dy * dx2 - dx * dy2;
      if (dz * dz / d2 > delta2 // perpendicular projected distance
      || Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
      || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
        // angular distance
        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
        stream.point(x2, y2);
        resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
      }
    }
  }
  return function (stream) {
    var lambda00, x00, y00, a00, b00, c00, // first point
    lambda0, x0, y0, a0, b0, c0; // previous point

    var resampleStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function () {
        stream.polygonStart();resampleStream.lineStart = ringStart;
      },
      polygonEnd: function () {
        stream.polygonEnd();resampleStream.lineStart = lineStart;
      }
    };

    function point(x, y) {
      x = project(x, y);
      stream.point(x[0], x[1]);
    }

    function lineStart() {
      x0 = NaN;
      resampleStream.point = linePoint;
      stream.lineStart();
    }

    function linePoint(lambda, phi) {
      var c = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["a" /* cartesian */])([lambda, phi]),
          p = project(lambda, phi);
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
      stream.point(x0, y0);
    }

    function lineEnd() {
      resampleStream.point = point;
      stream.lineEnd();
    }

    function ringStart() {
      lineStart();
      resampleStream.point = ringPoint;
      resampleStream.lineEnd = ringEnd;
    }

    function ringPoint(lambda, phi) {
      linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
      resampleStream.point = linePoint;
    }

    function ringEnd() {
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
      resampleStream.lineEnd = lineEnd;
      lineEnd();
    }

    return resampleStream;
  };
}

/***/ }),
/* 445 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cylindricalEqualAreaRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);


function cylindricalEqualAreaRaw(phi0) {
  var cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* cos */])(phi0);

  function forward(lambda, phi) {
    return [lambda * cosPhi0, Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(phi) / cosPhi0];
  }

  forward.invert = function (x, y) {
    return [x / cosPhi0, Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* asin */])(y * cosPhi0)];
  };

  return forward;
}

/***/ }),
/* 446 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__albers_js__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conicEqualArea_js__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fit_js__ = __webpack_require__(76);





// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
  var n = streams.length;
  return {
    point: function (x, y) {
      var i = -1;while (++i < n) streams[i].point(x, y);
    },
    sphere: function () {
      var i = -1;while (++i < n) streams[i].sphere();
    },
    lineStart: function () {
      var i = -1;while (++i < n) streams[i].lineStart();
    },
    lineEnd: function () {
      var i = -1;while (++i < n) streams[i].lineEnd();
    },
    polygonStart: function () {
      var i = -1;while (++i < n) streams[i].polygonStart();
    },
    polygonEnd: function () {
      var i = -1;while (++i < n) streams[i].polygonEnd();
    }
  };
}

// A composite projection for the United States, configured by default for
// 960×500. The projection also works quite well at 960×600 if you change the
// scale to 1285 and adjust the translate accordingly. The set of standard
// parallels for each region comes from USGS, which is published here:
// http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var cache,
      cacheStream,
      lower48 = Object(__WEBPACK_IMPORTED_MODULE_1__albers_js__["a" /* default */])(),
      lower48Point,
      alaska = Object(__WEBPACK_IMPORTED_MODULE_2__conicEqualArea_js__["a" /* default */])().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
      alaskaPoint,
      // EPSG:3338
  hawaii = Object(__WEBPACK_IMPORTED_MODULE_2__conicEqualArea_js__["a" /* default */])().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
      hawaiiPoint,
      // ESRI:102007
  point,
      pointStream = { point: function (x, y) {
      point = [x, y];
    } };

  function albersUsa(coordinates) {
    var x = coordinates[0],
        y = coordinates[1];
    return point = null, (lower48Point.point(x, y), point) || (alaskaPoint.point(x, y), point) || (hawaiiPoint.point(x, y), point);
  }

  albersUsa.invert = function (coordinates) {
    var k = lower48.scale(),
        t = lower48.translate(),
        x = (coordinates[0] - t[0]) / k,
        y = (coordinates[1] - t[1]) / k;
    return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii : lower48).invert(coordinates);
  };

  albersUsa.stream = function (stream) {
    return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
  };

  albersUsa.precision = function (_) {
    if (!arguments.length) return lower48.precision();
    lower48.precision(_), alaska.precision(_), hawaii.precision(_);
    return reset();
  };

  albersUsa.scale = function (_) {
    if (!arguments.length) return lower48.scale();
    lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
    return albersUsa.translate(lower48.translate());
  };

  albersUsa.translate = function (_) {
    if (!arguments.length) return lower48.translate();
    var k = lower48.scale(),
        x = +_[0],
        y = +_[1];

    lower48Point = lower48.translate(_).clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]]).stream(pointStream);

    alaskaPoint = alaska.translate([x - 0.307 * k, y + 0.201 * k]).clipExtent([[x - 0.425 * k + __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* epsilon */], y + 0.120 * k + __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* epsilon */]], [x - 0.214 * k - __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* epsilon */], y + 0.234 * k - __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* epsilon */]]]).stream(pointStream);

    hawaiiPoint = hawaii.translate([x - 0.205 * k, y + 0.212 * k]).clipExtent([[x - 0.214 * k + __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* epsilon */], y + 0.166 * k + __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* epsilon */]], [x - 0.115 * k - __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* epsilon */], y + 0.234 * k - __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* epsilon */]]]).stream(pointStream);

    return reset();
  };

  albersUsa.fitExtent = function (extent, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__fit_js__["a" /* fitExtent */])(albersUsa, extent, object);
  };

  albersUsa.fitSize = function (size, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__fit_js__["c" /* fitSize */])(albersUsa, size, object);
  };

  albersUsa.fitWidth = function (width, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__fit_js__["d" /* fitWidth */])(albersUsa, width, object);
  };

  albersUsa.fitHeight = function (height, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__fit_js__["b" /* fitHeight */])(albersUsa, height, object);
  };

  function reset() {
    cache = cacheStream = null;
    return albersUsa;
  }

  return albersUsa.scale(1070);
});

/***/ }),
/* 447 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export azimuthalEqualAreaRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_js__ = __webpack_require__(13);




var azimuthalEqualAreaRaw = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal_js__["b" /* azimuthalRaw */])(function (cxcy) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["v" /* sqrt */])(2 / (1 + cxcy));
});

azimuthalEqualAreaRaw.invert = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal_js__["a" /* azimuthalInvert */])(function (z) {
  return 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* asin */])(z / 2);
});

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_2__index_js__["a" /* default */])(azimuthalEqualAreaRaw).scale(124.75).clipAngle(180 - 1e-3);
});

/***/ }),
/* 448 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export azimuthalEquidistantRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_js__ = __webpack_require__(13);




var azimuthalEquidistantRaw = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal_js__["b" /* azimuthalRaw */])(function (c) {
  return (c = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* acos */])(c)) && c / Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(c);
});

azimuthalEquidistantRaw.invert = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal_js__["a" /* azimuthalInvert */])(function (z) {
  return z;
});

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_2__index_js__["a" /* default */])(azimuthalEquidistantRaw).scale(79.4188).clipAngle(180 - 1e-3);
});

/***/ }),
/* 449 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export conicConformalRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic_js__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mercator_js__ = __webpack_require__(77);




function tany(y) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["w" /* tan */])((__WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* halfPi */] + y) / 2);
}

function conicConformalRaw(y0, y1) {
  var cy0 = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* cos */])(y0),
      n = y0 === y1 ? Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(y0) : Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["o" /* log */])(cy0 / Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* cos */])(y1)) / Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["o" /* log */])(tany(y1) / tany(y0)),
      f = cy0 * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["q" /* pow */])(tany(y0), n) / n;

  if (!n) return __WEBPACK_IMPORTED_MODULE_2__mercator_js__["b" /* mercatorRaw */];

  function project(x, y) {
    if (f > 0) {
      if (y < -__WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* halfPi */] + __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* epsilon */]) y = -__WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* halfPi */] + __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* epsilon */];
    } else {
      if (y > __WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* epsilon */]) y = __WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* epsilon */];
    }
    var r = f / Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["q" /* pow */])(tany(y), n);
    return [r * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(n * x), f - r * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* cos */])(n * x)];
  }

  project.invert = function (x, y) {
    var fy = f - y,
        r = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["t" /* sign */])(n) * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["v" /* sqrt */])(x * x + fy * fy),
        l = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* atan2 */])(x, Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* abs */])(fy)) * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["t" /* sign */])(fy);
    if (fy * n < 0) l -= __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* pi */] * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["t" /* sign */])(x) * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["t" /* sign */])(fy);
    return [l / n, 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* atan */])(Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["q" /* pow */])(f / r, 1 / n)) - __WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* halfPi */]];
  };

  return project;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_1__conic_js__["a" /* conicProjection */])(conicConformalRaw).scale(109.5).parallels([30, 30]);
});

/***/ }),
/* 450 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export conicEquidistantRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic_js__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equirectangular_js__ = __webpack_require__(166);




function conicEquidistantRaw(y0, y1) {
  var cy0 = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* cos */])(y0),
      n = y0 === y1 ? Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(y0) : (cy0 - Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* cos */])(y1)) / (y1 - y0),
      g = cy0 / n + y0;

  if (Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* abs */])(n) < __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* epsilon */]) return __WEBPACK_IMPORTED_MODULE_2__equirectangular_js__["a" /* equirectangularRaw */];

  function project(x, y) {
    var gy = g - y,
        nx = n * x;
    return [gy * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(nx), g - gy * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* cos */])(nx)];
  }

  project.invert = function (x, y) {
    var gy = g - y,
        l = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* atan2 */])(x, Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* abs */])(gy)) * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["t" /* sign */])(gy);
    if (gy * n < 0) l -= __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* pi */] * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["t" /* sign */])(x) * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["t" /* sign */])(gy);
    return [l / n, g - Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["t" /* sign */])(n) * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["v" /* sqrt */])(x * x + gy * gy)];
  };

  return project;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_1__conic_js__["a" /* conicProjection */])(conicEquidistantRaw).scale(131.154).center([0, 13.9389]);
});

/***/ }),
/* 451 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export equalEarthRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



var A1 = 1.340264,
    A2 = -0.081106,
    A3 = 0.000893,
    A4 = 0.003796,
    M = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["v" /* sqrt */])(3) / 2,
    iterations = 12;

function equalEarthRaw(lambda, phi) {
  var l = Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* asin */])(M * Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(phi)),
      l2 = l * l,
      l6 = l2 * l2 * l2;
  return [lambda * Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(l) / (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2))), l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2))];
}

equalEarthRaw.invert = function (x, y) {
  var l = y,
      l2 = l * l,
      l6 = l2 * l2 * l2;
  for (var i = 0, delta, fy, fpy; i < iterations; ++i) {
    fy = l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2)) - y;
    fpy = A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2);
    l -= delta = fy / fpy, l2 = l * l, l6 = l2 * l2 * l2;
    if (Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(delta) < __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* epsilon2 */]) break;
  }
  return [M * x * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)) / Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* cos */])(l), Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* asin */])(Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* sin */])(l) / M)];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */])(equalEarthRaw).scale(177.158);
});

/***/ }),
/* 452 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export gnomonicRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_js__ = __webpack_require__(13);




function gnomonicRaw(x, y) {
  var cy = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* cos */])(y),
      k = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* cos */])(x) * cy;
  return [cy * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(x) / k, Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(y) / k];
}

gnomonicRaw.invert = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal_js__["a" /* azimuthalInvert */])(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* atan */]);

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_2__index_js__["a" /* default */])(gnomonicRaw).scale(144.049).clipAngle(60);
});

/***/ }),
/* 453 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clip_rectangle_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity_js__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transform_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fit_js__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__math_js__ = __webpack_require__(0);






/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var k = 1,
      tx = 0,
      ty = 0,
      sx = 1,
      sy = 1,
      // scale, translate and reflect
  alpha = 0,
      ca,
      sa,
      // angle
  x0 = null,
      y0,
      x1,
      y1,
      // clip extent
  kx = 1,
      ky = 1,
      transform = Object(__WEBPACK_IMPORTED_MODULE_2__transform_js__["a" /* transformer */])({
    point: function (x, y) {
      var p = projection([x, y]);
      this.stream.point(p[0], p[1]);
    }
  }),
      postclip = __WEBPACK_IMPORTED_MODULE_1__identity_js__["a" /* default */],
      cache,
      cacheStream;

  function reset() {
    kx = k * sx;
    ky = k * sy;
    cache = cacheStream = null;
    return projection;
  }

  function projection(p) {
    var x = p[0] * kx,
        y = p[1] * ky;
    if (alpha) {
      var t = y * ca - x * sa;
      x = x * ca + y * sa;
      y = t;
    }
    return [x + tx, y + ty];
  }
  projection.invert = function (p) {
    var x = p[0] - tx,
        y = p[1] - ty;
    if (alpha) {
      var t = y * ca + x * sa;
      x = x * ca - y * sa;
      y = t;
    }
    return [x / kx, y / ky];
  };
  projection.stream = function (stream) {
    return cache && cacheStream === stream ? cache : cache = transform(postclip(cacheStream = stream));
  };
  projection.postclip = function (_) {
    return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
  };
  projection.clipExtent = function (_) {
    return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, __WEBPACK_IMPORTED_MODULE_1__identity_js__["a" /* default */]) : Object(__WEBPACK_IMPORTED_MODULE_0__clip_rectangle_js__["a" /* default */])(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };
  projection.scale = function (_) {
    return arguments.length ? (k = +_, reset()) : k;
  };
  projection.translate = function (_) {
    return arguments.length ? (tx = +_[0], ty = +_[1], reset()) : [tx, ty];
  };
  projection.angle = function (_) {
    return arguments.length ? (alpha = _ % 360 * __WEBPACK_IMPORTED_MODULE_4__math_js__["s" /* radians */], sa = Object(__WEBPACK_IMPORTED_MODULE_4__math_js__["u" /* sin */])(alpha), ca = Object(__WEBPACK_IMPORTED_MODULE_4__math_js__["g" /* cos */])(alpha), reset()) : alpha * __WEBPACK_IMPORTED_MODULE_4__math_js__["h" /* degrees */];
  };
  projection.reflectX = function (_) {
    return arguments.length ? (sx = _ ? -1 : 1, reset()) : sx < 0;
  };
  projection.reflectY = function (_) {
    return arguments.length ? (sy = _ ? -1 : 1, reset()) : sy < 0;
  };
  projection.fitExtent = function (extent, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__fit_js__["a" /* fitExtent */])(projection, extent, object);
  };
  projection.fitSize = function (size, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__fit_js__["c" /* fitSize */])(projection, size, object);
  };
  projection.fitWidth = function (width, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__fit_js__["d" /* fitWidth */])(projection, width, object);
  };
  projection.fitHeight = function (height, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__fit_js__["b" /* fitHeight */])(projection, height, object);
  };

  return projection;
});

/***/ }),
/* 454 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export naturalEarth1Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function naturalEarth1Raw(lambda, phi) {
  var phi2 = phi * phi,
      phi4 = phi2 * phi2;
  return [lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (0.003971 * phi2 - 0.001529 * phi4))), phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4)))];
}

naturalEarth1Raw.invert = function (x, y) {
  var phi = y,
      i = 25,
      delta;
  do {
    var phi2 = phi * phi,
        phi4 = phi2 * phi2;
    phi -= delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4))) - y) / (1.007226 + phi2 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi2 - 0.005916 * 11 * phi4)));
  } while (Object(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* epsilon */] && --i > 0);
  return [x / (0.8707 + (phi2 = phi * phi) * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (0.003971 - 0.001529 * phi2)))), phi];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */])(naturalEarth1Raw).scale(175.295);
});

/***/ }),
/* 455 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export orthographicRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_js__ = __webpack_require__(13);




function orthographicRaw(x, y) {
  return [Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* cos */])(y) * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(x), Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(y)];
}

orthographicRaw.invert = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal_js__["a" /* azimuthalInvert */])(__WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* asin */]);

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_2__index_js__["a" /* default */])(orthographicRaw).scale(249.5).clipAngle(90 + __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* epsilon */]);
});

/***/ }),
/* 456 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export stereographicRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_js__ = __webpack_require__(13);




function stereographicRaw(x, y) {
  var cy = Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* cos */])(y),
      k = 1 + Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* cos */])(x) * cy;
  return [cy * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(x) / k, Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* sin */])(y) / k];
}

stereographicRaw.invert = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal_js__["a" /* azimuthalInvert */])(function (z) {
  return 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* atan */])(z);
});

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_2__index_js__["a" /* default */])(stereographicRaw).scale(250).clipAngle(142);
});

/***/ }),
/* 457 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export transverseMercatorRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mercator_js__ = __webpack_require__(77);



function transverseMercatorRaw(lambda, phi) {
  return [Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["o" /* log */])(Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["w" /* tan */])((__WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* halfPi */] + phi) / 2)), -lambda];
}

transverseMercatorRaw.invert = function (x, y) {
  return [-y, 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* atan */])(Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["k" /* exp */])(x)) - __WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* halfPi */]];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var m = Object(__WEBPACK_IMPORTED_MODULE_1__mercator_js__["a" /* mercatorProjection */])(transverseMercatorRaw),
      center = m.center,
      rotate = m.rotate;

  m.center = function (_) {
    return arguments.length ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
  };

  m.rotate = function (_) {
    return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
  };

  return rotate([0, 0, 90]).scale(159.155);
});

/***/ }),
/* 458 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cluster_js__ = __webpack_require__(459);
/* unused harmony reexport cluster */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hierarchy_index_js__ = __webpack_require__(78);
/* unused harmony reexport hierarchy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pack_index_js__ = __webpack_require__(473);
/* unused harmony reexport pack */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pack_siblings_js__ = __webpack_require__(167);
/* unused harmony reexport packSiblings */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pack_enclose_js__ = __webpack_require__(169);
/* unused harmony reexport packEnclose */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__partition_js__ = __webpack_require__(474);
/* unused harmony reexport partition */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stratify_js__ = __webpack_require__(475);
/* unused harmony reexport stratify */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tree_js__ = __webpack_require__(476);
/* unused harmony reexport tree */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__treemap_index_js__ = __webpack_require__(477);
/* unused harmony reexport treemap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__treemap_binary_js__ = __webpack_require__(478);
/* unused harmony reexport treemapBinary */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__treemap_dice_js__ = __webpack_require__(28);
/* unused harmony reexport treemapDice */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__treemap_slice_js__ = __webpack_require__(45);
/* unused harmony reexport treemapSlice */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__treemap_sliceDice_js__ = __webpack_require__(479);
/* unused harmony reexport treemapSliceDice */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__treemap_squarify_js__ = __webpack_require__(80);
/* unused harmony reexport treemapSquarify */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__treemap_resquarify_js__ = __webpack_require__(480);
/* unused harmony reexport treemapResquarify */
















/***/ }),
/* 459 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function defaultSeparation(a, b) {
  return a.parent === b.parent ? 1 : 2;
}

function meanX(children) {
  return children.reduce(meanXReduce, 0) / children.length;
}

function meanXReduce(x, c) {
  return x + c.x;
}

function maxY(children) {
  return 1 + children.reduce(maxYReduce, 0);
}

function maxYReduce(y, c) {
  return Math.max(y, c.y);
}

function leafLeft(node) {
  var children;
  while (children = node.children) node = children[0];
  return node;
}

function leafRight(node) {
  var children;
  while (children = node.children) node = children[children.length - 1];
  return node;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var separation = defaultSeparation,
      dx = 1,
      dy = 1,
      nodeSize = false;

  function cluster(root) {
    var previousNode,
        x = 0;

    // First walk, computing the initial x & y values.
    root.eachAfter(function (node) {
      var children = node.children;
      if (children) {
        node.x = meanX(children);
        node.y = maxY(children);
      } else {
        node.x = previousNode ? x += separation(node, previousNode) : 0;
        node.y = 0;
        previousNode = node;
      }
    });

    var left = leafLeft(root),
        right = leafRight(root),
        x0 = left.x - separation(left, right) / 2,
        x1 = right.x + separation(right, left) / 2;

    // Second walk, normalizing x & y to the desired size.
    return root.eachAfter(nodeSize ? function (node) {
      node.x = (node.x - root.x) * dx;
      node.y = (root.y - node.y) * dy;
    } : function (node) {
      node.x = (node.x - x0) / (x1 - x0) * dx;
      node.y = (1 - (root.y ? node.y / root.y : 1)) * dy;
    });
  }

  cluster.separation = function (x) {
    return arguments.length ? (separation = x, cluster) : separation;
  };

  cluster.size = function (x) {
    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], cluster) : nodeSize ? null : [dx, dy];
  };

  cluster.nodeSize = function (x) {
    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], cluster) : nodeSize ? [dx, dy] : null;
  };

  return cluster;
});

/***/ }),
/* 460 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function count(node) {
  var sum = 0,
      children = node.children,
      i = children && children.length;
  if (!i) sum = 1;else while (--i >= 0) sum += children[i].value;
  node.value = sum;
}

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return this.eachAfter(count);
});

/***/ }),
/* 461 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (callback, that) {
  let index = -1;
  for (const node of this) {
    callback.call(that, node, ++index, this);
  }
  return this;
});

/***/ }),
/* 462 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (callback, that) {
  var node = this,
      nodes = [node],
      children,
      i,
      index = -1;
  while (node = nodes.pop()) {
    callback.call(that, node, ++index, this);
    if (children = node.children) {
      for (i = children.length - 1; i >= 0; --i) {
        nodes.push(children[i]);
      }
    }
  }
  return this;
});

/***/ }),
/* 463 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (callback, that) {
  var node = this,
      nodes = [node],
      next = [],
      children,
      i,
      n,
      index = -1;
  while (node = nodes.pop()) {
    next.push(node);
    if (children = node.children) {
      for (i = 0, n = children.length; i < n; ++i) {
        nodes.push(children[i]);
      }
    }
  }
  while (node = next.pop()) {
    callback.call(that, node, ++index, this);
  }
  return this;
});

/***/ }),
/* 464 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (callback, that) {
  let index = -1;
  for (const node of this) {
    if (callback.call(that, node, ++index, this)) {
      return node;
    }
  }
});

/***/ }),
/* 465 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (value) {
  return this.eachAfter(function (node) {
    var sum = +value(node.data) || 0,
        children = node.children,
        i = children && children.length;
    while (--i >= 0) sum += children[i].value;
    node.value = sum;
  });
});

/***/ }),
/* 466 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (compare) {
  return this.eachBefore(function (node) {
    if (node.children) {
      node.children.sort(compare);
    }
  });
});

/***/ }),
/* 467 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (end) {
  var start = this,
      ancestor = leastCommonAncestor(start, end),
      nodes = [start];
  while (start !== ancestor) {
    start = start.parent;
    nodes.push(start);
  }
  var k = nodes.length;
  while (end !== ancestor) {
    nodes.splice(k, 0, end);
    end = end.parent;
  }
  return nodes;
});

function leastCommonAncestor(a, b) {
  if (a === b) return a;
  var aNodes = a.ancestors(),
      bNodes = b.ancestors(),
      c = null;
  a = aNodes.pop();
  b = bNodes.pop();
  while (a === b) {
    c = a;
    a = aNodes.pop();
    b = bNodes.pop();
  }
  return c;
}

/***/ }),
/* 468 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var node = this,
      nodes = [node];
  while (node = node.parent) {
    nodes.push(node);
  }
  return nodes;
});

/***/ }),
/* 469 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Array.from(this);
});

/***/ }),
/* 470 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var leaves = [];
  this.eachBefore(function (node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
});

/***/ }),
/* 471 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var root = this,
      links = [];
  root.each(function (node) {
    if (node !== root) {
      // Don’t include the root’s parent, if any.
      links.push({ source: node.parent, target: node });
    }
  });
  return links;
});

/***/ }),
/* 472 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function* () {
  var node = this,
      current,
      next = [node],
      children,
      i,
      n;
  do {
    current = next.reverse(), next = [];
    while (node = current.pop()) {
      yield node;
      if (children = node.children) {
        for (i = 0, n = children.length; i < n; ++i) {
          next.push(children[i]);
        }
      }
    }
  } while (next.length);
});

/***/ }),
/* 473 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__siblings_js__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accessors_js__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant_js__ = __webpack_require__(170);




function defaultRadius(d) {
  return Math.sqrt(d.value);
}

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var radius = null,
      dx = 1,
      dy = 1,
      padding = __WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* constantZero */];

  function pack(root) {
    root.x = dx / 2, root.y = dy / 2;
    if (radius) {
      root.eachBefore(radiusLeaf(radius)).eachAfter(packChildren(padding, 0.5)).eachBefore(translateChild(1));
    } else {
      root.eachBefore(radiusLeaf(defaultRadius)).eachAfter(packChildren(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* constantZero */], 1)).eachAfter(packChildren(padding, root.r / Math.min(dx, dy))).eachBefore(translateChild(Math.min(dx, dy) / (2 * root.r)));
    }
    return root;
  }

  pack.radius = function (x) {
    return arguments.length ? (radius = Object(__WEBPACK_IMPORTED_MODULE_1__accessors_js__["a" /* optional */])(x), pack) : radius;
  };

  pack.size = function (x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], pack) : [dx, dy];
  };

  pack.padding = function (x) {
    return arguments.length ? (padding = typeof x === "function" ? x : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["b" /* default */])(+x), pack) : padding;
  };

  return pack;
});

function radiusLeaf(radius) {
  return function (node) {
    if (!node.children) {
      node.r = Math.max(0, +radius(node) || 0);
    }
  };
}

function packChildren(padding, k) {
  return function (node) {
    if (children = node.children) {
      var children,
          i,
          n = children.length,
          r = padding(node) * k || 0,
          e;

      if (r) for (i = 0; i < n; ++i) children[i].r += r;
      e = Object(__WEBPACK_IMPORTED_MODULE_0__siblings_js__["a" /* packEnclose */])(children);
      if (r) for (i = 0; i < n; ++i) children[i].r -= r;
      node.r = e + r;
    }
  };
}

function translateChild(k) {
  return function (node) {
    var parent = node.parent;
    node.r *= k;
    if (parent) {
      node.x = parent.x + k * node.x;
      node.y = parent.y + k * node.y;
    }
  };
}

/***/ }),
/* 474 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__treemap_round_js__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__treemap_dice_js__ = __webpack_require__(28);



/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var dx = 1,
      dy = 1,
      padding = 0,
      round = false;

  function partition(root) {
    var n = root.height + 1;
    root.x0 = root.y0 = padding;
    root.x1 = dx;
    root.y1 = dy / n;
    root.eachBefore(positionNode(dy, n));
    if (round) root.eachBefore(__WEBPACK_IMPORTED_MODULE_0__treemap_round_js__["a" /* default */]);
    return root;
  }

  function positionNode(dy, n) {
    return function (node) {
      if (node.children) {
        Object(__WEBPACK_IMPORTED_MODULE_1__treemap_dice_js__["a" /* default */])(node, node.x0, dy * (node.depth + 1) / n, node.x1, dy * (node.depth + 2) / n);
      }
      var x0 = node.x0,
          y0 = node.y0,
          x1 = node.x1 - padding,
          y1 = node.y1 - padding;
      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
      node.x0 = x0;
      node.y0 = y0;
      node.x1 = x1;
      node.y1 = y1;
    };
  }

  partition.round = function (x) {
    return arguments.length ? (round = !!x, partition) : round;
  };

  partition.size = function (x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], partition) : [dx, dy];
  };

  partition.padding = function (x) {
    return arguments.length ? (padding = +x, partition) : padding;
  };

  return partition;
});

/***/ }),
/* 475 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accessors_js__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hierarchy_index_js__ = __webpack_require__(78);



var preroot = { depth: -1 },
    ambiguous = {};

function defaultId(d) {
  return d.id;
}

function defaultParentId(d) {
  return d.parentId;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var id = defaultId,
      parentId = defaultParentId;

  function stratify(data) {
    var nodes = Array.from(data),
        n = nodes.length,
        d,
        i,
        root,
        parent,
        node,
        nodeId,
        nodeKey,
        nodeByKey = new Map();

    for (i = 0; i < n; ++i) {
      d = nodes[i], node = nodes[i] = new __WEBPACK_IMPORTED_MODULE_1__hierarchy_index_js__["a" /* Node */](d);
      if ((nodeId = id(d, i, data)) != null && (nodeId += "")) {
        nodeKey = node.id = nodeId;
        nodeByKey.set(nodeKey, nodeByKey.has(nodeKey) ? ambiguous : node);
      }
      if ((nodeId = parentId(d, i, data)) != null && (nodeId += "")) {
        node.parent = nodeId;
      }
    }

    for (i = 0; i < n; ++i) {
      node = nodes[i];
      if (nodeId = node.parent) {
        parent = nodeByKey.get(nodeId);
        if (!parent) throw new Error("missing: " + nodeId);
        if (parent === ambiguous) throw new Error("ambiguous: " + nodeId);
        if (parent.children) parent.children.push(node);else parent.children = [node];
        node.parent = parent;
      } else {
        if (root) throw new Error("multiple roots");
        root = node;
      }
    }

    if (!root) throw new Error("no root");
    root.parent = preroot;
    root.eachBefore(function (node) {
      node.depth = node.parent.depth + 1;--n;
    }).eachBefore(__WEBPACK_IMPORTED_MODULE_1__hierarchy_index_js__["b" /* computeHeight */]);
    root.parent = null;
    if (n > 0) throw new Error("cycle");

    return root;
  }

  stratify.id = function (x) {
    return arguments.length ? (id = Object(__WEBPACK_IMPORTED_MODULE_0__accessors_js__["b" /* required */])(x), stratify) : id;
  };

  stratify.parentId = function (x) {
    return arguments.length ? (parentId = Object(__WEBPACK_IMPORTED_MODULE_0__accessors_js__["b" /* required */])(x), stratify) : parentId;
  };

  return stratify;
});

/***/ }),
/* 476 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hierarchy_index_js__ = __webpack_require__(78);


function defaultSeparation(a, b) {
  return a.parent === b.parent ? 1 : 2;
}

// function radialSeparation(a, b) {
//   return (a.parent === b.parent ? 1 : 2) / a.depth;
// }

// This function is used to traverse the left contour of a subtree (or
// subforest). It returns the successor of v on this contour. This successor is
// either given by the leftmost child of v or by the thread of v. The function
// returns null if and only if v is on the highest level of its subtree.
function nextLeft(v) {
  var children = v.children;
  return children ? children[0] : v.t;
}

// This function works analogously to nextLeft.
function nextRight(v) {
  var children = v.children;
  return children ? children[children.length - 1] : v.t;
}

// Shifts the current subtree rooted at w+. This is done by increasing
// prelim(w+) and mod(w+) by shift.
function moveSubtree(wm, wp, shift) {
  var change = shift / (wp.i - wm.i);
  wp.c -= change;
  wp.s += shift;
  wm.c += change;
  wp.z += shift;
  wp.m += shift;
}

// All other shifts, applied to the smaller subtrees between w- and w+, are
// performed by this function. To prepare the shifts, we have to adjust
// change(w+), shift(w+), and change(w-).
function executeShifts(v) {
  var shift = 0,
      change = 0,
      children = v.children,
      i = children.length,
      w;
  while (--i >= 0) {
    w = children[i];
    w.z += shift;
    w.m += shift;
    shift += w.s + (change += w.c);
  }
}

// If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,
// returns the specified (default) ancestor.
function nextAncestor(vim, v, ancestor) {
  return vim.a.parent === v.parent ? vim.a : ancestor;
}

function TreeNode(node, i) {
  this._ = node;
  this.parent = null;
  this.children = null;
  this.A = null; // default ancestor
  this.a = this; // ancestor
  this.z = 0; // prelim
  this.m = 0; // mod
  this.c = 0; // change
  this.s = 0; // shift
  this.t = null; // thread
  this.i = i; // number
}

TreeNode.prototype = Object.create(__WEBPACK_IMPORTED_MODULE_0__hierarchy_index_js__["a" /* Node */].prototype);

function treeRoot(root) {
  var tree = new TreeNode(root, 0),
      node,
      nodes = [tree],
      child,
      children,
      i,
      n;

  while (node = nodes.pop()) {
    if (children = node._.children) {
      node.children = new Array(n = children.length);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new TreeNode(children[i], i));
        child.parent = node;
      }
    }
  }

  (tree.parent = new TreeNode(null, 0)).children = [tree];
  return tree;
}

// Node-link tree diagram using the Reingold-Tilford "tidy" algorithm
/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var separation = defaultSeparation,
      dx = 1,
      dy = 1,
      nodeSize = null;

  function tree(root) {
    var t = treeRoot(root);

    // Compute the layout using Buchheim et al.’s algorithm.
    t.eachAfter(firstWalk), t.parent.m = -t.z;
    t.eachBefore(secondWalk);

    // If a fixed node size is specified, scale x and y.
    if (nodeSize) root.eachBefore(sizeNode);

    // If a fixed tree size is specified, scale x and y based on the extent.
    // Compute the left-most, right-most, and depth-most nodes for extents.
    else {
        var left = root,
            right = root,
            bottom = root;
        root.eachBefore(function (node) {
          if (node.x < left.x) left = node;
          if (node.x > right.x) right = node;
          if (node.depth > bottom.depth) bottom = node;
        });
        var s = left === right ? 1 : separation(left, right) / 2,
            tx = s - left.x,
            kx = dx / (right.x + s + tx),
            ky = dy / (bottom.depth || 1);
        root.eachBefore(function (node) {
          node.x = (node.x + tx) * kx;
          node.y = node.depth * ky;
        });
      }

    return root;
  }

  // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is
  // applied recursively to the children of v, as well as the function
  // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the
  // node v is placed to the midpoint of its outermost children.
  function firstWalk(v) {
    var children = v.children,
        siblings = v.parent.children,
        w = v.i ? siblings[v.i - 1] : null;
    if (children) {
      executeShifts(v);
      var midpoint = (children[0].z + children[children.length - 1].z) / 2;
      if (w) {
        v.z = w.z + separation(v._, w._);
        v.m = v.z - midpoint;
      } else {
        v.z = midpoint;
      }
    } else if (w) {
      v.z = w.z + separation(v._, w._);
    }
    v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
  }

  // Computes all real x-coordinates by summing up the modifiers recursively.
  function secondWalk(v) {
    v._.x = v.z + v.parent.m;
    v.m += v.parent.m;
  }

  // The core of the algorithm. Here, a new subtree is combined with the
  // previous subtrees. Threads are used to traverse the inside and outside
  // contours of the left and right subtree up to the highest common level. The
  // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the
  // superscript o means outside and i means inside, the subscript - means left
  // subtree and + means right subtree. For summing up the modifiers along the
  // contour, we use respective variables si+, si-, so-, and so+. Whenever two
  // nodes of the inside contours conflict, we compute the left one of the
  // greatest uncommon ancestors using the function ANCESTOR and call MOVE
  // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.
  // Finally, we add a new thread (if necessary).
  function apportion(v, w, ancestor) {
    if (w) {
      var vip = v,
          vop = v,
          vim = w,
          vom = vip.parent.children[0],
          sip = vip.m,
          sop = vop.m,
          sim = vim.m,
          som = vom.m,
          shift;
      while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
        vom = nextLeft(vom);
        vop = nextRight(vop);
        vop.a = v;
        shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
        if (shift > 0) {
          moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
          sip += shift;
          sop += shift;
        }
        sim += vim.m;
        sip += vip.m;
        som += vom.m;
        sop += vop.m;
      }
      if (vim && !nextRight(vop)) {
        vop.t = vim;
        vop.m += sim - sop;
      }
      if (vip && !nextLeft(vom)) {
        vom.t = vip;
        vom.m += sip - som;
        ancestor = v;
      }
    }
    return ancestor;
  }

  function sizeNode(node) {
    node.x *= dx;
    node.y = node.depth * dy;
  }

  tree.separation = function (x) {
    return arguments.length ? (separation = x, tree) : separation;
  };

  tree.size = function (x) {
    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : nodeSize ? null : [dx, dy];
  };

  tree.nodeSize = function (x) {
    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : nodeSize ? [dx, dy] : null;
  };

  return tree;
});

/***/ }),
/* 477 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__round_js__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__squarify_js__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accessors_js__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant_js__ = __webpack_require__(170);





/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var tile = __WEBPACK_IMPORTED_MODULE_1__squarify_js__["a" /* default */],
      round = false,
      dx = 1,
      dy = 1,
      paddingStack = [0],
      paddingInner = __WEBPACK_IMPORTED_MODULE_3__constant_js__["a" /* constantZero */],
      paddingTop = __WEBPACK_IMPORTED_MODULE_3__constant_js__["a" /* constantZero */],
      paddingRight = __WEBPACK_IMPORTED_MODULE_3__constant_js__["a" /* constantZero */],
      paddingBottom = __WEBPACK_IMPORTED_MODULE_3__constant_js__["a" /* constantZero */],
      paddingLeft = __WEBPACK_IMPORTED_MODULE_3__constant_js__["a" /* constantZero */];

  function treemap(root) {
    root.x0 = root.y0 = 0;
    root.x1 = dx;
    root.y1 = dy;
    root.eachBefore(positionNode);
    paddingStack = [0];
    if (round) root.eachBefore(__WEBPACK_IMPORTED_MODULE_0__round_js__["a" /* default */]);
    return root;
  }

  function positionNode(node) {
    var p = paddingStack[node.depth],
        x0 = node.x0 + p,
        y0 = node.y0 + p,
        x1 = node.x1 - p,
        y1 = node.y1 - p;
    if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
    if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
    node.x0 = x0;
    node.y0 = y0;
    node.x1 = x1;
    node.y1 = y1;
    if (node.children) {
      p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
      x0 += paddingLeft(node) - p;
      y0 += paddingTop(node) - p;
      x1 -= paddingRight(node) - p;
      y1 -= paddingBottom(node) - p;
      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
      tile(node, x0, y0, x1, y1);
    }
  }

  treemap.round = function (x) {
    return arguments.length ? (round = !!x, treemap) : round;
  };

  treemap.size = function (x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [dx, dy];
  };

  treemap.tile = function (x) {
    return arguments.length ? (tile = Object(__WEBPACK_IMPORTED_MODULE_2__accessors_js__["b" /* required */])(x), treemap) : tile;
  };

  treemap.padding = function (x) {
    return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
  };

  treemap.paddingInner = function (x) {
    return arguments.length ? (paddingInner = typeof x === "function" ? x : Object(__WEBPACK_IMPORTED_MODULE_3__constant_js__["b" /* default */])(+x), treemap) : paddingInner;
  };

  treemap.paddingOuter = function (x) {
    return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
  };

  treemap.paddingTop = function (x) {
    return arguments.length ? (paddingTop = typeof x === "function" ? x : Object(__WEBPACK_IMPORTED_MODULE_3__constant_js__["b" /* default */])(+x), treemap) : paddingTop;
  };

  treemap.paddingRight = function (x) {
    return arguments.length ? (paddingRight = typeof x === "function" ? x : Object(__WEBPACK_IMPORTED_MODULE_3__constant_js__["b" /* default */])(+x), treemap) : paddingRight;
  };

  treemap.paddingBottom = function (x) {
    return arguments.length ? (paddingBottom = typeof x === "function" ? x : Object(__WEBPACK_IMPORTED_MODULE_3__constant_js__["b" /* default */])(+x), treemap) : paddingBottom;
  };

  treemap.paddingLeft = function (x) {
    return arguments.length ? (paddingLeft = typeof x === "function" ? x : Object(__WEBPACK_IMPORTED_MODULE_3__constant_js__["b" /* default */])(+x), treemap) : paddingLeft;
  };

  return treemap;
});

/***/ }),
/* 478 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function (parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      i,
      n = nodes.length,
      sum,
      sums = new Array(n + 1);

  for (sums[0] = sum = i = 0; i < n; ++i) {
    sums[i + 1] = sum += nodes[i].value;
  }

  partition(0, n, parent.value, x0, y0, x1, y1);

  function partition(i, j, value, x0, y0, x1, y1) {
    if (i >= j - 1) {
      var node = nodes[i];
      node.x0 = x0, node.y0 = y0;
      node.x1 = x1, node.y1 = y1;
      return;
    }

    var valueOffset = sums[i],
        valueTarget = value / 2 + valueOffset,
        k = i + 1,
        hi = j - 1;

    while (k < hi) {
      var mid = k + hi >>> 1;
      if (sums[mid] < valueTarget) k = mid + 1;else hi = mid;
    }

    if (valueTarget - sums[k - 1] < sums[k] - valueTarget && i + 1 < k) --k;

    var valueLeft = sums[k] - valueOffset,
        valueRight = value - valueLeft;

    if (x1 - x0 > y1 - y0) {
      var xk = value ? (x0 * valueRight + x1 * valueLeft) / value : x1;
      partition(i, k, valueLeft, x0, y0, xk, y1);
      partition(k, j, valueRight, xk, y0, x1, y1);
    } else {
      var yk = value ? (y0 * valueRight + y1 * valueLeft) / value : y1;
      partition(i, k, valueLeft, x0, y0, x1, yk);
      partition(k, j, valueRight, x0, yk, x1, y1);
    }
  }
});

/***/ }),
/* 479 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dice_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slice_js__ = __webpack_require__(45);



/* unused harmony default export */ var _unused_webpack_default_export = (function (parent, x0, y0, x1, y1) {
  (parent.depth & 1 ? __WEBPACK_IMPORTED_MODULE_1__slice_js__["a" /* default */] : __WEBPACK_IMPORTED_MODULE_0__dice_js__["a" /* default */])(parent, x0, y0, x1, y1);
});

/***/ }),
/* 480 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dice_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slice_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__squarify_js__ = __webpack_require__(80);




/* unused harmony default export */ var _unused_webpack_default_export = ((function custom(ratio) {

  function resquarify(parent, x0, y0, x1, y1) {
    if ((rows = parent._squarify) && rows.ratio === ratio) {
      var rows,
          row,
          nodes,
          i,
          j = -1,
          n,
          m = rows.length,
          value = parent.value;

      while (++j < m) {
        row = rows[j], nodes = row.children;
        for (i = row.value = 0, n = nodes.length; i < n; ++i) row.value += nodes[i].value;
        if (row.dice) Object(__WEBPACK_IMPORTED_MODULE_0__dice_js__["a" /* default */])(row, x0, y0, x1, value ? y0 += (y1 - y0) * row.value / value : y1);else Object(__WEBPACK_IMPORTED_MODULE_1__slice_js__["a" /* default */])(row, x0, y0, value ? x0 += (x1 - x0) * row.value / value : x1, y1);
        value -= row.value;
      }
    } else {
      parent._squarify = rows = Object(__WEBPACK_IMPORTED_MODULE_2__squarify_js__["c" /* squarifyRatio */])(ratio, parent, x0, y0, x1, y1);
      rows.ratio = ratio;
    }
  }

  resquarify.ratio = function (x) {
    return custom((x = +x) > 1 ? x : 1);
  };

  return resquarify;
})(__WEBPACK_IMPORTED_MODULE_2__squarify_js__["b" /* phi */]));

/***/ }),
/* 481 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__area_js__ = __webpack_require__(482);
/* unused harmony reexport polygonArea */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__centroid_js__ = __webpack_require__(483);
/* unused harmony reexport polygonCentroid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hull_js__ = __webpack_require__(484);
/* unused harmony reexport polygonHull */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contains_js__ = __webpack_require__(486);
/* unused harmony reexport polygonContains */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__length_js__ = __webpack_require__(487);
/* unused harmony reexport polygonLength */






/***/ }),
/* 482 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function (polygon) {
  var i = -1,
      n = polygon.length,
      a,
      b = polygon[n - 1],
      area = 0;

  while (++i < n) {
    a = b;
    b = polygon[i];
    area += a[1] * b[0] - a[0] * b[1];
  }

  return area / 2;
});

/***/ }),
/* 483 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function (polygon) {
  var i = -1,
      n = polygon.length,
      x = 0,
      y = 0,
      a,
      b = polygon[n - 1],
      c,
      k = 0;

  while (++i < n) {
    a = b;
    b = polygon[i];
    k += c = a[0] * b[1] - b[0] * a[1];
    x += (a[0] + b[0]) * c;
    y += (a[1] + b[1]) * c;
  }

  return k *= 3, [x / k, y / k];
});

/***/ }),
/* 484 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cross_js__ = __webpack_require__(485);


function lexicographicOrder(a, b) {
    return a[0] - b[0] || a[1] - b[1];
}

// Computes the upper convex hull per the monotone chain algorithm.
// Assumes points.length >= 3, is sorted by x, unique in y.
// Returns an array of indices into points in left-to-right order.
function computeUpperHullIndexes(points) {
    const n = points.length,
          indexes = [0, 1];
    let size = 2,
        i;

    for (i = 2; i < n; ++i) {
        while (size > 1 && Object(__WEBPACK_IMPORTED_MODULE_0__cross_js__["a" /* default */])(points[indexes[size - 2]], points[indexes[size - 1]], points[i]) <= 0) --size;
        indexes[size++] = i;
    }

    return indexes.slice(0, size); // remove popped points
}

/* unused harmony default export */ var _unused_webpack_default_export = (function (points) {
    if ((n = points.length) < 3) return null;

    var i,
        n,
        sortedPoints = new Array(n),
        flippedPoints = new Array(n);

    for (i = 0; i < n; ++i) sortedPoints[i] = [+points[i][0], +points[i][1], i];
    sortedPoints.sort(lexicographicOrder);
    for (i = 0; i < n; ++i) flippedPoints[i] = [sortedPoints[i][0], -sortedPoints[i][1]];

    var upperIndexes = computeUpperHullIndexes(sortedPoints),
        lowerIndexes = computeUpperHullIndexes(flippedPoints);

    // Construct the hull polygon, removing possible duplicate endpoints.
    var skipLeft = lowerIndexes[0] === upperIndexes[0],
        skipRight = lowerIndexes[lowerIndexes.length - 1] === upperIndexes[upperIndexes.length - 1],
        hull = [];

    // Add upper hull in right-to-l order.
    // Then add lower hull in left-to-right order.
    for (i = upperIndexes.length - 1; i >= 0; --i) hull.push(points[sortedPoints[upperIndexes[i]][2]]);
    for (i = +skipLeft; i < lowerIndexes.length - skipRight; ++i) hull.push(points[sortedPoints[lowerIndexes[i]][2]]);

    return hull;
});

/***/ }),
/* 485 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Returns the 2D cross product of AB and AC vectors, i.e., the z-component of
// the 3D cross product in a quadrant I Cartesian coordinate system (+x is
// right, +y is up). Returns a positive value if ABC is counter-clockwise,
// negative if clockwise, and zero if the points are collinear.
/* harmony default export */ __webpack_exports__["a"] = (function (a, b, c) {
  return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
});

/***/ }),
/* 486 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function (polygon, point) {
  var n = polygon.length,
      p = polygon[n - 1],
      x = point[0],
      y = point[1],
      x0 = p[0],
      y0 = p[1],
      x1,
      y1,
      inside = false;

  for (var i = 0; i < n; ++i) {
    p = polygon[i], x1 = p[0], y1 = p[1];
    if (y1 > y !== y0 > y && x < (x0 - x1) * (y - y1) / (y0 - y1) + x1) inside = !inside;
    x0 = x1, y0 = y1;
  }

  return inside;
});

/***/ }),
/* 487 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function (polygon) {
  var i = -1,
      n = polygon.length,
      b = polygon[n - 1],
      xa,
      ya,
      xb = b[0],
      yb = b[1],
      perimeter = 0;

  while (++i < n) {
    xa = xb;
    ya = yb;
    b = polygon[i];
    xb = b[0];
    yb = b[1];
    xa -= xb;
    ya -= yb;
    perimeter += Math.hypot(xa, ya);
  }

  return perimeter;
});

/***/ }),
/* 488 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uniform_js__ = __webpack_require__(489);
/* unused harmony reexport randomUniform */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__int_js__ = __webpack_require__(490);
/* unused harmony reexport randomInt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__normal_js__ = __webpack_require__(81);
/* unused harmony reexport randomNormal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logNormal_js__ = __webpack_require__(491);
/* unused harmony reexport randomLogNormal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bates_js__ = __webpack_require__(492);
/* unused harmony reexport randomBates */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__irwinHall_js__ = __webpack_require__(172);
/* unused harmony reexport randomIrwinHall */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__exponential_js__ = __webpack_require__(493);
/* unused harmony reexport randomExponential */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pareto_js__ = __webpack_require__(494);
/* unused harmony reexport randomPareto */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bernoulli_js__ = __webpack_require__(495);
/* unused harmony reexport randomBernoulli */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__geometric_js__ = __webpack_require__(173);
/* unused harmony reexport randomGeometric */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__binomial_js__ = __webpack_require__(174);
/* unused harmony reexport randomBinomial */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__gamma_js__ = __webpack_require__(82);
/* unused harmony reexport randomGamma */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__beta_js__ = __webpack_require__(175);
/* unused harmony reexport randomBeta */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__weibull_js__ = __webpack_require__(496);
/* unused harmony reexport randomWeibull */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__cauchy_js__ = __webpack_require__(497);
/* unused harmony reexport randomCauchy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__logistic_js__ = __webpack_require__(498);
/* unused harmony reexport randomLogistic */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__poisson_js__ = __webpack_require__(499);
/* unused harmony reexport randomPoisson */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__lcg_js__ = __webpack_require__(500);
/* unused harmony reexport randomLcg */



















/***/ }),
/* 489 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource_js__ = __webpack_require__(4);


/* unused harmony default export */ var _unused_webpack_default_export = ((function sourceRandomUniform(source) {
  function randomUniform(min, max) {
    min = min == null ? 0 : +min;
    max = max == null ? 1 : +max;
    if (arguments.length === 1) max = min, min = 0;else max -= min;
    return function () {
      return source() * max + min;
    };
  }

  randomUniform.source = sourceRandomUniform;

  return randomUniform;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource_js__["a" /* default */]));

/***/ }),
/* 490 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource_js__ = __webpack_require__(4);


/* unused harmony default export */ var _unused_webpack_default_export = ((function sourceRandomInt(source) {
  function randomInt(min, max) {
    if (arguments.length < 2) max = min, min = 0;
    min = Math.floor(min);
    max = Math.floor(max) - min;
    return function () {
      return Math.floor(source() * max + min);
    };
  }

  randomInt.source = sourceRandomInt;

  return randomInt;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource_js__["a" /* default */]));

/***/ }),
/* 491 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__normal_js__ = __webpack_require__(81);



/* unused harmony default export */ var _unused_webpack_default_export = ((function sourceRandomLogNormal(source) {
  var N = __WEBPACK_IMPORTED_MODULE_1__normal_js__["a" /* default */].source(source);

  function randomLogNormal() {
    var randomNormal = N.apply(this, arguments);
    return function () {
      return Math.exp(randomNormal());
    };
  }

  randomLogNormal.source = sourceRandomLogNormal;

  return randomLogNormal;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource_js__["a" /* default */]));

/***/ }),
/* 492 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__irwinHall_js__ = __webpack_require__(172);



/* unused harmony default export */ var _unused_webpack_default_export = ((function sourceRandomBates(source) {
  var I = __WEBPACK_IMPORTED_MODULE_1__irwinHall_js__["a" /* default */].source(source);

  function randomBates(n) {
    // use limiting distribution at n === 0
    if ((n = +n) === 0) return source;
    var randomIrwinHall = I(n);
    return function () {
      return randomIrwinHall() / n;
    };
  }

  randomBates.source = sourceRandomBates;

  return randomBates;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource_js__["a" /* default */]));

/***/ }),
/* 493 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource_js__ = __webpack_require__(4);


/* unused harmony default export */ var _unused_webpack_default_export = ((function sourceRandomExponential(source) {
  function randomExponential(lambda) {
    return function () {
      return -Math.log1p(-source()) / lambda;
    };
  }

  randomExponential.source = sourceRandomExponential;

  return randomExponential;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource_js__["a" /* default */]));

/***/ }),
/* 494 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource_js__ = __webpack_require__(4);


/* unused harmony default export */ var _unused_webpack_default_export = ((function sourceRandomPareto(source) {
  function randomPareto(alpha) {
    if ((alpha = +alpha) < 0) throw new RangeError("invalid alpha");
    alpha = 1 / -alpha;
    return function () {
      return Math.pow(1 - source(), alpha);
    };
  }

  randomPareto.source = sourceRandomPareto;

  return randomPareto;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource_js__["a" /* default */]));

/***/ }),
/* 495 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource_js__ = __webpack_require__(4);


/* unused harmony default export */ var _unused_webpack_default_export = ((function sourceRandomBernoulli(source) {
  function randomBernoulli(p) {
    if ((p = +p) < 0 || p > 1) throw new RangeError("invalid p");
    return function () {
      return Math.floor(source() + p);
    };
  }

  randomBernoulli.source = sourceRandomBernoulli;

  return randomBernoulli;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource_js__["a" /* default */]));

/***/ }),
/* 496 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource_js__ = __webpack_require__(4);


/* unused harmony default export */ var _unused_webpack_default_export = ((function sourceRandomWeibull(source) {
  function randomWeibull(k, a, b) {
    var outerFunc;
    if ((k = +k) === 0) {
      outerFunc = x => -Math.log(x);
    } else {
      k = 1 / k;
      outerFunc = x => Math.pow(x, k);
    }
    a = a == null ? 0 : +a;
    b = b == null ? 1 : +b;
    return function () {
      return a + b * outerFunc(-Math.log1p(-source()));
    };
  }

  randomWeibull.source = sourceRandomWeibull;

  return randomWeibull;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource_js__["a" /* default */]));

/***/ }),
/* 497 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource_js__ = __webpack_require__(4);


/* unused harmony default export */ var _unused_webpack_default_export = ((function sourceRandomCauchy(source) {
  function randomCauchy(a, b) {
    a = a == null ? 0 : +a;
    b = b == null ? 1 : +b;
    return function () {
      return a + b * Math.tan(Math.PI * source());
    };
  }

  randomCauchy.source = sourceRandomCauchy;

  return randomCauchy;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource_js__["a" /* default */]));

/***/ }),
/* 498 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource_js__ = __webpack_require__(4);


/* unused harmony default export */ var _unused_webpack_default_export = ((function sourceRandomLogistic(source) {
  function randomLogistic(a, b) {
    a = a == null ? 0 : +a;
    b = b == null ? 1 : +b;
    return function () {
      var u = source();
      return a + b * Math.log(u / (1 - u));
    };
  }

  randomLogistic.source = sourceRandomLogistic;

  return randomLogistic;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource_js__["a" /* default */]));

/***/ }),
/* 499 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__binomial_js__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gamma_js__ = __webpack_require__(82);




/* unused harmony default export */ var _unused_webpack_default_export = ((function sourceRandomPoisson(source) {
  var G = __WEBPACK_IMPORTED_MODULE_2__gamma_js__["a" /* default */].source(source),
      B = __WEBPACK_IMPORTED_MODULE_1__binomial_js__["a" /* default */].source(source);

  function randomPoisson(lambda) {
    return function () {
      var acc = 0,
          l = lambda;
      while (l > 16) {
        var n = Math.floor(0.875 * l),
            t = G(n)();
        if (t > l) return acc + B(n - 1, l / t)();
        acc += n;
        l -= t;
      }
      for (var s = -Math.log1p(-source()), k = 0; s <= l; ++k) s -= Math.log1p(-source());
      return acc + k;
    };
  }

  randomPoisson.source = sourceRandomPoisson;

  return randomPoisson;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource_js__["a" /* default */]));

/***/ }),
/* 500 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
// https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use
const mul = 0x19660D;
const inc = 0x3C6EF35F;
const eps = 1 / 0x100000000;

function lcg(seed = Math.random()) {
  let state = (0 <= seed && seed < 1 ? seed / eps : Math.abs(seed)) | 0;
  return () => (state = mul * state + inc | 0, eps * (state >>> 0));
}

/***/ }),
/* 501 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__band_js__ = __webpack_require__(502);
/* unused harmony reexport scaleBand */
/* unused harmony reexport scalePoint */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity_js__ = __webpack_require__(503);
/* unused harmony reexport scaleIdentity */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linear_js__ = __webpack_require__(19);
/* unused harmony reexport scaleLinear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log_js__ = __webpack_require__(84);
/* unused harmony reexport scaleLog */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__symlog_js__ = __webpack_require__(85);
/* unused harmony reexport scaleSymlog */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ordinal_js__ = __webpack_require__(176);
/* unused harmony reexport scaleOrdinal */
/* unused harmony reexport scaleImplicit */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pow_js__ = __webpack_require__(86);
/* unused harmony reexport scalePow */
/* unused harmony reexport scaleSqrt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__radial_js__ = __webpack_require__(505);
/* unused harmony reexport scaleRadial */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__quantile_js__ = __webpack_require__(506);
/* unused harmony reexport scaleQuantile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__quantize_js__ = __webpack_require__(507);
/* unused harmony reexport scaleQuantize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__threshold_js__ = __webpack_require__(508);
/* unused harmony reexport scaleThreshold */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__time_js__ = __webpack_require__(179);
/* unused harmony reexport scaleTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utcTime_js__ = __webpack_require__(511);
/* unused harmony reexport scaleUtc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sequential_js__ = __webpack_require__(196);
/* unused harmony reexport scaleSequential */
/* unused harmony reexport scaleSequentialLog */
/* unused harmony reexport scaleSequentialPow */
/* unused harmony reexport scaleSequentialSqrt */
/* unused harmony reexport scaleSequentialSymlog */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sequentialQuantile_js__ = __webpack_require__(512);
/* unused harmony reexport scaleSequentialQuantile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__diverging_js__ = __webpack_require__(513);
/* unused harmony reexport scaleDiverging */
/* unused harmony reexport scaleDivergingLog */
/* unused harmony reexport scaleDivergingPow */
/* unused harmony reexport scaleDivergingSqrt */
/* unused harmony reexport scaleDivergingSymlog */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__tickFormat_js__ = __webpack_require__(177);
/* unused harmony reexport tickFormat */


































/***/ }),
/* 502 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* unused harmony export point */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__init_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ordinal_js__ = __webpack_require__(176);




function band() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_2__ordinal_js__["a" /* default */])().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      r0 = 0,
      r1 = 1,
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = r1 < r0,
        start = reverse ? r1 : r0,
        stop = reverse ? r0 : r1;
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["j" /* range */])(n).map(function (i) {
      return start + step * i;
    });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function (_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function (_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };

  scale.rangeRound = function (_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
  };

  scale.bandwidth = function () {
    return bandwidth;
  };

  scale.step = function () {
    return step;
  };

  scale.round = function (_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function (_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };

  scale.paddingInner = function (_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };

  scale.paddingOuter = function (_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };

  scale.align = function (_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function () {
    return band(domain(), [r0, r1]).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
  };

  return __WEBPACK_IMPORTED_MODULE_1__init_js__["b" /* initRange */].apply(rescale(), arguments);
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function () {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}

/***/ }),
/* 503 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__number_js__ = __webpack_require__(83);



function identity(domain) {
  var unknown;

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function (_) {
    return arguments.length ? (domain = Array.from(_, __WEBPACK_IMPORTED_MODULE_1__number_js__["a" /* default */]), scale) : domain.slice();
  };

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function () {
    return identity(domain).unknown(unknown);
  };

  domain = arguments.length ? Array.from(domain, __WEBPACK_IMPORTED_MODULE_1__number_js__["a" /* default */]) : [0, 1];

  return Object(__WEBPACK_IMPORTED_MODULE_0__linear_js__["a" /* linearish */])(scale);
}

/***/ }),
/* 504 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = constants;
function constants(x) {
  return function () {
    return x;
  };
}

/***/ }),
/* 505 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__continuous_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__init_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linear_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__number_js__ = __webpack_require__(83);





function square(x) {
  return Math.sign(x) * x * x;
}

function unsquare(x) {
  return Math.sign(x) * Math.sqrt(Math.abs(x));
}

function radial() {
  var squared = Object(__WEBPACK_IMPORTED_MODULE_0__continuous_js__["b" /* default */])(),
      range = [0, 1],
      round = false,
      unknown;

  function scale(x) {
    var y = unsquare(squared(x));
    return isNaN(y) ? unknown : round ? Math.round(y) : y;
  }

  scale.invert = function (y) {
    return squared.invert(square(y));
  };

  scale.domain = function (_) {
    return arguments.length ? (squared.domain(_), scale) : squared.domain();
  };

  scale.range = function (_) {
    return arguments.length ? (squared.range((range = Array.from(_, __WEBPACK_IMPORTED_MODULE_3__number_js__["a" /* default */])).map(square)), scale) : range.slice();
  };

  scale.rangeRound = function (_) {
    return scale.range(_).round(true);
  };

  scale.round = function (_) {
    return arguments.length ? (round = !!_, scale) : round;
  };

  scale.clamp = function (_) {
    return arguments.length ? (squared.clamp(_), scale) : squared.clamp();
  };

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function () {
    return radial(squared.domain(), range).round(round).clamp(squared.clamp()).unknown(unknown);
  };

  __WEBPACK_IMPORTED_MODULE_1__init_js__["b" /* initRange */].apply(scale, arguments);

  return Object(__WEBPACK_IMPORTED_MODULE_2__linear_js__["a" /* linearish */])(scale);
}

/***/ }),
/* 506 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__init_js__ = __webpack_require__(5);



function quantile() {
  var domain = [],
      range = [],
      thresholds = [],
      unknown;

  function rescale() {
    var i = 0,
        n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["i" /* quantileSorted */])(domain, i / n);
    return scale;
  }

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : range[Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["c" /* bisect */])(thresholds, x)];
  }

  scale.invertExtent = function (y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [i > 0 ? thresholds[i - 1] : domain[0], i < thresholds.length ? thresholds[i] : domain[domain.length - 1]];
  };

  scale.domain = function (_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* ascending */]);
    return rescale();
  };

  scale.range = function (_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.quantiles = function () {
    return thresholds.slice();
  };

  scale.copy = function () {
    return quantile().domain(domain).range(range).unknown(unknown);
  };

  return __WEBPACK_IMPORTED_MODULE_1__init_js__["b" /* initRange */].apply(scale, arguments);
}

/***/ }),
/* 507 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linear_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__init_js__ = __webpack_require__(5);




function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1],
      unknown;

  function scale(x) {
    return x != null && x <= x ? range[Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["c" /* bisect */])(domain, x, 0, n)] : unknown;
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function (_) {
    return arguments.length ? ([x0, x1] = _, x0 = +x0, x1 = +x1, rescale()) : [x0, x1];
  };

  scale.range = function (_) {
    return arguments.length ? (n = (range = Array.from(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function (y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : i < 1 ? [x0, domain[0]] : i >= n ? [domain[n - 1], x1] : [domain[i - 1], domain[i]];
  };

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : scale;
  };

  scale.thresholds = function () {
    return domain.slice();
  };

  scale.copy = function () {
    return quantize().domain([x0, x1]).range(range).unknown(unknown);
  };

  return __WEBPACK_IMPORTED_MODULE_2__init_js__["b" /* initRange */].apply(Object(__WEBPACK_IMPORTED_MODULE_1__linear_js__["a" /* linearish */])(scale), arguments);
}

/***/ }),
/* 508 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__init_js__ = __webpack_require__(5);



function threshold() {
  var domain = [0.5],
      range = [0, 1],
      unknown,
      n = 1;

  function scale(x) {
    return x != null && x <= x ? range[Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["c" /* bisect */])(domain, x, 0, n)] : unknown;
  }

  scale.domain = function (_) {
    return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function (_) {
    return arguments.length ? (range = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function (y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function () {
    return threshold().domain(domain).range(range).unknown(unknown);
  };

  return __WEBPACK_IMPORTED_MODULE_1__init_js__["b" /* initRange */].apply(scale, arguments);
}

/***/ }),
/* 509 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return utcTicks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return utcTickInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return timeTicks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timeTickInterval; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__millisecond_js__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__second_js__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__minute_js__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hour_js__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__day_js__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__week_js__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__month_js__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__year_js__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utcMinute_js__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utcHour_js__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utcDay_js__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utcWeek_js__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utcMonth_js__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utcYear_js__ = __webpack_require__(193);

















function ticker(year, month, week, day, hour, minute) {

  const tickIntervals = [[__WEBPACK_IMPORTED_MODULE_3__second_js__["a" /* default */], 1, __WEBPACK_IMPORTED_MODULE_1__duration_js__["e" /* durationSecond */]], [__WEBPACK_IMPORTED_MODULE_3__second_js__["a" /* default */], 5, 5 * __WEBPACK_IMPORTED_MODULE_1__duration_js__["e" /* durationSecond */]], [__WEBPACK_IMPORTED_MODULE_3__second_js__["a" /* default */], 15, 15 * __WEBPACK_IMPORTED_MODULE_1__duration_js__["e" /* durationSecond */]], [__WEBPACK_IMPORTED_MODULE_3__second_js__["a" /* default */], 30, 30 * __WEBPACK_IMPORTED_MODULE_1__duration_js__["e" /* durationSecond */]], [minute, 1, __WEBPACK_IMPORTED_MODULE_1__duration_js__["c" /* durationMinute */]], [minute, 5, 5 * __WEBPACK_IMPORTED_MODULE_1__duration_js__["c" /* durationMinute */]], [minute, 15, 15 * __WEBPACK_IMPORTED_MODULE_1__duration_js__["c" /* durationMinute */]], [minute, 30, 30 * __WEBPACK_IMPORTED_MODULE_1__duration_js__["c" /* durationMinute */]], [hour, 1, __WEBPACK_IMPORTED_MODULE_1__duration_js__["b" /* durationHour */]], [hour, 3, 3 * __WEBPACK_IMPORTED_MODULE_1__duration_js__["b" /* durationHour */]], [hour, 6, 6 * __WEBPACK_IMPORTED_MODULE_1__duration_js__["b" /* durationHour */]], [hour, 12, 12 * __WEBPACK_IMPORTED_MODULE_1__duration_js__["b" /* durationHour */]], [day, 1, __WEBPACK_IMPORTED_MODULE_1__duration_js__["a" /* durationDay */]], [day, 2, 2 * __WEBPACK_IMPORTED_MODULE_1__duration_js__["a" /* durationDay */]], [week, 1, __WEBPACK_IMPORTED_MODULE_1__duration_js__["f" /* durationWeek */]], [month, 1, __WEBPACK_IMPORTED_MODULE_1__duration_js__["d" /* durationMonth */]], [month, 3, 3 * __WEBPACK_IMPORTED_MODULE_1__duration_js__["d" /* durationMonth */]], [year, 1, __WEBPACK_IMPORTED_MODULE_1__duration_js__["g" /* durationYear */]]];

  function ticks(start, stop, count) {
    const reverse = stop < start;
    if (reverse) [start, stop] = [stop, start];
    const interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
    const ticks = interval ? interval.range(start, +stop + 1) : []; // inclusive stop
    return reverse ? ticks.reverse() : ticks;
  }

  function tickInterval(start, stop, count) {
    const target = Math.abs(stop - start) / count;
    const i = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["d" /* bisector */])(([,, step]) => step).right(tickIntervals, target);
    if (i === tickIntervals.length) return year.every(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["m" /* tickStep */])(start / __WEBPACK_IMPORTED_MODULE_1__duration_js__["g" /* durationYear */], stop / __WEBPACK_IMPORTED_MODULE_1__duration_js__["g" /* durationYear */], count));
    if (i === 0) return __WEBPACK_IMPORTED_MODULE_2__millisecond_js__["a" /* default */].every(Math.max(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["m" /* tickStep */])(start, stop, count), 1));
    const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
    return t.every(step);
  }

  return [ticks, tickInterval];
}

const [utcTicks, utcTickInterval] = ticker(__WEBPACK_IMPORTED_MODULE_15__utcYear_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_14__utcMonth_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_13__utcWeek_js__["b" /* utcSunday */], __WEBPACK_IMPORTED_MODULE_12__utcDay_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_11__utcHour_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_10__utcMinute_js__["a" /* default */]);
const [timeTicks, timeTickInterval] = ticker(__WEBPACK_IMPORTED_MODULE_9__year_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__month_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__week_js__["b" /* sunday */], __WEBPACK_IMPORTED_MODULE_6__day_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__hour_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__minute_js__["a" /* default */]);



/***/ }),
/* 510 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isoFormat_js__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultLocale_js__ = __webpack_require__(88);



function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}

var parseIso = +new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : Object(__WEBPACK_IMPORTED_MODULE_1__defaultLocale_js__["c" /* utcParse */])(__WEBPACK_IMPORTED_MODULE_0__isoFormat_js__["a" /* isoSpecifier */]);

/* unused harmony default export */ var _unused_webpack_default_export = (parseIso);

/***/ }),
/* 511 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_time__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_time_format__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__time_js__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__init_js__ = __webpack_require__(5);





function utcTime() {
  return __WEBPACK_IMPORTED_MODULE_3__init_js__["b" /* initRange */].apply(Object(__WEBPACK_IMPORTED_MODULE_2__time_js__["a" /* calendar */])(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcTicks */], __WEBPACK_IMPORTED_MODULE_0_d3_time__["u" /* utcTickInterval */], __WEBPACK_IMPORTED_MODULE_0_d3_time__["x" /* utcYear */], __WEBPACK_IMPORTED_MODULE_0_d3_time__["q" /* utcMonth */], __WEBPACK_IMPORTED_MODULE_0_d3_time__["w" /* utcWeek */], __WEBPACK_IMPORTED_MODULE_0_d3_time__["m" /* utcDay */], __WEBPACK_IMPORTED_MODULE_0_d3_time__["n" /* utcHour */], __WEBPACK_IMPORTED_MODULE_0_d3_time__["o" /* utcMinute */], __WEBPACK_IMPORTED_MODULE_0_d3_time__["r" /* utcSecond */], __WEBPACK_IMPORTED_MODULE_1_d3_time_format__["b" /* utcFormat */]).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]), arguments);
}

/***/ }),
/* 512 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__continuous_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__init_js__ = __webpack_require__(5);




function sequentialQuantile() {
  var domain = [],
      interpolator = __WEBPACK_IMPORTED_MODULE_1__continuous_js__["c" /* identity */];

  function scale(x) {
    if (x != null && !isNaN(x = +x)) return interpolator((Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["c" /* bisect */])(domain, x, 1) - 1) / (domain.length - 1));
  }

  scale.domain = function (_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* ascending */]);
    return scale;
  };

  scale.interpolator = function (_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.range = function () {
    return domain.map((d, i) => interpolator(i / (domain.length - 1)));
  };

  scale.quantiles = function (n) {
    return Array.from({ length: n + 1 }, (_, i) => Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["h" /* quantile */])(domain, i / n));
  };

  scale.copy = function () {
    return sequentialQuantile(interpolator).domain(domain);
  };

  return __WEBPACK_IMPORTED_MODULE_2__init_js__["a" /* initInterpolator */].apply(scale, arguments);
}

/***/ }),
/* 513 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* unused harmony export divergingLog */
/* unused harmony export divergingSymlog */
/* unused harmony export divergingPow */
/* unused harmony export divergingSqrt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__continuous_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__init_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__linear_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__log_js__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sequential_js__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__symlog_js__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pow_js__ = __webpack_require__(86);









function transformer() {
  var x0 = 0,
      x1 = 0.5,
      x2 = 1,
      s = 1,
      t0,
      t1,
      t2,
      k10,
      k21,
      interpolator = __WEBPACK_IMPORTED_MODULE_1__continuous_js__["c" /* identity */],
      transform,
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : (x = 0.5 + ((x = +transform(x)) - t1) * (s * x < s * t1 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function (_) {
    return arguments.length ? ([x0, x1, x2] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), t2 = transform(x2 = +x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1, scale) : [x0, x1, x2];
  };

  scale.clamp = function (_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function (_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  function range(interpolate) {
    return function (_) {
      var r0, r1, r2;
      return arguments.length ? ([r0, r1, r2] = _, interpolator = Object(__WEBPACK_IMPORTED_MODULE_0_d3_interpolate__["k" /* piecewise */])(interpolate, [r0, r1, r2]), scale) : [interpolator(0), interpolator(0.5), interpolator(1)];
    };
  }

  scale.range = range(__WEBPACK_IMPORTED_MODULE_0_d3_interpolate__["a" /* interpolate */]);

  scale.rangeRound = range(__WEBPACK_IMPORTED_MODULE_0_d3_interpolate__["f" /* interpolateRound */]);

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function (t) {
    transform = t, t0 = t(x0), t1 = t(x1), t2 = t(x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1;
    return scale;
  };
}

function diverging() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_3__linear_js__["a" /* linearish */])(transformer()(__WEBPACK_IMPORTED_MODULE_1__continuous_js__["c" /* identity */]));

  scale.copy = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_5__sequential_js__["a" /* copy */])(scale, diverging());
  };

  return __WEBPACK_IMPORTED_MODULE_2__init_js__["a" /* initInterpolator */].apply(scale, arguments);
}

function divergingLog() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_4__log_js__["a" /* loggish */])(transformer()).domain([0.1, 1, 10]);

  scale.copy = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_5__sequential_js__["a" /* copy */])(scale, divergingLog()).base(scale.base());
  };

  return __WEBPACK_IMPORTED_MODULE_2__init_js__["a" /* initInterpolator */].apply(scale, arguments);
}

function divergingSymlog() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_6__symlog_js__["a" /* symlogish */])(transformer());

  scale.copy = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_5__sequential_js__["a" /* copy */])(scale, divergingSymlog()).constant(scale.constant());
  };

  return __WEBPACK_IMPORTED_MODULE_2__init_js__["a" /* initInterpolator */].apply(scale, arguments);
}

function divergingPow() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_7__pow_js__["a" /* powish */])(transformer());

  scale.copy = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_5__sequential_js__["a" /* copy */])(scale, divergingPow()).exponent(scale.exponent());
  };

  return __WEBPACK_IMPORTED_MODULE_2__init_js__["a" /* initInterpolator */].apply(scale, arguments);
}

function divergingSqrt() {
  return divergingPow.apply(null, arguments).exponent(0.5);
}

/***/ }),
/* 514 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__categorical_category10_js__ = __webpack_require__(515);
/* unused harmony reexport schemeCategory10 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__categorical_Accent_js__ = __webpack_require__(516);
/* unused harmony reexport schemeAccent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categorical_Dark2_js__ = __webpack_require__(517);
/* unused harmony reexport schemeDark2 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categorical_Paired_js__ = __webpack_require__(518);
/* unused harmony reexport schemePaired */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categorical_Pastel1_js__ = __webpack_require__(519);
/* unused harmony reexport schemePastel1 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categorical_Pastel2_js__ = __webpack_require__(520);
/* unused harmony reexport schemePastel2 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__categorical_Set1_js__ = __webpack_require__(521);
/* unused harmony reexport schemeSet1 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__categorical_Set2_js__ = __webpack_require__(522);
/* unused harmony reexport schemeSet2 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__categorical_Set3_js__ = __webpack_require__(523);
/* unused harmony reexport schemeSet3 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__categorical_Tableau10_js__ = __webpack_require__(524);
/* unused harmony reexport schemeTableau10 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__diverging_BrBG_js__ = __webpack_require__(525);
/* unused harmony reexport interpolateBrBG */
/* unused harmony reexport schemeBrBG */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__diverging_PRGn_js__ = __webpack_require__(526);
/* unused harmony reexport interpolatePRGn */
/* unused harmony reexport schemePRGn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__diverging_PiYG_js__ = __webpack_require__(527);
/* unused harmony reexport interpolatePiYG */
/* unused harmony reexport schemePiYG */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__diverging_PuOr_js__ = __webpack_require__(528);
/* unused harmony reexport interpolatePuOr */
/* unused harmony reexport schemePuOr */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__diverging_RdBu_js__ = __webpack_require__(529);
/* unused harmony reexport interpolateRdBu */
/* unused harmony reexport schemeRdBu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__diverging_RdGy_js__ = __webpack_require__(530);
/* unused harmony reexport interpolateRdGy */
/* unused harmony reexport schemeRdGy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__diverging_RdYlBu_js__ = __webpack_require__(531);
/* unused harmony reexport interpolateRdYlBu */
/* unused harmony reexport schemeRdYlBu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__diverging_RdYlGn_js__ = __webpack_require__(532);
/* unused harmony reexport interpolateRdYlGn */
/* unused harmony reexport schemeRdYlGn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__diverging_Spectral_js__ = __webpack_require__(533);
/* unused harmony reexport interpolateSpectral */
/* unused harmony reexport schemeSpectral */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__sequential_multi_BuGn_js__ = __webpack_require__(534);
/* unused harmony reexport interpolateBuGn */
/* unused harmony reexport schemeBuGn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__sequential_multi_BuPu_js__ = __webpack_require__(535);
/* unused harmony reexport interpolateBuPu */
/* unused harmony reexport schemeBuPu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__sequential_multi_GnBu_js__ = __webpack_require__(536);
/* unused harmony reexport interpolateGnBu */
/* unused harmony reexport schemeGnBu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__sequential_multi_OrRd_js__ = __webpack_require__(537);
/* unused harmony reexport interpolateOrRd */
/* unused harmony reexport schemeOrRd */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__sequential_multi_PuBuGn_js__ = __webpack_require__(538);
/* unused harmony reexport interpolatePuBuGn */
/* unused harmony reexport schemePuBuGn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__sequential_multi_PuBu_js__ = __webpack_require__(539);
/* unused harmony reexport interpolatePuBu */
/* unused harmony reexport schemePuBu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__sequential_multi_PuRd_js__ = __webpack_require__(540);
/* unused harmony reexport interpolatePuRd */
/* unused harmony reexport schemePuRd */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__sequential_multi_RdPu_js__ = __webpack_require__(541);
/* unused harmony reexport interpolateRdPu */
/* unused harmony reexport schemeRdPu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__sequential_multi_YlGnBu_js__ = __webpack_require__(542);
/* unused harmony reexport interpolateYlGnBu */
/* unused harmony reexport schemeYlGnBu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__sequential_multi_YlGn_js__ = __webpack_require__(543);
/* unused harmony reexport interpolateYlGn */
/* unused harmony reexport schemeYlGn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__sequential_multi_YlOrBr_js__ = __webpack_require__(544);
/* unused harmony reexport interpolateYlOrBr */
/* unused harmony reexport schemeYlOrBr */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__sequential_multi_YlOrRd_js__ = __webpack_require__(545);
/* unused harmony reexport interpolateYlOrRd */
/* unused harmony reexport schemeYlOrRd */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__sequential_single_Blues_js__ = __webpack_require__(546);
/* unused harmony reexport interpolateBlues */
/* unused harmony reexport schemeBlues */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__sequential_single_Greens_js__ = __webpack_require__(547);
/* unused harmony reexport interpolateGreens */
/* unused harmony reexport schemeGreens */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__sequential_single_Greys_js__ = __webpack_require__(548);
/* unused harmony reexport interpolateGreys */
/* unused harmony reexport schemeGreys */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__sequential_single_Purples_js__ = __webpack_require__(549);
/* unused harmony reexport interpolatePurples */
/* unused harmony reexport schemePurples */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__sequential_single_Reds_js__ = __webpack_require__(550);
/* unused harmony reexport interpolateReds */
/* unused harmony reexport schemeReds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__sequential_single_Oranges_js__ = __webpack_require__(551);
/* unused harmony reexport interpolateOranges */
/* unused harmony reexport schemeOranges */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__sequential_multi_cividis_js__ = __webpack_require__(552);
/* unused harmony reexport interpolateCividis */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__sequential_multi_cubehelix_js__ = __webpack_require__(553);
/* unused harmony reexport interpolateCubehelixDefault */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__sequential_multi_rainbow_js__ = __webpack_require__(554);
/* unused harmony reexport interpolateRainbow */
/* unused harmony reexport interpolateWarm */
/* unused harmony reexport interpolateCool */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__sequential_multi_sinebow_js__ = __webpack_require__(555);
/* unused harmony reexport interpolateSinebow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__sequential_multi_turbo_js__ = __webpack_require__(556);
/* unused harmony reexport interpolateTurbo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__sequential_multi_viridis_js__ = __webpack_require__(557);
/* unused harmony reexport interpolateViridis */
/* unused harmony reexport interpolateMagma */
/* unused harmony reexport interpolateInferno */
/* unused harmony reexport interpolatePlasma */












































/***/ }),
/* 515 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);


/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */])("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"));

/***/ }),
/* 516 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);


/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */])("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"));

/***/ }),
/* 517 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);


/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */])("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"));

/***/ }),
/* 518 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);


/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */])("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"));

/***/ }),
/* 519 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);


/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */])("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"));

/***/ }),
/* 520 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);


/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */])("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"));

/***/ }),
/* 521 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);


/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */])("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"));

/***/ }),
/* 522 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);


/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */])("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"));

/***/ }),
/* 523 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);


/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */])("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"));

/***/ }),
/* 524 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);


/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */])("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"));

/***/ }),
/* 525 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 526 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 527 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 528 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 529 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 530 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 531 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 532 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 533 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 534 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 535 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 536 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 537 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 538 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 539 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 540 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 541 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 542 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 543 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 544 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 545 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 546 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 547 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 548 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 549 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 550 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 551 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scheme */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp_js__ = __webpack_require__(2);



var scheme = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp_js__["a" /* default */])(scheme));

/***/ }),
/* 552 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function (t) {
    t = Math.max(0, Math.min(1, t));
    return "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t * (35.34 - t * (2381.73 - t * (6402.7 - t * (7024.72 - t * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t * (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - t * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t * (442.36 - t * (2482.43 - t * (6167.24 - t * (6614.94 - t * 2475.67))))))) + ")";
});

/***/ }),
/* 553 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(10);



/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["b" /* interpolateCubehelixLong */])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(300, 0.5, 0.0), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(-240, 0.5, 1.0)));

/***/ }),
/* 554 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export warm */
/* unused harmony export cool */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(10);



var warm = Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["b" /* interpolateCubehelixLong */])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(-100, 0.75, 0.35), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(80, 1.50, 0.8));

var cool = Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["b" /* interpolateCubehelixLong */])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(260, 0.75, 0.35), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(80, 1.50, 0.8));

var c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])();

/* unused harmony default export */ var _unused_webpack_default_export = (function (t) {
  if (t < 0 || t > 1) t -= Math.floor(t);
  var ts = Math.abs(t - 0.5);
  c.h = 360 * t - 100;
  c.s = 1.5 - 1.5 * ts;
  c.l = 0.8 - 0.9 * ts;
  return c + "";
});

/***/ }),
/* 555 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(12);


var c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(),
    pi_1_3 = Math.PI / 3,
    pi_2_3 = Math.PI * 2 / 3;

/* unused harmony default export */ var _unused_webpack_default_export = (function (t) {
  var x;
  t = (0.5 - t) * Math.PI;
  c.r = 255 * (x = Math.sin(t)) * x;
  c.g = 255 * (x = Math.sin(t + pi_1_3)) * x;
  c.b = 255 * (x = Math.sin(t + pi_2_3)) * x;
  return c + "";
});

/***/ }),
/* 556 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function (t) {
    t = Math.max(0, Math.min(1, t));
    return "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - t * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + t * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - t * 6838.66))))))) + ")";
});

/***/ }),
/* 557 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export magma */
/* unused harmony export inferno */
/* unused harmony export plasma */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors_js__ = __webpack_require__(1);


function ramp(range) {
  var n = range.length;
  return function (t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}

/* unused harmony default export */ var _unused_webpack_default_export = (ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */])("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")));

var magma = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */])("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));

var inferno = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */])("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));

var plasma = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors_js__["a" /* default */])("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

/***/ }),
/* 558 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arc_js__ = __webpack_require__(559);
/* unused harmony reexport arc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area_js__ = __webpack_require__(197);
/* unused harmony reexport area */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__line_js__ = __webpack_require__(89);
/* unused harmony reexport line */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pie_js__ = __webpack_require__(560);
/* unused harmony reexport pie */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__areaRadial_js__ = __webpack_require__(563);
/* unused harmony reexport areaRadial */
/* unused harmony reexport radialArea */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lineRadial_js__ = __webpack_require__(199);
/* unused harmony reexport lineRadial */
/* unused harmony reexport radialLine */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pointRadial_js__ = __webpack_require__(200);
/* unused harmony reexport pointRadial */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__link_index_js__ = __webpack_require__(564);
/* unused harmony reexport linkHorizontal */
/* unused harmony reexport linkVertical */
/* unused harmony reexport linkRadial */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__symbol_js__ = __webpack_require__(565);
/* unused harmony reexport symbol */
/* unused harmony reexport symbols */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__symbol_circle_js__ = __webpack_require__(201);
/* unused harmony reexport symbolCircle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__symbol_cross_js__ = __webpack_require__(202);
/* unused harmony reexport symbolCross */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__symbol_diamond_js__ = __webpack_require__(203);
/* unused harmony reexport symbolDiamond */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__symbol_square_js__ = __webpack_require__(205);
/* unused harmony reexport symbolSquare */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__symbol_star_js__ = __webpack_require__(204);
/* unused harmony reexport symbolStar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__symbol_triangle_js__ = __webpack_require__(206);
/* unused harmony reexport symbolTriangle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__symbol_wye_js__ = __webpack_require__(207);
/* unused harmony reexport symbolWye */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__curve_basisClosed_js__ = __webpack_require__(566);
/* unused harmony reexport curveBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__curve_basisOpen_js__ = __webpack_require__(567);
/* unused harmony reexport curveBasisOpen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__curve_basis_js__ = __webpack_require__(49);
/* unused harmony reexport curveBasis */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__curve_bump_js__ = __webpack_require__(568);
/* unused harmony reexport curveBumpX */
/* unused harmony reexport curveBumpY */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__curve_bundle_js__ = __webpack_require__(569);
/* unused harmony reexport curveBundle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__curve_cardinalClosed_js__ = __webpack_require__(208);
/* unused harmony reexport curveCardinalClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__curve_cardinalOpen_js__ = __webpack_require__(209);
/* unused harmony reexport curveCardinalOpen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__curve_cardinal_js__ = __webpack_require__(50);
/* unused harmony reexport curveCardinal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__curve_catmullRomClosed_js__ = __webpack_require__(570);
/* unused harmony reexport curveCatmullRomClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__curve_catmullRomOpen_js__ = __webpack_require__(571);
/* unused harmony reexport curveCatmullRomOpen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__curve_catmullRom_js__ = __webpack_require__(91);
/* unused harmony reexport curveCatmullRom */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__curve_linearClosed_js__ = __webpack_require__(572);
/* unused harmony reexport curveLinearClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__curve_linear_js__ = __webpack_require__(47);
/* unused harmony reexport curveLinear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__curve_monotone_js__ = __webpack_require__(573);
/* unused harmony reexport curveMonotoneX */
/* unused harmony reexport curveMonotoneY */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__curve_natural_js__ = __webpack_require__(574);
/* unused harmony reexport curveNatural */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__curve_step_js__ = __webpack_require__(575);
/* unused harmony reexport curveStep */
/* unused harmony reexport curveStepAfter */
/* unused harmony reexport curveStepBefore */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__stack_js__ = __webpack_require__(576);
/* unused harmony reexport stack */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__offset_expand_js__ = __webpack_require__(577);
/* unused harmony reexport stackOffsetExpand */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__offset_diverging_js__ = __webpack_require__(578);
/* unused harmony reexport stackOffsetDiverging */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__offset_none_js__ = __webpack_require__(31);
/* unused harmony reexport stackOffsetNone */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__offset_silhouette_js__ = __webpack_require__(579);
/* unused harmony reexport stackOffsetSilhouette */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__offset_wiggle_js__ = __webpack_require__(580);
/* unused harmony reexport stackOffsetWiggle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__order_appearance_js__ = __webpack_require__(210);
/* unused harmony reexport stackOrderAppearance */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__order_ascending_js__ = __webpack_require__(92);
/* unused harmony reexport stackOrderAscending */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__order_descending_js__ = __webpack_require__(581);
/* unused harmony reexport stackOrderDescending */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__order_insideOut_js__ = __webpack_require__(582);
/* unused harmony reexport stackOrderInsideOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__order_none_js__ = __webpack_require__(32);
/* unused harmony reexport stackOrderNone */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__order_reverse_js__ = __webpack_require__(583);
/* unused harmony reexport stackOrderReverse */




 // Note: radialArea is deprecated!
 // Note: radialLine is deprecated!










































/***/ }),
/* 559 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(29);




function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0,
      y10 = y1 - y0,
      x32 = x3 - x2,
      y32 = y3 - y2,
      t = y32 * x10 - x32 * y10;
  if (t * t < __WEBPACK_IMPORTED_MODULE_2__math_js__["f" /* epsilon */]) return;
  t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["l" /* sqrt */])(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["l" /* sqrt */])(Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["h" /* max */])(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null;

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - __WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* halfPi */],
        a1 = endAngle.apply(this, arguments) - __WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* halfPi */],
        da = Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* abs */])(a1 - a0),
        cw = a1 > a0;

    if (!context) context = buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > __WEBPACK_IMPORTED_MODULE_2__math_js__["f" /* epsilon */])) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > __WEBPACK_IMPORTED_MODULE_2__math_js__["m" /* tau */] - __WEBPACK_IMPORTED_MODULE_2__math_js__["f" /* epsilon */]) {
        context.moveTo(r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["e" /* cos */])(a0), r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sin */])(a0));
        context.arc(0, 0, r1, a0, a1, !cw);
        if (r0 > __WEBPACK_IMPORTED_MODULE_2__math_js__["f" /* epsilon */]) {
          context.moveTo(r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["e" /* cos */])(a1), r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sin */])(a1));
          context.arc(0, 0, r0, a1, a0, cw);
        }
      }

      // Or is it a circular or annular sector?
      else {
          var a01 = a0,
              a11 = a1,
              a00 = a0,
              a10 = a1,
              da0 = da,
              da1 = da,
              ap = padAngle.apply(this, arguments) / 2,
              rp = ap > __WEBPACK_IMPORTED_MODULE_2__math_js__["f" /* epsilon */] && (padRadius ? +padRadius.apply(this, arguments) : Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["l" /* sqrt */])(r0 * r0 + r1 * r1)),
              rc = Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["i" /* min */])(Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* abs */])(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
              rc0 = rc,
              rc1 = rc,
              t0,
              t1;

          // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
          if (rp > __WEBPACK_IMPORTED_MODULE_2__math_js__["f" /* epsilon */]) {
            var p0 = Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["c" /* asin */])(rp / r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sin */])(ap)),
                p1 = Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["c" /* asin */])(rp / r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sin */])(ap));
            if ((da0 -= p0 * 2) > __WEBPACK_IMPORTED_MODULE_2__math_js__["f" /* epsilon */]) p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;else da0 = 0, a00 = a10 = (a0 + a1) / 2;
            if ((da1 -= p1 * 2) > __WEBPACK_IMPORTED_MODULE_2__math_js__["f" /* epsilon */]) p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;else da1 = 0, a01 = a11 = (a0 + a1) / 2;
          }

          var x01 = r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["e" /* cos */])(a01),
              y01 = r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sin */])(a01),
              x10 = r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["e" /* cos */])(a10),
              y10 = r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sin */])(a10);

          // Apply rounded corners?
          if (rc > __WEBPACK_IMPORTED_MODULE_2__math_js__["f" /* epsilon */]) {
            var x11 = r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["e" /* cos */])(a11),
                y11 = r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sin */])(a11),
                x00 = r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["e" /* cos */])(a00),
                y00 = r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sin */])(a00),
                oc;

            // Restrict the corner radius according to the sector angle.
            if (da < __WEBPACK_IMPORTED_MODULE_2__math_js__["j" /* pi */] && (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10))) {
              var ax = x01 - oc[0],
                  ay = y01 - oc[1],
                  bx = x11 - oc[0],
                  by = y11 - oc[1],
                  kc = 1 / Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sin */])(Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* acos */])((ax * bx + ay * by) / (Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["l" /* sqrt */])(ax * ax + ay * ay) * Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["l" /* sqrt */])(bx * bx + by * by))) / 2),
                  lc = Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["l" /* sqrt */])(oc[0] * oc[0] + oc[1] * oc[1]);
              rc0 = Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["i" /* min */])(rc, (r0 - lc) / (kc - 1));
              rc1 = Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["i" /* min */])(rc, (r1 - lc) / (kc + 1));
            }
          }

          // Is the sector collapsed to a line?
          if (!(da1 > __WEBPACK_IMPORTED_MODULE_2__math_js__["f" /* epsilon */])) context.moveTo(x01, y01);

          // Does the sector’s outer ring have rounded corners?
          else if (rc1 > __WEBPACK_IMPORTED_MODULE_2__math_js__["f" /* epsilon */]) {
              t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
              t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

              context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

              // Have the corners merged?
              if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["d" /* atan2 */])(t0.y01, t0.x01), Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["d" /* atan2 */])(t1.y01, t1.x01), !cw);

              // Otherwise, draw the two corners and the ring.
              else {
                  context.arc(t0.cx, t0.cy, rc1, Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["d" /* atan2 */])(t0.y01, t0.x01), Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["d" /* atan2 */])(t0.y11, t0.x11), !cw);
                  context.arc(0, 0, r1, Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["d" /* atan2 */])(t0.cy + t0.y11, t0.cx + t0.x11), Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["d" /* atan2 */])(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
                  context.arc(t1.cx, t1.cy, rc1, Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["d" /* atan2 */])(t1.y11, t1.x11), Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["d" /* atan2 */])(t1.y01, t1.x01), !cw);
                }
            }

            // Or is the outer ring just a circular arc?
            else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

          // Is there no inner ring, and it’s a circular sector?
          // Or perhaps it’s an annular sector collapsed due to padding?
          if (!(r0 > __WEBPACK_IMPORTED_MODULE_2__math_js__["f" /* epsilon */]) || !(da0 > __WEBPACK_IMPORTED_MODULE_2__math_js__["f" /* epsilon */])) context.lineTo(x10, y10);

          // Does the sector’s inner ring (or point) have rounded corners?
          else if (rc0 > __WEBPACK_IMPORTED_MODULE_2__math_js__["f" /* epsilon */]) {
              t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
              t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

              context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

              // Have the corners merged?
              if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["d" /* atan2 */])(t0.y01, t0.x01), Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["d" /* atan2 */])(t1.y01, t1.x01), !cw);

              // Otherwise, draw the two corners and the ring.
              else {
                  context.arc(t0.cx, t0.cy, rc0, Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["d" /* atan2 */])(t0.y01, t0.x01), Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["d" /* atan2 */])(t0.y11, t0.x11), !cw);
                  context.arc(0, 0, r0, Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["d" /* atan2 */])(t0.cy + t0.y11, t0.cx + t0.x11), Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["d" /* atan2 */])(t1.cy + t1.y11, t1.cx + t1.x11), cw);
                  context.arc(t1.cx, t1.cy, rc0, Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["d" /* atan2 */])(t1.y11, t1.x11), Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["d" /* atan2 */])(t1.y01, t1.x01), !cw);
                }
            }

            // Or is the inner ring just a circular arc?
            else context.arc(0, 0, r0, a10, a00, cw);
        }

    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function () {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - __WEBPACK_IMPORTED_MODULE_2__math_js__["j" /* pi */] / 2;
    return [Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["e" /* cos */])(a) * r, Object(__WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sin */])(a) * r];
  };

  arc.innerRadius = function (_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(+_), arc) : innerRadius;
  };

  arc.outerRadius = function (_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function (_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(+_), arc) : cornerRadius;
  };

  arc.padRadius = function (_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(+_), arc) : padRadius;
  };

  arc.startAngle = function (_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(+_), arc) : startAngle;
  };

  arc.endAngle = function (_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(+_), arc) : endAngle;
  };

  arc.padAngle = function (_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(+_), arc) : padAngle;
  };

  arc.context = function (_) {
    return arguments.length ? (context = _ == null ? null : _, arc) : context;
  };

  return arc;
});

/***/ }),
/* 560 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__descending_js__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__identity_js__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__math_js__ = __webpack_require__(29);






/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var value = __WEBPACK_IMPORTED_MODULE_3__identity_js__["a" /* default */],
      sortValues = __WEBPACK_IMPORTED_MODULE_2__descending_js__["a" /* default */],
      sort = null,
      startAngle = Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(0),
      endAngle = Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4__math_js__["m" /* tau */]),
      padAngle = Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(0);

  function pie(data) {
    var i,
        n = (data = Object(__WEBPACK_IMPORTED_MODULE_0__array_js__["a" /* default */])(data)).length,
        j,
        k,
        sum = 0,
        index = new Array(n),
        arcs = new Array(n),
        a0 = +startAngle.apply(this, arguments),
        da = Math.min(__WEBPACK_IMPORTED_MODULE_4__math_js__["m" /* tau */], Math.max(-__WEBPACK_IMPORTED_MODULE_4__math_js__["m" /* tau */], endAngle.apply(this, arguments) - a0)),
        a1,
        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
        pa = p * (da < 0 ? -1 : 1),
        v;

    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    }

    // Optionally sort the arcs by previously-computed values or by data.
    if (sortValues != null) index.sort(function (i, j) {
      return sortValues(arcs[i], arcs[j]);
    });else if (sort != null) index.sort(function (i, j) {
      return sort(data[i], data[j]);
    });

    // Compute the arcs! They are stored in the original data's order.
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }

    return arcs;
  }

  pie.value = function (_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(+_), pie) : value;
  };

  pie.sortValues = function (_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };

  pie.sort = function (_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };

  pie.startAngle = function (_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(+_), pie) : startAngle;
  };

  pie.endAngle = function (_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(+_), pie) : endAngle;
  };

  pie.padAngle = function (_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(+_), pie) : padAngle;
  };

  return pie;
});

/***/ }),
/* 561 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});

/***/ }),
/* 562 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (d) {
  return d;
});

/***/ }),
/* 563 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curve_radial_js__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area_js__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lineRadial_js__ = __webpack_require__(199);




/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var a = Object(__WEBPACK_IMPORTED_MODULE_1__area_js__["a" /* default */])().curve(__WEBPACK_IMPORTED_MODULE_0__curve_radial_js__["a" /* curveRadialLinear */]),
      c = a.curve,
      x0 = a.lineX0,
      x1 = a.lineX1,
      y0 = a.lineY0,
      y1 = a.lineY1;

  a.angle = a.x, delete a.x;
  a.startAngle = a.x0, delete a.x0;
  a.endAngle = a.x1, delete a.x1;
  a.radius = a.y, delete a.y;
  a.innerRadius = a.y0, delete a.y0;
  a.outerRadius = a.y1, delete a.y1;
  a.lineStartAngle = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_2__lineRadial_js__["a" /* lineRadial */])(x0());
  }, delete a.lineX0;
  a.lineEndAngle = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_2__lineRadial_js__["a" /* lineRadial */])(x1());
  }, delete a.lineX1;
  a.lineInnerRadius = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_2__lineRadial_js__["a" /* lineRadial */])(y0());
  }, delete a.lineY0;
  a.lineOuterRadius = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_2__lineRadial_js__["a" /* lineRadial */])(y1());
  }, delete a.lineY1;

  a.curve = function (_) {
    return arguments.length ? c(Object(__WEBPACK_IMPORTED_MODULE_0__curve_radial_js__["b" /* default */])(_)) : c()._curve;
  };

  return a;
});

/***/ }),
/* 564 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export linkHorizontal */
/* unused harmony export linkVertical */
/* unused harmony export linkRadial */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__point_js__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pointRadial_js__ = __webpack_require__(200);






function linkSource(d) {
  return d.source;
}

function linkTarget(d) {
  return d.target;
}

function link(curve) {
  var source = linkSource,
      target = linkTarget,
      x = __WEBPACK_IMPORTED_MODULE_3__point_js__["a" /* x */],
      y = __WEBPACK_IMPORTED_MODULE_3__point_js__["b" /* y */],
      context = null;

  function link() {
    var buffer,
        argv = __WEBPACK_IMPORTED_MODULE_1__array_js__["b" /* slice */].call(arguments),
        s = source.apply(this, argv),
        t = target.apply(this, argv);
    if (!context) context = buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])();
    curve(context, +x.apply(this, (argv[0] = s, argv)), +y.apply(this, argv), +x.apply(this, (argv[0] = t, argv)), +y.apply(this, argv));
    if (buffer) return context = null, buffer + "" || null;
  }

  link.source = function (_) {
    return arguments.length ? (source = _, link) : source;
  };

  link.target = function (_) {
    return arguments.length ? (target = _, link) : target;
  };

  link.x = function (_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(+_), link) : x;
  };

  link.y = function (_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(+_), link) : y;
  };

  link.context = function (_) {
    return arguments.length ? (context = _ == null ? null : _, link) : context;
  };

  return link;
}

function curveHorizontal(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}

function curveVertical(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
}

function curveRadial(context, x0, y0, x1, y1) {
  var p0 = Object(__WEBPACK_IMPORTED_MODULE_4__pointRadial_js__["a" /* default */])(x0, y0),
      p1 = Object(__WEBPACK_IMPORTED_MODULE_4__pointRadial_js__["a" /* default */])(x0, y0 = (y0 + y1) / 2),
      p2 = Object(__WEBPACK_IMPORTED_MODULE_4__pointRadial_js__["a" /* default */])(x1, y0),
      p3 = Object(__WEBPACK_IMPORTED_MODULE_4__pointRadial_js__["a" /* default */])(x1, y1);
  context.moveTo(p0[0], p0[1]);
  context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}

function linkHorizontal() {
  return link(curveHorizontal);
}

function linkVertical() {
  return link(curveVertical);
}

function linkRadial() {
  var l = link(curveRadial);
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  return l;
}

/***/ }),
/* 565 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export symbols */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__symbol_circle_js__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__symbol_cross_js__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__symbol_diamond_js__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__symbol_star_js__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__symbol_square_js__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__symbol_triangle_js__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__symbol_wye_js__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constant_js__ = __webpack_require__(22);










var symbols = [__WEBPACK_IMPORTED_MODULE_1__symbol_circle_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__symbol_cross_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__symbol_diamond_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__symbol_square_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__symbol_star_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__symbol_triangle_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__symbol_wye_js__["a" /* default */]];

/* unused harmony default export */ var _unused_webpack_default_export = (function (type, size) {
  var context = null;
  type = typeof type === "function" ? type : Object(__WEBPACK_IMPORTED_MODULE_8__constant_js__["a" /* default */])(type || __WEBPACK_IMPORTED_MODULE_1__symbol_circle_js__["a" /* default */]);
  size = typeof size === "function" ? size : Object(__WEBPACK_IMPORTED_MODULE_8__constant_js__["a" /* default */])(size === undefined ? 64 : +size);

  function symbol() {
    var buffer;
    if (!context) context = buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }

  symbol.type = function (_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_8__constant_js__["a" /* default */])(_), symbol) : type;
  };

  symbol.size = function (_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_8__constant_js__["a" /* default */])(+_), symbol) : size;
  };

  symbol.context = function (_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };

  return symbol;
});

/***/ }),
/* 566 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop_js__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basis_js__ = __webpack_require__(49);



function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_0__noop_js__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_0__noop_js__["a" /* default */],
  lineStart: function () {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function () {
    switch (this._point) {
      case 1:
        {
          this._context.moveTo(this._x2, this._y2);
          this._context.closePath();
          break;
        }
      case 2:
        {
          this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
          this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
          this._context.closePath();
          break;
        }
      case 3:
        {
          this.point(this._x2, this._y2);
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          break;
        }
    }
  },
  point: function (x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;this._x2 = x, this._y2 = y;break;
      case 1:
        this._point = 2;this._x3 = x, this._y3 = y;break;
      case 2:
        this._point = 3;this._x4 = x, this._y4 = y;this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6);break;
      default:
        Object(__WEBPACK_IMPORTED_MODULE_1__basis_js__["b" /* point */])(this, x, y);break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = (function (context) {
  return new BasisClosed(context);
});

/***/ }),
/* 567 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis_js__ = __webpack_require__(49);


function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function () {
    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function (x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;break;
      case 1:
        this._point = 2;break;
      case 2:
        this._point = 3;var x0 = (this._x0 + 4 * this._x1 + x) / 6,
            y0 = (this._y0 + 4 * this._y1 + y) / 6;this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);break;
      case 3:
        this._point = 4; // proceed
      default:
        Object(__WEBPACK_IMPORTED_MODULE_0__basis_js__["b" /* point */])(this, x, y);break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = (function (context) {
  return new BasisOpen(context);
});

/***/ }),
/* 568 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bumpX */
/* unused harmony export bumpY */
class Bump {
  constructor(context, x) {
    this._context = context;
    this._x = x;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  }
  point(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        {
          this._point = 1;
          if (this._line) this._context.lineTo(x, y);else this._context.moveTo(x, y);
          break;
        }
      case 1:
        this._point = 2; // proceed
      default:
        {
          if (this._x) this._context.bezierCurveTo(this._x0 = (this._x0 + x) / 2, this._y0, this._x0, y, x, y);else this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y) / 2, x, this._y0, x, y);
          break;
        }
    }
    this._x0 = x, this._y0 = y;
  }
}

function bumpX(context) {
  return new Bump(context, true);
}

function bumpY(context) {
  return new Bump(context, false);
}

/***/ }),
/* 569 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis_js__ = __webpack_require__(49);


function Bundle(context, beta) {
  this._basis = new __WEBPACK_IMPORTED_MODULE_0__basis_js__["a" /* Basis */](context);
  this._beta = beta;
}

Bundle.prototype = {
  lineStart: function () {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function () {
    var x = this._x,
        y = this._y,
        j = x.length - 1;

    if (j > 0) {
      var x0 = x[0],
          y0 = y[0],
          dx = x[j] - x0,
          dy = y[j] - y0,
          i = -1,
          t;

      while (++i <= j) {
        t = i / j;
        this._basis.point(this._beta * x[i] + (1 - this._beta) * (x0 + t * dx), this._beta * y[i] + (1 - this._beta) * (y0 + t * dy));
      }
    }

    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function (x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = ((function custom(beta) {

  function bundle(context) {
    return beta === 1 ? new __WEBPACK_IMPORTED_MODULE_0__basis_js__["a" /* Basis */](context) : new Bundle(context, beta);
  }

  bundle.beta = function (beta) {
    return custom(+beta);
  };

  return bundle;
})(0.85));

/***/ }),
/* 570 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinalClosed_js__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop_js__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catmullRom_js__ = __webpack_require__(91);




function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_1__noop_js__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_1__noop_js__["a" /* default */],
  lineStart: function () {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function () {
    switch (this._point) {
      case 1:
        {
          this._context.moveTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
      case 2:
        {
          this._context.lineTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
      case 3:
        {
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          this.point(this._x5, this._y5);
          break;
        }
    }
  },
  point: function (x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0:
        this._point = 1;this._x3 = x, this._y3 = y;break;
      case 1:
        this._point = 2;this._context.moveTo(this._x4 = x, this._y4 = y);break;
      case 2:
        this._point = 3;this._x5 = x, this._y5 = y;break;
      default:
        Object(__WEBPACK_IMPORTED_MODULE_2__catmullRom_js__["a" /* point */])(this, x, y);break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new __WEBPACK_IMPORTED_MODULE_0__cardinalClosed_js__["a" /* CardinalClosed */](context, 0);
  }

  catmullRom.alpha = function (alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));

/***/ }),
/* 571 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinalOpen_js__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__catmullRom_js__ = __webpack_require__(91);



function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomOpen.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function () {
    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function (x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0:
        this._point = 1;break;
      case 1:
        this._point = 2;break;
      case 2:
        this._point = 3;this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);break;
      case 3:
        this._point = 4; // proceed
      default:
        Object(__WEBPACK_IMPORTED_MODULE_1__catmullRom_js__["a" /* point */])(this, x, y);break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new __WEBPACK_IMPORTED_MODULE_0__cardinalOpen_js__["a" /* CardinalOpen */](context, 0);
  }

  catmullRom.alpha = function (alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));

/***/ }),
/* 572 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop_js__ = __webpack_require__(48);


function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_0__noop_js__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_0__noop_js__["a" /* default */],
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    if (this._point) this._context.closePath();
  },
  point: function (x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);else this._point = 1, this._context.moveTo(x, y);
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = (function (context) {
  return new LinearClosed(context);
});

/***/ }),
/* 573 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export monotoneX */
/* unused harmony export monotoneY */
function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);break;
      case 3:
        point(this, this._t0, slope2(this, this._t0));break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function (x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0:
        this._point = 1;this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);break;
      case 1:
        this._point = 2;break;
      case 2:
        this._point = 3;point(this, slope2(this, t1 = slope3(this, x, y)), t1);break;
      default:
        point(this, this._t0, t1 = slope3(this, x, y));break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
};

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function (x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function (x, y) {
    this._context.moveTo(y, x);
  },
  closePath: function () {
    this._context.closePath();
  },
  lineTo: function (x, y) {
    this._context.lineTo(y, x);
  },
  bezierCurveTo: function (x1, y1, x2, y2, x, y) {
    this._context.bezierCurveTo(y1, x1, y2, x2, y, x);
  }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}

/***/ }),
/* 574 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x = [];
    this._y = [];
  },
  lineEnd: function () {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || this._line !== 0 && n === 1) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function (x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

/* unused harmony default export */ var _unused_webpack_default_export = (function (context) {
  return new Natural(context);
});

/***/ }),
/* 575 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export stepBefore */
/* unused harmony export stepAfter */
function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function () {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function (x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);break;
      case 1:
        this._point = 2; // proceed
      default:
        {
          if (this._t <= 0) {
            this._context.lineTo(this._x, y);
            this._context.lineTo(x, y);
          } else {
            var x1 = this._x * (1 - this._t) + x * this._t;
            this._context.lineTo(x1, this._y);
            this._context.lineTo(x1, y);
          }
          break;
        }
    }
    this._x = x, this._y = y;
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = (function (context) {
  return new Step(context, 0.5);
});

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}

/***/ }),
/* 576 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offset_none_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_none_js__ = __webpack_require__(32);





function stackValue(d, key) {
  return d[key];
}

function stackSeries(key) {
  const series = [];
  series.key = key;
  return series;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var keys = Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])([]),
      order = __WEBPACK_IMPORTED_MODULE_3__order_none_js__["a" /* default */],
      offset = __WEBPACK_IMPORTED_MODULE_2__offset_none_js__["a" /* default */],
      value = stackValue;

  function stack(data) {
    var sz = Array.from(keys.apply(this, arguments), stackSeries),
        i,
        n = sz.length,
        j = -1,
        oz;

    for (const d of data) {
      for (i = 0, ++j; i < n; ++i) {
        (sz[i][j] = [0, +value(d, sz[i].key, j, data)]).data = d;
      }
    }

    for (i = 0, oz = Object(__WEBPACK_IMPORTED_MODULE_0__array_js__["a" /* default */])(order(sz)); i < n; ++i) {
      sz[oz[i]].index = i;
    }

    offset(sz, oz);
    return sz;
  }

  stack.keys = function (_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(Array.from(_)), stack) : keys;
  };

  stack.value = function (_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(+_), stack) : value;
  };

  stack.order = function (_) {
    return arguments.length ? (order = _ == null ? __WEBPACK_IMPORTED_MODULE_3__order_none_js__["a" /* default */] : typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(Array.from(_)), stack) : order;
  };

  stack.offset = function (_) {
    return arguments.length ? (offset = _ == null ? __WEBPACK_IMPORTED_MODULE_2__offset_none_js__["a" /* default */] : _, stack) : offset;
  };

  return stack;
});

/***/ }),
/* 577 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none_js__ = __webpack_require__(31);


/* unused harmony default export */ var _unused_webpack_default_export = (function (series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  Object(__WEBPACK_IMPORTED_MODULE_0__none_js__["a" /* default */])(series, order);
});

/***/ }),
/* 578 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function (series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
    for (yp = yn = 0, i = 0; i < n; ++i) {
      if ((dy = (d = series[order[i]][j])[1] - d[0]) > 0) {
        d[0] = yp, d[1] = yp += dy;
      } else if (dy < 0) {
        d[1] = yn, d[0] = yn += dy;
      } else {
        d[0] = 0, d[1] = dy;
      }
    }
  }
});

/***/ }),
/* 579 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none_js__ = __webpack_require__(31);


/* unused harmony default export */ var _unused_webpack_default_export = (function (series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y / 2;
  }
  Object(__WEBPACK_IMPORTED_MODULE_0__none_js__["a" /* default */])(series, order);
});

/***/ }),
/* 580 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none_js__ = __webpack_require__(31);


/* unused harmony default export */ var _unused_webpack_default_export = (function (series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]],
          sij0 = si[j][1] || 0,
          sij1 = si[j - 1][1] || 0,
          s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]],
            skj0 = sk[j][1] || 0,
            skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    if (s1) y -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y;
  Object(__WEBPACK_IMPORTED_MODULE_0__none_js__["a" /* default */])(series, order);
});

/***/ }),
/* 581 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending_js__ = __webpack_require__(92);


/* unused harmony default export */ var _unused_webpack_default_export = (function (series) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__ascending_js__["a" /* default */])(series).reverse();
});

/***/ }),
/* 582 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__appearance_js__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending_js__ = __webpack_require__(92);



/* unused harmony default export */ var _unused_webpack_default_export = (function (series) {
  var n = series.length,
      i,
      j,
      sums = series.map(__WEBPACK_IMPORTED_MODULE_1__ascending_js__["b" /* sum */]),
      order = Object(__WEBPACK_IMPORTED_MODULE_0__appearance_js__["a" /* default */])(series),
      top = 0,
      bottom = 0,
      tops = [],
      bottoms = [];

  for (i = 0; i < n; ++i) {
    j = order[i];
    if (top < bottom) {
      top += sums[j];
      tops.push(j);
    } else {
      bottom += sums[j];
      bottoms.push(j);
    }
  }

  return bottoms.reverse().concat(tops);
});

/***/ }),
/* 583 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none_js__ = __webpack_require__(32);


/* unused harmony default export */ var _unused_webpack_default_export = (function (series) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__none_js__["a" /* default */])(series).reverse();
});

/***/ }),
/* 584 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__zoom_js__ = __webpack_require__(585);
/* unused harmony reexport zoom */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transform_js__ = __webpack_require__(211);
/* unused harmony reexport zoomTransform */
/* unused harmony reexport zoomIdentity */



/***/ }),
/* 585 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dispatch__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_drag__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_interpolate__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_selection__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_transition__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constant_js__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_js__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transform_js__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__noevent_js__ = __webpack_require__(588);










// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function defaultFilter(event) {
  return (!event.ctrlKey || event.type === 'wheel') && !event.button;
}

function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}

function defaultTransform() {
  return this.__zoom || __WEBPACK_IMPORTED_MODULE_7__transform_js__["b" /* identity */];
}

function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}

function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}

function defaultConstrain(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
      dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
      dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
      dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
}

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var filter = defaultFilter,
      extent = defaultExtent,
      constrain = defaultConstrain,
      wheelDelta = defaultWheelDelta,
      touchable = defaultTouchable,
      scaleExtent = [0, Infinity],
      translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
      duration = 250,
      interpolate = __WEBPACK_IMPORTED_MODULE_2_d3_interpolate__["j" /* interpolateZoom */],
      listeners = Object(__WEBPACK_IMPORTED_MODULE_0_d3_dispatch__["a" /* dispatch */])("start", "zoom", "end"),
      touchstarting,
      touchfirst,
      touchending,
      touchDelay = 500,
      wheelDelay = 150,
      clickDistance2 = 0,
      tapDistance = 10;

  function zoom(selection) {
    selection.property("__zoom", defaultTransform).on("wheel.zoom", wheeled).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  zoom.transform = function (collection, transform, point, event) {
    var selection = collection.selection ? collection.selection() : collection;
    selection.property("__zoom", defaultTransform);
    if (collection !== selection) {
      schedule(collection, transform, point, event);
    } else {
      selection.interrupt().each(function () {
        gesture(this, arguments).event(event).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
      });
    }
  };

  zoom.scaleBy = function (selection, k, p, event) {
    zoom.scaleTo(selection, function () {
      var k0 = this.__zoom.k,
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };

  zoom.scaleTo = function (selection, k, p, event) {
    zoom.transform(selection, function () {
      var e = extent.apply(this, arguments),
          t0 = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p,
          p1 = t0.invert(p0),
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };

  zoom.translateBy = function (selection, x, y, event) {
    zoom.transform(selection, function () {
      return constrain(this.__zoom.translate(typeof x === "function" ? x.apply(this, arguments) : x, typeof y === "function" ? y.apply(this, arguments) : y), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };

  zoom.translateTo = function (selection, x, y, p, event) {
    zoom.transform(selection, function () {
      var e = extent.apply(this, arguments),
          t = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(__WEBPACK_IMPORTED_MODULE_7__transform_js__["b" /* identity */].translate(p0[0], p0[1]).scale(t.k).translate(typeof x === "function" ? -x.apply(this, arguments) : -x, typeof y === "function" ? -y.apply(this, arguments) : -y), e, translateExtent);
    }, p, event);
  };

  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k ? transform : new __WEBPACK_IMPORTED_MODULE_7__transform_js__["a" /* Transform */](k, transform.x, transform.y);
  }

  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k,
        y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new __WEBPACK_IMPORTED_MODULE_7__transform_js__["a" /* Transform */](transform.k, x, y);
  }

  function centroid(extent) {
    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
  }

  function schedule(transition, transform, point, event) {
    transition.on("start.zoom", function () {
      gesture(this, arguments).event(event).start();
    }).on("interrupt.zoom end.zoom", function () {
      gesture(this, arguments).event(event).end();
    }).tween("zoom", function () {
      var that = this,
          args = arguments,
          g = gesture(that, args).event(event),
          e = extent.apply(that, args),
          p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point,
          w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
          a = that.__zoom,
          b = typeof transform === "function" ? transform.apply(that, args) : transform,
          i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
      return function (t) {
        if (t === 1) t = b; // Avoid rounding error on end.
        else {
            var l = i(t),
                k = w / l[2];t = new __WEBPACK_IMPORTED_MODULE_7__transform_js__["a" /* Transform */](k, p[0] - l[0] * k, p[1] - l[1] * k);
          }
        g.zoom(null, t);
      };
    });
  }

  function gesture(that, args, clean) {
    return !clean && that.__zooming || new Gesture(that, args);
  }

  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }

  Gesture.prototype = {
    event: function (event) {
      if (event) this.sourceEvent = event;
      return this;
    },
    start: function () {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function (key, transform) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function () {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function (type) {
      var d = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */])(this.that).datum();
      listeners.call(type, this.that, new __WEBPACK_IMPORTED_MODULE_6__event_js__["a" /* default */](type, {
        sourceEvent: this.sourceEvent,
        target: zoom,
        type,
        transform: this.that.__zoom,
        dispatch: listeners
      }), d);
    }
  };

  function wheeled(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, args).event(event),
        t = this.__zoom,
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
        p = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* pointer */])(event);

    // If the mouse is in the same location as before, reuse it.
    // If there were recent wheel events, reset the wheel idle timeout.
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    }

    // If this wheel event won’t trigger a transform change, ignore it.
    else if (t.k === k) return;

      // Otherwise, capture the mouse point and location at the start.
      else {
          g.mouse = [p, t.invert(p)];
          Object(__WEBPACK_IMPORTED_MODULE_4_d3_transition__["a" /* interrupt */])(this);
          g.start();
        }

    Object(__WEBPACK_IMPORTED_MODULE_8__noevent_js__["a" /* default */])(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));

    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }

  function mousedowned(event, ...args) {
    if (touchending || !filter.apply(this, arguments)) return;
    var g = gesture(this, args, true).event(event),
        v = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */])(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
        p = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* pointer */])(event, currentTarget),
        currentTarget = event.currentTarget,
        x0 = event.clientX,
        y0 = event.clientY;

    Object(__WEBPACK_IMPORTED_MODULE_1_d3_drag__["a" /* dragDisable */])(event.view);
    Object(__WEBPACK_IMPORTED_MODULE_8__noevent_js__["b" /* nopropagation */])(event);
    g.mouse = [p, this.__zoom.invert(p)];
    Object(__WEBPACK_IMPORTED_MODULE_4_d3_transition__["a" /* interrupt */])(this);
    g.start();

    function mousemoved(event) {
      Object(__WEBPACK_IMPORTED_MODULE_8__noevent_js__["a" /* default */])(event);
      if (!g.moved) {
        var dx = event.clientX - x0,
            dy = event.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* pointer */])(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }

    function mouseupped(event) {
      v.on("mousemove.zoom mouseup.zoom", null);
      Object(__WEBPACK_IMPORTED_MODULE_1_d3_drag__["b" /* dragEnable */])(event.view, g.moved);
      Object(__WEBPACK_IMPORTED_MODULE_8__noevent_js__["a" /* default */])(event);
      g.event(event).end();
    }
  }

  function dblclicked(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var t0 = this.__zoom,
        p0 = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* pointer */])(event.changedTouches ? event.changedTouches[0] : event, this),
        p1 = t0.invert(p0),
        k1 = t0.k * (event.shiftKey ? 0.5 : 2),
        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);

    Object(__WEBPACK_IMPORTED_MODULE_8__noevent_js__["a" /* default */])(event);
    if (duration > 0) Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */])(this).transition().duration(duration).call(schedule, t1, p0, event);else Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */])(this).call(zoom.transform, t1, p0, event);
  }

  function touchstarted(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var touches = event.touches,
        n = touches.length,
        g = gesture(this, args, event.changedTouches.length === n).event(event),
        started,
        i,
        t,
        p;

    Object(__WEBPACK_IMPORTED_MODULE_8__noevent_js__["b" /* nopropagation */])(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* pointer */])(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }

    if (touchstarting) touchstarting = clearTimeout(touchstarting);

    if (started) {
      if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function () {
        touchstarting = null;
      }, touchDelay);
      Object(__WEBPACK_IMPORTED_MODULE_4_d3_transition__["a" /* interrupt */])(this);
      g.start();
    }
  }

  function touchmoved(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length,
        i,
        t,
        p,
        l;

    Object(__WEBPACK_IMPORTED_MODULE_8__noevent_js__["a" /* default */])(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* pointer */])(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0],
          l0 = g.touch0[1],
          p1 = g.touch1[0],
          l1 = g.touch1[1],
          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];else return;

    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }

  function touchended(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length,
        i,
        t;

    Object(__WEBPACK_IMPORTED_MODULE_8__noevent_js__["b" /* nopropagation */])(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function () {
      touchending = null;
    }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);else {
      g.end();
      // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
      if (g.taps === 2) {
        t = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* pointer */])(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */])(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }

  zoom.wheelDelta = function (_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_5__constant_js__["a" /* default */])(+_), zoom) : wheelDelta;
  };

  zoom.filter = function (_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_5__constant_js__["a" /* default */])(!!_), zoom) : filter;
  };

  zoom.touchable = function (_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_5__constant_js__["a" /* default */])(!!_), zoom) : touchable;
  };

  zoom.extent = function (_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_5__constant_js__["a" /* default */])([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };

  zoom.scaleExtent = function (_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };

  zoom.translateExtent = function (_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };

  zoom.constrain = function (_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };

  zoom.duration = function (_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };

  zoom.interpolate = function (_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };

  zoom.on = function () {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };

  zoom.clickDistance = function (_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };

  zoom.tapDistance = function (_) {
    return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
  };

  return zoom;
});

/***/ }),
/* 586 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (x => () => x);

/***/ }),
/* 587 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ZoomEvent;
function ZoomEvent(type, {
  sourceEvent,
  target,
  transform,
  dispatch
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    transform: { value: transform, enumerable: true, configurable: true },
    _: { value: dispatch }
  });
}

/***/ }),
/* 588 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = nopropagation;
function nopropagation(event) {
  event.stopImmediatePropagation();
}

/* harmony default export */ __webpack_exports__["a"] = (function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();
});

/***/ }),
/* 589 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CONSTANTS = {
  WIDTH: 900,
  HEIGHT: 600,
  OPACITY: "1.0"
};

class Attacks {
  constructor(svg) {
    this.svg = svg;

    // Add X axis
    var x = d3.scaleLinear().domain([0, 800]).range([0, 800]);
    this.svg.append("g").attr("transform", "translate(0," + 600 + ")").call(d3.axisBottom(x));

    var tooltip = d3.select(".heat-map-modal").append("div").style("opacity", 0).attr("class", "tooltip").style("background-color", "white").style("border", "solid").style("border-width", "1px").style("border-radius", "5px").style("padding", "10px");

    d3.csv("./datasets/test.csv").then(function (d) {
      d.forEach(attack => {
        if (Number(attack.severity) === 3) {
          this.render(attack, [attack.x, attack.y], "Severe", tooltip);
        } else if (Number(attack.severity) === 2) {
          this.render(attack, [attack.x, attack.y], "Moderate", tooltip);
        } else {
          this.render(attack, [attack.x, attack.y], "Minor", tooltip);
        }
      });
    }.bind(this));
  }

  render(attack, position, severity, tooltip) {
    var mouseover = function (event, d) {
      tooltip.style("opacity", 1);
    };

    var mousemove = function (event, d) {
      tooltip.html(` Date: ${attack.date} <br/>
                            Severity: ${severity} <br/>
                            Description: ${attack.details}`).style("left", d[0] + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
      .style("top", d[1] + "px");
    };

    var mouseleave = function (event, d) {
      tooltip.transition().duration(100).style("opacity", 0);
    };

    if (severity === "Severe") {
      this.svg.append("g").selectAll("dot").data([position]).enter().append("circle").attr("cx", position[0]).attr("cy", position[1]).attr("r", 10).attr("stroke", "white").attr("fill", "#301b3f").attr("fill-opacity", CONSTANTS.OPACITY).attr("stroke-width", "0.1px").on("mouseover", mouseover).on("mousemove", mousemove).on("mouseleave", mouseleave);
    } else if (severity === "Moderate") {
      this.svg.append("g").selectAll("dot").data([position]).enter().append("circle").attr("cx", position[0]).attr("cy", position[1]).attr("r", 10).attr("stroke", "white").attr("fill", "#7b113a").attr("fill-opacity", CONSTANTS.OPACITY).attr("stroke-width", "0.1px").on("mouseover", mouseover).on("mousemove", mousemove).on("mouseleave", mouseleave);
    } else if (severity === "Minor") {
      this.svg.append("g").selectAll("dot").data([position]).enter().append("circle").attr("cx", position[0]).attr("cy", position[1]).attr("r", 10).attr("stroke", "white").attr("fill", "#c64756").attr("fill-opacity", CONSTANTS.OPACITY).attr("stroke-width", "0.1px").on("mouseover", mouseover).on("mousemove", mousemove).on("mouseleave", mouseleave);
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Attacks);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map