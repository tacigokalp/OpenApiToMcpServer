// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'data.projects.semantic_catalogs',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/data/projects/{projectId}/semantic-catalogs/{catalogId}/table/{tableId}',
  operationId: 'deleteSemanticTable',
};

export const tool: Tool = {
  name: 'delete_projects_data_semantic_catalogs',
  description: 'Delete a semantic table',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      catalogId: {
        type: 'string',
      },
      tableId: {
        type: 'string',
      },
    },
    required: ['projectId', 'catalogId', 'tableId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { tableId, ...body } = args as any;
  const response = await client.data.projects.semanticCatalogs.delete(tableId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
