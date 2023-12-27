import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  form: FormGroup;

  name0Field = new FormControl('soy un control');

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.nameField.valueChanges
    .subscribe(value => {
      console.log(value);
    });

    //  this.form.valueChanges
    //  .subscribe(value => {
    //    console.log(value);
    //  });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      fullName: this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-zA-Z ]+$/)]],
        lastname: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-zA-Z ]+$/)]]
      }),
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      color: ['#000000'],
      date: [''],
      age: [18, [Validators.required, Validators.min(18)]],
      category: [''],
      tag: [''],
      agree: [false, [Validators.requiredTrue]],
      gender: [''],
      zone: ['']
    });
  }

  save(event) {
    if(this.form.valid) {
      console.log(this.form.value);
    }else {
      this.form.markAllAsTouched();
    }
  }

  getNameValue() {
    console.log(this.nameField.value);
  }

  get nameField() {
    return this.form.get('fullName').get('name');
  }

  get isNameFieldValid() {
    return this.nameField.touched && this.nameField.valid;
  }

  get isNameFieldInvalid() {
    return this.nameField.touched && this.nameField.invalid;
  }


  getLastNameValue() {
    console.log(this.lastNameField.value);
  }

  get lastNameField() {
    return this.form.get('fullName').get('lastname');
  }

  get isLastNameFieldValid() {
    return this.lastNameField.touched && this.lastNameField.valid;
  }

  get isLastNameFieldInvalid() {
    return this.lastNameField.touched && this.lastNameField.invalid;
  }


  get emailField() {
    return this.form.get('email');
  }

  get phoneNumberField() {
    return this.form.get('phone');
  }

  get colorField() {
    return this.form.get('color');
  }

  get dateField() {
    return this.form.get('date');
  }

  get ageField() {
    return this.form.get('age');
  }

  get categoryField() {
    return this.form.get('category');
  }

  get tagField() {
    return this.form.get('tag');
  }

  get agreeField() {
    return this.form.get('agree');
  }

  get genderField() {
    return this.form.get('gender');
  }

  get zoneField() {
    return this.form.get('zone');
  }
}
