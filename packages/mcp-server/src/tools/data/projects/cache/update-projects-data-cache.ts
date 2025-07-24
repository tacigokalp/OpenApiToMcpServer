// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'data.projects.cache',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/data/projects/{projectId}/cache/{cacheId}',
  operationId: 'updateCacheSettings',
};

export const tool: Tool = {
  name: 'update_projects_data_cache',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate Cache Settings\n\n# Response Schema\n```json\n{\n  type: 'string'\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      cacheId: {
        type: 'string',
      },
      fullRefreshCacheSchedule: {
        $ref: '#/$defs/schedule',
      },
      incrementalCacheSchedule: {
        $ref: '#/$defs/schedule',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['projectId', 'cacheId'],
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
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { cacheId, ...body } = args as any;
  return asBinaryContentResult(await client.data.projects.cache.update(cacheId, body));
};

export default { metadata, tool, handler };
