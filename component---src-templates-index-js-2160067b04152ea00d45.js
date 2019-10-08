(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{191:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(192),l=(n(204),r.default.a.withConfig({displayName:"anchor__Anchor",componentId:"akdi5g-0"})(["color:",";"],function(e){return e.theme.color.anchor})),o=n(198),c=n.n(o),m=r.default.dl.withConfig({displayName:"contact-lines__ContactsList",componentId:"sc-1pstsdg-0"})(["display:grid;grid-template-columns:max-content auto;grid-auto-rows:max-content;align-items:center;column-gap:",";row-gap:",";margin:0;"],function(e){return e.theme.spacing[2]},function(e){return e.theme.spacing[1]}),d=r.default.dt.withConfig({displayName:"contact-lines__Title",componentId:"sc-1pstsdg-1"})(["display:grid;justify-self:start;align-self:center;font-weight:bolder;"]),s=r.default.dd.withConfig({displayName:"contact-lines__Data",componentId:"sc-1pstsdg-2"})(["margin-inline-start:0;display:grid;justify-self:start;align-self:center;"]),u=function(e){var t=e.data;return i.a.createElement(m,null,t.map(function(e){var t=e.title,n=e.value;return i.a.createElement(a.Fragment,{key:c.a.generate()},i.a.createElement(d,null,t),i.a.createElement(s,null,n))}))},p=(n(49),n(203)),A=(n(23),n(224)),f=n(225),g=n.n(f),h=function(e){var t=e.style,n=A.data;return i.a.createElement(g.a,{fluid:n.placeholderImage.childImageSharp.fluid,alt:"profile-image",style:Object.assign({maxWidth:"100%"},t)})};h.defaultProps={style:{}};var E=h,w=r.default.section.withConfig({displayName:"section__Section",componentId:"d8bop6-0"})(["display:grid;grid-template-columns:100%;margin-bottom:",";@media (min-width:768px){grid-template-columns:19rem auto;}@media print{grid-template-columns:19rem auto;}"],function(e){return e.theme.spacing[9]}),y=r.default.div.withConfig({displayName:"section__TitleWrapper",componentId:"d8bop6-1"})([""]),v=r.default.div.withConfig({displayName:"section__DetailsWrapper",componentId:"d8bop6-2"})(["display:grid;row-gap:",";"],function(e){return e.theme.spacing[4]}),b=r.default.h2.withConfig({displayName:"section__Title",componentId:"d8bop6-3"})(["display:flex;align-items:center;font-size:",";margin:0 0 ",";font-weight:bold;"],function(e){return e.theme.fontSize[5]},function(e){return e.theme.spacing[5]}),x=function(e){var t=e.title,n=e.children,a=e.titleRender,r=t&&i.a.createElement(b,null,t);return i.a.createElement(w,null,i.a.createElement(y,null,a||r),i.a.createElement(v,null,n))};x.defaultProps={titleRender:null,title:null};var _=x,I=Object(r.default)(p.f).withConfig({displayName:"icon-print__IconPrint",componentId:"vuhq5-0"})(["font-size:",";&:hover{cursor:pointer;}@media print{display:none;}"],function(e){return e.theme.fontSize[5]}),C=r.default.div.withConfig({displayName:"titles-block__TitleBlock",componentId:"sc-1qz0pt4-0"})(["display:flex;flex-flow:row wrap;justify-content:space-between;align-items:center;margin:0 0 ",";"],function(e){return e.theme.spacing[3]}),N=r.default.div.withConfig({displayName:"titles-block__TitlesWrapper",componentId:"sc-1qz0pt4-1"})(["display:grid;row-gap:",";"],function(e){return e.theme.spacing[0]}),B=r.default.h1.withConfig({displayName:"titles-block__TitleName",componentId:"sc-1qz0pt4-2"})(["font-size:",";font-weight:bold;margin:0;"],function(e){return e.theme.fontSize[8]}),z=r.default.h2.withConfig({displayName:"titles-block__TitlePosition",componentId:"sc-1qz0pt4-3"})(["font-size:",";font-weight:600;color:",";margin:0;"],function(e){return e.theme.fontSize[4]},function(e){return e.theme.color.textLighter}),k=function(e){var t=e.name,n=e.position;return i.a.createElement(C,null,i.a.createElement(N,null,i.a.createElement(B,null,t),i.a.createElement(z,null,n)),i.a.createElement(I,{onClick:function(){window.print()},title:"Print CV"}))},j=r.default.div.withConfig({displayName:"contacts__ContactsInner",componentId:"sc-1l9l2a7-0"})(["display:grid;grid-template-columns:max-content;row-gap:",";justify-content:start;column-gap:",";@media print{grid-template-columns:repeat(2,max-content);}@media (min-width:768px){grid-template-columns:repeat(2,max-content);}"],function(e){return e.theme.spacing[1]},function(e){return e.theme.spacing[8]}),S=r.default.div.withConfig({displayName:"contacts__ImageWrapper",componentId:"sc-1l9l2a7-1"})(["height:16rem;width:16rem;border-radius:50%;overflow:hidden;display:none;visibility:hidden;@media print{display:block;visibility:visible;}@media (min-width:768px){display:block;visibility:visible;margin-bottom:",";}"],function(e){return e.theme.spacing[3]}),Q=function(e){var t=e.contacts,n=e.theme,a=t.name,r=t.position,o=t.location,c=t.phone,m=t.email,d=t.linkedin,s=t.github,A=t.twitter,f=t.nickname;return i.a.createElement(_,{titleRender:i.a.createElement(S,{theme:n},i.a.createElement(E,null))},i.a.createElement("div",null,i.a.createElement(k,{position:r,name:a}),i.a.createElement(j,null,i.a.createElement(u,{data:[{title:i.a.createElement(p.d,null),value:o},{title:i.a.createElement(p.e,null),value:i.a.createElement(l,{href:"tel:"+c+"?call"},c)},{title:i.a.createElement(p.a,null),value:i.a.createElement(l,{href:"mailto:"+m},m)}]}),i.a.createElement(u,{data:[{title:i.a.createElement(p.c,null),value:i.a.createElement(l,{href:d,target:"_blank"},f)},{title:i.a.createElement(p.b,null),value:i.a.createElement(l,{href:s,target:"_blank"},f)},{title:i.a.createElement(p.g,null),value:i.a.createElement(l,{href:A,target:"_blank"},f)}]}))))},D=r.default.div.withConfig({displayName:"container",componentId:"sc-1rxdrei-0"})(["width:100%;margin:0 auto;padding:",";@media (min-width:576px){max-width:54rem;}@media (min-width:768px){max-width:72rem;}@media (min-width:992px){max-width:96rem;}"],function(e){var t=e.theme;return"0 "+t.spacing[3]+" "+t.spacing[5]}),P=r.default.div.withConfig({displayName:"ditailed-line__LineWrapper",componentId:"sc-18iayov-0"})(["display:grid;row-gap:",";"],function(e){return e.theme.spacing[0]}),Y=r.default.div.withConfig({displayName:"ditailed-line__Organization",componentId:"sc-18iayov-1"})(["font-weight:bold;font-size:",";"],function(e){return e.theme.fontSize[3]}),R=r.default.span.withConfig({displayName:"ditailed-line__Period",componentId:"sc-18iayov-2"})(["color:",";"],function(e){return e.theme.color.textLighter}),L=r.default.p.withConfig({displayName:"ditailed-line__DescriptionText",componentId:"sc-18iayov-3"})(["text-align:justify;margin:0;"]),T=function(e){var t=e.organization,n=e.organizationRef,a=e.period,r=e.position,o=e.description;return i.a.createElement(P,null,i.a.createElement(R,null,a),i.a.createElement(Y,null,i.a.createElement(l,{href:n,target:"_blank"},t)," — ",i.a.createElement("span",null,r)),i.a.createElement(L,null,o))},M=function(e){var t=e.education;return i.a.createElement(_,{title:"Education"},t.map(function(e){var t=e.organization,n=e.organizationRef,a=e.period,r=e.position,l=e.description;return i.a.createElement(T,{key:t,organizationRef:n,organization:t,period:a,position:r,description:l})}))},q=function(e){var t=e.experience;return i.a.createElement(_,{title:"Experience"},t.map(function(e){var t=e.organization,n=e.organizationRef,a=e.period,r=e.position,l=e.description;return i.a.createElement(T,{key:t,organizationRef:n,organization:t,period:a,position:r,description:l})}))};function O(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  :root {\n    font-size: 62.5%;\n  }\n\n  body {\n    overflow-x: hidden;\n    background: ",";\n    color: ",";\n    font-family: ",", sans-serif;\n    font-size: ",";\n  } \n  \n  * {\n    box-sizing: border-box;\n    letter-spacing: ",";\n    line-height: ",";\n    \n    @media print and (color) {\n      -webkit-print-color-adjust: exact;\n      color-adjust: exact;\n    }\n  }\n  \n  a { \n    text-decoration: none;\n  }\n"]);return O=function(){return e},e}var W=Object(r.createGlobalStyle)(O(),function(e){return e.theme.color.background},function(e){return e.theme.color.text},function(e){return e.theme.fontFamily.ibmPlexSansCondensed},function(e){return e.theme.fontSize[2]},function(e){return e.theme.letterSpacing[3]},function(e){return e.theme.lineHeight[1]}),F=r.default.div.withConfig({displayName:"language-lines__LanguagesList",componentId:"sc-1azy89q-0"})(["margin:0;"]),G=r.default.div.withConfig({displayName:"language-lines__LanguageItem",componentId:"sc-1azy89q-1"})(["margin-bottom:",";"],function(e){return e.theme.spacing[4]}),H=r.default.div.withConfig({displayName:"language-lines__LanguageTitles",componentId:"sc-1azy89q-2"})(["display:flex;flex-flow:row wrap;margin-bottom:",";"],function(e){return e.theme.spacing[1]}),V=r.default.h5.withConfig({displayName:"language-lines__Title",componentId:"sc-1azy89q-3"})(["margin:0;font-size:",";min-width:8rem;"],function(e){return e.theme.fontSize[2]}),X=r.default.span.withConfig({displayName:"language-lines__Value",componentId:"sc-1azy89q-4"})(["color:",""],function(e){return e.theme.color.textLighter}),U=r.default.div.withConfig({displayName:"language-lines__LevelOuter",componentId:"sc-1azy89q-5"})(["width:100%;background:",";@media (min-width:576px){width:67%;}"],function(e){return e.theme.color.textLighter}),Z=r.default.div.withConfig({displayName:"language-lines__LevelInner",componentId:"sc-1azy89q-6"})(["height:",";width:",";background:",";"],function(e){return e.theme.spacing[0]},function(e){return function(e){return{Beginner:"20%","Pre Intermediate":"40%",Intermediate:"60%","Upper Intermediate":"80%",Fluent:"100%",Native:"100%"}[e]||0}(e.level)},function(e){return e.theme.color.text}),J=function(e){var t=e.data;return i.a.createElement(F,null,t.map(function(e){var t=e.title,n=e.value;return i.a.createElement(G,{key:t},i.a.createElement(H,null,i.a.createElement(V,null,t),i.a.createElement(X,null,n)),i.a.createElement(U,null,i.a.createElement(Z,{level:n})))}))},K=function(e){var t=e.languages;return i.a.createElement(_,{title:"Languages"},i.a.createElement(J,{data:t}))},$=n(227),ee=r.default.main.withConfig({displayName:"layout__Main",componentId:"sc-17mfsmb-0"})(["margin-top:",";"],function(e){return e.theme.spacing[5]}),te=function(e){var t=e.children;return i.a.createElement(D,null,i.a.createElement($.Normalize,null),i.a.createElement(W,null),i.a.createElement(ee,null,t))},ne=n(229),ae=n(230),ie=n.n(ae),re=function(e){var t=e.description,n=e.lang,a=e.meta,r=e.title,l=ne.data.site,o=t||l.siteMetadata.description;return i.a.createElement(ie.a,{htmlAttributes:{lang:n},title:r,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:r},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:o}].concat(a)})};re.defaultProps={lang:"en",meta:[],description:""};var le=re,oe=r.default.ul.withConfig({displayName:"skill-lines__SkillsList",componentId:"sc-1lh0g9a-0"})(["display:grid;list-style:none;grid-template-columns:repeat(3,max-content);grid-auto-rows:max-content;column-gap:",";row-gap:",";margin:0;padding:0;@media print{grid-template-columns:repeat(3,max-content);justify-content:space-between;column-gap:",";row-gap:",";}@media (min-width:576px){grid-template-columns:repeat(3,max-content);}@media (min-width:992px){grid-template-columns:repeat(5,max-content);}"],function(e){return e.theme.spacing[9]},function(e){return e.theme.spacing[3]},function(e){return e.theme.spacing[2]},function(e){return e.theme.spacing[6]}),ce=r.default.li.withConfig({displayName:"skill-lines__DefinitionItem",componentId:"sc-1lh0g9a-1"})([""]),me=r.default.h3.withConfig({displayName:"skill-lines__DefinitionTitle",componentId:"sc-1lh0g9a-2"})(["font-weight:bolder;margin:0 0 ",";"],function(e){return e.theme.spacing[2]}),de=r.default.ul.withConfig({displayName:"skill-lines__DefinitionDataList",componentId:"sc-1lh0g9a-3"})(["padding:0 0 0 ",";list-style:initial;"],function(e){return e.theme.spacing[3]}),se=r.default.li.withConfig({displayName:"skill-lines__DefinitionDataItem",componentId:"sc-1lh0g9a-4"})([""]),ue=function(e){var t=e.data;return i.a.createElement(oe,null,t.map(function(e){var t=e.title,n=e.value;return i.a.createElement(ce,{key:c.a.generate()},i.a.createElement(me,null,t),i.a.createElement(de,null,n.map(function(e){return i.a.createElement(se,{key:e},e)})))}))},pe=function(e){var t=e.skills;return i.a.createElement(_,{title:"Skills"},i.a.createElement(ue,{data:t}))},Ae=r.default.p.withConfig({displayName:"summary__SummaryText",componentId:"sc-1rxyx8c-0"})(["text-align:justify;margin:0;"]),fe=function(e){var t=e.summary;return i.a.createElement(_,{title:"Summary"},i.a.createElement(Ae,null,t))},ge={color:{background:"#fff",text:"#333",textLighter:"#858690",anchor:"#1E779F"},fontFamily:{ibmPlexSansCondensed:"ibm plex sans condensed"},fontSize:["1.2rem","1.4rem","1.6rem","1.8rem","2rem","2.4rem","2.8rem","3rem","3.2rem","3.6rem","4rem"],spacing:[".4rem",".8rem","1.2rem","1.6rem","2rem","2.4rem","2.8rem","3.2rem","3.6rem","4rem"],letterSpacing:[".02rem",".04rem",".06rem",".08rem",".1rem",".12rem",".14rem",".16rem",".18rem",".2rem"],lineHeight:["2rem","2.4rem","2.6rem","2.8rem","3rem"],opacity:{text:.5}};t.default=function(e){var t=e.pageContext.index,n=t.contacts,a=t.summary,l=t.skills,o=t.experience,c=t.education,m=t.languages;return i.a.createElement(r.ThemeProvider,{theme:ge},i.a.createElement(te,null,i.a.createElement(le,{title:"CV"}),i.a.createElement(Q,{contacts:n}),i.a.createElement(fe,{summary:a}),i.a.createElement(pe,{skills:l}),i.a.createElement(q,{experience:o}),i.a.createElement(M,{education:c}),i.a.createElement(K,{languages:m})))}},224:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMEBQb/xAAXAQEBAQEAAAAAAAAAAAAAAAACAAED/9oADAMBAAIQAxAAAAG+SlCsrqsPmZnS2iP/xAAaEAADAQEBAQAAAAAAAAAAAAABAgMSABET/9oACAEBAAEFAvmwSe9YPbInNvODsooSact3A//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABYRAAMAAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwEj/8QAHhAAAgIBBQEAAAAAAAAAAAAAAAECERASISIxQXH/2gAIAQEABj8Ck6OMrT8OiOt0zeXzDvFH/8QAHBABAAICAwEAAAAAAAAAAAAAAQARIVExQXGh/9oACAEBAAE/ISgWfkDYQPVQddHUC151CRieLSoX3fEVVeZbM9DWyf/aAAwDAQACAAMAAAAQ+BgD/8QAFxEBAQEBAAAAAAAAAAAAAAAAEQABEP/aAAgBAwEBPxDA2ON//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREP/aAAgBAgEBPxBKaiP/xAAdEAEBAQEAAgMBAAAAAAAAAAABESEAQVExYXHB/9oACAEBAAE/EEAAhr4XwfnIc9giWfH94hqwdYw4IYqpm7M5eBnQCv1zwxUsOreYYrN9GcUNWe+LxcDZDv/Z",aspectRatio:1,src:"/cv/static/a89800a2bcbe5af0f867db50951e2f68/c83a6/profile-photo.jpg",srcSet:"/cv/static/a89800a2bcbe5af0f867db50951e2f68/24f62/profile-photo.jpg 75w,\n/cv/static/a89800a2bcbe5af0f867db50951e2f68/cb3d3/profile-photo.jpg 150w,\n/cv/static/a89800a2bcbe5af0f867db50951e2f68/c83a6/profile-photo.jpg 300w,\n/cv/static/a89800a2bcbe5af0f867db50951e2f68/f709c/profile-photo.jpg 450w,\n/cv/static/a89800a2bcbe5af0f867db50951e2f68/5d47c/profile-photo.jpg 460w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},229:function(e){e.exports={data:{site:{siteMetadata:{title:"Serhii Minin",description:"Passionate frontend developer who has been coding for the Web since 2016",author:"@serhiiminin"}}}}}}]);
//# sourceMappingURL=component---src-templates-index-js-2160067b04152ea00d45.js.map