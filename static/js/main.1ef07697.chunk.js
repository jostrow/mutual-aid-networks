(this["webpackJsonpmutual-aid-networks"]=this["webpackJsonpmutual-aid-networks"]||[]).push([[0],{110:function(t,e){},113:function(t,e,a){t.exports=a(171)},168:function(t,e,a){},169:function(t,e,a){},170:function(t,e,a){},171:function(t,e,a){"use strict";a.r(e);var o={};a.r(o),a.d(o,"requestNetworks",(function(){return N}));var n={};a.r(n),a.d(n,"getAllNetworks",(function(){return w}));var s={};a.r(s);var r=a(13),c=a(19),i=a(23),_=a(20),l=a(22),E=a(1),A=a.n(E),p=a(74),T=a(66),u=a.n(T);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=a(90),S=a(42),R=a(178),d=a(109),h=a.n(d),m=a(91),O=function(t,e){return"".concat(t,"-").concat(e)},I=O("EVENTS","REQUEST_NETWORKS"),C=O("EVENTS","SET_NETWORKS"),D=O("EVENTS","REQUEST_FAILED"),b={allNetworks:[]},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0,a=e.type,o=e.payload;switch(a){case C:return Object(m.a)({},t,{allNetworks:o,error:null});case D:return console.log("REQUEST_FAILED: ".concat(o)),Object(m.a)({},t,{error:o});default:return t}},N=function(){return{type:I}},w=(a(95),function(t){return t.networks.allNetworks}),v=a(177),y={actions:o,logics:[Object(v.a)({type:I,processOptions:{successType:C},process:function(t){return t.firestore.collection("mutual_aid_networks").get().then((function(t){return t.docs.map((function(t){return t.data()}))})).catch(console.log)}})],reducers:f,selectors:n},g=a(110),k={searchLatLng:"",category:"General",language:"",community:""},j={actions:g,logics:[],reducers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;return e.type,t},selectors:s},G=a(56),B=a.n(G),L="REACT_APP_PROD";var U={apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_TESTING_FIREBASE_API_KEY:"AIzaSyCJncx2G6bUnecl4H2VHSBTDfRRxg7H5Fs",REACT_APP_TESTING_FIREBASE_AUTH_DOMAIN:"townhalltestingsms.firebaseapp.com",REACT_APP_TESTING_DATABASE_URL:"https://townhalltestingsms.firebaseio.com",REACT_APP_TESTING_PROJECT_ID:"townhalltestingsms",REACT_APP_TESTING_STORAGE_BUCKET:"townhalltestingsms.appspot.com",REACT_APP_TESTING_MESSAGING_SENDER_ID:"86976100332",REACT_APP_PROD_FIREBASE_API_KEY:"AIzaSyCXyjAOvBKDEX5pckTwuI7LODWKNlL21gc",REACT_APP_PROD_FIREBASE_AUTH_DOMAIN:"townhallproject-86312.firebaseapp.com",REACT_APP_PROD_DATABASE_URL:"https://townhallproject-86312.firebaseio.com",REACT_APP_PROD_STORAGE_BUCKET:"townhallproject-86312.appspot.com",REACT_APP_PROD_MESSAGING_SENDER_ID:"208752196071",REACT_APP_PROD_PROJECT_ID:"townhallproject-86312",REACT_APP_SMS_API:"https://localhost:8080"})["".concat(L,"_FIREBASE_API_KEY")],authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_TESTING_FIREBASE_API_KEY:"AIzaSyCJncx2G6bUnecl4H2VHSBTDfRRxg7H5Fs",REACT_APP_TESTING_FIREBASE_AUTH_DOMAIN:"townhalltestingsms.firebaseapp.com",REACT_APP_TESTING_DATABASE_URL:"https://townhalltestingsms.firebaseio.com",REACT_APP_TESTING_PROJECT_ID:"townhalltestingsms",REACT_APP_TESTING_STORAGE_BUCKET:"townhalltestingsms.appspot.com",REACT_APP_TESTING_MESSAGING_SENDER_ID:"86976100332",REACT_APP_PROD_FIREBASE_API_KEY:"AIzaSyCXyjAOvBKDEX5pckTwuI7LODWKNlL21gc",REACT_APP_PROD_FIREBASE_AUTH_DOMAIN:"townhallproject-86312.firebaseapp.com",REACT_APP_PROD_DATABASE_URL:"https://townhallproject-86312.firebaseio.com",REACT_APP_PROD_STORAGE_BUCKET:"townhallproject-86312.appspot.com",REACT_APP_PROD_MESSAGING_SENDER_ID:"208752196071",REACT_APP_PROD_PROJECT_ID:"townhallproject-86312",REACT_APP_SMS_API:"https://localhost:8080"})["".concat(L,"_FIREBASE_AUTH_DOMAIN")],databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_TESTING_FIREBASE_API_KEY:"AIzaSyCJncx2G6bUnecl4H2VHSBTDfRRxg7H5Fs",REACT_APP_TESTING_FIREBASE_AUTH_DOMAIN:"townhalltestingsms.firebaseapp.com",REACT_APP_TESTING_DATABASE_URL:"https://townhalltestingsms.firebaseio.com",REACT_APP_TESTING_PROJECT_ID:"townhalltestingsms",REACT_APP_TESTING_STORAGE_BUCKET:"townhalltestingsms.appspot.com",REACT_APP_TESTING_MESSAGING_SENDER_ID:"86976100332",REACT_APP_PROD_FIREBASE_API_KEY:"AIzaSyCXyjAOvBKDEX5pckTwuI7LODWKNlL21gc",REACT_APP_PROD_FIREBASE_AUTH_DOMAIN:"townhallproject-86312.firebaseapp.com",REACT_APP_PROD_DATABASE_URL:"https://townhallproject-86312.firebaseio.com",REACT_APP_PROD_STORAGE_BUCKET:"townhallproject-86312.appspot.com",REACT_APP_PROD_MESSAGING_SENDER_ID:"208752196071",REACT_APP_PROD_PROJECT_ID:"townhallproject-86312",REACT_APP_SMS_API:"https://localhost:8080"})["".concat(L,"_DATABASE_URL")],storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_TESTING_FIREBASE_API_KEY:"AIzaSyCJncx2G6bUnecl4H2VHSBTDfRRxg7H5Fs",REACT_APP_TESTING_FIREBASE_AUTH_DOMAIN:"townhalltestingsms.firebaseapp.com",REACT_APP_TESTING_DATABASE_URL:"https://townhalltestingsms.firebaseio.com",REACT_APP_TESTING_PROJECT_ID:"townhalltestingsms",REACT_APP_TESTING_STORAGE_BUCKET:"townhalltestingsms.appspot.com",REACT_APP_TESTING_MESSAGING_SENDER_ID:"86976100332",REACT_APP_PROD_FIREBASE_API_KEY:"AIzaSyCXyjAOvBKDEX5pckTwuI7LODWKNlL21gc",REACT_APP_PROD_FIREBASE_AUTH_DOMAIN:"townhallproject-86312.firebaseapp.com",REACT_APP_PROD_DATABASE_URL:"https://townhallproject-86312.firebaseio.com",REACT_APP_PROD_STORAGE_BUCKET:"townhallproject-86312.appspot.com",REACT_APP_PROD_MESSAGING_SENDER_ID:"208752196071",REACT_APP_PROD_PROJECT_ID:"townhallproject-86312",REACT_APP_SMS_API:"https://localhost:8080"})["".concat(L,"_STORAGE_BUCKET")],messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_TESTING_FIREBASE_API_KEY:"AIzaSyCJncx2G6bUnecl4H2VHSBTDfRRxg7H5Fs",REACT_APP_TESTING_FIREBASE_AUTH_DOMAIN:"townhalltestingsms.firebaseapp.com",REACT_APP_TESTING_DATABASE_URL:"https://townhalltestingsms.firebaseio.com",REACT_APP_TESTING_PROJECT_ID:"townhalltestingsms",REACT_APP_TESTING_STORAGE_BUCKET:"townhalltestingsms.appspot.com",REACT_APP_TESTING_MESSAGING_SENDER_ID:"86976100332",REACT_APP_PROD_FIREBASE_API_KEY:"AIzaSyCXyjAOvBKDEX5pckTwuI7LODWKNlL21gc",REACT_APP_PROD_FIREBASE_AUTH_DOMAIN:"townhallproject-86312.firebaseapp.com",REACT_APP_PROD_DATABASE_URL:"https://townhallproject-86312.firebaseio.com",REACT_APP_PROD_STORAGE_BUCKET:"townhallproject-86312.appspot.com",REACT_APP_PROD_MESSAGING_SENDER_ID:"208752196071",REACT_APP_PROD_PROJECT_ID:"townhallproject-86312",REACT_APP_SMS_API:"https://localhost:8080"})["".concat(L,"_MESSAGING_SENDER_ID")],projectId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_TESTING_FIREBASE_API_KEY:"AIzaSyCJncx2G6bUnecl4H2VHSBTDfRRxg7H5Fs",REACT_APP_TESTING_FIREBASE_AUTH_DOMAIN:"townhalltestingsms.firebaseapp.com",REACT_APP_TESTING_DATABASE_URL:"https://townhalltestingsms.firebaseio.com",REACT_APP_TESTING_PROJECT_ID:"townhalltestingsms",REACT_APP_TESTING_STORAGE_BUCKET:"townhalltestingsms.appspot.com",REACT_APP_TESTING_MESSAGING_SENDER_ID:"86976100332",REACT_APP_PROD_FIREBASE_API_KEY:"AIzaSyCXyjAOvBKDEX5pckTwuI7LODWKNlL21gc",REACT_APP_PROD_FIREBASE_AUTH_DOMAIN:"townhallproject-86312.firebaseapp.com",REACT_APP_PROD_DATABASE_URL:"https://townhallproject-86312.firebaseio.com",REACT_APP_PROD_STORAGE_BUCKET:"townhallproject-86312.appspot.com",REACT_APP_PROD_MESSAGING_SENDER_ID:"208752196071",REACT_APP_PROD_PROJECT_ID:"townhallproject-86312",REACT_APP_SMS_API:"https://localhost:8080"})["".concat(L,"_PROJECT_ID")]};B.a.initializeApp(U);var K=B.a.database(),F=B.a.firestore(),M=(B.a,{networks:y.reducers,selections:j.reducers}),H=[].concat(Object(P.a)(y.logics),Object(P.a)(j.logics)),W={firebaseUrl:"https://townhallproject-86312.firebaseio.com",firebasedb:K,firestore:F,httpClient:h.a},x=Object(R.a)(H,W),J=Object(S.a)(x);var z=a(6),q=a(57),V=a(111),Y=a.n(V),X=function t(e){Object(r.a)(this,t),this.type="Feature",this.geometry={coordinates:[Number(e.lng),Number(e.lat)],type:"Point"},this.properties={region:e.region,contact:e.contact||null,socials:e.social||null,state:e.state,title:e.title,form:e.form,category:e.category||"General",bbox:e.bbox}},Z=a(112),Q=a.n(Z),$=window.mapboxgl,tt=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(i.a)(this,Object(_.a)(e).call(this,t))).addClickListener=a.addClickListener.bind(Object(z.a)(a)),a.addLayer=a.addLayer.bind(Object(z.a)(a)),a.createFeatures=a.createFeatures.bind(Object(z.a)(a)),a.updateData=a.updateData.bind(Object(z.a)(a)),a.handleReset=a.handleReset.bind(Object(z.a)(a)),a}return Object(l.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.networks,e=this.createFeatures(t);this.initializeMap(e)}},{key:"componentWillReceiveProps",value:function(t){var e=t.networks;t.type;e.length,this.props.networks.length}},{key:"updateData",value:function(t,e){var a=this.createFeatures(t);this.map.getSource(e)&&this.map.getSource(e).setData(a)}},{key:"createFeatures",value:function(t){var e={features:[],type:"FeatureCollection"};return e.features=t.map((function(t){return new X(t)})),e}},{key:"addClickListener",value:function(){var t=this.props,e=t.stateName,a=t.setUsState;this.map.on("click",(function(){a({usState:e})}))}},{key:"addLayer",value:function(t){this.map.addLayer({id:nt,paint:{"circle-color":"#11b4da","circle-opacity":.5,"circle-radius":4,"circle-stroke-color":"#fff","circle-stroke-width":1},source:{data:t,type:"geojson"},type:"circle"},"district_interactive")}},{key:"handleReset",value:function(){this.removeHighlights()}},{key:"initializeMap",value:function(t){var e=this,a=this.props,o=a.bounds,n=a.mapId;$.accessToken="pk.eyJ1IjoidG93bmhhbGxwcm9qZWN0IiwiYSI6ImNqMnRwOG4wOTAwMnMycG1yMGZudHFxbWsifQ.FXyPo3-AD46IuWjjsGPJ3Q";this.map=new $.Map({container:n,doubleClickZoom:!1,dragPan:!1,scrollZoom:!1,style:"mapbox://styles/townhallproject/cjgr7qoqr00012ro4hnwlvsyp"}),this.map.fitBounds(o,{easeTo:{duration:0},linear:!0}),this.map.on("load",(function(){e.addClickListener(),e.addLayer(t)}))}},{key:"render",value:function(){var t=this.props,e=t.selectedState,a=t.mapId,o=Q()({hidden:e,inset:!0});return A.a.createElement(A.a.Fragment,null,A.a.createElement("div",{id:a,className:o,"data-bounds":this.props.bounds}))}}]),e}(A.a.Component);tt.defaultProps={selectedState:""};var et=tt,at=(a(168),a(169),window.mapboxgl),ot=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(i.a)(this,Object(_.a)(e).call(this,t))).filterDistrict=["any"],a.includedStates=["in","NAME"],a.addPopups=a.addPopups.bind(Object(z.a)(a)),a.addClickListener=a.addClickListener.bind(Object(z.a)(a)),a.addLayer=a.addLayer.bind(Object(z.a)(a)),a.createFeatures=a.createFeatures.bind(Object(z.a)(a)),a.updateData=a.updateData.bind(Object(z.a)(a)),a.focusMap=a.focusMap.bind(Object(z.a)(a)),a.handleReset=a.handleReset.bind(Object(z.a)(a)),a.filterForStateInsets=a.filterForStateInsets.bind(Object(z.a)(a)),a.insetOnClickEvent=a.insetOnClickEvent.bind(Object(z.a)(a)),a.state={alaskanetworks:Object(q.filter)(a.props.networks,{state:"AK"}),hawaiinetworks:Object(q.filter)(a.props.networks,{state:"HI"}),popoverColor:"popover-general-icon"},a}return Object(l.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.networks,e=this.createFeatures(t);this.initializeMap(e)}},{key:"componentDidUpdate",value:function(t){return t.selectedState?this.focusMap():this.map.fitBounds([[-128.8,23.6],[-65.4,50.2]])}},{key:"filterForStateInsets",value:function(t){var e=Object(q.filter)(t,{state:"AK"}),a=Object(q.filter)(t,{state:"HI"});this.setState({alaskanetworks:e,hawaiinetworks:a})}},{key:"insetOnClickEvent",value:function(t){this.setState({inset:!1});var e=t.target.parentNode.parentNode.getAttribute("data-bounds").split(","),a=[Number(e[0]),Number(e[1])],o=[Number(e[2]),Number(e[3])],n=a.concat(o);this.map.fitBounds(n)}},{key:"focusMap",value:function(t){if(t){var e=window.innerHeight,a=window.innerWidth,o=Y.a.viewport(t,[a/2,e/2]);o.zoom<2.5?o.zoom=2.5:o.zoom-=.5,this.map.flyTo(o)}}},{key:"updateData",value:function(t,e){var a=this.createFeatures(t);this.map.fitBounds([[-128.8,23.6],[-65.4,50.2]]),this.map.getSource(e)&&this.map.getSource(e).setData(a)}},{key:"createFeatures",value:function(t){var e={features:[],type:"FeatureCollection"};return e.features=t.map((function(t){return new X(t)})),e}},{key:"addPopups",value:function(t){var e=this,a=this.map,o=new at.Popup({closeButton:!0,closeOnClick:!0});a.on("mousemove",(function(n){var s=a.queryRenderedFeatures(n.point,{layers:[t]});if(a.getCanvas().style.cursor=s.length?"pointer":"",s.length){var r=s[0],c=r.properties;e.setState({popoverColor:"popover-".concat(r.properties.category)});var i=c.form?"<a href=".concat(c.form,">Link to form</a>"):"<a href=".concat(c.socials,">Link to group</a>");return o.setLngLat(r.geometry.coordinates).setHTML("\n            <h4>".concat(c.title,"</h4>\n            <div>").concat(i,"</div>")).addTo(a)}}))}},{key:"addClickListener",value:function(){var t=this.map;t.on("click",(function(e){var a=t.queryRenderedFeatures(e.point,{layers:["networks-dots"]});if(a.length>0){var o=JSON.parse(a[0].properties.bbox);console.log(o),t.fitBounds(o)}}))}},{key:"addLayer",value:function(t){this.map.addLayer({id:"networks-dots",paint:{"circle-color":"#11b4da","circle-opacity":.5,"circle-radius":4,"circle-stroke-color":"#fff","circle-stroke-width":1},source:{data:t,type:"geojson"},type:"circle"},"district_interactive")}},{key:"handleReset",value:function(){this.setState({inset:!0})}},{key:"makeZoomToNationalButton",value:function(){document.querySelector(".mapboxgl-ctrl-compass").remove(),document.querySelector(".mapboxgl-ctrl-usa")&&document.querySelector(".mapboxgl-ctrl-usa").remove();var t=document.createElement("button");t.className="mapboxgl-ctrl-icon mapboxgl-ctrl-usa",t.innerHTML='<span class="usa-icon"></span>',t.addEventListener("click",this.handleReset),document.querySelector(".mapboxgl-ctrl-group").appendChild(t)}},{key:"initializeMap",value:function(t){var e=this;at.accessToken="pk.eyJ1IjoidG93bmhhbGxwcm9qZWN0IiwiYSI6ImNqMnRwOG4wOTAwMnMycG1yMGZudHFxbWsifQ.FXyPo3-AD46IuWjjsGPJ3Q";this.map=new at.Map({container:"map",style:"mapbox://styles/townhallproject/cjgr7qoqr00012ro4hnwlvsyp"}),this.map.addControl(new at.NavigationControl),this.map.scrollZoom.disable(),this.map.dragRotate.disable(),this.map.touchZoomRotate.disableRotation(),this.makeZoomToNationalButton(),this.map.on("load",(function(){e.map.fitBounds([[-128.8,23.6],[-65.4,50.2]]),e.addClickListener(),e.addLayer(t),e.addPopups("networks-dots")}))}},{key:"render",value:function(){var t=this.props,e=t.center,a=t.selectedState,o=t.resetSelections,n=t.searchByDistrict,s=t.setLatLng,r=t.setUsState;return A.a.createElement(A.a.Fragment,null,A.a.createElement("div",{id:"map",className:this.state.popoverColor},A.a.createElement("div",{className:"map-overlay",id:"legend"},A.a.createElement(et,{networks:this.state.alaskanetworks,center:e,stateName:"AK",selectedState:a,resetSelections:o,setLatLng:s,setUsState:r,mapId:"map-overlay-alaska",bounds:[[-170.15625,51.72702815704774],[-127.61718749999999,71.85622888185527]]}),A.a.createElement(et,{networks:this.state.hawaiinetworks,stateName:"HI",center:e,selectedState:a,resetSelections:o,searchByDistrict:n,setLatLng:s,setUsState:r,mapId:"map-overlay-hawaii",bounds:[[-161.03759765625,18.542116654448996],[-154.22607421875,22.573438264572406]]}))))}}]),e}(A.a.Component);ot.defaultProps={center:{},distance:50,district:NaN,filterByValue:{},refcode:""};var nt=ot,st=function(t){function e(){return Object(r.a)(this,e),Object(i.a)(this,Object(_.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){(0,this.props.requestNetworks)()}},{key:"render",value:function(){var t=this.props.allNetworks;return t.length?A.a.createElement("div",{className:"main-container"},A.a.createElement(nt,{networks:t})):null}}]),e}(A.a.Component),rt=Object(p.b)((function(t){return{allNetworks:y.selectors.getAllNetworks(t)}}),(function(t){return{requestNetworks:function(){return t(y.actions.requestNetworks())}}}))(st),ct=(a(170),Object(S.d)(Object(S.c)(M),J)),it=function(t){function e(){return Object(r.a)(this,e),Object(i.a)(this,Object(_.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return A.a.createElement(p.a,{store:ct},A.a.createElement(rt,null))}}]),e}(E.Component);u.a.render(A.a.createElement(it,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[113,1,2]]]);
//# sourceMappingURL=main.1ef07697.chunk.js.map