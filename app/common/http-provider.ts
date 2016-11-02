
import {Http} from '@angular/http';
import {utility} from "./utility";
import {Observable} from 'rxjs/Rx';
//import 'rxjs/add/operator/toPromise';


//所有方法
class FNS {
    //constructor(private _host: string, private _fns: string[], private _http: Http, private _module: string,private cb:Function,private router:WebRouterMoudule) {
    constructor(private hp:HttpProvider,private _module: string){
    }
    private handleError(error: any): Promise<any> {
        //console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    create():any {
        let FN=(fn:string)=>{
            return (query?: any):Observable<any>=> {
                //console.log(this.hp.host+this._module+"/"+fn,query)
                query=query||{};
                let u=utility.ls.get("user");
                if(u)query._sid=u.sid;
                query._bid=utility.Bid;
                console.log("query",query)

                return new Observable((obs: any)=> {
                    return this.hp.http.post(this.hp.host+this._module+"/"+fn,query)
                        .subscribe((data:any) => {
                            let res=data.json();
                            this.hp.httpHandle(res);
                            obs.next(res);
                            obs.complete();
                            //return Promise.resolve(res)
                        },(e:any)=>{
                            obs.next(e.json());
                            obs.complete();
                        })

                })
                // return this.hp.http.post(this.hp.host+this._module+"/"+fn,query)
                //     .toPromise()
                //     .then(response => {
                //         let res=response.json();
                //         this.hp.httpHandle(res);
                //         return Promise.resolve(res)
                //     })
                //     .catch(this.handleError);
            }
        }
        let obj:any = {"fn":FN};
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
        "exist",
        "insert"
    ];
    //public modules:string[] = ['login', 'user', 'demo'];
    public cache:any;
    public user:any;
    public withdraw:any;
    public login:any;
    public reg:any;
    public card:any;
    public eapay:any;
    public demo:any;

    create(  _path:string) {
        //this.http=_http;
        if(!_path)
            this.host+="admin/";
        else
            this.host+=_path+"/";

        this.cache=new FNS(this,"cache").create();
        this.user=new FNS(this,"user").create();
        this.login=new FNS(this,"login").create();
        this.reg=new FNS(this,"reg").create();
        this.withdraw=new FNS(this,"withdraw").create();
        this.card=new FNS(this,"card").create();
        this.eapay=new FNS(this,"eapay").create();
        this.demo=new FNS(this,"demo").create();


        //this.modules.forEach(m=>this["login"]=new FNS(this,m).create());
    }
    httpHandle(response:any){
        //console.log("ssssss")
    }
}


