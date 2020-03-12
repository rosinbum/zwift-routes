(this["webpackJsonpzwift-routes-web"]=this["webpackJsonpzwift-routes-web"]||[]).push([[0],{109:function(e,t,n){e.exports=n(187)},186:function(e,t,n){},187:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),o=n.n(i),l=n(24),c=n(234),u=n(54),s=n(29),d=n(225),f=n(85),m=n.n(f),p=n(223),g=n(84),v=n.n(g),h=n(226),E=n(45),y=n(220),w=Object(y.a)((function(e){return{emptyIcon:{display:"inline-block",marginRight:e.spacing(2),padding:e.spacing(1),width:"1.5rem"},leftIconButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),b=function(e){var t=e.leftIcon,n=e.onLeftIconPressed,a=e.title,i=w(),o={"aria-label":t,className:i.leftIconButton,color:"inherit",edge:"start",onClick:n},l=r.a.createElement("div",{className:i.emptyIcon});return"none"!==t&&(l=r.a.createElement(p.a,o,"menu"===t?r.a.createElement(v.a,null):r.a.createElement(m.a,null))),r.a.createElement(d.a,{position:"relative"},r.a.createElement(h.a,null,l,r.a.createElement(E.a,{variant:"h6",className:i.title},a)))};b.defaultProps={leftIcon:"none",onLeftIconPressed:function(){}};var k=b,C=Object(y.a)({root:{display:"flex",flexFlow:"column nowrap",height:"100%",left:0,margin:0,padding:0,position:"absolute",top:0,width:"100%"},content:{display:"block",flexGrow:1,overflowY:"scroll"}}),R=function(){var e=C(),t=Object(s.f)(),n=Object(s.g)().id;return r.a.createElement("div",{className:e.root},r.a.createElement(k,{leftIcon:"back",onLeftIconPressed:function(){return t.goBack()},title:"Route Details"}),r.a.createElement("div",{className:e.content},r.a.createElement("p",null,"Detailed route content for ".concat(n))))},_=n(97),O=n(238),N=n(229),j=n(91),x=n.n(j),S=n(90),F=n.n(S),q=n(61),I=n(60),D=n(189),G=n(227),z=n(228),L=n(87),W=n(88),T=n(4),P=n.n(T),B=n(89),U=n.n(B),A=(P.a.string.isRequired,P.a.number.isRequired,P.a.bool.isRequired,P.a.bool.isRequired,P.a.bool.isRequired,P.a.bool.isRequired,P.a.number.isRequired,P.a.number.isRequired,P.a.number.isRequired,P.a.string.isRequired,P.a.number.isRequired,P.a.number.isRequired,P.a.number.isRequired,P.a.number.isRequired,P.a.string.isRequired,P.a.string.isRequired,function(){function e(t){Object(L.a)(this,e),this.data=t,this.data.sports=t.sports.toLowerCase(),this.data.world=U()(t.world),this.hasCompletedRoute=!1}return Object(W.a)(e,[{key:"updateRoute",value:function(e){return"isCompleted"in e&&(this.hasCompletedRoute=e.isCompleted),this}},{key:"fitsFilters",value:function(e){if("*"!==e.filter_world){var t=[e.filter_world];if(e.include_watopia&&t.push("Watopia"),!t.includes(this.zwiftWorld))return!1}return!(!e.include_completed&&this.isCompleted)&&(!(!e.include_eventonly&&this.isEventOnly)&&(!("cycling"===e.filter_sport&&!this.isForCycling)&&!("running"===e.filter_sport&&!this.isForRunning)))}},{key:"id",get:function(){return this.data.id}},{key:"difficulty",get:function(){return this.data.difficulty}},{key:"isCompleted",get:function(){return this.hasCompletedRoute}},{key:"isEventOnly",get:function(){return this.data.eventonly}},{key:"isForCycling",get:function(){return-1!==["all","cycling"].indexOf(this.data.sports)}},{key:"isForRunning",get:function(){return-1!==["all","running"].indexOf(this.data.sports)}},{key:"leadinDistance",get:function(){return this.data.leadin_distance}},{key:"leadinElevationGain",get:function(){return this.data.leadin_elevation}},{key:"minimumZwiftLevel",get:function(){return this.data.level||0}},{key:"routeName",get:function(){return this.data.name}},{key:"routeDistance",get:function(){return this.data.distance}},{key:"routeElevationGain",get:function(){return this.data.elevation}},{key:"totalDistance",get:function(){return this.data.distance+this.data.leadin_distance}},{key:"totalElevationGain",get:function(){return this.data.elevation+this.data.leadin_elevation}},{key:"zwiftInsiderLink",get:function(){return this.data.link||""}},{key:"zwiftSport",get:function(){return this.data.sports}},{key:"zwiftWorld",get:function(){return this.data.world}}]),e}()),J=function(e){var t=e.displayUnits,n=e.onClick,a=e.route,i=a.isCompleted?r.a.createElement(F.a,{fontSize:"large",style:{color:q.a[500]}}):r.a.createElement(x.a,{fontSize:"large",style:{color:I.a[500]}}),o=function(e,t){return"imperial"===t?"".concat((n=e,.6214*n).toFixed(1),"mi"):"".concat(e.toFixed(1),"km");var n}(a.routeDistance,t),l=function(e,t){return"imperial"===t?"".concat((n=e,3.2808*n).toFixed(0),"ft"):"".concat(e.toFixed(0),"m");var n}(a.routeElevationGain,t),c=a.difficulty.toFixed(2),u="".concat(o,", ").concat(l,", difficulty ").concat(c);return r.a.createElement(D.a,{button:!0,divider:!0,onClick:n},r.a.createElement(G.a,null,i),r.a.createElement(z.a,{secondary:u},r.a.createElement(E.a,{variant:"h6"},a.routeName)))};J.defaultProps={displayUnits:"metric"};var Y=J,Z=function(e){var t=e.routes,n=e.onSelectRoute;return r.a.createElement(N.a,null,t.map((function(e){return r.a.createElement(Y,{key:e.id,onClick:(t=e,function(){n(t)}),route:e});var t})))},$=n(92),H=n.n($),K=n(233),M=n(230),Q=n(237),V=Object(y.a)((function(e){return{checkControl:{paddingLeft:e.spacing(1)},formControl:{margin:e.spacing(1),minWidth:120},root:{minWidth:"15rem"},secondTitle:{marginTop:e.spacing(1)},title:{color:e.palette.primary.contrastText,paddingLeft:e.spacing(.5)}}})),X=function(e){var t=e.fieldName,n=e.onSettingsChanged,a=e.value,i=V();return r.a.createElement(M.a,{className:i.checkControl,control:r.a.createElement(Q.a,{color:"primary"}),label:"Include ".concat(t),onChange:function(e){n(e.target.checked)},checked:a})},ee=n(231),te=n(239),ne=n(232),ae=n(235),re=function(e){var t=e.onSettingsChanged,n=e.value,a=e.worlds,i=V();return r.a.createElement(ee.a,{className:i.formControl},r.a.createElement(te.a,{htmlFor:"zwift-world"},"World"),r.a.createElement(ae.a,{value:n,onChange:function(e){t(e.target.value)}},r.a.createElement(ne.a,{value:"*"},"All"),a.map((function(e){return r.a.createElement(ne.a,{key:e,value:e},e)}))))},ie=n(71),oe=n.n(ie),le=n(93),ce=n(94),ue=n.n(ce),se=Symbol.for("route.loadRoutes"),de=Symbol.for("route.updateRoute"),fe=function(e){return{type:se,routes:e}};var me="".concat("/zwift-routes","/routes.json");var pe=n(98),ge=Symbol.for("settings.update"),ve={filter_world:"*",filter_sport:"cycling",include_completed:!1,include_eventonly:!1,include_watopia:!0,sort_field:"difficulty",display_units:"imperial"};var he=function(e){var t=e.onSettingsChanged,n=e.value,a=V();return r.a.createElement(ee.a,{className:a.formControl},r.a.createElement(te.a,{htmlFor:"zwift-sport"},"Sport"),r.a.createElement(ae.a,{value:n,onChange:function(e){t(e.target.value)}},r.a.createElement(ne.a,{value:"all"},"All sports"),r.a.createElement(ne.a,{value:"cycling"},"Cycling"),r.a.createElement(ne.a,{value:"running"},"Running")))},Ee=function(e,t){var n=e.routeName.toLowerCase(),a=t.routeName.toLowerCase();return n===a?0:n<a?-1:1},ye={difficulty:{title:"Difficulty",comparator:function(e,t){return e.difficulty-t.difficulty}},routeDistance:{title:"Route Distance",comparator:function(e,t){return e.routeDistance-t.routeDistance}},routeElevationGain:{title:"Route Elevation Gain",comparator:function(e,t){return e.routeElevationGain-t.routeElevationGain}},totalDistance:{title:"Total Distance",comparator:function(e,t){return e.totalDistance-t.totalDistance}},totalElevationGain:{title:"Total Elevation Gain",comparator:function(e,t){return e.totalElevationGain-t.totalElevationGain}},routeName:{title:"Route Name",comparator:Ee}},we=function(e){var t=e.onSettingsChanged,n=e.value,a=V();return r.a.createElement(ee.a,{className:a.formControl},r.a.createElement(te.a,{htmlFor:"zwift-sort-field"},"Sort Field"),r.a.createElement(ae.a,{value:n,onChange:function(e){t(e.target.value)}},Object.keys(ye).map((function(e){return r.a.createElement(ne.a,{key:e,value:e},ye[e].title)}))))},be=function(){var e=V(),t=Object(l.b)(),n=Object(l.c)((function(e){return e.settings})),a=Object(l.c)((function(e){return e.routes})),i=H()(a.map((function(e){return e.zwiftWorld}))).sort(),o=function(e){t({type:ge,payload:e})};return r.a.createElement("div",{className:e.root},r.a.createElement(d.a,{position:"relative"},r.a.createElement(h.a,null,r.a.createElement(E.a,{variant:"h6",className:e.title},"Filters"))),r.a.createElement(K.a,null,r.a.createElement(re,{onSettingsChanged:function(e){return o({filter_world:e})},value:n.filter_world,worlds:i}),r.a.createElement(X,{fieldName:"Watopia rides",onSettingsChanged:function(e){return o({include_watopia:e})},value:n.include_watopia}),r.a.createElement(X,{fieldName:"completed rides",onSettingsChanged:function(e){return o({include_completed:e})},value:n.include_completed}),r.a.createElement(X,{fieldName:"'Event Only' rides",onSettingsChanged:function(e){return o({include_eventonly:e})},value:n.include_eventonly}),r.a.createElement(he,{onSettingsChanged:function(e){return o({filter_sport:e})},value:n.filter_sport})),r.a.createElement(d.a,{position:"relative",className:e.secondTitle},r.a.createElement(h.a,null,r.a.createElement(E.a,{variant:"h6",className:e.title},"Settings"))),r.a.createElement(K.a,null,r.a.createElement(we,{onSettingsChanged:function(e){return o({sort_field:e})},value:n.sort_field})))},ke=Object(y.a)({root:{display:"flex",flexFlow:"column nowrap",height:"100%",left:0,margin:0,padding:0,position:"absolute",top:0,width:"100%"},content:{display:"block",flexGrow:1,overflowY:"scroll"}}),Ce=function(){var e,t=ke(),n=Object(s.f)(),a=r.a.useState(!1),i=Object(_.a)(a,2),o=i[0],c=i[1],u=Object(l.c)((function(e){return e.routes})),d=Object(l.c)((function(e){return e.settings})),f=u.filter((function(e){return e.fitsFilters(d)})).sort((e=d.sort_field)in ye?ye[e].comparator:Ee),m=function(e){return function(){c(e)}};return r.a.createElement("div",{className:t.root},r.a.createElement(k,{leftIcon:"menu",onLeftIconPressed:m(!0),title:"Zwift Routes"}),r.a.createElement("div",{className:t.content},r.a.createElement(Z,{routes:f,onSelectRoute:function(e){n.push("/route/".concat(e.id))}})),r.a.createElement(O.a,{anchor:"left",open:o,onClose:m(!1)},r.a.createElement(be,null)))},Re=function(){return r.a.createElement(u.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/route/:id"},r.a.createElement(R,null)),r.a.createElement(s.a,{path:"/"},r.a.createElement(Ce,null))))},_e=n(32),Oe=n(95),Ne=n(96),je=Object(_e.c)({routes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:return t.routes.map((function(e){return new A(e)}));case de:return e.map((function(e){return e.id===t.routeId?e.updateRoute(t.routeUpdate):e}));default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge:return Object(pe.a)({},e,{},t.payload);default:return e}}}),xe=Object(_e.a)(Object(Ne.createLogger)({collapsed:!0}),Oe.a),Se=Object(_e.d)(je,xe),Fe=Se;Se.dispatch(function(){var e=Object(le.a)(oe.a.mark((function e(t){var n,a;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue()(me);case 3:if(n=e.sent,console.debug(n),200===n.status){e.next=7;break}throw new Error("Response returned error code ".concat(n.status," ").concat(n.statusText));case 7:return e.next=9,n.json();case 9:a=e.sent,console.debug(a),t(fe(a)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}());n(186),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(){return r.a.createElement(l.a,{store:Fe},r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null),r.a.createElement(Re,null)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[109,1,2]]]);
//# sourceMappingURL=main.e29854a9.chunk.js.map