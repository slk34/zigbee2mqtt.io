"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[80775],{54820:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>d,data:()=>l});var a=t(6254);const i={},d=(0,t(58079).A)(i,[["render",function(e,o){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[o[8]||(o[8]=(0,a.Lk)("h1",{id:"develco-sirzb-110",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#develco-sirzb-110"},[(0,a.Lk)("span",null,"Develco SIRZB-110")])],-1)),(0,a.Lk)("table",null,[o[6]||(o[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[o[2]||(o[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"SIRZB-110")],-1)),(0,a.Lk)("tr",null,[o[1]||(o[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=Develco"},{default:(0,a.k6)((()=>o[0]||(o[0]=[(0,a.eW)("Develco")]))),_:1})])]),o[3]||(o[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Customizable siren")],-1)),o[4]||(o[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"battery_low, test, warning, squawk, max_duration, alarm, temperature, battery, voltage")],-1)),o[5]||(o[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SIRZB-110.png",alt:"Develco SIRZB-110"})])],-1))])]),o[9]||(o[9]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="firmware-version-warning" tabindex="-1"><a class="header-anchor" href="#firmware-version-warning"><span>Firmware version warning</span></a></h3><p>Only works with firmware 1.7.1 and lower (whatever hardware version). Firmware version 1.9.3 uses a different framework and these commands no longer work.</p><h3 id="warning-usage" tabindex="-1"><a class="header-anchor" href="#warning-usage"><span>Warning usage</span></a></h3><p>Duration of using <code>warning</code> can be shorter than <code>max_duration</code> but not longer. If <code>max_duration</code> are set to 60 seconds, and you try to set <code>warning</code> with <code>duration</code> of 90 seconds, the warning will only apply for 60 seconds. Default value of <code>max_duration</code> are 900 seconds</p><p>This device do not support the <code>strobe</code> and <code>strobe_duty_cycle</code> functionality</p><h3 id="triggering-the-alarm-advanced" tabindex="-1"><a class="header-anchor" href="#triggering-the-alarm-advanced"><span>Triggering the alarm, Advanced</span></a></h3><p>This siren can be triggered manually by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with the payloads:</p><p>To start :</p><ul><li><code>{&quot;warning&quot;:{&quot;duration&quot;:60,&quot;level&quot;:&quot;low&quot;,&quot;mode&quot;:&quot;burglar&quot;,&quot;strobe&quot;:false,&quot;strobe_duty_cycle&quot;:0}}</code> Where:</li></ul><ul><li><code>duration</code>: the number of seconds the alarm will be on</li><li><code>level</code>: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>mode</code>: <code>stop</code>, <code>burglar</code>, <code>fire</code>, <code>emergency</code>, <code>police_panic</code>, <code>fire_panic</code>, <code>emergency_panic</code></li><li><code>strobe</code>: not supported</li><li><code>strobe_duty_cycle</code>: not supported</li></ul><p>To stop:</p><ul><li><code>{&quot;warning&quot;:{&quot;duration&quot;:60,&quot;level&quot;:&quot;low&quot;,&quot;mode&quot;:&quot;stop&quot;,&quot;strobe&quot;:false,&quot;strobe_duty_cycle&quot;:0}}</code></li></ul><h3 id="triggering-alarm-simple" tabindex="-1"><a class="header-anchor" href="#triggering-alarm-simple"><span>Triggering alarm, Simple</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm&quot;: &quot;START&quot;}</code> and <code>{&quot;alarm&quot;: &quot;OFF&quot;}</code> Set <code>max_duration</code> from the Zigbee2MQTT UI or by publishing <code>{&quot;max_duration&quot;: NEW_VALUE}</code> This alarm are preset to highest volume and using the mode <code>police_panic</code></p><h3 id="squawk" tabindex="-1"><a class="header-anchor" href="#squawk"><span>Squawk</span></a></h3><p>Squawk are normally used to indicate activation and deactivation of an alarm system</p><p>Examples: <code>{&quot;squawk&quot;:{&quot;level&quot;:&quot;low&quot;,&quot;state&quot;:&quot;system_is_armed&quot;,&quot;strobe&quot;:false}}</code><code>{&quot;squawk&quot;:{&quot;level&quot;:&quot;low&quot;,&quot;state&quot;:&quot;system_is_disarmed&quot;,&quot;strobe&quot;:false}}</code></p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',19)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>o[7]||(o[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,a.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="test-binary" tabindex="-1"><a class="header-anchor" href="#test-binary"><span>Test (binary)</span></a></h3><p>Indicates whether the device is being tested. Value can be found in the published state on the <code>test</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> test is ON, if <code>false</code> OFF.</p><h3 id="warning-composite" tabindex="-1"><a class="header-anchor" href="#warning-composite"><span>Warning (composite)</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;warning&quot;: {&quot;mode&quot;: VALUE, &quot;level&quot;: VALUE, &quot;strobe_level&quot;: VALUE, &quot;strobe&quot;: VALUE, &quot;strobe_duty_cycle&quot;: VALUE, &quot;duration&quot;: VALUE}}</code></p><ul><li><code>mode</code> (enum): Mode of the warning (sound effect) allowed values: <code>stop</code>, <code>burglar</code>, <code>fire</code>, <code>emergency</code>, <code>police_panic</code>, <code>fire_panic</code>, <code>emergency_panic</code></li><li><code>level</code> (enum): Sound level allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe_level</code> (enum): Intensity of the strobe allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe</code> (binary): Turn on/off the strobe (light) during warning allowed values: <code>true</code> or <code>false</code></li><li><code>strobe_duty_cycle</code> (numeric): Length of the flash cycle max value is 10</li><li><code>duration</code> (numeric): Duration in seconds of the alarm unit is s</li></ul><h3 id="squawk-composite" tabindex="-1"><a class="header-anchor" href="#squawk-composite"><span>Squawk (composite)</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;squawk&quot;: {&quot;state&quot;: VALUE, &quot;level&quot;: VALUE, &quot;strobe&quot;: VALUE}}</code></p><ul><li><code>state</code> (enum): Set Squawk state allowed values: <code>system_is_armed</code>, <code>system_is_disarmed</code></li><li><code>level</code> (enum): Sound level allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe</code> (binary): Turn on/off the strobe (light) for Squawk allowed values: <code>true</code> or <code>false</code></li></ul><h3 id="max-duration-numeric" tabindex="-1"><a class="header-anchor" href="#max-duration-numeric"><span>Max duration (numeric)</span></a></h3><p>Max duration of the siren. Value can be found in the published state on the <code>max_duration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;max_duration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_duration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>900</code>. The unit of this value is <code>s</code>.</p><h3 id="alarm-binary" tabindex="-1"><a class="header-anchor" href="#alarm-binary"><span>Alarm (binary)</span></a></h3><p>Manual start of the siren. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm&quot;: NEW_VALUE}</code>. If value equals <code>START</code> alarm is ON, if <code>OFF</code> OFF.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Reported battery voltage in millivolts. Value can be found in the published state on the <code>voltage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p>',22))])}]]),l=JSON.parse('{"path":"/devices/SIRZB-110.html","title":"Develco SIRZB-110 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Develco SIRZB-110 control via MQTT","description":"Integrate your Develco SIRZB-110 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-08-22T21:01:09.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Firmware version warning","slug":"firmware-version-warning","link":"#firmware-version-warning","children":[]},{"level":3,"title":"Warning usage","slug":"warning-usage","link":"#warning-usage","children":[]},{"level":3,"title":"Triggering the alarm, Advanced","slug":"triggering-the-alarm-advanced","link":"#triggering-the-alarm-advanced","children":[]},{"level":3,"title":"Triggering alarm, Simple","slug":"triggering-alarm-simple","link":"#triggering-alarm-simple","children":[]},{"level":3,"title":"Squawk","slug":"squawk","link":"#squawk","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Test (binary)","slug":"test-binary","link":"#test-binary","children":[]},{"level":3,"title":"Warning (composite)","slug":"warning-composite","link":"#warning-composite","children":[]},{"level":3,"title":"Squawk (composite)","slug":"squawk-composite","link":"#squawk-composite","children":[]},{"level":3,"title":"Max duration (numeric)","slug":"max-duration-numeric","link":"#max-duration-numeric","children":[]},{"level":3,"title":"Alarm (binary)","slug":"alarm-binary","link":"#alarm-binary","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]}]}],"git":{"updatedTime":1742762931000},"filePathRelative":"devices/SIRZB-110.md"}')}}]);