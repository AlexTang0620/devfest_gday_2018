import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {RouterModule, Routes} from '@angular/router';
import {NavbarComponent} from './_layout/navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from '../environments/environment.prod';

import {CourseService} from './services/course.service';
import {ScheduleComponent} from './schedule/schedule.component';
import {SpeakersComponent} from './speakers/speakers.component';
import {FooterComponent} from './_layout/footer/footer.component';
import {PartnersComponent} from './partners/partners.component';
import {SiteLayoutComponent} from './_layout/site-layout/site-layout.component';
import {HomeLayoutComponent} from './_layout/home-layout/home-layout.component';
import {SpeakerDialogComponent} from './_dialog/speaker-dialog/speaker-dialog.component';
import {MatDialogModule} from "@angular/material";
import {AttendingComponent} from './attending/attending.component';

const appRoutes: Routes = [
    {
        path      : '',
        component : HomeLayoutComponent,
        children  : [
            {
                path      : '',
                component : HomepageComponent
            },
        ]
    },
    {
        path      : '',
        component : SiteLayoutComponent,
        children  : [
            {
                path : 'schedule', component : ScheduleComponent
            },
        ]
    },
    {
        path      : '',
        component : SiteLayoutComponent,
        children  : [
            {
                path : 'speakers', component : SpeakersComponent
            },
        ]
    },
    {
        path       : '',
        pathMatch  : 'full',
        redirectTo : ''
    },
];

@NgModule({
    declarations    : [
        AppComponent,
        HomepageComponent,
        NavbarComponent,
        ScheduleComponent,
        SpeakersComponent,
        FooterComponent,
        PartnersComponent,
        SiteLayoutComponent,
        HomeLayoutComponent,
        SpeakerDialogComponent,
        AttendingComponent,
    ],
    exports         : [
        MatDialogModule
    ],
    entryComponents : [
        SpeakerDialogComponent
    ],
    imports         : [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        BrowserAnimationsModule
    ],
    providers       : [
        CourseService
    ],
    bootstrap       : [
        AppComponent
    ]
})

export class AppModule {}
