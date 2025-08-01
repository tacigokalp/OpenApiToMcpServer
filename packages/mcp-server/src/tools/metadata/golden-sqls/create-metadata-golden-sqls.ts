// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'metadata.golden_sqls',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/metadata/{projectId}/golden-sqls',
  operationId: 'addGoldenSql',
};

export const tool: Tool = {
  name: 'create_metadata_golden_sqls',
  description: 'Create golden sql for the project',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      prompt: {
        type: 'string',
      },
      sql: {
        type: 'string',
      },
    },
    required: ['projectId'],
  },
  annotations: {},
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { projectId, ...body } = args as any;
  return asBinaryContentResult(await client.metadata.goldenSqls.create(projectId, body));
};

export default { metadata, tool, handler };
