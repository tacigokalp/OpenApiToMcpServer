// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'data.projects.cache',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/data/projects/{projectId}/cache',
  operationId: 'createCache',
};

export const tool: Tool = {
  name: 'create_projects_data_cache',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate Cache\n\n# Response Schema\n```json\n{\n  type: 'string'\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      catalogId: {
        type: 'string',
        description: 'The ID of the catalog for the cache request.',
      },
      fullRefreshCacheSchedule: {
        $ref: '#/$defs/schedule',
      },
      incrementalCacheSchedule: {
        $ref: '#/$defs/schedule',
      },
      schemaName: {
        type: 'string',
        description: 'The name of the schema for the cache request.',
      },
      tableName: {
        type: 'string',
        description: 'The name of the table for the cache request.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['projectId'],
    $defs: {
      schedule: {
        type: 'object',
        description: 'This class represents a schedule for a materialized query.',
        properties: {
          expression: {
            type: 'string',
            description:
              'The expression of the schedule.\n The expression is a duration in ISO-8601 format.\n "PT15M"     -- parses as "15 minutes" (where a minute is 60 seconds)\n "PT10H"     -- parses as "10 hours" (where an hour is 3600 seconds)\n "P2D"       -- parses as "2 days" (where a day is 24 hours or 86400 seconds)',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { projectId, ...body } = args as any;
  return asBinaryContentResult(await client.data.projects.cache.create(projectId, body));
};

export default { metadata, tool, handler };
