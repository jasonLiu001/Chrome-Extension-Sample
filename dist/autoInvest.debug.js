/*! Chrome-Extension-Sample - 2017-02-26  */!function(n){"use strict";function b(t,i,r){"addEventListener"in n?t.addEventListener(i,r,!1):"attachEvent"in n&&t.attachEvent("on"+i,r)}function bt(t,i,r){"removeEventListener"in n?t.removeEventListener(i,r,!1):"detachEvent"in n&&t.detachEvent("on"+i,r)}function kt(n){return n.charAt(0).toUpperCase()+n.slice(1)}function ur(n){var i,r,f,t=null,u=0,e=function(){u=rt();t=null;f=n.apply(i,r);t||(i=r=null)};return function(){var s=rt(),o;return u||(u=s),o=p-(s-u),i=this,r=arguments,0>=o||o>p?(t&&(clearTimeout(t),t=null),u=s,f=n.apply(i,r),t||(i=r=null)):t||(t=setTimeout(e,o)),f}}function dt(n){return nt+"["+tt+"] "+n}function t(t){lt&&"object"==typeof n.console&&console.log(dt(t))}function l(t){"object"==typeof n.console&&console.warn(dt(t))}function fr(){er();t("Initialising iFrame ("+location.href+")");or();hr();ut("background",vi);ut("padding",yi);pr();ti();ii();cr();br();ri();v=wr();s("init","Init message from host page");pt()}function er(){function t(n){return"true"===n?!0:!1}var n=bi.substr(di).split(":");tt=n[0];ot=void 0!==n[1]?Number(n[1]):ot;g=void 0!==n[2]?t(n[2]):g;lt=void 0!==n[3]?t(n[3]):lt;h=void 0!==n[4]?Number(n[4]):h;e=void 0!==n[6]?t(n[6]):e;d=n[7];r=void 0!==n[8]?n[8]:r;vi=n[9];yi=n[10];vt=void 0!==n[11]?Number(n[11]):vt;v.enable=void 0!==n[12]?t(n[12]):!1;at=void 0!==n[13]?n[13]:at;f=void 0!==n[14]?n[14]:f}function or(){function i(){var i=n.iFrameResizer;t("Reading data from page: "+JSON.stringify(i));yt="messageCallback"in i?i.messageCallback:yt;pt="readyCallback"in i?i.readyCallback:pt;y="targetOrigin"in i?i.targetOrigin:y;r="heightCalculationMethod"in i?i.heightCalculationMethod:r;f="widthCalculationMethod"in i?i.widthCalculationMethod:f}"iFrameResizer"in n&&Object===n.iFrameResizer.constructor&&i();t("TargetOrigin for parent set to: "+y)}function sr(n,t){return-1!==t.indexOf("-")&&(l("Negative CSS value ignored for "+n),t=""),t}function ut(n,i){void 0!==i&&""!==i&&"null"!==i&&(document.body.style[n]=i,t("Body "+n+' set to "'+i+'"'))}function hr(){void 0===d&&(d=ot+"px");ut("margin",sr("margin",d))}function cr(){document.documentElement.style.height="";document.body.style.height="";t('HTML & body height set to "auto"')}function i(i){function r(){s(i.eventName,i.eventType)}var u={add:function(t){b(n,t,r)},remove:function(t){bt(n,t,r)}};i.eventNames&&Array.prototype.map?(i.eventName=i.eventNames[0],i.eventNames.map(u[i.method])):u[i.method](i.eventName);t(kt(i.method)+" event listener: "+i.eventType)}function gt(n){i({method:n,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]});i({method:n,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]});i({method:n,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]});i({method:n,eventType:"Input",eventName:"input"});i({method:n,eventType:"Mouse Up",eventName:"mouseup"});i({method:n,eventType:"Mouse Down",eventName:"mousedown"});i({method:n,eventType:"Orientation Change",eventName:"orientationchange"});i({method:n,eventType:"Touch Start",eventName:"touchstart"});i({method:n,eventType:"Touch End",eventName:"touchend"});i({method:n,eventType:"Touch Cancel",eventName:"touchcancel"});i({method:n,eventType:"Print",eventName:["afterprint","beforeprint"]});i({method:n,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]});i({method:n,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]});i({method:n,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]});"child"===at&&i({method:n,eventType:"IFrame Resized",eventName:"resize"})}function ni(n,i,r,u){return i!==n&&(n in r||(l(n+" is not a valid option for "+u+"CalculationMethod."),n=i),t(u+' calculation method set to "'+n+'"')),n}function ti(){r=ni(r,ct,o,"height")}function ii(){f=ni(f,rr,c,"width")}function ri(){!0===e?(gt("add"),dr()):t("Auto Resize disabled")}function lr(){t("Disable outgoing messages");nr=!1}function ar(){t("Remove event listener: Message");bt(n,"message",li)}function vr(){null!==st&&st.disconnect()}function ui(){gt("remove");vr();clearInterval(ki)}function yr(){lr();ar();!0===e&&ui()}function pr(){var n=document.createElement("div");n.style.clear="both";n.style.display="block";document.body.appendChild(n)}function wr(){function f(){return{x:void 0!==n.pageXOffset?n.pageXOffset:document.documentElement.scrollLeft,y:void 0!==n.pageYOffset?n.pageYOffset:document.documentElement.scrollTop}}function e(n){var t=n.getBoundingClientRect(),i=f();return{x:parseInt(t.left,10)+parseInt(i.x,10),y:parseInt(t.top,10)+parseInt(i.y,10)}}function i(n){function o(n){var r=e(n);t("Moving to in page link (#"+i+") at x: "+r.x+" y: "+r.y);u(r.y,r.x,"scrollToOffset")}var i=n.split("#")[1]||n,r=decodeURIComponent(i),f=document.getElementById(r)||document.getElementsByName(r)[0];void 0!==f?o(f):(t("In page link (#"+i+") not found in iFrame, so sending to parent"),u(0,0,"inPageLink","#"+i))}function r(){""!==location.hash&&"#"!==location.hash&&i(location.href)}function o(){function n(n){function t(n){n.preventDefault();i(this.getAttribute("href"))}"#"!==n.getAttribute("href")&&b(n,"click",t)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),n)}function s(){b(n,"hashchange",r)}function h(){setTimeout(r,ht)}function c(){Array.prototype.forEach&&document.querySelectorAll?(t("Setting up location.hash handlers"),o(),s(),h()):l("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return v.enable?c():t("In page linking not enabled"),{findTarget:i}}function br(){t("Enable public methods");ru.parentIFrame={autoResize:function(n){return!0===n&&!1===e?(e=!0,ri()):!1===n&&!0===e&&(e=!1,ui()),e},close:function(){u(0,0,"close");yr()},getId:function(){return tt},getPageInfo:function(n){"function"==typeof n?(wt=n,u(0,0,"pageInfo")):(wt=n,u(0,0,"pageInfoStop"))},moveToAnchor:function(n){v.findTarget(n)},reset:function(){ci("parentIFrame.reset")},scrollTo:function(n,t){u(t,n,"scrollTo")},scrollToOffset:function(n,t){u(t,n,"scrollToOffset")},sendMessage:function(n,t){u(0,0,"message",JSON.stringify(n),t)},setHeightCalculationMethod:function(n){r=n;ti()},setWidthCalculationMethod:function(n){f=n;ii()},setTargetOrigin:function(n){t("Set targetOrigin: "+n);y=n},size:function(n,t){var i=""+(n?n:"")+(t?","+t:"");s("size","parentIFrame.size("+i+")",n,t)}}}function fi(){0!==h&&(t("setInterval: "+h+"ms"),ki=setInterval(function(){s("interval","setInterval: "+h)},Math.abs(h)))}function kr(){function h(n){function i(n){!1===n.complete&&(t("Attach listeners to "+n.src),n.addEventListener("load",e,!1),n.addEventListener("error",o,!1),r.push(n))}"attributes"===n.type&&"src"===n.attributeName?i(n.target):"childList"===n.type&&Array.prototype.forEach.call(n.target.querySelectorAll("img"),i)}function c(n){r.splice(r.indexOf(n),1)}function u(n){t("Remove listeners from "+n.src);n.removeEventListener("load",e,!1);n.removeEventListener("error",o,!1);c(n)}function f(n,t,i){u(n.target);s(t,i+": "+n.target.src,void 0,void 0)}function e(n){f(n,"imageLoad","Image loaded")}function o(n){f(n,"imageLoadFailed","Image load failed")}function l(n){s("mutationObserver","mutationObserver: "+n[0].target+" "+n[0].type);n.forEach(h)}function a(){var n=document.querySelector("body");return i=new v(l),t("Create body MutationObserver"),i.observe(n,{attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0}),i}var r=[],v=n.MutationObserver||n.WebKitMutationObserver,i=a();return{disconnect:function(){"disconnect"in i&&(t("Disconnect body MutationObserver"),i.disconnect(),r.forEach(u))}}}function dr(){var i=0>h;n.MutationObserver||n.WebKitMutationObserver?i?fi():st=kr():(t("MutationObserver not supported in this browser!"),fi())}function ft(n,t){function r(n){var i,r;return/^\d+(px)?$/i.test(n)?parseInt(n,ai):(i=t.style.left,r=t.runtimeStyle.left,t.runtimeStyle.left=t.currentStyle.left,t.style.left=n||0,n=t.style.pixelLeft,t.style.left=i,t.runtimeStyle.left=r,n)}var i=0;return t=t||document.body,"defaultView"in document&&"getComputedStyle"in document.defaultView?(i=document.defaultView.getComputedStyle(t,null),i=null!==i?i[n]:0):i=r(t.currentStyle[n]),parseInt(i,ai)}function gr(n){n>p/2&&(p=2*n,t("Event throttle increased to "+p+"ms"))}function et(n,i){for(var o=i.length,f=0,e=0,s=kt(n),r=rt(),u=0;o>u;u++)f=i[u].getBoundingClientRect()[n]+ft("margin"+s,i[u]),f>e&&(e=f);return r=rt()-r,t("Parsed "+o+" HTML elements"),t("Element position calculated in "+r+"ms"),gr(r),e}function k(n){return[n.bodyOffset(),n.bodyScroll(),n.documentElementOffset(),n.documentElementScroll()]}function ei(n,t){function r(){return l("No tagged elements ("+t+") found on page"),a}var i=document.querySelectorAll("["+t+"]");return 0===i.length?r():et(n,i)}function oi(){return document.querySelectorAll("body *")}function nu(n,i,e,s){function v(){a=h;w=l;u(a,w,n)}function y(){function n(n,t){var i=Math.abs(n-t)<=vt;return!i}return h=void 0!==e?e:o[r](),l=void 0!==s?s:c[f](),n(a,h)||g&&n(w,l)}function p(){return!(n in{init:1,interval:1,size:1})}function b(){return r in gi||g&&f in gi}function k(){t("No change in size detected")}function d(){p()&&b()?ci(i):n in{interval:1}||k()}var h,l;y()||"init"===n?(si(),v()):d()}function s(n,i,r,u){function f(){n in{reset:1,resetPage:1,init:1}||t("Trigger event: "+i)}function e(){return it&&n in iu}e()?t("Trigger event cancelled: "+n):(f(),uu(n,i,r,u))}function si(){it||(it=!0,t("Trigger event lock on"));clearTimeout(ir);ir=setTimeout(function(){it=!1;t("Trigger event lock off");t("--")},ht)}function hi(n){a=o[r]();w=c[f]();u(a,w,n)}function ci(n){var i=r;r=ct;t("Reset trigger event: "+n);si();hi("reset");r=i}function u(n,i,r,u,f){function e(){void 0===f?f=y:t("Message targetOrigin: "+f)}function o(){var o=n+":"+i,e=tt+":"+o+":"+r+(void 0!==u?":"+u:"");t("Sending message to host page ("+e+")");tr.postMessage(nt+e,f)}!0===nr&&(e(),o())}function li(i){function e(){return nt===(""+i.data).substr(0,di)}function o(){bi=i.data;tr=i.source;fr();pi=!1;setTimeout(function(){wi=!1},ht)}function h(){wi?t("Page reset ignored by init"):(t("Page size reset by host page"),hi("resetPage"))}function c(){s("resizeParent","Parent window requested size check")}function a(){var n=r();v.findTarget(n)}function u(){return i.data.split("]")[1].split(":")[0]}function r(){return i.data.substr(i.data.indexOf(":")+1)}function y(){return"iFrameResize"in n}function p(){var n=r();t("MessageCallback called from parent: "+n);yt(JSON.parse(n));t(" --")}function w(){var n=r();t("PageInfoFromParent called from parent: "+n);wt(JSON.parse(n));t(" --")}function f(){return i.data.split(":")[2]in{"true":1,"false":1}}function b(){switch(u()){case"reset":h();break;case"resize":c();break;case"moveToAnchor":a();break;case"message":p();break;case"pageInfo":w();break;default:y()||f()||l("Unexpected message ("+i.data+")")}}function k(){!1===pi?b():f()?o():t('Ignored message of type "'+u()+'". Received before initialization.')}e()&&k()}function tu(){"loading"!==document.readyState&&n.parent.postMessage("[iFrameResizerChild]Ready","*")}var e=!0,ai=10,vi="",ot=0,d="",st=null,yi="",g=!1,iu={resize:1,click:1},ht=128,pi=!0,a=1,ct="bodyOffset",r=ct,wi=!0,bi="",v={},h=32,ki=null,lt=!1,nt="[iFrameSizer]",di=nt.length,tt="",gi={max:1,min:1,bodyScroll:1,documentElementScroll:1},at="child",nr=!0,tr=n.parent,y="*",vt=0,it=!1,ir=null,p=16,w=1,rr="scroll",f=rr,ru=n,yt=function(){l("MessageCallback function not defined")},pt=function(){},wt=function(){},rt=Date.now||function(){return(new Date).getTime()},o={bodyOffset:function(){return document.body.offsetHeight+ft("marginTop")+ft("marginBottom")},offset:function(){return o.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,k(o))},min:function(){return Math.min.apply(null,k(o))},grow:function(){return o.max()},lowestElement:function(){return Math.max(o.bodyOffset(),et("bottom",oi()))},taggedElement:function(){return ei("bottom","data-iframe-height")}},c={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(c.bodyScroll(),c.documentElementScroll())},max:function(){return Math.max.apply(null,k(c))},min:function(){return Math.min.apply(null,k(c))},rightMostElement:function(){return et("right",oi())},taggedElement:function(){return ei("right","data-iframe-width")}},uu=ur(nu);b(n,"message",li);tu()}(window||{})
/**
 *
 * @summary 存储投注号码容器
 * */
var investNumbersContainer = 'investNumbersContainer';

/**
 *
 * @summary 后二投注
 * */
function houErZhiXuanInvest(investNumberString) {
    //后二
    $('#Bet > table > tbody > tr:nth-child(2) > td > div:nth-child(1) > div.tabpanelBox > ul > li:nth-child(7) > a')[0].click();
    //分模式
    //$('#Unit2c > label')[0].click();
    //角模式
    $('#Unit2d > label')[0].click();
    //后二直选
    $('#NumberPositionMatchForL2StarSingle')[0].click();
    //点击清空号码
    $('#text-form > td > div > div.col-md-8 > button:nth-child(2)')[0].click();
    $('#betNumber-placeholder')[0].click();
    //输入号码
    viewModel.textForm(investNumberString);
    //计算投注金额
    viewModel.resetSingleSum();
    //投注
    $('#bet-confirm')[0].click();
}

/**
 *
 * @summary 后三直选
 * */
function houSanZhiXuanInvest(investNumberString){
    //后三
    $('#Bet > table > tbody > tr:nth-child(2) > td > div:nth-child(1) > div.tabpanelBox > ul > li.bettype-button-list.active > a')[0].click();
    //分模式
    //$('#Unit2c > label')[0].click();
    //厘模式
    $('#Unit2m > label')[0].click();
    //后三直选
    $('#NumberPositionMatchForL3StarSingle')[0].click();
    //点击清空号码
    $('#text-form > td > div > div.col-md-8 > button:nth-child(2)')[0].click();
    $('#betNumber-placeholder')[0].click();
    //输入号码
    viewModel.textForm(investNumberString);
    //计算投注金额
    viewModel.resetSingleSum();
    //投注
    $('#bet-confirm')[0].click();
}

/**
 *
 * @summary 获取投注号码
 * */
function getInvestNumberString() {
    var container = $('#' + investNumbersContainer);
    var investNumberString = container.text();
    if (investNumberString != '') {
        //清空号码
        viewModel.textForm('');
        container.text('');
        //后二投注
        //houErZhiXuanInvest(investNumberString);
        //后三直选投注
        houSanZhiXuanInvest(investNumberString);
    } else {
        return;
    }
}

/**
 *
 * 检查是否存在注入的元素节点
 * */
$(function () {
    var container = $(document.body).find('#' + investNumbersContainer);
    if (container.length == 0) {
        $(document.body).append('<div id="' + investNumbersContainer + '"></div>');
    }
    setInterval(function () {
        getInvestNumberString();
    }, 5000);
});
