import{_ as h,c as n,a as u,b as t,d as _,F as a,f as p,t as e,g,r as f,o as l}from"./index.098ad6c4.js";const m={data(){return{order:{user:{}},orderId:""}},methods:{getOrder(){const d=`https://vue3-course-api.hexschool.io/v2//api/jpshop/order/${this.orderId}`;this.isLoading=!0,this.$http.get(d).then(s=>{this.order=s.data.order,this.isLoading=!1}).catch(s=>{this.isLoading=!1,this.$httpMessageState(s.response,"\u932F\u8AA4\u8A0A\u606F")})},payOrder(){const d=`https://vue3-course-api.hexschool.io/v2//api/jpshop/pay/${this.orderId}`;this.isLoading=!0,this.$http.post(d).then(()=>{this.isLoading=!1,this.getOrder()}).catch(s=>{this.isLoading=!1,this.$httpMessageState(s.response,"\u932F\u8AA4\u8A0A\u606F")})}},created(){this.orderId=this.$route.params.orderId,this.getOrder()}},y={class:"my-5 row justify-content-center"},b={class:"table align-middle"},v=t("thead",null,[t("th",null,"\u54C1\u540D"),t("th",null,"\u6578\u91CF"),t("th",null,"\u55AE\u50F9")],-1),x={class:"text-end"},L=t("td",{colspan:"2",class:"text-end"},"\u7E3D\u8A08",-1),k={class:"text-end"},O={class:"table"},I=t("th",{width:"100"},"Email",-1),$=t("th",null,"\u59D3\u540D",-1),S=t("th",null,"\u6536\u4EF6\u4EBA\u96FB\u8A71",-1),j=t("th",null,"\u6536\u4EF6\u4EBA\u5730\u5740",-1),w=t("th",null,"\u4ED8\u6B3E\u72C0\u614B",-1),B={key:0},C={key:1,class:"text-success"},M={key:0,class:"text-end"},N=t("button",{class:"btn btn-danger"},"\u78BA\u8A8D\u4ED8\u6B3E\u53BB",-1),V=[N];function E(d,s,F,q,o,i){const c=f("Loading");return l(),n(a,null,[u(c,{active:d.isLoading,"z-index":1060},null,8,["active"]),t("div",y,[t("form",{class:"col-md-6",onSubmit:s[0]||(s[0]=_((...r)=>i.payOrder&&i.payOrder(...r),["prevent"]))},[t("table",b,[v,t("tbody",null,[(l(!0),n(a,null,p(o.order.products,r=>(l(),n("tr",{key:r.id},[t("td",null,e(r.product.title),1),t("td",null,e(r.qty)+"/"+e(r.product.unit),1),t("td",x,e(r.final_total),1)]))),128))]),t("tfoot",null,[t("tr",null,[L,t("td",k,e(o.order.total),1)])])]),t("table",O,[t("tbody",null,[t("tr",null,[I,t("td",null,e(o.order.user.email),1)]),t("tr",null,[$,t("td",null,e(o.order.user.name),1)]),t("tr",null,[S,t("td",null,e(o.order.user.tel),1)]),t("tr",null,[j,t("td",null,e(o.order.user.address),1)]),t("tr",null,[w,t("td",null,[o.order.is_paid?(l(),n("span",C,"\u4ED8\u6B3E\u5B8C\u6210")):(l(),n("span",B,"\u5C1A\u672A\u4ED8\u6B3E"))])])])]),o.order.is_paid===!1?(l(),n("div",M,V)):g("",!0)],32)])],64)}const D=h(m,[["render",E]]);export{D as default};
