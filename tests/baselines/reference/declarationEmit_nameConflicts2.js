//// [declarationEmit_nameConflicts2.ts]
module X.Y.base {
    export function f() { }
    export class C { }
    export module M {
        export var v;
    }
    export enum E { }
}

module X.Y.base.Z {
    export var f = X.Y.base.f; // Should be base.f
    export var C = X.Y.base.C; // Should be base.C
    export var M = X.Y.base.M; // Should be base.M
    export var E = X.Y.base.E; // Should be base.E
}

//// [declarationEmit_nameConflicts2.js]
var X;
(function (X) {
    (function (Y) {
        (function (base) {
            function f() {
            }
            base.f = f;
            var C = (function () {
                function C() {
                }
                return C;
            })();
            base.C = C;
            (function (M) {
                M.v;
            })(base.M || (base.M = {}));
            var M = base.M;
            (function (E) {
            })(base.E || (base.E = {}));
            var E = base.E;
        })(Y.base || (Y.base = {}));
        var base = Y.base;
    })(X.Y || (X.Y = {}));
    var Y = X.Y;
})(X || (X = {}));
var X;
(function (X) {
    (function (Y) {
        (function (base) {
            (function (Z) {
                Z.f = X.Y.base.f;
                Z.C = X.Y.base.C;
                Z.M = X.Y.base.M;
                Z.E = X.Y.base.E;
            })(base.Z || (base.Z = {}));
            var Z = base.Z;
        })(Y.base || (Y.base = {}));
        var base = Y.base;
    })(X.Y || (X.Y = {}));
    var Y = X.Y;
})(X || (X = {}));


//// [declarationEmit_nameConflicts2.d.ts]
declare module X.Y.base {
    function f(): void;
    class C {
    }
    module M {
        var v: any;
    }
    enum E {
    }
}
declare module X.Y.base.Z {
    var f: typeof base.f;
    var C: typeof base.C;
    var M: typeof base.M;
    var E: typeof base.E;
}
