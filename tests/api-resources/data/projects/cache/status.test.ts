// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openapitomcpstainless from 'openapitomcpstainless';

const client = new Openapitomcpstainless({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource status', () => {
  test('list: required and optional params', async () => {
    const response = await client.data.projects.cache.status.list('960bd651-7b3c-4511-9a88-18e14ac7742a', {
      projectId: 'mtKDhe1U',
      excludeLogs: true,
    });
  });
});
