var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // SHARK CLASS
    var Pipe = (function (_super) {
        __extends(Pipe, _super);
        // CONSTRUCTOR
        function Pipe() {
            _super.call(this, "pipe");
            this.sound = "hit";
            this._dx = 10;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Pipe.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        Pipe.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 120);
            this.x = this.width * 12;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Pipe.prototype._checkBounds = function () {
            if (-this.x >= (640 + this.width)) {
                this.reset();
            }
        };
        return Pipe;
    })(objects.GameObject);
    objects.Pipe = Pipe;
})(objects || (objects = {}));
//# sourceMappingURL=pipe.js.map