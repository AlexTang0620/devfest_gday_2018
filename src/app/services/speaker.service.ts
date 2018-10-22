import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {Speaker} from '../models/Speaker';
import {map} from "rxjs/operators";
import {Schedule} from "../models/Schedule";
import {Course} from "../models/Course";

@Injectable({
    providedIn : 'root'
})

export class SpeakerService {
    private speakerCollection: AngularFirestoreCollection<Speaker>;

    constructor(
        public fireStore: AngularFirestore
    ) {
        this.speakerCollection = this.fireStore.collection('speakers');
    }

    get() {
        return this.speakerCollection
            .snapshotChanges()
            .pipe(
                map(speaker => speaker.map(speaker => {
                    const speakerData: Speaker = speaker.payload.doc.data();
                    console.log(speakerData);
                    const id = speaker.payload.doc.id;

                    return {id, ...speakerData};
                }))
            );
    }

    getRockStarSpeaker() {
        return this.fireStore.collection<Speaker>('speakers', ref =>
            ref.where('featured', '==', true)
        ).valueChanges();
    }

    getSpeaker(id) {
        return this.fireStore.doc<Speaker>(id)
            .valueChanges();
    }
}
