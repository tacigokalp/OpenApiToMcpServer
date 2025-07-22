// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Workflow extends APIResource {
  /**
   * Get png image of current ai workflow
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.agent.workflow.retrievePng();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrievePng(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/ai-agent/workflow/png', {
      ...options,
      headers: buildHeaders([{ Accept: 'image/png' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}
