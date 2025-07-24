// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'openapitomcpstainless-mcp/filtering';
import { Metadata, asTextContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'connections',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/connections/{projectId}/{connectionId}',
  operationId: 'getConnection',
};

export const tool: Tool = {
  name: 'retrieve_connections',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a connection by ID\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/connection',\n  $defs: {\n    connection: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Connection ID'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the connection'\n        },\n        type: {\n          type: 'string',\n          description: 'Type of connection.\\n\\nExample: airtable for AirTable, stripe for Stripe, hubspot_access_token for HubSpot (with Access Token), etc.\\n\\nExact list can be fetched by following url: /connections/config\\n'\n        },\n        url: {\n          type: 'string',\n          description: 'Oauth callback url if the connection is Oauth based.\\n'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      connectionId: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['projectId', 'connectionId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { connectionId, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.connections.retrieve(connectionId, body)));
};

export default { metadata, tool, handler };
