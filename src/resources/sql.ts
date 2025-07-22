// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Sql extends APIResource {
  /**
   * Transpile a sql query into given dialect
   */
  transpile(dialect: string, body: SqlTranspileParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post(path`/sql/transpile/${dialect}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface SqlTranspileParams {
  query?: string;
}

export declare namespace Sql {
  export { type SqlTranspileParams as SqlTranspileParams };
}
