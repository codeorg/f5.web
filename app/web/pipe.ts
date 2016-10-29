import { Pipe, PipeTransform } from '@angular/core';
import { utility } from '../service/utility';
import { BankSort} from '../service/pipe-provider';

@Pipe({name: 'bs'})
export class BankSortPipe extends BankSort{}