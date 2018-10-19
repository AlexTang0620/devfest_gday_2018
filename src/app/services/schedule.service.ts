import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Schedule} from "../models/Schedule";
import {map} from "rxjs/operators";
import * as firebase from 'firebase';
import DocumentReference = firebase.firestore.DocumentReference;
import {Course} from "../models/Course";
import {CourseService} from "./course.service";

@Injectable({
    providedIn : 'root'
})
export class ScheduleService {
    private scheduleCollection: AngularFirestoreCollection<Schedule>;
    schedules: Observable<Schedule[]>;

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
                    let scheduleData: Schedule = schedule.payload.doc.data();
                    const id = schedule.payload.doc.id;

                    scheduleData.courses = scheduleData.courses
                        .map(course => this.courseService.getCourse(course.path))

                    return {id, ...scheduleData};
                }))
            );
    }

    //     this.scheduleService.get().subscribe(schedule => {
    //     console.log(schedule)
    //     // this.schedule = schedule;
    // });

    async getCourseDetail(courses) {
        return await courses.courses.map(course => {
            course.get()
                .then(res => {
                    console.log(res.data())
                    // return res.data()
                });
        })
    }

    async getSpeakerDetail(speaker: DocumentReference) {
        return await speaker.get()
            .then(speaker => {
            });
    }
}

