!function(e){var t={};function d(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,d),r.l=!0,r.exports}d.m=e,d.c=t,d.d=function(e,t,a){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(d.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)d.d(a,r,function(t){return e[t]}.bind(null,r));return a},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="",d(d.s=361)}({0:function(e,t){e.exports=jQuery},36:function(e,t,d){"use strict";(function(e){d.d(t,"a",(function(){return a})),d.d(t,"b",(function(){return n}));var a=function(e){var t,d=e;switch(e){case"amex":d="americanexpress",t=32;break;default:t=50}return"\n    <svg\n      width=".concat(t,"\n      height=",32,'\n      class="payment-icon icon-').concat(d,'"\n      role="img"\n    >\n      <use\n        href="#icon-').concat(d,'"\n        xlink:href="#icon-').concat(d,'">\n      </use>\n    </svg>')},r=0;function n(t){if("1"==edd_global_vars.taxes_enabled){var d=document.getElementById("edd_checkout_cart");if(d){var a=d.getElementsByClassName("edd_cart_tax");if(a.length>0&&!a[0].querySelector(".edd-recalculate-taxes-loading")){a=a[0];for(var n=document.createElement("span"),o=a.getElementsByClassName("edd_cart_tax_amount"),i=0;i<o.length;i++)o[i].remove();n.classList.add("edd-loading-ajax","edd-recalculate-taxes-loading","edd-loading"),a.appendChild(n)}var c=e("#edd_cc_address"),s=c.find("#billing_country").val(),_=c.find("#card_address").val(),l=c.find("#card_address_2").val(),u=c.find("#card_city").val(),p=c.find("#card_state").val();t||(t=p);var m={action:"edd_recalculate_taxes",card_address:_,card_address_2:l,card_city:u,card_zip:c.find("#card_zip").val(),state:t,billing_country:s,nonce:e("#edd-checkout-address-fields-nonce").val(),current_page:edd_global_vars.current_page},f=++r;return e.ajax({type:"POST",data:m,dataType:"json",url:edd_global_vars.ajaxurl,xhrFields:{withCredentials:!0},success:function(t){if(f===r){t.html&&e("#edd_checkout_cart_form").replaceWith(t.html),e(".edd_cart_amount").html(t.total);var d=new Object;d.postdata=m,d.response=t,e("body").trigger("edd_taxes_recalculated",[d])}e(".edd-recalculate-taxes-loading").remove()}}).fail((function(t){window.console&&window.console.log&&(console.log(t),f===r&&e("body").trigger("edd_taxes_recalculated",[tax_data]))}))}}}}).call(this,d(0))},361:function(e,t,d){"use strict";d.r(t),function(e){var t=d(36);function a(t){e(".edd-cart-ajax").show(),e("#edd_purchase_form_wrap").html('<span class="edd-loading-ajax edd-loading"></span>');var d=document.getElementById("edd-gateway-"+t).getAttribute("data-"+t+"-nonce"),a=edd_scripts.ajaxurl;a.indexOf("?")>0?a+="&":a+="?",a=a+"payment-mode="+t,e.post(a,{action:"edd_load_gateway",edd_payment_mode:t,nonce:d,current_page:edd_scripts.current_page},(function(d){e("#edd_purchase_form_wrap").html(d),e("body").trigger("edd_gateway_loaded",[t])}))}e(document).ready((function(e){if(e(".edd-add-to-cart:not(.edd-no-js)").addClass("edd-has-js"),e(document.body).on("click.eddRemoveFromCart",".edd-remove-from-cart",(function(t){var d=e(this),a=d.data("cart-item"),r=d.data("action"),n=d.data("download-id"),o=d.data("nonce"),i={action:r,cart_item:a,nonce:o,timestamp:d.data("timestamp"),token:d.data("token"),current_page:edd_scripts.current_page};return e.ajax({type:"POST",data:i,dataType:"json",url:edd_scripts.ajaxurl,xhrFields:{withCredentials:!0},success:function(t){if(t.removed){if(parseInt(edd_scripts.position_in_cart,10)===parseInt(a,10)||edd_scripts.has_purchase_links)return window.location=window.location,!1;e(".edd-cart").each((function(){e(this).find("[data-cart-item='"+a+"']").parent().remove()})),e(".edd-cart").each((function(){var t=0;e(this).find("[data-cart-item]").each((function(){e(this).attr("data-cart-item",t),t+=1}))})),e("[id^=edd_purchase_"+n+"]").length&&(e("[id^=edd_purchase_"+n+"] .edd_go_to_checkout").hide(),e("[id^=edd_purchase_"+n+"] .edd-add-to-cart.edd-has-js").show().removeAttr("data-edd-loading"),"1"===edd_scripts.quantities_enabled&&e("[id^=edd_purchase_"+n+"] .edd_download_quantity_wrapper").show()),e("span.edd-cart-quantity").text(t.cart_quantity),e(document.body).trigger("edd_quantity_updated",[t.cart_quantity]),edd_scripts.taxes_enabled&&(e(".cart_item.edd_subtotal span").html(t.subtotal),e(".cart_item.edd_cart_tax span").html(t.tax)),e(".cart_item.edd_total span").html(t.total),0===t.cart_quantity&&(e(".cart_item.edd_subtotal,.edd-cart-number-of-items,.cart_item.edd_checkout,.cart_item.edd_cart_tax,.cart_item.edd_total").hide(),e(".edd-cart").each((function(){var t=e(this).parent();t.length&&(t.addClass("cart-empty"),t.removeClass("cart-not-empty")),e(this).append('<li class="cart_item empty">'+edd_scripts.empty_cart_message+"</li>")}))),e(document.body).trigger("edd_cart_item_removed",[t])}}}).fail((function(e){window.console&&window.console.log&&console.log(e)})).done((function(e){})),!1})),e(document.body).on("click.eddAddToCart",".edd-add-to-cart",(function(t){t.preventDefault();var d=e(this),a=d.closest("form");d.prop("disabled",!0),d.find(".edd-loading");var r=d.closest("div");d.attr("data-edd-loading",""),a=d.parents("form").last();var n=d.data("download-id"),o=d.data("variable-price"),i=d.data("price-mode"),c=d.data("nonce"),s=[],_=!0;if("yes"===o)if(a.find(".edd_price_option_"+n+'[type="hidden"]').length>0)s[0]=e(".edd_price_option_"+n,a).val(),a.find(".edd-submit").data("price")&&a.find(".edd-submit").data("price")>0&&(_=!1);else{if(!a.find(".edd_price_option_"+n+":checked",a).length)return d.removeAttr("data-edd-loading"),alert(edd_scripts.select_option),t.stopPropagation(),d.prop("disabled",!1),!1;a.find(".edd_price_option_"+n+":checked",a).each((function(t){if(s[t]=e(this).val(),!0===_){var d=e(this).data("price");d&&d>0&&(_=!1)}}))}else s[0]=n,d.data("price")&&d.data("price")>0&&(_=!1);if(_&&a.find(".edd_action_input").val("add_to_cart"),"straight_to_gateway"===a.find(".edd_action_input").val())return a.submit(),!0;var l={action:d.data("action"),download_id:n,price_ids:s,post_data:e(a).serialize(),nonce:c,current_page:edd_scripts.current_page,timestamp:d.data("timestamp"),token:d.data("token")};return e.ajax({type:"POST",data:l,dataType:"json",url:edd_scripts.ajaxurl,xhrFields:{withCredentials:!0},success:function(t){var c="1"===edd_scripts.redirect_to_checkout,s="1"===a.find("input[name=edd_redirect_to_checkout]").val();if(c&&s||!c&&s)window.location=edd_scripts.checkout_page;else{if("1"===edd_scripts.taxes_enabled&&(e(".cart_item.edd_subtotal").show(),e(".cart_item.edd_cart_tax").show()),e(".cart_item.edd_total").show(),e(".cart_item.edd_checkout").show(),e(".cart_item.empty").length&&e(".cart_item.empty").hide(),e(".widget_edd_cart_widget .edd-cart").each((function(d){var a=e(this).find(".edd-cart-meta:first");e(t.cart_item).insertBefore(a);var r=e(this).parent();r.length&&(r.addClass("cart-not-empty"),r.removeClass("cart-empty"))})),"1"===edd_scripts.taxes_enabled&&(e(".edd-cart-meta.edd_subtotal span").html(t.subtotal),e(".edd-cart-meta.edd_cart_tax span").html(t.tax)),e(".edd-cart-meta.edd_total span").html(t.total),e(".edd-cart-item-title",t.cart_item).length,e("span.edd-cart-quantity").each((function(){e(this).text(t.cart_quantity),e(document.body).trigger("edd_quantity_updated",[t.cart_quantity])})),"none"===e(".edd-cart-number-of-items").css("display")&&e(".edd-cart-number-of-items").show("slow"),"no"!==o&&"multi"===i||(e(".edd-add-to-cart.edd-has-js",r).toggle(),e(".edd_go_to_checkout",r).show()),"multi"===i&&d.removeAttr("data-edd-loading"),e(".edd_download_purchase_form").length&&("no"===o||!a.find(".edd_price_option_"+n).is("input:hidden"))){var _=e('.edd_download_purchase_form *[data-download-id="'+n+'"]').parents("form");e(".edd-add-to-cart",_).hide(),"multi"!==i&&_.find(".edd_download_quantity_wrapper").slideUp(),e(".edd_go_to_checkout",_).show().removeAttr("data-edd-loading")}"incart"!==t&&(e(".edd-cart-added-alert",r).fadeIn(),setTimeout((function(){e(".edd-cart-added-alert",r).fadeOut()}),3e3)),d.prop("disabled",!1),e(document.body).trigger("edd_cart_item_added",[t])}}}).fail((function(e){window.console&&window.console.log&&console.log(e)})).done((function(e){})),!1})),e("#edd_checkout_form_wrap").on("click",".edd_checkout_register_login",(function(){var t=e(this),d={action:t.data("action"),nonce:t.data("nonce")};return e(".edd-cart-ajax").show(),e.post(edd_scripts.ajaxurl,d,(function(t){e("#edd_checkout_login_register").html(edd_scripts.loading),e("#edd_checkout_login_register").html(t),e(".edd-cart-ajax").hide()})),!1})),e(document).on("click","#edd_purchase_form #edd_login_fields input[type=submit]",(function(t){t.preventDefault();var d=e(this).val();e(this).attr("data-original-value",d),e(this).val(edd_global_vars.purchase_loading),e(this).after('<span class="edd-loading-ajax edd-loading"></span>');var a={action:"edd_process_checkout_login",edd_ajax:1,edd_user_login:e("#edd_login_fields #edd_user_login").val(),edd_user_pass:e("#edd_login_fields #edd_user_pass").val(),edd_login_nonce:e("#edd_login_nonce").val()};e.post(edd_global_vars.ajaxurl,a,(function(t){"success"===t.trim()?(e(".edd_errors").remove(),window.location=edd_scripts.checkout_page):(e("#edd_login_fields input[type=submit]").val(d),e(".edd-loading-ajax").remove(),e(".edd_errors").remove(),e("#edd-user-login-submit").before(t))}))})),e(document).on("change","select#edd-gateway, input.edd-gateway",(function(t){var d=e("#edd-gateway option:selected, input.edd-gateway:checked").val();return"0"===d||a(d),!1})),"1"===edd_scripts.is_checkout){var d=!1,r=!1;e("select#edd-gateway, input.edd-gateway").length&&(d=e("meta[name='edd-chosen-gateway']").attr("content"),r=!0),d||(d=edd_scripts.default_gateway),r?setTimeout((function(){a(d)}),200):setTimeout((function(){e("body").trigger("edd_gateway_loaded",[d])}),300)}function n(){var d=e(this),a="undefined"!=typeof edd_global_vars,r="card_state";if("edd_address_country"===e(this).attr("id"))r="edd_address_state";else if(e(this).hasClass("address_country")){var n=e(this).closest("form").data("source");n&&(n=n.replace("edd-",""),r="edds_address_state_"+n)}var o=e("#"+r);if(r!==d.attr("id")&&o.length){var i={action:"edd_get_shop_states",country:d.val(),field_name:r,nonce:e(this).data("nonce")};e.ajax({type:"POST",data:i,url:edd_scripts.ajaxurl,xhrFields:{withCredentials:!0},success:function(t){var d;(d="nostates"===t.trim()?'<input type="text" id="'+r+'" name="card_state" class="card-state edd-input required" value=""/>':t)&&o.replaceWith(d),a&&e(document.body).trigger("edd_cart_billing_address_updated",[t])}}).fail((function(e){window.console&&window.console.log&&console.log(e)})).done((function(e){a&&Object(t.b)()}))}else a&&Object(t.b)();return!1}e(document).on("click","#edd_purchase_form #edd_purchase_submit [type=submit]",(function(t){var d=document.getElementById("edd_purchase_form");if("function"!=typeof d.checkValidity||!1!==d.checkValidity()){t.preventDefault();var a=e(this).val();e(this).val(edd_global_vars.purchase_loading),e(this).prop("disabled",!0),e(this).after('<span class="edd-loading-ajax edd-loading"></span>'),e.post(edd_global_vars.ajaxurl,e("#edd_purchase_form").serialize()+"&action=edd_process_checkout&edd_ajax=true",(function(t){"success"===t.trim()?(e(".edd_errors").remove(),e(".edd-error").hide(),e(d).submit()):(e("#edd-purchase-button").val(a),e(".edd-loading-ajax").remove(),e(".edd_errors").remove(),e(".edd-error").hide(),e(edd_global_vars.checkout_error_anchor).before(t),e("#edd-purchase-button").prop("disabled",!1),e(document.body).trigger("edd_checkout_error",[t]))}))}})),e(document.body).on("change","#edd_cc_address input.card_state, #edd_cc_address select, #edd_address_country, .edd-stripe-card-item .card-address-fields .address_country",n),window.update_state_field=n,e(document.body).on("change","#edd_cc_address input[name=card_zip]",(function(){"undefined"!=typeof edd_global_vars&&Object(t.b)()}))})),window.edd_load_gateway=a}.call(this,d(0))}});