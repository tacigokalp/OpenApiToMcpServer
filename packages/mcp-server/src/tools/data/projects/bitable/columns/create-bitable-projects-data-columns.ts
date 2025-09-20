// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'data.projects.bitable.columns',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/data/projects/{projectId}/bitable/{tableName}/columns',
  operationId: 'addBiColumn',
};

export const tool: Tool = {
  name: 'create_bitable_projects_data_columns',
  description: 'Add BI Column',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      tableName: {
        type: 'string',
      },
      dataType: {
        type: 'string',
        description: 'The data type of the column.',
      },
      defaultValue: {
        type: 'string',
        description: 'The default value of the column.',
      },
      displayName: {
        type: 'string',
        description: 'The display name of the column.',
      },
      isNotNull: {
        type: 'boolean',
        description: 'The not null flag for the column.',
      },
      isUnique: {
        type: 'boolean',
        description: 'The unique flag for the column.',
      },
      name: {
        type: 'string',
        description: 'The name of the column.',
      },
    },
    required: ['projectId', 'tableName'],
  },
  annotations: {},
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { tableName, ...body } = args as any;
  return asBinaryContentResult(await client.data.projects.bitable.columns.create(tableName, body));
};

export default { metadata, tool, handler };
