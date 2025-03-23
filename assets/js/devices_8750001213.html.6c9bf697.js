"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[20943],{45453:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>n,data:()=>c});var i=a(6254);const o={},n=(0,a(58079).A)(o,[["render",function(e,t){const a=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[8]||(t[8]=(0,i.Lk)("h1",{id:"bosch-8750001213",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#bosch-8750001213"},[(0,i.Lk)("span",null,"Bosch 8750001213")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"8750001213")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(a,{to:"/supported-devices/#v=Bosch"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Bosch")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Twinguard")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"smoke, temperature, humidity, voc, co2, aqi, illuminance, battery, siren_state, alarm, self_test, sensitivity, pre_alarm, heartbeat")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/8750001213.png",alt:"Bosch 8750001213"})])],-1))])]),t[9]||(t[9]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>To pair this device you have to install the device via its installation code which you can get by scanning the QR-code sticker on the physical device with your smartphone. Then get the device into pairing mode. In zigbee2mqtt navigate to &quot;Settings&quot; --&gt; &quot;Tools&quot; and click on &quot;Add install code&quot;. Paste the code you got from the QR-code and confirm by clicking &quot;OK&quot; which will get zigbee2mqtt into pairing mode automatically. Wait for your device to be joined.</p><h3 id="factory-resetting" tabindex="-1"><a class="header-anchor" href="#factory-resetting"><span>Factory resetting</span></a></h3><p>To factory reset the device remove one of the batteries. While pressing and holding the device&#39;s main button, insert the battery back. As soon as the device&#39;s LED is starting to blink orange, release the device&#39;s main button and press and hold it again until the device&#39;s LED is lighting up green. You will know that the device is being set back to factory defaults successfully when an acustic signal is being thrown by the device. The device will reboot, which can take up to a minute. <a href="https://www.youtube.com/watch?v=zejfxYWewKE" target="_blank" rel="noopener noreferrer">Watch on YouTube</a></p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',6)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,i.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voc_calibration</code>: Calibrates the voc value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>co2_calibration</code>: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="smoke-binary" tabindex="-1"><a class="header-anchor" href="#smoke-binary"><span>Smoke (binary)</span></a></h3><p>Indicates whether the device detected smoke. Value can be found in the published state on the <code>smoke</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> smoke is ON, if <code>false</code> OFF.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>65</code>. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voc-numeric" tabindex="-1"><a class="header-anchor" href="#voc-numeric"><span>VOC (numeric)</span></a></h3><p>Measured VOC value. Value can be found in the published state on the <code>voc</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>50000</code>. The unit of this value is <code>µg/m³</code>.</p><h3 id="co2-numeric" tabindex="-1"><a class="header-anchor" href="#co2-numeric"><span>CO2 (numeric)</span></a></h3><p>The measured CO2 (carbon dioxide) value. Value can be found in the published state on the <code>co2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>400</code> and the maximum value is <code>2400</code>. The unit of this value is <code>ppm</code>.</p><h3 id="aqi-numeric" tabindex="-1"><a class="header-anchor" href="#aqi-numeric"><span>AQI (numeric)</span></a></h3><p>Air Quality Index. Value can be found in the published state on the <code>aqi</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>500</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="siren-state-text" tabindex="-1"><a class="header-anchor" href="#siren-state-text"><span>Siren state (text)</span></a></h3><p>Siren state. Value can be found in the published state on the <code>siren_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="alarm-enum" tabindex="-1"><a class="header-anchor" href="#alarm-enum"><span>Alarm (enum)</span></a></h3><p>Alarm mode for siren. Value can be found in the published state on the <code>alarm</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;alarm&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm&quot;: NEW_VALUE}</code>. The possible values are: <code>stop</code>, <code>pre_alarm</code>, <code>fire</code>, <code>burglar</code>.</p><h3 id="self-test-binary" tabindex="-1"><a class="header-anchor" href="#self-test-binary"><span>Self test (binary)</span></a></h3><p>Initiate self-test. Value can be found in the published state on the <code>self_test</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;self_test&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;self_test&quot;: NEW_VALUE}</code>. If value equals <code>true</code> self test is ON, if <code>false</code> OFF.</p><h3 id="sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#sensitivity-enum"><span>Sensitivity (enum)</span></a></h3><p>Sensitivity of the smoke detector. Value can be found in the published state on the <code>sensitivity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sensitivity&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="pre-alarm-binary" tabindex="-1"><a class="header-anchor" href="#pre-alarm-binary"><span>Pre alarm (binary)</span></a></h3><p>Enable/disable pre-alarm. Value can be found in the published state on the <code>pre_alarm</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pre_alarm&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pre_alarm&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> pre alarm is ON, if <code>OFF</code> OFF.</p><h3 id="heartbeat-binary" tabindex="-1"><a class="header-anchor" href="#heartbeat-binary"><span>Heartbeat (binary)</span></a></h3><p>Enable/disable heartbeat (blue LED). Value can be found in the published state on the <code>heartbeat</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;heartbeat&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;heartbeat&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> heartbeat is ON, if <code>OFF</code> OFF.</p>',30))])}]]),c=JSON.parse('{"path":"/devices/8750001213.html","title":"Bosch 8750001213 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Bosch 8750001213 control via MQTT","description":"Integrate your Bosch 8750001213 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-01-01T09:10:19.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Factory resetting","slug":"factory-resetting","link":"#factory-resetting","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Smoke (binary)","slug":"smoke-binary","link":"#smoke-binary","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"VOC (numeric)","slug":"voc-numeric","link":"#voc-numeric","children":[]},{"level":3,"title":"CO2 (numeric)","slug":"co2-numeric","link":"#co2-numeric","children":[]},{"level":3,"title":"AQI (numeric)","slug":"aqi-numeric","link":"#aqi-numeric","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Siren state (text)","slug":"siren-state-text","link":"#siren-state-text","children":[]},{"level":3,"title":"Alarm (enum)","slug":"alarm-enum","link":"#alarm-enum","children":[]},{"level":3,"title":"Self test (binary)","slug":"self-test-binary","link":"#self-test-binary","children":[]},{"level":3,"title":"Sensitivity (enum)","slug":"sensitivity-enum","link":"#sensitivity-enum","children":[]},{"level":3,"title":"Pre alarm (binary)","slug":"pre-alarm-binary","link":"#pre-alarm-binary","children":[]},{"level":3,"title":"Heartbeat (binary)","slug":"heartbeat-binary","link":"#heartbeat-binary","children":[]}]}],"git":{"updatedTime":1742762931000},"filePathRelative":"devices/8750001213.md"}')}}]);