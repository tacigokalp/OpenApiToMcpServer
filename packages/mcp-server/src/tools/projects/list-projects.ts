// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'openapitomcpstainless-mcp/filtering';
import { Metadata, asTextContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'projects',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/projects',
  operationId: 'listProjects',
};

export const tool: Tool = {
  name: 'list_projects',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Projects\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/project'\n  },\n  $defs: {\n    project: {\n      type: 'object',\n      description: 'Project',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Project ID'\n        },\n        createdAt: {\n          type: 'string',\n          description: 'The date and time the project was created'\n        },\n        description: {\n          type: 'string',\n          description: 'Descriptive text about the project'\n        },\n        domain: {\n          type: 'string',\n          description: 'Domain of the project'\n        },\n        name: {\n          type: 'string',\n          description: 'Project name'\n        },\n        owner: {\n          type: 'string',\n          description: 'The owner of the project'\n        },\n        webhookBaseUrl: {\n          type: 'string',\n          description: 'Webhook base URL'\n        },\n        workspaceId: {\n          type: 'string',\n          description: 'The workspace to which the project belongs'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await maybeFilter(args, await client.projects.list()));
};

export default { metadata, tool, handler };
