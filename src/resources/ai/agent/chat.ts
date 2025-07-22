// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { Stream } from '../../../core/streaming';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Chat extends APIResource {
  /**
   * Chat with agent
   *
   * @example
   * ```ts
   * const response = await client.ai.agent.chat.sendMessage(
   *   'projectId',
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  sendMessage(
    projectID: string,
    body: ChatSendMessageParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.post(path`/ai-agent/${projectID}/chat`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Chat with agent via stream
   *
   * @example
   * ```ts
   * const response = await client.ai.agent.chat.streamMessage(
   *   'projectId',
   * );
   * ```
   */
  streamMessage(
    projectID: string,
    body: ChatStreamMessageParams,
    options?: RequestOptions,
  ): APIPromise<Stream<ChatStreamMessageResponse>> {
    return this._client.post(path`/ai-agent/${projectID}/chat/stream`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    }) as APIPromise<Stream<ChatStreamMessageResponse>>;
  }
}

export type ChatStreamMessageResponse = Array<unknown>;

export interface ChatSendMessageParams {
  message?: string;

  noExecute?: boolean;

  threadId?: string;
}

export interface ChatStreamMessageParams {
  message?: string;

  noExecute?: boolean;

  streamModes?: Array<string>;

  threadId?: string;
}

export declare namespace Chat {
  export {
    type ChatStreamMessageResponse as ChatStreamMessageResponse,
    type ChatSendMessageParams as ChatSendMessageParams,
    type ChatStreamMessageParams as ChatStreamMessageParams,
  };
}
