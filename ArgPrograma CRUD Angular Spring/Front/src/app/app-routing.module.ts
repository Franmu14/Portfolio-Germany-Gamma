import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEducationComponent } from './education/crud/add-education.component';
import { EditEducationComponent } from './education/crud/edit-education.component';
import { AddExperienceComponent } from './experience/crud/add-experience.component';
import { EditExperienceComponent } from './experience/crud/edit-experience.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddProyectComponent } from './proyects/crud/add-proyect.component';
import { EditProyectComponent } from './proyects/crud/edit-proyect.component';
import { AddSkillComponent } from './skills/crud/add-skill.component';
import { EditSkillComponent } from './skills/crud/edit-skill.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path:'add-exp', component: AddExperienceComponent },
  { path:'edit-exp/:id', component: EditExperienceComponent },
  { path:'add-education', component: AddEducationComponent },
  { path:'edit-education/:id', component: EditEducationComponent },
  { path:'edit-skill/:id', component: EditSkillComponent },
  { path:'add-skill', component: AddSkillComponent },
  { path:'add-proyecto', component: AddProyectComponent },
  { path:'edit-proyecto/:id', component: EditProyectComponent },
  { path:'**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }