import { Component } from '@angular/core';

@Component({
  styleUrls: ['../css/web/common.css', '../css/web/login.css'],
  template:`
<div class="login-top">
    <div class="wrap">
        <div class="home-back"><a routerLink="/">返回首页</a></div>
    </div>
</div>
<div class="login-logo"><img src="/img/logo.png" /></div>
<div class="login-content">

    <div class="tit re_center">
        <h1>注册成功！</h1>
        <div>请联系相关客服人员审核！</div>
    </div>

</div>
<div style="margin-top: 100px" class="foot">
    <div class="wrap">
        <div class="">大彻网络科技（上海）有限公司 沪ICP备14000903号</div>
        <div class=""><img src="/img/360.png" /><img src="/img/safe.png" /></div>
    </div>
</div>
`
})
export class RegOkComponent { }

