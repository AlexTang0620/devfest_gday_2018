import { Injectable } from '@angular/core';
import  {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import  {Observable} from 'rxjs';
import  {Speaker} from '../models/Speaker';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  SpeakerCollection : AngularFirestoreCollection<Speaker>;
  speakers : Observable<Speaker[]>;
    
    constructor(public afs : AngularFirestore) {
      this.speakers = this.afs.collection('speakers').valueChanges();
     }
  
     getCourses(){
       return this.speakers;
     }
}
