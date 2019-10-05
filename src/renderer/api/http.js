// 配置axios
import Vue from 'vue'
import {PublicAddress} from './setting';
import {objSort} from '@/utils/validator'
import axios from 'axios'
import qs from 'qs';
// import { Message,Loading } from 'element-ui'
const HTTP_STATUS_SUCCESS = 200;
// let service =  axios.create({
//   baseUrl:PublicAddress.baseUrl,
//   timeout:5000,
//   headers:PublicAddress.ContentType
// });
import lockr from 'lockr';
// let loading        //定义loading变量
class Http{
  constructor(){
    this._init();
  };

  startLoading() {    //使用Element loading-start 方法
    loading = Loading.service({
      lock: true,
      text: '加载中……',
      background: 'rgba(0, 0, 0, 0.7)'
    })
  }
   endLoading() {    //使用Element loading-close 方法
    loading.close()
  }


  _init(){
    axios.defaults.baseURL = PublicAddress.baseUrl;
    // 头部设置（跨域）
    axios.defaults.headers['Content-Type'] = PublicAddress.ContentType;
  }

  /*判断*/
  _checkStatus(data){
    if(data && data.status === HTTP_STATUS_SUCCESS){
      return true
    }else{
      return false
    }
  }
  /**
   * GET 请求 {es6解构赋值}
   * @param type 包含url信息
   * @param params 需要发送的参数
   * @returns {Promise}
   * @constructor
   */
  async httpGet(url,params){
    let { data } = await axios.get(url,{params:params});
    return data
  }

  HttpPost(url, params) {

    for(let i in params){
      if(typeof params[i] === "string"){
        params[i] = params[i].replace(/\s+/g,"");
      }
    }

    var sign = objSort(params);

    if(url.indexOf("login") > 0){

      url=url+'?sign='+sign;

    }else{

      const adminId = lockr.get('adminId');
      url=url+'?id=' + adminId;
      url=url+'&sign='+sign;

    }
    return new Promise((resolve, reject) => {
      // this.startLoading()
      axios.post(url, params)
        .then(data => {
          if (this._checkStatus(data)) {
            resolve(data.data);
          } else {

            reject(data.data);
          };

          // this.endLoading()
        })
        .catch((data) => {
          // Message.error('服务端错误: \n' + data);
          console.log('服务端错误: \n' + data)
        })
    });

  };


  QsHttp(url,params){
    params = qs.stringify(params);
    return new Promise((resolve, reject) => {
      axios.post(url, params,
        {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
        )
        .then(data => {
          if (this._checkStatus(data)) {
            resolve(data.data);
          } else {

            reject(data.data);
          }

        })
        .catch((data) => {
          // Message.error('服务端错误: \n' + data);
          console.log('服务端错误: \n' + data)
        })
    });
  };


  GetTypeList(type) {
    let params = {"typeCode": type};
    var sign = objSort(params);
    return new Promise((resolve, reject) => {
      var url = PublicAddress.basicDict.url;
      const adminId = lockr.get('adminId');
      url= url+'?id=' + adminId + '&sign=' + sign;
      axios.post(url, params)
        .then(data => {
          if (this._checkStatus(data)) {
            resolve(data.data);
          } else {
            this._error(data);
          }
        })
        .catch((data) => {
          // Message.error('服务端错误: \n' + data);
          console.log('服务端错误: \n' + data)
        })
    });
  }

};

export default new Http();







