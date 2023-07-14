import { default as CustomAPI } from '@/common/configs/api.config';

export interface IApiClient {
  readonly API: typeof CustomAPI;
  readonly defaultError: string;

  errorHandler(error: any): { message: string; code?: string | number };
}

class ApiClient implements IApiClient {
  readonly API: typeof CustomAPI;

  readonly defaultError: string;

  constructor() {
    this.API = CustomAPI;
    this.defaultError = 'errors.default';
  }

  // async get<T>(url: string, params?: any): Promise<T> {}

  errorHandler(error: any): { message: string; code?: string | number } {
    const errorResponse = error?.response?.data;
    const defaultError = error;

    const message = errorResponse?.message || this.defaultError;
    const code = errorResponse?.code || defaultError?.code;

    // Implement your own error handling here
    // if (code === 'USERNOTFOUND') {
    //   return {
    //     message: 'errors.userNotFound',
    //     code,
    //   };
    // }

    return {
      message,
      code,
    };
  }
}

export default new ApiClient();
