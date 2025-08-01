// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'ai.agent.threads',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/ai-agent/{projectId}/threads/{threadId}',
  operationId: 'deleteThread',
};

export const tool: Tool = {
  name: 'delete_agent_ai_threads',
  description: 'Delete ai-agent thread',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      threadId: {
        type: 'string',
      },
    },
    required: ['projectId', 'threadId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { threadId, ...body } = args as any;
  return asBinaryContentResult(await client.ai.agent.threads.delete(threadId, body));
};

export default { metadata, tool, handler };
