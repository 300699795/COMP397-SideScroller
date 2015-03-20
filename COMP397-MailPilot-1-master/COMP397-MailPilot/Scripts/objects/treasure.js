var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // TREASURE CLASS
    var Treasure = (function (_super) {
        __extends(Treasure, _super);
        // CONSTRUCTOR
        function Treasure() {
            _super.call(this, "treasure");
            this.sound = "coin";
            this._dx = 5;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Treasure.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        Treasure.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 480);
            this.x = this.width * 12;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Treasure.prototype._checkBounds = function () {
            if (-this.x >= (640 + this.width)) {
                this.reset();
            }
        };
        return Treasure;
    })(objects.GameObject);
    objects.Treasure = Treasure;
})(objects || (objects = {}));
//# sourceMappingURL=treasure.js.map