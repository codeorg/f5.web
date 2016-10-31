import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {utility, BaseComponent, Http, HttpUser} from  '../common';

@Component({
    styles: [`
      a{cursor: pointer;}
      .nav-body{
        padding-top: 12px;
        padding-bottom: 5px;
        }
        `],
   
    templateUrl: '../tpl/user/frame.html',
    providers: [Http, HttpUser]
})
export class FrameComponent extends BaseComponent {
    menus: any[];
    text: string;
    user: Object = {};
    
    constructor(private router: Router, private title: Title) {
        super();
        this.user = utility.ls.get('user');
    }
    
    isSelected(url: string): boolean {
        //console.log(this.router.url);
        return this.router.url == url;
    }
    
    signout() {
        
    }
    
    ngOnInit() {
        const MenusConfig: any = [
            [
                {url: '/user', text: '我的余额'},
                {url: '/user/account_info', text: '账户信息'},
                {url: '/user/rate', text: '清算比例'},
                {url: '/user/request_withdraw', text: '申请提现'},
                {url: '/user/withdraw_log', text: '提现记录'}
            ], [
                {url: '/doc', text: '接口文档'},
            ]
        ];
        let sub = this.router.events.subscribe((v: any) => {
            for (let i in MenusConfig) {
                let arr = MenusConfig[i];
                let obj: any = utility.find(arr, {url: v.url});
                if (!obj) continue;
                this.menus = arr;
                this.title.setTitle(obj.text + "- 付网");
                this.text = obj.text;
            }
        })
        this.subscription.push(sub);
    }
}


