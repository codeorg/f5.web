import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Http } from '../service/http';
import { HttpUser } from '../service/httpUser';
import { utility } from '../service/utility';
@Component({
  template: `
默认页面
{{n}}
  `,
  providers: [Http,HttpUser]
})
export class DefaultComponent implements OnInit {
  n="sss";
  constructor(private http:Http,private user:HttpUser){
    this.test();
  }

  test(){
    this.http.demo.fn("test")().then(res=>{
      console.log(res)
    })
    console.log(utility.find([{a:1},{b:1,c:2}],{a:1}));


  }

  ngOnInit() {

  }

}


