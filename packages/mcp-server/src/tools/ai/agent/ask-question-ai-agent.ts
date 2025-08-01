// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'openapitomcpstainless-mcp/filtering';
import { Metadata, asTextContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'ai.agent',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ai/{projectId}/agent',
  operationId: 'ask',
};

export const tool: Tool = {
  name: 'ask_question_ai_agent',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAsk Question To AI Agent\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    output: {\n      $ref: '#/$defs/chat_history_output'\n    },\n    threadId: {\n      type: 'string',\n      description: 'The thread ID associated with the AI chat thread.\\n Can be used to track conversations within the same thread.'\n    }\n  },\n  $defs: {\n    chat_history_output: {\n      type: 'object',\n      description: 'Represents the output of chat history, containing the query, response text,\\n and structured data related to the query results.',\n      properties: {\n        data: {\n          type: 'array',\n          description: 'The structured data representing the chat history query results.',\n          items: {\n            type: 'array',\n            items: {\n              type: 'object',\n              description: 'Represents a single data entry in a chat history query result.',\n              properties: {\n                dataType: {\n                  type: 'string',\n                  description: 'The data type of the value.'\n                },\n                name: {\n                  type: 'string',\n                  description: 'The name associated with the query data.'\n                },\n                order: {\n                  type: 'integer',\n                  description: 'The order of the data entry within the query results.'\n                },\n                value: {\n                  type: 'object',\n                  description: 'The value of the data entry.'\n                }\n              }\n            }\n          }\n        },\n        query: {\n          type: 'string',\n          description: 'The query string that was used in the chat.'\n        },\n        text: {\n          type: 'string',\n          description: 'The text response associated with the chat history.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      message: {
        type: 'string',
        description: 'The message content of the AI agent task request.',
      },
      source: {
        type: 'string',
        description: 'An optional source tag to categorize or tag the chat history.',
      },
      threadId: {
        type: 'string',
        description:
          'The optional thread ID associated with the AI chat thread.\n Can be used to track conversations within the same thread.',
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
  annotations: {},
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { projectId, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.ai.agent.askQuestion(projectId, body)),
  );
};

export default { metadata, tool, handler };
