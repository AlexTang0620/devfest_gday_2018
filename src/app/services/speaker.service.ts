import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {Speaker} from '../models/Speaker';

@Injectable({
    providedIn : 'root'
})

export class SpeakerService {
    private speakerCollection: AngularFirestoreCollection<Speaker>;
    speakers: Observable<Speaker[]>;

    constructor(
        public fireStore: AngularFirestore
    ) {
        this.speakerCollection = this.fireStore.collection('speakers');
        this.speakers = this.speakerCollection.valueChanges();
    }

    get() {
        return this.speakers;
    }

    getRockStarSpeaker(){
        return this.fireStore.collection<Speaker>('speakers', ref =>
            ref.limit(4)
        ).valueChanges();
    }
}
