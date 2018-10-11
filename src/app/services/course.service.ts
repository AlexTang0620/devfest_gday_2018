import  { Injectable } from '@angular/core';
import  {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import  {Observable} from 'rxjs';
import  {Course} from '../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
CourseCollection : AngularFirestoreCollection<Course>;
courses : Observable<Course[]>;

  constructor(public afs : AngularFirestore) {
    this.courses = this.afs.collection('courses').valueChanges();
   }

   getCourses(){
     return this.courses;
   }
}


