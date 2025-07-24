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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nInit session for the user\n\n# Response Schema\n```json\n{\n  type: 'string'\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      featureFlags: {
        type: 'object',
        description:
          'A map of feature flags, where the key is the feature name and the value indicates if it is enabled.\n Defined feature flags are:\n  - createDataInPeaka : Flag indicating whether the user can create data in Peaka.\n  - queries : Flag indicating whether the user can use query functions.',
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
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
