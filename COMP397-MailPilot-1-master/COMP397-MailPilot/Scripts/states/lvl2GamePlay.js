/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/treasure.ts" />
/// <reference path="../objects/lvl2Ocean.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/shark.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
    var lvl2GamePlay = (function () {
        function lvl2GamePlay() {
            this.shark = [];
            // Instantiate Game Container
            this.game = new createjs.Container();
            //Ocean object
            this.lvl2Ocean = new objects.lvl2Ocean();
            this.game.addChild(this.lvl2Ocean);
            //Treasure object
            this.treasure = new objects.Treasure();
            this.game.addChild(this.treasure);
            //Submarine object
            this.submarine = new objects.Submarine();
            this.game.addChild(this.submarine);
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
        lvl2GamePlay.prototype.distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }; //Distance Method
        // CHECK COLLISION METHOD
        lvl2GamePlay.prototype.checkCollision = function (collider) {
            if (this.scoreboard.active) {
                var planePosition = new createjs.Point(this.submarine.x, this.submarine.y);
                var objectPosition = new createjs.Point(collider.x, collider.y);
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
                }
                else {
                    collider.isColliding = false;
                }
            }
        }; // checkCollision Method
        lvl2GamePlay.prototype.update = function () {
            this.lvl2Ocean.update();
            this.treasure.update();
            this.submarine.update();
            for (var shark = 1; shark >= 0; shark--) {
                this.shark[shark].update();
                this.checkCollision(this.shark[shark]);
            }
            this.checkCollision(this.treasure);
            this.scoreboard.update();
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
        }; // Update Method
        return lvl2GamePlay;
    })();
    states.lvl2GamePlay = lvl2GamePlay; // GamePlay Class
})(states || (states = {}));
//# sourceMappingURL=lvl2gameplay.js.map