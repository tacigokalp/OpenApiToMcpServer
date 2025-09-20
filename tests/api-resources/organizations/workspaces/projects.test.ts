// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openapitomcpstainless from 'openapitomcpstainless';

const client = new Openapitomcpstainless({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource projects', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.organizations.workspaces.projects.create('workspaceId', {
      organizationId: 'organizationId',
      name: 'Sample Project Name',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.organizations.workspaces.projects.create('workspaceId', {
      organizationId: 'organizationId',
      name: 'Sample Project Name',
      description: 'This is a project that does something',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.organizations.workspaces.projects.retrieve('projectId', {
      organizationId: 'organizationId',
      workspaceId: 'workspaceId',
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
    const response = await client.organizations.workspaces.projects.retrieve('projectId', {
      organizationId: 'organizationId',
      workspaceId: 'workspaceId',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.organizations.workspaces.projects.update('projectId', {
      organizationId: 'organizationId',
      workspaceId: 'workspaceId',
      name: 'Updated Project Name',
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
    const response = await client.organizations.workspaces.projects.update('projectId', {
      organizationId: 'organizationId',
      workspaceId: 'workspaceId',
      name: 'Updated Project Name',
      description:
        'Iste aut quo maxime dolorem atque. Alias neque porro. Fugiat ipsam similique voluptate quam libero deserunt consequuntur dolorum nobis.',
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.organizations.workspaces.projects.list('workspaceId', {
      organizationId: 'organizationId',
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
  test.skip('list: required and optional params', async () => {
    const response = await client.organizations.workspaces.projects.list('workspaceId', {
      organizationId: 'organizationId',
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.organizations.workspaces.projects.delete('projectId', {
      organizationId: 'organizationId',
      workspaceId: 'workspaceId',
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
    const response = await client.organizations.workspaces.projects.delete('projectId', {
      organizationId: 'organizationId',
      workspaceId: 'workspaceId',
    });
  });
});
