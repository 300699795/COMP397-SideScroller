var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // SUBMARINE CLASS
    var Submarine = (function (_super) {
        __extends(Submarine, _super);
        // CONSTRUCTOR
        function Submarine() {
            _super.call(this, assetLoader.getResult("submarine"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.x = 430 * 0.5;
            this.y = 430 * 0.5;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            createjs.Sound.play("water", { loop: -1 });
        }
        // PUBLIC METHODS
        Submarine.prototype.update = function () {
            this.x = stage.mouseX;
            this.y = stage.mouseY;
        };
        return Submarine;
    })(createjs.Bitmap);
    objects.Submarine = Submarine;
})(objects || (objects = {}));
//# sourceMappingURL=submarine.js.map