import request from '@/utils/request'

export function getUserInfo(data) {
    // 返回的是一个promise对象
    return request({
        method: "GET",
        url: "/user/userinfo",
        data
    })
}
