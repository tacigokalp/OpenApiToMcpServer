// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'organizations.workspaces.projects',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/organizations/{organizationId}/workspaces/{workspaceId}/projects/{projectId}',
  operationId: 'deleteProject_1',
};

export const tool: Tool = {
  name: 'delete_workspaces_organizations_projects',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete Project\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      workspaceId: {
        type: 'string',
      },
      projectId: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['organizationId', 'workspaceId', 'projectId'],
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { projectId, ...body } = args as any;
  const response = await client.organizations.workspaces.projects.delete(projectId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
