import service from "./request"

// 获取seller
export function getSeller(params:any){
  return service.request({
    // axios post(api, 欲傳送的值)方法方法
    method:'POST',
    url:'admin/signin',
    data:params
  })
}
export function Login(params:any){
  return service.request({
    method:'POST',
    url:'接口二',
    data:params
  })
}
