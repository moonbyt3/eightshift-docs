(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{239:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(1),a=t(9),o=(t(0),t(252)),s={id:"columns-user",title:"User"},c={id:"legacy/v4/guides/columns-user",title:"User",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/blob/develop/src/columns/class-base-user-columns.php)",source:"@site/docs/legacy/v4/guides/columns-user.md",permalink:"/eightshift-docs/docs/legacy/v4/guides/columns-user",sidebar:"docs",previous:{title:"Taxonomy",permalink:"/eightshift-docs/docs/legacy/v4/guides/columns-taxonomy"},next:{title:"Login",permalink:"/eightshift-docs/docs/legacy/v4/guides/login"}},l=[{value:"Example:",id:"example",children:[]}],i={rightToc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-libs/blob/develop/src/columns/class-base-user-columns.php"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})))),Object(o.b)("p",null,"User Column class is located in ",Object(o.b)("inlineCode",{parentName:"p"},"Eightshift Libs"),". To extend it use ",Object(o.b)("inlineCode",{parentName:"p"},"Eightshift_Libs\\Columns\\Base_User_Columns")," class."),Object(o.b)("h2",{id:"example"},"Example:"),Object(o.b)("p",null,"To create custom user column:\n1. make a new class ",Object(o.b)("inlineCode",{parentName:"p"},"src/columns/class-example-user-column.php"),".\n2. implement all the methods provided in the example.\n3. register the class inside the ",Object(o.b)("inlineCode",{parentName:"p"},"class-main.php")," file.\n4. dump autoload."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"<?php\n/**\n * Example_User_Column class file\n *\n * @since 1.1.0\n * @package Eightshift_Boilerplate\\Columns\n */\n\ndeclare( strict_types=1 );\n\nnamespace Eightshift_Boilerplate\\Columns;\n\n/**\n * Class Example_User_Column.\n */\nclass Example_User_Column extends Base_User_Columns {\n\n  /**\n   * Column name constant name.\n   *\n   * @var string\n   */\n  const COLUMN_NAME = 'example';\n\n  /**\n   * Add additional user columns to the columns array.\n   *\n   * @param array $columns The existing column names array with default user columns (title, author, date etc.).\n   *\n   * @return array         Modified column names array.\n   *\n   * @since 2.0.5\n   */\n  public function add_column_name( array $columns ) : array {\n    $columns[ static::COLUMN_NAME ] = esc_html__( 'Example', 'eightshift-boilerplate' );\n\n    return $columns;\n  }\n\n  /**\n   * Render the user column content in the custom user column\n   *\n   * @param string $output      Custom column output. Default empty.\n   * @param string $column_name Column name.\n   * @param int    $user_id     ID of the currently-listed user.\n   *\n   * @return string             Output based on the column name.\n   *\n   * @since 2.0.5\n   */\n  public function render_column_content( string $output, string $column_name, int $user_id ) : string {\n    if ( $column_name === static::COLUMN_NAME ) {\n      echo 'column value';\n    }\n  }\n\n  /**\n   * Make user columns sortable\n   *\n   * @param  array $columns Array of columns.\n   *\n   * @return array          Modified array of columns.\n   *\n   * @since 2.0.5\n   */\n  public function sort_added_columns( array $columns ) : array {\n    $columns[ static::COLUMN_NAME ] = static::COLUMN_NAME;\n\n    return $columns;\n  };\n}\n\n")))}u.isMDXComponent=!0},252:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),u=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},m=function(e){var n=u(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return t?a.a.createElement(b,c({ref:n},i,{components:t})):a.a.createElement(b,c({ref:n},i))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var i=2;i<o;i++)s[i]=t[i];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);