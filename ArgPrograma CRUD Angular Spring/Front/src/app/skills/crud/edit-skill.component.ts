import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from '../../models/skills';
import { SkillsService } from '../../service/skills.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent {
  @Input () skill: any;
  @Output() closeediting = new EventEmitter();

  habilidades: Skills = null;
  public isLogged = false;

  constructor(
    
    private skillsService: SkillsService,
    private activatedRoute: ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
    this.isLogged = JSON.parse(localStorage.getItem("isLog"))

  }

  onUpdate(): void {
    this.skillsService.update(this.skill.id, this.skill).subscribe(
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


