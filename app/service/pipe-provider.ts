import {  PipeTransform } from '@angular/core';
import { utility } from './utility';

export class BankSort implements PipeTransform {
    transform(value: string): string {
        let arr=utility.ls.get('banksort');
        let obj:any=utility.find(arr,{id:value});
        if(!obj) return '';
        return obj.name;
    }
}

export class Test implements PipeTransform {
    transform(value: string): string {
        return "111";
    }
}
