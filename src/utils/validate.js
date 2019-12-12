/**
 * 邮箱
 * @param {*} s
 */
export function isEmail(s) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

/**
 * 手机号码
 * @param {*} s
 */
export function isMobile(s) {
  return /^1[0-9]{10}$/.test(s)
}

/**
 * 电话号码
 * @param {*} s
 */
export function isPhone(s) {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

/**
 * URL地址
 * @param {*} s
 */
export function isURL(s) {
  return /^http[s]?:\/\/.*/.test(s)
}

/**
 * 排序
 * @param {*} s
 */
export function ranking(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (Number(arr[i].value) < Number(arr[j].value)) {
        var linshi = arr[i];
        arr[i] = arr[j];
        arr[j] = linshi;
      }
    }
  }
  return arr
}
/**
 * 取x轴的值
 * @param {*} s
 */
export function getData_x(arr, addValue) {
  var arr_x = []
  for (var i = 0; i < arr.length; i++) {
    arr_x.push({
      value: arr[i].name + addValue[i], textStyle: {
        lineHeight: 15
      }
    })
  }
  return arr_x
}
/**
 * 根据x轴值 对另一个数组排序
 * @param {*} s
 */
//取出了两个数组公共都有的部分
export function getData2(arr, arr2) {
  var newArr2 = []
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr[i].name == arr2[j].name) {
        newArr2.push(arr2[j])
      }
    }
  }
  return newArr2
}
/**
 * 海信的排名
 * @param {*} s
 */
export function ranking_index(arr) { 
  var ranking
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].name == "海信") {
      ranking = i + 1
    }
  }
  return ranking
}
