import{H as f,L as b,r as c,o as s,c as o,b as i,w as l,F as a,d as e,f as d,g as x,n as y,e as g,t as r,h as v}from"./app.7dd38efc.js";import{A as k}from"./Admin.abf655ab.js";import{_ as w}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.015d7052.js";const L={components:{Head:f,AdminLayout:k,Link:b},props:{errors:Object,gacha:Object,category_share:Object,products:Object},data(){return{main_tab:[{title:"\u672A\u9078\u629E",route_url:route("user.products"),is_active:!1},{title:"\u767A\u9001\u5F85\u3061",route_url:route("user.products.wait"),is_active:!1},{title:"\u767A\u9001\u6E08\u307F",route_url:route("user.products.delivered"),is_active:!0}]}}},j={style:{"min-height":"400px"},class:"border p-4 md:p-8 w-full"},A={class:"py-3 pt-6 px-6 mb-2"},B=e("h1",{class:"mb-5 text-lg text-center font-bold underline underline-offset-8"},"\u7372\u5F97\u3057\u305F\u5546\u54C1\u4E00\u89A7",-1),C={class:"w-full text-neutral-400 mb-3"},H={key:0,class:"grid md:grid-cols-2 gap-1"},N={class:"mt-1 py-2 px-3 hover:bg-sky-50 focus:bg-sky-50"},O={class:"flex border-neutral-200 items-start"},V=["src"],D=["for"],F={class:"m2"},T={class:"text-sm md:py-2 py-1 px-3"},z={class:"text-sm md:py-2 py-1 px-3"},E={key:0,class:"flex bg-red-500 justify-center items-center rounded-full px-3 md:my-1 mx-3 py-1 text-white w-fit"},P=e("img",{src:"/images/icon_cash.png",class:"h-4 mr-1"},null,-1),S={key:1,class:"mb-6"};function $(q,G,n,I,_,J){const u=c("Head"),p=c("Link"),m=c("AdminLayout");return s(),o(a,null,[i(u,{title:"\u7372\u5F97\u3057\u305F\u5546\u54C1\u4E00\u89A7"}),i(m,null,{default:l(()=>[e("div",j,[e("div",A,[B,e("div",C,[(s(!0),o(a,null,d(_.main_tab,(t,h)=>(s(),x(p,{href:t.route_url,class:y(["inline-block md:px-8 px-4 py-1.5",{"bg-blue-900 text-white":t.is_active}])},{default:l(()=>[g(r(t.title),1)]),_:2},1032,["href","class"]))),256))])]),n.products.data.length?(s(),o("div",H,[(s(!0),o(a,null,d(n.products.data,(t,h)=>(s(),o("div",N,[e("div",O,[e("img",{src:t.image,class:"w-24 h-32 inline-block object-cover"},null,8,V),e("label",{for:"checkbox"+t.id,class:"cursor-pointer items-start justify-between inline-block text-sm py-1 px-2"},[e("div",F,[e("div",T,r(t.name),1),e("div",z,r(t.rare),1),t.is_lost_product!=2?(s(),o("div",E,[P,e("span",null,r(t.point)+"\xA0PT",1)])):v("",!0)])],8,D)])]))),256))])):(s(),o("div",S," \u5546\u54C1\u306F\u3042\u308A\u307E\u305B\u3093\u3002 "))])]),_:1})],64)}const U=w(L,[["render",$]]);export{U as default};
