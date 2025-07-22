# Openapitomcpstainless TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:tacigokalp/OpenApiToMcpServer.git
cd OpenApiToMcpServer
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export OPENAPITOMCPSTAINLESS_API_KEY="My API Key"
export OPENAPITOMCPSTAINLESS_ENVIRONMENT="production"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npx -y openapitomcpstainless-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "openapitomcpstainless_api": {
      "command": "node",
      "args": ["/path/to/local/OpenApiToMcpServer/packages/mcp-server", "--client=claude", "--tools=dynamic"],
      "env": {
        "OPENAPITOMCPSTAINLESS_API_KEY": "My API Key",
        "OPENAPITOMCPSTAINLESS_ENVIRONMENT": "production"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "openapitomcpstainless-mcp/server";

// import a specific tool
import retrieveOrganizations from "openapitomcpstainless-mcp/tools/organizations/retrieve-organizations";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [retrieveOrganizations, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `organizations`:

- `retrieve_organizations` (`read`): Returns the specified Organization.

  An Organization is the highest-level resource that can contain multiple Workspaces.

- `list_organizations` (`read`): Retrieves all the organizations accessible by the authenticated user.

  An Organization is the highest-level resource that can contain multiple Workspaces.

### Resource `organizations.workspaces`:

- `create_organizations_workspaces` (`write`): The endpoint allows you to create a new Workspace within an Organization.

  A Workspace is a collaborative environment within an Organization that groups Projects together. It facilitates team collaboration, resource management, and organization of data operations.

  The hierarchical structure in Peaka is:

  <code>Organization (top-level) → Workspace → Project</code>

  Projects contain data catalogs and workflows that teams manage within a Workspace.

- `retrieve_organizations_workspaces` (`read`): Returns details of a specified Workspace, which is a collaborative environment within an Organization that groups Projects together.

  A Workspace facilitates team collaboration, resource management, and organization of data operations.

  The hierarchical structure in Peaka is:

  <code>Organization (top-level) → Workspace → Project</code>

  Projects contain data catalogs and workflows that teams manage within a Workspace.

- `update_organizations_workspaces` (`write`): Updates the specified Workspace within an Organization.

  A Workspace is a collaborative environment within an Organization that groups Projects together, facilitating team collaboration and resource management.

  The hierarchical structure in Peaka is:

  <code>Organization (top-level) → Workspace → Project</code>

  Projects contain data catalogs and workflows that teams manage within a Workspace.

- `list_organizations_workspaces` (`read`): Returns all workspaces under the specified Organization.

  A Workspace is a collaborative environment within an Organization that groups Projects together. It facilitates team collaboration, resource management, and organization of data operations.

  The hierarchical structure in Peaka is:

  <code>Organization (top-level) → Workspace → Project</code>

  Projects contain data catalogs and workflows that teams manage within a Workspace.

- `delete_organizations_workspaces` (`write`): Deletes a specified Workspace within an Organization.

  A Workspace is a collaborative environment that groups Projects to facilitate team collaboration and resource management.

  The hierarchical structure in Peaka is:

  <code>Organization (top-level) → Workspace → Project</code>

### Resource `organizations.workspaces.projects`:

- `create_workspaces_organizations_projects` (`write`): Create Project
- `retrieve_workspaces_organizations_projects` (`read`): Read Project
- `update_workspaces_organizations_projects` (`write`): Update Project
- `list_workspaces_organizations_projects` (`read`): Fetches all projects within the given Workspace.

  A unit of work where queries, data tables, and semantic catalogs are managed. Projects live inside workspaces.

- `delete_workspaces_organizations_projects` (`write`): Delete Project

### Resource `projects`:

- `create_projects` (`write`): Create Project
- `retrieve_projects` (`read`): Read Project
- `update_projects` (`write`): Update Project
- `list_projects` (`read`): List Projects
- `delete_projects` (`write`): Delete Project

### Resource `projects.api_keys`:

- `create_projects_api_keys` (`write`): Create API Key
- `list_projects_api_keys` (`read`): List API Keys
- `delete_projects_api_keys` (`write`): Delete API Key

### Resource `connections`:

- `create_connections` (`write`): This endpoint allows you to create a new connection for a specified project.

  You need to provide the project ID and the connection details in the request body.

  The connection details include the name, type, and credentials required for the connection.

  Depending on the connection type, additional parameters may be required under credentials.

  You can view the list of supported connection types by calling the /connections/config endpoint.

  You can switch examples from the second dropdown of the sample request component. (cURL (first dropdown) - Stripe Connection Request (second dropdown))

  **Note**: Typically, the connection creation process involves the following steps:

  1. First, learn about the connection type and the required parameters by calling the /connections/config endpoint.
  2. Create a connection request with the required parameters.
  3. If the connection requires Oauth2 authorization, there may be additional steps to follow. See https://docs.peaka.com/how-to-guides/how-to-create-oauth2-based-connections-via-peaka for more information.

  **Example**:

  - POSTGRES Connection Configuration:

  GET /connections/config endpoint displays all of the connection types.

  GET /connection/config/POSTGRES endpoint displays the POSTGRES connection configuration.

  The definition of the POSTGRES connection configuration is as follows:

  ```json
  {
    "connectionType": "POSTGRES",
    "connectionTypeLabel": "PostgreSQL",
    "name": "PostgreSQL",
    "authorizationType": "custom",
    "credentialSchemaType": "postgres_credential_schema",
    "category": "Database",
    "configuration": [
      {
        "fieldName": "url",
        "fieldType": "text",
        "required": true,
        "description": "URL"
      },
      {
        "fieldName": "port",
        "fieldType": "number",
        "required": true,
        "description": "Port"
      },
      {
        "fieldName": "user",
        "fieldType": "text",
        "required": true,
        "description": "User"
      },
      {
        "fieldName": "password",
        "fieldType": "text",
        "required": true,
        "description": "Password"
      },
      {
        "fieldName": "databaseName",
        "fieldType": "text",
        "required": true,
        "description": "Database Name"
      },
      {
        "fieldName": "useSsl",
        "fieldType": "boolean",
        "required": true,
        "description": "Use SSL"
      }
    ],
    "documentationUrl": "https://docs.peaka.com/integrations/postgresql"
  }
  ```

  According to the POSTGRES connection configuration, the connection request should include the following parameters (respecting to the required flag):

  - url: URL of the host IP or domain
  - port: Port number
  - user: User of the database
  - password: Password of the user
  - databaseName: Name of the database
  - useSsl: Boolean value to indicate whether to use SSL

  ```json
  {
    "name": "examplePostgre",
    "type": "POSTGRES",
    "credential": {
      "url": "<host ip or domain>",
      "port": 5432,
      "user": "userOfYourDB",
      "password": "passwordOfUser",
      "databaseName": "yourDBName",
      "useSsl": false
    }
  }
  ```

- `retrieve_connections` (`read`): Get a connection by ID
- `update_connections` (`write`): Update a connection
- `list_connections` (`read`): List all connections for a project
- `delete_connections` (`write`): Delete a connection
- `oauth2_callback_connections` (`write`): This callback/webhook is used while creating a new connection with Oauth2. See https://docs.peaka.com/how-to-guides/how-to-create-oauth2-based-connections-via-peaka for more information.
- `retrieve_detail_connections` (`read`): Get connection detail by ID. Returns only non-sensitive information.

### Resource `connections.config`:

- `retrieve_connections_config` (`read`): Get Connection Config
- `list_connections_config` (`read`): List all connection configurations.
  This will return a list of all connection configurations available in the system.

### Resource `data.projects.bitable`:

- `update_projects_data_bitable` (`write`): Create BI Table
- `list_projects_data_bitable` (`read`): See Data -- Catalog / List Tables for more details.
- `delete_projects_data_bitable` (`write`): Delete BI Table

### Resource `data.projects.bitable.columns`:

- `create_bitable_projects_data_columns` (`write`): Add BI Column
- `update_bitable_projects_data_columns` (`write`): Update BI Column
- `list_bitable_projects_data_columns` (`read`): See Data -- Catalog / List Columns for more details.
- `delete_bitable_projects_data_columns` (`write`): Delete BI Column

### Resource `data.projects.table`:

- `update_projects_data_table` (`write`): Create Table
- `list_projects_data_table` (`read`): See Data -- Catalog / List Tables for more details.
- `delete_projects_data_table` (`write`): Delete Table
- `import_projects_data_table` (`write`): Import CSV
- `retrieve_sample_projects_data_table` (`read`): Get Sample CSV

### Resource `data.projects.table.columns`:

- `create_table_projects_data_columns` (`write`): Add Column
- `update_table_projects_data_columns` (`write`): Update Column
- `list_table_projects_data_columns` (`read`): See Data -- Catalog / List Columns for more details.
- `delete_table_projects_data_columns` (`write`): Delete Column

### Resource `data.projects.queries`:

- `create_projects_data_queries` (`write`): Create Query
- `retrieve_projects_data_queries` (`read`): Read Query
- `update_projects_data_queries` (`write`): Update Query
- `list_projects_data_queries` (`read`): List Queries
- `delete_projects_data_queries` (`write`): Delete Query
- `execute_projects_data_queries` (`write`): Execute Query

### Resource `data.projects.semantic_catalogs`:

- `update_projects_data_semantic_catalogs` (`write`): Create a semantic table
- `delete_projects_data_semantic_catalogs` (`write`): Delete a semantic table
- `semantic_catalogs_projects_data_semantic_catalogs` (`write`): Create a semantic catalog
- `share_projects_data_semantic_catalogs` (`write`): Share a semantic table

### Resource `data.projects.cache`:

- `create_projects_data_cache` (`write`): Create Cache
- `update_projects_data_cache` (`write`): Update Cache Settings
- `delete_projects_data_cache` (`write`): Delete Cache
- `batch_projects_data_cache` (`write`): Create Batch Cache
- `full_refresh_update_projects_data_cache` (`write`): Full Refresh Cache
- `incremental_update_projects_data_cache` (`write`): Update Cache Incrementally

### Resource `data.projects.cache.status`:

- `list_cache_projects_data_status` (`read`): Get Cache Status

### Resource `data.projects.catalogs`:

- `create_projects_data_catalogs` (`write`): Create Catalog
- `retrieve_projects_data_catalogs` (`read`): Read Catalog
- `list_projects_data_catalogs` (`read`): List Catalogs
- `delete_projects_data_catalogs` (`write`): Delete Catalog

### Resource `data.projects.catalogs.schemas`:

- `list_catalogs_projects_data_schemas` (`read`): List Schemas

### Resource `data.projects.catalogs.schemas.tables`:

- `list_schemas_catalogs_projects_data_tables` (`read`): List Tables
- `retrieve_columns_schemas_catalogs_projects_data_tables` (`read`): List Columns
- `retrieve_is_cached_schemas_catalogs_projects_data_tables` (`read`): Table is Cached
- `retrieve_statistics_schemas_catalogs_projects_data_tables` (`read`): Table Statistics

### Resource `data.projects.catalogs.parametric_tables`:

- `delete_parametric_tables_catalogs_projects_data_parametric_tables` (`write`): Delete Parametric Table
- `parametric_tables_catalogs_projects_data_parametric_tables` (`write`): Create Parametric Table
- `retrieve_parametric_tables_catalogs_projects_data_parametric_tables` (`read`): List Parametric Tables

### Resource `data.projects.catalogs.cache`:

- `retrieve_status_catalogs_projects_data_cache` (`read`): Get All Cache Statuses of a Catalog

### Resource `ui.init_session`:

- `create_ui_init_session` (`write`): Init session for the user
- `retrieve_ui_init_session` (`read`): Init session for the user (Deprecated)

### Resource `supported_drivers`:

- `list_supported_drivers` (`read`): List Supported Drivers
- `retrieve_jdbc_supported_drivers` (`read`): Get JDBC Driver
- `retrieve_sql_alchemy_supported_drivers` (`read`): Get SQL Alchemy Driver

### Resource `metadata`:

- `retrieve_metadata` (`read`): Get Project Metadata
- `generate_semantics_metadata` (`write`): Generate semantics for the table
- `query_metadata` (`read`): Semantic query metadata for the project.
- `refresh_metadata` (`write`): Refresh Project Metadata
- `update_catalog_metadata` (`write`): Update Metadata ai usage per catalog level
- `update_schema_metadata` (`write`): Update Metadata ai usage per schema level
- `update_table_metadata` (`write`): Update Metadata

### Resource `metadata.categorical`:

- `delete_values_metadata_categorical` (`write`): Delete categorical values from the column meta and remove the scheduled job
- `generate_values_metadata_categorical` (`write`): Generate categorical values from the column.

### Resource `metadata.questions`:

- `generate_metadata_questions` (`read`): Generate sample ai questions for the project

### Resource `metadata.relations`:

- `retrieve_metadata_relations` (`read`): Get Project Catalog Metadata Relations
- `update_metadata_relations` (`write`): Update Relation From Metadata
- `delete_metadata_relations` (`write`): Delete Relation From Metadata
- `add_metadata_relations` (`write`): Add Relation To Metadata

### Resource `metadata.golden_sqls`:

- `create_metadata_golden_sqls` (`write`): Create golden sql for the project
- `list_metadata_golden_sqls` (`read`): List of golden sqls for the project.
- `delete_metadata_golden_sqls` (`write`): Delete golden sql from the project.
- `query_metadata_golden_sqls` (`read`): Semantic query golden sqls for the project.

### Resource `sql`:

- `transpile_sql` (`write`): Transpile a sql query into given dialect

### Resource `ai.agent`:

- `ask_question_ai_agent` (`write`): Ask Question To AI Agent

### Resource `ai.agent.history`:

- `list_agent_ai_history` (`read`): Get AI Chat History
- `delete_thread_agent_ai_history` (`write`): Delete AI Chat History
- `update_thread_name_agent_ai_history` (`write`): Update AI Chat History Thread Name

### Resource `ai.agent.workflow`:

- `retrieve_png_agent_ai_workflow` (`read`): Get png image of current ai workflow

### Resource `ai.agent.chat`:

- `send_message_agent_ai_chat` (`write`): Chat with agent
- `stream_message_agent_ai_chat` (`write`): Chat with agent via stream

### Resource `ai.agent.threads`:

- `retrieve_agent_ai_threads` (`read`): Get ai-agent thread
- `list_agent_ai_threads` (`read`): List ai-agent threads
- `delete_agent_ai_threads` (`write`): Delete ai-agent thread
- `update_display_name_agent_ai_threads` (`write`): Update ai-agent thread display name
