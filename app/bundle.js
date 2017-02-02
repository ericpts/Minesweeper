(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define('bundle', factory) :
  (factory());
}(this, (function () { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
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
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

// TODO: should this be renamed to "toUnwrappedArray"?
function unwrapArray(elements) {
    if (!elements) {
        return [];
    }

    if (!Array.isArray(elements)) {
        return [elements];
    }

    // Check if the passed in array is valid, and try to return it if possible to preserve references
    var allProperElements = true;
    for (var i = 0; i < elements.length; i++) {
        if (Array.isArray(elements[i]) || elements[i] == null) {
            allProperElements = false;
            break;
        }
    }

    if (allProperElements) {
        // Return the exact same array as was passed in
        return elements;
    }

    var result = [];
    for (var _i = 0; _i < elements.length; _i++) {
        if (Array.isArray(elements[_i])) {
            var unwrappedElement = unwrapArray(elements[_i]);
            for (var j = 0; j < unwrappedElement.length; j += 1) {
                result.push(unwrappedElement[j]);
            }
        } else {
            if (elements[_i] != null) {
                result.push(elements[_i]);
            }
        }
    }
    return result;
}

// Split the passed in array into arrays with at most maxChunkSize elements




function defaultComparator(a, b) {
    if (a == null && b == null) {
        return 0;
    }

    if (b == null) {
        return 1;
    }

    if (a == null) {
        return -1;
    }

    if (typeof a === "number" && typeof b === "number") {
        return a - b;
    }

    if (a.toString() === b.toString()) {
        return 0;
    }
    return a.toString() < b.toString() ? -1 : 1;
}



// If the first argument is a number, it's returned concatenated with the suffix, otherwise it's returned unchanged
function suffixNumber(value, suffix) {
    if (typeof value === "number" || value instanceof Number) {
        return value + suffix;
    }
    return value;
}

function setObjectPrototype(obj, Class) {
    obj.__proto__ = Class.prototype;
    return obj;
}

function isPlainObject(obj) {
    if (!obj || (typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== "object" || obj.nodeType) {
        return false;
    }
    if (obj.constructor && obj.constructor != Object) {
        return false;
    }
    return true;
}

function deepCopy() {
    var target = arguments[0] || {};
    // Handle case when target is a string or something (possible in deep copy)
    if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && typeof target !== "function") {
        target = {};
    }

    for (var i = 1; i < arguments.length; i += 1) {
        var obj = arguments[i];
        if (obj == null) {
            continue;
        }

        // Extend the base object
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.entries(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _step$value = slicedToArray(_step.value, 2),
                    key = _step$value[0],
                    value = _step$value[1];

                // Recurse if we're merging plain objects or arrays
                if (value && isPlainObject(value) || Array.isArray(value)) {
                    var clone = void 0;
                    var src = target[key];

                    if (Array.isArray(value)) {
                        clone = src && Array.isArray(src) ? src : [];
                    } else {
                        clone = src && isPlainObject(src) ? src : {};
                    }

                    target[key] = deepCopy(clone, value);
                } else {
                    // TODO: if value has .clone() method, use that?
                    target[key] = value;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }

    return target;
}



function dashCase(str) {
    var rez = "";
    for (var i = 0; i < str.length; i++) {
        if ("A" <= str[i] && str[i] <= "Z") {
            if (i > 0) {
                rez += "-";
            }
            rez += str[i].toLowerCase();
        } else {
            rez += str[i];
        }
    }
    return rez == str ? str : rez;
}

// TODO: have a Cookie helper file


function uniqueId(obj) {
    if (!uniqueId.objectWeakMap) {
        uniqueId.objectWeakMap = new WeakMap();
        uniqueId.constructorWeakMap = new WeakMap();
        uniqueId.totalObjectCount = 0;
    }
    var objectWeakMap = uniqueId.objectWeakMap;
    var constructorWeakMap = uniqueId.constructorWeakMap;
    if (!objectWeakMap.has(obj)) {
        var objConstructor = obj.constructor || obj.__proto__ || Object;
        // Increment the object count
        var objIndex = (constructorWeakMap.get(objConstructor) || 0) + 1;
        constructorWeakMap.set(objConstructor, objIndex);

        var objUniqueId = objIndex + "-" + ++uniqueId.totalObjectCount;
        objectWeakMap.set(obj, objUniqueId);
    }
    return objectWeakMap.get(obj);
}

var DispatcherHandle = function () {
    function DispatcherHandle(dispatcher, callback) {
        classCallCheck(this, DispatcherHandle);

        this.dispatcher = dispatcher;
        this.callback = callback;
    }

    createClass(DispatcherHandle, [{
        key: "remove",
        value: function remove() {
            this.dispatcher.removeListener(this.callback);
            this.dispatcher = undefined;
            this.callback = undefined;
        }
    }, {
        key: "cleanup",
        value: function cleanup() {
            this.remove();
        }
    }]);
    return DispatcherHandle;
}();

var Dispatcher = function () {
    function Dispatcher() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Dispatcher);

        this.options = options;
        this.listeners = [];
    }

    createClass(Dispatcher, [{
        key: "addListener",
        value: function addListener(callback) {
            if (!(typeof callback === "function")) {
                console.error("The listener needs to be a function: ", callback);
                return;
            }
            for (var i = 0; i < this.listeners.length; i += 1) {
                if (this.listeners[i] === callback) {
                    console.error("Can't re-register for the same callback: ", this, " ", callback);
                    return;
                }
            }

            this.listeners.push(callback);
            return new DispatcherHandle(this, callback);
        }
    }, {
        key: "addListenerOnce",
        value: function addListenerOnce(callback) {
            var handler = this.addListener(function () {
                callback.apply(undefined, arguments);
                handler.remove();
            });
        }
    }, {
        key: "removeListener",
        value: function removeListener(callback) {
            for (var i = 0; i < this.listeners.length; i += 1) {
                if (this.listeners[i] === callback) {
                    // Erase and return
                    return this.listeners.splice(i, 1)[0];
                }
            }
        }
    }, {
        key: "removeAllListeners",
        value: function removeAllListeners() {
            this.listeners = [];
        }
    }, {
        key: "dispatch",
        value: function dispatch(payload) {
            for (var i = 0; i < this.listeners.length;) {
                var listener = this.listeners[i];
                // TODO: optimize common cases
                listener.apply(undefined, arguments);
                // In case the current listener deleted itself, keep the loop counter the same
                // If it deleted listeners that were executed before it, that's just wrong and there are no guaranteed about
                if (listener === this.listeners[i]) {
                    i++;
                }
            }
        }
    }]);
    return Dispatcher;
}();

var Dispatchable = function () {
    function Dispatchable() {
        classCallCheck(this, Dispatchable);
    }

    createClass(Dispatchable, [{
        key: "getDispatcher",
        value: function getDispatcher(name) {
            return this.dispatchers.get(name);
        }
    }, {
        key: "dispatch",
        value: function dispatch(name, payload) {
            var dispatcher = this.getDispatcher(name);
            if (dispatcher) {
                // Optimize the average case
                if (arguments.length <= 2) {
                    dispatcher.dispatch(payload);
                } else {
                    var args = Array.prototype.slice.call(arguments, 1);
                    dispatcher.dispatch.apply(dispatcher, toConsumableArray(args));
                }
            }
        }
    }, {
        key: "addListener",
        value: function addListener(name, callback) {
            var _this = this;

            if (Array.isArray(name)) {
                return new CleanupJobs(name.map(function (x) {
                    return _this.addListener(x, callback);
                }));
            }
            var dispatcher = this.getDispatcher(name);
            if (!dispatcher) {
                dispatcher = new Dispatcher();
                this.dispatchers.set(name, dispatcher);
            }
            return dispatcher.addListener(callback);
        }
    }, {
        key: "removeListener",
        value: function removeListener(name, callback) {
            var dispatcher = this.getDispatcher(name);
            if (dispatcher) {
                dispatcher.removeListener(callback);
            }
        }
    }, {
        key: "cleanup",
        value: function cleanup() {
            this.runCleanupJobs();
            delete this._dispatchers;
        }

        // These function don't really belong here, but they don't really hurt here and I don't want a long proto chain
        // Add anything that needs to be called on cleanup here (dispatchers, etc)

    }, {
        key: "addCleanupJob",
        value: function addCleanupJob(cleanupJob) {
            if (!this.hasOwnProperty("_cleanupJobs")) {
                this._cleanupJobs = new CleanupJobs();
            }
            this._cleanupJobs.add(cleanupJob);
            return cleanupJob;
        }
    }, {
        key: "runCleanupJobs",
        value: function runCleanupJobs() {
            if (this._cleanupJobs) {
                this._cleanupJobs.cleanup();
            }
        }
    }, {
        key: "dispatchers",
        get: function get() {
            if (!this.hasOwnProperty("_dispatchers")) {
                this._dispatchers = new Map();
            }
            return this._dispatchers;
        }
    }]);
    return Dispatchable;
}();

// Creates a method that calls the method methodName on obj, and adds the result as a cleanup task


function getAttachCleanupJobMethod(methodName) {
    return function (obj) {
        var args = Array.prototype.slice.call(arguments, 1);
        var handler = obj[methodName].apply(obj, toConsumableArray(args));
        this.addCleanupJob(handler);
        return handler;
    };
}

// Not sure if these should be added here, but meh
Dispatchable.prototype.attachListener = getAttachCleanupJobMethod("addListener");
Dispatchable.prototype.attachEventListener = getAttachCleanupJobMethod("addEventListener");
Dispatchable.prototype.attachCreateListener = getAttachCleanupJobMethod("addCreateListener");
Dispatchable.prototype.attachUpdateListener = getAttachCleanupJobMethod("addUpdateListener");
Dispatchable.prototype.attachDeleteListener = getAttachCleanupJobMethod("addDeleteListener");

Dispatcher.Global = new Dispatchable();

var RunOnce = function () {
    function RunOnce() {
        classCallCheck(this, RunOnce);
    }

    createClass(RunOnce, [{
        key: "run",
        value: function run(callback) {
            var _this2 = this;

            var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (this.timeout) {
                return;
            }
            this.timeout = setTimeout(function () {
                callback();
                _this2.timeout = undefined;
            }, timeout);
        }
    }]);
    return RunOnce;
}();

var CleanupJobs = function () {
    function CleanupJobs() {
        var jobs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        classCallCheck(this, CleanupJobs);

        this.jobs = jobs;
    }

    createClass(CleanupJobs, [{
        key: "add",
        value: function add(job) {
            this.jobs.push(job);
        }
    }, {
        key: "cleanup",
        value: function cleanup() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.jobs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var job = _step.value;

                    if (typeof job.cleanup === "function") {
                        job.cleanup();
                    } else if (typeof job.remove === "function") {
                        job.remove();
                    } else {
                        job();
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.jobs = [];
        }
    }, {
        key: "remove",
        value: function remove() {
            this.cleanup();
        }
    }]);
    return CleanupJobs;
}();

// Class that can be used to pass around ownership of a resource.
// It informs the previous owner of the change (once) and dispatches the new element for all listeners
// TODO: a better name


var SingleActiveElementDispatcher = function (_Dispatcher) {
    inherits(SingleActiveElementDispatcher, _Dispatcher);

    function SingleActiveElementDispatcher() {
        classCallCheck(this, SingleActiveElementDispatcher);
        return possibleConstructorReturn(this, (SingleActiveElementDispatcher.__proto__ || Object.getPrototypeOf(SingleActiveElementDispatcher)).apply(this, arguments));
    }

    createClass(SingleActiveElementDispatcher, [{
        key: "setActive",
        value: function setActive(element, addChangeListener, forceDispatch) {
            if (!forceDispatch && element === this._active) {
                return;
            }
            this._active = element;
            this.dispatch(element);
            if (addChangeListener) {
                this.addListenerOnce(function (newElement) {
                    if (newElement != element) {
                        addChangeListener(newElement);
                    }
                });
            }
        }
    }, {
        key: "getActive",
        value: function getActive() {
            return this._active;
        }
    }]);
    return SingleActiveElementDispatcher;
}(Dispatcher);

// TODO: this method should be made static in NodeAttributes probably
function CreateNodeAttributesMap(oldAttributesMap, allowedAttributesArray) {
    var allowedAttributesMap = new Map(oldAttributesMap);

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = (allowedAttributesArray || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var attribute = _step.value;

            if (!attribute) continue;
            if (!Array.isArray(attribute)) {
                attribute = [attribute];
            }
            allowedAttributesMap.set(attribute[0], attribute[1] || {});
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    allowedAttributesMap.reverseNameMap = new Map();

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = allowedAttributesMap[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _step2$value = slicedToArray(_step2.value, 2),
                key = _step2$value[0],
                value = _step2$value[1];

            value = value || {};

            value.domName = value.domName || key;

            allowedAttributesMap.reverseNameMap.set(value.domName, key);

            allowedAttributesMap.set(key, value);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return allowedAttributesMap;
}

// A class that can be used to work with a className field as with a Set, while having a toString() usable in the DOM

var ClassNameSet = function (_Set) {
    inherits(ClassNameSet, _Set);

    function ClassNameSet() {
        classCallCheck(this, ClassNameSet);
        return possibleConstructorReturn(this, (ClassNameSet.__proto__ || Object.getPrototypeOf(ClassNameSet)).apply(this, arguments));
    }

    createClass(ClassNameSet, [{
        key: "toString",
        value: function toString() {
            return Array.from(this).join(" ");
        }
    }], [{
        key: "create",

        // Can't use classic super in constructor since Set is build-in type and will throw an error
        // TODO: see if could still be made to have this as constructor
        value: function create(className) {
            var value = new Set(String(className || "").split(" "));
            return setObjectPrototype(value, this);
        }
    }]);
    return ClassNameSet;
}(Set);

var NodeAttributes = function () {
    function NodeAttributes(obj) {
        classCallCheck(this, NodeAttributes);

        Object.assign(this, obj);
        // className and style should be deep copied to be modifiable, the others shallow copied
        if (this.className instanceof ClassNameSet) {
            this.className = ClassNameSet.create(String(this.className));
        }
        if (this.style) {
            this.style = Object.assign({}, this.style);
        }
    }

    // TODO: should this use the domName or the reverseName? Still needs work


    createClass(NodeAttributes, [{
        key: "setAttribute",
        value: function setAttribute(key, value, node) {
            var attributesMap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.constructor.defaultAttributesMap;

            // TODO: might want to find a better way than whitelistAttributes field to do this
            if (!attributesMap.has(key)) {
                this.whitelistedAttributes = this.whitelistedAttributes || {};
                this.whitelistedAttributes[key] = true;
            }
            this[key] = value;
            if (node) {
                this.applyAttribute(key, node, attributesMap);
            }
        }
    }, {
        key: "setStyle",
        value: function setStyle(key, value, node) {
            if (value === undefined) {
                console.error("Style is being removed");
                // TODO: why return here and not remove the old value?
                return;
            }
            this.style = this.style || {};
            this.style[key] = value;
            if (typeof value === "function") {
                value = value();
            }
            if (node && node.style[key] !== value) {
                node.style[key] = value;
            }
        }

        // TODO: should just be a regular method?

    }, {
        key: "getClassNameSet",
        value: function getClassNameSet() {
            if (!(this.className instanceof ClassNameSet)) {
                this.className = ClassNameSet.create(this.className || "");
            }
            return this.className;
        }
    }, {
        key: "addClass",
        value: function addClass(classes, node) {
            classes = this.constructor.getClassArray(classes);

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = classes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var cls = _step3.value;

                    this.getClassNameSet().add(cls);
                    if (node) {
                        node.classList.add(cls);
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    }, {
        key: "removeClass",
        value: function removeClass(classes, node) {
            classes = this.constructor.getClassArray(classes);

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = classes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var cls = _step4.value;

                    this.getClassNameSet().delete(cls);
                    if (node) {
                        node.classList.remove(cls);
                    }
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
        }
    }, {
        key: "hasClass",
        value: function hasClass(className) {
            return this.getClassNameSet().has(className);
        }
    }, {
        key: "applyAttribute",
        value: function applyAttribute(key, node, attributesMap) {
            var attributeOptions = attributesMap.get(key);
            if (!attributeOptions) {
                if (this.whitelistedAttributes && key in this.whitelistedAttributes) {
                    attributeOptions = {
                        domName: key
                    };
                } else {
                    return;
                }
            }
            var value = this[key];
            if (typeof value === "function") {
                value = value();
            }
            if (attributeOptions.noValue) {
                if (value) {
                    value = "";
                } else {
                    value = undefined;
                }
            }
            if (typeof value !== "undefined") {
                node.setAttribute(attributeOptions.domName, value);
            } else {
                node.removeAttribute(attributeOptions.domName);
            }
        }
    }, {
        key: "apply",
        value: function apply(node, attributesMap) {
            var addedAttributes = {};
            var whitelistedAttributes = this.whitelistedAttributes || {};

            // First update existing node attributes and delete old ones
            // TODO: optimize to not run this if the node was freshly created
            var nodeAttributes = node.attributes;
            for (var i = nodeAttributes.length - 1; i >= 0; i--) {
                var attr = nodeAttributes[i];
                var attributeName = attr.name;
                if (attributeName === "style" || attributeName === "class") {
                    // TODO: maybe should do work here?
                    continue;
                }

                var key = attributesMap.reverseNameMap.get(attributeName);

                // TODO: this is wrong since it doesn't do reverse mapping
                if (this.hasOwnProperty(key)) {
                    var value = this[key];
                    var attributeOptions = attributesMap.get(key);
                    if (attributeOptions && attributeOptions.noValue) {
                        if (value) {
                            value = "";
                        } else {
                            value = undefined;
                        }
                    }
                    if (value != null) {
                        node.setAttribute(attributeName, value);
                        addedAttributes[key] = true;
                    } else {
                        node.removeAttribute(attributeName);
                    }
                } else {
                    node.removeAttribute(attributeName);
                }
            }
            // Add new attributes
            for (var _key in this) {
                if (addedAttributes[_key]) {
                    continue;
                }
                this.applyAttribute(_key, node, attributesMap);
                // TODO: also whitelist data- and aria- keys here
            }

            if (this.className) {
                node.className = String(this.className);
                // TODO: find out which solution is best
                // This solution works for svg nodes as well
                // for (let cls of this.getClassNameSet()) {
                //    node.classList.add(cls);
                // }
            } else {
                node.removeAttribute("class");
            }

            node.removeAttribute("style");
            if (this.style) {
                for (var _key2 in this.style) {
                    var _value = this.style[_key2];
                    if (typeof _value === "function") {
                        _value = _value();
                    }
                    node.style[_key2] = _value;
                }
            }
        }
    }], [{
        key: "getClassArray",
        value: function getClassArray(classes) {
            if (!classes) {
                return [];
            }
            if (Array.isArray(classes)) {
                return classes.map(function (x) {
                    return String(x).trim();
                });
            } else {
                return String(classes).trim().split(" ");
            }
        }
    }]);
    return NodeAttributes;
}();

// Default node attributes, should be as few of these as possible


NodeAttributes.defaultAttributesMap = CreateNodeAttributesMap([["id"], ["action"], ["colspan"], ["default"], ["disabled", { noValue: true }], ["fixed"], ["forAttr", { domName: "for" }], // TODO: have a consistent nomenclature for there!
["hidden"], ["href"], ["rel"], ["minHeight"], ["minWidth"], ["role"], ["target"], ["HTMLtitle", { domName: "title" }], ["type"], ["placeholder"], ["src"], ["height"], ["width"]]);

var UI = {
    renderingStack: [] };

var BaseUIElement = function (_Dispatchable) {
    inherits(BaseUIElement, _Dispatchable);

    function BaseUIElement() {
        classCallCheck(this, BaseUIElement);
        return possibleConstructorReturn(this, (BaseUIElement.__proto__ || Object.getPrototypeOf(BaseUIElement)).apply(this, arguments));
    }

    createClass(BaseUIElement, [{
        key: "canOverwrite",
        value: function canOverwrite(existingChild) {
            return this.constructor === existingChild.constructor && this.getNodeType() === existingChild.getNodeType();
        }
    }, {
        key: "applyRef",
        value: function applyRef() {
            if (this.options && this.options.ref) {
                var obj = this.options.ref.parent;
                var name = this.options.ref.name;
                obj[name] = this;
            }
        }
    }, {
        key: "removeRef",
        value: function removeRef() {
            if (this.options && this.options.ref) {
                var obj = this.options.ref.parent;
                var name = this.options.ref.name;
                if (obj[name] === this) {
                    obj[name] = undefined;
                }
            }
        }
    }, {
        key: "onMount",
        value: function onMount() {
            // Nothing by default
        }
    }, {
        key: "onUnmount",
        value: function onUnmount() {}
    }, {
        key: "destroyNode",
        value: function destroyNode() {
            this.onUnmount();
            this.cleanup();
            this.removeRef();
            this.node.remove();
            this.node = undefined; // Clear for gc
        }
    }]);
    return BaseUIElement;
}(Dispatchable);

UI.TextElement = function (_BaseUIElement) {
    inherits(UITextElement, _BaseUIElement);

    function UITextElement() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        classCallCheck(this, UITextElement);

        var _this2 = possibleConstructorReturn(this, (UITextElement.__proto__ || Object.getPrototypeOf(UITextElement)).call(this));

        if (value && value.hasOwnProperty("value")) {
            _this2.value = value.value;
            _this2.options = value;
        } else {
            _this2.value = value != null ? value : "";
        }
        return _this2;
    }

    createClass(UITextElement, [{
        key: "mount",
        value: function mount(parent, nextSibling) {
            this.parent = parent;
            if (!this.node) {
                this.createNode();
                this.applyRef();
            } else {
                this.redraw();
            }
            parent.node.insertBefore(this.node, nextSibling);
            this.onMount();
        }
    }, {
        key: "getNodeType",
        value: function getNodeType() {
            return Node.TEXT_NODE;
        }
    }, {
        key: "copyState",
        value: function copyState(element) {
            this.value = element.value;
            this.options = element.options;
        }
    }, {
        key: "createNode",
        value: function createNode() {
            return this.node = document.createTextNode(this.getValue());
        }
    }, {
        key: "setValue",
        value: function setValue(value) {
            this.value = value != null ? value : "";
            if (this.node) {
                this.redraw();
            }
        }
    }, {
        key: "getValue",
        value: function getValue() {
            return String(this.value);
        }
    }, {
        key: "redraw",
        value: function redraw() {
            if (this.node) {
                var newValue = this.getValue();
                // TODO: check if this is best for performance
                if (this.node.nodeValue !== newValue) {
                    this.node.nodeValue = newValue;
                }
            }
            this.applyRef();
        }
    }]);
    return UITextElement;
}(BaseUIElement);

var UIElement = function (_BaseUIElement2) {
    inherits(UIElement, _BaseUIElement2);

    function UIElement() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, UIElement);

        var _this3 = possibleConstructorReturn(this, (UIElement.__proto__ || Object.getPrototypeOf(UIElement)).call(this));

        _this3.children = [];
        _this3.options = options; // TODO: this is a hack, to not break all the code that references this.options in setOptions
        _this3.setOptions(options);
        return _this3;
    }

    createClass(UIElement, [{
        key: "getDefaultOptions",
        value: function getDefaultOptions() {}
    }, {
        key: "getPreservedOptions",
        value: function getPreservedOptions() {}
    }, {
        key: "setOptions",
        value: function setOptions(options) {
            var defaultOptions = this.getDefaultOptions();
            if (defaultOptions) {
                options = Object.assign(defaultOptions, options);
            }
            this.options = options;
        }
    }, {
        key: "updateOptions",
        value: function updateOptions(options) {
            this.setOptions(Object.assign(this.options, options));
            this.redraw();
        }
    }, {
        key: "setChildren",
        value: function setChildren() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            this.updateOptions({ children: unwrapArray(args) });
        }

        // Used when we want to reuse the current element, with the options from the passed in argument
        // Is only called when element.canOverwrite(this) is true

    }, {
        key: "copyState",
        value: function copyState(element) {
            var options = element.options;
            var preservedOptions = this.getPreservedOptions();
            if (preservedOptions) {
                options = Object.assign({}, options, preservedOptions);
            }
            this.setOptions(options);
            this.addListenersFromOptions();
        }
    }, {
        key: "getNodeType",
        value: function getNodeType() {
            return this.options.nodeType || "div";
        }
    }, {
        key: "getGivenChildren",


        // TODO: should be renamed to renderContent
        value: function getGivenChildren() {
            return this.options.children || [];
        }
    }, {
        key: "render",
        value: function render() {
            return this.options.children;
        }
    }, {
        key: "createNode",
        value: function createNode() {
            return this.node = document.createElement(this.getNodeType());
        }

        // Abstract, gets called when removing DOM node associated with the

    }, {
        key: "cleanup",
        value: function cleanup() {
            this.runCleanupJobs();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var child = _step.value;

                    child.cleanup();
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.clearNode();
            get(UIElement.prototype.__proto__ || Object.getPrototypeOf(UIElement.prototype), "cleanup", this).call(this);
        }
    }, {
        key: "overwriteChild",
        value: function overwriteChild(existingChild, newChild) {
            existingChild.copyState(newChild);
            return existingChild;
        }
    }, {
        key: "getElementKeyMap",
        value: function getElementKeyMap(elements) {
            if (!elements || !elements.length) {
                return;
            }
            var childrenKeyMap = new Map();

            for (var i = 0; i < elements.length; i += 1) {
                var childKey = elements[i].options && elements[i].options.key || "autokey" + i;

                childrenKeyMap.set(childKey, elements[i]);
            }

            return childrenKeyMap;
        }
    }, {
        key: "redraw",
        value: function redraw() {
            if (!this.node) {
                console.error("Element not yet mounted. Redraw aborted!", this);
                return false;
            }

            UI.renderingStack.push(this);
            var newChildren = unwrapArray(this.render());
            UI.renderingStack.pop();

            if (newChildren === this.children) {
                for (var i = 0; i < newChildren.length; i += 1) {
                    newChildren[i].redraw();
                }
                this.applyNodeAttributes();
                this.applyRef();
                return true;
            }

            var domNode = this.node;
            var childrenKeyMap = this.getElementKeyMap(this.children);

            for (var _i = 0; _i < newChildren.length; _i++) {
                var newChild = newChildren[_i];
                var prevChildNode = _i > 0 ? newChildren[_i - 1].node : null;
                var currentChildNode = prevChildNode ? prevChildNode.nextSibling : domNode.firstChild;

                // Not a UIElement, to be converted to a TextElement
                if (!newChild.getNodeType) {
                    newChild = newChildren[_i] = new UI.TextElement(newChild);
                }

                var newChildKey = newChild.options && newChild.options.key || "autokey" + _i;
                var existingChild = childrenKeyMap && childrenKeyMap.get(newChildKey);

                if (existingChild && newChildren[_i].canOverwrite(existingChild)) {
                    // We're replacing an existing child element, it might be the very same object
                    if (existingChild !== newChildren[_i]) {
                        newChildren[_i] = this.overwriteChild(existingChild, newChildren[_i]);
                    }
                    newChildren[_i].redraw();
                    if (newChildren[_i].node !== currentChildNode) {
                        domNode.insertBefore(newChildren[_i].node, currentChildNode);
                    }
                } else {
                    // Getting here means we are not replacing anything, should just render
                    newChild.mount(this, currentChildNode);
                }
            }

            if (this.children.length) {
                // Remove children that don't need to be here
                var newChildrenSet = new Set(newChildren);

                for (var _i2 = 0; _i2 < this.children.length; _i2 += 1) {
                    if (!newChildrenSet.has(this.children[_i2])) {
                        this.children[_i2].destroyNode();
                    }
                }
            }

            this.children = newChildren;

            this.applyNodeAttributes();

            this.applyRef();

            return true;
        }
    }, {
        key: "getOptionsAsNodeAttributes",
        value: function getOptionsAsNodeAttributes() {
            return setObjectPrototype(this.options, NodeAttributes);
        }
    }, {
        key: "getNodeAttributes",
        value: function getNodeAttributes() {
            var returnCopy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            if (returnCopy) {
                return new NodeAttributes(this.options);
            } else {
                return this.getOptionsAsNodeAttributes();
            }
        }
    }, {
        key: "applyNodeAttributes",
        value: function applyNodeAttributes() {
            var attr = void 0;
            if (this.extraNodeAttributes) {
                // Create a copy of options, that is modifiable
                attr = this.getNodeAttributes(true);
                this.extraNodeAttributes(attr);
            } else {
                attr = this.getNodeAttributes(false);
            }
            attr.apply(this.node, this.constructor.domAttributesMap);
        }
    }, {
        key: "setAttribute",
        value: function setAttribute(key, value) {
            this.getOptionsAsNodeAttributes().setAttribute(key, value, this.node, this.constructor.domAttributesMap);
        }
    }, {
        key: "setStyle",
        value: function setStyle(key, value) {
            this.getOptionsAsNodeAttributes().setStyle(key, value, this.node);
        }
    }, {
        key: "addClass",
        value: function addClass(className) {
            this.getOptionsAsNodeAttributes().addClass(className, this.node);
        }
    }, {
        key: "removeClass",
        value: function removeClass(className) {
            this.getOptionsAsNodeAttributes().removeClass(className, this.node);
        }
    }, {
        key: "hasClass",
        value: function hasClass(className) {
            return this.getOptionsAsNodeAttributes().hasClass(className);
        }
    }, {
        key: "toggleClass",
        value: function toggleClass(className) {
            if (!this.hasClass(className)) {
                this.addClass(className);
            } else {
                this.removeClass(className);
            }
        }
    }, {
        key: "addListenersFromOptions",
        value: function addListenersFromOptions() {
            var _this4 = this;

            var _loop = function _loop(key) {
                if (typeof key === "string" && key.startsWith("on") && key.length > 2) {
                    var eventType = key.substring(2);

                    var addListenerMethodName = "add" + eventType + "Listener";
                    var handlerMethodName = "on" + eventType + "Handler";

                    // The handlerMethod might have been previously added
                    // by a previous call to this function or manually by the user
                    if (typeof _this4[addListenerMethodName] === "function" && !_this4.hasOwnProperty(handlerMethodName)) {
                        _this4[handlerMethodName] = function (event) {
                            UI.event = event;
                            if (_this4.options[key]) {
                                // TODO: arguments should be (event, this)!
                                _this4.options[key](_this4, event);
                            }
                        };

                        // Actually add the listener
                        _this4[addListenerMethodName](_this4[handlerMethodName]);
                    }
                }
            };

            for (var key in this.options) {
                _loop(key);
            }
        }
    }, {
        key: "refLink",
        value: function refLink(name) {
            return { parent: this, name: name };
        }
    }, {
        key: "refLinkArray",
        value: function refLinkArray(arrayName, index) {
            if (!this.hasOwnProperty(arrayName)) {
                this[arrayName] = [];
            }
            return { parent: this[arrayName], name: index };
        }
    }, {
        key: "bindToNode",
        value: function bindToNode(node, doRedraw) {
            this.node = node;
            if (doRedraw) {
                this.redraw();
            }
            return this;
        }
    }, {
        key: "mount",
        value: function mount(parent, nextSiblingNode) {
            if (!parent.node) {
                parent = new UI.Element().bindToNode(parent);
            }
            this.parent = parent;
            if (!this.node) {
                this.createNode();
            }
            this.redraw();

            parent.insertChildNodeBefore(this, nextSiblingNode);

            this.addListenersFromOptions();

            this.onMount();
        }

        // You need to overwrite the next child manipulation rutines if this.options.children !== this.children

    }, {
        key: "appendChild",
        value: function appendChild(child) {
            // TODO: the next check should be done with a decorator
            if (this.children !== this.options.children) {
                throw "Can't properly handle appendChild, you need to implement it for " + this.constructor;
            }
            this.options.children.push(child);
            child.mount(this, null);
            return child;
        }
    }, {
        key: "insertChild",
        value: function insertChild(child, position) {
            if (this.children !== this.options.children) {
                throw "Can't properly handle insertChild, you need to implement it for " + this.constructor;
            }
            position = position || 0;

            this.options.children.splice(position, 0, child);

            child.mount(this, position + 1 < this.options.children.length ? this.children[position + 1].node : null);

            return child;
        }
    }, {
        key: "eraseChild",
        value: function eraseChild(child) {
            var destroy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var index = this.options.children.indexOf(child);

            if (index < 0) {
                // child not found
                return null;
            }
            return this.eraseChildAtIndex(index, destroy);
        }
    }, {
        key: "eraseChildAtIndex",
        value: function eraseChildAtIndex(index) {
            var destroy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (index < 0 || index >= this.options.children.length) {
                console.error("Erasing child at invalid index ", index, this.options.children.length);
                return;
            }
            if (this.children !== this.options.children) {
                throw "Can't properly handle eraseChild, you need to implement it for " + this.constructor;
            }
            var erasedChild = this.options.children.splice(index, 1)[0];
            if (destroy) {
                erasedChild.destroyNode();
            } else {
                this.node.removeChild(erasedChild.node);
            }
            return erasedChild;
        }
    }, {
        key: "eraseAllChildren",
        value: function eraseAllChildren() {
            while (this.children.length > 0) {
                this.eraseChildAtIndex(this.children.length - 1);
            }
        }
    }, {
        key: "show",
        value: function show() {
            this.removeClass("hidden");
        }
    }, {
        key: "hide",
        value: function hide() {
            this.addClass("hidden");
        }
    }, {
        key: "insertChildNodeBefore",
        value: function insertChildNodeBefore(childElement, nextSiblingNode) {
            this.node.insertBefore(childElement.node, nextSiblingNode);
        }

        // TODO: should be renamed emptyNode()

    }, {
        key: "clearNode",
        value: function clearNode() {
            while (this.node && this.node.lastChild) {
                this.node.removeChild(this.node.lastChild);
            }
        }
    }, {
        key: "isInDocument",
        value: function isInDocument() {
            return document.body.contains(this.node);
        }

        // TODO: this method also doesn't belong here

    }, {
        key: "getWidthOrHeight",
        value: function getWidthOrHeight(parameter) {
            var node = this.node;
            if (!node) {
                return 0;
            }
            var value = parseFloat(parameter === "width" ? node.offsetWidth : node.offsetHeight);
            return value || 0;
        }
    }, {
        key: "getHeight",
        value: function getHeight() {
            return this.getWidthOrHeight("height");
        }
    }, {
        key: "getWidth",
        value: function getWidth() {
            return this.getWidthOrHeight("width");
        }
    }, {
        key: "setHeight",
        value: function setHeight(value) {
            this.setStyle("height", suffixNumber(value, "px"));
            this.dispatch("resize");
        }
    }, {
        key: "setWidth",
        value: function setWidth(value) {
            this.setStyle("width", suffixNumber(value, "px"));
            this.dispatch("resize");
        }
    }, {
        key: "addNodeListener",
        value: function addNodeListener(name, callback) {
            var _this5 = this;

            this.node.addEventListener(name, callback);
            return {
                remove: function remove() {
                    return _this5.removeNodeListener(name, callback);
                }
            };
        }
    }, {
        key: "removeNodeListener",
        value: function removeNodeListener(name, callback) {
            this.node.removeEventListener(name, callback);
        }
    }, {
        key: "addClickListener",
        value: function addClickListener(callback) {
            this.addNodeListener("click", callback);
        }
    }, {
        key: "removeClickListener",
        value: function removeClickListener(callback) {
            this.removeNodeListener("click", callback);
        }
    }, {
        key: "addDoubleClickListener",
        value: function addDoubleClickListener(callback) {
            this.addNodeListener("dblclick", callback);
        }
    }, {
        key: "removeDoubleClickListener",
        value: function removeDoubleClickListener(callback) {
            this.removeNodeListener("dblclick", callback);
        }
    }, {
        key: "addChangeListener",
        value: function addChangeListener(callback) {
            this.addNodeListener("change", callback);
        }
    }], [{
        key: "create",
        value: function create(parentNode, options) {
            var uiElement = new this(options);
            uiElement.mount(parentNode, null);
            return uiElement;
        }
    }]);
    return UIElement;
}(BaseUIElement);

UI.createElement = function (tag, options) {
    if (!tag) {
        console.error("Create element needs a valid object tag, did you mistype a class name?");
        return;
    }

    options = options || {};

    options.children = [];

    for (var i = 2; i < arguments.length; i += 1) {
        options.children.push(arguments[i]);
    }

    options.children = unwrapArray(options.children);

    if (options.ref) {
        if (typeof options.ref === "string") {
            if (UI.renderingStack.length > 0) {
                options.ref = {
                    parent: UI.renderingStack[UI.renderingStack.length - 1],
                    name: options.ref
                };
            } else {
                throw Error("Failed to automatically link ref, there needs to be an element in the rendering stack");
            }
        }

        if (options.key) {
            console.error("Warning! UI Element cannot have both a key and a ref fieldname. Key will be overriden.\n" + "Are you using the options from another object? Shame!", options);
        }

        options.key = "_ref" + options.ref.name;
    }

    if (options.hasOwnProperty("class")) {
        console.error("Invalid UI Element attribute: class. Did you mean className?");
    }

    if (typeof tag === "string") {
        options.nodeType = tag;
        tag = UIElement;
    }

    return new tag(options);
};

UIElement.domAttributesMap = NodeAttributes.defaultAttributesMap;

UI.Element = UIElement;

UI.str = function (value) {
    return new UI.TextElement(value);
};

// Keep a map for every base class, and for each base class keep a map for each nodeType, to cache classes
var primitiveMap = new WeakMap();

UI.Primitive = function (BaseClass, nodeType) {
    if (!nodeType) {
        nodeType = BaseClass;
        BaseClass = UI.Element;
    }
    var baseClassPrimitiveMap = primitiveMap.get(BaseClass);
    if (!baseClassPrimitiveMap) {
        baseClassPrimitiveMap = new Map();
        primitiveMap.set(BaseClass, baseClassPrimitiveMap);
    }
    var resultClass = baseClassPrimitiveMap.get(nodeType);
    if (resultClass) {
        return resultClass;
    }
    resultClass = function (_BaseClass) {
        inherits(Primitive, _BaseClass);

        function Primitive() {
            classCallCheck(this, Primitive);
            return possibleConstructorReturn(this, (Primitive.__proto__ || Object.getPrototypeOf(Primitive)).apply(this, arguments));
        }

        createClass(Primitive, [{
            key: "getNodeType",
            value: function getNodeType() {
                return nodeType;
            }
        }]);
        return Primitive;
    }(BaseClass);
    baseClassPrimitiveMap.set(nodeType, resultClass);
    return resultClass;
};

function getOffset(node) {
    if (node instanceof UI.Element) {
        node = node.node;
    }
    if (!node) {
        return { left: 0, top: 0 };
    }
    var nodePosition = node.style && node.style.position;
    var left = 0;
    var top = 0;
    while (node) {
        var nodeStyle = node.style || {};
        if (nodePosition === "absolute" && nodeStyle.position === "relative") {
            return { left: left, top: top };
        }
        left += node.offsetLeft;
        top += node.offsetTop;
        node = node.offsetParent;
    }
    return { left: left, top: top };
}

// TODO: not sure is this needs to actually be *.jsx
// TODO: should this be actually better done throught the dynamic CSS API, without doing through the DOM?

var StyleInstance = function (_UI$TextElement) {
    inherits(StyleInstance, _UI$TextElement);

    function StyleInstance(options) {
        classCallCheck(this, StyleInstance);

        var _this = possibleConstructorReturn(this, (StyleInstance.__proto__ || Object.getPrototypeOf(StyleInstance)).call(this, options));

        _this.setOptions(options);
        return _this;
    }

    createClass(StyleInstance, [{
        key: "setOptions",
        value: function setOptions(options) {
            this.options = options;
            this.options.attributes = this.options.attributes || {};
            this.attributes = new Map();
            for (var key in this.options.attributes) {
                this.attributes.set(key, this.options.attributes[key]);
            }
        }
    }, {
        key: "getValue",
        value: function getValue() {
            var str = this.options.selector + "{";
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.attributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _step$value = slicedToArray(_step.value, 2),
                        key = _step$value[0],
                        value = _step$value[1];

                    if (typeof value === "function") {
                        value = value();
                    }
                    // Ignore keys with null or undefined value
                    if (value == null) {
                        continue;
                    }
                    // TODO: if key starts with vendor-, replace it with the browser specific one (and the plain one)
                    // TODO: on some attributes, do we want to automatically add a px suffix?
                    str += dashCase(key) + ":" + value + ";";
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return str + "}";
        }
    }, {
        key: "copyState",
        value: function copyState(element) {
            this.setOptions(element.options);
        }
    }, {
        key: "setAttribute",
        value: function setAttribute(name, value) {
            this.attributes.set(name, value);
            this.redraw();
        }
    }, {
        key: "deleteAttribute",
        value: function deleteAttribute(name) {
            this.attributes.delete(name);
            this.redraw();
        }
    }]);
    return StyleInstance;
}(UI.TextElement);

var StyleElement = function (_UI$Primitive) {
    inherits(StyleElement, _UI$Primitive);

    function StyleElement() {
        classCallCheck(this, StyleElement);
        return possibleConstructorReturn(this, (StyleElement.__proto__ || Object.getPrototypeOf(StyleElement)).apply(this, arguments));
    }

    createClass(StyleElement, [{
        key: "getNodeAttributes",
        value: function getNodeAttributes() {
            // TODO: allow custom style attributes (media, scoped, etc)
            var attr = new NodeAttributes({});
            if (this.options.name) {
                attr.setAttribute("name", this.options.name);
            }
            return attr;
        }
    }]);
    return StyleElement;
}(UI.Primitive("style"));

var ALLOWED_SELECTOR_STARTS = new Set([":", ">", " ", "+", "~", "[", "."]);

// TODO: figure out how to work with animation frames, this only creates a wrapper class

var DynamicStyleElement = function (_StyleElement) {
    inherits(DynamicStyleElement, _StyleElement);

    function DynamicStyleElement() {
        classCallCheck(this, DynamicStyleElement);
        return possibleConstructorReturn(this, (DynamicStyleElement.__proto__ || Object.getPrototypeOf(DynamicStyleElement)).apply(this, arguments));
    }

    createClass(DynamicStyleElement, [{
        key: "toString",
        value: function toString() {
            return this.getClassName();
        }

        // TODO: use a cached decorator here

    }, {
        key: "getClassName",
        value: function getClassName() {
            if (this.className) {
                return this.className;
            }
            this.constructor.instanceCounter = (this.constructor.instanceCounter || 0) + 1;
            this.className = "autocls-" + this.constructor.instanceCounter;
            return this.className;
        }

        // A cyclic dependency in the style object will cause an infinite loop here

    }, {
        key: "getStyleInstances",
        value: function getStyleInstances(selector, style) {
            var result = [];
            var ownStyle = {},
                haveOwnStyle = false;
            for (var key in style) {
                var value = style[key];
                var isProperValue = typeof value === "string" || value instanceof String || typeof value === "number" || value instanceof Number || typeof value === "function";
                if (isProperValue) {
                    ownStyle[key] = value;
                    haveOwnStyle = true;
                } else {
                    // Check that this actually is a valid subselector
                    var firstChar = String(key).charAt(0);
                    if (!ALLOWED_SELECTOR_STARTS.has(firstChar)) {
                        // TODO: Log here?
                        continue;
                    }
                    // TODO: maybe optimize for waste here?
                    var subStyle = this.getStyleInstances(selector + key, value);
                    result.push.apply(result, toConsumableArray(subStyle));
                }
            }

            if (haveOwnStyle) {
                result.unshift(new StyleInstance({ selector: selector, key: selector, attributes: ownStyle }));
            }
            return result;
        }
    }, {
        key: "render",
        value: function render() {
            return this.getStyleInstances("." + this.getClassName(), this.options.style || {});
        }
    }, {
        key: "setStyle",
        value: function setStyle(key, value) {
            this.options.style[key] = value;
            this.children[0].setAttribute(key, value);
        }
    }, {
        key: "setSubStyle",
        value: function setSubStyle(selector, key, value) {
            throw Error("Implement me!");
        }
    }, {
        key: "getStyleObject",
        value: function getStyleObject() {
            return this.options.style;
        }
    }]);
    return DynamicStyleElement;
}(StyleElement);

// Primitive utils for wrapping browser info
var Device = function () {
    function Device() {
        classCallCheck(this, Device);
    }

    createClass(Device, null, [{
        key: "isTouchDevice",
        value: function isTouchDevice() {
            if (!this.hasOwnProperty("_isTouchDevice")) {
                this._isTouchDevice = !!("createTouch" in window.document || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 || "ontouchstart" in window);
            }
            return this._isTouchDevice;
        }
    }, {
        key: "getEventCoord",
        value: function getEventCoord(event, axis) {
            var pageName = "page" + axis;
            if (this.isTouchDevice()) {
                if (event.targetTouches) {
                    return event.targetTouches[0][pageName];
                }
                if (event.originalEvent && event.originalEvent.targetTouches) {
                    return event.originalEvent.targetTouches[0][pageName];
                }
            }
            return event[pageName];
        }
    }, {
        key: "getEventX",
        value: function getEventX(event) {
            return this.getEventCoord(event, "X");
        }
    }, {
        key: "getEventY",
        value: function getEventY(event) {
            return this.getEventCoord(event, "Y");
        }
    }, {
        key: "getBrowser",
        value: function getBrowser() {
            // TODO: should try to use navigator
            if (!!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
                return "Opera";
            }
            if (typeof InstallTrigger !== 'undefined') {
                return "Firefox";
            }
            if (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0) {
                return "Safari";
            }
            if (document.documentMode) {
                return "Internet Explorer";
            }
            if (window.StyleMedia) {
                return "Edge";
            }
            if (window.chrome && window.chrome.webstore) {
                return "Chrome";
            }
            return "Unknown";
        }
    }, {
        key: "supportsEvent",
        value: function supportsEvent(eventName) {
            if (!this.cachedSupportedValues.has(eventName)) {
                var element = document.createElement("div");
                var onEventName = "on" + eventName;
                var isSupported = onEventName in element;
                if (!isSupported) {
                    element.setAttribute(onEventName, "return;");
                    isSupported = typeof element[onEventName] === "function";
                }
                element = null;
                this.cachedSupportedValues.set(eventName, isSupported);
            }
            return this.cachedSupportedValues.get(eventName);
        }
    }]);
    return Device;
}();

Device.cachedSupportedValues = new Map();

function isDescriptor(desc) {
    if (!desc || !desc.hasOwnProperty) {
        return false;
    }

    var keys = ['value', 'initializer', 'get', 'set'];

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            if (desc.hasOwnProperty(key)) {
                return true;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return false;
}

function decorate(handleDescriptor, entryArgs) {
    if (isDescriptor(entryArgs[entryArgs.length - 1])) {
        return handleDescriptor.apply(undefined, toConsumableArray(entryArgs).concat([[]]));
    } else {
        return function () {
            return handleDescriptor.apply(undefined, Array.prototype.slice.call(arguments).concat([entryArgs]));
        };
    }
}

function createDefaultSetter(key) {
    return function set(newValue) {
        Object.defineProperty(this, key, {
            configurable: true,
            writable: true,
            // IS enumerable when reassigned by the outside word
            enumerable: true,
            value: newValue
        });

        return newValue;
    };
}

function handleDescriptor$2(target, key, descriptor) {
    var configurable = descriptor.configurable,
        enumerable = descriptor.enumerable,
        initializer = descriptor.initializer,
        value = descriptor.value;
    // The "key" property is constructed with accessor descriptor (getter / setter),
    // but the first time the getter is used, the property is reconstructed with data descriptor.

    return {
        configurable: configurable,
        enumerable: enumerable,

        get: function get() {
            // This happens if someone accesses the property directly on the prototype
            if (this === target) {
                return;
            }

            var ret = initializer ? initializer.call(this) : value;

            Object.defineProperty(this, key, {
                configurable: configurable,
                enumerable: enumerable,
                writable: true,
                value: ret
            });

            return ret;
        },


        set: createDefaultSetter(key)
    };
}

function lazyInitialize() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return decorate(handleDescriptor$2, args);
}

var lazyInit = lazyInitialize;

// TODO: this file should be refactored
// consider lazyCSS -> styleRule/styleRule(styleRule.INHERIT)

function _initDefineProp$1(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _applyDecoratedDescriptor$1(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Draggable = function Draggable(BaseClass) {
    var _desc, _value, _class, _descriptor, _descriptor2;

    return _class = function (_BaseClass) {
        inherits(Draggable, _BaseClass);

        function Draggable() {
            var _ref;

            var _temp, _this, _ret;

            classCallCheck(this, Draggable);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Draggable.__proto__ || Object.getPrototypeOf(Draggable)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp$1(_this, "_clickCallbacks", _descriptor, _this), _initDefineProp$1(_this, "_clickDragListeners", _descriptor2, _this), _temp), possibleConstructorReturn(_this, _ret);
        }

        createClass(Draggable, [{
            key: "addClickListener",
            value: function addClickListener(callback) {
                var _this2 = this;

                if (this._clickCallbacks.has(callback)) {
                    return;
                }
                var callbackWrapper = function callbackWrapper() {
                    if (_this2._okForClick) {
                        callback();
                    }
                };
                this._clickCallbacks.set(callback, callbackWrapper);
                get(Draggable.prototype.__proto__ || Object.getPrototypeOf(Draggable.prototype), "addClickListener", this).call(this, callbackWrapper);

                if (this._clickDragListeners.has(callback)) {
                    return;
                }
                var clickDragListener = {
                    onStart: function onStart() {
                        _this2.dragForClickStarted();
                    },
                    onDrag: function onDrag() {
                        _this2.dragForClick();
                    }
                };
                this._clickDragListeners.set(callback, clickDragListener);
                this.addDragListener(clickDragListener);
            }
        }, {
            key: "dragForClickStarted",
            value: function dragForClickStarted() {
                this._okForClick = true;
            }
        }, {
            key: "dragForClick",
            value: function dragForClick() {
                this._okForClick = false;
            }
        }, {
            key: "removeClickListener",
            value: function removeClickListener(callback) {
                var callbackWrapper = this._clickCallbacks.get(callback);
                if (callbackWrapper) {
                    this._clickCallbacks.delete(callback);
                    get(Draggable.prototype.__proto__ || Object.getPrototypeOf(Draggable.prototype), "removeClickListener", this).call(this, callbackWrapper);
                }
                if (!this._clickDragListeners) {
                    return;
                }
                var clickDragListener = this._clickDragListeners.get(callback);
                if (clickDragListener) {
                    this._clickDragListeners.delete(callback);
                    this.removeDragListener(clickDragListener);
                }
            }
        }, {
            key: "createDragListenerWrapper",
            value: function createDragListenerWrapper(listeners) {
                var listenerWrapper = Object.assign({}, listeners);

                listenerWrapper.onWrapperDrag = function (event) {
                    var deltaX = event.clientX - listenerWrapper._lastX;
                    listenerWrapper._lastX = event.clientX;

                    var deltaY = event.clientY - listenerWrapper._lastY;
                    listenerWrapper._lastY = event.clientY;

                    listeners.onDrag(deltaX, deltaY);
                };

                listenerWrapper.onWrapperStart = function (event) {
                    listenerWrapper._lastX = event.clientX;
                    listenerWrapper._lastY = event.clientY;

                    if (listeners.onStart) {
                        listeners.onStart(event);
                    }

                    // TODO: Replace with our body
                    document.body.addEventListener("mousemove", listenerWrapper.onWrapperDrag);
                };

                listenerWrapper.onWrapperEnd = function (event) {
                    if (listeners.onEnd) {
                        listeners.onEnd(event);
                    }
                    // TODO: Replace with our body
                    document.body.removeEventListener("mousemove", listenerWrapper.onWrapperDrag);
                };
                return listenerWrapper;
            }
        }, {
            key: "createTouchDragListenerWrapper",
            value: function createTouchDragListenerWrapper(listeners) {
                var listenerWrapper = Object.assign({}, listeners);

                listenerWrapper.onWrapperDrag = function (event) {
                    var touch = event.targetTouches[0];
                    var deltaX = touch.pageX - listenerWrapper._lastX;
                    listenerWrapper._lastX = touch.pageX;

                    var deltaY = touch.pageY - listenerWrapper._lastY;
                    listenerWrapper._lastY = touch.pageY;

                    listeners.onDrag(deltaX, deltaY);
                };

                listenerWrapper.onWrapperStart = function (event) {
                    var touch = event.targetTouches[0];
                    listenerWrapper._lastX = touch.pageX;
                    listenerWrapper._lastY = touch.pageY;

                    if (listeners.onStart) {
                        listeners.onStart(event);
                    }
                    event.preventDefault();

                    // TODO: Replace with our body
                    document.body.addEventListener("touchmove", listenerWrapper.onWrapperDrag);
                };

                listenerWrapper.onWrapperEnd = function (event) {
                    if (listeners.onEnd) {
                        listeners.onEnd(event);
                    }
                    // TODO: Replace with our body
                    document.body.removeEventListener("touchmove", listenerWrapper.onWrapperDrag);
                };
                return listenerWrapper;
            }
        }, {
            key: "addDragListener",
            value: function addDragListener(listeners) {
                var listenerWrapper = this.createDragListenerWrapper(listeners);
                var touchListenerWrapper = this.createTouchDragListenerWrapper(listeners);
                this.addNodeListener("touchstart", touchListenerWrapper.onWrapperStart);
                this.addNodeListener("mousedown", listenerWrapper.onWrapperStart);
                // TODO: Replace with our body
                document.body.addEventListener("touchend", touchListenerWrapper.onWrapperEnd);
                document.body.addEventListener("mouseup", listenerWrapper.onWrapperEnd);

                if (!this.hasOwnProperty("_dragListeners")) {
                    this._dragListeners = [];
                }
                this._dragListeners.push(touchListenerWrapper);
                this._dragListeners.push(listenerWrapper);
            }
        }, {
            key: "removeDragListener",
            value: function removeDragListener(listeners) {
                if (this._dragListeners) {
                    for (var i = this._dragListeners.length - 1; i >= 0; i -= 1) {
                        if (this._dragListeners[i].onStart === listeners.onStart && this._dragListeners[i].onDrag === listeners.onDrag && this._dragListeners[i].onEnd === listeners.onEnd) {

                            this.removeNodeListener("touchstart", this._dragListeners[i].onWrapperStart);
                            document.body.removeEventListener("touchmove", this._dragListeners[i].onWrapperDrag);
                            document.body.removeEventListener("touchmove", this._dragListeners[i].onWrapperEnd);
                            this.removeNodeListener("mousedown", this._dragListeners[i].onWrapperStart);
                            document.body.removeEventListener("mousemove", this._dragListeners[i].onWrapperDrag);
                            document.body.removeEventListener("mousemove", this._dragListeners[i].onWrapperEnd);

                            this._dragListeners.splice(i, 1);
                        }
                    }
                }
            }
        }]);
        return Draggable;
    }(BaseClass), (_descriptor = _applyDecoratedDescriptor$1(_class.prototype, "_clickCallbacks", [lazyInit], {
        enumerable: true,
        initializer: function initializer() {
            return new Map();
        }
    }), _descriptor2 = _applyDecoratedDescriptor$1(_class.prototype, "_clickDragListeners", [lazyInit], {
        enumerable: true,
        initializer: function initializer() {
            return new Map();
        }
    })), _class;
};

// TODO: this file existed to hold generic classes in a period of fast prototyping, has a lot of old code
UI.Orientation = {
    HORIZONTAL: 1,
    VERTICAL: 2
};

UI.Direction = {
    UP: "up",
    LEFT: "left",
    DOWN: "down",
    RIGHT: "right"
};

// TODO: move to Bootstrap file
UI.Level = {
    NONE: null,
    DEFAULT: "default",
    INFO: "info",
    PRIMARY: "primary",
    SUCCESS: "success",
    WARNING: "warning",
    DANGER: "danger",
    ERROR: "danger"
};

UI.Size = {
    NONE: null,
    EXTRA_SMALL: "xs",
    SMALL: "sm",
    DEFAULT: "default",
    LARGE: "lg",
    EXTRA_LARGE: "xl"
};

// TODO: why is this here?
UI.VoteStatus = {
    NONE: null,
    LIKE: 1,
    DISLIKE: -1
};

UI.ActionStatus = {
    DEFAULT: 1,
    RUNNING: 2,
    SUCCESS: 3,
    FAILED: 4
};

// A very simple class, all this does is implement the `getTitle()` method

var Panel = function (_UI$Element) {
    inherits(Panel, _UI$Element);

    function Panel() {
        classCallCheck(this, Panel);
        return possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).apply(this, arguments));
    }

    createClass(Panel, [{
        key: "getTitle",
        value: function getTitle() {
            return this.options.title;
        }
    }]);
    return Panel;
}(UI.Element);

var SlideBar = function (_Draggable) {
    inherits(SlideBar, _Draggable);

    function SlideBar(options) {
        classCallCheck(this, SlideBar);
        return possibleConstructorReturn(this, (SlideBar.__proto__ || Object.getPrototypeOf(SlideBar)).call(this, options));
    }

    createClass(SlideBar, [{
        key: "getNodeAttributes",
        value: function getNodeAttributes() {
            var attributes = get(SlideBar.prototype.__proto__ || Object.getPrototypeOf(SlideBar.prototype), "getNodeAttributes", this).call(this);
            attributes.setStyle("display", "inline-block");
            attributes.setStyle("position", "relative");
            attributes.setStyle("cursor", "pointer");
            return attributes;
        }
    }, {
        key: "getSliderLeft",
        value: function getSliderLeft() {
            return this.options.value * this.options.width - this.options.barWidth / 2;
        }
    }, {
        key: "render",
        value: function render() {
            return [UI.createElement(UI.ProgressBar, { ref: "progressBar", active: "true", value: this.options.value, disableTransition: true,
                style: {
                    height: "5px",
                    width: this.options.width + "px",
                    position: "relative",
                    top: "15px"
                }
            }), UI.createElement("div", { ref: "slider", style: {
                    width: this.options.barWidth + "px",
                    height: "20px",
                    "background-color": "black",
                    position: "absolute",
                    left: this.getSliderLeft() + "px",
                    top: "7.5px"
                } })];
        }
    }, {
        key: "setValue",
        value: function setValue(value) {
            value = Math.max(value, 0);
            value = Math.min(value, 1);

            this.options.value = value;
            this.progressBar.set(this.options.value);
            this.slider.setStyle("left", this.getSliderLeft() + "px");

            if (this.onSetValue) {
                this.onSetValue(this.options.value);
            }
        }
    }, {
        key: "getValue",
        value: function getValue() {
            return this.options.value;
        }
    }, {
        key: "onMount",
        value: function onMount() {
            var _this3 = this;

            this.addDragListener({
                onStart: function onStart(event) {
                    _this3.setValue((Device.getEventX(event) - getOffset(_this3.progressBar).left) / _this3.options.width);
                },
                onDrag: function onDrag(deltaX, deltaY) {
                    _this3.setValue(_this3.options.value + deltaX / _this3.options.width);
                }
            });
        }
    }]);
    return SlideBar;
}(Draggable(UI.Element));



var Link = function (_UI$Primitive) {
    inherits(Link, _UI$Primitive);

    function Link() {
        classCallCheck(this, Link);
        return possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
    }

    createClass(Link, [{
        key: "extraNodeAttributes",
        value: function extraNodeAttributes(attr) {
            attr.setStyle("cursor", "pointer");
        }
    }, {
        key: "getDefaultOptions",
        value: function getDefaultOptions() {
            return {
                newTab: true
            };
        }
    }, {
        key: "setOptions",
        value: function setOptions(options) {
            get(Link.prototype.__proto__ || Object.getPrototypeOf(Link.prototype), "setOptions", this).call(this, options);

            if (this.options.newTab) {
                this.options.target = "_blank";
            }

            return options;
        }
    }, {
        key: "render",
        value: function render() {
            return [this.options.value];
        }
    }]);
    return Link;
}(UI.Primitive("a"));

var Image = function (_UI$Primitive2) {
    inherits(Image, _UI$Primitive2);

    function Image() {
        classCallCheck(this, Image);
        return possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
    }

    return Image;
}(UI.Primitive("img"));

// Beware coder: If you ever use this class, you should have a well documented reason


var RawHTML = function (_UI$Element2) {
    inherits(RawHTML, _UI$Element2);

    function RawHTML() {
        classCallCheck(this, RawHTML);
        return possibleConstructorReturn(this, (RawHTML.__proto__ || Object.getPrototypeOf(RawHTML)).apply(this, arguments));
    }

    createClass(RawHTML, [{
        key: "getInnerHTML",
        value: function getInnerHTML() {
            return this.options.innerHTML || this.options.__innerHTML;
        }
    }, {
        key: "redraw",
        value: function redraw() {
            this.node.innerHTML = this.getInnerHTML();
            this.applyNodeAttributes();
            this.applyRef();
        }
    }]);
    return RawHTML;
}(UI.Element);

var TemporaryMessageArea = function (_UI$Primitive3) {
    inherits(TemporaryMessageArea, _UI$Primitive3);

    function TemporaryMessageArea() {
        classCallCheck(this, TemporaryMessageArea);
        return possibleConstructorReturn(this, (TemporaryMessageArea.__proto__ || Object.getPrototypeOf(TemporaryMessageArea)).apply(this, arguments));
    }

    createClass(TemporaryMessageArea, [{
        key: "getDefaultOptions",
        value: function getDefaultOptions() {
            return {
                margin: 10
            };
        }
    }, {
        key: "render",
        value: function render() {
            return [UI.createElement(UI.TextElement, { ref: "textElement", value: this.options.value || "" })];
        }
    }, {
        key: "getNodeAttributes",
        value: function getNodeAttributes() {
            var attr = get(TemporaryMessageArea.prototype.__proto__ || Object.getPrototypeOf(TemporaryMessageArea.prototype), "getNodeAttributes", this).call(this);
            // TODO: nope, not like this
            attr.setStyle("marginLeft", this.options.margin + "px");
            attr.setStyle("marginRight", this.options.margin + "px");
            return attr;
        }
    }, {
        key: "setValue",
        value: function setValue(value) {
            this.options.value = value;
            this.textElement.setValue(value);
        }
    }, {
        key: "setColor",
        value: function setColor(color) {
            this.setStyle("color", color);
        }
    }, {
        key: "showMessage",
        value: function showMessage(message) {
            var _this8 = this;

            var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "black";
            var displayDuration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;

            this.setColor(color);
            this.clear();
            this.setValue(message);
            if (displayDuration) {
                this.clearValueTimeout = setTimeout(function () {
                    return _this8.clear();
                }, displayDuration);
            }
        }
    }, {
        key: "clear",
        value: function clear() {
            this.setValue("");
            if (this.clearValueTimeout) {
                clearTimeout(this.clearValueTimeout);
                this.clearValueTimeout = null;
            }
        }
    }]);
    return TemporaryMessageArea;
}(UI.Primitive("span"));

// Just putting in a lot of methods, to try to think of an interface


var ScrollableMixin = function (_UI$Element3) {
    inherits(ScrollableMixin, _UI$Element3);

    function ScrollableMixin() {
        classCallCheck(this, ScrollableMixin);
        return possibleConstructorReturn(this, (ScrollableMixin.__proto__ || Object.getPrototypeOf(ScrollableMixin)).apply(this, arguments));
    }

    createClass(ScrollableMixin, [{
        key: "getDesiredExcessHeightTop",
        value: function getDesiredExcessHeightTop() {
            return 600;
        }
    }, {
        key: "getDesiredExcessHeightBottom",
        value: function getDesiredExcessHeightBottom() {
            return 600;
        }
    }, {
        key: "getHeightScrollPercent",
        value: function getHeightScrollPercent() {
            var scrollHeight = this.node.scrollHeight;
            var height = this.node.clientHeight;
            if (scrollHeight === height) {
                return 0;
            }
            return this.node.scrollTop / (scrollHeight - height);
        }
    }, {
        key: "getExcessTop",
        value: function getExcessTop() {
            return this.node.scrollTop;
        }
    }, {
        key: "getExcessBottom",
        value: function getExcessBottom() {
            var scrollHeight = this.node.scrollHeight;
            var height = this.node.clientHeight;
            return scrollHeight - height - this.node.scrollTop;
        }
    }, {
        key: "haveExcessTop",
        value: function haveExcessTop() {
            return this.getExcessTop() > this.getDesiredExcessHeightTop();
        }
    }, {
        key: "haveExcessBottom",
        value: function haveExcessBottom() {
            return this.getExcessBottom() > this.getDesiredExcessHeightBottom();
        }
    }, {
        key: "popChildTop",
        value: function popChildTop() {
            this.eraseChildAtIndex(0);
        }
    }, {
        key: "popChildBottom",
        value: function popChildBottom() {
            this.eraseChildAtIndex(this.children.length - 1);
        }
    }, {
        key: "removeExcessTop",
        value: function removeExcessTop() {
            while (this.haveExcessTop()) {
                this.popChildTop();
            }
        }
    }, {
        key: "removeExcessBottom",
        value: function removeExcessBottom() {
            while (this.haveExcessBottom()) {
                this.popChildBottom();
            }
        }
    }, {
        key: "pushChildTop",
        value: function pushChildTop(element) {
            var removeExcessBottom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (removeExcessBottom) {
                this.removeExcessBottom();
            }
            this.insertChild(element, 0);
        }
    }, {
        key: "pushChildBottom",
        value: function pushChildBottom(element) {
            var removeExcessTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (removeExcessTop) {
                this.removeExcessTop();
            }
            this.appendChild(element);
            this.appendChild(element);
        }
    }, {
        key: "saveScrollPosition",
        value: function saveScrollPosition() {
            // If at top or bottom, save that
            // If anywhere in the middle, save the offset of the first child with a positive offset, and keep that constant
            this.options.scrollTop = this.node.scrollTop;
            var maxScrollTop = this.node.scrollHeight - this.node.clientHeight;
            this.options.scrollInfo = {
                scrollAtTop: this.options.scrollTop === 0,
                scrollAtBottom: this.options.scrollTop === maxScrollTop
            };
        }
    }, {
        key: "applyScrollPosition",
        value: function applyScrollPosition() {
            this.node.scrollTop = this.options.scrollTop || this.node.scrollTop;
        }
    }, {
        key: "scrollToHeight",
        value: function scrollToHeight(height) {
            this.node.scrollTop = height;
        }
    }, {
        key: "scrollToTop",
        value: function scrollToTop() {
            this.scrollToHeight(0);
        }
    }, {
        key: "scrollToBottom",
        value: function scrollToBottom() {
            this.scrollToHeight(this.node.scrollHeight);
        }
    }]);
    return ScrollableMixin;
}(UI.Element);



//TODO: this class would need some binary searches

var InfiniteScrollable = function (_ScrollableMixin) {
    inherits(InfiniteScrollable, _ScrollableMixin);

    function InfiniteScrollable() {
        classCallCheck(this, InfiniteScrollable);
        return possibleConstructorReturn(this, (InfiniteScrollable.__proto__ || Object.getPrototypeOf(InfiniteScrollable)).apply(this, arguments));
    }

    createClass(InfiniteScrollable, [{
        key: "setOptions",
        value: function setOptions(options) {
            options = Object.assign({
                entries: [],
                entryComparator: function entryComparator(a, b) {
                    return a.id - b.id;
                },
                firstRenderedEntry: 0,
                lastRenderedEntry: -1
            }, options);
            get(InfiniteScrollable.prototype.__proto__ || Object.getPrototypeOf(InfiniteScrollable.prototype), "setOptions", this).call(this, options);
            // TODO: TEMP for testing
            this.options.children = [];
            if (this.options.staticTop) {
                this.options.children.push(this.options.staticTop);
            }
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.options.entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var entry = _step.value;

                    this.options.children.push(this.renderEntry(entry));
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "getFirstVisibleIndex",
        value: function getFirstVisibleIndex() {}
    }, {
        key: "getLastVisibleIndex",
        value: function getLastVisibleIndex() {}
    }, {
        key: "renderEntry",
        value: function renderEntry(entry) {
            if (this.options.entryRenderer) {
                return this.options.entryRenderer(entry);
            } else {
                console.error("You need to pass option entryRenderer or overwrite the renderEntry method");
            }
        }
    }, {
        key: "pushEntry",
        value: function pushEntry(entry) {
            this.insertEntry(entry, this.options.entries.length);
        }
    }, {
        key: "insertEntry",
        value: function insertEntry(entry, index) {
            var entries = this.options.entries;
            if (index == null) {
                index = 0;
                while (index < entries.length && this.options.entryComparator(entries[index], entry) <= 0) {
                    index++;
                }
            }
            entries.splice(index, 0, entry);

            // Adjust to the children
            if (this.options.staticTop) {
                index += 1;
            }

            // TODO: only if in the rendered range, insert in options.children;
            var uiElement = this.renderEntry(entry);
            this.insertChild(uiElement, index);
        }
    }]);
    return InfiniteScrollable;
}(ScrollableMixin);

var TimePassedSpan = function (_UI$Primitive4) {
    inherits(TimePassedSpan, _UI$Primitive4);

    function TimePassedSpan() {
        classCallCheck(this, TimePassedSpan);
        return possibleConstructorReturn(this, (TimePassedSpan.__proto__ || Object.getPrototypeOf(TimePassedSpan)).apply(this, arguments));
    }

    createClass(TimePassedSpan, [{
        key: "render",
        value: function render() {
            return this.getTimeDeltaDisplay(this.options.timeStamp);
        }
    }, {
        key: "getDefaultOptions",
        value: function getDefaultOptions() {
            return {
                style: {
                    color: "#aaa"
                }
            };
        }
    }, {
        key: "getTimeDeltaDisplay",
        value: function getTimeDeltaDisplay(timeStamp) {
            var timeNow = Date.now();
            var timeDelta = parseInt((timeNow - timeStamp * 1000) / 1000);
            var timeUnitsInSeconds = [31556926, 2629743, 604800, 86400, 3600, 60];
            var timeUnits = ["year", "month", "week", "day", "hour", "minute"];
            if (timeDelta < 0) {
                timeDelta = 0;
            }
            for (var i = 0; i < timeUnits.length; i += 1) {
                var value = parseInt(timeDelta / timeUnitsInSeconds[i]);
                if (timeUnitsInSeconds[i] <= timeDelta) {
                    return value + " " + timeUnits[i] + (value > 1 ? "s" : "") + " ago";
                }
            }
            return "Few seconds ago";
        }
    }, {
        key: "onMount",
        value: function onMount() {
            var _this12 = this;

            this._updateListener = this.constructor.addIntervalListener(function () {
                _this12.redraw();
            });
        }
    }, {
        key: "onUnmount",
        value: function onUnmount() {
            this._updateListener && this._updateListener.remove();
        }
    }], [{
        key: "addIntervalListener",
        value: function addIntervalListener(callback) {
            var _this13 = this;

            if (!this.updateFunction) {
                this.TIME_DISPATCHER = new Dispatchable();
                this.updateFunction = setInterval(function () {
                    _this13.TIME_DISPATCHER.dispatch("updateTimeValue");
                }, 5000);
            }
            return this.TIME_DISPATCHER.addListener("updateTimeValue", callback);
        }
    }]);
    return TimePassedSpan;
}(UI.Primitive("span"));



// TODO: deprecate this, to use lazyInit decorators

// This file will probably be deprecated in time by StyleSheet, but the API will be backwards compatible, so use it
// Class meant to group multiple classes inside a single <style> element, for convenience
// TODO: should probably be implemented with document.styleSheet
// TODO: pattern should be more robust, to be able to only update classes
// TODO: should probably be renamed to StyleSheet?

var StyleSet = function (_Dispatchable) {
    inherits(StyleSet, _Dispatchable);

    function StyleSet() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, StyleSet);

        var _this = possibleConstructorReturn(this, (StyleSet.__proto__ || Object.getPrototypeOf(StyleSet)).call(this));

        options = Object.assign({
            updateOnResize: false,
            parent: document.head,
            name: options.name || _this.constructor.getElementName() }, options);
        _this.options = options;
        _this.elements = new Set();
        if (_this.options.updateOnResize) {
            _this.attachEventListener(window, "resize", function () {
                _this.update();
            });
        }
        var styleElementOptions = {
            children: [],
            name: _this.options.name
        };
        _this.styleElement = StyleElement.create(options.parent, styleElementOptions);
        return _this;
    }

    createClass(StyleSet, [{
        key: "ensureFirstUpdate",
        value: function ensureFirstUpdate() {
            if (!this._firstUpdate) {
                this._firstUpdate = true;
                // Call all listeners before update for the very first time, to update any possible variables
                this.dispatch("beforeUpdate", this);
            }
        }
    }, {
        key: "css",
        value: function css(style) {
            this.ensureFirstUpdate();
            if (arguments.length > 1) {
                style = Object.assign.apply(Object, [{}].concat(Array.prototype.slice.call(arguments)));
            }
            var element = new DynamicStyleElement({ style: style });
            this.elements.add(element);
            var styleInstances = element.render();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = styleInstances[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var styleInstance = _step.value;

                    this.styleElement.appendChild(styleInstance);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return element;
        }
    }, {
        key: "keyframe",
        value: function keyframe(styles) {
            this.ensureFirstUpdate();
            throw Error("Not implemented yet!");
        }
    }, {
        key: "addBeforeUpdateListener",
        value: function addBeforeUpdateListener(callback) {
            return this.addListener("beforeUpdate", callback);
        }
    }, {
        key: "update",
        value: function update() {
            this.dispatch("beforeUpdate", this);
            var children = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var value = _step2.value;

                    if (value instanceof StyleElement) {
                        var styleElements = value.render();
                        children.push.apply(children, toConsumableArray(styleElements));
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            this.styleElement.options.children = children;
            this.styleElement.redraw();
        }
    }], [{
        key: "getInstance",
        value: function getInstance() {
            if (!this.hasOwnProperty("singletonInstance")) {
                this.singletonInstance = new this();
            }
            return this.singletonInstance;
        }
    }, {
        key: "getElementName",
        value: function getElementName() {
            this.elementNameCounter = (this.elementNameCounter || 0) + 1;
            var name = this.constructor.name;
            if (this.elementNameCounter > 1) {
                name += "-" + this.elementNameCounter;
            }
            return name;
        }
    }]);
    return StyleSet;
}(Dispatchable);

// Helper class, meant to only keep one class active for an element from a set of classes
// TODO: move to another file


var ExclusiveClassSet = function () {
    function ExclusiveClassSet(classList, element) {
        classCallCheck(this, ExclusiveClassSet);

        // TODO: check that classList is an array (or at least iterable)
        this.classList = classList;
        this.element = element;
    }

    createClass(ExclusiveClassSet, [{
        key: "set",
        value: function set(element, classInstance) {
            if (!classInstance) {
                classInstance = element;
                element = this.element;
            }
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = this.classList[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var cls = _step3.value;

                    if (cls === classInstance) {
                        element.addClass(cls);
                    } else {
                        element.removeClass(cls);
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    }], [{
        key: "fromObject",
        value: function fromObject(obj, element) {
            var classList = [];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    classList.push(obj[key]);
                }
            }
            return Object.assign(new ExclusiveClassSet(classList, element), obj);
        }
    }]);
    return ExclusiveClassSet;
}();

function evaluateStyleRuleObject(target, initializer, value, options) {
    var result = initializer ? initializer.call(target) : value;
    if (typeof result === "function") {
        result = result();
    }
    if (Array.isArray(result)) {
        result = Object.assign.apply(Object, [{}].concat(toConsumableArray(result)));
    }
    return result;
}

function getStyleRuleKey(key) {
    return "__style__" + key;
}

// TODO: this function can be made a lot more generic, to wrap plain object initializer with inheritance support
function styleRuleWithOptions() {
    var options = Object.assign.apply(Object, [{}].concat(Array.prototype.slice.call(arguments))); //Simpler notation?
    var targetMethodName = options.targetMethodName || "css";

    function styleRuleDecorator(target, key, descriptor) {
        var initializer = descriptor.initializer,
            value = descriptor.value;


        descriptor.objInitializer = function () {
            var style = evaluateStyleRuleObject(this, initializer, value, options);

            if (options.inherit) {
                // Get the value we set in the prototype of the parent class
                var parentDesc = Object.getPrototypeOf(this.__proto__)[getStyleRuleKey(key)];
                var parentStyle = evaluateStyleRuleObject(this, parentDesc.objInitializer, parentDesc.value, options);
                style = deepCopy({}, parentStyle, style);
                return style;
            }

            return style;
        };

        // Change the prototype of this object to be able to access the old descriptor/value
        target[getStyleRuleKey(key)] = Object.assign({}, descriptor);

        descriptor.initializer = function () {
            var style = descriptor.objInitializer.call(this);
            return this[targetMethodName](style);
        };

        delete descriptor.value;

        return lazyInit(target, key, descriptor);
    }

    return styleRuleDecorator;
}

var styleRule = styleRuleWithOptions();
var styleRuleInherit = styleRuleWithOptions({ inherit: true });

var _class$1;
var _descriptor$1;
var _descriptor2;
var _descriptor3;
var _class3;
var _temp2;
var _class4;
var _temp3;

function _initDefineProp$2(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _applyDecoratedDescriptor$2(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

// TODO: this file was started with a lot of old patterns, that need to be updated
// TODO: remove everything from UI namespace, export instead
// TODO: need a major clean-up
var FormStyle = (_class$1 = function (_StyleSet) {
    inherits(FormStyle, _StyleSet);

    function FormStyle() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, FormStyle);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FormStyle.__proto__ || Object.getPrototypeOf(FormStyle)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp$2(_this, "formControl", _descriptor$1, _this), _initDefineProp$2(_this, "formGroup", _descriptor2, _this), _initDefineProp$2(_this, "hasError", _descriptor3, _this), _temp), possibleConstructorReturn(_this, _ret);
    }

    return FormStyle;
}(StyleSet), (_descriptor$1 = _applyDecoratedDescriptor$2(_class$1.prototype, "formControl", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {
            display: "block",
            width: "100%",
            height: "34px",
            padding: "6px 12px",
            fontSize: "14px",
            lineHeight: "1.42857143",
            color: "#555",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxShadow: "inset 0 1px 1px rgba(0, 0, 0, .075)",
            transition: "border-color ease-in-out .15s, box-shadow ease-in-out .15s",
            ":focus": {
                borderColor: "#66afe9",
                outline: "0",
                boxShadow: "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6)"
            },
            "[disabled]": {
                opacity: "1",
                cursor: "not-allowed"
            },
            "[readonly]": {
                opacity: "1"
            }
        };
    }
}), _descriptor2 = _applyDecoratedDescriptor$2(_class$1.prototype, "formGroup", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {
            marginBottom: "15px"
        };
    }
}), _descriptor3 = _applyDecoratedDescriptor$2(_class$1.prototype, "hasError", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {
            color: "#a94442"
        };
    }
})), _class$1);

