// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InitSessionAPI from './init-session';
import { InitSession, InitSessionCreateParams, InitSessionRetrieveParams } from './init-session';

export class Ui extends APIResource {
  initSession: InitSessionAPI.InitSession = new InitSessionAPI.InitSession(this._client);
}

Ui.InitSession = InitSession;

export declare namespace Ui {
  export {
    InitSession as InitSession,
    type InitSessionCreateParams as InitSessionCreateParams,
    type InitSessionRetrieveParams as InitSessionRetrieveParams,
  };
}
