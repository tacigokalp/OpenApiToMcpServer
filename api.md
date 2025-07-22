# Organizations

Types:

- <code><a href="./src/resources/organizations/organizations.ts">Project</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationListResponse</a></code>

Methods:

- <code title="get /organizations/{organizationId}">client.organizations.<a href="./src/resources/organizations/organizations.ts">retrieve</a>(organizationID) -> Project</code>
- <code title="get /organizations">client.organizations.<a href="./src/resources/organizations/organizations.ts">list</a>() -> OrganizationListResponse</code>

## Workspaces

Types:

- <code><a href="./src/resources/organizations/workspaces/workspaces.ts">Workspace</a></code>
- <code><a href="./src/resources/organizations/workspaces/workspaces.ts">WorkspaceRequest</a></code>

Methods:

- <code title="post /organizations/{organizationId}/workspaces">client.organizations.workspaces.<a href="./src/resources/organizations/workspaces/workspaces.ts">create</a>(organizationID, { ...params }) -> Workspace</code>
- <code title="get /organizations/{organizationId}/workspaces/{workspaceId}">client.organizations.workspaces.<a href="./src/resources/organizations/workspaces/workspaces.ts">retrieve</a>(workspaceID, { ...params }) -> Workspace</code>
- <code title="put /organizations/{organizationId}/workspaces/{workspaceId}">client.organizations.workspaces.<a href="./src/resources/organizations/workspaces/workspaces.ts">update</a>(workspaceID, { ...params }) -> Workspace</code>
- <code title="get /organizations/{organizationId}/workspaces">client.organizations.workspaces.<a href="./src/resources/organizations/workspaces/workspaces.ts">list</a>(organizationID) -> Workspace</code>
- <code title="delete /organizations/{organizationId}/workspaces/{workspaceId}">client.organizations.workspaces.<a href="./src/resources/organizations/workspaces/workspaces.ts">delete</a>(workspaceID, { ...params }) -> void</code>

### Projects

Types:

- <code><a href="./src/resources/organizations/workspaces/projects.ts">ProjectRequest</a></code>
- <code><a href="./src/resources/organizations/workspaces/projects.ts">ProjectListResponse</a></code>

Methods:

- <code title="post /organizations/{organizationId}/workspaces/{workspaceId}/projects">client.organizations.workspaces.projects.<a href="./src/resources/organizations/workspaces/projects.ts">create</a>(workspaceID, { ...params }) -> Project</code>
- <code title="get /organizations/{organizationId}/workspaces/{workspaceId}/projects/{projectId}">client.organizations.workspaces.projects.<a href="./src/resources/organizations/workspaces/projects.ts">retrieve</a>(projectID, { ...params }) -> Project</code>
- <code title="put /organizations/{organizationId}/workspaces/{workspaceId}/projects/{projectId}">client.organizations.workspaces.projects.<a href="./src/resources/organizations/workspaces/projects.ts">update</a>(projectID, { ...params }) -> Project</code>
- <code title="get /organizations/{organizationId}/workspaces/{workspaceId}/projects">client.organizations.workspaces.projects.<a href="./src/resources/organizations/workspaces/projects.ts">list</a>(workspaceID, { ...params }) -> ProjectListResponse</code>
- <code title="delete /organizations/{organizationId}/workspaces/{workspaceId}/projects/{projectId}">client.organizations.workspaces.projects.<a href="./src/resources/organizations/workspaces/projects.ts">delete</a>(projectID, { ...params }) -> void</code>

# Projects

Types:

- <code><a href="./src/resources/projects/projects.ts">ProjectListResponse</a></code>

Methods:

- <code title="post /projects">client.projects.<a href="./src/resources/projects/projects.ts">create</a>({ ...params }) -> Project</code>
- <code title="get /projects/{projectId}">client.projects.<a href="./src/resources/projects/projects.ts">retrieve</a>(projectID) -> Project</code>
- <code title="put /projects/{projectId}">client.projects.<a href="./src/resources/projects/projects.ts">update</a>(projectID, { ...params }) -> Project</code>
- <code title="get /projects">client.projects.<a href="./src/resources/projects/projects.ts">list</a>() -> ProjectListResponse</code>
- <code title="delete /projects/{projectId}">client.projects.<a href="./src/resources/projects/projects.ts">delete</a>(projectID) -> void</code>

