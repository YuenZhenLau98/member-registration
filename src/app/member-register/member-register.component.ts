import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher 
{
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean 
  {
    const invalidCtrl = !!(control && control.invalid && control.parent?.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-member-register',
  templateUrl: './member-register.component.html',
  styleUrls: ['./member-register.component.scss']
})

export class MemberRegisterComponent implements OnInit {

  firstFormGroup: FormGroup = this.formBuilder.group
  ({
    usernameCtrl: ['', Validators.required],
    passwordCtrl: ['', Validators.required],
    confirmPasswordCtrl: ['', Validators.required]
  }, { validator: this.checkPasswords });

  secondFormGroup: FormGroup = this.formBuilder.group
  ({
    firstNameCtrl: ['', Validators.required],
    lastNameCtrl: ['', Validators.required],
    emailCtrl: ['', Validators.required, Validators.email]
  });

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  emailMatcher = new ErrorStateMatcher();

  hidePassword = true;
  hideConfirmPassword = true;

  //Sign up details
  userName: string = "";
  password: string = "";
  confirmPassword: string = "";
  passwordMatcher = new MyErrorStateMatcher();

  //Account details
  firstName: string = "";
  lastName: string = "";
  email: string = "";

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() 
  {

  }

  goConfirm(stepper: MatStepper)
  {
    if(this.emailFormControl.hasError('email') && !this.emailFormControl.hasError('required'))
    {
      return;
    }
    else if(this.emailFormControl.hasError('required'))
    {
      return;
    }

    stepper.next();
  }

  goBack(stepper: MatStepper)
  {
    stepper.previous();
  }

  checkPasswords(group: FormGroup) 
  { 
    let pass = group.controls.passwordCtrl.value;
    let confirmPass = group.controls.confirmPasswordCtrl.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  navigateToSubscription()
  {
    this.router.navigateByUrl('subscription');
  }

}
