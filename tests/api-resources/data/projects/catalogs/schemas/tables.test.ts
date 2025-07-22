// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openapitomcpstainless from 'openapitomcpstainless';

const client = new Openapitomcpstainless({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tables', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.data.projects.catalogs.schemas.tables.list('public', {
      projectId: 'mtKDhe1U',
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

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.data.projects.catalogs.schemas.tables.list('public', {
      projectId: 'mtKDhe1U',
      catalogId: 'catalogId',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveColumns: only required params', async () => {
    const responsePromise = client.data.projects.catalogs.schemas.tables.retrieveColumns('actor', {
      projectId: 'mtKDhe1U',
      catalogId: 'catalogId',
      schemaName: 'public',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveColumns: required and optional params', async () => {
    const response = await client.data.projects.catalogs.schemas.tables.retrieveColumns('actor', {
      projectId: 'mtKDhe1U',
      catalogId: 'catalogId',
      schemaName: 'public',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveIsCached: only required params', async () => {
    const responsePromise = client.data.projects.catalogs.schemas.tables.retrieveIsCached('actor', {
      projectId: 'mtKDhe1U',
      catalogId: 'catalogId',
      schemaName: 'public',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveIsCached: required and optional params', async () => {
    const response = await client.data.projects.catalogs.schemas.tables.retrieveIsCached('actor', {
      projectId: 'mtKDhe1U',
      catalogId: 'catalogId',
      schemaName: 'public',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveStatistics: only required params', async () => {
    const responsePromise = client.data.projects.catalogs.schemas.tables.retrieveStatistics('actor', {
      projectId: 'mtKDhe1U',
      catalogId: 'catalogId',
      schemaName: 'public',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveStatistics: required and optional params', async () => {
    const response = await client.data.projects.catalogs.schemas.tables.retrieveStatistics('actor', {
      projectId: 'mtKDhe1U',
      catalogId: 'catalogId',
      schemaName: 'public',
    });
  });
});
