import service from "./request"

// 获取seller
// export function apiUserLogIn(params:object){
//   return service.request({
//     // axios post(api, 欲傳送的值)方法方法
//     method:'POST',
//     url:'admin/signin',
//     data:params
//   })
// }
export function apiUserLogIn(params:object){
  return service.request({
    // axios post(api, 欲傳送的值)方法方法
    method:'POST',
    url:'/login',
    data:params
  })
}
// 登出
export function apiUserLogOut(params:object){
  return service.request({
    method:'POST',
    url:'/logout',
  })
}
