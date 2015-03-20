module objects {
    // SHARK CLASS
    export class Shark extends objects.GameObject {

        // CONSTRUCTOR
        constructor() {
            super("shark");
            this.sound = "hit";
            this._dx = 10;

            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            
            this.x -= this._dx;

            this._checkBounds();
        }

        public reset() {
            this.y = Math.floor(Math.random() * 480);
            this.x = this.width * 3;
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            if (-this.x >= (640 + this.width)) {
                this.reset();
            }
        }

    }

}  