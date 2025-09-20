// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'metadata.questions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/metadata/{projectId}/questions/generate',
  operationId: 'generateSampleQuestions',
};

export const tool: Tool = {
  name: 'generate_metadata_questions',
  description: 'Generate sample ai questions for the project',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      question: {
        type: 'string',
      },
    },
    required: ['projectId', 'question'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  const { projectId, ...body } = args as any;
  return asBinaryContentResult(await client.metadata.questions.generate(projectId, body));
};

export default { metadata, tool, handler };
