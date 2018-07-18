(function() {

    var AccountController = function(){

        var vm = this;
        vm.isHidden = false;

        vm.accounts = [
            {'firstName': 'John', 'secondName': 'Doe','accountNumber': '1234'},
            {'firstName': 'Jane','secondName': 'Doe','accountNumber': '1235'},
            {'firstName': 'Kat', 'secondName': 'The Cat', 'accountNumber': '3333'},
            {'firstName': 'Ben', 'secondName': 'Chandler', 'accountNumber': '4431'},
            {'firstName': 'THE', 'secondName': 'SHAFEEQ', 'accountNumber': '1111'},
            {'firstName': 'John', 'secondName': 'Gordon', 'accountNumber': '9999'}
        ];

        vm.hideTable = function(){
            vm.isHidden = !vm.isHidden
        };

        vm.changeColor = function(color){
            vm.color = {
                'color': color
            };
        };
    };

    angular.module('accountApp').controller('accountController',[AccountController]);
}());