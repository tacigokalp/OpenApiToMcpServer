// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'projects',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/projects/{projectId}',
  operationId: 'deleteProject',
};

export const tool: Tool = {
  name: 'delete_projects',
  description: 'Delete Project',
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
    idempotentHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { projectId, ...body } = args as any;
  const response = await client.projects.delete(projectId).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
