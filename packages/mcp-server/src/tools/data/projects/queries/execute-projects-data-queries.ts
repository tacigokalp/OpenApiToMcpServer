// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'openapitomcpstainless-mcp/filtering';
import { Metadata, asTextContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'data.projects.queries',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/data/projects/{projectId}/queries/execute',
  operationId: 'executeQuery',
};

export const tool: Tool = {
  name: 'execute_projects_data_queries',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nExecute Query\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Represents the result of a query.',\n  properties: {\n    columns: {\n      type: 'array',\n      description: 'The columns of the query result.',\n      items: {\n        type: 'object',\n        description: 'This class represents a Column.\\n It contains the catalog ID, catalog name, schema name, table name, and column name.',\n        properties: {\n          catalogId: {\n            type: 'string',\n            description: 'The ID of the catalog for the column.'\n          },\n          catalogName: {\n            type: 'string',\n            description: 'The name of the catalog for the column.'\n          },\n          columnName: {\n            type: 'string',\n            description: 'The name of the column.'\n          },\n          schemaName: {\n            type: 'string',\n            description: 'The name of the schema for the column.'\n          },\n          tableName: {\n            type: 'string',\n            description: 'The name of the table for the column.'\n          }\n        }\n      }\n    },\n    data: {\n      type: 'array',\n      description: 'The data of the query result.',\n      items: {\n        type: 'array',\n        items: {\n          type: 'object',\n          description: 'Represents a cell value in the query result.',\n          properties: {\n            dataType: {\n              type: 'string',\n              description: 'The data type of the column.'\n            },\n            displayName: {\n              type: 'string',\n              description: 'The display name of the column.'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the column.'\n            },\n            order: {\n              type: 'integer',\n              description: 'The order of the column in its row.'\n            },\n            value: {\n              type: 'string',\n              description: 'The value of the column.'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      columns: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      filters: {
        type: 'object',
      },
      from: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            catalogId: {
              type: 'string',
            },
            catalogName: {
              type: 'string',
            },
            schemaName: {
              type: 'string',
            },
            tableName: {
              type: 'string',
            },
          },
        },
      },
      limit: {
        type: 'integer',
      },
      offset: {
        type: 'integer',
      },
      orderBy: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['projectId'],
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { projectId, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.data.projects.queries.execute(projectId, body)),
  );
};

export default { metadata, tool, handler };
