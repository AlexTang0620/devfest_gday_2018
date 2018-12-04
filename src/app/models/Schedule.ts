import {AngularFirestoreCollection} from 'angularfire2/firestore';
import {Course} from "./Course";
import {Observable} from "rxjs";

export interface Schedule {
    id: string;
    courses: Array<Observable<Course>>;
}
