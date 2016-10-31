import { Component, OnInit } from '@angular/core';
import { Logger } from '../common/common.Logger';

@Component({
    moduleId: module.id,
    selector: 'app-about',
    templateUrl: 'about.component.html'
})
export class AboutComponent implements OnInit {
    constructor(public logger: Logger) { }

    ngOnInit() {
       this.logger.info('About Component  Initialized');
     }
}
