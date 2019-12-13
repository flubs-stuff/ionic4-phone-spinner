(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/@flubs/ionic4-phone-spinner/fesm5/flubs-ionic4-phone-spinner.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@flubs/ionic4-phone-spinner/fesm5/flubs-ionic4-phone-spinner.js ***!
  \**************************************************************************************/
/*! exports provided: Ionic4PhoneSpinnerComponent, Ionic4PhoneSpinnerModule, Ionic4PhoneSpinnerOptions, LockOptions, RangePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ionic4PhoneSpinnerComponent", function() { return Ionic4PhoneSpinnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ionic4PhoneSpinnerModule", function() { return Ionic4PhoneSpinnerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ionic4PhoneSpinnerOptions", function() { return Ionic4PhoneSpinnerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockOptions", function() { return LockOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangePipe", function() { return RangePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var LockOptions;
(function (LockOptions) {
    LockOptions["IGNORE"] = "ignore";
    LockOptions["LIAR"] = "liar";
    LockOptions["MANUAL"] = "manual";
    LockOptions["ORDER"] = "order";
    LockOptions["RANDOM"] = "random";
    LockOptions["REVERSE"] = "reverse";
    LockOptions["SHUFFLE"] = "shuffle";
})(LockOptions || (LockOptions = {}));

var Ionic4PhoneSpinnerOptions = /** @class */ (function () {
    function Ionic4PhoneSpinnerOptions() {
        this.locks = [
            LockOptions.MANUAL
        ];
        this.unlocks = [
            LockOptions.MANUAL
        ];
        this.shuffleMilliseconds = 200;
        this.shufflesPerClick = 5;
    }
    return Ionic4PhoneSpinnerOptions;
}());

var Ionic4PhoneSpinnerComponent = /** @class */ (function () {
    function Ionic4PhoneSpinnerComponent() {
        this.fullNumber = '0000000000';
        this.digits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.locks = [false, false, false, false, false, false, false, false, false, false];
        this.lockIcons = [false, false, false, false, false, false, false, false, false, false];
        this.lockColors = [false, false, false, false, false, false, false, false, false, false];
        this.disabled = false;
        this.isRandomizing = false;
        this._propagateChange = function () { };
        this.options = new Ionic4PhoneSpinnerOptions();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Ionic4PhoneSpinnerComponent_1 = Ionic4PhoneSpinnerComponent;
    Object.defineProperty(Ionic4PhoneSpinnerComponent.prototype, "number", {
        set: function (digits) {
            var candidates = digits.split('');
            for (var i = 0; i < 10; i++) {
                this.digits[i] = typeof candidates[i] !== 'undefined' ? parseInt(candidates[i], 10) : 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Ionic4PhoneSpinnerComponent.prototype.writeValue = function (value) {
        this.fullNumber = value || '0000000000';
    };
    Ionic4PhoneSpinnerComponent.prototype.registerOnChange = function (fn) {
        this._propagateChange = fn;
    };
    Ionic4PhoneSpinnerComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    Ionic4PhoneSpinnerComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    Ionic4PhoneSpinnerComponent.prototype.toggleLock = function (i) {
        var _this = this;
        var canChange = true;
        if (i !== 0) {
            if (this.options.locks.indexOf(LockOptions.ORDER) !== -1) {
                if (i !== 0) {
                    if (this.locks[i - 1] === false) {
                        canChange = false;
                    }
                }
            }
            if (this.options.unlocks.indexOf(LockOptions.ORDER) !== -1) {
                if (i !== 0) {
                    if (this.locks[i - 1] === true) {
                        canChange = false;
                    }
                }
            }
            if (this.options.locks.indexOf(LockOptions.REVERSE) !== -1) {
                if (i + 1 < this.locks.length) {
                    if (this.locks[i + 1] === false) {
                        canChange = false;
                    }
                }
            }
            if (this.options.unlocks.indexOf(LockOptions.REVERSE) !== -1) {
                if (i + 1 < this.locks.length) {
                    if (this.locks[i + 1] === true) {
                        canChange = false;
                    }
                }
            }
        }
        if (this.options.unlocks.indexOf(LockOptions.IGNORE) !== -1 && Math.random() < 0.5) {
            canChange = false;
        }
        if (this.options.locks.indexOf(LockOptions.IGNORE) !== -1 && Math.random() < 0.5) {
            canChange = false;
        }
        if (canChange) {
            this.locks[i] = !this.locks[i];
            if (this.locks[i]) {
                if (this.options.unlocks.indexOf(LockOptions.RANDOM) !== -1) {
                    setTimeout(function () {
                        _this.locks[i] = false;
                    }, Math.random() * 1000 * 60);
                }
            }
            else {
                if (this.options.locks.indexOf(LockOptions.RANDOM) !== -1) {
                    setTimeout(function () {
                        _this.locks[i] = true;
                    }, Math.random() * 1000 * 60);
                }
            }
            this.lockColors[i] = this.getIsLiar(i);
            this.lockIcons[i] = this.getIsLiar(i);
            this._onChange();
        }
    };
    Ionic4PhoneSpinnerComponent.prototype.randomizeDigit = function (i, increment) {
        var _this = this;
        this.isRandomizing = true;
        this.digits[i] = Math.round(Math.random() * 9);
        if (typeof increment === 'undefined') {
            increment = this.options.shufflesPerClick;
            increment--;
        }
        if (increment !== 0) {
            increment--;
            setTimeout(function () {
                _this.randomizeDigit(i, increment);
            }, this.options.shuffleMilliseconds);
        }
        else {
            this.isRandomizing = false;
            var shuffleLock = this.options.locks.indexOf(LockOptions.SHUFFLE) !== -1;
            var shuffleUnlock = this.options.unlocks.indexOf(LockOptions.SHUFFLE) !== -1;
            if (shuffleLock || shuffleUnlock) {
                for (var i_1 = 0; i_1 < 10; i_1++) {
                    if (this.locks[i_1] === false && shuffleLock) {
                        this.locks[i_1] = true;
                    }
                    if (this.locks[i_1] === true && shuffleUnlock) {
                        this.locks[i_1] = false;
                    }
                    this.lockColors[i_1] = this.getIsLiar(i_1);
                    this.lockIcons[i_1] = this.getIsLiar(i_1);
                }
            }
        }
    };
    Ionic4PhoneSpinnerComponent.prototype.clearLocks = function () {
        for (var i = 0; i < 10; i++) {
            this.locks[i] = false;
            this.lockColors[i] = this.getIsLiar(i);
            this.lockIcons[i] = this.getIsLiar(i);
        }
    };
    Ionic4PhoneSpinnerComponent.prototype.reset = function () {
        this.clearLocks();
        this.randomize();
    };
    Ionic4PhoneSpinnerComponent.prototype.randomize = function () {
        for (var i = 0; i < 10; i++) {
            if (this.locks[i] === false) {
                this.randomizeDigit(i);
            }
        }
    };
    Ionic4PhoneSpinnerComponent.prototype.showLockIcon = function (i) {
        var showLockIcon = this.locks[i];
        if (this.locks[i] === true && this.options.locks.indexOf(LockOptions.LIAR) !== -1) {
            if (Math.random() < 0.25) {
                showLockIcon = !this.locks[i];
            }
        }
        else if (this.locks[i] === false && this.options.unlocks.indexOf(LockOptions.LIAR) !== -1) {
            if (Math.random() < 0.25) {
                showLockIcon = !this.locks[i];
            }
        }
        return showLockIcon;
    };
    Ionic4PhoneSpinnerComponent.prototype._onChange = function () {
        this.fullNumber = '';
        for (var i = 0; i < 10; i++) {
            this.fullNumber += '' + this.digits[i];
        }
        this._propagateChange(this.fullNumber);
        this.change.emit(this.fullNumber);
    };
    var Ionic4PhoneSpinnerComponent_1;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Ionic4PhoneSpinnerComponent.prototype, "options", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Ionic4PhoneSpinnerComponent.prototype, "number", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Ionic4PhoneSpinnerComponent.prototype, "change", void 0);
    Ionic4PhoneSpinnerComponent = Ionic4PhoneSpinnerComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ionic4-phone-spinner',
            template: "<div class=\"ionic4-phone-spinner\">\n  <div class=\"inline-label\">(</div>\n\n  <div class=\"wrapper\"\n       *ngFor=\"let range of [] | range:3; let i = index\">\n    <div>{{ digits[i] }}</div>\n\n    <button type=\"button\"\n            class=\"ripple\"\n            (click)=\"toggleLock(i)\"\n            [disabled]=\"disabled || isRandomizing\"\n            [ngClass]=\"{ 'locked': locks[i], 'unlocked': locks[i] }\">\n      <span *ngIf=\"lockIcons[i] === true\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-150 -100 700 700\" [attr.fill]=\"lockColors[i] ? 'red' : 'green'\">\n          <path d=\"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z\"/>\n        </svg>\n      </span>\n\n      <span *ngIf=\"lockIcons[i] === false\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-150 -100 700 700\" [attr.fill]=\"lockColors[i] ? 'red' : 'green'\">\n          <path d=\"M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z\"/>\n        </svg>\n      </span>\n    </button>\n  </div>\n\n  <div class=\"inline-label\">)</div>\n\n  <div class=\"wrapper\"\n       *ngFor=\"let range of [] | range:3; let i = index\">\n    <div>{{ digits[i + 3] }}</div>\n\n    <button type=\"button\"\n            class=\"ripple\"\n            (click)=\"toggleLock(i + 3)\"\n            [disabled]=\"disabled || isRandomizing\"\n            [ngClass]=\"{ 'locked': locks[i + 3], 'unlocked': locks[i + 3] }\">\n      <span *ngIf=\"lockIcons[i + 3] === true\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-150 -100 700 700\" [attr.fill]=\"lockColors[i + 3] ? 'red' : 'green'\">\n          <path d=\"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z\"/>\n        </svg>\n      </span>\n\n      <span *ngIf=\"lockIcons[i + 3] === false\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-150 -100 700 700\" [attr.fill]=\"lockColors[i + 3] ? 'red' : 'green'\">\n          <path d=\"M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z\"/>\n        </svg>\n      </span>\n    </button>\n  </div>\n\n  <div class=\"inline-label\">-</div>\n\n  <div class=\"wrapper\"\n       *ngFor=\"let range of [] | range:4; let i = index\">\n    <div>{{ digits[i + 6] }}</div>\n\n    <button type=\"button\"\n            class=\"ripple\"\n            (click)=\"toggleLock(i + 6)\"\n            [disabled]=\"disabled || isRandomizing\"\n            [ngClass]=\"{ 'locked': locks[i + 6], 'unlocked': locks[i+ 6] }\">\n      <span *ngIf=\"lockIcons[i + 6] === true\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-150 -100 700 700\" [attr.fill]=\"lockColors[i + 6] ? 'red' : 'green'\">\n          <path d=\"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z\"/>\n        </svg>\n      </span>\n\n      <span *ngIf=\"lockIcons[i + 6] === false\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-150 -100 700 700\" [attr.fill]=\"lockColors[i + 6] ? 'red' : 'green'\">\n          <path d=\"M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z\"/>\n        </svg>\n      </span>\n    </button>\n  </div>\n\n  <button type=\"button\"\n          class=\"randomize-button ripple\"\n          (click)=\"randomize()\"\n          [disabled]=\"disabled || isRandomizing\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z\"></path></svg>\n  </button>\n\n  <button type=\"button\"\n          class=\"randomize-button ripple\"\n          (click)=\"clearLocks()\"\n          [disabled]=\"disabled || isRandomizing\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z\"/></svg>\n  </button>\n\n  <button type=\"button\"\n          class=\"randomize-button ripple\"\n          (click)=\"reset()\"\n          [disabled]=\"disabled || isRandomizing\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z\"/></svg>\n  </button>\n</div>\n",
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return Ionic4PhoneSpinnerComponent_1; }),
                    multi: true
                }
            ],
            styles: ["input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.ionic4-phone-spinner{display:flex;width:100%}.ionic4-phone-spinner .wrapper{border-top:1px solid rgba(0,0,0,.12);float:left;max-width:50px;padding:1px}.ionic4-phone-spinner .wrapper button{padding:.5rem;overflow:hidden;border:0}.ionic4-phone-spinner .wrapper button:last-child{border:1px solid rgba(0,0,0,.12);border-radius:0 0 10px 10px;width:100%}.ionic4-phone-spinner .wrapper button:focus{outline:0}.ionic4-phone-spinner .wrapper button:disabled{cursor:not-allowed}.ionic4-phone-spinner .wrapper button:disabled svg{fill:rgba(0,0,0,.26)}.ionic4-phone-spinner .wrapper div{align-items:center;border-left:1px solid rgba(0,0,0,.12);border-right:1px solid rgba(0,0,0,.12);padding:.5rem;font-size:1rem;flex:1;min-width:20px;text-align:center;vertical-align:unset}.ionic4-phone-spinner .inline-label{float:left;padding-top:0;padding-left:5px;padding-right:5px;font-size:2em}.ionic4-phone-spinner .ripple{background-position:center;transition:background .3s}.ionic4-phone-spinner .ripple:hover{cursor:pointer;background:radial-gradient(circle,transparent 1%,rgba(0,0,0,.12) 1%) center/15000% rgba(0,0,0,.12)}.ionic4-phone-spinner .ripple:active{background-color:rgba(0,0,0,.12);background-size:100%;transition:background}.ionic4-phone-spinner .randomize-button{width:45px;border-radius:9px;margin-left:10px;height:37px}"]
        })
    ], Ionic4PhoneSpinnerComponent);
    return Ionic4PhoneSpinnerComponent;
}());

