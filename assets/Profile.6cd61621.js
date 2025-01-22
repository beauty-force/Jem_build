import{H as g,u as v,r as _,o as d,c as a,b as c,w as k,F as u,d as e,h as m,Z as p,t as i,f as w,e as l,n as y}from"./app.7dd38efc.js";import{A as T}from"./Admin.abf655ab.js";import{_ as P}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as H}from"./PlayIcon.8f82b1b6.js";import"./toastify.015d7052.js";const L={components:{Head:g,AdminLayout:T,PlayIcon:H},props:{ranks:Object,mark_pos:Number,current_pos:Number,succeed:Boolean},data(){return{user:null,current_rank:null}},methods:{pt_rate_string(s){return s.rank==1?'<span class="text-[1.5em]">\u2014</span>':s.limit<0||s.pt_rate<=0?'<span class="text-[1.2em]">???</span>':`${s.pt_rate}%\u4ED8\u4E0E<br/>(\u8CFC\u5165\u6642PT\u306E)`},format_number(s){return String(s).replace(/(.)(?=(\d{3})+$)/g,"$1,")},bonus_pt_string(s){return s.rank==1?'<span class="text-[1.5em]">\u2014</span>':s.limit<0||s.pt_rate<=0?'<span class="text-[1.2em]">???</span>':`${this.format_number(s.bonus)}PT`}},mounted(){this.user=v().props.value.auth.user,this.current_rank=this.ranks.filter(s=>s.rank==this.user.current_rank)[0]}},j={class:"px-2 md:px-10"},M=e("p",{class:"py-3 px-6 mx-2 md:mx-4 font-bold align-middle text-base md:text-xl border"},"\u30DE\u30A4\u30DA\u30FC\u30B8",-1),W={key:0,class:"py-4 md:py-6 px-3 md:px-5 mx-2 md:mx-4 bg-neutral-200 rounded-b-xl shadow-inner text-xs md:text-sm"},S={class:"mx-4 md:mx-8"},z=["src"],C={key:0,class:"w-full flex justify-end mt-3 -mb-3"},F=e("span",{class:"rounded-full border font-bold px-2 py-0.5 text-xs -mr-1 bg-neutral-400/20 border-neutral-400"},"\u30E9\u30F3\u30AFUP",-1),N=[F],A={class:"flex border-t border-b mt-4 relative h-5 md:h-6 px-2"},B=e("span",{class:"h-full rounded-l-md border border-neutral-800 px-4 bg-neutral-400/20 font-bold z-10 flex items-center"},"\u6D88\u8CBB PT",-1),I={class:"flex-1 relative"},V={class:"h-full bg-gray-50 rounded-r-xl overflow-hidden border-t border-b border-r border-neutral-800"},G=["src"],O={key:1,class:"w-full flex justify-end my-3 px-2"},E=e("div",{class:"w-fit flex px-3 py-0.5 items-center bg-neutral-400/20 border border-neutral-400 rounded-full"},[e("img",{src:"images/mark_red_icon.svg",class:"w-4 md:w-5"}),e("span",{class:"text-xs md:text-sm"},"\u30E9\u30F3\u30AF\u7DAD\u6301\u9054\u6210"),e("img",{src:"images/mark_black_icon.svg",class:"w-4 md:w-5 ml-3"}),e("span",{class:"text-xs md:text-sm"},"\u30E9\u30F3\u30AF\u7DAD\u6301\u672A\u9054\u6210")],-1),U=[E],D=e("div",{class:"text-center mt-6"},[e("span",{class:"text-sm md:text-lg text-black font-extrabold border bg-neutral-400/20 border-neutral-400 px-3 py-0.5"},"\u25A0 \u73FE\u5728\u53D7\u3051\u3089\u308C\u308B\u7279\u5178\u4E00\u89A7 \u25A0")],-1),K={class:"rounded-lg bg-neutral-50 drop-shadow-[0px_0px_10px_rgba(0,0,0,0.1)] mt-5 mx-1 py-2 px-4 font-bold text-xs md:text-sm leading-5 md:leading-7"},R=e("p",{class:"mt-6 px-6 font-bold align-middle text-sm md:text-lg"},[e("span",{class:"text-[0.6em]"},"\u25A0"),l(" \u4F1A\u54E1\u30E9\u30F3\u30AF\u306B\u3064\u3044\u3066")],-1),Z=e("div",{class:"px-6 mt-1 mb-4 font-bold text-xs md:text-sm"},[e("p",{class:"pb-1 leading-5 md:leading-7"}," \u30DC\u30FC\u30CA\u30B9PT\u3084GP\u4ED8\u4E0E\u7387\u4E0A\u6607\u3001 \u30E9\u30F3\u30AF\u9650\u5B9A\u30AA\u30EA\u30D1\u306A\u3069\u3001\u3055\u307E\u3056\u307E\u306A\u7279\u5178\u304C\u53D7\u3051 \u3089\u308C\u307E\u3059\u3002 ")],-1),q=e("hr",{class:"mt-2 md:mt-4 mb-5 md:mb-6 mx-4 md:mx-6 border-neutral-300 border"},null,-1),J=e("p",{class:"px-6 font-bold align-middle text-sm md:text-lg"},[e("span",{class:"text-[0.6em]"},"\u25A0"),l(" \u30E9\u30F3\u30AF\u30A2\u30C3\u30D7\u6761\u4EF6")],-1),Q=e("div",{class:"px-6 mt-1 mb-6 font-bold text-xs md:text-sm"},[e("p",{class:"pb-1 leading-5 md:leading-7"},[l(" \u30E9\u30F3\u30AF\u306F\u7D2F\u7A4D\u306EPT\u6D88\u8CBB\u6570\u306B\u3088\u3063\u3066\u5909\u52D5\u3057\u307E\u3059\u3002"),e("br"),l(" \u5404\u30E9\u30F3\u30AF\u6761\u4EF6\u3092\u6E80\u305F\u3059\u3068\u3001 \u5373\u6642\u306B\u6B21\u306E\u30E9\u30F3\u30AF\u3078\u3068\u79FB\u884C\u3057\u307E\u3059\u3002"),e("br"),e("span",{class:"text-[#FF0000]"}," \u203BPT\u306E\u7D2F\u7A4D\u306F\u6BCE\u67081\u65E50:00\u3067\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3059\u3002 ")])],-1),X=e("p",{class:"font-bold text-sm md:text-lg pb-1 pl-4 md:pl-6"},"\u3010\u4F8B\u3011",-1),Y={class:"py-5 px-3 md:px-5 mx-2 md:mx-4 bg-neutral-200 rounded-xl shadow-inner text-xs md:text-sm"},$=e("div",{class:"text-center"},[e("span",{class:"text-base md:text-xl text-black font-extrabold border bg-neutral-400/20 border-neutral-400 px-5"},"\u5373\u6642\u6607\u683C")],-1),ee={class:"flex font-bold items-center mt-2"},te={class:"flex-1"},se=["src"],le={class:"px-1"},re={class:"flex-1"},ne=["src"],de=e("div",{class:"w-full flex justify-end mt-3"},[e("span",{class:"rounded-full border font-bold px-2 py-0.5 text-xs -mr-1 bg-neutral-400/20 border-neutral-400"},"\u30E9\u30F3\u30AFUP")],-1),ae=e("div",{class:"flex border-t border-b mt-1 relative h-5 md:h-6 px-2"},[e("span",{class:"h-full rounded-l-md border border-neutral-800 px-4 bg-neutral-400/20 font-bold z-10 flex items-center"},"\u6D88\u8CBB PT"),e("div",{class:"flex-1 relative"},[e("div",{class:"h-full bg-gray-50 rounded-r-xl overflow-hidden border-t border-b border-r border-neutral-800"},[e("div",{class:"h-full bg-gradient-to-b from-[#00e23b] via-[#01f336] to-[#00e23b] w-full"})])])],-1),oe=e("div",{class:"rounded-lg bg-neutral-50 drop-shadow-[0px_0px_10px_rgba(0,0,0,0.1)] mt-5 mx-1 py-2 text-center font-bold text-sm md:text-lg"}," \u30E9\u30F3\u30AF\u6761\u4EF6\u9054\u6210\u5F8C\u3001 \u7FCC1\u30F6\u6708\u9593\u306F\u30E9\u30F3\u30AF\u7DAD\u6301 ",-1),ce=e("div",{class:"px-6 mt-3 mb-6 font-bold text-xs md:text-sm"},[e("p",{class:"pb-1 leading-5 md:leading-7"},[e("span",{class:"text-[#01f336]"},"\u30EB\u30FC\u30AD\u30FC(ROOKIE)"),l("\u4EE5\u4E0A\u306E\u30E9\u30F3\u30AF\u306B\u95A2\u3057\u3066\u306F\u3001 \u524D\u6708\u307E\u3067\u306B\u9054\u6210\u3057\u305F\u30E9\u30F3\u30AF\u6761\u4EF6\u3067\u3042\u308BPT\u6D88\u8CBB\u6570\u306E50%\u4EE5\u4E0A\u30921\u30F6\u6708\u4EE5\u5185\u306B\u9054\u6210\u3057\u3066\u3044\u308C\u3070\u3001\u305D\u306E\u30E9\u30F3\u30AF\u304C\u7DAD\u6301\u3055\u308C\u307E\u3059\u3002 ")]),e("p",{class:"text-center leading-5 md:leading-7"}," 1\u30F6\u6708\u9593\u306750%\u672A\u6E80\u306E\u5834\u5408\u306F\u73FE\u5728\u306E\u30E9\u30F3\u30AF\u304B\u30891\u3064\u30E9\u30F3\u30AF\u30C0\u30A6\u30F3\u3057\u307E\u3059\u3002 ")],-1),ie=e("p",{class:"font-bold text-sm md:text-lg pb-1 pl-4 md:pl-6"},"\u3010\u4F8B\u3011",-1),me={class:"py-5 px-3 md:px-5 mx-2 md:mx-4 bg-neutral-200 rounded-xl shadow-inner text-xs md:text-sm"},xe=e("div",{class:"text-center"},[e("span",{class:"text-sm md:text-lg text-[#FF0000] font-extrabold border bg-neutral-400/20 border-neutral-400 px-3 py-0.5"},"\u7D2F\u8A08PT\u6D88\u8CBB\u657050%\u4EE5\u4E0A\u9054\u6210")],-1),_e=e("div",{class:"flex border-t border-b mt-5 relative h-5 md:h-6 px-2"},[e("span",{class:"h-full rounded-l-md border border-neutral-800 px-4 bg-neutral-400/20 font-bold z-10 flex items-center"},"\u6D88\u8CBB PT"),e("div",{class:"flex-1 relative"},[e("div",{class:"h-full bg-gray-50 rounded-r-xl overflow-hidden border-t border-b border-r border-neutral-800"},[e("div",{class:"h-full bg-gradient-to-b from-[#00e23b] via-[#01f336] to-[#00e23b] w-[55%]"})]),e("div",{class:"absolute left-[40%] z-10 h-[130%] top-[-15%]"},[e("img",{src:"images/mark_red.svg",class:"h-full mx-[-50%]"})])])],-1),be=e("div",{class:"w-full flex justify-end my-3 px-2"},[e("div",{class:"w-fit flex px-3 py-0.5 items-center bg-neutral-400/20 border border-neutral-400 rounded-full"},[e("img",{src:"images/mark_red_icon.svg",class:"w-4 md:w-5"}),e("span",{class:"text-xs md:text-sm"},"\u30E9\u30F3\u30AF\u7DAD\u6301\u9054\u6210"),e("img",{src:"images/mark_black_icon.svg",class:"w-4 md:w-5 ml-3"}),e("span",{class:"text-xs md:text-sm"},"\u30E9\u30F3\u30AF\u7DAD\u6301\u672A\u9054\u6210")])],-1),ue={class:"flex font-bold items-center"},pe={class:"flex-1"},fe=e("div",{class:"text-center"},"\u5F53\u6708",-1),he=["src"],ge={class:"px-1 pt-4"},ve={class:"flex-1"},ke=e("div",{class:"text-center"},"\u7FCC\u6708",-1),we=["src"],ye=e("div",{class:"text-center mt-6"},[e("span",{class:"text-sm md:text-lg text-black font-extrabold border bg-neutral-400/20 border-neutral-400 px-3 py-0.5"},"\u7D2F\u8A08PT\u6D88\u8CBB\u657050%\u672A\u6E80")],-1),Te=e("div",{class:"flex border-t border-b mt-5 relative h-5 md:h-6 px-2"},[e("span",{class:"h-full rounded-l-md border border-neutral-800 px-4 bg-neutral-400/20 font-bold z-10 flex items-center"},"\u6D88\u8CBB PT"),e("div",{class:"flex-1 relative"},[e("div",{class:"h-full bg-gray-50 rounded-r-xl overflow-hidden border-t border-b border-r border-neutral-800"},[e("div",{class:"h-full bg-gradient-to-b from-[#00e23b] via-[#01f336] to-[#00e23b] w-[25%]"})]),e("div",{class:"absolute left-[40%] z-10 h-[130%] top-[-15%]"},[e("img",{src:"images/mark_black.svg",class:"h-full mx-[-50%]"})])])],-1),Pe=e("div",{class:"w-full flex justify-end my-3 px-2"},[e("div",{class:"w-fit flex px-3 py-0.5 items-center bg-neutral-400/20 border border-neutral-400 rounded-full"},[e("img",{src:"images/mark_red_icon.svg",class:"w-4 md:w-5"}),e("span",{class:"text-xs md:text-sm"},"\u30E9\u30F3\u30AF\u7DAD\u6301\u9054\u6210"),e("img",{src:"images/mark_black_icon.svg",class:"w-4 md:w-5 ml-3"}),e("span",{class:"text-xs md:text-sm"},"\u30E9\u30F3\u30AF\u7DAD\u6301\u672A\u9054\u6210")])],-1),He={class:"flex font-bold items-center"},Le={class:"flex-1"},je=e("div",{class:"text-center"},"\u5F53\u6708",-1),Me=["src"],We={class:"px-1 pt-4"},Se={class:"flex-1"},ze=e("div",{class:"text-center"},"\u7FCC\u6708",-1),Ce=["src"],Fe=e("hr",{class:"mt-5 md:mt-8 mb-8 md:mb-10 mx-4 md:mx-6 border-neutral-300 border"},null,-1),Ne=e("p",{class:"mb-6 px-4 font-bold align-middle text-sm md:text-lg"},[e("span",{class:"text-[0.6em]"},"\u25A0"),l(" \u30E9\u30F3\u30AF\u7279\u5178")],-1),Ae=e("div",{class:"w-full flex items-center mb-[-0.4em] text-[0.7em] sm:text-[1em]"},[e("div",{class:"w-[40%] text-center font-bold text-[1.1em]"},"\u30E9\u30F3\u30AF"),e("div",{class:"w-[30%] text-center font-bold text-[0.9em]"},"\u8CFC\u5165\u6642PT\u4ED8\u4E0E\u7279\u5178"),e("div",{class:"w-[12%] text-center font-bold text-[0.8em]"},"GP\u4ED8\u4E0E\u7387"),e("div",{class:"w-[18%] text-center font-bold text-[0.8em] leading-[1.2em] sm:leading-[1.5em]"},[l(" \u30E9\u30F3\u30AF\u30A2\u30C3\u30D7"),e("br"),l("\u30DC\u30FC\u30CA\u30B9PT")])],-1),Be={class:"flex flex-wrap border-neutral-200 items-center gap-[0.8em]"},Ie={class:"flex-1 flex bg-neutral-200 rounded-lg justify-center relative"},Ve={class:"w-full flex items-center"},Ge={class:"text-center text-[0.8em] font-bold text-white w-[40%] h-full flex items-center justify-center"},Oe=["src"],Ee={class:"text-center flex gap-[0.4em] absolute items-end h-full"},Ue={class:"relative flex justify-center text-[0.9em] drop-shadow-xl"},De={class:"leading-[1.2em]",style:{WebkitTextStrokeColor:"black",WebkitTextStrokeWidth:"2px"}},Ke={class:"absolute leading-[1.2em]"},Re=e("div",{class:"h-full w-[0.3em] bg-white"},null,-1),Ze={class:"text-center text-[1em] text-black font-black w-[30%] h-full flex flex-col items-center justify-center relative"},qe=["innerHTML"],Je=["innerHTML"],Qe=e("div",{class:"h-full w-[0.3em] bg-white"},null,-1),Xe={class:"w-[30%] flex divide-x-[0.3em] divide-white h-full relative"},Ye={class:"text-center text-[1em] text-black font-black w-[40%] h-full flex items-center justify-center"},$e=["innerHTML"],et=["innerHTML"],tt={class:"text-center text-[1em] text-black font-black w-[60%] h-full flex items-center justify-center relative"},st=["innerHTML"],lt=["innerHTML"],rt=e("div",{class:"py-4 px-2 md:px-8"},[e("p",{class:"font-bold text-sm md:text-lg"},"\u3010\u8CFC\u5165\u6642PT\u7279\u5178\u306B\u3064\u3044\u3066\u3011"),e("p",{class:"text-xs md:text-sm px-2 py-2"},[l(" \u8CFC\u5165\u3059\u308B\u91D1\u984D\u3054\u3068\u306E\u30DC\u30FC\u30CA\u30B9PT\u3067\u3059\u3002"),e("br"),l(" \u8CFC\u5165\u6642\u70B9\u306E\u30E9\u30F3\u30AF\u306B\u5FDC\u3058\u3066\u4ED8\u4E0E\u3055\u308C\u307E\u3059\u3002 ")]),e("p",{class:"font-bold text-sm md:text-lg pt-2"}," \u3010\u30E9\u30F3\u30AF\u30A2\u30C3\u30D7\u30DC\u30FC\u30CA\u30B9PT\u306B\u3064\u3044\u3066\u3011 "),e("p",{class:"text-xs md:text-sm px-2 py-2"},[l(" \u30E9\u30F3\u30AF\u6607\u683C\u6642\u306B\u30DC\u30FC\u30CA\u30B9PT\u304C\u4ED8\u4E0E\u3055\u308C\u307E\u3059\u3002"),e("br")]),e("p",{class:"font-bold text-sm md:text-lg pt-2"}," \u3010\u30E9\u30F3\u30AF\u9650\u5B9A\u30AA\u30EA\u30D1\u89E3\u653E\u306B\u3064\u3044\u3066\u3011 "),e("p",{class:"text-xs md:text-sm px-2 py-2"}," \u5404\u30E9\u30F3\u30AF\u6BCE\u306B\u9650\u5B9A\u30AA\u30EA\u30D1\u304C\u89E3\u653E\u3055\u308C\u307E\u3059\u3002 "),e("hr",{class:"my-4 mx-2 border-neutral-300 border"}),e("p",{class:"px-2 font-bold text-sm md:text-lg"},[e("span",{class:"text-[0.6em]"},"\u25A0"),l(" \u6CE8\u610F\u4E8B\u9805")]),e("p",{class:"text-xs md:text-sm px-2 py-2"}," \u4F1A\u54E1\u30E9\u30F3\u30AF\u306E\u6607\u683C\u6761\u4EF6\u3001 \u7DAD\u6301\u6761\u4EF6\u3001 \u6607\u683C\u6761\u4EF6\u3001 \u7279\u5178\u5185\u5BB9\u306F\u4E88\u544A\u306A\u304F\u5909\u66F4\u3068\u306A\u308B\u5834\u5408\u304C\u3054\u3056\u3044\u307E\u3059\u3002 \u3042\u3089\u304B\u3058\u3081\u3054\u4E86\u627F\u304F\u3060\u3055\u3044\u3002 ")],-1);function nt(s,dt,t,at,r,o){const f=_("Head"),x=_("PlayIcon"),h=_("AdminLayout");return d(),a(u,null,[c(f,{title:"\u30DE\u30A4\u30DA\u30FC\u30B8"}),c(h,null,{default:k(()=>[e("div",j,[M,r.current_rank?(d(),a("div",W,[e("div",S,[e("img",{src:r.current_rank.badge,class:"p-1"},null,8,z)]),r.current_rank.rank<t.ranks[0].rank-1?(d(),a("div",C,N)):m("",!0),e("div",A,[B,e("div",I,[e("div",V,[e("div",{class:"h-full bg-gradient-to-b from-[#00e23b] via-[#01f336] to-[#00e23b]",style:p({width:`${t.current_pos}%`})},null,4)]),r.current_rank.rank>1?(d(),a("div",{key:0,class:"absolute z-10 h-[130%] top-[-15%]",style:p({left:`${t.mark_pos}%`})},[e("img",{src:t.succeed?"images/mark_red.svg":"images/mark_black.svg",class:"h-full mx-[-50%]"},null,8,G)],4)):m("",!0)])]),r.current_rank.rank>1?(d(),a("div",O,U)):m("",!0),D,e("div",K,[e("p",null,"\u30FB\u30E9\u30F3\u30AF\u30A2\u30C3\u30D7\u30DC\u30FC\u30CA\u30B9 \xA0\xA0\xA0"+i(r.current_rank.bonus>0?o.format_number(r.current_rank.bonus):"\u2014")+" pt",1),e("p",null,i(r.current_rank.pt_rate>0?`\u30FB\u8CFC\u5165\u91D1\u984D\u3054\u3068\u306B \xA0\xA0\xA0${r.current_rank.pt_rate} %\u30DC\u30FC\u30CA\u30B9PT\u4ED8\u4E0E`:"\u30FB\u8CFC\u5165\u91D1\u984D\u3054\u3068\u306EPT\u4ED8\u4E0E \xA0\xA0\xA0\u901A\u5E38"),1),e("p",null,"\u30FBGP\u4ED8\u4E0E\u7387 \xA0\xA0\xA0"+i(r.current_rank.dp_rate>0?`${r.current_rank.dp_rate} %`:"\u901A\u5E38"),1)])])):m("",!0),R,Z,q,J,Q,X,e("div",Y,[$,e("div",ee,[e("div",te,[e("img",{src:t.ranks[t.ranks.length-1].badge,class:"p-1"},null,8,se)]),e("div",le,[c(x,{class:"w-5 h-5 text-black"})]),e("div",re,[e("img",{src:t.ranks[t.ranks.length-2].badge,class:"p-1"},null,8,ne)])]),de,ae,oe]),ce,ie,e("div",me,[xe,_e,be,e("div",ue,[e("div",pe,[fe,e("img",{src:t.ranks[t.ranks.length-2].badge,class:"p-1"},null,8,he)]),e("div",ge,[c(x,{class:"w-5 h-5 text-black"})]),e("div",ve,[ke,e("img",{src:t.ranks[t.ranks.length-2].badge,class:"p-1"},null,8,we)])]),ye,Te,Pe,e("div",He,[e("div",Le,[je,e("img",{src:t.ranks[t.ranks.length-2].badge,class:"p-1"},null,8,Me)]),e("div",We,[c(x,{class:"w-5 h-5 text-black"})]),e("div",Se,[ze,e("img",{src:t.ranks[t.ranks.length-1].badge,class:"p-1"},null,8,Ce)])])]),Fe,Ne,Ae,(d(!0),a(u,null,w(t.ranks,(n,b)=>(d(),a("div",{class:"my-[0.8em] md:my-[1.1em] text-[0.7em] sm:text-[1em]",key:b},[e("div",Be,[e("div",Ie,[e("div",Ve,[e("div",Ge,[e("img",{src:n.image,class:y(["h-[14vw] max-h-[80px] -my-1",{"py-1.5":b>4}])},null,10,Oe),e("div",Ee,[e("div",Ue,[e("span",De,"( "+i(n.title)+" )",1),e("span",Ke,"( "+i(n.title)+" )",1)])])]),Re,e("div",Ze,[e("span",{class:"leading-[1.4em]",innerHTML:o.pt_rate_string(n),style:{WebkitTextStrokeColor:"white",WebkitTextStrokeWidth:"2px"}},null,8,qe),e("span",{class:"absolute leading-[1.4em]",innerHTML:o.pt_rate_string(n)},null,8,Je)]),Qe,e("div",Xe,[e("div",Ye,[e("span",{innerHTML:n.dp_rate>0?n.dp_rate+"%":"<span class='text-[1.2em]'>???</span>",style:{WebkitTextStrokeColor:"white",WebkitTextStrokeWidth:"2px"}},null,8,$e),e("span",{class:"absolute",innerHTML:n.dp_rate>0?n.dp_rate+"%":"<span class='text-[1.2em]'>???</span>"},null,8,et)]),e("div",tt,[e("span",{class:"leading-[1.4em]",innerHTML:o.bonus_pt_string(n),style:{WebkitTextStrokeColor:"white",WebkitTextStrokeWidth:"2px"}},null,8,st),e("span",{class:"absolute leading-[1.4em]",innerHTML:o.bonus_pt_string(n)},null,8,lt)])])])])])]))),128)),rt])]),_:1})],64)}const _t=P(L,[["render",nt]]);export{_t as default};
