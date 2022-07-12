const Mock = require("mockjs"); //mockjs 导入依赖模块
// 返回一个函数
module.exports = function (app) {
    // 监听 http 请求
    app.get('/user/userinfo', function (rep, res) {
        // 设置要返回的数据
        let json = {
            id: "@id()",                    // 得到随机的id
            username: "@cname()",           // 随机生成中文名字
            date: "@date()",                // 随机生成日期
            avatar: "@image('200x200','red','#fff','avatar')",  // 生成图片                  
            description: "@paragraph()",    // 描述
            ip: "@ip()",                    // ip地址
            email: "@email()",              // email
            code: "200"
        }
        let response = {
            success: true,
            message: "成功",
            data: json
        }
        res.json(Mock.mock(json));
    });
}