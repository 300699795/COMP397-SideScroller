var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // OCEAN CLASS
    var Sky = (function (_super) {
        __extends(Sky, _super);
        // CONSTRUCTOR
        function Sky() {
            _super.call(this, assetLoader.getResult("sky"));
            // PUBLIC INSTANCE VARIABLES
            this._dx = 5;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Sky.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        Sky.prototype.reset = function () {
            this.y = 0;
            this.x = 0;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Sky.prototype._checkBounds = function () {
            if (this.x === -1280) {
                this.reset();
            }
        };
        return Sky;
    })(createjs.Bitmap);
    objects.Sky = Sky;
})(objects || (objects = {}));
//# sourceMappingURL=sky.js.map