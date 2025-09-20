// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'metadata',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/metadata/{projectId}/query',
  operationId: 'queryMetadata',
};

export const tool: Tool = {
  name: 'query_metadata',
  description: 'Semantic query metadata for the project.',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      table: {
        type: 'string',
      },
    },
    required: ['projectId', 'table'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { projectId, ...body } = args as any;
  return asBinaryContentResult(await client.metadata.query(projectId, body));
};

export default { metadata, tool, handler };
