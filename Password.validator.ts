import {AbstractControl} from '@angular/forms';

export function PasswordValidator(control : AbstractControl):{[key: string]:boolean}|null
{

    const password = control.get("Password");
    const confirmpassword =control.get("confirmPassword");

    if(password.pristine || confirmpassword.pristine)
    {
        return null;
    }
    else{
    return password.value != confirmpassword.value ?
    {'mismatch': true}| null;
    }
}