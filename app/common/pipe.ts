import { Pipe,PipeTransform } from '@angular/core';
import { utility } from './utility';

@Pipe({name: 'bs'})
export class BankSortPipe implements PipeTransform {
    transform(value: string): string {
        let arr=utility.ls.get('banksort');
        let obj:any=utility.find(arr,{id:value});
        if(!obj) return '';
        return obj.name;
    }
}

@Pipe({name: 'int'})
export class IntPipe implements PipeTransform {
    transform(value: any): string {
        return utility.toInt(value).toString();
    }
}
@Pipe({name: 'cent'})
export class CentPipe implements PipeTransform {
    transform(value: any): string {
        let str=utility.formatMoney(value);
        let index:number=str.indexOf('.');
        if(index==-1) return '00';
        return str.substring(index+1);
    }
}
@Pipe({name: 'right'})
export class RightPipe implements PipeTransform {
    transform(value: string, param: number): string {
        if(!value) return '';
        let len=param||4;
        if(value.length<=len) return value;
        return value.substr(-len);
    }
}

@Pipe({name: 'ratestatus'})
export class RateStatusPipe implements PipeTransform {
    transform(value: number): string {
        if(value==1) return "已开启";
        return "未开启";
    }
}
@Pipe({name: 'withdrawstatus'})
export class WithdrawStatusPipe implements PipeTransform {
    transform(value: number): string {
        //request,postbank,success,fail
        switch (value){
            case 'postbank':
                return '提交到银行';
            case 'success':
                return '已经到帐';
            case 'fail':
                return '提现失败';
            default:
                return '申请提现'
        }
    }
}


@Pipe({name: 'test'})
export class TestPipe implements PipeTransform {
    transform(value: string): string {
        return "111";
    }
}
