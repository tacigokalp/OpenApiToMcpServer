// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Queries extends APIResource {
  /**
   * Create Query
   *
   * @example
   * ```ts
   * const query = await client.data.projects.queries.create(
   *   'projectId',
   *   {
   *     displayName: 'sampleQuery',
   *     inputQuery:
   *       'SELECT * from "mycatalog".payment.customers',
   *   },
   * );
   * ```
   */
  create(projectID: string, body: QueryCreateParams, options?: RequestOptions): APIPromise<Query> {
    return this._client.post(path`/data/projects/${projectID}/queries`, { body, ...options });
  }

  /**
   * Read Query
   *
   * @example
   * ```ts
   * const query = await client.data.projects.queries.retrieve(
   *   'queryId',
   *   { projectId: 'projectId' },
   * );
   * ```
   */
  retrieve(queryID: string, params: QueryRetrieveParams, options?: RequestOptions): APIPromise<Query> {
    const { projectId } = params;
    return this._client.get(path`/data/projects/${projectId}/queries/${queryID}`, options);
  }

  /**
   * Update Query
   *
   * @example
   * ```ts
   * const query = await client.data.projects.queries.update(
   *   'queryId',
   *   {
   *     projectId: 'projectId',
   *     displayName: 'sampleQuery',
   *     inputQuery: 'SELECT * from "mycatalog".payment.charges',
   *   },
   * );
   * ```
   */
  update(queryID: string, params: QueryUpdateParams, options?: RequestOptions): APIPromise<Query> {
    const { projectId, ...body } = params;
    return this._client.put(path`/data/projects/${projectId}/queries/${queryID}`, { body, ...options });
  }

  /**
   * List Queries
   *
   * @example
   * ```ts
   * const queries = await client.data.projects.queries.list(
   *   'projectId',
   * );
   * ```
   */
  list(projectID: string, options?: RequestOptions): APIPromise<QueryListResponse> {
    return this._client.get(path`/data/projects/${projectID}/queries`, options);
  }

  /**
   * Delete Query
   *
   * @example
   * ```ts
   * await client.data.projects.queries.delete('queryId', {
   *   projectId: 'projectId',
   * });
   * ```
   */
  delete(queryID: string, params: QueryDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.delete(path`/data/projects/${projectId}/queries/${queryID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Execute Query
   *
   * @example
   * ```ts
   * const response = await client.data.projects.queries.execute(
   *   'projectId',
   *   {
   *     from: [
   *       {
   *         catalogName: 'peaka',
   *         schemaName: 'query',
   *         tableName: 'samplequery',
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  execute(
    projectID: string,
    body: QueryExecuteParams,
    options?: RequestOptions,
  ): APIPromise<QueryExecuteResponse> {
    return this._client.post(path`/data/projects/${projectID}/queries/execute`, { body, ...options });
  }
}

export interface Query {
  /**
   * The ID of the query.
   */
  id?: string;

  /**
   * The display name of the query.
   */
  displayName?: string;

  /**
   * The sql query.
   */
  inputQuery?: string;

  /**
   * The reference id of the input query.
   */
  inputQueryRefId?: string;

  /**
   * The name of the query.
   *
   * This is the name of the query which will be used in the sql query. e.g.
   * SELECT \* FROM "peaka"."query"."<name>"
   */
  name?: string;

  /**
   * The type of the query: PLAIN or MATERIALIZED
   */
  queryType?: string;

  /**
   * This class represents a schedule for a materialized query.
   */
  schedule?: Schedule;
}

export interface QueryRequest {
  /**
   * The display name of the query.
   */
  displayName?: string;

  /**
   * The sql query.
   */
  inputQuery?: string;

  /**
   * The type of the query: PLAIN or MATERIALIZED
   *
   * Default is PLAIN.
   */
  queryType?: string;

  /**
   * This class represents a schedule for a materialized query.
   */
  schedule?: Schedule;
}

/**
 * This class represents a schedule for a materialized query.
 */
export interface Schedule {
  /**
   * The expression of the schedule. The expression is a duration in ISO-8601 format.
   * "PT15M" -- parses as "15 minutes" (where a minute is 60 seconds) "PT10H" --
   * parses as "10 hours" (where an hour is 3600 seconds) "P2D" -- parses as "2 days"
   * (where a day is 24 hours or 86400 seconds)
   */
  expression?: string;
}

export type QueryListResponse = Array<Query>;

/**
 * Represents the result of a query.
 */
export interface QueryExecuteResponse {
  /**
   * The columns of the query result.
   */
  columns?: Array<QueryExecuteResponse.Column>;

  /**
   * The data of the query result.
   */
  data?: Array<Array<QueryExecuteResponse.Data>>;
}

export namespace QueryExecuteResponse {
  /**
   * This class represents a Column. It contains the catalog ID, catalog name, schema
   * name, table name, and column name.
   */
  export interface Column {
    /**
     * The ID of the catalog for the column.
     */
    catalogId?: string;

    /**
     * The name of the catalog for the column.
     */
    catalogName?: string;

    /**
     * The name of the column.
     */
    columnName?: string;

    /**
     * The name of the schema for the column.
     */
    schemaName?: string;

    /**
     * The name of the table for the column.
     */
    tableName?: string;
  }

  /**
   * Represents a cell value in the query result.
   */
  export interface Data {
    /**
     * The data type of the column.
     */
    dataType?: string;

    /**
     * The display name of the column.
     */
    displayName?: string;

    /**
     * The name of the column.
     */
    name?: string;

    /**
     * The order of the column in its row.
     */
    order?: number;

    /**
     * The value of the column.
     */
    value?: string;
  }
}

export interface QueryCreateParams {
  /**
   * The display name of the query.
   */
  displayName?: string;

  /**
   * The sql query.
   */
  inputQuery?: string;

  /**
   * The type of the query: PLAIN or MATERIALIZED
   *
   * Default is PLAIN.
   */
  queryType?: string;

  /**
   * This class represents a schedule for a materialized query.
   */
  schedule?: Schedule;
}

export interface QueryRetrieveParams {
  projectId: string;
}

export interface QueryUpdateParams {
  /**
   * Path param:
   */
  projectId: string;

  /**
   * Body param: The display name of the query.
   */
  displayName?: string;

  /**
   * Body param: The sql query.
   */
  inputQuery?: string;

  /**
   * Body param: The type of the query: PLAIN or MATERIALIZED
   *
   * Default is PLAIN.
   */
  queryType?: string;

  /**
   * Body param: This class represents a schedule for a materialized query.
   */
  schedule?: Schedule;
}

export interface QueryDeleteParams {
  projectId: string;
}

export interface QueryExecuteParams {
  columns?: Array<string>;

  filters?: { [key: string]: unknown };

  from?: Array<QueryExecuteParams.From>;

  limit?: number;

  offset?: number;

  orderBy?: Array<string>;
}

export namespace QueryExecuteParams {
  export interface From {
    catalogId?: string;

    catalogName?: string;

    schemaName?: string;

    tableName?: string;
  }
}

export declare namespace Queries {
  export {
    type Query as Query,
    type QueryRequest as QueryRequest,
    type Schedule as Schedule,
    type QueryListResponse as QueryListResponse,
    type QueryExecuteResponse as QueryExecuteResponse,
    type QueryCreateParams as QueryCreateParams,
    type QueryRetrieveParams as QueryRetrieveParams,
    type QueryUpdateParams as QueryUpdateParams,
    type QueryDeleteParams as QueryDeleteParams,
    type QueryExecuteParams as QueryExecuteParams,
  };
}
