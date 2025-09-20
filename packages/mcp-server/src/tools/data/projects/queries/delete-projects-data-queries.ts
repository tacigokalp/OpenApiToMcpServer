// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'data.projects.queries',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/data/projects/{projectId}/queries/{queryId}',
  operationId: 'deleteQuery',
};

export const tool: Tool = {
  name: 'delete_projects_data_queries',
  description: 'Delete Query',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      queryId: {
        type: 'string',
      },
    },
    required: ['projectId', 'queryId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { queryId, ...body } = args as any;
  const response = await client.data.projects.queries.delete(queryId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
