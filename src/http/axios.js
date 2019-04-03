/**
	axios的配置文件
	1、设置post数据格式为表单格式
	2、设置基路径
	3、序列化字符串
*/
import axios from 'axios';
import qs from 'qs';
// let token = conf.getCookie('Token');
//配置
//配置前后端数据交互的请求头：
axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 将token放到请求头部，在登录那边已经处理
// axios.defaults.headers.common['Authorization'] = conf.getCookie('Token');
// 设置后台的访问地址
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://127.0.0.1:8899";
axios.interceptors.request.use((config)=>{
  if(config.method == 'post'){
    config.data = qs.stringify(config.data,{arrayFormat:'repeat'});
  }
  return config;
})

export default axios;
