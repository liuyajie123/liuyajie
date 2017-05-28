/**
 * Created by Administrator on 2017/5/26.
 */
var id = 20;
app.config(function (alldata, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/personalCenter")
    alldata.fstdata.forEach(function (i) {
        $stateProvider
            .state(i.route, {
                url: "/" + i.route,
                templateUrl: "page/aside.html",
                controller: function ($scope, alldata) {
                    //console.log($stateParams.self.id)
                    var newdata = alldata.secdata.filter(function (v) {
                        return v.parentid == i.id;
                    })

                    $scope.data = newdata;
                    $scope.parentName = i.name;
                    $scope.statueCon = true;
                    $scope.statueConFn = function () {
                        $scope.statueCon = !$scope.statueCon;
                    }
                }
            })
    })
    alldata.secdata.forEach(function (i) {
        $stateProvider
            .state(i.route, {
                url: "/" + i.route,
                templateUrl: "page/" + i.enName + ".html",
                controller: function ($scope, $stateParams, alldata, service, $filter, bianji) {
                    var cutfn = function () {
                        $scope.data = alldata.xiaofei;
                        $scope.newData = function () {
                            return $filter('filter')($scope.data, {
                                role: $scope.mange,
                                state: $scope.status,
                                user: $scope.put
                            })
                        }
                        //每页显示多少数据
                        $scope.len = 1;
                        //中间显示多少按钮
                        $scope.middlePage = 3;
                        service($scope)
                        $scope.pageShow(1)
                        $scope.search = function () {
                            //console.log($scope.mange)
                            //console.log($scope.status)
                            $scope.pageShow(1)
                            console.log($scope.newData())
                        }
                        $scope.popupSH = false;
                        //    删除
                        $scope.remove = function (item) {
                            $scope.popupSH = true;
                            var indexPage;
                            $scope.okFn = function () {
                                //通过过滤后的数据找当前显示页
                                var indexPage;
                                $scope.newData().forEach(function (i, index) {
                                    switch (i.id) {
                                        case item:
                                        {
                                            indexPage = Math.ceil(index / $scope.len)
                                        }
                                    }
                                    if(indexPage == 0){
                                        indexPage = 1;
                                    }
                                })
                                $scope.data.forEach(function (i, index) {
                                    switch (i.id) {
                                        case item:
                                        {
                                            $scope.data.splice(index, 1);
                                        }
                                    }
                                })

                                $scope.pageShow(indexPage)
                                $scope.popupSH = false

                            }
                            $scope.noFn = function () {
                                $scope.popupSH = false
                            }
                        }

                        bianji($scope);
                    }
                    var changData = function () {
                        $scope.data = alldata.xiaofei;
                        $scope.addData = function () {
                            $scope.time = new Date();
                            $scope.obj = {
                                id: id++,
                                user: $scope.mesg1,
                                name: $scope.mesg2,
                                role: $scope.guan,
                                tel: $scope.iphone,
                                email: $scope.emil,
                                state: $scope.statess,
                                time: $scope.time
                            }
                            $scope.data.push($scope.obj)
                            console.log($scope.obj)
                        }
                    }
                    switch (i.id) {
                        case 22:
                        {
                            cutfn()
                        }
                            break;
                        case 23:
                        {
                            changData();
                        }
                            break;
                    }
                },
                resolve: {
                    pre: function ($q, $http, $stateParams) {

                    }
                },
                params: {
                    id: ""
                }
            })

    })
})

