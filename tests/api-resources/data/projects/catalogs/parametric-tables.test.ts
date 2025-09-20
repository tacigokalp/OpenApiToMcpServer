// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openapitomcpstainless from 'openapitomcpstainless';

const client = new Openapitomcpstainless({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource parametricTables', () => {
  // Prism tests are disabled
  test.skip('deleteParametricTables: only required params', async () => {
    const responsePromise = client.data.projects.catalogs.parametricTables.deleteParametricTables(
      'catalogId',
      { projectId: 'mtKDhe1U', toSchema: 'toSchema', toTable: 'toTable' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteParametricTables: required and optional params', async () => {
    const response = await client.data.projects.catalogs.parametricTables.deleteParametricTables(
      'catalogId',
      { projectId: 'mtKDhe1U', toSchema: 'toSchema', toTable: 'toTable' },
    );
  });

  // Prism tests are disabled
  test.skip('parametricTables: only required params', async () => {
    const responsePromise = client.data.projects.catalogs.parametricTables.parametricTables('catalogId', {
      projectId: 'mtKDhe1U',
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
  test.skip('parametricTables: required and optional params', async () => {
    const response = await client.data.projects.catalogs.parametricTables.parametricTables('catalogId', {
      projectId: 'mtKDhe1U',
      fromSchema: 'fromSchema',
      fromTable: 'fromTable',
      paramValues: [{ key: 'key', value: {} }],
      toSchema: 'toSchema',
      toTable: 'toTable',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveParametricTables: only required params', async () => {
    const responsePromise = client.data.projects.catalogs.parametricTables.retrieveParametricTables(
      'catalogId',
      { projectId: 'mtKDhe1U' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveParametricTables: required and optional params', async () => {
    const response = await client.data.projects.catalogs.parametricTables.retrieveParametricTables(
      'catalogId',
      { projectId: 'mtKDhe1U' },
    );
  });
});
