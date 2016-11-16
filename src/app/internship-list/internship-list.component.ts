import { Component, OnInit } from '@angular/core';
import {InternshipsService} from "../shared/internships.service";

@Component({
  selector: 'app-internship-list',
  templateUrl: './internship-list.component.html',
  styleUrls: ['./internship-list.component.css']
})
export class InternshipListComponent implements OnInit {

  private internships: any[];
  private message: string;

  constructor(private internshipsService: InternshipsService) { }

  ngOnInit() {
    this.internships = this.internshipsService.getAllLocalInternships();

    if (!this.internships) {
      this.message = "Retrieving data...";

      this.internshipsService.getAllRemoteInternships().subscribe(
        (internships) => {
          this.internships = internships;
          this.message = "";
        },
        error => this.message = error
      );
    }
  }

}
