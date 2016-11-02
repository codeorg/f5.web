import { Component,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {utility, BaseComponent, HttpUser} from '../common';
import {queue} from "rxjs/scheduler/queue";
@Component({
  styles:[`
     *{
        outline:none;
        -moz-outline:none;
    }
    .test:active{
        border:1px solid red;
        display: none;
    }
 
    #mian_table  td{vertical-align:middle;}
    #search_table  td{vertical-align:middle;}
      .full button span {
    background-color: limegreen;
    border-radius: 32px;
    color: black;
  }
  .partially button span {
    background-color: orange;
    border-radius: 32px;
    color: black;
  }
`],
  
    templateUrl:'./card.component.html'
})
export class CardComponent extends BaseComponent  {
    page:any={pageNo:1,pageSize:10,count:0,maxSize:10};
    css:any[]=[];
    rows:any[]=[];
    query:any={time:0};
    total_fee:number=0;
    service_fee:number=0;
    fact_fee:number=0;
    //---------------日期部分 开始
    dtFrom:Date = new Date();
    dtFromOpen=false;
    dtTo:Date = new Date();
    dtToOpen=false;
    minDate:Date=new Date(utility.setDay(new Date(),-180));
    
    OnChangeTime(time){
        let pat=/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;
        let m=pat.exec(time);
        if(!m||m.length<4)return;
        let dd=utility.toInt(m[3]);
        if(dd<=0||dd>31) return;
        if(!utility.isDate(time)) return;
        let dt=new Date(time);
        this.dtFrom=dt;
    }
    onSelectedDate(event,type){
        if(type=='from'){
            this.dtFromOpen=false;
            this.query.from_time=utility.formatDate(event,'yyyy-mm-dd');
        }else{
            this.dtToOpen=false;
            this.query.to_time=utility.formatDate(event,'yyyy-mm-dd');
        }
    }
    //---------------日期部分 结束
    
    constructor(private httpUser: HttpUser,private router:Router) {
        super();
        this.css=utility.ls.get('cardsort');
    }
    

    

    pageChanged(event:any):void {
        this.page.pageNo = event.page;
        this.search();
    };
    onClickOutside(){
        //console.log('onClickOutside')
        this.dtFromOpen=false;
    }
    
    search(){
        let con={
            query:{},
            option:utility.assignIn(this.page,{order:'time desc'})
        }
        let query:any={};
        if(this.query.from_time||this.query.to_time){
            let _from:any= !this.query.from_time?"":utility.dayTime(this.query.from_time);
            let _to:any=!this.query.to_time?"":utility.dayTime(this.query.to_time);
            
            if(this.query.time==1)
                query.trade_time=utility.format("[%s,%s]",_from,_to);
            else
                query.time=utility.format("[%s,%s]",_from,_to);
        }
        if(this.query.cid)query.cid=this.query.cid;
        if(this.query.order_no)query.order_no=this.query.order_no;
        if(this.query.card_type)query.card_type=this.query.card_type;
        if(this.query.trade_status==0||this.query.trade_status==1)query.trade_status=this.query.trade_status;
        if(this.query.notify_status==0||this.query.notify_status==1)query.notify_status=this.query.notify_status;
        con.query=query;
        this.httpUser.card.page(con).subscribe((res:any)=>{
            if(res.err) return;
            this.page.count=res.data.count;
            this.rows=res.data.rows;
            this.total_fee=res.data.total_fee;
            this.service_fee=res.data.service_fee;
            this.fact_fee=res.data.fact_fee;
        })
    }
    

    
    
    
    ngOnInit() {
        this.search();
        
    }
  
}

