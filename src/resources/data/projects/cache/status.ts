// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Status extends APIResource {
  /**
   * Get Cache Status
   *
   * @example
   * ```ts
   * const statuses =
   *   await client.data.projects.cache.status.list(
   *     '960bd651-7b3c-4511-9a88-18e14ac7742a',
   *     { projectId: 'mtKDhe1U' },
   *   );
   *
   * const content = await statuses.blob();
   * console.log(content);
   * ```
   */
  list(cacheID: string, params: StatusListParams, options?: RequestOptions): APIPromise<Response> {
    const { projectId, ...query } = params;
    return this._client.get(path`/data/projects/${projectId}/cache/${cacheID}/status`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface StatusListParams {
  /**
   * Path param: Project ID
   */
  projectId: string;

  /**
   * Query param: Exclude Logs
   */
  excludeLogs?: boolean;
}

export declare namespace Status {
  export { type StatusListParams as StatusListParams };
}
