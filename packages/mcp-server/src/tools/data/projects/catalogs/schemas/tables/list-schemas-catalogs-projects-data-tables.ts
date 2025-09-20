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
  httpPath: '/data/projects/{projectId}/catalogs/{catalogId}/schemas/{schemaName}/tables',
  operationId: 'listTables_1',
};

export const tool: Tool = {
  name: 'list_schemas_catalogs_projects_data_tables',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Tables\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    description: 'Represents a table in a schema.',\n    properties: {\n      catalogId: {\n        type: 'string',\n        description: 'The ID of the catalog that the table belongs to.'\n      },\n      catalogName: {\n        type: 'string',\n        description: 'The name of the catalog that the table belongs to.'\n      },\n      isCacheable: {\n        type: 'boolean',\n        description: 'Indicates whether the table is cacheable or not.'\n      },\n      isCached: {\n        type: 'boolean',\n        description: 'Indicates whether the table is cached or not.'\n      },\n      isDynamicTable: {\n        type: 'boolean',\n        description: 'Indicates whether the table has required query parameter columns or not.\\n A query parameter column is prefixed with \"_q_\" e.g. \"_q_date\".\\n These columns are used to filter the data in the table.'\n      },\n      schemaName: {\n        type: 'string',\n        description: 'The name of the schema that the table belongs to.'\n      },\n      tableName: {\n        type: 'string',\n        description: 'The name of the table.'\n      }\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['projectId', 'catalogId', 'schemaName'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { schemaName, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.data.projects.catalogs.schemas.tables.list(schemaName, body)),
  );
};

export default { metadata, tool, handler };
