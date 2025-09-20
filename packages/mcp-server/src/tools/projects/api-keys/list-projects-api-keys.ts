// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'projects.api_keys',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/projects/{projectId}/apiKeys',
  operationId: 'listApiKeys',
};

export const tool: Tool = {
  name: 'list_projects_api_keys',
  description: 'List API Keys',
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
  return asBinaryContentResult(await client.projects.apiKeys.list(projectId));
};

export default { metadata, tool, handler };
