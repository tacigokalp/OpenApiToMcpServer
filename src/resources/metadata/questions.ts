// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Questions extends APIResource {
  /**
   * Generate sample ai questions for the project
   */
  generate(projectID: string, query: QuestionGenerateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/metadata/${projectID}/questions/generate`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface QuestionGenerateParams {
  question: string;
}

export declare namespace Questions {
  export { type QuestionGenerateParams as QuestionGenerateParams };
}
