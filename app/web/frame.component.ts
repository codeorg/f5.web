import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  template:  `<router-outlet></router-outlet>`
})
export class FrameComponent implements OnInit{
  constructor(    private route: ActivatedRoute,
                  private router: Router){
    //console.log("browserId-sss",this.browserId)
  }

  ngOnInit() {
    //子路由要想调用，用this.route.parent
    //this.route.snapshot.data;
  }
}

