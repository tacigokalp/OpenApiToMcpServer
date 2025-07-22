// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'openapitomcpstainless-mcp/filtering';
import { Metadata, asTextContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'projects.api_keys',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/projects/{projectId}/apiKeys',
  operationId: 'createApiKey',
};

export const tool: Tool = {
  name: 'create_projects_api_keys',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate API Key\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Represents an API key.',\n  properties: {\n    apiKey: {\n      type: 'string',\n      description: 'API key. It is a secret and should not be shared. Please store it securely. You will not be able to see it again.'\n    },\n    apiKeyId: {\n      type: 'string',\n      description: 'ID of the API key'\n    },\n    name: {\n      type: 'string',\n      description: 'Name of the API key'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      name: {
        type: 'string',
        description: 'Name of the API key',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['projectId'],
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { projectId, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.projects.apiKeys.create(projectId, body)));
};

export default { metadata, tool, handler };
