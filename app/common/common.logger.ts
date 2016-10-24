export interface   ILogger {
    info(...args: any[]): void;
    error(...args: any[]): void;
    debug(...args: any[]): void;
    log(...args: any[]): void;
    warn(...args: any[]): void;
    assert(...args: any[]): void;
    group(...args: any[]): void;
    groupEnd(...args: any[]): void;
}

export abstract class Logger implements ILogger {

    info(...args: any[]): void {

    }
    error(...args: any[]): void {

    }
    debug(...args: any[]): void {

    }
    log(...args: any[]): void {

    }
    warn(...args: any[]): void {

    }
    assert(...args: any[]): void {

    }
    group(...args: any[]): void {

    }
    groupEnd(...args: any[]): void {

    }
}
