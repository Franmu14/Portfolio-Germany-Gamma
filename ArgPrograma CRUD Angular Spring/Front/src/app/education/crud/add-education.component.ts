import { Component } from '@angular/core';
import { EducationService } from '../../service/education.service';
import { Education } from '../../models/education';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent {

  urlimagen = '';
  titulo = '';
  fecha = '';
  institucion = '';
  descripcion = '';
  public isLogged = false;
  
  constructor(
    private educationService: EducationService,
    private router: Router
    ) { }
  
  ngOnInit() {
    this.isLogged = JSON.parse(localStorage.getItem("isLog"))
  }
  
  onCreate(): void {
    const education = new Education(this.urlimagen, this.titulo, this.fecha, this.institucion, this.descripcion);
    this.educationService.save(education).subscribe(
      data => {
        this.router.navigate(['/']);
      },
      err => {
        this.router.navigate(['/']);
      }
    );
  }
  
  }
  
