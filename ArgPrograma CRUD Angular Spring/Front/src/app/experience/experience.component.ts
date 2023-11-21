import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../models/experiencia';
import { ExperienciaService } from '../service/experiencia.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  
  experiencias: Experiencia[] = [];
  Experiencia: any;
  isediting = false;
  public isLogged = false;

  constructor(
    private experienciaService: ExperienciaService,
    ) { }

  ngOnInit(): void {
    this.cargarExperiencia();
    this.isLogged = JSON.parse(localStorage.getItem("isLog"))
  }

  cargarExperiencia(): void {
    this.experienciaService.listaexp().subscribe(
      data => {
        this.experiencias = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.experienciaService.delete(id).subscribe(
      data => {

        this.cargarExperiencia();
      },
      err => {
  
      }
    );
  }

}
