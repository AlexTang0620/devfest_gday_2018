import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {Course} from '../models/Course';
import {map} from "rxjs/operators";
import {Schedule} from "../models/Schedule";
import {SpeakerService} from "./speaker.service";

@Injectable({
    providedIn : 'root'
})
export class CourseService {
    CourseCollection: AngularFirestoreCollection<Course>;

    constructor(
        public afs: AngularFirestore,
        public speakerService: SpeakerService
    ) {
        this.CourseCollection = this.afs.collection('courses');
    }

    getCourse(course): Observable<Course> {
        return this.afs.doc<Course>(course.path)
            .snapshotChanges()
            .pipe(
                map(course => {
                    const courseDetail: Course = course.payload.data();
                    const id = course.payload.id;

                    if (courseDetail.speaker) {
                        if (courseDetail.speaker.path != undefined) {
                            courseDetail.speaker = this.speakerService.getSpeaker(courseDetail.speaker.path);
                        }
                    }

                    return {id, ...courseDetail};
                })
            );
    }
}


