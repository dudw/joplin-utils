import{F as e,l as t,C as r,k as s,I as o,B as n,m as l}from"./vendor.d7a724cc.js";import{j as a}from"./joplinApiGenerator.9c1230df.js";import{i}from"./index.589a1254.js";export default()=>{var m;const[p]=e.useForm();const[c,u]=t("settings");return r.exports.createElement(s,null,r.exports.createElement("h2",null,i.t("settings.title")),r.exports.createElement(e,{form:p,onFinish:async function(){if(!(await p.validateFields()))return;const e=p.getFieldsValue();console.log("onFinish: ",e);try{a.token=e.token,a.port=e.port,await a.noteApi.list({limit:1}),u(e),l.success(i.t("settings.msg.success"))}catch(t){console.error(t),l.error(i.t("settings.msg.error"))}},initialValues:{token:null==c?void 0:c.token,port:null!=(m=null==c?void 0:c.port)?m:41184}},r.exports.createElement(e.Item,{name:"token",label:i.t("settings.form.token"),rules:[{required:!0}]},r.exports.createElement(o,{type:"password"})),r.exports.createElement(e.Item,{name:"port",label:i.t("settings.form.port"),rules:[{required:!0}]},r.exports.createElement(o,{type:"number"})),r.exports.createElement(e.Item,null,r.exports.createElement(n,{type:"primary",htmlType:"submit"},i.t("settings.action.submit")))))};
