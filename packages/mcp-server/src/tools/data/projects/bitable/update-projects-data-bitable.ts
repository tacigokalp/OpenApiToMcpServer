// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'data.projects.bitable',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/data/projects/{projectId}/bitable/{tableName}',
  operationId: 'createInternalBiTable',
};

export const tool: Tool = {
  name: 'update_projects_data_bitable',
  description: 'Create BI Table',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      tableName: {
        type: 'string',
      },
    },
    required: ['projectId', 'tableName'],
  },
  annotations: {},
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { tableName, ...body } = args as any;
  return asBinaryContentResult(await client.data.projects.bitable.update(tableName, body));
};

export default { metadata, tool, handler };
