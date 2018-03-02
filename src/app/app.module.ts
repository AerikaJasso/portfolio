import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// No_ERRORS_SCHEMA tells compiler not to error based unkwn elem.
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectBodyComponent } from './project-body/project-body.component';
import { BioSectionComponent } from './bio-section/bio-section.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainBodyComponent,
    FooterComponent,
    ProjectBodyComponent,
    BioSectionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  schemas: [ NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
