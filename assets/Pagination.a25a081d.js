import{L as _,r as m,o as r,c as d,g as l,w as c,e as s,h as n,b as f,t as i,n as u}from"./app.7dd38efc.js";import{_ as y}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as k}from"./ChevronRightIcon.aef051c9.js";import{a as b}from"./toastify.015d7052.js";import{r as w}from"./EllipsisHorizontalIcon.467f551a.js";const v={components:{Link:_,ChevronRightIcon:k,ChevronLeftIcon:b,EllipsisHorizontalIcon:w},props:{route_name:String,search_cond:Object,total:Number},setup(a){return{page:a.search_cond.page}},methods:{}},j={key:0,class:"flex justify-center items-center"},x={key:1,class:"p-2"},C={key:4,class:"p-2"};function I(a,g,e,t,L,z){const o=m("Link"),h=m("EllipsisHorizontalIcon");return e.total>1?(r(),d("div",j,[t.page>1?(r(),l(o,{key:0,href:a.route(e.route_name,{...e.search_cond,page:1}),class:"rounded-l-md border w-9 h-9 flex justify-center items-center hover:bg-neutral-200"},{default:c(()=>[s("1")]),_:1},8,["href"])):n("",!0),t.page>3?(r(),d("span",x,[f(h,{class:"w-5"})])):n("",!0),t.page>2?(r(),l(o,{key:2,href:a.route(e.route_name,{...e.search_cond,page:t.page-1}),class:"border w-9 h-9 flex justify-center items-center hover:bg-neutral-200"},{default:c(()=>[s(i(t.page-1),1)]),_:1},8,["href"])):n("",!0),f(o,{href:a.route(e.route_name,{...e.search_cond,page:t.page}),class:u(["w-9 h-9 flex justify-center items-center text-white bg-neutral-600",{"rounded-l-md":t.page==1,"rounded-r-md":t.page==e.total}])},{default:c(()=>[s(i(t.page),1)]),_:1},8,["href","class"]),t.page+1<e.total?(r(),l(o,{key:3,href:a.route(e.route_name,{...e.search_cond,page:t.page+1}),class:"border w-9 h-9 flex justify-center items-center hover:bg-neutral-200"},{default:c(()=>[s(i(t.page+1),1)]),_:1},8,["href"])):n("",!0),t.page+2<e.total?(r(),d("span",C,[f(h,{class:"w-5"})])):n("",!0),t.page<e.total?(r(),l(o,{key:5,href:a.route(e.route_name,{...e.search_cond,page:e.total}),class:"rounded-r-md border w-9 h-9 flex justify-center items-center hover:bg-neutral-200"},{default:c(()=>[s(i(e.total),1)]),_:1},8,["href"])):n("",!0)])):n("",!0)}const P=y(v,[["render",I]]);export{P};
