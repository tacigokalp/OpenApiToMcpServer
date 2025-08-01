// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'data.projects.table',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/data/projects/{projectId}/table/{tableName}/import',
  operationId: 'importCsv',
};

export const tool: Tool = {
  name: 'import_projects_data_table',
  description: 'Import CSV',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      tableName: {
        type: 'string',
      },
      file: {
        type: 'string',
        description: 'CSV file',
      },
      request: {
        type: 'string',
        description: 'JSON string with import config',
      },
    },
    required: ['projectId', 'tableName', 'file', 'request'],
  },
  annotations: {},
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { tableName, ...body } = args as any;
  return asBinaryContentResult(await client.data.projects.table.import(tableName, body));
};

export default { metadata, tool, handler };
