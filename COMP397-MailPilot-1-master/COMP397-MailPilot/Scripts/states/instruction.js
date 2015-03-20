/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/treasure.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/shark.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    // MENU STATE CLASS
    var Instruction = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Instruction() {
            this.play = false;
            // Instantiate Game Container
            this.game = new createjs.Container();
            //Ocean object
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);
            //Game Over Label
            this.instructionLabel = new objects.Label(160, 20, "You own the whole canvas!\n Hover mouse to the canvas and control your submarin!");
            this.instructionLabel.font = "60px Consolas";
            this.instructionLabel.regX = this.instructionLabel.getMeasuredWidth() * 0.5;
            this.instructionLabel.regY = this.instructionLabel.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.instructionLabel);
            //Play Button
            this.instructionButton = new objects.Button(320, 280, "playButton");
            this.instructionButton.on("click", this.playClicked, this);
            this.game.addChild(this.instructionButton);
            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor
        Instruction.prototype.playClicked = function () {
            this.play = true;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Instruction.prototype.update = function () {
            this.ocean.update();
            if (this.play) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.PLAY_STATE;
                stateChanged = true;
            }
            stage.update(); // Refreshes our stage
        }; // Update Method
        return Instruction;
    })();
    states.Instruction = Instruction; // Menu Class
})(states || (states = {})); // States Module 
//# sourceMappingURL=instruction.js.map