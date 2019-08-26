(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{194:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=(n(50),n(195)),r=n(196),o=n(213),A=Object(l.default)(function(e){return i.a.createElement(o.a,e)}).withConfig({displayName:"icon-print__PrintIcon",componentId:"vuhq5-0"})(["font-size:2.6rem;&:hover{cursor:pointer;}@media print{display:none;}"]),c=(n(23),n(214)),m=n(215),d=n.n(m),s=function(e){var t=e.style,n=c.data;return i.a.createElement(d.a,{fluid:n.placeholderImage.childImageSharp.fluid,alt:"profile-image",style:Object.assign({maxWidth:"100%"},t)})};s.defaultProps={style:{}};var p=s,f=n(218),u=n.n(f),g=l.default.dl.withConfig({displayName:"data-lines__DefinitionList",componentId:"sc-109p8s3-0"})(["display:grid;grid-template-columns:max-content auto;grid-auto-rows:3rem;align-items:center;column-gap:1.2rem;margin:0;"]),E=l.default.dt.withConfig({displayName:"data-lines__DefinitionTitle",componentId:"sc-109p8s3-1"})(["display:grid;justify-self:start;align-self:center;font-weight:bolder;"]),h=l.default.dd.withConfig({displayName:"data-lines__DefinitionData",componentId:"sc-109p8s3-2"})(["margin-inline-start:0;display:grid;justify-self:start;align-self:center;"]),w=function(e){var t=e.definitions;return i.a.createElement(g,null,t.map(function(e){var t=e.title,n=e.value;return i.a.createElement(a.Fragment,{key:u.a.generate()},i.a.createElement(E,null,t),i.a.createElement(h,null,n))}))},y=l.default.h1.withConfig({displayName:"title__Title",componentId:"sc-10r5jer-0"})(["font-size:2.8rem;padding:1rem 0;margin:0;"]),b=l.default.a.withConfig({displayName:"anchor__Anchor",componentId:"akdi5g-0"})(["color:blue;"]),v=l.default.section.withConfig({displayName:"section__Section",componentId:"d8bop6-0"})(["margin-bottom:2.4rem;"]),x=l.default.h2.withConfig({displayName:"section__Title",componentId:"d8bop6-1"})(["display:flex;align-items:center;margin:0 0 1.2rem;"]),_=l.default.span.withConfig({displayName:"section__TitleText",componentId:"d8bop6-2"})(["margin-left:",";"],function(e){return e.icon?"1.2rem":0}),I=function(e){var t=e.title,n=e.icon,a=e.children,l=t&&i.a.createElement(_,{icon:n},t),r=(n||t)&&i.a.createElement(x,null,n,l);return i.a.createElement(v,null,r,a)};I.defaultProps={icon:null,title:null};var N=I,j=l.default.div.withConfig({displayName:"contacts__TitleBlock",componentId:"sc-1l9l2a7-0"})(["display:flex;flex-flow:row wrap;justify-content:space-between;align-items:center;margin-bottom:1rem;"]),B=l.default.div.withConfig({displayName:"contacts__ContactsInner",componentId:"sc-1l9l2a7-1"})(["display:grid;grid-template-columns:repeat(2,max-content);justify-content:start;column-gap:1.2rem;"]),C=l.default.div.withConfig({displayName:"contacts__ImageWrapper",componentId:"sc-1l9l2a7-2"})(["height:18rem;width:18rem;border-radius:1rem;overflow:hidden;"]),Q=function(e){var t=e.contacts,n=t.name,a=t.position,l=t.location,o=t.phone,c=t.email,m=t.linkedin,d=t.github,s=t.twitter,f=t.nickname;return i.a.createElement(N,null,i.a.createElement(j,null,i.a.createElement(y,null,n+" | "+a),i.a.createElement(A,{onClick:function(){window.print()}})),i.a.createElement(B,null,i.a.createElement(C,null,i.a.createElement(p,null)),i.a.createElement(w,{definitions:[{title:i.a.createElement(r.f,null),value:l},{title:i.a.createElement(r.g,null),value:i.a.createElement(b,{href:"tel:"+o+"?call"},o)},{title:i.a.createElement(r.b,null),value:i.a.createElement(b,{href:"mailto:"+c},c)},{title:i.a.createElement(r.e,null),value:i.a.createElement(b,{href:m,target:"_blank"},f)},{title:i.a.createElement(r.c,null),value:i.a.createElement(b,{href:d,target:"_blank"},f)},{title:i.a.createElement(r.j,null),value:i.a.createElement(b,{href:s,target:"_blank"},f)}]})))},D=l.default.div.withConfig({displayName:"container",componentId:"sc-1rxdrei-0"})(["margin:0 auto;max-width:67.2rem;padding:0 1.6rem 2.4rem;"]),Y=l.default.div.withConfig({displayName:"ditailed-line__LineWrapper",componentId:"sc-18iayov-0"})(["display:grid;grid-template-columns:20rem auto;column-gap:1.2rem;margin-bottom:1.2rem;"]),k=l.default.div.withConfig({displayName:"ditailed-line__Titles",componentId:"sc-18iayov-1"})(["display:grid;align-self:center;justify-self:center;text-align:center;row-gap:.4rem;"]),z=l.default.p.withConfig({displayName:"ditailed-line__DescriptionText",componentId:"sc-18iayov-2"})(["text-align:justify;margin:0;"]),T=l.default.span.withConfig({displayName:"ditailed-line__Organization",componentId:"sc-18iayov-3"})(["font-weight:bold;"]),R=l.default.span.withConfig({displayName:"ditailed-line__Position",componentId:"sc-18iayov-4"})(["font-weight:bold;"]),S=l.default.span.withConfig({displayName:"ditailed-line__Period",componentId:"sc-18iayov-5"})(["font-weight:bold;font-style:italic;"]),P=function(e){var t=e.organization,n=e.organizationRef,a=e.period,l=e.position,r=e.description;return i.a.createElement(Y,null,i.a.createElement(k,null,i.a.createElement(T,null,i.a.createElement(b,{href:n,target:"_blank"},t)),i.a.createElement(R,null,l),i.a.createElement(S,null,a)),i.a.createElement(z,null,r))},M=function(e){var t=e.education;return i.a.createElement(N,{title:"Education",icon:i.a.createElement(r.k,null)},t.map(function(e){var t=e.organization,n=e.organizationRef,a=e.period,l=e.position,r=e.description;return i.a.createElement(P,{key:t,organizationRef:n,organization:t,period:a,position:l,description:r})}))},G=function(e){var t=e.experience;return i.a.createElement(N,{title:"Experience",icon:i.a.createElement(r.a,null)},t.map(function(e){var t=e.organization,n=e.organizationRef,a=e.period,l=e.position,r=e.description;return i.a.createElement(P,{key:t,organizationRef:n,organization:t,period:a,position:l,description:r})}))},O=function(e){var t=e.languages;return i.a.createElement(N,{title:"Languages",icon:i.a.createElement(r.d,null)},i.a.createElement(w,{definitions:t}))};function F(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(['\n  :root {\n    font-size: 62.5%;\n  }\n\n  body {\n    overflow-x: hidden;\n    background: #fff;\n    color: #333;\n    font-family: "merriweather", sans-serif;\n    font-size: 1.8rem;\n  } \n  \n  * {\n    box-sizing: border-box;\n    letter-spacing: .04rem;\n    line-height: 2.4rem;\n  }\n  \n  a { \n    text-decoration: none;\n  }\n']);return F=function(){return e},e}var H=Object(l.createGlobalStyle)(F()),J=n(231),L=l.default.main.withConfig({displayName:"layout__Main",componentId:"sc-17mfsmb-0"})(["margin-top:1.2rem;"]),W=function(e){var t=e.children;return i.a.createElement(D,null,i.a.createElement(J.Normalize,null),i.a.createElement(H,null),i.a.createElement(L,null,t))},Z=n(233),K=n(234),U=n.n(K),V=function(e){var t=e.description,n=e.lang,a=e.meta,l=e.title,r=Z.data.site,o=t||r.siteMetadata.description;return i.a.createElement(U.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+r.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:l},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:r.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:o}].concat(a)})};V.defaultProps={lang:"en",meta:[],description:""};var X=V,q=function(e){var t=e.skills;return i.a.createElement(N,{title:"Skills",icon:i.a.createElement(r.i,null)},i.a.createElement(w,{definitions:t}))},$=l.default.p.withConfig({displayName:"summary__SummaryText",componentId:"sc-1rxyx8c-0"})(["text-align:justify;font-size:1.8rem;"]),ee=function(e){var t=e.summary;return i.a.createElement(N,{title:"Summary",icon:i.a.createElement(r.h,null)},i.a.createElement($,null,t))};t.default=function(e){var t=e.pageContext.index,n=t.contacts,a=t.summary,l=t.skills,r=t.experience,o=t.education,A=t.languages;return i.a.createElement(W,null,i.a.createElement(X,{title:"CV"}),i.a.createElement(Q,{contacts:n}),i.a.createElement(ee,{summary:a}),i.a.createElement(q,{skills:l}),i.a.createElement(G,{experience:r}),i.a.createElement(M,{education:o}),i.a.createElement(O,{languages:A}))}},214:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMEBQb/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAG+SlJrK6pT5mZobQL/xAAaEAADAQEBAQAAAAAAAAAAAAABAgMSABET/9oACAEBAAEFAvmwSe9YPbInNvODsooSact3A//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABYRAAMAAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwEj/8QAHRAAAgICAwEAAAAAAAAAAAAAAAECERAhEiJBcf/aAAgBAQAGPwKTo6ytPweiPN0zcvmHeKP/xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhUTFBcaH/2gAIAQEAAT8hKBZ+QNhA9VB3Q6gWvOoSMTxaVC+74iqrzLZn4a2T/9oADAMBAAIAAwAAABD4GAD/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAEDAQE/EFIyb//EABYRAQEBAAAAAAAAAAAAAAAAAAERIP/aAAgBAgEBPxAJh//EAB0QAQADAAIDAQAAAAAAAAAAAAEAESFBUTFhccH/2gAIAQEAAT8QQACG3hfB8iHPYKSzx+wgtdDrGiBDFamt2si8DOgFfUeGlpYdW4wxXN6MhYatdwqC4G5Cf//Z",aspectRatio:1,src:"/cv/static/a89800a2bcbe5af0f867db50951e2f68/c83a6/profile-photo.jpg",srcSet:"/cv/static/a89800a2bcbe5af0f867db50951e2f68/24f62/profile-photo.jpg 75w,\n/cv/static/a89800a2bcbe5af0f867db50951e2f68/cb3d3/profile-photo.jpg 150w,\n/cv/static/a89800a2bcbe5af0f867db50951e2f68/c83a6/profile-photo.jpg 300w,\n/cv/static/a89800a2bcbe5af0f867db50951e2f68/f709c/profile-photo.jpg 450w,\n/cv/static/a89800a2bcbe5af0f867db50951e2f68/5d47c/profile-photo.jpg 460w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},233:function(e){e.exports={data:{site:{siteMetadata:{title:"Serhii Minin",description:"I am a front-end developer with 2 years of experience",author:"@serhiiminin"}}}}}}]);
//# sourceMappingURL=component---src-templates-index-js-86e88ce01ddf55e3d602.js.map