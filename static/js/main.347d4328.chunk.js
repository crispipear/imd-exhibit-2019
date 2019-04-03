(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(e,t,n){},171:function(e,t,n){},173:function(e,t,n){},175:function(e,t,n){},177:function(e,t,n){},179:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(60),o=n.n(s),c=n(1),l=n(2),i=n(4),u=n(3),m=n(5),d=(n(72),n(73),n(32)),h=n.n(d),p=n(61),f=n(66).a({space:"y8itg9n71h1r",accessToken:"8be336497be9ea1542bc33c39e576e94e2c050bb2b0e735e8cbb3f05f7d74ae0"}),v=function(e){return f.getEntries({content_type:e}).then(function(e){var t=[];return e.items.forEach(function(e){e.fields&&t.push(e.fields)}),t})},E=function(){return f.getAssets().then(function(e){var t=[];return e.items.forEach(function(e){e.fields&&t.push(e.fields)}),t})},b=r.a.createContext({students:void 0,projects:void 0,siteContent:void 0,assets:void 0,showStudentInfo:void 0,curStudent:void 0,studentInfo:void 0,closeStudentInfo:void 0}),j=b.Consumer,w=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={students:[],projects:[],siteContent:{},assets:{},curStudent:"",studentInfo:!1},n.showStudentInfo=function(e){n.setState({curStudent:e,studentInfo:!0})},n.closeStudentInfo=function(){n.setState({studentInfo:!1})},n._fetchData=Object(p.a)(h.a.mark(function e(){var t,a,r,s;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("siteContent");case 2:return t=e.sent,n._processContent(t),e.next=6,E();case 6:return a=e.sent,n._processAssets(a),e.next=10,v("students");case 10:return r=e.sent,e.next=13,v("projects");case 13:s=e.sent,n.setState({students:r.sort(n._compare),projects:s});case 15:case"end":return e.stop()}},e,this)})),n._processAssets=function(e){var t={};e.map(function(e){t[e.title]="https://".concat(e.file.url)}),n.setState({assets:t})},n._processContent=function(e){var t={};e.map(function(e){t[e.name]=e.content}),n.setState({siteContent:t})},n._compare=function(e,t){var n=e.lastName,a=t.lastName;return n<a?-1:n>a?1:0},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this._fetchData()}},{key:"render",value:function(){return r.a.createElement(b.Provider,{value:{students:this.state.students,projects:this.state.projects,siteContent:this.state.siteContent,assets:this.state.assets,showStudentInfo:this.showStudentInfo,closeStudentInfo:this.closeStudentInfo,curStudent:this.state.curStudent,studentInfo:this.state.studentInfo}},this.props.children)}}]),t}(a.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"student-card",onClick:function(){return e.props.showStudentInfo(e.props.name)}},r.a.createElement("div",{className:"student-portrait",style:{backgroundImage:"url(".concat(this.props.assets.sample_portrait,")")}}),r.a.createElement("h1",null,this.props.name))}}]),t}(a.Component),k=(n(168),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"students"},this.props.data&&this.props.data.map(function(t,n){return r.a.createElement(y,{showStudentInfo:e.props.showStudentInfo,name:t.name,key:n,assets:e.props.assets})}))}}]),t}(a.Component)),O=function(){return r.a.createElement(j,null,function(e){var t=e.students,n=e.assets,a=e.showStudentInfo;return r.a.createElement(k,{data:t,assets:n,showStudentInfo:a})})},g=(n(59),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.siteContent?r.a.createElement("div",{className:"about"},r.a.createElement("div",{className:"left"},r.a.createElement("h1",null,"our vision"),r.a.createElement("p",null,this.props.siteContent.about)),r.a.createElement("div",{className:"right"},r.a.createElement("h1",null,"capstone exhibition"),r.a.createElement("h2",null,"Location"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.uwb.edu/arc",target:"_blank",rel:"noopener noreferrer"},this.props.siteContent.exhibit_location)),r.a.createElement("h2",null,"Date"),r.a.createElement("p",null,this.props.siteContent.exhibit_date),r.a.createElement("h2",null,"Time"),r.a.createElement("p",null,this.props.siteContent.exhibit_time))):r.a.createElement("div",{className:"about"})}}]),t}(a.Component)),C=function(){return r.a.createElement(j,null,function(e){var t=e.siteContent;return r.a.createElement(g,{siteContent:t})})},S=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.siteContent?r.a.createElement("div",{className:"landing"},r.a.createElement("div",{className:"scroll"},r.a.createElement("span",null,"Scroll"),r.a.createElement("div",null)),r.a.createElement("h1",null,this.props.siteContent&&this.props.siteContent.tagline)):r.a.createElement("div",{className:"landing"})}}]),t}(a.Component),N=function(){return r.a.createElement(j,null,function(e){var t=e.siteContent;return r.a.createElement(S,{siteContent:t})})},I=(n(171),function(e,t){"undefined"!==typeof window&&window.scrollTo({top:e,left:t,behavior:"smooth"})}),_=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={scrollUp:!1,shadow:!1},n._scroll=function(e){var t=document.querySelector(e).offsetTop;I(t,0)},n._handleScroll=function(e){e.wheelDelta<=0?!n.state.scrollUp&&n.setState({scrollUp:!0}):(n.state.scrollUp&&n.setState({scrollUp:!1}),n.setState({shadow:!(window.scrollY<=window.innerHeight)}))},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("wheel",this._handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("wheel",this._handleScroll)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"menu"+(this.state.scrollUp?" menu-hidden":" menu-appear")+(this.state.shadow?" menu-shadow":"")},r.a.createElement("div",{className:"left"},r.a.createElement("span",{onClick:function(){return e._scroll(".app")}},"IMD c/o 2019")),r.a.createElement("div",{className:"right"},r.a.createElement("span",{onClick:function(){return e._scroll(".capstones")}},"Capstones"),r.a.createElement("span",{onClick:function(){return e._scroll(".students")}},"Students"),r.a.createElement("span",{onClick:function(){return e._scroll(".about")}},"About")))}}]),t}(a.Component),M=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={width:0,height:0,url:"",teamMembers:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e,t=this.props.capstone.featuredImage.fields.file,n=0,a="https://"+t.url,r=this.props.capstone.teamMembers.split(",");t.details.image.width>t.details.image.height?(e="35.65vw",n="25vw"):(e="25vw",n="35.65vw"),this.setState({width:e,height:n,url:a,teamMembers:r})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"capstone-card",style:{width:this.state.width,height:this.state.height}},r.a.createElement("div",{className:"capstone-image",style:{backgroundImage:"url(".concat(this.state.url,")")}}),r.a.createElement("h1",null,this.props.capstone.name),r.a.createElement("p",null,this.state.teamMembers.map(function(t,n){return r.a.createElement("span",null,t,n!=e.state.teamMembers.length-1&&" / ")})))}}]),t}(a.Component),D=(n(173),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"capstones"},this.props.data&&this.props.data.map(function(e,t){return r.a.createElement(M,{capstone:e,key:t})}))}}]),t}(a.Component)),x=function(){return r.a.createElement(j,null,function(e){var t=e.projects;return r.a.createElement(D,{data:t})})},A=(n(175),[{name:"Su Li",role:"Lead Developer"},{name:"Yin Yin",role:"Lead Designer"},{name:"Benjamin Siev"},{name:"Kyle Rhodes"},{name:"Hannah Tashiro"},{name:"Julian Ngo"},{name:"Andrea Brado"},{name:"Kevin Laird"}]),L=["David Socha","Carrie Bodle","Abraham Avnisan","micha c\xe1rdenas","Mark Chen","Wanda Gregory","Mark Kochanski","Arnie Lund","Sara McDermott","Keiko Miyamoto"],U=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer-block"},r.a.createElement("div",{className:"left"},r.a.createElement("h1",null,"Website made possible by")),r.a.createElement("div",{className:"right"},A.map(function(e,t){return r.a.createElement("h3",{key:t},e.name,r.a.createElement("span",null,e.role&&" - "+e.role))}))),r.a.createElement("div",{className:"footer-block"},r.a.createElement("div",{className:"left"},r.a.createElement("h1",null,"Thanks to ",r.a.createElement("br",null),"our faculty ",r.a.createElement("br",null),"(2017 - 2019)")),r.a.createElement("div",{className:"right"},L.map(function(e,t){return r.a.createElement("h3",{key:t},e)}))),r.a.createElement("div",{className:"footer-footer"},r.a.createElement("h3",null,"University of Washington"),r.a.createElement("a",{href:"https://www.uwb.edu/media-design",target:"_blank"},"Interactive Media Design"),r.a.createElement("h3",null,"2019")))}}]),t}(a.Component),T=function(){return r.a.createElement(j,null,function(e){var t=e.siteContent;return r.a.createElement(U,{siteContent:t})})},W=(n(177),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={student:{},hover:!1},n._handleHover=function(){n.setState({hover:!0})},n._handleMouseLeave=function(){n.setState({hover:!1})},n._handleClick=function(e){var t=e.nativeEvent.path.some(function(e){return"student-info"==e.className});n.props.studentInfo&&!t&&n.props.closeStudentInfo()},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.students.find(function(t){return t.name==e.curStudent})||{};this.setState({student:t})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"student-info-container",onClick:function(t){return e._handleClick(t)},style:{pointerEvents:this.props.studentInfo?"all":"none",backgroundColor:this.props.studentInfo?"rgba(0,0,0, 0.8)":"transparent"}},r.a.createElement("div",{className:"student-info",style:{right:this.props.studentInfo?0:"-60%"}},r.a.createElement("div",{className:"left"},r.a.createElement("div",{className:"student-info-portrait"},r.a.createElement("div",{className:"overlay1",style:{backgroundColor:this.state.student.favoriteColor,opacity:this.state.hover?1:0}}),r.a.createElement("div",{className:"portrait",style:{backgroundImage:"url(".concat(this.props.assets.sample_portrait,")")}})),r.a.createElement("div",{className:"student-info-fav"},r.a.createElement("h3",null,"Favorite drink"),r.a.createElement("h4",null,this.state.student.favoriteDrink)),r.a.createElement("div",{className:"student-info-fav",style:{cursor:"pointer"},onMouseEnter:this._handleHover,onMouseLeave:this._handleMouseLeave},r.a.createElement("h3",null,"Favorite color"),r.a.createElement("h4",null,r.a.createElement("span",{style:{textDecoration:"underline",textTransform:"lowercase",opacity:this.state.hover?.5:1}},this.state.student.favoriteColor),r.a.createElement("div",{style:{backgroundColor:this.state.student.favoriteColor}})))),r.a.createElement("div",{className:"right"},r.a.createElement("h1",null,this.state.student.name),r.a.createElement("p",{className:"focus"},"\u2014 ",this.state.student.focus),r.a.createElement("p",null,this.state.student.bio),r.a.createElement("div",{className:"links"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.state.student.portfolio},"portfolio"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.state.student.linkedin},"linkedin"),r.a.createElement("a",{href:"mailto:"+this.state.student.email},"email")))))}}]),t}(a.Component)),B=function(){return r.a.createElement(j,null,function(e){var t=e.students,n=e.assets,a=e.studentInfo,s=e.closeStudentInfo,o=e.curStudent;return r.a.createElement(W,{students:t,assets:n,studentInfo:a,closeStudentInfo:s,curStudent:o})})},H=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(w,null,r.a.createElement("div",{className:"app"},r.a.createElement(B,null),r.a.createElement(_,null),r.a.createElement(N,null),r.a.createElement(C,null),r.a.createElement(x,null),r.a.createElement(O,null),r.a.createElement(T,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},33:function(e,t){},59:function(e,t,n){},67:function(e,t,n){e.exports=n(179)},72:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},73:function(e,t,n){}},[[67,2,1]]]);
//# sourceMappingURL=main.347d4328.chunk.js.map