// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProjectsAPI from './projects';
import {
  ProjectCreateParams,
  ProjectDeleteParams,
  ProjectListParams,
  ProjectListResponse,
  ProjectRequest,
  ProjectRetrieveParams,
  ProjectUpdateParams,
  Projects,
} from './projects';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Workspaces extends APIResource {
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);

  /**
   * The endpoint allows you to create a new Workspace within an Organization.
   *
   * A Workspace is a collaborative environment within an Organization that groups
   * Projects together. It facilitates team collaboration, resource management, and
   * organization of data operations.
   *
   * The hierarchical structure in Peaka is:
   *
   * <code>Organization (top-level) → Workspace → Project</code>
   *
   * Projects contain data catalogs and workflows that teams manage within a
   * Workspace.
   *
   * @example
   * ```ts
   * const workspace =
   *   await client.organizations.workspaces.create(
   *     'd0d3c83f-29ed-4f2e-899d-1bfa00eb3cef',
   *     {
   *       description: 'workspace description',
   *       name: 'workspace 1',
   *     },
   *   );
   * ```
   */
  create(
    organizationID: string,
    body: WorkspaceCreateParams,
    options?: RequestOptions,
  ): APIPromise<Workspace> {
    return this._client.post(path`/organizations/${organizationID}/workspaces`, { body, ...options });
  }

  /**
   * Returns details of a specified Workspace, which is a collaborative environment
   * within an Organization that groups Projects together.
   *
   * A Workspace facilitates team collaboration, resource management, and
   * organization of data operations.
   *
   * The hierarchical structure in Peaka is:
   *
   * <code>Organization (top-level) → Workspace → Project</code>
   *
   * Projects contain data catalogs and workflows that teams manage within a
   * Workspace.
   *
   * @example
   * ```ts
   * const workspace =
   *   await client.organizations.workspaces.retrieve(
   *     'workspaceId',
   *     {
   *       organizationId:
   *         'd0d3c83f-29ed-4f2e-899d-1bfa00eb3cef',
   *     },
   *   );
   * ```
   */
  retrieve(
    workspaceID: string,
    params: WorkspaceRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Workspace> {
    const { organizationId } = params;
    return this._client.get(path`/organizations/${organizationId}/workspaces/${workspaceID}`, options);
  }

  /**
   * Updates the specified Workspace within an Organization.
   *
   * A Workspace is a collaborative environment within an Organization that groups
   * Projects together, facilitating team collaboration and resource management.
   *
   * The hierarchical structure in Peaka is:
   *
   * <code>Organization (top-level) → Workspace → Project</code>
   *
   * Projects contain data catalogs and workflows that teams manage within a
   * Workspace.
   *
   * @example
   * ```ts
   * const workspace =
   *   await client.organizations.workspaces.update(
   *     '8eefb5a9-59f7-43cc-bacb-f0b0e0d1b0ea',
   *     {
   *       organizationId:
   *         'd0d3c83f-29ed-4f2e-899d-1bfa00eb3cef',
   *       description: 'workspace description',
   *       name: 'workspace new name',
   *     },
   *   );
   * ```
   */
  update(
    workspaceID: string,
    params: WorkspaceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Workspace> {
    const { organizationId, ...body } = params;
    return this._client.put(path`/organizations/${organizationId}/workspaces/${workspaceID}`, {
      body,
      ...options,
    });
  }

  /**
   * Returns all workspaces under the specified Organization.
   *
   * A Workspace is a collaborative environment within an Organization that groups
   * Projects together. It facilitates team collaboration, resource management, and
   * organization of data operations.
   *
   * The hierarchical structure in Peaka is:
   *
   * <code>Organization (top-level) → Workspace → Project</code>
   *
   * Projects contain data catalogs and workflows that teams manage within a
   * Workspace.
   *
   * @example
   * ```ts
   * const workspace =
   *   await client.organizations.workspaces.list(
   *     'organizationId',
   *   );
   * ```
   */
  list(organizationID: string, options?: RequestOptions): APIPromise<Workspace> {
    return this._client.get(path`/organizations/${organizationID}/workspaces`, options);
  }

  /**
   * Deletes a specified Workspace within an Organization.
   *
   * A Workspace is a collaborative environment that groups Projects to facilitate
   * team collaboration and resource management.
   *
   * The hierarchical structure in Peaka is:
   *
   * <code>Organization (top-level) → Workspace → Project</code>
   *
   * @example
   * ```ts
   * await client.organizations.workspaces.delete(
   *   '8eefb5a9-59f7-43cc-bacb-f0b0e0d1b0ea',
   *   {
   *     organizationId: 'd0d3c83f-29ed-4f2e-899d-1bfa00eb3cef',
   *   },
   * );
   * ```
   */
  delete(workspaceID: string, params: WorkspaceDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { organizationId } = params;
    return this._client.delete(path`/organizations/${organizationId}/workspaces/${workspaceID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Workspace {
  /**
   * The unique identifier of the workspace
   */
  id?: string;

  /**
   * The date and time the workspace was created
   */
  createdAt?: string;

  /**
   * The unique identifier of the user who created the workspace
   */
  createdBy?: string;

  /**
   * Whether the workspace is the default workspace for the organization.
   *
   * This is a backward compatibility field in order to create projects in the
   * default workspace if the workspace is not specified.
   */
  defaultWorkspace?: boolean;

  /**
   * Descriptive text about the workspace
   */
  description?: string;

  /**
   * The name of the workspace
   */
  name?: string;

  /**
   * The unique identifier of the organization to which the workspace belongs
   */
  organizationId?: string;
}

export interface WorkspaceRequest {
  /**
   * Descriptive text about the workspace
   */
  description?: string;

  /**
   * The name of the workspace
   */
  name?: string;
}

export interface WorkspaceCreateParams {
  /**
   * Descriptive text about the workspace
   */
  description?: string;

  /**
   * The name of the workspace
   */
  name?: string;
}

export interface WorkspaceRetrieveParams {
  /**
   * Organization ID
   */
  organizationId: string;
}

export interface WorkspaceUpdateParams {
  /**
   * Path param: Organization ID
   */
  organizationId: string;

  /**
   * Body param: Descriptive text about the workspace
   */
  description?: string;

  /**
   * Body param: The name of the workspace
   */
  name?: string;
}

export interface WorkspaceDeleteParams {
  /**
   * Organization ID
   */
  organizationId: string;
}

Workspaces.Projects = Projects;

export declare namespace Workspaces {
  export {
    type Workspace as Workspace,
    type WorkspaceRequest as WorkspaceRequest,
    type WorkspaceCreateParams as WorkspaceCreateParams,
    type WorkspaceRetrieveParams as WorkspaceRetrieveParams,
    type WorkspaceUpdateParams as WorkspaceUpdateParams,
    type WorkspaceDeleteParams as WorkspaceDeleteParams,
  };

  export {
    Projects as Projects,
    type ProjectRequest as ProjectRequest,
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectRetrieveParams as ProjectRetrieveParams,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectListParams as ProjectListParams,
    type ProjectDeleteParams as ProjectDeleteParams,
  };
}
