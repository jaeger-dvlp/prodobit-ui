/* eslint-disable no-console */
const NODE_ENV = import.meta.env.NODE_ENV || 'development';

interface IDevConsoleLog {
  readonly callable: boolean;
  readonly prefix: string;

  log(...args: any[]): void;
  warn(...args: any[]): void;
  error(...args: any[]): void;
}

class DevConsoleLog implements IDevConsoleLog {
  readonly callable: boolean;

  readonly prefix: string;

  constructor() {
    this.callable = NODE_ENV === 'development';
    this.prefix = '[ PRODOBIT - DEV ]\n\n';
  }

  log(...args: any[]): void {
    if (this.callable) {
      console.log(this.prefix, ...args);
    }
  }

  warn(...args: any[]): void {
    if (this.callable) {
      console.warn(this.prefix, ...args);
    }
  }

  error(...args: any[]): void {
    if (this.callable) {
      console.error(this.prefix, ...args);
    }
  }
}

export default new DevConsoleLog();
