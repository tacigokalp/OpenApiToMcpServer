// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Columns extends APIResource {
  /**
   * Add BI Column
   *
   * @example
   * ```ts
   * const column =
   *   await client.data.projects.bitable.columns.create(
   *     'tableName',
   *     { projectId: 'projectId' },
   *   );
   *
   * const content = await column.blob();
   * console.log(content);
   * ```
   */
  create(tableName: string, params: ColumnCreateParams, options?: RequestOptions): APIPromise<Response> {
    const { projectId, ...body } = params;
    return this._client.post(path`/data/projects/${projectId}/bitable/${tableName}/columns`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Update BI Column
   *
   * @example
   * ```ts
   * const column =
   *   await client.data.projects.bitable.columns.update(
   *     'columnName',
   *     { projectId: 'projectId', tableName: 'tableName' },
   *   );
   *
   * const content = await column.blob();
   * console.log(content);
   * ```
   */
  update(columnName: string, params: ColumnUpdateParams, options?: RequestOptions): APIPromise<Response> {
    const { projectId, tableName, ...body } = params;
    return this._client.put(path`/data/projects/${projectId}/bitable/${tableName}/columns/${columnName}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * See Data -- Catalog / List Columns for more details.
   *
   * @example
   * ```ts
   * const columns =
   *   await client.data.projects.bitable.columns.list(
   *     'tableName',
   *     { projectId: 'projectId' },
   *   );
   *
   * const content = await columns.blob();
   * console.log(content);
   * ```
   */
  list(tableName: string, params: ColumnListParams, options?: RequestOptions): APIPromise<Response> {
    const { projectId } = params;
    return this._client.get(path`/data/projects/${projectId}/bitable/${tableName}/columns`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Delete BI Column
   *
   * @example
   * ```ts
   * await client.data.projects.bitable.columns.delete(
   *   'columnName',
   *   { projectId: 'projectId', tableName: 'tableName' },
   * );
   * ```
   */
  delete(columnName: string, params: ColumnDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId, tableName } = params;
    return this._client.delete(path`/data/projects/${projectId}/bitable/${tableName}/columns/${columnName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * This class represents a ColumnRequest. It contains the name, data type, display
 * name, default value, not null and unique status of the column request.
 */
export interface ColumnRequest {
  /**
   * The data type of the column.
   */
  dataType?: string;

  /**
   * The default value of the column.
   */
  defaultValue?: string;

  /**
   * The display name of the column.
   */
  displayName?: string;

  /**
   * The not null flag for the column.
   */
  isNotNull?: boolean;

  /**
   * The unique flag for the column.
   */
  isUnique?: boolean;

  /**
   * The name of the column.
   */
  name?: string;
}

export interface ColumnCreateParams {
  /**
   * Path param:
   */
  projectId: string;

  /**
   * Body param: The data type of the column.
   */
  dataType?: string;

  /**
   * Body param: The default value of the column.
   */
  defaultValue?: string;

  /**
   * Body param: The display name of the column.
   */
  displayName?: string;

  /**
   * Body param: The not null flag for the column.
   */
  isNotNull?: boolean;

  /**
   * Body param: The unique flag for the column.
   */
  isUnique?: boolean;

  /**
   * Body param: The name of the column.
   */
  name?: string;
}

export interface ColumnUpdateParams {
  /**
   * Path param:
   */
  projectId: string;

  /**
   * Path param:
   */
  tableName: string;

  /**
   * Body param: The data type of the column.
   */
  dataType?: string;

  /**
   * Body param: The default value of the column.
   */
  defaultValue?: string;

  /**
   * Body param: The display name of the column.
   */
  displayName?: string;

  /**
   * Body param: The not null flag for the column.
   */
  isNotNull?: boolean;

  /**
   * Body param: The unique flag for the column.
   */
  isUnique?: boolean;

  /**
   * Body param: The name of the column.
   */
  name?: string;
}

export interface ColumnListParams {
  projectId: string;
}

export interface ColumnDeleteParams {
  projectId: string;

  tableName: string;
}

export declare namespace Columns {
  export {
    type ColumnRequest as ColumnRequest,
    type ColumnCreateParams as ColumnCreateParams,
    type ColumnUpdateParams as ColumnUpdateParams,
    type ColumnListParams as ColumnListParams,
    type ColumnDeleteParams as ColumnDeleteParams,
  };
}
