!function(e){var a={};function t(n){if(a[n])return a[n].exports;var d=a[n]={i:n,l:!1,exports:{}};return e[n].call(d.exports,d,d.exports,t),d.l=!0,d.exports}t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var d in e)t.d(n,d,function(a){return e[a]}.bind(null,d));return n},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=354)}({0:function(e,a){e.exports=jQuery},354:function(e,a,t){(function(e){!function(e,a){"use strict";a(".edd-pass-handler__control").on("click",".edd-pass-handler__action",(function(e){e.preventDefault();var t=a(this),n=t.attr("data-action"),d="",r=t.text();if(!t.attr("disabled")){switch(n){case"verify":d="edd_verify_pass",t.text(EDDPassManager.verifying);break;case"activate":d="edd_activate_pass",t.text(EDDPassManager.activating);break;case"deactivate":d="edd_deactivate_pass",t.text(EDDPassManager.deactivating);break;default:return}a(".edd-pass-handler__control + .notice").remove(),a(".edd-pass-handler__control + p").remove(),t.removeClass("button-primary").attr("disabled",!0).addClass("updating-message"),"verify"===n&&(a("body").addClass("edd-pass-handler__verifying"),a(".edd-pass-handler__control").after('<div class="edd-pass-handler__verifying-wrap"><p class="edd-pass-handler__loading">'+EDDPassManager.verify_loader+"</p></div>"));var s={action:d,token:t.attr("data-token"),timestamp:t.attr("data-timestamp"),nonce:t.attr("data-nonce"),license:a("#edd_pass_key").val()};a.post(ajaxurl,s).done((function(e){if(e.success){if(a(".edd-pass-handler__actions").replaceWith(e.data.actions),e.data.message&&a(".edd-pass-handler__control").after(e.data.message),s.license.length&&"deactivate"===n)a("#edd_pass_key").attr("readonly",!1);else if("activate"===n||"verify"===n){if(a("#edd_pass_key").attr("readonly",!0),e.data.url&&e.data.url.length)return void setTimeout((function(){window.location.href=e.data.url}),1500);"activate"===n&&(a("#edd-admin-notice-inactivepro, .edd-pass-handler__description").slideUp(),a("#edd-flyout-button").removeClass("has-alert"),a(".edd-flyout-item-license").remove(),a(".edd-flyout-item-activate").remove())}}else t.text(r),a(".edd-pass-handler__control").after('<div class="notice inline-notice notice-warning edd-pass-handler__notice">'+e.data.message+"</div>"),"verify"===n&&(a("body").removeClass("edd-pass-handler__verifying"),a(".edd-pass-handler__verifying-wrap").remove());t.attr("disabled",!1).removeClass("updating-message")}))}})),a(".edd-pass-handler__control").on("click",".edd-pass-handler__delete",(function(e){e.preventDefault();var t=a(this),n={action:"edd_delete_pass",token:t.attr("data-token"),timestamp:t.attr("data-timestamp"),nonce:t.attr("data-nonce"),license:a("#edd_pass_key").val()};n.license&&(a(".edd-pass-handler__control + .notice").remove(),a(".edd-pass-handler__control + p").remove(),t.attr("disabled",!0).addClass("updating-message"),a("#edd_pass_key").val(""),a.post(ajaxurl,n).done((function(e){e.success?(a(".edd-pass-handler__control").after(e.data.message),t.hide()):a(".edd-pass-handler__control").after('<div class="notice inline-notice notice-warning">'+e.data.message+"</div>"),t.attr("disabled",!1).removeClass("updating-message")})))}))}(document,e)}).call(this,t(0))}});