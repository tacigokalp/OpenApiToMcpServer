// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WorkspacesAPI from './workspaces/workspaces';
import {
  Workspace,
  WorkspaceCreateParams,
  WorkspaceDeleteParams,
  WorkspaceRequest,
  WorkspaceRetrieveParams,
  WorkspaceUpdateParams,
  Workspaces,
} from './workspaces/workspaces';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Organizations extends APIResource {
  workspaces: WorkspacesAPI.Workspaces = new WorkspacesAPI.Workspaces(this._client);

  /**
   * Returns the specified Organization.
   *
   * An Organization is the highest-level resource that can contain multiple
   * Workspaces.
   *
   * @example
   * ```ts
   * const project = await client.organizations.retrieve(
   *   '8db17e23-29de-4dab-8886-af9717e0e742',
   * );
   * ```
   */
  retrieve(organizationID: string, options?: RequestOptions): APIPromise<Project> {
    return this._client.get(path`/organizations/${organizationID}`, options);
  }

  /**
   * Retrieves all the organizations accessible by the authenticated user.
   *
   * An Organization is the highest-level resource that can contain multiple
   * Workspaces.
   *
   * @example
   * ```ts
   * const organizations = await client.organizations.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<OrganizationListResponse> {
    return this._client.get('/organizations', options);
  }
}

/**
 * Project
 */
export interface Project {
  /**
   * Project ID
   */
  id?: string;

  /**
   * The date and time the project was created
   */
  createdAt?: string;

  /**
   * Descriptive text about the project
   */
  description?: string;

  /**
   * Domain of the project
   */
  domain?: string;

  /**
   * Project name
   */
  name?: string;

  /**
   * The owner of the project
   */
  owner?: string;

  /**
   * Webhook base URL
   */
  webhookBaseUrl?: string;

  /**
   * The workspace to which the project belongs
   */
  workspaceId?: string;
}

export interface OrganizationListResponse {
  /**
   * The unique identifier of the organization
   */
  id?: string;

  /**
   * The date and time the organization was created
   */
  createdAt?: string;

  /**
   * Descriptive text about the organization
   */
  description?: string;

  /**
   * The identifier of the file that contains the icon of the organization
   */
  iconFileId?: string;

  /**
   * The name of the organization
   */
  name?: string;

  /**
   * The unique identifier of the user who created the organization
   */
  owner?: string;
}

Organizations.Workspaces = Workspaces;

export declare namespace Organizations {
  export { type Project as Project, type OrganizationListResponse as OrganizationListResponse };

  export {
    Workspaces as Workspaces,
    type Workspace as Workspace,
    type WorkspaceRequest as WorkspaceRequest,
    type WorkspaceCreateParams as WorkspaceCreateParams,
    type WorkspaceRetrieveParams as WorkspaceRetrieveParams,
    type WorkspaceUpdateParams as WorkspaceUpdateParams,
    type WorkspaceDeleteParams as WorkspaceDeleteParams,
  };
}
