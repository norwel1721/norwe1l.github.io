(function(t){function a(a){for(var i,r,l=a[0],o=a[1],c=a[2],f=0,u=[];f<l.length;f++)r=l[f],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&u.push(s[r][0]),s[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);d&&d(a);while(u.length)u.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],i=!0,l=1;l<e.length;l++){var o=e[l];0!==s[o]&&(i=!1)}i&&(n.splice(a--,1),t=r(r.s=e[0]))}return t}var i={},s={app:0},n=[];function r(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=i,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)r.d(e,i,function(a){return t[a]}.bind(null,i));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=a,l=l.slice();for(var c=0;c<l.length;c++)a(l[c]);var d=o;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0a26":function(t){t.exports=JSON.parse('{"main":{"name":{"first":"Norwel","last":"Nunez"},"logo":true,"titles":["Front-end Developer","Full-stack Developer","Back-end Developer"],"headings":{"about":"About","skills":"Experience And Skills","portfolio":"Works","contact":"Contact"}},"about":{"bio":"I\'m a dedicated web developer with expertise in Laravel and Vue.js, while also enthusiastic about exploring new technologies and frameworks. If you\'re seeking a skilled developer to enhance your team, I\'d be thrilled to connect!","tagline":"Elevating Ideas, Crafting Digital Experiences","facts":[{"name":"test","value":""}]},"skills":{"defaultCategory":"Experience","categories":[{"category":"Experience","explist":[{"position":"Office Staff (Full Stack Web Developer)","company":"HRD Singapore Pte Ltd","address":"Cavite Economic Zone II, General Trias Cavite","date":"February 2022 - Present"},{"position":"Data Encoder","company":"Prince Hypermart - Bago City","address":"Bago City, Negros Occidental","date":"January 2017 - March 2018"},{"position":"CCTV Tech. Support","company":"Corporate Vision, Inc.","address":"Manila, Metro Manila","date":"November 2020 - July 2021"}]},{"category":"Skills","subtitle":"","faClass":"fas fa-chalkboard-teacher","skillList":[{"name":"Laravel","level":"80"},{"name":"Vue.js","level":"80"},{"name":"Vuetify","level":"80"},{"name":"JavaScript","level":"80"},{"name":"PHP","level":"80"},{"name":"CSS","level":"70"},{"name":"Network And Troublehooting","level":"70"}]}]},"portfolio":{"defaultFilter":"my projects","projects":[{"image":"breeze.png","link":"https://github.com/norwel1721/LARAVEL_BREEZE_SPA","title":"LARAVEL BREEZE","description":"LARAVEL 8 SPA WITH LOGIN","filter":"my projects"},{"image":"spa.jpg","link":"https://github.com/norwel1721/LARAVEL8_SPA","title":"LARAVEL SPA","description":"lARAVEL 8 SPA","filter":"my projects"},{"image":"p.png","link":"https://github.com/norwel1721/LARAVEL8_SPA","title":"MY PERSONAL WEBSITE","description":"USING Veu.js, HTML, CSS","filter":"my projects"}]},"contact":{"text":"You can contact me using the details listed in my portfolio.","formTitle":"Send Me A Message","formEndPoint":"","city":"Naic, Cavite","email":"norwel1217@gmail.com","phone":"09666358542","resumeLink":"../../norwel.github.io/assets/resume/Norwel-Nunez.pdf","form":true,"social":[{"name":"twitter","url":"","faClass":"fab fa-twitter"},{"name":"facebook","url":"","faClass":"fab fa-facebook-f"},{"name":"instagram","url":"","faClass":"fab fa-instagram"}]},"footer":{"copyrightText":"All Rights Reserved."}}')},"56d7":function(t,a,e){"use strict";e.r(a);e("14d9");var i=e("2b0e"),s=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"app"}},[a("Header"),a("About"),a("Experience_And_Skills"),a("Portfolio"),a("Contact"),a("Footer")],1)},n=[],r=function(){var t=this,a=t._self._c;return a("header",{staticClass:"bg",attrs:{id:"home"}},[a("nav",{staticClass:"navbar navbar-expand-lg fixed-top dark-bg"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t.main.logo?a("div",[a("img",{attrs:{src:e("94dc"),alt:"logo",id:"Logo"}})]):t._e(),t.main.logo?t._e():a("div",[a("span",{attrs:{id:"FirstName"}},[t._v(t._s(t.main.name.first))]),t._v(" "),a("span",{attrs:{id:"LastName"}},[t._v(t._s(t.main.name.last))])])]),t._m(0),t._m(1)]),a("Banner"),a("Arrow")],1)},l=[function(){var t=this,a=t._self._c;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"},[a("i",{staticClass:"fas fa-bars",staticStyle:{color:"#fff","font-size":"28px"}})])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[a("ul",{staticClass:"navbar-nav ml-auto",attrs:{id:"navbar-nav"}},[a("li",{staticClass:"active-nav"},[a("a",{staticClass:"nav-item nav-link",attrs:{href:"#home"}},[t._v("Home")])]),a("li",[a("a",{staticClass:"nav-item nav-link",attrs:{href:"#about"}},[t._v("About")])]),a("li",[a("a",{staticClass:"nav-item nav-link",attrs:{href:"#skills"}},[t._v("Experience And Skills")])]),a("li",[a("a",{staticClass:"nav-item nav-link",attrs:{href:"#portfolio"}},[t._v("WORKS")])]),a("li",[a("a",{staticClass:"nav-item nav-link",attrs:{href:"#contact"}},[t._v("Contact")])])])])}],o=function(){var t=this;t._self._c;return t._m(0)},c=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"row arrow-container"},[a("a",{staticClass:"arrow-icon",attrs:{href:"#about",role:"button"}},[a("i",{staticClass:"fas fa-chevron-down fa-4x"})])])}],d=e("0a26"),f={name:"Arrow",props:{},data(){return{data:d}}},u=f,p=e("2877"),v=Object(p["a"])(u,o,c,!1,null,null,null),m=v.exports,g=function(){var t=this,a=t._self._c;return a("div",{staticClass:"banner"},[a("div",{staticClass:"banner-text"},[a("h1",{staticClass:"display-text"},[t._v(t._s(t.name.first)+" "+t._s(t.name.last))]),a("h2",{attrs:{id:"typewriter"}})])])},h=[],b=e("f79d"),C=e.n(b),x=d.main.titles,_={name:"Banner",data(){return{name:d.main.name,titles:d.main.titles}},mounted:function(){new C.a("#typewriter",{strings:x,autoStart:!0,loop:!0,deleteSpeed:5})}},A=_,k=Object(p["a"])(A,g,h,!1,null,null,null),w=k.exports,y={name:"Header",components:{Banner:w,Arrow:m},props:{},data(){return{main:d.main}}},E=y,S=Object(p["a"])(E,r,l,!1,null,null,null),R=S.exports,j=function(){var t=this,a=t._self._c;return a("section",{staticClass:"dark-section",attrs:{id:"about"}},[a("div",{staticClass:"container-fluid"},[a("h1",{staticClass:"section-header"},[t._v(t._s(t.heading))]),a("h2",{staticClass:"tagline",attrs:{"v-if":""!==t.about.tagline}},[t._v(t._s(t.about.tagline))]),a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-sm-12 col-md-4 flex-col",attrs:{"data-aos":"fade-right","data-aos-duration":"1000"}},[a("p",{attrs:{id:"about-content"}},[a("span",{attrs:{id:"greeting"}},[t._v("I'm "+t._s(t.name)+"! ")]),a("span",{attrs:{id:"bio"},domProps:{innerHTML:t._s(t.about.bio)}})])]),t._m(1)])]),a("Arrow")],1)},P=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-sm-12 col-md-4 flex-col",attrs:{"data-aos":"fade-right","data-aos-duration":"1000"}},[a("img",{staticClass:"profile-pic",attrs:{src:e("c35a"),alt:"profile picture"}})])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-sm-12 col-md-4 flex-col",attrs:{"data-aos":"fade-right","data-aos-duration":"1000"}},[a("p",{attrs:{id:"about-content"}},[a("span",{staticClass:"tagline",attrs:{id:"bio"}},[a("h1",{staticStyle:{"font-weight":"bold",color:"blue"}},[t._v("EDUCATION")])]),a("span",{staticStyle:{"font-size":"20px","font-weight":"bold"},attrs:{id:"bio"}},[t._v("TERTIARY:")]),a("br"),a("span",{attrs:{id:"bio"}},[t._v("Central Philippine State University")]),a("br"),a("br"),a("span",{staticStyle:{"font-size":"20px","font-weight":"bold"},attrs:{id:"bio"}},[t._v("SECONDARY:")]),a("br"),a("span",{attrs:{id:"bio"}},[t._v("Hinigaran National High School")]),a("br"),a("br"),a("span",{staticStyle:{"font-size":"20px","font-weight":"bold"},attrs:{id:"bio"}},[t._v("PRIMARY:")]),a("br"),a("span",{attrs:{id:"bio"}},[t._v("Tagda Elementary School")]),a("br")])])}],O={name:"About",components:{Arrow:m},props:{},data(){return{about:d.about,name:d.main.name.first,facts:d.about.facts,heading:d.main.headings.about}}},F=O,V=Object(p["a"])(F,j,P,!1,null,null,null),N=V.exports,B=function(){var t=this,a=t._self._c;return a("section",{staticClass:"light-section",attrs:{id:"skills"}},[a("div",{staticClass:"container-fluid"},[a("h1",{staticClass:"section-header"},[t._v(t._s(t.heading))]),a("div",{staticClass:"row filters"},[a("ul",{staticClass:"list-inline mx-auto",attrs:{"data-aos":"fade-right","data-aos-duration":"1000"}},t._l(t.skills,(function(e){return a("li",{key:e.category,staticClass:"list-inline-item filter"},[a("a",{staticClass:"nav-item",class:e.category===t.currentCategory?"active":null,attrs:{"data-category":e.category},on:{click:t.setCategory}},[t._v(t._s(e.category))])])})),0)]),t._l(t.filteredSkills,(function(e,i){return a("div",{key:i,attrs:{id:"skill-container","data-aos":"fade-right","data-aos-duration":"1000"}},[a("div",{staticClass:"category-heading"},[a("h2",[a("i",{class:e.faClass}),t._v(" "+t._s(e.category))]),a("h3",{attrs:{"v-if":""!==e.subtitle}},[t._v(t._s(e.subtitle))])]),a("div",{staticClass:"skill-content"},[a("div",{staticClass:"skillbars"},t._l(e.skillList,(function(e){return a("div",{key:e.name,staticClass:"skill"},[a("h3",{staticClass:"skill-name",domProps:{innerHTML:t._s(e.name)}}),a("div",{staticClass:"outer-bar"},[a("div",{class:"inner-bar level--"+e.level})])])})),0),a("div")]),a("div",{staticClass:"skill-content"},[a("div",{staticClass:"skillbars"},t._l(e.explist,(function(e){return a("div",{key:e.position,staticClass:"skill"},[a("h3",{domProps:{innerHTML:t._s(e.position)}}),a("div",[t._v(t._s(e.company))]),a("div",[t._v(t._s(e.address))]),a("div",[t._v(t._s(e.date))])])})),0),a("div")])])}))],2),a("Arrow")],1)},I=[],T={name:"Experience_And_Skills",props:{},components:{Arrow:m},data(){return{skills:d.skills.categories,heading:d.main.headings.skills,currentCategory:d.skills.defaultCategory}},computed:{filteredSkills(){var t=d.skills.categories,a=this.currentCategory,e=t.filter((function(t){if(t.category===a)return t}));return e}},methods:{setCategory(t){this.currentCategory=t.target.dataset.category}}},D=T,L=Object(p["a"])(D,B,I,!1,null,null,null),K=L.exports,Y=function(){var t=this,a=t._self._c;return a("section",{staticClass:"dark-section",attrs:{id:"portfolio"}},[a("div",{staticClass:"container-fluid"},[a("h1",{staticClass:"section-header"},[t._v(t._s(t.heading))]),a("div",{staticClass:"row filters"},[a("ul",{staticClass:"list-inline mx-auto"},t._l(t.filters,(function(e){return a("li",{key:e.title,staticClass:"list-inline-item filter"},[a("a",{staticClass:"nav-item",class:e.filter===t.currentFilter?"active":null,attrs:{"data-filter":e.filter},on:{click:t.setFilter}},[t._v(t._s(e.filter))])])})),0)]),a("div",{staticClass:"row",attrs:{id:"portfolio-container"}},t._l(t.filteredProjects,(function(i,s){return a("div",{key:s,staticClass:"col-sm-12 col-md-4 flex-col",attrs:{"data-aos":"fade-right","data-aos-duration":"1000"}},[a("div",{staticClass:"portfolio-item"},[a("div",[a("img",{attrs:{src:e("8763")("./"+i.image)}})]),a("div",{staticClass:"overlay"},[a("a",{attrs:{href:i.link,title:"GitHub",target:"_blank"}},[a("div",{staticClass:"portfolio-item-content"},[a("h3",[t._v(t._s(i.title))]),a("p",[t._v(t._s(i.description))]),""!==i.source?a("div",{staticClass:"link-icons"},[a("a",{attrs:{href:i.source,title:"Source Code",target:"_blank"}},[a("i",{staticClass:"fas fa-code fa-2x"})])]):t._e()])])])])])})),0)]),a("Arrow")],1)},H=[],J={name:"portfolio",props:{},components:{Arrow:m},data(){return{projects:d.portfolio.projects,heading:d.main.headings.portfolio,currentFilter:d.portfolio.defaultFilter,currentEnlargedIndex:null,originalWidth:200,originalHeight:150,enlargedWidth:800,enlargedHeight:400}},computed:{filteredProjects(){var t=d.portfolio.projects,a=this.currentFilter,e=t.filter((function(t){return t.filter===a}));return e},filters(){var t=[],a=d.portfolio.projects;return t=a.filter((function(a){if(!t.includes(a.filter))return t.push(a.filter),a.filter})),t}},methods:{test(){console.log("testttttt")},setFilter(t){this.currentFilter=t.target.dataset.filter},toggleEnlargement(t){this.currentEnlargedIndex=this.currentEnlargedIndex===t?null:t},closePopUp(){this.currentEnlargedIndex=null}}},q=J,M=Object(p["a"])(q,Y,H,!1,null,null,null),Q=M.exports,W=function(){var t=this,a=t._self._c;return a("section",{staticClass:"light-section",attrs:{id:"contact"}},[a("div",{staticClass:"container-fluid"},[a("h1",{staticClass:"section-header"},[t._v(t._s(t.heading))]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-md-6 flex-col",staticStyle:{margin:"0 auto"},attrs:{"data-aos":"fade-right","data-aos-duration":"1000"}},[a("div",{staticClass:"contact-content"},[a("h2",[t._v("Connect with Me")]),a("div",{staticClass:"contact-text"},[t._v(t._s(t.contact.text))]),a("div",{staticClass:"contact-info"},[a("ul",{staticClass:"list-group list-group-flush"},[""!==t.contact.city?a("li",{staticClass:"list-group-item"},[t._m(0),a("br",{staticClass:"d-md-none"}),a("span",[t._v("  "+t._s(t.contact.city))])]):t._e(),""!==t.contact.email?a("li",{staticClass:"list-group-item"},[t._m(1),a("br",{staticClass:"d-md-none"}),a("a",{attrs:{href:"mailto:"+t.contact.email}},[a("span",[t._v(t._s(t.contact.email))])])]):t._e(),""!==t.contact.phone?a("li",{staticClass:"list-group-item"},[t._m(2),a("br",{staticClass:"d-md-none"}),a("span",[t._v(t._s(t.contact.phone))])]):t._e(),a("li",{staticClass:"list-group-item"},[a("button",{staticClass:"btn btn-resume",on:{click:t.downloadPDF}},[t._v("Resume")])])])])])]),t.contact.form?a("div",{staticClass:"col-sm-12 col-md-6 flex-col",attrs:{"data-aos":"fade-right","data-aos-duration":"1000"}},[""!==t.contact.formTitle?a("h2",[t._v(t._s(t.contact.formTitle))]):t._e(),a("div",{staticClass:"container contact-form"},[a("form",{attrs:{action:t.contact.formEndPoint,method:"POST",target:"_blank"}},[t._m(3),t._m(4),t._m(5),t._m(6)])])]):t._e()])]),t._m(7)])},U=[function(){var t=this,a=t._self._c;return a("h3",{staticClass:"d-inline"},[a("i",{staticClass:"fas fa-map-marker-alt"}),t._v(" Location: ")])},function(){var t=this,a=t._self._c;return a("h3",{staticClass:"d-inline"},[a("i",{staticClass:"fa fa-envelope"}),t._v(" Email: ")])},function(){var t=this,a=t._self._c;return a("h3",{staticClass:"d-inline"},[a("i",{staticClass:"fas fa-phone"}),t._v(" Phone: ")])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"form-group"},[a("div",{staticClass:"input-group"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text bg-white"},[a("i",{staticClass:"fa fa-user"}),t._v("  ")])]),a("input",{staticClass:"form-control border-left-0",attrs:{name:"name",type:"name",placeholder:"Name",required:""}})])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"form-group"},[a("div",{staticClass:"input-group"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text bg-white"},[a("i",{staticClass:"fa fa-envelope"})])]),a("input",{staticClass:"form-control border-left-0",attrs:{name:"email",type:"email",placeholder:"Email",required:""}})])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"form-group"},[a("textarea",{staticClass:"form-control",attrs:{id:"message",rows:"5",placeholder:"Message",required:""}})])},function(){var t=this,a=t._self._c;return a("button",{staticClass:"btn",attrs:{type:"submit"}},[a("i",{staticClass:"fa fa-paper-plane"}),t._v(" Send ")])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"row arrow-container"},[a("a",{staticClass:"arrow-icon",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-chevron-up fa-4x"})])])}],G=(e("88a7"),e("271a"),e("5494"),{name:"Contact",props:{},components:{},data(){return{contact:d.contact,resu:d.contact.resumeLink,social:d.contact.social,heading:d.main.headings.contact,pdfFileUrl:e("f799").default}},methods:{async downloadPDF(){try{const t=await fetch(this.pdfFileUrl),a=await t.blob(),e=URL.createObjectURL(a);window.open(e,"_blank")}catch(t){console.error("Error downloading PDF:",t)}}}}),Z=G,z=Object(p["a"])(Z,W,U,!1,null,null,null),X=z.exports,$=function(){var t=this,a=t._self._c;return a("footer",{staticClass:"footer section-dark font-small text-center"},[t._m(0),a("ul",{staticClass:"list-inline"},t._l(t.social,(function(t,e){return a("li",{key:e,staticClass:"social-item list-inline-item"},[a("a",{attrs:{href:t.url,alt:t.name}},[a("i",{class:t.faClass})])])})),0)])},tt=[function(){var t=this,a=t._self._c;return a("ul",{staticClass:"list-inline"},[a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"nav-item nav-link active",attrs:{href:"#"}},[t._v(" Home ")])]),a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"nav-item nav-link",attrs:{href:"#about"}},[t._v("About")])]),a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"nav-item nav-link",attrs:{href:"#skills"}},[t._v("Skills")])]),a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"nav-item nav-link",attrs:{href:"#portfolio"}},[t._v("portfolio")])]),a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"nav-item nav-link",attrs:{href:"#contact"}},[t._v("Contact")])])])}],at={name:"Footer",components:{},props:{},data(){return{text:d,social:d.contact.social}}},et=at,it=Object(p["a"])(et,$,tt,!1,null,null,null),st=it.exports,nt={name:"App",components:{Header:R,About:N,Experience_And_Skills:K,Portfolio:Q,Contact:X,Footer:st}},rt=nt,lt=(e("7f8d"),Object(p["a"])(rt,s,n,!1,null,null,null)),ot=lt.exports,ct=e("1157"),dt=e.n(ct);i["a"].config.productionTip=!1,new i["a"]({render:t=>t(ot)}).$mount("#app");var ft,ut=dt()("#navbar-nav"),pt=ut.outerHeight()+1,vt=ut.find("a"),mt=vt.map((function(){var t=dt()(dt()(this).attr("href"));if(t.length)return t})),gt=[];dt()("#navbar-nav li").each((function(){gt.push(dt()(this).find("a").attr("href"))})),gt=gt.map(t=>t.slice(1)),dt()(window).on("scroll",(function(){var t=dt()(this).scrollTop()+pt,a=mt.map((function(){if(dt()(this).offset().top<t)return this}));a=a[a.length-1];var e=a&&a.length?a[0].id:"";if("contact"!==e){const t=gt.indexOf(e);var i=t+1,s=gt[i];dt()(".arrow-icon").attr("href","#"+s)}else dt()(".arrow-icon").attr("href","#");ft!==e&&(ft=e,vt.parent().removeClass("active-nav").end().filter("[href=\\#"+e+"]").parent().addClass("active-nav"))}))},"633f":function(t,a,e){t.exports=e.p+"norwel.github.io/img/p.6522e50d.png"},7831:function(t,a,e){t.exports=e.p+"norwel.github.io/img/breeze.f9afd9fc.png"},"7f8d":function(t,a,e){"use strict";e("bedd")},8763:function(t,a,e){var i={"./breeze.png":"7831","./p.png":"633f","./people.png":"a174","./spa.jpg":"d42a"};function s(t){var a=n(t);return e(a)}function n(t){if(!e.o(i,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=n,t.exports=s,s.id="8763"},"94dc":function(t,a,e){t.exports=e.p+"norwel.github.io/img/norz.15c3dd93.png"},a174:function(t,a){t.exports="data:image/png;base64,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"},bedd:function(t,a,e){},c35a:function(t,a,e){t.exports=e.p+"norwel.github.io/img/norz1.554ff7ee.png"},d42a:function(t,a,e){t.exports=e.p+"norwel.github.io/img/spa.9758b601.jpg"},f799:function(t,a,e){"use strict";e.r(a),a["default"]=e.p+"norwel.github.io/assets/Norwel-Nunez.41b6260d.pdf"}});
//# sourceMappingURL=app.5c14a5a8.js.map
