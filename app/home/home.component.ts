import { Component, OnInit } from '@angular/core';
import { Logger } from '../common/common.Logger';


@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: '/app/home/home.component.html'
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
