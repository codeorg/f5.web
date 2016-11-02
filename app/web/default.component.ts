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
    templateUrl:'./default.component.html',
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
        if(this.fg.controls['email'].hasError('required')){
            this.fg.controls['email'].setErrors({msg:this.fgConfig.email[2].required});
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
                this.fg.controls['email'].setErrors({match:true,msg:res.msg});
            }
        })

    }
    clickNav(index: number): void {
        FH.click(index)
    }
    ngOnInit() {
        FH.animation();
        this.fgConfig = {
            'email': ['',[Validators.required],{required: "Email不能为空"}],
            'password': ['',[Validators.required],{required: "密码不能为空"}]
        };
        this.fg = form.getFormGroup(this.fb, this.fgConfig,this.subscription);

    }
    ngOnDestroy(){
        super.ngOnDestroy();
        FH.destroy()
    }
}


