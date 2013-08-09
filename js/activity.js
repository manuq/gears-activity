define(function (require) {
    var activity = require("sugar-web/activity/activity");
    var radioButtonsGroup = require("sugar-web/graphics/radiobuttonsgroup");
    require("gearsketch_util");
    require("gearsketch_model");
    require("gearsketch_main");

    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {

        // Initialize the activity.
        activity.setup();

        var gearSketch = new window.gearsketch.GearSketch(false);

        // Gear button.
        var gearButton = document.getElementById("gear-button");
        gearButton.addEventListener('click', function (event) {
            if (gearSketch.isDemoPlaying) {
                gearSketch.showButtons = false;
                gearSketch.stopDemo();
                return;
            }
            gearSketch.selectedButton = "gearButton";
        });

        // Chain button.
        var chainButton = document.getElementById("chain-button");
        chainButton.addEventListener('click', function (event) {
            if (gearSketch.isDemoPlaying) {
                gearSketch.showButtons = false;
                gearSketch.stopDemo();
                return;
            }
            gearSketch.selectedButton = "chainButton";
        });

        // Momentum button.
        var momentumButton = document.getElementById("momentum-button");
        momentumButton.addEventListener('click', function (event) {
            if (gearSketch.isDemoPlaying) {
                gearSketch.showButtons = false;
                gearSketch.stopDemo();
                return;
            }
            gearSketch.selectedButton = "momentumButton";
        });

        // Play button.
        var playButton = document.getElementById("play-button");
        playButton.addEventListener('click', function (event) {
            if (gearSketch.isDemoPlaying) {
                gearSketch.showButtons = false;
                gearSketch.stopDemo();
                return;
            }
            gearSketch.selectedButton = "playButton";
        });

        var radioButtons = new radioButtonsGroup.RadioButtonsGroup(
        [gearButton, chainButton, momentumButton, playButton]);

        // Clear button.
        var clearButton = document.getElementById("clear-button");
        clearButton.addEventListener('click', function (event) {
            if (gearSketch.isDemoPlaying) {
                gearSketch.showButtons = false;
                gearSketch.stopDemo();
                return;
            }
            gearSketch.board.clear();
        });

        // Help button.
        var helpButton = document.getElementById("help-button");
        helpButton.addEventListener('click', function (event) {
            if (gearSketch.isDemoPlaying) {
                gearSketch.stopDemo();
                return;
            }
            gearSketch.showButtons = true;
            gearSketch.playDemo();
        });

    });

});
