import { Component } from '@angular/core';
import { utility } from '../service/utility';

@Component({
  template: `
    <p>user test1</p>
      <p>bid:{{"2"|test}}</p>
  `
})
export class Test1Component {
  bid:string=utility.Bid;
}


