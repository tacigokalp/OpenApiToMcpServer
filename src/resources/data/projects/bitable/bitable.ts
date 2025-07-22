// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ColumnsAPI from './columns';
import {
  ColumnCreateParams,
  ColumnDeleteParams,
  ColumnListParams,
  ColumnRequest,
  ColumnUpdateParams,
  Columns,
} from './columns';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Bitable extends APIResource {
  columns: ColumnsAPI.Columns = new ColumnsAPI.Columns(this._client);

  /**
   * Create BI Table
   *
   * @example
   * ```ts
   * const bitable = await client.data.projects.bitable.update(
   *   'tableName',
   *   { projectId: 'projectId' },
   * );
   *
   * const content = await bitable.blob();
   * console.log(content);
   * ```
   */
  update(tableName: string, params: BitableUpdateParams, options?: RequestOptions): APIPromise<Response> {
    const { projectId } = params;
    return this._client.post(path`/data/projects/${projectId}/bitable/${tableName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * See Data -- Catalog / List Tables for more details.
   *
   * @example
   * ```ts
   * const bitables = await client.data.projects.bitable.list(
   *   'projectId',
   * );
   *
   * const content = await bitables.blob();
   * console.log(content);
   * ```
   */
  list(projectID: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/data/projects/${projectID}/bitable`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Delete BI Table
   *
   * @example
   * ```ts
   * await client.data.projects.bitable.delete('tableName', {
   *   projectId: 'projectId',
   * });
   * ```
   */
  delete(tableName: string, params: BitableDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.delete(path`/data/projects/${projectId}/bitable/${tableName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BitableUpdateParams {
  projectId: string;
}

export interface BitableDeleteParams {
  projectId: string;
}

Bitable.Columns = Columns;

export declare namespace Bitable {
  export { type BitableUpdateParams as BitableUpdateParams, type BitableDeleteParams as BitableDeleteParams };

  export {
    Columns as Columns,
    type ColumnRequest as ColumnRequest,
    type ColumnCreateParams as ColumnCreateParams,
    type ColumnUpdateParams as ColumnUpdateParams,
    type ColumnListParams as ColumnListParams,
    type ColumnDeleteParams as ColumnDeleteParams,
  };
}
