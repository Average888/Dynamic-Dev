/**
 * Created by PC on 15/07/2015.
 */
app.factory('forecast', ['$http', function($http) {
    return $http.get('../guns.json')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
    console.log(data)
}]);


