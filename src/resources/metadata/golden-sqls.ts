// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GoldenSqls extends APIResource {
  /**
   * Create golden sql for the project
   */
  create(projectID: string, body: GoldenSqlCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post(path`/metadata/${projectID}/golden-sqls`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * List of golden sqls for the project.
   */
  list(projectID: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/metadata/${projectID}/golden-sqls`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Delete golden sql from the project.
   */
  delete(id: string, params: GoldenSqlDeleteParams, options?: RequestOptions): APIPromise<Response> {
    const { projectId } = params;
    return this._client.delete(path`/metadata/${projectId}/golden-sqls/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Semantic query golden sqls for the project.
   */
  query(projectID: string, query: GoldenSqlQueryParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/metadata/${projectID}/golden-sql/query`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface GoldenSqlCreateParams {
  prompt?: string;

  sql?: string;
}

export interface GoldenSqlDeleteParams {
  projectId: string;
}

export interface GoldenSqlQueryParams {
  q: string;
}

export declare namespace GoldenSqls {
  export {
    type GoldenSqlCreateParams as GoldenSqlCreateParams,
    type GoldenSqlDeleteParams as GoldenSqlDeleteParams,
    type GoldenSqlQueryParams as GoldenSqlQueryParams,
  };
}
