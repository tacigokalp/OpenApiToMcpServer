// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CatalogsAPI from './catalogs/catalogs';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class SemanticCatalogs extends APIResource {
  /**
   * Create a semantic table
   *
   * @example
   * ```ts
   * const semanticCatalog =
   *   await client.data.projects.semanticCatalogs.update(
   *     'catalogId',
   *     {
   *       projectId: 'projectId',
   *       queryId: '788890918747898752',
   *       schemaName: 'mySchema',
   *       tableName: 'myTableName',
   *     },
   *   );
   * ```
   */
  update(
    catalogID: string,
    params: SemanticCatalogUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SemanticCatalogUpdateResponse> {
    const { projectId, ...body } = params;
    return this._client.post(path`/data/projects/${projectId}/semantic-catalogs/${catalogID}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a semantic table
   *
   * @example
   * ```ts
   * await client.data.projects.semanticCatalogs.delete(
   *   'tableId',
   *   { projectId: 'projectId', catalogId: 'catalogId' },
   * );
   * ```
   */
  delete(tableID: string, params: SemanticCatalogDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectId, catalogId } = params;
    return this._client.delete(
      path`/data/projects/${projectId}/semantic-catalogs/${catalogId}/table/${tableID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Create a semantic catalog
   *
   * @example
   * ```ts
   * const catalog =
   *   await client.data.projects.semanticCatalogs.semanticCatalogs(
   *     'projectId',
   *     { name: 'myCatalog' },
   *   );
   * ```
   */
  semanticCatalogs(
    projectID: string,
    body: SemanticCatalogSemanticCatalogsParams,
    options?: RequestOptions,
  ): APIPromise<CatalogsAPI.Catalog> {
    return this._client.post(path`/data/projects/${projectID}/semantic-catalogs`, { body, ...options });
  }

  /**
   * Share a semantic table
   *
   * @example
   * ```ts
   * await client.data.projects.semanticCatalogs.share(
   *   'catalogId',
   *   { projectId: 'projectId', target: 'MQtMNNBY' },
   * );
   * ```
   */
  share(catalogID: string, params: SemanticCatalogShareParams, options?: RequestOptions): APIPromise<void> {
    const { projectId, ...body } = params;
    return this._client.post(path`/data/projects/${projectId}/semantic-catalogs/${catalogID}/share`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Represents a table in a schema.
 */
export interface SemanticCatalogUpdateResponse {
  /**
   * The ID of the catalog that the table belongs to.
   */
  catalogId?: string;

  /**
   * The name of the catalog that the table belongs to.
   */
  catalogName?: string;

  /**
   * The name of the schema that the table belongs to.
   */
  schemaName?: string;

  /**
   * The ID of the semantic table.
   */
  tableId?: string;

  /**
   * The name of the table.
   */
  tableName?: string;
}

export interface SemanticCatalogUpdateParams {
  /**
   * Path param:
   */
  projectId: string;

  /**
   * Body param: The ID of the query which is used to populate the semantic table.
   */
  queryId?: string;

  /**
   * Body param: The name of the schema.
   */
  schemaName?: string;

  /**
   * Body param: The name of the table.
   */
  tableName?: string;
}

export interface SemanticCatalogDeleteParams {
  projectId: string;

  catalogId: string;
}

export interface SemanticCatalogSemanticCatalogsParams {
  /**
   * Name of the catalog
   */
  name?: string;
}

export interface SemanticCatalogShareParams {
  /**
   * Path param:
   */
  projectId: string;

  /**
   * Body param: Target Project ID
   */
  target?: string;
}

export declare namespace SemanticCatalogs {
  export {
    type SemanticCatalogUpdateResponse as SemanticCatalogUpdateResponse,
    type SemanticCatalogUpdateParams as SemanticCatalogUpdateParams,
    type SemanticCatalogDeleteParams as SemanticCatalogDeleteParams,
    type SemanticCatalogSemanticCatalogsParams as SemanticCatalogSemanticCatalogsParams,
    type SemanticCatalogShareParams as SemanticCatalogShareParams,
  };
}
