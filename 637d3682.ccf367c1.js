(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{183:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return l})),i.d(t,"metadata",(function(){return s})),i.d(t,"rightToc",(function(){return r})),i.d(t,"default",(function(){return b}));var a=i(1),n=i(9),o=(i(0),i(252)),l={id:"the-structure",title:"The Structure",sidebar_label:"The Structure"},s={id:"basics/the-structure",title:"The Structure",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs)",source:"@site/docs/basics/the-structure.md",permalink:"/eightshift-docs/docs/basics/the-structure",sidebar_label:"The Structure",sidebar:"docs",previous:{title:"Example Class",permalink:"/eightshift-docs/docs/basics/example-class"},next:{title:"Manifest",permalink:"/eightshift-docs/docs/basics/manifest"}},r=[{value:"The structure",id:"the-structure",children:[{value:"Blocks",id:"blocks",children:[]},{value:"Config",id:"config",children:[]},{value:"CustomMeta",id:"custommeta",children:[]},{value:"CustomPostType",id:"customposttype",children:[]},{value:"CustomTaxonomy",id:"customtaxonomy",children:[]},{value:"Enqueue",id:"enqueue",children:[]},{value:"I18n",id:"i18n",children:[]},{value:"Login",id:"login",children:[]},{value:"Main",id:"main",children:[]},{value:"Manifest",id:"manifest",children:[]},{value:"Media",id:"media",children:[]},{value:"ModifyAdminAppearance",id:"modifyadminappearance",children:[]},{value:"Rest",id:"rest",children:[]},{value:"ThemeOptions",id:"themeoptions",children:[]},{value:"View",id:"view",children:[]},{value:".storybook",id:"storybook",children:[]},{value:".gitignore",id:"gitignore",children:[]},{value:".eslintignore",id:"eslintignore",children:[]},{value:".eslintrc",id:"eslintrc",children:[]},{value:".stylelintrc",id:"stylelintrc",children:[]},{value:"babel.config.js",id:"babelconfigjs",children:[]},{value:"composer.json",id:"composerjson",children:[]},{value:"composer.lock",id:"composerlock",children:[]},{value:"package-lock.json",id:"package-lockjson",children:[]},{value:"package.json",id:"packagejson",children:[]},{value:"phpcs.xml.dist",id:"phpcsxmldist",children:[]},{value:"postcss.config.js",id:"postcssconfigjs",children:[]},{value:"README.md",id:"readmemd",children:[]},{value:"webpack.config.js",id:"webpackconfigjs",children:[]}]}],c={rightToc:r};function b(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-libs"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})))),Object(o.b)("p",null,"If you've followed the chapters this far and set your first project with all the classes from the ",Object(o.b)("inlineCode",{parentName:"p"},"wp boilerplate setup_theme")," command, you saw that you have an ",Object(o.b)("inlineCode",{parentName:"p"},"src")," folder in the root of your project."),Object(o.b)("p",null,"In that root folder, you have a bunch of folders with classes. We like to structure our projects by features, so for example, all ",Object(o.b)("inlineCode",{parentName:"p"},"custom post type")," registrations will be located in the ",Object(o.b)("inlineCode",{parentName:"p"},"CustomPostType")," folder."),Object(o.b)("p",null,"Using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"wp-cli"}),"WP-CLI")," commands, you follow our folder structure so that all of your projects will have the same layout. This helps us with onboarding new developers to the project. They can know where things are from the start."),Object(o.b)("p",null,"Here is a small tip from us: ",Object(o.b)("strong",{parentName:"p"},'"Organize your projects by functionality"'),"."),Object(o.b)("h2",{id:"the-structure"},"The structure"),Object(o.b)("p",null,"As we already mentioned, try to be consistent and organized with your project. Here is the structure list generated by the libs. We will explain to you why and how we use all of these files:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"src",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Blocks",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"assets"),Object(o.b)("li",{parentName:"ul"},"components"),Object(o.b)("li",{parentName:"ul"},"custom"),Object(o.b)("li",{parentName:"ul"},"variations"),Object(o.b)("li",{parentName:"ul"},"wrapper"))),Object(o.b)("li",{parentName:"ul"},"Config"),Object(o.b)("li",{parentName:"ul"},"CustomMeta"),Object(o.b)("li",{parentName:"ul"},"CustomPostType"),Object(o.b)("li",{parentName:"ul"},"CustomTaxonomy"),Object(o.b)("li",{parentName:"ul"},"Enqueue",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Admin"),Object(o.b)("li",{parentName:"ul"},"Blocks"),Object(o.b)("li",{parentName:"ul"},"Theme"))),Object(o.b)("li",{parentName:"ul"},"I18n"),Object(o.b)("li",{parentName:"ul"},"Login"),Object(o.b)("li",{parentName:"ul"},"Main"),Object(o.b)("li",{parentName:"ul"},"Manifest"),Object(o.b)("li",{parentName:"ul"},"Media"),Object(o.b)("li",{parentName:"ul"},"ModifyAdminAppearance"),Object(o.b)("li",{parentName:"ul"},"Rest",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Field"),Object(o.b)("li",{parentName:"ul"},"Routes"))),Object(o.b)("li",{parentName:"ul"},"ThemeOptions"),Object(o.b)("li",{parentName:"ul"},"View"))),Object(o.b)("li",{parentName:"ul"},".storybook"),Object(o.b)("li",{parentName:"ul"},".gitignore"),Object(o.b)("li",{parentName:"ul"},".eslintignore"),Object(o.b)("li",{parentName:"ul"},".eslintrc"),Object(o.b)("li",{parentName:"ul"},".stylelintrc"),Object(o.b)("li",{parentName:"ul"},"babel.config.js"),Object(o.b)("li",{parentName:"ul"},"composer.json"),Object(o.b)("li",{parentName:"ul"},"composer.lock"),Object(o.b)("li",{parentName:"ul"},"package-lock.json"),Object(o.b)("li",{parentName:"ul"},"package.json"),Object(o.b)("li",{parentName:"ul"},"phpcs.xml.dist"),Object(o.b)("li",{parentName:"ul"},"postcss.config.js"),Object(o.b)("li",{parentName:"ul"},"README.md"),Object(o.b)("li",{parentName:"ul"},"webpack.config.js")),Object(o.b)("h3",{id:"blocks"},"Blocks"),Object(o.b)("p",null,"Blocks are used, as the name implies, for the block editor. You can read about blocks in more detail in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"blocks"}),"Blocks chapter"),"."),Object(o.b)("h3",{id:"config"},"Config"),Object(o.b)("p",null,"This class is used to define all the configuration methods for your project like ",Object(o.b)("inlineCode",{parentName:"p"},"project name"),", ",Object(o.b)("inlineCode",{parentName:"p"},"project version"),", ",Object(o.b)("inlineCode",{parentName:"p"},"rest routes namespace"),", and much more."),Object(o.b)("p",null,"You can define your project's needs in this class as a static method that you can quickly use."),Object(o.b)("h3",{id:"custommeta"},"CustomMeta"),Object(o.b)("p",null,"This class contains all the custom meta hooks for your project."),Object(o.b)("h3",{id:"customposttype"},"CustomPostType"),Object(o.b)("p",null,"This class contains all the custom post type hooks for your project. We created a preset for you, so this class looks the same on all the projects."),Object(o.b)("h3",{id:"customtaxonomy"},"CustomTaxonomy"),Object(o.b)("p",null,"This class contains all the custom taxonomy hooks for your project. Like custom post type, we created a preset for you, so this class looks the same on all the projects."),Object(o.b)("h3",{id:"enqueue"},"Enqueue"),Object(o.b)("p",null,"These classes will handle JavaScript and CSS files for your project, depending on the location you want to use it:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Admin")," - Used in the admin (not block editor) part of your project. You can find the files inside the ",Object(o.b)("inlineCode",{parentName:"li"},"assets")," folder with the ",Object(o.b)("inlineCode",{parentName:"li"},"-admin")," suffix."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Blocks")," - Used in the block editor part of your project. You can find the files inside the ",Object(o.b)("inlineCode",{parentName:"li"},"src/Blocks/assets")," folder. As blocks are complicated, we have files loaded only in the admin-editor part of the project, those files have an ",Object(o.b)("inlineCode",{parentName:"li"},"-editor")," suffix. The rest of the files with no suffix load on the admin-editor part and the project's front end."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Theme")," - Used in the theme (frontend) part of your project. You can find the files inside the ",Object(o.b)("inlineCode",{parentName:"li"},"assets")," folder with no suffix. You would use these files for stuff related to your project that is not associated with components and blocks. (To be honest, we barely use these files.)")),Object(o.b)("p",null,"The usage of any of these classes is optional, and you can use only what you need. Eightshift Boilerplate ",Object(o.b)("inlineCode",{parentName:"p"},"setup_theme")," command comes with all three classes already implemented. Keep in mind that enqueue classes work in combination with the Webpack build of your project."),Object(o.b)("p",null,"We named all our files with ",Object(o.b)("inlineCode",{parentName:"p"},"application")," in prefix. If you don't like the name, you can change it by providing the project overrides for constants used in the Eightshift-Libs. If you change the file names, you must make changes to the Webpack build process as well. For modifying the Webpack part you can check in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"webpack"}),"Webpack chapter"),"."),Object(o.b)("h3",{id:"i18n"},"I18n"),Object(o.b)("p",null,"This class is used to define all hooks related to the languages and translations for your project."),Object(o.b)("h3",{id:"login"},"Login"),Object(o.b)("p",null,"We use this file to change the logo link on the login page, but you can use it however you seem fit."),Object(o.b)("h3",{id:"main"},"Main"),Object(o.b)("p",null,"This is the main entry point file for all your classes. It implements DI container and autowiring with the main action that loads everything in your project inside the WordPress ecosystem. You can provide manual service classes here as well. We covered this in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"autowiring"}),"autowiring chapter"),"."),Object(o.b)("h3",{id:"manifest"},"Manifest"),Object(o.b)("p",null,"This class provides ",Object(o.b)("inlineCode",{parentName:"p"},"manifest.json")," file location and helpers to return the full path for a specific asset. We will cover this in more detail in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"manifest"}),"manifest chapter"),"."),Object(o.b)("h3",{id:"media"},"Media"),Object(o.b)("p",null,"This class is used to add all custom project implementation for media like adding custom image size, enabling SVG image, etc."),Object(o.b)("h3",{id:"modifyadminappearance"},"ModifyAdminAppearance"),Object(o.b)("p",null,"This class is used to change admin appearance. We use it to change the admin color palette depending on the environment."),Object(o.b)("h3",{id:"rest"},"Rest"),Object(o.b)("p",null,"These classes will handle the rest fields and routes for your project. We will cover this in more detail in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"rest"}),"rest chapter"),"."),Object(o.b)("h3",{id:"themeoptions"},"ThemeOptions"),Object(o.b)("p",null,"This class is used to add admin menu options and configurations for theme options and settings."),Object(o.b)("h3",{id:"view"},"View"),Object(o.b)("p",null,"This class is used to add filters used in escaping unsafe tags in the ",Object(o.b)("inlineCode",{parentName:"p"},"wp_kses_post")," and ",Object(o.b)("inlineCode",{parentName:"p"},"wp_kses")," methods."),Object(o.b)("h3",{id:"storybook"},".storybook"),Object(o.b)("p",null,"This folder contains all of the files necessary to run the storybook in your project. Read more about it on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://storybook.js.org/"}),"this link"),"."),Object(o.b)("h3",{id:"gitignore"},".gitignore"),Object(o.b)("p",null,"As the name implies, this file is used to provide restrictions for files that will not be added to the git structure. Read more about it on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://git-scm.com/"}),"this link"),"."),Object(o.b)("h3",{id:"eslintignore"},".eslintignore"),Object(o.b)("p",null,"This file provides similar restrictions but this time for files/folders that will not be checked with the eslint."),Object(o.b)("h3",{id:"eslintrc"},".eslintrc"),Object(o.b)("p",null,"This file provides all the definitions used for linting JavaScript files. Read more about it on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://eslint.org/"}),"this link"),"."),Object(o.b)("h3",{id:"stylelintrc"},".stylelintrc"),Object(o.b)("p",null,"This file provides all the definitions used for linting Style (SCSS/CSS) files. Read more about it on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://stylelint.io/"}),"this link"),"."),Object(o.b)("h3",{id:"babelconfigjs"},"babel.config.js"),Object(o.b)("p",null,"This file provides all the definitions of how your JavaScript code will be compiled, what standard you will use, and much more. Read more about it on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://babeljs.io/"}),"this link"),"."),Object(o.b)("h3",{id:"composerjson"},"composer.json"),Object(o.b)("p",null,"This file contains all the vendor packages you are using in your project. They are added to your project using the ",Object(o.b)("inlineCode",{parentName:"p"},"composer install")," command. Read more about it on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://getcomposer.org/"}),"this link"),"."),Object(o.b)("h3",{id:"composerlock"},"composer.lock"),Object(o.b)("p",null,"Lock files are used to set the package version to the exact release. This ensures that everyone gets the same package version when doing the installation."),Object(o.b)("h3",{id:"package-lockjson"},"package-lock.json"),Object(o.b)("p",null,"The same as ",Object(o.b)("inlineCode",{parentName:"p"},"composer.lock")," but for node_modules."),Object(o.b)("h3",{id:"packagejson"},"package.json"),Object(o.b)("p",null,"This file contains all the node_modules packages you are using in your project. They are added to your project using the ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," command. Read more about it on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://nodejs.dev/"}),"this link"),"."),Object(o.b)("h3",{id:"phpcsxmldist"},"phpcs.xml.dist"),Object(o.b)("p",null,"This file provides all the definitions used for linting PHP files. Read more about it on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/squizlabs/PHP_CodeSniffer"}),"this link"),"."),Object(o.b)("h3",{id:"postcssconfigjs"},"postcss.config.js"),Object(o.b)("p",null,"Postcss works in correlation with Webpack, and it defines what additional plugins you are going to use when building your css files. Read more about it on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://postcss.org/"}),"this link"),"."),Object(o.b)("h3",{id:"readmemd"},"README.md"),Object(o.b)("p",null,"Readme is always good to have. You should always define here how to set up a new project and make project switching a breeze."),Object(o.b)("h3",{id:"webpackconfigjs"},"webpack.config.js"),Object(o.b)("p",null,"This file provides all the definitions used for building your JavaScript and CSS files. We will cover this in more detail in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"webpack"}),"Webpack chapter"),"."))}b.isMDXComponent=!0},252:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return h}));var a=i(0),n=i.n(a);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=n.a.createContext({}),b=function(e){var t=n.a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s({},t,{},e)),i},p=function(e){var t=b(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=b(i),d=a,h=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return i?n.a.createElement(h,s({ref:t},c,{components:i})):n.a.createElement(h,s({ref:t},c))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,l=new Array(o);l[0]=d;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=i[c];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,i)}d.displayName="MDXCreateElement"}}]);