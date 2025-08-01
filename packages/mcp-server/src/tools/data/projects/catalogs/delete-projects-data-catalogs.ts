// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'data.projects.catalogs',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/data/projects/{projectId}/catalogs/{catalogId}',
  operationId: 'deleteCatalog',
};

export const tool: Tool = {
  name: 'delete_projects_data_catalogs',
  description: 'Delete Catalog',
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
    idempotentHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { catalogId, ...body } = args as any;
  const response = await client.data.projects.catalogs.delete(catalogId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
