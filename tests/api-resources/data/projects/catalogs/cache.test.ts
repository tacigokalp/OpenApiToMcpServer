// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openapitomcpstainless from 'openapitomcpstainless';

const client = new Openapitomcpstainless({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cache', () => {
  test('retrieveStatus: required and optional params', async () => {
    const response = await client.data.projects.catalogs.cache.retrieveStatus('catalogId', {
      projectId: 'mtKDhe1U',
    });
  });
});
