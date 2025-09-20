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
  description: 'Delete Project',
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
    },
    required: ['organizationId', 'workspaceId', 'projectId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { projectId, ...body } = args as any;
  const response = await client.organizations.workspaces.projects.delete(projectId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
