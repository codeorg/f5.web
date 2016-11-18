import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {utility, BaseComponent,form, HttpUser} from '../common';
import {FormBuilder,FormGroup,FormControl,Validators,AbstractControl} from '@angular/forms';


@Component({
    styleUrls:['../css/user/bank.css'],
    template: `
	<div >
				<div class="panel panel-default ">
					<div class="panel-heading">
						<strong style="font-size: 22px;font-weight: 600">提取余额到银行卡</strong>　余额: 
						<strong style="color:#FC491E;font-size: 29px;font-weight: 400" class="ng-binding">{{user.money}}</strong> 元
						<a class="pull-right" style="margin-top: 10px;font-size: 19px;font-weight: 600" routerLink="/user/withdraw_log">提现记录</a>
					</div>
					<div class="panel-body ">
						<form [formGroup]="fg" class="form-horizontal ng-pristine ng-invalid ng-invalid-required" >
							<fieldset>
								<div class="form-group" style="margin-top: 12px;">
									<label class="col-sm-2 control-label text-right">收款银行</label>
									<label class="col-sm-2 control-label" style="text-align: left;margin-top: -7px;"><i class="fa ICBC" style="border: 1px solid #FC491E;"></i></label>
									<label class="col-sm-8 control-label" style="text-align: left;"> 收款人:{{user.name}} 卡号尾号:{{user.account|right}}</label>
								</div>
								<div class="form-group" >
									<label class="col-sm-2 control-label text-right">提现金额</label>
									<div class="col-sm-3">
									          <input type="number"
                           class="form-control"
                           [formControl]="fg.controls['total_fee']">
                           
									</div>
									<label class="col-sm-7 control-label" [ngClass]="{'text-danger':fg.controls['total_fee'].dirty&&fg.controls['total_fee'].invalid}" style="text-align: left;">
                    单笔最少500元，最多49999元
									</label>
								</div>
								<div class="form-group">
									<label class="col-sm-2 control-label text-right">处理时间</label>
									<label class="col-sm-5 control-label" style="text-align: left">一个工作日内</label>
								</div>
								<div *ngIf="this.fg.controls['total_fee'].dirty&&this.fg.controls['total_fee'].hasError('msg')" class="form-group">
									<div class="col-sm-7 col-sm-offset-1">
										    <alert [type]="'danger'" >{{this.fg.controls['total_fee'].errors?.msg}}</alert>
									</div>
								</div>
							
								<div class="form-group" style="margin-top: 20px;">
									<div class="col-sm-3 col-sm-offset-2">
										<button (click)="onClick()" [disabled]="fg.controls['total_fee'].invalid" class="btn btn-primary btn-block">提现</button>
									</div>
								</div>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
  `
})
export class RequestWithdrawComponent extends BaseComponent{
    user: any = {};
    fg: FormGroup;
    fgConfig: any;
    
    constructor(private httpUser: HttpUser,private router:Router,private fb:FormBuilder) {
        super();
    }
    range(c: FormControl): { [s: string]: boolean|string} {
        if(!c.value) return {"range": true};
        if(c.value<500) return {"range": true};
        if(c.value>=50000) return {"range": true};
        return null;
    }
    
    
    onClick() {
        this.httpUser.withdraw.insert(this.fg.value).subscribe((res: any)=> {
            if (!res.err) {
                this.router.navigateByUrl('/user/withdraw_log');
            } else {
                this.fg.controls['total_fee'].setErrors({msg:res.msg});
            }
        });
    }
    ngOnInit() {
        let u: any = utility.ls.get('user');
        this.httpUser.user.findOne().subscribe((res: any)=> {
            if (res.err) return;
            this.user = res.data;
        });
    
        this.fgConfig = {
            'total_fee': ['',[this.range],{}]
        };
        this.fg = form.getFormGroup(this.fb, this.fgConfig,this.subscription);
        // let total_fee=  this.fg.controls['total_fee'];
        // let sub=total_fee
        //     .valueChanges
        //     .subscribe((v: any)=> {
        //         //if(v<500) return total_fee.setValue(500);
        //         if(v>=50000) return total_fee.setValue(49999);
        // });
        // this.subscription.push(sub);
    }
}

