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
  description: 'Create Cache',
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
