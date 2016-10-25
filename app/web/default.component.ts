import {Component, OnInit}      from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {Http} from '../service/http';
import {HttpUser} from '../service/http-user';
import {utility} from '../service/utility';
require('../lib/jquery-1.7.2.min');
require('../lib/jquery.plugin.min');
var FH = require('../lib/fashionfoucs');
@Component({
    styleUrls: ['../css/web/fashionfoucs.css', '../css/web/index-login.css'],
    template: `


<div id="banner">
	<ul id="banner_img">
		<li class="item1">
			<div class="ifrmae">
				<div class="ad_txt">
				
				</div>
				<div class="iframe">
        <div class="banner_area" id="banner_list">
            <div class="main_box" >
                <div class="main_cont">
                    <div class="wrapper-login">
                    <dl class="xl_info clearfix">
                        <dt class="hide">登录</dt>
                        <dd><input type="text" class="srh" placeholder="手机号/用户名/邮箱"></dd>
                        <dd><input type="text" class="srh" placeholder="请输入您的密码"></dd>
                        <dd><input class="button white radius4 dl" type="button" value="登录" /></dd>
                        <dd><input class="button blue radius4 shenqing" type="button" value="注册" /><input class="button blue radius4 lj" type="button" value="忘记密码" /></dd>
                    </dl>
                    
                    
                    </div>
                    <div class="bg"></div>
                </div>
        
            </div>
            <div class="banner_box banner_ui on on_delay" >
                <div class="banner_cont">
                    <div class="area">
                        <p class="ban1_anim_txt">精心打造，简而未减</p>
                        <div class="ban1_anim_bg"></div>
                    </div>
                </div>
            </div>
            <div class="banner_box banner_logo" >
                <div class="banner_cont">
                    <div class="area">
                        <p class="ban2_anim_txt">动态皮肤，随心随身</p>
                        <div class="ban2_anim_bg_logo"></div>
                        <div class="ban2_anim_bg_line"></div>
                        <div class="ban2_icon_1"><span></span></div>
                        <div class="ban2_icon_2"><span class="s1"></span><span class="s2"></span></div>
                        <div class="ban2_icon_3"><span></span></div>
                    </div>
                </div>
            </div>
            <div class="banner_box banner_lighting">
                <div class="banner_cont">
                    <div class="area">
                        <div class="ban3_act_bg"></div>
                        <div class="ban3_mask"></div>
                        <p class="ban3_anim_txt">极速体验，快如闪电</p>
                        <div class="ban3_anim_bg_lightning"></div>
                        <div class="ban3_anim_bg_boom"></div>
                        <div class="ban3_anim_bg_boom_icon_l"></div>
                        <div class="ban3_anim_bg_boom_icon_r"></div>
                    </div>
                </div>
            </div>
          </div>

               
               
                </div>
			</div>
		</li>
		<li class="item2">
			<div class="wrapper">
				<div id="ttt" class="ad_txt">
					<h2>收款方式覆盖：PC、实体、卡类</h2>
					<p>买家最熟悉的主流支付方式</p>
                    <p>移动端最常用的收款方式</p>
                    <p>为商家提供各种卡类支付消耗渠道</p>
					<a href="#" target="_blank">了解详细&gt;</a>
				</div>
				<div class="ad_img">
					<img src="/img/20120830015430148.png" width="506" height="440"  />
				</div>
			</div>
		</li>
		<li class="item3">
			<div class="wrapper">
				<div class="ad_txt">
					<h2>合作伙伴</h2>
                    <p>支付宝、微信支付、翼支付、中国移动、联通、电信、易宝支付、招商银行、建设银行、工商银行、农业银行</p>
					<p>期待您的加盟，让我们共享成功！</p>
					<a href="#" target="_blank">了解详细&gt;</a>
				</div>
				<div class="ad_img"><img src="/img/20120830015446637.png" width="506" height="440" /></div>
			</div>
		</li>
		<li class="item4">
			<div class="wrapper">
				<div class="ad_txt">
					<h2>商户收款难题-我们的方案</h2>
					<p>收款方式不齐全，买家付费不便捷，减少用户的下单量</p>
                    <p>资金结算慢，加大营运成本</p>
                    <p>收款渠道多，接入繁杂、数据审核繁琐</p>
                    <p>大部分的收款渠道，结算不灵活</p>
					<a href="#" target="_blank">了解详细&gt;</a>
				</div>
				<div class="ad_img"><img src="/img/20120830015615324.png" width="506" height="440" /></div>
			</div>
		</li>
		<li class="item5">
			<div class="wrapper">
				<div class="ad_txt">
					<h2>商务合作-期待与您合作</h2>
					<p>公司始终专注于提供专业的互联网服务解决方案-期待您的加盟！</p>
					<a href="#" target="_blank">了解详细&gt;</a>
				</div>
				<div class="ad_img"><img src="/img/20120830015631560.png" width="506" height="440"  /></div>
			</div>
		</li>
		<li class="item6">
			<div class="wrapper">
				<div class="ad_txt">
					<h2>关于付网</h2>
					<p>付网是由大彻网络科技（上海）有限公司</p>
                    <p>提供的一款以收款业务为主体的产品，</p>
                    <p>服务于游戏、网上商城、本地生活三大领域，</p>
                    <p>始终秉承“科技 品牌 文化 创新”的文化理念，</p>
                    <p>专注于为各行各业提供最完善的、</p>
                    <p>最专业的一站式收款方式解决方案</p>
					<a href="#" target="_blank">了解详细&gt;</a>
				</div>
				<div class="ad_img"><img src="/img/20120830015651273.png" width="506" height="440"  /></div>
			</div>
		</li>
		
	</ul>
	
	<div id="banner_ctr">
		<div id="drag_ctr"></div>
		<ul>
			<li class="first-item">栏目标题</li>
			<li (click)="clickNav(0)">栏目标题</li>
			<li (click)="clickNav(1)">栏目标题</li>
			<li (click)="clickNav(2)">栏目标题</li>
			<li (click)="clickNav(3)">栏目标题</li>
			<li (click)="clickNav(4)">栏目标题</li>
			<li (click)="clickNav(5)">栏目标题</li>
			<li class="last-item">栏目标题</li>
		</ul>
		<div id="drag_arrow"></div>
	</div>
</div><!--banner图片导航---END-->
<div class="find_dd">
<div class="find_dd_bg">

</div>
<div style="line-height: 50px;font-size:12px;float:left;position: absolute;top:0px;left:10px">大彻网络科技（上海）有限公司 沪ICP备14000903号</div>
<div style="position: absolute;top:0px;right: 30px;font-size:14px;line-height: 50px;color: #fff;">
<a routerLink="/sub">sub </a>
<a routerLink="/reg">注册 </a>
<span>- </span>
<a routerLink="" target="_top">登录</a>
</div>
</div>

  `,
    providers: [Http, HttpUser]
})
export class DefaultComponent implements OnInit {

    constructor(private http: Http, private user: HttpUser) {


    }

    clickNav(index: number): void {
        FH.click(index)
    }

    ngOnInit() {
        FH.animation()
    }

}


