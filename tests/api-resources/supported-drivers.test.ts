// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openapitomcpstainless from 'openapitomcpstainless';

const client = new Openapitomcpstainless({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource supportedDrivers', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.supportedDrivers.list({ catalogName: 'catalogName' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Openapitomcpstainless.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveSqlAlchemy: required and optional params', async () => {
    const response = await client.supportedDrivers.retrieveSqlAlchemy({ catalogName: 'catalogName' });
  });
});
