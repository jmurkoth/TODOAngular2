import { Injectable,Injector } from '@angular/core';
import { ErrorHandler  } from '@angular/core';
import {WrappedError} from '@angular/core/src/facade/errors';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class CustomToastrErrorHandler implements ErrorHandler {
private _toasterEnabled= true;
private _options: ToastOptions;


 constructor( private injector: Injector ) {
   this._options = new ToastOptions({
  closeButton: true,
  positionClass: 'toast-bottom-right',
});
 }
public get Toastr(): ToastsManager {
     return this.injector.get(ToastsManager);
  }
  handleError(error: any): void {
    const originalError = this._findOriginalError(error);
    const originalStack = this._findOriginalStack(error);
    let exceptionValue = `ORIGINAL EXCEPTION: ${this._extractMessage(originalError)}`;
    let stackTraceValue = `ORIGINAL STACKTRACE: ${originalStack}`;

    if (this._toasterEnabled) {
      this.Toastr.error(exceptionValue, 'Error', this._options);
      this.Toastr.error(stackTraceValue, 'Error', this._options);
    }
    if (exceptionValue) {
      console.error(exceptionValue );
    }
    if (stackTraceValue) {
      console.error(stackTraceValue );
    }

  }

 _extractMessage(error: any): string {
    return error instanceof Error ? error.message : '';
  }

  _findOriginalError(error: any): any {
    let e = (error as WrappedError).originalError;
    while (e && (e as WrappedError).originalError) {
      e = (e as WrappedError).originalError;
    }
    return e;
  }
  _findOriginalStack(error: any): string {
    if (!(error instanceof Error)) {
    return null;
    }

    let e: any = error;
    let stack: string = e.stack;
    while (e instanceof Error && (e as WrappedError).originalError) {
      e = (e as WrappedError).originalError;
      if (e instanceof Error && e.stack) {
        stack = e.stack;
      }
    }

    return stack;
  }
}

