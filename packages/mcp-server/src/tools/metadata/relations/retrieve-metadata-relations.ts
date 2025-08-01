// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'metadata.relations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/metadata/{projectId}/relations/{catalogId}',
  operationId: 'getProjectCatalogMetadataRelations',
};

export const tool: Tool = {
  name: 'retrieve_metadata_relations',
  description: 'Get Project Catalog Metadata Relations',
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
  return asBinaryContentResult(await client.metadata.relations.retrieve(catalogId, body));
};

export default { metadata, tool, handler };
