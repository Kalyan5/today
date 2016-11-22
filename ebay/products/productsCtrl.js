(function(){
    
    function productsCtrl($scope){
        
        $scope.productsUrl="ebay/products/products.html";
        $scope.displayInProducts="hello everyone";
    }
    
    
    angular.module("products").controller("productsCtrl",["$scope",productsCtrl]);
    
})();