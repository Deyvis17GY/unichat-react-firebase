(this["webpackJsonpunichat-template"]=this["webpackJsonpunichat-template"]||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(23),o=a.n(r),i=(a(61),a(24)),u=a(4),l=a(11),s=a.n(l),p=a(15),m=a(19),h=a(14),b=a.n(h),d=(a(65),b.a.initializeApp({apiKey:"AIzaSyA1GRgKFYB5wHdTYs3LQ8NohGCecrsRyWk",authDomain:"unichat-4b23b.firebaseapp.com",projectId:"unichat-4b23b",storageBucket:"unichat-4b23b.appspot.com",messagingSenderId:"130891802696",appId:"1:130891802696:web:a63a0353fcc4f7868b507d"}).auth()),f=c.a.createContext(),g=function(e){var t=e.children,a=Object(n.useState)(!0),r=Object(m.a)(a,2),o=r[0],i=r[1],l=Object(n.useState)(null),s=Object(m.a)(l,2),p=s[0],h=s[1],b=Object(u.f)();Object(n.useEffect)((function(){d.onAuthStateChanged((function(e){h(e),i(!1),e?b.push("/chats"):b.push("/")}))}),[p,b]);var g={user:p};return c.a.createElement(f.Provider,{value:g},!o&&t)},v=a(54),E=a(3),j=a.n(E),O=function(){var e=Object(u.f)(),t=Object(n.useContext)(f).user,a=Object(n.useState)(!0),r=Object(m.a)(a,2),o=r[0],i=r[1],l=function(){var t=Object(p.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("logout"),t.next=3,d.signOut();case 3:e.push("/");case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var e=Object(p.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.blob();case 5:return n=e.sent,e.abrupt("return",new File([n],"userPhoto.jpg",{type:"image/jpeg"}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){t?j.a.get("https://api.chatengine.io/users/me",{headers:{"project-id":"58efb6cf-be1a-4d09-b072-539593d8dbbb","user-name":t.email,"user-secret":t.uid}}).then((function(e){console.log("Respuesta",e),i(!1)})).catch((function(){var e=new FormData;e.append("email",t.email),e.append("username",t.email),e.append("secret",t.uid),h(t.photoURL).then((function(t){e.append("photo",t,t.name),j.a.post("https://api.chatengine.io/users/",e,{headers:{"private-key":"773015e7-3421-4211-babf-02d46876e3b1"}}).then((function(e){console.log("avatar",e),i(!1)})).catch((function(e){console.log(e)}))}))})):e.push("/")}),[t,e]),!t||o?"Loading...":c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"chats-page"},c.a.createElement("div",{className:"nav-bar"},c.a.createElement("div",{className:"logo-tab"},"Unichat"),c.a.createElement("div",{onClick:l,className:"logout-tab"},"Logout")),c.a.createElement(v.d,{height:"calc(100vh - 66px)",projectID:"58efb6cf-be1a-4d09-b072-539593d8dbbb",userName:t.email,userSecret:t.uid})))},k=a(116),w=a(117),x=function(){return c.a.createElement("div",{id:"login-page"},c.a.createElement("div",{id:"login-card"},c.a.createElement("h2",null,"Welcome to Unichat"),c.a.createElement("div",{className:"login-button google",onClick:function(){return d.signInWithRedirect(new b.a.auth.GoogleAuthProvider)}},c.a.createElement(k.a,null)," Sign In With Google"),c.a.createElement("br",null)," ",c.a.createElement("br",null),c.a.createElement("div",{className:"login-button facebook",onClick:function(){return d.signInWithRedirect(new b.a.auth.FacebookAuthProvider)}},c.a.createElement(w.a,null)," Sign In With Facebook")))};var y=function(){return c.a.createElement("div",{style:{fontFamily:"Avenir"}},c.a.createElement(i.a,null,c.a.createElement(g,null,c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/chats",component:O}),c.a.createElement(u.a,{path:"/",exact:!0,component:x}),c.a.createElement(u.a,{path:"/unichat-react-firebase",exact:!0,component:x})))))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root"))},56:function(e,t,a){e.exports=a(114)},61:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.8188e23b.chunk.js.map