// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Cache extends APIResource {
  /**
   * Get All Cache Statuses of a Catalog
   *
   * @example
   * ```ts
   * const response =
   *   await client.data.projects.catalogs.cache.retrieveStatus(
   *     'catalogId',
   *     { projectId: 'mtKDhe1U' },
   *   );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrieveStatus(
    catalogID: string,
    params: CacheRetrieveStatusParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { projectId } = params;
    return this._client.get(path`/data/projects/${projectId}/catalog/${catalogID}/cache/status`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface CacheRetrieveStatusParams {
  /**
   * Project ID
   */
  projectId: string;
}

export declare namespace Cache {
  export { type CacheRetrieveStatusParams as CacheRetrieveStatusParams };
}
