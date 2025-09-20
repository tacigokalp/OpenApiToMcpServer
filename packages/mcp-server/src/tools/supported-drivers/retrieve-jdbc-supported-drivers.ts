// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'supported_drivers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/supportedDrivers/jdbc',
  operationId: 'getJdbcDriver',
};

export const tool: Tool = {
  name: 'retrieve_jdbc_supported_drivers',
  description: 'Get JDBC Driver',
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
  return asBinaryContentResult(await client.supportedDrivers.retrieveJdbc());
};

export default { metadata, tool, handler };
