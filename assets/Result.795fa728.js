import{H as g,L as k,G as v,r as u,o as n,c as a,b as m,w as y,F as h,d as e,I as w,f as C,J as f,a2 as _,n as j,t as c,e as A,i as V}from"./app.10bc391f.js";import{A as z}from"./Admin.1be55524.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as F}from"./PlayIcon.56f3d79c.js";import"./Category.33a19b7b.js";const H={components:{Head:g,AdminLayout:z,Link:k,PlayIcon:F},props:{errors:Object,auth:Object,category_share:Object,products:Object,token:String},data(){return{isCheckAll:!1}},setup(t){let o={},i;for(i=0;i<t.products.data.length;i++)o["id"+t.products.data[i].id]=!1;return{form:v({checks:o,token:t.token})}},methods:{format_number(t){return String(t).replace(/(.)(?=(\d{3})+$)/g,"$1,")},submit(){let t,o=0;var i=0;for(t=0;t<this.products.data.length;t++)this.form.checks["id"+this.products.data[t].id]&&(o++,i=i+parseInt(this.products.data[t].point));let r=!1;i>0?confirm("\u4EA4\u63DB\u3057\u307E\u3059\u304B\uFF1F \u9078\u629E\u3057\u305F"+o+"\u70B9\u306E\u5546\u54C1\u3092"+i+"pt\u3068\u4EA4\u63DB\u3057\u307E\u3059\u3002")&&(r=!0):confirm("\u5168\u3066\u306E\u5546\u54C1\u304C\u300C\u7372\u5F97\u6E08\u307F\u5546\u54C1\u4E00\u89A7\u300D\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002")&&(r=!0),r&&this.form.post(route("user.gacha.result.exchange"),{onFinish:()=>{}})},checkall(){let t;for(t=0;t<this.products.data.length;t++)this.form.checks["id"+this.products.data[t].id]=this.isCheckAll}}},N={class:"md:w-[760px] m-auto items-center"},O=e("h1",{class:"mb-2 text-neutral-100 text-xl underline underline-offset-8 py-8 text-center font-bold"},"\xA0\xA0\xA0\u30AC\u30C1\u30E3 \u2013 \u7D50\u679C\xA0\xA0\xA0",-1),S={class:"mb-3 pt-4 flex flex-wrap justify-center"},B={class:"relative"},I=["for"],U={class:"text-center p-0 relative mb-1"},D=["src"],M={class:"text-white truncate text-center text-md px-4",style:{"line-height":"1.3"}},P={class:"text-neutral-300 text-md truncate mb-1 text-center px-4",style:{"line-height":"1.3"}},T={class:"flex justify-center items-center w-fit mx-auto text-white relative rounded-full text-sm text-center px-2 bg-red-500",style:{"line-height":"1.5"}},E=e("img",{style:{filter:"invert(1)"},class:"pr-3 h-4",src:"/images/right.png"},null,-1),G=e("span",{class:"text-white"},"\xA0PT",-1),J={class:"absolute -top-2 -right-2"},R=["id","onUpdate:modelValue"],q={key:0,class:"absolute top-0 left-0 z-0 w-full h-full flex justify-center items-center"},K=e("img",{src:"/images/sparking_star.png",style:{"max-width":"200%"}},null,-1),Q=[K],W={class:"text-center text-neutral-50 mb-6 z-10 relative"},X={class:"cursor-pointer"},Y=e("span",{class:"ml-2 text-lg font-bold"},"\u5168\u3066\u3092\u9078\u629E\u3059\u308B",-1),Z={class:"mb-3 text-center text-neutral-50 z-10 relative"},$=["disabled"],ee=e("div",{class:"pb-6 pt-4 text-center text-md font-bold text-neutral-200 z-10"}," \u203B\u9078\u629E\u3055\u308C\u306A\u304B\u3063\u305F\u5546\u54C1\u306F\u300C\u7372\u5F97\u6E08\u307F \u5546\u54C1\u4E00\u89A7\u300D\u306B\u79FB\u52D5\u3055\u308C\u307E\u3059\u3002 ",-1);function te(t,o,i,r,d,l){const p=u("Head"),x=u("AdminLayout");return n(),a(h,null,[m(p,{title:"\u30AC\u30C1\u30E3\u2013\u7D50\u679C"}),m(x,{is_home:!0},{default:y(()=>[e("div",N,[O,e("form",{onSubmit:o[2]||(o[2]=w(s=>l.submit(),["prevent"]))},[e("div",S,[(n(!0),a(h,null,C(i.products.data,(s,se)=>(n(),a("div",B,[e("label",{for:"checkbox"+s.id,class:"z-10 block mb-5 mx-2.5 cursor-pointer text-center justify-center relative rounded-sm",style:{width:"142px"}},[e("div",U,[e("img",{class:"inline-block w-full",src:s.image},null,8,D)]),e("div",M,c(s.name),1),e("div",P,c(s.rare),1),e("div",T,[E,A(" "+c(l.format_number(s.point)),1),G]),e("div",J,[f(e("input",{id:"checkbox"+s.id,type:"checkbox","onUpdate:modelValue":b=>r.form.checks["id"+s.id]=b,class:"h-5 w-5 cursor-pointer rounded border-blue-300 text-blue-600 shadow-sm focus:ring-blue-500"},null,8,R),[[_,r.form.checks["id"+s.id]]])])],8,I),s.is_last?(n(),a("div",q,Q)):V("",!0)]))),256))]),e("div",W,[e("label",X,[f(e("input",{type:"checkbox","onUpdate:modelValue":o[0]||(o[0]=s=>d.isCheckAll=s),onChange:o[1]||(o[1]=s=>l.checkall()),class:"h-7 w-7 rounded border-neutral-300 text-neutral-600 shadow-sm focus:ring-neutral-500"},null,544),[[_,d.isCheckAll]]),Y])]),e("div",Z,[e("button",{type:"submit",class:j([{"opacity-25":r.form.processing},"inline-block items-center px-8 py-2.5 bg-sky-700 border border-transparent rounded-md font-semibold text-md text-white uppercase tracking-widest hover:bg-sky-700 active:bg-sky-700 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150"]),disabled:r.form.processing}," \u9078\u629E\u3057\u305F\u5546\u54C1\u3092\u30DD\u30A4\u30F3\u30C8\u306B\u5909\u63DB ",10,$)]),ee],32)])]),_:1})],64)}const le=L(H,[["render",te]]);export{le as default};
