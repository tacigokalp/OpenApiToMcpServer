// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentAPI from './agent/agent';
import { Agent, AgentAskQuestionParams, AgentAskQuestionResponse, ChatHistoryOutput } from './agent/agent';

export class AI extends APIResource {
  agent: AgentAPI.Agent = new AgentAPI.Agent(this._client);
}

AI.Agent = Agent;

export declare namespace AI {
  export {
    Agent as Agent,
    type ChatHistoryOutput as ChatHistoryOutput,
    type AgentAskQuestionResponse as AgentAskQuestionResponse,
    type AgentAskQuestionParams as AgentAskQuestionParams,
  };
}
