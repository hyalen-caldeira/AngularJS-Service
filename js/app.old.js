var app = angular.module("myApp", ["model", "ngTagsInput"]);

app.controller("customController", tagsCustomController);
app.controller("TodoCtrl", TodoCtrl);

function tagsCustomController() {
    this.tags = [
        { text: 'Batman' },
        { text: 'Superman' },
        { text: 'Spiderman' }
    ];
}

function TodoCtrl() {
    this.editMode = false;
    this.todos = [
        "Hyalen",
        "Iago",
        "Igor",
        "Nicole"
    ];


    this.addNewTodo = function() {
        this.todos.push(this.newTodo);
        this.newTodo = "";
    }


    this.triggerEditMode = function() {
        this.editMode = !this.editMode;
    }


    this.deleteTodo = function(index) {
        this.todos.splice(index, 1);

    }
}

/*
app.controller("myController", main);
app.controller("parentController", parent);
app.controller("childController", child);

function main($scope) {
    console.log("Dentro do controller ...");

    $scope.hourOfDay = 12;

    $scope.onChange = function() {
        console.log("Inside onChange function ...");
    }

    $scope.updateTime = function() {
        var currentDate = new Date();

        $scope.hourOfDay = currentDate.toTimeString();
    }
}

// As Controllers don't need inject the $scope
function parent() {
    this.anyValue = "parentController";
}

function child() {
    this.anyValue = "childController";
    // this.myList = [1, 2, 3, 4, 5];
    this.myList = [
        {"name" : "Hyalen", "age" : "22"},
        {"name" : "Iago", "age" : "19"},
        {"name" : "Igor", "age" : "4"},
        {"name" : "Nicole", "age" : "3"}
    ];
}
*/