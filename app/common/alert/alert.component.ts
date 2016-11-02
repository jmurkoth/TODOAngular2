import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'alert',
    templateUrl: 'alert.component.html'
})
export class AlertComponent implements OnInit {

    @Input() type: AlertType = AlertType.info;
    @Input() dismissable: boolean = true;
    @Output() close: EventEmitter<AlertComponent> = new EventEmitter<AlertComponent>();
    closed: boolean= false;

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
