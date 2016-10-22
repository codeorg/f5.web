/**
 * Created by Administrator on 2016/10/21.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class http {
    private _host: string = "http://127.0.0.1:3000/";
    private _fns:string[] = [
        "find",
        "findOne",
        "page",
        "update",
        "remove",
        "insert"
    ];
    private _modules:string[] = ['login', 'user', 'epaysort'];
    public user:any;
    public login:any;
    public epaysort:any;

    constructor( private _http: Http) {
        // if(!_path)
        //     this._host+="admin/";
        // else
        //     this._host+=_path+"/";
        this._modules.forEach(m=>this[m]=new FormatFn(this._host,this._fns,this._http,m).create());
    }


}

 class FormatFn {
    constructor(private _host: string, private _fns: string[], private _http: Http, private _module: string) {

    }
    create() {
        let obj = {};
        this._fns.forEach(fn=> {
            obj[fn] = (query: any):Promise<any>=> {
                console.log(this._host+this._module+"/"+fn)
                console.log(this._http)
                return this._http.post(this._host+this._module+"/"+fn,query)
                    .toPromise()
                    .then(response => {
                        //console.log(response.json())
                        return Promise.resolve(response.json())})
                    .catch(this.handleError);
                //return this._http.post(this._host+this._module+"/"+fn,query).map(responce => responce.json())
            }
        })
        return obj;
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

