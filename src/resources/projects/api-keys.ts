// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class APIKeys extends APIResource {
  /**
   * Create API Key
   *
   * @example
   * ```ts
   * const apiKey = await client.projects.apiKeys.create(
   *   'mtKDhe1U',
   *   { name: 'test' },
   * );
   * ```
   */
  create(
    projectID: string,
    body: APIKeyCreateParams,
    options?: RequestOptions,
  ): APIPromise<APIKeyCreateResponse> {
    return this._client.post(path`/projects/${projectID}/apiKeys`, { body, ...options });
  }

  /**
   * List API Keys
   *
   * @example
   * ```ts
   * const apiKeys = await client.projects.apiKeys.list(
   *   'mtKDhe1U',
   * );
   *
   * const content = await apiKeys.blob();
   * console.log(content);
   * ```
   */
  list(projectID: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/projects/${projectID}/apiKeys`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Delete API Key
   *
   * @example
   * ```ts
   * await client.projects.apiKeys.delete(
   *   '21fd1a8d-88d5-4295-b792-5b2113138057',
   *   { projectId: 'mtKDhe1U' },
   * );
   * ```
   */
  delete(apiKeyID: string, params: APIKeyDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.delete(path`/projects/${projectId}/apiKeys/${apiKeyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Represents an API key.
 */
export interface APIKeyCreateResponse {
  /**
   * API key. It is a secret and should not be shared. Please store it securely. You
   * will not be able to see it again.
   */
  apiKey?: string;

  /**
   * ID of the API key
   */
  apiKeyId?: string;

  /**
   * Name of the API key
   */
  name?: string;
}

export interface APIKeyCreateParams {
  /**
   * Name of the API key
   */
  name?: string;
}

export interface APIKeyDeleteParams {
  /**
   * Project ID
   */
  projectId: string;
}

export declare namespace APIKeys {
  export {
    type APIKeyCreateResponse as APIKeyCreateResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyDeleteParams as APIKeyDeleteParams,
  };
}
