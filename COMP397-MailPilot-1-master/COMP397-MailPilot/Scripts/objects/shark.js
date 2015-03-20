var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // SHARK CLASS
    var Shark = (function (_super) {
        __extends(Shark, _super);
        // CONSTRUCTOR
        function Shark() {
            _super.call(this, "shark");
            this.sound = "hit";
            this._dx = 10;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Shark.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        Shark.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 480);
            this.x = this.width * 3;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Shark.prototype._checkBounds = function () {
            if (-this.x >= (640 + this.width)) {
                this.reset();
            }
        };
        return Shark;
    })(objects.GameObject);
    objects.Shark = Shark;
})(objects || (objects = {}));
//# sourceMappingURL=shark.js.map