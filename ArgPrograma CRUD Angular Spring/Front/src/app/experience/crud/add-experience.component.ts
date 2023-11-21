import { Component, EventEmitter, Output } from '@angular/core';
import { ExperienciaService } from '../../service/experiencia.service';
import { Experiencia } from '../../models/experiencia';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-exp',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent {

urlimagen = '';
titulo = '';
fecha = '';
descripcion = '';
public isLogged = false;

constructor(
  private experienciaService: ExperienciaService,
  private router: Router
  ) { }

ngOnInit() {
  this.isLogged = JSON.parse(localStorage.getItem("isLog"))
}

onCreate(): void {
  const experiencia = new Experiencia(this.urlimagen, this.titulo, this.fecha, this.descripcion);
  this.experienciaService.save(experiencia).subscribe(
    data => {
      this.router.navigate(['/']);
    },
    err => {
      this.router.navigate(['/']);
    }
  );
}

}
