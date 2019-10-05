
//排序 sign
export function objSort(obj) {
  var newObj = objSortUtil(obj);
  var str = '';
  for (var j in newObj) {
    if (newObj[j] instanceof Array == true) {
      // if (typeof newObj[j] == "object") {
        newObj[j] = JSON.stringify(newObj[j]);
      // };
    } 
    str += j + '=' + newObj[j] + '&&';
  };
  if (str.slice(str.length - 2, str.length) == "&&") {
    str = str.slice(0, str.length - 2);
  } else {
    str = str;
  };
  console.log(str)
  str = md(str);
  return str;
}

export function objSortUtil(obj) {
  var newArray = Object.keys(obj).sort();  //获取key 排序
  var newObj = {};
  for (var i = 0; i < newArray.length; i++) {
    newObj[newArray[i]] = obj[newArray[i]];  //循环添加
  }
  return newObj;
}
