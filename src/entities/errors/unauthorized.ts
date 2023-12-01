import { ApplicationError } from './application';
import { ErrorDetail } from './detail';

export class UnauthorizedError extends ApplicationError {
  constructor(message: string, details?: ErrorDetail[]) {
    super(401, 'AUTHENTICATION_ERROR', message, details);
  }
}