var Form = function (_UI$Primitive) {
    inherits(Form, _UI$Primitive);

    function Form() {
        classCallCheck(this, Form);
        return possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
    }

    createClass(Form, [{
        key: "getNodeAttributes",
        value: function getNodeAttributes() {
            var attr = get(Form.prototype.__proto__ || Object.getPrototypeOf(Form.prototype), "getNodeAttributes", this).call(this);
            attr.addClass("form form-horizontal");
            return attr;
        }
    }, {
        key: "onMount",
        value: function onMount() {
            // Insert here code to not refresh page
        }
    }]);
    return Form;
}(UI.Primitive("form"));

var Input = function (_UI$Primitive2) {
    inherits(Input, _UI$Primitive2);

    function Input() {
        classCallCheck(this, Input);
        return possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
    }

    createClass(Input, [{
        key: "getNodeAttributes",
        value: function getNodeAttributes() {
            var attr = get(Input.prototype.__proto__ || Object.getPrototypeOf(Input.prototype), "getNodeAttributes", this).call(this);

            var type = this.getInputType();
            if (type) {
                attr.setAttribute("type", type);
            }

            return attr;
        }
    }, {
        key: "redraw",
        value: function redraw() {
            get(Input.prototype.__proto__ || Object.getPrototypeOf(Input.prototype), "redraw", this).call(this);
            if (this.options.hasOwnProperty("value")) {
                this.setValue(this.options.value);
            }
        }
    }, {
        key: "getValue",
        value: function getValue() {
            return this.node.value;
        }
    }, {
        key: "setValue",
        value: function setValue(newValue) {
            this.node.value = newValue;
        }
    }, {
        key: "getInputType",
        value: function getInputType() {
            // Must be overloaded
            return null;
        }
    }, {
        key: "onInput",
        value: function onInput(callback) {
            this.addNodeListener("input change", callback);
        }
    }, {
        key: "onKeyUp",
        value: function onKeyUp(callback) {
            this.addNodeListener("keyup", callback);
        }
    }]);
    return Input;
}(UI.Primitive("input"));

