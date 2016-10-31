import {Component} from '@angular/core';
import {utility, BaseComponent, HttpUser} from '../common';


@Component({
    //styleUrls: ['../css/user/main.css'],
    template: `
	<div>
				<form name="form" class="form-horizontal col-sm-12 ng-scope ng-pristine ng-valid">
					<fieldset>
					
						<div *ngIf="isAlert" class="alert alert-dismissible alert-warning " >
							<button type="button" class="close" (click)="isAlert=false;" data-dismiss="alert">×</button>
							<h4>注意!</h4>
							<p>
								用户信息，不能自行修改，请联系客服经理
							</p>
							<p>
								Email和收款人姓名一经注册不可修改。
							</p>
						</div>
						<table class="table table-striped table-hover ">
						<tbody>
						<tr>
							<td style="padding:15px 15px 15px 80px;width:20%;">
								Email
							</td>
							<td style="padding:15px;width:80%" class="ng-binding">
								 {{user.email}}
							</td>
						</tr>
						<tr>
							<td style="padding:15px 15px 15px 80px;">
								手机
							</td>
							<td style="padding:15px;" class="ng-binding">
								{{user.phone}}
							</td>
						</tr>
						<tr>
							<td style="padding:15px 15px 15px 80px;">
								QQ
							</td>
							<td style="padding:15px;" class="ng-binding">
								{{user.qq}}
							</td>
						</tr>
						<tr>
							<td style="padding:15px 15px 15px 80px;">
								身份证
							</td>
							<td style="padding:15px;" class="ng-binding">
								 xxxxxx{{user.idcard|right:8}}
							</td>
						</tr>
						<tr>
							<td style="padding:15px 15px 15px 80px;">
								银行类型
							</td>
							<td style="padding:15px 5px 5px 0px;">
								<i class="fa {{user.bank_type}}" style="border: 1px solid #FC491E;"></i>
							</td>
						</tr>
						<tr>
							<td style="padding:15px 15px 15px 80px;">
								收款人
							</td>
							<td style="padding:15px;" class="ng-binding">
								 {{user.name}}
							</td>
						</tr>
						<tr>
							<td style="padding:15px 15px 15px 80px;">
								收款帐号
							</td>
							<td style="padding:15px;" class="ng-binding">
								 xxxxxx{{user.account|right:5}}
							</td>
						</tr>
						</tbody>
						</table>
					</fieldset>
				</form>
			</div>
  `
})
export class AccountInfoComponent extends BaseComponent {
    isAlert: boolean = true;
    user: any = {};
    
    constructor(private httpUser: HttpUser) {
        super();
    }
    
    ngOnInit() {
        let u: any = utility.ls.get('user');
        this.httpUser.user.findOne({email: u.email}).subscribe((res: any)=> {
            if (res.err) return;
            
            this.user = res.data;
        });
    }
}


