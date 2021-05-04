(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(9),c=(n(0),n(252)),i={id:"config",title:"Project Config"},a={id:"legacy/v4/guides/config",title:"Project Config",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--boilerplate-red?style=for-the-badge&logo=wordpress&labelColor=2a2a2a)](https://github.com/infinum/eightshift-boilerplate/blob/develop/src/class-config.php)",source:"@site/docs/legacy/v4/guides/config.md",permalink:"/eightshift-docs/docs/legacy/v4/guides/config",sidebar:"docs",previous:{title:"Dependency injection container",permalink:"/eightshift-docs/docs/legacy/v4/guides/di-container"},next:{title:"Manifest",permalink:"/eightshift-docs/docs/legacy/v4/guides/manifest"}},l=[{value:"get_project_name()",id:"get_project_name",children:[]},{value:"get_project_version()",id:"get_project_version",children:[]},{value:"get_project_prefix()",id:"get_project_prefix",children:[]},{value:"get_project_env()",id:"get_project_env",children:[]},{value:"get_project_routes_namespace()",id:"get_project_routes_namespace",children:[]},{value:"get_project_routes_version()",id:"get_project_routes_version",children:[]},{value:"get_project_primary_color()",id:"get_project_primary_color",children:[]},{value:"get_project_path()",id:"get_project_path",children:[]},{value:"get_config()",id:"get_config",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-boilerplate/blob/develop/src/class-config.php"}),Object(c.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--boilerplate-red?style=for-the-badge&logo=wordpress&labelColor=2a2a2a",alt:"docs-source"})))),Object(c.b)("p",null,"Project config is located in ",Object(c.b)("inlineCode",{parentName:"p"},"src/class-config.php"),", and it extends ",Object(c.b)("inlineCode",{parentName:"p"},"Eightshift_Libs\\Core\\Config")," class from the lib."),Object(c.b)("p",null,"This class is used to define all the important methods for your project:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"get_project_name()"),Object(c.b)("li",{parentName:"ul"},"get_project_version()"),Object(c.b)("li",{parentName:"ul"},"get_project_prefix()"),Object(c.b)("li",{parentName:"ul"},"get_project_env()"),Object(c.b)("li",{parentName:"ul"},"get_project_routes_namespace()"),Object(c.b)("li",{parentName:"ul"},"get_project_routes_version()"),Object(c.b)("li",{parentName:"ul"},"get_project_primary_color()"),Object(c.b)("li",{parentName:"ul"},"get_project_path()"),Object(c.b)("li",{parentName:"ul"},"get_config()")),Object(c.b)("p",null,"Some methods are mandatory and are defined in ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-libs/blob/develop/src/interface-config-data.php"}),"config interface")," the rest are provided inside the project."),Object(c.b)("h2",{id:"get_project_name"},"get_project_name()"),Object(c.b)("p",null,"Type: Mandatory"),Object(c.b)("p",null,"Generally used for naming assets handlers, languages, etc."),Object(c.b)("h2",{id:"get_project_version"},"get_project_version()"),Object(c.b)("p",null,"Type: Mandatory"),Object(c.b)("p",null,"Generally used for versioning asset handlers while enqueueing them."),Object(c.b)("h2",{id:"get_project_prefix"},"get_project_prefix()"),Object(c.b)("p",null,"Type: Mandatory"),Object(c.b)("p",null,"The WordPress filters live in a global namespace, so we need to prefix them to avoid naming collisions."),Object(c.b)("h2",{id:"get_project_env"},"get_project_env()"),Object(c.b)("p",null,"Type: Optional but recommended"),Object(c.b)("p",null,"Returns the project environment variable descriptor."),Object(c.b)("p",null,"Used for defining global settings depending on the environment of the project. It can be one of, but not limited to, develop, staging, production."),Object(c.b)("p",null,"Defaults to 'develop' (as to not cache manifest in transient) if not otherwise defined in ",Object(c.b)("inlineCode",{parentName:"p"},"wp-config.php")),Object(c.b)("h2",{id:"get_project_routes_namespace"},"get_project_routes_namespace()"),Object(c.b)("p",null,"Type: Optional"),Object(c.b)("p",null,"Used for namespacing project's REST-API routes and fields. Only required if you are creating a custom REST route or field."),Object(c.b)("h2",{id:"get_project_routes_version"},"get_project_routes_version()"),Object(c.b)("p",null,"Type: Optional"),Object(c.b)("p",null,"Used for versioning projects REST-API routes and fields. Only required if you are creating a custom REST route or field."),Object(c.b)("h2",{id:"get_project_primary_color"},"get_project_primary_color()"),Object(c.b)("p",null,"Type: Optional"),Object(c.b)("p",null,"Used for styling the mobile browser color and splash screens. Check ",Object(c.b)("inlineCode",{parentName:"p"},"head.php")," for more details."),Object(c.b)("h2",{id:"get_project_path"},"get_project_path()"),Object(c.b)("p",null,"Type: Mandatory"),Object(c.b)("p",null,"Returns project absolute path."),Object(c.b)("p",null,"If used in a theme, use ",Object(c.b)("inlineCode",{parentName:"p"},"get_template_directory()")," and in case it's used in a plugin, use ",Object(c.b)("inlineCode",{parentName:"p"},"__DIR__"),"."),Object(c.b)("h2",{id:"get_config"},"get_config()"),Object(c.b)("p",null,"Type: Mandatory"),Object(c.b)("p",null,"The method that returns every string prefixed with project prefix based on project type."),Object(c.b)("p",null,'It converts all spaces and "_" with "-", also it converts all characters to lowercase. Also, it appends the project prefix defined in the ',Object(c.b)("inlineCode",{parentName:"p"},"class-config.php"),"."),Object(c.b)("p",null,"Example 1:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"Config::get_config( 'custom_filter_name' );\n\nOutput:\neb-custom-filter-name\n")),Object(c.b)("p",null,"Example 2:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"Config::get_config( 'custom-filter-name' );\n\nOutput:\neb-custom-filter-name\n")),Object(c.b)("p",null,"Example 3:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"Config::get_config( 'custom filter name' );\n\nOutput:\neb-custom-filter-name\n")))}s.isMDXComponent=!0},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},b=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,g=b["".concat(i,".").concat(d)]||b[d]||u[d]||c;return n?o.a.createElement(g,a({ref:t},p,{components:n})):o.a.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var p=2;p<c;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);