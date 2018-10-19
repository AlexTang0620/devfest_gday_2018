import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {Schedule} from "../models/Schedule";
import {ScheduleService} from "../services/schedule.service";
import {Course} from "../models/Course";

@Component({
    selector    : 'app-schedule',
    templateUrl : './schedule.component.html',
    styleUrls   : ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
    schedule: any;

    constructor(
        public dialog: MatDialog,
        public scheduleService: ScheduleService
    ) {
        this.scheduleService.get().subscribe(schedule => {
            this.schedule = schedule
        });
    }

    ngOnInit() {
    }

}
