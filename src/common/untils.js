let untils= {
  //深拷贝
  deepClone(data1,data2){
    var data2 = data2 || {};
    for(var key in data1){
      if(typeof data1[key] === 'object' && data1[key] !== null){
        if(data1[key].constructor === Array){
          data2[key] = []
        }else {
          data2[key] = {}
        }
        untils.deepClone(data1[key],data2[key]);
      }else {
        data2[key] = data1[key]
      }
    }
    return data2;
  },
  //数组去重
  quChong(array,param){
    let obj = {}, newArr = []
    array.map(function (value) {
        if(!obj.hasOwnProperty(value[param])){
          obj[value] = obj[value]
          newArr.push(value)
        }
    })
    return newArr
  }

}
export default untils
