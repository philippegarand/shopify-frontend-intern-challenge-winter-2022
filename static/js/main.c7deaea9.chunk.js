(this.webpackJsonpspacestagram=this.webpackJsonpspacestagram||[]).push([[0],{12:function(e,t,n){e.exports={card:"post_card__2irEZ",cardContent:"post_cardContent__35_tg",contentTop:"post_contentTop__2FCHV",showMore:"post_showMore__3GYU5",skeletonTitle:"post_skeletonTitle__3xSok"}},30:function(e,t,n){e.exports={buttons:"mediaSharing_buttons__GMcW7",facebook:"mediaSharing_facebook__G5Gn-",twitter:"mediaSharing_twitter__1sTJ5",reddit:"mediaSharing_reddit__3_Rd_"}},50:function(e,t,n){e.exports={content:"errorWhileFetching_content__c4TrC"}},64:function(e,t,n){},70:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),i=n(18),o=n.n(i),s=(n(64),n(95)),l=n(92),u=n(94),d=n(96),j=n(97),b=n(98),h=["title","titleId"];function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function O(e,t){var n=e.title,c=e.titleId,i=x(e,h);return r.createElement("svg",p({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 121.12 122.88",style:{enableBackground:"new 0 0 121.12 122.88"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},i),n?r.createElement("title",{id:c},n):null,a||(a=r.createElement("g",null,r.createElement("path",{d:"M9.61,114.81c3.99,4.34,12.59,2.3,23.22-3.61c-9.67-6.54-17.2-15.98-21.36-27.08C5.18,96.93,3.53,108.18,9.61,114.81 L9.61,114.81z M110.6,31.4c4.88-9.62,6.38-17.43,2.66-21.51c-5.71-6.25-16.44-4.79-28.96,1.33C94.95,15.2,104.09,22.3,110.6,31.4 L110.6,31.4z M64.51,7.67c3.96,0,7.83,0.41,11.56,1.18c17.19-9.68,32.87-12.5,41.58-2.97c5.6,6.13,3.67,17.02-2.89,29.78l0-0.01 l-0.03,0.07c-0.21,0.41-0.42,0.81-0.64,1.23l0.05,0.1c-14.06,31.09-41.39,57.46-73.32,76.33l-2.11,1.32l-0.05-0.03 c-14.46,8.49-26.94,11.28-33.45,4.19c-8.83-9.62-5.73-25.63,3.9-42.84C8.32,72.22,7.9,68.3,7.9,64.28 C7.9,33.01,33.24,7.67,64.51,7.67L64.51,7.67z M118.62,47.6c1.62,5.27,2.5,10.87,2.5,16.68c0,31.26-25.34,56.61-56.61,56.61 c-5.86,0-11.51-0.89-16.82-2.54c31.51-18.76,55.43-42.16,70.92-70.72l0,0L118.62,47.6L118.62,47.6z"}))))}var m=r.forwardRef(O),f=(n.p,n(2)),v=Object(l.a)({spaceBanner:{backgroundImage:'url("https://www.nasa.gov/sites/default/files/thumbnails/image/stsci-h-p1917b-q-5198x4801.jpg")',backgroundColor:"black"},icon:{marginRight:"8px"}});function g(){var e=v();return Object(f.jsx)(u.a,{position:"sticky",classes:{root:e.spaceBanner},children:Object(f.jsx)(s.a,{maxWidth:"md",children:Object(f.jsxs)(d.a,{disableGutters:!0,children:[Object(f.jsx)(j.a,{classes:{root:e.icon},children:Object(f.jsx)(m,{})}),Object(f.jsx)(b.a,{component:"h1",variant:"h6",children:"Spacestagram"})]})})})}n(70);var w=n(24),y=n.n(w),_=n(34),k=n(14),C="https://api.nasa.gov/planetary/apod?api_key=".concat("CFaf3GKMjpgUbEWU4X2NgaBBJOBJrnbOzwi1nm1i","&thumbs=True"),S=function(e){return void 0!==e.code},N=function(){var e=Object(_.a)(y.a.mark((function e(t){var n,a,r,c,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new URL(C)).searchParams.append("count",t.count.toString()),e.next=4,fetch(n.toString());case 4:if((a=e.sent).ok){e.next=7;break}throw a;case 7:return e.next=9,a.json();case 9:if(r=e.sent,!S(r=r)){e.next=16;break}throw i="code=".concat((c=r).code," msg=").concat(c.msg," service_version=").concat(c.service_version),console.error("API response succeeded, but there was an error: ".concat(i)),new Error(i);case 16:return e.abrupt("return",r.map((function(e){var t;return{link:null!==(t=e.thumbnail_url)&&void 0!==t?t:e.url,author:e.copyright,title:e.title,description:e.explanation,date:e.date}})));case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=n(102),M=n(103),E=n(104),L=n(36),B=n(49),I=n.n(B),U=n(48),z=n.n(U),F=n(43),P=n.n(F),G=n(99),A=n(100),J=n(101),R=n(45),W=n.n(R),D=n(47),H=n.n(D),q=n(46),X=n.n(q),Y=n(30),K=n.n(Y);function V(e){var t=e.imageUrl,n=e.title;return Object(f.jsxs)("div",{className:K.a.buttons,children:[Object(f.jsx)(G.a,{url:t,quote:n,hashtag:"NASA",children:Object(f.jsx)(W.a,{className:K.a.facebook})}),Object(f.jsx)(A.a,{url:t,title:n,hashtags:["NASA"],children:Object(f.jsx)(X.a,{className:K.a.twitter,color:"inherit"})}),Object(f.jsx)(J.a,{url:t,title:n,children:Object(f.jsx)(H.a,{className:K.a.reddit})})]})}var Z=n(12),Q=n.n(Z);function $(e){var t=e.imageUrl,n=e.title,a=e.date,c=e.description,i=Object(r.useState)(!1),o=Object(k.a)(i,2),s=o[0],l=o[1],u=function(){l(!s)};return Object(f.jsxs)(T.a,{variant:"outlined",className:Q.a.card,component:"article",children:[Object(f.jsx)(M.a,{component:"img",src:t,title:n,onDoubleClick:u}),Object(f.jsxs)("div",{className:Q.a.cardContent,children:[Object(f.jsxs)("div",{className:Q.a.contentTop,children:[Object(f.jsx)(E.a,{color:"primary",onClick:u,edge:"start",size:"small","aria-label":"like post",children:s?Object(f.jsx)(z.a,{style:{color:L.a[500]}}):Object(f.jsx)(I.a,{color:"disabled"})}),Object(f.jsx)(V,{imageUrl:t,title:n}),Object(f.jsx)(b.a,{variant:"body2",color:"textSecondary",children:new Date(a).toLocaleDateString()})]}),Object(f.jsx)("header",{children:Object(f.jsx)(b.a,{variant:"subtitle1",component:"h2",children:n})}),Object(f.jsx)(P.a,{lines:3,more:"More",less:"Less",className:"MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary",anchorClass:Q.a.showMore,children:c})]})]})}var ee=n(105);function te(){return Object(f.jsxs)(T.a,{variant:"outlined",className:Q.a.card,component:"article",children:[Object(f.jsx)(ee.a,{variant:"rect",height:200}),Object(f.jsxs)("div",{className:Q.a.cardContent,children:[Object(f.jsx)("header",{className:Q.a.skeletonTitle,children:Object(f.jsx)(b.a,{variant:"subtitle1",children:Object(f.jsx)(ee.a,{variant:"text",width:"60%"})})}),Object(f.jsx)(ee.a,{variant:"text"}),Object(f.jsx)(ee.a,{variant:"text"}),Object(f.jsx)(ee.a,{variant:"text",width:"30%"})]})]})}var ne=n(51),ae=n.n(ne),re=n(52),ce=n.n(re),ie=n(106),oe=n(50),se=n.n(oe);function le(e){var t=e.onClick;return Object(f.jsxs)("div",{className:se.a.content,children:[Object(f.jsx)(ae.a,{color:"inherit"}),Object(f.jsx)(b.a,{variant:"body1",color:"textSecondary",align:"center",children:"Could not fetch more posts..."}),Object(f.jsx)(ie.a,{variant:"text",color:"inherit",startIcon:Object(f.jsx)(ce.a,{}),size:"small",onClick:t,children:"Retry"})]})}function ue(){var e=Object(r.useState)(),t=Object(k.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!0),i=Object(k.a)(c,2),o=i[0],s=i[1],l=Object(r.useState)(!1),u=Object(k.a)(l,2),d=u[0],j=u[1];Object(r.useEffect)((function(){var e=function(){window.innerHeight+window.scrollY>=document.body.offsetHeight&&!d&&s(!0)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[d]),Object(r.useEffect)((function(){function e(){return(e=Object(_.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N({count:10});case 3:t=e.sent,a((function(e){return e?e.concat(t):t})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),j(!0);case 10:s(!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}o&&function(){e.apply(this,arguments)}()}),[o]);return Object(f.jsxs)("div",{children:[null===n||void 0===n?void 0:n.map((function(e,t){return Object(f.jsx)($,{imageUrl:e.link,title:e.title,date:e.date,description:e.description},t)})),o&&Object(f.jsx)(te,{}),d&&Object(f.jsx)(le,{onClick:function(){s(!0),j(!1)}})]})}var de=function(){return Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)(g,{}),Object(f.jsx)(s.a,{className:"mainContainer",maxWidth:"md",component:"main",children:Object(f.jsx)(ue,{})})]})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,108)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(de,{})}),document.getElementById("root")),je()}},[[74,1,2]]]);
//# sourceMappingURL=main.c7deaea9.chunk.js.map