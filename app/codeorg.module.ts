import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule,ReactiveFormsModule }         from '@angular/forms';
import { BankSortPipe,TestPipe }  from './service/pipe';
@NgModule({
    imports:      [ CommonModule,FormsModule,ReactiveFormsModule ],
    declarations: [ BankSortPipe,TestPipe],
    exports:      [
        CommonModule,
        FormsModule ,
        ReactiveFormsModule,
        BankSortPipe,
        TestPipe
    ]
})
export class CodeorgModule { }
