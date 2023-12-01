import { ApplicationError } from './application';
import { ErrorDetail } from './detail';

export class ConflictError extends ApplicationError {
  constructor(message: string, details?: ErrorDetail[]) {
    super(409, 'CONFLICT', message, details);
  }
}
