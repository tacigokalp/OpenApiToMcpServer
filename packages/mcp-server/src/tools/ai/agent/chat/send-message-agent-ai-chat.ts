// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'ai.agent.chat',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ai-agent/{projectId}/chat',
  operationId: 'chat',
};

export const tool: Tool = {
  name: 'send_message_agent_ai_chat',
  description: 'Chat with agent',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      message: {
        type: 'string',
      },
      noExecute: {
        type: 'boolean',
      },
      threadId: {
        type: 'string',
      },
    },
    required: ['projectId'],
  },
  annotations: {},
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { projectId, ...body } = args as any;
  return asBinaryContentResult(await client.ai.agent.chat.sendMessage(projectId, body));
};

export default { metadata, tool, handler };
