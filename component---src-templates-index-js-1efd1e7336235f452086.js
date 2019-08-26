(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{193:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=(n(49),n(194)),l=n(195),o=(n(23),{color:{background:"#fff",text:"#333"},fontFamily:{ibmPlexSansCondensed:"ibm plex sans condensed"},fontSize:["1rem","1.2rem","1.4rem","1.6rem","1.8rem","2rem","2.2rem","2.4rem","2.6rem","2.8rem","3rem","2.2rem","2.4rem","2.6rem","2.8rem","3rem","3.2rem","3.4rem","3.6rem","3.8rem","4rem"],spacing:[".4rem",".8rem","1.2rem","1.6rem","2rem","2.4rem","2.8rem","3.2rem","3.6rem","4rem"],letterSpacing:[".02rem",".04rem",".06rem",".08rem",".1rem",".12rem",".14rem",".16rem",".18rem",".2rem"]}),m=Object(a.createContext)({theme:o}),c=m.Provider,A=m.Consumer,d=function(e){var t=e.children;return i.a.createElement(c,{value:{theme:o}},t)},s=n(206),p=n(207),f=n.n(p),u=function(e){var t=e.style,n=s.data;return i.a.createElement(f.a,{fluid:n.placeholderImage.childImageSharp.fluid,alt:"profile-image",style:Object.assign({maxWidth:"100%"},t)})};u.defaultProps={style:{}};var g=u,E=n(198),h=n.n(E),w=r.default.dl.withConfig({displayName:"contact-lines__DefinitionList",componentId:"sc-1pstsdg-0"})(["display:grid;grid-template-columns:max-content auto;grid-auto-rows:max-content;align-items:center;column-gap:1.2rem;row-gap:.8rem;margin:0;"]),y=r.default.dt.withConfig({displayName:"contact-lines__DefinitionTitle",componentId:"sc-1pstsdg-1"})(["display:grid;justify-self:start;align-self:center;font-weight:bolder;"]),b=r.default.dd.withConfig({displayName:"contact-lines__DefinitionData",componentId:"sc-1pstsdg-2"})(["margin-inline-start:0;display:grid;justify-self:start;align-self:center;"]),v=function(e){var t=e.definitions;return i.a.createElement(w,null,t.map(function(e){var t=e.title,n=e.value;return i.a.createElement(a.Fragment,{key:h.a.generate()},i.a.createElement(y,null,t),i.a.createElement(b,null,n))}))},x=r.default.a.withConfig({displayName:"anchor__Anchor",componentId:"akdi5g-0"})(["color:#1E779F;"]),_=r.default.section.withConfig({displayName:"section__Section",componentId:"d8bop6-0"})(["display:grid;grid-template-columns:20rem auto;margin-bottom:3.6rem;@media print{margin-bottom:1.8rem;}"]),I=r.default.div.withConfig({displayName:"section__TitleWrapper",componentId:"d8bop6-1"})([""]),N=r.default.div.withConfig({displayName:"section__DetailsWrapper",componentId:"d8bop6-2"})([""]),C=r.default.h2.withConfig({displayName:"section__Title",componentId:"d8bop6-3"})(["display:flex;align-items:center;font-size:2.4rem;margin:0 0 2.4rem;font-weight:bold;"]),j=r.default.span.withConfig({displayName:"section__TitleText",componentId:"d8bop6-4"})(["margin-left:",";"],function(e){return e.icon?"1.2rem":0}),B=function(e){var t=e.title,n=e.icon,a=e.children,r=e.titleRender,l=t&&i.a.createElement(j,{icon:n},t),o=(n||t)&&i.a.createElement(C,null,n,l);return i.a.createElement(_,null,i.a.createElement(I,null,r||o),i.a.createElement(N,null,a))};B.defaultProps={titleRender:null,icon:null,title:null};var D,Q=B,k=n(229),z=Object(r.default)(function(e){return i.a.createElement(k.a,e)}).withConfig({displayName:"icon-print__PrintIcon",componentId:"vuhq5-0"})(["font-size:2.4rem;&:hover{cursor:pointer;}@media print{display:none;}"]),T=r.default.div.withConfig({displayName:"titles-block__TitleBlock",componentId:"sc-1qz0pt4-0"})(["display:flex;flex-flow:row wrap;justify-content:space-between;align-items:center;margin:0 0 .8rem;"]),Y=r.default.div.withConfig({displayName:"titles-block__TitlesWrapper",componentId:"sc-1qz0pt4-1"})(["display:grid;row-gap:.8rem;margin-bottom:.8rem;"]),R=r.default.h1.withConfig({displayName:"titles-block__TitleName",componentId:"sc-1qz0pt4-2"})(["font-size:3.6rem;font-weight:bold;margin:0;"]),S=r.default.h2.withConfig({displayName:"titles-block__TitlePosition",componentId:"sc-1qz0pt4-3"})(["font-size:2rem;font-weight:bold;color:gray;margin:0;"]),P=function(e){var t=e.name,n=e.position;return i.a.createElement(T,null,i.a.createElement(Y,null,i.a.createElement(R,null,t),i.a.createElement(S,null,n)),i.a.createElement(z,{onClick:function(){window.print()}}))},M=r.default.div.withConfig({displayName:"contacts__ContactsInner",componentId:"sc-1l9l2a7-0"})(["display:grid;grid-template-columns:repeat(2,max-content);justify-content:start;column-gap:3.6rem;"]),G=r.default.div.withConfig({displayName:"contacts__ImageWrapper",componentId:"sc-1l9l2a7-1"})(["height:16.5rem;width:16.5rem;border-radius:50%;overflow:hidden;"]),F=(D=function(e){var t=e.contacts,n=e.theme,a=t.name,r=t.position,o=t.location,m=t.phone,c=t.email,A=t.linkedin,d=t.github,s=t.twitter,p=t.nickname;return i.a.createElement(Q,{titleRender:i.a.createElement(G,{theme:n},i.a.createElement(g,null))},i.a.createElement(i.a.Fragment,null,i.a.createElement(P,{position:r,name:a}),i.a.createElement(M,null,i.a.createElement(v,{definitions:[{title:i.a.createElement(l.h,null),value:o},{title:i.a.createElement(l.i,null),value:i.a.createElement(x,{href:"tel:"+m+"?call"},m)},{title:i.a.createElement(l.d,null),value:i.a.createElement(x,{href:"mailto:"+c},c)}]}),i.a.createElement(v,{definitions:[{title:i.a.createElement(l.g,null),value:i.a.createElement(x,{href:A,target:"_blank"},p)},{title:i.a.createElement(l.e,null),value:i.a.createElement(x,{href:d,target:"_blank"},p)},{title:i.a.createElement(l.j,null),value:i.a.createElement(x,{href:s,target:"_blank"},p)}]}))))},function(e){return i.a.createElement(A,null,function(t){return i.a.createElement(D,Object.assign({},t,e))})}),O=r.default.div.withConfig({displayName:"container",componentId:"sc-1rxdrei-0"})(["width:100%;margin:0 auto;padding:0 1.6rem 2.4rem;@media (min-width:576px){max-width:54rem;}@media (min-width:768px){max-width:72rem;}@media (min-width:992px){max-width:96rem;}"]),W=r.default.div.withConfig({displayName:"ditailed-line__LineWrapper",componentId:"sc-18iayov-0"})(["margin-bottom:2.4rem;display:grid;row-gap:.4rem;"]),L=r.default.div.withConfig({displayName:"ditailed-line__Organization",componentId:"sc-18iayov-1"})(["font-weight:bold;font-size:1.8rem;"]),q=r.default.span.withConfig({displayName:"ditailed-line__Period",componentId:"sc-18iayov-2"})(["opacity:.5;"]),H=r.default.p.withConfig({displayName:"ditailed-line__DescriptionText",componentId:"sc-18iayov-3"})(["text-align:justify;margin:0;"]),J=function(e){var t=e.organization,n=e.organizationRef,a=e.period,r=e.position,l=e.description;return i.a.createElement(W,null,i.a.createElement(q,null,a),i.a.createElement(L,null,i.a.createElement(x,{href:n,target:"_blank"},t)," — ",i.a.createElement("span",null,r)),i.a.createElement(H,null,l))},Z=function(e){var t=e.education;return i.a.createElement(Q,{title:"Education",icon:i.a.createElement(l.k,null)},t.map(function(e){var t=e.organization,n=e.organizationRef,a=e.period,r=e.position,l=e.description;return i.a.createElement(J,{key:t,organizationRef:n,organization:t,period:a,position:r,description:l})}))},K=function(e){var t=e.experience;return i.a.createElement(Q,{title:"Experience",icon:i.a.createElement(l.a,null)},t.map(function(e){var t=e.organization,n=e.organizationRef,a=e.period,r=e.position,l=e.description;return i.a.createElement(J,{key:t,organizationRef:n,organization:t,period:a,position:r,description:l})}))},U=function(e){var t=e.languages;return i.a.createElement(Q,{title:"Languages",icon:i.a.createElement(l.f,null)},i.a.createElement(v,{definitions:t}))};function V(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(['\n  :root {\n    font-size: 62.5%;\n  }\n\n  body {\n    overflow-x: hidden;\n    background: #fff;\n    color: #333;\n    font-family: "ibm plex sans condensed", sans-serif;\n    font-size: 1.6rem;\n  } \n  \n  * {\n    box-sizing: border-box;\n    letter-spacing: .08rem;\n    line-height: 2.4rem;\n  }\n  \n  a { \n    text-decoration: none;\n  }\n']);return V=function(){return e},e}var X=Object(r.createGlobalStyle)(V()),$=n(230),ee=r.default.main.withConfig({displayName:"layout__Main",componentId:"sc-17mfsmb-0"})(["margin-top:2.4rem;"]),te=function(e){var t=e.children;return i.a.createElement(O,null,i.a.createElement($.Normalize,null),i.a.createElement(X,null),i.a.createElement(ee,null,t))},ne=n(232),ae=n(233),ie=n.n(ae),re=function(e){var t=e.description,n=e.lang,a=e.meta,r=e.title,l=ne.data.site,o=t||l.siteMetadata.description;return i.a.createElement(ie.a,{htmlAttributes:{lang:n},title:r,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:r},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:o}].concat(a)})};re.defaultProps={lang:"en",meta:[],description:""};var le=re,oe=r.default.ul.withConfig({displayName:"skill-lines__DefinitionList",componentId:"sc-1lh0g9a-0"})(["display:grid;list-style:none;grid-template-columns:repeat(4,max-content);grid-auto-rows:max-content;column-gap:4rem;row-gap:1.6rem;margin:0;padding:0;@media print{grid-template-columns:repeat(3,max-content);}"]),me=r.default.li.withConfig({displayName:"skill-lines__DefinitionItem",componentId:"sc-1lh0g9a-1"})([""]),ce=r.default.h3.withConfig({displayName:"skill-lines__DefinitionTitle",componentId:"sc-1lh0g9a-2"})(["font-weight:bolder;margin:0 0 1.2rem;"]),Ae=r.default.ul.withConfig({displayName:"skill-lines__DefinitionDataList",componentId:"sc-1lh0g9a-3"})(["padding:0 0 0 1.6rem;list-style:initial;"]),de=r.default.li.withConfig({displayName:"skill-lines__DefinitionDataItem",componentId:"sc-1lh0g9a-4"})([""]),se=function(e){var t=e.definitions;return i.a.createElement(oe,null,t.map(function(e){var t=e.title,n=e.value;return i.a.createElement(me,{key:h.a.generate()},i.a.createElement(ce,null,t),i.a.createElement(Ae,null,n.map(function(e){return i.a.createElement(de,{key:e},e)})))}))},pe=function(e){var t=e.skills;return i.a.createElement(Q,{title:"Skills",icon:i.a.createElement(l.b,null)},i.a.createElement(se,{definitions:t}))},fe=r.default.p.withConfig({displayName:"summary__SummaryText",componentId:"sc-1rxyx8c-0"})(["text-align:justify;margin:0;"]),ue=function(e){var t=e.summary;return i.a.createElement(Q,{title:"Summary",icon:i.a.createElement(l.c,null)},i.a.createElement(fe,null,t))};t.default=function(e){var t=e.pageContext.index,n=t.contacts,a=t.summary,r=t.skills,l=t.experience,o=t.education,m=t.languages;return i.a.createElement(d,null,i.a.createElement(te,null,i.a.createElement(le,{title:"CV"}),i.a.createElement(F,{contacts:n}),i.a.createElement(ue,{summary:a}),i.a.createElement(pe,{skills:r}),i.a.createElement(K,{experience:l}),i.a.createElement(Z,{education:o}),i.a.createElement(U,{languages:m})))}},206:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMEBQb/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAG+SlJrK6pT5mZobQL/xAAaEAADAQEBAQAAAAAAAAAAAAABAgMSABET/9oACAEBAAEFAvmwSe9YPbInNvODsooSact3A//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABYRAAMAAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwEj/8QAHRAAAgICAwEAAAAAAAAAAAAAAAECERAhEiJBcf/aAAgBAQAGPwKTo6ytPweiPN0zcvmHeKP/xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhUTFBcaH/2gAIAQEAAT8hKBZ+QNhA9VB3Q6gWvOoSMTxaVC+74iqrzLZn4a2T/9oADAMBAAIAAwAAABD4GAD/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAEDAQE/EFIyb//EABYRAQEBAAAAAAAAAAAAAAAAAAERIP/aAAgBAgEBPxAJh//EAB0QAQADAAIDAQAAAAAAAAAAAAEAESFBUTFhccH/2gAIAQEAAT8QQACG3hfB8iHPYKSzx+wgtdDrGiBDFamt2si8DOgFfUeGlpYdW4wxXN6MhYatdwqC4G5Cf//Z",aspectRatio:1,src:"/cv/static/a89800a2bcbe5af0f867db50951e2f68/c83a6/profile-photo.jpg",srcSet:"/cv/static/a89800a2bcbe5af0f867db50951e2f68/24f62/profile-photo.jpg 75w,\n/cv/static/a89800a2bcbe5af0f867db50951e2f68/cb3d3/profile-photo.jpg 150w,\n/cv/static/a89800a2bcbe5af0f867db50951e2f68/c83a6/profile-photo.jpg 300w,\n/cv/static/a89800a2bcbe5af0f867db50951e2f68/f709c/profile-photo.jpg 450w,\n/cv/static/a89800a2bcbe5af0f867db50951e2f68/5d47c/profile-photo.jpg 460w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},232:function(e){e.exports={data:{site:{siteMetadata:{title:"Serhii Minin",description:"I am a front-end developer with 2 years of experience",author:"@serhiiminin"}}}}}}]);
//# sourceMappingURL=component---src-templates-index-js-1efd1e7336235f452086.js.map