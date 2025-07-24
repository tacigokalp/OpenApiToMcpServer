// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'openapitomcpstainless-mcp/filtering';
import { Metadata, asTextContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'ai.agent.history',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/ai/{projectId}/agent/history/{threadId}',
  operationId: 'updateChatHistoryDisplayNameByThreadId',
};

export const tool: Tool = {
  name: 'update_thread_name_agent_ai_history',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate AI Chat History Thread Name\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/chat_history_response',\n  $defs: {\n    chat_history_response: {\n      type: 'object',\n      description: 'Represents the response containing AI chat history.',\n      properties: {\n        history: {\n          type: 'array',\n          description: 'The list of AI chat history records.',\n          items: {\n            type: 'object',\n            description: 'Represents the chat history associated with a project and AI thread.',\n            properties: {\n              aiThreadId: {\n                type: 'string',\n                description: 'The unique identifier for the AI thread.'\n              },\n              displayName: {\n                type: 'string',\n                description: 'The display name of the chat history.'\n              },\n              projectId: {\n                type: 'string',\n                description: 'The unique identifier for the project.'\n              },\n              source: {\n                type: 'string',\n                description: 'The source of the chat history.'\n              },\n              tasks: {\n                type: 'array',\n                description: 'The list of tasks in the chat history.',\n                items: {\n                  type: 'object',\n                  description: 'Represents a task in the chat history, which contains steps and output.',\n                  properties: {\n                    message: {\n                      type: 'string',\n                      description: 'The message associated with the task.'\n                    },\n                    modelParams: {\n                      type: 'object',\n                      description: 'The model parameters used in the task.'\n                    },\n                    output: {\n                      $ref: '#/$defs/chat_history_output'\n                    },\n                    step: {\n                      type: 'array',\n                      description: 'The list of steps in the task.',\n                      items: {\n                        type: 'object',\n                        description: 'Represents a step in a chat history task, containing an action and its observation.',\n                        properties: {\n                          action: {\n                            type: 'object',\n                            description: 'Represents an action taken in a chat history step.'\n                          },\n                          observation: {\n                            type: 'string',\n                            description: 'The observation resulting from the action.'\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    },\n    chat_history_output: {\n      type: 'object',\n      description: 'Represents the output of chat history, containing the query, response text,\\n and structured data related to the query results.',\n      properties: {\n        data: {\n          type: 'array',\n          description: 'The structured data representing the chat history query results.',\n          items: {\n            type: 'array',\n            items: {\n              type: 'object',\n              description: 'Represents a single data entry in a chat history query result.',\n              properties: {\n                dataType: {\n                  type: 'string',\n                  description: 'The data type of the value.'\n                },\n                name: {\n                  type: 'string',\n                  description: 'The name associated with the query data.'\n                },\n                order: {\n                  type: 'integer',\n                  description: 'The order of the data entry within the query results.'\n                },\n                value: {\n                  type: 'object',\n                  description: 'The value of the data entry.'\n                }\n              }\n            }\n          }\n        },\n        query: {\n          type: 'string',\n          description: 'The query string that was used in the chat.'\n        },\n        text: {\n          type: 'string',\n          description: 'The text response associated with the chat history.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      threadId: {
        type: 'string',
      },
      name: {
        type: 'string',
        description: 'The new name for the AI chat thread.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['projectId', 'threadId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { threadId, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.ai.agent.history.updateThreadName(threadId, body)),
  );
};

export default { metadata, tool, handler };
