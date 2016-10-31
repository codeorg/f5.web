import {Component, OnInit}      from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {HttpUser,utility,BaseComponent} from '../common'


@Component({
    template: `
  <div class="ng-scope">
  <div class="panel panel-default ng-scope">
       <div class="panel-heading ng-binding">
          您好，{{user.email}}
      </div>
      <div class="panel-body">
          <h4 class="text-primary"><strong>账户余额</strong><span style="color:gray;font-size: 12px; margin-left: 20px; ">不可用余额 0.00 元</span></h4>
          <p style="padding-top: 5px;">
          </p>
          <div class="col-sm-3" style="margin-left: -20px;">
              <strong style="color:#FC491E;font-size: 29px;font-weight: 400" class="ng-binding">{{user.money|int}}
              <span style="color:#FC491E;font-size: 18px" class="ng-binding">.{{user.money|cent}}</span></strong>元
          </div>
          <a routerLink="/user/request_withdraw"  class="btn btn-success col-sm-3" style="width:100px;">提现</a>
      </div>
  </div>
  <div class="ng-scope">
      <ul class="nav nav-tabs">
          <li class="active"><a href="#" data-toggle="tab">系统公告</a></li>
      </ul>
      <div style="border-left:1px solid #DDDDDD;border-right:1px solid #DDDDDD;border-bottom:1px solid #DDDDDD;margin-top: -15px;padding: 10px; ">
          <div ng-repeat="row in rows" class="ng-scope">
              <h5 class="ng-binding">[2015-02-12] <a style="cursor: pointer" class="ng-binding">过年期间一切照常结算，请商户放心！</a></h5>
          </div>
          <div ng-repeat="row in rows" class="ng-scope">
              <h5 class="ng-binding">[2015-01-07] <a style="cursor: pointer" class="ng-binding">系统全线升级为SSL加密</a></h5>
          </div>
          <div ng-repeat="row in rows" class="ng-scope">
              <h5 class="ng-binding">[2014-09-29] <a style="cursor: pointer" class="ng-binding">国庆节期间照常结算</a></h5>
          </div>
          <div ng-repeat="row in rows" class="ng-scope">
              <h5 class="ng-binding">[2014-06-13] <a style="cursor: pointer" class="ng-binding">凌晨中国银行结算商户注意</a></h5>
          </div>
          <div ng-repeat="row in rows" class="ng-scope">
              <h5 class="ng-binding">[2014-05-09] <a style="cursor: pointer" class="ng-binding">服务器防御升级公告</a></h5>
          </div>
          <div ng-repeat="row in rows" class="ng-scope">
              <h5 class="ng-binding">[2014-04-27] <a style="cursor: pointer" class="ng-binding">推广客户赚取佣金,一个客户奖励5rmb</a></h5>
          </div>
      </div>
  </div>
</div>



  `
})
export class DefaultComponent extends BaseComponent{
    user:any={};
    constructor(private route: ActivatedRoute,
                private router: Router,
                private httpUser: HttpUser) {
        super();
    }
    
    onClick() {
        console.log(111)
    }
    
    ngOnInit() {
        let u: any = utility.ls.get('user');
        this.httpUser.user.findOne().subscribe((res: any)=> {
            if(res.err) return;
            
            this.user=res.data;
        });
    }
  
    
}
