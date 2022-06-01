/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ListQueryVariables = {
    currentPage?: number | null;
};
export type ListQueryResponse = {
    readonly characters: {
        readonly info: {
            readonly count: number | null;
        } | null;
        readonly results: ReadonlyArray<{
            readonly name: string | null;
            readonly image: string | null;
            readonly status: string | null;
        } | null> | null;
    } | null;
};
export type ListQuery = {
    readonly response: ListQueryResponse;
    readonly variables: ListQueryVariables;
};



/*
query ListQuery(
  $currentPage: Int
) {
  characters(page: $currentPage) {
    info {
      count
    }
    results {
      name
      image
      status
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "currentPage"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "page",
    "variableName": "currentPage"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "Info",
  "kind": "LinkedField",
  "name": "info",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "count",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "image",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Characters",
        "kind": "LinkedField",
        "name": "characters",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Character",
            "kind": "LinkedField",
            "name": "results",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Characters",
        "kind": "LinkedField",
        "name": "characters",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Character",
            "kind": "LinkedField",
            "name": "results",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5345b9a1db957a88eea3d18e76d85498",
    "id": null,
    "metadata": {},
    "name": "ListQuery",
    "operationKind": "query",
    "text": "query ListQuery(\n  $currentPage: Int\n) {\n  characters(page: $currentPage) {\n    info {\n      count\n    }\n    results {\n      name\n      image\n      status\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '8edecaffb848164381d6ab5ed66c33cb';
export default node;
