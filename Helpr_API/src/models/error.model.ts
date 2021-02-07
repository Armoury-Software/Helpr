export class Response {
  public errorCode!: string;
  public message!: string;

  public constructor(responseType: RESPONSE_TYPE, message: string) {
    this.message = message;

    switch (responseType) {
      case RESPONSE_TYPE.RESPONSE_SUCCESS: {
        this.errorCode = '200';
        break;
      }
      case RESPONSE_TYPE.RESPONSE_ERROR: {
        this.errorCode = '404';
        break;
      }
    }
  }
}

export enum RESPONSE_TYPE {
  RESPONSE_ERROR,
  RESPONSE_SUCCESS,
}
