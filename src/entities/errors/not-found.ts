import { ApplicationError } from './application';
import { ErrorDetail } from './detail';

export class NotFoundError extends ApplicationError {
  constructor(message: string, details?: ErrorDetail[]) {
    super(404, 'NOT_FOUND', message, details);
  }
}
