/**
 * Created by Administrator on 2017/5/26.
 */
app.directive("headers",function () {
    return {
        restrict:"ECMA",
        replace:true,
        templateUrl:"page/head.html",
        controller:function ($scope,alldata) {
            $scope.data=alldata.fstdata;
            //console.log($scope.data)
        }
    }
})
app.directive("confirm", function () {
    return {
        restrict: "ECMA",
        replace: true,
        templateUrl: "page/newfile/confirm.html"
    }
})
app.service("bianji", function () {
    return function ($scope) {
        //源数据编辑
        $scope.bian = function (id) {
            $scope.las = true;
            $scope.data.forEach(function (v, index) {
                if (v.id == id) {
                    $scope.fix = {};
                    for (s in v) {
                        $scope.fix[s] = v[s];
                    }
                    $scope.ding = function () {
                        $scope.las = false;
                        $scope.data[index] = $scope.fix;
                        $scope.bt.forEach(function (val, i) {
                            if (val.id == id) {
                                $scope.bt[i] = $scope.fix;
                            }
                        })
                    }

                }
            })
        }
        //点击关闭弹出框
        $scope.close = function () {
            $scope.las = false;
        }
    }
})
app.service("service", function () {
    return function ($scope) {
        //页码变化
        $scope.pageShow = function (i) {
            $scope.oldData = $scope.newData();
            //每页的列数
            $scope.li = Math.ceil($scope.oldData.length / $scope.len);
            //渲染页码
            $scope.mov = []
            for (var j = 2; j < $scope.li; j++) {
                $scope.mov.push(j)
            }
            //chang事件
            $scope.lens = ($scope.middlePage - 1) / 2;
            $scope.index = i - 1;
            $scope.showone = false;
            $scope.showtwo = false;
            if ($scope.index < $scope.middlePage - $scope.lens) {
                $scope.showone = false;
                $scope.showtwo = true;
                $scope.showArr = []
                for (var i = 1; i <= $scope.middlePage; i++) {
                    $scope.showArr.push(i)
                }
            } else if ($scope.index >= $scope.middlePage - $scope.lens && $scope.index <= $scope.li - $scope.lens - 2) {
                $scope.showone = true;
                $scope.showtwo = true;
                if ($scope.index == $scope.middlePage - $scope.lens) {
                    $scope.showone = false;
                }
                if ($scope.index == $scope.li - $scope.lens - 2) {
                    $scope.showtwo = false;
                }
                $scope.showArr = [$scope.index + 1];
                for (var i = 0; i < $scope.lens; i++) {
                    $scope.showArr.push($scope.index - i)
                }
                for (var i = 2; i <= $scope.lens + 1; i++) {
                    $scope.showArr.push($scope.index + i)
                }
            } else {
                $scope.showone = true;
                $scope.showtwo = false;
                $scope.showArr=[]
                for(var i=1;i<$scope.middlePage;i++){
                    $scope.showArr.push($scope.li-i)
                }
            }
            $scope.firstPage = true;
            $scope.lastPage = true;
            $scope.cutPage = true;
            if ($scope.li <= 6) {
                $scope.showone = false;
                $scope.showtwo = false;
                if($scope.li<2){
                    $scope.lastPage = false;
                    if($scope.li<1){
                        $scope.cutPage = false;
                    }
                }
            }
            $scope.cutDataFn();
        }

        //键盘弹起事件
        //$("#ipt").on("keyup", function (e) {
        //    $scope.$apply(function () {
        //        if (e.keyCode == 13) {
        //            $scope.pageShow($scope.nam)
        //        }
        //    })
        //
        //})
        //渲染数据
        $scope.cutDataFn = function () {
            var newdata = $scope.newData();
            $scope.bt = newdata.splice($scope.index * $scope.len, $scope.len)
        }
        //上一页，下一页
        $scope.ye = function (i) {
            if (i == "+") {
                if ($scope.index < $scope.li - 1) {
                    $scope.pageShow($scope.index + 2)
                }
            } else {
                console.log("11")
                if ($scope.index > 0) {
                    $scope.pageShow($scope.index)
                }
            }
        }
        $scope.changeInput=function () {
            $scope.pageShow($scope.nam)

        }
        //点击事件
        $scope.changeIndexFn = function (i) {
            $scope.pageShow(i);
        }
        //默认事件
        $scope.pageShow(1);

    }
})
