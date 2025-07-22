// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Openapitomcpstainless from 'openapitomcpstainless';

const client = new Openapitomcpstainless({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cache', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.data.projects.cache.update('960bd651-7b3c-4511-9a88-18e14ac7742a', {
      projectId: 'mtKDhe1U',
      fullRefreshCacheSchedule: { expression: 'expression' },
      incrementalCacheSchedule: { expression: 'expression' },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.data.projects.cache.delete('cacheId', { projectId: 'projectId' });
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
    const response = await client.data.projects.cache.delete('cacheId', { projectId: 'projectId' });
  });

  // skipped: tests are disabled for the time being
  test.skip('batch: required and optional params', async () => {
    const response = await client.data.projects.cache.batch('projectId', {
      body: [
        {
          catalogId: '627249916703408649',
          fullRefreshCacheSchedule: { expression: 'expression' },
          incrementalCacheSchedule: { expression: 'expression' },
          schemaName: 'payment',
          tableName: 'customers',
        },
        {
          catalogId: '627249916703408649',
          fullRefreshCacheSchedule: { expression: 'expression' },
          incrementalCacheSchedule: { expression: 'PT6H' },
          schemaName: 'payment',
          tableName: 'charges',
        },
        {
          catalogId: '627249916703408649',
          fullRefreshCacheSchedule: { expression: 'PT24H' },
          incrementalCacheSchedule: { expression: 'PT6H' },
          schemaName: 'payment',
          tableName: 'invoices',
        },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('fullRefreshUpdate: required and optional params', async () => {
    const response = await client.data.projects.cache.fullRefreshUpdate('cacheId', {
      projectId: 'projectId',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('incrementalUpdate: required and optional params', async () => {
    const response = await client.data.projects.cache.incrementalUpdate('cacheId', {
      projectId: 'projectId',
    });
  });
});
