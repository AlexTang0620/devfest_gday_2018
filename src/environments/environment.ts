// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production : false,
    firebase   : {
        apiKey            :"AIzaSyBJ2PmqzSuGhM0RcBaf336DLbZz5dFC0g4",
        authDomain        :"devfest-gday.firebaseapp.com",
        databaseURL       :"https://devfest-gday.firebaseio.com",
        projectId         :"devfest-gday",
        storageBucket     :"devfest-gday.appspot.com",
        messagingSenderId :"369571999405"
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