var FormControl = (_temp2 = _class3 = function (_Input) {
    inherits(FormControl, _Input);

    function FormControl() {
        classCallCheck(this, FormControl);
        return possibleConstructorReturn(this, (FormControl.__proto__ || Object.getPrototypeOf(FormControl)).apply(this, arguments));
    }

    createClass(FormControl, [{
        key: "getNodeAttributes",
        value: function getNodeAttributes() {
            var attr = get(FormControl.prototype.__proto__ || Object.getPrototypeOf(FormControl.prototype), "getNodeAttributes", this).call(this);
            attr.addClass(this.getStyleSet().formControl);
            return attr;
        }
    }, {
        key: "getStyleSet",
        value: function getStyleSet() {
            return this.options.styleSet || this.constructor.styleSet;
        }
    }]);
    return FormControl;
}(Input), _class3.styleSet = FormStyle.getInstance(), _temp2);
var FormSettingsGroup = (_temp3 = _class4 = function (_UI$Element) {
    inherits(FormSettingsGroup, _UI$Element);

    function FormSettingsGroup() {
        classCallCheck(this, FormSettingsGroup);
        return possibleConstructorReturn(this, (FormSettingsGroup.__proto__ || Object.getPrototypeOf(FormSettingsGroup)).apply(this, arguments));
    }

    createClass(FormSettingsGroup, [{
        key: "setOptions",
        value: function setOptions(options) {
            get(FormSettingsGroup.prototype.__proto__ || Object.getPrototypeOf(FormSettingsGroup.prototype), "setOptions", this).call(this, options);

            this.options.labelWidth = this.options.labelWidth || "41%";
            this.options.contentWidth = this.options.contentWidth || "59%";
        }
    }, {
        key: "getNodeAttributes",
        value: function getNodeAttributes() {
            var attr = get(FormSettingsGroup.prototype.__proto__ || Object.getPrototypeOf(FormSettingsGroup.prototype), "getNodeAttributes", this).call(this);
            attr.addClass(this.getStyleSet().FormGroup);
            return attr;
        }
    }, {
        key: "getStyleSet",
        value: function getStyleSet() {
            return this.options.styleSet || this.constructor.styleSet;
        }
    }, {
        key: "getLabelStyle",
        value: function getLabelStyle() {
            return {
                float: "left",
                display: "inline-block",
                height: "32px",
                "line-height": "32px"
            };
        }
    }, {
        key: "getContentStyle",
        value: function getContentStyle() {
            return {
                float: "left",
                display: "inline-block",
                "margin-top": "1px",
                "margin-bottom": "1px",
                "min-height": "30px"
            };
        }
    }, {
        key: "render",
        value: function render() {
            var labelStyle = Object.assign(this.getLabelStyle(), { width: this.options.labelWidth });
            labelStyle = Object.assign(labelStyle, this.options.labelStyle);
            var contentStyle = Object.assign(this.getContentStyle(), { width: this.options.contentWidth });
            contentStyle = Object.assign(contentStyle, this.options.contentStyle);
            var label = this.options.label ? UI.createElement(
                "div",
                { style: labelStyle },
                this.options.label
            ) : null;
            var content = UI.createElement(
                "div",
                { style: contentStyle },
                this.options.children
            );
            if (this.options.contentFirst) {
                return [content, label];
            }
            return [label, content];
        }
    }]);
    return FormSettingsGroup;
}(UI.Element), _class4.styleSet = FormStyle.getInstance(), _temp3);

var FormGroup = function (_UI$Element2) {
    inherits(FormGroup, _UI$Element2);

    function FormGroup() {
        classCallCheck(this, FormGroup);
        return possibleConstructorReturn(this, (FormGroup.__proto__ || Object.getPrototypeOf(FormGroup)).apply(this, arguments));
    }

    createClass(FormGroup, [{
        key: "setOptions",
        value: function setOptions(options) {
            get(FormGroup.prototype.__proto__ || Object.getPrototypeOf(FormGroup.prototype), "setOptions", this).call(this, options);
            this.options.labelWidth = this.options.labelWidth || "16%";
            this.options.contentWidth = this.options.contentWidth || "32%";
            this.options.errorFieldWidth = this.options.errorFieldWidth || "48%";
        }
    }, {
        key: "getNodeAttributes",
        value: function getNodeAttributes() {
            var attr = get(FormGroup.prototype.__proto__ || Object.getPrototypeOf(FormGroup.prototype), "getNodeAttributes", this).call(this);
            attr.addClass("form-group");
            return attr;
        }
    }, {
        key: "getDefaultStyle",
        value: function getDefaultStyle() {
            return {
                float: "left",
                position: "relative",
                "min-height": "1px",
                "padding-right": "15px",
                "padding-left": "15px"
            };
        }
    }, {
        key: "render",
        value: function render() {
            var labelStyle = Object.assign(this.getDefaultStyle(), { width: this.options.labelWidth });
            labelStyle = Object.assign(labelStyle, this.options.style);
            var contentStyle = Object.assign(this.getDefaultStyle(), { width: this.options.contentWidth });
            contentStyle = Object.assign(contentStyle, this.options.style);
            var errorFieldStyle = Object.assign(this.getDefaultStyle(), { width: this.options.errorFieldWidth });
            return [this.options.label ? UI.createElement(
                "label",
                { className: "control-label", style: labelStyle },
                this.options.label
            ) : null, UI.createElement(
                "div",
                { style: contentStyle },
                this.options.children
            ), UI.createElement("span", { ref: "errorField", style: errorFieldStyle })];
        }
    }, {
        key: "setError",
        value: function setError(errorMessage) {
            this.errorField.node.textContent = errorMessage;
            this.addClass(this.getStyleSet().hasError);
        }
    }, {
        key: "removeError",
        value: function removeError() {
            this.errorField.node.textContent = "";
            this.removeClass(this.getStyleSet().hasError);
        }
    }]);
    return FormGroup;
}(UI.Element);

Input.domAttributesMap = CreateNodeAttributesMap(UI.Element.domAttributesMap, [["autocomplete"], ["autofocus", { noValue: true }], ["formaction"], ["maxLength", { domName: "maxlength" }], ["minLength", { domName: "minlength" }], ["name"], ["placeholder"], ["readonly"], ["required"], ["value"]]);

var SubmitInput = function (_Input2) {
    inherits(SubmitInput, _Input2);

    function SubmitInput() {
        classCallCheck(this, SubmitInput);
        return possibleConstructorReturn(this, (SubmitInput.__proto__ || Object.getPrototypeOf(SubmitInput)).apply(this, arguments));
    }

    createClass(SubmitInput, [{
        key: "getInputType",
        value: function getInputType() {
            return "submit";
        }
    }]);
    return SubmitInput;
}(Input);

SubmitInput.domAttributesMap = CreateNodeAttributesMap(UI.Element.domAttributesMap, [["formenctype"], ["formmethod"], ["formnovalidate"], ["formtarget"]]);

var TextInputInterface = function TextInputInterface(BaseInputClass) {
    return function (_BaseInputClass) {
        inherits(TextInput, _BaseInputClass);

        function TextInput() {
            classCallCheck(this, TextInput);
            return possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).apply(this, arguments));
        }

        createClass(TextInput, [{
            key: "getInputType",
            value: function getInputType() {
                return "text";
            }
        }]);
        return TextInput;
    }(BaseInputClass);
};

var TextInput = TextInputInterface(Input);
var FormTextInput = TextInputInterface(FormControl);

var NumberInputInterface = function NumberInputInterface(BaseInputClass) {
    var numberInput = function (_BaseInputClass2) {
        inherits(NumberInput, _BaseInputClass2);

        function NumberInput() {
            classCallCheck(this, NumberInput);
            return possibleConstructorReturn(this, (NumberInput.__proto__ || Object.getPrototypeOf(NumberInput)).apply(this, arguments));
        }

        createClass(NumberInput, [{
            key: "getInputType",
            value: function getInputType() {
                return "number";
            }
        }, {
            key: "getValue",
            value: function getValue() {
                var val = get(NumberInput.prototype.__proto__ || Object.getPrototypeOf(NumberInput.prototype), "getValue", this).call(this);
                return parseInt(val) || parseFloat(val);
            }
        }]);
        return NumberInput;
    }(BaseInputClass);

    numberInput.domAttributesMap = CreateNodeAttributesMap(UI.Element.domAttributesMap, [["min"], ["max"], ["step"]]);
    return numberInput;
};

var NumberInput = NumberInputInterface(Input);
var FormNumberInput = NumberInputInterface(FormControl);

var EmailInputInterface = function EmailInputInterface(BaseInputClass) {
    return function (_BaseInputClass3) {
        inherits(EmailInput, _BaseInputClass3);

        function EmailInput() {
            classCallCheck(this, EmailInput);
            return possibleConstructorReturn(this, (EmailInput.__proto__ || Object.getPrototypeOf(EmailInput)).apply(this, arguments));
        }

        createClass(EmailInput, [{
            key: "getInputType",
            value: function getInputType() {
                return "email";
            }
        }]);
        return EmailInput;
    }(BaseInputClass);
};

var EmailInput = EmailInputInterface(Input);
var FormEmailInput = EmailInputInterface(FormControl);

var PasswordInputInterface = function PasswordInputInterface(BaseInputClass) {
    return function (_BaseInputClass4) {
        inherits(PasswordInput, _BaseInputClass4);

        function PasswordInput() {
            classCallCheck(this, PasswordInput);
            return possibleConstructorReturn(this, (PasswordInput.__proto__ || Object.getPrototypeOf(PasswordInput)).apply(this, arguments));
        }

        createClass(PasswordInput, [{
            key: "getInputType",
            value: function getInputType() {
                return "password";
            }
        }]);
        return PasswordInput;
    }(BaseInputClass);
};

var PasswordInput = PasswordInputInterface(Input);
var FormPasswordInput = PasswordInputInterface(FormControl);

var FileInputInterface = function FileInputInterface(BaseInputClass) {
    var fileInput = function (_BaseInputClass5) {
        inherits(FileInput, _BaseInputClass5);

        function FileInput() {
            classCallCheck(this, FileInput);
            return possibleConstructorReturn(this, (FileInput.__proto__ || Object.getPrototypeOf(FileInput)).apply(this, arguments));
        }

        createClass(FileInput, [{
            key: "getInputType",
            value: function getInputType() {
                return "file";
            }
        }, {
            key: "getFiles",
            value: function getFiles() {
                return this.node.files;
            }
        }, {
            key: "getFile",
            value: function getFile() {
                // TODO: this is valid only if multipleFiles is false
                return this.getFiles()[0];
            }
        }]);
        return FileInput;
    }(BaseInputClass);

    fileInput.domAttributesMap = CreateNodeAttributesMap(UI.Element.domAttributesMap, [["multipleFiles", { domName: "multiple", noValue: true }], ["fileTypes", { domName: "accept" }]]);
    return fileInput;
};

var FileInput = FileInputInterface(Input);
var FormFileInput = FileInputInterface(FormControl);

var CheckboxInput = function (_Input3) {
    inherits(CheckboxInput, _Input3);

    function CheckboxInput() {
        classCallCheck(this, CheckboxInput);
        return possibleConstructorReturn(this, (CheckboxInput.__proto__ || Object.getPrototypeOf(CheckboxInput)).apply(this, arguments));
    }

    createClass(CheckboxInput, [{
        key: "setOptions",
        value: function setOptions(options) {
            options.style = options.style || {};
            options.style = Object.assign({}, options.style);
            get(CheckboxInput.prototype.__proto__ || Object.getPrototypeOf(CheckboxInput.prototype), "setOptions", this).call(this, options);
        }
    }, {
        key: "getInputType",
        value: function getInputType() {
            return "checkbox";
        }
    }, {
        key: "getValue",
        value: function getValue() {
            return this.node.checked;
        }
    }, {
        key: "setValue",
        value: function setValue(newValue) {
            this.node.checked = newValue;
        }
    }]);
    return CheckboxInput;
}(Input);

CheckboxInput.domAttributesMap = CreateNodeAttributesMap(UI.Element.domAttributesMap, [["checked", { noValue: true }]]);

var TextArea = function (_UI$Primitive3) {
    inherits(TextArea, _UI$Primitive3);

    function TextArea() {
        classCallCheck(this, TextArea);
        return possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).apply(this, arguments));
    }

    createClass(TextArea, [{
        key: "applyNodeAttributes",
        value: function applyNodeAttributes() {
            get(TextArea.prototype.__proto__ || Object.getPrototypeOf(TextArea.prototype), "applyNodeAttributes", this).call(this);
            this.node.readOnly = this.options.readOnly || false;
        }
    }, {
        key: "setReadOnly",
        value: function setReadOnly(value) {
            this.options.readOnly = value;
            this.node.readOnly = value;
        }
    }, {
        key: "getValue",
        value: function getValue() {
            return this.node.value;
        }
    }, {
        key: "redraw",
        value: function redraw() {
            get(TextArea.prototype.__proto__ || Object.getPrototypeOf(TextArea.prototype), "redraw", this).call(this);
            if (this.options.value) {
                this.node.value = this.options.value + "";
            }
        }
    }, {
        key: "setValue",
        value: function setValue(value) {
            this.options.value = value;
            this.node.value = value;
        }
    }, {
        key: "onInput",
        value: function onInput(callback) {
            this.addNodeListener("input change", callback);
        }
    }, {
        key: "onKeyUp",
        value: function onKeyUp(callback) {
            this.addNodeListener("keyup", callback);
        }
    }]);
    return TextArea;
}(UI.Primitive("textarea"));

var InputField = function (_UI$Element3) {
    inherits(InputField, _UI$Element3);

    function InputField() {
        classCallCheck(this, InputField);
        return possibleConstructorReturn(this, (InputField.__proto__ || Object.getPrototypeOf(InputField)).apply(this, arguments));
    }

    createClass(InputField, [{
        key: "render",
        value: function render() {}
    }]);
    return InputField;
}(UI.Element);

var Slider = function (_UI$Element4) {
    inherits(Slider, _UI$Element4);

    function Slider() {
        classCallCheck(this, Slider);
        return possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).apply(this, arguments));
    }

    return Slider;
}(UI.Element);

var Select = function (_UI$Primitive4) {
    inherits(Select, _UI$Primitive4);

    function Select() {
        classCallCheck(this, Select);
        return possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
    }

    createClass(Select, [{
        key: "render",
        value: function render() {
            this.givenOptions = this.options.options || [];
            var selectOptions = [];

            for (var i = 0; i < this.givenOptions.length; i += 1) {
                var options = {
                    key: i
                };
                if (this.givenOptions[i] == this.options.selected) {
                    options.selected = true;
                }
                selectOptions.push(UI.createElement(
                    "option",
                    options,
                    this.givenOptions[i].toString()
                ));
            }

            return selectOptions;
        }
    }, {
        key: "get",
        value: function get() {
            var selectedIndex = this.getIndex();
            return this.givenOptions[selectedIndex];
        }
    }, {
        key: "set",
        value: function set(value) {
            for (var i = 0; i < this.givenOptions.length; i++) {
                if (this.givenOptions[i] === value) {
                    this.setIndex(i);
                    return;
                }
            }
            console.error("Can't set the select option ", value, "\nAvailable options: ", this.givenOptions);
        }
    }, {
        key: "getIndex",
        value: function getIndex() {
            return this.node.selectedIndex;
        }
    }, {
        key: "setIndex",
        value: function setIndex(index) {
            this.node.selectedIndex = index;
            this.options.selected = this.givenOptions[index];
        }
    }, {
        key: "redraw",
        value: function redraw() {
            get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), "redraw", this).call(this);
            if (this.options.selected) {
                this.set(this.options.selected);
            }
        }
    }]);
    return Select;
}(UI.Primitive("select"));

// Setting these attributes as styles in mozilla has no effect.
// To maintain compatibility between moz and webkit, whenever
// one of these attributes is set as a style, it is also set as a
// node attribute.
var MozStyleElements = new Set(["width", "height", "rx", "ry", "cx", "cy", "x", "y"]);

