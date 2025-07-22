// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relations extends APIResource {
  /**
   * Get Project Catalog Metadata Relations
   */
  retrieve(
    catalogID: string,
    params: RelationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { projectId } = params;
    return this._client.get(path`/metadata/${projectId}/relations/${catalogID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Update Relation From Metadata
   */
  update(relationID: string, params: RelationUpdateParams, options?: RequestOptions): APIPromise<Response> {
    const { projectId, catalogId, schemaName, tableName, ...body } = params;
    return this._client.put(
      path`/metadata/${projectId}/relations/${catalogId}/${schemaName}/${tableName}/${relationID}`,
      {
        body,
        ...options,
        headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
        __binaryResponse: true,
      },
    );
  }

  /**
   * Delete Relation From Metadata
   */
  delete(relationID: string, params: RelationDeleteParams, options?: RequestOptions): APIPromise<Response> {
    const { projectId, catalogId, schemaName, tableName } = params;
    return this._client.delete(
      path`/metadata/${projectId}/relations/${catalogId}/${schemaName}/${tableName}/${relationID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]), __binaryResponse: true },
    );
  }

  /**
   * Add Relation To Metadata
   */
  add(columnName: string, params: RelationAddParams, options?: RequestOptions): APIPromise<Response> {
    const { projectId, catalogId, schemaName, tableName, ...body } = params;
    return this._client.post(
      path`/metadata/${projectId}/relations/${catalogId}/${schemaName}/${tableName}/${columnName}`,
      {
        body,
        ...options,
        headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
        __binaryResponse: true,
      },
    );
  }
}

export interface RelationRetrieveParams {
  projectId: string;
}

export interface RelationUpdateParams {
  /**
   * Path param:
   */
  projectId: string;

  /**
   * Path param:
   */
  catalogId: string;

  /**
   * Path param:
   */
  schemaName: string;

  /**
   * Path param:
   */
  tableName: string;

  /**
   * Body param:
   */
  type?: string;
}

export interface RelationDeleteParams {
  projectId: string;

  catalogId: string;

  schemaName: string;

  tableName: string;
}

export interface RelationAddParams {
  /**
   * Path param:
   */
  projectId: string;

  /**
   * Path param:
   */
  catalogId: string;

  /**
   * Path param:
   */
  schemaName: string;

  /**
   * Path param:
   */
  tableName: string;

  /**
   * Body param:
   */
  targetCatalogId?: string;

  /**
   * Body param:
   */
  targetColumnName?: string;

  /**
   * Body param:
   */
  targetSchemaName?: string;

  /**
   * Body param:
   */
  targetTableName?: string;

  /**
   * Body param:
   */
  type?: string;
}

export declare namespace Relations {
  export {
    type RelationRetrieveParams as RelationRetrieveParams,
    type RelationUpdateParams as RelationUpdateParams,
    type RelationDeleteParams as RelationDeleteParams,
    type RelationAddParams as RelationAddParams,
  };
}
