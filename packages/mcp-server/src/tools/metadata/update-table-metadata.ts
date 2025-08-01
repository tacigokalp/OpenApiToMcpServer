// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'metadata',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/metadata/{projectId}/{catalogId}/{schemaName}/{tableName}',
  operationId: 'updateMetadata',
};

export const tool: Tool = {
  name: 'update_table_metadata',
  description: 'Update Metadata',
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
      columns: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            categoricalValues: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            columnDescription: {
              type: 'string',
            },
            columnName: {
              type: 'string',
            },
            dataType: {
              type: 'string',
            },
            isCategorical: {
              type: 'boolean',
            },
            isNotNull: {
              type: 'boolean',
            },
            isPrimary: {
              type: 'boolean',
            },
            isSystem: {
              type: 'boolean',
            },
            isUnique: {
              type: 'boolean',
            },
            lineage: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  column: {
                    type: 'string',
                  },
                  expression: {
                    type: 'string',
                  },
                  tables: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                  },
                },
              },
            },
            order: {
              type: 'integer',
            },
          },
        },
      },
      tableDescription: {
        type: 'string',
      },
      useWithAI: {
        type: 'boolean',
      },
    },
    required: ['projectId', 'catalogId', 'schemaName', 'tableName'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { tableName, ...body } = args as any;
  return asBinaryContentResult(await client.metadata.updateTable(tableName, body));
};

export default { metadata, tool, handler };
