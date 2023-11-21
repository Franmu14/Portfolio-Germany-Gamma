import { Component } from '@angular/core';
import { ProyectosService } from '../../service/proyectos.service';
import { Proyectos } from '../../models/proyectos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-proyect',
  templateUrl: './add-proyect.component.html',
  styleUrls: ['./add-proyect.component.css']
})
export class AddProyectComponent {

  urlimagen = '';
  nombre = '';
  urlproyecto = '';
  descripcion = '';
  public isLogged = false;

constructor(
  private proyectosService: ProyectosService,
  private router: Router
  ) { }

ngOnInit() {
  this.isLogged = JSON.parse(localStorage.getItem("isLog"))
}

onCreate(): void {
  const proyecto = new Proyectos(this.urlimagen, this.nombre, this.urlproyecto, this.descripcion);
  this.proyectosService.save(proyecto).subscribe(
    data => {
      this.router.navigate(['/']);
    },
    err => {

      this.router.navigate(['/']);
    }
  );
}

}

