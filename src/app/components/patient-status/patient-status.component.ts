import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-patient-status',
    templateUrl: './patient-status.component.html',
    styleUrls: ['./patient-status.component.scss']
})
export class PatientStatusComponent implements OnInit {
    shown;
    options = ["Izberi", "TX protocol", "Elective TX list", "HU TX list", "After heart transplant"];

    constructor() {
    }

    ngOnInit() {
    }

    expand(event) {

        this.shown = true;


    }

}
