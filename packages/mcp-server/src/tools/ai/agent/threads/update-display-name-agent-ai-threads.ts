// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'ai.agent.threads',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/ai-agent/{projectId}/threads/{threadId}',
  operationId: 'updateThread',
};

export const tool: Tool = {
  name: 'update_display_name_agent_ai_threads',
  description: 'Update ai-agent thread display name',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      threadId: {
        type: 'string',
      },
      displayName: {
        type: 'string',
        description: 'The new name for the AI chat thread.',
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
  return asBinaryContentResult(await client.ai.agent.threads.updateDisplayName(threadId, body));
};

export default { metadata, tool, handler };
