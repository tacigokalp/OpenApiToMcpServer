// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as TablesAPI from './tables';
import {
  TableListParams,
  TableListResponse,
  TableRetrieveColumnsParams,
  TableRetrieveColumnsResponse,
  TableRetrieveIsCachedParams,
  TableRetrieveIsCachedResponse,
  TableRetrieveStatisticsParams,
  TableRetrieveStatisticsResponse,
  Tables,
} from './tables';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Schemas extends APIResource {
  tables: TablesAPI.Tables = new TablesAPI.Tables(this._client);

  /**
   * List Schemas
   *
   * @example
   * ```ts
   * const schemas =
   *   await client.data.projects.catalogs.schemas.list(
   *     'catalogId',
   *     { projectId: 'mtKDhe1U' },
   *   );
   * ```
   */
  list(
    catalogID: string,
    params: SchemaListParams,
    options?: RequestOptions,
  ): APIPromise<SchemaListResponse> {
    const { projectId } = params;
    return this._client.get(path`/data/projects/${projectId}/catalogs/${catalogID}/schemas`, options);
  }
}

export type SchemaListResponse = Array<SchemaListResponse.SchemaListResponseItem>;

export namespace SchemaListResponse {
  export interface SchemaListResponseItem {
    /**
     * The ID of the catalog that the schema belongs to.
     */
    catalogId?: string;

    /**
     * The name of the catalog that the schema belongs to.
     */
    catalogName?: string;

    /**
     * The name of the schema.
     */
    schemaName?: string;
  }
}

export interface SchemaListParams {
  /**
   * ID of the project
   */
  projectId: string;
}

Schemas.Tables = Tables;

export declare namespace Schemas {
  export { type SchemaListResponse as SchemaListResponse, type SchemaListParams as SchemaListParams };

  export {
    Tables as Tables,
    type TableListResponse as TableListResponse,
    type TableRetrieveColumnsResponse as TableRetrieveColumnsResponse,
    type TableRetrieveIsCachedResponse as TableRetrieveIsCachedResponse,
    type TableRetrieveStatisticsResponse as TableRetrieveStatisticsResponse,
    type TableListParams as TableListParams,
    type TableRetrieveColumnsParams as TableRetrieveColumnsParams,
    type TableRetrieveIsCachedParams as TableRetrieveIsCachedParams,
    type TableRetrieveStatisticsParams as TableRetrieveStatisticsParams,
  };
}
