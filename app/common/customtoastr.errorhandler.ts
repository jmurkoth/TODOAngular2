import { ErrorHandler  } from '@angular/core';
import {WrappedError} from '@angular/core/src/facade/errors';
import  * as toastr from 'toastr';

export class CustomToastrErrorHandler implements ErrorHandler {
private _toasterEnabled= true;

 constructor() {
     toastr.options = { positionClass: 'toast-bottom-right' , closeButton: true};
 }

  handleError(error: any): void {
    const originalError = this._findOriginalError(error);
    const originalStack = this._findOriginalStack(error);
    let exceptionValue = `ORIGINAL EXCEPTION: ${this._extractMessage(originalError)}`;
    let stackTraceValue = `ORIGINAL STACKTRACE: ${originalStack}`;

    if (this._toasterEnabled) {
      toastr.error(exceptionValue);
      toastr.error(stackTraceValue);
    }

    console.error(exceptionValue );
    console.error(stackTraceValue );
  }

 _extractMessage(error: any): string {
    return error instanceof Error ? error.message : error.toString();
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

