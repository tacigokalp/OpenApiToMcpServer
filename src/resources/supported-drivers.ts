// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class SupportedDrivers extends APIResource {
  /**
   * List Supported Drivers
   */
  list(
    query: SupportedDriverListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/supportedDrivers', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Get JDBC Driver
   */
  retrieveJdbc(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/supportedDrivers/jdbc', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Get SQL Alchemy Driver
   */
  retrieveSqlAlchemy(
    query: SupportedDriverRetrieveSqlAlchemyParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/supportedDrivers/sql_alchemy', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface SupportedDriverListParams {
  /**
   * Catalog name.
   *
   * Drivers such as sql_alchemy supports only one catalog at a time. So specific
   * catalog name must be provided in order to use.
   */
  catalogName?: string;
}

export interface SupportedDriverRetrieveSqlAlchemyParams {
  /**
   * Catalog name.
   *
   * Drivers such as sql_alchemy supports only one catalog at a time. So specific
   * catalog name must be provided in order to use.
   */
  catalogName: string;
}

export declare namespace SupportedDrivers {
  export {
    type SupportedDriverListParams as SupportedDriverListParams,
    type SupportedDriverRetrieveSqlAlchemyParams as SupportedDriverRetrieveSqlAlchemyParams,
  };
}
