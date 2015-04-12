
module objects {
    // SUBMARINE CLASS
    export class FlappyBird extends createjs.Bitmap {
        public width: number;
        public height: number;
        // CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("flappyBird"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.x = 430 * 0.5;
            this.y = 430 * 0.5;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            createjs.Sound.play("water", {loop: -1});
        }

        // PUBLIC METHODS
        public update() {
            this.x = stage.mouseX;
            this.y = stage.mouseY;
        }

    }

} 