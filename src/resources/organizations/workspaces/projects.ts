// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OrganizationsAPI from '../organizations';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Projects extends APIResource {
  /**
   * Create Project
   *
   * @example
   * ```ts
   * const project =
   *   await client.organizations.workspaces.projects.create(
   *     'workspaceId',
   *     {
   *       organizationId: 'organizationId',
   *       name: 'Sample Project Name',
   *     },
   *   );
   * ```
   */
  create(
    workspaceID: string,
    params: ProjectCreateParams,
    options?: RequestOptions,
  ): APIPromise<OrganizationsAPI.Project> {
    const { organizationId, ...body } = params;
    return this._client.post(path`/organizations/${organizationId}/workspaces/${workspaceID}/projects`, {
      body,
      ...options,
    });
  }

  /**
   * Read Project
   *
   * @example
   * ```ts
   * const project =
   *   await client.organizations.workspaces.projects.retrieve(
   *     'projectId',
   *     {
   *       organizationId: 'organizationId',
   *       workspaceId: 'workspaceId',
   *     },
   *   );
   * ```
   */
  retrieve(
    projectID: string,
    params: ProjectRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<OrganizationsAPI.Project> {
    const { organizationId, workspaceId } = params;
    return this._client.get(
      path`/organizations/${organizationId}/workspaces/${workspaceId}/projects/${projectID}`,
      options,
    );
  }

  /**
   * Update Project
   *
   * @example
   * ```ts
   * const project =
   *   await client.organizations.workspaces.projects.update(
   *     'projectId',
   *     {
   *       organizationId: 'organizationId',
   *       workspaceId: 'workspaceId',
   *       name: 'Updated Project Name',
   *       description:
   *         'Iste aut quo maxime dolorem atque. Alias neque porro. Fugiat ipsam similique voluptate quam libero deserunt consequuntur dolorum nobis.',
   *     },
   *   );
   * ```
   */
  update(
    projectID: string,
    params: ProjectUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OrganizationsAPI.Project> {
    const { organizationId, workspaceId, ...body } = params;
    return this._client.put(
      path`/organizations/${organizationId}/workspaces/${workspaceId}/projects/${projectID}`,
      { body, ...options },
    );
  }

  /**
   * Fetches all projects within the given Workspace.
   *
   * A unit of work where queries, data tables, and semantic catalogs are managed.
   * Projects live inside workspaces.
   *
   * @example
   * ```ts
   * const projects =
   *   await client.organizations.workspaces.projects.list(
   *     'workspaceId',
   *     { organizationId: 'organizationId' },
   *   );
   * ```
   */
  list(
    workspaceID: string,
    params: ProjectListParams,
    options?: RequestOptions,
  ): APIPromise<ProjectListResponse> {
    const { organizationId } = params;
    return this._client.get(
      path`/organizations/${organizationId}/workspaces/${workspaceID}/projects`,
      options,
    );
  }

  /**
   * Delete Project
   *
   * @example
   * ```ts
   * await client.organizations.workspaces.projects.delete(
   *   'projectId',
   *   {
   *     organizationId: 'organizationId',
   *     workspaceId: 'workspaceId',
   *   },
   * );
   * ```
   */
  delete(projectID: string, params: ProjectDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId, workspaceId } = params;
    return this._client.delete(
      path`/organizations/${organizationId}/workspaces/${workspaceId}/projects/${projectID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface ProjectRequest {
  /**
   * Project name
   */
  name: string;

  /**
   * Descriptive text about the project
   */
  description?: string;
}

export type ProjectListResponse = Array<OrganizationsAPI.Project>;

export interface ProjectCreateParams {
  /**
   * Path param:
   */
  organizationId: string;

  /**
   * Body param: Project name
   */
  name: string;

  /**
   * Body param: Descriptive text about the project
   */
  description?: string;
}

export interface ProjectRetrieveParams {
  organizationId: string;

  workspaceId: string;
}

export interface ProjectUpdateParams {
  /**
   * Path param:
   */
  organizationId: string;

  /**
   * Path param:
   */
  workspaceId: string;

  /**
   * Body param: Project name
   */
  name: string;

  /**
   * Body param: Descriptive text about the project
   */
  description?: string;
}

export interface ProjectListParams {
  organizationId: string;
}

export interface ProjectDeleteParams {
  organizationId: string;

  workspaceId: string;
}

export declare namespace Projects {
  export {
    type ProjectRequest as ProjectRequest,
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectRetrieveParams as ProjectRetrieveParams,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectListParams as ProjectListParams,
    type ProjectDeleteParams as ProjectDeleteParams,
  };
}
