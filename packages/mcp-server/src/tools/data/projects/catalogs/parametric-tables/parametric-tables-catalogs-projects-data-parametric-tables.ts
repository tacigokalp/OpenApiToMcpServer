// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'openapitomcpstainless-mcp/filtering';
import { Metadata, asTextContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'data.projects.catalogs.parametric_tables',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/data/projects/{projectId}/catalogs/{catalogId}/parametricTables',
  operationId: 'createParametricTable',
};

export const tool: Tool = {
  name: 'parametric_tables_catalogs_projects_data_parametric_tables',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate Parametric Table\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/parametric_table',\n  $defs: {\n    parametric_table: {\n      type: 'object',\n      properties: {\n        fromSchema: {\n          type: 'string',\n          description: 'Schema of the base table'\n        },\n        fromTable: {\n          type: 'string',\n          description: 'Name of the base table'\n        },\n        paramValues: {\n          type: 'array',\n          description: 'List of parametric columns',\n          items: {\n            type: 'object',\n            description: 'Parametric table column',\n            properties: {\n              key: {\n                type: 'string',\n                description: 'Column name'\n              },\n              value: {\n                type: 'object',\n                description: 'Column value',\n                additionalProperties: true\n              }\n            }\n          }\n        },\n        toSchema: {\n          type: 'string',\n          description: 'Schema of the target table'\n        },\n        toTable: {\n          type: 'string',\n          description: 'Name of the target table'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      catalogId: {
        type: 'string',
      },
      fromSchema: {
        type: 'string',
        description: 'Schema of the base table',
      },
      fromTable: {
        type: 'string',
        description: 'Name of the base table',
      },
      paramValues: {
        type: 'array',
        description: 'List of parametric columns',
        items: {
          type: 'object',
          description: 'Parametric table column',
          properties: {
            key: {
              type: 'string',
              description: 'Column name',
            },
            value: {
              type: 'object',
              description: 'Column value',
              additionalProperties: true,
            },
          },
        },
      },
      toSchema: {
        type: 'string',
        description: 'Schema of the target table',
      },
      toTable: {
        type: 'string',
        description: 'Name of the target table',
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
  annotations: {},
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { catalogId, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      jq_filter,
      await client.data.projects.catalogs.parametricTables.parametricTables(catalogId, body),
    ),
  );
};

export default { metadata, tool, handler };
