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

import {
  BaseResponse,
  IdentityResult,
  LoginUserDto,
  RegisterUserDto,
  TokenResponse,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Api<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Auth
   * @name AuthRegisterPost
   * @request POST:/api/Auth/register
   */
  authRegisterPost = (data: RegisterUserDto, params: RequestParams = {}) =>
    this.request<IdentityResult, BaseResponse>({
      path: `/api/Auth/register`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthLoginPost
   * @request POST:/api/Auth/login
   */
  authLoginPost = (data: LoginUserDto, params: RequestParams = {}) =>
    this.request<TokenResponse, void>({
      path: `/api/Auth/login`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
