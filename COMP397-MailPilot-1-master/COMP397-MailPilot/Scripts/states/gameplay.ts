/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/treasure.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/shark.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/label.ts" />

module states {

    export class GamePlay {
        // Game Objects 
        public game: createjs.Container;
        public scoreboard: objects.ScoreBoard;
        public submarine: objects.Submarine;
        public treasure: objects.Treasure;
        public shark: objects.Shark[] = [];
        public ocean: objects.Ocean;

        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();


            //Ocean object
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);

            //Treasure object
            this.treasure = new objects.Treasure();
            this.game.addChild(this.treasure);


            //Submarine object
            this.submarine = new objects.Submarine();
            this.game.addChild(this.submarine);

            //Shark object
            for (var shark = 1; shark >= 0; shark--) {
                this.shark[shark] = new objects.Shark();
                this.game.addChild(this.shark[shark]);
            }


            // Instantiate Scoreboard
            this.scoreboard = new objects.ScoreBoard(this.game);

            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor


        // DISTANCE CHECKING METHOD
        public distance(p1: createjs.Point, p2: createjs.Point): number {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        } //Distance Method

        // CHECK COLLISION METHOD
        public checkCollision(collider: objects.GameObject) {
            if (this.scoreboard.active) {
                var planePosition: createjs.Point = new createjs.Point(this.submarine.x, this.submarine.y);
                var objectPosition: createjs.Point = new createjs.Point(collider.x, collider.y);
                var theDistance = this.distance(planePosition, objectPosition);
                if (theDistance < ((this.submarine.height * 0.5) + (collider.height * 0.5))) {
                    if (collider.isColliding != true) {
                        createjs.Sound.play(collider.sound);
                        if (collider.name == "shark") {
                            this.scoreboard.lives--;
                        }
                        if (collider.name == "treasure") {
                            this.scoreboard.score += 100;
                        }
                    }
                    collider.isColliding = true;
                } else {
                    collider.isColliding = false;
                }
            }
        } // checkCollision Method

        public update() {

            this.ocean.update();

            this.treasure.update();

            this.submarine.update();

            for (var shark = 1; shark >= 0; shark--) {
                this.shark[shark].update();

                this.checkCollision(this.shark[shark]);
            }

            this.checkCollision(this.treasure);


            this.scoreboard.update();

            if (this.scoreboard.score == 500) {
                currentState = constants.LVL2_STATE;
                stateChanged = true;
            }

            if (this.scoreboard.lives < 1) {
                this.scoreboard.active = false;
                createjs.Sound.stop();
                currentScore = this.scoreboard.score;
                if (currentScore > highScore) {
                    highScore = currentScore;
                }
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            }


            stage.update(); // Refreshes our stage

        } // Update Method

    } // GamePlay Class


}