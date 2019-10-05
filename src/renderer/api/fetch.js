import  axios from 'axios'
import  { PublicAddress } from '../api/setting'
import {objSort} from "../utils/validator";
import lockr from 'lockr'

export function getApi(url, params) {

  var sign = objSort(params);
  if(url.indexOf("login") > 0){

    url=url+'?sign='+sign;

  }else{

    const adminId = lockr.get('adminId');
    url=url+'?id=' + adminId;
    url=url+'&sign='+sign;

  }

  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        if(response.status == 200){
          resolve(response.data);
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default{
  getList(params){
    var params = {
      "couponOrigin":params,
      "couponName":'',
      "page":1,
      "size":1000
    }
    return getApi(PublicAddress.couponFindList.url,params)
  },
//查找优惠券
  couponFind(params) {
    return getApi(PublicAddress.couponFind.url,params)
  },
  couponDelete(params){
    var params = {
      "couponListId":params
    }
    return getApi(PublicAddress.couponDelete.url,params)
  },

  statmentFind(params){
    return getApi(PublicAddress.statmentFindList.url,params)
  }

}


