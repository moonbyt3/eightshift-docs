(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),i=n(9),o=(n(0),n(249)),c={id:"introduction",title:"Introduction"},a={id:"legacy/v4/introduction",title:"Introduction",description:"## Boilerplate building blocks",source:"@site/docs/legacy/v4/docs.md",permalink:"/eightshift-docs/docs/legacy/v4/introduction",sidebar:"docs",previous:{title:"Create new WordPress plugin",permalink:"/eightshift-docs/docs/legacy/v4/plugin"},next:{title:"Eightshift Libs",permalink:"/eightshift-docs/docs/legacy/v4/libs"}},s=[{value:"Boilerplate building blocks",id:"boilerplate-building-blocks",children:[{value:"1. Eightshift libs - docs | github",id:"1-eightshift-libs---docs--github",children:[]},{value:"2. Eightshift frontend libs - docs | github",id:"2-eightshift-frontend-libs---docs--github",children:[]}]}],l={rightToc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"boilerplate-building-blocks"},"Boilerplate building blocks"),Object(o.b)("p",null,"In order to use it, you need to understand what makes boilerplate tick. In theory, this is simple, you have 2 parts."),Object(o.b)("h3",{id:"1-eightshift-libs---docs--github"},"1. Eightshift libs - ",Object(o.b)("a",Object(r.a)({parentName:"h3"},{href:"/eightshift-docs/docs/legacy/v4/libs"}),"docs")," | ",Object(o.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/infinum/eightshift-libs"}),"github")),Object(o.b)("p",null,"This is where all the backend (PHP) code is kept. Think abstract classes, interfaces, dependency injection, asset enqueuing, filter & actions."),Object(o.b)("h3",{id:"2-eightshift-frontend-libs---docs--github"},"2. Eightshift frontend libs - ",Object(o.b)("a",Object(r.a)({parentName:"h3"},{href:"/eightshift-docs/docs/legacy/v4/frontend-libs"}),"docs")," | ",Object(o.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/infinum/eightshift-frontend-libs"}),"github")),Object(o.b)("p",null,"This is where all the frontend (JS, SCSS, assets) code is kept."))}u.isMDXComponent=!0},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},b=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,f=b["".concat(c,".").concat(p)]||b[p]||d[p]||o;return n?i.a.createElement(f,a({ref:t},l,{components:n})):i.a.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<o;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);