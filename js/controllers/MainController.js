app.controller('MainController', ['$scope', function ($scope) {
    $scope.list = ['Workout', 'Clean', 'Study', 'Clean Car', 'Oil Change'];
    $scope.addItem = function () {
        $scope.list.push($scope.addToDo);
    }
}])