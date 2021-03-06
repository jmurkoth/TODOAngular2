import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 /* tslint:disable:component-selector-prefix component-selector-name */
@Component({
    selector: 'app-alert',
    templateUrl: 'alert.component.html'
})
 /* tslint:enable:component-selector-prefix  component-selector-name */
export class AlertComponent implements OnInit {

    @Input() type: AlertType = AlertType.info;
    @Input() dismissable = true;
    @Output() close: EventEmitter<AlertComponent> = new EventEmitter<AlertComponent>();
    closed= false;

    cssClass: string;
    constructor() { }

    ngOnInit(): void {
        this.cssClass = `alert-${this.type}`;
    }

    onClose(): void {
        this.closed = !this.closed;
        this.close.emit(this);
    }
}

export enum AlertType {
    success,
    info,
    warning,
    danger
}
