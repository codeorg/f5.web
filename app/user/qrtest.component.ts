import {Component} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormControl,
    Validators,
    AbstractControl
} from '@angular/forms';

import {utility, BaseComponent, HttpUser,HttpApi,form} from '../common';


@Component({
    styles:[`

    #mian_table  td{vertical-align:middle;}
  
`],
    template: `
	<div>
				<form name="form" class="form-horizontal col-sm-12 ng-scope ng-pristine ng-valid">
					<fieldset>					
						<div class="alert alert-dismissible alert-warning " >
							<h4>注意!</h4>
							<p>
                            签名计算，除了签名字段外所有字段进行正排排序(a到z)，以key=value方式用&符号相连接如下：
                        notify_url=http://www.domain.com/response&order_no=1478263192581&partner=1009&service=wx_qrcode&total_fee=75.00
                        然后用　hmac(str,key)　 加密算出签名，str为上面的字符，key为密钥
							</p>
						</div>
				
				<table [formGroup]="fg" class="table table-striped table-hover" id="mian_table">
						<tbody>
						<tr>
							<td class="col-sm-2" style="text-align: right">
								service<br>
								接口名称
							</td>
							<td class="col-sm-4">							
								 <select [formControl]="fg.controls['service']" class="form-control ">
								 <option value="wx_qrcode">wx_qrcode</option>
								 <option value="alipay_qrcode">alipay_qrcode</option>
                                 </select>
								 
								 
							</td>
						    <td class="col-sm-6" rowspan="6">		
						        <img *ngIf="img" f="" style="position:absolute;right: 0;margin-top: 5px;margin-right: 25px;" [src]="img">
						        <textarea class="form-control" placeholder="返回结果" style="height: 300px">{{rez|json}}</textarea>
							</td>
						</tr>
						<tr>
							<td style="text-align: right">
								partner<br>
								商户ID
							</td>
							<td>
							    <input class="form-control " [formControl]="fg.controls['partner']" type="text">
							</td>
						</tr>
						<tr>
							<td style="text-align: right">
								order_no<br>
								商户唯一订单号
							</td>
							<td>
							    <input class="form-control " [formControl]="fg.controls['order_no']" type="text">
							</td>
						</tr>
						<tr>
							<td style="text-align: right">
								total_fee<br>
								交易金额(保留小数点后2位)
							</td>
							<td>
							    <input class="form-control " [formControl]="fg.controls['total_fee']" type="text">
							</td>
						</tr>
						<tr>
							<td style="text-align: right">
								notify_url<br>
								服务器异步通知页面路径(可空)
							</td>
							<td>
							    <input class="form-control " [formControl]="fg.controls['notify_url']" type="text">
							</td>
						</tr>
						
						<tr>
							<td class="alert alert-dismissible alert-warning" style="text-align: right">
								sign<br>
								签名,hmac(str,key)，这里自动计算
							</td>
							<td>
							    <input class="form-control" readonly="" value="{{sign}}" type="text">
							</td>
						</tr>
						
						
						
						<tr>
							<td>
								
							</td>
							<td colspan="2" style="padding:15px;">
								<button (click)="onClick()" class="btn btn-primary">提交微信扫码</button>
							</td>
						</tr>
						</tbody>
						</table>
				
				
					</fieldset>
				</form>
			</div>
  `
})
export class QrtestComponent extends BaseComponent {
    fg: FormGroup;
    fgConfig: any;
    user: any = {};
    rez: any = {};
    sign:string='';
    img:string='';
    
    constructor(private httpUser: HttpUser,private httpApi: HttpApi, private fb: FormBuilder) {
        super();
    }
    onClick(){
        let obj:any={};
        utility.extend(obj,this.fg.value);
        obj.sign=this.sign;
        this.httpApi.pay.fn('request')(obj).subscribe((res:any)=>{
            this.img=res._img;
            delete res._img;
            this.rez=res;

        })
    }
    
    ngOnInit() {
        this.fgConfig = {
            'service': ['wx_qrcode',[],{}],
            'partner': ['',[],{}],
            'order_no': [new Date().getTime(),[],{}],
            'total_fee': ['0.01',[],{}],
            'notify_url': ['http://123.57.18.134:3000/api/pay/notify',[],{}]
        };
        this.fg = form.getFormGroup(this.fb, this.fgConfig,this.subscription);
        let subs=this.fg.valueChanges
            .distinctUntilChanged()
            .flatMap(v=>this.httpUser.user.fn('getSign')(v))
            .subscribe((res: any) => {

                //if (res.data) this.email.setErrors({"exist": true, msg: this.fgConfig.email[2].exist});
                this.sign=res.data.sign;
            });
        this.subscription.push(subs);


        this.httpUser.user.findOne().subscribe((res: any)=> {
            if (res.err) return;
            this.fg.controls['partner'].setValue(res.data.uid);
            this.user = res.data;
        });
    }
}


