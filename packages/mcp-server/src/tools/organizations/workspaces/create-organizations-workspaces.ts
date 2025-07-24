// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'openapitomcpstainless-mcp/filtering';
import { Metadata, asTextContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'organizations.workspaces',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/organizations/{organizationId}/workspaces',
  operationId: 'createWorkspace',
};

export const tool: Tool = {
  name: 'create_organizations_workspaces',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThe endpoint allows you to create a new Workspace within an Organization.\n\nA Workspace is a collaborative environment within an Organization that groups Projects together. It facilitates team collaboration, resource management, and organization of data operations.\n\nThe hierarchical structure in Peaka is:\n\n<code>Organization (top-level) → Workspace → Project</code>\n\nProjects contain data catalogs and workflows that teams manage within a Workspace.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/workspace',\n  $defs: {\n    workspace: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier of the workspace'\n        },\n        createdAt: {\n          type: 'string',\n          description: 'The date and time the workspace was created'\n        },\n        createdBy: {\n          type: 'string',\n          description: 'The unique identifier of the user who created the workspace'\n        },\n        defaultWorkspace: {\n          type: 'boolean',\n          description: 'Whether the workspace is the default workspace for the organization.\\n\\n\\n This is a backward compatibility field in order to create projects in the default workspace if the workspace is not specified.'\n        },\n        description: {\n          type: 'string',\n          description: 'Descriptive text about the workspace'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the workspace'\n        },\n        organizationId: {\n          type: 'string',\n          description: 'The unique identifier of the organization to which the workspace belongs'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      description: {
        type: 'string',
        description: 'Descriptive text about the workspace',
      },
      name: {
        type: 'string',
        description: 'The name of the workspace',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['organizationId'],
  },
  annotations: {},
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { organizationId, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.organizations.workspaces.create(organizationId, body)),
  );
};

export default { metadata, tool, handler };
