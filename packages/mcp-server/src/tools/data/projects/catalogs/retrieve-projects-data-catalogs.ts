// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'openapitomcpstainless-mcp/filtering';
import { Metadata, asTextContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'data.projects.catalogs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/data/projects/{projectId}/catalogs/{catalogId}',
  operationId: 'readCatalog',
};

export const tool: Tool = {
  name: 'retrieve_projects_data_catalogs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRead Catalog\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/catalog',\n  $defs: {\n    catalog: {\n      type: 'object',\n      description: 'This class represents a Catalog.\\n It contains the id, name, display name, type, and connection ID of the catalog.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the catalog.'\n        },\n        catalogType: {\n          type: 'string',\n          description: 'The type of the catalog.'\n        },\n        connectionId: {\n          type: 'string',\n          description: 'The connection ID of the catalog.'\n        },\n        displayName: {\n          type: 'string',\n          description: 'The display name of the catalog.'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the catalog.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      catalogId: {
        type: 'string',
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
    await maybeFilter(args, await client.data.projects.catalogs.retrieve(catalogId, body)),
  );
};

export default { metadata, tool, handler };
