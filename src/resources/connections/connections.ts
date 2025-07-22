// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConfigAPI from './config';
import { Config } from './config';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Connections extends APIResource {
  config: ConfigAPI.Config = new ConfigAPI.Config(this._client);

  /**
   * This endpoint allows you to create a new connection for a specified project.
   *
   * You need to provide the project ID and the connection details in the request
   * body.
   *
   * The connection details include the name, type, and credentials required for the
   * connection.
   *
   * Depending on the connection type, additional parameters may be required under
   * credentials.
   *
   * You can view the list of supported connection types by calling the
   * /connections/config endpoint.
   *
   * You can switch examples from the second dropdown of the sample request
   * component. (cURL (first dropdown) - Stripe Connection Request (second dropdown))
   *
   * **Note**: Typically, the connection creation process involves the following
   * steps:
   *
   * 1. First, learn about the connection type and the required parameters by calling
   *    the /connections/config endpoint.
   * 2. Create a connection request with the required parameters.
   * 3. If the connection requires Oauth2 authorization, there may be additional
   *    steps to follow. See
   *    https://docs.peaka.com/how-to-guides/how-to-create-oauth2-based-connections-via-peaka
   *    for more information.
   *
   * **Example**:
   *
   * - POSTGRES Connection Configuration:
   *
   * GET /connections/config endpoint displays all of the connection types.
   *
   * GET /connection/config/POSTGRES endpoint displays the POSTGRES connection
   * configuration.
   *
   * The definition of the POSTGRES connection configuration is as follows:
   *
   * ```json
   * {
   *   "connectionType": "POSTGRES",
   *   "connectionTypeLabel": "PostgreSQL",
   *   "name": "PostgreSQL",
   *   "authorizationType": "custom",
   *   "credentialSchemaType": "postgres_credential_schema",
   *   "category": "Database",
   *   "configuration": [
   *     {
   *       "fieldName": "url",
   *       "fieldType": "text",
   *       "required": true,
   *       "description": "URL"
   *     },
   *     {
   *       "fieldName": "port",
   *       "fieldType": "number",
   *       "required": true,
   *       "description": "Port"
   *     },
   *     {
   *       "fieldName": "user",
   *       "fieldType": "text",
   *       "required": true,
   *       "description": "User"
   *     },
   *     {
   *       "fieldName": "password",
   *       "fieldType": "text",
   *       "required": true,
   *       "description": "Password"
   *     },
   *     {
   *       "fieldName": "databaseName",
   *       "fieldType": "text",
   *       "required": true,
   *       "description": "Database Name"
   *     },
   *     {
   *       "fieldName": "useSsl",
   *       "fieldType": "boolean",
   *       "required": true,
   *       "description": "Use SSL"
   *     }
   *   ],
   *   "documentationUrl": "https://docs.peaka.com/integrations/postgresql"
   * }
   * ```
   *
   * According to the POSTGRES connection configuration, the connection request
   * should include the following parameters (respecting to the required flag):
   *
   * - url: URL of the host IP or domain
   * - port: Port number
   * - user: User of the database
   * - password: Password of the user
   * - databaseName: Name of the database
   * - useSsl: Boolean value to indicate whether to use SSL
   *
   * ```json
   * {
   *   "name": "examplePostgre",
   *   "type": "POSTGRES",
   *   "credential": {
   *     "url": "<host ip or domain>",
   *     "port": 5432,
   *     "user": "userOfYourDB",
   *     "password": "passwordOfUser",
   *     "databaseName": "yourDBName",
   *     "useSsl": false
   *   }
   * }
   * ```
   *
   * @example
   * ```ts
   * const connection = await client.connections.create(
   *   'mtKDhe1U',
   *   {
   *     credential: { token: '<stripeToken>' },
   *     name: 'exampleStripeConnection21',
   *     type: 'stripe',
   *   },
   * );
   * ```
   */
  create(projectID: string, body: ConnectionCreateParams, options?: RequestOptions): APIPromise<Connection> {
    return this._client.post(path`/connections/${projectID}`, { body, ...options });
  }

  /**
   * Get a connection by ID
   *
   * @example
   * ```ts
   * const connection = await client.connections.retrieve(
   *   '8db17e23-29de-4dab-8886-af9717e0e742',
   *   { projectId: 'mtKDhe1U' },
   * );
   * ```
   */
  retrieve(
    connectionID: string,
    params: ConnectionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Connection> {
    const { projectId } = params;
    return this._client.get(path`/connections/${projectId}/${connectionID}`, options);
  }

  /**
   * Update a connection
   *
   * @example
   * ```ts
   * const connection = await client.connections.update(
   *   '8db17e23-29de-4dab-8886-af9717e0e742',
   *   {
   *     projectId: 'mtKDhe1U',
   *     credential: {
   *       clientId: '15d6b8c5-48ea-4955-8ce5-d04bb9adad25',
   *       clientSecret: '64d70b56-ae19-4fee-9fa2-3e9113bcb202',
   *       refreshToken: 'eu1-eae3-1af4-583d-91d4-f6414699feea',
   *     },
   *     name: 'exampleHubspotConnection',
   *     type: 'hubspot',
   *   },
   * );
   *
   * const content = await connection.blob();
   * console.log(content);
   * ```
   */
  update(
    connectionID: string,
    params: ConnectionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { projectId, ...body } = params;
    return this._client.put(path`/connections/${projectId}/${connectionID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * List all connections for a project
   *
   * @example
   * ```ts
   * const connection = await client.connections.list(
   *   'mtKDhe1U',
   * );
   * ```
   */
  list(projectID: string, options?: RequestOptions): APIPromise<Connection> {
    return this._client.get(path`/connections/${projectID}`, options);
  }

  /**
   * Delete a connection
   *
   * @example
   * ```ts
   * await client.connections.delete(
   *   '8db17e23-29de-4dab-8886-af9717e0e742',
   *   { projectId: 'mtKDhe1U' },
   * );
   * ```
   */
  delete(connectionID: string, params: ConnectionDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.delete(path`/connections/${projectId}/${connectionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This callback/webhook is used while creating a new connection with Oauth2. See
   * https://docs.peaka.com/how-to-guides/how-to-create-oauth2-based-connections-via-peaka
   * for more information.
   *
   * @example
   * ```ts
   * const connection = await client.connections.oauth2Callback(
   *   'mtKDhe1U',
   *   {
   *     queryParameters:
   *       'code=1234&state=xyz&param1=value1&param2=value2',
   *   },
   * );
   * ```
   */
  oauth2Callback(
    projectID: string,
    body: ConnectionOauth2CallbackParams,
    options?: RequestOptions,
  ): APIPromise<Connection> {
    return this._client.post(path`/connections/${projectID}/oauth2`, { body, ...options });
  }

  /**
   * Get connection detail by ID. Returns only non-sensitive information.
   *
   * @example
   * ```ts
   * const response = await client.connections.retrieveDetail(
   *   '8db17e23-29de-4dab-8886-af9717e0e742',
   *   { projectId: 'mtKDhe1U' },
   * );
   * ```
   */
  retrieveDetail(
    connectionID: string,
    params: ConnectionRetrieveDetailParams,
    options?: RequestOptions,
  ): APIPromise<ConnectionRetrieveDetailResponse> {
    const { projectId } = params;
    return this._client.get(path`/connections/${projectId}/${connectionID}/detail`, options);
  }
}

export interface Connection {
  /**
   * Connection ID
   */
  id?: string;

  /**
   * Name of the connection
   */
  name?: string;

  /**
   * Type of connection.
   *
   * Example: airtable for AirTable, stripe for Stripe, hubspot_access_token for
   * HubSpot (with Access Token), etc.
   *
   * Exact list can be fetched by following url: /connections/config
   */
  type?: string;

  /**
   * Oauth callback url if the connection is Oauth based.
   */
  url?: string;
}

export interface ConnectionRequest {
  /**
   * The url to redirect to after an oauth connection is established.
   */
  connectionCallback?: string;

  /**
   * Credential object for the connection.
   *
   * Its structure is dependent on the connection type and can be fetched by
   * following url: /connections/config
   */
  credential?: { [key: string]: unknown };

  /**
   * Name of the connection given by the user
   */
  name?: string;

  /**
   * Type of connection.
   *
   * Example: airtable for AirTable, stripe for Stripe, hubspot_access_token for
   * HubSpot (with Access Token), etc.
   *
   * Exact list can be fetched by following url: /connections/config
   */
  type?: string;
}

/**
 * Credential object for the connection.
 *
 * Its structure is dependent on the connection type and can be fetched by
 * following url: /connections/config
 */
export type ConnectionRetrieveDetailResponse = { [key: string]: unknown };

export interface ConnectionCreateParams {
  /**
   * The url to redirect to after an oauth connection is established.
   */
  connectionCallback?: string;

  /**
   * Credential object for the connection.
   *
   * Its structure is dependent on the connection type and can be fetched by
   * following url: /connections/config
   */
  credential?: { [key: string]: unknown };

  /**
   * Name of the connection given by the user
   */
  name?: string;

  /**
   * Type of connection.
   *
   * Example: airtable for AirTable, stripe for Stripe, hubspot_access_token for
   * HubSpot (with Access Token), etc.
   *
   * Exact list can be fetched by following url: /connections/config
   */
  type?: string;
}

export interface ConnectionRetrieveParams {
  /**
   * ID of the project
   */
  projectId: string;
}

export interface ConnectionUpdateParams {
  /**
   * Path param: ID of the project
   */
  projectId: string;

  /**
   * Body param: The url to redirect to after an oauth connection is established.
   */
  connectionCallback?: string;

  /**
   * Body param: Credential object for the connection.
   *
   * Its structure is dependent on the connection type and can be fetched by
   * following url: /connections/config
   */
  credential?: { [key: string]: unknown };

  /**
   * Body param: Name of the connection given by the user
   */
  name?: string;

  /**
   * Body param: Type of connection.
   *
   * Example: airtable for AirTable, stripe for Stripe, hubspot_access_token for
   * HubSpot (with Access Token), etc.
   *
   * Exact list can be fetched by following url: /connections/config
   */
  type?: string;
}

export interface ConnectionDeleteParams {
  /**
   * ID of the project
   */
  projectId: string;
}

export interface ConnectionOauth2CallbackParams {
  /**
   * Query parameters received from the Oauth2 redirection. Pass all query parameters
   * as a single string.
   *
   * Example:
   * "https://yourdomain.com/oauth2/mycallback?code=1234&state=xyz&param1=value1&param2=value2"
   *
   * "queryParameters": "code=1234&state=xyz&param1=value1&param2=value2"
   */
  queryParameters?: string;
}

export interface ConnectionRetrieveDetailParams {
  /**
   * ID of the project
   */
  projectId: string;
}

Connections.Config = Config;

export declare namespace Connections {
  export {
    type Connection as Connection,
    type ConnectionRequest as ConnectionRequest,
    type ConnectionRetrieveDetailResponse as ConnectionRetrieveDetailResponse,
    type ConnectionCreateParams as ConnectionCreateParams,
    type ConnectionRetrieveParams as ConnectionRetrieveParams,
    type ConnectionUpdateParams as ConnectionUpdateParams,
    type ConnectionDeleteParams as ConnectionDeleteParams,
    type ConnectionOauth2CallbackParams as ConnectionOauth2CallbackParams,
    type ConnectionRetrieveDetailParams as ConnectionRetrieveDetailParams,
  };

  export { Config as Config };
}
