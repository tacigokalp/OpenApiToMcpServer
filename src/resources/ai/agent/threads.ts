// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Threads extends APIResource {
  /**
   * Get ai-agent thread
   *
   * @example
   * ```ts
   * const thread = await client.ai.agent.threads.retrieve(
   *   'threadId',
   *   { projectId: 'projectId' },
   * );
   *
   * const content = await thread.blob();
   * console.log(content);
   * ```
   */
  retrieve(threadID: string, params: ThreadRetrieveParams, options?: RequestOptions): APIPromise<Response> {
    const { projectId } = params;
    return this._client.get(path`/ai-agent/${projectId}/threads/${threadID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * List ai-agent threads
   *
   * @example
   * ```ts
   * const threads = await client.ai.agent.threads.list(
   *   'projectId',
   * );
   *
   * const content = await threads.blob();
   * console.log(content);
   * ```
   */
  list(projectID: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/ai-agent/${projectID}/threads`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Delete ai-agent thread
   *
   * @example
   * ```ts
   * const thread = await client.ai.agent.threads.delete(
   *   'threadId',
   *   { projectId: 'projectId' },
   * );
   *
   * const content = await thread.blob();
   * console.log(content);
   * ```
   */
  delete(threadID: string, params: ThreadDeleteParams, options?: RequestOptions): APIPromise<Response> {
    const { projectId } = params;
    return this._client.delete(path`/ai-agent/${projectId}/threads/${threadID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Update ai-agent thread display name
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.agent.threads.updateDisplayName(
   *     'threadId',
   *     { projectId: 'projectId' },
   *   );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  updateDisplayName(
    threadID: string,
    params: ThreadUpdateDisplayNameParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { projectId, ...body } = params;
    return this._client.put(path`/ai-agent/${projectId}/threads/${threadID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface ThreadRetrieveParams {
  projectId: string;
}

export interface ThreadDeleteParams {
  projectId: string;
}

export interface ThreadUpdateDisplayNameParams {
  /**
   * Path param:
   */
  projectId: string;

  /**
   * Body param: The new name for the AI chat thread.
   */
  displayName?: string;
}

export declare namespace Threads {
  export {
    type ThreadRetrieveParams as ThreadRetrieveParams,
    type ThreadDeleteParams as ThreadDeleteParams,
    type ThreadUpdateDisplayNameParams as ThreadUpdateDisplayNameParams,
  };
}
