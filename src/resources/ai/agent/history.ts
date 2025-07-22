// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentAPI from './agent';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class History extends APIResource {
  /**
   * Get AI Chat History
   *
   * @example
   * ```ts
   * const chatHistoryResponse =
   *   await client.ai.agent.history.list('projectId');
   * ```
   */
  list(projectID: string, options?: RequestOptions): APIPromise<ChatHistoryResponse> {
    return this._client.get(path`/ai/${projectID}/agent/history`, options);
  }

  /**
   * Delete AI Chat History
   *
   * @example
   * ```ts
   * const chatHistoryResponse =
   *   await client.ai.agent.history.deleteThread('threadId', {
   *     projectId: 'projectId',
   *   });
   * ```
   */
  deleteThread(
    threadID: string,
    params: HistoryDeleteThreadParams,
    options?: RequestOptions,
  ): APIPromise<ChatHistoryResponse> {
    const { projectId } = params;
    return this._client.delete(path`/ai/${projectId}/agent/history/${threadID}`, options);
  }

  /**
   * Update AI Chat History Thread Name
   *
   * @example
   * ```ts
   * const chatHistoryResponse =
   *   await client.ai.agent.history.updateThreadName(
   *     'threadId',
   *     { projectId: 'projectId', name: 'Top Portfolios' },
   *   );
   * ```
   */
  updateThreadName(
    threadID: string,
    params: HistoryUpdateThreadNameParams,
    options?: RequestOptions,
  ): APIPromise<ChatHistoryResponse> {
    const { projectId, ...body } = params;
    return this._client.put(path`/ai/${projectId}/agent/history/${threadID}`, { body, ...options });
  }
}

/**
 * Represents the response containing AI chat history.
 */
export interface ChatHistoryResponse {
  /**
   * The list of AI chat history records.
   */
  history?: Array<ChatHistoryResponse.History>;
}

export namespace ChatHistoryResponse {
  /**
   * Represents the chat history associated with a project and AI thread.
   */
  export interface History {
    /**
     * The unique identifier for the AI thread.
     */
    aiThreadId?: string;

    /**
     * The display name of the chat history.
     */
    displayName?: string;

    /**
     * The unique identifier for the project.
     */
    projectId?: string;

    /**
     * The source of the chat history.
     */
    source?: string;

    /**
     * The list of tasks in the chat history.
     */
    tasks?: Array<History.Task>;
  }

  export namespace History {
    /**
     * Represents a task in the chat history, which contains steps and output.
     */
    export interface Task {
      /**
       * The message associated with the task.
       */
      message?: string;

      /**
       * The model parameters used in the task.
       */
      modelParams?: { [key: string]: unknown };

      /**
       * Represents the output of chat history, containing the query, response text, and
       * structured data related to the query results.
       */
      output?: AgentAPI.ChatHistoryOutput;

      /**
       * The list of steps in the task.
       */
      step?: Array<Task.Step>;
    }

    export namespace Task {
      /**
       * Represents a step in a chat history task, containing an action and its
       * observation.
       */
      export interface Step {
        /**
         * Represents an action taken in a chat history step.
         */
        action?: unknown;

        /**
         * The observation resulting from the action.
         */
        observation?: string;
      }
    }
  }
}

export interface HistoryDeleteThreadParams {
  projectId: string;
}

export interface HistoryUpdateThreadNameParams {
  /**
   * Path param:
   */
  projectId: string;

  /**
   * Body param: The new name for the AI chat thread.
   */
  name?: string;
}

export declare namespace History {
  export {
    type ChatHistoryResponse as ChatHistoryResponse,
    type HistoryDeleteThreadParams as HistoryDeleteThreadParams,
    type HistoryUpdateThreadNameParams as HistoryUpdateThreadNameParams,
  };
}
