"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[43707],{72217:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>n,data:()=>d});var i=o(6254);const a={},n=(0,o(58079).A)(a,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[11]||(t[11]=(0,i.Lk)("h1",{id:"ubisys-h1",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#ubisys-h1"},[(0,i.Lk)("span",null,"Ubisys H1")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"H1")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Ubisys"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Ubisys")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Heating regulator")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"battery, climate (system_mode, running_mode, occupied_heating_setpoint, unoccupied_heating_setpoint, local_temperature, pi_heating_demand, schedule), open_window_state, vacation_mode, local_temperature_offset, occupied_heating_default_setpoint, remote_temperature_duration, open_window_detect, open_window_timeout, open_window_detection_periode, open_window_sensitivity")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/H1.png",alt:"Ubisys H1"})])],-1))])]),t[12]||(t[12]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><p>You can get a detailed user manual on the <a href="https://www.ubisys.de/en/support/manuals-catalogs/" target="_blank" rel="noopener noreferrer">Ubisys</a> website.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><h4 id="initial-pairing" tabindex="-1"><a class="header-anchor" href="#initial-pairing"><span>Initial pairing</span></a></h4><ol><li>make sure the H1 is mounted securely</li><li>enable joining in zigbee2mqtt</li><li>remove the plastic battery tab</li><li>wait, the TRV will first calibrate, after this is successful it will automatically try to join</li></ol><p>If the display remains blank, try replacing the batteries. Mine shipped with empty batteries.</p><h4 id="pairing-after-the-device-has-been-calibrated" tabindex="-1"><a class="header-anchor" href="#pairing-after-the-device-has-been-calibrated"><span>Pairing after the device has been calibrated</span></a></h4><ol><li>press the button to wake the display</li><li>press and hold the button for 10 seconds with the display wake</li><li>turn the dial until you see the &#39;factory reset&#39; icon (gear with a arrow around it)</li><li>press the button once (icon should be flashing)</li><li>turn the dial until you see checkmark next to the icon</li><li>enable joining in zigbe2mqtt</li><li>press the button to confirm (the device will now reset, re-calibrate, and try to join)</li></ol><h3 id="turning-off" tabindex="-1"><a class="header-anchor" href="#turning-off"><span>Turning off</span></a></h3><p>You can turn off the H1 by setting the <code>system_mode</code> to <code>off</code> or by using the on device menu, the device will now be in frost protection mode and will not execute any schedules or try and heat to the setpoint.</p><p>You can turn on the device again by setting <code>system_mode</code> to <code>heat</code> or by turning the dial on the device.</p><h3 id="vacation-mode" tabindex="-1"><a class="header-anchor" href="#vacation-mode"><span>Vacation Mode</span></a></h3><p>When in vacation mode (occupied heating) setpoint and schedule will be ignored. It will keep the room at 16ºC by default, however this can be changed by setting the unoccupied heating setpoint.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">mosquitto_pub <span class="token parameter variable">-t</span> zigbee2mqtt/<span class="token operator">&lt;</span>friendly_name<span class="token operator">&gt;</span>/set/unoccupied_heating_setpoint <span class="token parameter variable">-m</span> <span class="token number">14</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="scheduling" tabindex="-1"><a class="header-anchor" href="#scheduling"><span>Scheduling</span></a></h3><p>You can configure a schedule for the thermostat as wel, when the schedule ends the TRV will revert to the value configured in <code>occupied_heating_default_setpoint</code>.:w</p><h3 id="remote-temperature" tabindex="-1"><a class="header-anchor" href="#remote-temperature"><span>Remote Temperature</span></a></h3><p>When running on a firmware version that is 1.5.0 or higher, you can now bind a sensor supporting <code>msTemperatureMeasurement</code> to the TRV.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># NOTE: if the msTemperatureMeasurement is not on endpoint 1, change the endpoint number on the sensor_friendly_name device.</span></span>\n<span class="line">mosquitto_pub <span class="token parameter variable">-t</span> zigbee2mqtt/bridge/request/device/bind <span class="token parameter variable">-m</span> <span class="token string">&#39;{&quot;clusters&quot;:[&quot;msTemperatureMeasurement&quot;],&quot;from&quot;:&quot;&lt;sensor_friendly_name&gt;/1&quot;,&quot;to&quot;:&quot;&lt;trv_friendly_name&gt;/1&quot;}&#39;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can configure how long the remote temperature remains valid by setting <code>remote_temperature_duration</code> which defaults to 1 hour. You can manually read the <code>remote_temperature</code> attribute to see what value the device is using. It does not support reporting, when the value is not set or expire it will read as <code>-327.68</code>.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',21)),(0,i.Lk)("p",null,[t[8]||(t[8]=(0,i.eW)("This device supports OTA updates, for more information see ")),(0,i.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,i.eW)("."))]),t[13]||(t[13]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[10]||(t[10]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[14]||(t[14]=(0,i.Fv)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>system_mode</code>, <code>running_mode</code>, <code>occupied_heating_setpoint</code>, <code>unoccupied_heating_setpoint</code>, <code>local_temperature</code>, <code>pi_heating_demand</code>, <code>schedule</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>7</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>pi_heating_demand</code>: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pi_heating_demand&quot;: VALUE}</code> where <code>VALUE</code> is the % between <code>0</code> and <code>100</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pi_heating_demand&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li></ul><h3 id="open-window-state-binary" tabindex="-1"><a class="header-anchor" href="#open-window-state-binary"><span>Open window state (binary)</span></a></h3><p>Presents the currently detected window state.. Value can be found in the published state on the <code>open_window_state</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;open_window_state&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> open window state is ON, if <code>false</code> OFF.</p><h3 id="vacation-mode-binary" tabindex="-1"><a class="header-anchor" href="#vacation-mode-binary"><span>Vacation mode (binary)</span></a></h3><p>When Vacation Mode is active the schedule is disabled and unoccupied_heating_setpoint is used.. Value can be found in the published state on the <code>vacation_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;vacation_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;vacation_mode&quot;: NEW_VALUE}</code>. If value equals <code>true</code> vacation mode is ON, if <code>false</code> OFF.</p><h3 id="local-temperature-offset-numeric" tabindex="-1"><a class="header-anchor" href="#local-temperature-offset-numeric"><span>Local temperature offset (numeric)</span></a></h3><p>Specifies the temperature offset for the locally measured temperature value.. Value can be found in the published state on the <code>local_temperature_offset</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature_offset&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_offset&quot;: NEW_VALUE}</code>. The minimal value is <code>-10</code> and the maximum value is <code>10</code>. The unit of this value is <code>ºC</code>.</p><h3 id="occupied-heating-default-setpoint-numeric" tabindex="-1"><a class="header-anchor" href="#occupied-heating-default-setpoint-numeric"><span>Occupied heating default setpoint (numeric)</span></a></h3><p>Specifies the default heating setpoint during occupancy, representing the targeted temperature when a recurring weekly schedule ends without a follow-up schedule.. Value can be found in the published state on the <code>occupied_heating_default_setpoint</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_default_setpoint&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_default_setpoint&quot;: NEW_VALUE}</code>. The minimal value is <code>7</code> and the maximum value is <code>30</code>. The unit of this value is <code>ºC</code>.</p><h3 id="remote-temperature-duration-numeric" tabindex="-1"><a class="header-anchor" href="#remote-temperature-duration-numeric"><span>Remote temperature duration (numeric)</span></a></h3><p>Specifies the duration period in seconds, during which a remotely measured temperature value remains valid since its reception as attribute report.. Value can be found in the published state on the <code>remote_temperature_duration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;remote_temperature_duration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;remote_temperature_duration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>86400</code>. The unit of this value is <code>s</code>.</p><h3 id="open-window-detect-binary" tabindex="-1"><a class="header-anchor" href="#open-window-detect-binary"><span>Open window detect (binary)</span></a></h3><p>Specifies whether the Open Window Detection is activated or deactivated.. Value can be found in the published state on the <code>open_window_detect</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;open_window_detect&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;open_window_detect&quot;: NEW_VALUE}</code>. If value equals <code>true</code> open window detect is ON, if <code>false</code> OFF.</p><h3 id="open-window-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#open-window-timeout-numeric"><span>Open window timeout (numeric)</span></a></h3><p>Specifies the maximum time duration in seconds for a detected open-window state. This attribute effectively defines how long a detected open-window state should last before H1 returns back to its default set point settings.. Value can be found in the published state on the <code>open_window_timeout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;open_window_timeout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;open_window_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>86400</code>. The unit of this value is <code>s</code>.</p><h3 id="open-window-detection-periode-numeric" tabindex="-1"><a class="header-anchor" href="#open-window-detection-periode-numeric"><span>Open window detection periode (numeric)</span></a></h3><p>Specifies the time duration in minutes, within which the sharp temperature change must have taken place for the open window detection.. Value can be found in the published state on the <code>open_window_detection_periode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;open_window_detection_periode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;open_window_detection_periode&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>180</code>. The unit of this value is <code>m</code>.</p><h3 id="open-window-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#open-window-sensitivity-numeric"><span>Open window sensitivity (numeric)</span></a></h3><p>Specifies the temperature change threshold for the Open Window Detection. This is the point at which the H1 detects a significant temperature change indicating the detection of an open or closed window.. Value can be found in the published state on the <code>open_window_sensitivity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;open_window_sensitivity&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;open_window_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>30</code>. The unit of this value is <code>ºC</code>.</p>',25))])}]]),d=JSON.parse('{"path":"/devices/H1.html","title":"Ubisys H1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Ubisys H1 control via MQTT","description":"Integrate your Ubisys H1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-08-01T15:06:58.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Turning off","slug":"turning-off","link":"#turning-off","children":[]},{"level":3,"title":"Vacation Mode","slug":"vacation-mode","link":"#vacation-mode","children":[]},{"level":3,"title":"Scheduling","slug":"scheduling","link":"#scheduling","children":[]},{"level":3,"title":"Remote Temperature","slug":"remote-temperature","link":"#remote-temperature","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Open window state (binary)","slug":"open-window-state-binary","link":"#open-window-state-binary","children":[]},{"level":3,"title":"Vacation mode (binary)","slug":"vacation-mode-binary","link":"#vacation-mode-binary","children":[]},{"level":3,"title":"Local temperature offset (numeric)","slug":"local-temperature-offset-numeric","link":"#local-temperature-offset-numeric","children":[]},{"level":3,"title":"Occupied heating default setpoint (numeric)","slug":"occupied-heating-default-setpoint-numeric","link":"#occupied-heating-default-setpoint-numeric","children":[]},{"level":3,"title":"Remote temperature duration (numeric)","slug":"remote-temperature-duration-numeric","link":"#remote-temperature-duration-numeric","children":[]},{"level":3,"title":"Open window detect (binary)","slug":"open-window-detect-binary","link":"#open-window-detect-binary","children":[]},{"level":3,"title":"Open window timeout (numeric)","slug":"open-window-timeout-numeric","link":"#open-window-timeout-numeric","children":[]},{"level":3,"title":"Open window detection periode (numeric)","slug":"open-window-detection-periode-numeric","link":"#open-window-detection-periode-numeric","children":[]},{"level":3,"title":"Open window sensitivity (numeric)","slug":"open-window-sensitivity-numeric","link":"#open-window-sensitivity-numeric","children":[]}]}],"git":{"updatedTime":1742762931000},"filePathRelative":"devices/H1.md"}')}}]);