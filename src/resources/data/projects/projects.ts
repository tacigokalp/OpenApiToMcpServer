// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as QueriesAPI from './queries';
import {
  Queries,
  Query,
  QueryCreateParams,
  QueryDeleteParams,
  QueryExecuteParams,
  QueryExecuteResponse,
  QueryListResponse,
  QueryRequest,
  QueryRetrieveParams,
  QueryUpdateParams,
  Schedule,
} from './queries';
import * as SemanticCatalogsAPI from './semantic-catalogs';
import {
  SemanticCatalogDeleteParams,
  SemanticCatalogSemanticCatalogsParams,
  SemanticCatalogShareParams,
  SemanticCatalogUpdateParams,
  SemanticCatalogUpdateResponse,
  SemanticCatalogs,
} from './semantic-catalogs';
import * as BitableAPI from './bitable/bitable';
import { Bitable, BitableDeleteParams, BitableUpdateParams } from './bitable/bitable';
import * as CacheAPI from './cache/cache';
import {
  Cache,
  CacheBatchParams,
  CacheCreateParams,
  CacheDeleteParams,
  CacheFullRefreshUpdateParams,
  CacheIncrementalUpdateParams,
  CacheRequest,
  CacheUpdateParams,
} from './cache/cache';
import * as CatalogsAPI from './catalogs/catalogs';
import {
  Catalog,
  CatalogCreateParams,
  CatalogDeleteParams,
  CatalogListResponse,
  CatalogRetrieveParams,
  Catalogs,
} from './catalogs/catalogs';
import * as TableAPI from './table/table';
import {
  Table,
  TableDeleteParams,
  TableImportParams,
  TableRetrieveSampleParams,
  TableRetrieveSampleResponse,
  TableUpdateParams,
} from './table/table';

export class Projects extends APIResource {
  bitable: BitableAPI.Bitable = new BitableAPI.Bitable(this._client);
  table: TableAPI.Table = new TableAPI.Table(this._client);
  queries: QueriesAPI.Queries = new QueriesAPI.Queries(this._client);
  semanticCatalogs: SemanticCatalogsAPI.SemanticCatalogs = new SemanticCatalogsAPI.SemanticCatalogs(
    this._client,
  );
  cache: CacheAPI.Cache = new CacheAPI.Cache(this._client);
  catalogs: CatalogsAPI.Catalogs = new CatalogsAPI.Catalogs(this._client);
}

Projects.Bitable = Bitable;
Projects.Table = Table;
Projects.Queries = Queries;
Projects.SemanticCatalogs = SemanticCatalogs;
Projects.Cache = Cache;
Projects.Catalogs = Catalogs;

export declare namespace Projects {
  export {
    Bitable as Bitable,
    type BitableUpdateParams as BitableUpdateParams,
    type BitableDeleteParams as BitableDeleteParams,
  };

  export {
    Table as Table,
    type TableRetrieveSampleResponse as TableRetrieveSampleResponse,
    type TableUpdateParams as TableUpdateParams,
    type TableDeleteParams as TableDeleteParams,
    type TableImportParams as TableImportParams,
    type TableRetrieveSampleParams as TableRetrieveSampleParams,
  };

  export {
    Queries as Queries,
    type Query as Query,
    type QueryRequest as QueryRequest,
    type Schedule as Schedule,
    type QueryListResponse as QueryListResponse,
    type QueryExecuteResponse as QueryExecuteResponse,
    type QueryCreateParams as QueryCreateParams,
    type QueryRetrieveParams as QueryRetrieveParams,
    type QueryUpdateParams as QueryUpdateParams,
    type QueryDeleteParams as QueryDeleteParams,
    type QueryExecuteParams as QueryExecuteParams,
  };

  export {
    SemanticCatalogs as SemanticCatalogs,
    type SemanticCatalogUpdateResponse as SemanticCatalogUpdateResponse,
    type SemanticCatalogUpdateParams as SemanticCatalogUpdateParams,
    type SemanticCatalogDeleteParams as SemanticCatalogDeleteParams,
    type SemanticCatalogSemanticCatalogsParams as SemanticCatalogSemanticCatalogsParams,
    type SemanticCatalogShareParams as SemanticCatalogShareParams,
  };

  export {
    Cache as Cache,
    type CacheRequest as CacheRequest,
    type CacheCreateParams as CacheCreateParams,
    type CacheUpdateParams as CacheUpdateParams,
    type CacheDeleteParams as CacheDeleteParams,
    type CacheBatchParams as CacheBatchParams,
    type CacheFullRefreshUpdateParams as CacheFullRefreshUpdateParams,
    type CacheIncrementalUpdateParams as CacheIncrementalUpdateParams,
  };

  export {
    Catalogs as Catalogs,
    type Catalog as Catalog,
    type CatalogListResponse as CatalogListResponse,
    type CatalogCreateParams as CatalogCreateParams,
    type CatalogRetrieveParams as CatalogRetrieveParams,
    type CatalogDeleteParams as CatalogDeleteParams,
  };
}
