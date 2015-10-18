/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _vectorJs = __webpack_require__(1);

	var _vectorJs2 = _interopRequireDefault(_vectorJs);

	var _particleJs = __webpack_require__(2);

	var _particleJs2 = _interopRequireDefault(_particleJs);

	var _wallJs = __webpack_require__(3);

	var _wallJs2 = _interopRequireDefault(_wallJs);

	var _generatorJs = __webpack_require__(4);

	var _generatorJs2 = _interopRequireDefault(_generatorJs);

	var _drawerJs = __webpack_require__(5);

	var _drawerJs2 = _interopRequireDefault(_drawerJs);

	var _esCollections = __webpack_require__(6);

	var _esCollections2 = _interopRequireDefault(_esCollections);

	var _eventJs = __webpack_require__(112);

	var _eventJs2 = _interopRequireDefault(_eventJs);

	var _simulationJs = __webpack_require__(113);

	var _simulationJs2 = _interopRequireDefault(_simulationJs);

	(function () {
	  var canvas = document.getElementById('canvas');
	  var ctx = canvas.getContext('2d');
	  var xSelector = function xSelector(vector) {
	    return vector.x;
	  };
	  var ySelector = function ySelector(vector) {
	    return vector.y;
	  };
	  var xSpeedTransformer = function xSpeedTransformer(particle) {
	    particle.speed.x = particle.speed.x * -1;
	  };
	  var ySeepdTransformer = function ySeepdTransformer(particle) {
	    particle.speed.y = particle.speed.y * -1;
	  };
	  var topWall = new _wallJs2['default'](0, ySelector, ySeepdTransformer);
	  var botWall = new _wallJs2['default'](canvas.height, ySelector, ySeepdTransformer);
	  var leftWall = new _wallJs2['default'](0, xSelector, xSpeedTransformer);
	  var rightWall = new _wallJs2['default'](canvas.width, xSelector, xSpeedTransformer);
	  var walls = [topWall, botWall, leftWall, rightWall];
	  ctx.beginPath();
	  ctx.rect(0, 0, 600, 280);
	  ctx.stroke();
	  var generator = new _generatorJs2['default'](600, 280);
	  var particles = generator.generate();
	  var resolutionHandler = function resolutionHandler(particles) {
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = particles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var p = _step.value;

	        (0, _drawerJs2['default'])(ctx, p);
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator['return']) {
	          _iterator['return']();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	  };
	  var simulation = new _simulationJs2['default'](particles, walls, resolutionHandler);
	  simulate.simulate(100000);
	})();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Vector = (function () {
	  function Vector(x, y) {
	    _classCallCheck(this, Vector);

	    this.x = x;
	    this.y = y;
	  }

	  _createClass(Vector, [{
	    key: "product",
	    value: function product(that) {
	      return this.x * that.x + this.y * that.y;
	    }
	  }, {
	    key: "scale",
	    value: function scale(factor) {
	      return new Vector(factor * this.x, factor * this.y);
	    }
	  }, {
	    key: "add",
	    value: function add(that) {
	      return new Vector(this.x + that.x, this.y + that.y);
	    }
	  }, {
	    key: "negate",
	    value: function negate() {
	      return new Vector(this.x * -1, this.y * -1);
	    }
	  }, {
	    key: "substract",
	    value: function substract(that) {
	      return add(this, that.negate());
	    }
	  }]);

	  return Vector;
	})();

	exports["default"] = Vector;
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Particle = (function () {
	  function Particle(mass, radius, position, speed) {
	    _classCallCheck(this, Particle);

	    this.mass = mass;
	    this.radius = radius;
	    this.position = position;
	    this.speed = speed;
	  }

	  _createClass(Particle, [{
	    key: "move",
	    value: function move(time) {
	      this.position = this.position.add(this.speed.scale(time));
	    }
	  }, {
	    key: "timeToHitParticle",
	    value: function timeToHitParticle(that) {
	      if (this == that) return Number.MAX_SAFE_NUMBER;
	      var dr = that.position.substract(this.position);
	      var dv = that.speed.substract(this.speed);
	      var dvdr = dr.product(dv);
	      if (dvdr > 0) return Number.MAX_SAFE_NUMBER;
	      var dvdv = dv.product(dv);
	      var drdr = dr.product(dr);
	      var sigma = this.radius + that.radius;
	      var d = dvdr * dvdr - dvdv * (drdr - sigma * sigma);
	      // if (drdr < sigma*sigma) StdOut.println("overlapping particles");
	      if (d < 0) return Number.MAX_SAFE_NUMBER;
	      return -(dvdr + Math.sqrt(d)) / dvdv;
	    }
	  }, {
	    key: "bounceOffParticle",
	    value: function bounceOffParticle(that) {
	      var dr = that.position.substract(this.position);
	      var dv = that.speed.substract(this.speed);
	      var dvdr = dr.product(dv);
	      var dist = this.radius + that.radius; // distance between particle centers at collison

	      // normal force F, and in x and y directions
	      var F = 2 * this.mass * that.mass * dvdr / ((this.mass + that.mass) * dist);
	      var fx = F * (that.position.x - this.position.x) / dist;
	      var fy = F * (that.position.y - this.position.y) / dist;

	      // update velocities according to normal force
	      this.speed.x += fx / this.mass;
	      this.speed.y += fy / this.mass;
	      that.speed.x -= fx / that.mass;
	      that.speed.y -= fy / that.mass;
	    }
	  }]);

	  return Particle;
	})();

	exports["default"] = Particle;
	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _particleJs = __webpack_require__(2);

	var _particleJs2 = _interopRequireDefault(_particleJs);

	var Wall = (function () {
	  function Wall(bound, dimensionSelector, speedTransformer) {
	    _classCallCheck(this, Wall);

	    this.bound = bound;
	    this.dimensionSelector = dimensionSelector;
	    this.speedTransformer = speedTransformer;
	  }

	  _createClass(Wall, [{
	    key: 'timeToHitParticle',
	    value: function timeToHitParticle(particle) {
	      var relativeDistance = dimensionSelector(particle.position) - bound;
	      var relativeSpeed = dimensionSelector(particle.speed);
	      if (relativeDistance * relativeSpeed < 0) {
	        var distance = Math.abs(particle.position - bound) - particle.radius;
	        var speed = Math.abs(relativeSpeed);
	        return distance / speed;
	      } else {
	        return Number.MAX_SAFE_NUMBER;
	      }
	    }
	  }, {
	    key: 'bounceOffParticle',
	    value: function bounceOffParticle(particle) {
	      speedTransformer(particle);
	    }
	  }]);

	  return Wall;
	})();

	exports['default'] = Wall;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _vectorJs = __webpack_require__(1);

	var _vectorJs2 = _interopRequireDefault(_vectorJs);

	var _particleJs = __webpack_require__(2);

	var _particleJs2 = _interopRequireDefault(_particleJs);

	var Generator = (function () {
	  function Generator(x, y) {
	    _classCallCheck(this, Generator);

	    this.x = x;
	    this.y = y;
	  }

	  _createClass(Generator, [{
	    key: 'generate',
	    value: function generate() {
	      return [new _particleJs2['default'](1, 10, new _vectorJs2['default'](10, 20), new _vectorJs2['default'](-4, 10)), new _particleJs2['default'](1, 10, new _vectorJs2['default'](40, 70), new _vectorJs2['default'](5, 20)), new _particleJs2['default'](1, 10, new _vectorJs2['default'](90, 90), new _vectorJs2['default'](5, 20)), new _particleJs2['default'](1, 10, new _vectorJs2['default'](120, 110), new _vectorJs2['default'](5, 20)), new _particleJs2['default'](1, 10, new _vectorJs2['default'](140, 70), new _vectorJs2['default'](5, 20)), new _particleJs2['default'](1, 10, new _vectorJs2['default'](140, 170), new _vectorJs2['default'](6, 20)), new _particleJs2['default'](1, 10, new _vectorJs2['default'](240, 100), new _vectorJs2['default'](5, 20)), new _particleJs2['default'](1, 10, new _vectorJs2['default'](340, 200), new _vectorJs2['default'](5, -10)), new _particleJs2['default'](1, 10, new _vectorJs2['default'](440, 200), new _vectorJs2['default'](5, 20)), new _particleJs2['default'](1, 10, new _vectorJs2['default'](540, 170), new _vectorJs2['default'](5, -20)), new _particleJs2['default'](1, 10, new _vectorJs2['default'](540, 30), new _vectorJs2['default'](5, 20)), new _particleJs2['default'](1, 10, new _vectorJs2['default'](500, 30), new _vectorJs2['default'](7, 20)), new _particleJs2['default'](1, 10, new _vectorJs2['default'](400, 30), new _vectorJs2['default'](5, 30)), new _particleJs2['default'](1, 10, new _vectorJs2['default'](540, 170), new _vectorJs2['default'](5, 20)), new _particleJs2['default'](1, 10, new _vectorJs2['default'](40, 70), new _vectorJs2['default'](5, 20)), new _particleJs2['default'](1, 10, new _vectorJs2['default'](40, 70), new _vectorJs2['default'](5, 20)), new _particleJs2['default'](1, 10, new _vectorJs2['default'](40, 70), new _vectorJs2['default'](5, 20))];
	    }
	  }]);

	  return Generator;
	})();

	exports['default'] = Generator;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = drawParticle;

	function drawParticle(ctx, particle) {
	  ctx.beginPath();
	  ctx.arc(particle.position.x, particle.position.y, particle.radius, 0, 2 * Math.PI, false);
	  ctx.fillStyle = 'green';
	  ctx.fill();
	  ctx.stroke();
	}

	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(7)["default"];

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Stack = __webpack_require__(8);

	var _Stack2 = _interopRequireDefault(_Stack);

	var _Queue = __webpack_require__(84);

	var _Queue2 = _interopRequireDefault(_Queue);

	var _PriorityQueue = __webpack_require__(85);

	var _PriorityQueue2 = _interopRequireDefault(_PriorityQueue);

	var _DefaultMap = __webpack_require__(90);

	var _DefaultMap2 = _interopRequireDefault(_DefaultMap);

	var _SetPlus = __webpack_require__(107);

	var _SetPlus2 = _interopRequireDefault(_SetPlus);

	exports.Stack = _Stack2["default"];
	exports.Queue = _Queue2["default"];
	exports.PriorityQueue = _PriorityQueue2["default"];
	exports.DefaultMap = _DefaultMap2["default"];
	exports.SetPlus = _SetPlus2["default"];

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = __webpack_require__(9)["default"];

	var _classCallCheck = __webpack_require__(13)["default"];

	var _Symbol = __webpack_require__(14)["default"];

	var _getIterator = __webpack_require__(41)["default"];

	var _Symbol$iterator = __webpack_require__(56)["default"];

	var _regeneratorRuntime = __webpack_require__(58)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var data = _Symbol("data");

	var _default = (function () {
	    var _class = function _default(iterable) {
	        _classCallCheck(this, _class);

	        this[data] = [];
	        if (iterable) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = _getIterator(iterable), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var item = _step.value;

	                    this.push(item);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator["return"]) {
	                        _iterator["return"]();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    };

	    _createClass(_class, [{
	        key: "push",
	        value: function push(item) {
	            this[data].push(item);
	            return this;
	        }
	    }, {
	        key: "pop",
	        value: function pop() {
	            return this[data].pop();
	        }
	    }, {
	        key: "peek",
	        value: function peek() {
	            return this[data][this[data].length - 1];
	        }
	    }, {
	        key: "clear",
	        value: function clear() {
	            this[data] = [];
	        }
	    }, {
	        key: "has",
	        value: function has(item) {
	            for (var i = 0; i < this.size; i++) {
	                if (item === this[data][i]) {
	                    return true;
	                }
	            }
	            return false;
	        }
	    }, {
	        key: "forEach",
	        value: function forEach(callback, thisArg) {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = _getIterator(this), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var item = _step2.value;

	                    callback.call(thisArg, item, this);
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	                        _iterator2["return"]();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        }
	    }, {
	        key: _Symbol$iterator,
	        value: _regeneratorRuntime.mark(function value() {
	            var i;
	            return _regeneratorRuntime.wrap(function value$(context$2$0) {
	                while (1) switch (context$2$0.prev = context$2$0.next) {
	                    case 0:
	                        i = this[data].length - 1;

	                    case 1:
	                        if (!(i >= 0)) {
	                            context$2$0.next = 7;
	                            break;
	                        }

	                        context$2$0.next = 4;
	                        return this[data][i];

	                    case 4:
	                        i--;
	                        context$2$0.next = 1;
	                        break;

	                    case 7:
	                    case "end":
	                        return context$2$0.stop();
	                }
	            }, value, this);
	        })
	    }, {
	        key: "size",
	        get: function get() {
	            return this[data].length;
	        }
	    }]);

	    return _class;
	})();

	exports["default"] = _default;
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(10)["default"];

	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;

	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

	exports.__esModule = true;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(11), __esModule: true };

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(12);
	module.exports = function defineProperty(it, key, desc) {
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	var $Object = Object;
	module.exports = {
	  create: $Object.create,
	  getProto: $Object.getPrototypeOf,
	  isEnum: ({}).propertyIsEnumerable,
	  getDesc: $Object.getOwnPropertyDescriptor,
	  setDesc: $Object.defineProperty,
	  setDescs: $Object.defineProperties,
	  getKeys: $Object.keys,
	  getNames: $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each: [].forEach
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(15), __esModule: true };

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(16);
	module.exports = __webpack_require__(22).Symbol;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $ = __webpack_require__(12),
	    global = __webpack_require__(17),
	    has = __webpack_require__(18),
	    SUPPORT_DESC = __webpack_require__(19),
	    $def = __webpack_require__(21),
	    $redef = __webpack_require__(23),
	    $fails = __webpack_require__(20),
	    shared = __webpack_require__(26),
	    setTag = __webpack_require__(27),
	    uid = __webpack_require__(29),
	    wks = __webpack_require__(28),
	    keyOf = __webpack_require__(30),
	    $names = __webpack_require__(35),
	    enumKeys = __webpack_require__(36),
	    isArray = __webpack_require__(37),
	    isObject = __webpack_require__(38),
	    anObject = __webpack_require__(39),
	    toIObject = __webpack_require__(31),
	    createDesc = __webpack_require__(25),
	    getDesc = $.getDesc,
	    setDesc = $.setDesc,
	    _create = $.create,
	    getNames = $names.get,
	    $Symbol = global.Symbol,
	    $JSON = global.JSON,
	    _stringify = $JSON && $JSON.stringify,
	    setter = false,
	    HIDDEN = wks('_hidden'),
	    isEnum = $.isEnum,
	    SymbolRegistry = shared('symbol-registry'),
	    AllSymbols = shared('symbols'),
	    useNative = typeof $Symbol == 'function',
	    ObjectProto = Object.prototype;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = SUPPORT_DESC && $fails(function () {
	  return _create(setDesc({}, 'a', {
	    get: function get() {
	      return setDesc(this, 'a', { value: 7 }).a;
	    }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = getDesc(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  setDesc(it, key, D);
	  if (protoDesc && it !== ObjectProto) setDesc(ObjectProto, key, protoDesc);
	} : setDesc;

	var wrap = function wrap(tag) {
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  SUPPORT_DESC && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function set(value) {
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = function isSymbol(it) {
	  return typeof it == 'symbol';
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (D && has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    }return setSymbolDesc(it, key, D);
	  }return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P)),
	      i = 0,
	      l = keys.length,
	      key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  var D = getDesc(it = toIObject(it), key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = getNames(toIObject(it)),
	      result = [],
	      i = 0,
	      key;
	  while (names.length > i) if (!has(AllSymbols, key = names[i++]) && key != HIDDEN) result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var names = getNames(toIObject(it)),
	      result = [],
	      i = 0,
	      key;
	  while (names.length > i) if (has(AllSymbols, key = names[i++])) result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it) {
	  var args = [it],
	      i = 1,
	      replacer,
	      $replacer;
	  while (arguments.length > i) args.push(arguments[i++]);
	  replacer = args[1];
	  if (typeof replacer == 'function') $replacer = replacer;
	  if ($replacer || !isArray(replacer)) replacer = function (key, value) {
	    if ($replacer) value = $replacer.call(this, key, value);
	    if (!isSymbol(value)) return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if (!useNative) {
	  $Symbol = function Symbol() {
	    if (isSymbol(this)) throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments[0]));
	  };
	  $redef($Symbol.prototype, 'toString', function toString() {
	    return this._k;
	  });

	  isSymbol = function (it) {
	    return it instanceof $Symbol;
	  };

	  $.create = $create;
	  $.isEnum = $propertyIsEnumerable;
	  $.getDesc = $getOwnPropertyDescriptor;
	  $.setDesc = $defineProperty;
	  $.setDescs = $defineProperties;
	  $.getNames = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;

	  if (SUPPORT_DESC && !__webpack_require__(40)) {
	    $redef(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function _for(key) {
	    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key) {
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function useSetter() {
	    setter = true;
	  },
	  useSimple: function useSimple() {
	    setter = false;
	  }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call(('hasInstance,isConcatSpreadable,iterator,match,replace,search,' + 'species,split,toPrimitive,toStringTag,unscopables').split(','), function (it) {
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});

	setter = true;

	$def($def.G + $def.W, { Symbol: $Symbol });

	$def($def.S, 'Symbol', symbolStatics);

	$def($def.S + $def.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $def($def.S + $def.F * (!useNative || buggyJSON), 'JSON', { stringify: $stringify });

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setTag(global.JSON, 'JSON', true);

/***/ },
/* 17 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	'use strict';

	var UNDEFINED = 'undefined';
	var global = module.exports = typeof window != UNDEFINED && window.Math == Math ? window : typeof self != UNDEFINED && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	var hasOwnProperty = ({}).hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	'use strict';

	module.exports = !__webpack_require__(20)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(17),
	    core = __webpack_require__(22),
	    PROTOTYPE = 'prototype';
	var ctx = function ctx(fn, that) {
	  return function () {
	    return fn.apply(that, arguments);
	  };
	};
	var $def = function $def(type, name, source) {
	  var key,
	      own,
	      out,
	      exp,
	      isGlobal = type & $def.G,
	      isProto = type & $def.P,
	      target = isGlobal ? global : type & $def.S ? global[name] : (global[name] || {})[PROTOTYPE],
	      exports = isGlobal ? core : core[name] || (core[name] = {});
	  if (isGlobal) source = name;
	  for (key in source) {
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if (isGlobal && typeof target[key] != 'function') exp = source[key];
	    // bind timers to global for call from export context
	    else if (type & $def.B && own) exp = ctx(out, global);
	      // wrap global constructors for prevent change them in library
	      else if (type & $def.W && target[key] == out) !(function (C) {
	          exp = function (param) {
	            return this instanceof C ? new C(param) : C(param);
	          };
	          exp[PROTOTYPE] = C[PROTOTYPE];
	        })(out);else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if (isProto) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$def.F = 1; // forced
	$def.G = 2; // global
	$def.S = 4; // static
	$def.P = 8; // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	module.exports = $def;

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	var core = module.exports = { version: '1.2.1' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(24);

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(12),
	    createDesc = __webpack_require__(25);
	module.exports = __webpack_require__(19) ? function (object, key, value) {
	  return $.setDesc(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(17),
	    SHARED = '__core-js_shared__',
	    store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var has = __webpack_require__(18),
	    hide = __webpack_require__(24),
	    TAG = __webpack_require__(28)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) hide(it, TAG, tag);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var store = __webpack_require__(26)('wks'),
	    Symbol = __webpack_require__(17).Symbol;
	module.exports = function (name) {
	  return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || __webpack_require__(29))('Symbol.' + name));
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	var id = 0,
	    px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(12),
	    toIObject = __webpack_require__(31);
	module.exports = function (object, el) {
	  var O = toIObject(object),
	      keys = $.getKeys(O),
	      length = keys.length,
	      index = 0,
	      key;
	  while (length > index) if (O[key = keys[index++]] === el) return key;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	'use strict';

	var IObject = __webpack_require__(32),
	    defined = __webpack_require__(34);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// indexed object, fallback for non-array-like ES3 strings
	'use strict';

	var cof = __webpack_require__(33);
	module.exports = 0 in Object('z') ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";

	var toString = ({}).toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	"use strict";

	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	'use strict';

	var toString = ({}).toString,
	    toIObject = __webpack_require__(31),
	    getNames = __webpack_require__(12).getNames;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function getWindowNames(it) {
	  try {
	    return getNames(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	module.exports.get = function getOwnPropertyNames(it) {
	  if (windowNames && toString.call(it) == '[object Window]') return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	'use strict';

	var $ = __webpack_require__(12);
	module.exports = function (it) {
	  var keys = $.getKeys(it),
	      getSymbols = $.getSymbols;
	  if (getSymbols) {
	    var symbols = getSymbols(it),
	        isEnum = $.isEnum,
	        i = 0,
	        key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	'use strict';

	var cof = __webpack_require__(33);
	module.exports = Array.isArray || function (arg) {
	  return cof(arg) == 'Array';
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(38);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";

	module.exports = true;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(42), __esModule: true };

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(43);
	__webpack_require__(50);
	module.exports = __webpack_require__(53);

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(44);
	var Iterators = __webpack_require__(47);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var setUnscope = __webpack_require__(45),
	    step = __webpack_require__(46),
	    Iterators = __webpack_require__(47),
	    toIObject = __webpack_require__(31);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	__webpack_require__(48)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0; // next index
	  this._k = kind; // kind
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      kind = this._k,
	      index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	setUnscope('keys');
	setUnscope('values');
	setUnscope('entries');

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function () {/* empty */};

/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(40),
	    $def = __webpack_require__(21),
	    $redef = __webpack_require__(23),
	    hide = __webpack_require__(24),
	    has = __webpack_require__(18),
	    SYMBOL_ITERATOR = __webpack_require__(28)('iterator'),
	    Iterators = __webpack_require__(47),
	    BUGGY = !([].keys && 'next' in [].keys()),
	    // Safari has buggy iterators w/o `next`
	FF_ITERATOR = '@@iterator',
	    KEYS = 'keys',
	    VALUES = 'values';
	var returnThis = function returnThis() {
	  return this;
	};
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE) {
	  __webpack_require__(49)(Constructor, NAME, next);
	  var createMethod = function createMethod(kind) {
	    switch (kind) {
	      case KEYS:
	        return function keys() {
	          return new Constructor(this, kind);
	        };
	      case VALUES:
	        return function values() {
	          return new Constructor(this, kind);
	        };
	    }return function entries() {
	      return new Constructor(this, kind);
	    };
	  };
	  var TAG = NAME + ' Iterator',
	      proto = Base.prototype,
	      _native = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
	      _default = _native || createMethod(DEFAULT),
	      methods,
	      key;
	  // Fix native
	  if (_native) {
	    var IteratorPrototype = __webpack_require__(12).getProto(_default.call(new Base()));
	    // Set @@toStringTag to native iterators
	    __webpack_require__(27)(IteratorPrototype, TAG, true);
	    // FF fix
	    if (!LIBRARY && has(proto, FF_ITERATOR)) hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
	  }
	  // Define iterator
	  if (!LIBRARY || FORCE) hide(proto, SYMBOL_ITERATOR, _default);
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      keys: IS_SET ? _default : createMethod(KEYS),
	      values: DEFAULT == VALUES ? _default : createMethod(VALUES),
	      entries: DEFAULT != VALUES ? _default : createMethod('entries')
	    };
	    if (FORCE) for (key in methods) {
	      if (!(key in proto)) $redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * BUGGY, NAME, methods);
	  }
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(12),
	    IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(24)(IteratorPrototype, __webpack_require__(28)('iterator'), function () {
	  return this;
	});

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = $.create(IteratorPrototype, { next: __webpack_require__(25)(1, next) });
	  __webpack_require__(27)(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(51)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(48)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      index = this._i,
	      point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	'use strict';

	var toInteger = __webpack_require__(52),
	    defined = __webpack_require__(34);
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that)),
	        i = toInteger(pos),
	        l = s.length,
	        a,
	        b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	"use strict";

	var ceil = Math.ceil,
	    floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var anObject = __webpack_require__(39),
	    get = __webpack_require__(54);
	module.exports = __webpack_require__(22).getIterator = function (it) {
	  var iterFn = get(it);
	  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var classof = __webpack_require__(55),
	    ITERATOR = __webpack_require__(28)('iterator'),
	    Iterators = __webpack_require__(47);
	module.exports = __webpack_require__(22).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	'use strict';

	var cof = __webpack_require__(33),
	    TAG = __webpack_require__(28)('toStringTag'),

	// ES3 wrong here
	ARG = cof((function () {
	  return arguments;
	})()) == 'Arguments';

	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	  // @@toStringTag case
	  : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	  // builtinTag case
	  : ARG ? cof(O)
	  // ES3 arguments fallback
	  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(50);
	__webpack_require__(43);
	module.exports = __webpack_require__(28)('iterator');

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	"use strict";

	var g = typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined;

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	module.exports = __webpack_require__(59);

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch (e) {
	    g.regeneratorRuntime = undefined;
	  }
	}

	module.exports = { "default": module.exports, __esModule: true };
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	"use strict";

	var _Symbol = __webpack_require__(14)["default"];

	var _Symbol$iterator = __webpack_require__(56)["default"];

	var _Object$create = __webpack_require__(61)["default"];

	var _Promise = __webpack_require__(63)["default"];

	!(function (global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol = typeof _Symbol === "function" && _Symbol$iterator || "@@iterator";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = _Object$create((outerFn || Generator).prototype);

	    generator._invoke = makeInvokeMethod(innerFn, self || null, new Context(tryLocsList || []));

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      prototype[method] = function (arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function (genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction ||
	    // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	  };

	  runtime.mark = function (genFun) {
	    genFun.__proto__ = GeneratorFunctionPrototype;
	    genFun.prototype = _Object$create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function (arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    // This invoke function is written in a style that assumes some
	    // calling function (or Promise) will handle exceptions.
	    function invoke(method, arg) {
	      var result = generator[method](arg);
	      var value = result.value;
	      return value instanceof AwaitArgument ? _Promise.resolve(value.arg).then(invokeNext, invokeThrow) : _Promise.resolve(value).then(function (unwrapped) {
	        // When a yielded Promise is resolved, its final value becomes
	        // the .value of the Promise<{value,done}> result for the
	        // current iteration. If the Promise is rejected, however, the
	        // result for this iteration will be rejected with the same
	        // reason. Note that rejections of yielded Promises are not
	        // thrown back into the generator function, as is the case
	        // when an awaited Promise is rejected. This difference in
	        // behavior between yield and await is important, because it
	        // allows the consumer to decide what to do with the yielded
	        // rejection (swallow it and continue, manually .throw it back
	        // into the generator, abandon iteration, whatever). With
	        // await, by contrast, there is no opportunity to examine the
	        // rejection reason outside the generator function, so the
	        // only option is to throw it from the await expression, and
	        // let the generator function handle the exception.
	        result.value = unwrapped;
	        return result;
	      });
	    }

	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var invokeNext = invoke.bind(generator, "next");
	    var invokeThrow = invoke.bind(generator, "throw");
	    var invokeReturn = invoke.bind(generator, "return");
	    var previousPromise;

	    function enqueue(method, arg) {
	      var enqueueResult =
	      // If enqueue has been called before, then we want to wait until
	      // all previous Promises have been resolved before calling invoke,
	      // so that results are always delivered in the correct order. If
	      // enqueue has not been called before, then it is important to
	      // call invoke immediately, without waiting on a callback to fire,
	      // so that the async generator function has the opportunity to do
	      // any necessary setup in a predictable way. This predictability
	      // is why the Promise constructor synchronously invokes its
	      // executor callback, and why async functions synchronously
	      // execute code before the first await. Since we implement simple
	      // async functions in terms of async generators, it is especially
	      // important to get this right, even though it requires care.
	      previousPromise ? previousPromise.then(function () {
	        return invoke(method, arg);
	      }) : new _Promise(function (resolve) {
	        resolve(invoke(method, arg));
	      });

	      // Avoid propagating enqueueResult failures to Promises returned by
	      // later invocations of the iterator.
	      previousPromise = enqueueResult["catch"](function (ignored) {});

	      return enqueueResult;
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

	    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	    : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function () {
	    return this;
	  };

	  Gp.toString = function () {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function (object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1,
	            next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function reset(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function stop() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function complete(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" || record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	})(
	// Among the various tricks for obtaining a reference to the global
	// object, this seems to be the most reliable technique that does not
	// use indirect eval (which violates Content Security Policy).
	typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(60)))

/***/ },
/* 60 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
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
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
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
	    clearTimeout(timeout);
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
	        setTimeout(drainQueue, 0);
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

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(62), __esModule: true };

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(12);
	module.exports = function create(P, D) {
	  return $.create(P, D);
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(64), __esModule: true };

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(65);
	__webpack_require__(50);
	__webpack_require__(43);
	__webpack_require__(66);
	module.exports = __webpack_require__(22).Promise;

/***/ },
/* 65 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(12),
	    LIBRARY = __webpack_require__(40),
	    global = __webpack_require__(17),
	    ctx = __webpack_require__(67),
	    classof = __webpack_require__(55),
	    $def = __webpack_require__(21),
	    isObject = __webpack_require__(38),
	    anObject = __webpack_require__(39),
	    aFunction = __webpack_require__(68),
	    strictNew = __webpack_require__(69),
	    forOf = __webpack_require__(70),
	    setProto = __webpack_require__(74).set,
	    same = __webpack_require__(75),
	    species = __webpack_require__(76),
	    SPECIES = __webpack_require__(28)('species'),
	    RECORD = __webpack_require__(29)('record'),
	    asap = __webpack_require__(77),
	    PROMISE = 'Promise',
	    process = global.process,
	    isNode = classof(process) == 'process',
	    P = global[PROMISE],
	    Wrapper;

	var testResolve = function testResolve(sub) {
	  var test = new P(function () {});
	  if (sub) test.constructor = Object;
	  return P.resolve(test) === test;
	};

	var useNative = (function () {
	  var works = false;
	  function P2(x) {
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, { constructor: { value: P2 } });
	    // actual Firefox has broken subclass support, test that
	    if (!(P2.resolve(5).then(function () {}) instanceof P2)) {
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if (works && __webpack_require__(19)) {
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function get() {
	          thenableThenGotten = true;
	        }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch (e) {
	    works = false;
	  }
	  return works;
	})();

	// helpers
	var isPromise = function isPromise(it) {
	  return isObject(it) && (useNative ? classof(it) == 'Promise' : RECORD in it);
	};
	var sameConstructor = function sameConstructor(a, b) {
	  // library wrapper special case
	  if (LIBRARY && a === P && b === Wrapper) return true;
	  return same(a, b);
	};
	var getConstructor = function getConstructor(C) {
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function isThenable(it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function notify(record, isReject) {
	  if (record.n) return;
	  record.n = true;
	  var chain = record.c;
	  asap(function () {
	    var value = record.v,
	        ok = record.s == 1,
	        i = 0;
	    var run = function run(react) {
	      var cb = ok ? react.ok : react.fail,
	          ret,
	          then;
	      try {
	        if (cb) {
	          if (!ok) record.h = true;
	          ret = cb === true ? value : cb(value);
	          if (ret === react.P) {
	            react.rej(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(ret)) {
	            then.call(ret, react.res, react.rej);
	          } else react.res(ret);
	        } else react.rej(value);
	      } catch (err) {
	        react.rej(err);
	      }
	    };
	    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if (isReject) setTimeout(function () {
	      var promise = record.p,
	          handler,
	          console;
	      if (isUnhandled(promise)) {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      }record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function isUnhandled(promise) {
	  var record = promise[RECORD],
	      chain = record.a || record.c,
	      i = 0,
	      react;
	  if (record.h) return false;
	  while (chain.length > i) {
	    react = chain[i++];
	    if (react.fail || !isUnhandled(react.P)) return false;
	  }return true;
	};
	var $reject = function $reject(value) {
	  var record = this;
	  if (record.d) return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function $resolve(value) {
	  var record = this,
	      then;
	  if (record.d) return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if (then = isThenable(value)) {
	      asap(function () {
	        var wrapper = { r: record, d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch (e) {
	    $reject.call({ r: record, d: false }, e); // wrap
	  }
	};

	// constructor polyfill
	if (!useNative) {
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor) {
	    aFunction(executor);
	    var record = {
	      p: strictNew(this, P, PROMISE), // <- promise
	      c: [], // <- awaiting reactions
	      a: undefined, // <- checked in isUnhandled reactions
	      s: 0, // <- state
	      d: false, // <- done
	      v: undefined, // <- value
	      h: false, // <- handled rejection
	      n: false // <- notify
	    };
	    this[RECORD] = record;
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch (err) {
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(82)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var S = anObject(anObject(this).constructor)[SPECIES];
	      var react = {
	        ok: typeof onFulfilled == 'function' ? onFulfilled : true,
	        fail: typeof onRejected == 'function' ? onRejected : false
	      };
	      var promise = react.P = new (S != undefined ? S : P)(function (res, rej) {
	        react.res = res;
	        react.rej = rej;
	      });
	      aFunction(react.res);
	      aFunction(react.rej);
	      var record = this[RECORD];
	      record.c.push(react);
	      if (record.a) record.a.push(react);
	      if (record.s) notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function _catch(onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	}

	// export
	$def($def.G + $def.W + $def.F * !useNative, { Promise: P });
	__webpack_require__(27)(P, PROMISE);
	species(P);
	species(Wrapper = __webpack_require__(22)[PROMISE]);

	// statics
	$def($def.S + $def.F * !useNative, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    return new this(function (res, rej) {
	      rej(r);
	    });
	  }
	});
	$def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    return isPromise(x) && sameConstructor(x.constructor, this) ? x : new this(function (res) {
	      res(x);
	    });
	  }
	});
	$def($def.S + $def.F * !(useNative && __webpack_require__(83)(function (iter) {
	  P.all(iter)['catch'](function () {});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = getConstructor(this),
	        values = [];
	    return new C(function (res, rej) {
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length,
	          results = Array(remaining);
	      if (remaining) $.each.call(values, function (promise, index) {
	        C.resolve(promise).then(function (value) {
	          results[index] = value;
	          --remaining || res(results);
	        }, rej);
	      });else res(results);
	    });
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = getConstructor(this);
	    return new C(function (res, rej) {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(res, rej);
	      });
	    });
	  }
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	'use strict';

	var aFunction = __webpack_require__(68);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1:
	      return function (a) {
	        return fn.call(that, a);
	      };
	    case 2:
	      return function (a, b) {
	        return fn.call(that, a, b);
	      };
	    case 3:
	      return function (a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }
	  return function () /* ...args */{
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (it, Constructor, name) {
	  if (!(it instanceof Constructor)) throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ctx = __webpack_require__(67),
	    call = __webpack_require__(71),
	    isArrayIter = __webpack_require__(72),
	    anObject = __webpack_require__(39),
	    toLength = __webpack_require__(73),
	    getIterFn = __webpack_require__(54);
	module.exports = function (iterable, entries, fn, that) {
	  var iterFn = getIterFn(iterable),
	      f = ctx(fn, that, entries ? 2 : 1),
	      index = 0,
	      length,
	      step,
	      iterator;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	'use strict';

	var anObject = __webpack_require__(39);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	    // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	'use strict';

	var Iterators = __webpack_require__(47),
	    ITERATOR = __webpack_require__(28)('iterator');
	module.exports = function (it) {
	  return (Iterators.Array || Array.prototype[ITERATOR]) === it;
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	'use strict';

	var toInteger = __webpack_require__(52),
	    min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	'use strict';

	var getDesc = __webpack_require__(12).getDesc,
	    isObject = __webpack_require__(38),
	    anObject = __webpack_require__(39);
	var check = function check(O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line no-proto
	  (function (test, buggy, set) {
	    try {
	      set = __webpack_require__(67)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	      set(test, []);
	      buggy = !(test instanceof Array);
	    } catch (e) {
	      buggy = true;
	    }
	    return function setPrototypeOf(O, proto) {
	      check(O, proto);
	      if (buggy) O.__proto__ = proto;else set(O, proto);
	      return O;
	    };
	  })({}, false) : undefined),
	  check: check
	};

/***/ },
/* 75 */
/***/ function(module, exports) {

	"use strict";

	module.exports = Object.is || function is(x, y) {
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(12),
	    SPECIES = __webpack_require__(28)('species');
	module.exports = function (C) {
	  if (__webpack_require__(19) && !(SPECIES in C)) $.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function get() {
	      return this;
	    }
	  });
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(17),
	    macrotask = __webpack_require__(78).set,
	    Observer = global.MutationObserver || global.WebKitMutationObserver,
	    process = global.process,
	    isNode = __webpack_require__(33)(process) == 'process',
	    head,
	    last,
	    notify;

	var flush = function flush() {
	  var parent, domain;
	  if (isNode && (parent = process.domain)) {
	    process.domain = null;
	    parent.exit();
	  }
	  while (head) {
	    domain = head.domain;
	    if (domain) domain.enter();
	    head.fn.call(); // <- currently we use it only for Promise - try / catch not required
	    if (domain) domain.exit();
	    head = head.next;
	  }last = undefined;
	  if (parent) parent.enter();
	};

	// Node.js
	if (isNode) {
	  notify = function () {
	    process.nextTick(flush);
	  };
	  // browsers with MutationObserver
	} else if (Observer) {
	    var toggle = 1,
	        node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function () {
	      node.data = toggle = -toggle;
	    };
	    // for other environments - macrotask based on:
	    // - setImmediate
	    // - MessageChannel
	    // - window.postMessag
	    // - onreadystatechange
	    // - setTimeout
	  } else {
	      notify = function () {
	        // strange IE + webpack dev server bug - use .call(global)
	        macrotask.call(global, flush);
	      };
	    }

	module.exports = function asap(fn) {
	  var task = { fn: fn, next: undefined, domain: isNode && process.domain };
	  if (last) last.next = task;
	  if (!head) {
	    head = task;
	    notify();
	  }last = task;
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx = __webpack_require__(67),
	    invoke = __webpack_require__(79),
	    html = __webpack_require__(80),
	    cel = __webpack_require__(81),
	    global = __webpack_require__(17),
	    process = global.process,
	    setTask = global.setImmediate,
	    clearTask = global.clearImmediate,
	    MessageChannel = global.MessageChannel,
	    counter = 0,
	    queue = {},
	    ONREADYSTATECHANGE = 'onreadystatechange',
	    defer,
	    channel,
	    port;
	var run = function run() {
	  var id = +this;
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function listner(event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [],
	        i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(33)(process) == 'process') {
	    defer = function (id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	    // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	      channel = new MessageChannel();
	      port = channel.port2;
	      channel.port1.onmessage = listner;
	      defer = ctx(port.postMessage, port, 1);
	      // Browsers with postMessage, skip WebWorkers
	      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	    } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	        defer = function (id) {
	          global.postMessage(id + '', '*');
	        };
	        global.addEventListener('message', listner, false);
	        // IE8-
	      } else if (ONREADYSTATECHANGE in cel('script')) {
	          defer = function (id) {
	            html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	              html.removeChild(this);
	              run.call(id);
	            };
	          };
	          // Rest old browsers
	        } else {
	            defer = function (id) {
	              setTimeout(ctx(run, id, 1), 0);
	            };
	          }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};

/***/ },
/* 79 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	"use strict";

	module.exports = function (fn, args, that) {
	                  var un = that === undefined;
	                  switch (args.length) {
	                                    case 0:
	                                                      return un ? fn() : fn.call(that);
	                                    case 1:
	                                                      return un ? fn(args[0]) : fn.call(that, args[0]);
	                                    case 2:
	                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
	                                    case 3:
	                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
	                                    case 4:
	                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
	                  }return fn.apply(that, args);
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(17).document && document.documentElement;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(38),
	    document = __webpack_require__(17).document,

	// in old IE typeof document.createElement is 'object'
	is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $redef = __webpack_require__(23);
	module.exports = function (target, src) {
	  for (var key in src) $redef(target, key, src[key]);
	  return target;
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var SYMBOL_ITERATOR = __webpack_require__(28)('iterator'),
	    SAFE_CLOSING = false;
	try {
	  var riter = [7][SYMBOL_ITERATOR]();
	  riter['return'] = function () {
	    SAFE_CLOSING = true;
	  };
	  Array.from(riter, function () {
	    throw 2;
	  });
	} catch (e) {/* empty */}
	module.exports = function (exec) {
	  if (!SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7],
	        iter = arr[SYMBOL_ITERATOR]();
	    iter.next = function () {
	      safe = true;
	    };
	    arr[SYMBOL_ITERATOR] = function () {
	      return iter;
	    };
	    exec(arr);
	  } catch (e) {/* empty */}
	  return safe;
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = __webpack_require__(9)["default"];

	var _classCallCheck = __webpack_require__(13)["default"];

	var _Symbol = __webpack_require__(14)["default"];

	var _getIterator = __webpack_require__(41)["default"];

	var _Symbol$iterator = __webpack_require__(56)["default"];

	var _regeneratorRuntime = __webpack_require__(58)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var data = _Symbol("data");

	var _default = (function () {
	    var _class = function _default(iterable) {
	        _classCallCheck(this, _class);

	        this[data] = [];
	        if (iterable) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = _getIterator(iterable), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var item = _step.value;

	                    this.enqueue(item);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator["return"]) {
	                        _iterator["return"]();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    };

	    _createClass(_class, [{
	        key: "enqueue",
	        value: function enqueue(item) {
	            this[data].push(item);
	            return this;
	        }
	    }, {
	        key: "dequeue",
	        value: function dequeue() {
	            return this[data].shift();
	        }
	    }, {
	        key: "peek",
	        value: function peek() {
	            return this[data][0];
	        }
	    }, {
	        key: "clear",
	        value: function clear() {
	            this[data] = [];
	        }
	    }, {
	        key: "has",
	        value: function has(item) {
	            for (var i = 0; i < this.size; i++) {
	                if (item === this[data][i]) {
	                    return true;
	                }
	            }
	            return false;
	        }
	    }, {
	        key: "forEach",
	        value: function forEach(callback, thisArg) {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = _getIterator(this), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var item = _step2.value;

	                    callback.call(thisArg, item, this);
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	                        _iterator2["return"]();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        }
	    }, {
	        key: _Symbol$iterator,
	        value: _regeneratorRuntime.mark(function value() {
	            var i;
	            return _regeneratorRuntime.wrap(function value$(context$2$0) {
	                while (1) switch (context$2$0.prev = context$2$0.next) {
	                    case 0:
	                        i = 0;

	                    case 1:
	                        if (!(i < this.size)) {
	                            context$2$0.next = 7;
	                            break;
	                        }

	                        context$2$0.next = 4;
	                        return this[data][i];

	                    case 4:
	                        i++;
	                        context$2$0.next = 1;
	                        break;

	                    case 7:
	                    case "end":
	                        return context$2$0.stop();
	                }
	            }, value, this);
	        })
	    }, {
	        key: "size",
	        get: function get() {
	            return this[data].length;
	        }
	    }]);

	    return _class;
	})();

	exports["default"] = _default;
	module.exports = exports["default"];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = __webpack_require__(9)["default"];

	var _classCallCheck = __webpack_require__(13)["default"];

	var _Symbol = __webpack_require__(14)["default"];

	var _Array$from = __webpack_require__(86)["default"];

	var _getIterator = __webpack_require__(41)["default"];

	var _Symbol$iterator = __webpack_require__(56)["default"];

	var _regeneratorRuntime = __webpack_require__(58)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function heapify(data, compareFunction) {
	    for (var i = Math.floor((data.length - 2) / 2); i >= 0; i--) {
	        sink(data, compareFunction, i);
	    }
	    return data;
	}

	function bubbleUp(data, compareFunction, index) {
	    var value = data[index];

	    while (index > 0) {
	        var parentIndex = Math.floor((index - 1) / 2);
	        var _parent = data[parentIndex];
	        if (compareFunction(value, _parent) < 0) {
	            data[index] = _parent;
	        } else {
	            break;
	        }
	        index = parentIndex;
	    }
	    data[index] = value;
	    return index;
	}

	function sink(data, compareFunction, index) {
	    var value = data[index];
	    var size = data.length;

	    while (2 * index + 1 < size) {
	        var targetIndex = 2 * index + 1;
	        if (targetIndex < size - 1 && compareFunction(data[targetIndex + 1], data[targetIndex]) < 0) {
	            targetIndex++;
	        }
	        if (compareFunction(data[index], data[targetIndex]) <= 0) {
	            break;
	        }
	        data[index] = data[targetIndex];
	        index = targetIndex;
	    }
	    data[index] = value;
	    return index;
	}

	var data = _Symbol("data");
	var comp = _Symbol("compareFunction");

	var PriorityQueue = (function () {
	    function PriorityQueue(compareFunction, iterable) {
	        _classCallCheck(this, PriorityQueue);

	        if (typeof compareFunction !== "function") {
	            throw new Error("PriorityQueue: no compareFunction defined");
	        }
	        this[comp] = compareFunction;

	        if (iterable === undefined) {
	            this[data] = [];
	        } else {
	            this[data] = heapify(_Array$from(iterable), compareFunction);
	        }
	    }

	    _createClass(PriorityQueue, [{
	        key: "add",
	        value: function add(item) {
	            this[data].push(item);
	            bubbleUp(this[data], this[comp], this.size - 1);
	            return this;
	        }
	    }, {
	        key: "peek",
	        value: function peek() {
	            return this[data][0];
	        }
	    }, {
	        key: "remove",
	        value: function remove() {
	            var output = this[data][0];
	            if (this.size > 1) {
	                this[data][0] = this[data].pop();
	                sink(this[data], this[comp], 0);
	            } else {
	                this[data].pop();
	            }
	            return output;
	        }
	    }, {
	        key: "delete",
	        value: function _delete(item) {
	            for (var i = 0; i < this.size - 1; i++) {
	                if (this[comp](item, this[data][i]) === 0) {
	                    this[data][i] = this[data].pop();
	                    var newIndex = bubbleUp(this[data], this[comp], i);
	                    sink(this[data], this[comp], newIndex);
	                    return true;
	                }
	            }
	            if (this[comp](this[data][this.size - 1], item) === 0) {
	                this[data].pop();
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: "clear",
	        value: function clear() {
	            this[data] = [];
	        }
	    }, {
	        key: "has",
	        value: function has(item) {
	            for (var i = 0; i < this.size; i++) {
	                if (this[comp](item, this[data][i]) === 0) {
	                    return true;
	                }
	            }
	            return false;
	        }
	    }, {
	        key: "forEach",
	        value: function forEach(callback, thisArg) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = _getIterator(this), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var item = _step.value;

	                    callback.call(thisArg, item, this);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator["return"]) {
	                        _iterator["return"]();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }, {
	        key: _Symbol$iterator,
	        value: _regeneratorRuntime.mark(function value() {
	            var i;
	            return _regeneratorRuntime.wrap(function value$(context$2$0) {
	                while (1) switch (context$2$0.prev = context$2$0.next) {
	                    case 0:
	                        i = 0;

	                    case 1:
	                        if (!(i < this.size)) {
	                            context$2$0.next = 7;
	                            break;
	                        }

	                        context$2$0.next = 4;
	                        return this[data][i];

	                    case 4:
	                        i++;
	                        context$2$0.next = 1;
	                        break;

	                    case 7:
	                    case "end":
	                        return context$2$0.stop();
	                }
	            }, value, this);
	        })
	    }, {
	        key: "size",
	        get: function get() {
	            return this[data].length;
	        }
	    }], [{
	        key: "newNaturalMin",
	        value: function newNaturalMin(iterator) {
	            return new PriorityQueue(function (a, b) {
	                if (a < b) {
	                    return -1;
	                }
	                if (a > b) {
	                    return 1;
	                }
	                return 0;
	            }, iterator);
	        }
	    }, {
	        key: "newNaturalMax",
	        value: function newNaturalMax(iterator) {
	            return new PriorityQueue(function (a, b) {
	                if (a < b) {
	                    return 1;
	                }
	                if (a > b) {
	                    return -1;
	                }
	                return 0;
	            }, iterator);
	        }
	    }]);

	    return PriorityQueue;
	})();

	exports["default"] = PriorityQueue;
	module.exports = exports["default"];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(50);
	__webpack_require__(88);
	module.exports = __webpack_require__(22).Array.from;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx = __webpack_require__(67),
	    $def = __webpack_require__(21),
	    toObject = __webpack_require__(89),
	    call = __webpack_require__(71),
	    isArrayIter = __webpack_require__(72),
	    toLength = __webpack_require__(73),
	    getIterFn = __webpack_require__(54);
	$def($def.S + $def.F * !__webpack_require__(83)(function (iter) {
	  Array.from(iter);
	}), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /*, mapfn = undefined, thisArg = undefined*/) {
	    var O = toObject(arrayLike),
	        C = typeof this == 'function' ? this : Array,
	        mapfn = arguments[1],
	        mapping = mapfn !== undefined,
	        index = 0,
	        iterFn = getIterFn(O),
	        length,
	        result,
	        step,
	        iterator;
	    if (mapping) mapfn = ctx(mapfn, arguments[2], 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	'use strict';

	var defined = __webpack_require__(34);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _inherits = __webpack_require__(91)["default"];

	var _get = __webpack_require__(95)["default"];

	var _createClass = __webpack_require__(9)["default"];

	var _classCallCheck = __webpack_require__(13)["default"];

	var _Symbol = __webpack_require__(14)["default"];

	var _Map2 = __webpack_require__(100)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var data = _Symbol("data");

	// extending built-in classes does not work in babel

	var _default = (function (_Map) {
	    var _class = function _default(def, iterable) {
	        _classCallCheck(this, _class);

	        _get(Object.getPrototypeOf(_class.prototype), "constructor", this).call(this, iterable);
	        if (def === undefined) {
	            throw new Error("DefaultMap: no default defined");
	        }
	        this[data] = def;
	    };

	    _inherits(_class, _Map);

	    _createClass(_class, [{
	        key: "get",
	        value: function get(key) {
	            if (!this.has(key)) {
	                return this[data];
	            }
	            return _get(Object.getPrototypeOf(_class.prototype), "get", this).call(this, key);
	        }
	    }, {
	        key: "default",
	        get: function get() {
	            return this[data];
	        }
	    }]);

	    return _class;
	})(_Map2);

	exports["default"] = _default;
	module.exports = exports["default"];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$create = __webpack_require__(61)["default"];

	var _Object$setPrototypeOf = __webpack_require__(92)["default"];

	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	exports.__esModule = true;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(94);
	module.exports = __webpack_require__(22).Object.setPrototypeOf;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	'use strict';

	var $def = __webpack_require__(21);
	$def($def.S, 'Object', { setPrototypeOf: __webpack_require__(74).set });

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$getOwnPropertyDescriptor = __webpack_require__(96)["default"];

	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;

	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    desc = parent = getter = undefined;
	    _again = false;
	    if (object === null) object = Function.prototype;

	    var desc = _Object$getOwnPropertyDescriptor(object, property);

	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);

	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;

	      if (getter === undefined) {
	        return undefined;
	      }

	      return getter.call(receiver);
	    }
	  }
	};

	exports.__esModule = true;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(12);
	__webpack_require__(98);
	module.exports = function getOwnPropertyDescriptor(it, key) {
	  return $.getDesc(it, key);
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	'use strict';

	var toIObject = __webpack_require__(31);

	__webpack_require__(99)('getOwnPropertyDescriptor', function ($getOwnPropertyDescriptor) {
	  return function getOwnPropertyDescriptor(it, key) {
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	'use strict';

	module.exports = function (KEY, exec) {
	  var $def = __webpack_require__(21),
	      fn = (__webpack_require__(22).Object || {})[KEY] || Object[KEY],
	      exp = {};
	  exp[KEY] = exec(fn);
	  $def($def.S + $def.F * __webpack_require__(20)(function () {
	    fn(1);
	  }), 'Object', exp);
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(65);
	__webpack_require__(50);
	__webpack_require__(43);
	__webpack_require__(102);
	__webpack_require__(105);
	module.exports = __webpack_require__(22).Map;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(103);

	// 23.1 Map Objects
	__webpack_require__(104)('Map', function (get) {
	  return function Map() {
	    return get(this, arguments[0]);
	  };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key) {
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value) {
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(12),
	    hide = __webpack_require__(24),
	    ctx = __webpack_require__(67),
	    species = __webpack_require__(76),
	    strictNew = __webpack_require__(69),
	    defined = __webpack_require__(34),
	    forOf = __webpack_require__(70),
	    step = __webpack_require__(46),
	    ID = __webpack_require__(29)('id'),
	    $has = __webpack_require__(18),
	    isObject = __webpack_require__(38),
	    isExtensible = Object.isExtensible || isObject,
	    SUPPORT_DESC = __webpack_require__(19),
	    SIZE = SUPPORT_DESC ? '_s' : 'size',
	    id = 0;

	var fastKey = function fastKey(it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!$has(it, ID)) {
	    // can't set id to frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add id
	    if (!create) return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	    // return object id with prefix
	  }return 'O' + it[ID];
	};

	var getEntry = function getEntry(that, key) {
	  // fast case
	  var index = fastKey(key),
	      entry;
	  if (index !== 'F') return that._i[index];
	  // frozen object case
	  for (entry = that._f; entry; entry = entry.n) {
	    if (entry.k == key) return entry;
	  }
	};

	module.exports = {
	  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      strictNew(that, C, NAME);
	      that._i = $.create(null); // index
	      that._f = undefined; // first entry
	      that._l = undefined; // last entry
	      that[SIZE] = 0; // size
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    __webpack_require__(82)(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        for (var that = this, data = that._i, entry = that._f; entry; entry = entry.n) {
	          entry.r = true;
	          if (entry.p) entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function _delete(key) {
	        var that = this,
	            entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.n,
	              prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if (prev) prev.n = next;
	          if (next) next.p = prev;
	          if (that._f == entry) that._f = next;
	          if (that._l == entry) that._l = prev;
	          that[SIZE]--;
	        }return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */) {
	        var f = ctx(callbackfn, arguments[1], 3),
	            entry;
	        while (entry = entry ? entry.n : this._f) {
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while (entry && entry.r) entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(this, key);
	      }
	    });
	    if (SUPPORT_DESC) $.setDesc(C.prototype, 'size', {
	      get: function get() {
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function def(that, key, value) {
	    var entry = getEntry(that, key),
	        prev,
	        index;
	    // change existing entry
	    if (entry) {
	      entry.v = value;
	      // create new entry
	    } else {
	        that._l = entry = {
	          i: index = fastKey(key, true), // <- index
	          k: key, // <- key
	          v: value, // <- value
	          p: prev = that._l, // <- previous entry
	          n: undefined, // <- next entry
	          r: false // <- removed
	        };
	        if (!that._f) that._f = entry;
	        if (prev) prev.n = entry;
	        that[SIZE]++;
	        // add to index
	        if (index !== 'F') that._i[index] = entry;
	      }return that;
	  },
	  getEntry: getEntry,
	  setStrong: function setStrong(C, NAME, IS_MAP) {
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    __webpack_require__(48)(C, NAME, function (iterated, kind) {
	      this._t = iterated; // target
	      this._k = kind; // kind
	      this._l = undefined; // previous
	    }, function () {
	      var that = this,
	          kind = that._k,
	          entry = that._l;
	      // revert to the last existing entry
	      while (entry && entry.r) entry = entry.p;
	      // get next entry
	      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if (kind == 'keys') return step(0, entry.k);
	      if (kind == 'values') return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    species(C);
	    species(__webpack_require__(22)[NAME]); // for wrapper
	  }
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(12),
	    $def = __webpack_require__(21),
	    hide = __webpack_require__(24),
	    forOf = __webpack_require__(70),
	    strictNew = __webpack_require__(69);

	module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
	  var Base = __webpack_require__(17)[NAME],
	      C = Base,
	      ADDER = IS_MAP ? 'set' : 'add',
	      proto = C && C.prototype,
	      O = {};
	  if (!__webpack_require__(19) || typeof C != 'function' || !(IS_WEAK || proto.forEach && !__webpack_require__(20)(function () {
	    new C().entries().next();
	  }))) {
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    __webpack_require__(82)(C.prototype, methods);
	  } else {
	    C = wrapper(function (target, iterable) {
	      strictNew(target, C, NAME);
	      target._c = new Base();
	      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','), function (KEY) {
	      var chain = KEY == 'add' || KEY == 'set';
	      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return chain ? this : result;
	      });
	    });
	    if ('size' in proto) $.setDesc(C.prototype, 'size', {
	      get: function get() {
	        return this._c.size;
	      }
	    });
	  }

	  __webpack_require__(27)(C, NAME);

	  O[NAME] = C;
	  $def($def.G + $def.W + $def.F, O);

	  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	'use strict';

	var $def = __webpack_require__(21);

	$def($def.P, 'Map', { toJSON: __webpack_require__(106)('Map') });

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	'use strict';

	var forOf = __webpack_require__(70),
	    classof = __webpack_require__(55);
	module.exports = function (NAME) {
	  return function toJSON() {
	    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
	    var arr = [];
	    forOf(this, false, arr.push, arr);
	    return arr;
	  };
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// extending built-in classes does not work in babel
	"use strict";

	var _inherits = __webpack_require__(91)["default"];

	var _get = __webpack_require__(95)["default"];

	var _createClass = __webpack_require__(9)["default"];

	var _classCallCheck = __webpack_require__(13)["default"];

	var _getIterator = __webpack_require__(41)["default"];

	var _Set2 = __webpack_require__(108)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var SetPlus = (function (_Set) {
	    function SetPlus() {
	        _classCallCheck(this, SetPlus);

	        _get(Object.getPrototypeOf(SetPlus.prototype), "constructor", this).apply(this, arguments);
	    }

	    _inherits(SetPlus, _Set);

	    _createClass(SetPlus, [{
	        key: "intersection",
	        value: function intersection(other) {
	            var output = new SetPlus();
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = _getIterator(this), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var item = _step.value;

	                    if (other.has(item)) {
	                        output.add(item);
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator["return"]) {
	                        _iterator["return"]();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            return output;
	        }
	    }, {
	        key: "union",
	        value: function union(other) {
	            var output = new SetPlus(this);
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = _getIterator(other), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var item = _step2.value;

	                    output.add(item);
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	                        _iterator2["return"]();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }

	            return output;
	        }
	    }, {
	        key: "difference",
	        value: function difference(other) {
	            var output = new SetPlus(this);
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	                for (var _iterator3 = _getIterator(other), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var item = _step3.value;

	                    output.remove(item);
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
	                        _iterator3["return"]();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }

	            return output;
	        }
	    }]);

	    return SetPlus;
	})(_Set2);

	exports["default"] = SetPlus;
	module.exports = exports["default"];

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(109), __esModule: true };

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(65);
	__webpack_require__(50);
	__webpack_require__(43);
	__webpack_require__(110);
	__webpack_require__(111);
	module.exports = __webpack_require__(22).Set;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(103);

	// 23.2 Set Objects
	__webpack_require__(104)('Set', function (get) {
	  return function Set() {
	    return get(this, arguments[0]);
	  };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value) {
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	'use strict';

	var $def = __webpack_require__(21);

	$def($def.P, 'Set', { toJSON: __webpack_require__(106)('Set') });

/***/ },
/* 112 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Event = function Event(time, first, second) {
	  _classCallCheck(this, Event);

	  this.time = time;
	  this.first = first;
	  this.second = second;
	};

	exports["default"] = Event;
	module.exports = exports["default"];

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _eventJs = __webpack_require__(112);

	var _eventJs2 = _interopRequireDefault(_eventJs);

	var _esCollections = __webpack_require__(6);

	var _esCollections2 = _interopRequireDefault(_esCollections);

	var Simulation = (function () {
	  function Simulation(particles, walls, limit, resolutionHandler) {
	    _classCallCheck(this, Simulation);

	    this.particles = particles;
	    this.walls = walls;
	    this.limit = limit;
	    this.pq = new _esCollections2['default'](function (e1, e2) {
	      return e1.time - e2.time;
	    }, []);
	  }

	  _createClass(Simulation, [{
	    key: 'simulate',
	    value: function simulate() {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = particles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var _p = _step.value;

	          var events = predict(_p);
	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;

	          try {
	            for (var _iterator2 = events[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var e = _step2.value;

	              pq.add(e);
	            }
	          } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion2 && _iterator2['return']) {
	                _iterator2['return']();
	              }
	            } finally {
	              if (_didIteratorError2) {
	                throw _iteratorError2;
	              }
	            }
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator['return']) {
	            _iterator['return']();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      while (pq.size > 0) {
	        var _event = pq.remove();
	        _event.first.bounceOffParticle(_event.second);
	        move(_event.time);
	        resolutionHandler(particles);
	        if (typeof _event.first != Wall) {
	          predict(_event.first).forEach(function (e) {
	            return pq.add(e);
	          });
	        }
	        predict(_event.second).forEach(function (e) {
	          return pq.add(e);
	        });
	      }
	    }
	  }, {
	    key: 'predict',
	    value: function predict(particle) {
	      var events = [];
	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;

	      try {
	        for (var _iterator3 = this.particles[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var that = _step3.value;

	          var time = particle.timeToHitParticle(that);
	          if (time < limit) {
	            events.push(new _eventJs2['default'](time, p, that));
	          }
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3['return']) {
	            _iterator3['return']();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }

	      var _iteratorNormalCompletion4 = true;
	      var _didIteratorError4 = false;
	      var _iteratorError4 = undefined;

	      try {
	        for (var _iterator4 = this.walls[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	          var wall = _step4.value;

	          var time = wall.timeToHitParticle(particle);
	          if (time < limit) {
	            events.push(new _eventJs2['default'](time, p, wall));
	          }
	        }
	      } catch (err) {
	        _didIteratorError4 = true;
	        _iteratorError4 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion4 && _iterator4['return']) {
	            _iterator4['return']();
	          }
	        } finally {
	          if (_didIteratorError4) {
	            throw _iteratorError4;
	          }
	        }
	      }

	      return events;
	    }
	  }, {
	    key: 'move',
	    value: function move(time) {
	      particles.forEach(function (p) {
	        return p.move(time);
	      });
	    }
	  }]);

	  return Simulation;
	})();

	exports['default'] = Simulation;
	module.exports = exports['default'];

/***/ }
/******/ ]);