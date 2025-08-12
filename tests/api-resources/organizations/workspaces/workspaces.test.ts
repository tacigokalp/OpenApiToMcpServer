// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openapitomcpstainless from 'openapitomcpstainless';

const client = new Openapitomcpstainless({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource workspaces', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.organizations.workspaces.create(
      'd0d3c83f-29ed-4f2e-899d-1bfa00eb3cef',
      {},
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
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.organizations.workspaces.retrieve('workspaceId', {
      organizationId: 'd0d3c83f-29ed-4f2e-899d-1bfa00eb3cef',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.organizations.workspaces.retrieve('workspaceId', {
      organizationId: 'd0d3c83f-29ed-4f2e-899d-1bfa00eb3cef',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.organizations.workspaces.update('8eefb5a9-59f7-43cc-bacb-f0b0e0d1b0ea', {
      organizationId: 'd0d3c83f-29ed-4f2e-899d-1bfa00eb3cef',
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
    const response = await client.organizations.workspaces.update('8eefb5a9-59f7-43cc-bacb-f0b0e0d1b0ea', {
      organizationId: 'd0d3c83f-29ed-4f2e-899d-1bfa00eb3cef',
      description: 'workspace description',
      name: 'workspace new name',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.organizations.workspaces.list('organizationId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.organizations.workspaces.delete('8eefb5a9-59f7-43cc-bacb-f0b0e0d1b0ea', {
      organizationId: 'd0d3c83f-29ed-4f2e-899d-1bfa00eb3cef',
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
    const response = await client.organizations.workspaces.delete('8eefb5a9-59f7-43cc-bacb-f0b0e0d1b0ea', {
      organizationId: 'd0d3c83f-29ed-4f2e-899d-1bfa00eb3cef',
    });
  });
});
