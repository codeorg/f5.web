import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule,ReactiveFormsModule }         from '@angular/forms';
import {BankSortPipe, TestPipe, IntPipe, CentPipe,RightPipe,RateStatusPipe,WithdrawStatusPipe}  from './common/pipe';
@NgModule({
    imports:      [ CommonModule,FormsModule,ReactiveFormsModule ],
    declarations: [ BankSortPipe,IntPipe,CentPipe,RightPipe,RateStatusPipe,WithdrawStatusPipe,TestPipe],
    exports:      [
        CommonModule,
        FormsModule ,
        ReactiveFormsModule,
        BankSortPipe,
        IntPipe,
        CentPipe,
        RightPipe,
        RateStatusPipe,
        WithdrawStatusPipe,
        TestPipe
    ]
})
export class CodeorgModule { }
