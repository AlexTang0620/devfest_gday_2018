import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {Schedule} from "../models/Schedule";
import {ScheduleService} from "../services/schedule.service";
import {Course} from "../models/Course";
import {SpeakerDialogComponent} from "../_dialog/speaker-dialog/speaker-dialog.component";
import {ScheduleDialogComponent} from "../_dialog/schedule-dialog/schedule-dialog.component";

@Component({
    selector    : 'app-schedule',
    templateUrl : './schedule.component.html',
    styleUrls   : ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
    schedule: any;

    ngOnInit() {
    }

    constructor(
        public dialog: MatDialog,
        public scheduleService: ScheduleService
    ) {
        this.schedule = this.scheduleService.get();
    }

    showScheduleDialog(course) {
        course.subscribe(c => {
            console.log(c);
        })
        // // console.log(course.get())
        // this.dialog.open(ScheduleDialogComponent, {
        //     width : '700px',
        //     data  : course
        // });
    }

}
