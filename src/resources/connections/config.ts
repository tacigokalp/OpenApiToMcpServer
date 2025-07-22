// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Config extends APIResource {
  /**
   * Get Connection Config
   *
   * @example
   * ```ts
   * const config = await client.connections.config.retrieve(
   *   'hubspot',
   * );
   *
   * const content = await config.blob();
   * console.log(content);
   * ```
   */
  retrieve(connectionType: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/connections/config/${connectionType}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * List all connection configurations. This will return a list of all connection
   * configurations available in the system.
   *
   * @example
   * ```ts
   * const configs = await client.connections.config.list();
   *
   * const content = await configs.blob();
   * console.log(content);
   * ```
   */
  list(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/connections/config', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}
