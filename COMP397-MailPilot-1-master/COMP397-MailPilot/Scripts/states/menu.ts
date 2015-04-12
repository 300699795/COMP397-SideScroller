/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/sky.ts" />
/// <reference path="../objects/flappyBird.ts" />
/// <reference path="../objects/pipe.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />

/// <reference path="../objects/scoreboard.ts" />

module states {
    // MENU STATE CLASS
    export class Menu {
        // Game Objects 
        public game: createjs.Container;
        public sky: objects.Sky;
        public treasureHunter: objects.Label;
        public playButton: objects.Button;
        public play: boolean = false;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            

            // Instantiate Game Container
            this.game = new createjs.Container();

            //Ocean object
            this.sky = new objects.Sky();
            this.game.addChild(this.sky);

            //Game Over Label
            this.treasureHunter = new objects.Label(320, 40, "Easy Flappy Bird!");
            this.treasureHunter.font = "60px Consolas";
            this.treasureHunter.regX = this.treasureHunter.getMeasuredWidth() * 0.5;
            this.treasureHunter.regY = this.treasureHunter.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.treasureHunter);


            //Play Button
            this.playButton = new objects.Button(320, 280, "playButton");
            this.playButton.on("click", this.playClicked, this);

            this.game.addChild(this.playButton);

            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor

        public playClicked() {
            this.play = true;
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public update() {

            this.sky.update();

            if (this.play) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.PLAY_STATE;
                stateChanged = true;
            }

            stage.update(); // Refreshes our stage

        } // Update Method

    } // Menu Class


} // States Module 