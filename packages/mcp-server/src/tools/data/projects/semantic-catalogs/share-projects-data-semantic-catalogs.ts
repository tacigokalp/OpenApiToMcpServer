// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'data.projects.semantic_catalogs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/data/projects/{projectId}/semantic-catalogs/{catalogId}/share',
  operationId: 'shareSemanticTable',
};

export const tool: Tool = {
  name: 'share_projects_data_semantic_catalogs',
  description: 'Share a semantic table',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      catalogId: {
        type: 'string',
      },
      target: {
        type: 'string',
        description: 'Target Project ID',
      },
    },
    required: ['projectId', 'catalogId'],
  },
  annotations: {},
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { catalogId, ...body } = args as any;
  const response = await client.data.projects.semanticCatalogs.share(catalogId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
