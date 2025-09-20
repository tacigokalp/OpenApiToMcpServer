// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'metadata',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/metadata/{projectId}/{catalogId}/{schemaName}',
  operationId: 'updateMetadataWithCatalogIdAndSchemaName',
};

export const tool: Tool = {
  name: 'update_schema_metadata',
  description: 'Update Metadata ai usage per schema level',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      catalogId: {
        type: 'string',
      },
      schemaName: {
        type: 'string',
      },
      useWithAI: {
        type: 'boolean',
      },
    },
    required: ['projectId', 'catalogId', 'schemaName'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { schemaName, ...body } = args as any;
  return asBinaryContentResult(await client.metadata.updateSchema(schemaName, body));
};

export default { metadata, tool, handler };
