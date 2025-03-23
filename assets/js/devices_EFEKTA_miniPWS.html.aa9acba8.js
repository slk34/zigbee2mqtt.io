"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[98448],{5252:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>l,data:()=>n});var o=i(6254);const a={},l=(0,i(58079).A)(a,[["render",function(e,t){const i=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[8]||(t[8]=(0,o.Lk)("h1",{id:"efekta-efekta-minipws",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#efekta-efekta-minipws"},[(0,o.Lk)("span",null,"EFEKTA EFEKTA_miniPWS")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"EFEKTA_miniPWS")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(i,{to:"/supported-devices/#v=EFEKTA"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("EFEKTA")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Mini plant wattering sensor")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"soil_moisture, battery, voltage, report_delay")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EFEKTA_miniPWS.png",alt:"EFEKTA EFEKTA_miniPWS"})])],-1))])]),t[9]||(t[9]=(0,o.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><p><a href="http://efektalab.com/miniPWS" target="_blank" rel="noopener noreferrer">Mini plant wattering sensor</a></p><h3 id="build-guide" tabindex="-1"><a class="header-anchor" href="#build-guide"><span>Build guide</span></a></h3><p>Instructions on how to build this device can be found <a href="https://github.com/smartboxchannel/Plant-Watering-Sensor-Zigbee" target="_blank" rel="noopener noreferrer">here</a></p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',5)),(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>t[7]||(t[7]=[(0,o.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,o.Fv)('<ul><li><p><code>soil_moisture_calibration</code>: Calibrates the soil_moisture value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>soil_moisture_precision</code>: Number of digits after decimal point for soil_moisture, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="soil-moisture-numeric" tabindex="-1"><a class="header-anchor" href="#soil-moisture-numeric"><span>Soil moisture (numeric)</span></a></h3><p>Measured soil moisture value. Value can be found in the published state on the <code>soil_moisture</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;soil_moisture&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Reported battery voltage in millivolts. Value can be found in the published state on the <code>voltage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="report-delay-numeric" tabindex="-1"><a class="header-anchor" href="#report-delay-numeric"><span>Report delay (numeric)</span></a></h3><p>Adjust Report Delay, by default 60 minutes. Value can be found in the published state on the <code>report_delay</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;report_delay&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;report_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>180</code>. The unit of this value is <code>min</code>.</p>',10))])}]]),n=JSON.parse('{"path":"/devices/EFEKTA_miniPWS.html","title":"EFEKTA EFEKTA_miniPWS control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"EFEKTA EFEKTA_miniPWS control via MQTT","description":"Integrate your EFEKTA EFEKTA_miniPWS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-08-01T20:41:55.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Build guide","slug":"build-guide","link":"#build-guide","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Soil moisture (numeric)","slug":"soil-moisture-numeric","link":"#soil-moisture-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Report delay (numeric)","slug":"report-delay-numeric","link":"#report-delay-numeric","children":[]}]}],"git":{"updatedTime":1742762931000},"filePathRelative":"devices/EFEKTA_miniPWS.md"}')}}]);