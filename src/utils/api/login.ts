import http from "../http";

export function login(params: Object) {
    return http({
        url: '/session/create',
        method: 'post',
        data: params
    })
}