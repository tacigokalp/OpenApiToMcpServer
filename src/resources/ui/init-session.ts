// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class InitSession extends APIResource {
  /**
   * Init session for the user
   *
   * @example
   * ```ts
   * const initSession = await client.ui.initSession.create({
   *   featureFlags: { feature1: true, feature2: false },
   *   projectId: 'projectId',
   *   theme: 'dark',
   *   themeOverride: true,
   *   timeoutInSeconds: 300,
   * });
   *
   * const content = await initSession.blob();
   * console.log(content);
   * ```
   */
  create(body: InitSessionCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/ui/initSession', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Init session for the user (Deprecated)
   *
   * @deprecated
   */
  retrieve(query: InitSessionRetrieveParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/ui/initSession', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface InitSessionCreateParams {
  /**
   * A map of feature flags, where the key is the feature name and the value
   * indicates if it is enabled. Defined feature flags are:
   *
   * - createDataInPeaka : Flag indicating whether the user can create data in Peaka.
   * - queries : Flag indicating whether the user can use query functions.
   */
  featureFlags?: { [key: string]: boolean };

  /**
   * The project ID.
   */
  projectId?: string;

  /**
   * The theme to be used.
   */
  theme?: string;

  /**
   * Flag indicating whether the theme should be overridden.
   */
  themeOverride?: boolean;

  /**
   * The timeout duration in seconds.
   */
  timeoutInSeconds?: number;
}

export interface InitSessionRetrieveParams {
  projectId: string;

  theme?: string;

  themeOverride?: boolean;

  timeoutInSeconds?: number;
}

export declare namespace InitSession {
  export {
    type InitSessionCreateParams as InitSessionCreateParams,
    type InitSessionRetrieveParams as InitSessionRetrieveParams,
  };
}
