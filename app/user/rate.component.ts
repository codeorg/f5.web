import { Component } from '@angular/core';
import {utility, BaseComponent, HttpUser} from '../common';
@Component({
  styles:[`
    #mian_table td{vertical-align:middle;}   
`],
  template: `
	<div >
	
				<fieldset >
					<table id="mian_table" class="table table-bordered table-hover table-condensed font_14" style="padding-bottom: 0px;margin-bottom: 0px;">
					<tbody>
					<tr>
						<td width="18%" align="center">
							开启状态
						</td>
						<td width="26%">
							充值方式
						</td>
						<td width="12%">
							清算率
						</td>
						<td width="30%">
							说明
						</td>
					
					</tr>
					<tr *ngFor="let rate of rates">
						<td align="center">
							<button class="btn" [disabled]="true" [ngClass]="{'btn-success':rate.status==1,'btn-danger':rate.status==0}">{{rate.status|ratestatus}}</button>
						</td>
						<td class="ng-binding">
							{{rate.name}}
						</td>
						<td class="ng-binding">
							{{rate.rate}}
						</td>
						<td>
						    <span *ngIf="rate.status==0">关闭状态请联系商务开启</span> 
						</td>
					
					</tr>
					
					</tbody>
					</table>
				</fieldset>
			</div>
  `
})
export class RateComponent extends BaseComponent{
    rates: any[] = [];
    constructor(private httpUser: HttpUser) {
        super();
    }
    ngOnInit() {
        let u: any = utility.ls.get('user');
        this.httpUser.user.fn('rate')().subscribe((res: any)=> {
            console.log(res)
            if (res.err) return;
            // if(!res.data.rate)
            //     res.data.rate={}
            // else
            //     res.data.rate=JSON.parse(res.data.rate);
            this.rates = res.data;
        });
        
        
    }
  
}