var SVGNodeAttributes = function (_NodeAttributes) {
    inherits(SVGNodeAttributes, _NodeAttributes);

    function SVGNodeAttributes(obj) {
        classCallCheck(this, SVGNodeAttributes);

        var _this = possibleConstructorReturn(this, (SVGNodeAttributes.__proto__ || Object.getPrototypeOf(SVGNodeAttributes)).call(this, obj));

        _this.className = null;
        return _this;
    }

    createClass(SVGNodeAttributes, [{
        key: "fixMozAttributes",
        value: function fixMozAttributes(node) {
            if (this.hasOwnProperty("style")) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = MozStyleElements.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var attributeName = _step.value;

                        if (this.style.hasOwnProperty(attributeName) && !this.hasOwnProperty(attributeName)) {
                            this.setAttribute(attributeName, this.style[attributeName], node);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }
    }, {
        key: "setStyle",
        value: function setStyle(attributeName, value, node) {
            get(SVGNodeAttributes.prototype.__proto__ || Object.getPrototypeOf(SVGNodeAttributes.prototype), "setStyle", this).call(this, attributeName, value, node);
            if (MozStyleElements.has(attributeName)) {
                this.setAttribute(attributeName, value, node);
            }
        }
    }, {
        key: "apply",
        value: function apply(node, attributesMap) {
            this.transform = this.transform || this.translate;
            get(SVGNodeAttributes.prototype.__proto__ || Object.getPrototypeOf(SVGNodeAttributes.prototype), "apply", this).call(this, node, attributesMap);
            this.fixMozAttributes(node);
        }
    }]);
    return SVGNodeAttributes;
}(NodeAttributes);

var SVG = {};

SVG.Element = function (_UI$Element) {
    inherits(SVGElement, _UI$Element);

    function SVGElement() {
        classCallCheck(this, SVGElement);
        return possibleConstructorReturn(this, (SVGElement.__proto__ || Object.getPrototypeOf(SVGElement)).apply(this, arguments));
    }

    createClass(SVGElement, [{
        key: "createNode",
        value: function createNode() {
            this.node = document.createElementNS("http://www.w3.org/2000/svg", this.getNodeType());
            return this.node;
        }
    }, {
        key: "getDefaultOptions",
        value: function getDefaultOptions() {
            return {};
        }
    }, {
        key: "setOptions",
        value: function setOptions(options) {
            if (typeof this.getDefaultOptions === "function") {
                var defaultOptions = this.getDefaultOptions();
                options = deepCopy({}, defaultOptions, options);
            }
            get(SVGElement.prototype.__proto__ || Object.getPrototypeOf(SVGElement.prototype), "setOptions", this).call(this, options);
        }
    }, {
        key: "saveState",
        value: function saveState() {
            var state = {};
            state.options = Object.assign({}, this.options);
            return state;
        }
    }, {
        key: "setState",
        value: function setState(state) {
            this.setOptions(state.options);
        }
    }, {
        key: "getOptionsAsNodeAttributes",
        value: function getOptionsAsNodeAttributes() {
            var attr = this.options;
            attr.__proto__ = SVGNodeAttributes.prototype;
            return attr;
        }
    }, {
        key: "getNodeAttributes",
        value: function getNodeAttributes() {
            var returnCopy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            if (returnCopy) {
                return new SVGNodeAttributes(this.options);
            } else {
                return this.getOptionsAsNodeAttributes();
            }
        }
    }, {
        key: "translate",
        value: function translate() {
            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            this.options.translate = "translate(" + x + "," + y + ")";
        }
    }, {
        key: "getHashCode",
        value: function getHashCode() {
            return uniqueId(this);
        }

        //TODO(@all) : getBoundingClientRect is unreliable, reimplement it.

    }, {
        key: "getBoundingClientRect",
        value: function getBoundingClientRect() {
            var element = this.node;
            var x = 0;
            var y = 0;
            while (element && element !== document.body) {
                x -= element.scrollLeft;
                y -= element.scrollTop;
                element = element.offsetParent || element.parentNode;
            }
            if (element) {
                x -= element.scrollLeft;
                y -= element.scrollTop;
            }
            var pos = this.node.getBoundingClientRect();
            return {
                top: pos.top - y,
                left: pos.left - x,
                width: pos.width,
                bottom: pos.bottom - y,
                height: pos.height,
                right: pos.right - x
            };
        }
    }, {
        key: "getBBox",
        value: function getBBox() {
            return this.node.getBBox();
        }
    }, {
        key: "getHeight",
        value: function getHeight() {
            return this.getBoundingClientRect().height;
        }
    }, {
        key: "getWidth",
        value: function getWidth() {
            return this.getBoundingClientRect().width;
        }
    }, {
        key: "toFront",
        value: function toFront() {}
    }, {
        key: "toBack",
        value: function toBack() {}
    }, {
        key: "setOpacity",
        value: function setOpacity(newOpacity) {
            this.options.opacity = newOpacity;
            if (this.node) {
                this.node.setAttribute("opacity", newOpacity);
            }
        }
    }, {
        key: "setColor",
        value: function setColor(color) {
            this.options.color = color;
            if (this.node) {
                this.node.setAttribute("stroke", color);
                this.node.setAttribute("fill", color);
            }
        }
    }, {
        key: "remove",
        value: function remove() {}
    }, {
        key: "getSvg",
        value: function getSvg() {
            return this.parent.getSvg();
        }
    }, {
        key: "getSnap",
        value: function getSnap() {
            if (!this.hasOwnProperty("_snap")) {
                this._snap = this.createSnap();
                this._snap.node.remove();
                this._snap.node = this.node;
            }
            return this._snap;
        }
    }]);
    return SVGElement;
}(UI.Element);

SVG.Element.domAttributesMap = CreateNodeAttributesMap(UI.Element.domAttributesMap, [["fill"], ["height"], ["opacity"], ["stroke"], ["strokeWidth", { domName: "stroke-width" }], ["clipPath", { domName: "clip-path" }], ["transform"], ["width"], ["cx"], ["cy"], ["rx"], ["ry"], ["x"], ["y"], ["x1"], ["y1"], ["x2"], ["y2"], ["offset"], ["stopColor", { domName: "stop-color" }], ["strokeDasharray", { domName: "stroke-dasharray" }], ["strokeLinecap", { domName: "stroke-linecap" }]]);

SVG.Text = function (_SVG$Element) {
    inherits(SVGText, _SVG$Element);

    function SVGText() {
        classCallCheck(this, SVGText);
        return possibleConstructorReturn(this, (SVGText.__proto__ || Object.getPrototypeOf(SVGText)).apply(this, arguments));
    }

    createClass(SVGText, [{
        key: "getNodeType",
        value: function getNodeType() {
            return "text";
        }
    }, {
        key: "getDefaultOptions",
        value: function getDefaultOptions() {
            return {
                text: "",
                fontSize: "15px",
                color: "black",
                dy: "0.35em",
                textAnchor: "middle",
                selectable: false
            };
        }
    }, {
        key: "extraNodeAttributes",
        value: function extraNodeAttributes(attr) {
            // TODO: For some reason, still selectable in mozilla...
            if (!this.options.selectable) {
                attr.setStyle("-webkit-user-select", "none");
                attr.setStyle("-khtml-user-select", "none");
                attr.setStyle("-moz-user-select", "none");
                attr.setStyle("-ms-user-select", "none");
                attr.setStyle("user-select", "none");
            }
        }
    }, {
        key: "render",
        value: function render() {
            return [UI.createElement(UI.TextElement, { ref: "textElement", value: this.options.text + "" })];
        }
    }, {
        key: "getX",
        value: function getX() {
            return this.options.x;
        }
    }, {
        key: "setX",
        value: function setX(x) {
            this.options.x = x;
            this.node.setAttribute("x", this.options.x);
        }
    }, {
        key: "getY",
        value: function getY() {
            return this.options.y;
        }
    }, {
        key: "setY",
        value: function setY(y) {
            this.options.y = y;
            this.node.setAttribute("y", this.options.y);
        }
    }, {
        key: "setText",
        value: function setText(text) {
            this.options.text = text;
            this.textElement.setValue(text + "");
        }
    }, {
        key: "getText",
        value: function getText() {
            return this.options.text;
        }
    }, {
        key: "setPosition",
        value: function setPosition(x, y) {
            this.setX(x);
            this.setY(y);
        }
    }, {
        key: "getColor",
        value: function getColor() {
            return this.options.color;
        }
    }, {
        key: "setColor",
        value: function setColor(color) {
            var fillOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            this.options.color = color;
            if (this.node) {
                this.node.setAttribute("fill", color);
                if (!fillOnly) {
                    this.node.setAttribute("stroke", color);
                }
            }
        }
    }]);
    return SVGText;
}(SVG.Element);

SVG.Text.domAttributesMap = CreateNodeAttributesMap(SVG.Element.domAttributesMap, [["dx"], ["dy"], ["fontFamily", { domName: "font-family" }], ["fontSize", { domName: "font-size" }], ["textAnchor", { domName: "text-anchor" }]]);

// TODO: this whole file is mosly here to not break compatibility with pre-Stem code, need refactoring
var EPS = 1e-6;

// Check if a value is equal to zero. Use epsilon check.
var isZero = function isZero(val) {
    var epsilon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EPS;

    return Math.abs(val) < epsilon;
};

// Simulate C/C++ rand() function


var equal = function equal(val1, val2) {
    var epsilon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EPS;

    return isZero(val1 - val2, epsilon);
};



// Compute square of a number


// Compute the distance between 2 points












// Compute angle between 2 points in grad


// Transform gradian in radian


// Transform radian in gradian


// Compute angle between 2 points in rad


// TODO: lots of these should be methods of the point class, not global functions
var crossProduct = function crossProduct(p1, p2, p0) {
    p0 = p0 || { x: 0, y: 0 };
    return (p1.x - p0.x) * (p2.y - p0.y) - (p1.y - p0.y) * (p2.x - p0.x);
};







var polarToCartesian = function polarToCartesian(angle, radius, orig) {
    orig = orig || { x: 0, y: 0 };
    return {
        x: radius * Math.cos(angle) + orig.x,
        y: radius * Math.sin(angle) + orig.y
    };
};

SVG.SVGRoot = function (_SVG$Element) {
    inherits(SVGRoot, _SVG$Element);

    function SVGRoot() {
        classCallCheck(this, SVGRoot);
        return possibleConstructorReturn(this, (SVGRoot.__proto__ || Object.getPrototypeOf(SVGRoot)).apply(this, arguments));
    }

    createClass(SVGRoot, [{
        key: "getNodeType",
        value: function getNodeType() {
            return "svg";
        }
    }, {
        key: "getSnap",
        value: function getSnap() {
            return Snap(this.node);
        }
    }, {
        key: "getSvg",
        value: function getSvg() {
            return this;
        }
    }]);
    return SVGRoot;
}(SVG.Element);

SVG.RawSVG = function (_SVG$SVGRoot) {
    inherits(RawSVG, _SVG$SVGRoot);

    function RawSVG() {
        classCallCheck(this, RawSVG);
        return possibleConstructorReturn(this, (RawSVG.__proto__ || Object.getPrototypeOf(RawSVG)).apply(this, arguments));
    }

    createClass(RawSVG, [{
        key: "redraw",
        value: function redraw() {
            get(RawSVG.prototype.__proto__ || Object.getPrototypeOf(RawSVG.prototype), "redraw", this).call(this);
            this.node.innerHTML = this.options.innerHTML;
        }
    }]);
    return RawSVG;
}(SVG.SVGRoot);

SVG.Group = function (_SVG$Element2) {
    inherits(SVGGroup, _SVG$Element2);

    function SVGGroup() {
        classCallCheck(this, SVGGroup);
        return possibleConstructorReturn(this, (SVGGroup.__proto__ || Object.getPrototypeOf(SVGGroup)).apply(this, arguments));
    }

    createClass(SVGGroup, [{
        key: "getNodeType",
        value: function getNodeType() {
            return "g";
        }
    }, {
        key: "setColor",
        value: function setColor(color) {
            for (var i = 0; i < this.children.length; i += 1) {
                this.children[i].setColor(color);
            }
        }
    }]);
    return SVGGroup;
}(SVG.Element);

SVG.Defs = function (_SVG$Element3) {
    inherits(SVGDefs, _SVG$Element3);

    function SVGDefs() {
        classCallCheck(this, SVGDefs);
        return possibleConstructorReturn(this, (SVGDefs.__proto__ || Object.getPrototypeOf(SVGDefs)).apply(this, arguments));
    }

    createClass(SVGDefs, [{
        key: "getNodeType",
        value: function getNodeType() {
            return "defs";
        }
    }]);
    return SVGDefs;
}(SVG.Element);

SVG.ClipPath = function (_SVG$Element4) {
    inherits(ClipPath, _SVG$Element4);

    function ClipPath() {
        classCallCheck(this, ClipPath);
        return possibleConstructorReturn(this, (ClipPath.__proto__ || Object.getPrototypeOf(ClipPath)).apply(this, arguments));
    }

    createClass(ClipPath, [{
        key: "getNodeType",
        value: function getNodeType() {
            return "clipPath";
        }
    }]);
    return ClipPath;
}(SVG.Element);

SVG.Path = function (_SVG$Element5) {
    inherits(SVGPath, _SVG$Element5);

    function SVGPath() {
        classCallCheck(this, SVGPath);
        return possibleConstructorReturn(this, (SVGPath.__proto__ || Object.getPrototypeOf(SVGPath)).apply(this, arguments));
    }

    createClass(SVGPath, [{
        key: "getNodeType",
        value: function getNodeType() {
            return "path";
        }
    }, {
        key: "getDefaultOptions",
        value: function getDefaultOptions() {
            return {
                d: ""
            };
        }
    }, {
        key: "getNodeAttributes",
        value: function getNodeAttributes() {
            var attr = get(SVGPath.prototype.__proto__ || Object.getPrototypeOf(SVGPath.prototype), "getNodeAttributes", this).call(this);
            attr.setAttribute("d", this.getPath());
            return attr;
        }
    }, {
        key: "createSnap",
        value: function createSnap() {
            return this.getSvg().getSnap().path();
        }
    }, {
        key: "getPath",
        value: function getPath() {
            return this.options.d;
        }
    }, {
        key: "setPath",
        value: function setPath(newPath) {
            this.options.d = newPath;
            this.node.setAttribute("d", this.options.d);
        }
    }, {
        key: "getLength",
        value: function getLength() {
            return this.node.getTotalLength();
        }
    }, {
        key: "getPointAtLength",
        value: function getPointAtLength(len) {
            return this.node.getPointAtLength(len);
        }
    }]);
    return SVGPath;
}(SVG.Element);

SVG.Circle = function (_SVG$Element6) {
    inherits(SVGCircle, _SVG$Element6);

    function SVGCircle() {
        classCallCheck(this, SVGCircle);
        return possibleConstructorReturn(this, (SVGCircle.__proto__ || Object.getPrototypeOf(SVGCircle)).apply(this, arguments));
    }

    createClass(SVGCircle, [{
        key: "getNodeType",
        value: function getNodeType() {
            return "circle";
        }
    }, {
        key: "getDefaultOptions",
        value: function getDefaultOptions() {
            return {
                radius: 0,
                center: { x: 0, y: 0 }
            };
        }
    }, {
        key: "getNodeAttributes",
        value: function getNodeAttributes() {
            var attr = get(SVGCircle.prototype.__proto__ || Object.getPrototypeOf(SVGCircle.prototype), "getNodeAttributes", this).call(this);
            attr.setAttribute("r", this.options.radius);
            attr.setAttribute("cx", this.options.center.x);
            attr.setAttribute("cy", this.options.center.y);
            return attr;
        }
    }, {
        key: "getRadius",
        value: function getRadius() {
            return this.options.radius;
        }
    }, {
        key: "setRadius",
        value: function setRadius(radius) {
            this.options.radius = radius;

            this.setAttribute("r", radius);
        }
    }, {
        key: "setCenter",
        value: function setCenter(x, y) {
            this.options.center.x = x;
            this.options.center.y = y;

            this.setAttribute("cx", x);
            this.setAttribute("cy", y);
        }
    }, {
        key: "getCenter",
        value: function getCenter() {
            return this.options.center;
        }
    }, {
        key: "toPath",
        value: function toPath() {
            var r = this.options.radius;
            var cx = this.options.center.x;
            var cy = this.options.center.y;
            var pathString = "M" + (cx - r) + " " + cy + // Starting point is W
            "a" + r + " " + r + " 0 0 1 " + r + " " + -r + // Move to N
            "a" + r + " " + r + " 0 0 1 " + r + " " + r + // Move to E
            "a" + r + " " + r + " 0 0 1 " + -r + " " + r + // Move to S
            "a" + r + " " + r + " 0 0 1 " + -r + " " + -r; // Finally, move back to W
            return new SVG.Path({ d: pathString });
        }
    }]);
    return SVGCircle;
}(SVG.Element);

//TODO Complete this class
SVG.Ellipse = function (_SVG$Element7) {
    inherits(SVGEllipse, _SVG$Element7);

    function SVGEllipse() {
        classCallCheck(this, SVGEllipse);
        return possibleConstructorReturn(this, (SVGEllipse.__proto__ || Object.getPrototypeOf(SVGEllipse)).apply(this, arguments));
    }

    createClass(SVGEllipse, [{
        key: "getNodeType",
        value: function getNodeType() {
            return "ellipse";
        }
    }]);
    return SVGEllipse;
}(SVG.Element);

SVG.CircleArc = function (_SVG$Path) {
    inherits(SVGCircleArc, _SVG$Path);

    function SVGCircleArc() {
        classCallCheck(this, SVGCircleArc);
        return possibleConstructorReturn(this, (SVGCircleArc.__proto__ || Object.getPrototypeOf(SVGCircleArc)).apply(this, arguments));
    }

    createClass(SVGCircleArc, [{
        key: "getPath",
        value: function getPath() {
            var startAngle = this.options.startAngle;
            var endAngle = this.options.endAngle;
            var radius = this.options.radius;
            var center = this.options.center;

            var angleDiff = endAngle - startAngle + (endAngle < startAngle ? 2 * Math.PI : 0);
            var startPoint = polarToCartesian(startAngle, radius, center);
            var endPoint = polarToCartesian(endAngle, radius, center);
            var sweepFlag;
            var largeArcFlag;

            // Set largeArcFlag and sweepFlag
            if (angleDiff <= Math.PI) {
                largeArcFlag = 0;
                if (crossProduct(startPoint, endPoint, center) <= 0) {
                    sweepFlag = 0;
                } else {
                    sweepFlag = 1;
                }
            } else {
                largeArcFlag = 1;
                if (crossProduct(startPoint, endPoint, center) <= 0) {
                    sweepFlag = 1;
                } else {
                    sweepFlag = 0;
                }
            }

            return "M " + startPoint.x + " " + startPoint.y + " A " + radius + " " + radius + " 0 " + largeArcFlag + " " + sweepFlag + " " + endPoint.x + " " + endPoint.y;
        }
    }]);
    return SVGCircleArc;
}(SVG.Path);

SVG.Rect = function (_SVG$Element8) {
    inherits(SVGRect, _SVG$Element8);

    function SVGRect() {
        classCallCheck(this, SVGRect);
        return possibleConstructorReturn(this, (SVGRect.__proto__ || Object.getPrototypeOf(SVGRect)).apply(this, arguments));
    }

    createClass(SVGRect, [{
        key: "getNodeType",
        value: function getNodeType() {
            return "rect";
        }
    }, {
        key: "getX",
        value: function getX() {
            return this.options.x;
        }
    }, {
        key: "setX",
        value: function setX(x) {
            this.options.x = x;
            this.node.setAttribute("x", this.options.x);
        }
    }, {
        key: "getY",
        value: function getY() {
            return this.options.y;
        }
    }, {
        key: "setY",
        value: function setY(y) {
            this.options.y = y;
            this.node.setAttribute("y", this.options.y);
        }
    }, {
        key: "getWidth",
        value: function getWidth() {
            return this.options.width;
        }
    }, {
        key: "setWidth",
        value: function setWidth(width) {
            this.options.width = width;
            this.node.setAttribute("width", this.options.width);
        }
    }, {
        key: "getHeight",
        value: function getHeight() {
            return this.options.height;
        }
    }, {
        key: "setHeight",
        value: function setHeight(height) {
            this.options.height = height;
            this.node.setAttribute("height", this.options.height);
        }
    }]);
    return SVGRect;
}(SVG.Element);

SVG.Line = function (_SVG$Element9) {
    inherits(SVGLine, _SVG$Element9);

    function SVGLine() {
        classCallCheck(this, SVGLine);
        return possibleConstructorReturn(this, (SVGLine.__proto__ || Object.getPrototypeOf(SVGLine)).apply(this, arguments));
    }

    createClass(SVGLine, [{
        key: "getNodeType",
        value: function getNodeType() {
            return "line";
        }
    }, {
        key: "getDefaultOptions",
        value: function getDefaultOptions() {
            return {
                fill: "black",
                stroke: "black"
            };
        }

        //TODO(@all): Make the getters for x1, y1, x2, y2

    }, {
        key: "setLine",
        value: function setLine(x1, y1, x2, y2) {
            this.options.x1 = x1;
            this.options.y1 = y1;
            this.options.x2 = x2;
            this.options.y2 = y2;

            this.setAttribute("x1", x1);
            this.setAttribute("y1", y1);
            this.setAttribute("x2", x2);
            this.setAttribute("y2", y2);
        }
    }]);
    return SVGLine;
}(SVG.Element);

SVG.Polygon = function (_SVG$Path2) {
    inherits(Polygon, _SVG$Path2);

    function Polygon() {
        classCallCheck(this, Polygon);
        return possibleConstructorReturn(this, (Polygon.__proto__ || Object.getPrototypeOf(Polygon)).apply(this, arguments));
    }

    createClass(Polygon, [{
        key: "getDefaultOptions",
        value: function getDefaultOptions() {
            return {
                points: []
            };
        }
    }, {
        key: "getNodeAttributes",
        value: function getNodeAttributes() {
            var attr = get(Polygon.prototype.__proto__ || Object.getPrototypeOf(Polygon.prototype), "getNodeAttributes", this).call(this);
            attr.setAttribute("d", this.getPolygonPath());
            return attr;
        }
    }, {
        key: "getPolygonPath",
        value: function getPolygonPath() {
            var pathString = "";
            for (var i = 0; i < this.options.points.length; ++i) {
                if (i == 0) {
                    pathString += "M ";
                } else {
                    pathString += "L ";
                }
                pathString += this.options.points[i].x + " " + this.options.points[i].y + " ";
            }
            pathString += "Z";
            return pathString;
        }
    }, {
        key: "setPoints",
        value: function setPoints(points) {
            this.options.points = points;
            this.setPath(this.getPolygonPath());
        }
    }]);
    return Polygon;
}(SVG.Path);

var Transition = function () {
    function Transition(options) {
        classCallCheck(this, Transition);

        this.func = options.func;
        this.context = options.context;
        this.duration = options.duration || 0;
        this.startTime = options.startTime || 0;
        this.dependsOn = options.dependsOn || [];
        this.speedFactor = 1;
    }

    createClass(Transition, [{
        key: "toString",
        value: function toString() {
            return "{\n" + "   context: " + this.context + "\n" + "   duration: " + this.duration + "\n" + "   startTime: " + this.startTime + "\n" + "   dependsOn: " + this.dependsOn + "\n" + "   func: " + this.func.toString() + "\n" + "}\n";
        }
    }, {
        key: "hasDependencyOn",
        value: function hasDependencyOn(t) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.dependsOn[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var transition = _step.value;

                    if (transition === t) {
                        return true;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return false;
        }
    }, {
        key: "canAdvance",
        value: function canAdvance() {
            for (var i = 0; i < this.dependsOn.length; i += 1) {
                if (!this.dependsOn[i].isStopped()) {
                    return false;
                }
            }
            return true;
        }
    }, {
        key: "getFraction",
        value: function getFraction() {
            var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();

            return Math.min((now - this.startTime) / this.getLength(), 1);
        }
    }, {
        key: "start",
        value: function start() {
            var _this = this;

            var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();

            if (this.stopped) {
                delete this.stopped;
            }
            this.setStartTime(now);

            var functionWrapper = function functionWrapper() {
                if (_this.stopped) {
                    return;
                }
                if (!_this.pauseTime) {
                    _this.nextStep();
                }
                requestAnimationFrame(functionWrapper);
            };
            requestAnimationFrame(functionWrapper);
            return this;
        }
    }, {
        key: "getLength",
        value: function getLength() {
            return this.getEndTime() - this.startTime;
        }
    }, {
        key: "setStartTime",
        value: function setStartTime(time) {
            this.startTime = time;
            return this;
        }
    }, {
        key: "setSpeedFactor",
        value: function setSpeedFactor(speedFactor) {
            var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();

            var ratio = speedFactor / this.speedFactor;
            this.startTime = (this.startTime - now) / ratio + now;
            if (this.pauseTime) {
                this.pauseTime = (this.pauseTime - now) / ratio + now;
            }
            this.speedFactor = speedFactor;
            return this;
        }
    }, {
        key: "pause",
        value: function pause() {
            var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();

            if (!this.pauseTime) {
                this.pauseTime = now;
            }
            return this;
        }
    }, {
        key: "resume",
        value: function resume() {
            var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();

            if (this.pauseTime) {
                this.startTime += now - this.pauseTime;
                this.pauseTime = 0;
            }
            return this;
        }
    }, {
        key: "forceStart",
        value: function forceStart() {
            this.restart();
            this.func(0.0, this.context);
            return this;
        }
    }, {
        key: "forceFinish",
        value: function forceFinish() {
            this.func(1.0, this.context);
            this.stop();
            return this;
        }
    }, {
        key: "stop",
        value: function stop() {
            this.stopped = true;
        }
    }, {
        key: "restart",
        value: function restart() {
            delete this.stopped;
            return this;
        }
    }, {
        key: "isStopped",
        value: function isStopped() {
            return this.stopped === true;
        }
    }, {
        key: "nextStep",
        value: function nextStep() {
            var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();

            // Return if transition is stopped
            if (this.isStopped()) {
                return this;
            }
            this.lastT = this.getFraction(now);
            // Return if transitions not started yet
            if (this.lastT < 0) {
                return this;
            }
            // Call the animation function
            this.func(this.lastT, this.context);
            // Stop the animation if it's the last step
            if (this.lastT === 1) {
                this.stop();
            }
            return this;
        }
    }, {
        key: "getEndTime",
        value: function getEndTime() {
            return this.startTime + this.duration / this.speedFactor;
        }
    }]);
    return Transition;
}();

var Modifier = function (_Transition) {
    inherits(Modifier, _Transition);

    function Modifier(options) {
        classCallCheck(this, Modifier);

        var _this2 = possibleConstructorReturn(this, (Modifier.__proto__ || Object.getPrototypeOf(Modifier)).call(this, options));

        _this2.reverseFunc = options.reverseFunc;
        _this2.context = options.context;
        return _this2;
    }

    // WTF, so basically JSON.stringify??


    createClass(Modifier, [{
        key: "toString",
        value: function toString() {
            return "{\n" + "   context: " + this.context + "\n" + "   duration: " + this.duration + "\n" + "   startTime: " + this.startTime + "\n" + "   dependsOn: " + this.dependsOn + "\n" + "   func: " + this.func.toString() + "\n" + "   reverseFunc: " + this.reverseFunc.toString() + "\n" + "}\n";
        }
    }, {
        key: "forceStart",
        value: function forceStart() {
            this.restart();
            this.reverseFunc(this.context);
            return this;
        }
    }, {
        key: "forceFinish",
        value: function forceFinish() {
            this.func(this.context);
            this.stop();
            return this;
        }
    }, {
        key: "nextStep",
        value: function nextStep() {
            var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();

            if (this.isStopped()) {
                return this;
            }
            if (now >= this.startTime) {
                this.func(this.context);
                this.stop();
            }
            return this;
        }
    }, {
        key: "getEndTime",
        value: function getEndTime() {
            return this.startTime;
        }
    }]);
    return Modifier;
}(Transition);

var TransitionList = function () {
    function TransitionList() {
        var startTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        classCallCheck(this, TransitionList);

        this.startTime = startTime;
        this.speedFactor = 1;
        this.transitions = [];
        this.dependsOn = [];
    }

    createClass(TransitionList, [{
        key: "toString",
        value: function toString() {
            return "{\n" + "   context: " + this.context + "\n" + "   duration: " + this.duration + "\n" + "   startTime: " + this.startTime + "\n" + "   dependsOn: " + this.dependsOn + "\n" + "   transitions: [" + (this.transitions.length ? this.transitions[0].toString() : "") + " ...]\n" + "}\n";
        }
    }, {
        key: "add",
        value: function add(transition) {
            var forceFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            for (var i = 0; i < transition.dependsOn.length; i += 1) {
                if (transition.dependsOn[i].getEndTime() > transition.startTime) {
                    console.error(transition.toString() + "\ndepends on\n" + transition.dependsOn[i].toString() + "\n" + "which ends after its start!");
                }
            }
            if (forceFinish) {
                transition.forceFinish();
            }
            this.transitions.push(transition);
            return this;
        }
    }, {
        key: "push",
        value: function push(transition) {
            var forceFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            transition.setStartTime(this.getLength());
            for (var i = 0; i < transition.dependsOn.length; i += 1) {
                if (transition.dependsOn[i].getEndTime() > transition.startTime) {
                    console.error(transition.toString() + "\ndepends on\n" + transition.dependsOn[i].toString() + "\n" + "which ends after its start!");
                }
            }
            if (forceFinish) {
                transition.forceFinish();
            }
            this.transitions.push(transition);
            return this;
        }
    }, {
        key: "getFraction",
        value: function getFraction() {
            var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();

            return Math.min((now - this.startTime) / this.getLength(), 1);
        }
    }, {
        key: "setStartTime",
        value: function setStartTime(startTime) {
            var timeDelta = startTime - this.startTime;
            this.startTime = startTime;
            for (var i = 0; i < this.transitions.length; i += 1) {
                var transition = this.transitions[i];
                transition.setStartTime(transition.startTime + timeDelta);
            }
        }
    }, {
        key: "start",
        value: function start() {
            var _this3 = this;

            var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();

            if (this.stopped) {
                delete this.stopped;
            }
            this.setStartTime(now);
            var functionWrapper = function functionWrapper() {
                if (_this3.stopped) {
                    return;
                }
                if (!_this3.pauseTime) {
                    _this3.nextStep();
                }
                requestAnimationFrame(functionWrapper);
            };
            requestAnimationFrame(functionWrapper);
            return this;
        }
    }, {
        key: "stop",
        value: function stop() {
            this.stopped = true;
            for (var i = 0; i < this.transitions.length; i += 1) {
                var transition = this.transitions[i];
                transition.stop();
            }
        }
    }, {
        key: "isStopped",
        value: function isStopped() {
            return this.stopped === true;
        }
    }, {
        key: "pause",
        value: function pause() {
            var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();

            if (!this.pauseTime) {
                this.pauseTime = now;
                for (var i = 0; i < this.transitions.length; i += 1) {
                    this.transitions[i].pause(now);
                }
            }
            return this;
        }
    }, {
        key: "resume",
        value: function resume() {
            var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();

            if (this.pauseTime) {
                this.startTime += now - this.pauseTime;
                for (var i = 0; i < this.transitions.length; i += 1) {
                    this.transitions[i].resume(now);
                }
                this.pauseTime = 0;
            }
            return this;
        }
    }, {
        key: "nextStep",
        value: function nextStep() {
            // Return if transition list is stopped
            if (this.isStopped()) {
                return;
            }

            if (this.onNewFrame) {
                this.onNewFrame(this.getFraction());
            }

            var finished = true;
            var stk = [];
            for (var i = 0; i < this.transitions.length; i += 1) {
                var transition = this.transitions[i];
                if (!transition.isStopped()) {
                    if (transition.canAdvance()) {
                        transition.nextStep();
                        while (stk.length !== 0 && this.transitions[stk[stk.length - 1]].canAdvance()) {
                            this.transitions[stk[stk.length - 1]].nextStep();
                            stk.pop();
                        }
                    } else {
                        stk.push(i);
                    }
                    finished = false;
                }
            }
            if (finished) {
                this.stop();
            }
            return this;
        }
    }, {
        key: "setSpeedFactor",
        value: function setSpeedFactor(speedFactor) {
            var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();

            var ratio = speedFactor / this.speedFactor;
            this.startTime = (this.startTime - now) / ratio + now;
            if (this.pauseTime) {
                this.pauseTime = (this.pauseTime - now) / ratio + now;
            }
            this.speedFactor = speedFactor;
            for (var i = 0; i < this.transitions.length; i += 1) {
                this.transitions[i].setSpeedFactor(speedFactor, now);
            }
            return this;
        }
    }, {
        key: "restart",
        value: function restart() {
            delete this.stopped;
            for (var i = 0; i < this.transitions.length; i += 1) {
                var transition = this.transitions[i];
                transition.restart();
            }
            this.sortByEndTime();
            return this;
        }
    }, {
        key: "getLength",
        value: function getLength() {
            return this.getEndTime() - this.startTime;
        }
    }, {
        key: "getEndTime",
        value: function getEndTime() {
            var endTime = 0;
            for (var i = 0; i < this.transitions.length; i += 1) {
                var transitionEndTime = this.transitions[i].getEndTime();
                if (transitionEndTime > endTime) {
                    endTime = transitionEndTime;
                }
            }
            return endTime;
        }
    }, {
        key: "hasDependencyOn",
        value: function hasDependencyOn(t) {
            for (var transition in this.dependsOn) {
                if (transition === t) {
                    return true;
                }
            }
            return false;
        }
    }, {
        key: "canAdvance",
        value: function canAdvance() {
            for (var i = 0; i < this.dependsOn.length; i += 1) {
                if (!this.dependsOn[i].isStopped()) {
                    return false;
                }
            }
            return true;
        }
    }, {
        key: "sortByStartTime",
        value: function sortByStartTime() {
            // TODO: this comparator should be global
            this.transitions.sort(function (a, b) {
                if (!equal(a.startTime, b.startTime, 0.001)) {
                    return b.startTime - a.startTime;
                }
                //not a hack, works in all conflict cases
                if (!equal(a.getEndTime(), b.getEndTime(), 0.001)) {
                    return b.getEndTime() - a.getEndTime();
                }
                if (a.hasDependencyOn(b)) {
                    return 1;
                }
                if (b.hasDependencyOn(a)) {
                    return -1;
                }
                return 0;
            });
        }
    }, {
        key: "sortByEndTime",
        value: function sortByEndTime() {
            this.transitions.sort(function (a, b) {
                if (!equal(a.getEndTime(), b.getEndTime(), 0.001)) {
                    return a.getEndTime() - b.getEndTime();
                }
                //not a hack, works in all conflict cases
                if (!equal(a.startTime, b.startTime, 0.001)) {
                    return a.startTime - b.startTime;
                }
                if (a.hasDependencyOn(b)) {
                    return -1;
                }
                if (b.hasDependencyOn(a)) {
                    return 1;
                }
                return 0;
            });
        }
    }, {
        key: "forceStart",
        value: function forceStart() {
            var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();

            this.sortByStartTime();
            for (var i = 0; i < this.transitions.length; i += 1) {
                var transition = this.transitions[i];
                if (transition.startTime <= now) {
                    transition.forceStart(now);
                }
            }
            return this;
        }
    }, {
        key: "forceFinish",
        value: function forceFinish() {
            var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();
            var startTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

            this.sortByEndTime();
            for (var i = 0; i < this.transitions.length; i += 1) {
                var transition = this.transitions[i];
                if (transition.getEndTime() >= startTime) {
                    if (transition instanceof TransitionList) {
                        transition.forceFinish(now, startTime);
                    } else {
                        if (typeof now === "undefined" || transition.getEndTime() < now) {
                            transition.forceFinish();
                        }
                    }
                }
            }
            return this;
        }
    }, {
        key: "startAtPercent",
        value: function startAtPercent(startPercent) {
            var _this4 = this;

            var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();

            cancelAnimationFrame(this.animationFrameId);
            this.restart();
            // TODO(@wefgef): Buggy
            var paused = this.pauseTime;
            if (paused) {
                this.resume();
            }
            this.forceStart(now);
            this.setStartTime(now - startPercent * this.getLength());
            this.forceFinish(now);
            // TODO(@wefgef): Huge hack to deal with force transition
            this.nextStep();
            this.nextStep();
            if (paused) {
                this.pause();
            }

            var functionWrapper = function functionWrapper() {
                if (_this4.isStopped()) {
                    return;
                }
                if (!_this4.pauseTime) {
                    _this4.nextStep();
                }
                _this4.animationFrameId = requestAnimationFrame(functionWrapper);
            };
            this.animationFrameId = requestAnimationFrame(functionWrapper);
        }
    }]);
    return TransitionList;
}();

var COLORS_BY_NAME = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};

/*
 * This class contains methods for operating with colors. Its objects are kept in hsva format with normalized
 * attributes (each attribute has value between 0 and 1 inclusive), and can be converted from/to rgba.
 */

var Color = function () {
    function Color(color) {
        classCallCheck(this, Color);

        if (color) {
            this.setColor(color);
        }
    }

    createClass(Color, [{
        key: "setColor",
        value: function setColor(color) {
            this.color = this.constructor.parseColor(color);
        }
    }, {
        key: "getColor",
        value: function getColor() {
            var rgba = this.getRgba();
            return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + rgba[3] + ")";
        }

        /*
         * @param color A color string of the types: native name, hex3, hex6, rgb, rgba, hsl, hsla
         *              or a Color object, or a hsla color array
         */

    }], [{
        key: "parseColor",
        value: function parseColor(color) {
            if (color instanceof Color) {
                return color.color;
            } else if (color instanceof Array) {
                // Add the alpha parameter at the end
                if (color.length === 3) {
                    color.push(1);
                }
                return color;
            }

            color = color.trim().toLowerCase();

            // Check if color is given by name
            if (COLORS_BY_NAME.hasOwnProperty(color)) {
                color = COLORS_BY_NAME[color];
            }

            var values = [];

            // Check for hex3 (e.g. "#f00")
            var hex3 = color.match(/^#([0-9a-f]{3})$/i);
            if (hex3) {
                values = [parseInt(hex3[1].charAt(0), 16) * 0x11, parseInt(hex3[1].charAt(1), 16) * 0x11, parseInt(hex3[1].charAt(2), 16) * 0x11, 1];
            }

            // Check for hex6 (e.g. "#ff0000")
            var hex6 = color.match(/^#([0-9a-f]{6})$/i);
            if (hex6) {
                values = [parseInt(hex6[1].substr(0, 2), 16), parseInt(hex6[1].substr(2, 2), 16), parseInt(hex6[1].substr(4, 2), 16), 1];
            }

            // Check for rgba (e.g. "rgba(255, 0, 0, 0.5)")
            var rgba = color.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+.*\d*)\s*\)$/i);
            if (rgba) {
                values = [parseInt(rgba[1]), parseInt(rgba[2]), parseInt(rgba[3]), parseFloat(rgba[4])];
            }

            // Check for rgb (e.g. "rgb(255, 0, 0)")
            var rgb = color.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
            if (rgb) {
                values = [parseInt(rgb[1]), parseInt(rgb[2]), parseInt(rgb[3]), 1];
            }
            /*
                    // Check for hsl (e.g. "hsl(360, 100%, 50%)"
                    let hsl = color.match(/^hsl\s*\(\s*(\d+)\s*,\s*(\d+)\s*%\s*,\s*(\d+)\s*%\s*\)$/i);
                    if (hsl) {
                        values = this.constructor.hslaToRgba(...hsl.slice(1));
                    }
            
                    // Check for hsla (e.g. "hsla(360, 100%, 50%, 0.5)"
                    let hsla = color.match(/^hsla\s*\(\s*(\d+)\s*,\s*(\d+)\s*%\s*,\s*(\d+)\s*%\s*,\s*(\d+.*\d*)\s*\)$/i);
                    if (hsla) {
                        values = this.constructor.hslaToRgba(...hsla.slice(1));
                    }
            */
            return values;
        }
        /*
            static hsvaToRgba(h, s, v, a = 1) {
                let r, g, b, i, f, p, q, t;
                i = Math.floor(h * 6);
                f = h * 6 - i;
                p = v * (1 - s);
                q = v * (1 - f * s);
                t = v * (1 - (1 - f) * s);
                switch (i % 6) {
                    case 0: r = v, g = t, b = p; break;
                    case 1: r = q, g = v, b = p; break;
                    case 2: r = p, g = v, b = t; break;
                    case 3: r = p, g = q, b = v; break;
                    case 4: r = t, g = p, b = v; break;
                    case 5: r = v, g = p, b = q; break;
                }
                return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), a];
            }
        
            static rgbaToHsva(r, g, b, a = 1) {
                let max = Math.max(r, g, b);
                let min = Math.min(r, g, b);
                let diff = max - min;
                let s = (max === 0 ? 0 : diff / max);
                let v = max / 255;
                let h;
        
                switch (max) {
                    case min: h = 0; break;
                    case r: h = (g - b) + diff * (g < b ? 6: 0); h /= 6 * diff; break;
                    case g: h = (b - r) + diff * 2; h /= 6 * diff; break;
                    case b: h = (r - g) + diff * 4; h /= 6 * diff; break;
                }
        
                return [h, s, v, a];
            }
        
            static hslaToRgba(h, s, l, a = 1) {
                h /= 360; s /= 100; l /= 100;
        
                let r, g, b;
        
                if(s == 0){
                    r = g = b = l; // achromatic
                }else{
                    let hueToRgb = (p, q, t) => {
                        if(t < 0) {
                            t += 1;
                        } else if(t > 1) {
                            t -= 1;
                        }
        
                        if (t < 1/6) {
                            return p + (q - p) * 6 * t;
                        } else if (t < 1/2) {
                            return q;
                        } else if (t < 2/3) {
                            return p + (q - p) * (2/3 - t) * 6;
                        } else {
                            return p;
                        }
                    };
        
                    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                    let p = 2 * l - q;
                    r = hueToRgb(p, q, h + 1/3);
                    g = hueToRgb(p, q, h);
                    b = hueToRgb(p, q, h - 1/3);
                }
        
                return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), a];
            }
        
            static rgbaToHsla(r, g, b, a = 1) {
                r /= 255, g /= 255, b /= 255;
        
                let max = Math.max(r, g, b);
                let min = Math.min(r, g, b);
                let h, s, l = (max + min) / 2;
        
                if (max == min) {
                    h = s = 0; // achromatic
                } else {
                    let d = max - min;
                    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                    switch (max) {
                        case r:
                            h = (g - b) / d + (g < b ? 6 : 0); break;
                        case g:
                            h = (b - r) / d + 2; break;
                        case b:
                            h = (r - g) / d + 4; break;
                    }
                    h /= 6;
                }
        
                return [h, s, l, a];
            }
        */

        // TODO: this should be implemented as a factory that generates an interpolator object, that just takes in a t

    }, {
        key: "interpolate",
        value: function interpolate(firstColor, secondColor) {
            var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;

            var firstColorArray = Color.parseColor(firstColor);
            var secondColorArray = Color.parseColor(secondColor);

            return Color.convertToRgba([parseInt(firstColorArray[0] * (1 - t) + secondColorArray[0] * t), parseInt(firstColorArray[1] * (1 - t) + secondColorArray[1] * t), parseInt(firstColorArray[2] * (1 - t) + secondColorArray[2] * t), parseInt(firstColorArray[3] * (1 - t) + secondColorArray[3] * t)]);
        }
    }, {
        key: "convertToRgba",
        value: function convertToRgba(rgba) {
            return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + rgba[3] + ")";
        }
    }, {
        key: "isLight",
        value: function isLight(color) {
            var values = Color.parseColor(color);
            return values[0] * 0.3 + values[1] * 0.59 + values[2] * 0.11 > 188;
        }

        /*
            setRgba(value, index = -1) {
                if (index !== -1) {
                    let rgba = this.getRgba();
                    rgba[index] = value;
                    this.color = rgba;
                } else {
                    this.color = Color.rgbaToHsva(...value);
                }
            }
        
            getRgba() {
                return Color.hsvaToRgba(this.color);
            }
        
            addRgba(amount, index = -1) {
                let rgba = Color.hsvaToRgba(this.color);
                let setInRange = (rgba) => {
                    for (let i = 0; i < 3; i += 1) {
                        if (rgba[i] > 255) {
                            rgba[i] = 255;
                        } else if (rgba[i] < 0) {
                            rgba[i] = 0;
                        }
                    }
                    if (rgba[3] > 1) {
                        rgba[3] = 1;
                    } else if (rgba[3] < 0){
                        rgba[3] = 0;
                    }
                };
                if (index !== -1) {
                    rgba[index] += amount;
                } else {
                    if (amount.length === 3) {
                        amount.push(0);
                    }
                    for (let i  = 0; i < 4; i += 1) {
                        rgba[i] += amount[i];
                    }
                }
                setInRange(rgba);
                this.setRgba(rgba);
            }
        
            setHsva(value, index = -1) {
                if (index !== -1) {
                    this.color[index] = value;
                } else {
                    this.color = value;
                }
            }
        
            getHsva() {
                return this.color;
            }
        
            addHsva(amount, index = -1) {
                let hsva = this.color;
                let setInrange = (hsva) => {
                    if (hsva[0] > 1) {
                        hsva[0] -= 1;
                    } else if (hsva[0] < 0) {
                        hsva[0] += 1;
                    }
                    for (let i = 1; i < 4; i += 1) {
                        if (hsva[i] > 1) {
                            hsva[i] = 1;
                        } else if (hsva[i] < 0) {
                            hsva[i] = 0;
                        }
                    }
                };
                if (index !== -1) {
                    hsva[index] += amount
                }
                if (hsva.length === 3) {
                    hsva.push(1);
                }
                if (amount.length === 3) {
                    amount.push(0);
                }
                hsva[0] += amount[0];
                if (hsva[0] > 1) {
                    hsva[0] -= 1;
                } else if (hsva[0] < 0) {
                    hsva[0] += 1;
                }
                for (let i = 1; i < 4; i += 1) {
                    hsva[i] += amount[i];
                    if (hsva[i] < 0) {
                        hsva[i] = 0;
                    } else if (hsva[i] > 1) {
                        hsva[i] = 1;
                    }
                }
                this.color = hsva;
            }
        */

    }]);
    return Color;
}();

function lighten(color, amount) {
    if (amount >= 0) {
        return Color.interpolate(color, "#fff", amount);
    } else {
        return darken(color, -amount);
    }
}

function darken(color, amount) {
    if (amount >= 0) {
        var rgba = Color.parseColor(Color.interpolate(color, "#000", amount));
        for (var i = 0; i < 3; i += 1) {
            var root = Math.pow(255 - rgba[i], 0.7);
            rgba[i] = parseInt(rgba[i] - root * amount);
            if (rgba[i] < 0) {
                rgba[i] = 0;
            }
        }
        return Color.convertToRgba(rgba);
    } else {
        return lighten(color, -amount);
    }
}

function buildColors(color) {
    var colors = [];
    var darkenPercents = void 0;
    if (Color.isLight(color)) {
        darkenPercents = [0, 0.05, 0.1, 0.15, 0.3, 0.8];
    } else {
        darkenPercents = [0, 0.1, 0.2, 0.23, 0.1, -1];
    }
    for (var i = 0; i < darkenPercents.length; i += 1) {
        colors.push(darken(color, darkenPercents[i]));
    }
    return colors;
}

