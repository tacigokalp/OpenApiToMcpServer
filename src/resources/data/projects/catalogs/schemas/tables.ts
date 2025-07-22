// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Tables extends APIResource {
  /**
   * List Tables
   *
   * @example
   * ```ts
   * const tables =
   *   await client.data.projects.catalogs.schemas.tables.list(
   *     'public',
   *     { projectId: 'mtKDhe1U', catalogId: 'catalogId' },
   *   );
   * ```
   */
  list(schemaName: string, params: TableListParams, options?: RequestOptions): APIPromise<TableListResponse> {
    const { projectId, catalogId } = params;
    return this._client.get(
      path`/data/projects/${projectId}/catalogs/${catalogId}/schemas/${schemaName}/tables`,
      options,
    );
  }

  /**
   * List Columns
   *
   * @example
   * ```ts
   * const response =
   *   await client.data.projects.catalogs.schemas.tables.retrieveColumns(
   *     'actor',
   *     {
   *       projectId: 'mtKDhe1U',
   *       catalogId: 'catalogId',
   *       schemaName: 'public',
   *     },
   *   );
   * ```
   */
  retrieveColumns(
    tableName: string,
    params: TableRetrieveColumnsParams,
    options?: RequestOptions,
  ): APIPromise<TableRetrieveColumnsResponse> {
    const { projectId, catalogId, schemaName } = params;
    return this._client.get(
      path`/data/projects/${projectId}/catalogs/${catalogId}/schemas/${schemaName}/tables/${tableName}/columns`,
      options,
    );
  }

  /**
   * Table is Cached
   *
   * @example
   * ```ts
   * const response =
   *   await client.data.projects.catalogs.schemas.tables.retrieveIsCached(
   *     'actor',
   *     {
   *       projectId: 'mtKDhe1U',
   *       catalogId: 'catalogId',
   *       schemaName: 'public',
   *     },
   *   );
   * ```
   */
  retrieveIsCached(
    tableName: string,
    params: TableRetrieveIsCachedParams,
    options?: RequestOptions,
  ): APIPromise<TableRetrieveIsCachedResponse> {
    const { projectId, catalogId, schemaName } = params;
    return this._client.get(
      path`/data/projects/${projectId}/catalogs/${catalogId}/schemas/${schemaName}/tables/${tableName}/isCached`,
      options,
    );
  }

  /**
   * Table Statistics
   *
   * @example
   * ```ts
   * const response =
   *   await client.data.projects.catalogs.schemas.tables.retrieveStatistics(
   *     'actor',
   *     {
   *       projectId: 'mtKDhe1U',
   *       catalogId: 'catalogId',
   *       schemaName: 'public',
   *     },
   *   );
   * ```
   */
  retrieveStatistics(
    tableName: string,
    params: TableRetrieveStatisticsParams,
    options?: RequestOptions,
  ): APIPromise<TableRetrieveStatisticsResponse> {
    const { projectId, catalogId, schemaName } = params;
    return this._client.get(
      path`/data/projects/${projectId}/catalogs/${catalogId}/schemas/${schemaName}/tables/${tableName}/statistics`,
      options,
    );
  }
}

export type TableListResponse = Array<TableListResponse.TableListResponseItem>;

export namespace TableListResponse {
  /**
   * Represents a table in a schema.
   */
  export interface TableListResponseItem {
    /**
     * The ID of the catalog that the table belongs to.
     */
    catalogId?: string;

    /**
     * The name of the catalog that the table belongs to.
     */
    catalogName?: string;

    /**
     * Indicates whether the table is cacheable or not.
     */
    isCacheable?: boolean;

    /**
     * Indicates whether the table is cached or not.
     */
    isCached?: boolean;

    /**
     * Indicates whether the table has required query parameter columns or not. A query
     * parameter column is prefixed with "_q_" e.g. "\_q_date". These columns are used
     * to filter the data in the table.
     */
    isDynamicTable?: boolean;

    /**
     * The name of the schema that the table belongs to.
     */
    schemaName?: string;

    /**
     * The name of the table.
     */
    tableName?: string;
  }
}

export type TableRetrieveColumnsResponse =
  Array<TableRetrieveColumnsResponse.TableRetrieveColumnsResponseItem>;

export namespace TableRetrieveColumnsResponse {
  export interface TableRetrieveColumnsResponseItem {
    /**
     * The id of the column.
     */
    id?: string;

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
}

export interface TableRetrieveIsCachedResponse {
  /**
   * Indicates whether the table is cacheable or not.
   */
  isCached?: boolean;
}

export interface TableRetrieveStatisticsResponse {
  /**
   * The ID of the catalog.
   */
  catalogId?: string;

  /**
   * Statistics for each column in the table.
   */
  columnStatistics?: Array<TableRetrieveStatisticsResponse.ColumnStatistic>;

  /**
   * The name of the schema.
   */
  schemaName?: string;

  /**
   * The name of the table.
   */
  tableName?: string;
}

export namespace TableRetrieveStatisticsResponse {
  export interface ColumnStatistic {
    /**
     * The name of the column.
     */
    columnName?: string;

    /**
     * The estimated fraction of distinct values in a column compared to the total
     * number of rows in the table. It helps in query optimization, statistics
     * collection, and cardinality estimation in database systems.
     */
    distinctFraction?: number;
  }
}

export interface TableListParams {
  /**
   * ID of the project
   */
  projectId: string;

  /**
   * ID of the catalog
   */
  catalogId: string;
}

export interface TableRetrieveColumnsParams {
  /**
   * ID of the project
   */
  projectId: string;

  /**
   * ID of the catalog
   */
  catalogId: string;

  /**
   * Name of the schema
   */
  schemaName: string;
}

export interface TableRetrieveIsCachedParams {
  /**
   * ID of the project
   */
  projectId: string;

  /**
   * ID of the catalog
   */
  catalogId: string;

  /**
   * Name of the schema
   */
  schemaName: string;
}

export interface TableRetrieveStatisticsParams {
  /**
   * ID of the project
   */
  projectId: string;

  /**
   * ID of the catalog
   */
  catalogId: string;

  /**
   * Name of the schema
   */
  schemaName: string;
}

export declare namespace Tables {
  export {
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