## APIKeys

Types:

- <code><a href="./src/resources/projects/api-keys.ts">APIKeyCreateResponse</a></code>

Methods:

- <code title="post /projects/{projectId}/apiKeys">client.projects.apiKeys.<a href="./src/resources/projects/api-keys.ts">create</a>(projectID, { ...params }) -> APIKeyCreateResponse</code>
- <code title="get /projects/{projectId}/apiKeys">client.projects.apiKeys.<a href="./src/resources/projects/api-keys.ts">list</a>(projectID) -> Response</code>
- <code title="delete /projects/{projectId}/apiKeys/{apiKeyId}">client.projects.apiKeys.<a href="./src/resources/projects/api-keys.ts">delete</a>(apiKeyID, { ...params }) -> void</code>

# Connections

Types:

- <code><a href="./src/resources/connections/connections.ts">Connection</a></code>
- <code><a href="./src/resources/connections/connections.ts">ConnectionRequest</a></code>
- <code><a href="./src/resources/connections/connections.ts">ConnectionRetrieveDetailResponse</a></code>

Methods:

- <code title="post /connections/{projectId}">client.connections.<a href="./src/resources/connections/connections.ts">create</a>(projectID, { ...params }) -> Connection</code>
- <code title="get /connections/{projectId}/{connectionId}">client.connections.<a href="./src/resources/connections/connections.ts">retrieve</a>(connectionID, { ...params }) -> Connection</code>
- <code title="put /connections/{projectId}/{connectionId}">client.connections.<a href="./src/resources/connections/connections.ts">update</a>(connectionID, { ...params }) -> Response</code>
- <code title="get /connections/{projectId}">client.connections.<a href="./src/resources/connections/connections.ts">list</a>(projectID) -> Connection</code>
- <code title="delete /connections/{projectId}/{connectionId}">client.connections.<a href="./src/resources/connections/connections.ts">delete</a>(connectionID, { ...params }) -> void</code>
- <code title="post /connections/{projectId}/oauth2">client.connections.<a href="./src/resources/connections/connections.ts">oauth2Callback</a>(projectID, { ...params }) -> Connection</code>
- <code title="get /connections/{projectId}/{connectionId}/detail">client.connections.<a href="./src/resources/connections/connections.ts">retrieveDetail</a>(connectionID, { ...params }) -> ConnectionRetrieveDetailResponse</code>

## Config

Methods:

- <code title="get /connections/config/{connectionType}">client.connections.config.<a href="./src/resources/connections/config.ts">retrieve</a>(connectionType) -> Response</code>
- <code title="get /connections/config">client.connections.config.<a href="./src/resources/connections/config.ts">list</a>() -> Response</code>

# Data

## Projects

### Bitable

Methods:

- <code title="post /data/projects/{projectId}/bitable/{tableName}">client.data.projects.bitable.<a href="./src/resources/data/projects/bitable/bitable.ts">update</a>(tableName, { ...params }) -> Response</code>
- <code title="get /data/projects/{projectId}/bitable">client.data.projects.bitable.<a href="./src/resources/data/projects/bitable/bitable.ts">list</a>(projectID) -> Response</code>
- <code title="delete /data/projects/{projectId}/bitable/{tableName}">client.data.projects.bitable.<a href="./src/resources/data/projects/bitable/bitable.ts">delete</a>(tableName, { ...params }) -> void</code>

#### Columns

Types:

- <code><a href="./src/resources/data/projects/bitable/columns.ts">ColumnRequest</a></code>

Methods:

