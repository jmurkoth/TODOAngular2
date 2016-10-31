import { Component, OnInit } from '@angular/core';
import { Logger } from '../common/common.Logger';

@Component({
    moduleId: module.id,
    selector: 'app-contact',
    templateUrl: 'contact.component.html'
})
export class ContactComponent implements OnInit {
    constructor(public logger: Logger) { }

    ngOnInit() {
         this.logger.info('Contact Component  Initialized');
     }
}
