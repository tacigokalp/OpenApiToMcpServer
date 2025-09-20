// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'metadata.relations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/metadata/{projectId}/relations/{catalogId}/{schemaName}/{tableName}/{columnName}',
  operationId: 'addRelation',
};

export const tool: Tool = {
  name: 'add_metadata_relations',
  description: 'Add Relation To Metadata',
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
      columnName: {
        type: 'string',
      },
      targetCatalogId: {
        type: 'string',
      },
      targetColumnName: {
        type: 'string',
      },
      targetSchemaName: {
        type: 'string',
      },
      targetTableName: {
        type: 'string',
      },
      type: {
        type: 'string',
      },
    },
    required: ['projectId', 'catalogId', 'schemaName', 'tableName', 'columnName'],
  },
  annotations: {},
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { columnName, ...body } = args as any;
  return asBinaryContentResult(await client.metadata.relations.add(columnName, body));
};

export default { metadata, tool, handler };
