app.controller('MainController', ['$scope', function ($scope) {
    $scope.toDo = {
        list: ['Workout', 'Clean', 'Study', 'Clean Car', 'Oil Change']
    }
    $scope.books = {
        list: []
    }
    $scope.addItem = function (itemList, item) {
        itemList.push($scope.addToDo);
    }
}])