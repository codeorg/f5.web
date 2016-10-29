import {Component, OnInit} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormControl,
    Validators,
    AbstractControl
} from '@angular/forms';

import {ActivatedRoute, Router, Params} from '@angular/router';
import {Http} from '../service/http';
import {HttpUser} from '../service/http-user';
import {utility} from '../service/utility';
import {form} from '../service/form';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
    styleUrls: ['../css/web/common.css', '../css/web/login.css'],

    templateUrl: '../tpl/web/reg.html',
    providers: [Http, HttpUser],
})
export class RegComponent implements OnInit {
    fg: FormGroup;
    fgConfig: any;
    username: AbstractControl;
    img: string = "";
    vid: string = "";
    btShow: boolean;
    public banksort:any[];

    constructor(private http: Http, private fb: FormBuilder,protected router:Router) {
        this.banksort=utility.ls.get("banksort");

        console.log(this.banksort)
    }

    getCap() {
        this.http.reg.fn("getcap")().subscribe((res: any)=>{
            this.vid = res.data.id;
            this.img = res.data.url;
        });
    }

    onSubmit(): void {
        let query:any={};
        utility.extend(query,this.fg.value);
        query.vid=this.vid;
        this.http.reg.insert(query).subscribe((res:any)=>{
            console.log(res)
            if(!res.err){
                this.router.navigate(['/regOk']);
            }else{
                switch (res.err){
                    case 403:
                        this.fg.controls['vcode'].setErrors({match:true});
                        break;
                    default :
                        break;

                }
            }
            console.log(this.fg.controls['vcode'].errors)
        })
        //console.log(this.fg)
        //console.log('you submitted value: ', value);
    }

    onBlurUsername() {
        //this.username.errors=this.username.errors||{}
        console.log("this.username.errors", this.username.errors)

        // if(this.username.invalid) return;
        // this.usernameAsync=true;
        // this.http.user.exist({username:this.username.value}).then((res:any)=>{
        //     this.usernameAsync=false;
        //     //if(res.data)
        // })
        //console.log(111);
    }


    ngOnInit() {
        this.fgConfig = {
            'username': ['',
                [Validators.required, Validators.maxLength(10), //Validators.pattern("^[a-zA-Z0-9_-][\w.]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$")
                     ],
                {
                    required: "用户名不能为空",
                    maxlength: "长度不能超过10字节",
                    //pattern: "email格式不对",
                    exist: "用户名已经存在",
                    default: "3~18位的数字、字母组成,不支持特殊符号"
                }],
            'password': ['',
                [Validators.required, Validators.minLength(6)],
                {
                    required: "密码不能为空",
                    minlength: "长度不能少于6",
                    exist: "用户名已经存在",
                    default: "6位以上字母字符"
                }],
            'password2': ['',
                [Validators.required, Validators.minLength(6)],
                {
                    required: "密码不能为空",
                    minlength: "长度不能少于6",
                    double: "两次密码必须相同",
                    exist: "用户名已经存在",
                    default: "6位以上字母字符"
                }],
            'phone': ['',
                [Validators.required],
                {
                    required: "电话不能为空",
                    default: ""
                }],
            'qq': ['',
                [Validators.required],
                {
                    required: "QQ不能为空",
                    default: ""
                }],
            'url': ['',
                [Validators.required],
                {
                    required: "网址必须填写",
                    default: ""
                }],
            'idcard': ['',
                [Validators.required, Validators.pattern("[a-zA-Z0-9]{18}")],
                {
                    required: "身份证必须填写",
                    pattern: "身份证格式不对，必须为18位号码",
                    default: ""
                }],
            'name': ['',
                [Validators.required],
                {
                    required: "姓名必须填写",
                    default: ""
                }],
            'account': ['',
                [Validators.required],
                {
                    required: "银行帐号必须填写",
                    default: ""
                }],
            'bank_type': ['ICBC',
                [Validators.required],
                {
                    required: "银行类型必须选择",
                    default: "请选择银行类型"
                }],
            'vcode': ['',
                [Validators.required,Validators.pattern("[a-zA-Z0-9]{4}")],
                {
                    pattern:"验证码不正确",
                    match: "验证码不正确",
                    default: ""
                }],
            check_service: ['true',
                [Validators.pattern("true")],
                {
                    default: ""
                }]

        };
        this.fg = form.getFormGroup(this.fb, this.fgConfig);
        this.username = this.fg.controls['username'];
        this.username.valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .flatMap(v=>this.http.user.exist({username: v}))
            .subscribe((res: any) => {
                if (res.data) this.username.setErrors({"exist": true, msg: this.fgConfig.username[2].exist});
            });
        let password2 = this.fg.controls['password2'];
        password2.valueChanges
        //.debounceTime(300)
        //.distinctUntilChanged()
            .subscribe((v: any)=> {
                if (this.fg.controls['password'].value !== v) password2.setErrors({
                    "double": true,
                    msg: this.fgConfig.password2[2].double
                });
            });
        let vcode = this.fg.controls['vcode'];

        vcode.valueChanges
            .distinctUntilChanged()
            .flatMap((v: any)=> {
                if (v.length == 4) {
                    vcode.setErrors({"loading":true});
                    return this.http.reg.fn("checkcap")({id:this.vid,value:v});
                }
                return new Observable((obs:any)=>{
                    obs.next(false);
                    obs.complete();
                })
            })
            .subscribe((res: any)=> {
                if(!res) return;
                if(!res.err){
                    if(res.data){
                        vcode.setErrors(null);
                        return;
                    }
                    vcode.setErrors({"match":true,msg:this.fgConfig.vcode[2].match});
                }else {
                    if(res.err==22){
                        console.log(res.err)
                        this.img = res.data.url;
                        this.vid = res.data.id;
                        vcode.setValue("");
                    }
                }

            });


        this.getCap();


    }


}
function required(c: FormControl): { [s: string]: boolean|string} {
    return !c.value ? {"required": true} : null;
}


