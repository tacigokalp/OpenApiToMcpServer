// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'openapitomcpstainless-mcp/filtering';
import { Metadata, asTextContentResult } from 'openapitomcpstainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Openapitomcpstainless from 'openapitomcpstainless';

export const metadata: Metadata = {
  resource: 'connections',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/connections/{projectId}',
  operationId: 'createConnection',
};

export const tool: Tool = {
  name: 'create_connections',
  description:
    'When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you\'re sure you don\'t need the data.\n\nThis endpoint allows you to create a new connection for a specified project.\n\nYou need to provide the project ID and the connection details in the request body.\n\nThe connection details include the name, type, and credentials required for the connection.\n\nDepending on the connection type, additional parameters may be required under credentials.\n\nYou can view the list of supported connection types by calling the /connections/config endpoint.\n\nYou can switch examples from the second dropdown of the sample request component. (cURL (first dropdown) - Stripe Connection Request (second dropdown))\n\n**Note**: Typically, the connection creation process involves the following steps:\n1. First, learn about the connection type and the required parameters by calling the /connections/config endpoint.\n2. Create a connection request with the required parameters.\n3. If the connection requires Oauth2 authorization, there may be additional steps to follow. See https://docs.peaka.com/how-to-guides/how-to-create-oauth2-based-connections-via-peaka for more information.\n\n**Example**:\n- POSTGRES Connection Configuration:\n\nGET /connections/config endpoint displays all of the connection types.\n\nGET /connection/config/POSTGRES endpoint displays the POSTGRES connection configuration.\n\nThe definition of the POSTGRES connection configuration is as follows:\n``` json\n    {\n        "connectionType": "POSTGRES",\n        "connectionTypeLabel": "PostgreSQL",\n        "name": "PostgreSQL",\n        "authorizationType": "custom",\n        "credentialSchemaType": "postgres_credential_schema",\n        "category": "Database",\n        "configuration": [\n            {\n                "fieldName": "url",\n                "fieldType": "text",\n                "required": true,\n                "description": "URL"\n            },\n            {\n                "fieldName": "port",\n                "fieldType": "number",\n                "required": true,\n                "description": "Port"\n            },\n            {\n                "fieldName": "user",\n                "fieldType": "text",\n                "required": true,\n                "description": "User"\n            },\n            {\n                "fieldName": "password",\n                "fieldType": "text",\n                "required": true,\n                "description": "Password"\n            },\n            {\n                "fieldName": "databaseName",\n                "fieldType": "text",\n                "required": true,\n                "description": "Database Name"\n            },\n            {\n                "fieldName": "useSsl",\n                "fieldType": "boolean",\n                "required": true,\n                "description": "Use SSL"\n            }\n        ],\n        "documentationUrl": "https://docs.peaka.com/integrations/postgresql"\n    }\n```\n\nAccording to the POSTGRES connection configuration, the connection request should include the following parameters (respecting to the required flag):\n- url: URL of the host IP or domain\n- port: Port number\n- user: User of the database\n- password: Password of the user\n- databaseName: Name of the database\n- useSsl: Boolean value to indicate whether to use SSL\n\n``` json\n{\n    "name": "examplePostgre",\n    "type": "POSTGRES",\n    "credential": {\n        "url": "<host ip or domain>",\n        "port": 5432,\n        "user": "userOfYourDB",\n        "password": "passwordOfUser",\n        "databaseName": "yourDBName",\n        "useSsl": false\n    }\n}\n```\n\n\n\n# Response Schema\n```json\n{\n  $ref: \'#/$defs/connection\',\n  $defs: {\n    connection: {\n      type: \'object\',\n      properties: {\n        id: {\n          type: \'string\',\n          description: \'Connection ID\'\n        },\n        name: {\n          type: \'string\',\n          description: \'Name of the connection\'\n        },\n        type: {\n          type: \'string\',\n          description: \'Type of connection.\\n\\nExample: airtable for AirTable, stripe for Stripe, hubspot_access_token for HubSpot (with Access Token), etc.\\n\\nExact list can be fetched by following url: /connections/config\\n\'\n        },\n        url: {\n          type: \'string\',\n          description: \'Oauth callback url if the connection is Oauth based.\\n\'\n        }\n      }\n    }\n  }\n}\n```',
  inputSchema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
      },
      connectionCallback: {
        type: 'string',
        description: 'The url to redirect to after an oauth connection is established.',
      },
      credential: {
        type: 'object',
        description:
          'Credential object for the connection.\n\nIts structure is dependent on the connection type and can be fetched by following url: /connections/config\n',
      },
      name: {
        type: 'string',
        description: 'Name of the connection given by the user',
      },
      type: {
        type: 'string',
        description:
          'Type of connection.\n \n Example: airtable for AirTable, stripe for Stripe, hubspot_access_token for HubSpot (with Access Token), etc.\n\n Exact list can be fetched by following url: /connections/config',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.connections.create(projectId, body)));
};

export default { metadata, tool, handler };
