/**
 * Created by microsoft on 2016/4/11.
 */
app.constant('alldata', {
    fstdata: [
        {
            id: 1,
            name: '个人中心',
            nickname: '账户管理',
            route: "personalCenter"
        },
        {
            id: 2,
            name: '系统设置',
            nickname: '权限管理',
            route: "system"
        },
        {
            id: 3,
            name: '学校',
            nickname: '学校管理',
            route: "school"
        }
    ],
    secdata: [
        {
            id: 11,
            parentid: 1,
            name: '个人信息',
            enName: "selfMsg",
            route: 'personalCenter.selfMsg',
            routeUrl: '/selfMsg'
        },
        {
            id: 31,
            parentid: 3,
            name: '学校信息',
            enName: "manager",
            route: 'school.manager',
            routeUrl: '/manager'
        },
        {
            id: 12,
            parentid: 1,
            name: '修改密码',
            enName: "amendPS",
            route: 'personalCenter.amendPS',
            routeUrl: '/amendPS'
        },
        {
            id: 21,
            parentid: 2,
            name: '功能配置',
            enName: "seting",
            route: 'system.seting',
            routeUrl: '/seting'
        },
        {
            id: 22,
            parentid: 2,
            name: '角色管理',
            enName: "mg",
            route: 'system.mg',
            routeUrl: '/mg'
        },
        {
            id: 23,
            parentid: 2,
            name: '用户管理',
            enName: "user",
            route: 'system.user',
            routeUrl: '/user'
        }
    ],
    thirdata: [
        {
            ID: 1,
            parentid: 23,
            loginname: 'zhangsan',
            name: '张三',
            role: '13管理员aaa',
            telephone: '15098950322',
            email: '837990335@qq.com',
            state: '启用',
            creattime: '2014-07-27 16:56'
        },
        {
            ID: 2,
            parentid: 23,
            loginname: 'lisi',
            name: '李四',
            role: '13管理员aaa',
            telephone: '15098950322',
            email: '837990335@qq.com',
            state: '禁用',
            creattime: '2014-07-27 16:56'
        },
        {
            ID: 3,
            parentid: 23,
            loginname: 'wangwu',
            name: '王五',
            role: '13管理员aaa',
            telephone: '15098950322',
            email: '837990335@qq.com',
            state: '启用',
            creattime: '2014-07-27 16:56'
        },
        {
            ID: 4,
            parentid: 23,
            loginname: 'zhangchen',
            name: '张晨',
            role: '13管理员aaa',
            telephone: '15098950322',
            email: '837990335@qq.com',
            state: '启用',
            creattime: '2014-07-27 16:56'
        },
        {
            ID: 5,
            parentid: 23,
            loginname: 'liucheng',
            name: '刘成',
            role: '管理员',
            telephone: '15098950322',
            email: '837990335@qq.com',
            state: '禁用',
            creattime: '2014-07-27 16:56'
        },
        {
            ID: 6,
            parentid: 23,
            loginname: 'liji',
            name: '李继',
            role: '13管理员aaa',
            telephone: '15098950322',
            email: '837990335@qq.com',
            state: '禁用',
            creattime: '2014-07-27 16:56'
        },
        {
            ID: 7,
            parentid: 23,
            loginname: 'yuantao',
            name: '袁涛',
            role: '13管理',
            telephone: '15098950322',
            email: '837990335@qq.com',
            state: '启用',
            creattime: '2014-07-27 16:56'
        },
        {
            ID: 8,
            parentid: 23,
            loginname: 'wangjian',
            name: '王建',
            role: '管理员',
            telephone: '15098950322',
            email: '837990335@qq.com',
            state: '禁用',
            creattime: '2014-07-27 16:56'
        }
    ],
    fourdata: [
        {
            ID: 1,
            role: "管理员",
            state: "启用",
            orders: 0,
            creattime: '2014-07-27 16:35'
        },
        {
            ID: 2,
            role: "管理员2",
            state: "禁用",
            orders: 2,
            creattime: '2014-07-27 16:35'
        },
        {
            ID: 3,
            role: "管理员",
            state: "禁用",
            orders: 5,
            creattime: '2014-07-27 16:35'
        },
        {
            ID: 4,
            role: "管理员2",
            state: "启用",
            orders: 0,
            creattime: '2014-07-27 16:35'
        },
        {
            ID: 5,
            role: "管理员0",
            state: "启用",
            orders: 2,
            creattime: '2014-07-27 16:35'
        },
        {
            ID: 6,
            role: "管理员1",
            state: "禁用",
            orders: 0,
            creattime: '2014-07-27 16:35'
        },
        {
            ID: 7,
            role: "管理员是",
            state: "启用",
            orders: 0,
            creattime: '2014-07-27 16:35'
        },
        {
            ID: 8,
            role: "管理员0",
            state: "启用",
            orders: 1,
            creattime: '2014-07-27 16:35'
        },
        {
            ID: 9,
            role: "管理员2",
            state: "启用",
            orders: 0,
            creattime: '2014-07-27 16:35'
        },
        {
            ID: 10,
            role: "管理2",
            state: "启用",
            orders: 0,
            creattime: '2014-07-27 16:35'
        },
        {
            ID: 11,
            role: "管理2",
            state: "启用",
            orders: 0,
            creattime: '2014-07-27 16:35'
        },
        {
            ID: 12,
            role: "管理2",
            state: "启用",
            orders: 0,
            creattime: '2014-07-27 16:35'
        },
        {
            ID: 13,
            role: "管理2",
            state: "启用",
            orders: 0,
            creattime: '2014-07-27 16:35'
        },
        {
            ID: 14,
            role: "管理2",
            state: "启用",
            orders: 0,
            creattime: '2014-07-27 16:35'
        },
        {
            ID: 15,
            role: "管理2",
            state: "启用",
            orders: 0,
            creattime: '2014-07-27 16:35'
        },
        {
            ID: 16,
            role: "管理2",
            state: "启用",
            orders: 0,
            creattime: '2014-07-27 16:35'
        },
        {
            ID: 17,
            role: "管理员2",
            state: "禁用",
            orders: 0,
            creattime: '2014-07-27 16:35'
        }

    ],
    xiaofei: [
        {
            id: 1,
            user: "yajie",
            name: "呵呵哈哈哈",
            role: "管理员12",
            tel: 13829865,
            email: "11231231233@qq.com",
            state: "禁用",
            time: "2017-02-03 15:22"
        },
        {
            id: 2,
            user: "bb",
            name: "啊实打",
            role: "非管理员",
            tel: 1596326552,
            email: "1asdasda23@qq.com",
            state: "启用",
            time: "2017-02-03 15:22"
        },
        {
            id: 3,
            user: "asdasdad",
            name: "哈哈哈222",
            role: "管理员",
            tel: 13526982,
            email: "1235632541@163.com",
            state: "禁用",
            time: "2017-02-03 15:22"
        },
        {
            id: 4,
            user: "name",
            name: "爱你么么哒",
            role: "非管理员",
            tel: 1234546567,
            email: "123@qq.com",
            state: "启用",
            time: "2017-02-04 15:22"
        },
        {
            id: 5,
            user: "bicjeg",
            name: "我不知道",
            role: "管理员",
            tel: 1234546567,
            email: "123135893@126.com",
            state: "禁用",
            time: "2017-02-03 15:22"
        },
        {
            id: 6,
            user: "nihao",
            name: "你好",
            role: "非管理员",
            tel: 1234546567,
            email: "123@qq.com",
            state: "启用",
            time: "2017-02-03 15:22"
        },
        {
            id: 7,
            user: "luhu",
            name: "路虎",
            role: "管理员",
            tel: 12635489,
            email: "123@qq.com",
            state: "禁用",
            time: "2017-02-03 15:22"
        },
        {
            id: 8,
            user: "baoma",
            name: "宝马540liM",
            role: "管理员",
            tel: 1234546567,
            email: "12213133@qq.com",
            state: "禁用",
            time: "2017-02-03 15:22"
        },
        {
            id: 9,
            user: "aodi",
            name: "奥迪A9L",
            role: "非管理员",
            tel: 11012011,
            email: "11234263@qq.com",
            state: "禁用",
            time: "2017-02-03 15:22"
        },
        {
            id: 10,
            user: "xian",
            name: "现代",
            role: "管理员",
            tel: 56325332,
            email: "12345689965@qq.com",
            state: "禁用",
            time: "2017-02-03 15:22"
        },
        {
            id: 11,
            user: "xuefulan",
            name: "迈锐宝",
            role: "非管理员",
            tel: 12988965657,
            email: "12378965@qq.com",
            state: "启用",
            time: "2017-02-03 15:22"
        },
        {
            id: 12,
            user: "kaidi",
            name: "凯迪拉克XTSL",
            role: "管理员",
            tel: 138596,
            email: "123789652@163.com",
            state: "禁用",
            time: "2017-02-03 15:22"
        },
        {
            id: 13,
            user: "darunfa",
            name: "大润发",
            role: "管理员",
            tel: 18965236987,
            email: "123456321@qq.com",
            state: "启用",
            time: "2017-02-03 15:22"
        },
        {
            id: 14,
            user: "hualaishi",
            name: "华莱士",
            role: "非管理员",
            tel: 12348965,
            email: "121233@qq.com",
            state: "禁用",
            time: "2017-02-03 15:22"
        },
        {
            id: 15,
            user: "dazhong",
            name: "一汽大众-辉腾",
            role: "管理员",
            tel: 117,
            email: "159632541@qq.com",
            state: "禁用",
            time: "2017-02-03 15:22"
        },
        {
            id: 16,
            user: "volov",
            name: "沃尔沃S90L",
            role: "管理员",
            tel: 123123123,
            email: "123321654897@qq.com",
            state: "禁用",
            time: "2017-02-03 15:22"
        }

    ]
})


