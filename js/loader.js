requirejs.config({
    baseUrl: "lib",
    shim: {
        gearsketch_util: {
            exports: 'gearsketch/gearsketch_util'
        },
        gearsketch_model: {
            exports: 'gearsketch/gearsketch_model'
        },
        gearsketch_main: {
            exports: 'gearsketch/gearsketch_main'
        }
    },
    paths: {
        activity: "../js",
        gearsketch_util: "../lib/gearsketch/gearsketch_util",
        gearsketch_model: "../lib/gearsketch/gearsketch_model",
        gearsketch_main: "../lib/gearsketch/gearsketch_main"
    }
});

requirejs(["activity/activity"]);
