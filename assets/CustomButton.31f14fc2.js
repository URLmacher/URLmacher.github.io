import{d as c,K as p,c as f,k as m,y as b,L as v,q as t,M as B,_,s as a}from"./index.dd76da29.js";const y=c({__name:"CustomButton",props:{color:{},darkMode:{type:Boolean},disable:{type:Boolean},flat:{type:Boolean},icon:{},inline:{type:Boolean},label:{},loading:{type:Boolean},negative:{type:Boolean},outlined:{type:Boolean}},setup(s){const r=s,{disable:l,negative:i,outlined:n,darkMode:u,color:e}=p(r),d=f(()=>l.value?a.GREY:i.value?a.NEGATIVE:u.value?a.WHITE:e!=null&&e.value?e.value:a.PRIMARY);return(o,g)=>(m(),b(B,v({class:["custom-button",{"custom-button--outlined":t(n),"custom-button--dark-mode":t(u),"custom-button--flat":o.flat,"custom-button--color":t(e),"full-width":!o.inline}],color:d.value,disable:t(l),flat:o.flat,icon:o.icon,label:o.loading?"...":o.label,loading:o.loading,outline:t(n),unelevated:""},o.$attrs),null,16,["class","color","disable","flat","icon","label","loading","outline"]))}});var k=_(y,[["__scopeId","data-v-25a95bd8"]]);export{k as C};