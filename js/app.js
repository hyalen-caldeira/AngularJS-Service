// Create the module
var app = angular.module("serviceApp", []);

app.controller("headerController", headerController);
app.controller("footerController", footerController);

function headerController(keyValue, functionValue, serviceSrvc) {
    this.valueService = keyValue.company;
    functionValue();
    // console.log(factorySrvc.author);
    console.log(serviceSrvc.author);
}

function footerController(keyValue, functionValue, serviceSrvc) {
    this.valueService = keyValue.country;
    functionValue();
    // console.log(factorySrvc.author);
    console.log(serviceSrvc.author);
}