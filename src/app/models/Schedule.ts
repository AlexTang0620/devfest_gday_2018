import {Course} from "./Course";
import {Observable} from "rxjs";

export interface Schedule {
    id: string;
    courses: Observable<Course[]>;
}
