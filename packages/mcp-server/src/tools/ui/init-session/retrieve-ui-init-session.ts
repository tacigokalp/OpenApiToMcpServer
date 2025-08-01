// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'ui.init_session',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ui/initSession',
  operationId: 'initSession_1',
};

export const tool: Tool = {
  name: 'retrieve_ui_init_session',
  description: 'Init session for the user (Deprecated)',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      theme: {
        type: 'string',
      },
      themeOverride: {
        type: 'boolean',
      },
      timeoutInSeconds: {
        type: 'integer',
      },
    },
    required: ['projectId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asBinaryContentResult(await client.ui.initSession.retrieve(body));
};

export default { metadata, tool, handler };
