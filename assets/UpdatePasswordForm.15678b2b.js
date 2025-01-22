import{m as c,G as _,o as m,c as i,d as o,b as e,C as r,w,W as y,I as V,e as g,h as v}from"./app.7dd38efc.js";import{a as l,b as n,_ as d}from"./TextInput.5417f865.js";import{_ as x}from"./PrimaryButton.9cc84eef.js";const b=o("header",null,[o("h2",{class:"text-lg font-medium text-gray-900"},"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u66F4\u65B0"),o("p",{class:"mt-1 text-sm text-gray-600"},"\u5B89\u5168\u3092\u78BA\u4FDD\u3059\u308B\u306B\u306F\u3001\u30A2\u30AB\u30A6\u30F3\u30C8\u3067\u9577\u304F\u3066\u30E9\u30F3\u30C0\u30E0\u306A\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3088\u3046\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002")],-1),k=["onSubmit"],I={class:"flex items-center gap-4"},S={key:0,class:"text-sm text-gray-600"},B={__name:"UpdatePasswordForm",setup(h){const u=c(null),p=c(null),s=_({current_password:"",password:"",password_confirmation:""}),f=()=>{s.put(route("password.update"),{preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),u.value.focus()),s.errors.current_password&&(s.reset("current_password"),p.value.focus())}})};return(N,a)=>(m(),i("section",null,[b,o("form",{onSubmit:V(f,["prevent"]),class:"mt-6 space-y-6"},[o("div",null,[e(d,{for:"current_password",value:"\u73FE\u5728\u306E\u30D1\u30B9\u30EF\u30FC\u30C9"}),e(l,{id:"current_password",ref_key:"currentPasswordInput",ref:p,modelValue:r(s).current_password,"onUpdate:modelValue":a[0]||(a[0]=t=>r(s).current_password=t),type:"password",class:"mt-1 block w-full",autocomplete:"current-password"},null,8,["modelValue"]),e(n,{message:r(s).errors.current_password,class:"mt-2"},null,8,["message"])]),o("div",null,[e(d,{for:"password",value:"\u65B0\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9"}),e(l,{id:"password",ref_key:"passwordInput",ref:u,modelValue:r(s).password,"onUpdate:modelValue":a[1]||(a[1]=t=>r(s).password=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),e(n,{message:r(s).errors.password,class:"mt-2"},null,8,["message"])]),o("div",null,[e(d,{for:"password_confirmation",value:"\u30D1\u30B9\u30EF\u30FC\u30C9\u306E\u78BA\u8A8D"}),e(l,{id:"password_confirmation",modelValue:r(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>r(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),e(n,{message:r(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])]),o("div",I,[e(x,{disabled:r(s).processing},{default:w(()=>[g("\u4FDD\u5B58")]),_:1},8,["disabled"]),e(y,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:w(()=>[r(s).recentlySuccessful?(m(),i("p",S,"\u4FDD\u5B58\u3055\u308C\u307E\u3057\u305F\u3002")):v("",!0)]),_:1})])],40,k)]))}};export{B as default};
