import {
    FormBuilder,
    FormGroup,
    FormControl,
    Validators,
    AbstractControl
} from '@angular/forms';
import {utility} from './utility'
//import {Observable} from "rxjs/Observable";

export class form {
    static getFormGroup(fb: FormBuilder, groupOptions: any,subscription:any[]): FormGroup {
        let fg: FormGroup;
        let groupConfig: any = {};
        let validateConfig: any = {};
        for (let key in groupOptions) {
            groupConfig[key] = utility.dropRight(groupOptions[key]);
            validateConfig[key] = groupOptions[key][2];
        }
        fg = fb.group(groupConfig);
        for (let key in fg.controls) {
            let _c = fg.controls[key];

            let sub=_c.valueChanges
                .debounceTime(500)
                .distinctUntilChanged()
                .subscribe((value: string) => {
                    if (!validateConfig.hasOwnProperty(key)) return;
                    let vConfig: any = validateConfig[key];
                    if (_c.valid) return;
                    for (let vKey in vConfig) {
                        if (_c.hasError(vKey) && _c.dirty) {
                            let err = utility.assignIn(_c.errors || {}, {msg: vConfig[vKey]}, {msg2: 2});
                            return _c.setErrors(err);
                        }
                    }
                });
            subscription.push(sub)
        }
        return fg;
    }
}