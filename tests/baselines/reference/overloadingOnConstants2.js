//// [overloadingOnConstants2.ts]
class C {
   private x = 1;
}
class D extends C {}
class E { 
   private y = 1;
}
function foo(x: "hi", items: string[]): D;
function foo(x: "bye", items: string[]): E;
function foo(x: string, items: string[]): C {
   return null;
}
var a: D = foo("hi", []); // D
var b: E = foo("bye", []); // E 
var c = foo("um", []); // error


//function bar(x: "hi", items: string[]): D;
function bar(x: "bye", items: string[]): E;
function bar(x: string, items: string[]): C;
function bar(x: string, items: string[]): C {
   return null;
}

var d: D = bar("hi", []); // D
var e: E = bar("bye", []); // E 
var f: C = bar("um", []); // C

//// [overloadingOnConstants2.js]
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var C = (function () {
    function C() {
        this.x = 1;
    }
    return C;
})();
var D = (function (_super) {
    __extends(D, _super);
    function D() {
        _super.apply(this, arguments);
    }
    return D;
})(C);
var E = (function () {
    function E() {
        this.y = 1;
    }
    return E;
})();
function foo(x, items) {
    return null;
}
var a = foo("hi", []);
var b = foo("bye", []);
var c = foo("um", []);
function bar(x, items) {
    return null;
}
var d = bar("hi", []);
var e = bar("bye", []);
var f = bar("um", []);
