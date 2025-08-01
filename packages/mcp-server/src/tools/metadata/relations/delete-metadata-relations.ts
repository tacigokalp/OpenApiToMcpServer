// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'metadata.relations',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/metadata/{projectId}/relations/{catalogId}/{schemaName}/{tableName}/{relationId}',
  operationId: 'deleteRelation',
};

export const tool: Tool = {
  name: 'delete_metadata_relations',
  description: 'Delete Relation From Metadata',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      catalogId: {
        type: 'string',
      },
      schemaName: {
        type: 'string',
      },
      tableName: {
        type: 'string',
      },
      relationId: {
        type: 'string',
      },
    },
    required: ['projectId', 'catalogId', 'schemaName', 'tableName', 'relationId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { relationId, ...body } = args as any;
  return asBinaryContentResult(await client.metadata.relations.delete(relationId, body));
};

export default { metadata, tool, handler };
