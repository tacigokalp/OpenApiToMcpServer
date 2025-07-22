// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class ParametricTables extends APIResource {
  /**
   * Delete Parametric Table
   *
   * @example
   * ```ts
   * await client.data.projects.catalogs.parametricTables.deleteParametricTables(
   *   'catalogId',
   *   {
   *     projectId: 'mtKDhe1U',
   *     toSchema: 'toSchema',
   *     toTable: 'toTable',
   *   },
   * );
   * ```
   */
  deleteParametricTables(
    catalogID: string,
    params: ParametricTableDeleteParametricTablesParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { projectId, toSchema, toTable } = params;
    return this._client.delete(path`/data/projects/${projectId}/catalogs/${catalogID}/parametricTables`, {
      query: { toSchema, toTable },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create Parametric Table
   *
   * @example
   * ```ts
   * const parametricTable =
   *   await client.data.projects.catalogs.parametricTables.parametricTables(
   *     'catalogId',
   *     { projectId: 'mtKDhe1U' },
   *   );
   * ```
   */
  parametricTables(
    catalogID: string,
    params: ParametricTableParametricTablesParams,
    options?: RequestOptions,
  ): APIPromise<ParametricTable> {
    const { projectId, ...body } = params;
    return this._client.post(path`/data/projects/${projectId}/catalogs/${catalogID}/parametricTables`, {
      body,
      ...options,
    });
  }

  /**
   * List Parametric Tables
   *
   * @example
   * ```ts
   * const parametricTables =
   *   await client.data.projects.catalogs.parametricTables.retrieveParametricTables(
   *     'catalogId',
   *     { projectId: 'mtKDhe1U' },
   *   );
   * ```
   */
  retrieveParametricTables(
    catalogID: string,
    params: ParametricTableRetrieveParametricTablesParams,
    options?: RequestOptions,
  ): APIPromise<ParametricTableRetrieveParametricTablesResponse> {
    const { projectId } = params;
    return this._client.get(
      path`/data/projects/${projectId}/catalogs/${catalogID}/parametricTables`,
      options,
    );
  }
}

export interface ParametricTable {
  /**
   * Schema of the base table
   */
  fromSchema?: string;

  /**
   * Name of the base table
   */
  fromTable?: string;

  /**
   * List of parametric columns
   */
  paramValues?: Array<ParametricTable.ParamValue>;

  /**
   * Schema of the target table
   */
  toSchema?: string;

  /**
   * Name of the target table
   */
  toTable?: string;
}

export namespace ParametricTable {
  /**
   * Parametric table column
   */
  export interface ParamValue {
    /**
     * Column name
     */
    key?: string;

    /**
     * Column value
     */
    value?: unknown;
  }
}

export type ParametricTableRetrieveParametricTablesResponse = Array<ParametricTable>;

export interface ParametricTableDeleteParametricTablesParams {
  /**
   * Path param: ID of the project
   */
  projectId: string;

  /**
   * Query param: Target schema of the parametric table
   */
  toSchema: string;

  /**
   * Query param: Target table name of the parametric table
   */
  toTable: string;
}

export interface ParametricTableParametricTablesParams {
  /**
   * Path param: ID of the project
   */
  projectId: string;

  /**
   * Body param: Schema of the base table
   */
  fromSchema?: string;

  /**
   * Body param: Name of the base table
   */
  fromTable?: string;

  /**
   * Body param: List of parametric columns
   */
  paramValues?: Array<ParametricTableParametricTablesParams.ParamValue>;

  /**
   * Body param: Schema of the target table
   */
  toSchema?: string;

  /**
   * Body param: Name of the target table
   */
  toTable?: string;
}

export namespace ParametricTableParametricTablesParams {
  /**
   * Parametric table column
   */
  export interface ParamValue {
    /**
     * Column name
     */
    key?: string;

    /**
     * Column value
     */
    value?: unknown;
  }
}

export interface ParametricTableRetrieveParametricTablesParams {
  /**
   * ID of the project
   */
  projectId: string;
}

export declare namespace ParametricTables {
  export {
    type ParametricTable as ParametricTable,
    type ParametricTableRetrieveParametricTablesResponse as ParametricTableRetrieveParametricTablesResponse,
    type ParametricTableDeleteParametricTablesParams as ParametricTableDeleteParametricTablesParams,
    type ParametricTableParametricTablesParams as ParametricTableParametricTablesParams,
    type ParametricTableRetrieveParametricTablesParams as ParametricTableRetrieveParametricTablesParams,
  };
}
