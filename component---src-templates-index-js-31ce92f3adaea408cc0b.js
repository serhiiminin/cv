(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{192:function(e,t,A){"use strict";A.r(t);var a=A(0),n=A.n(a),i=(A(50),A(194)),l=(A(23),A(197)),r=A(198),c=A.n(r),o=function(e){var t=e.style,A=l.data;return n.a.createElement(c.a,{fluid:A.placeholderImage.childImageSharp.fluid,alt:"profile-image",style:Object.assign({maxWidth:"100%"},t)})};o.defaultProps={style:{}};var m=o,d=i.a.section.withConfig({displayName:"contacts__Section",componentId:"sc-1l9l2a7-0"})(["padding:2rem 0;display:flex;flex-flow:row wrap;justify-content:space-between;"]),p=i.a.div.withConfig({displayName:"contacts__ImageWrapper",componentId:"sc-1l9l2a7-1"})(["height:250px;width:250px;border-radius:8px;overflow:hidden;"]),s=function(e){var t=e.contacts,A=t.name,a=t.position,i=t.location,l=t.phone,r=t.email,c=t.linkedin,o=t.github,s=t.twitter,u=t.telegram;return n.a.createElement(d,null,n.a.createElement(p,null,n.a.createElement(m,null)),n.a.createElement("div",null,n.a.createElement("h1",null,A),n.a.createElement("h2",null,a),n.a.createElement("div",null,"Location: ",i),n.a.createElement("div",null,"Phone: ",l),n.a.createElement("div",null,"Email: ",r),n.a.createElement("div",null,"Linkedin: ",c),n.a.createElement("div",null,"Github: ",o),n.a.createElement("div",null,"Twitter: ",s),n.a.createElement("div",null,"Telegram: ",u)))},u=i.a.div.withConfig({displayName:"container",componentId:"sc-1rxdrei-0"})(["margin:0 auto;max-width:960px;padding:0 1.0875rem 1.45rem;"]),E=A(193),f=i.a.h2.withConfig({displayName:"section__Title",componentId:"d8bop6-0"})(["display:flex;align-items:center;margin:0 0 .7rem;"]),g=i.a.div.withConfig({displayName:"section__Data",componentId:"d8bop6-1"})(["padding:.7rem 0;margin-bottom:1rem;"]),h=function(e){var t=e.title,A=e.icon,a=e.children;return n.a.createElement("section",null,n.a.createElement(f,null,A,n.a.createElement("span",null,t)),n.a.createElement(g,null,a))},w=function(){return n.a.createElement(h,{title:"Education",icon:n.a.createElement(E.d,null)},"Data about education")},b=function(){return n.a.createElement(h,{title:"Experience",icon:n.a.createElement(E.e,null)},"Data about experience")},B=function(){return n.a.createElement(h,{title:"Languages",icon:n.a.createElement(E.c,null)},"Data about languages")},Q=(A(210),function(e){var t=e.children;return n.a.createElement(u,null,n.a.createElement("main",null,t))}),x=A(211),j=A(212),D=A.n(j),v=function(e){var t=e.description,A=e.lang,a=e.meta,i=e.title,l=x.data.site,r=t||l.siteMetadata.description;return n.a.createElement(D.a,{htmlAttributes:{lang:A},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:i},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:r}].concat(a)})};v.defaultProps={lang:"en",meta:[],description:""};var N=v,I=function(){return n.a.createElement(h,{title:"Skills",icon:n.a.createElement(E.b,null)},"Data about skills")},Y=function(e){var t=e.summary;return n.a.createElement(h,{title:"Summary",icon:n.a.createElement(E.a,null)},t)};t.default=function(e){var t=e.pageContext.index,A=t.contacts,a=t.summary,i=t.skills,l=t.experience,r=t.education,c=t.languages;return n.a.createElement(Q,null,n.a.createElement(N,{title:"CV"}),n.a.createElement(s,{contacts:A}),n.a.createElement(Y,{summary:a}),n.a.createElement(I,{skills:i}),n.a.createElement(b,{experience:l}),n.a.createElement(w,{education:r}),n.a.createElement(B,{languages:c}))}},197:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMEBQb/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAG+SlJrK6pT5mZobQL/xAAaEAADAQEBAQAAAAAAAAAAAAABAgMSABET/9oACAEBAAEFAvmwSe9YPbInNvODsooSact3A//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABYRAAMAAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwEj/8QAHRAAAgICAwEAAAAAAAAAAAAAAAECERAhEiJBcf/aAAgBAQAGPwKTo6ytPweiPN0zcvmHeKP/xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhUTFBcaH/2gAIAQEAAT8hKBZ+QNhA9VB3Q6gWvOoSMTxaVC+74iqrzLZn4a2T/9oADAMBAAIAAwAAABD4GAD/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAEDAQE/EFIyb//EABYRAQEBAAAAAAAAAAAAAAAAAAERIP/aAAgBAgEBPxAJh//EAB0QAQADAAIDAQAAAAAAAAAAAAEAESFBUTFhccH/2gAIAQEAAT8QQACG3hfB8iHPYKSzx+wgtdDrGiBDFamt2si8DOgFfUeGlpYdW4wxXN6MhYatdwqC4G5Cf//Z",aspectRatio:1,src:"/static/a89800a2bcbe5af0f867db50951e2f68/c83a6/profile-photo.jpg",srcSet:"/static/a89800a2bcbe5af0f867db50951e2f68/24f62/profile-photo.jpg 75w,\n/static/a89800a2bcbe5af0f867db50951e2f68/cb3d3/profile-photo.jpg 150w,\n/static/a89800a2bcbe5af0f867db50951e2f68/c83a6/profile-photo.jpg 300w,\n/static/a89800a2bcbe5af0f867db50951e2f68/f709c/profile-photo.jpg 450w,\n/static/a89800a2bcbe5af0f867db50951e2f68/5d47c/profile-photo.jpg 460w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},211:function(e){e.exports={data:{site:{siteMetadata:{title:"Serhii Minin",description:"I am a front-end developer with 2 years of experience",author:"@serhiiminin"}}}}}}]);
//# sourceMappingURL=component---src-templates-index-js-31ce92f3adaea408cc0b.js.map