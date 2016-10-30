import { Component } from '@angular/core';
import { utility } from '../common/utility';

@Component({
  template: `
    <p>user test1</p>
      <p>bid:{{"2"|test}} {{"ICBC"|bs}}</p>
  `
})
export class AccountInfoComponent {
  bid:string=utility.Bid;
}


