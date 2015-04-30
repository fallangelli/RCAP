angular.module('rcap.controllers', [])

    .controller('ResultCtrl', function ($scope, $state, $ionicLoading, $timeout, $ionicPopup) {
        $scope.result_apply = {};
        $scope.request_result = function () {

            if (!$scope.result_apply.type) {
                $ionicPopup.alert({
                    title: '错误提示',
                    template: '请选择信息类型!'
                });
                return;
            }

            if (!$scope.result_apply.CAPTCHA) {
                $ionicPopup.alert({
                    title: '错误提示',
                    template: '请输入验证码!'
                });
                return;
            }

            if ($scope.result_apply.type == 'tips')
                $state.go('result-tips');
            else if ($scope.result_apply.type == 'summary')
                $state.go('result-summary');
            //else if ($scope.result_apply.type == 'report')
            //    $state.go('result-summary');

            $ionicLoading.show({
                template: '加载中...'
            });
            $timeout(function () {
                $ionicLoading.hide();
            }, 1000);
        }
    })

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
