import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditExperienceComponent } from './experience/crud/edit-experience.component';
import { AddExperienceComponent } from './experience/crud/add-experience.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EditEducationComponent } from './education/crud/edit-education.component';
import { AddEducationComponent } from './education/crud/add-education.component';
import { EditSkillComponent } from './skills/crud/edit-skill.component';
import { AddSkillComponent } from './skills/crud/add-skill.component';
import { EditProyectComponent } from './proyects/crud/edit-proyect.component';
import { AddProyectComponent } from './proyects/crud/add-proyect.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    SkillComponent,
    ProyectComponent,
    LoginComponent,
    HomeComponent,
    EditExperienceComponent,
    AddExperienceComponent,
    HeaderComponent,
    AboutMeComponent,
    ExperienceComponent,
    EditEducationComponent,
    AddEducationComponent,
    EditSkillComponent,
    AddSkillComponent,
    EditProyectComponent,
    AddProyectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }



// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { ExperienceComponent } from './experience/experience.component';

// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { EducationComponent } from './education/education.component';
// import { HeaderComponent } from './header/header.component';
// import { AboutComponent } from './about/about.component';
// import { SkillsComponent } from './skills/skills.component';
// import { ProyectsComponent } from './proyects/proyects.component';
// import { AddExperienceComponent } from './views/add-experience/add-experience.component';
// import { HomeComponent } from './home/home.component';
// import { FormsModule } from '@angular/forms';

// @NgModule({
//   declarations: [
//     AppComponent,
//     ExperienceComponent,
//     EducationComponent,
//     HeaderComponent,
//     AboutComponent,
//     SkillsComponent,
//     ProyectsComponent,
//     AddExperienceComponent,
//     HomeComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD3Y5iMWznhEG6-8o9ktuuCpMilFlyjY0w",
//   authDomain: "portafolio-6ff0a.firebaseapp.com",
//   projectId: "portafolio-6ff0a",
//   storageBucket: "portafolio-6ff0a.appspot.com",
//   messagingSenderId: "571105684728",
//   appId: "1:571105684728:web:c9291f41f6bfbc187cdf0d"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);