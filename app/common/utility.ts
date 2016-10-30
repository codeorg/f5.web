/**
 * Created by Administrator on 2016/10/21.
 */
import {Observable} from "rxjs/Rx";
import * as _ from 'lodash';

declare var window:any;
let Fingerprint2=require('../lib/fingerprint2');
let DateFormat=require('../lib/dateFormat');

export class utility {
    public static _dateFormat = new DateFormat();
    public static Bid: string = "";

    static toInt(value?: any): number {
        return _.toInteger(value);
    }

    static toNumber(value?: any): number {
        if (_.isNaN(value)) return 0;
        return _.toNumber(value);
    }

    //整数
    static isInt(value?: any): boolean {
        return _.isInteger(value);
    }

    //整数
    static isNumber(value?: any): boolean {
        return _.isNumber(value);
    }


    static isArray(value?: any): boolean {
        return _.isArray(value);
    }

    //是否Json对象，包含数组
    static isObject(value?: any) {
        _.isObject(value)
    }

    //是否Json对象
    static isPlainObject(value?: any) {
        _.isPlainObject(value)
    }

    static drop(array: any[], num?: number) {
        return _.drop(array, num);
    }

    static dropRight(array: any[], num?: number) {
        return _.dropRight(array, num);
    }


    static trim(string?: string): string {
        return _.trim(string);
    }

    static format(str: string, ...params: string[]): string {
        var formatRegExp = /%[sdj%]/g;
        var i = 1;
        var args: any[] = [];
        args.push(str);
        [].push.apply(args, params);

        // for(let _j in params){
        //     args.push(params[i]);
        // }

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
                default:
                    return x;
            }
        });
        return str;
    };

    // static formatObj(obj) {
    //     if (utility.isNullObj(obj)) return null;
    //     return obj;
    // }
    //
    // static isNullObj(obj) {
    //     if (!obj) return true;
    //     if (typeof obj === 'object') {
    //         for (var key in obj) {
    //             return false;
    //         }
    //         return true;
    //     }
    //     return false;
    // }

    static formatIp(ip: string): string {
        ip.replace(/([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})/, (a, b)=>ip = b)
        return ip;
    }

    static formatMoney(value?: any): string {
        value = utility.toNumber(value);
        return value.toFixed(2);
    }

    //扩展对象，不创建新对象
    static extend(...objs: Object[]) {
        if (!objs || objs.length == 0) return;
        let obj = objs[0];
        for (let i = 1; i < objs.length; i++) {
            _.assignIn(obj, objs[i]);
        }
        return obj;
    }

    //合并并且创建新对象
    static assignIn(...objs: Object[]) {
        let o = {};
        _.assignIn(o, objs[0]);
        objs[0] = o;
        return utility.extend.apply(this, objs);
    }
    //合并
    static concat(...objs: any[]){
        return _.concat.apply(this, objs);
    }

    //查找对象
    static find(src: any[], find: Object): Object {
        return _.find(src, find);

    }

    static indexOf(arr: any[], value: any): number {
        return _.indexOf(arr, value);
    }

    static findIndex(ary: any[], obj: Object) {
        return _.findIndex(ary, obj);
    }

    static random(start: number, end: number): number {
        return _.random(start, end)
    }

    //{b:1,a:2,c:3} =>{a:2,b:1,c:3}
    static sort(obj?: any): any {
        if (_.isArray(obj)) return _.sortBy(obj);
        let o: any = {};
        let arr: any[] = _.sortBy(_.keys(obj));
        _.forEach(arr, (value) => {
            o[value] = obj[value];
        });
        return o
    }


    //可以只有date(format)
    static formatDate(dateTime?: any, format?: string): string {
        if (!dateTime)dateTime = new Date();
        let testD: any;
        testD = new Date(dateTime);
        if (testD == "Invalid Date")dateTime = new Date();
        if (!format)format = 'yyyy-mm-dd'

        return utility._dateFormat(dateTime, format);
    }

    //获取距离1970-1-1的ms(以天为单位)
    static dayTime(dateTime?: any): number {
        if (!dateTime)dateTime = new Date();
        dateTime = utility.formatDate(dateTime, 'yyyy-mm-dd 00:00:00')
        console.log("dt", dateTime)

        dateTime = new Date(dateTime);
        return dateTime.getTime();
    }

    //增加/减少天数，默认下一天
    static setDay(dateTime?: any, inc?: number): number {
        if (!inc) inc = 1;
        if (!dateTime)dateTime = new Date();
        if (typeof dateTime == "string" || typeof dateTime == "number") dateTime = new Date(dateTime);
        return utility.dayTime(dateTime.setDate(dateTime.getDate() + inc));
    }


    static decodeUrl(value: string): string {
        try {
            return decodeURIComponent(value);
        } catch (e) {
            return "";
        }
    }

    static encodeUrl(value: string): string {
        return encodeURIComponent(value);
    }

    //----------ls　开始　------------------------------
    static ls = (function () {
        let storageType: string = 'localStorage', prefix: string = 'codeorg.', webStorage: any = window[storageType];
        let deriveQualifiedKey = (key: string)=> {
            return prefix + key;
        };
        //是否支持
        var isSupported: boolean = (function () {
            try {
                var supported: boolean = (storageType in window && window[storageType] !== null);
                var key = deriveQualifiedKey('__' + new String(Math.round(Math.random() * 1e7)));
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

        var setLS = function (key: any, value: any) {
            //if (!isSupported) return;
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

        var getLS = function (key: any) {
            //if (!isSupported) return null;
            var item = webStorage ? webStorage.getItem(deriveQualifiedKey(key)) : null;
            //item = decodeUrl(item);
            if (!item || item === 'null') {
                return null;
            }

            //if (utility.isObject(item))return JSON.parse(item);

            if (item.charAt(0) === "{" || item.charAt(0) === "[" || utility.isNumber(item)) {
                return JSON.parse(item);
            }
            return item;
        };

        var removeLS = function (key: any) {
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

    static browserId(): Observable<string> {
        return new Observable((ob: any)=> {
            new Fingerprint2().get((result: any, components: any)=> {
                utility.Bid = result;
                ob.next(result);
                ob.complete();
            });
        })
        // return new Promise((resolve,reject)=>{
        //     new Fingerprint2().get((result:any, components:any)=> {
        //         utility.Bid=result;
        //         return resolve(result)
        //     });
        // })
    }

}




