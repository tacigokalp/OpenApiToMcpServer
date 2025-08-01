// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'data.projects.cache.status',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/projects/{projectId}/cache/{cacheId}/status',
  operationId: 'getCacheStatus',
};

export const tool: Tool = {
  name: 'list_cache_projects_data_status',
  description: 'Get Cache Status',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      cacheId: {
        type: 'string',
      },
      excludeLogs: {
        type: 'boolean',
        description: 'Exclude Logs',
      },
    },
    required: ['projectId', 'cacheId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { cacheId, ...body } = args as any;
  return asBinaryContentResult(await client.data.projects.cache.status.list(cacheId, body));
};

export default { metadata, tool, handler };
