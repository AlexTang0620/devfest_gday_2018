import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
    selector    : 'app-navbar',
    templateUrl : './navbar.component.html',
    styleUrls   : ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

    constructor(
        public fireAuth: AngularFireAuth
    ) {
    }

    ngOnInit() {
    }

    /**
     * trigger google sign in
     */
    private doGoogleSignIn() {
        // return new Promise<any>((resolve, reject) => {
        //     let provider = new firebase.auth.FacebookAuthProvider();
        //     this.fireAuth.auth
        //         .signInWithPopup(provider)
        //         .then(res => {
        //             console.log(res);
        //             resolve(res);
        //         }, err => {
        //             console.log(err);
        //             reject(err);
        //         })
        // })
    }

    /**
     * google log in provider
     */
    public googleSignIn() {
        // this.doGoogleSignIn()
        //     .then(res => {
        //         // create avatar
        //     })
        //     .catch(err => {
        //         // display error message
        //     })
    }

}
