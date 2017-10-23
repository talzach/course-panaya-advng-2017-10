const myApp = angular.module("myApp", []);

myApp.service("xxx", function() {
});

myApp.config(["$controllerProvider", function($controllerProvider) {
    console.log("config", $controllerProvider);

    //myApp.$controllerProvider = $controllerProvider;

    myApp.controller = $controllerProvider.register;
}]);

myApp.run(["$rootScope", function($rootScope) {
    console.log("run", $rootScope);
}]);