- <code title="post /data/projects/{projectId}/bitable/{tableName}/columns">client.data.projects.bitable.columns.<a href="./src/resources/data/projects/bitable/columns.ts">create</a>(tableName, { ...params }) -> Response</code>
- <code title="put /data/projects/{projectId}/bitable/{tableName}/columns/{columnName}">client.data.projects.bitable.columns.<a href="./src/resources/data/projects/bitable/columns.ts">update</a>(columnName, { ...params }) -> Response</code>
- <code title="get /data/projects/{projectId}/bitable/{tableName}/columns">client.data.projects.bitable.columns.<a href="./src/resources/data/projects/bitable/columns.ts">list</a>(tableName, { ...params }) -> Response</code>
- <code title="delete /data/projects/{projectId}/bitable/{tableName}/columns/{columnName}">client.data.projects.bitable.columns.<a href="./src/resources/data/projects/bitable/columns.ts">delete</a>(columnName, { ...params }) -> void</code>

### Table

Types:

- <code><a href="./src/resources/data/projects/table/table.ts">TableRetrieveSampleResponse</a></code>

Methods:

- <code title="post /data/projects/{projectId}/table/{tableName}">client.data.projects.table.<a href="./src/resources/data/projects/table/table.ts">update</a>(tableName, { ...params }) -> Response</code>
- <code title="get /data/projects/{projectId}/table">client.data.projects.table.<a href="./src/resources/data/projects/table/table.ts">list</a>(projectID) -> Response</code>
- <code title="delete /data/projects/{projectId}/table/{tableName}">client.data.projects.table.<a href="./src/resources/data/projects/table/table.ts">delete</a>(tableName, { ...params }) -> void</code>
- <code title="post /data/projects/{projectId}/table/{tableName}/import">client.data.projects.table.<a href="./src/resources/data/projects/table/table.ts">import</a>(tableName, { ...params }) -> Response</code>
- <code title="get /data/projects/{projectId}/table/{tableName}/sample">client.data.projects.table.<a href="./src/resources/data/projects/table/table.ts">retrieveSample</a>(tableName, { ...params }) -> string</code>

#### Columns

Methods:

- <code title="post /data/projects/{projectId}/table/{tableName}/columns">client.data.projects.table.columns.<a href="./src/resources/data/projects/table/columns.ts">create</a>(tableName, { ...params }) -> Response</code>
- <code title="put /data/projects/{projectId}/table/{tableName}/columns/{columnName}">client.data.projects.table.columns.<a href="./src/resources/data/projects/table/columns.ts">update</a>(columnName, { ...params }) -> Response</code>
- <code title="get /data/projects/{projectId}/table/{tableName}/columns">client.data.projects.table.columns.<a href="./src/resources/data/projects/table/columns.ts">list</a>(tableName, { ...params }) -> Response</code>
- <code title="delete /data/projects/{projectId}/table/{tableName}/columns/{columnName}">client.data.projects.table.columns.<a href="./src/resources/data/projects/table/columns.ts">delete</a>(columnName, { ...params }) -> void</code>

### Queries

Types:

- <code><a href="./src/resources/data/projects/queries.ts">Query</a></code>
- <code><a href="./src/resources/data/projects/queries.ts">QueryRequest</a></code>
- <code><a href="./src/resources/data/projects/queries.ts">Schedule</a></code>
- <code><a href="./src/resources/data/projects/queries.ts">QueryListResponse</a></code>
- <code><a href="./src/resources/data/projects/queries.ts">QueryExecuteResponse</a></code>

Methods:

- <code title="post /data/projects/{projectId}/queries">client.data.projects.queries.<a href="./src/resources/data/projects/queries.ts">create</a>(projectID, { ...params }) -> Query</code>
- <code title="get /data/projects/{projectId}/queries/{queryId}">client.data.projects.queries.<a href="./src/resources/data/projects/queries.ts">retrieve</a>(queryID, { ...params }) -> Query</code>
- <code title="put /data/projects/{projectId}/queries/{queryId}">client.data.projects.queries.<a href="./src/resources/data/projects/queries.ts">update</a>(queryID, { ...params }) -> Query</code>
- <code title="get /data/projects/{projectId}/queries">client.data.projects.queries.<a href="./src/resources/data/projects/queries.ts">list</a>(projectID) -> QueryListResponse</code>
- <code title="delete /data/projects/{projectId}/queries/{queryId}">client.data.projects.queries.<a href="./src/resources/data/projects/queries.ts">delete</a>(queryID, { ...params }) -> void</code>
- <code title="post /data/projects/{projectId}/queries/execute">client.data.projects.queries.<a href="./src/resources/data/projects/queries.ts">execute</a>(projectID, { ...params }) -> QueryExecuteResponse</code>

