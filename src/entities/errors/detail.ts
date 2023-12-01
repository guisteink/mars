export class ErrorDetail {
  code: string;
  path: string;
  message: string;

  constructor(code: string, path: string, message: string) {
    this.code = code;
    this.path = path;
    this.message = message;
  }
}
