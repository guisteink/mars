
import { ErrorDetail } from '../errors/detail';

export interface IBaseController<T> {
  index(): Promise<void>;
  show(id: string): Promise<void>;
  create(data: T): Promise<void>;
  update(id: string, data: T): Promise<void>;
  delete(id: string): Promise<void>;
}

export interface IValidator {
  validate(data: Partial<IUser>): ErrorDetail[];
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}
