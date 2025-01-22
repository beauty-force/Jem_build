import{H as y,L as g,G as w,r as c,o as s,c as o,b as l,w as _,F as m,d as t,I as k,J as v,K as L,t as r,h as a,f as N,e as p}from"./app.7dd38efc.js";import{A as C}from"./Admin.abf655ab.js";import{_ as O}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.015d7052.js";const A={components:{Head:y,AdminLayout:C,Link:g},props:{coupons:Object,errors:Object,types:Object},mounted(){},methods:{submit(){this.form.post(route("user.coupon.post"))}},setup(i){return{form:w({code:""})}}},V={class:"pt-4 md:px-2 px-4"},D=t("div",{class:"text-center w-full mb-6 font-semibold"},[t("h3",null,"\u30AF\u30FC\u30DD\u30F3\u306E\u7372\u5F97")],-1),H={class:"mb-4"},S=t("label",{for:"code",class:"block font-medium text-sm text-neutral-700 mb-2 ml-1"},[p("\u30B3\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044! "),t("span",{class:"text-red-500"},"*")],-1),T={key:0,class:"text-red-500 text-sm mt-1"},j=t("button",{type:"submit",class:"w-full inline-block items-center px-8 py-2.5 bg-teal-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-teal-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 mr-2"}," \u7372\u5F97 ",-1),B={class:"w-full mt-8"},F=t("h3",{class:"underline underline-offset-4"},"\u7372\u5F97\u5C65\u6B74",-1),I={class:"w-full"},M=t("thead",null,[t("tr",{class:"border-b border-collapse"},[t("th",{class:"text-center py-2"},"\u540D\u524D"),t("th",{class:"text-center py-2"},"\u7A2E\u985E"),t("th",{class:"text-center py-2"},"\u30DD\u30A4\u30F3\u30C8"),t("th",{class:"text-center py-2"},"\u6709\u52B9\u671F\u9650"),t("th",{class:"text-center py-2"},"\u7372\u5F97\u6642\u9593")])],-1),U={class:"border-b border-collapse"},q={class:"text-center py-2"},E={class:"text-center py-2"},G={key:0,class:"text-center py-2"},J={key:1,class:"text-center py-2"},K={class:"text-center py-2"},R={key:2,class:"text-center py-2"},z={key:3,class:"text-center py-2"},P={key:4,class:"text-center py-2"},Q=t("span",{class:"rounded-md bg-neutral-500 text-white py-1 px-3"},"\u671F\u9650\u5207\u308C",-1),W=[Q];function X(i,n,d,u,Y,h){const f=c("Head"),x=c("Link"),b=c("AdminLayout");return s(),o(m,null,[l(f,{title:"\u30AF\u30FC\u30DD\u30F3\u306E\u7372\u5F97"}),l(b,null,{default:_(()=>[t("div",V,[D,t("div",null,[t("form",{onSubmit:n[1]||(n[1]=k(e=>h.submit(),["prevent"]))},[t("div",H,[S,v(t("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>u.form.code=e),id:"code",type:"text",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[L,u.form.code]]),d.errors.code?(s(),o("div",T,r(d.errors.code),1)):a("",!0)]),j],32)]),t("div",B,[F,t("table",I,[M,t("tbody",null,[(s(!0),o(m,null,N(d.coupons,e=>(s(),o("tr",U,[t("td",q,r(e.title),1),t("td",E,r(d.types[e.type]),1),e.type=="NORMAL"?(s(),o("td",G,r(e.point+"pt"),1)):(s(),o("td",J,r("\u5272\u5F15\u7387: "+e.min_rate+"~"+e.max_rate+"%"),1)),t("td",K,r(e.expiration),1),e.status==1?(s(),o("td",R,r(e.acquired_time),1)):a("",!0),e.type=="DISCOUNT"&&e.status==0?(s(),o("td",z,[l(x,{href:i.route("user.point",{id:e.record_id}),class:"rounded-md bg-rose-500 hover:bg-rose-700 text-white py-1 px-3"},{default:_(()=>[p("\u30DD\u30A4\u30F3\u30C8\u3092\u8CFC\u5165")]),_:2},1032,["href"])])):a("",!0),e.type=="DISCOUNT"&&e.status==2?(s(),o("td",P,W)):a("",!0)]))),256))])])])])]),_:1})],64)}const st=O(A,[["render",X]]);export{st as default};
