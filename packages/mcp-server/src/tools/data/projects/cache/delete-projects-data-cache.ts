// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'data.projects.cache',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/data/projects/{projectId}/cache/{cacheId}',
  operationId: 'deleteCache',
};

export const tool: Tool = {
  name: 'delete_projects_data_cache',
  description: 'Delete Cache',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      cacheId: {
        type: 'string',
      },
    },
    required: ['projectId', 'cacheId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { cacheId, ...body } = args as any;
  const response = await client.data.projects.cache.delete(cacheId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
