(function() {

    var TraineeController =  function(dataService, $state) {

        var vm = this;

        vm.isInfoHidden = true;
        vm.isListHidden = false;

        vm.hideList = function(){
            vm.isListHidden = !vm.isListHidden
        };

        vm.hideInfo = function(){
            vm.isInfoHidden = !vm.isInfoHidden
        };

        vm.passTrainee = function (data) {
            console.log("passtrainee function");
            console.log(data);
            dataService.setData(data);
            $state.go("traineeInfo");
        };

        vm.selectedTrainee = dataService.getData();

        vm.trainees = [{
            "name": "Ekaterina",
            "surname": "Genova",
            "fav": "Javascript",
            "subjects": [
                {
                    "name": "database",
                    "score": 4.5
                }, {
                    "name": "java",
                    "score": 4.5
                }, {
                    "name": "javascript",
                    "score": 4.5
                }, {
                    "name": "testing",
                    "score": 4
                }
            ]
        }, {
            "name": "Tibor",
            "surname": "Gazsovics",
            "fav": "HTML/Javascript"
        }, {
            "name": "Hussein",
            "surname": "Tejan",
            "fav": "javascript"
        }, {
            "name": "George",
            "surname": "Timbrell",
            "fav": "bash"
        }, {
            "name": "Sam",
            "surname": "Kirk",
            "fav": "Javascript"
        }, {
            "name": "Benny",
            "surname": "Wong",
            "fav": "Python"
        }, {
            "name": "Nawid",
            "surname": "Mujadidi",
            "fav": "Java"
        }, {
            "name": "Christopher",
            "surname": "Darrall",
            "fav": "Cobalt"
        }, {
            "name": "Daryl",
            "surname": "Conway",
            "fav": "Java"
        }, {
            "name": "Jarad",
            "surname": "Huggard",
            "fav": "Java"
        }, {
            "name": "Liam",
            "surname": "Donoghue",
            "fav": ""
        }];

    };

    angular.module('accountApp').controller('traineeController', ['dataService', '$state',TraineeController], function (serviceId) {
        
    });
}());