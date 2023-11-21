import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from '../../models/education';
import { EducationService } from '../../service/education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent {

 @Input () education: any;
 @Output() closeediting = new EventEmitter();
  titulo: Education = null;
  public isLogged = false;

  constructor(
    
    private educationService: EducationService,
    private activatedRoute: ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
    this.isLogged = JSON.parse(localStorage.getItem("isLog"))
  }

  onUpdate(): void {
    this.educationService.update(this.education.id, this.education).subscribe(
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


