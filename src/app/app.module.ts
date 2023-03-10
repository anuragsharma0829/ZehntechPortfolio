import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContectComponent } from './components/contect/contect.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './pages/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import { AllprojectsComponent } from './components/allprojects/allprojects.component';
import { JavaScriptComponent } from './components/java-script/java-script.component';
import { AngularComponent } from './components/angular/angular.component';
import { ApexComponent } from './components/apex/apex.component';
import { ShowportComponent } from './components/showport/showport.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogElementsExampleDialogComponent } from './components/dialog-elements-example-dialog/dialog-elements-example-dialog.component';
import { ResumeComponent } from './components/resume/resume.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ExamportalComponent } from './modals/examportal/examportal.component';
import { AssetsmmComponent } from './modals/assetsmm/assetsmm.component';
import { TruemdComponent } from './modals/truemd/truemd.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    PortfolioComponent,
    ContectComponent,
    NavbarComponent,
    AllprojectsComponent,
    JavaScriptComponent,
    AngularComponent,
    
    ApexComponent,
    ShowportComponent,
    DialogElementsExampleDialogComponent,
    ResumeComponent,
    ExamportalComponent,
    AssetsmmComponent,
    TruemdComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
    NgbModule,
    NgbCarouselModule,
    CarouselModule,
    MatFormFieldModule,MatInputModule,FormsModule,
    HttpClientModule,
    CommonModule,
    CKEditorModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
