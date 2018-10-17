import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SpeakerDialogComponent} from "../_dialog/speaker-dialog/speaker-dialog.component";
import {SpeakerService} from "../services/speaker.service";
import {Speaker} from "../models/Speaker";

@Component({
    selector    : 'app-homepage',
    templateUrl : './homepage.component.html',
    styleUrls   : ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
    speakers: Array<Speaker>;

    constructor(
        public dialog: MatDialog,
        public speakerService: SpeakerService
    ) {
        this.speakerService.getRockStarSpeaker().subscribe(speakers => {
            this.speakers = speakers;
        });
    }

    showDialog(speaker) {
        const dialogRef = this.dialog.open(SpeakerDialogComponent, {
            width : '250px',
            data  : {
                name       : speaker.name,
                background : speaker.background
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    ngOnInit(): void {

    }

}
