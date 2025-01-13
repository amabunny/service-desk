/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type BaseResponse = {
  message?: string | null;
  succeeded: boolean;
};

export type IdentityError = {
  code?: string | null;
  description?: string | null;
};

export type IdentityResult = {
  errors?: IdentityError[] | null;
  succeeded?: boolean;
};

export type LoginUserDto = {
  password: string | null;
  username: string | null;
};

export type RegisterUserDto = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  middleName: string | null;
  password: string | null;
  phoneNumber: string | null;
  username: string | null;
};

export type TokenResponse = {
  accessToken: string | null;
  message?: string | null;
  refreshToken: string | null;
  succeeded: boolean;
};
