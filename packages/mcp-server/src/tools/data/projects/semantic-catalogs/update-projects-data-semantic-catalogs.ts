// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'openapitomcpstainless-mcp/filtering';
import { Metadata, asTextContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'data.projects.semantic_catalogs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/data/projects/{projectId}/semantic-catalogs/{catalogId}',
  operationId: 'createSemanticTable',
};

export const tool: Tool = {
  name: 'update_projects_data_semantic_catalogs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a semantic table\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Represents a table in a schema.',\n  properties: {\n    catalogId: {\n      type: 'string',\n      description: 'The ID of the catalog that the table belongs to.'\n    },\n    catalogName: {\n      type: 'string',\n      description: 'The name of the catalog that the table belongs to.'\n    },\n    schemaName: {\n      type: 'string',\n      description: 'The name of the schema that the table belongs to.'\n    },\n    tableId: {\n      type: 'string',\n      description: 'The ID of the semantic table.'\n    },\n    tableName: {\n      type: 'string',\n      description: 'The name of the table.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      catalogId: {
        type: 'string',
      },
      queryId: {
        type: 'string',
        description: 'The ID of the query which is used to populate the semantic table.',
      },
      schemaName: {
        type: 'string',
        description: 'The name of the schema.',
      },
      tableName: {
        type: 'string',
        description: 'The name of the table.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['projectId', 'catalogId'],
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { catalogId, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.data.projects.semanticCatalogs.update(catalogId, body)),
  );
};

export default { metadata, tool, handler };
