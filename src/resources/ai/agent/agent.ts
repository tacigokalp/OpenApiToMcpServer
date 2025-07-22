// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ChatAPI from './chat';
import { Chat, ChatSendMessageParams, ChatStreamMessageParams, ChatStreamMessageResponse } from './chat';
import * as HistoryAPI from './history';
import {
  ChatHistoryResponse,
  History,
  HistoryDeleteThreadParams,
  HistoryUpdateThreadNameParams,
} from './history';
import * as ThreadsAPI from './threads';
import { ThreadDeleteParams, ThreadRetrieveParams, ThreadUpdateDisplayNameParams, Threads } from './threads';
import * as WorkflowAPI from './workflow';
import { Workflow } from './workflow';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Agent extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
  workflow: WorkflowAPI.Workflow = new WorkflowAPI.Workflow(this._client);
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);
  threads: ThreadsAPI.Threads = new ThreadsAPI.Threads(this._client);

  /**
   * Ask Question To AI Agent
   *
   * @example
   * ```ts
   * const response = await client.ai.agent.askQuestion(
   *   'projectId',
   *   {
   *     message:
   *       'What are the top 3 portfolios ranked by their total market value as of the most recent date recorded?',
   *   },
   * );
   * ```
   */
  askQuestion(
    projectID: string,
    body: AgentAskQuestionParams,
    options?: RequestOptions,
  ): APIPromise<AgentAskQuestionResponse> {
    return this._client.post(path`/ai/${projectID}/agent`, { body, ...options });
  }
}

/**
 * Represents the output of chat history, containing the query, response text, and
 * structured data related to the query results.
 */
export interface ChatHistoryOutput {
  /**
   * The structured data representing the chat history query results.
   */
  data?: Array<Array<ChatHistoryOutput.Data>>;

  /**
   * The query string that was used in the chat.
   */
  query?: string;

  /**
   * The text response associated with the chat history.
   */
  text?: string;
}

export namespace ChatHistoryOutput {
  /**
   * Represents a single data entry in a chat history query result.
   */
  export interface Data {
    /**
     * The data type of the value.
     */
    dataType?: string;

    /**
     * The name associated with the query data.
     */
    name?: string;

    /**
     * The order of the data entry within the query results.
     */
    order?: number;

    /**
     * The value of the data entry.
     */
    value?: unknown;
  }
}

export interface AgentAskQuestionResponse {
  /**
   * Represents the output of chat history, containing the query, response text, and
   * structured data related to the query results.
   */
  output?: ChatHistoryOutput;

  /**
   * The thread ID associated with the AI chat thread. Can be used to track
   * conversations within the same thread.
   */
  threadId?: string;
}

export interface AgentAskQuestionParams {
  /**
   * The message content of the AI agent task request.
   */
  message?: string;

  /**
   * An optional source tag to categorize or tag the chat history.
   */
  source?: string;

  /**
   * The optional thread ID associated with the AI chat thread. Can be used to track
   * conversations within the same thread.
   */
  threadId?: string;
}

Agent.History = History;
Agent.Workflow = Workflow;
Agent.Chat = Chat;
Agent.Threads = Threads;

export declare namespace Agent {
  export {
    type ChatHistoryOutput as ChatHistoryOutput,
    type AgentAskQuestionResponse as AgentAskQuestionResponse,
    type AgentAskQuestionParams as AgentAskQuestionParams,
  };

  export {
    History as History,
    type ChatHistoryResponse as ChatHistoryResponse,
    type HistoryDeleteThreadParams as HistoryDeleteThreadParams,
    type HistoryUpdateThreadNameParams as HistoryUpdateThreadNameParams,
  };

  export { Workflow as Workflow };

  export {
    Chat as Chat,
    type ChatStreamMessageResponse as ChatStreamMessageResponse,
    type ChatSendMessageParams as ChatSendMessageParams,
    type ChatStreamMessageParams as ChatStreamMessageParams,
  };

  export {
    Threads as Threads,
    type ThreadRetrieveParams as ThreadRetrieveParams,
    type ThreadDeleteParams as ThreadDeleteParams,
    type ThreadUpdateDisplayNameParams as ThreadUpdateDisplayNameParams,
  };
}
