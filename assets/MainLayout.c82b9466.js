import{Q as gt}from"./QImg.4645eb07.js";import{i as we,C as V,r as x,c as u,a0 as U,o as ce,be as rt,a3 as it,a4 as yt,h as $,X as Ge,aF as wt,bf as _t,a2 as ge,ax as je,g as K,bg as Tt,bh as Ct,B as X,bi as St,bj as qt,w as q,b9 as Ue,a7 as ut,Y as $e,aG as Fe,aN as Ve,aO as He,S as Ke,U as xt,V as kt,D as Xe,bk as Lt,G as _e,aJ as $t,ag as Rt,aM as Pt,ai as Bt,aQ as zt,bl as Ot,ak as Ye,bm as It,H as Mt,aL as At,aV as Et,bn as Vt,bo as pt,aI as pe,bp as xe,a as Dt,d as st,v as N,bc as Ft,bq as ct,k as re,y as be,A as ne,n as se,l as Qe,x as We,F as Ne,q as Le,R as Je,j as W,t as Ze,br as Ht,_ as dt,bs as Qt,M as Wt,s as Nt}from"./index.dd76da29.js";import{T as De,b as ke,u as vt}from"./localisation.composable.f8b84758.js";import{L as jt}from"./owner.data.dd75d24b.js";import{S as et}from"./index.fb1267e9.js";import"./vue-i18n.4f952adc.js";let Ut=0;const Kt=["click","keydown"],Xt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Ut++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Gt(e,T,r,l){const a=we(rt,V);if(a===V)return console.error("QTab/QRouteTab component needs to be child of QTabs"),V;const{proxy:d}=K(),b=x(null),R=x(null),v=x(null),y=u(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),n=u(()=>a.currentModel.value===e.name),z=u(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(n.value===!0?" q-tab--active"+(a.tabProps.value.activeClass?" "+a.tabProps.value.activeClass:"")+(a.tabProps.value.activeColor?` text-${a.tabProps.value.activeColor}`:"")+(a.tabProps.value.activeBgColor?` bg-${a.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&a.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||a.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(l!==void 0?l.linkClass.value:"")),O=u(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(a.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),g=u(()=>e.disable===!0||a.hasFocus.value===!0||n.value===!1&&a.hasActiveTab.value===!0?-1:e.tabindex||0);function _(f,h){if(h!==!0&&b.value!==null&&b.value.focus(),e.disable===!0){l!==void 0&&l.hasRouterLink.value===!0&&Ge(f);return}if(l===void 0){a.updateModel({name:e.name}),r("click",f);return}if(l.hasRouterLink.value===!0){const i=(w={})=>{let I;const M=w.to===void 0||Tt(w.to,e.to)===!0?a.avoidRouteWatcher=Ct():null;return l.navigateToRouterLink(f,{...w,returnRouterError:!0}).catch(A=>{I=A}).then(A=>{if(M===a.avoidRouteWatcher&&(a.avoidRouteWatcher=!1,I===void 0&&(A===void 0||A.message!==void 0&&A.message.startsWith("Avoided redundant navigation")===!0)&&a.updateModel({name:e.name})),w.returnRouterError===!0)return I!==void 0?Promise.reject(I):A})};r("click",f,i),f.defaultPrevented!==!0&&i();return}r("click",f)}function B(f){wt(f,[13,32])?_(f,!0):_t(f)!==!0&&f.keyCode>=35&&f.keyCode<=40&&f.altKey!==!0&&f.metaKey!==!0&&a.onKbdNavigate(f.keyCode,d.$el)===!0&&Ge(f),r("keydown",f)}function P(){const f=a.tabProps.value.narrowIndicator,h=[],i=$("div",{ref:v,class:["q-tab__indicator",a.tabProps.value.indicatorClass]});e.icon!==void 0&&h.push($(ge,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&h.push($("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&h.push(e.alertIcon!==void 0?$(ge,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):$("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),f===!0&&h.push(i);const w=[$("div",{class:"q-focus-helper",tabindex:-1,ref:b}),$("div",{class:O.value},je(T.default,h))];return f===!1&&w.push(i),w}const C={name:u(()=>e.name),rootRef:R,tabIndicatorRef:v,routeData:l};U(()=>{a.unregisterTab(C)}),ce(()=>{a.registerTab(C)});function m(f,h){const i={ref:R,class:z.value,tabindex:g.value,role:"tab","aria-selected":n.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:_,onKeydown:B,...h};return it($(f,i,P()),[[yt,y.value]])}return{renderTab:m,$tabs:a}}var tt=X({name:"QRouteTab",props:{...St,...Xt},emits:Kt,setup(e,{slots:T,emit:r}){const l=qt({useDisableForRouterLinkProps:!1}),{renderTab:a,$tabs:d}=Gt(e,T,r,{exact:u(()=>e.exact),...l});return q(()=>`${e.name} | ${e.exact} | ${(l.resolvedLink.value||{}).href}`,()=>{d.verifyRouteModel()}),()=>a(l.linkTag.value,l.linkAttrs.value)}});function Yt(){const e=x(!Ue.value);return e.value===!1&&ce(()=>{e.value=!0}),{isHydrated:e}}const ft=typeof ResizeObserver!="undefined",at=ft===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ye=X({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:T}){let r=null,l,a={width:-1,height:-1};function d(v){v===!0||e.debounce===0||e.debounce==="0"?b():r===null&&(r=setTimeout(b,e.debounce))}function b(){if(r!==null&&(clearTimeout(r),r=null),l){const{offsetWidth:v,offsetHeight:y}=l;(v!==a.width||y!==a.height)&&(a={width:v,height:y},T("resize",a))}}const{proxy:R}=K();if(R.trigger=d,ft===!0){let v;const y=n=>{l=R.$el.parentNode,l?(v=new ResizeObserver(d),v.observe(l),b()):n!==!0&&$e(()=>{y(!0)})};return ce(()=>{y()}),U(()=>{r!==null&&clearTimeout(r),v!==void 0&&(v.disconnect!==void 0?v.disconnect():l&&v.unobserve(l))}),ut}else{let n=function(){r!==null&&(clearTimeout(r),r=null),y!==void 0&&(y.removeEventListener!==void 0&&y.removeEventListener("resize",d,Fe.passive),y=void 0)},z=function(){n(),l&&l.contentDocument&&(y=l.contentDocument.defaultView,y.addEventListener("resize",d,Fe.passive),b())};const{isHydrated:v}=Yt();let y;return ce(()=>{$e(()=>{l=R.$el,l&&z()})}),U(n),()=>{if(v.value===!0)return $("object",{class:"q--avoid-card-border",style:at.style,tabindex:-1,type:"text/html",data:at.url,"aria-hidden":"true",onLoad:z})}}}});let ht=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const T=document.createElement("div");Object.assign(T.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(T),e.scrollLeft=-1e3,ht=e.scrollLeft>=0,e.remove()}function Jt(e,T,r){const l=r===!0?["left","right"]:["top","bottom"];return`absolute-${T===!0?l[0]:l[1]}${e?` text-${e}`:""}`}const Zt=["left","center","right","justify"];var lt=X({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Zt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:T,emit:r}){const{proxy:l}=K(),{$q:a}=l,{registerTick:d}=Ve(),{registerTick:b}=Ve(),{registerTick:R}=Ve(),{registerTimeout:v,removeTimeout:y}=He(),{registerTimeout:n,removeTimeout:z}=He(),O=x(null),g=x(null),_=x(e.modelValue),B=x(!1),P=x(!0),C=x(!1),m=x(!1),f=[],h=x(0),i=x(!1);let w=null,I=null,M;const A=u(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Jt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),F=u(()=>{const o=h.value,s=_.value;for(let t=0;t<o;t++)if(f[t].name.value===s)return!0;return!1}),G=u(()=>`q-tabs__content--align-${B.value===!0?"left":m.value===!0?"justify":e.align}`),Te=u(()=>`q-tabs row no-wrap items-center q-tabs--${B.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Y=u(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+G.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),J=u(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),ie=u(()=>e.vertical!==!0&&a.lang.rtl===!0),Z=u(()=>ht===!1&&ie.value===!0);q(ie,le),q(()=>e.modelValue,o=>{ue({name:o,setCurrent:!0,skipEmit:!0})}),q(()=>e.outsideArrows,ee);function ue({name:o,setCurrent:s,skipEmit:t}){_.value!==o&&(t!==!0&&e["onUpdate:modelValue"]!==void 0&&r("update:modelValue",o),(s===!0||e["onUpdate:modelValue"]===void 0)&&(Re(_.value,o),_.value=o))}function ee(){d(()=>{te({width:O.value.offsetWidth,height:O.value.offsetHeight})})}function te(o){if(J.value===void 0||g.value===null)return;const s=o[J.value.container],t=Math.min(g.value[J.value.scroll],Array.prototype.reduce.call(g.value.children,(S,k)=>S+(k[J.value.content]||0),0)),c=s>0&&t>s;B.value=c,c===!0&&b(le),m.value=s<parseInt(e.breakpoint,10)}function Re(o,s){const t=o!=null&&o!==""?f.find(S=>S.name.value===o):null,c=s!=null&&s!==""?f.find(S=>S.name.value===s):null;if(t&&c){const S=t.tabIndicatorRef.value,k=c.tabIndicatorRef.value;w!==null&&(clearTimeout(w),w=null),S.style.transition="none",S.style.transform="none",k.style.transition="none",k.style.transform="none";const L=S.getBoundingClientRect(),E=k.getBoundingClientRect();k.style.transform=e.vertical===!0?`translate3d(0,${L.top-E.top}px,0) scale3d(1,${E.height?L.height/E.height:1},1)`:`translate3d(${L.left-E.left}px,0,0) scale3d(${E.width?L.width/E.width:1},1,1)`,R(()=>{w=setTimeout(()=>{w=null,k.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",k.style.transform="none"},70)})}c&&B.value===!0&&ae(c.rootRef.value)}function ae(o){const{left:s,width:t,top:c,height:S}=g.value.getBoundingClientRect(),k=o.getBoundingClientRect();let L=e.vertical===!0?k.top-c:k.left-s;if(L<0){g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(L),le();return}L+=e.vertical===!0?k.height-S:k.width-t,L>0&&(g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(L),le())}function le(){const o=g.value;if(o===null)return;const s=o.getBoundingClientRect(),t=e.vertical===!0?o.scrollTop:Math.abs(o.scrollLeft);ie.value===!0?(P.value=Math.ceil(t+s.width)<o.scrollWidth-1,C.value=t>0):(P.value=t>0,C.value=e.vertical===!0?Math.ceil(t+s.height)<o.scrollHeight:Math.ceil(t+s.width)<o.scrollWidth)}function fe(o){I!==null&&clearInterval(I),I=setInterval(()=>{ze(o)===!0&&Q()},5)}function Ce(){fe(Z.value===!0?Number.MAX_SAFE_INTEGER:0)}function Se(){fe(Z.value===!0?0:Number.MAX_SAFE_INTEGER)}function Q(){I!==null&&(clearInterval(I),I=null)}function Pe(o,s){const t=Array.prototype.filter.call(g.value.children,E=>E===s||E.matches&&E.matches(".q-tab.q-focusable")===!0),c=t.length;if(c===0)return;if(o===36)return ae(t[0]),t[0].focus(),!0;if(o===35)return ae(t[c-1]),t[c-1].focus(),!0;const S=o===(e.vertical===!0?38:37),k=o===(e.vertical===!0?40:39),L=S===!0?-1:k===!0?1:void 0;if(L!==void 0){const E=ie.value===!0?-1:1,j=t.indexOf(s)+L*E;return j>=0&&j<c&&(ae(t[j]),t[j].focus({preventScroll:!0})),!0}}const Be=u(()=>Z.value===!0?{get:o=>Math.abs(o.scrollLeft),set:(o,s)=>{o.scrollLeft=-s}}:e.vertical===!0?{get:o=>o.scrollTop,set:(o,s)=>{o.scrollTop=s}}:{get:o=>o.scrollLeft,set:(o,s)=>{o.scrollLeft=s}});function ze(o){const s=g.value,{get:t,set:c}=Be.value;let S=!1,k=t(s);const L=o<k?-1:1;return k+=L*5,k<0?(S=!0,k=0):(L===-1&&k<=o||L===1&&k>=o)&&(S=!0,k=o),c(s,k),le(),S}function qe(o,s){for(const t in o)if(o[t]!==s[t])return!1;return!0}function Oe(){let o=null,s={matchedLen:0,queryDiff:9999,hrefLen:0};const t=f.filter(L=>L.routeData!==void 0&&L.routeData.hasRouterLink.value===!0),{hash:c,query:S}=l.$route,k=Object.keys(S).length;for(const L of t){const E=L.routeData.exact.value===!0;if(L.routeData[E===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:j,query:Ae,matched:mt,href:bt}=L.routeData.resolvedLink.value,Ee=Object.keys(Ae).length;if(E===!0){if(j!==c||Ee!==k||qe(S,Ae)===!1)continue;o=L.name.value;break}if(j!==""&&j!==c||Ee!==0&&qe(Ae,S)===!1)continue;const oe={matchedLen:mt.length,queryDiff:k-Ee,hrefLen:bt.length-j.length};if(oe.matchedLen>s.matchedLen){o=L.name.value,s=oe;continue}else if(oe.matchedLen!==s.matchedLen)continue;if(oe.queryDiff<s.queryDiff)o=L.name.value,s=oe;else if(oe.queryDiff!==s.queryDiff)continue;oe.hrefLen>s.hrefLen&&(o=L.name.value,s=oe)}o===null&&f.some(L=>L.routeData===void 0&&L.name.value===_.value)===!0||ue({name:o,setCurrent:!0})}function he(o){if(y(),i.value!==!0&&O.value!==null&&o.target&&typeof o.target.closest=="function"){const s=o.target.closest(".q-tab");s&&O.value.contains(s)===!0&&(i.value=!0,B.value===!0&&ae(s))}}function p(){v(()=>{i.value=!1},30)}function D(){me.avoidRouteWatcher===!1?n(Oe):z()}function de(){if(M===void 0){const o=q(()=>l.$route.fullPath,D);M=()=>{o(),M=void 0}}}function Ie(o){f.push(o),h.value++,ee(),o.routeData===void 0||l.$route===void 0?n(()=>{if(B.value===!0){const s=_.value,t=s!=null&&s!==""?f.find(c=>c.name.value===s):null;t&&ae(t.rootRef.value)}}):(de(),o.routeData.hasRouterLink.value===!0&&D())}function Me(o){f.splice(f.indexOf(o),1),h.value--,ee(),M!==void 0&&o.routeData!==void 0&&(f.every(s=>s.routeData===void 0)===!0&&M(),D())}const me={currentModel:_,tabProps:A,hasFocus:i,hasActiveTab:F,registerTab:Ie,unregisterTab:Me,verifyRouteModel:D,updateModel:ue,onKbdNavigate:Pe,avoidRouteWatcher:!1};Ke(rt,me);function ve(){w!==null&&clearTimeout(w),Q(),M!==void 0&&M()}let H;return U(ve),xt(()=>{H=M!==void 0,ve()}),kt(()=>{H===!0&&de(),ee()}),()=>$("div",{ref:O,class:Te.value,role:"tablist",onFocusin:he,onFocusout:p},[$(ye,{onResize:te}),$("div",{ref:g,class:Y.value,onScroll:le},Xe(T.default)),$(ge,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(P.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||a.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:Ce,onTouchstartPassive:Ce,onMouseupPassive:Q,onMouseleavePassive:Q,onTouchendPassive:Q}),$(ge,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(C.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||a.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Se,onTouchstartPassive:Se,onMouseupPassive:Q,onMouseleavePassive:Q,onTouchendPassive:Q})])}}),ea=X({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:T,emit:r}){const{proxy:{$q:l}}=K(),a=we(_e,V);if(a===V)return console.error("QHeader needs to be child of QLayout"),V;const d=x(parseInt(e.heightHint,10)),b=x(!0),R=u(()=>e.reveal===!0||a.view.value.indexOf("H")!==-1||l.platform.is.ios&&a.isContainer.value===!0),v=u(()=>{if(e.modelValue!==!0)return 0;if(R.value===!0)return b.value===!0?d.value:0;const m=d.value-a.scroll.value.position;return m>0?m:0}),y=u(()=>e.modelValue!==!0||R.value===!0&&b.value!==!0),n=u(()=>e.modelValue===!0&&y.value===!0&&e.reveal===!0),z=u(()=>"q-header q-layout__section--marginal "+(R.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(y.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),O=u(()=>{const m=a.rows.value.top,f={};return m[0]==="l"&&a.left.space===!0&&(f[l.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),m[2]==="r"&&a.right.space===!0&&(f[l.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),f});function g(m,f){a.update("header",m,f)}function _(m,f){m.value!==f&&(m.value=f)}function B({height:m}){_(d,m),g("size",m)}function P(m){n.value===!0&&_(b,!0),r("focusin",m)}q(()=>e.modelValue,m=>{g("space",m),_(b,!0),a.animate()}),q(v,m=>{g("offset",m)}),q(()=>e.reveal,m=>{m===!1&&_(b,e.modelValue)}),q(b,m=>{a.animate(),r("reveal",m)}),q(a.scroll,m=>{e.reveal===!0&&_(b,m.direction==="up"||m.position<=e.revealOffset||m.position-m.inflectionPoint<100)});const C={};return a.instances.header=C,e.modelValue===!0&&g("size",d.value),g("space",e.modelValue),g("offset",v.value),U(()=>{a.instances.header===C&&(a.instances.header=void 0,g("size",0),g("offset",0),g("space",!1))}),()=>{const m=Lt(T.default,[]);return e.elevated===!0&&m.push($("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),m.push($(ye,{debounce:0,onResize:B})),$("header",{class:z.value,style:O.value,onFocusin:P},m)}}});const ot=150;var ta=X({name:"QDrawer",inheritAttrs:!1,props:{...$t,...Rt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Pt,"onLayout","miniState"],setup(e,{slots:T,emit:r,attrs:l}){const a=K(),{proxy:{$q:d}}=a,b=Bt(e,d),{preventBodyScroll:R}=It(),{registerTimeout:v,removeTimeout:y}=He(),n=we(_e,V);if(n===V)return console.error("QDrawer needs to be child of QLayout"),V;let z,O=null,g;const _=x(e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint),B=u(()=>e.mini===!0&&_.value!==!0),P=u(()=>B.value===!0?e.miniWidth:e.width),C=x(e.showIfAbove===!0&&_.value===!1?!0:e.modelValue===!0),m=u(()=>e.persistent!==!0&&(_.value===!0||Re.value===!0));function f(t,c){if(I(),t!==!1&&n.animate(),p(0),_.value===!0){const S=n.instances[Z.value];S!==void 0&&S.belowBreakpoint===!0&&S.hide(!1),D(1),n.isContainer.value!==!0&&R(!0)}else D(0),t!==!1&&de(!1);v(()=>{t!==!1&&de(!0),c!==!0&&r("show",t)},ot)}function h(t,c){M(),t!==!1&&n.animate(),D(0),p(G.value*P.value),ve(),c!==!0?v(()=>{r("hide",t)},ot):y()}const{show:i,hide:w}=zt({showing:C,hideOnRouteChange:m,handleShow:f,handleHide:h}),{addToHistory:I,removeFromHistory:M}=Ot(C,w,m),A={belowBreakpoint:_,hide:w},F=u(()=>e.side==="right"),G=u(()=>(d.lang.rtl===!0?-1:1)*(F.value===!0?1:-1)),Te=x(0),Y=x(!1),J=x(!1),ie=x(P.value*G.value),Z=u(()=>F.value===!0?"left":"right"),ue=u(()=>C.value===!0&&_.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:P.value:0),ee=u(()=>e.overlay===!0||e.miniToOverlay===!0||n.view.value.indexOf(F.value?"R":"L")!==-1||d.platform.is.ios===!0&&n.isContainer.value===!0),te=u(()=>e.overlay===!1&&C.value===!0&&_.value===!1),Re=u(()=>e.overlay===!0&&C.value===!0&&_.value===!1),ae=u(()=>"fullscreen q-drawer__backdrop"+(C.value===!1&&Y.value===!1?" hidden":"")),le=u(()=>({backgroundColor:`rgba(0,0,0,${Te.value*.4})`})),fe=u(()=>F.value===!0?n.rows.value.top[2]==="r":n.rows.value.top[0]==="l"),Ce=u(()=>F.value===!0?n.rows.value.bottom[2]==="r":n.rows.value.bottom[0]==="l"),Se=u(()=>{const t={};return n.header.space===!0&&fe.value===!1&&(ee.value===!0?t.top=`${n.header.offset}px`:n.header.space===!0&&(t.top=`${n.header.size}px`)),n.footer.space===!0&&Ce.value===!1&&(ee.value===!0?t.bottom=`${n.footer.offset}px`:n.footer.space===!0&&(t.bottom=`${n.footer.size}px`)),t}),Q=u(()=>{const t={width:`${P.value}px`,transform:`translateX(${ie.value}px)`};return _.value===!0?t:Object.assign(t,Se.value)}),Pe=u(()=>"q-drawer__content fit "+(n.isContainer.value!==!0?"scroll":"overflow-auto")),Be=u(()=>`q-drawer q-drawer--${e.side}`+(J.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(b.value===!0?" q-drawer--dark q-dark":"")+(Y.value===!0?" no-transition":C.value===!0?"":" q-layout--prevent-focus")+(_.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(ee.value===!0||te.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(fe.value===!0?" q-drawer--top-padding":""))),ze=u(()=>{const t=d.lang.rtl===!0?e.side:Z.value;return[[De,Me,void 0,{[t]:!0,mouse:!0}]]}),qe=u(()=>{const t=d.lang.rtl===!0?Z.value:e.side;return[[De,me,void 0,{[t]:!0,mouse:!0}]]}),Oe=u(()=>{const t=d.lang.rtl===!0?Z.value:e.side;return[[De,me,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function he(){o(_,e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint)}q(_,t=>{t===!0?(z=C.value,C.value===!0&&w(!1)):e.overlay===!1&&e.behavior!=="mobile"&&z!==!1&&(C.value===!0?(p(0),D(0),ve()):i(!1))}),q(()=>e.side,(t,c)=>{n.instances[c]===A&&(n.instances[c]=void 0,n[c].space=!1,n[c].offset=0),n.instances[t]=A,n[t].size=P.value,n[t].space=te.value,n[t].offset=ue.value}),q(n.totalWidth,()=>{(n.isContainer.value===!0||document.qScrollPrevented!==!0)&&he()}),q(()=>e.behavior+e.breakpoint,he),q(n.isContainer,t=>{C.value===!0&&R(t!==!0),t===!0&&he()}),q(n.scrollbarWidth,()=>{p(C.value===!0?0:void 0)}),q(ue,t=>{H("offset",t)}),q(te,t=>{r("onLayout",t),H("space",t)}),q(F,()=>{p()}),q(P,t=>{p(),s(e.miniToOverlay,t)}),q(()=>e.miniToOverlay,t=>{s(t,P.value)}),q(()=>d.lang.rtl,()=>{p()}),q(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Ie(),n.animate())}),q(B,t=>{r("miniState",t)});function p(t){t===void 0?$e(()=>{t=C.value===!0?0:P.value,p(G.value*t)}):(n.isContainer.value===!0&&F.value===!0&&(_.value===!0||Math.abs(t)===P.value)&&(t+=G.value*n.scrollbarWidth.value),ie.value=t)}function D(t){Te.value=t}function de(t){const c=t===!0?"remove":n.isContainer.value!==!0?"add":"";c!==""&&document.body.classList[c]("q-body--drawer-toggle")}function Ie(){O!==null&&clearTimeout(O),a.proxy&&a.proxy.$el&&a.proxy.$el.classList.add("q-drawer--mini-animate"),J.value=!0,O=setTimeout(()=>{O=null,J.value=!1,a&&a.proxy&&a.proxy.$el&&a.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Me(t){if(C.value!==!1)return;const c=P.value,S=ke(t.distance.x,0,c);if(t.isFinal===!0){S>=Math.min(75,c)===!0?i():(n.animate(),D(0),p(G.value*c)),Y.value=!1;return}p((d.lang.rtl===!0?F.value!==!0:F.value)?Math.max(c-S,0):Math.min(0,S-c)),D(ke(S/c,0,1)),t.isFirst===!0&&(Y.value=!0)}function me(t){if(C.value!==!0)return;const c=P.value,S=t.direction===e.side,k=(d.lang.rtl===!0?S!==!0:S)?ke(t.distance.x,0,c):0;if(t.isFinal===!0){Math.abs(k)<Math.min(75,c)===!0?(n.animate(),D(1),p(0)):w(),Y.value=!1;return}p(G.value*k),D(ke(1-k/c,0,1)),t.isFirst===!0&&(Y.value=!0)}function ve(){R(!1),de(!0)}function H(t,c){n.update(e.side,t,c)}function o(t,c){t.value!==c&&(t.value=c)}function s(t,c){H("size",t===!0?e.miniWidth:c)}return n.instances[e.side]=A,s(e.miniToOverlay,P.value),H("space",te.value),H("offset",ue.value),e.showIfAbove===!0&&e.modelValue!==!0&&C.value===!0&&e["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!0),ce(()=>{r("onLayout",te.value),r("miniState",B.value),z=e.showIfAbove===!0;const t=()=>{(C.value===!0?f:h)(!1,!0)};if(n.totalWidth.value!==0){$e(t);return}g=q(n.totalWidth,()=>{g(),g=void 0,C.value===!1&&e.showIfAbove===!0&&_.value===!1?i(!1):t()})}),U(()=>{g!==void 0&&g(),O!==null&&(clearTimeout(O),O=null),C.value===!0&&ve(),n.instances[e.side]===A&&(n.instances[e.side]=void 0,H("size",0),H("offset",0),H("space",!1))}),()=>{const t=[];_.value===!0&&(e.noSwipeOpen===!1&&t.push(it($("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),ze.value)),t.push(Ye("div",{ref:"backdrop",class:ae.value,style:le.value,"aria-hidden":"true",onClick:w},void 0,"backdrop",e.noSwipeBackdrop!==!0&&C.value===!0,()=>Oe.value)));const c=B.value===!0&&T.mini!==void 0,S=[$("div",{...l,key:""+c,class:[Pe.value,l.class]},c===!0?T.mini():Xe(T.default))];return e.elevated===!0&&C.value===!0&&S.push($("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(Ye("aside",{ref:"content",class:Be.value,style:Q.value},S,"contentclose",e.noSwipeClose!==!0&&_.value===!0,()=>qe.value)),$("div",{class:"q-drawer-container"},t)}}}),aa=X({name:"QPageContainer",setup(e,{slots:T}){const{proxy:{$q:r}}=K(),l=we(_e,V);if(l===V)return console.error("QPageContainer needs to be child of QLayout"),V;Ke(Mt,!0);const a=u(()=>{const d={};return l.header.space===!0&&(d.paddingTop=`${l.header.size}px`),l.right.space===!0&&(d[`padding${r.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(d.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(d[`padding${r.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),d});return()=>$("div",{class:"q-page-container",style:a.value},Xe(T.default))}});const{passive:nt}=Fe,la=["both","horizontal","vertical"];var oa=X({name:"QScrollObserver",props:{axis:{type:String,validator:e=>la.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:At},emits:["scroll"],setup(e,{emit:T}){const r={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,a,d;q(()=>e.scrollTarget,()=>{v(),R()});function b(){l!==null&&l();const z=Math.max(0,Vt(a)),O=pt(a),g={top:z-r.position.top,left:O-r.position.left};if(e.axis==="vertical"&&g.top===0||e.axis==="horizontal"&&g.left===0)return;const _=Math.abs(g.top)>=Math.abs(g.left)?g.top<0?"up":"down":g.left<0?"left":"right";r.position={top:z,left:O},r.directionChanged=r.direction!==_,r.delta=g,r.directionChanged===!0&&(r.direction=_,r.inflectionPoint=r.position),T("scroll",{...r})}function R(){a=Et(d,e.scrollTarget),a.addEventListener("scroll",y,nt),y(!0)}function v(){a!==void 0&&(a.removeEventListener("scroll",y,nt),a=void 0)}function y(z){if(z===!0||e.debounce===0||e.debounce==="0")b();else if(l===null){const[O,g]=e.debounce?[setTimeout(b,e.debounce),clearTimeout]:[requestAnimationFrame(b),cancelAnimationFrame];l=()=>{g(O),l=null}}}const{proxy:n}=K();return q(()=>n.$q.lang.rtl,b),ce(()=>{d=n.$el.parentNode,R()}),U(()=>{l!==null&&l(),v()}),Object.assign(n,{trigger:y,getPosition:()=>r}),ut}}),na=X({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:T,emit:r}){const{proxy:{$q:l}}=K(),a=x(null),d=x(l.screen.height),b=x(e.container===!0?0:l.screen.width),R=x({position:0,direction:"down",inflectionPoint:0}),v=x(0),y=x(Ue.value===!0?0:pe()),n=u(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),z=u(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),O=u(()=>y.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${y.value}px`}:null),g=u(()=>y.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${y.value}px`,width:`calc(100% + ${y.value}px)`}:null);function _(h){if(e.container===!0||document.qScrollPrevented!==!0){const i={position:h.position.top,direction:h.direction,directionChanged:h.directionChanged,inflectionPoint:h.inflectionPoint.top,delta:h.delta.top};R.value=i,e.onScroll!==void 0&&r("scroll",i)}}function B(h){const{height:i,width:w}=h;let I=!1;d.value!==i&&(I=!0,d.value=i,e.onScrollHeight!==void 0&&r("scrollHeight",i),C()),b.value!==w&&(I=!0,b.value=w),I===!0&&e.onResize!==void 0&&r("resize",h)}function P({height:h}){v.value!==h&&(v.value=h,C())}function C(){if(e.container===!0){const h=d.value>v.value?pe():0;y.value!==h&&(y.value=h)}}let m=null;const f={instances:{},view:u(()=>e.view),isContainer:u(()=>e.container),rootRef:a,height:d,containerHeight:v,scrollbarWidth:y,totalWidth:u(()=>b.value+y.value),rows:u(()=>{const h=e.view.toLowerCase().split(" ");return{top:h[0].split(""),middle:h[1].split(""),bottom:h[2].split("")}}),header:xe({size:0,offset:0,space:!1}),right:xe({size:300,offset:0,space:!1}),footer:xe({size:0,offset:0,space:!1}),left:xe({size:300,offset:0,space:!1}),scroll:R,animate(){m!==null?clearTimeout(m):document.body.classList.add("q-body--layout-animate"),m=setTimeout(()=>{m=null,document.body.classList.remove("q-body--layout-animate")},155)},update(h,i,w){f[h][i]=w}};if(Ke(_e,f),pe()>0){let w=function(){h=null,i.classList.remove("hide-scrollbar")},I=function(){if(h===null){if(i.scrollHeight>l.screen.height)return;i.classList.add("hide-scrollbar")}else clearTimeout(h);h=setTimeout(w,300)},M=function(A){h!==null&&A==="remove"&&(clearTimeout(h),w()),window[`${A}EventListener`]("resize",I)},h=null;const i=document.body;q(()=>e.container!==!0?"add":"remove",M),e.container!==!0&&M("add"),Dt(()=>{M("remove")})}return()=>{const h=je(T.default,[$(oa,{onScroll:_}),$(ye,{onResize:B})]),i=$("div",{class:n.value,style:z.value,ref:e.container===!0?void 0:a,tabindex:-1},h);return e.container===!0?$("div",{class:"q-layout-container overflow-hidden",ref:a},[$(ye,{onResize:P}),$("div",{class:"absolute-full",style:O.value},[$("div",{class:"scroll",style:g.value},[i])])]):i}}}),ra=X({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:T,emit:r}){const{proxy:{$q:l}}=K(),a=we(_e,V);if(a===V)return console.error("QFooter needs to be child of QLayout"),V;const d=x(parseInt(e.heightHint,10)),b=x(!0),R=x(Ue.value===!0||a.isContainer.value===!0?0:window.innerHeight),v=u(()=>e.reveal===!0||a.view.value.indexOf("F")!==-1||l.platform.is.ios&&a.isContainer.value===!0),y=u(()=>a.isContainer.value===!0?a.containerHeight.value:R.value),n=u(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return b.value===!0?d.value:0;const i=a.scroll.value.position+y.value+d.value-a.height.value;return i>0?i:0}),z=u(()=>e.modelValue!==!0||v.value===!0&&b.value!==!0),O=u(()=>e.modelValue===!0&&z.value===!0&&e.reveal===!0),g=u(()=>"q-footer q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(z.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(v.value!==!0?" hidden":""):"")),_=u(()=>{const i=a.rows.value.bottom,w={};return i[0]==="l"&&a.left.space===!0&&(w[l.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),i[2]==="r"&&a.right.space===!0&&(w[l.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),w});function B(i,w){a.update("footer",i,w)}function P(i,w){i.value!==w&&(i.value=w)}function C({height:i}){P(d,i),B("size",i)}function m(){if(e.reveal!==!0)return;const{direction:i,position:w,inflectionPoint:I}=a.scroll.value;P(b,i==="up"||w-I<100||a.height.value-y.value-w-d.value<300)}function f(i){O.value===!0&&P(b,!0),r("focusin",i)}q(()=>e.modelValue,i=>{B("space",i),P(b,!0),a.animate()}),q(n,i=>{B("offset",i)}),q(()=>e.reveal,i=>{i===!1&&P(b,e.modelValue)}),q(b,i=>{a.animate(),r("reveal",i)}),q([d,a.scroll,a.height],m),q(()=>l.screen.height,i=>{a.isContainer.value!==!0&&P(R,i)});const h={};return a.instances.footer=h,e.modelValue===!0&&B("size",d.value),B("space",e.modelValue),B("offset",n.value),U(()=>{a.instances.footer===h&&(a.instances.footer=void 0,B("size",0),B("offset",0),B("space",!1))}),()=>{const i=je(T.default,[$(ye,{debounce:0,onResize:C})]);return e.elevated===!0&&i.push($("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),$("footer",{class:g.value,style:_.value,onFocusin:f},i)}}});const ia={class:"page-container custom-footer__content"},ua={class:"custom-footer__column q-py-md"},sa={class:"custom-footer__column q-py-md"},ca=["href","size"],da={class:"custom-footer__text"},va=st({__name:"CustomFooter",setup(e){const{translate:T}=vt(),r=x(!1),l=x(0),a=x([{label:T("directions"),route:N.DIRECTIONS},{label:T("service"),route:N.SERVICE},{label:T("openingHours"),route:N.BUSINESS_HOURS},{label:T("termsAndConditions"),route:N.TERMS_AND_CONDITIONS},{label:T("dataProtection"),route:N.DATA_PROTECTION},{label:T("legalNotice"),route:N.LEGAL_NOTICE}]),d=()=>{r.value=!b()||window.scrollY>et},b=()=>{const{body:v}=document;return v.scrollHeight>window.innerHeight+et};ce(()=>{d(),window.addEventListener("scroll",d)}),U(()=>{window.removeEventListener("scroll",d),window.clearTimeout(l.value)});const R=Ft();return q(()=>R.fullPath,()=>{window.clearTimeout(l.value),l.value=window.setTimeout(()=>{d()},100)},{immediate:!0}),(v,y)=>{const n=ct("router-link");return re(),be(ra,{class:Ht(["bg-secondary custom-footer",{"q-footer--hidden":!r.value}])},{default:ne(()=>[se("div",ia,[se("div",ua,[(re(!0),Qe(Ne,null,We(a.value,z=>(re(),be(n,{key:z.label,class:"custom-footer__link",to:z.route},{default:ne(()=>[Qt(Ze(z.label),1)]),_:2},1032,["to"]))),128))]),se("div",sa,[se("a",{class:"custom-footer__link text-right",href:Le(jt),size:Le(Je).XL},[W(ge,{name:"facebook",size:Le(Je).XL},null,8,["size"])],8,ca),se("p",da,Ze(v.$t("copyright")),1)])])]),_:1},8,["class"])}}});var fa=dt(va,[["__scopeId","data-v-36711b80"]]);const ha={class:"page-container main-layout__navbar-wrapper"},ma=["aria-label"],ba=st({__name:"MainLayout",setup(e){const{translate:T}=vt(),r=x(!1),l=x([{label:T("products"),route:N.PRODUCTS},{label:T("relocation"),route:N.MOVE},{label:T("contact"),route:N.SERVICE},{label:T("location"),route:N.DIRECTIONS}]),a=()=>{r.value=!r.value};return(d,b)=>{const R=ct("router-view");return re(),be(na,{class:"main-layout",view:"hHh lpR fFf"},{default:ne(()=>[W(ea,{class:"main-layout__navbar"},{default:ne(()=>[se("div",ha,[se("a",{"aria-label":d.$t("appTitle"),class:"main-layout__logo-link",href:"/"},[W(gt,{alt:d.$t("appTitle"),class:"main-layout__logo",fit:"contain",src:"/images/logo.svg"},null,8,["alt"])],8,ma),W(lt,{align:"right",class:"main-layout__navbar-links text-primary"},{default:ne(()=>[(re(!0),Qe(Ne,null,We(l.value,v=>(re(),be(tt,{key:v.label,label:v.label,to:v.route},null,8,["label","to"]))),128))]),_:1}),W(Wt,{class:"main-layout__menu-btn",color:Le(Nt).PRIMARY,dense:"",flat:"",icon:"menu",round:"",onClick:a},null,8,["color"])])]),_:1}),W(ta,{modelValue:r.value,"onUpdate:modelValue":b[1]||(b[1]=v=>r.value=v),behavior:"desktop",class:"text-primary",overlay:"",side:"left"},{default:ne(()=>[W(lt,{class:"main-layout__menu-links",vertical:""},{default:ne(()=>[(re(!0),Qe(Ne,null,We(l.value,v=>(re(),be(tt,{key:v.label,label:v.label,to:v.route,onClick:b[0]||(b[0]=y=>r.value=!1)},null,8,["label","to"]))),128))]),_:1})]),_:1},8,["modelValue"]),W(aa,null,{default:ne(()=>[W(R)]),_:1}),W(fa)]),_:1})}}});var Sa=dt(ba,[["__scopeId","data-v-3c59e646"]]);export{Sa as default};