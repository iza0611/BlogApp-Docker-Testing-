(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{34:function(e,t,s){},37:function(e,t,s){},46:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){},76:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(28),r=s.n(n),i=(s(34),s.p+"static/media/header2.b97b8bf3.png"),l=s(0);var o=function(){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("span",{className:"titlelarge",children:"blogging"}),Object(l.jsx)("span",{className:"titlesm",children:"blog whatever you want.."})]}),Object(l.jsx)("img",{className:"headerimg",src:i,alt:""})]})},j=s(4),u=s.n(j),b=s(8),p=s(2),m=(s(37),s(6));function d(e){var t=e.post;return Object(l.jsxs)("div",{className:"post",children:[t.photo&&Object(l.jsx)("img",{className:"postImg",src:"http://ec2-52-87-152-144.compute-1.amazonaws.com:5000/images/"+t.photo,alt:""}),Object(l.jsxs)("div",{className:"info",children:[Object(l.jsx)(m.b,{to:"/post/".concat(t._id),className:"link",children:Object(l.jsx)("span",{className:"title",children:t.title})}),Object(l.jsx)("hr",{}),Object(l.jsx)("span",{className:"postedTime",children:new Date(t.createdAt).toDateString()})]}),Object(l.jsx)("p",{className:"desc",children:t.desc})]})}s(46);var O=s(7),h=s.n(O);function x(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),s=t[0],a=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("http://ec2-52-87-152-144.compute-1.amazonaws.com:5000/api/posts");case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),console.log(Array.isArray(s))}),[s]),Object(l.jsx)("div",{className:"posts",children:Array.isArray(s)?s.map((function(e){return Object(l.jsx)(d,{post:e},e._id)})):Object(l.jsx)("br",{})})}s(65);var f=s.p+"static/media/sidebar.6693878e.png";var g=function(){return Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsxs)("div",{className:"sidebarItem",children:[Object(l.jsx)("span",{className:"sidebarTitle",children:"ABOUT US"}),Object(l.jsx)("img",{src:f,alt:""}),Object(l.jsx)("p",{children:"Provides a safe environment for the users to blog about various topics that they might be interested in."})]})})};s(66);function v(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o,{}),Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)(x,{}),Object(l.jsx)(g,{})]})]})}var N=s(19),w=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"UPDATE_START":return Object(N.a)(Object(N.a)({},e),{},{isFetching:!0});case"UPDATE_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"UPDATE_FAILURE":return{user:e.user,isFetching:!1,error:!0};case"LOGOUT":return{user:null,isFetching:!1,error:!1};default:return e}},y={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},S=Object(c.createContext)(y),k=function(e){var t=e.children,s=Object(c.useReducer)(w,y),a=Object(p.a)(s,2),n=a[0],r=a[1];return Object(c.useEffect)((function(){localStorage.setItem("user",JSON.stringify(n.user))}),[n.user]),Object(l.jsx)(S.Provider,{value:{user:n.user,isFetching:n.isFetching,error:n.error,dispatch:r},children:t})},I=(s(67),s.p+"static/media/profile.04ffa081.png");function T(){var e=Object(c.useContext)(S),t=e.user,s=e.dispatch;return Object(l.jsxs)("div",{className:"bar",children:[Object(l.jsx)("div",{className:"topLeft",children:Object(l.jsx)("p",{className:"headerTitle",children:"BLOG.ME"})}),Object(l.jsx)("div",{className:"topCenter",children:Object(l.jsxs)("ul",{className:"topList",children:[Object(l.jsx)("li",{className:"topListItem",children:Object(l.jsx)(m.b,{className:"link",to:"/",children:"HOME"})}),Object(l.jsx)("li",{className:"topListItem",children:Object(l.jsx)(m.b,{className:"link",to:"/",children:"ABOUT"})}),Object(l.jsx)("li",{className:"topListItem",children:Object(l.jsx)(m.b,{className:"link",to:"/",children:"CONTACT"})}),Object(l.jsx)("li",{className:"topListItem",children:Object(l.jsx)(m.b,{className:"link",to:"/write",children:"WRITE"})}),Object(l.jsx)("li",{className:"topListItem",onClick:function(){s({type:"LOGOUT"})},children:t&&"LOGOUT"})]})}),Object(l.jsx)("div",{className:"topRight",children:t?Object(l.jsx)(m.b,{to:"/settings",children:Object(l.jsx)("img",{className:"topImg",src:I,alt:""})}):Object(l.jsxs)("ul",{className:"topList",children:[Object(l.jsx)("li",{className:"topListItem",children:Object(l.jsx)(m.b,{className:"link",to:"/login",children:"LOGIN"})}),Object(l.jsx)("li",{className:"topListItem",children:Object(l.jsx)(m.b,{className:"link",to:"/register",children:"REGISTER"})})]})})]})}s(68);var C=s(3);s(69),s(70);var E=function(e){var t=e.com,s=Object(c.useState)(t.like),a=Object(p.a)(s,2),n=a[0],r=a[1],i=Object(c.useState)(t.dislike),o=Object(p.a)(i,2),j=o[0],u=o[1];return Object(l.jsxs)("div",{className:"comment",children:[Object(l.jsx)("p",{className:"commentUsername",children:t.username}),Object(l.jsx)("p",{className:"commentText",children:t.info}),Object(l.jsxs)("div",{className:"btn",children:[Object(l.jsxs)("span",{className:"like",children:[n," ",Object(l.jsx)("button",{className:"likeButton",onClick:function(){return r(n+1)},children:Object(l.jsx)("i",{className:"likeicon fa fa-thumbs-up"})})]}),Object(l.jsxs)("span",{className:"dislike",children:[j," ",Object(l.jsx)("button",{className:"likeButton",onClick:function(){return u(j+1)},children:Object(l.jsx)("i",{className:"dislikeicon fa fa-thumbs-down"})})]})]})]})};s(71);var L=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),s=t[0],a=(t[1],Object(c.useState)("")),n=Object(p.a)(a,2),r=n[0],i=n[1],o=Object(c.useContext)(S).user;return Object(l.jsxs)("div",{className:"comments",children:[Object(l.jsx)("p",{className:"commentHeading",children:"Comments"}),Object(l.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(l.jsx)("input",{className:"commentInput",type:"text",onChange:function(e){return i(e.target.value)}}),Object(l.jsx)("button",{className:"commentButton",onClick:function(){o?function(){var e={username:o.username,info:r,like:0,dislike:0},t=s;t.push(e),i(t),console.log(t)}():console.log("nothing")},children:"post comment"}),Object(l.jsx)("div",{children:s.map((function(e){return Object(l.jsx)(E,{com:e})}))})]})]})};function U(){var e=Object(C.f)().pathname.split("/")[2],t=Object(c.useState)({}),s=Object(p.a)(t,2),a=s[0],n=s[1],r=Object(c.useContext)(S).user,i=Object(c.useState)(""),o=Object(p.a)(i,2),j=o[0],d=o[1],O=Object(c.useState)(""),x=Object(p.a)(O,2),f=x[0],g=x[1],v=Object(c.useState)(!1),N=Object(p.a)(v,2),w=N[0],y=N[1];Object(c.useEffect)((function(){(function(){var t=Object(b.a)(u.a.mark((function t(){var s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("http://ec2-52-87-152-144.compute-1.amazonaws.com:5000/api/posts/"+e);case 2:s=t.sent,n(s.data),d(s.data.title),g(s.data.desc);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var k=function(){var e=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.delete("http://ec2-52-87-152-144.compute-1.amazonaws.com:5000/api/posts/".concat(a._id),{data:{username:r.username}});case 3:window.location.replace("/"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.put("http://ec2-52-87-152-144.compute-1.amazonaws.com:5000/api/posts/".concat(a._id),{username:r.username,title:j,desc:f});case 3:y(!1),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"singlePost",children:[Object(l.jsxs)("div",{className:"singlePostWrapper",children:[a.photo&&Object(l.jsx)("img",{src:"http://ec2-52-87-152-144.compute-1.amazonaws.com:5000/images/"+a.photo,alt:"",className:"singleImg"}),w?Object(l.jsx)("input",{type:"text",value:j,className:"singlTitle",autoFocus:!0,onChange:function(e){return d(e.target.value)}}):Object(l.jsxs)("h1",{className:"singleTitle",children:[a.title,a.username===(null===r||void 0===r?void 0:r.username)&&Object(l.jsxs)("div",{className:"action",children:[Object(l.jsx)("i",{className:"singleIcon fa fa-edit",onClick:function(){return y(!0)}}),Object(l.jsx)("i",{className:"singleIcon fa fa-trash-alt",onClick:k})]})]}),Object(l.jsxs)("div",{className:"singleInfo",children:[Object(l.jsxs)("span",{className:"singleAuthor",children:["Author:",Object(l.jsx)(m.b,{to:"/?user=".concat(a.username),className:"link",children:Object(l.jsxs)("b",{children:[" ",a.username]})})]}),Object(l.jsx)("span",{className:"singleTime",children:new Date(a.createdAt).toDateString()})]}),w?Object(l.jsx)("textarea",{className:"singleDesc",value:f,onChange:function(e){return g(e.target.value)}}):Object(l.jsx)("p",{className:"singleDesc",children:f}),w&&Object(l.jsx)("button",{className:"singlePostButton",onClick:I,children:"Update"})]}),Object(l.jsx)(L,{})]})}function A(){return Object(l.jsxs)("div",{className:"single",children:[Object(l.jsx)(U,{}),Object(l.jsx)(g,{})]})}s(72);function F(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),r=Object(p.a)(n,2),i=r[0],o=r[1],j=Object(c.useState)(null),m=Object(p.a)(j,2),d=m[0],O=m[1],x=Object(c.useContext)(S).user,f=function(){var e=Object(b.a)(u.a.mark((function e(t){var c,a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c={username:x.username,title:s,desc:i},!d){e.next=15;break}return a=new FormData,n=Date.now()+d.name,a.append("name",n),a.append("file",d),c.photo=n,e.prev=8,e.next=11,h.a.post("http://ec2-52-87-152-144.compute-1.amazonaws.com:5000/api/upload",a);case 11:e.next=15;break;case 13:e.prev=13,e.t0=e.catch(8);case 15:return e.prev=15,e.next=18,h.a.post("http://ec2-52-87-152-144.compute-1.amazonaws.com:5000/api/posts",c);case 18:r=e.sent,window.location.replace("http://ec2-52-87-152-144.compute-1.amazonaws.com:5000/post/"+r.data._id),e.next=24;break;case 22:e.prev=22,e.t1=e.catch(15);case 24:case"end":return e.stop()}}),e,null,[[8,13],[15,22]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"write",children:[d&&Object(l.jsx)("img",{className:"writeImg",src:URL.createObjectURL(d),alt:""}),Object(l.jsxs)("form",{className:"writeForm",onSubmit:f,children:[Object(l.jsxs)("div",{className:"writeFormGroup",children:[Object(l.jsx)("label",{htmlFor:"fileInput",children:Object(l.jsx)("i",{className:"writeIcon fa fa-plus"})}),Object(l.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return O(e.target.files[0])}}),Object(l.jsx)("input",{type:"text",placeholder:"Title",className:"writeInput",autoFocus:!0,onChange:function(e){return a(e.target.value)}})]}),Object(l.jsx)("div",{className:"writeFormGroup",children:Object(l.jsx)("textarea",{placeholder:"Tell your story...",type:"text",className:"writeInput writeText",onChange:function(e){return o(e.target.value)}})}),Object(l.jsx)("button",{className:"writeSubmit",type:"submit",children:"Publish"})]})]})}s(73);function D(){var e=Object(c.useState)(null),t=Object(p.a)(e,2),s=(t[0],t[1],Object(c.useState)("")),a=Object(p.a)(s,2),n=a[0],r=a[1],i=Object(c.useState)(""),o=Object(p.a)(i,2),j=o[0],m=o[1],d=Object(c.useState)(""),O=Object(p.a)(d,2),x=O[0],f=O[1],v=Object(c.useState)(!1),N=Object(p.a)(v,2),w=N[0],y=N[1],k=Object(c.useContext)(S),I=k.user,T=k.dispatch,C=function(){var e=Object(b.a)(u.a.mark((function e(t){var s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),T({type:"UPDATE_START"}),s={userId:I._id,username:n,email:j,password:x},e.prev=3,e.next=6,h.a.put("http://ec2-52-87-152-144.compute-1.amazonaws.com:5000/api/users/"+I._id,s);case 6:c=e.sent,y(!0),T({type:"UPDATE_SUCCESS",payload:c.data}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),T({type:"UPDATE_FAILURE"});case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"settings",children:[Object(l.jsxs)("div",{className:"settingsWrapper",children:[Object(l.jsxs)("div",{className:"settingsTitle",children:[Object(l.jsx)("span",{className:"settingsTitleUpdate",children:"Update Your Account"}),Object(l.jsx)("span",{className:"settingsTitleDelete",children:"Delete Account"})]}),Object(l.jsxs)("form",{className:"settingsForm",onSubmit:C,children:[Object(l.jsx)("label",{children:"Username"}),Object(l.jsx)("input",{type:"text",placeholder:I.username,onChange:function(e){return r(e.target.value)}}),Object(l.jsx)("label",{children:"Email"}),Object(l.jsx)("input",{type:"email",placeholder:I.email,onChange:function(e){return m(e.target.value)}}),Object(l.jsx)("label",{children:"Password"}),Object(l.jsx)("input",{type:"password",onChange:function(e){return f(e.target.value)}}),Object(l.jsx)("button",{className:"settingsSubmitButton",type:"submit",children:"Update"}),w&&Object(l.jsx)("span",{style:{color:"green",textAlign:"center",marginTop:"20px"},children:"Profile has been updated..."})]})]}),Object(l.jsx)(g,{})]})}s(74);function R(){var e=Object(c.useRef)(),t=Object(c.useRef)(),s=Object(c.useContext)(S),a=s.dispatch,n=s.isFetching,r=function(){var s=Object(b.a)(u.a.mark((function s(c){var n;return u.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return c.preventDefault(),a({type:"LOGIN_START"}),s.prev=2,s.next=5,h.a.post("http://ec2-52-87-152-144.compute-1.amazonaws.com:5000/api/auth/login",{username:e.current.value,password:t.current.value});case 5:n=s.sent,a({type:"LOGIN_SUCCESS",payload:n.data}),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(2),a({type:"LOGIN_FAILURE"});case 12:case"end":return s.stop()}}),s,null,[[2,9]])})));return function(e){return s.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"login",children:Object(l.jsxs)("div",{className:"logincont",children:[Object(l.jsx)("span",{className:"loginTitle",children:"Login"}),Object(l.jsxs)("form",{className:"loginForm",onSubmit:r,children:[Object(l.jsx)("label",{children:"Username"}),Object(l.jsx)("input",{type:"text",className:"loginInput",placeholder:"Enter your username...",ref:e}),Object(l.jsx)("label",{children:"Password"}),Object(l.jsx)("input",{type:"password",className:"loginInput",placeholder:"Enter your password...",ref:t}),Object(l.jsx)("button",{className:"loginButton",type:"submit",disabled:n,children:"Login"})]}),Object(l.jsx)("button",{className:"registerlink",children:Object(l.jsx)(m.b,{className:"link",to:"/register",children:"Dont have an account, register now!"})})]})})}s(75);function _(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),r=Object(p.a)(n,2),i=r[0],o=r[1],j=Object(c.useState)(""),d=Object(p.a)(j,2),O=d[0],x=d[1],f=Object(c.useState)(!1),g=Object(p.a)(f,2),v=g[0],N=g[1],w=function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),N(!1),e.prev=2,e.next=5,h.a.post("http://ec2-52-87-152-144.compute-1.amazonaws.com:5000/api/auth/register",{username:s,email:i,password:O});case 5:e.sent.data&&window.location.replace("/login"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),N(!0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"register",children:Object(l.jsxs)("div",{className:"registercont",children:[Object(l.jsx)("span",{className:"registerTitle",children:"Register"}),Object(l.jsxs)("form",{className:"registerForm",onSubmit:w,children:[Object(l.jsx)("label",{children:"Username"}),Object(l.jsx)("input",{type:"text",className:"registerInput",placeholder:"Enter your username...",onChange:function(e){return a(e.target.value)}}),Object(l.jsx)("label",{children:"Email"}),Object(l.jsx)("input",{type:"text",className:"registerInput",placeholder:"Enter your email...",onChange:function(e){return o(e.target.value)}}),Object(l.jsx)("label",{children:"Password"}),Object(l.jsx)("input",{type:"password",className:"registerInput",placeholder:"Enter your password...",onChange:function(e){return x(e.target.value)}}),Object(l.jsx)("button",{className:"registerButton",type:"submit",children:"Register"})]}),Object(l.jsx)("button",{className:"loginlink",children:Object(l.jsx)(m.b,{className:"link",to:"/login",children:"Already have an account? Log in"})}),v&&Object(l.jsx)("span",{style:{color:"red",marginTop:"10px"},children:"Something went wrong!"})]})})}var P=function(){var e=Object(c.useContext)(S).user;return Object(l.jsxs)(m.a,{children:[Object(l.jsx)(T,{}),Object(l.jsxs)(C.c,{children:[Object(l.jsx)(C.a,{exact:!0,path:"/",children:Object(l.jsx)(v,{})}),Object(l.jsx)(C.a,{path:"/register",children:e?Object(l.jsx)(v,{}):Object(l.jsx)(_,{})}),Object(l.jsx)(C.a,{path:"/login",children:e?Object(l.jsx)(v,{}):Object(l.jsx)(R,{})}),Object(l.jsx)(C.a,{path:"/write",children:e?Object(l.jsx)(F,{}):Object(l.jsx)(_,{})}),Object(l.jsx)(C.a,{path:"/settings",children:e?Object(l.jsx)(D,{}):Object(l.jsx)(_,{})}),Object(l.jsx)(C.a,{path:"/post/:postId",children:Object(l.jsx)(A,{})})]})]})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(k,{children:Object(l.jsx)(P,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.65860372.chunk.js.map