### SemanticCatalogs

Types:

- <code><a href="./src/resources/data/projects/semantic-catalogs.ts">SemanticCatalogUpdateResponse</a></code>

Methods:

- <code title="post /data/projects/{projectId}/semantic-catalogs/{catalogId}">client.data.projects.semanticCatalogs.<a href="./src/resources/data/projects/semantic-catalogs.ts">update</a>(catalogID, { ...params }) -> SemanticCatalogUpdateResponse</code>
- <code title="delete /data/projects/{projectId}/semantic-catalogs/{catalogId}/table/{tableId}">client.data.projects.semanticCatalogs.<a href="./src/resources/data/projects/semantic-catalogs.ts">delete</a>(tableID, { ...params }) -> void</code>
- <code title="post /data/projects/{projectId}/semantic-catalogs">client.data.projects.semanticCatalogs.<a href="./src/resources/data/projects/semantic-catalogs.ts">semanticCatalogs</a>(projectID, { ...params }) -> Catalog</code>
- <code title="post /data/projects/{projectId}/semantic-catalogs/{catalogId}/share">client.data.projects.semanticCatalogs.<a href="./src/resources/data/projects/semantic-catalogs.ts">share</a>(catalogID, { ...params }) -> void</code>

### Cache

Types:

- <code><a href="./src/resources/data/projects/cache/cache.ts">CacheRequest</a></code>

Methods:

- <code title="post /data/projects/{projectId}/cache">client.data.projects.cache.<a href="./src/resources/data/projects/cache/cache.ts">create</a>(projectID, { ...params }) -> Response</code>
- <code title="put /data/projects/{projectId}/cache/{cacheId}">client.data.projects.cache.<a href="./src/resources/data/projects/cache/cache.ts">update</a>(cacheID, { ...params }) -> Response</code>
- <code title="delete /data/projects/{projectId}/cache/{cacheId}">client.data.projects.cache.<a href="./src/resources/data/projects/cache/cache.ts">delete</a>(cacheID, { ...params }) -> void</code>
- <code title="post /data/projects/{projectId}/cache/batch">client.data.projects.cache.<a href="./src/resources/data/projects/cache/cache.ts">batch</a>(projectID, [ ...body ]) -> Response</code>
- <code title="post /data/projects/{projectId}/cache/{cacheId}/fullRefreshUpdate">client.data.projects.cache.<a href="./src/resources/data/projects/cache/cache.ts">fullRefreshUpdate</a>(cacheID, { ...params }) -> Response</code>
- <code title="post /data/projects/{projectId}/cache/{cacheId}/incrementalUpdate">client.data.projects.cache.<a href="./src/resources/data/projects/cache/cache.ts">incrementalUpdate</a>(cacheID, { ...params }) -> Response</code>

#### Status

Methods:

- <code title="get /data/projects/{projectId}/cache/{cacheId}/status">client.data.projects.cache.status.<a href="./src/resources/data/projects/cache/status.ts">list</a>(cacheID, { ...params }) -> Response</code>

### Catalogs

Types:

- <code><a href="./src/resources/data/projects/catalogs/catalogs.ts">Catalog</a></code>
- <code><a href="./src/resources/data/projects/catalogs/catalogs.ts">CatalogListResponse</a></code>

Methods:

- <code title="post /data/projects/{projectId}/catalogs">client.data.projects.catalogs.<a href="./src/resources/data/projects/catalogs/catalogs.ts">create</a>(projectID, { ...params }) -> Catalog</code>
- <code title="get /data/projects/{projectId}/catalogs/{catalogId}">client.data.projects.catalogs.<a href="./src/resources/data/projects/catalogs/catalogs.ts">retrieve</a>(catalogID, { ...params }) -> Catalog</code>
- <code title="get /data/projects/{projectId}/catalogs">client.data.projects.catalogs.<a href="./src/resources/data/projects/catalogs/catalogs.ts">list</a>(projectID) -> CatalogListResponse</code>
- <code title="delete /data/projects/{projectId}/catalogs/{catalogId}">client.data.projects.catalogs.<a href="./src/resources/data/projects/catalogs/catalogs.ts">delete</a>(catalogID, { ...params }) -> void</code>

