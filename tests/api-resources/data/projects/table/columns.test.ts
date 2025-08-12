// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openapitomcpstainless from 'openapitomcpstainless';

const client = new Openapitomcpstainless({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource columns', () => {
  test('create: required and optional params', async () => {
    const response = await client.data.projects.table.columns.create('tableName', {
      projectId: 'projectId',
      dataType: 'dataType',
      defaultValue: 'defaultValue',
      displayName: 'displayName',
      isNotNull: true,
      isUnique: true,
      name: 'name',
    });
  });

  test('update: required and optional params', async () => {
    const response = await client.data.projects.table.columns.update('columnName', {
      projectId: 'projectId',
      tableName: 'tableName',
      dataType: 'dataType',
      defaultValue: 'defaultValue',
      displayName: 'displayName',
      isNotNull: true,
      isUnique: true,
      name: 'name',
    });
  });

  test('list: required and optional params', async () => {
    const response = await client.data.projects.table.columns.list('tableName', { projectId: 'projectId' });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.data.projects.table.columns.delete('columnName', {
      projectId: 'projectId',
      tableName: 'tableName',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.data.projects.table.columns.delete('columnName', {
      projectId: 'projectId',
      tableName: 'tableName',
    });
  });
});
