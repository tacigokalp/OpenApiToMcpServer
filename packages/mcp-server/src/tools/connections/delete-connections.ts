// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'connections',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/connections/{projectId}/{connectionId}',
  operationId: 'deleteConnection',
};

export const tool: Tool = {
  name: 'delete_connections',
  description: 'Delete a connection',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      connectionId: {
        type: 'string',
      },
    },
    required: ['projectId', 'connectionId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { connectionId, ...body } = args as any;
  const response = await client.connections.delete(connectionId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
