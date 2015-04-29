angular.module('rcap.controllers', [])

    .controller('DashCtrl', function ($scope) {
        var slider =
            Swipe(document.getElementById('slider'), {
                auto: 3000,
                continuous: true,
                callback: function (pos) {
                    var i = bullets.length;
                    while (i--) {
                        bullets[i].className = ' ';
                    }
                    bullets[pos].className = 'on';

                }
            });
        var bullets = document.getElementById('position').getElementsByTagName('li');
    })

    .controller('BusinessCtrl', function ($scope, Business) {
        $scope.curr_business = Business.all_curr_businesses();
        $scope.his_buisness = Business.all_his_businesses();
        $scope.remove = function (index) {
            Business.remove(index);
        }
    })

    .controller('BusinessDetailCtrl', function ($scope, $stateParams, Business) {

        $scope.buisness = Business.get_his_business($stateParams.businessId);
    })

    .controller('ApplyCtrl', function ($scope) {
        console.log('Doing ApplyCtrl', $scope.loginData);
        //$scope.buisness = Business.get_his_business($stateParams.businessId);
    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
