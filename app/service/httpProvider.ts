import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';


//所有方法
class FNS {
    //constructor(private _host: string, private _fns: string[], private _http: Http, private _module: string,private cb:Function,private router:WebRouterMoudule) {
    constructor(private hp:HttpProvider,private _module: string){
    }
    private handleError(error: any): Promise<any> {
        //console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    create() {
        let FN=(fn)=>{
            return (query: any):Promise<any>=> {
                console.log(this.hp.host+this._module+"/"+fn,query)
                return this.hp.http.post(this.hp.host+this._module+"/"+fn,query)
                    .toPromise()
                    .then(response => {
                        let res=response.json();
                        this.hp.httpHandle(res);
                        return Promise.resolve(res)
                    })
                    .catch(this.handleError);
            }
        }
        let obj = {"fn":FN};
        this.hp.fns.forEach(fn=> {
            obj[fn]=FN(fn);
        })
        return obj;
    }

}
export class HttpProvider {
    public http:Http;
    public host: string = "http://127.0.0.1:3000/";
    public fns:string[] = [
        "find",
        "findOne",
        "page",
        "update",
        "remove",
        "test2",
        "insert"
    ];
    public modules:string[] = ['login', 'user', 'demo'];
    public user:any;
    public login:any;
    public demo:any;

    create(  _path:string) {
        //this.http=_http;
        if(!_path)
            this.host+="admin/";
        else
            this.host+=_path+"/";

        this.modules.forEach(m=>this[m]=new FNS(this,m).create());
    }
    httpHandle(response:any){
        //console.log("ssssss")
    }
}


