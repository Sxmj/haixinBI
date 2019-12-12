import md5 from 'md5'

export default {
    /**
     * 生成MD5
     */
    exchangeMD5(obj) {
        var newkey = Object.keys(obj).sort();
        // console.log(obj, newkey)
        var newObj = {};
        for (var i = 0; i < newkey.length; i++) {
            newObj[newkey[i]] = obj[newkey[i]];
        }
        var str = '';
        for (var key in newObj) {
            str = str + key + '=' + newObj[key] + "&"
        }
        str = str.substr(0, str.length - 1)
        var stringSignTemp = str + "&key=951d4c42326611e8a17f6c92bf3bb67f"
        // console.log(stringSignTemp)
        var sign = md5(stringSignTemp).toUpperCase()
        // console.log('加密后', sign)
        return sign;
    },
    nonce_str(len) {
        len = len || 32;
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        var maxPos = $chars.length;
        var pwd = '';
        for (var i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    },
    
}