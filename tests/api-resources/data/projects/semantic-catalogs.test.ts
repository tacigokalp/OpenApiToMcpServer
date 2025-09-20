// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openapitomcpstainless from 'openapitomcpstainless';

const client = new Openapitomcpstainless({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource semanticCatalogs', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.data.projects.semanticCatalogs.update('catalogId', {
      projectId: 'projectId',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.data.projects.semanticCatalogs.update('catalogId', {
      projectId: 'projectId',
      queryId: '788890918747898752',
      schemaName: 'mySchema',
      tableName: 'myTableName',
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.data.projects.semanticCatalogs.delete('tableId', {
      projectId: 'projectId',
      catalogId: 'catalogId',
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
    const response = await client.data.projects.semanticCatalogs.delete('tableId', {
      projectId: 'projectId',
      catalogId: 'catalogId',
    });
  });

  // Prism tests are disabled
  test.skip('semanticCatalogs', async () => {
    const responsePromise = client.data.projects.semanticCatalogs.semanticCatalogs('projectId', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('share: only required params', async () => {
    const responsePromise = client.data.projects.semanticCatalogs.share('catalogId', {
      projectId: 'projectId',
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
  test.skip('share: required and optional params', async () => {
    const response = await client.data.projects.semanticCatalogs.share('catalogId', {
      projectId: 'projectId',
      target: 'MQtMNNBY',
    });
  });
});
