// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ColumnsAPI from './columns';
import {
  ColumnCreateParams,
  ColumnDeleteParams,
  ColumnListParams,
  ColumnUpdateParams,
  Columns,
} from './columns';
import { APIPromise } from '../../../../core/api-promise';
import { type Uploadable } from '../../../../core/uploads';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../../internal/uploads';
import { path } from '../../../../internal/utils/path';

export class Table extends APIResource {
  columns: ColumnsAPI.Columns = new ColumnsAPI.Columns(this._client);

  /**
   * Create Table
   *
   * @example
   * ```ts
   * const table = await client.data.projects.table.update(
   *   'tableName',
   *   { projectId: 'projectId' },
   * );
   *
   * const content = await table.blob();
   * console.log(content);
   * ```
   */
  update(tableName: string, params: TableUpdateParams, options?: RequestOptions): APIPromise<Response> {
    const { projectId } = params;
    return this._client.post(path`/data/projects/${projectId}/table/${tableName}`, {
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
   * const tables = await client.data.projects.table.list(
   *   'projectId',
   * );
   *
   * const content = await tables.blob();
   * console.log(content);
   * ```
   */
  list(projectID: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/data/projects/${projectID}/table`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Delete Table
   *
   * @example
   * ```ts
   * await client.data.projects.table.delete('tableName', {
   *   projectId: 'projectId',
   * });
   * ```
   */
  delete(tableName: string, params: TableDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.delete(path`/data/projects/${projectId}/table/${tableName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Import CSV
   *
   * @example
   * ```ts
   * const response = await client.data.projects.table.import(
   *   'tableName',
   *   {
   *     projectId: 'projectId',
   *     file: fs.createReadStream('path/to/file'),
   *     request: 'request',
   *   },
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  import(tableName: string, params: TableImportParams, options?: RequestOptions): APIPromise<Response> {
    const { projectId, ...body } = params;
    return this._client.post(
      path`/data/projects/${projectId}/table/${tableName}/import`,
      multipartFormRequestOptions(
        {
          body,
          ...options,
          headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
          __binaryResponse: true,
        },
        this._client,
      ),
    );
  }

  /**
   * Get Sample CSV
   *
   * @example
   * ```ts
   * const response =
   *   await client.data.projects.table.retrieveSample(
   *     'tableName',
   *     { projectId: 'projectId' },
   *   );
   * ```
   */
  retrieveSample(
    tableName: string,
    params: TableRetrieveSampleParams,
    options?: RequestOptions,
  ): APIPromise<string> {
    const { projectId } = params;
    return this._client.get(path`/data/projects/${projectId}/table/${tableName}/sample`, {
      ...options,
      headers: buildHeaders([{ Accept: 'text/csv' }, options?.headers]),
    });
  }
}

export type TableRetrieveSampleResponse = Uploadable;

export interface TableUpdateParams {
  projectId: string;
}

export interface TableDeleteParams {
  projectId: string;
}

export interface TableImportParams {
  /**
   * Path param:
   */
  projectId: string;

  /**
   * Body param: CSV file
   */
  file: Uploadable;

  /**
   * Body param: JSON string with import config
   */
  request: string;
}

export interface TableRetrieveSampleParams {
  projectId: string;
}

Table.Columns = Columns;

export declare namespace Table {
  export {
    type TableRetrieveSampleResponse as TableRetrieveSampleResponse,
    type TableUpdateParams as TableUpdateParams,
    type TableDeleteParams as TableDeleteParams,
    type TableImportParams as TableImportParams,
    type TableRetrieveSampleParams as TableRetrieveSampleParams,
  };

  export {
    Columns as Columns,
    type ColumnCreateParams as ColumnCreateParams,
    type ColumnUpdateParams as ColumnUpdateParams,
    type ColumnListParams as ColumnListParams,
    type ColumnDeleteParams as ColumnDeleteParams,
  };
}
