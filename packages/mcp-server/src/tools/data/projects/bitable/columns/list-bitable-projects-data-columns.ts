// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'data.projects.bitable.columns',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/projects/{projectId}/bitable/{tableName}/columns',
  operationId: 'listBiColumns',
};

export const tool: Tool = {
  name: 'list_bitable_projects_data_columns',
  description: 'See Data -- Catalog / List Columns for more details.',
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { tableName, ...body } = args as any;
  return asBinaryContentResult(await client.data.projects.bitable.columns.list(tableName, body));
};

export default { metadata, tool, handler };
