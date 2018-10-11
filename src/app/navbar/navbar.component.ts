import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {CourseService} from '../services/course.service';

@Component({
    selector    : 'app-navbar',
    templateUrl : './navbar.component.html',
    styleUrls   : ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

    constructor(
        public courseService: CourseService,
        public fireAuth: AngularFireAuth
    ) {
    }

    ngOnInit() {
        // this.courseService.getCourses().subscribe(courses =>{
        //     console.log(courses);
        // });
    }


    /**
     * google log in provider
     */
    public googleSignIn() {
      //   var provider = new firebase.auth.GoogleAuthProvider();
      //   firebase.auth().signInWithPopup(provider).then(function (result) {
      //     var user = result.user;
      //   }).catch(function (error) {
      //     var errorCode = error.code;
      //     var errorMessage = error.message;
      //     var email = error.email;
      //     var credential = error.credential;
      // });
    }

}
