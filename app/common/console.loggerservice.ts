declare var console: any ;
import { Injectable, Injector } from '@angular/core';
import { ILogger } from './common.logger';
import * as moment from 'moment/moment';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class ConsoleLogger implements ILogger {
    private _logPrefix = 'ANGULAR2';
    private _isToastrEnabled = true;

constructor( private injector: Injector) {}
    public info(...args: any[]): void {
        if ( console && console.info ) {
            args = this.addTimeStamp(args);
            // tslint:disable-next-line:no-console
            console.info(...args );
            if ( this._isToastrEnabled) {
                this.Toastr.info(args[0]);
            }
        }
    }
public get Toastr(): ToastsManager {
     return this.injector.get(ToastsManager);
  }
     public error(...args: any[]): void {
        if ( console && console.info ) {
          args = this.addTimeStamp(args);
          console.error( args );
            if ( this._isToastrEnabled) {
               this.Toastr.error(args[0]);
            }
        }
    }

     public warn(...args: any[]): void {
        if ( console && console.info ) {
            args = this.addTimeStamp(args);
            console.warn( args );
             if ( this._isToastrEnabled) {
                this.Toastr.warning(args[0]);
            }
        }
    }

     public debug(...args: any[]): void {
       if ( console && console.info ) {
            args = this.addTimeStamp(args);
            // tslint:disable-next-line:no-console
            console.debug( args );
            if ( this._isToastrEnabled) {
                this.Toastr.info(args[0]);
            }
       }
    }

     public assert(...args: any[]): void {
        if ( console && console.info ) {
            args = this.addTimeStamp(args);
            console.assert( args );
            if ( this._isToastrEnabled) {
                this.Toastr.info(args[0]);
            }
        }
    }

     public group(...args: any[]): void {
        if ( console && console.info ) {
           args = this.addTimeStamp(args);
           console.group( args );
           if ( this._isToastrEnabled) {
                this.Toastr.info(args[0]);
            }
        }
    }

     public groupEnd(...args: any[]): void {
        if ( console && console.info ) {
           args = this.addTimeStamp(args);
           console.groupEnd( args );
           if ( this._isToastrEnabled) {
                this.Toastr.info(args[0]);
            }
        }
    }

    public log(...args: any[]): void {
        if ( console && console.info ) {
           args = this.addTimeStamp(args);
           console.log( args );
           if ( this._isToastrEnabled) {
                this.Toastr.info(args[0]);
            }
        }
    }

    private addTimeStamp(args: any[]): any[] {
         args[0] = ['[', moment().format('MM/DD/YYYY HH:mm:ss'), ']:', this._logPrefix, ':', args[0]].join('');
         return args;
    }
}
