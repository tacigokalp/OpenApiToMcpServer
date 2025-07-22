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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet SQL Alchemy Driver\n\n# Response Schema\n```json\n{\n  type: 'string'\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      catalogName: {
        type: 'string',
        description:
          'Catalog name. \n\nDrivers such as sql_alchemy supports only one catalog at a time. So specific catalog name must be provided in order to use. ',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['catalogName'],
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asBinaryContentResult(await client.supportedDrivers.retrieveSqlAlchemy(body));
};

export default { metadata, tool, handler };
