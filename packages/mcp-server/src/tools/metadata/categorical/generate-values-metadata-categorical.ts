// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'metadata.categorical',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/metadata/{projectId}/categorical/{catalogId}/{schemaName}/{tableName}/{columnName}',
  operationId: 'generateCategoricalColumnValues',
};

export const tool: Tool = {
  name: 'generate_values_metadata_categorical',
  description: 'Generate categorical values from the column.',
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
      tableName: {
        type: 'string',
      },
      columnName: {
        type: 'string',
      },
      frequency: {
        type: 'string',
      },
      limit: {
        type: 'integer',
      },
    },
    required: ['projectId', 'catalogId', 'schemaName', 'tableName', 'columnName'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { columnName, ...body } = args as any;
  return asBinaryContentResult(await client.metadata.categorical.generateValues(columnName, body));
};

export default { metadata, tool, handler };
