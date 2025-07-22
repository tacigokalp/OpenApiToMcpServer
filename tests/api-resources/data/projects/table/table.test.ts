// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openapitomcpstainless, { toFile } from 'openapitomcpstainless';

const client = new Openapitomcpstainless({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource table', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.data.projects.table.update('tableName', { projectId: 'projectId' });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.data.projects.table.delete('tableName', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await client.data.projects.table.delete('tableName', { projectId: 'projectId' });
  });

  // skipped: tests are disabled for the time being
  test.skip('import: required and optional params', async () => {
    const response = await client.data.projects.table.import('tableName', {
      projectId: 'projectId',
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      request: 'request',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveSample: only required params', async () => {
    const responsePromise = client.data.projects.table.retrieveSample('tableName', {
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

  // skipped: tests are disabled for the time being
  test.skip('retrieveSample: required and optional params', async () => {
    const response = await client.data.projects.table.retrieveSample('tableName', { projectId: 'projectId' });
  });
});
