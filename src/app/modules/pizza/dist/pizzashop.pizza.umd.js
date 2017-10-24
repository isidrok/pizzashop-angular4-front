(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common/http'), require('pizzashop')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/router', '@angular/common/http', 'pizzashop'], factory) :
	(factory((global.pizzashop = global.pizzashop || {}, global.pizzashop.pizza = {}),global.pizzashop.angularVendor.core,global.pizzashop.angularVendor.router,global.pizzashop.angularVendor.commonHttp,global.pizzashop));
}(this, (function (exports,core,router,http,pizzashop) { 'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);
  
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  return returnValue;
}

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





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

var _dec$3;
var _class$3;

var PizzaService = (_dec$3 = core.Injectable(), _dec$3(_class$3 = function (_BaseHttpService) {
  inherits(PizzaService, _BaseHttpService);

  function PizzaService(http$$1) {
    classCallCheck(this, PizzaService);
    return possibleConstructorReturn(this, (PizzaService.__proto__ || Object.getPrototypeOf(PizzaService)).call(this, http$$1, 'pizzas'));
  }

  createClass(PizzaService, [{
    key: 'get',
    value: function get$$1(id) {
      return this.http.get(get(PizzaService.prototype.__proto__ || Object.getPrototypeOf(PizzaService.prototype), 'getRouteById', this).call(this, id));
    }
  }, {
    key: 'getAll',
    value: function getAll() {
      return this.http.get(get(PizzaService.prototype.__proto__ || Object.getPrototypeOf(PizzaService.prototype), 'getRoute', this).call(this));
    }
  }]);
  return PizzaService;
}(pizzashop.BaseHttpService)) || _class$3);
Reflect.defineMetadata('design:paramtypes', [http.HttpClient], PizzaService);

var html = "<div class=\"ps-pizza horizontal wrap\">\n  <div class=\"ps-pizza__card__wrapper\" *ngFor=\"let pizza of pizzas\">\n    <ps-pizza-card [pizza]=\"pizza\"></ps-pizza-card>\n  </div>\n</div>";

__$styleInject(".ps-pizza{justify-content:space-between}.ps-pizza__card__wrapper{padding:16px}", undefined);

var _dec$2;
var _class$2;

var PizzaComponent = (_dec$2 = core.Component({
  selector: 'ps-pizza',
  template: html
}), _dec$2(_class$2 = function () {
  function PizzaComponent(pizzaService) {
    classCallCheck(this, PizzaComponent);

    this._pizzaService = pizzaService;
    this._getPizzas();
  }

  createClass(PizzaComponent, [{
    key: '_getPizzas',
    value: function _getPizzas() {
      var _this = this;

      this._pizzaService.getAll().subscribe(function (data) {
        _this.pizzas = data;
      }, function (error) {
        throw new Error(error);
      });
    }
  }]);
  return PizzaComponent;
}()) || _class$2);
Reflect.defineMetadata('design:paramtypes', [PizzaService], PizzaComponent);

var _dec$1;
var _class$1;

var PizzaRoutingModule = (_dec$1 = core.NgModule({
  imports: [router.RouterModule.forChild([{ path: '', component: PizzaComponent }])],
  exports: [router.RouterModule]
}), _dec$1(_class$1 = function PizzaRoutingModule() {
  classCallCheck(this, PizzaRoutingModule);
}) || _class$1);

var html$1 = "<mat-card>\n  <img [src]=\"pizza.img\">\n  <mat-card-footer class=\"ps-scepe__pizza__card-footer\">{{pizza.name}}</mat-card-footer>\n</mat-card>";

__$styleInject(".ps-scepe__pizza__card-footer{text-align:center;text-transform:uppercase;color:#f5f5f5;background-color:#673ab7}", undefined);

var _dec$4;
var _dec2;
var _class$4;
var _class2;
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

var PizzaCardComponent = (_dec$4 = core.Component({
  selector: 'ps-pizza-card',
  template: html$1
}), _dec2 = core.Input(), _dec$4(_class$4 = (_class2 = function PizzaCardComponent() {
  classCallCheck(this, PizzaCardComponent);

  _initDefineProp(this, 'pizza', _descriptor, this);
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'pizza', [_dec2], {
  enumerable: true,
  initializer: function initializer() {
    return this.pizza;
  }
})), _class2)) || _class$4);

var _dec;
var _class;

var PizzaModule = (_dec = core.NgModule({
  imports: [pizzashop.PizzashopCoreModule, PizzaRoutingModule],
  declarations: [PizzaComponent, PizzaCardComponent],
  providers: [PizzaService]
}), _dec(_class = function PizzaModule() {
  classCallCheck(this, PizzaModule);
}) || _class);

exports.PizzaModule = PizzaModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pizzashop.pizza.umd.js.map
