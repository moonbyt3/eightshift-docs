(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var o=n(1),r=n(9),a=(n(0),n(252)),s={id:"blocks-component-structure",title:"Component Structure",sidebar_label:"Component Structure"},i={id:"basics/blocks-component-structure",title:"Component Structure",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)",source:"@site/docs/basics/blocks-component-structure.md",permalink:"/eightshift-docs/docs/basics/blocks-component-structure",sidebar_label:"Component Structure",sidebar:"docs",previous:{title:"Block Structure",permalink:"/eightshift-docs/docs/basics/block-structure"},next:{title:"Block Manifest",permalink:"/eightshift-docs/docs/basics/block-manifest"}},c=[{value:"assets",id:"assets",children:[]},{value:"components",id:"components",children:[]},{value:"docs",id:"docs",children:[]},{value:"heading.php",id:"headingphp",children:[]},{value:"heading-editor.scss",id:"heading-editorscss",children:[]},{value:"heading-style.scss",id:"heading-stylescss",children:[]},{value:"manifest.json",id:"manifestjson",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/"}),Object(a.b)("img",Object(o.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})))),Object(a.b)("p",null,"Your custom components are placed in the ",Object(a.b)("inlineCode",{parentName:"p"},"src/Blocks/components")," folder."),Object(a.b)("p",null,"For example, let's take the heading component (just replace the heading with your component name)."),Object(a.b)("p",null,"We suggest you always use the full name and never abbreviate for the component name. If your component has multiple words, you should separate them by a dash; for example, featured-post-block.js."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Block structure should look like this:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"heading",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"assets",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"index.js"))),Object(a.b)("li",{parentName:"ul"},"components",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"heading-editor.js"),Object(a.b)("li",{parentName:"ul"},"heading-options.js"),Object(a.b)("li",{parentName:"ul"},"heading-toolbar.js"))),Object(a.b)("li",{parentName:"ul"},"docs",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"story.js"),Object(a.b)("li",{parentName:"ul"},"readme.mdx"))),Object(a.b)("li",{parentName:"ul"},"heading.php"),Object(a.b)("li",{parentName:"ul"},"heading-editor.scss"),Object(a.b)("li",{parentName:"ul"},"heading-style.scss"),Object(a.b)("li",{parentName:"ul"},"manifest.json")))),Object(a.b)("p",null,"For example, you can check the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://infinum.github.io/eightshift-docs/storybook"}),"storybook"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"All files in components are optional.")),Object(a.b)("h3",{id:"assets"},"assets"),Object(a.b)("p",null,"This folder behaves the same as the blocks assets folder. Please check the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"block-structure#assets"}),"block structure")," chapter for more details."),Object(a.b)("h3",{id:"components"},"components"),Object(a.b)("p",null,"Components folder holds three files: ",Object(a.b)("inlineCode",{parentName:"p"},"heading-options.js"),", ",Object(a.b)("inlineCode",{parentName:"p"},"heading-editor.js"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"heading-toolbars.js"),". They are used the same way as in blocks to provide functionality based on the location used. The main difference in components is that these files are used inside other blocks to implement functionality from the component."),Object(a.b)("h3",{id:"docs"},"docs"),Object(a.b)("p",null,"Docs folder contains everything a component needs to be run inside the Storybook. This part is optional but it will speed up your development time and provide you with the much-needed documentation."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"story.js")," - Storybook entry point for your component. Since components are not blocks, you must provide the mocked data for your component in this file."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"readme.mdx")," - README that describes your component and provides the documentation.")),Object(a.b)("h3",{id:"headingphp"},"heading.php"),Object(a.b)("p",null,"This file contains the front-end part (the view) of the component used in your project when the page renders. This file shouldn't contain any business logic, just present the passed attributes. The main difference from block view is that you only have attributes that you passed from a block or a top-level component in this file."),Object(a.b)("h3",{id:"heading-editorscss"},"heading-editor.scss"),Object(a.b)("p",null,"This file behaves the same as in blocks. Please check the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"block-structure#heading-editorscss"}),"block structure")," chapter for more details."),Object(a.b)("h3",{id:"heading-stylescss"},"heading-style.scss"),Object(a.b)("p",null,"This file behaves the same as in blocks. Please check the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"block-structure#heading-stylescss"}),"block structure")," chapter for more details."),Object(a.b)("h3",{id:"manifestjson"},"manifest.json"),Object(a.b)("p",null,"This file contains all the configuration for a component. It is not fully necessary, but we encourage you to use it because it provides many possibilities."),Object(a.b)("p",null,"For more details, check the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"blocks-component-manifest"}),"component manifest")," chapter."))}b.isMDXComponent=!0},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=o,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return n?r.a.createElement(h,i({ref:t},l,{components:n})):r.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);