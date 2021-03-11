(this["webpackJsonpcra-relay-typescript"]=this["webpackJsonpcra-relay-typescript"]||[]).push([[0],{128:function(e,n,r){},129:function(e,n,r){"use strict";r.r(n);var a=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"characterId"}],n=[{kind:"Variable",name:"id",variableName:"characterId"}],r={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"image",storageKey:null};return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"CardCharacterQuery",selections:[{alias:null,args:n,concreteType:"Character",kind:"LinkedField",name:"character",plural:!1,selections:[r,a],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"CardCharacterQuery",selections:[{alias:null,args:n,concreteType:"Character",kind:"LinkedField",name:"character",plural:!1,selections:[r,a,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]},params:{cacheID:"0c2405d0c4ba70b6afb8756235cc0c69",id:null,metadata:{},name:"CardCharacterQuery",operationKind:"query",text:"query CardCharacterQuery(\n  $characterId: ID!\n) {\n  character(id: $characterId) {\n    name\n    image\n    id\n  }\n}\n"}}}();a.hash="525043c822f7acf127ff4b5a8f68f6fc",n.default=a},130:function(e,n,r){"use strict";r.r(n);var a=r(2),t=r(0),c=r(65),i=r.n(c),l=r(38),o=r(64),d=r(63),s=Object(t.lazy)((function(){return r.e(5).then(r.bind(null,131))})),u=Object(t.lazy)((function(){return r.e(3).then(r.bind(null,132))})),h=Object(t.lazy)((function(){return r.e(4).then(r.bind(null,133))})),b=function(){return Object(a.jsxs)(l.b,{basepath:d.a,children:[Object(a.jsx)(u,{default:!0}),Object(a.jsx)(s,{path:"/"}),Object(a.jsx)(h,{path:"character/:characterId"})]})},j=function(){return Object(a.jsx)(o.b,{children:Object(a.jsx)(t.Suspense,{fallback:Object(a.jsx)("div",{children:"Loading..."}),children:Object(a.jsx)(b,{})})})};i.a.render(Object(a.jsx)(t.StrictMode,{children:Object(a.jsx)(j,{})}),document.getElementById("root"))},63:function(e){e.exports=JSON.parse('{"a":"cra-relay-typescript"}')},64:function(e,n,r){"use strict";r.d(n,"b",(function(){return s})),r.d(n,"a",(function(){return h}));var a,t=r(2),c=r(29),i={Accept:"application/json","Content-type":"application/json"},l=function(e,n){var r=JSON.stringify({query:e.text,variables:n});return fetch("https://rickandmortyapi.com/graphql",{method:"POST",headers:i,body:r}).then((function(e){return e.json()}))},o=r(6),d=new o.Environment({network:o.Network.create(l),store:new o.Store(new o.RecordSource)}),s=(r(128),function(e){var n=e.children;return Object(t.jsx)(c.RelayEnvironmentProvider,{environment:d,children:n})}),u=void 0!==a?a:a=r(129),h=function(e){var n=e.id,r=Object(c.useQuery)(u,{characterId:n}),a=r.props,i=r.error;if(a){var l,o,d=(null===a||void 0===a?void 0:a.character)?null===a||void 0===a||null===(l=a.character)||void 0===l?void 0:l.name:"Not Found: (Some sort of server error maybe)";return Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{className:"text-4xl font-bold",children:d}),Object(t.jsx)("img",{alt:d||void 0,src:(null===a||void 0===a||null===(o=a.character)||void 0===o?void 0:o.image)||void 0})]})}return i?Object(t.jsx)("div",{children:i.message}):Object(t.jsx)("div",{children:"loading..."})}}},[[130,1,2]]]);
//# sourceMappingURL=main.32ca3b7d.chunk.js.map