(function() {
    // Get the module
    var app = angular.module("serviceApp");

    /* Constructor class */
    function prepareAppConfigService(keyValue) {
        this.name = keyValue;
        this.author = "Nicole Gontijo Caldeira"
        this.buildDate = new Date().toDateString();

        console.log("Inside Service Service");
    }

    app.service("serviceSrvc", prepareAppConfigService); // The same of new prepareAppConfigService()
})();

/*
function prepareAppConfigFactory(keyValue) {
    var value = {};

    value.name = keyValue;
    value.author = "Igor Gontijo Caldeira"
    value.buildDate = new Date().toDateString();

    console.log("Inside Factory Service");

    return value;
}

app.factory("factorySrvc", prepareAppConfigFactory); // O mesmo que prepareAppConfigFactory()
*/