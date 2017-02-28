import { Component, OnInit } from '@angular/core';
import { Logger } from '../common/common.Logger';


@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    constructor(public logger: Logger) {
    }

    ngOnInit(): void {
            this.logger.info('Home Component  Initialized');
     }

     onAlertClose(): void {
         this.logger.info('alert closed');
     }

}
