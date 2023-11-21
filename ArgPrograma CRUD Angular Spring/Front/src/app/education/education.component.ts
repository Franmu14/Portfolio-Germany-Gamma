import { Component, OnInit } from '@angular/core';
import { Education } from '../models/education';
import { EducationService } from '../service/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educaciones: Education[] = [];
  Education: any;
  isediting = false;
  public isLogged = false;

  constructor(
    private educationService: EducationService,
    ) { }

  ngOnInit(): void {
    this.cargarEducation();
    this.isLogged = JSON.parse(localStorage.getItem("isLog"))
  }

  cargarEducation(): void {
    this.educationService.listaedu().subscribe(
      data => {
        this.educaciones = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.educationService.delete(id).subscribe(
      data => {

        this.cargarEducation();
      },
      err => {

      }
    );
  }

}