var RangePipe = /** @class */ (function () {
    function RangePipe() {
    }
    RangePipe.prototype.transform = function (items, quantity) {
        items.length = 0;
        for (var i = 0; i < quantity; i++) {
            items.push(i);
        }
        return items;
    };
    RangePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'range',
            pure: false
        })
    ], RangePipe);
    return RangePipe;
}());

var Ionic4PhoneSpinnerModule = /** @class */ (function () {
    function Ionic4PhoneSpinnerModule() {
    }
    Ionic4PhoneSpinnerModule_1 = Ionic4PhoneSpinnerModule;
    Ionic4PhoneSpinnerModule.forRoot = function () {
        return {
            ngModule: Ionic4PhoneSpinnerModule_1,
            providers: []
        };
    };
    var Ionic4PhoneSpinnerModule_1;
    Ionic4PhoneSpinnerModule = Ionic4PhoneSpinnerModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                Ionic4PhoneSpinnerComponent,
                RangePipe
            ],
            exports: [
                Ionic4PhoneSpinnerComponent,
                RangePipe
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            ]
        })
    ], Ionic4PhoneSpinnerModule);
    return Ionic4PhoneSpinnerModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=flubs-ionic4-phone-spinner.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Demo: @flubs/ionic4-phone-spinner\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-segment (ionChange)=\"difficulty = $event.detail?.value\">\n    <ion-segment-button *ngFor=\"let d of difficulties\"\n                        [value]=\"d\"\n                        [checked]=\"d === difficulty\">\n      <ion-label>\n        {{ d }}\n      </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-item-divider></ion-item-divider>\n\n  <ion-card *ngIf=\"difficulty === 'bad'\"\n            style=\"height: 100%;\">\n    <h4 style=\"margin-left: 10px;\">\n      Enter your phone number:\n    </h4>\n\n    <ionic4-phone-spinner\n            [number]=\"value\"\n            [options]=\"badOptions\"\n            (change)=\"change($event)\">\n    </ionic4-phone-spinner>\n  </ion-card>\n\n  <ion-card *ngIf=\"difficulty === 'badder'\"\n            style=\"height: 100%;\">\n    <h4 style=\"margin-left: 10px;\">\n      Try to enter your phone number:\n    </h4>\n\n    <ionic4-phone-spinner\n            [number]=\"value\"\n            [options]=\"badderOptions\"\n            (change)=\"change($event)\">\n    </ionic4-phone-spinner>\n  </ion-card>\n\n  <ion-card *ngIf=\"difficulty === 'baddest'\"\n            style=\"height: 100%;\">\n    <h4 style=\"margin-left: 10px;\">\n      You will never enter your phone number:\n    </h4>\n\n    <ionic4-phone-spinner\n            [number]=\"value\"\n            [options]=\"baddestOptions\"\n            (change)=\"change($event)\">\n    </ionic4-phone-spinner>\n  </ion-card>\n\n  <ion-card *ngIf=\"difficulty === 'satan'\"\n            style=\"height: 100%;\">\n    <h4 style=\"margin-left: 10px;\">\n      Good luck, fucker:\n    </h4>\n\n    <ionic4-phone-spinner\n            [number]=\"value\"\n            [options]=\"satanOptions\"\n            (change)=\"change($event)\">\n    </ionic4-phone-spinner>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @flubs/ionic4-phone-spinner */ "./node_modules/@flubs/ionic4-phone-spinner/fesm5/flubs-ionic4-phone-spinner.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_5__["Ionic4PhoneSpinnerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".selected-difficulty {\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qcnF1aWNrL2RldmVsb3BtZW50L2VuY291bnRpbmcvaW9uaWM0LXBob25lLXNwaW5uZXIvZGVtby9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3RlZC1kaWZmaWN1bHR5IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbiIsIi5zZWxlY3RlZC1kaWZmaWN1bHR5IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @flubs/ionic4-phone-spinner */ "./node_modules/@flubs/ionic4-phone-spinner/fesm5/flubs-ionic4-phone-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var HomePage = /** @class */ (function () {
    function HomePage() {
        this.difficulties = [
            'bad',
            'badder',
            'baddest',
            'satan',
        ];
        this.difficulty = this.difficulties[0];
        this.title = 'NgxBadPhoneSpinner';
        this.badOptions = new _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__["Ionic4PhoneSpinnerOptions"]();
        this.badderOptions = new _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__["Ionic4PhoneSpinnerOptions"]();
        this.badderOptions.locks = [
            _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__["LockOptions"].IGNORE,
            _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__["LockOptions"].MANUAL
        ];
        this.badderOptions.unlocks = [
            _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__["LockOptions"].MANUAL,
            _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__["LockOptions"].SHUFFLE
        ];
        this.baddestOptions = new _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__["Ionic4PhoneSpinnerOptions"]();
        this.baddestOptions.locks = [
            _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__["LockOptions"].IGNORE,
            _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__["LockOptions"].LIAR,
            _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__["LockOptions"].MANUAL,
            _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__["LockOptions"].RANDOM
        ];
        this.baddestOptions.unlocks = [
            _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__["LockOptions"].IGNORE,
            _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__["LockOptions"].MANUAL,
            _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__["LockOptions"].RANDOM,
            _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__["LockOptions"].SHUFFLE
        ];
        this.baddestOptions.shufflesPerClick = 10;
        this.baddestOptions.shuffleMilliseconds = 200;
        this.fuOptions = new _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__["Ionic4PhoneSpinnerOptions"]();
        this.satanOptions.locks = [
            _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__["LockOptions"].IGNORE,
            _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__["LockOptions"].LIAR,
            _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__["LockOptions"].MANUAL,
            _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__["LockOptions"].RANDOM,
            _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__["LockOptions"].SHUFFLE
        ];
        this.satanOptions.unlocks = [
            _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__["LockOptions"].IGNORE,
            _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__["LockOptions"].LIAR,
            _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__["LockOptions"].MANUAL,
            _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__["LockOptions"].RANDOM,
            _flubs_ionic4_phone_spinner__WEBPACK_IMPORTED_MODULE_1__["LockOptions"].SHUFFLE
        ];
        this.baddestOptions.shufflesPerClick = 20;
        this.baddestOptions.shuffleMilliseconds = 150;
        this.resetValue();
    }
    HomePage.prototype.resetValue = function () {
        this.value = '';
        for (var i = 0; i < 10; i++) {
            this.value += Math.round(Math.random() * 9);
        }
    };
    HomePage.prototype.submit = function () {
        alert(this.value);
    };
    HomePage.prototype.change = function (value) {
        this.value = value;
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-page',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map
