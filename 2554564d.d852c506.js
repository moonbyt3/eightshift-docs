(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(9),i=(n(0),n(249)),o={id:"blocks-get-actions-helper",title:"GetActions Helper"},c={id:"legacy/v4/guides/blocks-get-actions-helper",title:"GetActions Helper",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/blob/develop/scripts/get-actions.js)",source:"@site/docs/legacy/v4/guides/blocks-get-actions-helper.md",permalink:"/eightshift-docs/docs/legacy/v4/guides/blocks-get-actions-helper",sidebar:"docs",previous:{title:"Render Block View Helper",permalink:"/eightshift-docs/docs/legacy/v4/guides/blocks-render-block-view-helper"},next:{title:"Filter Attributes Override",permalink:"/eightshift-docs/docs/legacy/v4/guides/blocks-filter-block-attributes-override"}},s=[{value:"Default Attribute",id:"default-attribute",children:[{value:"Usage",id:"usage",children:[]}]},{value:"Media Attribute",id:"media-attribute",children:[{value:"Usage",id:"usage-1",children:[]}]},{value:"Object/Array Attribute",id:"objectarray-attribute",children:[{value:"Usage",id:"usage-2",children:[]}]}],l={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-frontend-libs/blob/develop/scripts/get-actions.js"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})))),Object(i.b)("p",null,"This helper will create attributes actions from blocks ",Object(i.b)("inlineCode",{parentName:"p"},"manifest.json"),".\nActions are passed in child components to update props on an event (",Object(i.b)("inlineCode",{parentName:"p"},"onChange"),", ",Object(i.b)("inlineCode",{parentName:"p"},"onClick"),", etc.)."),Object(i.b)("h2",{id:"default-attribute"},"Default Attribute"),Object(i.b)("p",null,"Default function output is ",Object(i.b)("inlineCode",{parentName:"p"},"onChange")," + attribute name.\nExample: ",Object(i.b)("inlineCode",{parentName:"p"},"onChangeContent"),"."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"manifest.json")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "content": {\n      "type": "string"\n    },\n    "styleSize": {\n      "type": "string",\n      "default": "default"\n    }\n  }\n}\n')),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { getActions } from 'EighshiftBlocksGetActions';\nimport manifest from './manifest.json';\n\nconst actions = getActions(props, manifest);\n")),Object(i.b)("p",null,"Output:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const actions = {\n  onChangeContent: (value) => {\n    setAttributes({\n      content: value,\n    });\n  },\n  onChangeStyleSize: (value) => {\n    setAttributes({\n      styleSize: value,\n    });\n  },\n};\n")),Object(i.b)("h2",{id:"media-attribute"},"Media Attribute"),Object(i.b)("p",null,"If the attribute needs to save multiple values at the same time for media (images, video, etc.). ",Object(i.b)("inlineCode",{parentName:"p"},"ID")," value is used on the frontend using the PHP methods to fetch images, and ",Object(i.b)("inlineCode",{parentName:"p"},"URL")," is used in the editor to provide image preview."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"manifest.json")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "media": {\n      "type": "object",\n      "default": {\n        "id": 0,\n        "url": "",\n        "title": ""\n      },\n      "items": {\n        "type": "object"\n      },\n      "mediaAction": true\n    },\n  }\n}\n')),Object(i.b)("h3",{id:"usage-1"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { getActions } from 'EighshiftBlocksGetActions';\nimport manifest from './manifest.json';\n\nconst actions = getActions(props, manifest);\n")),Object(i.b)("p",null,"Output:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const actions = {\n  onChangeMediaContent: (value) => {\n    setAttributes({\n      media: {\n        id: 0,\n        url: "",\n        title: "",\n      },\n    });\n  },\n};\n')),Object(i.b)("h2",{id:"objectarray-attribute"},"Object/Array Attribute"),Object(i.b)("p",null,"If attribute needs to save multiple values at the same time, generally used for arrays and objects."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"manifest.json")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "heading": {\n      "type": "object",\n      "default": {\n        "content": "",\n        "level": 2,\n        "styleAlign": "left",\n      },\n      "items": {\n        "type": "object"\n      },\n      "multipleProps": true\n    }\n  }\n}\n')),Object(i.b)("h3",{id:"usage-2"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { getActions } from 'EighshiftBlocksGetActions';\nimport manifest from './manifest.json';\n\nconst actions = getActions(props, manifest);\n")),Object(i.b)("p",null,"Output:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const actions = {\n  onChangeHeadingContent: (value) => {\n    setAttributes({\n      content: value,\n    });\n  },\n  onChangeHeadingLevel: (value) => {\n    setAttributes({\n      level: value,\n    });\n  },\n  onChangeHeadingStyleAlign: (value) => {\n    setAttributes({\n      styleAlign: value,\n    });\n  },\n};\n")))}b.isMDXComponent=!0},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return n?r.a.createElement(m,c({ref:t},l,{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);