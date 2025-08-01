// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'supported_drivers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/supportedDrivers/sql_alchemy',
  operationId: 'getSqlAlchemyDriver',
};

export const tool: Tool = {
  name: 'retrieve_sql_alchemy_supported_drivers',
  description: 'Get SQL Alchemy Driver',
  inputSchema: {
    type: 'object',
    properties: {
      catalogName: {
        type: 'string',
        description:
          'Catalog name. \n\nDrivers such as sql_alchemy supports only one catalog at a time. So specific catalog name must be provided in order to use. ',
      },
    },
    required: ['catalogName'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asBinaryContentResult(await client.supportedDrivers.retrieveSqlAlchemy(body));
};

export default { metadata, tool, handler };
