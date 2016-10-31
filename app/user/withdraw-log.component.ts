import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {utility, BaseComponent,form, HttpUser} from '../common';


@Component({
    //styleUrls:['../css/user/main.css'],
    template: `
<div>

        <fieldset>
            <table class="table table-bordered table-hover table-condensed">
            <tbody>
            <tr class="active">
                <td width="15%">
                    申请日期
                </td>
                 <td width="15%">
                    到帐日期
                </td>
                <td width="10%">
                    收款人
                </td>
                <td width="15%">
                    银行
                </td>  
                 <td width="15%">
                    卡号
                </td>
                <td width="12%">
                    提现金额
                </td>         
                <td width="13%">
                    余额
                </td>
                <td width="20%">
                    状态
                </td>
            </tr>
            <tr *ngFor="let r of rows">
                <td>{{r.req_time|date:'yyyy-MM-dd HH:mm:ss'}}</td>
                <td>{{r.pay_time>0?(r.pay_time|date:'yyyy-MM-dd HH:mm:ss'):''}}</td>
                <td>{{r.name}}</td>
                <td>{{r.bank_type|bs}}</td>
                <td>{{r.account}}</td>
                <td>{{r.total_fee|number:'1.2'}}</td>
                <td>{{r.balance|number:'1.2'}}</td>
                <td>{{r.status|withdrawstatus}}</td>
            </tr>
            </tbody>
            </table>
        </fieldset>
        <pagination [boundaryLinks]="true" [totalItems]="page.count" [(ngModel)]="page.pageNo" class="pagination-sm" (pageChanged)="pageChanged($event)"
            [maxSize]="page.maxSize"  [itemsPerPage]="page.pageSize" previousText="&lsaquo;" nextText="&rsaquo;" firstText="&laquo;" lastText="&raquo;"></pagination>
</div>
  `
})
export class WithdrawLogComponent extends BaseComponent{
    page:any={pageNo:1,pageSize:10,count:0,maxSize:10};
    rows:any[]=[];
    pageChanged(event:any):void {
        this.page.pageNo = event.page;
        this.search();
    };
    search(){
        let con={
            query:{},
            option:utility.assignIn(this.page,{order:'req_time desc'})
        }
        this.httpUser.withdraw.page(con).subscribe((res:any)=>{
            if(res.err) return;
            this.page.count=res.data.count;
            this.rows=res.data.rows;
        })
    }
    
    
    constructor(private httpUser: HttpUser,private router:Router) {
        super();
    }

    
    
   
    ngOnInit() {
        this.search();
    
    }
}

