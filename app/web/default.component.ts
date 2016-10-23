import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Http } from '../service/http';
import { HttpUser } from '../service/http-user';
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
    console.log(utility.isNumber("ss.1"));
    console.log(utility.isNumber(NaN));
    console.log(utility.toInt("ss.0"));
    console.log(utility.toNumber("ssss"));
    console.log(utility.toNumber("10.558"));
    utility.ls.set("sss",{aaa:1});

    console.log("default",utility.Bid)

    setTimeout(()=> console.log("setTime",utility.Bid),5000);
    console.log( utility.ls.get("sss"));

    utility.browserId().then(res=>console.log("p-res:",res))

    let a={a:1},b={b:2,a:5},d={d:a};

    let c=utility.extend(a,b,d);
    console.log("abc",a,b,c);


  }

  ngOnInit() {

  }

}


