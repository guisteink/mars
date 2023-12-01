import { ApplicationError } from './application';

export class InternalError extends ApplicationError {
  constructor() {
    super(500, 'INTERNAL_ERROR', 'Internal error');
  }
}
