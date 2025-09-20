// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'sql',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sql/transpile/{dialect}',
  operationId: 'transpileSQL',
};

export const tool: Tool = {
  name: 'transpile_sql',
  description: 'Transpile a sql query into given dialect',
  inputSchema: {
    type: 'object',
    properties: {
      dialect: {
        type: 'string',
      },
      query: {
        type: 'string',
      },
    },
    required: ['dialect'],
  },
  annotations: {},
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { dialect, ...body } = args as any;
  return asBinaryContentResult(await client.sql.transpile(dialect, body));
};

export default { metadata, tool, handler };
