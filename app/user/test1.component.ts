import { Component } from '@angular/core';
import { utility } from '../service/utility';

@Component({
  template: `
    <p>user test1</p>
      <p>bid:{{bid}}</p>
  `
})
export class Test1Component {
  bid:string=utility.Bid;
}


