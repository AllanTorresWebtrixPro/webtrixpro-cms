type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  level: LogLevel;
  message: string;
  data?: unknown;
  timestamp: string;
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';

  private formatMessage(level: LogLevel, message: string, data?: unknown): LogEntry {
    return {
      level,
      message,
      data,
      timestamp: new Date().toISOString(),
    };
  }

  debug(message: string, data?: unknown): void {
    if (this.isDevelopment) {
      const entry = this.formatMessage('debug', message, data);
      console.debug('[DEBUG]', entry);
    }
  }

  info(message: string, data?: unknown): void {
    const entry = this.formatMessage('info', message, data);
    if (this.isDevelopment) {
      console.info('[INFO]', entry);
    }
  }

  warn(message: string, data?: unknown): void {
    const entry = this.formatMessage('warn', message, data);
    console.warn('[WARN]', entry);
  }

  error(message: string, data?: unknown): void {
    const entry = this.formatMessage('error', message, data);
    console.error('[ERROR]', entry);
  }
}

export const logger = new Logger();

