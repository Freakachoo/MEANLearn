angular.module('app').controller('mvMainCtrl', function($scope) {
    $scope.courses = [
        {name: 'C# sdsfdsfds', featured: true, published: new Date()},
        {name: 'JavaScript sdsfdsfds', featured: true, published: new Date()},
        {name: 'HTML sdsfdsfds', featured: false, published: new Date()},
        {name: 'CSS sdsfdsfds', featured: false, published: new Date()}
    ];
});