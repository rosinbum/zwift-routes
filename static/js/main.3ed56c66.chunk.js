(this["webpackJsonpzwift-routes-web"]=this["webpackJsonpzwift-routes-web"]||[]).push([[0],{109:function(e,t,n){e.exports=n(187)},186:function(e,t,n){},187:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),o=n.n(i),l=n(24),c=n(234),u=n(55),s=n(29),d=n(225),f=n(85),m=n.n(f),p=n(223),g=n(84),v=n.n(g),h=n(226),E=n(45),y=n(220),w=Object(y.a)((function(e){return{emptyIcon:{display:"inline-block",marginRight:e.spacing(2),padding:e.spacing(1),width:"1.5rem"},leftIconButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),b=function(e){var t=e.leftIcon,n=e.onLeftIconPressed,a=e.title,i=w(),o={"aria-label":t,className:i.leftIconButton,color:"inherit",edge:"start",onClick:n},l=r.a.createElement("div",{className:i.emptyIcon});return"none"!==t&&(l=r.a.createElement(p.a,o,"menu"===t?r.a.createElement(v.a,null):r.a.createElement(m.a,null))),r.a.createElement(d.a,{position:"relative"},r.a.createElement(h.a,null,l,r.a.createElement(E.a,{variant:"h6",className:i.title},a)))};b.defaultProps={leftIcon:"none",onLeftIconPressed:function(){}};var k=b,C=Object(y.a)({root:{display:"flex",flexFlow:"column nowrap",height:"100%",left:0,margin:0,padding:0,position:"absolute",top:0,width:"100%"},content:{display:"block",flexGrow:1,overflowY:"scroll"}}),R=function(){var e=C(),t=Object(s.f)(),n=Object(s.g)().id;return r.a.createElement("div",{className:e.root},r.a.createElement(k,{leftIcon:"back",onLeftIconPressed:function(){return t.goBack()},title:"Route Details"}),r.a.createElement("div",{className:e.content},r.a.createElement("p",null,"Detailed route content for ".concat(n))))},_=n(97),N=n(238),O=n(229),j=n(91),S=n.n(j),x=n(90),F=n.n(x),G=n(62),I=n(61),q=n(189),D=n(227),z=n(228),L=n(87),W=n(88),U=n(4),P=n.n(U),B=n(89),T=n.n(B),A=(P.a.string.isRequired,P.a.number.isRequired,P.a.bool.isRequired,P.a.bool.isRequired,P.a.bool.isRequired,P.a.bool.isRequired,P.a.number.isRequired,P.a.number.isRequired,P.a.number.isRequired,P.a.string.isRequired,P.a.number.isRequired,P.a.number.isRequired,P.a.number.isRequired,P.a.number.isRequired,P.a.string.isRequired,P.a.string.isRequired,function(){function e(t){Object(L.a)(this,e),this.data=t,this.data.sports=t.sports.toLowerCase(),this.data.world=T()(t.world),this.hasCompletedRoute=!1}return Object(W.a)(e,[{key:"updateRoute",value:function(e){return"isCompleted"in e&&(this.hasCompletedRoute=e.isCompleted),this}},{key:"fitsFilters",value:function(e){if("*"!==e.filter_world){var t=[e.filter_world];if(e.include_watopia&&t.push("Watopia"),!t.includes(this.zwiftWorld))return!1}return!(!e.include_completed&&this.isCompleted)&&(!(!e.include_eventonly&&this.isEventOnly)&&(!("cycling"===e.filter_sport&&!this.isForCycling)&&!("running"===e.filter_sport&&!this.isForRunning)))}},{key:"id",get:function(){return this.data.id}},{key:"difficulty",get:function(){return this.data.difficulty}},{key:"isCompleted",get:function(){return this.hasCompletedRoute}},{key:"isEventOnly",get:function(){return this.data.eventonly}},{key:"isForCycling",get:function(){return-1!==["all","cycling"].indexOf(this.data.sports)}},{key:"isForRunning",get:function(){return-1!==["all","running"].indexOf(this.data.sports)}},{key:"leadinDistance",get:function(){return this.data.leadin_distance}},{key:"leadinElevationGain",get:function(){return this.data.leadin_elevation}},{key:"minimumZwiftLevel",get:function(){return this.data.level||0}},{key:"routeName",get:function(){return this.data.name}},{key:"routeDistance",get:function(){return this.data.distance}},{key:"routeElevationGain",get:function(){return this.data.elevation}},{key:"totalDistance",get:function(){return this.data.distance+this.data.leadin_distance}},{key:"totalElevationGain",get:function(){return this.data.elevation+this.data.leadin_elevation}},{key:"zwiftInsiderLink",get:function(){return this.data.link||""}},{key:"zwiftSport",get:function(){return this.data.sports}},{key:"zwiftWorld",get:function(){return this.data.world}}]),e}()),J=function(e){var t=e.displayUnits,n=e.onClick,a=e.route,i=a.isCompleted?r.a.createElement(F.a,{fontSize:"large",style:{color:G.a[500]}}):r.a.createElement(S.a,{fontSize:"large",style:{color:I.a[500]}}),o=function(e,t){return"imperial"===t?"".concat((n=e,.6214*n).toFixed(1),"mi"):"".concat(e.toFixed(1),"km");var n}(a.routeDistance,t),l=function(e,t){return"imperial"===t?"".concat((n=e,3.2808*n).toFixed(0),"ft"):"".concat(e.toFixed(0),"m");var n}(a.routeElevationGain,t),c=a.difficulty.toFixed(2),u="".concat(o,", ").concat(l,", difficulty ").concat(c);return r.a.createElement(q.a,{button:!0,divider:!0,onClick:n},r.a.createElement(D.a,null,i),r.a.createElement(z.a,{secondary:u},r.a.createElement(E.a,{variant:"h6"},a.routeName)))};J.defaultProps={displayUnits:"metric"};var Y=J,Z=function(e){var t=e.displayUnits,n=e.routes,a=e.onSelectRoute,i=function(e){return function(){a(e)}};return r.a.createElement(O.a,null,n.map((function(e){return r.a.createElement(Y,{key:e.id,displayUnits:t,onClick:i(e),route:e})})))};Z.defaultProps={displayUnits:"metric"};var M=Z,$=n(92),H=n.n($),K=n(233),Q=n(230),V=n(239),X=n(231),ee=n(235),te=Object(y.a)((function(e){return{checkControl:{paddingLeft:e.spacing(1)},formControl:{margin:e.spacing(1),minWidth:120},formGroup:{margin:e.spacing(1)},root:{minWidth:"15rem"},title:{color:e.palette.primary.contrastText,paddingLeft:e.spacing(.5)}}})),ne=function(e){var t=e.onSettingsChanged,n=e.value,a=te();return r.a.createElement(Q.a,{className:a.formControl},r.a.createElement(V.a,{htmlFor:"zwift-display-units"},"Display Units"),r.a.createElement(ee.a,{value:n,onChange:function(e){t(e.target.value)}},r.a.createElement(X.a,{value:"imperial"},"Imperial"),r.a.createElement(X.a,{value:"metric"},"Metric")))},ae=n(232),re=n(237),ie=function(e){var t=e.fieldName,n=e.onSettingsChanged,a=e.value,i=te();return r.a.createElement(ae.a,{className:i.checkControl,control:r.a.createElement(re.a,{color:"primary"}),label:"Include ".concat(t),onChange:function(e){n(e.target.checked)},checked:a})},oe=function(e,t){var n=e.routeName.toLowerCase(),a=t.routeName.toLowerCase();return n===a?0:n<a?-1:1},le={difficulty:{title:"Difficulty",comparator:function(e,t){return e.difficulty-t.difficulty}},routeDistance:{title:"Route Distance",comparator:function(e,t){return e.routeDistance-t.routeDistance}},routeElevationGain:{title:"Route Elevation Gain",comparator:function(e,t){return e.routeElevationGain-t.routeElevationGain}},totalDistance:{title:"Total Distance",comparator:function(e,t){return e.totalDistance-t.totalDistance}},totalElevationGain:{title:"Total Elevation Gain",comparator:function(e,t){return e.totalElevationGain-t.totalElevationGain}},routeName:{title:"Route Name",comparator:oe}},ce=function(e){var t=e.onSettingsChanged,n=e.value,a=te();return r.a.createElement(Q.a,{className:a.formControl},r.a.createElement(V.a,{htmlFor:"zwift-sort-field"},"Sort Field"),r.a.createElement(ee.a,{value:n,onChange:function(e){t(e.target.value)}},Object.keys(le).map((function(e){return r.a.createElement(X.a,{key:e,value:e},le[e].title)}))))},ue=function(e){var t=e.onSettingsChanged,n=e.value,a=te();return r.a.createElement(Q.a,{className:a.formControl},r.a.createElement(V.a,{htmlFor:"zwift-sport"},"Sport"),r.a.createElement(ee.a,{value:n,onChange:function(e){t(e.target.value)}},r.a.createElement(X.a,{value:"all"},"All sports"),r.a.createElement(X.a,{value:"cycling"},"Cycling"),r.a.createElement(X.a,{value:"running"},"Running")))},se=function(e){var t=e.onSettingsChanged,n=e.value,a=e.worlds,i=te();return r.a.createElement(Q.a,{className:i.formControl},r.a.createElement(V.a,{htmlFor:"zwift-world"},"World"),r.a.createElement(ee.a,{value:n,onChange:function(e){t(e.target.value)}},r.a.createElement(X.a,{value:"*"},"All"),a.map((function(e){return r.a.createElement(X.a,{key:e,value:e},e)}))))},de=n(74),fe=n.n(de),me=n(93),pe=n(94),ge=n.n(pe),ve=Symbol.for("route.loadRoutes"),he=Symbol.for("route.updateRoute"),Ee=function(e){return{type:ve,routes:e}};var ye="".concat("/zwift-routes","/routes.json");var we=n(98),be=Symbol.for("settings.update"),ke={filter_world:"*",filter_sport:"cycling",include_completed:!1,include_eventonly:!1,include_watopia:!0,sort_field:"difficulty",display_units:"imperial"};var Ce=function(){var e=te(),t=Object(l.b)(),n=Object(l.c)((function(e){return e.settings})),a=Object(l.c)((function(e){return e.routes})),i=H()(a.map((function(e){return e.zwiftWorld}))).sort(),o=function(e){t({type:be,payload:e})};return r.a.createElement("div",{className:e.root},r.a.createElement(d.a,{position:"relative"},r.a.createElement(h.a,null,r.a.createElement(E.a,{variant:"h6",className:e.title},"Filters"))),r.a.createElement(K.a,{className:e.formGroup},r.a.createElement(se,{onSettingsChanged:function(e){return o({filter_world:e})},value:n.filter_world,worlds:i}),r.a.createElement(ie,{fieldName:"Watopia rides",onSettingsChanged:function(e){return o({include_watopia:e})},value:n.include_watopia}),r.a.createElement(ie,{fieldName:"completed rides",onSettingsChanged:function(e){return o({include_completed:e})},value:n.include_completed}),r.a.createElement(ie,{fieldName:"'Event Only' rides",onSettingsChanged:function(e){return o({include_eventonly:e})},value:n.include_eventonly}),r.a.createElement(ue,{onSettingsChanged:function(e){return o({filter_sport:e})},value:n.filter_sport})),r.a.createElement(d.a,{position:"relative"},r.a.createElement(h.a,null,r.a.createElement(E.a,{variant:"h6",className:e.title},"Settings"))),r.a.createElement(K.a,{className:e.formGroup},r.a.createElement(ce,{onSettingsChanged:function(e){return o({sort_field:e})},value:n.sort_field}),r.a.createElement(ne,{onSettingsChanged:function(e){return o({display_units:e})},value:n.display_units})))},Re=Object(y.a)({root:{display:"flex",flexFlow:"column nowrap",height:"100%",left:0,margin:0,padding:0,position:"absolute",top:0,width:"100%"},content:{display:"block",flexGrow:1,overflowY:"scroll"}}),_e=function(){var e,t=Re(),n=Object(s.f)(),a=r.a.useState(!1),i=Object(_.a)(a,2),o=i[0],c=i[1],u=Object(l.c)((function(e){return e.routes})),d=Object(l.c)((function(e){return e.settings})),f=u.filter((function(e){return e.fitsFilters(d)})).sort((e=d.sort_field)in le?le[e].comparator:oe),m=function(e){return function(){c(e)}};return r.a.createElement("div",{className:t.root},r.a.createElement(k,{leftIcon:"menu",onLeftIconPressed:m(!0),title:"Zwift Routes"}),r.a.createElement("div",{className:t.content},r.a.createElement(M,{displayUnits:d.display_units,routes:f,onSelectRoute:function(e){n.push("/route/".concat(e.id))}})),r.a.createElement(N.a,{anchor:"left",open:o,onClose:m(!1)},r.a.createElement(Ce,null)))},Ne=function(){return r.a.createElement(u.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/route/:id"},r.a.createElement(R,null)),r.a.createElement(s.a,{path:"/"},r.a.createElement(_e,null))))},Oe=n(32),je=n(95),Se=n(96),xe=Object(Oe.c)({routes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve:return t.routes.map((function(e){return new A(e)}));case he:return e.map((function(e){return e.id===t.routeId?e.updateRoute(t.routeUpdate):e}));default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:return Object(we.a)({},e,{},t.payload);default:return e}}}),Fe=Object(Oe.a)(Object(Se.createLogger)({collapsed:!0}),je.a),Ge=Object(Oe.d)(xe,Fe),Ie=Ge;Ge.dispatch(function(){var e=Object(me.a)(fe.a.mark((function e(t){var n,a;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ge()(ye);case 3:if(n=e.sent,console.debug(n),200===n.status){e.next=7;break}throw new Error("Response returned error code ".concat(n.status," ").concat(n.statusText));case 7:return e.next=9,n.json();case 9:a=e.sent,console.debug(a),t(Ee(a)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}());n(186),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(){return r.a.createElement(l.a,{store:Ie},r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null),r.a.createElement(Ne,null)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[109,1,2]]]);
//# sourceMappingURL=main.3ed56c66.chunk.js.map