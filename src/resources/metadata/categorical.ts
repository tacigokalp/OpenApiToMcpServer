// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Categorical extends APIResource {
  /**
   * Delete categorical values from the column meta and remove the scheduled job
   */
  deleteValues(
    columnName: string,
    params: CategoricalDeleteValuesParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { projectId, catalogId, schemaName, tableName } = params;
    return this._client.delete(
      path`/metadata/${projectId}/categorical/${catalogId}/${schemaName}/${tableName}/${columnName}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]), __binaryResponse: true },
    );
  }

  /**
   * Generate categorical values from the column.
   */
  generateValues(
    columnName: string,
    params: CategoricalGenerateValuesParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { projectId, catalogId, schemaName, tableName, ...body } = params;
    return this._client.put(
      path`/metadata/${projectId}/categorical/${catalogId}/${schemaName}/${tableName}/${columnName}`,
      {
        body,
        ...options,
        headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
        __binaryResponse: true,
      },
    );
  }
}

export interface CategoricalDeleteValuesParams {
  projectId: string;

  catalogId: string;

  schemaName: string;

  tableName: string;
}

export interface CategoricalGenerateValuesParams {
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
  frequency?: string;

  /**
   * Body param:
   */
  limit?: number;
}

export declare namespace Categorical {
  export {
    type CategoricalDeleteValuesParams as CategoricalDeleteValuesParams,
    type CategoricalGenerateValuesParams as CategoricalGenerateValuesParams,
  };
}
