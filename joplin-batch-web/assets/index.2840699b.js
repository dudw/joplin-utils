import{F as e,l as t,C as r,k as s,I as o,B as n,m as l}from"./vendor.d7a724cc.js";import{j as i}from"./joplinApiGenerator.96d0fc0c.js";import{i as a}from"./index.0eb7d389.js";export default()=>{var m;const[p]=e.useForm();const[c,u]=t("settings");return r.exports.createElement(s,null,r.exports.createElement("h2",null,a.t("settings.title")),r.exports.createElement(e,{form:p,onFinish:async function(){if(!(await p.validateFields()))return;const e=p.getFieldsValue();console.log("onFinish: ",e);try{i.token=e.token,i.port=e.port,await i.noteApi.list({limit:1}),u(e),l.success(a.t("settings.msg.success"))}catch(t){console.error(t),l.error(a.t("settings.msg.error"))}},initialValues:{token:null==c?void 0:c.token,port:null!=(m=null==c?void 0:c.port)?m:41184}},r.exports.createElement(e.Item,{name:"token",label:a.t("settings.form.token"),rules:[{required:!0}]},r.exports.createElement(o,{type:"password"})),r.exports.createElement(e.Item,{name:"port",label:a.t("settings.form.port"),rules:[{required:!0}]},r.exports.createElement(o,{type:"number"})),r.exports.createElement(e.Item,null,r.exports.createElement(n,{type:"primary",htmlType:"submit"},a.t("settings.action.submit")))))};