import {Component} from '@angular/core';
import {utility, BaseComponent, HttpUser} from '../common';


@Component({
    styles:[`

    #mian_table  td{vertical-align:middle;}
  
`],
    template: `
	<div>
				<form name="form" class="form-horizontal col-sm-12 ng-scope ng-pristine ng-valid">
					<fieldset>					
						<div *ngIf="isAlert" class="alert alert-dismissible alert-warning " >
							<button type="button" class="close" (click)="isAlert=false;" data-dismiss="alert">×</button>
							<h4>注意!</h4>
							<p>
							密钥重新生成后，商户系统密钥也得统一改变！
							</p>
						</div>
						<table id="mian_table" class="table table-striped table-hover ">
						<tbody>
						<tr>
							<td class="col-sm-3" style="text-align: right">
							商户ID<br>
                            (文档中partner字段)
							</td>
							<td  class="col-sm-9">
								 {{user.uid}}
							</td>
						</tr>
						<tr>
							<td  style="text-align: right">
								密钥<br>
                                (加密签名时的key字段)
							</td>
							<td style="padding:15px;" >
								{{user.key}}
							</td>
						</tr>
						
						<tr>
							<td >
					
							</td>
							<td style="padding:15px;" >
							    <button (click)="onClick()"  class="btn btn-primary">重新生成密钥</button>
							</td>
						</tr>
						</tbody>
						</table>
					</fieldset>
				</form>
			</div>
  `
})
export class KeyComponent extends BaseComponent {
    isAlert: boolean = true;
    user: any = {};
    
    constructor(private httpUser: HttpUser) {
        super();
    }
    onClick(){
        this.httpUser.user.fn('changeKey')().subscribe((res:any)=>{
            this.user.key=res.data.key;
        })
    }
    
    ngOnInit() {
        let u: any = utility.ls.get('user');
        this.httpUser.user.findOne({email: u.email}).subscribe((res: any)=> {
            if (res.err) return;
            
            this.user = res.data;
        });
    }
}


