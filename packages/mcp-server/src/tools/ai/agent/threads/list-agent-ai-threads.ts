// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'ai.agent.threads',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ai-agent/{projectId}/threads',
  operationId: 'listThreads',
};

export const tool: Tool = {
  name: 'list_agent_ai_threads',
  description: 'List ai-agent threads',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
    },
    required: ['projectId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { projectId, ...body } = args as any;
  return asBinaryContentResult(await client.ai.agent.threads.list(projectId));
};

export default { metadata, tool, handler };
