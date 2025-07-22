// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrganizationsAPI from '../organizations/organizations';
import * as APIKeysAPI from './api-keys';
import { APIKeyCreateParams, APIKeyCreateResponse, APIKeyDeleteParams, APIKeys } from './api-keys';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Projects extends APIResource {
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);

  /**
   * Create Project
   *
   * @deprecated
   */
  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<OrganizationsAPI.Project> {
    return this._client.post('/projects', { body, ...options });
  }

  /**
   * Read Project
   *
   * @deprecated
   */
  retrieve(projectID: string, options?: RequestOptions): APIPromise<OrganizationsAPI.Project> {
    return this._client.get(path`/projects/${projectID}`, options);
  }

  /**
   * Update Project
   *
   * @deprecated
   */
  update(
    projectID: string,
    body: ProjectUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OrganizationsAPI.Project> {
    return this._client.put(path`/projects/${projectID}`, { body, ...options });
  }

  /**
   * List Projects
   *
   * @deprecated
   */
  list(options?: RequestOptions): APIPromise<ProjectListResponse> {
    return this._client.get('/projects', options);
  }

  /**
   * Delete Project
   *
   * @deprecated
   */
  delete(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/projects/${projectID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type ProjectListResponse = Array<OrganizationsAPI.Project>;

export interface ProjectCreateParams {
  /**
   * Project name
   */
  name: string;

  /**
   * Descriptive text about the project
   */
  description?: string;
}

export interface ProjectUpdateParams {
  /**
   * Project name
   */
  name: string;

  /**
   * Descriptive text about the project
   */
  description?: string;
}

Projects.APIKeys = APIKeys;

export declare namespace Projects {
  export {
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
  };

  export {
    APIKeys as APIKeys,
    type APIKeyCreateResponse as APIKeyCreateResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyDeleteParams as APIKeyDeleteParams,
  };
}
