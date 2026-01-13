import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from 'src/common/common-consts';
import { SignUpBody, SignupSuccessResponse, ApiError } from './auth-consts';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    signup: builder.mutation<SignupSuccessResponse, SignUpBody>({
      query: (data) => ({
        url: API.SIGNUP,
        method: 'POST',
        body: data,
      }),
      transformResponse: (response: SignupSuccessResponse | { errors: ApiError[] }): SignupSuccessResponse => {
        if ('errors' in response) {
          throw { status: 'CUSTOM_ERROR', data: response.errors };
        }
        return response as SignupSuccessResponse;
      },
      transformErrorResponse: (response: any): ApiError[] => {
        if (response?.data?.errors) {
          return response.data.errors;
        }
        if (Array.isArray(response?.data)) {
          return response.data;
        }
        return [
          {
            name: 'NetworkError',
            message: 'Произошла ошибка на сервере',
          },
        ];
      },
    }),
  }),
});

export const { useSignupMutation } = authApi;
