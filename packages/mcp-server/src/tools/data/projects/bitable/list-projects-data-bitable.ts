// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'data.projects.bitable',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/projects/{projectId}/bitable',
  operationId: 'listBiTables',
};

export const tool: Tool = {
  name: 'list_projects_data_bitable',
  description: 'See Data -- Catalog / List Tables for more details.',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
    },
    required: ['projectId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { projectId, ...body } = args as any;
  return asBinaryContentResult(await client.data.projects.bitable.list(projectId));
};

export default { metadata, tool, handler };
