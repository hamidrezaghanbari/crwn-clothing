(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{62:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(2),r=n(35),a=n.n(r),A=n(19),s=n(9),o=n(20),l=(n(59),n(5)),d="SET_CURRENT_USER",u={currentUser:null},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(l.a)(Object(l.a)({},e),{},{currentUser:t.payload});default:return e}},j="TOGGLE_CART_HIDDEN",h="ADD_ITEM",p="REMOVE_ITEM",m="CLEAR_ITEM_FROM_CART",O=n(49),f=function(e,t){return e.find((function(e){return e.id==t.id}))?e.map((function(e){return e.id==t.id?Object(l.a)(Object(l.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(O.a)(e),[Object(l.a)(Object(l.a)({},t),{},{quantity:1})])},g=function(e,t){var n=e.find((function(e){return e.id==t.id}));return 1==n.quantity?e.filter((function(e){return e.id!==n.id})):e.map((function(e){return e.id==n.id?Object(l.a)(Object(l.a)({},e),{},{quantity:e.quantity-1}):e}))},x={hidden:!1,cartItems:[]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(l.a)(Object(l.a)({},e),{},{hidden:!e.hidden});case h:return Object(l.a)(Object(l.a)({},e),{},{cartItems:f(e.cartItems,t.payload)});case p:return Object(l.a)(Object(l.a)({},e),{},{cartItems:g(e.cartItems,t.payload)});case m:return Object(l.a)(Object(l.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},k=n(37),w=n(45),y={sections:[{id:1,title:"hats",linkUrl:"shop/hats",imageUrl:"https://d1ekp87k3th824.cloudfront.net/media/catalog/product/cache/24b85352f4d2f651c81fec087949b4a7/e/p/ep_microfiberbl_1.jpg"},{id:2,title:"jackets",linkUrl:"shop/jackets",imageUrl:"https://d1ekp87k3th824.cloudfront.net/media/catalog/product/cache/24b85352f4d2f651c81fec087949b4a7/e/p/ep_microfiberbl_1.jpg"},{id:3,title:"sneakers",linkUrl:"shop/sneakers",imageUrl:"https://d1ekp87k3th824.cloudfront.net/media/catalog/product/cache/24b85352f4d2f651c81fec087949b4a7/e/p/ep_microfiberbl_1.jpg"},{id:4,title:"mens",linkUrl:"shop/mens",imageUrl:"https://d1ekp87k3th824.cloudfront.net/media/catalog/product/cache/24b85352f4d2f651c81fec087949b4a7/e/p/ep_microfiberbl_1.jpg"},{id:5,title:"women",linkUrl:"shop/women",imageUrl:"https://d1ekp87k3th824.cloudfront.net/media/catalog/product/cache/24b85352f4d2f651c81fec087949b4a7/e/p/ep_microfiberbl_1.jpg"}]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;return t.type,e},U={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},jackets:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},sneakers:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;return t.type,e},B={key:"root",storage:n.n(w).a,whitelist:["cart"]},I=Object(o.c)({user:b,cart:v,directory:N,shop:C}),S=Object(k.a)(B,I);var G=Object(o.d)(S,o.a.apply(void 0,[])),E=Object(k.b)(G),P=n(46),T=(n(62),n(17)),J=n.n(T),W=n(22),H=n(27),F=n(28),R=n(30),M=n(29),V=(n(64),n(65),function(e){var t=e.title,n=e.subTitle,i=void 0===n?"SHOP NOW":n,r=e.imageUrl,a=e.linkUrl;return Object(c.jsx)("div",{className:"item",children:Object(c.jsx)("div",{className:"item-background-image",style:{backgroundImage:"url(".concat(r,")")},children:Object(c.jsxs)("div",{className:"item-body",children:[Object(c.jsx)(A.b,{to:a,className:"title",children:t.toUpperCase()}),Object(c.jsx)("span",{className:"subtitle",children:i})]})})})}),D=(n(67),n(7)),z=Object(D.a)([function(e){return e.directory}],(function(e){return e.sections})),L=Object(D.b)({sections:z}),Q=Object(s.b)(L)((function(e){var t=e.sections;return Object(c.jsxs)("div",{className:"body",children:[Object(c.jsx)("div",{className:"row-one",children:t.filter((function(e,t){return t<3})).map((function(e,t){var n=e.title,i=e.linkUrl,r=e.imageUrl;return Object(c.jsx)(V,{title:n,linkUrl:i,imageUrl:r},t)}))}),Object(c.jsx)("div",{className:"row-two",children:t.filter((function(e,t){return 3<e.id})).map((function(e,t){var n=e.title,i=e.linkUrl,r=e.imageUrl;return Object(c.jsx)(V,{title:n,linkUrl:i,imageUrl:r},t)}))})]})})),Y=function(){return Object(c.jsx)("div",{className:"home",children:Object(c.jsx)(Q,{})})},q=n(10),X=(n(68),n(31)),K=(n(69),n(47)),Z=n.n(K),_=Object(D.a)([function(e){return e.shop}],(function(e){return e.collections})),$=Object(D.a)([_],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),ee=Z()((function(e){return Object(D.a)([_],(function(t){return t[e]}))})),te=(n(70),n(71),function(e){var t=e.children,n=e.isGoogleButton,i=e.inverted,r=Object(X.a)(e,["children","isGoogleButton","inverted"]);return Object(c.jsx)("button",Object(l.a)(Object(l.a)({className:"".concat(i?"inverted":""," ").concat(n?"google-button":""," form-button")},r),{},{children:t}))}),ne=function(){return{type:j}},ce=function(e){return{type:h,payload:e}},ie=Object(s.b)(null,(function(e){return{addItem:function(t){return e(ce(t))}}}))((function(e){var t=e.item,n=e.addItem,i=t.imageUrl,r=t.name,a=t.price;return Object(c.jsxs)("div",{className:"collection-item",children:[Object(c.jsx)("div",{style:{backgroundImage:"url(".concat(i,")")},className:"collection-item-image-holder",children:Object(c.jsx)("div",{className:"add-to-card-section",children:Object(c.jsx)(te,{onClick:function(){return n(t)},children:"Add to Cart"})})}),Object(c.jsxs)("div",{className:"collection-item-detail",children:[Object(c.jsx)("p",{children:r}),Object(c.jsxs)("p",{children:["$",a]})]})]})})),re=(n(72),function(e){var t=e.title,n=e.items;return Object(c.jsxs)("div",{className:"collection-preview",children:[Object(c.jsx)("h1",{children:t}),Object(c.jsx)("div",{className:"collection-preview-container",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(c.jsx)(ie,{item:e},e.id)}))})]})}),ae=Object(D.b)({collections:$}),Ae=Object(s.b)(ae)((function(e){var t=e.collections;return Object(c.jsx)("div",{children:t.map((function(e){var t=e.id,n=Object(X.a)(e,["id"]);return Object(c.jsx)(re,Object(l.a)({},n),t)}))})})),se=(n(73),Object(s.b)((function(e,t){return{collection:ee(t.match.params.directory)(e)}}))((function(e){var t=e.match.params,n=e.collection,i=n.title,r=n.items;return Object(c.jsxs)("div",{children:[t.directory,Object(c.jsx)("h2",{children:i}),Object(c.jsx)("div",{className:"collection-preview-container",children:r.map((function(e){return Object(c.jsx)(ie,{item:e},e.id)}))})]})}))),oe=function(e){var t=e.match;return Object(c.jsxs)("div",{className:"shop-page",children:[Object(c.jsx)(q.b,{exact:!0,path:"".concat(t.path),component:Ae}),Object(c.jsx)(q.b,{exact:!0,path:"".concat(t.path,"/:directory"),component:se})]})},le=(n(74),Object(D.a)([function(e){return e.user}],(function(e){return e.currentUser}))),de=function(e){return e.cart},ue=Object(D.a)([de],(function(e){return e.hidden})),be=Object(D.a)([de],(function(e){return e.cartItems})),je=Object(D.a)([be],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),he=Object(D.a)([be],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),pe=n(32),me=(n(89),n(75),function(){var e=Object(W.a)(J.a.mark((function e(t,n){var c,i,r,a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return c=fe.doc("users/".concat(t.uid)),e.next=5,c.get();case 5:if(e.sent.exists){e.next=17;break}return i=t.displayName,r=t.email,a=new Date,e.prev=9,e.next=12,c.set(Object(l.a)({displayName:i,email:r,createdAt:a},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",c);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());pe.a.initializeApp({apiKey:"AIzaSyA5FmJ528XCNAPTdYjGWpWkY94fyX979cU",authDomain:"crwn-db-9e53d.firebaseapp.com",projectId:"crwn-db-9e53d",storageBucket:"crwn-db-9e53d.appspot.com",messagingSenderId:"666051388819",appId:"1:666051388819:web:6a3fca8abd7f26ab66b466",measurementId:"G-M67K5HLGW9"});var Oe=pe.a.auth(),fe=pe.a.firestore(),ge=new pe.a.auth.GoogleAuthProvider;ge.setCustomParameters({prompt:"select_account"});var xe=function(){return Oe.signInWithPopup(ge).then((function(e){})).catch((function(e){}))},ve=(pe.a,n(77),Object(D.b)({cartCount:je})),ke=Object(s.b)(ve,(function(e){return{toggleCartHidden:function(){return e(ne())}}}))((function(e){var t=e.toggleCartHidden,n=e.cartCount;return Object(c.jsxs)("div",{className:"cart-icon-holder",onClick:t,children:[Object(c.jsx)("span",{children:Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA/AAAAPwBMDxhdwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALDSURBVFiFvdfPix1FEAfwT+0uJhh3QYNBIqgQf9w8igRNjKCigSiCQVBQAuKf4EkkIl5DUBFBxVMOSkRQEfRiflxkyUkIKkFRsyZ6cJMYDMqa8tD99O3b92bmbd5uQdM9NVXV365fPRPYg/sVOoOPMvNb60hv42wdl5DYn5nWYyx/YBMO4h/cux4Aom78H0XEDH7C8czcu9bunxlkZOZSRBzGvojYjr+qR5bqPNY6B084QCs8ABGxA0dWfayBMzUAnR8FYAqn8T1eUjzVP6aH8Lq+7717DJdGZyev4wI2rEn2l5J/d6rBdR9gFg+N6/M2iojbcQOONQE4pvSGJyYNADt6e4wEkJmX8SH2RMSGNQBwJjNPNXmAEoY5PDhhADtxHNoAHMWvJhiGiLgZNykhbgYwEIarJoThaVzG571N2spll9JMdl9h2U1hN/7AGyPvgkGKiGn8gs8y89kGuVlsxY0Dc2+9DVtwAg9k5iIjWvEQ42/iSTzXsMnsENWLFfwCfsR7mbmsxXcFsA/v9LGWlB7RM74wbJ2ZF9psr7gNR9Aj1fCjdf6tJugVU1cAt+J0Zp6YxKb91NYHenQKt0TE3KQBdM2BnfgCizhQ53EpcSgzLy7ndq/jhzGvfEjkKsczrd+EHbxxNVbTFTMzz6+w1zEE09jUpawG9KYwl5nnRsk0JmFEbIyIgziPcxHxVUTc2QVwROxXcmUxIk5GxH1DhVvi/prSdN7Hy8p34llsbtF7QYn5J3hRqaI/cdsK2QYjM8qf0qE+3vZq+PkWAD/gaN/zNuUGfGVQtikE12AjTvbxvquGtjS4P3A9vuljLyj3wuZxQ/A1fsZduBZvVQ/c06L3qZI3u+pBXq16T3UOQTV0N36vyn/X+UCHnnGHciH16x1Wq26sPhARW/F4dd+RzPyyUeF/veuwV7mq5zPz42Fy/wI/HU7U3ST97QAAAABJRU5ErkJggg==",alt:""})}),Object(c.jsx)("span",{className:"cart-count",children:n})]})})),we=(n(78),n(23)),ye=n(24),Ne=(n(81),function(e){var t=e.item,n=t.name,i=t.price,r=t.imageUrl,a=t.quantity;return Object(c.jsxs)("li",{children:[Object(c.jsxs)("div",{className:"cart-item-detail",children:[Object(c.jsx)("span",{children:n}),Object(c.jsxs)("p",{children:[a," * $",i]})]}),Object(c.jsx)("img",{width:"50",height:"50",src:r,alt:""})]})}),Ue=Object(D.b)({cartItems:be}),Ce=Object(q.g)(Object(s.b)(Ue)((function(e){var t=e.cartItems,n=e.history,i=e.dispatch;return Object(c.jsxs)("div",{className:"cart-dropdown",children:[Object(c.jsx)("span",{children:Object(c.jsx)(we.a,{onClick:function(){i(ne())},className:"cart-close",icon:ye.c})}),Object(c.jsx)("ul",{className:"cart-dropdown-list",children:t.length?t.map((function(e){return Object(c.jsx)(Ne,{item:e},e.id)})):Object(c.jsx)("p",{className:"cart-empty-text",children:"there is nothing in your bag!!"})}),Object(c.jsx)(te,{onClick:function(){n.push("/checkout"),i(ne())},inverted:!0,children:"GO TO CHECKOUT"})]})}))),Be=Object(D.b)({currentUser:le,hidden:ue}),Ie=Object(s.b)(Be)((function(e){var t=e.currentUser,n=e.hidden;return Object(c.jsxs)("div",{className:"menu",children:[Object(c.jsxs)("nav",{children:[Object(c.jsx)("div",{className:"menu-holder",children:Object(c.jsx)("img",{id:"menu-img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAmjAAAJowFqjuSSAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAADNQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8YBMDAAAABB0Uk5TAAwOGx8nLC0wOEBjj5Cw0NHJaf0AAABaSURBVFjD7dZLDoAgDEXRiigfRdj/agmOddCUEbl3AWfUJk9SM5UEAGAAoZoKQot2ZkXbB/BoLjECAPwAV1G087n05ospzz4AmAO4bMrxy6t2a8b2wT4AmAJ0AM2KDYQjHR0AAAAASUVORK5CYII=",alt:""})}),Object(c.jsxs)("ul",{className:"menu-list",children:[Object(c.jsx)("li",{children:Object(c.jsx)(A.b,{to:"/shop",children:"SHOP"})}),t?Object(c.jsx)("li",{onClick:function(){return Oe.signOut()},children:Object(c.jsx)("span",{children:"SIGN OUT"})}):Object(c.jsx)("li",{children:Object(c.jsx)(A.b,{to:"/sign-in-sign-up",children:"SIGN IN / SIGN UP"})}),Object(c.jsx)("li",{children:Object(c.jsx)(ke,{})})]})]}),n?Object(c.jsx)(Ce,{}):null,Object(c.jsx)("div",{className:"logo-holder",children:Object(c.jsx)(A.b,{to:"/",children:Object(c.jsx)("img",{id:"logo-img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAG8AAABvAFoqEWdAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAWJQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmVTNRgAAAHV0Uk5TAAECBQoLDREUFhcYGhwdHyEiIyYpKi0uMTI0Njc5O0BBQ0ZUVl1eZWhqa29wcXJzdXd4enx+f4CFh4mKi5CTlJaYmpucnaGmqKmqq62vtLW2t7y9yszN0NPV3eHi5OXm5+jp6uvt7u/w8fP09fb3+fr7/P3+jn5hiAAAAg9JREFUWMOd1elXEnEUxvEHWmxM3EIoNTPby6xsscUEM42gaCfNNBhLEXDQwef/74XDYZvt3vvqzjnz+R7Ob37nACjm/MtvZjG/cEFjAUSfVslqlTyYjagCaVaej0SiY3MVftIUHnFz9GQbLnBW7s/uW6PNfbhyID+He1xsPcxxwe/dvqV1m+5TzAwBwBjzPn5ii9wtuY/N8hCAaLXo7SfLzE57nXLsHTMATln7fn7e5+fF7CKAcW4oPVAigLvMav1J4COvaz1KBG6xeFrix3O/fuenWoGpOq9J/J0jNmweP2wGLpl8I/HJeu3VSP/9WuOKE6hzOSLwWOVrAHjC9zhz9dlXm/9uyM7vJ+N4++fHF9a+H5Ek+4XnX2ASqRpJcvPD45m/FHqsMAXAWObnc85XkHnELSuVjD2wG5fhGfC/Pzctkjy+Dc9A0P2LrxQ2MhfhGQhxf9umNyDzvQGh7wlIfXdA7LsCct8ZUPiOgMa3B1S+LaDzrcDgnspHdm1ny7X/WYafaa47m3loaAJZLjnbtj2g8PPc6nPWNaY1vjzR3A2TLxR+svWU2JEWOr280O2lhV4vK7h5ScHdhy94+bAFbx+u4OfDFPx9cCHIBxWCvX8hjPcrhPPehbDeqxDeuxck3q0g870Fqe8uyH1nQePbCzrfKmg9kNhhesBYVHsgYdI+5J7aA8batpkbDHztP7Fjxe2/Xj+wAAAAAElFTkSuQmCC",alt:""})})})]})})),Se=(n(82),n(83),Object(s.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:m,payload:e}}(t))},addItem:function(t){return e(ce(t))},removeItem:function(t){return e(function(e){return{type:p,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,i=e.addItem,r=e.removeItem,a=t.name,A=t.imageUrl,s=t.price,o=t.quantity;return Object(c.jsxs)("tr",{className:"checkout-table-row",children:[Object(c.jsx)("td",{children:Object(c.jsx)("img",{width:"70",height:"70",src:A})}),Object(c.jsx)("td",{children:a}),Object(c.jsxs)("td",{children:[Object(c.jsx)(we.a,{onClick:function(){return r(t)},icon:ye.a}),Object(c.jsxs)("span",{children:["  ",o,"  "]}),Object(c.jsx)(we.a,{onClick:function(){return i(t)},icon:ye.b})]}),Object(c.jsxs)("td",{children:["$",s]}),Object(c.jsx)("td",{children:Object(c.jsx)(we.a,{onClick:function(){return n(t)},icon:ye.d})})]})}))),Ge=n(48),Ee=n.n(Ge),Pe=function(e){var t=e.price,n=100*t;return Object(c.jsx)(Ee.a,{label:"pay now",name:"crwn shop",billingAddress:!0,shippingAddress:!0,description:"your total is $".concat(t),amount:n,panelLabel:"pay now",token:function(e){console.log(e,"token"),alert("payment is successful")},stripeKey:"pk_test_51IE6lxL3HnzAxrjxpLObBxxFjS6kxO41mDLrJJmngzX18iwIxz7WQZPy5fgNZ34EBYYYdbJkbrE0hdKKOeWG2hHx0062Zec3wr"})},Te=Object(D.b)({cartItems:be,cartPrice:he}),Je=Object(s.b)(Te)((function(e){var t=e.cartItems,n=e.cartPrice;return Object(c.jsxs)("div",{className:"checkout-page",children:[Object(c.jsx)("h2",{children:"checkout your cart"}),Object(c.jsxs)("table",{className:"checkout-table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{className:"checkout-table-header",children:[Object(c.jsx)("th",{children:"Product"}),Object(c.jsx)("th",{children:"description"}),Object(c.jsx)("th",{children:"quantity"}),Object(c.jsx)("th",{children:"price"}),Object(c.jsx)("th",{children:"remove"})]})}),Object(c.jsxs)("tbody",{children:[t.length?t.map((function(e,t){return Object(c.jsx)(Se,{cartItem:e},t)})):Object(c.jsx)("tr",{children:Object(c.jsx)("td",{colSpan:"5",className:"empty-table-text",children:"there is no item in your cart"})}),Object(c.jsxs)("tr",{className:"checkout-table-footer",children:[Object(c.jsx)("td",{}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{children:Object(c.jsxs)("b",{children:["TOTAL: $",n]})})]})]})]}),Object(c.jsx)(Pe,{price:n})]})})),We=(n(84),n(26)),He=(n(85),function(e){var t=e.handleChange,n=e.label,i=Object(X.a)(e,["handleChange","label"]);return Object(c.jsxs)("div",{className:"input-group",children:[n?Object(c.jsx)("label",{className:"".concat(i.value.length?"shrink":""," form-input-label"),children:n}):null,Object(c.jsx)("input",Object(l.a)({className:"form-input",onChange:t},i))]})}),Fe=(n(86),function(e){Object(R.a)(n,e);var t=Object(M.a)(n);function n(e){var c;return Object(H.a)(this,n),(c=t.call(this,e)).handleSubmit=function(){var e=Object(W.a)(J.a.mark((function e(t){var n,i,r;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=c.state,i=n.email,r=n.password,e.prev=2,e.next=5,Oe.signInWithEmailAndPassword(i,r);case 5:c.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),c.handleChange=function(e){var t=e.target,n=t.name,i=t.value;c.setState(Object(We.a)({},n,i))},c.state={email:"",password:""},c}return Object(F.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"auth-form",children:[Object(c.jsx)("h1",{children:"SIGN IN"}),Object(c.jsx)("p",{children:"sign to my website to buy cloth"}),Object(c.jsxs)("form",{onSubmit:this.handleSubmit,className:"form",children:[Object(c.jsx)(He,{value:this.state.email,onChange:this.handleChange,placeholder:"email",name:"email",type:"email"}),Object(c.jsx)(He,{value:this.state.password,onChange:this.handleChange,placeholder:"password",name:"password",type:"password"}),Object(c.jsx)(te,{type:"submit",children:"SIGN IN"}),Object(c.jsx)(te,{type:"button",isGoogleButton:!0,onClick:xe,children:"SIGN IN WITH GOOGLE"})]})]})}}]),n}(i.Component)),Re=(n(87),function(e){Object(R.a)(n,e);var t=Object(M.a)(n);function n(e){var c;return Object(H.a)(this,n),(c=t.call(this,e)).handleSubmit=function(){var e=Object(W.a)(J.a.mark((function e(t){var n,i;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c.state.password===c.state.confirmPassword){e.next=4;break}return alert("password is dont match to confirm password"),e.abrupt("return");case 4:return e.prev=4,e.next=7,Oe.createUserWithEmailAndPassword(c.state.email,c.state.password);case 7:return n=e.sent,i=n.user,e.next=11,me(i,{displayName:c.state.displayName});case 11:c.setState({displayName:"",email:"",password:"",confirmPassword:""}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}(),c.handleChange=function(e){var t=e.target,n=t.name,i=t.value;c.setState(Object(We.a)({},n,i))},c.state={displayName:"",email:"",password:"",confirmPassword:""},c}return Object(F.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"auth-form",children:[Object(c.jsx)("h1",{children:"SIGN UP"}),Object(c.jsx)("p",{children:"to be part of us sign up in website"}),Object(c.jsxs)("form",{onSubmit:this.handleSubmit,className:"form",children:[Object(c.jsx)(He,{value:this.state.displayName,onChange:this.handleChange,placeholder:"display Name",name:"displayName",type:"text"}),Object(c.jsx)(He,{value:this.state.email,onChange:this.handleChange,placeholder:"email",name:"email",type:"email"}),Object(c.jsx)(He,{value:this.state.password,onChange:this.handleChange,placeholder:"password",name:"password",type:"password"}),Object(c.jsx)(He,{value:this.state.confirmPassword,onChange:this.handleChange,placeholder:"confirm password",name:"confirmPassword",type:"password"}),Object(c.jsx)(te,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(i.Component)),Me=function(){return Object(c.jsx)("div",{className:"auth",children:Object(c.jsxs)("div",{className:"auth-container",children:[Object(c.jsx)(Fe,{}),Object(c.jsx)(Re,{})]})})},Ve=function(e){Object(R.a)(n,e);var t=Object(M.a)(n);function n(){var e;Object(H.a)(this,n);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).unsubscribeFromAuth=null,e}return Object(F.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=Oe.onAuthStateChanged(function(){var t=Object(W.a)(J.a.mark((function t(n){return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return t.next=3,me(n);case 3:t.sent.onSnapshot((function(t){e(Object(l.a)({id:t.id},t.data()))})),t.next=8;break;case 7:e(n);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{children:[Object(c.jsx)(Ie,{}),Object(c.jsxs)(q.d,{children:[Object(c.jsx)(q.b,{exact:!0,path:"/",component:Y}),Object(c.jsx)(q.b,{path:"/shop",component:oe}),Object(c.jsx)(q.b,{exact:!0,path:"/checkout",component:Je}),Object(c.jsx)(q.b,{exact:!0,path:"/sign-in-sign-up",render:function(){return e.props.currentUser?Object(c.jsx)(q.a,{to:"/"}):Object(c.jsx)(Me,{})}})]})]})}}]),n}(i.Component),De=Object(D.b)({currentUser:le}),ze=Object(s.b)(De,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:d,payload:e}}(t))}}}))(Ve);a.a.render(Object(c.jsx)(s.a,{store:G,children:Object(c.jsx)(A.a,{children:Object(c.jsx)(P.a,{persistor:E,children:Object(c.jsx)(ze,{})})})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.50ad33e7.chunk.js.map