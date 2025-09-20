// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'supported_drivers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/supportedDrivers',
  operationId: 'getSupportedDrivers',
};

export const tool: Tool = {
  name: 'list_supported_drivers',
  description: 'List Supported Drivers',
  inputSchema: {
    type: 'object',
    properties: {
      catalogName: {
        type: 'string',
        description:
          'Catalog name. \n\nDrivers such as sql_alchemy supports only one catalog at a time. So specific catalog name must be provided in order to use.',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asBinaryContentResult(await client.supportedDrivers.list(body));
};

export default { metadata, tool, handler };
