import { Pipe, PipeTransform } from '@angular/core';
import { utility } from './utility';

@Pipe({name: 'banksort'})
export class BankSortPipe implements PipeTransform {
    transform(value: string): string {
        let arr=utility.ls.get('banksort');
        let obj:any=utility.find(arr,{id:value});
        if(!obj) return '';
        return obj.name;
    }
}


@Pipe({name: 'test'})
export class TestPipe implements PipeTransform {
    transform(value: string): string {
        return "111";
    }
}
