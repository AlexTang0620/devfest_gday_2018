import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {SpeakerService} from "../services/speaker.service";
import {Speaker} from "../models/Speaker";
import {SpeakerDialogComponent} from "../_dialog/speaker-dialog/speaker-dialog.component";

@Component({
    selector    : 'app-speakers',
    templateUrl : './speakers.component.html',
    styleUrls   : ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {
    speakers: Array<Speaker>;

    constructor(
        public dialog: MatDialog,
        public speakerService: SpeakerService
    ) {
        this.speakerService.get().subscribe(speakers => {
            this.speakers = speakers;
        });
    }

    showDialog(speaker) {
        this.dialog.open(SpeakerDialogComponent, {
            width : '700px',
            data  : {
                ...speaker
            }
        });
    }

    ngOnInit() {
    }

}
