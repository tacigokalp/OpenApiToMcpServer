// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import retrieve_organizations from './organizations/retrieve-organizations';
import list_organizations from './organizations/list-organizations';
import create_organizations_workspaces from './organizations/workspaces/create-organizations-workspaces';
import retrieve_organizations_workspaces from './organizations/workspaces/retrieve-organizations-workspaces';
import update_organizations_workspaces from './organizations/workspaces/update-organizations-workspaces';
import list_organizations_workspaces from './organizations/workspaces/list-organizations-workspaces';
import delete_organizations_workspaces from './organizations/workspaces/delete-organizations-workspaces';
import create_workspaces_organizations_projects from './organizations/workspaces/projects/create-workspaces-organizations-projects';
import retrieve_workspaces_organizations_projects from './organizations/workspaces/projects/retrieve-workspaces-organizations-projects';
import update_workspaces_organizations_projects from './organizations/workspaces/projects/update-workspaces-organizations-projects';
import list_workspaces_organizations_projects from './organizations/workspaces/projects/list-workspaces-organizations-projects';
import delete_workspaces_organizations_projects from './organizations/workspaces/projects/delete-workspaces-organizations-projects';
import create_projects from './projects/create-projects';
import retrieve_projects from './projects/retrieve-projects';
import update_projects from './projects/update-projects';
import list_projects from './projects/list-projects';
import delete_projects from './projects/delete-projects';
import create_projects_api_keys from './projects/api-keys/create-projects-api-keys';
import list_projects_api_keys from './projects/api-keys/list-projects-api-keys';
import delete_projects_api_keys from './projects/api-keys/delete-projects-api-keys';
import create_connections from './connections/create-connections';
import retrieve_connections from './connections/retrieve-connections';
import update_connections from './connections/update-connections';
import list_connections from './connections/list-connections';
import delete_connections from './connections/delete-connections';
import oauth2_callback_connections from './connections/oauth2-callback-connections';
import retrieve_detail_connections from './connections/retrieve-detail-connections';
import retrieve_connections_config from './connections/config/retrieve-connections-config';
import list_connections_config from './connections/config/list-connections-config';
import update_projects_data_bitable from './data/projects/bitable/update-projects-data-bitable';
import list_projects_data_bitable from './data/projects/bitable/list-projects-data-bitable';
import delete_projects_data_bitable from './data/projects/bitable/delete-projects-data-bitable';
import create_bitable_projects_data_columns from './data/projects/bitable/columns/create-bitable-projects-data-columns';
import update_bitable_projects_data_columns from './data/projects/bitable/columns/update-bitable-projects-data-columns';
import list_bitable_projects_data_columns from './data/projects/bitable/columns/list-bitable-projects-data-columns';
import delete_bitable_projects_data_columns from './data/projects/bitable/columns/delete-bitable-projects-data-columns';
import update_projects_data_table from './data/projects/table/update-projects-data-table';
import list_projects_data_table from './data/projects/table/list-projects-data-table';
import delete_projects_data_table from './data/projects/table/delete-projects-data-table';
import import_projects_data_table from './data/projects/table/import-projects-data-table';
import retrieve_sample_projects_data_table from './data/projects/table/retrieve-sample-projects-data-table';
import create_table_projects_data_columns from './data/projects/table/columns/create-table-projects-data-columns';
import update_table_projects_data_columns from './data/projects/table/columns/update-table-projects-data-columns';
import list_table_projects_data_columns from './data/projects/table/columns/list-table-projects-data-columns';
import delete_table_projects_data_columns from './data/projects/table/columns/delete-table-projects-data-columns';
import create_projects_data_queries from './data/projects/queries/create-projects-data-queries';
import retrieve_projects_data_queries from './data/projects/queries/retrieve-projects-data-queries';
import update_projects_data_queries from './data/projects/queries/update-projects-data-queries';
import list_projects_data_queries from './data/projects/queries/list-projects-data-queries';
import delete_projects_data_queries from './data/projects/queries/delete-projects-data-queries';
import execute_projects_data_queries from './data/projects/queries/execute-projects-data-queries';
import update_projects_data_semantic_catalogs from './data/projects/semantic-catalogs/update-projects-data-semantic-catalogs';
import delete_projects_data_semantic_catalogs from './data/projects/semantic-catalogs/delete-projects-data-semantic-catalogs';
import semantic_catalogs_projects_data_semantic_catalogs from './data/projects/semantic-catalogs/semantic-catalogs-projects-data-semantic-catalogs';
import share_projects_data_semantic_catalogs from './data/projects/semantic-catalogs/share-projects-data-semantic-catalogs';
import create_projects_data_cache from './data/projects/cache/create-projects-data-cache';
import update_projects_data_cache from './data/projects/cache/update-projects-data-cache';
import delete_projects_data_cache from './data/projects/cache/delete-projects-data-cache';
import batch_projects_data_cache from './data/projects/cache/batch-projects-data-cache';
import full_refresh_update_projects_data_cache from './data/projects/cache/full-refresh-update-projects-data-cache';
import incremental_update_projects_data_cache from './data/projects/cache/incremental-update-projects-data-cache';
import list_cache_projects_data_status from './data/projects/cache/status/list-cache-projects-data-status';
import create_projects_data_catalogs from './data/projects/catalogs/create-projects-data-catalogs';
import retrieve_projects_data_catalogs from './data/projects/catalogs/retrieve-projects-data-catalogs';
import list_projects_data_catalogs from './data/projects/catalogs/list-projects-data-catalogs';
import delete_projects_data_catalogs from './data/projects/catalogs/delete-projects-data-catalogs';
import list_catalogs_projects_data_schemas from './data/projects/catalogs/schemas/list-catalogs-projects-data-schemas';
import list_schemas_catalogs_projects_data_tables from './data/projects/catalogs/schemas/tables/list-schemas-catalogs-projects-data-tables';
import retrieve_columns_schemas_catalogs_projects_data_tables from './data/projects/catalogs/schemas/tables/retrieve-columns-schemas-catalogs-projects-data-tables';
import retrieve_is_cached_schemas_catalogs_projects_data_tables from './data/projects/catalogs/schemas/tables/retrieve-is-cached-schemas-catalogs-projects-data-tables';
import retrieve_statistics_schemas_catalogs_projects_data_tables from './data/projects/catalogs/schemas/tables/retrieve-statistics-schemas-catalogs-projects-data-tables';
import delete_parametric_tables_catalogs_projects_data_parametric_tables from './data/projects/catalogs/parametric-tables/delete-parametric-tables-catalogs-projects-data-parametric-tables';
import parametric_tables_catalogs_projects_data_parametric_tables from './data/projects/catalogs/parametric-tables/parametric-tables-catalogs-projects-data-parametric-tables';
import retrieve_parametric_tables_catalogs_projects_data_parametric_tables from './data/projects/catalogs/parametric-tables/retrieve-parametric-tables-catalogs-projects-data-parametric-tables';
import retrieve_status_catalogs_projects_data_cache from './data/projects/catalogs/cache/retrieve-status-catalogs-projects-data-cache';
import create_ui_init_session from './ui/init-session/create-ui-init-session';
import retrieve_ui_init_session from './ui/init-session/retrieve-ui-init-session';
import list_supported_drivers from './supported-drivers/list-supported-drivers';
import retrieve_jdbc_supported_drivers from './supported-drivers/retrieve-jdbc-supported-drivers';
import retrieve_sql_alchemy_supported_drivers from './supported-drivers/retrieve-sql-alchemy-supported-drivers';
import retrieve_metadata from './metadata/retrieve-metadata';
import generate_semantics_metadata from './metadata/generate-semantics-metadata';
import query_metadata from './metadata/query-metadata';
import refresh_metadata from './metadata/refresh-metadata';
import update_catalog_metadata from './metadata/update-catalog-metadata';
import update_schema_metadata from './metadata/update-schema-metadata';
import update_table_metadata from './metadata/update-table-metadata';
import delete_values_metadata_categorical from './metadata/categorical/delete-values-metadata-categorical';
import generate_values_metadata_categorical from './metadata/categorical/generate-values-metadata-categorical';
import generate_metadata_questions from './metadata/questions/generate-metadata-questions';
import retrieve_metadata_relations from './metadata/relations/retrieve-metadata-relations';
import update_metadata_relations from './metadata/relations/update-metadata-relations';
import delete_metadata_relations from './metadata/relations/delete-metadata-relations';
import add_metadata_relations from './metadata/relations/add-metadata-relations';
import create_metadata_golden_sqls from './metadata/golden-sqls/create-metadata-golden-sqls';
import list_metadata_golden_sqls from './metadata/golden-sqls/list-metadata-golden-sqls';
import delete_metadata_golden_sqls from './metadata/golden-sqls/delete-metadata-golden-sqls';
import query_metadata_golden_sqls from './metadata/golden-sqls/query-metadata-golden-sqls';
import transpile_sql from './sql/transpile-sql';
import ask_question_ai_agent from './ai/agent/ask-question-ai-agent';
import list_agent_ai_history from './ai/agent/history/list-agent-ai-history';
import delete_thread_agent_ai_history from './ai/agent/history/delete-thread-agent-ai-history';
import update_thread_name_agent_ai_history from './ai/agent/history/update-thread-name-agent-ai-history';
import retrieve_png_agent_ai_workflow from './ai/agent/workflow/retrieve-png-agent-ai-workflow';
import send_message_agent_ai_chat from './ai/agent/chat/send-message-agent-ai-chat';
import stream_message_agent_ai_chat from './ai/agent/chat/stream-message-agent-ai-chat';
import retrieve_agent_ai_threads from './ai/agent/threads/retrieve-agent-ai-threads';
import list_agent_ai_threads from './ai/agent/threads/list-agent-ai-threads';
import delete_agent_ai_threads from './ai/agent/threads/delete-agent-ai-threads';
import update_display_name_agent_ai_threads from './ai/agent/threads/update-display-name-agent-ai-threads';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(retrieve_organizations);
addEndpoint(list_organizations);
addEndpoint(create_organizations_workspaces);
addEndpoint(retrieve_organizations_workspaces);
addEndpoint(update_organizations_workspaces);
addEndpoint(list_organizations_workspaces);
addEndpoint(delete_organizations_workspaces);
addEndpoint(create_workspaces_organizations_projects);
addEndpoint(retrieve_workspaces_organizations_projects);
addEndpoint(update_workspaces_organizations_projects);
addEndpoint(list_workspaces_organizations_projects);
addEndpoint(delete_workspaces_organizations_projects);
addEndpoint(create_projects);
addEndpoint(retrieve_projects);
addEndpoint(update_projects);
addEndpoint(list_projects);
addEndpoint(delete_projects);
addEndpoint(create_projects_api_keys);
addEndpoint(list_projects_api_keys);
addEndpoint(delete_projects_api_keys);
addEndpoint(create_connections);
addEndpoint(retrieve_connections);
addEndpoint(update_connections);
addEndpoint(list_connections);
addEndpoint(delete_connections);
addEndpoint(oauth2_callback_connections);
addEndpoint(retrieve_detail_connections);
addEndpoint(retrieve_connections_config);
addEndpoint(list_connections_config);
addEndpoint(update_projects_data_bitable);
addEndpoint(list_projects_data_bitable);
addEndpoint(delete_projects_data_bitable);
addEndpoint(create_bitable_projects_data_columns);
addEndpoint(update_bitable_projects_data_columns);
addEndpoint(list_bitable_projects_data_columns);
addEndpoint(delete_bitable_projects_data_columns);
addEndpoint(update_projects_data_table);
addEndpoint(list_projects_data_table);
addEndpoint(delete_projects_data_table);
addEndpoint(import_projects_data_table);
addEndpoint(retrieve_sample_projects_data_table);
addEndpoint(create_table_projects_data_columns);
addEndpoint(update_table_projects_data_columns);
addEndpoint(list_table_projects_data_columns);
addEndpoint(delete_table_projects_data_columns);
addEndpoint(create_projects_data_queries);
addEndpoint(retrieve_projects_data_queries);
addEndpoint(update_projects_data_queries);
addEndpoint(list_projects_data_queries);
addEndpoint(delete_projects_data_queries);
addEndpoint(execute_projects_data_queries);
addEndpoint(update_projects_data_semantic_catalogs);
addEndpoint(delete_projects_data_semantic_catalogs);
addEndpoint(semantic_catalogs_projects_data_semantic_catalogs);
addEndpoint(share_projects_data_semantic_catalogs);
addEndpoint(create_projects_data_cache);
addEndpoint(update_projects_data_cache);
addEndpoint(delete_projects_data_cache);
addEndpoint(batch_projects_data_cache);
addEndpoint(full_refresh_update_projects_data_cache);
addEndpoint(incremental_update_projects_data_cache);
addEndpoint(list_cache_projects_data_status);
addEndpoint(create_projects_data_catalogs);
addEndpoint(retrieve_projects_data_catalogs);
addEndpoint(list_projects_data_catalogs);
addEndpoint(delete_projects_data_catalogs);
addEndpoint(list_catalogs_projects_data_schemas);
addEndpoint(list_schemas_catalogs_projects_data_tables);
addEndpoint(retrieve_columns_schemas_catalogs_projects_data_tables);
addEndpoint(retrieve_is_cached_schemas_catalogs_projects_data_tables);
addEndpoint(retrieve_statistics_schemas_catalogs_projects_data_tables);
addEndpoint(delete_parametric_tables_catalogs_projects_data_parametric_tables);
addEndpoint(parametric_tables_catalogs_projects_data_parametric_tables);
addEndpoint(retrieve_parametric_tables_catalogs_projects_data_parametric_tables);
addEndpoint(retrieve_status_catalogs_projects_data_cache);
addEndpoint(create_ui_init_session);
addEndpoint(retrieve_ui_init_session);
addEndpoint(list_supported_drivers);
addEndpoint(retrieve_jdbc_supported_drivers);
addEndpoint(retrieve_sql_alchemy_supported_drivers);
addEndpoint(retrieve_metadata);
addEndpoint(generate_semantics_metadata);
addEndpoint(query_metadata);
addEndpoint(refresh_metadata);
addEndpoint(update_catalog_metadata);
addEndpoint(update_schema_metadata);
addEndpoint(update_table_metadata);
addEndpoint(delete_values_metadata_categorical);
addEndpoint(generate_values_metadata_categorical);
addEndpoint(generate_metadata_questions);
addEndpoint(retrieve_metadata_relations);
addEndpoint(update_metadata_relations);
addEndpoint(delete_metadata_relations);
addEndpoint(add_metadata_relations);
addEndpoint(create_metadata_golden_sqls);
addEndpoint(list_metadata_golden_sqls);
addEndpoint(delete_metadata_golden_sqls);
addEndpoint(query_metadata_golden_sqls);
addEndpoint(transpile_sql);
addEndpoint(ask_question_ai_agent);
addEndpoint(list_agent_ai_history);
addEndpoint(delete_thread_agent_ai_history);
addEndpoint(update_thread_name_agent_ai_history);
addEndpoint(retrieve_png_agent_ai_workflow);
addEndpoint(send_message_agent_ai_chat);
addEndpoint(stream_message_agent_ai_chat);
addEndpoint(retrieve_agent_ai_threads);
addEndpoint(list_agent_ai_threads);
addEndpoint(delete_agent_ai_threads);
addEndpoint(update_display_name_agent_ai_threads);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
