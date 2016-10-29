import { Pipe, PipeTransform } from '@angular/core';
import { utility } from '../service/utility';
import { Test,BankSort} from '../service/pipe-provider';

@Pipe({name: 'test'})
export class TestPipe extends Test{}
@Pipe({name: 'bs'})
export class BankSortPipe extends BankSort{}