// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openapitomcpstainless from 'openapitomcpstainless';

const client = new Openapitomcpstainless({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource threads', () => {
  test('retrieve: required and optional params', async () => {
    const response = await client.ai.agent.threads.retrieve('threadId', { projectId: 'projectId' });
  });

  test('delete: required and optional params', async () => {
    const response = await client.ai.agent.threads.delete('threadId', { projectId: 'projectId' });
  });

  test('updateDisplayName: required and optional params', async () => {
    const response = await client.ai.agent.threads.updateDisplayName('threadId', {
      projectId: 'projectId',
      displayName: 'displayName',
    });
  });
});
