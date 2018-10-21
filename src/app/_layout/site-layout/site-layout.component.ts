import {Component, OnInit} from '@angular/core';

@Component({
    selector    : 'app-site-layout',
    templateUrl : './site-layout.component.html',
    styleUrls   : ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements OnInit {

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
