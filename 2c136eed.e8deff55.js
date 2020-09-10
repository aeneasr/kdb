(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(2),o=n(6),i=(n(0),n(312)),s={id:"after",title:"After Jobs"},a={unversionedId:"self-service/workflows/jobs/after",id:"version-v0.1/self-service/workflows/jobs/after",isDocsHomePage:!1,title:"After Jobs",description:"User Login",source:"@site/versioned_docs/version-v0.1/self-service/workflows/jobs/after.md",permalink:"/kratos/docs/v0.1/self-service/workflows/jobs/after",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.1/self-service/workflows/jobs/after.md",version:"v0.1",lastUpdatedBy:"hackerman",lastUpdatedAt:1586177162,sidebar:"version-v0.1/docs",previous:{title:"Before Jobs",permalink:"/kratos/docs/v0.1/self-service/workflows/jobs/before"},next:{title:"Configuration",permalink:"/kratos/docs/v0.1/reference/configuration"}},c=[{value:"User Login",id:"user-login",children:[{value:"<code>session</code>",id:"session",children:[]},{value:"<code>redirect</code>",id:"redirect",children:[]},{value:"<code>revoke_active_sessions</code>",id:"revoke_active_sessions",children:[]}]},{value:"User Registration",id:"user-registration",children:[{value:"<code>session</code>",id:"session-1",children:[]},{value:"<code>redirect</code>",id:"redirect-1",children:[]}]}],l={rightToc:c};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"user-login"},"User Login"),Object(i.b)("p",null,"Jobs running after successful user authentication can be defined per\nSelf-Service Login Strategy in ORY Kratos' configuration file, for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"selfservice:\n  login:\n    after:\n      passwordless:\n        - job: redirect\n          config:\n            redirect_to: https://url-to-redirect/to\n      oidc:\n        - job: redirect\n          config:\n            redirect_to: https://url-to-redirect/to\n      password:\n        - job: redirect\n          config:\n            redirect_to: https://url-to-redirect/to\n")),Object(i.b)("h3",{id:"session"},Object(i.b)("inlineCode",{parentName:"h3"},"session")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"session")," job will send a ",Object(i.b)("inlineCode",{parentName:"p"},"Set-Cookie")," header which contains the session\ncookie. To use it, you must first define one or more (for secret rotation)\nsession secrets and then use it in one of the ",Object(i.b)("inlineCode",{parentName:"p"},"after")," work flows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'secrets:\n  session:\n    - something-super-secret # The first entry will be used to sign and verify session cookies\n\n    # All other entries will be used to verify session cookies that were signed before "something-super-secret" became\n    # the current signing secret.\n    - old-session-secret\n    - older-session-secret\n    - ancient-session-secret\n\nselfservice:\n  registration:\n    after:\n      <strategy>:\n        - job: session\n          # can not be configured\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This job is required for login to work, otherwise no session will be created.")),Object(i.b)("h3",{id:"redirect"},Object(i.b)("inlineCode",{parentName:"h3"},"redirect")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"redirect")," job will send a HTTP 302 Found response and redirect the client\nto the specified endpoint. There are two configuration options available:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"selfservice:\n  login:\n    after:\n      <strategy>:\n        - job: redirect\n          config:\n            # redirect_to sets the URL the client will be redirected to.\n            redirect_to: https://url-to-redirect/to\n\n            # allow_user_defined, if enabled, will check for a `?return_to` query parameter in the original request URL.\n            # If the parameter is set and the URL is whitelisted in `urls.whitelisted_return_to_domains`\n            allow_user_defined: true\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"It is highly recommended to set up a redirect job after login, otherwise the\nuser might get stuck on an empty, white screen.")),Object(i.b)("h3",{id:"revoke_active_sessions"},Object(i.b)("inlineCode",{parentName:"h3"},"revoke_active_sessions")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"revoke_active_sessions")," will delete all active sessions for that user on\nsuccessful login:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"selfservice:\n  login:\n    after:\n      <strategy>:\n        - job: revoke_active_sessions\n          # can not be configured\n")),Object(i.b)("h2",{id:"user-registration"},"User Registration"),Object(i.b)("p",null,"Jobs running after successful user registration can be defined per Self-Service\nRegistration Strategy in ORY Kratos' configuration file, for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"selfservice:\n  registration:\n    after:\n      passwordless:\n        - job: redirect\n          config:\n            redirect_to: https://url-to-redirect/to\n      oidc:\n        - job: redirect\n          config:\n            redirect_to: https://url-to-redirect/to\n      password:\n        - job: redirect\n          config:\n            redirect_to: https://url-to-redirect/to\n")),Object(i.b)("h3",{id:"session-1"},Object(i.b)("inlineCode",{parentName:"h3"},"session")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"session")," job will send a ",Object(i.b)("inlineCode",{parentName:"p"},"Set-Cookie")," header which contains the session\ncookie. To use it, you must first define one or more (for secret rotation)\nsession secrets and then use it in one of the ",Object(i.b)("inlineCode",{parentName:"p"},"after")," work flows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'secrets:\n  session:\n    - something-super-secret # The first entry will be used to sign and verify session cookies\n\n    # All other entries will be used to verify session cookies that were signed before "something-super-secret" became\n    # the current signing secret.\n    - old-session-secret\n    - older-session-secret\n    - ancient-session-secret\n\nselfservice:\n  registration:\n    after:\n      <strategy>:\n        - job: session\n          # can not be configured\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"session")," job is useful if you want users to be signed in immediately after\nregistration, without further account activation or an additional login flow."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Using this job as part of your post-registration workflow makes your system\nvulnerable to\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/kratos/docs/v0.1/concepts/security#account-enumeration-attacks"}),"Account Enumeration Attacks"),"\nbecause a threat agent can distinguish between existing and non-existing\naccounts by checking if ",Object(i.b)("inlineCode",{parentName:"p"},"Set-Cookie")," was sent as part of the registration\nresponse.")),Object(i.b)("h3",{id:"redirect-1"},Object(i.b)("inlineCode",{parentName:"h3"},"redirect")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"redirect")," job will send a HTTP 302 Found response and redirect the client\nto the specified endpoint. There are two configuration options available:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"selfservice:\n  registration:\n    after:\n      <strategy>:\n        - job: redirect\n          config:\n            # redirect_to sets the URL the client will be redirected to.\n            redirect_to: https://url-to-redirect/to\n\n            # allow_user_defined, if enabled, will check for a `?return_to` query parameter in the original request URL.\n            # If the parameter is set and the URL is whitelisted in `urls.whitelisted_return_to_domains`\n            allow_user_defined: true\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"It is highly recommended to set up a redirect job after registration,\notherwise the user might get stuck on an empty, white screen.")))}d.isMDXComponent=!0},312:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},b=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=d(n),p=r,f=b["".concat(s,".").concat(p)]||b[p]||u[p]||i;return n?o.a.createElement(f,a(a({ref:t},l),{},{components:n})):o.a.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);