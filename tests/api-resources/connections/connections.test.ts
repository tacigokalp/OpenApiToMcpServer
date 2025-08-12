// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openapitomcpstainless from 'openapitomcpstainless';

const client = new Openapitomcpstainless({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource connections', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.connections.create('mtKDhe1U', {});
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
    const responsePromise = client.connections.retrieve('8db17e23-29de-4dab-8886-af9717e0e742', {
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.connections.retrieve('8db17e23-29de-4dab-8886-af9717e0e742', {
      projectId: 'mtKDhe1U',
    });
  });

  test('update: required and optional params', async () => {
    const response = await client.connections.update('8db17e23-29de-4dab-8886-af9717e0e742', {
      projectId: 'mtKDhe1U',
      connectionCallback: 'connectionCallback',
      credential: { clientId: 'bar', clientSecret: 'bar', refreshToken: 'bar' },
      name: 'exampleHubspotConnection',
      type: 'hubspot',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.connections.list('mtKDhe1U');
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
    const responsePromise = client.connections.delete('8db17e23-29de-4dab-8886-af9717e0e742', {
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.connections.delete('8db17e23-29de-4dab-8886-af9717e0e742', {
      projectId: 'mtKDhe1U',
    });
  });

  // Prism tests are disabled
  test.skip('oauth2Callback', async () => {
    const responsePromise = client.connections.oauth2Callback('mtKDhe1U', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveDetail: only required params', async () => {
    const responsePromise = client.connections.retrieveDetail('8db17e23-29de-4dab-8886-af9717e0e742', {
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
  test.skip('retrieveDetail: required and optional params', async () => {
    const response = await client.connections.retrieveDetail('8db17e23-29de-4dab-8886-af9717e0e742', {
      projectId: 'mtKDhe1U',
    });
  });
});
