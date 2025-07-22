// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openapitomcpstainless from 'openapitomcpstainless';

const client = new Openapitomcpstainless({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource goldenSqls', () => {
  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await client.metadata.goldenSqls.delete('id', { projectId: 'projectId' });
  });

  // skipped: tests are disabled for the time being
  test.skip('query: required and optional params', async () => {
    const response = await client.metadata.goldenSqls.query('projectId', { q: 'q' });
  });
});
