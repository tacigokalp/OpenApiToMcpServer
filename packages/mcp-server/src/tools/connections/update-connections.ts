// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'connections',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/connections/{projectId}/{connectionId}',
  operationId: 'updateConnection',
};

export const tool: Tool = {
  name: 'update_connections',
  description: 'Update a connection',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      connectionId: {
        type: 'string',
      },
      connectionCallback: {
        type: 'string',
        description: 'The url to redirect to after an oauth connection is established.',
      },
      credential: {
        type: 'object',
        description:
          'Credential object for the connection.\n\nIts structure is dependent on the connection type and can be fetched by following url: /connections/config\n',
      },
      name: {
        type: 'string',
        description: 'Name of the connection given by the user',
      },
      type: {
        type: 'string',
        description:
          'Type of connection.\n \n Example: airtable for AirTable, stripe for Stripe, hubspot_access_token for HubSpot (with Access Token), etc.\n\n Exact list can be fetched by following url: /connections/config',
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
  return asBinaryContentResult(await client.connections.update(connectionId, body));
};

export default { metadata, tool, handler };
