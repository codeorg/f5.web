/**
 * Created by Administrator on 2016/10/21.
 */
//import * as _ from "lodash";
export class utility {
    static toInt(obj:any) {
        if (!obj) return 0;
        if (typeof obj === 'number')return Math.floor(obj);
        if (typeof obj !== 'string')obj = obj.toString();
        if (utility.isInt(obj))return Math.floor(obj);
        if (utility.isFloat(obj)) {
            return Math.floor(parseFloat(obj));
        }
        return 0;
    }

    static toFloat(obj:any) {
        if (!obj) return 0;
        if (typeof obj === 'number')return obj;
        if (typeof obj !== 'string')obj = obj.toString();
        //if (utility.isInt(obj))return parseInt(obj);
        if (utility.isFloat(obj)) {
            return parseFloat(obj);
        }
        return 0;
    }

    //整数
    static isInt(str:string) {
        return /^-?\d+$/.test(str);
    }

    //浮点数
    static isFloat(str:string) {
        return /^(-?\d+)(\.\d+)?$/.test(str);
    }

    static trim(str:string) {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }

    static isArray(ar:any) {
        return Array.isArray(ar);
    }

    static format(str:string,...params:string[]) {
        var formatRegExp = /%[sdj%]/g;
        var i = 1;
        var args = [];
        args.push(str);
        [].push.apply(args, params);

        // if (utility.isArray(arguments[1]) || (typeof arguments[1] === 'object' && arguments[1].toString().indexOf('Arguments') !== -1)) {
        //     args.push(str);
        //     [].push.apply(args, arguments[1]);
        // } else {
        //     //args=arguments;
        //     args.push(str);
        //     args.push(arguments[1]);
        // }
        var len = args.length;
        var str = String(str).replace(formatRegExp, function (x) {
            if (x === '%%') return '%';
            if (i >= len) return x;
            switch (x) {
                case '%s':
                    return String(args[i++]);
                // case '%d':
                //     return Number(args[i++]);
                // case '%j':
                //     try {
                //         return JSON.stringify(args[i++]);
                //     } catch (_) {
                //         return '[Circular]';
                //     }
                default:
                    return x;
            }
        });
        return str;
    };

    static formatObj(obj) {
        if (utility.isNullObj(obj)) return null;
        return obj;
    }

    static isNullObj(obj) {
        if (!obj) return true;
        if (typeof obj === 'object') {
            for (var key in obj) {
                return false;
            }
            return true;
        }
        return false;
    }

    static formatIp(ip) {
        ip.replace(/([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})/, function (a, b) {
            ip = b;
        })
        return ip;
    }

    static formatMoney(obj) {
        obj = utility.toFloat(obj);
        return obj.toFixed(2);
    }

//     //可以只有date(format)
//     static date(dateTime,format){
//
//     if(!dateTime)dateTime = new Date();
//     var testD= new Date(dateTime);
//     if(testD=="Invalid Date")dateTime = new Date();
//
//     if(!format)format = 'yyyy-mm-dd'
//     return dateFormat(dateTime, format);
// }
//     //获取距离1970-1-1的ms(以天为单位)
//     var dayTime=function(dateTime){
//     "use strict";
//     if(!dateTime)dateTime = new Date();
//     dateTime=date(dateTime,'yyyy-mm-dd 00:00:00')
//     dateTime=new Date(dateTime);
//     return dateTime.getTime();
// }
//
//     //增加/减少天数，默认下一天
//     var setDay=function(dateTime,inc){
//     if(!inc) inc=1;
//     if(!dateTime)dateTime = new Date();
//     if(typeof dateTime=="string" || typeof dateTime=="number") dateTime = new Date(dateTime);
//     return dayTime(dateTime.setDate(dateTime.getDate() +inc));
// }


    // function isStringNumber(num) {
    //     return /^(-?\d+)(\.\d+)?$/.test(str);
    //     return /^-?\d+\.?\d*$/.test(num.replace(/["']/g, ''));
    // }

    static decodeUrl(value) {
        try {
            return decodeURIComponent(value);
        } catch (e) {
            // Ignore any invalid uri component
        }
    }

    static encodeUrl(value) {
        return encodeURIComponent(value);
    }

    //----------ls　开始　------------------------------
    static ls = (function () {
        var storageType = 'localStorage', prefix = 'codeorg.', webStorage;
        var deriveQualifiedKey = function (key) {
            return prefix + key;
        };
        //是否支持
        var isSupported = (function () {
            try {
                var supported = (storageType in window && window[storageType] !== null);
                var key = deriveQualifiedKey('__' + Math.round(Math.random() * 1e7));
                if (supported) {
                    webStorage = window[storageType];
                    webStorage.setItem(key, '');
                    webStorage.removeItem(key);
                }
                return supported;
            } catch (e) {
                //storageType = 'cookie';
                //$rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
                return false;
            }
        }());

        var setLS = function (key, value) {
            if (!isSupported) return;
            if (!value) {
                value = "";
            } else if (typeof value != "string") {
                value = JSON.stringify(value);
            }
            //value = encodeUrl(value);
            if (webStorage) {
                webStorage.setItem(deriveQualifiedKey(key), value);
            }
        };

        var getLS = function (key) {
            if (!isSupported) return null;
            var item = webStorage ? webStorage.getItem(deriveQualifiedKey(key)) : null;
            //item = decodeUrl(item);
            if (!item || item === 'null') {
                return null;
            }

            if (item.charAt(0) === "{" || item.charAt(0) === "[" || utility.isFloat(item)) {
                return JSON.parse(item);
            }
            return item;
        };

        var removeLS = function (key) {
            if (!isSupported && !webStorage) return;
            webStorage.removeItem(deriveQualifiedKey(key));
        };

        var clearLS = function () {
            if (!isSupported && !webStorage) return;
            for (var key in webStorage) {
                if (key.indexOf(prefix) === 0) {
                    removeLS(key.substr(prefix.length));
                }
            }
        };

        return {
            get: getLS,
            set: setLS,
            remove: removeLS,
            clear: clearLS
        };
    })();
    //----------ls　开始　------------------------------

    //对象是否包含
    static includes(src:Object, find:Object){
        for(let key in find){
            if(src[key]!==find[key]) return false;
        }
        return true;
    }

    //[{a:1},{b:1}],{a:1}
     static find(arr:Object[],obj:Object) {
         if(!obj) return arr;
         for(let i in arr){
             let item=arr[i];
             if(utility.includes(item,obj)) return item;
         }
         return null;
     }
}

