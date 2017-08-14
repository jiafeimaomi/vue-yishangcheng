import axios from 'axios';
var instance = axios.create({
  baseURL: HOST
});

//添加请求拦截器
// axios.interceptors.request.use(function(config){
//      //在发送请求之前做某事
//      return config;
//    },function(error){
//      //请求错误时做些事
//      return Promise.reject(error);
//    });

//请求的公共方法
export function req(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
              resolve(response.data);
})
.catch((error) => {
      reject(error);
      })
  })
}
export default {
    commonApi(url, params) {
      return req(url, params)
    }
}
