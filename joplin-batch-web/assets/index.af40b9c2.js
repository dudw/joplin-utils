var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,n=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o;import{w as s,C as l,j as c,B as p,l as d}from"./vendor.928fc7d7.js";import{n as u,j as m}from"./joplinApiGenerator.2024e156.js";import{P as f,f as w,u as y}from"./PromiseUtil.f558bf43.js";import"./index.911638d8.js";function b(){return new Worker("./assets/JoplinMarkdownUtilWorker.efddbf6e.js",{type:"module"})}var g="_subList_1op68_1";const h=new class{constructor(e){this.config=e,this.worker=s(new b)}check(){return f.warpOnEvent((async e=>{e.load("开始加载所有附件资源");const s=new Set((await this.getAllResourceIdList()).map((e=>e.id)));e.load("开始加载所有笔记");const l=await u.pageToAllList(this.config.noteApi.list.bind(this.config.noteApi),{fields:["id","title","body","user_updated_time"]}),c=l.reduce(((e,t)=>e.add(t.id)),new Set);e.load("开始解析所有笔记");let p=0;return(await w.map(l,(async s=>{const c=(d=((e,t)=>{for(var r in t||(t={}))a.call(t,r)&&n(e,r,t[r]);if(o)for(var r of o(t))i.call(t,r)&&n(e,r,t[r]);return e})({},s),u={resources:await this.worker.parseInternalLink(s.body)},t(d,r(u)));var d,u;return p++,e.parse({rate:p,all:l.length,title:s.title||"未知文件名"}),c}))).filter((e=>(e.resources=e.resources.filter((e=>!s.has(e.id)&&!c.has(e.id))),0!==e.resources.length))).map((e=>{var t=e,{body:r}=t;return((e,t)=>{var r={};for(var n in e)a.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&i.call(e,n)&&(r[n]=e[n]);return r})(t,["body"])}))}))}async getAllResourceIdList(){return await u.pageToAllList(this.config.resourceApi.list.bind(this.config.resourceApi),{fields:["id","title","mime"]})}}(m);export default()=>{const[e,t]=l.exports.useState([]),[r,o]=l.exports.useState(""),[a,i]=y((async()=>{const e=await h.check().on("load",(e=>o(e))).on("parse",(e=>{o(`[${e.rate}/${e.all}] ${e.title}`)}));console.log("list: ",e),t(e)}));return l.exports.createElement(c,null,l.exports.createElement("h2",null,"检查笔记中引用失效的资源"),l.exports.createElement(p,{onClick:i},"检查"),l.exports.createElement(d,{dataSource:e,locale:{emptyText:"没有找到任何未使用的附件资源"},renderItem:e=>l.exports.createElement(d.Item,{key:e.id,actions:[l.exports.createElement(p,{onClick:()=>async function(e){await m.noteActionApi.openAndWatch(e)}(e.id)},"打开")]},l.exports.createElement(d.Item.Meta,{title:e.title,description:l.exports.createElement(d,{className:g,dataSource:e.resources,renderItem:e=>l.exports.createElement(d.Item,{key:e.id},l.exports.createElement(d.Item.Meta,{title:e.title||`未知文件名 ${e.id}`}))})})),loading:{spinning:a.loading,tip:r}}))};
