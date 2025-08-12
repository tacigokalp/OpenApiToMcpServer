// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openapitomcpstainless from 'openapitomcpstainless';

const client = new Openapitomcpstainless({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource relations', () => {
  test('retrieve: required and optional params', async () => {
    const response = await client.metadata.relations.retrieve('catalogId', { projectId: 'projectId' });
  });

  test('update: required and optional params', async () => {
    const response = await client.metadata.relations.update('relationId', {
      projectId: 'projectId',
      catalogId: 'catalogId',
      schemaName: 'schemaName',
      tableName: 'tableName',
      type: 'type',
    });
  });

  test('delete: required and optional params', async () => {
    const response = await client.metadata.relations.delete('relationId', {
      projectId: 'projectId',
      catalogId: 'catalogId',
      schemaName: 'schemaName',
      tableName: 'tableName',
    });
  });

  test('add: required and optional params', async () => {
    const response = await client.metadata.relations.add('columnName', {
      projectId: 'projectId',
      catalogId: 'catalogId',
      schemaName: 'schemaName',
      tableName: 'tableName',
      targetCatalogId: 'targetCatalogId',
      targetColumnName: 'targetColumnName',
      targetSchemaName: 'targetSchemaName',
      targetTableName: 'targetTableName',
      type: 'type',
    });
  });
});
