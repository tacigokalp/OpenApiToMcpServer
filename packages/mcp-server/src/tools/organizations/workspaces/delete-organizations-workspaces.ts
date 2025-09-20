// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'organizations.workspaces',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/organizations/{organizationId}/workspaces/{workspaceId}',
  operationId: 'deleteWorkspace',
};

export const tool: Tool = {
  name: 'delete_organizations_workspaces',
  description:
    'Deletes a specified Workspace within an Organization.\n\nA Workspace is a collaborative environment that groups Projects to facilitate team collaboration and resource management.\n\nThe hierarchical structure in Peaka is:\n\n<code>Organization (top-level) → Workspace → Project</code>\n',
  inputSchema: {
    type: 'object',
    properties: {
      organizationId: {
        type: 'string',
      },
      workspaceId: {
        type: 'string',
      },
    },
    required: ['organizationId', 'workspaceId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { workspaceId, ...body } = args as any;
  const response = await client.organizations.workspaces.delete(workspaceId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
