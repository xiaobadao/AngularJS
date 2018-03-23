
angular.module("cart",[])
.factory("cart",function () {
    var cartData = [];
    return {
       addProduct :function (id,name,price) {
           var addedToWxistingItem = false;

           for (var i=0;i<cartData.length;i++){
               if (cartData[i].id == id){
                   cartData[i].count++;
                   addedToWxistingItem = true;
                   break ;
               }
           }
           if (!addedToWxistingItem){
               cartData.push({
                   count:1,id:id,price:price,name:name
               });
           }
       },
        removeProduct:function (id) {
            for (var  i=0;i<cartData.length;i++){
                if (cartData[i].id==id){
                    cartData.splice(i,1);
                    break;
                }
            }
        },
        getProduct:function () {
            return cartData;
        }
    }
})
.direction("cartSunmmary",function (cart) {
    return{
        restrict:"E",
        templateUrl:"components/cart/cartSummary.html",
        controller:function ($scope) {
            var cartData = cart.getProduct();
            $scope.total = function () {
                var total = 0;
                for (var i=0;i<cartData.length;i++){
                    total += (cartData[i].price*cartData[i].count);
                }
                return total;
            }

            $scope.itemCount = function () {
                var  total = 0;
                for (var i = 0;i<cartData.length;i++){
                    total += cartData[i].count;
                }
                return total;
            }
        }
    }
});