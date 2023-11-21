import { Component } from '@angular/core';
import { SkillsService } from '../../service/skills.service';
import { Skills } from '../../models/skills';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent {
  urlimagen = '';
  nombre = '';
  descripcion = '';
  porcentaje: number = 0;
  public isLogged = false;

constructor(
  private skillsService: SkillsService,
  private router: Router
  ) { }

ngOnInit() {
  this.isLogged = JSON.parse(localStorage.getItem("isLog"))
}

onCreate(): void {
  const skill = new Skills(this.urlimagen, this.nombre, this.descripcion, this.porcentaje);
  this.skillsService.save(skill).subscribe(
    data => {

      this.router.navigate(['/']);
    },
    err => {

      this.router.navigate(['/']);
    }
  );
}

}