SVG.AnimatedSVG = function (_SVG$SVGRoot) {
    inherits(AnimatedSVG, _SVG$SVGRoot);

    function AnimatedSVG() {
        classCallCheck(this, AnimatedSVG);
        return possibleConstructorReturn(this, (AnimatedSVG.__proto__ || Object.getPrototypeOf(AnimatedSVG)).apply(this, arguments));
    }

    createClass(AnimatedSVG, [{
        key: "onMount",
        value: function onMount() {
            var _this2 = this;

            if (this.options.transition) {
                (function () {
                    _this2.options.transition.setStartTime(Date.now());
                    var animationWrapper = function animationWrapper() {
                        if (_this2.options.transition.isStopped()) {
                            if (_this2.options.repeat) {
                                _this2.options.transition.setStartTime(Date.now());
                                _this2.options.transition.restart();
                                requestAnimationFrame(animationWrapper);
                            }
                            return;
                        }
                        if (!_this2.options.transition.pauseTime) {
                            _this2.options.transition.nextStep();
                        }
                        requestAnimationFrame(animationWrapper);
                    };
                    requestAnimationFrame(animationWrapper);
                })();
            }
        }
    }]);
    return AnimatedSVG;
}(SVG.SVGRoot);

SVG.Element.prototype.blinkTransition = function (options) {
    var _this3 = this;

    var config = {
        duration: 2000,
        times: 2,
        firstColor: "grey",
        secondColor: "black",
        executeLastStep: true,
        startTime: 0,
        dependsOn: []
    };
    Object.assign(config, options);
    return new Transition({
        func: function func(t, context) {
            if (t > 1 - context.interval && !context.executeLastStep) {
                _this3.setColor(context.firstColor);
            } else {
                _this3.setColor(Math.floor((1 - t) / context.interval) % 2 === 1 ? context.firstColor : context.secondColor);
            }
        },
        context: {
            firstColor: config.firstColor,
            secondColor: config.secondColor,
            interval: 1 / (2 * config.times),
            executeLastStep: config.executeLastStep
        },
        duration: config.duration,
        startTime: config.startTime,
        dependsOn: config.dependsOn
    });
};
SVG.Element.prototype.changeOpacityTransition = function (opacity, duration) {
    var _this4 = this;

    var dependsOn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var startTime = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    if (!this.options.hasOwnProperty("opacity")) {
        this.options.opacity = 1;
    }
    return new Transition({
        func: function func(t, context) {
            _this4.setOpacity((1 - t) * context.opacity + t * opacity);
        },
        context: {
            opacity: this.options.opacity
        },
        duration: duration,
        startTime: startTime,
        dependsOn: dependsOn
    });
};
SVG.Element.prototype.changeColorTransition = function (color, duration) {
    var _this5 = this;

    var dependsOn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var startTime = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    return new Transition({
        func: function func(t, context) {
            _this5.setColor(Color.interpolate(context.color, color, t));
        },
        context: {
            color: this.getColor()
        },
        duration: duration,
        startTime: startTime,
        dependsOn: dependsOn
    });
};

SVG.Text.prototype.moveTransition = function (coords, duration) {
    var _this6 = this;

    var dependsOn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var startTime = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    return new Transition({
        func: function func(t, context) {
            _this6.setPosition((1 - t) * context.x + t * coords.x, (1 - t) * context.y + t * coords.y);
        },
        context: {
            x: this.options.x,
            y: this.options.y
        },
        duration: duration,
        startTime: startTime,
        dependsOn: dependsOn
    });
};
SVG.Text.prototype.changeFillTransition = function (color, duration) {
    var _this7 = this;

    var dependsOn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var startTime = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    return new Transition({
        func: function func(t, context) {
            _this7.setColor(Color.interpolate(context.color, color, t), true);
        },
        context: {
            color: this.getColor()
        },
        duration: duration,
        startTime: startTime,
        dependsOn: dependsOn
    });
};

var _class$2;
var _descriptor$2;
var _descriptor2$1;
var _class3$1;
var _descriptor3$1;
var _class5;
var _descriptor4;
var _descriptor5;
var _descriptor6;
var _descriptor7;
var _descriptor8;
var _descriptor9;
var _descriptor10;
var _descriptor11;
var _descriptor12;
var _descriptor13;
var _descriptor14;
var _descriptor15;
var _descriptor16;
var _descriptor17;

function _initDefineProp$3(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _applyDecoratedDescriptor$3(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var GlobalStyle = {};

var COLOR = {
    PLAIN: "#ffffff",
    PRIMARY: "#337ab7",
    SUCCESS: "#5cb85c",
    INFO: "#5bc0de",
    WARNING: "#f0ad4e",
    DANGER: "#d9534f",
    GOOGLE: "#de4b39", // TODO: WTF Denis?
    FACEBOOK: "#3b5998"
};

var ButtonGroupStyle = (_class$2 = function (_StyleSet) {
    inherits(ButtonGroupStyle, _StyleSet);

    function ButtonGroupStyle() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, ButtonGroupStyle);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ButtonGroupStyle.__proto__ || Object.getPrototypeOf(ButtonGroupStyle)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp$3(_this, "HORIZONTAL", _descriptor$2, _this), _initDefineProp$3(_this, "VERTICAL", _descriptor2$1, _this), _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(ButtonGroupStyle, [{
        key: "Orientation",
        value: function Orientation(orientation) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = Object.keys(UI.Orientation)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var type = _step.value;

                    if (orientation == UI.Orientation[type]) {
                        return this[type];
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }]);
    return ButtonGroupStyle;
}(StyleSet), (_descriptor$2 = _applyDecoratedDescriptor$3(_class$2.prototype, "HORIZONTAL", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {
            ">*": {
                "margin-left": "5px",
                "display": "inline-block"
            },
            ">:first-child": {
                "margin-left": "0px"
            }
        };
    }
}), _descriptor2$1 = _applyDecoratedDescriptor$3(_class$2.prototype, "VERTICAL", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {
            ">*": {
                "margin-bottom": "5px",
                "display": "block"
            },
            ">:first-child": {
                "margin-top": "0px"
            }
        };
    }
})), _class$2);


var RadioButtonGroupStyle = (_class3$1 = function (_StyleSet2) {
    inherits(RadioButtonGroupStyle, _StyleSet2);

    function RadioButtonGroupStyle() {
        var _ref2;

        var _temp2, _this2, _ret2;

        classCallCheck(this, RadioButtonGroupStyle);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this2 = possibleConstructorReturn(this, (_ref2 = RadioButtonGroupStyle.__proto__ || Object.getPrototypeOf(RadioButtonGroupStyle)).call.apply(_ref2, [this].concat(args))), _this2), _initDefineProp$3(_this2, "DEFAULT", _descriptor3$1, _this2), _temp2), possibleConstructorReturn(_this2, _ret2);
    }

    return RadioButtonGroupStyle;
}(StyleSet), (_descriptor3$1 = _applyDecoratedDescriptor$3(_class3$1.prototype, "DEFAULT", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {
            ">*": {
                borderRadius: "0"
            },
            ">:last-child": {
                borderTopRightRadius: "0.3em",
                borderBottomRightRadius: "0.3em"
            },
            ">:first-child": {
                borderTopLeftRadius: "0.3em",
                borderBottomLeftRadius: "0.3em"
            }
        };
    }
})), _class3$1);


var ButtonStyle = (_class5 = function (_StyleSet3) {
    inherits(ButtonStyle, _StyleSet3);

    function ButtonStyle() {
        var _ref3;

        var _temp3, _this3, _ret3;

        classCallCheck(this, ButtonStyle);

        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
        }

        return _ret3 = (_temp3 = (_this3 = possibleConstructorReturn(this, (_ref3 = ButtonStyle.__proto__ || Object.getPrototypeOf(ButtonStyle)).call.apply(_ref3, [this].concat(args))), _this3), _initDefineProp$3(_this3, "DEFAULT", _descriptor4, _this3), _initDefineProp$3(_this3, "EXTRA_SMALL", _descriptor5, _this3), _initDefineProp$3(_this3, "SMALL", _descriptor6, _this3), _initDefineProp$3(_this3, "MEDIUM", _descriptor7, _this3), _initDefineProp$3(_this3, "LARGE", _descriptor8, _this3), _initDefineProp$3(_this3, "EXTRA_LARGE", _descriptor9, _this3), _initDefineProp$3(_this3, "PLAIN", _descriptor10, _this3), _initDefineProp$3(_this3, "PRIMARY", _descriptor11, _this3), _initDefineProp$3(_this3, "SUCCESS", _descriptor12, _this3), _initDefineProp$3(_this3, "INFO", _descriptor13, _this3), _initDefineProp$3(_this3, "WARNING", _descriptor14, _this3), _initDefineProp$3(_this3, "DANGER", _descriptor15, _this3), _initDefineProp$3(_this3, "GOOGLE", _descriptor16, _this3), _initDefineProp$3(_this3, "FACEBOOK", _descriptor17, _this3), _temp3), possibleConstructorReturn(_this3, _ret3);
    }

    createClass(ButtonStyle, [{
        key: "computeButtonColorClass",
        value: function computeButtonColorClass(colors) {
            var darker1 = {
                backgroundColor: colors[1]
            };
            var darker2 = {
                backgroundColor: colors[2]
            };
            var darker3 = {
                backgroundColor: colors[3]
            };
            var regular = {
                backgroundColor: colors[0],
                borderColor: colors[4],
                color: colors[5]
            };
            return Object.assign({}, regular, {
                ":hover": darker1,
                ":hover:disabled": regular,
                ":focus": darker1,
                ":active": darker2,
                ":hover:active": darker3,
                ":focus:active": darker3,
                ".active": darker3
            });
        }
    }, {
        key: "Size",
        value: function Size(size) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = Object.keys(UI.Size)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var type = _step2.value;

                    if (size == UI.Size[type]) {
                        return this[type];
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }, {
        key: "Level",
        value: function Level(level) {
            if (this[level]) {
                return this[level];
            }
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = Object.keys(UI.Level)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var type = _step3.value;

                    if (level == UI.Level[type]) {
                        return this[type];
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    }]);
    return ButtonStyle;
}(StyleSet), (_descriptor4 = _applyDecoratedDescriptor$3(_class5.prototype, "DEFAULT", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return [{
            outline: "0",
            border: "0.1em solid transparent",
            padding: "0.4em 0.8em",
            borderRadius: "0.3em",
            textAlign: "center",
            whiteSpace: "nowrap",
            verticalAlign: "middle",
            lineHeight: 4 / 3 + "",
            marginBottom: "0",
            display: "inline-block",
            touchAction: "manipulation",
            userSelect: "none",
            ":disabled": {
                opacity: "0.7",
                cursor: "not-allowed"
            }
        }, {
            "font-size": "14px"
        }, this.computeButtonColorClass(buildColors(COLOR.PLAIN))];
    }
}), _descriptor5 = _applyDecoratedDescriptor$3(_class5.prototype, "EXTRA_SMALL", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {
            fontSize: "12px",
            padding: "0.2em 0.4em",
            borderWidth: "0.05em"
        };
    }
}), _descriptor6 = _applyDecoratedDescriptor$3(_class5.prototype, "SMALL", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {
            fontSize: "12px"
        };
    }
}), _descriptor7 = _applyDecoratedDescriptor$3(_class5.prototype, "MEDIUM", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {};
    }
}), _descriptor8 = _applyDecoratedDescriptor$3(_class5.prototype, "LARGE", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {
            fontSize: "17px"
        };
    }
}), _descriptor9 = _applyDecoratedDescriptor$3(_class5.prototype, "EXTRA_LARGE", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {
            fontSize: "21px",
            padding: "0.2em 0.4em"
        };
    }
}), _descriptor10 = _applyDecoratedDescriptor$3(_class5.prototype, "PLAIN", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {};
    }
}), _descriptor11 = _applyDecoratedDescriptor$3(_class5.prototype, "PRIMARY", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return this.computeButtonColorClass(buildColors(COLOR.PRIMARY));
    }
}), _descriptor12 = _applyDecoratedDescriptor$3(_class5.prototype, "SUCCESS", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return this.computeButtonColorClass(buildColors(COLOR.SUCCESS));
    }
}), _descriptor13 = _applyDecoratedDescriptor$3(_class5.prototype, "INFO", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return this.computeButtonColorClass(buildColors(COLOR.INFO));
    }
}), _descriptor14 = _applyDecoratedDescriptor$3(_class5.prototype, "WARNING", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return this.computeButtonColorClass(buildColors(COLOR.WARNING));
    }
}), _descriptor15 = _applyDecoratedDescriptor$3(_class5.prototype, "DANGER", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return this.computeButtonColorClass(buildColors(COLOR.DANGER));
    }
}), _descriptor16 = _applyDecoratedDescriptor$3(_class5.prototype, "GOOGLE", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return this.computeButtonColorClass(buildColors(COLOR.GOOGLE));
    }
}), _descriptor17 = _applyDecoratedDescriptor$3(_class5.prototype, "FACEBOOK", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return this.computeButtonColorClass(buildColors(COLOR.FACEBOOK));
    }
})), _class5);


GlobalStyle.Button = ButtonStyle.getInstance();
GlobalStyle.RadioButtonGroup = RadioButtonGroupStyle.getInstance();
GlobalStyle.ButtonGroup = ButtonGroupStyle.getInstance();

