"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[707],{59092:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>i,data:()=>s});var r=t(6254);const a={},i=(0,t(58079).A)(a,[["render",function(e,o){const t=(0,r.g2)("RouteLink");return(0,r.uX)(),(0,r.CE)("div",null,[o[8]||(o[8]=(0,r.Lk)("h1",{id:"tuya-ts0601-cover-8",tabindex:"-1"},[(0,r.Lk)("a",{class:"header-anchor",href:"#tuya-ts0601-cover-8"},[(0,r.Lk)("span",null,"Tuya TS0601_cover_8")])],-1)),(0,r.Lk)("table",null,[o[6]||(o[6]=(0,r.Lk)("thead",null,[(0,r.Lk)("tr",null,[(0,r.Lk)("th"),(0,r.Lk)("th")])],-1)),(0,r.Lk)("tbody",null,[o[2]||(o[2]=(0,r.Lk)("tr",null,[(0,r.Lk)("td",null,"Model"),(0,r.Lk)("td",null,"TS0601_cover_8")],-1)),(0,r.Lk)("tr",null,[o[1]||(o[1]=(0,r.Lk)("td",null,"Vendor",-1)),(0,r.Lk)("td",null,[(0,r.bF)(t,{to:"/supported-devices/#v=Tuya"},{default:(0,r.k6)((()=>o[0]||(o[0]=[(0,r.eW)("Tuya")]))),_:1})])]),o[3]||(o[3]=(0,r.Lk)("tr",null,[(0,r.Lk)("td",null,"Description"),(0,r.Lk)("td",null,"Cover motor")],-1)),o[4]||(o[4]=(0,r.Lk)("tr",null,[(0,r.Lk)("td",null,"Exposes"),(0,r.Lk)("td",null,"cover (state, position), reverse_direction, motor_fault")],-1)),o[5]||(o[5]=(0,r.Lk)("tr",null,[(0,r.Lk)("td",null,"Picture"),(0,r.Lk)("td",null,[(0,r.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_cover_8.png",alt:"Tuya TS0601_cover_8"})])],-1))])]),o[9]||(o[9]=(0,r.Lk)("h2",{id:"options",tabindex:"-1"},[(0,r.Lk)("a",{class:"header-anchor",href:"#options"},[(0,r.Lk)("span",null,"Options")])],-1)),(0,r.Lk)("p",null,[(0,r.Lk)("em",null,[(0,r.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,r.k6)((()=>o[7]||(o[7]=[(0,r.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,r.Fv)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="reverse-direction-enum" tabindex="-1"><a class="header-anchor" href="#reverse-direction-enum"><span>Reverse direction (enum)</span></a></h3><p>Reverse the motor direction. Value can be found in the published state on the <code>reverse_direction</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;reverse_direction&quot;: NEW_VALUE}</code>. The possible values are: <code>forward</code>, <code>back</code>.</p><h3 id="motor-fault-binary" tabindex="-1"><a class="header-anchor" href="#motor-fault-binary"><span>Motor fault (binary)</span></a></h3><p>Motor Fault. Value can be found in the published state on the <code>motor_fault</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> motor fault is ON, if <code>false</code> OFF.</p>',8))])}]]),s=JSON.parse('{"path":"/devices/TS0601_cover_8.html","title":"Tuya TS0601_cover_8 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TS0601_cover_8 control via MQTT","description":"Integrate your Tuya TS0601_cover_8 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-06-01T08:16:21.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Reverse direction (enum)","slug":"reverse-direction-enum","link":"#reverse-direction-enum","children":[]},{"level":3,"title":"Motor fault (binary)","slug":"motor-fault-binary","link":"#motor-fault-binary","children":[]}]}],"git":{"updatedTime":1742762931000},"filePathRelative":"devices/TS0601_cover_8.md"}')}}]);