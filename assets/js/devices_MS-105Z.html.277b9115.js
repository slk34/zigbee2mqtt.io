"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[80239],{75844:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>d,data:()=>s});var a=o(6254);const i={},d=(0,o(58079).A)(i,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[7]||(t[7]=(0,a.Lk)("h1",{id:"moes-ms-105z",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#moes-ms-105z"},[(0,a.Lk)("span",null,"Moes MS-105Z")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"MS-105Z")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Moes"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Moes")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Smart Dimmer module")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"light (state, brightness, min_brightness, max_brightness), countdown, power_on_behavior, light_type, backlight_mode")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/MS-105Z.png",alt:"Moes MS-105Z"})])],-1))])]),t[8]||(t[8]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>To reset the device you need to have a switch wired between L1 and S, or short them using a tool like a voltmeter. Press the switch for 10 times (not too fast), then wait for one second. If successful, you will hear three long beeps followed by a series of short beeps that will continue until the device is paired.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light"><span>Light</span></a></h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>min_brightness</code>, <code>max_brightness</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li></ul><h3 id="countdown-numeric" tabindex="-1"><a class="header-anchor" href="#countdown-numeric"><span>Countdown (numeric)</span></a></h3><p>Countdown to turn device off after a certain time. Value can be found in the published state on the <code>countdown</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;countdown&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>43200</code>. The unit of this value is <code>s</code>.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum"><span>Power-on behavior (enum)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>previous</code>, <code>on</code>.</p><h3 id="light-type-enum" tabindex="-1"><a class="header-anchor" href="#light-type-enum"><span>Light type (enum)</span></a></h3><p>Type of light attached to the device. Value can be found in the published state on the <code>light_type</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;light_type&quot;: NEW_VALUE}</code>. The possible values are: <code>led</code>, <code>incandescent</code>, <code>halogen</code>.</p><h3 id="backlight-mode-enum" tabindex="-1"><a class="header-anchor" href="#backlight-mode-enum"><span>Backlight mode (enum)</span></a></h3><p>Mode of the backlight. Value can be found in the published state on the <code>backlight_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;backlight_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>normal</code>, <code>inverted</code>.</p>',15))])}]]),s=JSON.parse('{"path":"/devices/MS-105Z.html","title":"Moes MS-105Z control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Moes MS-105Z control via MQTT","description":"Integrate your Moes MS-105Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-12-26T18:38:16.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Countdown (numeric)","slug":"countdown-numeric","link":"#countdown-numeric","children":[]},{"level":3,"title":"Power-on behavior (enum)","slug":"power-on-behavior-enum","link":"#power-on-behavior-enum","children":[]},{"level":3,"title":"Light type (enum)","slug":"light-type-enum","link":"#light-type-enum","children":[]},{"level":3,"title":"Backlight mode (enum)","slug":"backlight-mode-enum","link":"#backlight-mode-enum","children":[]}]}],"git":{"updatedTime":1742762931000},"filePathRelative":"devices/MS-105Z.md"}')}}]);