/**
 This code was in part copied from the fetch polyfill, to polyfill the Headers, Request and Response, URLSearchParams classes
Partial copyright for copied bits:
  * @author Jerry Bendy <jerry@icewingcc.com>
 * @licence MIT

 Copyright (c) 2014-2016 GitHub, Inc.

 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// TODO: this should only be executed if fetch is not included
var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && function () {
        try {
            new Blob();
            return true;
        } catch (e) {
            return false;
        }
    }(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
};

if (support.arrayBuffer) {
    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

    var isDataView = function isDataView(obj) {
        return obj && DataView.prototype.isPrototypeOf(obj);
    };

    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
}

function normalizeName(name) {
    if (typeof name !== 'string') {
        name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
        throw new TypeError('Invalid character in header field name');
    }
    return name.toLowerCase();
}

function normalizeValue(value) {
    if (typeof value !== 'string') {
        value = String(value);
    }
    return value;
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
    var iterator = {
        next: function next() {
            var value = items.shift();
            return { done: value === undefined, value: value };
        }
    };

    if (support.iterable) {
        iterator[Symbol.iterator] = function () {
            return iterator;
        };
    }

    return iterator;
}

function Headers$1(headers) {
    this.map = {};

    if (headers instanceof Headers$1) {
        headers.forEach(function (value, name) {
            this.append(name, value);
        }, this);
    } else if (headers) {
        Object.getOwnPropertyNames(headers).forEach(function (name) {
            this.append(name, headers[name]);
        }, this);
    }
}

Headers$1.prototype.append = function (name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ',' + value : value;
};

Headers$1.prototype['delete'] = function (name) {
    delete this.map[normalizeName(name)];
};

Headers$1.prototype.get = function (name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
};

Headers$1.prototype.has = function (name) {
    return this.map.hasOwnProperty(normalizeName(name));
};

Headers$1.prototype.set = function (name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
};

Headers$1.prototype.forEach = function (callback, thisArg) {
    for (var name in this.map) {
        if (this.map.hasOwnProperty(name)) {
            callback.call(thisArg, this.map[name], name, this);
        }
    }
};

Headers$1.prototype.keys = function () {
    var items = [];
    this.forEach(function (value, name) {
        items.push(name);
    });
    return iteratorFor(items);
};

Headers$1.prototype.values = function () {
    var items = [];
    this.forEach(function (value) {
        items.push(value);
    });
    return iteratorFor(items);
};

Headers$1.prototype.entries = function () {
    var items = [];
    this.forEach(function (value, name) {
        items.push([name, value]);
    });
    return iteratorFor(items);
};

if (support.iterable) {
    Headers$1.prototype[Symbol.iterator] = Headers$1.prototype.entries;
}

function consumed(body) {
    if (body.bodyUsed) {
        return Promise.reject(new TypeError('Already read'));
    }
    body.bodyUsed = true;
}

function fileReaderReady(reader) {
    return new Promise(function (resolve, reject) {
        reader.onload = function () {
            resolve(reader.result);
        };
        reader.onerror = function () {
            reject(reader.error);
        };
    });
}

function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
}

function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise;
}

function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
        chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('');
}

function bufferClone(buf) {
    if (buf.slice) {
        return buf.slice(0);
    } else {
        var view = new Uint8Array(buf.byteLength);
        view.set(new Uint8Array(buf));
        return view.buffer;
    }
}

function Body() {
    this.bodyUsed = false;

    this._initBody = function (body) {
        this._bodyInit = body;
        if (!body) {
            this._bodyText = '';
        } else if (typeof body === 'string') {
            this._bodyText = body;
        } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
            this._bodyBlob = body;
        } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
            this._bodyFormData = body;
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
            this._bodyText = body.toString();
        } else if (support.arrayBuffer && support.blob && isDataView(body)) {
            this._bodyArrayBuffer = bufferClone(body.buffer);
            // IE 10-11 can't handle a DataView body.
            this._bodyInit = new Blob([this._bodyArrayBuffer]);
        } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
            this._bodyArrayBuffer = bufferClone(body);
        } else {
            throw new Error('unsupported BodyInit type');
        }

        if (!this.headers.get('content-type')) {
            if (typeof body === 'string') {
                this.headers.set('content-type', 'text/plain;charset=UTF-8');
            } else if (this._bodyBlob && this._bodyBlob.type) {
                this.headers.set('content-type', this._bodyBlob.type);
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
            }
        }
    };

    if (support.blob) {
        this.blob = function () {
            var rejected = consumed(this);
            if (rejected) {
                return rejected;
            }

            if (this._bodyBlob) {
                return Promise.resolve(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            } else if (this._bodyFormData) {
                throw new Error('could not read FormData body as blob');
            } else {
                return Promise.resolve(new Blob([this._bodyText]));
            }
        };

        this.arrayBuffer = function () {
            if (this._bodyArrayBuffer) {
                return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
            } else {
                return this.blob().then(readBlobAsArrayBuffer);
            }
        };
    }

    this.text = function () {
        var rejected = consumed(this);
        if (rejected) {
            return rejected;
        }

        if (this._bodyBlob) {
            return readBlobAsText(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
            return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
        } else if (this._bodyFormData) {
            throw new Error('could not read FormData body as text');
        } else {
            return Promise.resolve(this._bodyText);
        }
    };

    if (support.formData) {
        this.formData = function () {
            return this.text().then(decode);
        };
    }

    this.json = function () {
        return this.text().then(JSON.parse);
    };

    return this;
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
}

function Request$1(input, options) {
    options = options || {};
    var body = options.body;

    if (typeof input === 'string') {
        this.url = input;
    } else {
        if (input.bodyUsed) {
            throw new TypeError('Already read');
        }
        this.url = input.url;
        this.credentials = input.credentials;
        if (!options.headers) {
            this.headers = new Headers$1(input.headers);
        }
        this.method = input.method;
        this.mode = input.mode;
        if (!body && input._bodyInit != null) {
            body = input._bodyInit;
            input.bodyUsed = true;
        }
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
        this.headers = new Headers$1(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
        throw new TypeError('Body not allowed for GET or HEAD requests');
    }
    this._initBody(body);
}

Request$1.prototype.clone = function () {
    return new Request$1(this, { body: this._bodyInit });
};

function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function (bytes) {
        if (bytes) {
            var split = bytes.split('=');
            var name = split.shift().replace(/\+/g, ' ');
            var value = split.join('=').replace(/\+/g, ' ');
            form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
    });
    return form;
}

Body.call(Request$1.prototype);

function Response$1(bodyInit, options) {
    if (!options) {
        options = {};
    }

    this.type = 'default';
    this.status = 'status' in options ? options.status : 200;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers$1(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
}

Body.call(Response$1.prototype);

Response$1.prototype.clone = function () {
    return new Response$1(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new Headers$1(this.headers),
        url: this.url
    });
};

Response$1.error = function () {
    var response = new Response$1(null, { status: 0, statusText: '' });
    response.type = 'error';
    return response;
};

var redirectStatuses = [301, 302, 303, 307, 308];

Response$1.redirect = function (url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
        throw new RangeError('Invalid status code');
    }

    return new Response$1(null, { status: status, headers: { location: url } });
};

window.Headers = window.Headers || Headers$1;
window.Request = window.Request || Request$1;
window.Response = window.Response || Response$1;

// if (!window.URLSearchParams) {
function polyfillURLSearchParams(self) {
    if (self.URLSearchParams) {
        return;
    }

    var __URLSearchParams__ = "__URLSearchParams__";

    function URLSearchParams(search) {
        search = search || "";

        this[__URLSearchParams__] = {};

        if ((typeof search === 'undefined' ? 'undefined' : _typeof(search)) === "object") {
            for (var i in search) {
                if (search.hasOwnProperty(i)) {
                    var str = typeof search[i] === 'string' ? search[i] : JSON.stringify(search[i]);
                    this.append(i, str);
                }
            }
        } else {

            // remove first '?'
            if (search.indexOf("?") === 0) {
                search = search.slice(1);
            }

            var pairs = search.split("&");
            for (var j = 0; j < pairs.length; j++) {
                var value = pairs[j],
                    index = value.indexOf('=');

                if (-1 < index) {
                    this.append(decode(value.slice(0, index)), decode(value.slice(index + 1)));
                }
            }
        }
    }

    URLSearchParams.prototype.append = function (name, value) {
        var dict = this[__URLSearchParams__];
        if (name in dict) {
            dict[name].push('' + value);
        } else {
            dict[name] = ['' + value];
        }
    };

    URLSearchParams.prototype.delete = function (name) {
        delete this[__URLSearchParams__][name];
    };

    URLSearchParams.prototype.get = function (name) {
        var dict = this[__URLSearchParams__];
        return name in dict ? dict[name][0] : null;
    };

    URLSearchParams.prototype.getAll = function (name) {
        var dict = this[__URLSearchParams__];
        return name in dict ? dict[name].slice(0) : [];
    };

    URLSearchParams.prototype.has = function (name) {
        return name in this[__URLSearchParams__];
    };

    URLSearchParams.prototype.set = function set(name, value) {
        this[__URLSearchParams__][name] = ['' + value];
    };

    URLSearchParams.prototype.forEach = function (callback, thisArg) {
        var dict = this[__URLSearchParams__];
        Object.getOwnPropertyNames(dict).forEach(function (name) {
            dict[name].forEach(function (value) {
                callback.call(thisArg, value, name, this);
            }, this);
        }, this);
    };

    URLSearchParams.prototype.toString = function () {
        var dict = this[__URLSearchParams__],
            query = [],
            i,
            key,
            name,
            value;
        for (key in dict) {
            name = encode(key);
            for (i = 0, value = dict[key]; i < value.length; i++) {
                query.push(name + '=' + encode(value[i]));
            }
        }
        return query.join('&');
    };

    function encode(str) {
        var replace = {
            '!': '%21',
            "'": '%27',
            '(': '%28',
            ')': '%29',
            '~': '%7E',
            '%20': '+',
            '%00': '\x00'
        };
        return encodeURIComponent(str).replace(/[!'\(\)~]|%20|%00/g, function (match) {
            return replace[match];
        });
    }

    function decode(str) {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    }

    self.URLSearchParams = URLSearchParams;

    self.URLSearchParams.polyfill = true;
}

polyfillURLSearchParams(window);
//     window.URLSearchParams = class URLSearchParams {
//         constructor() {
//             this.map = new Map();
//         }
//
//         set(key, value) {
//             this.map.set(key, value);
//         }
//
//         append(key, value) {
//             if (!this.map.has(key)) {
//                 this.map.set(key, []);
//             }
//             this.map.get(key).push(value);
//         }
//
//         toString() {
//
//         }
//     }
// }

// Tries to be a more flexible implementation of fetch()
// Still work in progress

// May need to polyfill Headers, Request, Response, Body, URLSearchParams classes, so import them
// Parse the headers from an xhr object, to return a native Headers object
function getHeaders(xhr) {
    var rawHeader = xhr.getAllResponseHeaders() || "";
    var headers = new Headers();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = rawHeader.split(/\r?\n/)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var line = _step.value;

            var parts = line.split(":");
            var key = parts.shift().trim();
            if (key) {
                var value = parts.join(":").trim();
                headers.append(key, value);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return headers;
}

// Creates a new URLSearchParams object from a plain object
// Fields that are arrays are spread
function getURLSearchParams(data) {
    var urlSearchParams = new URLSearchParams();
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = Object.keys(data)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var key = _step2.value;

            var value = data[key];
            if (Array.isArray(value)) {
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = value[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var instance = _step3.value;

                        urlSearchParams.append(key + "[]", instance);
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }
            } else {
                urlSearchParams.set(key, value);
            }
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return urlSearchParams;
}

// Appends search parameters from an object to a given URL or Request, and returns the new URL
function composeURL(url, data) {
    if (url.url) {
        url = url.url;
    }
    // TODO: also extract the preexisting arguments in the url
    if (isPlainObject(data)) {
        url += "?" + getURLSearchParams(data);
    }
    return url;
}

var XHRPromise = function () {
    function XHRPromise(request) {
        var _this = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        classCallCheck(this, XHRPromise);

        request = new Request(request, options);
        var xhr = new XMLHttpRequest();
        this.options = options;
        this.request = request;

        this.promise = new Promise(function (resolve, reject) {
            _this.promiseResolve = resolve;
            _this.promiseReject = reject;

            xhr.onload = function () {
                var headers = getHeaders(xhr);
                var body = xhr.response || xhr.responseText;
                var responseInit = {
                    status: xhr.status,
                    statusText: xhr.statusText,
                    headers: headers,
                    url: xhr.responseURL || headers.get("X-Request-URL")
                };
                var response = new Response(body, responseInit);
                // In case dataType is "arrayBuffer", "blob", "formData", "json", "text"
                // Response has methods to return these as promises
                if (typeof response[options.dataType] === "function") {
                    // TODO: should whitelist dataType to json, blob
                    response[options.dataType]().then(function (json) {
                        _this.resolve(json);
                    }).catch(function (error) {
                        _this.reject(error);
                    });
                } else {
                    _this.resolve(response);
                }
            };

            // TODO: also dispatch all arguments here on errors
            xhr.onerror = function () {
                _this.reject(new TypeError("Network error"));
            };

            // TODO: need to have an options to pass setting to xhr (like timeout value)
            xhr.ontimeout = function () {
                _this.reject(new TypeError("Network timeout"));
            };

            xhr.open(request.method, request.url, true);

            if (request.credentials === "include") {
                xhr.withCredentials = true;
            }

            xhr.responseType = "blob";

            // TODO: do this with default headers
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = request.headers[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var _step4$value = slicedToArray(_step4.value, 2),
                        name = _step4$value[0],
                        value = _step4$value[1];

                    xhr.setRequestHeader(name, value);
                }

                // TODO: there's no need to do this on a GET or HEAD
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            request.blob().then(function (blob) {
                // TODO: save the blob here?
                var body = blob.size ? blob : null;
                xhr.send(body);
            });
        });

        this.xhr = xhr;
        this.request = request;
    }

    createClass(XHRPromise, [{
        key: "resolve",
        value: function resolve(payload) {
            if (this.options.onSuccess) {
                var _options;

                (_options = this.options).onSuccess.apply(_options, arguments);
            } else {
                this.promiseResolve.apply(this, arguments);
            }
            if (this.options.complete) {
                this.options.complete();
            }
        }
    }, {
        key: "reject",
        value: function reject(error) {
            if (this.options.onError) {
                var _options2;

                (_options2 = this.options).onError.apply(_options2, arguments);
            } else {
                this.promiseReject.apply(this, arguments);
            }
            if (this.options.complete) {
                this.options.complete();
            }
        }

        // TODO: next 2 functions should fail if you have onSuccess/onError

    }, {
        key: "then",
        value: function then() {
            var _getPromise;

            return (_getPromise = this.getPromise()).then.apply(_getPromise, arguments);
        }
    }, {
        key: "catch",
        value: function _catch() {
            var _getPromise2;

            return (_getPromise2 = this.getPromise()).catch.apply(_getPromise2, arguments);
        }
    }, {
        key: "getXHR",
        value: function getXHR() {
            return this.xhr;
        }
    }, {
        key: "getPromise",
        value: function getPromise() {
            return this.promise;
        }
    }, {
        key: "getRequest",
        value: function getRequest() {
            return this.request;
        }
    }, {
        key: "abort",
        value: function abort() {
            this.getXHR().abort();
        }
    }, {
        key: "addXHRListener",
        value: function addXHRListener(name, callback) {
            this.getXHR().addEventListener(name, callback);
        }
    }, {
        key: "addProgressListener",
        value: function addProgressListener() {
            this.addXHRListener.apply(this, ["progress"].concat(Array.prototype.slice.call(arguments)));
        }
    }]);
    return XHRPromise;
}();

// Can either be called with
// - 1 argument: (Request)
// - 2 arguments: (url/Request, options)


function fetch(input, init) {
    // In case we're being passed in jQuery-style arguments
    if (isPlainObject(input)) {
        return fetch(input.url, Object.assign({}, input, init));
    }

    var options = Object.assign({}, init);
    options.onSuccess = options.onSuccess || options.success;
    options.onError = options.onError || options.error;

    if (typeof options.cache === "boolean") {
        options.cache = options.cache ? "force-cache" : "reload";
    }

    if (options.type) {
        options.method = init.type.toUpperCase();
    }

    options.method = options.method || init.method || "GET";

    if (isPlainObject(options.data)) {
        var method = options.method.toUpperCase();
        if (method === "GET" || method === "HEAD") {
            // Change the URL of the request to add a query
            var newRequestOptions = input instanceof Request ? input : {};
            input = new Request(composeURL(input, options.data), newRequestOptions);
        } else {
            var formData = new FormData();
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = Object.keys(options.data)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var key = _step5.value;

                    formData.set(key, options.data[key]);
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            options.body = formData;
        }
    } else {
        // TODO: a better compatibility with jQuery style options?
        options.body = options.body || options.data;
    }

    return new XHRPromise(input, options);
}

fetch.polyfill = true;

var Ajax = {};

Ajax.fetch = fetch;

// TODO: should also take in the complete options
Ajax.getDefaultHeaders = function (headers) {
    return headers;
};

Ajax.DEFAULT_OPTIONS = {
    credentials: "include"
};

Ajax.DEFAULT_GET_OPTIONS = {
    method: "GET"
};

Ajax.DEFAULT_POST_OPTIONS = {
    method: "POST"
};

Ajax.rawRequest = function (options) {
    return Ajax.fetch(options.url, options);
};

Ajax.request = function (options) {
    options = Object.assign({}, Ajax.DEFAULT_OPTIONS, options);

    var headers = Ajax.getDefaultHeaders(options.headers);
    if (headers) {
        options.headers = headers;
    } else {
        delete options.headers;
    }

    // TODO: Should refactor Ajax to support addition of functions from external sources, ie error handling
    return Ajax.rawRequest(options);
};

Ajax.post = function (options) {
    options = Object.assign({}, Ajax.DEFAULT_POST_OPTIONS, options);

    return Ajax.request(options);
};

Ajax.get = function (options) {
    options = Object.assign({}, Ajax.DEFAULT_GET_OPTIONS, options);

    return Ajax.request(options);
};

function BootstrapMixin(BaseClass, bootstrapClassName) {
    var BootstrapClass = function (_BaseClass) {
        inherits(BootstrapClass, _BaseClass);

        function BootstrapClass() {
            classCallCheck(this, BootstrapClass);
            return possibleConstructorReturn(this, (BootstrapClass.__proto__ || Object.getPrototypeOf(BootstrapClass)).apply(this, arguments));
        }

        createClass(BootstrapClass, [{
            key: "getNodeAttributes",
            value: function getNodeAttributes() {
                var attr = get(BootstrapClass.prototype.__proto__ || Object.getPrototypeOf(BootstrapClass.prototype), "getNodeAttributes", this).call(this);

                attr.addClass(this.constructor.bootstrapClass());
                if (this.getLevel()) {
                    attr.addClass(this.constructor.bootstrapClass() + "-" + this.getLevel());
                }
                return attr;
            }
        }, {
            key: "getLevel",
            value: function getLevel() {
                return this.options.level || "";
            }
        }, {
            key: "setLevel",
            value: function setLevel(level) {
                this.options.level = level;
                this.applyNodeAttributes();
            }
        }], [{
            key: "bootstrapClass",
            value: function bootstrapClass() {
                return bootstrapClassName;
            }
        }]);
        return BootstrapClass;
    }(BaseClass);

    return BootstrapClass;
}

var SimpleStyledElement = function (_UI$Element) {
    inherits(SimpleStyledElement, _UI$Element);

    function SimpleStyledElement() {
        classCallCheck(this, SimpleStyledElement);
        return possibleConstructorReturn(this, (SimpleStyledElement.__proto__ || Object.getPrototypeOf(SimpleStyledElement)).apply(this, arguments));
    }

    createClass(SimpleStyledElement, [{
        key: "getLevel",
        value: function getLevel() {
            return this.options.level || this.parent && this.parent.options && this.parent.options.level;
        }
    }, {
        key: "setLevel",
        value: function setLevel(level) {
            this.updateOptions({ level: level });
        }
    }, {
        key: "getSize",
        value: function getSize() {
            return this.options.size || this.parent && this.parent.options && this.parent.options.size;
        }
    }, {
        key: "setSize",
        value: function setSize(size) {
            this.updateOptions({ size: size });
        }
    }]);
    return SimpleStyledElement;
}(UI.Element);

var Label = function (_UI$Primitive) {
    inherits(Label, _UI$Primitive);

    function Label() {
        classCallCheck(this, Label);
        return possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).apply(this, arguments));
    }

    createClass(Label, [{
        key: "extraNodeAttributes",
        value: function extraNodeAttributes(attr) {
            attr.addClass(GlobalStyle.Label.DEFAULT);

            if (this.getSize()) {
                attr.addClass(GlobalStyle.Label.Size(this.getSize()));
            }

            if (this.getLevel()) {
                attr.addClass(GlobalStyle.Label.Level(this.getLevel()));
            }
        }
    }, {
        key: "setLabel",
        value: function setLabel(label) {
            this.options.label = label;
            this.redraw();
        }
    }, {
        key: "render",
        value: function render() {
            return [this.options.label];
        }
    }]);
    return Label;
}(UI.Primitive(SimpleStyledElement, "a"));

var Button = function (_UI$Primitive2) {
    inherits(Button, _UI$Primitive2);

    function Button() {
        classCallCheck(this, Button);
        return possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    createClass(Button, [{
        key: "extraNodeAttributes",
        value: function extraNodeAttributes(attr) {
            attr.addClass(GlobalStyle.Button.DEFAULT);

            if (this.getSize()) {
                attr.addClass(GlobalStyle.Button.Size(this.getSize()));
            }

            if (this.getLevel()) {
                attr.addClass(GlobalStyle.Button.Level(this.getLevel()));
            }
        }
    }, {
        key: "defaultOptions",
        value: function defaultOptions() {
            return {
                label: ""
            };
        }
    }, {
        key: "render",
        value: function render() {
            return [this.beforeChildren(), this.getLabel(), get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), "render", this).call(this)];
        }
    }, {
        key: "getLabel",
        value: function getLabel() {
            return this.options.label;
        }
    }, {
        key: "setLabel",
        value: function setLabel(label) {
            this.updateOptions({ label: label });
        }

        //TODO: this should live in a base iconable class, of which you'd only use this.beforeChildren

    }, {
        key: "getFaIcon",
        value: function getFaIcon() {
            return this.options.faIcon;
        }
    }, {
        key: "setFaIcon",
        value: function setFaIcon(value) {
            this.options.faIcon = value;
            this.redraw();
        }
    }, {
        key: "disable",
        value: function disable() {
            this.node.disabled = true;
        }
    }, {
        key: "enable",
        value: function enable() {
            this.node.disabled = false;
        }
    }, {
        key: "setEnabled",
        value: function setEnabled(enabled) {
            this.node.disabled = !enabled;
        }
    }, {
        key: "beforeChildren",
        value: function beforeChildren() {
            if (!this.getFaIcon()) {
                return null;
            }
            var iconOptions = {
                className: "fa fa-" + this.getFaIcon()
            };
            if (this.getLabel()) {
                iconOptions.style = {
                    paddingRight: "5px"
                };
            }

            return UI.createElement("span", iconOptions);
        }
    }]);
    return Button;
}(UI.Primitive(SimpleStyledElement, "button"));

var StateButton = function (_Button) {
    inherits(StateButton, _Button);

    function StateButton() {
        classCallCheck(this, StateButton);
        return possibleConstructorReturn(this, (StateButton.__proto__ || Object.getPrototypeOf(StateButton)).apply(this, arguments));
    }

    createClass(StateButton, [{
        key: "setOptions",
        value: function setOptions(options) {
            options.state = this.options && this.options.state || options.state || UI.ActionStatus.DEFAULT;

            get(StateButton.prototype.__proto__ || Object.getPrototypeOf(StateButton.prototype), "setOptions", this).call(this, options);

            this.options.statusOptions = this.options.statusOptions || [];
            for (var i = 0; i < 4; i += 1) {
                if (typeof this.options.statusOptions[i] === "string") {
                    var statusLabel = this.options.statusOptions[i];
                    this.options.statusOptions[i] = {
                        label: statusLabel,
                        faIcon: ""
                    };
                }
            }
        }
    }, {
        key: "setState",
        value: function setState(status) {
            this.options.state = status;
            if (status === UI.ActionStatus.DEFAULT) {
                this.enable();
            } else if (status === UI.ActionStatus.RUNNING) {
                this.disable();
            } else if (status === UI.ActionStatus.SUCCESS) {} else if (status === UI.ActionStatus.FAILED) {}

            this.redraw();
        }
    }, {
        key: "render",
        value: function render() {
            var stateOptions = this.options.statusOptions[this.options.state - 1];

            this.options.label = stateOptions.label;
            this.options.faIcon = stateOptions.faIcon;

            return get(StateButton.prototype.__proto__ || Object.getPrototypeOf(StateButton.prototype), "render", this).call(this);
        }
    }]);
    return StateButton;
}(Button);

var AjaxButton = function (_StateButton) {
    inherits(AjaxButton, _StateButton);

    function AjaxButton() {
        classCallCheck(this, AjaxButton);
        return possibleConstructorReturn(this, (AjaxButton.__proto__ || Object.getPrototypeOf(AjaxButton)).apply(this, arguments));
    }

    createClass(AjaxButton, [{
        key: "ajaxCall",
        value: function ajaxCall(data) {
            var _this7 = this;

            this.setState(UI.ActionStatus.RUNNING);
            Ajax.request(Object.assign({}, data, {
                success: function success(successData) {
                    data.success(successData);
                    if (successData.error) {
                        _this7.setState(UI.ActionStatus.FAILED);
                    } else {
                        _this7.setState(UI.ActionStatus.SUCCESS);
                    }
                },
                error: function error(xhr, errmsg, err) {
                    data.error(xhr, errmsg, err);
                    _this7.setState(UI.ActionStatus.FAILED);
                },
                complete: function complete() {
                    setTimeout(function () {
                        _this7.setState(UI.ActionStatus.DEFAULT);
                    }, _this7.options.onCompete || 1000);
                }
            }));
        }
    }]);
    return AjaxButton;
}(StateButton);

var ButtonGroup = function (_SimpleStyledElement) {
    inherits(ButtonGroup, _SimpleStyledElement);

    function ButtonGroup() {
        classCallCheck(this, ButtonGroup);
        return possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).apply(this, arguments));
    }

    createClass(ButtonGroup, [{
        key: "getDefaultOptions",
        value: function getDefaultOptions() {
            return {
                orientation: UI.Orientation.HORIZONTAL
            };
        }
    }, {
        key: "extraNodeAttributes",
        value: function extraNodeAttributes(attr) {
            attr.addClass(GlobalStyle.ButtonGroup.Orientation(this.options.orientation));
        }
    }]);
    return ButtonGroup;
}(SimpleStyledElement);

var RadioButtonGroup = function (_SimpleStyledElement2) {
    inherits(RadioButtonGroup, _SimpleStyledElement2);

    function RadioButtonGroup() {
        classCallCheck(this, RadioButtonGroup);
        return possibleConstructorReturn(this, (RadioButtonGroup.__proto__ || Object.getPrototypeOf(RadioButtonGroup)).apply(this, arguments));
    }

    createClass(RadioButtonGroup, [{
        key: "setOptions",
        value: function setOptions(options) {
            get(RadioButtonGroup.prototype.__proto__ || Object.getPrototypeOf(RadioButtonGroup.prototype), "setOptions", this).call(this, options);
            this.index = this.options.index || 0;
        }
    }, {
        key: "extraNodeAttributes",
        value: function extraNodeAttributes(attr) {
            attr.addClass(GlobalStyle.RadioButtonGroup.DEFAULT);
        }
    }, {
        key: "render",
        value: function render() {
            var _this10 = this;

            this.buttons = [];

            var _loop = function _loop(i) {
                _this10.buttons.push(UI.createElement(UI.Button, { key: i, onClick: function onClick() {
                        _this10.setIndex(i);
                    }, size: _this10.getSize(),
                    label: _this10.options.givenOptions[i].toString(), level: _this10.getLevel(),
                    className: _this10.index === i ? "active" : "" }));
            };

            for (var i = 0; i < this.options.givenOptions.length; i += 1) {
                _loop(i);
            }
            return this.buttons;
        }
    }, {
        key: "getIndex",
        value: function getIndex() {
            return this.index;
        }
    }, {
        key: "getValue",
        value: function getValue() {
            return this.options.givenOptions[this.index];
        }
    }, {
        key: "setIndex",
        value: function setIndex(index) {
            this.dispatch("setIndex", {
                index: index,
                oldIndex: this.index,
                value: this.options.givenOptions[index],
                oldValue: this.options.givenOptions[this.index]
            });
            this.buttons[this.index].removeClass("active");
            this.index = index;
            this.buttons[this.index].addClass("active");
        }
    }]);
    return RadioButtonGroup;
}(SimpleStyledElement);

var BootstrapLabel = function (_BootstrapMixin) {
    inherits(BootstrapLabel, _BootstrapMixin);

    function BootstrapLabel() {
        classCallCheck(this, BootstrapLabel);
        return possibleConstructorReturn(this, (BootstrapLabel.__proto__ || Object.getPrototypeOf(BootstrapLabel)).apply(this, arguments));
    }

    createClass(BootstrapLabel, [{
        key: "getNodeType",
        value: function getNodeType() {
            return "span";
        }
    }, {
        key: "getNodeAttributes",
        value: function getNodeAttributes() {
            var attr = get(BootstrapLabel.prototype.__proto__ || Object.getPrototypeOf(BootstrapLabel.prototype), "getNodeAttributes", this).call(this);
            if (this.options.faIcon) {
                attr.addClass("fa fa-" + this.options.faIcon);
            }
            return attr;
        }
    }, {
        key: "setLabel",
        value: function setLabel(label) {
            this.options.label = label;
            this.redraw();
        }
    }, {
        key: "render",
        value: function render() {
            return [this.options.label];
        }
    }]);
    return BootstrapLabel;
}(BootstrapMixin(UI.Element, "label"));

var CardPanel = function (_BootstrapMixin2) {
    inherits(CardPanel, _BootstrapMixin2);

    function CardPanel() {
        classCallCheck(this, CardPanel);
        return possibleConstructorReturn(this, (CardPanel.__proto__ || Object.getPrototypeOf(CardPanel)).apply(this, arguments));
    }

    createClass(CardPanel, [{
        key: "setOptions",
        value: function setOptions(options) {
            get(CardPanel.prototype.__proto__ || Object.getPrototypeOf(CardPanel.prototype), "setOptions", this).call(this, options);
            this.options.level = this.options.level || UI.Level.DEFAULT;
        }
    }, {
        key: "render",
        value: function render() {
            return [UI.createElement(
                "div",
                { className: "panel-heading" },
                this.getTitle()
            ), UI.createElement(
                "div",
                { className: "panel-body", style: this.options.bodyStyle },
                this.getGivenChildren()
            )];
        }
    }]);
    return CardPanel;
}(BootstrapMixin(Panel, "panel"));

var CollapsibleStyle = function (_StyleSet) {
    inherits(CollapsibleStyle, _StyleSet);

    function CollapsibleStyle() {
        classCallCheck(this, CollapsibleStyle);

        var _this13 = possibleConstructorReturn(this, (CollapsibleStyle.__proto__ || Object.getPrototypeOf(CollapsibleStyle)).call(this));

        _this13.collapsed = _this13.css({
            "display": "none"
        });

        _this13.collapsing = _this13.css({
            "height": "0",
            "transition-timing-function": "ease",
            "transition-duration": ".3s",
            "transition-property": "height, padding-top, padding-bottom",
            "position": "relative",
            "overflow": "hidden",
            "display": "block"
        });

        _this13.noPadding = _this13.css({
            "padding-top": "0 !important",
            "padding-bottom": "0 !important"
        });
        return _this13;
    }

    return CollapsibleStyle;
}(StyleSet);

var CollapsiblePanelStyle = function (_StyleSet2) {
    inherits(CollapsiblePanelStyle, _StyleSet2);

    function CollapsiblePanelStyle() {
        classCallCheck(this, CollapsiblePanelStyle);

        var _this14 = possibleConstructorReturn(this, (CollapsiblePanelStyle.__proto__ || Object.getPrototypeOf(CollapsiblePanelStyle)).call(this));

        _this14.heading = _this14.css({
            "padding": "10px 15px",
            "border-bottom": "1px solid transparent",
            "border-top-left-radius": "3px",
            "border-top-right-radius": "3px",
            "background-color": "#f5f5f5"
        });

        _this14.button = _this14.css({
            "margin-top": "0",
            "margin-bottom": "0",
            "font-size": "16px",
            "color": "inherit",
            "cursor": "pointer",
            ":hover": {
                "color": "inherit"
            },
            ":before": {
                "font-family": "'Glyphicons Halflings'",
                "content": "\"\\e114\"",
                "color": "grey",
                "float": "left"
            }
        });

        _this14.collapsedButton = _this14.css({
            ":before": {
                "content": "\"\\e080\""
            }
        });

        _this14.content = _this14.css({
            "padding": "5px"
        });
        return _this14;
    }

    return CollapsiblePanelStyle;
}(StyleSet);

var collapsibleStyle = new CollapsibleStyle();
var collapsiblePanelStyle = new CollapsiblePanelStyle();

var CollapsiblePanel = function (_CardPanel) {
    inherits(CollapsiblePanel, _CardPanel);

    function CollapsiblePanel(options) {
        classCallCheck(this, CollapsiblePanel);

        // If options.collapsed is set, use that value. otherwise it is collapsed
        var _this15 = possibleConstructorReturn(this, (CollapsiblePanel.__proto__ || Object.getPrototypeOf(CollapsiblePanel)).call(this, options));

        options.collapsed = options.collapsed || true;
        return _this15;
    }

    createClass(CollapsiblePanel, [{
        key: "onMount",
        value: function onMount() {
            var _this16 = this;

            this.expandLink.addClickListener(function () {
                _this16.togglePanel();
            });
        }
    }, {
        key: "togglePanel",
        value: function togglePanel() {
            if (!this.collapsing) {
                if (this.options.collapsed) {
                    this.expand();
                } else {
                    this.collapse();
                }
            }
        }
    }, {
        key: "expand",
        value: function expand() {
            var _this17 = this;

            this.options.collapsed = false;
            this.expandLink.removeClass(collapsiblePanelStyle.collapsedButton);
            this.contentArea.removeClass(collapsibleStyle.collapsed);
            var contentStyleHeight = this.contentArea.node.style.height;
            var contentHeight = this.contentArea.getHeight();
            this.contentArea.addClass(collapsibleStyle.collapsing);
            setTimeout(function () {
                _this17.contentArea.removeClass(collapsibleStyle.noPadding);
                _this17.contentArea.setHeight(contentHeight);
                var transitionEndFunction = function transitionEndFunction() {
                    _this17.contentArea.setHeight(contentStyleHeight);
                    _this17.contentArea.removeClass(collapsibleStyle.collapsing);
                    _this17.contentArea.removeNodeListener("transitionend", transitionEndFunction);
                    _this17.collapsing = false;
                };
                _this17.contentArea.addNodeListener("transitionend", transitionEndFunction);
                _this17.collapsing = true;
            });
        }
    }, {
        key: "collapse",
        value: function collapse() {
            var _this18 = this;

            this.options.collapsed = true;
            var contentStyleHeight = this.contentArea.node.style.height;
            this.contentArea.setHeight(this.contentArea.getHeight());
            this.contentArea.addClass(collapsibleStyle.collapsing);
            setTimeout(function () {
                _this18.contentArea.addClass(collapsibleStyle.noPadding);
                _this18.contentArea.setHeight(0);
                var transitionEndFunction = function transitionEndFunction() {
                    _this18.expandLink.addClass(collapsiblePanelStyle.collapsedButton);
                    _this18.contentArea.addClass(collapsibleStyle.collapsed);
                    _this18.contentArea.removeClass(collapsibleStyle.collapsing);
                    _this18.contentArea.setHeight(contentStyleHeight);
                    _this18.contentArea.removeNodeListener("transitionend", transitionEndFunction);
                    _this18.collapsing = false;
                };
                _this18.contentArea.addNodeListener("transitionend", transitionEndFunction);
                _this18.collapsing = true;
            });
        }
    }, {
        key: "render",
        value: function render() {
            var autoHeightClass = "";
            var collapsedPanelClass = "";
            var collapsedHeadingClass = "";
            var expandLinkClass = "";

            if (this.options.autoHeight) {
                autoHeightClass = "auto-height ";
            }
            if (this.options.collapsed) {
                collapsedHeadingClass = collapsiblePanelStyle.collapsedButton;
                collapsedPanelClass = collapsibleStyle.collapsed;
            }

            return [UI.createElement(
                "div",
                { className: collapsiblePanelStyle.heading },
                UI.createElement(
                    "a",
                    { ref: "expandLink", className: collapsiblePanelStyle.button + " " + collapsedHeadingClass },
                    this.getTitle()
                )
            ), UI.createElement(
                "div",
                { ref: "contentArea", className: collapsiblePanelStyle.content + " " + autoHeightClass + " " + collapsedPanelClass },
                this.getGivenChildren()
            )];
        }
    }]);
    return CollapsiblePanel;
}(CardPanel);

var DelayedCollapsiblePanel = function (_CollapsiblePanel) {
    inherits(DelayedCollapsiblePanel, _CollapsiblePanel);

    function DelayedCollapsiblePanel() {
        classCallCheck(this, DelayedCollapsiblePanel);
        return possibleConstructorReturn(this, (DelayedCollapsiblePanel.__proto__ || Object.getPrototypeOf(DelayedCollapsiblePanel)).apply(this, arguments));
    }

    createClass(DelayedCollapsiblePanel, [{
        key: "onMount",
        value: function onMount() {
            var _this20 = this;

            this.expandLink.addClickListener(function () {
                if (!_this20._haveExpanded) {
                    _this20._haveExpanded = true;
                    UI.renderingStack.push(_this20);
                    _this20.contentArea.options.children = _this20.getGivenChildren();
                    UI.renderingStack.pop();
                    _this20.contentArea.redraw();
                    _this20.delayedMount();
                }
                _this20.togglePanel();
            });
        }
    }, {
        key: "getGivenChildren",
        value: function getGivenChildren() {
            if (!this._haveExpanded) {
                return [];
            }
            return this.getDelayedChildren();
        }
    }]);
    return DelayedCollapsiblePanel;
}(CollapsiblePanel);

var ProgressBar = function (_BootstrapMixin3) {
    inherits(ProgressBar, _BootstrapMixin3);

    function ProgressBar() {
        classCallCheck(this, ProgressBar);
        return possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).apply(this, arguments));
    }

    createClass(ProgressBar, [{
        key: "render",
        value: function render() {
            var valueInPercent = (this.options.value || 0) * 100;

            var barOptions = {
                className: "progress-bar",
                role: "progressbar",
                "aria-valuenow": valueInPercent,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                style: {
                    addingBottom: 5,
                    width: valueInPercent + "%",
                    height: this.options.height + "px"
                }
            };

            if (this.options.disableTransition) {
                Object.assign(barOptions.style, {
                    transition: "none",
                    "-webkit-transition": "none"
                });
            }

            if (this.options.level) {
                barOptions.className += " progress-bar-" + this.options.level;
            }
            if (this.options.striped) {
                barOptions.className += " progress-bar-striped";
            }
            if (this.options.active) {
                barOptions.className += " active";
            }
            if (this.options.color) {
                barOptions.style.backgroundColor = this.options.color;
            }

            return UI.createElement(
                "div",
                barOptions,
                UI.createElement(
                    "span",
                    { className: "progress-span" },
                    this.options.label
                )
            );
        }
    }, {
        key: "set",
        value: function set(value) {
            if (value < 0) value = 0;else if (value > 1) value = 1;
            this.options.value = value;
            this.redraw();
        }
    }]);
    return ProgressBar;
}(BootstrapMixin(UI.Element, "progress"));

// This is the object that will be used to translate text
var translationMap = null;

// Keep a set of all UI Element that need to be updated when the language changes
// Can't use a weak set here unfortunately because we need iteration
// That's why we must make sure to remove all nodes from the set when destroying them
UI.TranslationElements = new Set();

UI.TranslationTextElement = function (_UI$TextElement) {
    inherits(TranslationTextElement, _UI$TextElement);

    function TranslationTextElement(value) {
        classCallCheck(this, TranslationTextElement);

        if (arguments.length === 1) {
            var _this = possibleConstructorReturn(this, (TranslationTextElement.__proto__ || Object.getPrototypeOf(TranslationTextElement)).call(this, value));
        } else {
            var _this = possibleConstructorReturn(this, (TranslationTextElement.__proto__ || Object.getPrototypeOf(TranslationTextElement)).call(this, ""));

            _this.setValue.apply(_this, arguments);
        }
        return possibleConstructorReturn(_this);
    }

    createClass(TranslationTextElement, [{
        key: "setValue",
        value: function setValue(value) {
            if (arguments.length > 1) {
                this.value = Array.from(arguments);
            } else {
                this.value = value;
            }
            if (this.node) {
                this.redraw();
            }
        }
    }, {
        key: "evaluateSprintf",
        value: function evaluateSprintf(str) {
            throw Error("Not yet implemented");
        }
    }, {
        key: "evaluate",
        value: function evaluate(strings) {
            for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                values[_key - 1] = arguments[_key];
            }

            if (!Array.isArray(strings)) {
                return this.evaluateSprintf.apply(this, arguments);
                // This means strings is a string with the sprintf pattern
            } else {
                // Using template literals https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals
                if (arguments.length != strings.length) {
                    console.error("Invalid arguments to evaluate ", Array.from(arguments));
                }
                var result = strings[0];
                for (var i = 1; i < arguments.length; i++) {
                    result += arguments[i];
                    result += strings[i];
                }
                return result;
            }
        }
    }, {
        key: "getValue",
        value: function getValue() {
            var value = this.value;
            if (Array.isArray(this.value)) {
                var _translationMap2;

                value = translationMap && (_translationMap2 = translationMap).get.apply(_translationMap2, toConsumableArray(value)) || this.evaluate.apply(this, toConsumableArray(value));
            } else {
                // TODO: if translationMap.get() returns "", keep, skip only if returning null
                value = translationMap && translationMap.get(value) || value;
            }
            return value;
        }
    }, {
        key: "onMount",
        value: function onMount() {
            UI.TranslationElements.add(this);
        }
    }, {
        key: "onUnmount",
        value: function onUnmount() {
            UI.TranslationElements.delete(this);
        }
    }]);
    return TranslationTextElement;
}(UI.TextElement);

// This method is a shorthand notation to create a new translatable text element
// TODO: should also support being used as a string template
UI.T = function (str) {
    return new UI.TranslationTextElement(str);
};

// TODO: need to have Switcher properly work with a redraw
var Switcher = function (_UI$Element) {
    inherits(Switcher, _UI$Element);

    function Switcher(options) {
        classCallCheck(this, Switcher);

        var _this = possibleConstructorReturn(this, (Switcher.__proto__ || Object.getPrototypeOf(Switcher)).call(this, options));

        _this.childMap = new WeakMap();
        return _this;
    }

    createClass(Switcher, [{
        key: "copyState",
        value: function copyState(element) {
            var options = Object.assign({}, element.options, {
                children: this.overwriteElements(this.options.children || [], element.options.children || [])
            });

            this.setOptions(options);

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.options.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var child = _step.value;

                    if (child.options.active) {
                        this.activeChild = child;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            return this.activeChild || this.options.children[0];
        }
    }, {
        key: "overwriteElements",
        value: function overwriteElements(existingElements, newElements) {
            var keyMap = this.getElementKeyMap(existingElements);
            for (var i = 0; i < newElements.length; i += 1) {
                var newChild = newElements[i];
                var newChildKey = newChild.options && newChild.options.key || "autokey" + i;
                var existingChild = keyMap.get(newChildKey);
                if (existingChild === newChild) {
                    continue;
                }
                if (existingChild && newChild.canOverwrite(existingChild)) {
                    newElements[i] = newChild = this.overwriteChild(existingChild, newChild);
                }
            }
            return newElements;
        }
    }, {
        key: "redraw",
        value: function redraw() {
            //basic things for our current node
            this.applyNodeAttributes();
            this.applyRef();

            // This render may be required to update this.options.children
            UI.renderingStack.push(this);
            this.render();
            UI.renderingStack.pop();

            if (this.options.children.length == 0) {
                return;
            }

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.options.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var child = _step2.value;

                    if (this.options.lazyRender) {
                        this.getChildProperties(child).isUpToDate = false;
                        child.applyRef();
                    } else {
                        this.updateChild(child);
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            this.updateActiveChild(this.activeChild || this.options.children[0]);
        }
    }, {
        key: "getChildProperties",
        value: function getChildProperties(child) {
            if (!this.childMap.has(child)) {
                this.childMap.set(child, {
                    isUpToDate: false,
                    isMounted: !!child.node
                });
            }
            return this.childMap.get(child);
        }
    }, {
        key: "updateChild",
        value: function updateChild(child) {
            if (!this.getChildProperties(child).isUpToDate) {
                if (!child.node) {
                    child.mount(this);
                } else {
                    child.redraw();
                }
                this.getChildProperties(child).isUpToDate = true;
            }
        }
    }, {
        key: "appendChild",
        value: function appendChild(child) {
            var doMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            this.options.children.push(child);
            if (doMount) {
                child.mount(this);
            }
            if (this.options.children.length == 1) {
                this.setActive(child);
            }
            return child;
        }
    }, {
        key: "getActive",
        value: function getActive() {
            return this.activeChild;
        }
    }, {
        key: "insertChildNodeBefore",
        value: function insertChildNodeBefore(child, nextSibling) {
            var childProperties = this.getChildProperties(child);
            childProperties.isMounted = true;
            childProperties.isUpToDate = true;
        }
    }, {
        key: "updateActiveChild",
        value: function updateActiveChild(element) {
            if (this.activeChild) {
                this.activeChild.dispatch("setActive", false);
            }

            while (this.node.firstChild) {
                //TODO: would be useful here to be able to access the matching UI Element
                this.node.removeChild(this.node.firstChild);
            }

            this.updateChild(element);

            this.node.appendChild(element.node);
            this.children[0] = this.activeChild = element;

            element.dispatch("setActive", true);
        }
    }, {
        key: "setActive",
        value: function setActive(element) {
            if (this.activeChild === element) {
                return;
            }
            if (this.activeChild) {
                this.activeChild.dispatch("hide");
            }
            this.updateActiveChild(element);
            this.activeChild.dispatch("show");
        }
    }, {
        key: "hasChild",
        value: function hasChild(element) {
            return this.childMap.has(element);
        }
    }, {
        key: "onMount",
        value: function onMount() {
            var _this2 = this;

            this.addListener("shouldRedrawChild", function (event) {
                if (event.child.isInDocument()) {
                    event.child.redraw();
                } else {
                    _this2.getChildProperties(event.child).isUpToDate = false;
                }
            });
        }
    }]);
    return Switcher;
}(UI.Element);

var _class$4;
var _descriptor$3;
var _descriptor2$2;
var _descriptor3$2;
var _class3$2;
var _descriptor4$1;
var _descriptor5$1;
var _descriptor6$1;
var _class5$1;
var _descriptor7$1;
var _descriptor8$1;
var _descriptor9$1;

function _initDefineProp$4(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _applyDecoratedDescriptor$4(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var BaseTabAreaStyle = (_class$4 = function (_StyleSet) {
    inherits(BaseTabAreaStyle, _StyleSet);

    function BaseTabAreaStyle() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, BaseTabAreaStyle);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = BaseTabAreaStyle.__proto__ || Object.getPrototypeOf(BaseTabAreaStyle)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp$4(_this, "tab", _descriptor$3, _this), _initDefineProp$4(_this, "activeTab", _descriptor2$2, _this), _initDefineProp$4(_this, "nav", _descriptor3$2, _this), _temp), possibleConstructorReturn(_this, _ret);
    }

    return BaseTabAreaStyle;
}(StyleSet), (_descriptor$3 = _applyDecoratedDescriptor$4(_class$4.prototype, "tab", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {
            userSelect: "none",
            display: "inline-block",
            position: "relative"
        };
    }
}), _descriptor2$2 = _applyDecoratedDescriptor$4(_class$4.prototype, "activeTab", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {};
    }
}), _descriptor3$2 = _applyDecoratedDescriptor$4(_class$4.prototype, "nav", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {
            listStyle: "none"
        };
    }
})), _class$4);
var DefaultTabAreaStyle = (_class3$2 = function (_BaseTabAreaStyle) {
    inherits(DefaultTabAreaStyle, _BaseTabAreaStyle);

    function DefaultTabAreaStyle() {
        var _ref2;

        var _temp2, _this2, _ret2;

        classCallCheck(this, DefaultTabAreaStyle);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this2 = possibleConstructorReturn(this, (_ref2 = DefaultTabAreaStyle.__proto__ || Object.getPrototypeOf(DefaultTabAreaStyle)).call.apply(_ref2, [this].concat(args))), _this2), _initDefineProp$4(_this2, "tab", _descriptor4$1, _this2), _initDefineProp$4(_this2, "activeTab", _descriptor5$1, _this2), _initDefineProp$4(_this2, "nav", _descriptor6$1, _this2), _temp2), possibleConstructorReturn(_this2, _ret2);
    }

    return DefaultTabAreaStyle;
}(BaseTabAreaStyle), (_descriptor4$1 = _applyDecoratedDescriptor$4(_class3$2.prototype, "tab", [styleRuleInherit], {
    enumerable: true,
    initializer: function initializer() {
        return {
            marginBottom: "-1px",
            textDecoration: "none !important",
            marginRight: "2px",
            lineHeight: "1.42857143",
            border: "1px solid transparent",
            borderRadius: "4px 4px 0 0",
            padding: "8px",
            paddingLeft: "10px",
            paddingRight: "10px",
            ":hover": {
                cursor: "pointer",
                backgroundColor: "#eee",
                color: "#555",
                border: "1px solid #ddd",
                borderBottomColor: "transparent"
            }
        };
    }
}), _descriptor5$1 = _applyDecoratedDescriptor$4(_class3$2.prototype, "activeTab", [styleRuleInherit], {
    enumerable: true,
    initializer: function initializer() {
        return {
            color: "#555 !important",
            cursor: "default !important",
            backgroundColor: "#fff !important",
            border: "1px solid #ddd !important",
            borderBottomColor: "transparent !important"
        };
    }
}), _descriptor6$1 = _applyDecoratedDescriptor$4(_class3$2.prototype, "nav", [styleRuleInherit], {
    enumerable: true,
    initializer: function initializer() {
        return {
            borderBottom: "1px solid #ddd",
            paddingLeft: "0",
            marginBottom: "0"
        };
    }
})), _class3$2);
var MinimalistTabAreaStyle = (_class5$1 = function (_BaseTabAreaStyle2) {
    inherits(MinimalistTabAreaStyle, _BaseTabAreaStyle2);

    function MinimalistTabAreaStyle() {
        var _ref3;

        var _temp3, _this3, _ret3;

        classCallCheck(this, MinimalistTabAreaStyle);

        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
        }

        return _ret3 = (_temp3 = (_this3 = possibleConstructorReturn(this, (_ref3 = MinimalistTabAreaStyle.__proto__ || Object.getPrototypeOf(MinimalistTabAreaStyle)).call.apply(_ref3, [this].concat(args))), _this3), _initDefineProp$4(_this3, "tab", _descriptor7$1, _this3), _initDefineProp$4(_this3, "activeTab", _descriptor8$1, _this3), _initDefineProp$4(_this3, "nav", _descriptor9$1, _this3), _temp3), possibleConstructorReturn(_this3, _ret3);
    }

    return MinimalistTabAreaStyle;
}(BaseTabAreaStyle), (_descriptor7$1 = _applyDecoratedDescriptor$4(_class5$1.prototype, "tab", [styleRuleInherit], {
    enumerable: true,
    initializer: function initializer() {
        return {
            textDecoration: "none !important",
            lineHeight: "1.42857143",
            paddingTop: "6px",
            paddingLeft: "8px",
            paddingRight: "8px",
            paddingBottom: "4px",
            color: "#666",
            borderBottom: "2px solid transparent",
            ":hover": {
                cursor: "pointer",
                color: "rgba(51,122,183,1)"
            }
        };
    }
}), _descriptor8$1 = _applyDecoratedDescriptor$4(_class5$1.prototype, "activeTab", [styleRuleInherit], {
    enumerable: true,
    initializer: function initializer() {
        return {
            fontWeight: "bold",
            color: "rgba(51,122,183,1)",
            cursor: "default !important",
            borderBottom: "2px solid rgba(51,122,183,1) !important"
        };
    }
}), _descriptor9$1 = _applyDecoratedDescriptor$4(_class5$1.prototype, "nav", [styleRuleInherit], {
    enumerable: true,
    initializer: function initializer() {
        return {
            position: "relative",
            borderBottom: "1px solid #aaa"
        };
    }
})), _class5$1);

var _class$3;
var _temp2$1;

var BasicTabTitle = function (_UI$Primitive) {
    inherits(BasicTabTitle, _UI$Primitive);

    function BasicTabTitle() {
        classCallCheck(this, BasicTabTitle);
        return possibleConstructorReturn(this, (BasicTabTitle.__proto__ || Object.getPrototypeOf(BasicTabTitle)).apply(this, arguments));
    }

    createClass(BasicTabTitle, [{
        key: "extraNodeAttributes",
        value: function extraNodeAttributes(attr) {
            attr.addClass(this.getStyleSet().tab);
            if (this.options.active) {
                attr.addClass(this.getStyleSet().activeTab);
            }
        }
    }, {
        key: "canOverwrite",
        value: function canOverwrite(existingElement) {
            // Disable reusing with different panels, since we want to attach listeners to the panel
            // TODO: might want to just return the key as this.options.panel
            return get(BasicTabTitle.prototype.__proto__ || Object.getPrototypeOf(BasicTabTitle.prototype), "canOverwrite", this).call(this, existingElement) && this.options.panel === existingElement.options.panel;
        }
    }, {
        key: "setActive",
        value: function setActive(active) {
            var _this2 = this;

            this.options.active = active;
            this.redraw();
            if (active) {
                this.options.activeTabDispatcher.setActive(this.getPanel(), function () {
                    _this2.setActive(false);
                });
            }
        }
    }, {
        key: "getStyleSet",
        value: function getStyleSet() {
            return this.options.styleSet || this.constructor.styleSet;
        }
    }, {
        key: "getPanel",
        value: function getPanel() {
            return this.options.panel;
        }
    }, {
        key: "getTitle",
        value: function getTitle() {
            if (this.options.title) {
                return this.options.title;
            }
            var panel = this.getPanel();
            if (typeof panel.getTitle === "function") {
                return panel.getTitle();
            }
            return panel.options.title;
        }
    }, {
        key: "render",
        value: function render() {
            return this.getTitle();
        }
    }, {
        key: "onMount",
        value: function onMount() {
            var _this3 = this;

            if (this.options.active) {
                this.setActive(true);
            }

            this.addClickListener(function () {
                _this3.setActive(true);
            });

            // TODO: less assumptions here
            if (this.options.panel && this.options.panel.addListener) {
                this.attachListener(this.options.panel, "show", function () {
                    _this3.setActive(true);
                });
            }
        }
    }]);
    return BasicTabTitle;
}(UI.Primitive("a"));



var TabTitleArea = function (_UI$Element) {
    inherits(TabTitleArea, _UI$Element);

    function TabTitleArea() {
        classCallCheck(this, TabTitleArea);
        return possibleConstructorReturn(this, (TabTitleArea.__proto__ || Object.getPrototypeOf(TabTitleArea)).apply(this, arguments));
    }

    return TabTitleArea;
}(UI.Element);



var TabArea = (_temp2$1 = _class$3 = function (_UI$Element2) {
    inherits(TabArea, _UI$Element2);

    function TabArea() {
        var _ref;

        var _temp, _this5, _ret;

        classCallCheck(this, TabArea);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this5 = possibleConstructorReturn(this, (_ref = TabArea.__proto__ || Object.getPrototypeOf(TabArea)).call.apply(_ref, [this].concat(args))), _this5), _this5.activeTabDispatcher = new SingleActiveElementDispatcher(), _temp), possibleConstructorReturn(_this5, _ret);
    }
    // TODO: should be a lazy property, must fix decorator first


    createClass(TabArea, [{
        key: "getDefaultOptions",
        value: function getDefaultOptions() {
            return {
                autoActive: true };
        }
    }, {
        key: "extraNodeAttributes",
        value: function extraNodeAttributes(attr) {
            // TODO: these shoudl not be in here!
            attr.setStyle("display", "flex");
            attr.setStyle("flex-direction", "column");
            // attr.setStyle("display", "none");
            if (!this.options.variableHeightPanels) {
                // attr.addClass("auto-height-parent");
            }
        }
    }, {
        key: "getStyleSet",
        value: function getStyleSet() {
            return this.options.styleSet || this.constructor.styleSet;
        }
    }, {
        key: "createTabPanel",
        value: function createTabPanel(panel) {
            var tab = UI.createElement(BasicTabTitle, { panel: panel, activeTabDispatcher: this.activeTabDispatcher,
                active: panel.options.active, href: panel.options.tabHref,
                styleSet: this.getStyleSet() });

            return [tab, panel];
        }
    }, {
        key: "appendChild",
        value: function appendChild(panel, doMount) {
            var _createTabPanel = this.createTabPanel(panel),
                _createTabPanel2 = slicedToArray(_createTabPanel, 2),
                tabTitle = _createTabPanel2[0],
                tabPanel = _createTabPanel2[1];

            this.options.children.push(panel);

            this.titleArea.appendChild(tabTitle);
            this.switcherArea.appendChild(tabPanel, doMount || true);
        }
    }, {
        key: "getTitleArea",
        value: function getTitleArea(tabTitles) {
            return UI.createElement(
                TabTitleArea,
                { ref: "titleArea", className: this.getStyleSet().nav },
                tabTitles
            );
        }
    }, {
        key: "getSwitcher",
        value: function getSwitcher(tabPanels) {
            // TODO: This should have the ex "auto-height" if not variable height children
            // className="auto-height"
            return UI.createElement(
                Switcher,
                { style: { flex: "1", overflow: "auto" }, ref: "switcherArea", lazyRender: this.options.lazyRender },
                tabPanels
            );
        }
    }, {
        key: "render",
        value: function render() {
            var tabTitles = [];
            var tabPanels = [];
            var activeTab = void 0;

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.options.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var panel = _step.value;

                    var _createTabPanel3 = this.createTabPanel(panel),
                        _createTabPanel4 = slicedToArray(_createTabPanel3, 2),
                        tabTitle = _createTabPanel4[0],
                        tabPanel = _createTabPanel4[1];

                    if (tabTitle.options.active) {
                        activeTab = tabTitle;
                    }

                    tabTitles.push(tabTitle);
                    tabPanels.push(tabPanel);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            if (this.options.autoActive && !activeTab && tabTitles.length > 0) {
                tabTitles[0].options.active = true;
            }

            return [this.getTitleArea(tabTitles), this.getSwitcher(tabPanels)];
        }
    }, {
        key: "setActive",
        value: function setActive(panel) {
            this.activeTabDispatcher.setActive(panel);
        }
    }, {
        key: "getActive",
        value: function getActive() {
            return this.activeTabDispatcher.getActive();
        }
    }, {
        key: "onSetActive",
        value: function onSetActive(panel) {
            this.switcherArea.setActive(panel);
        }
    }, {
        key: "onMount",
        value: function onMount() {
            var _this6 = this;

            this.attachListener(this.activeTabDispatcher, function (panel) {
                _this6.onSetActive(panel);
            });

            this.addListener("resize", function () {
                _this6.switcherArea.dispatch("resize");
            });
        }
    }]);
    return TabArea;
}(UI.Element), _class$3.styleSet = DefaultTabAreaStyle.getInstance(), _temp2$1);

var _class$5;
var _descriptor$4;
var _descriptor2$3;

function _initDefineProp$5(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _applyDecoratedDescriptor$5(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

// This whole file needs a refactoring, it's awfully written
var SectionDividerStyleSet = (_class$5 = function (_StyleSet) {
    inherits(SectionDividerStyleSet, _StyleSet);

    function SectionDividerStyleSet() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, SectionDividerStyleSet);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = SectionDividerStyleSet.__proto__ || Object.getPrototypeOf(SectionDividerStyleSet)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp$5(_this, "horizontalDivider", _descriptor$4, _this), _initDefineProp$5(_this, "verticalDivider", _descriptor2$3, _this), _temp), possibleConstructorReturn(_this, _ret);
    }

    return SectionDividerStyleSet;
}(StyleSet), (_descriptor$4 = _applyDecoratedDescriptor$5(_class$5.prototype, "horizontalDivider", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {
            cursor: "row-resize"
        };
    }
}), _descriptor2$3 = _applyDecoratedDescriptor$5(_class$5.prototype, "verticalDivider", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {
            cursor: "col-resize"
        };
    }
})), _class$5);

// options.orientation is the orientation of the divided elements

var DividerBar = function (_UI$Element) {
    inherits(DividerBar, _UI$Element);

    function DividerBar(options) {
        classCallCheck(this, DividerBar);

        var _this2 = possibleConstructorReturn(this, (DividerBar.__proto__ || Object.getPrototypeOf(DividerBar)).call(this, options));

        _this2.orientation = _this2.options.orientation || UI.Orientation.HORIZONTAL;
        return _this2;
    }

    createClass(DividerBar, [{
        key: "getNodeAttributes",
        value: function getNodeAttributes() {
            var attr = get(DividerBar.prototype.__proto__ || Object.getPrototypeOf(DividerBar.prototype), "getNodeAttributes", this).call(this);
            if (this.orientation === UI.Orientation.VERTICAL) {
                attr.addClass("sectionDividerHorizontal");
                attr.setStyle("width", "100%");
            } else if (this.orientation === UI.Orientation.HORIZONTAL) {
                attr.addClass("sectionDividerVertical");
                attr.setStyle("height", "100%");
                attr.setStyle("display", "inline-block");
            }
            return attr;
        }
    }, {
        key: "render",
        value: function render() {
            if (this.orientation === UI.Orientation.VERTICAL) {
                return [UI.createElement("div", { style: { height: "3px", width: "100%" } }), UI.createElement("div", { style: { height: "2px", width: "100%", background: "#DDD" } }), UI.createElement("div", { style: { height: "3px", width: "100%" } })];
            } else {
                return [UI.createElement("div", { style: { width: "3px", display: "inline-block" } }), UI.createElement("div", { style: { width: "2px", height: "100%", background: "#DDD", display: "inline-block" } }), UI.createElement("div", { style: { width: "3px", display: "inline-block" } })];
            }
        }
    }]);
    return DividerBar;
}(UI.Element);



/* Divider class should take in:
    - Vertical or horizontal separation
    - All the children it's dividing
    - An option on how to redivide the sizes of the children
 */

