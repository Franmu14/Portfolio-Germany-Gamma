import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from '../../models/experiencia';
import { ExperienciaService } from '../../service/experiencia.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent {

 @Input () experience: any;
 @Output() closeediting = new EventEmitter();
  titulo: Experiencia = null;
  public isLogged = false;

  constructor(
    
    private experienciaService: ExperienciaService,
    private activatedRoute: ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
    this.isLogged = JSON.parse(localStorage.getItem("isLog"))
  }

  onUpdate(): void {
    this.experienciaService.update(this.experience.id, this.experience).subscribe(
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

