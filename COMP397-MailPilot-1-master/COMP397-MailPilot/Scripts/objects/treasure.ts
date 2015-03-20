module objects {
    // TREASURE CLASS
    export class Treasure extends objects.GameObject{

        // CONSTRUCTOR
        constructor() {
            super("treasure");
            this.sound = "coin";
            this._dx = 5;

            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            
            this.x -= this._dx;

            this._checkBounds();
        }

        public reset() {
            this.y = Math.floor(Math.random() * 480);
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