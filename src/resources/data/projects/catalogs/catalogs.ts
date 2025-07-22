// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CacheAPI from './cache';
import { Cache, CacheRetrieveStatusParams } from './cache';
import * as ParametricTablesAPI from './parametric-tables';
import {
  ParametricTable,
  ParametricTableDeleteParametricTablesParams,
  ParametricTableParametricTablesParams,
  ParametricTableRetrieveParametricTablesParams,
  ParametricTableRetrieveParametricTablesResponse,
  ParametricTables,
} from './parametric-tables';
import * as SchemasAPI from './schemas/schemas';
import { SchemaListParams, SchemaListResponse, Schemas } from './schemas/schemas';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Catalogs extends APIResource {
  schemas: SchemasAPI.Schemas = new SchemasAPI.Schemas(this._client);
  parametricTables: ParametricTablesAPI.ParametricTables = new ParametricTablesAPI.ParametricTables(
    this._client,
  );
  cache: CacheAPI.Cache = new CacheAPI.Cache(this._client);

  /**
   * Create Catalog
   *
   * @example
   * ```ts
   * const catalog = await client.data.projects.catalogs.create(
   *   'mtKDhe1U',
   *   {
   *     connectionId: '8db17e23-29de-4dab-8886-af9717e0e742',
   *     name: 'exampleAirtableCatalog',
   *   },
   * );
   * ```
   */
  create(projectID: string, body: CatalogCreateParams, options?: RequestOptions): APIPromise<Catalog> {
    return this._client.post(path`/data/projects/${projectID}/catalogs`, { body, ...options });
  }

  /**
   * Read Catalog
   *
   * @example
   * ```ts
   * const catalog =
   *   await client.data.projects.catalogs.retrieve(
   *     'catalogId',
   *     { projectId: 'mtKDhe1U' },
   *   );
   * ```
   */
  retrieve(catalogID: string, params: CatalogRetrieveParams, options?: RequestOptions): APIPromise<Catalog> {
    const { projectId } = params;
    return this._client.get(path`/data/projects/${projectId}/catalogs/${catalogID}`, options);
  }

  /**
   * List Catalogs
   *
   * @example
   * ```ts
   * const catalogs = await client.data.projects.catalogs.list(
   *   'mtKDhe1U',
   * );
   * ```
   */
  list(projectID: string, options?: RequestOptions): APIPromise<CatalogListResponse> {
    return this._client.get(path`/data/projects/${projectID}/catalogs`, options);
  }

  /**
   * Delete Catalog
   *
   * @example
   * ```ts
   * await client.data.projects.catalogs.delete('catalogId', {
   *   projectId: 'mtKDhe1U',
   * });
   * ```
   */
  delete(catalogID: string, params: CatalogDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId } = params;
    return this._client.delete(path`/data/projects/${projectId}/catalogs/${catalogID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * This class represents a Catalog. It contains the id, name, display name, type,
 * and connection ID of the catalog.
 */
export interface Catalog {
  /**
   * The ID of the catalog.
   */
  id?: string;

  /**
   * The type of the catalog.
   */
  catalogType?: string;

  /**
   * The connection ID of the catalog.
   */
  connectionId?: string;

  /**
   * The display name of the catalog.
   */
  displayName?: string;

  /**
   * The name of the catalog.
   */
  name?: string;
}

export type CatalogListResponse = Array<Catalog>;

export interface CatalogCreateParams {
  /**
   * Connection ID.
   *
   * This is the ID of the connection that is used to connect to the catalog.
   *
   * You must create a connection before creating a catalog.
   */
  connectionId?: string;

  /**
   * Extra parameters for the catalog
   */
  extraParameters?: { [key: string]: unknown };

  /**
   * Name of the catalog
   */
  name?: string;
}

export interface CatalogRetrieveParams {
  /**
   * ID of the project
   */
  projectId: string;
}

export interface CatalogDeleteParams {
  /**
   * ID of the project
   */
  projectId: string;
}

Catalogs.Schemas = Schemas;
Catalogs.ParametricTables = ParametricTables;
Catalogs.Cache = Cache;

export declare namespace Catalogs {
  export {
    type Catalog as Catalog,
    type CatalogListResponse as CatalogListResponse,
    type CatalogCreateParams as CatalogCreateParams,
    type CatalogRetrieveParams as CatalogRetrieveParams,
    type CatalogDeleteParams as CatalogDeleteParams,
  };

  export {
    Schemas as Schemas,
    type SchemaListResponse as SchemaListResponse,
    type SchemaListParams as SchemaListParams,
  };

  export {
    ParametricTables as ParametricTables,
    type ParametricTable as ParametricTable,
    type ParametricTableRetrieveParametricTablesResponse as ParametricTableRetrieveParametricTablesResponse,
    type ParametricTableDeleteParametricTablesParams as ParametricTableDeleteParametricTablesParams,
    type ParametricTableParametricTablesParams as ParametricTableParametricTablesParams,
    type ParametricTableRetrieveParametricTablesParams as ParametricTableRetrieveParametricTablesParams,
  };

  export { Cache as Cache, type CacheRetrieveStatusParams as CacheRetrieveStatusParams };
}