#### Schemas

Types:

- <code><a href="./src/resources/data/projects/catalogs/schemas/schemas.ts">SchemaListResponse</a></code>

Methods:

- <code title="get /data/projects/{projectId}/catalogs/{catalogId}/schemas">client.data.projects.catalogs.schemas.<a href="./src/resources/data/projects/catalogs/schemas/schemas.ts">list</a>(catalogID, { ...params }) -> SchemaListResponse</code>

##### Tables

Types:

- <code><a href="./src/resources/data/projects/catalogs/schemas/tables.ts">TableListResponse</a></code>
- <code><a href="./src/resources/data/projects/catalogs/schemas/tables.ts">TableRetrieveColumnsResponse</a></code>
- <code><a href="./src/resources/data/projects/catalogs/schemas/tables.ts">TableRetrieveIsCachedResponse</a></code>
- <code><a href="./src/resources/data/projects/catalogs/schemas/tables.ts">TableRetrieveStatisticsResponse</a></code>

Methods:

- <code title="get /data/projects/{projectId}/catalogs/{catalogId}/schemas/{schemaName}/tables">client.data.projects.catalogs.schemas.tables.<a href="./src/resources/data/projects/catalogs/schemas/tables.ts">list</a>(schemaName, { ...params }) -> TableListResponse</code>
- <code title="get /data/projects/{projectId}/catalogs/{catalogId}/schemas/{schemaName}/tables/{tableName}/columns">client.data.projects.catalogs.schemas.tables.<a href="./src/resources/data/projects/catalogs/schemas/tables.ts">retrieveColumns</a>(tableName, { ...params }) -> TableRetrieveColumnsResponse</code>
- <code title="get /data/projects/{projectId}/catalogs/{catalogId}/schemas/{schemaName}/tables/{tableName}/isCached">client.data.projects.catalogs.schemas.tables.<a href="./src/resources/data/projects/catalogs/schemas/tables.ts">retrieveIsCached</a>(tableName, { ...params }) -> TableRetrieveIsCachedResponse</code>
- <code title="get /data/projects/{projectId}/catalogs/{catalogId}/schemas/{schemaName}/tables/{tableName}/statistics">client.data.projects.catalogs.schemas.tables.<a href="./src/resources/data/projects/catalogs/schemas/tables.ts">retrieveStatistics</a>(tableName, { ...params }) -> TableRetrieveStatisticsResponse</code>

#### ParametricTables

Types:

- <code><a href="./src/resources/data/projects/catalogs/parametric-tables.ts">ParametricTable</a></code>
- <code><a href="./src/resources/data/projects/catalogs/parametric-tables.ts">ParametricTableRetrieveParametricTablesResponse</a></code>

Methods:

- <code title="delete /data/projects/{projectId}/catalogs/{catalogId}/parametricTables">client.data.projects.catalogs.parametricTables.<a href="./src/resources/data/projects/catalogs/parametric-tables.ts">deleteParametricTables</a>(catalogID, { ...params }) -> void</code>
- <code title="post /data/projects/{projectId}/catalogs/{catalogId}/parametricTables">client.data.projects.catalogs.parametricTables.<a href="./src/resources/data/projects/catalogs/parametric-tables.ts">parametricTables</a>(catalogID, { ...params }) -> ParametricTable</code>
- <code title="get /data/projects/{projectId}/catalogs/{catalogId}/parametricTables">client.data.projects.catalogs.parametricTables.<a href="./src/resources/data/projects/catalogs/parametric-tables.ts">retrieveParametricTables</a>(catalogID, { ...params }) -> ParametricTableRetrieveParametricTablesResponse</code>

#### Cache

Methods:

- <code title="get /data/projects/{projectId}/catalog/{catalogId}/cache/status">client.data.projects.catalogs.cache.<a href="./src/resources/data/projects/catalogs/cache.ts">retrieveStatus</a>(catalogID, { ...params }) -> Response</code>

