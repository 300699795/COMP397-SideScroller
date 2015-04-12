module objects {
    // SHARK CLASS
    export class Pipe extends objects.GameObject {

        // CONSTRUCTOR
        constructor() {
            super("pipe");
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
            this.y = Math.floor(Math.random() * 120);
            this.x = this.width * 12;
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            if (-this.x >= (640 + this.width)) {
                this.reset();
            }
        }

    }

}  