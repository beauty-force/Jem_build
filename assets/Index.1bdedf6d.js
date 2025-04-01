import{H as D,E as T,G as v,r as u,o as m,c as _,b as d,w as f,F as b,d as t,t as l,J as i,K as c,f as w,I,M,i as N,n as L,e as h}from"./app.ef95c277.js";import{U as R}from"./UserLayout.730db98b.js";import{P as q}from"./Pagination.c51abba7.js";import{_ as F}from"./_plugin-vue_export-helper.cdc0426e.js";import{N as H,e as z,U as B,o as E,f as S}from"./Category.eb72ab11.js";import"./ChevronRightIcon.c2fb5125.js";import"./EllipsisHorizontalIcon.794e955e.js";const G={components:{Head:D,UserLayout:R,Dialog:H,DialogPanel:z,DialogTitle:B,TransitionChild:E,TransitionRoot:S,Pagination:q},props:{errors:Object,category_share:Object,products:Object,products_status:Object,search_cond:Object,total:Number,lost_types:Object},data(){return{url2:null,open:!1,point_value:0}},methods:{get_product_status(){let a=this.products_status.map(r=>parseInt(r.products_lost_count)<parseInt(r.gacha_products_count)?` ${r.point} \u30DD\u30A4\u30F3\u30C8\u306E\u30AB\u30FC\u30C9\u304C ${r.gacha_products_count} \u3064\u5FC5\u8981\u3067\u3059\u3002   \u73FE\u5728\u306E\u5728\u5EAB\u6570\u306F ${r.products_lost_count}\u3064\u3067\u3059\u3002
 `:""),e="";return a.forEach(r=>{e=e+r}),e},destroy_product_last(a){confirm("\u524A\u9664\u3057\u3066\u3082\u3044\u3044\u3067\u3059\u304B\uFF1F")&&T.Inertia.delete(route("admin.gacha.product_last.destroy",{id:a}))},modalProductOpen(a){a?(this.form_last.last_id=a.id,this.form_last.last_name=a.name,this.form_last.last_point=a.point,this.form_last.last_rare=a.rare,this.form_last.last_marks=a.marks,this.form_last.last_lost_type=a.lost_type,this.form_last.last_image="",this.form_last.is_update=1,this.url2=a.image):(this.form_last.last_id="",this.form_last.last_name="",this.form_last.last_point="",this.form_last.last_rare="",this.form_last.last_marks="",this.form_last.last_lost_type=2,this.form_last.last_image="",this.form_last.is_update=0,this.url2=""),this.open=!0},submit_last(){this.$refs.photo2.files[0]&&(this.form_last.last_image=this.$refs.photo2.files[0]),this.form_last.post(route("admin.lost_product.create"),{onFinish:()=>{}})},closeModal(){this.open=!1},previewImage2(a){const e=a.target.files[0];this.url2=URL.createObjectURL(e)},search(){this.form_search.get(route("admin.lost_product"))},clear(){this.form_search.rare="",this.form_search.name="",this.form_search.min="",this.form_search.max="",this.search()}},setup(a){let e={last_id:"",last_name:"",last_point:"",last_rare:"",last_marks:"",last_lost_type:"",last_image:"",is_update:0,category_id:a.category_share.cat_id};const r=v(e),o=v(a.search_cond);return{form_last:r,form_search:o}},mounted(){}},J={class:"mt-3 px-5"},K={class:"text-red-600",style:{"white-space":"break-spaces"}},A={class:"flex justify-between items-center mb-2"},Q=t("h1",{class:"text-lg font-bold"},"\u30AB\u30FC\u30C9\u8A2D\u5B9A",-1),W={class:"text-center"},X=t("hr",{class:"mb-2"},null,-1),Y={class:"flex items-center gap-2 w-full flex-wrap mb-2 justify-between border p-2 text-sm"},Z={class:"flex flex-col gap-2 flex-1"},$={class:"flex flex-wrap gap-y-2"},tt={class:"flex-1 flex items-center gap-2 min-w-[16rem]"},et=t("label",{class:"w-16 text-right"},"\u540D\u524D",-1),st={class:"flex-1 flex items-center gap-2 min-w-[16rem]"},ot=t("label",{class:"w-16 text-right"},"\u30EC\u30A2\u5EA6",-1),rt={class:"flex items-center gap-2"},at=t("label",{class:"w-16 text-right"},"\u30DD\u30A4\u30F3\u30C8",-1),lt=t("span",null,"~",-1),nt={class:"flex flex-col gap-2"},it={class:"mb-4 border-neutral-200 border-b"},dt={class:"flex border-neutral-200 items-center"},ct=["src"],ut={class:"flex-1 inline-block text-sm py-1 px-2"},mt={class:"text-red-500"},_t={class:"mb-2 text-center"},ft=["onClick"],pt=["onClick"],ht=t("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),bt={class:"fixed inset-0 z-20 overflow-y-auto"},xt={class:"flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"},gt={class:"mb-4"},yt=t("label",{for:"text1-1",class:"block font-medium text-sm text-neutral-700 mb-1"},[h("\u540D\u524D"),t("span",{class:"text-red-500"},"*")],-1),vt={class:"text-red-500 text-sm mt-1"},wt={class:"mb-4"},kt=t("label",{for:"text1-2",class:"block font-medium text-sm text-neutral-700 mb-1"},[h("\u5909\u63DB\u30DD\u30A4\u30F3\u30C8\uFF08\u534A\u89D2\u6570\u5B57\uFF09"),t("span",{class:"text-red-500"},"*")],-1),Ct={class:"text-red-500 text-sm mt-1"},Ut={class:"mb-4"},Vt=t("label",{for:"text1-3",class:"block font-medium text-sm text-neutral-700 mb-1"},[h("\u30EC\u30A2\u5EA6"),t("span",{class:"text-red-500"},"*")],-1),jt={class:"text-red-500 text-sm mt-1"},Ot={class:"mb-4"},Pt=t("label",{for:"text1-3",class:"block font-medium text-sm text-neutral-700 mb-1"},[h("\u70B9\u6570\uFF08\u534A\u89D2\u6570\u5B57\uFF09"),t("span",{class:"text-red-500"},"*")],-1),Dt={class:"text-red-500 text-sm mt-1"},Tt={class:"mb-4"},It=t("label",{for:"text1-4",class:"block font-medium text-sm text-neutral-700 mb-1"},"\u7A2E\u985E",-1),Mt=["value"],Nt={class:"text-red-500 text-sm mt-1"},Lt={class:"mb-4"},Rt=t("label",{for:"file1-1",class:"block font-medium text-sm text-neutral-700 mb-1"},[h("\u753B\u50CF\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9 "),t("span",{class:"text-red-500"},"*")],-1),qt={class:"text-center w-full"},Ft=["src"],Ht={class:"text-red-500 text-sm mt-1"},zt={class:"mb-6 text-center"},Bt=["disabled"];function Et(a,e,r,o,p,n){const k=u("Head"),C=u("Pagination"),x=u("TransitionChild"),U=u("DialogPanel"),V=u("Dialog"),j=u("TransitionRoot"),O=u("UserLayout");return m(),_(b,null,[d(k,{title:"\u30AB\u30FC\u30C9\u8A2D\u5B9A"}),d(O,{closeModal:n.closeModal},{default:f(()=>[t("div",J,[t("div",K,l(n.get_product_status()),1),t("div",A,[Q,t("div",W,[t("button",{type:"button",onClick:e[0]||(e[0]=s=>n.modalProductOpen(0)),class:"inline-block items-center px-10 py-2.5 bg-cyan-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-cyan-700 active:bg-cyan-700 focus:outline-none focus:border-cyan-700 focus:shadow-outline-cyan transition ease-in-out duration-150 mr-2"}," \u8FFD\u52A0 ")])]),X,t("div",Y,[t("div",Z,[t("div",$,[t("div",tt,[et,i(t("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>o.form_search.name=s),type:"text",class:"h-9 flex-1 w-0 border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300"},null,512),[[c,o.form_search.name]])]),t("div",st,[ot,i(t("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>o.form_search.rare=s),type:"text",class:"h-9 flex-1 w-0 border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300"},null,512),[[c,o.form_search.rare]])])]),t("div",rt,[at,i(t("input",{"onUpdate:modelValue":e[3]||(e[3]=s=>o.form_search.min=s),type:"number",class:"h-9 flex-1 w-16 border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300"},null,512),[[c,o.form_search.min]]),lt,i(t("input",{"onUpdate:modelValue":e[4]||(e[4]=s=>o.form_search.max=s),type:"number",class:"h-9 flex-1 w-16 border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300"},null,512),[[c,o.form_search.max]])])]),t("div",nt,[t("button",{type:"button",onClick:e[5]||(e[5]=(...s)=>n.clear&&n.clear(...s)),class:"rounded-md border bg-neutral-600 text-white px-4 py-2"},"\u521D\u671F\u5316"),t("button",{type:"button",onClick:e[6]||(e[6]=(...s)=>n.search&&n.search(...s)),class:"rounded-md border bg-neutral-600 text-white px-4 py-2"},"\u691C\u7D22")])]),d(C,{search_cond:r.search_cond,route_name:"admin.lost_product",total:r.total},null,8,["search_cond","total"]),(m(!0),_(b,null,w(r.products.data,(s,g)=>{var y;return m(),_("div",it,[t("div",dt,[t("img",{src:s.image,class:"w-16 h-16 inline-block object-contain"},null,8,ct),t("div",ut,[t("div",null,l(s.name),1),t("div",null,l(s.rare),1),t("div",null,l(s.marks),1),t("div",null,l(r.lost_types[(y=s.lost_type)!=null?y:0]),1),t("div",mt,l(s.point)+"pt",1)])]),t("div",_t,[t("button",{type:"button",onClick:P=>n.modalProductOpen(s),class:"inline-block items-center px-10 py-2.5 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 mr-2"}," \u7DE8\u96C6 ",8,ft),t("button",{type:"button",onClick:P=>n.destroy_product_last(s.id),class:"inline-block items-center px-10 py-2.5 bg-red-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150"}," \u524A\u9664 ",8,pt)])])}),256))]),t("template",null,[d(j,{as:"template",show:p.open},{default:f(()=>[d(V,{as:"div",class:"relative z-20",onClose:e[15]||(e[15]=s=>p.open=!1)},{default:f(()=>[d(x,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:f(()=>[ht]),_:1}),t("div",bt,[t("div",xt,[d(x,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:f(()=>[d(U,{class:"p-3 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},{default:f(()=>[t("form",{onSubmit:e[14]||(e[14]=I(s=>n.submit_last(),["prevent"]))},[t("div",gt,[yt,i(t("input",{"onUpdate:modelValue":e[7]||(e[7]=s=>o.form_last.last_name=s),id:"text1-1",type:"text",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",required:""},null,512),[[c,o.form_last.last_name]]),t("div",vt,l(r.errors.last_name),1)]),t("div",wt,[kt,i(t("input",{"onUpdate:modelValue":e[8]||(e[8]=s=>o.form_last.last_point=s),id:"text1-2",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",required:""},null,512),[[c,o.form_last.last_point]]),t("div",Ct,l(r.errors.last_point),1)]),t("div",Ut,[Vt,i(t("input",{"onUpdate:modelValue":e[9]||(e[9]=s=>o.form_last.last_rare=s),id:"text1-3",type:"text",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",required:""},null,512),[[c,o.form_last.last_rare]]),t("div",jt,l(r.errors.last_rare),1)]),t("div",Ot,[Pt,i(t("input",{"onUpdate:modelValue":e[10]||(e[10]=s=>o.form_last.last_marks=s),id:"text1-3",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",required:""},null,512),[[c,o.form_last.last_marks]]),t("div",Dt,l(r.errors.last_marks),1)]),t("div",Tt,[It,i(t("select",{"onUpdate:modelValue":e[11]||(e[11]=s=>o.form_last.last_lost_type=s),id:"text1-4",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300"},[(m(!0),_(b,null,w(r.lost_types,(s,g)=>(m(),_("option",{value:g},l(s),9,Mt))),256))],512),[[M,o.form_last.last_lost_type]]),t("div",Nt,l(r.errors.last_lost_type),1)]),t("div",Lt,[Rt,t("div",qt,[p.url2?(m(),_("img",{key:0,src:p.url2,class:"inline-block mt-4 h-24"},null,8,Ft)):N("",!0)]),t("input",{onChange:e[12]||(e[12]=(...s)=>n.previewImage2&&n.previewImage2(...s)),ref:"photo2",id:"file1-1",type:"file",class:"w-full"},null,544),t("div",Ht,l(r.errors.last_image),1)]),t("div",zt,[t("button",{type:"submit",class:L([{"opacity-25":o.form_last.processing},"inline-block items-center px-8 py-2.5 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 mr-2"]),disabled:o.form_last.processing}," \u4FDD\u5B58 ",10,Bt),t("button",{type:"button",onClick:e[13]||(e[13]=s=>p.open=!1),class:"inline-block items-center px-8 py-2.5 bg-red-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150"}," \u30AD\u30E3\u30F3\u30BB\u30EB ")])],32)]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])]),_:1},8,["closeModal"])],64)}const Xt=F(G,[["render",Et]]);export{Xt as default};