# Ui

## InitSession

Methods:

- <code title="post /ui/initSession">client.ui.initSession.<a href="./src/resources/ui/init-session.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /ui/initSession">client.ui.initSession.<a href="./src/resources/ui/init-session.ts">retrieve</a>({ ...params }) -> Response</code>

# SupportedDrivers

Methods:

- <code title="get /supportedDrivers">client.supportedDrivers.<a href="./src/resources/supported-drivers.ts">list</a>({ ...params }) -> Response</code>
- <code title="get /supportedDrivers/jdbc">client.supportedDrivers.<a href="./src/resources/supported-drivers.ts">retrieveJdbc</a>() -> Response</code>
- <code title="get /supportedDrivers/sql_alchemy">client.supportedDrivers.<a href="./src/resources/supported-drivers.ts">retrieveSqlAlchemy</a>({ ...params }) -> Response</code>

# Metadata

Types:

- <code><a href="./src/resources/metadata/metadata.ts">AIUsageUpdate</a></code>

Methods:

- <code title="get /metadata/{projectId}">client.metadata.<a href="./src/resources/metadata/metadata.ts">retrieve</a>(projectID, { ...params }) -> Response</code>
- <code title="post /metadata/{projectId}/semantics/{catalogId}/{schemaName}/{tableName}">client.metadata.<a href="./src/resources/metadata/metadata.ts">generateSemantics</a>(tableName, { ...params }) -> Response</code>
- <code title="get /metadata/{projectId}/query">client.metadata.<a href="./src/resources/metadata/metadata.ts">query</a>(projectID, { ...params }) -> Response</code>
- <code title="post /metadata/{projectId}/refresh">client.metadata.<a href="./src/resources/metadata/metadata.ts">refresh</a>(projectID, { ...params }) -> Response</code>
- <code title="put /metadata/{projectId}/{catalogId}">client.metadata.<a href="./src/resources/metadata/metadata.ts">updateCatalog</a>(catalogID, { ...params }) -> Response</code>
- <code title="put /metadata/{projectId}/{catalogId}/{schemaName}">client.metadata.<a href="./src/resources/metadata/metadata.ts">updateSchema</a>(schemaName, { ...params }) -> Response</code>
- <code title="put /metadata/{projectId}/{catalogId}/{schemaName}/{tableName}">client.metadata.<a href="./src/resources/metadata/metadata.ts">updateTable</a>(tableName, { ...params }) -> Response</code>

## Categorical

Methods:

- <code title="delete /metadata/{projectId}/categorical/{catalogId}/{schemaName}/{tableName}/{columnName}">client.metadata.categorical.<a href="./src/resources/metadata/categorical.ts">deleteValues</a>(columnName, { ...params }) -> Response</code>
- <code title="put /metadata/{projectId}/categorical/{catalogId}/{schemaName}/{tableName}/{columnName}">client.metadata.categorical.<a href="./src/resources/metadata/categorical.ts">generateValues</a>(columnName, { ...params }) -> Response</code>

## Questions

Methods:

- <code title="get /metadata/{projectId}/questions/generate">client.metadata.questions.<a href="./src/resources/metadata/questions.ts">generate</a>(projectID, { ...params }) -> Response</code>

## Relations

Methods:

- <code title="get /metadata/{projectId}/relations/{catalogId}">client.metadata.relations.<a href="./src/resources/metadata/relations.ts">retrieve</a>(catalogID, { ...params }) -> Response</code>
- <code title="put /metadata/{projectId}/relations/{catalogId}/{schemaName}/{tableName}/{relationId}">client.metadata.relations.<a href="./src/resources/metadata/relations.ts">update</a>(relationID, { ...params }) -> Response</code>
- <code title="delete /metadata/{projectId}/relations/{catalogId}/{schemaName}/{tableName}/{relationId}">client.metadata.relations.<a href="./src/resources/metadata/relations.ts">delete</a>(relationID, { ...params }) -> Response</code>
- <code title="post /metadata/{projectId}/relations/{catalogId}/{schemaName}/{tableName}/{columnName}">client.metadata.relations.<a href="./src/resources/metadata/relations.ts">add</a>(columnName, { ...params }) -> Response</code>

