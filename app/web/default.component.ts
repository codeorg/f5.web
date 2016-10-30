import {Component, OnInit,ChangeDetectionStrategy}      from '@angular/core';
import {Router}      from '@angular/router';

import {
    FormBuilder,
    FormGroup,
    FormControl,
    Validators,
    AbstractControl
} from '@angular/forms';

import {utility,BaseComponent,form,Http,HttpUser} from  '../common';

require('../lib/jquery-1.7.2.min');
require('../lib/jquery.plugin.min');
var FH = require('../lib/fashionfoucs');
@Component({
    styleUrls: ['../css/web/fashionfoucs.css', '../css/web/index-login.css'],
    templateUrl:'../tpl/web/default.html',
    providers: [Http, HttpUser],
})
export class DefaultComponent extends BaseComponent{
    fg:FormGroup;
    fgConfig: any;
    //dynamicTooltip:string="aaaaaaaa";
    //msg:string="";
    constructor(private http: Http, private user: HttpUser,private fb:FormBuilder,private router:Router) {
        super();
    }
    onClick(){
        if(this.fg.controls['username'].hasError('required')){
            this.fg.controls['username'].setErrors({msg:this.fgConfig.username[2].required});
            return;
        }
        if(this.fg.controls['password'].hasError('required')){
            this.fg.controls['password'].setErrors({msg:this.fgConfig.password[2].required});
            return;
        }
        this.http.login.fn("signin")(this.fg.value).subscribe((res:any)=>{
            console.log("http",res)
            if (!res.err) {
                utility.ls.set("user", res.data);
                this.router.navigateByUrl('/user');
            }else{
                //this.msg=res.msg;
                this.fg.controls['username'].setErrors({match:true,msg:res.msg});
            }
        })

    }
    clickNav(index: number): void {
        FH.click(index)
    }
    ngOnInit() {
        FH.animation();
        this.fgConfig = {
            'username': ['',[Validators.required],{required: "用户名不能为空"}],
            'password': ['',[Validators.required],{required: "密码不能为空"}]
        };
        this.fg = form.getFormGroup(this.fb, this.fgConfig,this.subscription);

    }
}


