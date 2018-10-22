import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import * as firebase from 'firebase';
import DocumentReference = firebase.firestore.DocumentReference;
import {Schedule} from '../models/Schedule';
import {Observable} from 'rxjs';
import {CourseService} from './course.service';
import {map} from 'rxjs/operators';
import {Course} from "../models/Course";


@Injectable({
    providedIn : 'root'
})
export class ScheduleService {
    private scheduleCollection: AngularFirestoreCollection<Schedule>;

    constructor(
        public fireStore: AngularFirestore,
        public courseService: CourseService
    ) {
        this.scheduleCollection = this.fireStore.collection('schedules');
    }

    get() {
        return this.scheduleCollection
            .snapshotChanges()
            .pipe(
                map(schedules => schedules.map(schedule => {
                    const scheduleData: Schedule = schedule.payload.doc.data();
                    const id = schedule.payload.doc.id;

                    scheduleData.courses =
                        scheduleData.courses.map(course => this.courseService.getCourse(course));

                    return {id, ...scheduleData};
                }))
            );
    }
}

