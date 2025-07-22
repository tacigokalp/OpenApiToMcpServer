// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'openapitomcpstainless-mcp/filtering';
import { Metadata, asTextContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'data.projects.queries',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/data/projects/{projectId}/queries/{queryId}',
  operationId: 'updateQuery',
};

export const tool: Tool = {
  name: 'update_projects_data_queries',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate Query\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/query',\n  $defs: {\n    query: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the query.'\n        },\n        displayName: {\n          type: 'string',\n          description: 'The display name of the query.'\n        },\n        inputQuery: {\n          type: 'string',\n          description: 'The sql query.'\n        },\n        inputQueryRefId: {\n          type: 'string',\n          description: 'The reference id of the input query.'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the query.\\n\\n This is the name of the query which will be used in the sql query.\\n e.g. SELECT * FROM \"peaka\".\"query\".\"<name>\"'\n        },\n        queryType: {\n          type: 'string',\n          description: 'The type of the query:\\n PLAIN or MATERIALIZED'\n        },\n        schedule: {\n          $ref: '#/$defs/schedule'\n        }\n      }\n    },\n    schedule: {\n      type: 'object',\n      description: 'This class represents a schedule for a materialized query.',\n      properties: {\n        expression: {\n          type: 'string',\n          description: 'The expression of the schedule.\\n The expression is a duration in ISO-8601 format.\\n \"PT15M\"     -- parses as \"15 minutes\" (where a minute is 60 seconds)\\n \"PT10H\"     -- parses as \"10 hours\" (where an hour is 3600 seconds)\\n \"P2D\"       -- parses as \"2 days\" (where a day is 24 hours or 86400 seconds)'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      queryId: {
        type: 'string',
      },
      displayName: {
        type: 'string',
        description: 'The display name of the query.',
      },
      inputQuery: {
        type: 'string',
        description: 'The sql query.',
      },
      queryType: {
        type: 'string',
        description: 'The type of the query:\n PLAIN or MATERIALIZED\n\n\n Default is PLAIN.',
      },
      schedule: {
        $ref: '#/$defs/schedule',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['projectId', 'queryId'],
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
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { queryId, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.data.projects.queries.update(queryId, body)),
  );
};

export default { metadata, tool, handler };
