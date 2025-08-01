// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'data.projects.cache',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/data/projects/{projectId}/cache/{cacheId}/incrementalUpdate',
  operationId: 'incrementalUpdateCache',
};

export const tool: Tool = {
  name: 'incremental_update_projects_data_cache',
  description: 'Update Cache Incrementally',
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
  annotations: {},
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { cacheId, ...body } = args as any;
  return asBinaryContentResult(await client.data.projects.cache.incrementalUpdate(cacheId, body));
};

export default { metadata, tool, handler };
