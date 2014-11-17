define("admin/adapters/application",["ember-data","exports"],function(e,t){"use strict";var a=e["default"];t["default"]=a.ActiveModelAdapter.extend({namespace:"front-end-builds"})}),define("admin/app",["ember","ember/resolver","ember/load-initializers","admin/config/environment","exports"],function(e,t,a,n,i){"use strict";var r=e["default"],o=t["default"],s=a["default"],l=n["default"];r.MODEL_FACTORY_INJECTIONS=!0;var u=r.Application.extend({modulePrefix:l.modulePrefix,podModulePrefix:l.podModulePrefix,Resolver:o});s(u,l.modulePrefix),i["default"]=u}),define("admin/initializers/export-application-global",["ember","admin/config/environment","exports"],function(e,t,a){"use strict";function n(e,t){var a=i.String.classify(r.modulePrefix);r.exportApplicationGlobal&&(window[a]=t)}var i=e["default"],r=t["default"];a.initialize=n,a["default"]={name:"export-application-global",initialize:n}}),define("admin/models/app",["ember-data","exports"],function(e,t){"use strict";var a=e["default"];t["default"]=a.Model.extend({name:a.attr("string"),apiKey:a.attr("string")})}),define("admin/router",["ember","admin/config/environment","exports"],function(e,t,a){"use strict";var n=e["default"],i=t["default"],r=n.Router.extend({location:i.locationType,baseURL:"development"==i.environment?i.baseURL:window.RAILS_ENV.baseURL});r.map(function(){}),a["default"]=r}),define("admin/routes/application",["ember","exports"],function(e,t){"use strict";var a=e["default"];t["default"]=a.Route.extend({actions:{createApp:function(){var e=this.store.createRecord("app",{name:this.controller.get("name")});e.save()}}})}),define("admin/serializers/application",["ember-data","exports"],function(e,t){"use strict";var a=e["default"];t["default"]=a.ActiveModelSerializer.extend({})}),define("admin/templates/application",["ember","exports"],function(e,t){"use strict";var a=e["default"];t["default"]=a.Handlebars.template(function(e,t,n,i,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,a.Handlebars.helpers),r=r||{};var o,s,l,u="",d=n.helperMissing,f=this.escapeExpression;return r.buffer.push("<h2 id='title'>Welcome to Ember.js</h2>\n\n"),r.buffer.push(f((s=n.input||t&&t.input,l={hash:{value:"name"},hashTypes:{value:"ID"},hashContexts:{value:t},contexts:[],types:[],data:r},s?s.call(t,l):d.call(t,"input",l)))),r.buffer.push("\n\n<button "),r.buffer.push(f(n.action.call(t,"createApp",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["STRING"],data:r}))),r.buffer.push(">Create app</button>\n\n"),o=n._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(o||0===o)&&r.buffer.push(o),r.buffer.push("\n"),u})}),define("admin/config/environment",["ember"],function(e){var t="admin";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),i=JSON.parse(unescape(n));return{"default":i}}catch(r){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("admin/tests/test-helper"):require("admin/app")["default"].create({});