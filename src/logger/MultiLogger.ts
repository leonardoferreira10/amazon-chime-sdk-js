// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import Logger from './Logger';
import LogLevel from './LogLevel';

/**
 * MultiLogger writes logs to multiple other loggers
 */
export default class MultiLogger implements Logger {
  private _loggers: Logger[];

  constructor(...loggers: Logger[]) {
    this._loggers = loggers;
  }

  info(msg: string): void {
    for (const logger of this._loggers) {
      logger.info(msg);
    }
  }

  warn(msg: string): void {
    for (const logger of this._loggers) {
      logger.warn(msg);
    }
  }

  error(msg: string): void {
    for (const logger of this._loggers) {
      logger.error(msg);
    }
  }

  debug(debugFunction: () => string): void {
    for (const logger of this._loggers) {
      logger.debug(debugFunction);
    }
  }

  setLogLevel(level: LogLevel): void {
    for (const logger of this._loggers) {
      logger.setLogLevel(level);
    }
  }

  getLogLevel(): LogLevel {
    for (const logger of this._loggers) {
      return logger.getLogLevel();
    }
    return LogLevel.OFF;
  }
}
