/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/sky.ts" />
/// <reference path="../objects/flappyBird.ts" />
/// <reference path="../objects/pipe.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/label.ts" />

module states {

    export class GamePlay {
        // Game Objects 
        public game: createjs.Container;
        public scoreboard: objects.ScoreBoard;
        public flappyBird: objects.FlappyBird;
        public coin: objects.Coin;
        public pipe: objects.Pipe[] = [];
        public sky: objects.Sky;

        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();


            //Sky object
            this.sky = new objects.Sky();
            this.game.addChild(this.sky);

            //Coin object
            this.coin = new objects.Coin();
            this.game.addChild(this.coin);


            //flappy bird object
            this.flappyBird = new objects.FlappyBird();
            this.game.addChild(this.flappyBird);

            //pipe object
            for (var pipe = 1; pipe >= 0; pipe--) {
                this.pipe[pipe] = new objects.Pipe();
                this.game.addChild(this.pipe[pipe]);
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
                var planePosition: createjs.Point = new createjs.Point(this.flappyBird.x, this.flappyBird.y);
                var objectPosition: createjs.Point = new createjs.Point(collider.x, collider.y);
                var theDistance = this.distance(planePosition, objectPosition);
                if (theDistance < ((this.flappyBird.width * 0.5) + (collider.width * 0.5))) {
                    if (collider.isColliding != true) {
                        createjs.Sound.play(collider.sound);
                        if (collider.name == "pipe") {
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

            this.sky.update();

            this.coin.update();

            this.flappyBird.update();

            for (var pipe = 1; pipe >= 0; pipe--) {
                this.pipe[pipe].update();

                this.checkCollision(this.pipe[pipe]);
            }

            this.checkCollision(this.coin);
            

            
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