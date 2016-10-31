/**
 * Created by Administrator on 2016/10/30.
 */
import { Component,OnDestroy,OnInit} from '@angular/core';
export class BaseComponent implements OnDestroy,OnInit {
    public subscription:any[]=[];
    ngOnInit(){

    }
    ngOnDestroy() {
        this.subscription.forEach((sub: any)=> {
            //console.log(sub);
            if (sub) sub.unsubscribe();
        });
    
    }
}