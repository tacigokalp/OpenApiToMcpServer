// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'data.projects.bitable.columns',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/data/projects/{projectId}/bitable/{tableName}/columns/{columnName}',
  operationId: 'deleteBiColumn',
};

export const tool: Tool = {
  name: 'delete_bitable_projects_data_columns',
  description: 'Delete BI Column',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      tableName: {
        type: 'string',
      },
      columnName: {
        type: 'string',
      },
    },
    required: ['projectId', 'tableName', 'columnName'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { columnName, ...body } = args as any;
  const response = await client.data.projects.bitable.columns.delete(columnName, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
