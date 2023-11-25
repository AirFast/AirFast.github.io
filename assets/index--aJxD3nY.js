import{d as R,u as Y,a as ie,r as x,b as pe,o as d,c as h,e as r,w as ve,v as me,f as o,g as N,h as k,F as L,i as j,t as c,n as q,j as I,k as A,l as g,T as _e,_ as B,m as K,p as H,q as he,s as fe,x as ye,y as oe,z as te,C as ge,A as Ce}from"./index-3QbE4Ky7.js";import{r as ae,M as we,a as T,t as O,b as Q,c as De,d as ke,e as $,L as X,f as xe,W as Ne,g as U}from"./WeatherCard-OiToJXAs.js";const Te={class:"autocomplete-container"},be={class:"autocomplete"},Me=["placeholder"],$e={key:1,class:"autocomplete-list"},Ie=["onClick"],He={key:0,class:"search-history"},Oe={class:"title"},Se=["onClick"],We=["onClick"],Fe=R({__name:"AutocompleteInput",setup(s){const{t:e}=Y(),t=ie(),a=x(!1),l=x(!1),n=x(""),i=x([]),m=async()=>{const w=(await(await fetch(`https://api.geonames.org/searchJSON?q=${n.value}&maxRows=5&username=airfast`)).json()).geonames;w.length!==0&&(l.value=!0,i.value=w)},p=u=>{n.value=u.name,t.value.city=u.name,t.value.countryCode=u.countryCode,l.value=!1,!t.value.searchHistory.map(({city:v})=>v).includes(u.name)&&(t.value.searchHistory.length>=5&&t.value.searchHistory.pop(),t.value.searchHistory=[{city:u.name,countryCode:u.countryCode},...t.value.searchHistory])},_=()=>{if(t.value.favorites.length>=5){f(),n.value="";return}if(t.value.favorites.includes(n.value)){n.value="";return}t.value.favorites.push(n.value),n.value=""},f=()=>{a.value=!0},D=()=>{a.value=!1},S=({city:u,countryCode:v})=>{t.value.city=u,t.value.countryCode=v,n.value=""},W=u=>{t.value.searchHistory=t.value.searchHistory.filter(({city:v})=>v!==u)};return(u,v)=>{const w=pe("RouterLink");return d(),h(L,null,[r("div",Te,[r("div",be,[ve(r("input",{class:"autocomplete-input","onUpdate:modelValue":v[0]||(v[0]=y=>n.value=y),onInput:m,placeholder:o(e)("typeCity")},null,40,Me),[[me,n.value]]),n.value?(d(),h("span",{key:0,class:"clear",onClick:v[1]||(v[1]=()=>n.value="")},[N(o(ae))])):k("",!0),l.value?(d(),h("ul",$e,[(d(!0),h(L,null,j(i.value,y=>(d(),h("li",{class:"autocomplete-item",onClick:b=>p(y)},c(y.name)+", "+c(y.countryName),9,Ie))),256))])):k("",!0)]),n.value?(d(),h("button",{key:0,class:"favorites-btn",onClick:_},c(o(e)("favoritesBtn")),1)):k("",!0)]),o(t).searchHistory.length!==0?(d(),h("div",He,[r("span",Oe,c(o(e)("searchHistory"))+":",1),(d(!0),h(L,null,j(o(t).searchHistory,({city:y,countryCode:b})=>(d(),h("div",{class:"history-item",key:y},[r("button",{class:q(["history-item",{active:y===o(t).city}]),onClick:C=>S({city:y,countryCode:b})},c(y)+", "+c(b),11,Se),r("span",{class:"clear",onClick:C=>W(y)},[N(o(ae))],8,We)]))),128))])):k("",!0),(d(),I(_e,{to:"body"},[N(o(we),{isOpen:a.value,onClose:D,name:"first-modal"},{header:A(()=>[g(c(o(e)("note")),1)]),content:A(()=>[r("p",null,c(o(e)("favoritesNote")),1)]),footer:A(()=>[N(w,{to:{name:"favorites"}},{default:A(()=>[g(c(o(e)("viewFavorites")),1)]),_:1})]),_:1},8,["isOpen"])]))],64)}}}),Le=B(Fe,[["__scopeId","data-v-4afb4b28"]]);function ee(s,e){T(2,arguments);var t=O(s),a=Q(e);return isNaN(a)?new Date(NaN):(a&&t.setDate(t.getDate()+a),t)}var Ue=36e5;function le(s,e){T(2,arguments);var t=Q(e);return De(s,t*Ue)}function Re(s){T(1,arguments);var e=O(s);return e.setHours(0,0,0,0),e}var ce=6e4,ue=36e5;function P(s){T(1,arguments);var e=O(s),t=e.getHours();return t}function Ae(s){T(1,arguments);var e=O(s),t=e.getMinutes();return t}function se(s,e){T(2,arguments);var t=O(s),a=O(e);return t.getTime()>a.getTime()}function M(s,e){var t;T(1,arguments);var a=Q((t=e==null?void 0:e.additionalDigits)!==null&&t!==void 0?t:2);if(a!==2&&a!==1&&a!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(!(typeof s=="string"||Object.prototype.toString.call(s)==="[object String]"))return new Date(NaN);var l=Be(s),n;if(l.date){var i=Ze(l.date,a);n=Ee(i.restDateString,i.year)}if(!n||isNaN(n.getTime()))return new Date(NaN);var m=n.getTime(),p=0,_;if(l.time&&(p=Ge(l.time),isNaN(p)))return new Date(NaN);if(l.timezone){if(_=Je(l.timezone),isNaN(_))return new Date(NaN)}else{var f=new Date(m+p),D=new Date(0);return D.setFullYear(f.getUTCFullYear(),f.getUTCMonth(),f.getUTCDate()),D.setHours(f.getUTCHours(),f.getUTCMinutes(),f.getUTCSeconds(),f.getUTCMilliseconds()),D}return new Date(m+p+_)}var V={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},Ve=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,ze=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,Ye=/^([+-])(\d{2})(?::?(\d{2}))?$/;function Be(s){var e={},t=s.split(V.dateTimeDelimiter),a;if(t.length>2)return e;if(/:/.test(t[0])?a=t[0]:(e.date=t[0],a=t[1],V.timeZoneDelimiter.test(e.date)&&(e.date=s.split(V.timeZoneDelimiter)[0],a=s.substr(e.date.length,s.length))),a){var l=V.timezone.exec(a);l?(e.time=a.replace(l[1],""),e.timezone=l[1]):e.time=a}return e}function Ze(s,e){var t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),a=s.match(t);if(!a)return{year:NaN,restDateString:""};var l=a[1]?parseInt(a[1]):null,n=a[2]?parseInt(a[2]):null;return{year:n===null?l:n*100,restDateString:s.slice((a[1]||a[2]).length)}}function Ee(s,e){if(e===null)return new Date(NaN);var t=s.match(Ve);if(!t)return new Date(NaN);var a=!!t[4],l=F(t[1]),n=F(t[2])-1,i=F(t[3]),m=F(t[4]),p=F(t[5])-1;if(a)return Qe(e,m,p)?je(e,m,p):new Date(NaN);var _=new Date(0);return!Pe(e,n,i)||!Ke(e,l)?new Date(NaN):(_.setUTCFullYear(e,n,Math.max(l,i)),_)}function F(s){return s?parseInt(s):1}function Ge(s){var e=s.match(ze);if(!e)return NaN;var t=E(e[1]),a=E(e[2]),l=E(e[3]);return Xe(t,a,l)?t*ue+a*ce+l*1e3:NaN}function E(s){return s&&parseFloat(s.replace(",","."))||0}function Je(s){if(s==="Z")return 0;var e=s.match(Ye);if(!e)return 0;var t=e[1]==="+"?-1:1,a=parseInt(e[2]),l=e[3]&&parseInt(e[3])||0;return et(a,l)?t*(a*ue+l*ce):NaN}function je(s,e,t){var a=new Date(0);a.setUTCFullYear(s,0,4);var l=a.getUTCDay()||7,n=(e-1)*7+t+1-l;return a.setUTCDate(a.getUTCDate()+n),a}var qe=[31,null,31,30,31,30,31,31,30,31,30,31];function de(s){return s%400===0||s%4===0&&s%100!==0}function Pe(s,e,t){return e>=0&&e<=11&&t>=1&&t<=(qe[e]||(de(s)?29:28))}function Ke(s,e){return e>=1&&e<=(de(s)?366:365)}function Qe(s,e,t){return e>=1&&e<=53&&t>=0&&t<=6}function Xe(s,e,t){return s===24?e===0&&t===0:t>=0&&t<60&&e>=0&&e<60&&s>=0&&s<25}function et(s,e){return e>=0&&e<=59}const Z=s=>(he("data-v-e885cce9"),s=s(),fe(),s),tt={key:0,class:"container"},at={class:"item weather-main-data"},st={class:"weather-icon"},nt=["src","alt"],rt={class:"temperature"},it={class:"description"},ot={class:"current"},lt=Z(()=>r("span",null,"°C",-1)),ct={class:"feels-like"},ut=Z(()=>r("span",null,"°C",-1)),dt={class:"item weather-lists"},pt={class:"weather-data-list"},vt={class:"list-item-description"},mt=Z(()=>r("span",null,"°C",-1)),_t={class:"list-item-description"},ht=Z(()=>r("span",null,"°C",-1)),ft={class:"list-item-description"},yt={class:"weather-data-list"},gt={class:"list-item-description"},Ct={class:"list-item-description"},wt={class:"list-item-description"},Dt={class:"weather-data-list"},kt={class:"list-item-description"},xt={class:"list-item-description"},Nt={class:"list-item-description"},Tt=R({__name:"WeatherCardCurrentDay",setup(s){const{t:e}=Y(),{data:t}=K("https://api.openweathermap.org/data/2.5/weather"),a=H(()=>JSON.parse(t.value)),l=n=>{const i=xe(n);return`${P(i)}:${Ae(i)}`};return(n,i)=>{var m,p,_;return a.value?(d(),h("article",tt,[r("div",at,[r("div",st,[r("img",{src:`https://openweathermap.org/img/wn/${(m=a.value.weather.at(0))==null?void 0:m.icon}@4x.png`,alt:(p=a.value.weather.at(0))==null?void 0:p.description},null,8,nt)]),r("div",rt,[r("span",it,c(o(ke)((_=a.value.weather.at(0))==null?void 0:_.description)),1),r("span",ot,[g(c(o($)(a.value.main.temp).toFixed(0))+" ",1),lt]),r("span",ct,[g(c(o(e)("feelsLike"))+": "+c(o($)(a.value.main.feels_like).toFixed(0))+" ",1),ut])])]),r("div",dt,[r("ul",pt,[r("li",null,[r("span",vt,c(o(e)("minT"))+":",1),g(" "+c(o($)(a.value.main.temp_min).toFixed(0))+" ",1),mt]),r("li",null,[r("span",_t,c(o(e)("maxT"))+":",1),g(" "+c(o($)(a.value.main.temp_max).toFixed(0))+" ",1),ht]),r("li",null,[r("span",ft,c(o(e)("cloudiness"))+":",1),g(" "+c(a.value.clouds.all)+" % ",1)])]),r("ul",yt,[r("li",null,[r("span",gt,c(o(e)("visibility"))+":",1),g(" "+c(a.value.visibility/1e3)+" "+c(o(e)("km")),1)]),r("li",null,[r("span",Ct,c(o(e)("wind"))+":",1),g(" "+c(a.value.wind.speed)+" "+c(o(e)("ms")),1)]),r("li",null,[r("span",wt,c(o(e)("humidity"))+":",1),g(" "+c(a.value.main.humidity)+" % ",1)])]),r("ul",Dt,[r("li",null,[r("span",kt,c(o(e)("pressure"))+":",1),g(" "+c(a.value.main.pressure)+" "+c(o(e)("hPa")),1)]),r("li",null,[r("span",xt,c(o(e)("sunrise"))+":",1),g(" "+c(l(a.value.sys.sunrise)),1)]),r("li",null,[r("span",Nt,c(o(e)("sunset"))+":",1),g(" "+c(l(a.value.sys.sunset)),1)])])])])):(d(),I(o(X),{key:1}))}}}),bt=B(Tt,[["__scopeId","data-v-e885cce9"]]),Mt={key:0,class:"weather-list container"},$t=R({__name:"WeatherCurrentWeek",setup(s){const{data:e}=K("https://api.openweathermap.org/data/2.5/forecast"),t=H(()=>{var l;if(e.value){const n=JSON.parse(e.value),i=(l=n.list.at(0))==null?void 0:l.dt_txt,m=new Date(i),p=Array.from({length:5},(f,D)=>{const S=ee(Re(m),D),W=le(S,m.getHours());return U(W,"yyyy-MM-dd HH:mm:ss")}),_=n.list.filter(f=>p.includes(f.dt_txt));return{...n,list:_}}else return{}}),a=H(()=>t.value.list);return(l,n)=>a.value?(d(),h("div",Mt,[(d(!0),h(L,null,j(a.value,i=>{var m,p;return d(),h("div",{class:"item",key:i.dt},[N(o(Ne),{dt:new Date(i.dt_txt),icon:(m=i.weather.at(0))==null?void 0:m.icon,description:(p=i.weather.at(0))==null?void 0:p.description,temp:i.main.temp,feelsLike:i.main.feels_like,tempMin:i.main.temp_min,tempMax:i.main.temp_max,clouds:i.clouds.all,visibility:i.visibility,windSpeed:i.wind.speed,humidity:i.main.humidity,pressure:i.main.pressure},null,8,["dt","icon","description","temp","feelsLike","tempMin","tempMax","clouds","visibility","windSpeed","humidity","pressure"])])}),128))])):(d(),I(o(X),{key:1}))}}),It=B($t,[["__scopeId","data-v-dbb4ff62"]]),G="#fff",ne="#4ade80",J="#0f172e",re="#334155",z="#f8fafc",Ht=R({__name:"WeatherChart",props:{isTodayWeatherView:{type:Boolean}},setup(s){const e=s,{t}=Y(),{data:a}=K("https://api.openweathermap.org/data/2.5/forecast"),l=H(()=>{var b;const u=JSON.parse(a.value),v=M((b=u==null?void 0:u.list[0])==null?void 0:b.dt_txt),w=ee(le(v,6),1),y=P(v);return e.isTodayWeatherView?u==null?void 0:u.list.filter(C=>se(M(C.dt_txt),v)&&se(w,M(C.dt_txt))).map(C=>({data:Number($(C.main.temp)),labels:U(M(C.dt_txt),"eee, dd / HH:mm")})):u==null?void 0:u.list.filter(C=>y===P(M(C.dt_txt))).map(C=>({data:Number($(C.main.temp)),labels:U(M(C.dt_txt),"MMMM, dd")}))}),{isDark:n}=ye();let i=null;const m=x(),p=x(),_={labels:[],datasets:[{label:"",borderColor:ne,borderWidth:2,data:[],pointBackgroundColor:ne,fill:!0,backgroundColor:n.value?re:z}]},f={responsive:!0,maintainAspectRatio:!1,scales:{x:{grid:{display:!1},ticks:{color:n.value?G:J},border:{width:2,color:z}},y:{grid:{display:!1},ticks:{},border:{width:2,color:z},title:{display:!0,text:"Degrees Celsius, °C"}}}},D=()=>{if(!p.value)return;const u=p.value;i=new ge(u,{type:"line",data:_,options:f})},S=()=>{var u;i&&(i.data.labels=(u=l.value)==null?void 0:u.map(({labels:v})=>v),i.data.datasets=i.data.datasets.map(v=>{var w;return{...v,label:e.isTodayWeatherView?t("today"):t("next5Days"),data:(w=l.value)==null?void 0:w.map(({data:y})=>y)}}),i.update())},W=()=>{var u,v;i&&(i.data.datasets=_.datasets.map(w=>({...w,backgroundColor:n.value?re:z})),i.options.scales={x:{...(u=i.options.scales)==null?void 0:u.x,ticks:{color:n.value?G:J}},y:{...(v=i.options.scales)==null?void 0:v.y,ticks:{color:n.value?G:J}}},i.update())};return oe(()=>{var u;p.value=((u=m.value)==null?void 0:u.getContext("2d"))||void 0,D()}),te(()=>l.value,()=>{S()}),te(()=>n.value,()=>{W()}),(u,v)=>(d(),h("canvas",{ref_key:"lineChart",ref:m,class:"canvas",height:"300"},null,512))}}),Ot={class:"autocomplete-data"},St={key:0,class:"main-data"},Wt={class:"period"},Ft={class:"weather-view-switcher"},Lt={key:1,class:"weather-data"},Ut={key:2},Rt=R({__name:"HomePage",setup(s){const{t:e}=Y(),t=ie(),a=H(()=>t.value.city===""&&t.value.countryCode==="");oe(()=>{a.value&&Ce()});const l=new Date,n=x(!0),i=H(()=>{const _=U(l,"MMMM dd, yyyy");return n.value?_:`${_} - ${U(ee(l,4),"MMMM dd, yyyy")}`}),m=()=>n.value=!0,p=()=>n.value=!1;return(_,f)=>(d(),h(L,null,[r("section",Ot,[N(o(Le))]),a.value?k("",!0):(d(),h("section",St,[r("article",null,[r("span",Wt,c(i.value),1),r("h2",null,c(o(t).city)+", "+c(o(t).countryCode),1)]),r("div",Ft,[r("button",{class:q({"is-active":n.value}),onClick:m},c(o(e)("today")),3),r("button",{class:q({"is-active":!n.value}),onClick:p},c(o(e)("next5Days")),3)])])),a.value?k("",!0):(d(),h("section",Lt,[n.value?(d(),I(o(bt),{key:0})):(d(),I(o(It),{key:1}))])),a.value?k("",!0):(d(),h("section",Ut,[N(o(Ht),{"is-today-weather-view":n.value},null,8,["is-today-weather-view"])])),a.value?(d(),I(o(X),{key:3})):k("",!0)],64))}}),zt=B(Rt,[["__scopeId","data-v-2ac3ccd8"]]);export{zt as default};
