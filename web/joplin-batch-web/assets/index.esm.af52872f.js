var u=(t,e,r)=>new Promise((a,i)=>{var h=n=>{try{p(r.next(n))}catch(f){i(f)}},o=n=>{try{p(r.throw(n))}catch(f){i(f)}},p=n=>n.done?a(n.value):Promise.resolve(n.value).then(h,o);p((r=r.apply(t,e)).next())});function y(t){return new Promise(e=>{if(typeof t=="number")setTimeout(e,t);else if(typeof t=="function"){let r=setInterval(()=>{t()&&(clearInterval(r),e())},100)}else e()})}function d(t,e){let r=0;return function(...a){return u(this,null,function*(){yield y(()=>{let i=r<e;return i&&r++,i});try{return yield t(...a)}finally{r--}})}}var s;(function(t){t.Filter="filter",t.Map="map",t.ForEach="forEach",t.Reduce="reduce",t.FlatMap="flatMap"})(s||(s={}));var c=class{constructor(t,e){this.type=t,this.args=e,this.type=t,this.args=e}};c.Type=s;var l=class{constructor(t){this.arr=t,this.tasks=[]}static reduce(t,e,r){return t.reduce((a,i,h)=>a.then(o=>e(o,i,h)),Promise.resolve(r))}static map(t,e){return Promise.all(t.map((r,a)=>e(r,a)))}static filter(t,e){return u(this,null,function*(){let r=[];return yield l.map(t,(a,i)=>u(this,null,function*(){(yield e(a,i))&&r.push(a)})),r})}static flatMap(t,e){return u(this,null,function*(){return(yield Promise.all(t.map((r,a)=>e(r,a)))).flatMap(r=>r)})}static forEach(t,e){return u(this,null,function*(){yield l.map(t,e)})}map(t){return this.tasks.push(new c(s.Map,[t])),this}flatMap(t){return this.tasks.push(new c(s.FlatMap,[t])),this}filter(t){return this.tasks.push(new c(s.Filter,[t])),this}forEach(t){return u(this,null,function*(){this.tasks.push(new c(s.Map,[t])),yield this})}then(t,e){let r=this.value();return r.then(a=>(t&&t(r),a)).catch(a=>{throw e&&e(a),a}),r}value(){return u(this,null,function*(){let t=this.arr;for(let e of this.tasks)switch(e.type){case s.Filter:t=yield l.filter(t,e.args[0]);break;case s.Map:t=yield l.map(t,e.args[0]);break;case s.FlatMap:t=yield l.flatMap(t,e.args[0]);break;case s.ForEach:yield l.forEach(t,e.args[0]);return;case s.Reduce:return yield l.reduce(t,e.args[0],e.args[1])}return t})}};export{d as P,y as c,l as m};
