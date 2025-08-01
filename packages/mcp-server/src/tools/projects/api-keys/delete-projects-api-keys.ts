// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'projects.api_keys',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/projects/{projectId}/apiKeys/{apiKeyId}',
  operationId: 'deleteApiKey',
};

export const tool: Tool = {
  name: 'delete_projects_api_keys',
  description: 'Delete API Key',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      apiKeyId: {
        type: 'string',
      },
    },
    required: ['projectId', 'apiKeyId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { apiKeyId, ...body } = args as any;
  const response = await client.projects.apiKeys.delete(apiKeyId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
