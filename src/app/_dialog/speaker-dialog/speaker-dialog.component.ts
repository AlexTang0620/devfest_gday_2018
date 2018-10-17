import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Speaker} from "../../models/Speaker";

@Component({
    selector    : 'app-speaker-dialog',
    templateUrl : './speaker-dialog.component.html',
    styleUrls   : ['./speaker-dialog.component.scss']
})

export class SpeakerDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<SpeakerDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Speaker
    ) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
