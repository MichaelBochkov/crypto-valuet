(this["webpackJsonpcrypto-valuet"]=this["webpackJsonpcrypto-valuet"]||[]).push([[0],{168:function(e){e.exports=JSON.parse('{"spendings":[{"id":1,"date":"01.01.2021","spending":240},{"id":2,"date":"02.01.2021","spending":214},{"id":3,"date":"03.01.2021","spending":152},{"id":4,"date":"04.01.2021","spending":632},{"id":5,"date":"05.01.2021","spending":0},{"id":6,"date":"06.01.2021","spending":13},{"id":7,"date":"07.01.2021","spending":63},{"id":8,"date":"08.01.2021","spending":63},{"id":9,"date":"09.01.2021","spending":623},{"id":10,"date":"10.01.2021","spending":125},{"id":11,"date":"11.01.2021","spending":1363},{"id":12,"date":"12.01.2021","spending":463},{"id":13,"date":"13.01.2021","spending":753},{"id":14,"date":"14.01.2021","spending":864},{"id":15,"date":"15.01.2021","spending":245},{"id":16,"date":"16.01.2021","spending":842},{"id":17,"date":"17.01.2021","spending":567},{"id":18,"date":"18.01.2021","spending":84},{"id":19,"date":"19.01.2021","spending":46},{"id":20,"date":"20.01.2021","spending":256},{"id":21,"date":"21.01.2021","spending":853},{"id":22,"date":"22.01.2021","spending":184},{"id":23,"date":"23.01.2021","spending":83},{"id":24,"date":"24.01.2021","spending":25},{"id":25,"date":"25.01.2021","spending":863},{"id":26,"date":"26.01.2021","spending":473},{"id":27,"date":"27.01.2021","spending":943},{"id":28,"date":"28.01.2021","spending":12},{"id":29,"date":"29.01.2021","spending":813},{"id":30,"date":"30.01.2021","spending":378},{"id":31,"date":"31.01.2021","spending":535}]}')},181:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},185:function(e,t,a){},321:function(e,t,a){},322:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(59),i=a.n(s),r=(a(181),a(13)),d=(a(182),a(149)),j=(a(183),a(1));var l=function(e){var t=Object(d.useState)(null),a=Object(r.a)(t,2),n=a[0],c=a[1];return Object(j.jsx)("ul",{className:"menu_list",children:e.menuItem.map((function(e,t){return Object(j.jsxs)("li",{className:"menu_item ".concat(n===t?"active":""),onClick:function(){return c(t)},children:[e.itemSvg,Object(j.jsx)("a",{href:"/",children:e.itemName}),Object(j.jsx)("hr",{})]},t)}))})},o=a.p+"static/media/Icons.ebef1605.svg";var h=function(e){var t=e.name,a=e.color,n=e.size,c=e.className;return Object(j.jsx)("svg",{className:"icon icon-".concat(t," ").concat(c),fill:a,stroke:a,width:n,height:n,children:Object(j.jsx)("use",{xlinkHref:"".concat(o,"#icon-").concat(t)})})},b=["#018FFF","#FAD679","#F5FBFE"],u=new Date,p=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],O=["January","February","March","April","May","June","July","August","September","October","November","December"],m=["2020","2021"],x=[{id:1,itemName:"Overview",itemSvg:Object(j.jsx)(h,{name:"overview",className:"overviewIcon"})},{id:2,itemName:"Wallets",itemSvg:Object(j.jsx)(h,{name:"wallets",className:"walletsIcon"})},{id:3,itemName:"Transictions",itemSvg:Object(j.jsx)(h,{name:"transictions",className:"transictionsIcon"})},{id:4,itemName:"Exchange",itemSvg:Object(j.jsx)(h,{name:"exchange",className:"exchangeIcon"})},{id:5,itemName:"Market",itemSvg:Object(j.jsx)(h,{name:"market",className:"marketIcon"})}],v=a.p+"static/media/messagesIcon.aa3e86f8.svg",g=a.p+"static/media/notificationIcon.44b9138d.svg",f=(a(185),a.p+"static/media/CoinIcons.e7940450.svg");var N=function(e){var t=e.name,a=e.color,n=e.size;return Object(j.jsx)("svg",{className:"icon icon-".concat(t),fill:a,stroke:a,width:n,height:n,children:Object(j.jsx)("use",{xlinkHref:"".concat(f,"#icon-").concat(t)})})};var y=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),i=Object(r.a)(s,2),d=i[0],j=i[1],l=Object(n.useState)([]),o=Object(r.a)(l,2),h=o[0],b=o[1];return Object(n.useEffect)((function(){fetch("https://api.coincap.io/v2/assets").then((function(e){return e.json()})).then((function(e){j(!0),b(e)}),(function(e){j(!0),c(e)}))}),[]),[h,d,a]};var _=function(e){var t,a=e.user,n=JSON.parse(JSON.stringify(a)),c=y(),s=JSON.parse(JSON.stringify(c[0]));for(var i in s.data){var r=s.data[i].name,d=s.data[i].priceUsd,l=s.data[i].symbol;"Bitcoin"===r&&(t=d),r===n.name&&(n.quantity=Math.floor(n.quantity*d*100)/100,n.symbol=l,n.usdPrice=Math.floor(100*d)/100,n.btcPrice=Math.floor(d/t*1e5)/1e5)}return Object(j.jsxs)("div",{className:"wrapper_coin",children:[Object(j.jsxs)("div",{className:"wrapper_coin_content_left",children:[Object(j.jsx)("p",{children:a.name}),Object(j.jsx)("div",{className:"coin",children:Object(j.jsx)("div",{className:"coin_two",children:Object(j.jsx)(N,{name:a.name})})})]}),Object(j.jsxs)("div",{className:"wrapper_coin_content_center",children:[Object(j.jsxs)("p",{children:[a.quantity," ",n.symbol]}),Object(j.jsxs)("p",{children:[n.quantity," $"]})]}),Object(j.jsxs)("div",{className:"wrapper_coin_content_right",children:[Object(j.jsxs)("p",{children:["1 ",n.symbol," = ",n.usdPrice," $"]}),Object(j.jsxs)("p",{children:["1 BTC = ",n.btcPrice," ",n.symbol]})]})]})};var w=function(e){var t=JSON.parse(JSON.stringify(e.Users.balance)).slice().sort((function(e,t){return t.quantity-e.quantity})).slice(0,4);return Object(j.jsx)("div",{className:"wrapper_coins",children:t.map((function(e){return Object(j.jsx)(_,{user:e},e.id)}))})},S=a(52);var k=function(){return Object(j.jsxs)("div",{className:"wrapper_news_content",children:[Object(j.jsx)("p",{children:"19 hours ago"}),Object(j.jsx)("p",{children:"SEC Fails to Show Court Blockvest Tokens Are Securities"})]})},C=a(323),J=a(329),q=a(162),M=a(165),F=a(22),I=a(66);var L=function(e){var t=y(),a=JSON.parse(JSON.stringify(t[0])),c=[],s=Object(n.useState)(JSON.parse(JSON.stringify(e.Users.balance))),i=Object(r.a)(s,2),d=i[0],l=(i[1],Object(n.useState)(d.reduce((function(e,t){return e+t.quantity}),0))),o=Object(r.a)(l,2),h=o[0],u=(o[1],Object(n.useState)(d.sort((function(e,t){return t.quantity-e.quantity})).slice(0,3))),p=Object(r.a)(u,2),O=p[0],m=(p[1],Object(n.useState)()),x=Object(r.a)(m,2),v=x[0],g=x[1];return Object(n.useEffect)((function(){for(var e in a.data){var t=a.data[e].name,n=a.data[e].priceUsd;for(var s in d)t===d[s].name&&c.push(n*d[s].quantity)}g(Math.floor(100*c.reduce((function(e,t){return e+t}),0))/100)}),[a,d]),Object(j.jsx)("div",{name:"donut_chart",className:"donut_chart",children:Object(j.jsx)(C.a,{width:"100%",height:"100%",children:Object(j.jsxs)(J.a,{width:"100%",height:"100%",children:[Object(j.jsxs)(q.a,{data:O,dataKey:"quantity",cx:"50%",cy:"55%",innerRadius:80,outerRadius:100,children:[O.map((function(e,t){return Object(j.jsx)(M.a,{fill:b[t%b.length]},"cell-".concat(t))})),Object(j.jsx)(F.a,{content:function(){return Object(j.jsx)("g",{children:Object(j.jsxs)("text",{className:"custom_label",x:"50%",y:"40%",dy:9,textAnchor:"middle",children:[Object(j.jsx)("tspan",{children:"Balance"}),Object(j.jsxs)("tspan",{x:"51%",y:"52%",children:[v," $"]})]})})}})]}),Object(j.jsx)(I.a,{content:function(){return Object(j.jsx)("ul",{children:O.map((function(e,t){return Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{style:{color:b[t%b.length]},children:e.name}),Object(j.jsxs)("span",{style:{color:b[t%b.length]},children:[Math.ceil(e.quantity/h*100),"%"]})]},"item-".concat(t))}))})},wrapperStyle:{position:"unset",height:"auto"}})]})})})},E=a(168),H=a(327),B=a(70),U=a(172),T=a(169),W=a(88),A=E.spendings,D=function(e){var t=e.active,a=e.payload;return t?Object(j.jsx)("ul",{className:"custom-tooltip",children:Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:"Spending: ".concat(a[0].value," $")}),Object(j.jsx)("span",{children:"Date: ".concat(a[0].payload.date)})]})}):null};var V=function(){return Object(j.jsxs)("div",{className:"line_chart",children:[Object(j.jsxs)("p",{children:["Total spending: ",A.reduce((function(e,t){return e+t.spending}),0)," $"]}),Object(j.jsx)(C.a,{width:"100%",height:"100%",children:Object(j.jsxs)(H.a,{data:A,children:[Object(j.jsx)(B.a,{cursor:!1,content:D,active:!0}),Object(j.jsx)(U.a,{dataKey:"spending",type:"monotone",stroke:"#018FFF",strokeWidth:3,dot:{strokeWidth:5}}),Object(j.jsx)(T.a,{className:"spending_cartesian-axis",dataKey:"id",interval:0,padding:{left:15,right:15},axisLine:!1,tickLine:!1}),Object(j.jsx)(W.a,{startIndex:0,endIndex:9,travellerWidth:0})]})})]})},K=a(170),$=a(69),P=a.n($);var R=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),i=Object(r.a)(s,2),d=i[0],j=i[1],l=Object(n.useState)([]),o=Object(r.a)(l,2),h=o[0],b=o[1];return Object(n.useEffect)((function(){fetch("https://api.coincap.io/v2/assets/bitcoin/history?interval=d1").then((function(e){return e.json()})).then((function(e){j(!0),b(e)}),(function(e){j(!0),c(e)}))}),[]),[h,d,a]};var Z=function(){var e=R(),t=JSON.parse(JSON.stringify(e[0])),a=Object(n.useState)(),c=Object(r.a)(a,2),s=c[0],i=c[1],d=Object(n.useState)(O[u.getMonth()]),l=Object(r.a)(d,2),o=l[0],h=l[1],b=Object(n.useState)(m[1]),p=Object(r.a)(b,2),x=p[0],v=p[1];Object(n.useEffect)((function(){var e=[];for(var a in t.data)t.data[a]={dayChart:P()(t.data[a].date,"mmm dd"),dateChart:P()(t.data[a].date,"dd-mm-yyyy"),monthChart:P()(t.data[a].date,"mmmm"),yearChart:P()(t.data[a].date,"yyyy"),priceUsd:Math.ceil(t.data[a].priceUsd)},t.data[a].monthChart===o&&t.data[a].yearChart===x&&e.push(t.data[a]);i(e)}),[o,x]);var g=m.map((function(e,t){return Object(j.jsx)("option",{value:e,children:e},"item-".concat(t))})),f=O.map((function(e,t){return Object(j.jsx)("option",{value:e,children:e},"item-".concat(t))}));return Object(j.jsxs)("div",{className:"wrapper_market_price",children:[Object(j.jsxs)("div",{className:"wrapper_market_price_content_top",children:[Object(j.jsx)("h2",{children:"Market"}),Object(j.jsx)("p",{className:"btn_coin",children:"Bitcoin"}),Object(j.jsx)("div",{className:"month_chart",children:Object(j.jsx)("select",{className:"navigation_chart",value:o,onChange:function(e){return h(e.target.value)},children:f})}),Object(j.jsx)("div",{className:"year_chart",children:Object(j.jsx)("select",{className:"navigation_chart",value:x,onChange:function(e){return v(e.target.value)},children:g})})]}),Object(j.jsx)("div",{className:"line_chart_market_price",children:Object(j.jsx)(C.a,{children:Object(j.jsxs)(H.a,{data:s,children:[Object(j.jsx)(U.a,{dataKey:"priceUsd",type:"monotone",stroke:"#018FFF",strokeWidth:3,dot:{strokeWidth:5}}),Object(j.jsx)(K.a,{dataKey:"priceUsd",type:"number",tickCount:4,axisLine:!1,tickLine:!1}),Object(j.jsx)(T.a,{dataKey:"dayChart",interval:0,padding:{left:40,right:40},axisLine:!1,tickLine:!1}),Object(j.jsx)(W.a,{startIndex:0,endIndex:9,travellerWidth:0})]})})})]})};var z=function(){return Object(j.jsxs)("div",{className:"wrapper_overview_balance_coins",children:[Object(j.jsxs)("div",{className:"wrapper_overview_information",children:[Object(j.jsxs)("div",{className:"wrapper_overview_datefolder",children:[Object(j.jsx)("h2",{children:"Overview"}),Object(j.jsx)("p",{name:"dateFolder",children:u.getDate()+" "+O[u.getMonth()]+", "+p[u.getDay()]})]}),Object(j.jsx)("button",{type:"submit",className:"btn_add_widget",children:"Add Widget"})]}),Object(j.jsxs)("div",{className:"balance_spendings_coins",children:[Object(j.jsxs)("div",{className:"wrapper_balance",children:[Object(j.jsx)("h3",{children:"Balance"}),Object(j.jsx)("div",{className:"wrapper_donut_chart",children:Object(j.jsx)(L,{Users:S})})]}),Object(j.jsxs)("div",{className:"wrapper_spending",children:[Object(j.jsxs)("div",{className:"wrapper_spending_content",children:[Object(j.jsx)("h3",{children:"Spending"}),Object(j.jsx)("a",{href:"/",className:"month",children:"Month"})]}),Object(j.jsx)(V,{})]}),Object(j.jsx)(w,{Users:S})]}),Object(j.jsxs)("div",{className:"wrapper_market_news",children:[Object(j.jsx)(Z,{}),Object(j.jsxs)("div",{className:"wrapper_recent_news",children:[Object(j.jsxs)("div",{className:"wrapper-recent_news_top",children:[Object(j.jsx)("h2",{children:"Recent News"}),Object(j.jsx)("hr",{})]}),Object(j.jsx)("div",{className:"wrapper_news",children:Object(j.jsx)(k,{})})]})]})]})};a(321);var G=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(j.jsxs)("div",{className:"wrapper_container",children:[Object(j.jsxs)("header",{className:"".concat(a?"active":""),children:[Object(j.jsx)("h1",{children:"valuet"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"wrapper_menu",children:[Object(j.jsx)("nav",{className:"menu_body",children:Object(j.jsx)(l,{menuItem:x})}),Object(j.jsx)("hr",{})]}),Object(j.jsxs)("div",{className:"wrapper_person",children:[Object(j.jsxs)("div",{className:"wrapper_person_profile",children:[Object(j.jsx)("div",{className:"person_circle"}),Object(j.jsx)("p",{children:"Mike Jakson"})]}),Object(j.jsxs)("div",{className:"wrapper_log_out",children:[Object(j.jsx)("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M7.30965 11.2L8.55409 12.4444L12.9985 8L8.55409 3.55556L7.30965 4.8L9.62076 7.11111H0.998535V8.88889H9.57631L7.30965 11.2ZM15.2208 0H2.77631C1.79854 0 0.998535 0.8 0.998535 1.77778V5.33333H2.77631V1.77778H15.2208V14.2222H2.77631V10.6667H0.998535V14.2222C0.998535 15.2 1.79854 16 2.77631 16H15.2208C16.1985 16 16.9985 15.2 16.9985 14.2222V1.77778C16.9985 0.8 16.1985 0 15.2208 0Z"})}),Object(j.jsx)("a",{href:"# ",className:"log_out",children:"Log Out"})]})]})]}),Object(j.jsxs)("section",{className:"wrapper_content_top",children:[Object(j.jsxs)("div",{className:"search_message_notification",children:[Object(j.jsxs)("form",{action:"",method:"GET",children:[Object(j.jsx)("input",{type:"search",placeholder:"Search",className:"search"}),Object(j.jsx)("button",{type:"submit",className:"btn_search"})]}),Object(j.jsxs)("div",{className:"wrapper_notifications",children:[Object(j.jsx)("img",{src:v,alt:""}),Object(j.jsx)("img",{src:g,alt:""}),Object(j.jsx)("div",{onClick:function(){c(!a)},className:"menu_burger ".concat(a?"active":""),children:Object(j.jsx)("span",{})})]})]}),Object(j.jsx)("hr",{})]}),Object(j.jsx)("section",{className:"wrapper_content_center",children:Object(j.jsx)(z,{})})]})};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(G,{})}),document.getElementById("root"))},52:function(e){e.exports=JSON.parse('{"balance":[{"id":1,"name":"Bitcoin","quantity":10},{"id":2,"name":"Ethereum","quantity":25},{"id":3,"name":"Dash","quantity":12},{"id":4,"name":"Zcash","quantity":118},{"id":5,"name":"THETA","quantity":1000},{"id":6,"name":"Litecoin","quantity":250}]}')}},[[322,1,2]]]);
//# sourceMappingURL=main.c6c57107.chunk.js.map