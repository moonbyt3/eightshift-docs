(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{172:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"rightToc",(function(){return l})),o.d(t,"default",(function(){return b}));var r=o(1),a=o(9),n=(o(0),o(252)),i={id:"blocks",title:"Blocks",sidebar_label:"Blocks"},s={id:"basics/blocks",title:"Blocks",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)",source:"@site/docs/basics/blocks.md",permalink:"/eightshift-docs/docs/basics/blocks",sidebar_label:"Blocks",sidebar:"docs",previous:{title:"Dynamic Import",permalink:"/eightshift-docs/docs/basics/dynamic-import"},next:{title:"Important",permalink:"/eightshift-docs/docs/basics/blocks-important"}},l=[{value:"Types of blocks",id:"types-of-blocks",children:[{value:"Regular blocks",id:"regular-blocks",children:[]},{value:"Dynamic blocks",id:"dynamic-blocks",children:[]}]},{value:"Eightshift blocks",id:"eightshift-blocks",children:[]}],c={rightToc:l};function b(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/"}),Object(n.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})))),Object(n.b)("p",null,"Since WordPress 5.0, we were introduced to the new editing experience using the so-called Gutenberg blocks. With blocks, the idea is to have the same look and feel in the editor as on the front end. As a developer, you just got a new technology that you should know if you want to build a great project on WordPress. That new technology is React because everything regarding blocks is done using React."),Object(n.b)("p",null,"Don't get discouraged just yet, because the WordPress team has made the process of creating blocks relatively easy. But we are not here to talk about the simple stuff. We want to do more complex projects with custom blocks, so follow along and see what we have prepared here."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"You can read everything regarding blocks in the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.wordpress.org/block-editor/tutorials/block-tutorial/"}),"WordPress documentation"),". We will not be explaining how everything natively works in this documentation. Instead, we will only describe how to use our setup and how it correlates with the native one. Everything that you can't find here, please look up in the WordPress Handbook.")),Object(n.b)("h2",{id:"types-of-blocks"},"Types of blocks"),Object(n.b)("p",null,"WordPress Core Editor team has provided us with two different kinds of blocks:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Regular blocks"),Object(n.b)("li",{parentName:"ul"},"Dynamic blocks")),Object(n.b)("h3",{id:"regular-blocks"},"Regular blocks"),Object(n.b)("p",null,"These are the blocks that you can see in the core. Almost every block from WordPress comes this way. With regular blocks, you have the same content on the front end as you do in the editor. This was accomplished by providing the same layout in the save callback as in the edit callback."),Object(n.b)("p",null,"The drawback of building blocks this way is that you must also provide the HTML markup that you will use on the front-end, inside the save callback. That method saves everything to the database, and you can't just change the HTML markup without some transformations or deprecation methods. If you change the markup while working on it, you'll get an error in the editor screen, and you'll have to add the content again."),Object(n.b)("p",null,"We don't like this approach because of how it stores the HTML content in the database. Lucky for us, WordPress has provided a different kind of blocks for this matter. They are called dynamic blocks."),Object(n.b)("h3",{id:"dynamic-blocks"},"Dynamic blocks"),Object(n.b)("p",null,"As you already saw in the previous chapter, the main difference between regular and dynamic blocks is storing content in the database. For many dynamic blocks, the save callback function should be returned as null, which tells the editor to save only the block attributes to the database. These attributes are then passed into the server-side rendering callback, so you can decide how to display the block on the front end of your site."),Object(n.b)("p",null,"This means that you write code using React and JSX in the editor, and you must provide the same code in the PHP for the front-end. Yes, it is a lot of work because you must switch technologies and do the same thing multiple times, but we tried to make this process as simple as possible."),Object(n.b)("p",null,"Follow along and see what we prepared. From now on, we'll be talking only about dynamic blocks in this documentation."),Object(n.b)("h2",{id:"eightshift-blocks"},"Eightshift blocks"),Object(n.b)("p",null,"Our setup's main advantage is that you don't need to do a bunch of boilerplate every time you want to create a new block for your project. Also, we have a bunch of cool features we think you might like:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Separated blocks from components."),Object(n.b)("li",{parentName:"ul"},"You have a predefined structure for everything."),Object(n.b)("li",{parentName:"ul"},"If you follow the structure we provided, everything is registered and called automatically."),Object(n.b)("li",{parentName:"ul"},'You don\'t have to worry: "did I register this the right way?", "what style goes where?", etc.'),Object(n.b)("li",{parentName:"ul"},"Storybook for your project."),Object(n.b)("li",{parentName:"ul"},"A dozen of the pre-created blocks from our end. Once we create a new block in some of our projects, we make it available in the libs."),Object(n.b)("li",{parentName:"ul"},"Easy usage of blocks and components with our ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"wp-cli"}),"WP-CLI")," commands."),Object(n.b)("li",{parentName:"ul"},"Setup that shares configuration between JS, PHP, and SCSS files."),Object(n.b)("li",{parentName:"ul"},"Wrapper that comes with every block and allows you to control how a block behaves in the layout entirely."),Object(n.b)("li",{parentName:"ul"},"Everything is responsive. Yes, you read that correctly; we created options that you can control on multiple breakpoints."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Everything is configurable and editable from your project.")),Object(n.b)("li",{parentName:"ul"},"Linting standards."),Object(n.b)("li",{parentName:"ul"},"Multiple helpers work the same on JS and PHP side, so it is easy to copy code from one language to another."),Object(n.b)("li",{parentName:"ul"},"And much, much more.")))}b.isMDXComponent=!0},252:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return p}));var r=o(0),a=o.n(r);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s({},t,{},e)),o},u=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=b(o),h=r,p=u["".concat(i,".").concat(h)]||u[h]||d[h]||n;return o?a.a.createElement(p,s({ref:t},c,{components:o})):a.a.createElement(p,s({ref:t},c))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,o)}h.displayName="MDXCreateElement"}}]);