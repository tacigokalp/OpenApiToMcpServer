// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'data.projects.catalogs.parametric_tables',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/data/projects/{projectId}/catalogs/{catalogId}/parametricTables',
  operationId: 'deleteParametricTable',
};

export const tool: Tool = {
  name: 'delete_parametric_tables_catalogs_projects_data_parametric_tables',
  description: 'Delete Parametric Table',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      catalogId: {
        type: 'string',
      },
      toSchema: {
        type: 'string',
        description: 'Target schema of the parametric table',
      },
      toTable: {
        type: 'string',
        description: 'Target table name of the parametric table',
      },
    },
    required: ['projectId', 'catalogId', 'toSchema', 'toTable'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { catalogId, ...body } = args as any;
  const response = await client.data.projects.catalogs.parametricTables
    .deleteParametricTables(catalogId, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
