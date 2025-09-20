// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'metadata',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/metadata/{projectId}/semantics/{catalogId}/{schemaName}/{tableName}',
  operationId: 'generateSemantics',
};

export const tool: Tool = {
  name: 'generate_semantics_metadata',
  description: 'Generate semantics for the table',
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
      initialPrompt: {
        type: 'string',
      },
      limit: {
        type: 'integer',
      },
      threadId: {
        type: 'string',
      },
    },
    required: ['projectId', 'catalogId', 'schemaName', 'tableName'],
  },
  annotations: {},
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { tableName, ...body } = args as any;
  return asBinaryContentResult(await client.metadata.generateSemantics(tableName, body));
};

export default { metadata, tool, handler };
