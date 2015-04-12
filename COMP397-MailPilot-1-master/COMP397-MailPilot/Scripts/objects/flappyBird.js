var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // SUBMARINE CLASS
    var FlappyBird = (function (_super) {
        __extends(FlappyBird, _super);
        // CONSTRUCTOR
        function FlappyBird() {
            _super.call(this, assetLoader.getResult("flappyBird"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.x = 430 * 0.5;
            this.y = 430 * 0.5;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            createjs.Sound.play("background", { loop: -1 });
        }
        // PUBLIC METHODS
        FlappyBird.prototype.update = function () {
            this.x = stage.mouseX;
            this.y = stage.mouseY;
        };
        return FlappyBird;
    })(createjs.Bitmap);
    objects.FlappyBird = FlappyBird;
})(objects || (objects = {}));
//# sourceMappingURL=flappyBird.js.map