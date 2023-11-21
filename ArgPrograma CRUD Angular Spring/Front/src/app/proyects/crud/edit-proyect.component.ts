import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from '../../models/proyectos';
import { ProyectosService } from '../../service/proyectos.service';

@Component({
  selector: 'app-edit-proyect',
  templateUrl: './edit-proyect.component.html',
  styleUrls: ['./edit-proyect.component.css']
})
export class EditProyectComponent {
  @Input () projects: any;
  @Output() closeediting = new EventEmitter();

  project: Proyectos = null;
  public isLogged = false;

  constructor(
    
    private proyectosService: ProyectosService,
    private activatedRoute: ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
    this.isLogged = JSON.parse(localStorage.getItem("isLog"))

  }

  onUpdate(): void {
    this.proyectosService.update(this.projects.id, this.projects).subscribe(
      data => {

        this.router.navigate(['/']);
      },
      err => {

        this.router.navigate(['/']);
      }
    );
    this.closeediting.emit(false)
  }

}


