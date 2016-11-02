import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule,ReactiveFormsModule }         from '@angular/forms';
import {DateTimePipe,MoneyPipe,BankSortPipe,CardSortPipe, TestPipe, IntPipe, CentPipe,RightPipe,RateStatusPipe,WithdrawStatusPipe}  from './common/pipes';
import {ClickOutsideDirective,ClickOutsideFroDateDirective}  from './common/directives';
@NgModule({
    imports:      [ CommonModule,FormsModule,ReactiveFormsModule ],
    declarations: [ DateTimePipe,MoneyPipe,BankSortPipe,CardSortPipe,IntPipe,CentPipe,RightPipe,RateStatusPipe,WithdrawStatusPipe,TestPipe,ClickOutsideDirective,ClickOutsideFroDateDirective],
    exports:      [
        CommonModule,
        FormsModule ,
        ReactiveFormsModule,
        DateTimePipe,
        MoneyPipe,
        BankSortPipe,
        CardSortPipe,
        IntPipe,
        CentPipe,
        RightPipe,
        RateStatusPipe,
        WithdrawStatusPipe,
        TestPipe,
        ClickOutsideDirective,
        ClickOutsideFroDateDirective
        
    ]
})
export class CodeorgModule { }
