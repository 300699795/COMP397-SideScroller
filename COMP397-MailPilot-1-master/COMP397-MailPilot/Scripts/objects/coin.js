var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // TREASURE CLASS
    var Coin = (function (_super) {
        __extends(Coin, _super);
        // CONSTRUCTOR
        function Coin() {
            _super.call(this, "treasure");
            this.sound = "coin";
            this._dx = 15;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Coin.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        Coin.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 480);
            this.x = this.width * 12;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Coin.prototype._checkBounds = function () {
            if (-this.x >= (640 + this.width)) {
                this.reset();
            }
        };
        return Coin;
    })(objects.GameObject);
    objects.Coin = Coin;
})(objects || (objects = {}));
//# sourceMappingURL=coin.js.map