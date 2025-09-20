// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'connections.config',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/connections/config/{connectionType}',
  operationId: 'getConnectionConfig',
};

export const tool: Tool = {
  name: 'retrieve_connections_config',
  description: 'Get Connection Config',
  inputSchema: {
    type: 'object',
    properties: {
      connectionType: {
        type: 'string',
      },
    },
    required: ['connectionType'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { connectionType, ...body } = args as any;
  return asBinaryContentResult(await client.connections.config.retrieve(connectionType));
};

export default { metadata, tool, handler };
