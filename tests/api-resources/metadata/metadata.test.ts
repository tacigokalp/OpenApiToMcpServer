// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openapitomcpstainless from 'openapitomcpstainless';

const client = new Openapitomcpstainless({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource metadata', () => {
  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.metadata.retrieve(
        'projectId',
        { catalogId: 'catalogId', schemaName: 'schemaName' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Openapitomcpstainless.NotFoundError);
  });

  test('generateSemantics: required and optional params', async () => {
    const response = await client.metadata.generateSemantics('tableName', {
      projectId: 'projectId',
      catalogId: 'catalogId',
      schemaName: 'schemaName',
      initialPrompt: 'initialPrompt',
      limit: 0,
      threadId: 'threadId',
    });
  });

  test('query: required and optional params', async () => {
    const response = await client.metadata.query('projectId', { table: 'table' });
  });

  test('refresh: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.metadata.refresh('projectId', { catalogId: 'catalogId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Openapitomcpstainless.NotFoundError);
  });

  test('updateCatalog: required and optional params', async () => {
    const response = await client.metadata.updateCatalog('catalogId', {
      projectId: 'projectId',
      useWithAI: true,
    });
  });

  test('updateSchema: required and optional params', async () => {
    const response = await client.metadata.updateSchema('schemaName', {
      projectId: 'projectId',
      catalogId: 'catalogId',
      useWithAI: true,
    });
  });

  test('updateTable: required and optional params', async () => {
    const response = await client.metadata.updateTable('tableName', {
      projectId: 'projectId',
      catalogId: 'catalogId',
      schemaName: 'schemaName',
      columns: [
        {
          categoricalValues: ['string'],
          columnDescription: 'columnDescription',
          columnName: 'columnName',
          dataType: 'dataType',
          isCategorical: true,
          isNotNull: true,
          isPrimary: true,
          isSystem: true,
          isUnique: true,
          lineage: [{ column: 'column', expression: 'expression', tables: ['string'] }],
          order: 0,
        },
      ],
      tableDescription: 'tableDescription',
      useWithAI: true,
    });
  });
});
