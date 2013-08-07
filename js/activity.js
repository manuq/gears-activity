define(function (require) {
    var activity = require("sugar-web/activity/activity");
    require("gearsketch_util");
    require("gearsketch_model");
    require("gearsketch_main");

    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {

        // Initialize the activity.
        activity.setup();

        new window.gearsketch.GearSketch();

    });

});
