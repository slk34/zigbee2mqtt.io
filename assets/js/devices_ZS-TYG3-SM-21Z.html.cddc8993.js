"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[60206],{67170:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>n,data:()=>a});var d=o(6254);const i={},n=(0,o(58079).A)(i,[["render",function(e,t){const o=(0,d.g2)("RouteLink");return(0,d.uX)(),(0,d.CE)("div",null,[t[7]||(t[7]=(0,d.Lk)("h1",{id:"tuya-zs-tyg3-sm-21z",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#tuya-zs-tyg3-sm-21z"},[(0,d.Lk)("span",null,"Tuya ZS-TYG3-SM-21Z")])],-1)),(0,d.Lk)("table",null,[t[6]||(t[6]=(0,d.Lk)("thead",null,[(0,d.Lk)("tr",null,[(0,d.Lk)("th"),(0,d.Lk)("th")])],-1)),(0,d.Lk)("tbody",null,[t[2]||(t[2]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Model"),(0,d.Lk)("td",null,"ZS-TYG3-SM-21Z")],-1)),(0,d.Lk)("tr",null,[t[1]||(t[1]=(0,d.Lk)("td",null,"Vendor",-1)),(0,d.Lk)("td",null,[(0,d.bF)(o,{to:"/supported-devices/#v=Tuya"},{default:(0,d.k6)((()=>t[0]||(t[0]=[(0,d.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Description"),(0,d.Lk)("td",null,"2 gang smart switch with backlight and neutral wire")],-1)),t[4]||(t[4]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Exposes"),(0,d.Lk)("td",null,"switch (state), backlight_mode, countdown, power_on_behavior")],-1)),t[5]||(t[5]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Picture"),(0,d.Lk)("td",null,[(0,d.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZS-TYG3-SM-21Z.png",alt:"Tuya ZS-TYG3-SM-21Z"})])],-1))])]),t[8]||(t[8]=(0,d.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l1-endpoint"><span>Switch (l1 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l1</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l1&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l2-endpoint"><span>Switch (l2 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l2</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l2&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l2&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l2&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="backlight-mode-binary" tabindex="-1"><a class="header-anchor" href="#backlight-mode-binary"><span>Backlight mode (binary)</span></a></h3><p>Mode of the backlight. Value can be found in the published state on the <code>backlight_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;backlight_mode&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> backlight mode is ON, if <code>OFF</code> OFF.</p><h3 id="countdown-numeric-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#countdown-numeric-l1-endpoint"><span>Countdown (numeric, l1 endpoint)</span></a></h3><p>Countdown to turn device off after a certain time. Value can be found in the published state on the <code>countdown_l1</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;countdown_l1&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>43200</code>. The unit of this value is <code>s</code>.</p><h3 id="countdown-numeric-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#countdown-numeric-l2-endpoint"><span>Countdown (numeric, l2 endpoint)</span></a></h3><p>Countdown to turn device off after a certain time. Value can be found in the published state on the <code>countdown_l2</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;countdown_l2&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>43200</code>. The unit of this value is <code>s</code>.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum"><span>Power-on behavior (enum)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>previous</code>, <code>on</code>.</p>',15))])}]]),a=JSON.parse('{"path":"/devices/ZS-TYG3-SM-21Z.html","title":"Tuya ZS-TYG3-SM-21Z control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya ZS-TYG3-SM-21Z control via MQTT","description":"Integrate your Tuya ZS-TYG3-SM-21Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-08-01T15:13:29.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Switch (l1 endpoint)","slug":"switch-l1-endpoint","link":"#switch-l1-endpoint","children":[]},{"level":3,"title":"Switch (l2 endpoint)","slug":"switch-l2-endpoint","link":"#switch-l2-endpoint","children":[]},{"level":3,"title":"Backlight mode (binary)","slug":"backlight-mode-binary","link":"#backlight-mode-binary","children":[]},{"level":3,"title":"Countdown (numeric, l1 endpoint)","slug":"countdown-numeric-l1-endpoint","link":"#countdown-numeric-l1-endpoint","children":[]},{"level":3,"title":"Countdown (numeric, l2 endpoint)","slug":"countdown-numeric-l2-endpoint","link":"#countdown-numeric-l2-endpoint","children":[]},{"level":3,"title":"Power-on behavior (enum)","slug":"power-on-behavior-enum","link":"#power-on-behavior-enum","children":[]}]}],"git":{"updatedTime":1742762931000},"filePathRelative":"devices/ZS-TYG3-SM-21Z.md"}')}}]);