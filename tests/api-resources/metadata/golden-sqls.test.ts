// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openapitomcpstainless from 'openapitomcpstainless';

const client = new Openapitomcpstainless({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource goldenSqls', () => {
  test('delete: required and optional params', async () => {
    const response = await client.metadata.goldenSqls.delete('id', { projectId: 'projectId' });
  });

  test('query: required and optional params', async () => {
    const response = await client.metadata.goldenSqls.query('projectId', { q: 'q' });
  });
});
