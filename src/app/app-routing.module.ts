import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBodyComponent } from './main-body/main-body.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
