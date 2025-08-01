// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'metadata.golden_sqls',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/metadata/{projectId}/golden-sqls/{id}',
  operationId: 'deleteGoldenSql',
};

export const tool: Tool = {
  name: 'delete_metadata_golden_sqls',
  description: 'Delete golden sql from the project.',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
    },
    required: ['projectId', 'id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asBinaryContentResult(await client.metadata.goldenSqls.delete(id, body));
};

export default { metadata, tool, handler };
