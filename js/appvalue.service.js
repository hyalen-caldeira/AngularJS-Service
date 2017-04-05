(function () {
    // Get the module
    var app = angular.module("serviceApp");

    app.value("keyValue", {
        "company" : "B2W Digital",
        "country" : "Brazil"
    });

    app.value("functionValue", function () {
        console.log("Log service ...")
    });
})();