import {Component, OnInit}      from '@angular/core';

import {ActivatedRoute, Router, Params} from '@angular/router';
import {Http} from '../service/http';
import {HttpUser} from '../service/http-user';
import {utility} from '../service/utility';

@Component({
    styleUrls: ['../css/web/common.css', '../css/web/login.css'],

    template: `
<div class="login-top">
	<div class="wrap">
		<div class="home-back"><a href="index.html">返回首页</a></div>
	</div>
</div>
<div class="login-logo"><img src="/img/logo.png" /></div>
<div class="login-content">
	
	<div class="tit">
		<h1>注册账号</h1>
		<div>认真负责真实地填写您的注册资料,会为您带来更多的商业机会</div>
	</div>
	<form class="form-horizontal">
		<div id="aaaa" class="form-group">
            <label class="col-md-2 control-label">用户名：</label>
			<div class="col-md-10">
				<div class="w160">
			<input type="text"  class="form-control" id="username"
       required
       [(ngModel)]="db.username" #username="ngModel" name="username" >
  

				</div>
				<div class="form-con">	
				    {{username.errors}}
					<div [hidden]="username.dirty" class="star">3~18位的数字、字母组成,不支持特殊符号</div>
					<div [hidden]="(!username.dirty )" class="star">Name is required</div>
  	                <div [hidden]="true" class="correct">正确</div>
					
				
				</div>
			</div>
		</div>
		<div class="form-group">
			<label for="lastname" class="col-md-2 control-label">登录密码：</label>
			<div class="col-md-10">
				<div class="w160">
					    <input maxlength="18" tabIndex="1" class="form-control" />
				</div>
				<div class="form-con">
					<div id="star_pwd" class="star">6~18位的数字、字母组成</div>
					<div id="not_pwd" class="not"></div>
					<div id="correct_pwd" class="correct"></div>
					<div id="error_pwd" class="error"></div>
				</div>
			</div>
		</div>
		<div class="form-group">
			<label for="lastname" class="col-md-2 control-label">确认密码：</label>

			<div class="col-md-10">
				<div class="w160">
					<input id=repassword  name=repassword maxlength="18" tabIndex=3 type=password class="form-control" onblur="javascript:if(this.value!=''){document.getElementById('not_repassword').style.display='none';document.getElementById('error_repassword').style.display='none';document.getElementById('correct_repassword').style.display='none';}check2pwd(this.value);"/>
				</div>
				<div class="form-con">
					<div id="star_repassword" class="star">确认登录密码</div>

					<div id="not_repassword" class="not"></div>
					<div id="correct_repassword" class="correct"></div>
					<div id="error_repassword" class="error"></div>
				</div>
			</div>
		</div>
		<div class="form-group">
			<label for="lastname" class="col-md-2 control-label">公司名称：</label>
			<div class="col-md-10">
				<div class="w260">
					<input name="CompanyName" type="text" class="form-control" maxlength="50" tabIndex=15 onblur="javascript:if(this.value!=''){document.getElementById('not_CompanyName').style.display='none';document.getElementById('correct_CompanyName').style.display='none';$('#star_CompanyName').css('display','none');}chkCompanyName(this.value);" />
				</div>
				<div class="form-con">
					<div id="star_CompanyName" class="star">商户的公司名称</div>
					<div id="not_CompanyName" class="not"></div>
					<div id="correct_CompanyName" class="correct"></div>
					<div id="error_CompanyName" class="error"></div>
				</div>
			</div>
		</div>
        <div class="form-group">
			<label for="lastname" class="col-md-2 control-label">营业执照：</label>
			<div class="col-md-10">
				<div class="w260">
					<input name="ZhiZhao" type="text" class="form-control" maxlength="50" tabIndex=16 onblur="javascript:if(this.value!=''){document.getElementById('not_ZhiZhao').style.display='none';document.getElementById('correct_ZhiZhao').style.display='none';$('#star_ZhiZhao').css('display','none');}chkZhiZhao(this.value);" />
				</div>
				<div class="form-con">
					<div id="star_ZhiZhao" class="star">商户的营业执照号</div>
					<div id="not_ZhiZhao" class="not"></div>
					<div id="correct_ZhiZhao" class="correct"></div>
					<div id="error_ZhiZhao" class="error"></div>
				</div>
			</div>
		</div>
        <div class="form-group">
			<label for="lastname" class="col-md-2 control-label">经营范围：</label>
			<div class="col-md-10">
				<div class="w260">
					<input name="SiteName" type="text" class="form-control" maxlength="50" tabIndex=17 onblur="javascript:if(this.value!=''){document.getElementById('not_SiteName').style.display='none';document.getElementById('correct_SiteName').style.display='none';$('#star_SiteName').css('display','none');}chkSiteName(this.value);" />
				</div>
				<div class="form-con">
					<div id="star_SiteName" class="star">经营范围</div>
					<div id="not_SiteName" class="not"></div>
					<div id="correct_SiteName" class="correct"></div>
					<div id="error_SiteName" class="error"></div>
				</div>
			</div>
		</div>
        <div class="form-group">
			<label for="lastname" class="col-md-2 control-label">网站名称：</label>
			<div class="col-md-10">
				<div class="w260">
					<input name="WebName" type="text" class="form-control" maxlength="50" tabIndex=4 onblur="javascript:if(this.value!=''){document.getElementById('not_WebName').style.display='none';document.getElementById('correct_WebName').style.display='none';$('#star_WebName').css('display','none');}chkWebName(this.value);" />
				</div>
				<div class="form-con">
					<div id="star_WebName" class="star">网站名称</div>
					<div id="not_WebName" class="not"></div>
					<div id="correct_WebName" class="correct"></div>
					<div id="error_WebName" class="error"></div>
				</div>
			</div>
		</div>
		<div class="form-group">
			<label for="firstname" class="col-md-2 control-label">平台网址：</label>
			<div class="col-md-10">
				<div class="w260">
					<input id=siteaddr  name=siteaddr maxlength="50" tabIndex=5 value="http://" size=40 class="form-control" onblur="javascript:if(this.value!=''){document.getElementById('not_siteaddr').style.display='none';document.getElementById('error_siteaddr').style.display='none';document.getElementById('correct_siteaddr').style.display='none';}chkSiteUrl(this.value);"/>
				</div>
				<div class="form-con">
					<div id="star_siteaddr" class="star">平台网址</div>
				   <div id="not_siteaddr" class="not"></div>
					<div id="correct_siteaddr" class="correct"></div>
					<div id="error_siteaddr" class="error"></div>
				</div>
			</div>
		</div>
		<div class="form-group">
			<label for="lastname" class="col-md-2 control-label">E-mail：</label>
			<div class="col-md-10">
				<div class="w160">
					<input id=email name=email tabIndex=6 maxlength="40" class="form-control" onblur="javascript:if(this.value!=''){document.getElementById('not_email').style.display='none';document.getElementById('error_email').style.display='none';document.getElementById('correct_email').style.display='none';}chkemail(this.value);"/>
				</div>
				<div class="form-con">
					<div id="star_email" class="star">邮箱地址</div>
				    <div id="not_email" class="not">必填</div>
					<div id="correct_email" class="correct"></div>
					<div id="error_email" class="error"></div>
				</div>
			</div>
		</div>
        <div class="form-group">
			<label for="lastname" class="col-md-2 control-label">联系地址</label>
			<div class="col-md-10">
				<div class="w160">
					<input id=email name=Dizhi tabIndex=18 maxlength="40" class="form-control" onblur="javascript:if(this.value!=''){document.getElementById('not_Dizhi').style.display='none';document.getElementById('error_Dizhi').style.display='none';document.getElementById('correct_Dizhi').style.display='none';}chkDizhi(this.value);"/>
				</div>
				<div class="form-con">
					<div id="star_Dizhi" class="star">联系地址</div>
				    <div id="not_Dizhi" class="not">必填</div>
					<div id="correct_Dizhi" class="correct"></div>
					<div id="error_Dizhi" class="error"></div>
				</div>
			</div>
		</div>
		<div class="form-group">
			<label for="lastname" class="col-md-2 control-label">QQ号码</label>
			<div class="col-md-10">
				<div class="w160">
					<input id=oicq  name=oicq   maxlength="13" tabIndex=7 class="form-control" onblur="javascript:if(this.value!=''){document.getElementById('not_oicq').style.display='none';document.getElementById('error_oicq').style.display='none';document.getElementById('correct_oicq').style.display='none';}chkqq(this.value);"/>
				</div>
				<div class="form-con">
					<div id="star_oicq" class="star">联系人QQ号码</div>
					<div id="not_oicq" class="not"></div>
					<div id="correct_oicq" class="correct"></div>
					<div id="error_oicq" class="error"></div>
				</div>
			</div>
		</div>
		<div class="form-group">
			<label for="lastname" class="col-md-2 control-label">手机号码</label>
			<div class="col-md-10">
				<div class="w160">
					<input id=movephone name=movephone tabIndex=8  maxlength="20" class="form-control" onblur="javascript:if(this.value!=''){document.getElementById('not_movephone').style.display='none';document.getElementById('error_movephone').style.display='none';document.getElementById('correct_movephone').style.display='none';}chkphone(this.value);"/>
				</div>
				<div class="form-con">
					<div id="star_movephone" class="star">联系人手机号码</div>
					<div id="not_movephone" class="not">必填</div>
					<div id="correct_movephone" class="correct"></div>
					<div id="error_movephone" class="error"></div>
				</div>
			</div>
		</div>
		<div class="form-group">
			<label for="lastname" class="col-md-2 control-label">网站备案号</label>
			<div class="col-md-10">
				<div class="w160">
					<input id=webIcp  name=webIcp  tabIndex=14 maxlength="18" class="form-control" onblur="javascript:if(this.value!=''){document.getElementById('not_webIcp').style.display='none';document.getElementById('error_webIcp').style.display='none';document.getElementById('correct_webIcp').style.display='none';}chkwebIcp(this.value);"/>
				</div>
				<div class="form-con">
					<div id="star_webIcp" class="star">网站ICP备号</div>
					<div id="not_webIcp" class="not"></div>
					<div id="correct_webIcp" class="correct"></div>
					<div id="error_webIcp" class="error"></div>
				</div>
			</div>
		</div>
		<div class="line"></div>
		
		<div class="form-group">
			<label for="lastname" class="col-md-2 control-label">开户银行：</label>
			<div class="col-md-10">
				<div class="w160" id="province">
					<input type="text" class="form-control"  id="prv" name="prv" tabIndex="9" type="text" value="----选择银行----" onblur="javascript:if(this.value!=''){document.getElementById('not_prv').style.display='none';document.getElementById('error_prv').style.display='none';document.getElementById('correct_prv').style.display='none';}chkprv(this.value);" readonly />
					<div class="btn-an"></div>
				</div>
				<div class="form-con">
					<div id="star_prv" class="star">请选择开户银行或支付宝</div>
					<div id="not_prv" class="not"></div>
					<div id="correct_prv" class="correct"></div>
					<div id="error_prv" class="error"></div>
				</div>
				<!--#省份弹框-->
				<div class="tk-box province">
				   <div class="list" id="options"> <a href="javascript:void(0);" rel="支付宝账户">支付宝账户</a> <a href="javascript:void(0);" rel="中国银行">中国银行</a> <a href="javascript:void(0);" rel="中国建设银行">中国建设银行</a> <a href="javascript:void(0);" rel="中国农业银行">中国农业银行</a> <a href="javascript:void(0);" rel="中国工商银行">中国工商银行</a> <a href="javascript:void(0);" rel="交通银行">交通银行</a> <a href="javascript:void(0);" rel="招商银行">招商银行</a> <a href="javascript:void(0);" rel="兴业银行">兴业银行</a> <a href="javascript:void(0);" rel="光大银行">光大银行</a> <a href="javascript:void(0);" rel="中信银行">中信银行</a> <a href="javascript:void(0);" rel="上海浦发银行">上海浦发银行</a> <a href="javascript:void(0);" rel="平安银行">平安银行</a><a href="javascript:void(0);" rel="杭州银行">杭州银行</a> </div>
				
					
				</div>
			</div>
		</div>

		<div class="form-group">
			<label for="lastname" class="col-md-2 control-label">账户号：</label>
			<div class="col-md-10">
				<div class="w260">
					<input name="AccNum" type="text" class="form-control" maxlength="50" tabIndex=10 onblur="javascript:if(this.value!=''){document.getElementById('not_AccNum').style.display='none';document.getElementById('correct_AccNum').style.display='none';$('#star_AccNum').css('display','none');}chkAccNum(this.value);" />
				</div>
				<div class="form-con">
					<div id="star_AccNum" class="star">银行账户号或支付宝账户号</div>
					<div id="not_AccNum" class="not"></div>
					<div id="correct_AccNum" class="correct"></div>
					<div id="error_AccNum" class="error"></div>
				</div>
			</div>
		</div>
		<div class="form-group">
			<label for="lastname" class="col-md-2 control-label">账户姓名：</label>
			<div class="col-md-10">
				<div class="w160">
					<input name="AccName" type="text" class="form-control" maxlength="50" tabIndex=11 onblur="javascript:if(this.value!=''){document.getElementById('not_AccName').style.display='none';document.getElementById('correct_AccName').style.display='none';$('#star_AccName').css('display','none');}chkAccName(this.value);" />
				</div>
				<div class="form-con">
					<div id="star_AccName" class="star">银行账户真实姓名或支付宝账户真实姓名</div>
                    <div id="not_AccName" class="not"></div>
                    <div id="correct_AccName" class="correct"></div>
					<div id="error_AccName" class="error"></div>
				</div>
			</div>
		</div>
		<div class="form-group">
			<label for="lastname" class="col-md-2 control-label">开户银行所在地：</label>
			<div class="col-md-10">
				<div class="w260">
				<input name="BankAddress" type="text" class="form-control" maxlength="50" tabIndex=12 onblur="javascript:if(this.value!=''){document.getElementById('not_BankAddress').style.display='none';document.getElementById('correct_BankAddress').style.display='none';$('#star_BankAddress').css('display','none');}chkBankAddress(this.value);" />
				</div>
				<div class="form-con">
					<div id="star_BankAddress" class="star">开户银行所在地</div>
					<div id="not_BankAddress" class="not"></div>
					<div id="correct_BankAddress" class="correct"></div>
					<div id="error_BankAddress" class="error"></div>
				</div>
			</div>
		</div>
		<div class="form-group">
			<label for="lastname" class="col-md-2 control-label">身份证号码：</label>
			<div class="col-md-10">
				<div class="w260">
					<input maxlength="18" class="form-control" />
				</div>
				<div class="form-con">
					<div id="star_sfznum" class="star">身份证号码</div>
					<div id="not_sfznum" class="not"></div>
					<div id="correct_sfznum" class="correct"></div>
					<div id="error_sfznum" class="error"></div>
				</div>
			</div>
		</div>
		
		<div class="form-group">
			<label for="lastname" class="col-md-2 control-label">验证码：</label>
			<div class="col-md-10">
				<div class="w160">
					<input id="yzm" name="yzm" tabindex="15" maxlength="8" class="form-control" onblur="javascript:if(this.value!=''){document.getElementById('not_yzm').style.display='none';document.getElementById('error_yzm').style.display='none';document.getElementById('correct_yzm').style.display='none';}chkwebcode(this.value);">
				</div>
				<div class="form-con">
					<div id="star_yzm" class="star"></div>
					<div id="not_yzm" class="not" style="float:left;"></div>
					<div id="correct_yzm" class="correct"></div>
					<div id="error_yzm" class="error"></div>
					<img src="../../inc/safecode.asp?rndid=734100.98643703445667" id="checkcode" style="display:block;float:left;width:90px;height:35px;" onclick="this.src='../../inc/safecode.asp?rndid=73410' + Math.random()" alt="看不清楚换一张">
				</div>
			</div>
		</div>
		
		<div class="form-group">
			<div style="margin-left:200px;">
				<div style="float:left; line-height:30px;"><input type="checkbox" name="chkxy" id="chkxy" checked="checked" onclick="javascript:if(this.checked==true){document.getElementById('not_chkxy').style.display='none';}chkchkxy(this.checked);" />&nbsp;《我已仔细阅读并接受<a href="agreement.html" target="_blank" style="text-decoration:underline;cursor:pointer;color:#ff5000;">多宝通服务条款</a>》</div>
				<div class="form-con">
					<div id="not_chkxy" class="not" ></div>
				</div>
			</div>
		</div>
		
		<div class="form-group">
			<div class="col-offset-2 col-md-10">
				<div class="btn-submit">
<button  class="btn btn-success card_block"><i class="fa fa-check fa-fw"></i>立即注册</button>
</div>
			</div>
		</div>
	</form>

</div>
<div class="foot">
	<div class="wrap">
		<div class="">大彻网络科技（上海）有限公司 沪ICP备14000903号</div>
		<div class=""><img src="/img/360.png" /><img src="/img/safe.png" /></div>
	</div>
</div>
  `,
    providers: [Http, HttpUser]
})
export class RegComponent implements OnInit {
    db:any={};
    form: any;
    constructor(private http: Http) {
        utility.ls.set("sssssss",{ssssssss:1111111111})

    }


    ngOnInit() {
    }

}


