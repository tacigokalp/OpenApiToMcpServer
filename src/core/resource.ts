// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Openapitomcpstainless } from '../client';

export abstract class APIResource {
  protected _client: Openapitomcpstainless;

  constructor(client: Openapitomcpstainless) {
    this._client = client;
  }
}
