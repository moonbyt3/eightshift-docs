(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{188:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return b}));var o=r(1),n=r(9),a=(r(0),r(252)),c={id:"blocks-structure",title:"Structure",sidebar_label:"Structure"},l={id:"basics/blocks-structure",title:"Structure",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)",source:"@site/docs/basics/blocks-structure.md",permalink:"/eightshift-docs/docs/basics/blocks-structure",sidebar_label:"Structure",sidebar:"docs",previous:{title:"Registration",permalink:"/eightshift-docs/docs/basics/blocks-registration"},next:{title:"Global Manifest",permalink:"/eightshift-docs/docs/basics/blocks-global-manifest"}},s=[{value:"Blocks folder",id:"blocks-folder",children:[]},{value:"Assets",id:"assets",children:[]},{value:"Components",id:"components",children:[]},{value:"Custom",id:"custom",children:[]},{value:"Variations",id:"variations",children:[]},{value:"Wrapper",id:"wrapper",children:[]},{value:"Manifest.json",id:"manifestjson",children:[]},{value:"Blocks.php",id:"blocksphp",children:[]}],i={rightToc:s};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/"}),Object(a.b)("img",Object(o.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})))),Object(a.b)("p",null,"For the library to work and register blocks dynamically, a specific folder structure and naming must be followed."),Object(a.b)("p",null,"Your folder structure should be like this:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"src",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Blocks",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"assets"),Object(a.b)("li",{parentName:"ul"},"components"),Object(a.b)("li",{parentName:"ul"},"custom"),Object(a.b)("li",{parentName:"ul"},"variations"),Object(a.b)("li",{parentName:"ul"},"wrapper"),Object(a.b)("li",{parentName:"ul"},"Blocks.php"),Object(a.b)("li",{parentName:"ul"},"manifest.json")))))),Object(a.b)("h3",{id:"blocks-folder"},"Blocks folder"),Object(a.b)("p",null,"This folder contains all the blocks defined in your project. Every block is located in the ",Object(a.b)("inlineCode",{parentName:"p"},"custom")," folder, and every component is located in the ",Object(a.b)("inlineCode",{parentName:"p"},"components")," folder. Blocks can be created from multiple block editor components or your project components."),Object(a.b)("h3",{id:"assets"},"Assets"),Object(a.b)("p",null,"This folder contains all the additional files for the blocks you only need to use on the front end. Everything that is not a block or a component goes here, such as defining global style, global JavaScript helpers, project images, fonts, etc. Also, we register all blocks, styles, and scripts in the assets folder so that nothing works without this folder."),Object(a.b)("h3",{id:"components"},"Components"),Object(a.b)("p",null,"This folder contains all the components that are shared across blocks and project template files. Components are not registered as blocks because they are small chunks of code you can reuse everywhere. For instance, you can create a menu component to be used in the footer but also reused in a separate menu block. Please refer to the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"blocks-component-structure"}),"component structure")," chapter for more details."),Object(a.b)("h3",{id:"custom"},"Custom"),Object(a.b)("p",null,"This folder contains all the custom blocks defined and used in your project. Please refer to the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"block-structure"}),"block structure")," chapter for more details."),Object(a.b)("h3",{id:"variations"},"Variations"),Object(a.b)("p",null,"This folder contains all the variations blocks defined and used in your project. Please refer to the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"blocks-variations"}),"variations")," chapter for more details."),Object(a.b)("h3",{id:"wrapper"},"Wrapper"),Object(a.b)("p",null,"This folder contains a wrapper component that wraps all blocks with shared variables and gives blocks the ability to behave as a section. Please refer to the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"blocks-wrapper"}),"wrapper")," chapter for more details."),Object(a.b)("h3",{id:"manifestjson"},"Manifest.json"),Object(a.b)("p",null,"This file contains global settings for the project. It must contain ",Object(a.b)("inlineCode",{parentName:"p"},"namespace")," and ",Object(a.b)("inlineCode",{parentName:"p"},"background")," keys. Everything else is optional. Here you can store data you intend to share across toolbars, components, and blocks. Please refer to the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"block-manifest"}),"block manifest")," chapter for more details."),Object(a.b)("h3",{id:"blocksphp"},"Blocks.php"),Object(a.b)("p",null,"This is the main service class responsible for registering all the PHP parts of the blocks like:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"dynamic blocks view;"),Object(a.b)("li",{parentName:"ul"},"custom category for your blocks;"),Object(a.b)("li",{parentName:"ul"},"default color pallet;"),Object(a.b)("li",{parentName:"ul"},"what blocks you are going to use; and"),Object(a.b)("li",{parentName:"ul"},"all the custom functionality that you will write for the project.")))}b.isMDXComponent=!0},252:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),b=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},p=function(e){var t=b(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=b(r),d=o,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return r?n.a.createElement(f,l({ref:t},i,{components:r})):n.a.createElement(f,l({ref:t},i))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=r[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);