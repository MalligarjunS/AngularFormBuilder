import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Validators} from '@angular/forms';
import { PasswordValidator} from './Password.validator'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formBuilder';

  constructor(private fb:FormBuilder){}
  get fname(){
    return this.regiForm.get("firstName");
  }
  get lname(){
    return this.regiForm.get("lastName");
  }
get pwd(){
  return this.regiForm.get("password");
}
get confirmpwd()
{
  return this.regiForm.get("confirmPassword");
}

  pwdPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  pincodePattern= "^[1-9][0-9]{5}$";
  topics=["Angular","React","Node","Express"];

  regiForm=this.fb.group({
    firstName:['',[Validators.required,Validators.minLength(3)]],
    lastName:['',[Validators.required,Validators.minLength(3)]],
    password:['',[Validators.required,Validators.pattern(this.pwdPattern)]],
    confirmPassword:['',Validators.required],
    gender:['',Validators.required],
    areaOfIntrest:['',Validators.required],
    email:['',[Validators.required,Validators.pattern(this.emailPattern)]],
    phone:['',Validators.required],
    address:this.fb.group({
      city:['',Validators.required],
      state:['',Validators.required],
      pincode:['',[Validators.required,Validators.pattern(this.pincodePattern)]]
    })
  },{validators:PasswordValidator});
}
