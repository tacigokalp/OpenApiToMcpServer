// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'openapitomcpstainless-mcp/filtering';
import { Metadata, asTextContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'data.projects.catalogs.schemas.tables',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/projects/{projectId}/catalogs/{catalogId}/schemas/{schemaName}/tables/{tableName}/columns',
  operationId: 'listColumns_1',
};

export const tool: Tool = {
  name: 'retrieve_columns_schemas_catalogs_projects_data_tables',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Columns\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      id: {\n        type: 'string',\n        description: 'The id of the column.'\n      },\n      dataType: {\n        type: 'string',\n        description: 'The data type of the column.'\n      },\n      defaultValue: {\n        type: 'string',\n        description: 'The default value of the column.'\n      },\n      displayName: {\n        type: 'string',\n        description: 'The display name of the column.'\n      },\n      isNotNull: {\n        type: 'boolean',\n        description: 'The not null flag for the column.'\n      },\n      isUnique: {\n        type: 'boolean',\n        description: 'The unique flag for the column.'\n      },\n      name: {\n        type: 'string',\n        description: 'The name of the column.'\n      }\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['projectId', 'catalogId', 'schemaName', 'tableName'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { tableName, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      args,
      await client.data.projects.catalogs.schemas.tables.retrieveColumns(tableName, body),
    ),
  );
};

export default { metadata, tool, handler };
