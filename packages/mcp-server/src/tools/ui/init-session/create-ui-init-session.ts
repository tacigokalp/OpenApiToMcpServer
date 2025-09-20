// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'ui.init_session',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ui/initSession',
  operationId: 'initSession',
};

export const tool: Tool = {
  name: 'create_ui_init_session',
  description: 'Init session for the user',
  inputSchema: {
    type: 'object',
    properties: {
      featureFlags: {
        type: 'object',
        description:
          'A map of feature flags, where the key is the feature name and the value indicates if it is enabled.\n Defined feature flags are:\n  - createDataInPeaka : Flag indicating whether the user can create data in Peaka.\n  - queries : Flag indicating whether the user can use query functions.',
        additionalProperties: true,
      },
      projectId: {
        type: 'string',
        description: 'The project ID.',
      },
      theme: {
        type: 'string',
        description: 'The theme to be used.',
      },
      themeOverride: {
        type: 'boolean',
        description: 'Flag indicating whether the theme should be overridden.',
      },
      timeoutInSeconds: {
        type: 'integer',
        description: 'The timeout duration in seconds.',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asBinaryContentResult(await client.ui.initSession.create(body));
};

export default { metadata, tool, handler };
