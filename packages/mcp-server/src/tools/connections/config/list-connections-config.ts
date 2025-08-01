// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'connections.config',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/connections/config',
  operationId: 'listConnectionConfig',
};

export const tool: Tool = {
  name: 'list_connections_config',
  description:
    'List all connection configurations.\nThis will return a list of all connection configurations available in the system.',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  return asBinaryContentResult(await client.connections.config.list());
};

export default { metadata, tool, handler };
