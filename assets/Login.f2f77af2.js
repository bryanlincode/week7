import{T as h,e as _}from"./ToastMessages.6507ea8e.js";import{_ as f,c as g,a as d,b as s,w as l,v as c,d as v,r as p,o as b}from"./index.098ad6c4.js";const w={components:{ToastMessages:h},data(){return{isLoading:!1,user:{}}},provide(){return{emitter:_}},methods:{signIn(){const n="https://vue3-course-api.hexschool.io/v2//admin/signin";this.isLoading=!0,this.$http.post(n,this.user).then(e=>{const{token:i,expired:a}=e.data;document.cookie=`hexToken=${i};expires=${new Date(a)};`,this.isLoading=!1,this.$router.push("/admin/products")}).catch(e=>{this.isLoading=!1,this.$httpMessageState(e.response,"\u767B\u5165")})}}},x={class:"container mt-5"},L={class:"col-md-6"},y=s("h1",{class:"h3 mb-3 font-weight-normal"},"\u8ACB\u5148\u767B\u5165",-1),k={class:"mb-2"},M=s("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),T={class:"mb-2"},E=s("label",{for:"inputPassword",class:"sr-only"},"Password",-1),P=s("div",{class:"text-end mt-4"},[s("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"}," \u767B\u5165 ")],-1);function V(n,e,i,a,t,r){const u=p("Loading"),m=p("ToastMessages");return b(),g("div",x,[d(u,{active:t.isLoading,"z-index":1060},null,8,["active"]),d(m),s("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=v((...o)=>r.signIn&&r.signIn(...o),["prevent"]))},[s("div",L,[y,s("div",k,[M,l(s("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address","onUpdate:modelValue":e[0]||(e[0]=o=>t.user.username=o),required:"",autofocus:""},null,512),[[c,t.user.username]])]),s("div",T,[E,l(s("input",{type:"password",id:"inputPassword",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=o=>t.user.password=o),placeholder:"Password",required:""},null,512),[[c,t.user.password]])]),P])],32)])}const $=f(w,[["render",V]]);export{$ as default};