var SectionDivider = function (_UI$Element2) {
    inherits(SectionDivider, _UI$Element2);

    function SectionDivider(options) {
        classCallCheck(this, SectionDivider);

        var _this3 = possibleConstructorReturn(this, (SectionDivider.__proto__ || Object.getPrototypeOf(SectionDivider)).call(this, options));

        _this3.uncollapsedSizes = new WeakMap();
        return _this3;
    }

    createClass(SectionDivider, [{
        key: "getOrientation",
        value: function getOrientation() {
            return this.options.orientation || UI.Orientation.VERTICAL;
        }
    }, {
        key: "hideBars",
        value: function hideBars() {
            for (var i = 0; i < this.dividers; i += 1) {
                this["divider" + i].addClass("hidden");
            }
        }
    }, {
        key: "showBars",
        value: function showBars() {
            for (var i = 0; i < this.dividers; i += 1) {
                this["divider" + i].removeClass("hidden");
            }
        }
    }, {
        key: "reverse",
        value: function reverse() {
            this.options.children.reverse();
            for (var i = 0; i < this.children.length - 1; i += 1) {
                this.node.insertBefore(this.children[i].node, this.node.firstChild);
            }
            this.children.reverse();
        }
    }, {
        key: "getDimension",
        value: function getDimension(element) {
            if (this.getOrientation() === UI.Orientation.HORIZONTAL) {
                return element.getWidth();
            } else {
                return element.getHeight();
            }
        }
    }, {
        key: "setDimension",
        value: function setDimension(element, size) {
            if (this.getOrientation() === UI.Orientation.HORIZONTAL) {
                element.setWidth(size);
            } else {
                element.setHeight(size);
            }
        }
    }, {
        key: "getMinDimension",
        value: function getMinDimension(element) {
            if (this.getOrientation() === UI.Orientation.HORIZONTAL && element.options.hasOwnProperty("minWidth")) {
                return element.options.minWidth;
            } else if (this.getOrientation() === UI.Orientation.VERTICAL && element.options.hasOwnProperty("minHeight")) {
                return element.options.minHeight;
            } else {
                return 100.0 / (this.children.length - 1) / 4;
            }
        }
    }, {
        key: "collapseChild",
        value: function collapseChild(index) {
            var parentSize = this.getDimension(this);
            var child = this.children[index * 2];
            var childSize = this.getDimension(child);
            this.uncollapsedSizes.set(child, childSize);
            var unCollapsedCount = 0;
            if (childSize === 0) {
                return;
            }
            for (var i = 0; i < this.children.length - 1; i += 2) {
                if (this.getDimension(this.children[i]) !== 0 && !this.children[i].hasOwnProperty("fixed")) {
                    unCollapsedCount += 1;
                }
            }
            unCollapsedCount -= 1;
            this.setDimension(child, "0%");
            child.options.collapsed = true;
            child.hide();
            for (var _i = 0; _i < this.children.length - 1; _i += 2) {
                if (this.getDimension(this.children[_i]) !== 0 && !this.children[_i].hasOwnProperty("fixed")) {
                    this.setDimension(this.children[_i], (this.getDimension(this.children[_i]) + childSize / unCollapsedCount) * 100 / parentSize + "%");
                    this.children[_i].dispatch("resize");
                }
            }
        }
    }, {
        key: "expandChild",
        value: function expandChild(index) {
            var parentSize = this.getDimension(this);
            var child = this.children[index * 2];
            var childSize = this.getDimension(child);
            var unCollapsedCount = 0;
            var totalSize = parentSize;
            if (childSize !== 0) {
                return;
            }
            for (var i = 0; i < this.children.length - 1; i += 2) {
                if (this.getDimension(this.children[i]) !== 0 && !this.children[i].hasOwnProperty("fixed")) {
                    unCollapsedCount += 1;
                }
            }
            unCollapsedCount += 1;
            childSize = this.uncollapsedSizes.get(child);
            child.options.collapsed = false;
            child.show();
            for (var _i2 = 0; _i2 < this.children.length - 1; _i2 += 2) {
                if (this.getDimension(this.children[_i2]) !== 0 && !this.children[_i2].hasOwnProperty("fixed")) {
                    this.setDimension(this.children[_i2], (this.getDimension(this.children[_i2]) - childSize / (unCollapsedCount - 1)) * 100 / parentSize + "%");
                    this.children[_i2].dispatch("resize");
                }
            }
            this.setDimension(child, childSize * 100 / parentSize + "%");
        }
    }, {
        key: "toggleChild",
        value: function toggleChild(index) {
            var size = this.getDimension(this.children[index * 2]);
            if (!size) {
                this.expandChild(index);
            } else {
                this.collapseChild(index);
            }
        }
    }, {
        key: "recalculateDimensions",
        value: function recalculateDimensions() {
            var parentSize = this.getDimension(this);
            var dividersTotalSize = 0;
            var sectionsTotalSize = 0;
            var ratio = void 0;
            for (var i = 0; i < this.children.length - 1; i += 2) {
                if (i + 1 < this.children.length - 1) {
                    dividersTotalSize += this.getDimension(this.children[i + 1]);
                }
                sectionsTotalSize += this.getDimension(this.children[i]);
            }
            // The children occupied space must be slightly less than the available because of ceils and overflow
            sectionsTotalSize += 1;
            ratio = (parentSize - dividersTotalSize) / parentSize;
            for (var _i3 = 0; _i3 < this.children.length - 1; _i3 += 2) {
                var newDimension = this.getDimension(this.children[_i3]) * 100 * ratio / sectionsTotalSize + "%";
                this.setDimension(this.children[_i3], newDimension);
            }
        }
    }, {
        key: "onMount",
        value: function onMount() {
            var _this4 = this;

            if (!this.options.noDividers) {
                var _loop = function _loop(i) {
                    var mousedownFunc = function mousedownFunc(event) {
                        //TODO: right now section divider only works on UIElements
                        var p = 2 * i;
                        var previous = _this4.children[p];
                        while (p && (previous.options.fixed || previous.options.collapsed)) {
                            p -= 2;
                            previous = _this4.children[p];
                        }
                        var n = 2 * i + 2;
                        var next = _this4.children[n];
                        while (n + 2 < _this4.children.length - 1 && (next.options.fixed || next.options.collapsed)) {
                            n += 2;
                            next = _this4.children[n];
                        }
                        //TODO @kira This is not perfect yet.
                        previous.show();
                        next.show();

                        previous.dispatch("resize");
                        next.dispatch("resize");

                        var parentSize = _this4.getDimension(_this4);
                        var previousSize = _this4.getDimension(previous) * 100 / _this4.getDimension(_this4);
                        var nextSize = _this4.getDimension(next) * 100 / _this4.getDimension(_this4);
                        var minPreviousSize = _this4.getMinDimension(previous);
                        var minNextSize = _this4.getMinDimension(next);
                        var currentX = Device.getEventX(event);
                        var currentY = Device.getEventY(event);

                        //TODO: we should restore whatever the text selection was before
                        var textSelection = function textSelection(value) {
                            document.body.style["-webkit-user-select"] = value;
                            document.body.style["-moz-user-select"] = value;
                            document.body.style["-ms-user-select"] = value;
                            document.body.style["-o-user-select"] = value;
                            document.body.style["user-select"] = value;
                        };

                        var updateDimension = function updateDimension(event) {
                            var delta = void 0;

                            if (_this4.getOrientation() === UI.Orientation.HORIZONTAL) {
                                delta = Device.getEventX(event) - currentX;
                            } else if (_this4.getOrientation() === UI.Orientation.VERTICAL) {
                                delta = Device.getEventY(event) - currentY;
                            }

                            if (nextSize - delta * 100 / parentSize < minNextSize || previousSize + delta * 100 / parentSize < minPreviousSize) {
                                return;
                            }

                            nextSize -= delta * 100 / parentSize;
                            previousSize += delta * 100 / parentSize;
                            _this4.setDimension(next, nextSize + "%");
                            _this4.setDimension(previous, previousSize + "%");

                            next.dispatch("resize", { width: next.getWidth(), height: next.getHeight() });
                            previous.dispatch("resize", { width: previous.getWidth(), height: previous.getWidth() });

                            currentX = Device.getEventX(event);
                            currentY = Device.getEventY(event);
                        };

                        textSelection("none");
                        var dragMousemove = function dragMousemove(event) {
                            updateDimension(event);
                        };
                        var dragMousemoveTouch = function dragMousemoveTouch(event) {
                            event.preventDefault();
                            dragMousemove(event);
                        };
                        var dragMouseup = function dragMouseup() {
                            textSelection("text");
                            document.body.removeEventListener("touchmove", dragMousemoveTouch);
                            document.body.removeEventListener("touchend", dragMouseup);
                            document.body.removeEventListener("mousemove", dragMousemove);
                            document.body.removeEventListener("mouseup", dragMouseup);
                        };
                        document.body.addEventListener("touchmove", dragMousemoveTouch);
                        document.body.addEventListener("touchend", dragMouseup);
                        document.body.addEventListener("mousemove", dragMousemove);
                        document.body.addEventListener("mouseup", dragMouseup);
                    };
                    _this4["divider" + i].addNodeListener("touchstart", mousedownFunc);
                    _this4["divider" + i].addNodeListener("mousedown", mousedownFunc);
                };

                for (var i = 0; i < this.dividers; i += 1) {
                    _loop(i);
                }
            } else {
                for (var i = 0; i < this.dividers; i += 1) {
                    this.setDimension(this["divider" + i], 0);
                }
            }
            setTimeout(function () {
                _this4.recalculateDimensions();
            });
            window.addEventListener("resize", function () {
                _this4.recalculateDimensions();
            });
        }
    }, {
        key: "render",
        value: function render() {
            // TODO: use a Style for the Divider bars
            return [this.dividedChildren(), UI.createElement(
                UI.StyleElement,
                null,
                UI.createElement(UI.StyleInstance, { selector: ".sectionDividerHorizontal:hover", attributes: { "cursor": "row-resize" } }),
                UI.createElement(UI.StyleInstance, { selector: ".sectionDividerVertical:hover", attributes: { "cursor": "col-resize" } })
            )];
        }
    }, {
        key: "redraw",
        value: function redraw() {
            get(SectionDivider.prototype.__proto__ || Object.getPrototypeOf(SectionDivider.prototype), "redraw", this).call(this);
            // Safari bug fix
            // TODO: this isn't a proper solution, children elements should not be modified
            if (this.getOrientation() === UI.Orientation.HORIZONTAL) {
                // TODO: this should be done through CSS classes
                for (var i = 0; i < this.children.length - 1; i += 2) {
                    this.children[i].setStyle("vertical-align", "top");
                }
            }
        }
    }, {
        key: "dividedChildren",
        value: function dividedChildren() {
            var children = [];
            this.dividers = 0;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.options.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var child = _step.value;

                    if (children.length > 0) {
                        children.push(UI.createElement(DividerBar, { ref: "divider" + this.dividers, orientation: this.getOrientation() }));
                        this.dividers += 1;
                    }
                    children.push(child);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return children;
        }
    }]);
    return SectionDivider;
}(UI.Element);

var _class$7;
var _descriptor$5;
var _descriptor2$4;
var _class3$3;
var _descriptor3$3;
var _descriptor4$2;

function _initDefineProp$6(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _applyDecoratedDescriptor$6(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var TableStyle = (_class$7 = function (_StyleSet) {
    inherits(TableStyle, _StyleSet);

    function TableStyle() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, TableStyle);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TableStyle.__proto__ || Object.getPrototypeOf(TableStyle)).call.apply(_ref, [this].concat(args))), _this), _this.cellStyle = {
            padding: "8px",
            lineHeight: "1.42857143",
            verticalAlign: "top",
            borderTop: "1px solid #ddd"
        }, _this.theadCellStyle = {
            borderBottom: "2px solid #ddd",
            borderTop: "0"
        }, _initDefineProp$6(_this, "table", _descriptor$5, _this), _initDefineProp$6(_this, "tableStripped", _descriptor2$4, _this), _temp), possibleConstructorReturn(_this, _ret);
    }

    return TableStyle;
}(StyleSet), (_descriptor$5 = _applyDecoratedDescriptor$6(_class$7.prototype, "table", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {
            width: "100%",
            maxWidth: "100%",
            marginBottom: "20px",
            borderSpacing: "0",
            borderCollapse: "collapse",
            ">*>*>td": this.cellStyle,
            ">*>*>th": this.cellStyle,
            ">*>thead>*>*": this.theadCellStyle
        };
    }
}), _descriptor2$4 = _applyDecoratedDescriptor$6(_class$7.prototype, "tableStripped", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {
            backgroundColor: "#f9f9f9"
        };
    }
})), _class$7);
var SortableTableStyle = (_class3$3 = function (_TableStyle) {
    inherits(SortableTableStyle, _TableStyle);

    function SortableTableStyle() {
        var _ref2;

        var _temp2, _this2, _ret2;

        classCallCheck(this, SortableTableStyle);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this2 = possibleConstructorReturn(this, (_ref2 = SortableTableStyle.__proto__ || Object.getPrototypeOf(SortableTableStyle)).call.apply(_ref2, [this].concat(args))), _this2), _initDefineProp$6(_this2, "sortIcon", _descriptor3$3, _this2), _initDefineProp$6(_this2, "table", _descriptor4$2, _this2), _temp2), possibleConstructorReturn(_this2, _ret2);
    }

    return SortableTableStyle;
}(TableStyle), (_descriptor3$3 = _applyDecoratedDescriptor$6(_class3$3.prototype, "sortIcon", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {
            position: "absolute",
            right: "0px",
            bottom: "0px",
            visibility: "hidden",
            float: "right"
        };
    }
}), _descriptor4$2 = _applyDecoratedDescriptor$6(_class3$3.prototype, "table", [styleRuleInherit], {
    enumerable: true,
    initializer: function initializer() {
        return defineProperty({}, " th:hover ." + this.sortIcon, {
            visibility: "inherit"
        });
    }
})), _class3$3);

var _class$6;
var _temp;

// TODO: the whole table architecture probably needs a rethinking

var TableRow = function (_UI$Primitive) {
    inherits(TableRow, _UI$Primitive);

    function TableRow() {
        classCallCheck(this, TableRow);
        return possibleConstructorReturn(this, (TableRow.__proto__ || Object.getPrototypeOf(TableRow)).apply(this, arguments));
    }

    createClass(TableRow, [{
        key: "render",
        value: function render() {
            var rowCells = [];

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.options.columns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var column = _step.value;

                    rowCells.push(this.renderEntryCell(column));
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return rowCells;
        }
    }, {
        key: "renderEntryCell",
        value: function renderEntryCell(column) {
            return UI.createElement(
                "td",
                { style: column.cellStyle, key: column.id },
                column.value(this.options.entry, this.options.index)
            );
        }
    }]);
    return TableRow;
}(UI.Primitive("tr"));



var Table = (_temp = _class$6 = function (_UI$Primitive2) {
    inherits(Table, _UI$Primitive2);

    function Table() {
        classCallCheck(this, Table);
        return possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
    }

    createClass(Table, [{
        key: "getStyleSet",
        value: function getStyleSet() {
            return this.options.styleSet || this.constructor.styleSet;
        }
    }, {
        key: "setOptions",
        value: function setOptions(options) {
            get(Table.prototype.__proto__ || Object.getPrototypeOf(Table.prototype), "setOptions", this).call(this, options);

            this.setColumns(options.columns || []);
            this.entries = options.entries || [];
        }
    }, {
        key: "extraNodeAttributes",
        value: function extraNodeAttributes(attr) {
            attr.addClass(this.getStyleSet().table);
            attr.addClass(this.getStyleSet().tableStripped);
        }
    }, {
        key: "getRowClass",
        value: function getRowClass() {
            return TableRow;
        }
    }, {
        key: "getRowOptions",
        value: function getRowOptions(entry) {
            return {
                entry: entry,
                columns: this.columns
            };
        }
    }, {
        key: "render",
        value: function render() {
            return [UI.createElement(
                "thead",
                null,
                this.renderTableHead()
            ), UI.createElement(
                "tbody",
                null,
                this.renderTableBody()
            )];
        }
    }, {
        key: "renderTableHead",
        value: function renderTableHead() {
            return UI.createElement(
                "tr",
                null,
                this.columns.map(this.renderHeaderCell, this)
            );
        }
    }, {
        key: "getEntryKey",
        value: function getEntryKey(entry, index) {
            return entry.id || index;
        }
    }, {
        key: "renderTableBody",
        value: function renderTableBody() {
            this.rows = [];

            var entries = this.getEntries();
            for (var i = 0; i < entries.length; i += 1) {
                var entry = entries[i];
                var RowClass = this.getRowClass(entry);
                this.rows.push(UI.createElement(RowClass, _extends({ key: this.getEntryKey(entry, i), index: i }, this.getRowOptions(entry), { parent: this })));
            }
            return this.rows;
        }

        // Renders the whole header cell based on a column

    }, {
        key: "renderHeaderCell",
        value: function renderHeaderCell(column) {
            return UI.createElement(
                "th",
                { style: column.headerStyle, ref: "columnHeader" + column.id },
                this.renderColumnHeader(column)
            );
        }

        // Only renders the content of the header cell

    }, {
        key: "renderColumnHeader",
        value: function renderColumnHeader(column) {
            if (typeof column.headerName === "function") {
                return column.headerName();
            }
            return column.headerName;
        }

        // Original entries should not be modified. Overwrite this function to appy any modification in a new array.

    }, {
        key: "getEntries",
        value: function getEntries() {
            return this.entries || [];
        }
    }, {
        key: "columnDefaults",
        value: function columnDefaults(column, index) {
            column.id = index;
        }
    }, {
        key: "setColumns",
        value: function setColumns(columns) {
            this.columns = columns;
            for (var i = 0; i < this.columns.length; i += 1) {
                this.columnDefaults(this.columns[i], i);
            }
        }
    }]);
    return Table;
}(UI.Primitive("table")), _class$6.styleSet = TableStyle.getInstance(), _temp);

var TableRowInCollapsibleTable = function (_TableRow) {
    inherits(TableRowInCollapsibleTable, _TableRow);

    function TableRowInCollapsibleTable() {
        classCallCheck(this, TableRowInCollapsibleTable);
        return possibleConstructorReturn(this, (TableRowInCollapsibleTable.__proto__ || Object.getPrototypeOf(TableRowInCollapsibleTable)).apply(this, arguments));
    }

    createClass(TableRowInCollapsibleTable, [{
        key: "getNodeType",
        value: function getNodeType() {
            return "tbody";
        }
    }, {
        key: "render",
        value: function render() {
            return UI.createElement(
                "tr",
                null,
                get(TableRowInCollapsibleTable.prototype.__proto__ || Object.getPrototypeOf(TableRowInCollapsibleTable.prototype), "render", this).call(this)
            );
        }
    }]);
    return TableRowInCollapsibleTable;
}(TableRow);

var CollapsibleTableRow = function (_TableRow2) {
    inherits(CollapsibleTableRow, _TableRow2);

    function CollapsibleTableRow() {
        classCallCheck(this, CollapsibleTableRow);
        return possibleConstructorReturn(this, (CollapsibleTableRow.__proto__ || Object.getPrototypeOf(CollapsibleTableRow)).apply(this, arguments));
    }

    createClass(CollapsibleTableRow, [{
        key: "getNodeType",
        value: function getNodeType() {
            return "tbody";
        }
    }, {
        key: "getDefaultOptions",
        value: function getDefaultOptions() {
            return {
                collapsed: true
            };
        }
    }, {
        key: "onMount",
        value: function onMount() {
            var _this3 = this;

            this.collapseButton.addClickListener(function (event) {
                _this3.collapsed = _this3.collapsed != true;
                _this3.collapseButton.toggleClass("collapsed");
                // TODO (@kira): Find out how to do this properly
                $(_this3.collapsible.node).collapse("toggle");
            });
        }

        // TODO: Very bad redraw practice here

    }, {
        key: "redraw",
        value: function redraw() {
            if (!get(CollapsibleTableRow.prototype.__proto__ || Object.getPrototypeOf(CollapsibleTableRow.prototype), "redraw", this).call(this)) {
                return false;
            }

            if (this.collapsed) {
                this.collapseButton.addClass("collapsed");
                this.collapsible.removeClass("in");
            } else {
                this.collapseButton.removeClass("collapsed");
                this.collapsible.addClass("in");
            }
            return true;
        }
    }, {
        key: "render",
        value: function render() {
            var noPaddingHiddenRowStyle = {
                padding: 0
            };

            var rowCells = get(CollapsibleTableRow.prototype.__proto__ || Object.getPrototypeOf(CollapsibleTableRow.prototype), "render", this).call(this);

            return [UI.createElement(
                "tr",
                { className: "panel-heading" },
                rowCells
            ), UI.createElement(
                "tr",
                null,
                UI.createElement(
                    "td",
                    { style: noPaddingHiddenRowStyle, colspan: this.options.columns.length },
                    UI.createElement(
                        "div",
                        { ref: "collapsible", className: "collapse" },
                        this.renderCollapsible(this.options.entry)
                    )
                )
            )];
        }
    }]);
    return CollapsibleTableRow;
}(TableRow);

function CollapsibleTableInterface(BaseTableClass) {
    return function (_BaseTableClass) {
        inherits(CollapsibleTable, _BaseTableClass);

        function CollapsibleTable() {
            classCallCheck(this, CollapsibleTable);
            return possibleConstructorReturn(this, (CollapsibleTable.__proto__ || Object.getPrototypeOf(CollapsibleTable)).apply(this, arguments));
        }

        createClass(CollapsibleTable, [{
            key: "setOptions",
            value: function setOptions(options) {
                get(CollapsibleTable.prototype.__proto__ || Object.getPrototypeOf(CollapsibleTable.prototype), "setOptions", this).call(this, options);

                if (options.renderCollapsible) {
                    this.renderCollapsible = options.renderCollapsible;
                }
            }
        }, {
            key: "render",
            value: function render() {
                return [UI.createElement(
                    "thead",
                    null,
                    this.renderTableHead()
                ), this.renderTableBody()];
            }
        }, {
            key: "getRowClass",
            value: function getRowClass() {
                return UI.CollapsibleTableRow;
            }
        }, {
            key: "getNodeAttributes",
            value: function getNodeAttributes() {
                var attr = get(CollapsibleTable.prototype.__proto__ || Object.getPrototypeOf(CollapsibleTable.prototype), "getNodeAttributes", this).call(this);
                attr.addClass("ui-collapsible-table");
                return attr;
            }
        }, {
            key: "setColumns",
            value: function setColumns(columns) {
                var _this5 = this;

                var collapseColumn = {
                    value: function value(entry) {
                        var rowClass = _this5.getRowClass(entry);
                        // TODO: Fix it lad!
                        if (rowClass === CollapsibleTableRow || rowClass.prototype instanceof CollapsibleTableRow) {
                            return UI.createElement("a", { ref: "collapseButton", className: "rowCollapseButton collapsed" });
                        }
                        return UI.createElement("a", { ref: "collapseButton" });
                    },
                    cellStyle: {
                        width: "1%",
                        "whiteSpace": "nowrap"
                    }
                };

                get(CollapsibleTable.prototype.__proto__ || Object.getPrototypeOf(CollapsibleTable.prototype), "setColumns", this).call(this, [collapseColumn].concat(columns));
            }
        }]);
        return CollapsibleTable;
    }(BaseTableClass);
}

var CollapsibleTable = CollapsibleTableInterface(Table);

// Contains classes to abstract some generic Font Awesome usecases.
var FAIcon = function (_UI$Primitive) {
    inherits(FAIcon, _UI$Primitive);

    function FAIcon() {
        classCallCheck(this, FAIcon);
        return possibleConstructorReturn(this, (FAIcon.__proto__ || Object.getPrototypeOf(FAIcon)).apply(this, arguments));
    }

    createClass(FAIcon, [{
        key: "getIcon",
        value: function getIcon() {
            return this.options.icon;
        }
    }, {
        key: "getNodeAttributes",
        value: function getNodeAttributes() {
            var attr = get(FAIcon.prototype.__proto__ || Object.getPrototypeOf(FAIcon.prototype), "getNodeAttributes", this).call(this);

            attr.addClass("fa");
            attr.addClass("fa-" + this.getIcon());

            return attr;
        }
    }, {
        key: "setIcon",
        value: function setIcon(icon) {
            this.options.icon = icon;
            this.redraw();
        }
    }]);
    return FAIcon;
}(UI.Primitive("i"));

var FACollapseIcon = function (_FAIcon) {
    inherits(FACollapseIcon, _FAIcon);

    function FACollapseIcon() {
        classCallCheck(this, FACollapseIcon);
        return possibleConstructorReturn(this, (FACollapseIcon.__proto__ || Object.getPrototypeOf(FACollapseIcon)).apply(this, arguments));
    }

    createClass(FACollapseIcon, [{
        key: "getIcon",
        value: function getIcon() {
            if (this.options.collapsed) {
                return "angle-right";
            } else {
                return "angle-down";
            }
        }
    }, {
        key: "setCollapsed",
        value: function setCollapsed(collapsed) {
            this.options.collapsed = collapsed;
            this.redraw();
        }
    }]);
    return FACollapseIcon;
}(FAIcon);

var FASortIcon = function (_FAIcon2) {
    inherits(FASortIcon, _FAIcon2);

    function FASortIcon() {
        classCallCheck(this, FASortIcon);
        return possibleConstructorReturn(this, (FASortIcon.__proto__ || Object.getPrototypeOf(FASortIcon)).apply(this, arguments));
    }

    createClass(FASortIcon, [{
        key: "getIcon",
        value: function getIcon() {
            if (this.options.direction === UI.Direction.UP) {
                return "sort-asc";
            } else if (this.options.direction === UI.Direction.DOWN) {
                return "sort-desc";
            } else {
                return "sort";
            }
        }
    }, {
        key: "setDirection",
        value: function setDirection(direction) {
            this.options.direction = direction;
            this.redraw();
        }
    }]);
    return FASortIcon;
}(FAIcon);

function SortableTableInterface(BaseTableClass) {
    var _class, _temp;

    var SortIconClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FASortIcon;

    return _temp = _class = function (_BaseTableClass) {
        inherits(SortableTable, _BaseTableClass);

        function SortableTable() {
            classCallCheck(this, SortableTable);
            return possibleConstructorReturn(this, (SortableTable.__proto__ || Object.getPrototypeOf(SortableTable)).apply(this, arguments));
        }

        createClass(SortableTable, [{
            key: "getStyleSet",
            value: function getStyleSet() {
                return this.options.styleSet || this.constructor.styleSet;
            }
        }, {
            key: "setOptions",
            value: function setOptions(options) {
                get(SortableTable.prototype.__proto__ || Object.getPrototypeOf(SortableTable.prototype), "setOptions", this).call(this, options);

                this.columnSortingOrder = options.columnSortingOrder || [];
            }
        }, {
            key: "onMount",
            value: function onMount() {
                var _this2 = this;

                get(SortableTable.prototype.__proto__ || Object.getPrototypeOf(SortableTable.prototype), "onMount", this).call(this);

                // TODO: fix multiple clicks registered here
                // Sort table by clicked column
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    var _loop = function _loop() {
                        var column = _step.value;

                        _this2["columnHeader" + column.id].addClickListener(function () {
                            _this2.sortByColumn(column);
                        });
                    };

                    for (var _iterator = this.columns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        _loop();
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }, {
            key: "renderColumnHeader",
            value: function renderColumnHeader(column) {
                var sortIcon = UI.createElement(SortIconClass, { className: this.getStyleSet().sortIcon });
                if (this.sortBy === column) {
                    if (this.sortDescending) {
                        sortIcon = UI.createElement(SortIconClass, { className: this.getStyleSet().sortIcon, direction: UI.Direction.DOWN });
                    } else {
                        sortIcon = UI.createElement(SortIconClass, { className: this.getStyleSet().sortIcon, direction: UI.Direction.UP });
                    }
                }

                return UI.createElement(
                    "div",
                    { style: { position: "relative" } },
                    get(SortableTable.prototype.__proto__ || Object.getPrototypeOf(SortableTable.prototype), "renderColumnHeader", this).call(this, column),
                    " ",
                    sortIcon
                );
            }
        }, {
            key: "sortByColumn",
            value: function sortByColumn(column) {
                if (column === this.sortBy) {
                    this.sortDescending = this.sortDescending != true;
                } else {
                    this.sortDescending = true;
                }

                this.sortBy = column;

                this.redraw();
            }
        }, {
            key: "sortEntries",
            value: function sortEntries(entries) {
                var _this3 = this;

                if (!this.sortBy && this.columnSortingOrder.length === 0) {
                    return entries;
                }

                var colCmp = function colCmp(a, b, col) {
                    if (!col) return 0;

                    var keyA = col.rawValue ? col.rawValue(a) : col.value(a);
                    var keyB = col.rawValue ? col.rawValue(b) : col.value(b);
                    return col.cmp(keyA, keyB);
                };

                var sortedEntries = entries.slice();

                sortedEntries.sort(function (a, b) {
                    var cmpRes = void 0;

                    if (_this3.sortBy) {
                        cmpRes = colCmp(a, b, _this3.sortBy);
                        if (cmpRes !== 0) {
                            return _this3.sortDescending ? -cmpRes : cmpRes;
                        }
                    }

                    for (var i = 0; i < _this3.columnSortingOrder.length; i += 1) {
                        cmpRes = colCmp(a, b, _this3.columnSortingOrder[i]);
                        if (_this3.columnSortingOrder[i].sortDescending) {
                            cmpRes = -cmpRes;
                        }

                        if (cmpRes !== 0) {
                            return cmpRes;
                        }
                    }
                    return 0;
                });
                return sortedEntries;
            }
        }, {
            key: "getEntries",
            value: function getEntries() {
                return this.sortEntries(get(SortableTable.prototype.__proto__ || Object.getPrototypeOf(SortableTable.prototype), "getEntries", this).call(this));
            }
        }, {
            key: "columnDefaults",
            value: function columnDefaults(column, index) {
                get(SortableTable.prototype.__proto__ || Object.getPrototypeOf(SortableTable.prototype), "columnDefaults", this).call(this, column, index);

                if (!column.hasOwnProperty("cmp")) {
                    column.cmp = defaultComparator;
                }
            }
        }]);
        return SortableTable;
    }(BaseTableClass), _class.styleSet = SortableTableStyle.getInstance(), _temp;
}

var SortableTable = SortableTableInterface(Table);

var _class$8;
var _descriptor$6;
var _descriptor2$5;
var _class3$4;
var _temp2$2;
var _class4$1;
var _descriptor3$4;
var _descriptor4$3;
var _descriptor5$2;
var _descriptor6$2;
var _descriptor7$2;
var _class6;
var _temp4;

function _initDefineProp$7(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _applyDecoratedDescriptor$7(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

// TODO: need to redo with a StyleSheet
var FloatingWindowStyle = (_class$8 = function (_StyleSet) {
    inherits(FloatingWindowStyle, _StyleSet);

    function FloatingWindowStyle() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, FloatingWindowStyle);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FloatingWindowStyle.__proto__ || Object.getPrototypeOf(FloatingWindowStyle)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp$7(_this, "hiddenAnimated", _descriptor$6, _this), _initDefineProp$7(_this, "visibleAnimated", _descriptor2$5, _this), _temp), possibleConstructorReturn(_this, _ret);
    }

    return FloatingWindowStyle;
}(StyleSet), (_descriptor$6 = _applyDecoratedDescriptor$7(_class$8.prototype, "hiddenAnimated", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {
            visibility: "hidden",
            opacity: "0",
            transition: "opacity 0.1s linear"
        };
    }
}), _descriptor2$5 = _applyDecoratedDescriptor$7(_class$8.prototype, "visibleAnimated", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {
            visibility: "visible",
            opacity: "1",
            transition: "opacity 0.1s linear"
        };
    }
})), _class$8);
var FloatingWindow = (_temp2$2 = _class3$4 = function (_UI$Element) {
    inherits(FloatingWindow, _UI$Element);

    function FloatingWindow() {
        classCallCheck(this, FloatingWindow);
        return possibleConstructorReturn(this, (FloatingWindow.__proto__ || Object.getPrototypeOf(FloatingWindow)).apply(this, arguments));
    }

    createClass(FloatingWindow, [{
        key: "getDefaultOptions",
        value: function getDefaultOptions() {
            return {
                transitionTime: 0
            };
        }
    }, {
        key: "getStyleSet",
        value: function getStyleSet() {
            return this.options.styleSet || this.constructor.styleSet;
        }
    }, {
        key: "setOptions",
        value: function setOptions(options) {
            options = Object.assign(this.getDefaultOptions(), options);
            get(FloatingWindow.prototype.__proto__ || Object.getPrototypeOf(FloatingWindow.prototype), "setOptions", this).call(this, options);
        }
    }, {
        key: "getNodeAttributes",
        value: function getNodeAttributes() {
            var attr = get(FloatingWindow.prototype.__proto__ || Object.getPrototypeOf(FloatingWindow.prototype), "getNodeAttributes", this).call(this);
            attr.setStyle("z-index", "2016");
            return attr;
        }
    }, {
        key: "fadeOut",
        value: function fadeOut() {
            this.removeClass(this.getStyleSet().visibleAnimated);
            this.addClass(this.getStyleSet().hiddenAnimated);
        }
    }, {
        key: "fadeIn",
        value: function fadeIn() {
            this.removeClass(this.getStyleSet().hiddenAnimated);
            this.addClass(this.getStyleSet().visibleAnimated);
        }
    }, {
        key: "show",
        value: function show() {
            var _this3 = this;

            // TODO: refactor this to use this.parent and UI.Element appendChild
            if (!this.isInDocument()) {
                this.parentNode.appendChild(this.node);
                this.redraw();
                setTimeout(function () {
                    _this3.fadeIn();
                }, 0);
            }
        }
    }, {
        key: "setParentNode",
        value: function setParentNode(parentNode) {
            this.options.parentNode = parentNode;
        }
    }, {
        key: "hide",
        value: function hide() {
            var _this4 = this;

            // TODO: refactor this to use this.parent and UI.Element removeChild
            if (this.isInDocument()) {
                this.fadeOut();
                setTimeout(function () {
                    if (_this4.isInDocument()) {
                        _this4.parentNode.removeChild(_this4.node);
                    }
                }, this.options.transitionTime);
            }
        }
    }, {
        key: "parentNode",
        get: function get() {
            if (!this.options.parentNode) {
                if (this.parent) {
                    if (this.parent instanceof HTMLElement) {
                        this.options.parentNode = this.parent;
                    } else {
                        this.options.parentNode = this.parent.node;
                    }
                } else {
                    this.options.parentNode = document.body;
                }
            }
            return this.options.parentNode;
        }
    }]);
    return FloatingWindow;
}(UI.Element), _class3$4.styleSet = FloatingWindowStyle.getInstance(), _temp2$2);