function skuValidator(control: FormControl): { [s: string]: boolean|string} {
    if (!control.value.match(/^123/)) {
        //console.log("control",control.errors);
        return {invalidSku: true};
    }
    return null;
}

function usernameExist5() {
    return (control: FormControl): Observable<any> => {

        return new Observable((obs: any) => {
            console.log("res");
            obs.next({"usernameExist": true});
            obs.complete();
        })

        // return http.post("http://127.0.0.1:3000/web/user/exist", {username: control.value})
        //     .map(res=>{
        //         console.log("res",res);
        //         return {aaa:"sss"};
        //     })

    }
}


function usernameExist3(control: FormControl): Promise<any> {
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve({
                asyncInvalid: true
            })
        }, 500);
    })
}

function usernameExist2(control: AbstractControl): Observable<any> {
    return new Observable((obs: any) => {
        setTimeout(()=> {
            console.log(control.value)
            obs.next({"usernameExist11": true});
            obs.complete();
        }, 100)

    })
}

// function ux(c: FormControl) {
//     return usernameExist2(c).debounceTime(1000).distinctUntilChanged().first();
// }


interface IUsernameEmailValidator {
}

// function usernameExist(http:HTTP) {
//
//
//     return (control: FormControl): Observable<IUsernameEmailValidator> => {
//         // console.log(111)
//         // http.post("http://127.0.0.1:3000/web/user/exist", {username: "222222222"}) .toPromise()
//         //     .then(response => {
//         //         console.log(response)
//         //     })
//         //control.clearAsyncValidators();
//
//         return new Observable((obs: any) => {
//
//
//             control.valueChanges
//                 .debounceTime(1000)
//                 .distinctUntilChanged()
//                 .first()
//                 .flatMap((value:any) => {
//                     console.log(value)
//                     return http.post("http://127.0.0.1:3000/web/user/exist", {username: value})})
//                 .subscribe(
//                     data => {
//                         obs.next({"usernameExist": true});
//                         obs.complete();
//                         //form.formatError(control,"已经存在");
//                     },
//                     error => {
//                         console.log("222", 222)
//                         console.log(error)
//                         let message = error.json().message;
//                         let reason:string;
//                         if (message === 'Username taken') {
//                             reason = 'usernameTaken';
//                         }
//                         if (message === 'Email taken') {
//                             reason = 'emailTaken';
//                         }
//
//                         obs.next({[reason]: true});
//                         obs.complete();
//                     }
//                 );
//
//         })
//         // .subscribe(
//         //     data => {
//         //        console.log(data)
//         //         return Promise.resolve({usernameExist: true})
//         //     },
//         //     error => {
//         //         console.log(error)
//         //         return Promise.resolve({usernameExist: true})
//         //     }).to
//
//         //.subscribe()
//         //.toPromise()
//         // .then((value: any)=> {
//         //     return {usernameExist: true}
//         // });
//
//     }
//
//
//     // .subscribe(
//     //     data => {
//     //
//     //     },
//     //     error => {
//     //         let message = error.json().message;
//     //         let reason;
//     //         if (message === 'Username taken') {
//     //             reason = 'usernameTaken';
//     //         }
//     //         if (message === 'Email taken') {
//     //             reason = 'emailTaken';
//     //         }
//     //         obs.next({ [reason]: true });
//     //         obs.complete();
//     //
//     //
//     //
//     //
//     //
//     //
//     //
//     //         let q = new Promise((resolve, reject) => {
//     //             setTimeout(() => {
//     //
//     //                 resolve({usernameExist: true,msg:"用户名已经存在"});
//     //                 //resolve(null);
//     //
//     //             }, 1000)
//     //         });
//     //
//     //         return q;
//     //         //
//     //         // return http.user.exist({username: control.value}).then((res: any)=> {
//     //         //      console.log(res)
//     //         //     if (res.data)
//     //         //         return Promise.resolve({usernameExist: true,msg:"用户名已经存在"})
//     //         //     else
//     //         //         return Promise.resolve(null);
//     //         // })
//     //
//     //         //});
// }





