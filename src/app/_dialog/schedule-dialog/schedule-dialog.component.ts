import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material";
import {Course} from "../../models/Course";

@Component({
    selector    : 'app-schedule-dialog',
    templateUrl : './schedule-dialog.component.html',
    styleUrls   : ['./schedule-dialog.component.scss']
})

export class ScheduleDialogComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: Course
    ) {

    }
}