var VolatileFloatingWindow = function (_FloatingWindow) {
    inherits(VolatileFloatingWindow, _FloatingWindow);

    function VolatileFloatingWindow() {
        classCallCheck(this, VolatileFloatingWindow);
        return possibleConstructorReturn(this, (VolatileFloatingWindow.__proto__ || Object.getPrototypeOf(VolatileFloatingWindow)).apply(this, arguments));
    }

    createClass(VolatileFloatingWindow, [{
        key: "bindWindowListeners",
        value: function bindWindowListeners() {
            var _this6 = this;

            this.hideListener = this.hideListener || function () {
                _this6.hide();
            };
            window.addEventListener("click", this.hideListener);
        }
    }, {
        key: "unbindWindowListeners",
        value: function unbindWindowListeners() {
            window.removeEventListener("click", this.hideListener);
        }
    }, {
        key: "show",
        value: function show() {
            if (!this.isInDocument()) {
                this.bindWindowListeners();
                get(VolatileFloatingWindow.prototype.__proto__ || Object.getPrototypeOf(VolatileFloatingWindow.prototype), "show", this).call(this);
            }
        }
    }, {
        key: "hide",
        value: function hide() {
            if (this.isInDocument()) {
                this.unbindWindowListeners();
                get(VolatileFloatingWindow.prototype.__proto__ || Object.getPrototypeOf(VolatileFloatingWindow.prototype), "hide", this).call(this);
            }
        }
    }, {
        key: "onMount",
        value: function onMount() {
            if (!this.notVisible) {
                this.bindWindowListeners();
            }
            this.addClickListener(function (event) {
                event.stopPropagation();
            });
        }
    }]);
    return VolatileFloatingWindow;
}(FloatingWindow);

var ModalStyle = (_class4$1 = function (_FloatingWindowStyle) {
    inherits(ModalStyle, _FloatingWindowStyle);

    function ModalStyle() {
        var _ref2;

        var _temp3, _this7, _ret2;

        classCallCheck(this, ModalStyle);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp3 = (_this7 = possibleConstructorReturn(this, (_ref2 = ModalStyle.__proto__ || Object.getPrototypeOf(ModalStyle)).call.apply(_ref2, [this].concat(args))), _this7), _initDefineProp$7(_this7, "container", _descriptor3$4, _this7), _initDefineProp$7(_this7, "background", _descriptor4$3, _this7), _initDefineProp$7(_this7, "header", _descriptor5$2, _this7), _initDefineProp$7(_this7, "body", _descriptor6$2, _this7), _initDefineProp$7(_this7, "footer", _descriptor7$2, _this7), _temp3), possibleConstructorReturn(_this7, _ret2);
    }

    return ModalStyle;
}(FloatingWindowStyle), (_descriptor3$4 = _applyDecoratedDescriptor$7(_class4$1.prototype, "container", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {
            position: "fixed",
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            width: "100%",
            height: "100%",
            zIndex: "9999"
        };
    }
}), _descriptor4$3 = _applyDecoratedDescriptor$7(_class4$1.prototype, "background", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {
            position: "fixed",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)"
        };
    }
}), _descriptor5$2 = _applyDecoratedDescriptor$7(_class4$1.prototype, "header", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {
            padding: "15px",
            borderBottom: "1px solid #e5e5e5"
        };
    }
}), _descriptor6$2 = _applyDecoratedDescriptor$7(_class4$1.prototype, "body", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {
            position: "relative",
            padding: "15px"
        };
    }
}), _descriptor7$2 = _applyDecoratedDescriptor$7(_class4$1.prototype, "footer", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {
            padding: "15px",
            textAlign: "right",
            borderTop: "1px solid #e5e5e5"
        };
    }
})), _class4$1);
var Modal = (_temp4 = _class6 = function (_UI$Element2) {
    inherits(Modal, _UI$Element2);

    function Modal() {
        classCallCheck(this, Modal);
        return possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
    }

    createClass(Modal, [{
        key: "getDefaultOptions",
        value: function getDefaultOptions() {
            return {
                closeButton: true
            };
        }
    }, {
        key: "getStyleSet",
        value: function getStyleSet() {
            return this.options.styleSet || this.constructor.styleSet;
        }
    }, {
        key: "render",
        value: function render() {
            return [UI.createElement(
                Panel,
                { ref: "modalContainer", className: "hidden " + this.getStyleSet().container },
                UI.createElement(Panel, { ref: "behindPanel", className: this.getStyleSet().hiddenAnimated + " " + this.getStyleSet().background }),
                this.getModalWindow()
            )];
        }
    }, {
        key: "getModalWindow",
        value: function getModalWindow() {
            var _this9 = this;

            var closeButton = null;
            if (this.options.closeButton) {
                // TODO: this should be in a method
                closeButton = UI.createElement(
                    "div",
                    { style: { position: "absolute", right: "10px", zIndex: "10" } },
                    UI.createElement(UI.Button, { className: "close", size: UI.Size.EXTRA_LARGE,
                        label: "\xD7", onClick: function onClick() {
                            return _this9.hide();
                        } })
                );
            }

            return UI.createElement(
                FloatingWindow,
                { ref: "modalWindow", style: this.getModalWindowStyle() },
                closeButton,
                UI.createElement(
                    "div",
                    { style: { margin: "0px", height: "100%", width: "100%" } },
                    this.getGivenChildren()
                )
            );
        }
    }, {
        key: "getModalWindowStyle",
        value: function getModalWindowStyle() {
            if (this.options.fillScreen) {
                this.options.width = "85%";
            }
            // TODO(@Rocky): I don't like this very much, honestly...
            return {
                position: "relative",
                padding: "1%",
                boxShadow: "0 5px 15px rgba(0,0,0,0.5)",
                borderRadius: "10px",
                margin: "60px auto",
                display: this.options.display || "block",
                maxHeight: this.options.maxHeight || "85%",
                left: "0",
                right: "0",
                width: this.options.width || "50%",
                height: this.options.height || "auto",
                background: "white",
                overflow: this.options.overflow || "auto"
            };
        }
    }, {
        key: "hide",
        value: function hide() {
            var _this10 = this;

            this.modalWindow.fadeOut();

            setTimeout(function () {
                _this10.behindPanel.removeClass(_this10.getStyleSet().visibleAnimated);
                _this10.behindPanel.addClass(_this10.getStyleSet().hiddenAnimated);

                setTimeout(function () {
                    _this10.modalContainer.addClass("hidden");
                }, _this10.modalWindow.options.transitionTime);
            }, this.modalWindow.options.transitionTime);
        }
    }, {
        key: "show",
        value: function show() {
            var _this11 = this;

            if (!this.node) {
                this.mount(document.body);
            }
            this.modalContainer.removeClass("hidden");
            setTimeout(function () {
                _this11.behindPanel.addClass(_this11.getStyleSet().visibleAnimated);
                _this11.behindPanel.removeClass(_this11.getStyleSet().hiddenAnimated);

                setTimeout(function () {
                    _this11.modalWindow.fadeIn();
                }, _this11.modalWindow.options.transitionTime);
            }, 0);
        }
    }, {
        key: "onMount",
        value: function onMount() {
            var _this12 = this;

            get(Modal.prototype.__proto__ || Object.getPrototypeOf(Modal.prototype), "onMount", this).call(this);
            this.behindPanel.addClickListener(function () {
                _this12.hide();
            });
        }
    }]);
    return Modal;
}(UI.Element), _class6.styleSet = new ModalStyle(), _temp4);

var ErrorModal = function (_Modal) {
    inherits(ErrorModal, _Modal);

    function ErrorModal() {
        classCallCheck(this, ErrorModal);
        return possibleConstructorReturn(this, (ErrorModal.__proto__ || Object.getPrototypeOf(ErrorModal)).apply(this, arguments));
    }

    createClass(ErrorModal, [{
        key: "getGivenChildren",
        value: function getGivenChildren() {
            return [this.getHeader(), this.getBody(), this.getFooter()];
        }
    }, {
        key: "getHeader",
        value: function getHeader() {
            return [UI.createElement(
                "div",
                { className: ModalStyle.header },
                UI.createElement(
                    "h4",
                    null,
                    "An Error occurred"
                )
            )];
        }
    }, {
        key: "getBody",
        value: function getBody() {
            return UI.createElement(
                "div",
                { className: ModalStyle.body },
                this.options.error.message || this.options.error
            );
        }
    }, {
        key: "getFooter",
        value: function getFooter() {
            var _this14 = this;

            return UI.createElement(
                "div",
                { className: ModalStyle.footer },
                UI.createElement(UI.Button, { level: UI.Level.DANGER, label: "Dismiss", onClick: function onClick() {
                        return _this14.hide();
                    } })
            );
        }
    }]);
    return ErrorModal;
}(Modal);

var ActionModal = function (_Modal2) {
    inherits(ActionModal, _Modal2);

    function ActionModal() {
        classCallCheck(this, ActionModal);
        return possibleConstructorReturn(this, (ActionModal.__proto__ || Object.getPrototypeOf(ActionModal)).apply(this, arguments));
    }

    createClass(ActionModal, [{
        key: "getActionName",
        value: function getActionName() {
            return this.options.actionName;
        }
    }, {
        key: "getActionLevel",
        value: function getActionLevel() {
            return this.options.level || UI.Level.DEFAULT;
        }
    }, {
        key: "getCloseName",
        value: function getCloseName() {
            return "Close";
        }
    }, {
        key: "getGivenChildren",
        value: function getGivenChildren() {
            return [this.getHeader(), this.getBody(), this.getFooter()];
        }
    }, {
        key: "getHeader",
        value: function getHeader() {
            return [UI.createElement(
                "div",
                { className: this.getStyleSet().header },
                UI.createElement(
                    "h4",
                    null,
                    this.getTitle()
                )
            )];
        }
    }, {
        key: "getTitle",
        value: function getTitle() {
            return this.options.title || this.getActionName();
        }
    }, {
        key: "getBody",
        value: function getBody() {
            var content = this.getBodyContent();
            return content ? UI.createElement(
                "div",
                { className: this.getStyleSet().body },
                content
            ) : null;
        }
    }, {
        key: "getBodyContent",
        value: function getBodyContent() {}
    }, {
        key: "getFooter",
        value: function getFooter() {
            var content = this.getFooterContent();
            return content ? UI.createElement(
                "div",
                { className: this.getStyleSet().footer },
                content
            ) : null;
        }
    }, {
        key: "getActionButton",
        value: function getActionButton() {
            var _this16 = this;

            return UI.createElement(UI.Button, { level: this.getActionLevel(), label: this.getActionName(), onClick: function onClick() {
                    return _this16.action();
                } });
        }
    }, {
        key: "getFooterContent",
        value: function getFooterContent() {
            var _this17 = this;

            return [UI.createElement(TemporaryMessageArea, { ref: "messageArea" }), UI.createElement(UI.Button, { label: this.getCloseName(), onClick: function onClick() {
                    return _this17.hide();
                } }), this.getActionButton()];
        }
    }, {
        key: "action",
        value: function action() {}
    }]);
    return ActionModal;
}(Modal);

// Very primitive version of a DateTimePicker, still work in progress, not production ready
function getTwoDigitsNumber(value) {
    return value < 10 ? "0" + value : String(value);
}

var DateTimePicker = function (_UI$Element) {
    inherits(DateTimePicker, _UI$Element);

    function DateTimePicker() {
        classCallCheck(this, DateTimePicker);
        return possibleConstructorReturn(this, (DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).apply(this, arguments));
    }

    createClass(DateTimePicker, [{
        key: "getDefaultOptions",
        value: function getDefaultOptions() {
            return {
                format: "D/M/Y H:m",
                defaultDate: new Date(2017, 0, 6, 16, 30)
            };
        }
    }, {
        key: "render",
        value: function render() {
            return [UI.createElement(
                "div",
                { className: "form-group" },
                UI.createElement(
                    "div",
                    { className: "input-group date", ref: "picker" },
                    UI.createElement(UI.FormTextInput, { ref: "textArea", placeholder: this.options.format,
                        value: this.getStringFromDate(this.options.format, this.options.defaultDate) }),
                    UI.createElement(
                        "span",
                        { className: "input-group-addon" },
                        UI.createElement("span", { className: "glyphicon glyphicon-calendar" })
                    )
                )
            )];
        }
    }, {
        key: "onMount",
        value: function onMount() {
            get(DateTimePicker.prototype.__proto__ || Object.getPrototypeOf(DateTimePicker.prototype), "onMount", this).call(this);
        }
    }, {
        key: "getStringFromDate",
        value: function getStringFromDate(format, date) {
            var str = "";
            for (var i = 0; i < format.length; i += 1) {
                if (format[i] == "Y") {
                    str += date.getFullYear();
                } else if (format[i] == "M") {
                    str += getTwoDigitsNumber(date.getMonth() + 1);
                } else if (format[i] == "D") {
                    str += getTwoDigitsNumber(date.getDate());
                } else if (format[i] == "H") {
                    str += getTwoDigitsNumber(date.getHours());
                } else if (format[i] == "m") {
                    str += getTwoDigitsNumber(date.getMinutes());
                } else {
                    str += format[i];
                }
            }
            return str;
        }
    }, {
        key: "getDateFromString",
        value: function getDateFromString(format, str) {
            var year = void 0,
                month = void 0,
                day = void 0,
                hour = void 0,
                minute = void 0;
            var i = 0,
                j = 0;
            while (i < format.length && j < str.length) {
                if (format[i] >= "a" && format[i] <= "z" || format[i] >= "A" && format[i] <= "Z") {
                    var value = 0;
                    if (str[j] < "0" || str[j] > "9") {
                        return;
                    }
                    while (j < str.length && str[j] >= "0" && str[j] <= "9") {
                        value = value * 10 + parseInt(str[j]);
                        j += 1;
                    }
                    if (format[i] == "Y") {
                        year = value;
                    } else if (format[i] == "M") {
                        month = value - 1;
                    } else if (format[i] == "D") {
                        day = value;
                    } else if (format[i] == "H") {
                        hour = value;
                    } else if (format[i] == "m") {
                        minute = value;
                    } else {
                        return;
                    }
                    i += 1;
                } else {
                    if (format[i] != str[j]) {
                        return;
                    }
                    i += 1;
                    j += 1;
                }
            }
            return new Date(year, month, day, hour, minute);
        }
    }, {
        key: "getDate",
        value: function getDate() {
            return this.getDateFromString(this.options.format, this.textArea.getValue());
        }
    }, {
        key: "getUnixTime",
        value: function getUnixTime() {
            return this.getDate().getTime() / 1000;
        }
    }, {
        key: "getMoment",
        value: function getMoment() {
            return moment(this.getDate());
        }
    }, {
        key: "addChangeListener",
        value: function addChangeListener(action) {
            this.addListener("changeDate", function (date) {
                action(date);
            });
        }
    }]);
    return DateTimePicker;
}(UI.Element);

// Wrapper over the ace code editor, needs ace to be globally loaded
// TODO: should be renamed to AceCodeEditor?
var CodeEditor = function (_UI$Element) {
    inherits(CodeEditor, _UI$Element);

    function CodeEditor() {
        classCallCheck(this, CodeEditor);
        return possibleConstructorReturn(this, (CodeEditor.__proto__ || Object.getPrototypeOf(CodeEditor)).apply(this, arguments));
    }

    createClass(CodeEditor, [{
        key: "setOptions",
        value: function setOptions(options) {
            var defaultOptions = {
                aceMode: "text",
                readOnly: false,
                aceTheme: "dawn",
                fontSize: 14,
                tabSize: 4,
                showLineNumber: true,
                showPrintMargin: false,
                printMarginSize: 80
            };
            options = Object.assign(defaultOptions, options);

            get(CodeEditor.prototype.__proto__ || Object.getPrototypeOf(CodeEditor.prototype), "setOptions", this).call(this, options);

            if (this.options.aceMode) {
                this.options.aceMode = this.options.aceMode.toLowerCase();
            }

            if (this.options.aceMode === "cpp" || this.options.aceMode === "c") {
                this.options.aceMode = "c_cpp";
            }

            if (this.ace) {
                this.applyAceOptions();
            }
        }
    }, {
        key: "applyAceOptions",
        value: function applyAceOptions() {
            var _this2 = this;

            //set the language mode
            this.ace.getSession().setMode("ace/mode/" + this.options.aceMode);

            this.setAceTheme(this.options.aceTheme);
            this.setAceFontSize(this.options.fontSize);
            this.setAceTabSize(this.options.tabSize);
            this.setAceLineNumberVisible(this.options.showLineNumber);
            this.setAcePrintMarginVisible(this.options.showPrintMargin);
            this.setAcePrintMarginSize(this.options.printMarginSize);
            this.setReadOnly(this.options.readOnly);

            //this.ace.setOptions({
            //    useSoftTabs: false
            //});

            if (this.options.numLines) {
                this.options.maxLines = this.options.minLines = this.options.numLines;
            }

            if (this.options.maxLines) {
                this.ace.setOptions({
                    maxLines: this.options.maxLines
                });
            }

            if (this.options.minLines) {
                this.ace.setOptions({
                    minLines: this.options.minLines
                });
            }

            this.ace.getSession().setUseWrapMode(this.options.lineWrapping || false);

            if (this.options.value) {
                this.setValue(this.options.value, -1);
            }
            if (this.options.hasOwnProperty("enableBasicAutocompletion") || this.options.hasOwnProperty("enableLiveAutocompletion")) {
                var langTools = "/static/js/ext/ace/ext-language_tools.js";
                require([langTools], function () {
                    _this2.setBasicAutocompletion(_this2.options.enableBasicAutocompletion);
                    _this2.setLiveAutocompletion(_this2.options.enableLiveAutocompletion);
                    _this2.setSnippets(_this2.options.enableSnippets);
                });
            }
        }
    }, {
        key: "redraw",
        value: function redraw() {
            if (this.ace) {
                this.ace.resize();
                this.applyRef();
                return;
            }
            get(CodeEditor.prototype.__proto__ || Object.getPrototypeOf(CodeEditor.prototype), "redraw", this).call(this);
        }
    }, {
        key: "onMount",
        value: function onMount() {
            var _this3 = this;

            if (!window.ace) {
                this.constructor.requireAce(function () {
                    _this3.onMount();
                });
                return;
            }
            this.ace = ace.edit(this.node);

            // Removes some warnings
            this.ace.$blockScrolling = Infinity;
            this.applyAceOptions();

            //#voodoo was here to automatically redraw when unhiding
            //This Ace event listener might be useful in the future
            this.ace.renderer.$textLayer.addEventListener("changeCharacterSize", function (event) {
                _this3.ace.resize();
            });

            // Sometimes when the parent div resizes the ace editor doesn't fully update.
            this.addListener("resize", function () {
                _this3.ace.resize();
            });

            this.addListener("change", function () {
                _this3.ace.resize();
            });
        }
    }, {
        key: "setValue",
        value: function setValue(sourceCode, fakeUserChange) {
            // We need to wrap the ace call in these flags so any event listeners can know if this change
            // was done by us or by the user
            this.apiChange = !fakeUserChange;
            this.ace.setValue(sourceCode, -1);
            this.apiChange = false;
        }
    }, {
        key: "getValue",
        value: function getValue() {
            return this.ace.getValue();
        }
    }, {
        key: "getAce",
        value: function getAce() {
            return this.ace;
        }

        // TODO: should this be setEditable?

    }, {
        key: "setReadOnly",
        value: function setReadOnly(value) {
            this.ace.setReadOnly(value);
        }
    }, {
        key: "setAceMode",
        value: function setAceMode(aceMode) {
            if (aceMode.hasOwnProperty("aceMode")) {
                aceMode = aceMode.aceMode;
            }
            this.ace.getSession().setMode("ace/mode/" + aceMode);
        }
    }, {
        key: "getAceMode",
        value: function getAceMode() {
            return this.ace.getSession().getMode();
        }
    }, {
        key: "setAceTheme",
        value: function setAceTheme(theme) {
            if (theme.hasOwnProperty("aceName")) {
                theme = theme.aceName;
            }
            this.ace.setTheme("ace/theme/" + theme);
        }
    }, {
        key: "getAceTheme",
        value: function getAceTheme() {
            return this.ace.getTheme();
        }
    }, {
        key: "setAceFontSize",
        value: function setAceFontSize(fontSize) {
            this.ace.setOptions({
                fontSize: fontSize + "px"
            });
        }
    }, {
        key: "getAceFontSize",
        value: function getAceFontSize() {
            return this.ace.getFontSize();
        }
    }, {
        key: "setAceTabSize",
        value: function setAceTabSize(tabSize) {
            this.ace.setOptions({
                tabSize: tabSize
            });
        }
    }, {
        key: "getAceTabSize",
        value: function getAceTabSize() {
            return this.ace.getOption("tabSize");
        }
    }, {
        key: "setAceLineNumberVisible",
        value: function setAceLineNumberVisible(value) {
            this.ace.renderer.setShowGutter(value);
        }
    }, {
        key: "getAceLineNumberVisible",
        value: function getAceLineNumberVisible() {
            return this.ace.renderer.getShowGutter();
        }
    }, {
        key: "setAcePrintMarginVisible",
        value: function setAcePrintMarginVisible(value) {
            this.ace.setShowPrintMargin(value);
        }
    }, {
        key: "getAcePrintMarginVisible",
        value: function getAcePrintMarginVisible() {
            return this.ace.getShowPrintMargin();
        }
    }, {
        key: "setAcePrintMarginSize",
        value: function setAcePrintMarginSize(printMarginSize) {
            this.ace.setPrintMarginColumn(printMarginSize);
        }
    }, {
        key: "getAcePrintMarginSize",
        value: function getAcePrintMarginSize() {
            return this.ace.getPrintMarginColumn();
        }
    }, {
        key: "setBasicAutocompletion",
        value: function setBasicAutocompletion(value) {
            this.ace.setOptions({
                enableBasicAutocompletion: value
            });
        }
    }, {
        key: "setLiveAutocompletion",
        value: function setLiveAutocompletion(value) {
            this.ace.setOptions({
                enableLiveAutocompletion: value
            });
        }
    }, {
        key: "setSnippets",
        value: function setSnippets(value) {
            this.ace.setOptions({
                enableSnippets: value
            });
        }

        // Inserts the text at the current cursor position

    }, {
        key: "insert",
        value: function insert(text) {
            this.ace.insert(text);
        }
    }, {
        key: "append",


        // Appends the text at the end of the document
        value: function append(text) {
            var lastRow = this.ace.getSession().getLength() - 1;
            if (lastRow < 0) {
                lastRow = 0;
            }
            var lastRowLength = this.ace.getSession().getLine(lastRow).length;
            var scrolledToBottom = this.ace.isRowFullyVisible(lastRow);
            // console.log("Scroll to bottom ", scrolledToBottom);
            this.ace.getSession().insert({
                row: lastRow,
                column: lastRowLength
            }, text);

            this.ace.resize();

            if (scrolledToBottom) {
                // TODO: Include scroll lock option!
                // TODO: See if scrolling to bottom can be done better
                // TODO: for some reason the scroll bar height is not being updated, this needs to be fixed
                this.ace.scrollToLine(this.ace.getSession().getLength() - 1, true, true, function () {});
            }
        }
    }], [{
        key: "requireAce",
        value: function requireAce(callback) {
            throw Error("You need to implement requireAce");
        }
    }]);
    return CodeEditor;
}(UI.Element);

var StaticCodeHighlighter = function (_CodeEditor) {
    inherits(StaticCodeHighlighter, _CodeEditor);

    function StaticCodeHighlighter() {
        classCallCheck(this, StaticCodeHighlighter);
        return possibleConstructorReturn(this, (StaticCodeHighlighter.__proto__ || Object.getPrototypeOf(StaticCodeHighlighter)).apply(this, arguments));
    }

    createClass(StaticCodeHighlighter, [{
        key: "setOptions",
        value: function setOptions(options) {
            options = Object.assign({
                fontSize: 13,
                readOnly: true,
                lineWrapping: true
            }, options);
            get(StaticCodeHighlighter.prototype.__proto__ || Object.getPrototypeOf(StaticCodeHighlighter.prototype), "setOptions", this).call(this, options);
        }
    }]);
    return StaticCodeHighlighter;
}(CodeEditor);

var _class;
var _descriptor;

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var MinesweeperStyleSet = (_class = function (_StyleSet) {
    inherits(MinesweeperStyleSet, _StyleSet);

    function MinesweeperStyleSet() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, MinesweeperStyleSet);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = MinesweeperStyleSet.__proto__ || Object.getPrototypeOf(MinesweeperStyleSet)).call.apply(_ref, [this].concat(args))), _this), _this.cellSize = "3em", _initDefineProp(_this, "cell", _descriptor, _this), _temp), possibleConstructorReturn(_this, _ret);
    }

    return MinesweeperStyleSet;
}(StyleSet), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "cell", [styleRule], {
    enumerable: true,
    initializer: function initializer() {
        return {
            width: this.cellSize,
            height: this.cellSize,
            border: "1px solid"
        };
    }
})), _class);

var MinesweeperCell = function (_Button) {
    inherits(MinesweeperCell, _Button);

    function MinesweeperCell() {
        classCallCheck(this, MinesweeperCell);
        return possibleConstructorReturn(this, (MinesweeperCell.__proto__ || Object.getPrototypeOf(MinesweeperCell)).apply(this, arguments));
    }

    createClass(MinesweeperCell, [{
        key: "extraNodeAttributes",
        value: function extraNodeAttributes(attr) {
            attr.addClass(MinesweeperStyleSet.getInstance().cell);
        }
    }, {
        key: "setOptions",
        value: function setOptions(options) {
            get(MinesweeperCell.prototype.__proto__ || Object.getPrototypeOf(MinesweeperCell.prototype), "setOptions", this).call(this, options);
            this.isRevealed = options.isRevealed;
            this.isBomb = options.isBomb;
            this.neighbouringBombs = options.neighbouringBombs;
        }
    }, {
        key: "getFaIcon",
        value: function getFaIcon() {
            if (this.isBomb && this.isRevealed) {
                return "bomb";
            } else {
                return "";
            }
        }
    }, {
        key: "getLabel",
        value: function getLabel() {
            if (!this.isRevealed) {
                return "?";
            } else if (this.isBomb) {
                return "";
            } else if (this.neighbouringBombs == 0) {
                return ".";
            } else {
                return this.neighbouringBombs.toString();
            }
        }
    }, {
        key: "reveal",
        value: function reveal() {
            this.isRevealed = true;
            this.redraw();
        }
    }]);
    return MinesweeperCell;
}(Button);

var SmileyButton = function (_Button2) {
    inherits(SmileyButton, _Button2);

    function SmileyButton() {
        classCallCheck(this, SmileyButton);
        return possibleConstructorReturn(this, (SmileyButton.__proto__ || Object.getPrototypeOf(SmileyButton)).apply(this, arguments));
    }

    createClass(SmileyButton, [{
        key: "onMount",
        value: function onMount() {
            var _this4 = this;

            this.addNodeListener("mousedown", function () {
                _this4.options.oldFaIcon = _this4.getFaIcon();
                _this4.setFaIcon("meh-o");
            });

            this.addNodeListener("mouseup", function () {
                _this4.setFaIcon(_this4.options.oldFaIcon);
                delete _this4.options.oldFaIcon;
            });
        }
    }]);
    return SmileyButton;
}(Button);

var MinesweeperGame = function (_UI$Element) {
    inherits(MinesweeperGame, _UI$Element);

    function MinesweeperGame(options) {
        classCallCheck(this, MinesweeperGame);

        var _this5 = possibleConstructorReturn(this, (MinesweeperGame.__proto__ || Object.getPrototypeOf(MinesweeperGame)).call(this, options));

        _this5.lines = options.lines;
        _this5.columns = options.columns;

        _this5.matrixState = new Array(_this5.lines);
        for (var i = 0; i < _this5.lines; i += 1) {
            _this5.matrixState[i] = new Array(_this5.columns);
        }

        _this5.generateNewState();
        return _this5;
    }

    createClass(MinesweeperGame, [{
        key: "render",
        value: function render() {
            var _this6 = this;

            //group them into rows
            var cellRows = [];

            var _loop = function _loop(i) {
                var cellRow = [];

                var _loop2 = function _loop2(j) {
                    cellRow.push(UI.createElement(MinesweeperCell, {
                        ref: "matrix-" + i + "-" + j,
                        isBomb: _this6.matrixState[i][j].isBomb,
                        isRevealed: _this6.matrixState[i][j].isRevealed,
                        neighbouringBombs: _this6.matrixState[i][j].neighbouringBombs,
                        onClick: function onClick() {
                            return _this6.clickedOn(i, j);
                        }
                    }));
                };

                for (var j = 0; j < _this6.columns; j += 1) {
                    _loop2(j);
                }
                cellRows.push(UI.createElement(
                    "div",
                    null,
                    " ",
                    cellRow,
                    " "
                ));
            };

            for (var i = 0; i < this.lines; i += 1) {
                _loop(i);
            }
            return [cellRows, UI.createElement(SmileyButton, { faIcon: "smile-o",
                ref: "smileyButton" })];
        }
    }, {
        key: "pointIsInMatrix",
        value: function pointIsInMatrix(i, j) {
            return i >= 0 && i < this.lines && j >= 0 && j < this.columns;
        }
    }, {
        key: "cellAt",
        value: function cellAt(i, j) {
            return this["matrix-" + i + "-" + j];
        }
    }, {
        key: "getNeighbours",
        value: function getNeighbours(i, j) {
            var ret = [];

            var deltaI = [-1, 0, 1];
            var deltaJ = [-1, 0, 1];

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = deltaI[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var di = _step.value;
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = deltaJ[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var dj = _step2.value;

                            var newI = i + di;
                            var newJ = j + dj;

                            // Do not include the current cell
                            if ((newI != i || newJ != j) && this.pointIsInMatrix(newI, newJ)) {
                                ret.push([newI, newJ]);
                            }
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
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
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return ret;
        }
    }, {
        key: "forEachNeighbourOf",
        value: function forEachNeighbourOf(i, j, fun) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = this.getNeighbours(i, j)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _step3$value = slicedToArray(_step3.value, 2),
                        neighbourX = _step3$value[0],
                        neighbourY = _step3$value[1];

                    fun(neighbourX, neighbourY);
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    }, {
        key: "generateNewState",
        value: function generateNewState() {
            var _this7 = this;

            var forEachCellState = function forEachCellState(fun) {
                for (var i = 0; i < _this7.lines; i += 1) {
                    for (var j = 0; j < _this7.columns; j += 1) {
                        fun(i, j);
                    }
                }
            };

            var getNeighbouringBombs = function getNeighbouringBombs(i, j) {
                var ret = 0;
                _this7.forEachNeighbourOf(i, j, function (nx, ny) {
                    ret += _this7.matrixState[nx][ny].isBomb;
                });
                return ret;
            };

            forEachCellState(function (i, j) {
                _this7.matrixState[i][j] = {
                    isBomb: Math.random() < 0.1,
                    isRevealed: false
                };
            });

            forEachCellState(function (i, j) {
                _this7.matrixState[i][j].neighbouringBombs = getNeighbouringBombs(i, j);
            });
        }
    }, {
        key: "newGame",
        value: function newGame() {
            this.generateNewState();
            this.redraw();
        }
    }, {
        key: "reveal",
        value: function reveal(i, j) {
            var _this8 = this;

            if (this.matrixState[i][j].isRevealed) {
                return;
            }

            this.matrixState[i][j].isRevealed = true;
            this.cellAt(i, j).reveal();

            if (this.matrixState[i][j].neighbouringBombs === 0) {
                this.forEachNeighbourOf(i, j, function (nx, ny) {
                    return _this8.reveal(nx, ny);
                });
            }
        }
    }, {
        key: "clickedOn",
        value: function clickedOn(i, j) {
            this.reveal(i, j);
            if (this.matrixState[i][j].isBomb) {
                this.onBombClicked();
            }
        }
    }, {
        key: "onBombClicked",
        value: function onBombClicked() {
            this.smileyButton.setFaIcon("frown-o");
            for (var i = 0; i < this.lines; i += 1) {
                for (var j = 0; j < this.columns; j += 1) {
                    this.reveal(i, j);
                }
            }
        }
    }]);
    return MinesweeperGame;
}(UI.Element);

var DemoMainElement = function (_UI$Element2) {
    inherits(DemoMainElement, _UI$Element2);

    function DemoMainElement() {
        classCallCheck(this, DemoMainElement);
        return possibleConstructorReturn(this, (DemoMainElement.__proto__ || Object.getPrototypeOf(DemoMainElement)).apply(this, arguments));
    }

    createClass(DemoMainElement, [{
        key: "render",
        value: function render() {
            var _this10 = this;

            return [UI.createElement(
                "h1",
                null,
                " Welcome to this Minesweeper demo "
            ), UI.createElement(Button, { label: "New game", onClick: function onClick() {
                    return _this10.game.newGame();
                } }), UI.createElement(MinesweeperGame, { ref: "game", lines: 10, columns: 10 })];
        }
    }]);
    return DemoMainElement;
}(UI.Element);

var Widget = function (_UI$Element3) {
    inherits(Widget, _UI$Element3);

    function Widget() {
        classCallCheck(this, Widget);
        return possibleConstructorReturn(this, (Widget.__proto__ || Object.getPrototypeOf(Widget)).apply(this, arguments));
    }

    createClass(Widget, [{
        key: "render",
        value: function render() {
            var _this12 = this;

            return UI.createElement(
                Button,
                { ref: "theButton",
                    onClick: function onClick() {
                        return _this12.onTheButtonClicked();
                    } },
                " Click me! "
            );
        }
    }, {
        key: "onTheButtonClicked",
        value: function onTheButtonClicked() {
            console.log("The button was clicked!");
        }
    }]);
    return Widget;
}(UI.Element);

var demoMainElement = DemoMainElement.create(document.body);

})));
