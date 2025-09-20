// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'data.projects.catalogs.cache',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/projects/{projectId}/catalog/{catalogId}/cache/status',
  operationId: 'getCacheStatusByCatalog',
};

export const tool: Tool = {
  name: 'retrieve_status_catalogs_projects_data_cache',
  description: 'Get All Cache Statuses of a Catalog',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      catalogId: {
        type: 'string',
      },
    },
    required: ['projectId', 'catalogId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { catalogId, ...body } = args as any;
  return asBinaryContentResult(await client.data.projects.catalogs.cache.retrieveStatus(catalogId, body));
};

export default { metadata, tool, handler };
