import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {MyValidators} from "./MyValidators";

@Component({
  selector: 'app-internship-form',
  templateUrl: './internship-form.component.html',
  styleUrls: ['./internship-form.component.css']
})
export class InternshipFormComponent implements OnInit {

  internshipForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.internshipForm = this.fb.group(
      {
        'initials': ['', Validators.compose([Validators.required, MyValidators.getInitialsValidator()])],
        'email': ['', Validators.compose([Validators.required, MyValidators.getEmailValidator()])],
        'visitdate': ['', [
          Validators.required,
          Validators.pattern("[0-9]{2}\/[0-9]{2}\/[0-9]{2}")
        ]],
        'studentname': ['', Validators.required],
        'internid' : ['', Validators.required],
        'companyname' : ['', Validators.required],
        'personmet' : ['', Validators.required],
        'companyvision' : ['', Validators.minLength(10)],
        'companycompetence' : ['', Validators.minLength(10)],
        'studentcompetence' : ['', Validators.minLength(10)],
        'collaborative' : ['', Validators.minLength(10)],
        'othercomments' : ['']
      });
  }

  onSubmit(form) {
    if(form.valid) {
      console.log("Valid");
    }
    else{
      console.log("Invalid");
    }
  }

}
