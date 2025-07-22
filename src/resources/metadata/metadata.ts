// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CategoricalAPI from './categorical';
import { Categorical, CategoricalDeleteValuesParams, CategoricalGenerateValuesParams } from './categorical';
import * as GoldenSqlsAPI from './golden-sqls';
import {
  GoldenSqlCreateParams,
  GoldenSqlDeleteParams,
  GoldenSqlQueryParams,
  GoldenSqls,
} from './golden-sqls';
import * as QuestionsAPI from './questions';
import { QuestionGenerateParams, Questions } from './questions';
import * as RelationsAPI from './relations';
import {
  RelationAddParams,
  RelationDeleteParams,
  RelationRetrieveParams,
  RelationUpdateParams,
  Relations,
} from './relations';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Metadata extends APIResource {
  categorical: CategoricalAPI.Categorical = new CategoricalAPI.Categorical(this._client);
  questions: QuestionsAPI.Questions = new QuestionsAPI.Questions(this._client);
  relations: RelationsAPI.Relations = new RelationsAPI.Relations(this._client);
  goldenSqls: GoldenSqlsAPI.GoldenSqls = new GoldenSqlsAPI.GoldenSqls(this._client);

  /**
   * Get Project Metadata
   */
  retrieve(
    projectID: string,
    query: MetadataRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/metadata/${projectID}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Generate semantics for the table
   */
  generateSemantics(
    tableName: string,
    params: MetadataGenerateSemanticsParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { projectId, catalogId, schemaName, ...body } = params;
    return this._client.post(path`/metadata/${projectId}/semantics/${catalogId}/${schemaName}/${tableName}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Semantic query metadata for the project.
   */
  query(projectID: string, query: MetadataQueryParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/metadata/${projectID}/query`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Refresh Project Metadata
   */
  refresh(
    projectID: string,
    body: MetadataRefreshParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.post(path`/metadata/${projectID}/refresh`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Update Metadata ai usage per catalog level
   */
  updateCatalog(
    catalogID: string,
    params: MetadataUpdateCatalogParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { projectId, ...body } = params;
    return this._client.put(path`/metadata/${projectId}/${catalogID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Update Metadata ai usage per schema level
   */
  updateSchema(
    schemaName: string,
    params: MetadataUpdateSchemaParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { projectId, catalogId, ...body } = params;
    return this._client.put(path`/metadata/${projectId}/${catalogId}/${schemaName}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Update Metadata
   */
  updateTable(
    tableName: string,
    params: MetadataUpdateTableParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { projectId, catalogId, schemaName, ...body } = params;
    return this._client.put(path`/metadata/${projectId}/${catalogId}/${schemaName}/${tableName}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface AIUsageUpdate {
  useWithAI?: boolean;
}

export interface MetadataRetrieveParams {
  catalogId?: string;

  schemaName?: string;
}

export interface MetadataGenerateSemanticsParams {
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
   * Body param:
   */
  initialPrompt?: string;

  /**
   * Body param:
   */
  limit?: number;

  /**
   * Body param:
   */
  threadId?: string;
}

export interface MetadataQueryParams {
  table: string;
}

export interface MetadataRefreshParams {
  catalogId?: string;
}

export interface MetadataUpdateCatalogParams {
  /**
   * Path param:
   */
  projectId: string;

  /**
   * Body param:
   */
  useWithAI?: boolean;
}

export interface MetadataUpdateSchemaParams {
  /**
   * Path param:
   */
  projectId: string;

  /**
   * Path param:
   */
  catalogId: string;

  /**
   * Body param:
   */
  useWithAI?: boolean;
}

export interface MetadataUpdateTableParams {
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
   * Body param:
   */
  columns?: Array<MetadataUpdateTableParams.Column>;

  /**
   * Body param:
   */
  tableDescription?: string;

  /**
   * Body param:
   */
  useWithAI?: boolean;
}

export namespace MetadataUpdateTableParams {
  export interface Column {
    categoricalValues?: Array<string>;

    columnDescription?: string;

    columnName?: string;

    dataType?: string;

    isCategorical?: boolean;

    isNotNull?: boolean;

    isPrimary?: boolean;

    isSystem?: boolean;

    isUnique?: boolean;

    lineage?: Array<Column.Lineage>;

    order?: number;
  }

  export namespace Column {
    export interface Lineage {
      column?: string;

      expression?: string;

      tables?: Array<string>;
    }
  }
}

Metadata.Categorical = Categorical;
Metadata.Questions = Questions;
Metadata.Relations = Relations;
Metadata.GoldenSqls = GoldenSqls;

export declare namespace Metadata {
  export {
    type AIUsageUpdate as AIUsageUpdate,
    type MetadataRetrieveParams as MetadataRetrieveParams,
    type MetadataGenerateSemanticsParams as MetadataGenerateSemanticsParams,
    type MetadataQueryParams as MetadataQueryParams,
    type MetadataRefreshParams as MetadataRefreshParams,
    type MetadataUpdateCatalogParams as MetadataUpdateCatalogParams,
    type MetadataUpdateSchemaParams as MetadataUpdateSchemaParams,
    type MetadataUpdateTableParams as MetadataUpdateTableParams,
  };

  export {
    Categorical as Categorical,
    type CategoricalDeleteValuesParams as CategoricalDeleteValuesParams,
    type CategoricalGenerateValuesParams as CategoricalGenerateValuesParams,
  };

  export { Questions as Questions, type QuestionGenerateParams as QuestionGenerateParams };

  export {
    Relations as Relations,
    type RelationRetrieveParams as RelationRetrieveParams,
    type RelationUpdateParams as RelationUpdateParams,
    type RelationDeleteParams as RelationDeleteParams,
    type RelationAddParams as RelationAddParams,
  };

  export {
    GoldenSqls as GoldenSqls,
    type GoldenSqlCreateParams as GoldenSqlCreateParams,
    type GoldenSqlDeleteParams as GoldenSqlDeleteParams,
    type GoldenSqlQueryParams as GoldenSqlQueryParams,
  };
}
