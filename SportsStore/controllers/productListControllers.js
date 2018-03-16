
angular.module("sportsStore")
    .constant("productListPageCount",3)
    .constant("productListActiveClass","btn-success")
.controller("productListCtrl",function ($scope,$filter,productListActiveClass,productListPageCount) {

    var selectedCategory = null;
    $scope.selectPage = 1;
    $scope.pageSize = productListPageCount;

    $scope.selectCategory = function (newCategory) {

        selectedCategory = newCategory;
        $scope.selectPage = 1;
    }
    $scope.selectPage = function (newPage) {
        $scope.selectPage = newPage;
    }
    $scope.categoryFilterFn = function (product) {

        return selectedCategory == null || product.category == selectedCategory;
    }

    $scope.getCategoryClass = function (category) {
        return category==selectedCategory ?productListActiveClass:"";
    }

    $scope.getPageClass = function (page) {
        return $scope.selectPage == page ?productListActiveClass:"";
    }
})