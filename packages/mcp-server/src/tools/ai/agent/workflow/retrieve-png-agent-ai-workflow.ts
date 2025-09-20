// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'ai.agent.workflow',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ai-agent/workflow/png',
  operationId: 'getWorkflowImage',
};

export const tool: Tool = {
  name: 'retrieve_png_agent_ai_workflow',
  description: 'Get png image of current ai workflow',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Openapitomcpstainless, args: Record<string, unknown> | undefined) => {
  return asBinaryContentResult(await client.ai.agent.workflow.retrievePng());
};

export default { metadata, tool, handler };
