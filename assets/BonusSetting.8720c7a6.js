import{o as u,c as r,d as t,H as V,L as U,G as f,r as p,b as _,w,F as h,J as d,K as a,f as x,e as C,M as m}from"./app.9b46ede6.js";import{U as L}from"./UserLayout.07d3b9a5.js";import{_ as M}from"./_plugin-vue_export-helper.cdc0426e.js";import"./Category.cc27c394.js";function S(l,o){return u(),r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z","clip-rule":"evenodd"})])}const j={components:{Head:V,AppLayout:L,Link:U,XMarkIcon:S},props:{bonus:Object,next_day:String,next_week:String,next_month:String},data(){return{daily_bonus:[],weekly_bonus:[],monthly_bonus:[],_next_day:"",_next_week:"",_next_month:""}},mounted(){this.daily_bonus=this.bonus.filter(l=>l.period=="daily"),this.weekly_bonus=this.bonus.filter(l=>l.period=="weekly"),this.monthly_bonus=this.bonus.filter(l=>l.period=="monthly"),this._next_day=this.daily_bonus.length?this.daily_bonus[0].startDate.slice(0,10):this.next_day,this._next_week=this.weekly_bonus.length?this.weekly_bonus[0].startDate.slice(0,10):this.next_week,this._next_month=this.monthly_bonus.length?this.monthly_bonus[0].startDate.slice(0,10):this.next_month},methods:{format_number(l){return String(l).replace(/(.)(?=(\d{3})+$)/g,"$1,")},add_item(l){let o=l=="daily"?this.daily_bonus:l=="weekly"?this.weekly_bonus:this.monthly_bonus,y={period:l,type:"point",value:"",rank:o.length+1};o.push(y)},save_bonus_setting(){f({bonus:[...this.daily_bonus,...this.weekly_bonus,...this.monthly_bonus],next_day:this._next_day,next_week:this._next_week,next_month:this._next_month}).post(route("admin.ranking.bonus_update"),{preserveScroll:!0})}},setup(l){return{form:f({})}}},B={class:"h-full flex flex-col px-4 md:px-8 pb-10 md:items-center text-sm md:text-base"},D=t("div",{class:"pt-4 pb-4"},[t("h1",{class:"md:text-center md:text-lg font-bold"},"\u30E9\u30F3\u30AD\u30F3\u30B0\u5831\u916C\u7BA1\u7406")],-1),H=t("hr",{class:"w-full mb-2"},null,-1),q={class:"w-full flex flex-wrap justify-between items-center"},A=t("h1",{class:"px-2 py-2 text-base font-bold"},"\u65E5\u6B21\u30E9\u30F3\u30AD\u30F3\u30B0",-1),F={class:"w-full"},I=t("thead",null,[t("th",{class:"border px-1 py-1"},"\u30E9\u30F3\u30AF"),t("th",{class:"border px-1 py-1"},"\u7A2E\u985E"),t("th",{class:"border px-1 py-1"},"\u30DC\u30FC\u30CA\u30B9")],-1),N={class:"leading-8"},X={class:"w-1/4"},T=["onUpdate:modelValue"],z={class:""},E=["onUpdate:modelValue"],G=t("option",{value:"point",class:"py-0"},"\u30DD\u30A4\u30F3\u30C8",-1),J=t("option",{value:"product",class:"py-0"},"\u666F\u54C1",-1),K=[G,J],O={class:"font-bold"},P=["onUpdate:modelValue"],Q={class:"pt-10 w-full flex flex-wrap justify-between items-center"},R=t("h1",{class:"px-2 py-2 text-base font-bold"},"\u9031\u6B21\u30E9\u30F3\u30AD\u30F3\u30B0",-1),W={class:"w-full"},Y=t("thead",null,[t("th",{class:"border px-1 py-1"},"\u30E9\u30F3\u30AF"),t("th",{class:"border px-1 py-1"},"\u7A2E\u985E"),t("th",{class:"border px-1 py-1"},"\u30DC\u30FC\u30CA\u30B9")],-1),Z={class:"text-sm leading-8"},$={class:"w-1/4"},tt=["onUpdate:modelValue"],et={class:""},st=["onUpdate:modelValue"],ot=t("option",{value:"point",class:"py-0"},"\u30DD\u30A4\u30F3\u30C8",-1),lt=t("option",{value:"product",class:"py-0"},"\u666F\u54C1",-1),nt=[ot,lt],dt={class:"font-bold"},at=["onUpdate:modelValue"],ut={class:"pt-10 w-full flex flex-wrap justify-between items-center"},rt=t("h1",{class:"px-2 py-2 text-base font-bold"},"\u6708\u6B21\u30E9\u30F3\u30AD\u30F3\u30B0",-1),_t={class:"w-full"},it=t("thead",null,[t("th",{class:"border px-1 py-1"},"\u30E9\u30F3\u30AF"),t("th",{class:"border px-1 py-1"},"\u7A2E\u985E"),t("th",{class:"border px-1 py-1"},"\u30DC\u30FC\u30CA\u30B9")],-1),ct={class:"text-sm leading-8"},pt={class:"w-1/4"},ht=["onUpdate:modelValue"],yt={class:""},bt=["onUpdate:modelValue"],xt=t("option",{value:"point",class:"py-0"},"\u30DD\u30A4\u30F3\u30C8",-1),mt=t("option",{value:"product",class:"py-0"},"\u666F\u54C1",-1),ft=[xt,mt],wt={class:"font-bold"},kt=["onUpdate:modelValue"],vt={class:"sticky bottom-6 w-full flex gap-2 justify-center"};function gt(l,o,y,Vt,n,i){const k=p("Head"),b=p("XMarkIcon"),v=p("Link"),g=p("AppLayout");return u(),r(h,null,[_(k,{title:"\u30E9\u30F3\u30AD\u30F3\u30B0\u5831\u916C\u7BA1\u7406"}),_(g,null,{default:w(()=>[t("div",B,[D,H,t("div",q,[A,d(t("input",{type:"text",class:"border-sky-200 h-8 w-32","onUpdate:modelValue":o[0]||(o[0]=e=>n._next_day=e)},null,512),[[a,n._next_day]])]),t("table",F,[I,t("tbody",N,[(u(!0),r(h,null,x(n.daily_bonus,(e,c)=>(u(),r("tr",null,[t("td",X,[d(t("input",{type:"text",class:"w-full border-sky-200 h-8","onUpdate:modelValue":s=>e.rank=s,required:""},null,8,T),[[a,e.rank]])]),t("td",z,[d(t("select",{"onUpdate:modelValue":s=>e.type=s,class:"h-8 py-0 w-full border-sky-200"},K,8,E),[[m,e.type]])]),t("td",O,[d(t("input",{type:"text",class:"w-full border-sky-200 h-8","onUpdate:modelValue":s=>e.value=s},null,8,P),[[a,e.value]])]),t("td",null,[_(b,{class:"h-5 w-5 mx-1",onClick:s=>n.daily_bonus.splice(c,1)},null,8,["onClick"])])]))),256))])]),t("button",{class:"my-2 px-6 py-1 rounded-md bg-neutral-600 hover:bg-neutral-500 text-white text-sm",onClick:o[1]||(o[1]=e=>i.add_item("daily"))},"\u8FFD\u52A0"),t("div",Q,[R,d(t("input",{type:"text",class:"border-sky-200 h-8 w-32","onUpdate:modelValue":o[2]||(o[2]=e=>n._next_week=e)},null,512),[[a,n._next_week]])]),t("table",W,[Y,t("tbody",Z,[(u(!0),r(h,null,x(n.weekly_bonus,(e,c)=>(u(),r("tr",null,[t("td",$,[d(t("input",{type:"text",class:"w-full border-sky-200 h-8","onUpdate:modelValue":s=>e.rank=s,required:""},null,8,tt),[[a,e.rank]])]),t("td",et,[d(t("select",{"onUpdate:modelValue":s=>e.type=s,class:"h-8 py-0 w-full border-sky-200"},nt,8,st),[[m,e.type]])]),t("td",dt,[d(t("input",{type:"text",class:"w-full border-sky-200 h-8","onUpdate:modelValue":s=>e.value=s},null,8,at),[[a,e.value]])]),t("td",null,[_(b,{class:"h-5 w-5 mx-1",onClick:s=>n.weekly_bonus.splice(c,1)},null,8,["onClick"])])]))),256))])]),t("button",{class:"my-2 px-6 py-1 rounded-md bg-neutral-600 hover:bg-neutral-500 text-white text-sm",onClick:o[3]||(o[3]=e=>i.add_item("weekly"))},"\u8FFD\u52A0"),t("div",ut,[rt,d(t("input",{type:"text",class:"border-sky-200 h-8 w-32","onUpdate:modelValue":o[4]||(o[4]=e=>n._next_month=e)},null,512),[[a,n._next_month]])]),t("table",_t,[it,t("tbody",ct,[(u(!0),r(h,null,x(n.monthly_bonus,(e,c)=>(u(),r("tr",null,[t("td",pt,[d(t("input",{type:"text",class:"w-full border-sky-200 h-8","onUpdate:modelValue":s=>e.rank=s,required:""},null,8,ht),[[a,e.rank]])]),t("td",yt,[d(t("select",{"onUpdate:modelValue":s=>e.type=s,class:"h-8 py-0 w-full border-sky-200"},ft,8,bt),[[m,e.type]])]),t("td",wt,[d(t("input",{type:"text",class:"w-full border-sky-200 h-8","onUpdate:modelValue":s=>e.value=s},null,8,kt),[[a,e.value]])]),t("td",null,[_(b,{class:"h-5 w-5 mx-1",onClick:s=>n.monthly_bonus.splice(c,1)},null,8,["onClick"])])]))),256))])]),t("button",{class:"my-2 px-6 py-1 rounded-md bg-neutral-600 hover:bg-neutral-500 text-white text-sm",onClick:o[5]||(o[5]=e=>i.add_item("monthly"))},"\u8FFD\u52A0"),t("div",vt,[t("button",{class:"mt-8 px-12 py-2 rounded-md bg-sky-600 hover:bg-sky-500 text-white text-sm",onClick:o[6]||(o[6]=(...e)=>i.save_bonus_setting&&i.save_bonus_setting(...e))},"\u4FDD\u5B58"),_(v,{href:l.route("ranking.about"),class:"mt-8 px-12 py-2 rounded-md bg-rose-600 hover:bg-rose-500 text-white text-sm"},{default:w(()=>[C("\u623B\u308B")]),_:1},8,["href"])])])]),_:1})],64)}const St=M(j,[["render",gt]]);export{St as default};
