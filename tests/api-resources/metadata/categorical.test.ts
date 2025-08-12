// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openapitomcpstainless from 'openapitomcpstainless';

const client = new Openapitomcpstainless({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource categorical', () => {
  test('deleteValues: required and optional params', async () => {
    const response = await client.metadata.categorical.deleteValues('columnName', {
      projectId: 'projectId',
      catalogId: 'catalogId',
      schemaName: 'schemaName',
      tableName: 'tableName',
    });
  });

  test('generateValues: required and optional params', async () => {
    const response = await client.metadata.categorical.generateValues('columnName', {
      projectId: 'projectId',
      catalogId: 'catalogId',
      schemaName: 'schemaName',
      tableName: 'tableName',
      frequency: 'frequency',
      limit: 0,
    });
  });
});
