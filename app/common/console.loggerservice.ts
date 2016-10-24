declare var console: any ;

import { ILogger } from './common.logger';
import * as moment from 'moment/moment';
import  * as toastr from 'toastr';

export class ConsoleLogger implements ILogger {
    private _logPrefix: string = 'ANGULAR2';
    private _isToastrEnabled: boolean = true;

    public info(...args: any[]): void {
        if ( console && console.info ) {
            args = this.addTimeStamp(args);
            // tslint:disable-next-line:no-console
            console.info(...args );
            if ( this._isToastrEnabled) {
                toastr.info(args[0]);
            }
        }
    }

     public error(...args: any[]): void {
        if ( console && console.info ) {
          args = this.addTimeStamp(args);
          console.error( args );
            if ( this._isToastrEnabled) {
                toastr.error(args[0]);
            }
        }
    }

     public warn(...args: any[]): void {
        if ( console && console.info ) {
            args = this.addTimeStamp(args);
            console.warn( args );
             if ( this._isToastrEnabled) {
                toastr.warning(args[0]);
            }
        }
    }

     public debug(...args: any[]): void {
       if ( console && console.info ) {
            args = this.addTimeStamp(args);
            // tslint:disable-next-line:no-console
            console.debug( args );
            if ( this._isToastrEnabled) {
                toastr.info(args[0]);
            }
       }
    }

     public assert(...args: any[]): void {
        if ( console && console.info ) {
            args = this.addTimeStamp(args);
            console.assert( args );
            if ( this._isToastrEnabled) {
                toastr.info(args[0]);
            }
        }
    }

     public group(...args: any[]): void {
        if ( console && console.info ) {
           args = this.addTimeStamp(args);
           console.group( args );
           if ( this._isToastrEnabled) {
                toastr.info(args[0]);
            }
        }
    }

     public groupEnd(...args: any[]): void {
        if ( console && console.info ) {
           args = this.addTimeStamp(args);
           console.groupEnd( args );
           if ( this._isToastrEnabled) {
                toastr.info(args[0]);
            }
        }
    }

    public log(...args: any[]): void {
        if ( console && console.info ) {
           args = this.addTimeStamp(args);
           console.log( args );
           if ( this._isToastrEnabled) {
                toastr.info(args[0]);
            }
        }
    }

    private addTimeStamp(args: any[]): any[] {
         args[0] = ['[', moment().format('MM/DD/YYYY HH:mm:ss'), ']:', this._logPrefix, ':', args[0]].join('');
         return args;
    }
}
