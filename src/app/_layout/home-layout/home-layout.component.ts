import {Component, OnInit} from '@angular/core';

@Component({
    selector    : 'app-home-layout',
    templateUrl : './home-layout.component.html',
    styleUrls   : ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    onActivate(event) {
        let scrollToTop = window.setInterval(() => {
            let pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); // how far to scroll on each step
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
    }
}
