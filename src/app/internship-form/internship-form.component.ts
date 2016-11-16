import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {MyValidators} from "./MyValidators";
import {InternshipsService} from "../shared/internships.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-internship-form',
  templateUrl: './internship-form.component.html',
  styleUrls: ['./internship-form.component.css']
})
export class InternshipFormComponent implements OnInit {

  internshipForm: FormGroup;

  constructor(private fb: FormBuilder, private internshipService: InternshipsService, private router: Router) { }

  ngOnInit() {

    this.internshipForm = this.fb.group(
      {
        'initials': ['', Validators.compose([Validators.required, MyValidators.getInitialsValidator()])],
        'visitdate': ['', [
          Validators.required,
          Validators.pattern("[0-9]{2}\/[0-9]{2}\/[0-9]{2}")
        ]],
        'studentname': ['', Validators.required],
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

      var internship = {
        initials: form.controls.initials.value,
        visitdate: form.controls.visitdate.value,
        studentname: form.controls.studentname.value,
        companyname: form.controls.companyname.value,
        personmet: form.controls.personmet.value,
        companyvision: form.controls.companyvision.value,
        companycompetence: form.controls.companycompetence.value,
        studentcompetence: form.controls.studentcompetence.value,
        collaborative: form.controls.collaborative.value,
        othercomments: form.controls.othercomments.value
      };

      this.internshipService.createInternship(internship).subscribe(
        () => this.router.navigate(['/internships/internship-list'])
      );



    }
    else{
      console.log("Invalid");
    }
  }

}
