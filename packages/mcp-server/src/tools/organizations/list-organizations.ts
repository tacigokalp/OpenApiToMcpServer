// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'openapitomcpstainless-mcp/filtering';
import { Metadata, asTextContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'organizations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/organizations',
  operationId: 'listOrganizations',
};

export const tool: Tool = {
  name: 'list_organizations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves all the organizations accessible by the authenticated user.\n\nAn Organization is the highest-level resource that can contain multiple Workspaces.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string',\n      description: 'The unique identifier of the organization'\n    },\n    createdAt: {\n      type: 'string',\n      description: 'The date and time the organization was created'\n    },\n    description: {\n      type: 'string',\n      description: 'Descriptive text about the organization'\n    },\n    iconFileId: {\n      type: 'string',\n      description: 'The identifier of the file that contains the icon of the organization'\n    },\n    name: {\n      type: 'string',\n      description: 'The name of the organization'\n    },\n    owner: {\n      type: 'string',\n      description: 'The unique identifier of the user who created the organization'\n    }\n  }\n}\n```",
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.organizations.list()));
};

export default { metadata, tool, handler };
