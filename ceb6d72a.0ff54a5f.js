(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{226:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return l})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return b}));var n=o(1),a=o(9),i=(o(0),o(252)),r={id:"blocks-intro",title:"Intro",sidebar_label:"Intro"},l={id:"basics/blocks-intro",title:"Intro",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)",source:"@site/docs/basics/blocks-intro.md",permalink:"/eightshift-docs/docs/basics/blocks-intro",sidebar_label:"Intro",sidebar:"docs",previous:{title:"Important",permalink:"/eightshift-docs/docs/basics/blocks-important"},next:{title:"Registration",permalink:"/eightshift-docs/docs/basics/blocks-registration"}},c=[{value:"Why do all my blocks look the same and have the same name structure?",id:"why-do-all-my-blocks-look-the-same-and-have-the-same-name-structure",children:[]},{value:"What is the difference between components and blocks?",id:"what-is-the-difference-between-components-and-blocks",children:[]},{value:"Do I need to have Storybook stories in my block?",id:"do-i-need-to-have-storybook-stories-in-my-block",children:[]},{value:"Do you support block variations, and how can I use them?",id:"do-you-support-block-variations-and-how-can-i-use-them",children:[]},{value:"Do you support patterns, and how can I use them?",id:"do-you-support-patterns-and-how-can-i-use-them",children:[]},{value:"What is a wrapper?",id:"what-is-a-wrapper",children:[]},{value:"Do you support inner blocks?",id:"do-you-support-inner-blocks",children:[]},{value:"Why do you use manifest.json in all blocks and components?",id:"why-do-you-use-manifestjson-in-all-blocks-and-components",children:[]},{value:"Why do you use global manifest.json?",id:"why-do-you-use-global-manifestjson",children:[]},{value:"If I want to create a new block/component, what do I do?",id:"if-i-want-to-create-a-new-blockcomponent-what-do-i-do",children:[]},{value:"How can I use your pre-made blocks?",id:"how-can-i-use-your-pre-made-blocks",children:[]},{value:"Can I use block/component from Eightshift-frontend-libs directly?",id:"can-i-use-blockcomponent-from-eightshift-frontend-libs-directly",children:[]},{value:"I want to change attributes on inner blocks. How do I do it?",id:"i-want-to-change-attributes-on-inner-blocks-how-do-i-do-it",children:[]},{value:"Do I need to write JS and PHP implementation for all my blocks?",id:"do-i-need-to-write-js-and-php-implementation-for-all-my-blocks",children:[]},{value:"How do I use components in blocks?",id:"how-do-i-use-components-in-blocks",children:[]},{value:"How do I use multiple heading components in my block?",id:"how-do-i-use-multiple-heading-components-in-my-block",children:[]},{value:"Where can I define my global styles?",id:"where-can-i-define-my-global-styles",children:[]},{value:"Where can I define global typography for all my blocks/components?",id:"where-can-i-define-global-typography-for-all-my-blockscomponents",children:[]},{value:"Can I make a component with WP_Query logic in it?",id:"can-i-make-a-component-with-wp_query-logic-in-it",children:[]},{value:"Do I need to make components for all my blocks?",id:"do-i-need-to-make-components-for-all-my-blocks",children:[]},{value:"Will this setup work with full site editing?",id:"will-this-setup-work-with-full-site-editing",children:[]},{value:"Can I use core blocks with your setup?",id:"can-i-use-core-blocks-with-your-setup",children:[]},{value:"How can I limit my blocklist?",id:"how-can-i-limit-my-blocklist",children:[]},{value:"How to allow only one pattern category?",id:"how-to-allow-only-one-pattern-category",children:[]},{value:"Can I have blocks in multiple categories?",id:"can-i-have-blocks-in-multiple-categories",children:[]},{value:"How can I add a new blocks category?",id:"how-can-i-add-a-new-blocks-category",children:[]},{value:"What if you don&#39;t yet support something from the native setup? What can I do?",id:"what-if-you-dont-yet-support-something-from-the-native-setup-what-can-i-do",children:[]},{value:"Why is my blocks folder called <code>custom</code> and not <code>blocks</code>, for example?",id:"why-is-my-blocks-folder-called-custom-and-not-blocks-for-example",children:[]},{value:"In the global manifest, you have a key called \u201ccustomBlocksName\u201d: \u201ceightshift-block\u201d. Can I change this to my-project-name-block?",id:"in-the-global-manifest-you-have-a-key-called-customblocksname-eightshift-block-can-i-change-this-to-my-project-name-block",children:[]},{value:"Simple vs Compound blocks",id:"simple-vs-compound-blocks",children:[]},{value:"Naming is hard",id:"naming-is-hard",children:[]}],s={rightToc:c};function b(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})))),Object(i.b)("p",null,"Before we dive into blocks and see how everything is set, we should describe this setup's mindset.\nIf you've managed to set up your project by this point with the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"wp-cli"}),"WP-CLI")," command ",Object(i.b)("inlineCode",{parentName:"p"},"setup_theme"),", you might have a few questions. We will try to answer all those questions here."),Object(i.b)("h3",{id:"why-do-all-my-blocks-look-the-same-and-have-the-same-name-structure"},"Why do all my blocks look the same and have the same name structure?"),Object(i.b)("p",null,"This is so because we defined the name structure for all our blocks and components to load everything automatically. For more information, please check the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"block-structure"}),"block structure")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"blocks-component-structure"}),"component structure")," chapters."),Object(i.b)("h3",{id:"what-is-the-difference-between-components-and-blocks"},"What is the difference between components and blocks?"),Object(i.b)("p",null,"The main difference is that blocks are available in the block editor's block picker, and components are not. With that being said, blocks are registered using the ",Object(i.b)("inlineCode",{parentName:"p"},"registerBlockType")," method, and components are just here for you to bundle some functionality in one place and reuse it wherever you need."),Object(i.b)("p",null,"For more information about blocks, read the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"block-structure"}),"block structure")," chapter. To find out more about components, read the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"blocks-component-structure"}),"component structure")," chapter."),Object(i.b)("h3",{id:"do-i-need-to-have-storybook-stories-in-my-block"},"Do I need to have Storybook stories in my block?"),Object(i.b)("p",null,"No, you don't. But we provided you with the ability to use the Storybook for all of your blocks and components. Why not use it? It will speed up your development time. Trust us. \ud83d\ude42"),Object(i.b)("p",null,"For more details on how to write stories, check out ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"blocks-storybook"}),"this chapter"),"."),Object(i.b)("h3",{id:"do-you-support-block-variations-and-how-can-i-use-them"},"Do you support block variations, and how can I use them?"),Object(i.b)("p",null,"Yes, we do. All block variations are located in the ",Object(i.b)("inlineCode",{parentName:"p"},"src/Blocks/variations")," folder. For more information about this, please check the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"blocks-variations"}),"variations")," chapter."),Object(i.b)("h3",{id:"do-you-support-patterns-and-how-can-i-use-them"},"Do you support patterns, and how can I use them?"),Object(i.b)("p",null,"Yes, we do. For more information, please read the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"blocks-patterns"}),"patterns")," chapter."),Object(i.b)("h3",{id:"what-is-a-wrapper"},"What is a wrapper?"),Object(i.b)("p",null,"Read about wrappers in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"blocks-wrapper"}),"this chapter"),"."),Object(i.b)("h3",{id:"do-you-support-inner-blocks"},"Do you support inner blocks?"),Object(i.b)("p",null,"Yes, we support everything that the core natively supports.  You can find more information on how to use them in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"block-manifest"}),"this chapter"),"."),Object(i.b)("h3",{id:"why-do-you-use-manifestjson-in-all-blocks-and-components"},"Why do you use manifest.json in all blocks and components?"),Object(i.b)("p",null,"So that we can provide content, attributes, options, and much more across multiple different files in multiple contexts (in both PHP and JS). You can read all about it in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"block-manifest"}),"this chapter"),"."),Object(i.b)("h3",{id:"why-do-you-use-global-manifestjson"},"Why do you use global manifest.json?"),Object(i.b)("p",null,"The answer is the same as the previous one. In the global ",Object(i.b)("inlineCode",{parentName:"p"},"manifest.json"),", we have options that are shared across all blocks and components. Read more about it in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"blocks-global-manifest"}),"this chapter"),"."),Object(i.b)("h3",{id:"if-i-want-to-create-a-new-blockcomponent-what-do-i-do"},"If I want to create a new block/component, what do I do?"),Object(i.b)("p",null,"In your terminal, write ",Object(i.b)("inlineCode",{parentName:"p"},"wp boilerplate use_block --name=example")," and style that block however you seem fit."),Object(i.b)("h3",{id:"how-can-i-use-your-pre-made-blocks"},"How can I use your pre-made blocks?"),Object(i.b)("p",null,"You can check all available blocks/components using our ",Object(i.b)("inlineCode",{parentName:"p"},"wp boilerplate use_block --help")," or ",Object(i.b)("inlineCode",{parentName:"p"},"wp boilerplate use_component --help")," command."),Object(i.b)("h3",{id:"can-i-use-blockcomponent-from-eightshift-frontend-libs-directly"},"Can I use block/component from Eightshift-frontend-libs directly?"),Object(i.b)("p",null,"It depends. You can't use things from the blocks folder like ",Object(i.b)("inlineCode",{parentName:"p"},"components"),", ",Object(i.b)("inlineCode",{parentName:"p"},"custom"),", ",Object(i.b)("inlineCode",{parentName:"p"},"variations"),", ",Object(i.b)("inlineCode",{parentName:"p"},"wrapper"),", etc. They are meant to be copied to your project, styled, and changed depending on your project's needs."),Object(i.b)("p",null,"You can move things from a block to your project using the commands described in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"blocks-intro#how-can-i-use-your-pre-made-blocks"}),"this chapter"),"."),Object(i.b)("h3",{id:"i-want-to-change-attributes-on-inner-blocks-how-do-i-do-it"},"I want to change attributes on inner blocks. How do I do it?"),Object(i.b)("p",null,"We described how attributes are used and combined in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"blocks-attributes"}),"this chapter")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"blocks-component-in-block"}),"this chapter"),"."),Object(i.b)("h3",{id:"do-i-need-to-write-js-and-php-implementation-for-all-my-blocks"},"Do I need to write JS and PHP implementation for all my blocks?"),Object(i.b)("p",null,"For a block, you must provide the JS and PHP implementations because it won't work without them."),Object(i.b)("p",null,"For components, if you are not using the JS part, you don't need to write one, but we recommend you do so because the JS part is used in Storybook."),Object(i.b)("p",null,"If you have a more advanced block and don't benefit from writing the JS implementation of the block, you can always use the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.wordpress.org/block-editor/packages/packages-server-side-render/"}),"ServerSideRender component")," form the core. If you have no inputs in the editor from the admin, there is no need to write JS implementation of the block. Just use ",Object(i.b)("inlineCode",{parentName:"p"},"ServerSideRender")," component in that case."),Object(i.b)("h3",{id:"how-do-i-use-components-in-blocks"},"How do I use components in blocks?"),Object(i.b)("p",null,"Please check out ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"blocks-component-in-block"}),"this chapter")," for more information."),Object(i.b)("h3",{id:"how-do-i-use-multiple-heading-components-in-my-block"},"How do I use multiple heading components in my block?"),Object(i.b)("p",null,"You can follow the instructions given in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"blocks-component-in-block"}),"this chapter"),"."),Object(i.b)("h3",{id:"where-can-i-define-my-global-styles"},"Where can I define my global styles?"),Object(i.b)("p",null,"You can follow the instructions given in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"writing-styles"}),"this chapter"),"."),Object(i.b)("h3",{id:"where-can-i-define-global-typography-for-all-my-blockscomponents"},"Where can I define global typography for all my blocks/components?"),Object(i.b)("p",null,"You can follow the instructions given in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"writing-styles"}),"this chapter"),"."),Object(i.b)("h3",{id:"can-i-make-a-component-with-wp_query-logic-in-it"},"Can I make a component with WP_Query logic in it?"),Object(i.b)("p",null,"Yes, you can, but think of the component as a dumb and simple piece of code that should not hold any business logic. A component should only be used as a view. If you need to write WP_Query logic, you can do that in a block and just pass the data to your component as props."),Object(i.b)("h3",{id:"do-i-need-to-make-components-for-all-my-blocks"},"Do I need to make components for all my blocks?"),Object(i.b)("p",null,"No, it might look like that from the examples provided, but that is not the case. You should create components depending on your needs."),Object(i.b)("p",null,"Ask yourself, will I reuse this functionality anywhere else?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If the answer is ",Object(i.b)("strong",{parentName:"li"},"yes"),", create a component."),Object(i.b)("li",{parentName:"ul"},"If the answer is ",Object(i.b)("strong",{parentName:"li"},"no"),", don't create a component.")),Object(i.b)("p",null,"Our recommendation is not to burden yourself with components from the beginning. Start creating blocks and, if you find yourself in need of code that you already wrote, just extract it in a component."),Object(i.b)("h3",{id:"will-this-setup-work-with-full-site-editing"},"Will this setup work with full site editing?"),Object(i.b)("p",null,"Yes, it will. We are constantly upgrading this documentation and our code to say that it will work with full site editing. This boilerplate was made for the Infinum/Eightshift WordPress team, so we are constantly using it in our projects."),Object(i.b)("h3",{id:"can-i-use-core-blocks-with-your-setup"},"Can I use core blocks with your setup?"),Object(i.b)("p",null,"Yes, you can. We are working on the ability to override core blocks in our smart way. Until we make this work, you can use everything that is already defined in the core documentation."),Object(i.b)("p",null,"We avoid using core blocks because they add different class naming and additional markup that makes it harder to style things."),Object(i.b)("p",null,"Also, they are prone to breaking changes every several months, so we prefer to write our own implementation."),Object(i.b)("h3",{id:"how-can-i-limit-my-blocklist"},"How can I limit my blocklist?"),Object(i.b)("p",null,"Easy. We have a method you can extend that limits your project's block to the only block from your project. You should put this filter in your project's ",Object(i.b)("inlineCode",{parentName:"p"},"src/Blocks/Blocks.php")," file under the ",Object(i.b)("inlineCode",{parentName:"p"},"register")," method:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"  // Limits the usage of only custom project blocks.\n  add_filter('allowed_block_types', [ $this, 'getAllBlocksList' ], 10, 2);\n")),Object(i.b)("h3",{id:"how-to-allow-only-one-pattern-category"},"How to allow only one pattern category?"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Coming soon")),Object(i.b)("h3",{id:"can-i-have-blocks-in-multiple-categories"},"Can I have blocks in multiple categories?"),Object(i.b)("p",null,"In your block manifest, you can define in what category your block will appear. You can create a new category for your project or use our category. We created our category called ",Object(i.b)("inlineCode",{parentName:"p"},"eightshift")," using this filter:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"  // Create a new custom category for custom blocks.\n  add_filter('block_categories', [ $this, 'getCustomCategory' ]);\n")),Object(i.b)("h3",{id:"how-can-i-add-a-new-blocks-category"},"How can I add a new blocks category?"),Object(i.b)("p",null,"You can provide your implementation, or you can extend our method for registering a custom category. Here is how you do it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"})," /**\n  * Register all the hooks\n  *\n  * @return void\n  */\npublic function register(): void\n{\n  // Create a new custom category for custom blocks.\n  add_filter('block_categories', [ $this, 'getCustomCategory' ]);\n}\n\n /**\n  * Create a custom category to assign all custom blocks\n  *\n  * This category will be shown on all blocks list in the \"Add Block\" button.\n  *\n  * @param array[]  $categories Array of all block categories.\n  * @param \\WP_Post $post Post being loaded.\n  *\n  * @return array[] Array of block categories.\n  */\npublic function getCustomCategory(array $categories, \\WP_Post $post): array\n{\n  return array_merge(\n    parent::getCustomCategory($categories, $post),\n    [\n      [\n        'slug' => 'custom-category-name',\n        'title' => \\esc_html__('Custom Category', 'project text domain'),\n        'icon' => 'admin-settings',\n      ],\n    ]\n  );\n}\n")),Object(i.b)("h3",{id:"what-if-you-dont-yet-support-something-from-the-native-setup-what-can-i-do"},"What if you don't yet support something from the native setup? What can I do?"),Object(i.b)("p",null,"As we described in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"blocks"}),"this chapter"),", if we don't support something natively from the core or you can't find it in this documentation, you can always use it in the normal native way from the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.wordpress.org/block-editor/tutorials/block-tutorial/"}),"WordPress documentation"),". Also, if you think we are missing something, please open a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-frontend-libs/pulls"}),"pull request")," or an ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-frontend-libs/issues"}),"issue")," on our GitHub repository."),Object(i.b)("h3",{id:"why-is-my-blocks-folder-called-custom-and-not-blocks-for-example"},"Why is my blocks folder called ",Object(i.b)("inlineCode",{parentName:"h3"},"custom")," and not ",Object(i.b)("inlineCode",{parentName:"h3"},"blocks"),", for example?"),Object(i.b)("p",null,"The idea was to put all your custom blocks inside the custom folder and all core block in the core folder. This boilerplate is not designed only for your custom block, but you can use it as an ultimate block setup."),Object(i.b)("p",null,"And folder structure ",Object(i.b)("inlineCode",{parentName:"p"},"src/Blocks/blocks")," is kind of weird."),Object(i.b)("h3",{id:"in-the-global-manifest-you-have-a-key-called-customblocksname-eightshift-block-can-i-change-this-to-my-project-name-block"},"In the global manifest, you have a key called \u201ccustomBlocksName\u201d: \u201ceightshift-block\u201d. Can I change this to my-project-name-block?"),Object(i.b)("p",null,"You can, but you shouldn't. We use this key to provide the CSS selectors on all our custom blocks in the block editor. Additional styles are added to this selector for the wrapper to work on full width and remove some of the native block editor styles."),Object(i.b)("p",null,"So don't remove or change this \ud83d\ude05."),Object(i.b)("h3",{id:"simple-vs-compound-blocks"},"Simple vs Compound blocks"),Object(i.b)("p",null,"In a nutshell, there is no difference between blocks. The WordPress core block is a block, but we like to make a distinction between what is simple and what is a compound block."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Simple block")," is a block that is used just as is and provides a small isolated functionality. For example: heading, paragraph, button, etc."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Compound block")," is a block built from multiple components. For example: card, featured posts, etc"),Object(i.b)("h3",{id:"naming-is-hard"},"Naming is hard"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"There are only two hard things in Computer Science: cache invalidation and naming things. - Phil Karlton")),Object(i.b)("p",null,"Yes, naming is hard, and no matter how long your development experience is you will always struggle with names for your components, block, files, variables, functions, etc."),Object(i.b)("p",null,"Here are some of our recommendations to ease your pain:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Always try to name your block based on ",Object(i.b)("strong",{parentName:"li"},"what they are"),", rather than ",Object(i.b)("strong",{parentName:"li"},"what they will be used for"),". For example, if you have a component card for custom post-type ",Object(i.b)("inlineCode",{parentName:"li"},"books"),", you should never call this component ",Object(i.b)("inlineCode",{parentName:"li"},"card-book"),". Instead, use a more generic name like ",Object(i.b)("inlineCode",{parentName:"li"},"card-product"),"."),Object(i.b)("li",{parentName:"ul"},"Make your names as generic as possible for better reusability, but specific enough to fully understand what the block/component is used for."),Object(i.b)("li",{parentName:"ul"},"Always think about the future. How can this feature be used in some other way?"),Object(i.b)("li",{parentName:"ul"},'When naming your attributes ask yourself: "is this attribute going to be used in any other way?". For example, you have an attribute for adding font-weight: bold to your text. You can create an attribute called font-weight and set it as a ',Object(i.b)("inlineCode",{parentName:"li"},"boolean")," type and that will be ok if you have only one font-weight. A better way would be to put it as a string and provide a ",Object(i.b)("inlineCode",{parentName:"li"},"SelectControl")," component if there is any possibility that in the future you will have additional font-weight."),Object(i.b)("li",{parentName:"ul"},"Name booleans positively as a question. Example: ",Object(i.b)("inlineCode",{parentName:"li"},"isValid"),", ",Object(i.b)("inlineCode",{parentName:"li"},"isLoading"),", ",Object(i.b)("inlineCode",{parentName:"li"},"isComplete"),"."),Object(i.b)("li",{parentName:"ul"},"Don\u2019t hesitate to use longer names."),Object(i.b)("li",{parentName:"ul"},"Use singular names."),Object(i.b)("li",{parentName:"ul"},"The variables or functions should be named by their work: Name of variables/functions should always try to express their meaning without diving into the code base try to pack meaningful information inside the name."),Object(i.b)("li",{parentName:"ul"},"Naming should be simple enough to be understood by everyone: Using complex words to describe a simple thing only creates hassle while reading the code. Also, use simple English."),Object(i.b)("li",{parentName:"ul"},"You might not be the only person working on your particular project in the future. Think about the next person. Your naming will provide an insight into the process and project."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"BE CONSISTENT"),".")))}b.isMDXComponent=!0},252:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return h}));var n=o(0),a=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l({},t,{},e)),o},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(o),d=n,h=u["".concat(r,".").concat(d)]||u[d]||p[d]||i;return o?a.a.createElement(h,l({ref:t},s,{components:o})):a.a.createElement(h,l({ref:t},s))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var s=2;s<i;s++)r[s]=o[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);