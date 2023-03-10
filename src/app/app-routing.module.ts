import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AllprojectsComponent } from './components/allprojects/allprojects.component';
import { AngularComponent } from './components/angular/angular.component';
import { ApexComponent } from './components/apex/apex.component';
import { ContectComponent } from './components/contect/contect.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { JavaScriptComponent } from './components/java-script/java-script.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [

  {
    path:"",
    component:HomepageComponent,
    pathMatch:'full'
  },
  {
    path:"about",
    component:AboutComponent,
    pathMatch:'full'
  },
  {
    path:"potofolio",
    component:PortfolioComponent,
    pathMatch:'full',
  },


  {
    path:"contact",
    component:ContectComponent,
    pathMatch:'full'
  },
  {
    path:"all",
    component:AllprojectsComponent,
    pathMatch:'full'
  },
  {
    path:"js",
    component:JavaScriptComponent,
    pathMatch:'full'
  },
  {
    path:"angular",
    component:AngularComponent,
    pathMatch:'full'
  },
  {
    path:"apex",
    component:ApexComponent,
    pathMatch:'full'
  },
  {
    path:"resume",
    component:ResumeComponent,
    pathMatch:'full'
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
