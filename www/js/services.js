angular.module('rcap.services', [])

    .factory('Business', function () {
        var curr_business = [{
            id: 0,
            name: ' 查询个人报告',
            type: '10001',
            state: ' 验证中...',
            time: '2001-02-01 12:22:12',
            face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
        }];

        var his_business = [{
            id: 0,
            name: '个人信用信息提示',
            type: '10002',
            state: '已完成',
            time: '2001-02-01 12:22:12',
            face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
        }, {
            id: 1,
            name: '查询个人报告',
            type: '10001',
            state: '已完成',
            time: '2001-02-01 12:22:12',
            face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
        }, {
            id: 2,
            name: '个人信用信息提示',
            type: '10002',
            state: '已完成',
            time: '2001-02-01 12:22:12',
            face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
        }, {
            id: 3,
            name: '个人信用信息提示',
            type: '10002',
            state: '已完成',
            time: '2001-02-01 12:22:12',
            face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
        }, {
            id: 4,
            name: '查询个人报告',
            type: '10001',
            state: '已完成',
            time: '2001-02-01 12:22:12',
            face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
        }, {
            id: 5,
            name: '个人信用信息提示',
            type: '10002',
            state: '已完成',
            time: '2001-02-01 12:22:12',
            face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
        }, {
            id: 6,
            name: '查询个人报告',
            type: '10001',
            state: '已完成',
            time: '2001-02-01 12:22:12',
            face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
        }, {
            id: 7,
            name: '个人信用信息提示',
            type: '10002',
            state: '已完成',
            time: '2001-02-01 12:22:12',
            face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
        }, {
            id: 8,
            name: '个人信用信息提示',
            type: '10002',
            state: '已完成',
            time: '2001-02-01 12:22:12',
            face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
        }, {
            id: 9,
            name: '查询个人报告',
            type: '10001',
            state: '已完成',
            time: '2001-02-01 12:22:12',
            face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
        }];

        return {
            all_curr_businesses: function () {
                return curr_business;
            },
            all_his_businesses: function () {
                return his_business;
            },
            get_curr_business: function (businessId) {
                for (var i = 0; i < curr_business.length; i++) {
                    if (curr_business[i].id === parseInt(businessId)) {
                        return curr_business[i];
                    }
                }
                return null;
            },
            get_his_business: function (businessId) {
                for (var i = 0; i < his_business.length; i++) {
                    if (his_business[i].id === parseInt(businessId)) {
                        return his_business[i];
                    }
                }
                return null;
            },
            remove: function (businessId) {
                for (var i = 0; i < his_business.length; i++) {
                    if (his_business[i].id === parseInt(businessId)) {
                        his_business.splice(his_business.indexOf(i), 1);
                    }
                }
                return null;

            }

        };


    });

