const baseUrl = '';       //测试

function  url(str) {
  return baseUrl + str ;
}

let PublicAddress = {
  baseUrl: baseUrl,
  pageSize: [20, 50, 100],

  //警务圈消息  
  accessDelete:{
    url:url('/business/policeCircle/policeCircleList'),
    name:'accessDelete'
  },
  

}
export {
  PublicAddress
}
