import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {MyValidators} from "./MyValidators";
import {InternshipsService} from "../shared/internships.service";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-internship-form',
  templateUrl: './internship-form.component.html',
  styleUrls: ['./internship-form.component.css']
})
export class InternshipFormComponent implements OnInit {

  selectedInternship : any;
  internshipForm: FormGroup;

  constructor(private fb: FormBuilder, private internshipService: InternshipsService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.forEach((params: Params) =>
    {
      let id = +params['id']; // (+) converts string 'id' to a number
      if(!isNaN(id)) {
        this.internshipService.getInternship(id).subscribe(
            internship => this.selectedInternship = internship
          );
      }
    });

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
    if(form.valid)
    {
      if(this.selectedInternship) {
        console.log("Trying to update")
        console.log(this.selectedInternship.id);
        var internshipToUpdate = this.generateObject(form);
        this.internshipService.updateInternship(this.selectedInternship.id, internshipToUpdate).subscribe()
      }
      else {

        console.log("Trying to create a new")
        var internship = this.generateObject(form);

        console.log(internship);
        this.internshipService.createInternship(internship).subscribe(
          () => this.router.navigate(['/internships/internship-list'])
        );
      }
    }
    else{
      console.log("Invalid");
    }
  }


  generateObject(form) : any {

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
    return internship;
  }


}
