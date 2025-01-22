import{H as k,L as y,G as w,r as d,o as r,c,b as u,w as h,F as v,d as t,J as m,K as p,t as o,I as S,e as a,h as j}from"./app.7dd38efc.js";import{A as P}from"./Admin.abf655ab.js";import{_ as A}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.015d7052.js";const B={components:{Head:k,AdminLayout:P,Link:y},props:{errors:Object,auth:Object,checkout:Object,point:Object,bank_info:Object,link_url:String,amount:Number,coupon_id:Number,merchant_id:String,public_key_id:String,payload:Object,signature:String,checkoutSessionId:String},data(){return{purchase_bank_uri:"user.point.purchase_bank",purchase_uri:"user.point",is_processing:!0}},mounted(){if(this.checkout)window.location.replace(this.checkout.url);else if(this.link_url)window.location.replace(this.link_url);else{const e=document.createElement("script");e.src="https://static-fe.payments-amazon.com/checkout.js",e.onload=this.renderAmazonPayButton,document.head.appendChild(e)}this.auth.user&&this.auth.user.type==1&&(this.is_admin=!0,this.purchase_bank_uri="test.user.point.purchase_bank",this.purchase_uri="test.user.point")},methods:{format_number(e){return String(e).replace(/(.)(?=(\d{3})+$)/g,"$1,")},makeBankPayment(){confirm("\u9280\u884C\u53E3\u5EA7\u60C5\u5831\u3092\u6B63\u78BA\u306B\u5165\u529B\u3057\u307E\u3057\u305F\u304B\uFF1F")&&this.form.post(route(this.purchase_bank_uri,{id:this.point.id,coupon_id:this.coupon_id}),{preserveScroll:!0,onFinish:()=>{}})},back(){window.history.back()},renderAmazonPayButton(){this.is_processing=!1,amazon.Pay.renderButton("#AmazonPayButton",{merchantId:this.merchant_id,publicKeyId:this.public_key_id,ledgerCurrency:"JPY",checkoutLanguage:"ja_JP",productType:"PayOnly",placement:"Checkout",buttonColor:"Gold",createCheckoutSessionConfig:{payloadJSON:JSON.stringify(this.payload),signature:this.signature,algorithm:"AMZN-PAY-RSASSA-PSS-V2"}})}},setup(e){return{form:w({point_id:e.point.id,account:"",bank_name:""})}}},C={key:0,class:"w-max max-w-full mx-auto flex flex-col items-center px-4"},N=t("h3",{class:"text-center my-5 font-bold text-lg underline underline-offset-4"},"\u9280\u884C\u632F\u308A\u8FBC\u307F\u306E\u6D41\u308C",-1),O={class:"border p-5 rounded-lg w-full flex flex-col items-center gap-4"},L=t("div",{class:"flex w-full"},[t("span",null,[t("strong",null,"1")]),t("p",{class:"ml-3 indent-1"},"\u632F\u308A\u8FBC\u307F\u5143\u53E3\u5EA7\u60C5\u5831\u306E\u5165\u529B")],-1),V={class:"flex flex-col gap-2"},z={class:"form-group flex items-center gap-2"},J=t("label",{for:"account",class:"w-20 block text-right"},[a("\u53E3\u5EA7\u540D\u7FA9 "),t("span",{class:"text-red-500"},"*")],-1),F={class:"form-group flex items-center gap-2"},H=t("label",{for:"bank_name",class:"w-20 block text-right"},[a("\u9280\u884C\u540D "),t("span",{class:"text-red-500"},"*")],-1),I={class:"text-center"},M=["src"],T={class:"border p-5 rounded-lg w-full flex flex-col items-center gap-4"},D=t("div",{class:"flex w-full"},[t("span",null,[t("strong",null,"2")]),t("p",{class:"ml-3 indent-1"},"\u9280\u884C\u632F\u308A\u8FBC\u307F")],-1),E={class:"text-center w-full flex flex-col gap-1"},G={class:"flex justify-start"},K=t("span",{class:"font-bold text-right pr-8 w-2/5"},"\u9280\u884C\u540D",-1),U={class:"flex justify-start"},Y=t("span",{class:"font-bold text-right pr-8 w-2/5"},"\u652F\u5E97\u30B3\u30FC\u30C9",-1),R={class:"flex justify-start"},Z=t("span",{class:"font-bold text-right pr-8 w-2/5"},"\u652F\u5E97\u540D",-1),q={class:"flex justify-start"},Q=t("span",{class:"font-bold text-right pr-8 w-2/5"},"\u53E3\u5EA7\u7A2E\u985E",-1),W={class:"flex justify-start"},X=t("span",{class:"font-bold text-right pr-8 w-2/5"},"\u53E3\u5EA7\u540D\u7FA9",-1),$={class:""},tt={class:"flex justify-start"},et=t("span",{class:"font-bold text-right pr-8 w-2/5"},"\u53E3\u5EA7\u756A\u53F7",-1),st={class:"flex justify-start"},nt=t("span",{class:"font-bold text-right pr-8 w-2/5"},"\u91D1\u984D",-1),ot={class:"text-center"},at=["src"],it=t("div",{class:"border p-5 rounded-lg w-full flex"},[t("span",null,[t("strong",null,"3")]),t("p",{class:"ml-3 indent-1"},[a("\u904B\u55B6\u304C\u632F\u308A\u8FBC\u307F\u78BA\u8A8D\u5F8C\u3001 \u30DD\u30A4\u30F3\u30C8\u306E\u8CFC\u5165\u5B8C\u4E86"),t("br"),a("\u30DD\u30A4\u30F3\u30C8\u53CD\u6620\u307E\u3067\u304A\u6642\u9593\u304C\u304B\u304B\u308B\u5834\u5408\u304C\u3054\u3056\u3044\u307E\u3059\u3002")])],-1),lt=t("br",null,null,-1),rt={class:"mb-6 flex flex-wrap justify-center gap-2"},ct=t("span",null,"\u5B8C\u4E86",-1),dt=[ct],ut=t("br",null,null,-1),_t={key:1,class:"text-center rounded-md flex justify-center"},ht={key:0,class:"mt-8 mb-8 text-center"},mt=t("div",{id:"AmazonPayButton",class:"mt-8"},null,-1);function pt(e,n,s,i,f,_){const b=d("Head"),x=d("Link"),g=d("AdminLayout");return r(),c(v,null,[u(b,{title:"\u6C7A\u6E08"}),u(g,null,{default:h(()=>[s.bank_info?(r(),c("div",C,[N,t("div",O,[L,t("form",V,[t("div",z,[J,m(t("input",{type:"text",class:"rounded-md",id:"account",placeholder:"\u53E3\u5EA7\u540D\u7FA9","onUpdate:modelValue":n[0]||(n[0]=l=>i.form.account=l)},null,512),[[p,i.form.account]])]),t("div",F,[H,m(t("input",{type:"text",class:"rounded-md",id:"bank_name",placeholder:"\u9280\u884C\u540D","onUpdate:modelValue":n[1]||(n[1]=l=>i.form.bank_name=l)},null,512),[[p,i.form.bank_name]])])])]),t("div",I,[t("img",{src:"/images/arrow_down.png",class:"h-10"},null,8,M)]),t("div",T,[D,t("div",E,[t("div",G,[K,t("span",null,o(s.bank_info.bank_name),1)]),t("div",U,[Y,t("span",null,o(s.bank_info.branch_code),1)]),t("div",R,[Z,t("span",null,o(s.bank_info.branch_name),1)]),t("div",q,[Q,t("span",null,o(s.bank_info.account_type),1)]),t("div",W,[X,t("span",$,o(s.bank_info.holder_name),1)]),t("div",tt,[et,t("span",null,o(s.bank_info.account_number),1)]),t("div",st,[nt,t("span",null,"\xA5 "+o(_.format_number(s.amount)),1)])])]),t("div",ot,[t("img",{src:"/images/arrow_down.png",class:"h-10"},null,8,at)]),it,lt,t("div",rt,[t("button",{class:"px-8 py-2 rounded-md hover:bg-sky-100 border border-sky-500 text-sky-600",onClick:n[2]||(n[2]=S(l=>_.makeBankPayment(),["prevent"]))},dt),ut,u(x,{href:e.route(f.purchase_uri),class:"px-8 py-2 rounded-md hover:bg-rose-100 border border-rose-500 text-rose-600"},{default:h(()=>[a(" \u623B\u308B ")]),_:1},8,["href"])])])):(r(),c("div",_t,[s.merchant_id?j("",!0):(r(),c("div",ht," \u51E6\u7406\u4E2D\u3067\u3059\u3002 ")),mt]))]),_:1})],64)}const kt=A(B,[["render",pt]]);export{kt as default};
