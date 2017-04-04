var app = angular.module("serviceApp", []);

app.controller("serviceController", serviceController);

function serviceController() {
    this.contacts = [
        {
            "gender":"male",
            "name": {
                "title":"monsieur",
                "first":"léon",
                "last":"mathieu"
            },
            "location": {
                "street":"9576 rue abel-gance",
                "city":"paudex",
                "state":"basel-landschaft",
                "postcode":5710
            },
            "email":"léon.mathieu@example.com",
            "login": {
                "username":"orangeleopard222",
                "password":"abcd",
                "salt":"u6W7Q8xs",
                "md5":"9dc24ec04654ba755fe05738a0b1f5c2",
                "sha1":"c9d9381f0eee47bb75cc02b2f2984b0610a9ca45",
                "sha256":"7186e1af58bcc9e5a349b48974efa576f207e83d18924f999cdcb7d9499dc250"
            },
            "dob":"1967-06-22 17:35:35",
            "registered":"2004-03-25 16:30:53",
            "phone":"(811)-126-1088",
            "cell":"(851)-838-5808",
            "id": {
                "name":"AVS",
                "value":"756.NUSE.CRKO.73"
            },"picture": {
                "large":"https://randomuser.me/api/portraits/men/87.jpg",
                "medium":"https://randomuser.me/api/portraits/med/men/87.jpg",
                "thumbnail":"https://randomuser.me/api/portraits/thumb/men/87.jpg"
            },
            "nat":"CH"
        }, {"gender":"male","name":{"title":"mr","first":"riley","last":"thomas"},"location":{"street":"3703 kennedy road","city":"new plymouth","state":"waikato","postcode":85454},"email":"riley.thomas@example.com","login":{"username":"blackgorilla336","password":"eggman","salt":"Snysa3Ss","md5":"24a89c35e7f306a14a363ade9fd0c715","sha1":"587adeaf3260be7f1f42969ce4fca9d83d8c9f9f","sha256":"f6e040dc25d0b905be851565ffab2e2d595bfe26817d994e6ae337e9e09bdbe0"},"dob":"1947-11-19 10:27:14","registered":"2004-10-21 18:29:52","phone":"(438)-299-3411","cell":"(263)-032-3343","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/67.jpg","medium":"https://randomuser.me/api/portraits/med/men/67.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/67.jpg"},"nat":"NZ"}
    ];

    this.selectContact = function(index) {
        this.selectedContact = this.contacts[index];
    }
}