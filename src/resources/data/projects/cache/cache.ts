// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as QueriesAPI from '../queries';
import * as StatusAPI from './status';
import { Status, StatusListParams } from './status';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Cache extends APIResource {
  status: StatusAPI.Status = new StatusAPI.Status(this._client);

  /**
   * Create Cache
   *
   * @example
   * ```ts
   * const cache = await client.data.projects.cache.create(
   *   'mtKDhe1U',
   *   {
   *     catalogId: '627249916703408649',
   *     schemaName: 'payment',
   *     tableName: 'customers',
   *   },
   * );
   *
   * const content = await cache.blob();
   * console.log(content);
   * ```
   */
  create(projectID: string, body: CacheCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post(path`/data/projects/${projectID}/cache`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Update Cache Settings
   *
   * @example
   * ```ts
   * const cache = await client.data.projects.cache.update(
   *   '960bd651-7b3c-4511-9a88-18e14ac7742a',
   *   { projectId: 'mtKDhe1U' },
   * );
   *
   * const content = await cache.blob();
   * console.log(content);
   * ```
   */
  update(cacheID: string, params: CacheUpdateParams, options?: RequestOptions): APIPromise<Response> {
    const { projectId, ...body } = params;
    return this._client.put(path`/data/projects/${projectId}/cache/${cacheID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Delete Cache
   *
   * @example
   * ```ts
   * await client.data.projects.cache.delete('cacheId', {
   *   projectId: 'projectId',
   * });
   * ```
   */
  delete(cacheID: string, params: CacheDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.delete(path`/data/projects/${projectId}/cache/${cacheID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create Batch Cache
   *
   * @example
   * ```ts
   * const response = await client.data.projects.cache.batch(
   *   'projectId',
   *   { body: [{}, {}, {}] },
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  batch(projectID: string, params: CacheBatchParams, options?: RequestOptions): APIPromise<Response> {
    const { body } = params;
    return this._client.post(path`/data/projects/${projectID}/cache/batch`, {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Full Refresh Cache
   *
   * @example
   * ```ts
   * const response =
   *   await client.data.projects.cache.fullRefreshUpdate(
   *     'cacheId',
   *     { projectId: 'projectId' },
   *   );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  fullRefreshUpdate(
    cacheID: string,
    params: CacheFullRefreshUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { projectId } = params;
    return this._client.post(path`/data/projects/${projectId}/cache/${cacheID}/fullRefreshUpdate`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Update Cache Incrementally
   *
   * @example
   * ```ts
   * const response =
   *   await client.data.projects.cache.incrementalUpdate(
   *     'cacheId',
   *     { projectId: 'projectId' },
   *   );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  incrementalUpdate(
    cacheID: string,
    params: CacheIncrementalUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { projectId } = params;
    return this._client.post(path`/data/projects/${projectId}/cache/${cacheID}/incrementalUpdate`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

/**
 * This class represents a request to cache data. It contains the catalog ID,
 * schema name, table name, and schedule of the cache request.
 */
export interface CacheRequest {
  /**
   * The ID of the catalog for the cache request.
   */
  catalogId?: string;

  /**
   * This class represents a schedule for a materialized query.
   */
  fullRefreshCacheSchedule?: QueriesAPI.Schedule;

  /**
   * This class represents a schedule for a materialized query.
   */
  incrementalCacheSchedule?: QueriesAPI.Schedule;

  /**
   * The name of the schema for the cache request.
   */
  schemaName?: string;

  /**
   * The name of the table for the cache request.
   */
  tableName?: string;
}

export interface CacheCreateParams {
  /**
   * The ID of the catalog for the cache request.
   */
  catalogId?: string;

  /**
   * This class represents a schedule for a materialized query.
   */
  fullRefreshCacheSchedule?: QueriesAPI.Schedule;

  /**
   * This class represents a schedule for a materialized query.
   */
  incrementalCacheSchedule?: QueriesAPI.Schedule;

  /**
   * The name of the schema for the cache request.
   */
  schemaName?: string;

  /**
   * The name of the table for the cache request.
   */
  tableName?: string;
}

export interface CacheUpdateParams {
  /**
   * Path param: Project ID
   */
  projectId: string;

  /**
   * Body param: This class represents a schedule for a materialized query.
   */
  fullRefreshCacheSchedule?: QueriesAPI.Schedule;

  /**
   * Body param: This class represents a schedule for a materialized query.
   */
  incrementalCacheSchedule?: QueriesAPI.Schedule;
}

export interface CacheDeleteParams {
  projectId: string;
}

export interface CacheBatchParams {
  body: Array<CacheRequest>;
}

export interface CacheFullRefreshUpdateParams {
  projectId: string;
}

export interface CacheIncrementalUpdateParams {
  projectId: string;
}

Cache.Status = Status;

export declare namespace Cache {
  export {
    type CacheRequest as CacheRequest,
    type CacheCreateParams as CacheCreateParams,
    type CacheUpdateParams as CacheUpdateParams,
    type CacheDeleteParams as CacheDeleteParams,
    type CacheBatchParams as CacheBatchParams,
    type CacheFullRefreshUpdateParams as CacheFullRefreshUpdateParams,
    type CacheIncrementalUpdateParams as CacheIncrementalUpdateParams,
  };

  export { Status as Status, type StatusListParams as StatusListParams };
}
