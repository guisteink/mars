import { ErrorDetail } from './detail';

export class ApplicationError extends Error {
  code: string;
  message: string;
  details: ErrorDetail[] = [];
  httpStatus: number;

  constructor(httpStatus: number, code: string, message: string, details?: ErrorDetail[]) {
    super();
    this.httpStatus = httpStatus;
    this.code = code;
    this.message = message;
    if (details && details.length > 0) {
      this.details = details;
    }
  }
}
