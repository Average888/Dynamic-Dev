/**
 * Created by PC on 15/07/2015.
 */
app.factory('forecast', ['$http', function($http) {
    return $http.get('http://backpack.tf/api/IGetMarketPrices/v1/?key=55a60139b98d887c668b46a1&appid=730')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);


