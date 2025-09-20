# Changelog

## 0.0.1-alpha.1 (2025-09-20)

Full Changelog: [v0.0.1-alpha.0...v0.0.1-alpha.1](https://github.com/tacigokalp/OpenApiToMcpServer/compare/v0.0.1-alpha.0...v0.0.1-alpha.1)

### Features

* **mcp:** add code execution tool ([efab1cf](https://github.com/tacigokalp/OpenApiToMcpServer/commit/efab1cf7a5d7997b67074dfe669f3f5d442811a6))
* **mcp:** add docs search tool ([260516e](https://github.com/tacigokalp/OpenApiToMcpServer/commit/260516ea313298439acde1a0095dc7c856db9303))
* **mcp:** add logging when environment variable is set ([b92f44c](https://github.com/tacigokalp/OpenApiToMcpServer/commit/b92f44cb44299693ddb3b3ecbc985173c006d4d7))
* **mcp:** add option to infer mcp client ([df36373](https://github.com/tacigokalp/OpenApiToMcpServer/commit/df3637340ad50a0dedeb65e1cdd2dc1b9a1f7243))
* **mcp:** add unix socket option for remote MCP ([ee5d737](https://github.com/tacigokalp/OpenApiToMcpServer/commit/ee5d7374623a5fec892acd9bde4ad327f68bf82e))
* **mcp:** allow setting logging level ([17b0386](https://github.com/tacigokalp/OpenApiToMcpServer/commit/17b03869697c37af2dcbd84c508c17312380e0d9))
* **mcp:** expose client options in `streamableHTTPApp` ([df531d0](https://github.com/tacigokalp/OpenApiToMcpServer/commit/df531d0852c8a417c0983539d7ecf0519027457b))
* **mcp:** parse query string as mcp client options in mcp server ([0d4c0c0](https://github.com/tacigokalp/OpenApiToMcpServer/commit/0d4c0c04d72210a006ba64c64641fd312d2577b5))
* **mcp:** remote server with passthru auth ([9f16d66](https://github.com/tacigokalp/OpenApiToMcpServer/commit/9f16d66079105cc35bb34aca01447aa31558a31e))


### Bug Fixes

* coerce nullable values to undefined ([7700272](https://github.com/tacigokalp/OpenApiToMcpServer/commit/77002729e5b6d544bd1f15426323d00831e11c62))
* **mcp:** avoid sending `jq_filter` to base API ([e4975b5](https://github.com/tacigokalp/OpenApiToMcpServer/commit/e4975b514cd23f565a80201895effa18abf7cbad))
* **mcp:** fix bug in header handling ([c80d2c1](https://github.com/tacigokalp/OpenApiToMcpServer/commit/c80d2c17d06cc6d7f8c7b8d131e49913ac1f2904))
* **mcp:** fix query options parsing ([45d028f](https://github.com/tacigokalp/OpenApiToMcpServer/commit/45d028f12031fe19535bf3d5cc0ca3a76a0e702b))
* **mcp:** generate additionalProperties=true for map schemas to avoid validation issues ([ada8df4](https://github.com/tacigokalp/OpenApiToMcpServer/commit/ada8df4c8ce722dd122c16f42b53081a6ac5cd65))
* **mcp:** reverse validJson capability option and limit scope ([60178e4](https://github.com/tacigokalp/OpenApiToMcpServer/commit/60178e43bbe231c63869edeaba05f15f3accfd5b))
* **mcp:** update dxt manifest.json files ([4e654ea](https://github.com/tacigokalp/OpenApiToMcpServer/commit/4e654eac95ff348e1fa017f9cb557a63d48ed124))


### Chores

* add package to package.json ([f30644d](https://github.com/tacigokalp/OpenApiToMcpServer/commit/f30644d2c246fc68fd0365f66eeecaddecd3ce80))
* ci build action ([41352d7](https://github.com/tacigokalp/OpenApiToMcpServer/commit/41352d7e9480158dff20adb0237a0e44c759863e))
* **client:** qualify global Blob ([e2c5725](https://github.com/tacigokalp/OpenApiToMcpServer/commit/e2c5725670550701cad147a9c0b1513f2cbe7934))
* **codegen:** internal codegen update ([14b0253](https://github.com/tacigokalp/OpenApiToMcpServer/commit/14b02536beb0d409cccbd8a747847f857d7b7df4))
* configure new SDK language ([4f85cc3](https://github.com/tacigokalp/OpenApiToMcpServer/commit/4f85cc31afd04f10fd68662492ce76aae1a94861))
* **deps:** update dependency @types/node to v20.17.58 ([201738f](https://github.com/tacigokalp/OpenApiToMcpServer/commit/201738fccc0bbda564e7dba67244251b83349e5e))
* do not install brew dependencies in ./scripts/bootstrap by default ([3aa14c3](https://github.com/tacigokalp/OpenApiToMcpServer/commit/3aa14c3ccecd4d3b60b359462da2c1153aa19801))
* **internal:** codegen related update ([1660309](https://github.com/tacigokalp/OpenApiToMcpServer/commit/1660309f836072fecef734e3cd610ba9f779b4bc))
* **internal:** codegen related update ([8efb33e](https://github.com/tacigokalp/OpenApiToMcpServer/commit/8efb33eca78952eaa008ee35a42ccc500d93bfe4))
* **internal:** codegen related update ([0997c30](https://github.com/tacigokalp/OpenApiToMcpServer/commit/0997c30ecd6289bf20b563f69a038a34a5435fe0))
* **internal:** codegen related update ([fccadf0](https://github.com/tacigokalp/OpenApiToMcpServer/commit/fccadf0a0748977108c4af981a63961771c73b2f))
* **internal:** codegen related update ([ce090e6](https://github.com/tacigokalp/OpenApiToMcpServer/commit/ce090e6615530c1668a005491b1bd326cf5b0710))
* **internal:** codegen related update ([b278dad](https://github.com/tacigokalp/OpenApiToMcpServer/commit/b278dad3e58fce893468bfc2c84e02f038ae02cf))
* **internal:** formatting change ([a307fb8](https://github.com/tacigokalp/OpenApiToMcpServer/commit/a307fb8dcf4db4979636286f616584c75efe81fc))
* **internal:** gitignore .mcpb files ([74e2523](https://github.com/tacigokalp/OpenApiToMcpServer/commit/74e252335b9c7606a6b36f1ecaa8ed4706275bc5))
* **internal:** make mcp-server publishing public by defaut ([d5ff9bf](https://github.com/tacigokalp/OpenApiToMcpServer/commit/d5ff9bfbb7e8a53a101f8ebf825f998b7225dac4))
* **internal:** move publish config ([abacad8](https://github.com/tacigokalp/OpenApiToMcpServer/commit/abacad876f656102aca14f1e1fe12243c5fbba54))
* **internal:** refactor array check ([a88be85](https://github.com/tacigokalp/OpenApiToMcpServer/commit/a88be85ecccfef4ed1922751997a45256c79f2c2))
* **internal:** remove redundant imports config ([d911cad](https://github.com/tacigokalp/OpenApiToMcpServer/commit/d911cade5f0cdc5c53b1298cd7d21b4b2d90aa01))
* **internal:** update comment in script ([1989241](https://github.com/tacigokalp/OpenApiToMcpServer/commit/1989241acedf51a563bfd6703a97af388c14e071))
* **internal:** update global Error reference ([e2a74ed](https://github.com/tacigokalp/OpenApiToMcpServer/commit/e2a74ed24b15c1c29a738474da15048464f56af9))
* **mcp:** add cors to oauth metadata route ([97fe37c](https://github.com/tacigokalp/OpenApiToMcpServer/commit/97fe37c7e02cf176078cdf68788e9925677657db))
* **mcp:** document remote server in README.md ([3bb90b6](https://github.com/tacigokalp/OpenApiToMcpServer/commit/3bb90b6e64180135f10c13bec8b93d9b1214efd5))
* **mcp:** minor cleanup of types and package.json ([972e502](https://github.com/tacigokalp/OpenApiToMcpServer/commit/972e50201f38489b1a302d53fc1fcbe23134ada6))
* **mcp:** refactor streamable http transport ([3c9360d](https://github.com/tacigokalp/OpenApiToMcpServer/commit/3c9360da2bd13859892fc27d99e8928b1a2def79))
* **mcp:** rename dxt to mcpb ([6ee9f32](https://github.com/tacigokalp/OpenApiToMcpServer/commit/6ee9f326ce3229d5eb81e7765231def1f4533d66))
* **mcp:** update package.json ([d552ede](https://github.com/tacigokalp/OpenApiToMcpServer/commit/d552ede99d0b0231ee5218b44fff14b3cdc5f514))
* **mcp:** update README ([860624d](https://github.com/tacigokalp/OpenApiToMcpServer/commit/860624def3e0005c3b988d54c0def543f02666d3))
* **mcp:** update types ([770fd44](https://github.com/tacigokalp/OpenApiToMcpServer/commit/770fd44c2a5ae5e4a72e3f08d2c31a53e97b7d24))
* update @stainless-api/prism-cli to v5.15.0 ([f851907](https://github.com/tacigokalp/OpenApiToMcpServer/commit/f851907a6a5b73b2688dfad0832aa2dc1549896f))
* update CI script ([738dbd9](https://github.com/tacigokalp/OpenApiToMcpServer/commit/738dbd9bfafdef3e0b708bcba36cb14ce969a7bd))
* update SDK settings ([f1c00da](https://github.com/tacigokalp/OpenApiToMcpServer/commit/f1c00da5db95c3cb14d56b46e0be4adf7d89ab6f))
