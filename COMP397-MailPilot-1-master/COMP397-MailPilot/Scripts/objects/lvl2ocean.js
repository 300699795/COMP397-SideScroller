var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // OCEAN CLASS
    var lvl2Ocean = (function (_super) {
        __extends(lvl2Ocean, _super);
        // CONSTRUCTOR
        function lvl2Ocean() {
            _super.call(this, assetLoader.getResult("lvl2Ocean"));
            // PUBLIC INSTANCE VARIABLES
            this._dx = 5;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        lvl2Ocean.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        lvl2Ocean.prototype.reset = function () {
            this.y = 0;
            this.x = 0;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        lvl2Ocean.prototype._checkBounds = function () {
            if (this.x === -640) {
                this.reset();
            }
        };
        return lvl2Ocean;
    })(createjs.Bitmap);
    objects.lvl2Ocean = lvl2Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=lvl2Ocean.js.map