## GoldenSqls

Methods:

- <code title="post /metadata/{projectId}/golden-sqls">client.metadata.goldenSqls.<a href="./src/resources/metadata/golden-sqls.ts">create</a>(projectID, { ...params }) -> Response</code>
- <code title="get /metadata/{projectId}/golden-sqls">client.metadata.goldenSqls.<a href="./src/resources/metadata/golden-sqls.ts">list</a>(projectID) -> Response</code>
- <code title="delete /metadata/{projectId}/golden-sqls/{id}">client.metadata.goldenSqls.<a href="./src/resources/metadata/golden-sqls.ts">delete</a>(id, { ...params }) -> Response</code>
- <code title="get /metadata/{projectId}/golden-sql/query">client.metadata.goldenSqls.<a href="./src/resources/metadata/golden-sqls.ts">query</a>(projectID, { ...params }) -> Response</code>

# Sql

Methods:

- <code title="post /sql/transpile/{dialect}">client.sql.<a href="./src/resources/sql.ts">transpile</a>(dialect, { ...params }) -> Response</code>

# AI

## Agent

Types:

- <code><a href="./src/resources/ai/agent/agent.ts">ChatHistoryOutput</a></code>
- <code><a href="./src/resources/ai/agent/agent.ts">AgentAskQuestionResponse</a></code>

Methods:

- <code title="post /ai/{projectId}/agent">client.ai.agent.<a href="./src/resources/ai/agent/agent.ts">askQuestion</a>(projectID, { ...params }) -> AgentAskQuestionResponse</code>

### History

Types:

- <code><a href="./src/resources/ai/agent/history.ts">ChatHistoryResponse</a></code>

Methods:

- <code title="get /ai/{projectId}/agent/history">client.ai.agent.history.<a href="./src/resources/ai/agent/history.ts">list</a>(projectID) -> ChatHistoryResponse</code>
- <code title="delete /ai/{projectId}/agent/history/{threadId}">client.ai.agent.history.<a href="./src/resources/ai/agent/history.ts">deleteThread</a>(threadID, { ...params }) -> ChatHistoryResponse</code>
- <code title="put /ai/{projectId}/agent/history/{threadId}">client.ai.agent.history.<a href="./src/resources/ai/agent/history.ts">updateThreadName</a>(threadID, { ...params }) -> ChatHistoryResponse</code>

### Workflow

Methods:

- <code title="get /ai-agent/workflow/png">client.ai.agent.workflow.<a href="./src/resources/ai/agent/workflow.ts">retrievePng</a>() -> Response</code>

### Chat

Types:

- <code><a href="./src/resources/ai/agent/chat.ts">ChatStreamMessageResponse</a></code>

Methods:

- <code title="post /ai-agent/{projectId}/chat">client.ai.agent.chat.<a href="./src/resources/ai/agent/chat.ts">sendMessage</a>(projectID, { ...params }) -> Response</code>
- <code title="post /ai-agent/{projectId}/chat/stream">client.ai.agent.chat.<a href="./src/resources/ai/agent/chat.ts">streamMessage</a>(projectID, { ...params }) -> ChatStreamMessageResponse</code>

### Threads

Methods:

- <code title="get /ai-agent/{projectId}/threads/{threadId}">client.ai.agent.threads.<a href="./src/resources/ai/agent/threads.ts">retrieve</a>(threadID, { ...params }) -> Response</code>
- <code title="get /ai-agent/{projectId}/threads">client.ai.agent.threads.<a href="./src/resources/ai/agent/threads.ts">list</a>(projectID) -> Response</code>
- <code title="delete /ai-agent/{projectId}/threads/{threadId}">client.ai.agent.threads.<a href="./src/resources/ai/agent/threads.ts">delete</a>(threadID, { ...params }) -> Response</code>
- <code title="put /ai-agent/{projectId}/threads/{threadId}">client.ai.agent.threads.<a href="./src/resources/ai/agent/threads.ts">updateDisplayName</a>(threadID, { ...params }) -> Response</code>
