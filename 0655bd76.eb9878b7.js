(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return b}));var o=n(1),r=n(9),c=(n(0),n(252)),i={id:"blocks-structure-block-item",title:"Block Structure Item"},s={id:"legacy/v4/guides/blocks-structure-block-item",title:"Block Structure Item",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/custom/example)",source:"@site/docs/legacy/v4/guides/blocks-structure-block-item.md",permalink:"/eightshift-docs/docs/legacy/v4/guides/blocks-structure-block-item",sidebar:"docs",previous:{title:"Blocks Structure",permalink:"/eightshift-docs/docs/legacy/v4/guides/blocks-structure"},next:{title:"Component Structure",permalink:"/eightshift-docs/docs/legacy/v4/guides/blocks-structure-component"}},a=[{value:"components",id:"components",children:[]},{value:"block-name-block.js",id:"block-name-blockjs",children:[]},{value:"block-name.php",id:"block-namephp",children:[]},{value:"block-name-editor.scss",id:"block-name-editorscss",children:[]},{value:"block-name-style.scss",id:"block-name-stylescss",children:[]},{value:"manifest.json",id:"manifestjson",children:[]}],l={rightToc:a};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/custom/example"}),Object(c.b)("img",Object(o.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})))),Object(c.b)("p",null,"For the library to work and register blocks dynamically, a specific folder structure and naming must be followed. Individual blocks are placed in the ",Object(c.b)("inlineCode",{parentName:"p"},"custom")," folder."),Object(c.b)("p",null,"Your custom block structure should look like this:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"|____block-name\n| |____components\n| | |____block-name-editor.js\n| | |____block-name-options.js\n| | |____block-name-toolbar.js\n| |____block-name-block.js\n| |____block-name.php\n| |____block-name-editor.scss\n| |____block-name-style.scss\n| |____manifest.json\n")),Object(c.b)("p",null,"For example, you can check ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://infinum.github.io/eightshift-docs/storybook"}),"storybook"),"."),Object(c.b)("h3",{id:"components"},"components"),Object(c.b)("p",null,"Components folder holds three files ",Object(c.b)("inlineCode",{parentName:"p"},"block-name-options.js"),", ",Object(c.b)("inlineCode",{parentName:"p"},"block-name-editor.js")," and ",Object(c.b)("inlineCode",{parentName:"p"},"block-name-toolbars.js"),". Each of these files represents a part of the Block Editor block that is used in the editor. We have separated options, editor and toolbar in separate components for the sake of readability and reusing components in different projects."),Object(c.b)("h3",{id:"block-name-blockjs"},"block-name-block.js"),Object(c.b)("p",null,"This file represents the ",Object(c.b)("inlineCode",{parentName:"p"},"edit")," callback method used in WordPress ",Object(c.b)("inlineCode",{parentName:"p"},"registerBlockType")," method.\nWe are not using the ",Object(c.b)("inlineCode",{parentName:"p"},"save")," callback component because this library is used to create dynamic blocks. The ",Object(c.b)("inlineCode",{parentName:"p"},"edit")," method describes how your block will be rendered in the editor once the block is used."),Object(c.b)("h3",{id:"block-namephp"},"block-name.php"),Object(c.b)("p",null,"This file will pass the properties you've set in the ",Object(c.b)("inlineCode",{parentName:"p"},"block-name.js")," and use the ",Object(c.b)("inlineCode",{parentName:"p"},"render_block_view()")," method from the ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-blocks/blob/44c168f74ba57cc596f352d34a3e4c6441fc2b8b/src/class-blocks.php#L193"}),"eightshift libs"),". It is used to provide front-end layout for your block."),Object(c.b)("h3",{id:"block-name-editorscss"},"block-name-editor.scss"),Object(c.b)("p",null,"Holds only the editor styling for the block. You should be using this file to override styles in the editor set by the component. In 90% of cases, you will not need to write any overrides here. But if you are using any columns layout like a grid, flex, etc., you may need to add some corrections."),Object(c.b)("p",null,"Corrections in the columns layout are necessary because Block Editor editor adds its additional HTML and you can't change it.\n",Object(c.b)("em",{parentName:"p"},"This file is optional"),"."),Object(c.b)("h3",{id:"block-name-stylescss"},"block-name-style.scss"),Object(c.b)("p",null,"Holds all the front-end and editor styling for the component. Like the above file, in most cases, it can be avoided.\n",Object(c.b)("em",{parentName:"p"},"This file is optional"),"."),Object(c.b)("h3",{id:"manifestjson"},"manifest.json"),Object(c.b)("p",null,"This file contains all the configuration required for a block to work. It's used in WordPress ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.wordpress.org/block-editor/developers/block-api/block-registration/"}),Object(c.b)("inlineCode",{parentName:"a"},"registerBlockType"))," method to register a block."),Object(c.b)("p",null,"It looks like this:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "blockName": "button",\n  "title": "Button",\n  "description" : "Button block with custom settings.",\n  "category": "eightshift",\n  "icon": {\n    "src": "editor-removeformatting"\n  },\n  "keywords": [\n    "button",\n    "btn",\n    "link"\n  ],\n  "attributes": {\n    "title": {\n      "type": "string"\n    }\n  }\n}\n')),Object(c.b)("p",null,"For manifest.json details please check this ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"/eightshift-docs/docs/legacy/v4/guides/blocks-structure-manifest"}),"link"),"."))}b.isMDXComponent=!0},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=b(n),u=o,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||c;return n?r.a.createElement(m,s({ref:t},l,{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=u;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<c;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);