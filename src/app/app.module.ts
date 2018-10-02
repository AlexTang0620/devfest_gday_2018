import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {RouterModule, Routes} from "@angular/router";
import {NavbarComponent} from './navbar/navbar.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from '../environments/environment.prod';

const appRoutes: Routes = [
    {
        path      : '',
        component : HomepageComponent
    },
    {
        path       : '',
        pathMatch  : 'full',
        redirectTo : ''
    },
]

@NgModule({
    declarations : [
        AppComponent,
        HomepageComponent,
        NavbarComponent
    ],
    imports      : [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule
    ],
    providers    : [],
    bootstrap    : [
        AppComponent
    ]
})
export class AppModule {}
