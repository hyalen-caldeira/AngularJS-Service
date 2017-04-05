(function() {
    // Get the module
    var app = angular.module("serviceApp");

    app.controller("serviceController", serviceController);

    function serviceController(contactDataSrvc) {
        this.contacts = contactDataSrvc.contacts;

        this.selectedContact = this.contacts[0];

        this.selectContact = function(index) {
            this.selectedContact = this.contacts[index];
        }
    }
})();