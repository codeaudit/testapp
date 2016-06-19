(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f();}else if(typeof define==="function"&&define.amd){define([],f);}else{var g;if(typeof window!=="undefined"){g=window;}else if(typeof global!=="undefined"){g=global;}else if(typeof self!=="undefined"){g=self;}else{g=this;}g.uportRegistry=f();}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f;}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);},l,l.exports,e,t,n,r);}return n[o].exports;}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s;}({1:[function(require,module,exports){"use strict";var _get=function get(_x,_x2,_x3){var _again=true;_function:while(_again){var object=_x,property=_x2,receiver=_x3;_again=false;if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined;}else{_x=parent;_x2=property;_x3=receiver;_again=true;desc=parent=undefined;continue _function;}}else if("value"in desc){return desc.value;}else{var getter=desc.get;if(getter===undefined){return undefined;}return getter.call(receiver);}}};function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var factory=function factory(Pudding){// Inherit from Pudding. The dependency on Babel sucks, but it's
// the easiest way to extend a Babel-based class. Note that the
// resulting .js file does not have a dependency on Babel.
var UportRegistry=function(_Pudding){_inherits(UportRegistry,_Pudding);function UportRegistry(){_classCallCheck(this,UportRegistry);_get(Object.getPrototypeOf(UportRegistry.prototype),"constructor",this).apply(this,arguments);}return UportRegistry;}(Pudding);;// Set up specific data for this class.
UportRegistry.abi=[{"constant":true,"inputs":[{"name":"personaAddress","type":"address"}],"name":"getAttributes","outputs":[{"name":"","type":"bytes"}],"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"previousPublishedVersion","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"ipfsHash","type":"bytes"}],"name":"setAttributes","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"ipfsAttributeLookup","outputs":[{"name":"","type":"bytes"}],"type":"function"},{"inputs":[{"name":"_previousPublishedVersion","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_sender","type":"address"},{"indexed":false,"name":"_timestamp","type":"uint256"}],"name":"AttributesSet","type":"event"}];UportRegistry.binary="6060604052604051602080610393833950608060405251600160008190558054600160a060020a03191682179055506103578061003c6000396000f3606060405260e060020a6000350463446d5aa4811461004757806354fd4d50146100be5780636104464f146100c75780636737c877146100d9578063884179d814610192575b005b6101fd60043560006060818152600160a060020a0383168252600260208181526040938490208054600181161561010002600019011692909204601f810182900490910260a0908101909452608081815292938282801561034b5780601f106103205761010080835404028352916020019161034b565b61026b60005481565b61026b600154600160a060020a031681565b60206004803580820135601f81018490049093026080908101604052606084815261004594602493919291840191819083828082843750949650505050505050600160a060020a0333166000908152600260208181526040832084518154828652948390209194600181161561010002600019011693909304601f90810192909204810192916080908390106102a857805160ff19168380011785555b506102d89291505b8082111561031c576000815560010161017e565b6101fd60043560026020818152600092835260409283902080546080601f6000196101006001851615020190921694909404908101839004909202830190935260608181529291828280156102a05780601f10610275576101008083540402835291602001916102a0565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561025d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6060908152602090f35b820191906000526020600020905b81548152906001019060200180831161028357829003601f168201915b505050505081565b82800160010185558215610176579182015b828111156101765782518260005055916020019190600101906102ba565b5050604080514281529051600160a060020a033316917f70c8251d1f51f94ab26213a0dd53ead1bf32aeeb2e95bb6497d8d8bbde61b98d919081900360200190a250565b5090565b820191906000526020600020905b81548152906001019060200180831161032e57829003601f168201915b5050505050905091905056";if(""!=""){UportRegistry.address="";// Backward compatibility; Deprecated.
UportRegistry.deployed_address="";}UportRegistry.generated_with="1.0.3";UportRegistry.contract_name="UportRegistry";return UportRegistry;};// Nicety for Node.
factory.load=factory;if(typeof module!="undefined"){module.exports=factory;}else{// There will only be one version of Pudding in the browser,
// and we can use that.
window.UportRegistry=factory;}},{}],2:[function(require,module,exports){(function(Buffer){// Required Modules
var ipfs=require('ipfs-js');var base58=require('bs58');var Promise=require('bluebird');var Pudding=require('ether-pudding');var Web3=require('web3');var web3=new Web3();Pudding.setWeb3(web3);var UportRegistry=require("../environments/development/contracts/UportRegistry.sol.js").load(Pudding);UportRegistry=Pudding.whisk({binary:UportRegistry.binary,abi:UportRegistry.abi});function setWeb3Provider(web3Prov){web3.setProvider(web3Prov);};function setIpfsProvider(ipfsProv){ipfs.setProvider(ipfsProv);};base58ToHex=ipfs.utils?ipfs.utils.base58ToHex:function(b58){var hexBuf=base58.decode(b58);return hexBuf.toString('hex');};hexToBase58=ipfs.utils?ipfs.utils.hexToBase58:function(hexStr){var buf=new Buffer(hexStr,'hex');return base58.encode(buf);};function setAttributes(registryAddress,personaInfo,txData){return new Promise((accept,reject)=>{ipfs.addJson(personaInfo,(err,ipfsHash)=>{if(err!==null){reject(err);return;}var ipfsHashHex=base58ToHex(ipfsHash);var reg=UportRegistry.at(registryAddress);reg.setAttributes('0x'+ipfsHashHex,txData).then(function(tx){accept(tx);}).catch(reject);});});}function getAttributes(registryAddress,personaAddress){return new Promise((accept,reject)=>{var reg=UportRegistry.at(registryAddress);reg.getAttributes.call(personaAddress).then(ipfsHashHex=>{var ipfsHash=hexToBase58(ipfsHashHex.slice(2));ipfs.catJson(ipfsHash,(err,personaObj)=>{if(err!==null){reject(err);return;}accept(personaObj);});}).catch(reject);});}module.exports.setIpfsProvider=setIpfsProvider;module.exports.setWeb3Provider=setWeb3Provider;module.exports.setAttributes=setAttributes;module.exports.getAttributes=getAttributes;}).call(this,require("buffer").Buffer);},{"../environments/development/contracts/UportRegistry.sol.js":1,"bluebird":3,"bs58":5,"buffer":95,"ether-pudding":7,"ipfs-js":4,"web3":9}],3:[function(require,module,exports){(function(process,global){/* @preserve
 * The MIT License (MIT)
 * 
 * Copyright (c) 2013-2015 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 *//**
 * bluebird build version 3.3.5
 * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, using, timers, filter, any, each
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Promise=e();}}(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f;}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);},l,l.exports,e,t,n,r);}return n[o].exports;}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s;}({1:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise){var SomePromiseArray=Promise._SomePromiseArray;function any(promises){var ret=new SomePromiseArray(promises);var promise=ret.promise();ret.setHowMany(1);ret.setUnwrap();ret.init();return promise;}Promise.any=function(promises){return any(promises);};Promise.prototype.any=function(){return any(this);};};},{}],2:[function(_dereq_,module,exports){"use strict";var firstLineError;try{throw new Error();}catch(e){firstLineError=e;}var schedule=_dereq_("./schedule");var Queue=_dereq_("./queue");var util=_dereq_("./util");function Async(){this._customScheduler=false;this._isTickUsed=false;this._lateQueue=new Queue(16);this._normalQueue=new Queue(16);this._haveDrainedQueues=false;this._trampolineEnabled=true;var self=this;this.drainQueues=function(){self._drainQueues();};this._schedule=schedule;}Async.prototype.setScheduler=function(fn){var prev=this._schedule;this._schedule=fn;this._customScheduler=true;return prev;};Async.prototype.hasCustomScheduler=function(){return this._customScheduler;};Async.prototype.enableTrampoline=function(){this._trampolineEnabled=true;};Async.prototype.disableTrampolineIfNecessary=function(){if(util.hasDevTools){this._trampolineEnabled=false;}};Async.prototype.haveItemsQueued=function(){return this._isTickUsed||this._haveDrainedQueues;};Async.prototype.fatalError=function(e,isNode){if(isNode){process.stderr.write("Fatal "+(e instanceof Error?e.stack:e)+"\n");process.exit(2);}else{this.throwLater(e);}};Async.prototype.throwLater=function(fn,arg){if(arguments.length===1){arg=fn;fn=function(){throw arg;};}if(typeof setTimeout!=="undefined"){setTimeout(function(){fn(arg);},0);}else try{this._schedule(function(){fn(arg);});}catch(e){throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");}};function AsyncInvokeLater(fn,receiver,arg){this._lateQueue.push(fn,receiver,arg);this._queueTick();}function AsyncInvoke(fn,receiver,arg){this._normalQueue.push(fn,receiver,arg);this._queueTick();}function AsyncSettlePromises(promise){this._normalQueue._pushOne(promise);this._queueTick();}if(!util.hasDevTools){Async.prototype.invokeLater=AsyncInvokeLater;Async.prototype.invoke=AsyncInvoke;Async.prototype.settlePromises=AsyncSettlePromises;}else{Async.prototype.invokeLater=function(fn,receiver,arg){if(this._trampolineEnabled){AsyncInvokeLater.call(this,fn,receiver,arg);}else{this._schedule(function(){setTimeout(function(){fn.call(receiver,arg);},100);});}};Async.prototype.invoke=function(fn,receiver,arg){if(this._trampolineEnabled){AsyncInvoke.call(this,fn,receiver,arg);}else{this._schedule(function(){fn.call(receiver,arg);});}};Async.prototype.settlePromises=function(promise){if(this._trampolineEnabled){AsyncSettlePromises.call(this,promise);}else{this._schedule(function(){promise._settlePromises();});}};}Async.prototype.invokeFirst=function(fn,receiver,arg){this._normalQueue.unshift(fn,receiver,arg);this._queueTick();};Async.prototype._drainQueue=function(queue){while(queue.length()>0){var fn=queue.shift();if(typeof fn!=="function"){fn._settlePromises();continue;}var receiver=queue.shift();var arg=queue.shift();fn.call(receiver,arg);}};Async.prototype._drainQueues=function(){this._drainQueue(this._normalQueue);this._reset();this._haveDrainedQueues=true;this._drainQueue(this._lateQueue);};Async.prototype._queueTick=function(){if(!this._isTickUsed){this._isTickUsed=true;this._schedule(this.drainQueues);}};Async.prototype._reset=function(){this._isTickUsed=false;};module.exports=Async;module.exports.firstLineError=firstLineError;},{"./queue":26,"./schedule":29,"./util":36}],3:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL,tryConvertToPromise,debug){var calledBind=false;var rejectThis=function(_,e){this._reject(e);};var targetRejected=function(e,context){context.promiseRejectionQueued=true;context.bindingPromise._then(rejectThis,rejectThis,null,this,e);};var bindingResolved=function(thisArg,context){if((this._bitField&50397184)===0){this._resolveCallback(context.target);}};var bindingRejected=function(e,context){if(!context.promiseRejectionQueued)this._reject(e);};Promise.prototype.bind=function(thisArg){if(!calledBind){calledBind=true;Promise.prototype._propagateFrom=debug.propagateFromFunction();Promise.prototype._boundValue=debug.boundValueFunction();}var maybePromise=tryConvertToPromise(thisArg);var ret=new Promise(INTERNAL);ret._propagateFrom(this,1);var target=this._target();ret._setBoundTo(maybePromise);if(maybePromise instanceof Promise){var context={promiseRejectionQueued:false,promise:ret,target:target,bindingPromise:maybePromise};target._then(INTERNAL,targetRejected,undefined,ret,context);maybePromise._then(bindingResolved,bindingRejected,undefined,ret,context);ret._setOnCancel(maybePromise);}else{ret._resolveCallback(target);}return ret;};Promise.prototype._setBoundTo=function(obj){if(obj!==undefined){this._bitField=this._bitField|2097152;this._boundTo=obj;}else{this._bitField=this._bitField&~2097152;}};Promise.prototype._isBound=function(){return(this._bitField&2097152)===2097152;};Promise.bind=function(thisArg,value){return Promise.resolve(value).bind(thisArg);};};},{}],4:[function(_dereq_,module,exports){"use strict";var old;if(typeof Promise!=="undefined")old=Promise;function noConflict(){try{if(Promise===bluebird)Promise=old;}catch(e){}return bluebird;}var bluebird=_dereq_("./promise")();bluebird.noConflict=noConflict;module.exports=bluebird;},{"./promise":22}],5:[function(_dereq_,module,exports){"use strict";var cr=Object.create;if(cr){var callerCache=cr(null);var getterCache=cr(null);callerCache[" size"]=getterCache[" size"]=0;}module.exports=function(Promise){var util=_dereq_("./util");var canEvaluate=util.canEvaluate;var isIdentifier=util.isIdentifier;var getMethodCaller;var getGetter;if(!true){var makeMethodCaller=function(methodName){return new Function("ensureMethod","                                    \n\
        return function(obj) {                                               \n\
            'use strict'                                                     \n\
            var len = this.length;                                           \n\
            ensureMethod(obj, 'methodName');                                 \n\
            switch(len) {                                                    \n\
                case 1: return obj.methodName(this[0]);                      \n\
                case 2: return obj.methodName(this[0], this[1]);             \n\
                case 3: return obj.methodName(this[0], this[1], this[2]);    \n\
                case 0: return obj.methodName();                             \n\
                default:                                                     \n\
                    return obj.methodName.apply(obj, this);                  \n\
            }                                                                \n\
        };                                                                   \n\
        ".replace(/methodName/g,methodName))(ensureMethod);};var makeGetter=function(propertyName){return new Function("obj","                                             \n\
        'use strict';                                                        \n\
        return obj.propertyName;                                             \n\
        ".replace("propertyName",propertyName));};var getCompiled=function(name,compiler,cache){var ret=cache[name];if(typeof ret!=="function"){if(!isIdentifier(name)){return null;}ret=compiler(name);cache[name]=ret;cache[" size"]++;if(cache[" size"]>512){var keys=Object.keys(cache);for(var i=0;i<256;++i)delete cache[keys[i]];cache[" size"]=keys.length-256;}}return ret;};getMethodCaller=function(name){return getCompiled(name,makeMethodCaller,callerCache);};getGetter=function(name){return getCompiled(name,makeGetter,getterCache);};}function ensureMethod(obj,methodName){var fn;if(obj!=null)fn=obj[methodName];if(typeof fn!=="function"){var message="Object "+util.classString(obj)+" has no method '"+util.toString(methodName)+"'";throw new Promise.TypeError(message);}return fn;}function caller(obj){var methodName=this.pop();var fn=ensureMethod(obj,methodName);return fn.apply(obj,this);}Promise.prototype.call=function(methodName){var args=[].slice.call(arguments,1);;if(!true){if(canEvaluate){var maybeCaller=getMethodCaller(methodName);if(maybeCaller!==null){return this._then(maybeCaller,undefined,undefined,args,undefined);}}}args.push(methodName);return this._then(caller,undefined,undefined,args,undefined);};function namedGetter(obj){return obj[this];}function indexedGetter(obj){var index=+this;if(index<0)index=Math.max(0,index+obj.length);return obj[index];}Promise.prototype.get=function(propertyName){var isIndex=typeof propertyName==="number";var getter;if(!isIndex){if(canEvaluate){var maybeGetter=getGetter(propertyName);getter=maybeGetter!==null?maybeGetter:namedGetter;}else{getter=namedGetter;}}else{getter=indexedGetter;}return this._then(getter,undefined,undefined,propertyName,undefined);};};},{"./util":36}],6:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,PromiseArray,apiRejection,debug){var util=_dereq_("./util");var tryCatch=util.tryCatch;var errorObj=util.errorObj;var async=Promise._async;Promise.prototype["break"]=Promise.prototype.cancel=function(){if(!debug.cancellation())return this._warn("cancellation is disabled");var promise=this;var child=promise;while(promise.isCancellable()){if(!promise._cancelBy(child)){if(child._isFollowing()){child._followee().cancel();}else{child._cancelBranched();}break;}var parent=promise._cancellationParent;if(parent==null||!parent.isCancellable()){if(promise._isFollowing()){promise._followee().cancel();}else{promise._cancelBranched();}break;}else{if(promise._isFollowing())promise._followee().cancel();child=promise;promise=parent;}}};Promise.prototype._branchHasCancelled=function(){this._branchesRemainingToCancel--;};Promise.prototype._enoughBranchesHaveCancelled=function(){return this._branchesRemainingToCancel===undefined||this._branchesRemainingToCancel<=0;};Promise.prototype._cancelBy=function(canceller){if(canceller===this){this._branchesRemainingToCancel=0;this._invokeOnCancel();return true;}else{this._branchHasCancelled();if(this._enoughBranchesHaveCancelled()){this._invokeOnCancel();return true;}}return false;};Promise.prototype._cancelBranched=function(){if(this._enoughBranchesHaveCancelled()){this._cancel();}};Promise.prototype._cancel=function(){if(!this.isCancellable())return;this._setCancelled();async.invoke(this._cancelPromises,this,undefined);};Promise.prototype._cancelPromises=function(){if(this._length()>0)this._settlePromises();};Promise.prototype._unsetOnCancel=function(){this._onCancelField=undefined;};Promise.prototype.isCancellable=function(){return this.isPending()&&!this.isCancelled();};Promise.prototype._doInvokeOnCancel=function(onCancelCallback,internalOnly){if(util.isArray(onCancelCallback)){for(var i=0;i<onCancelCallback.length;++i){this._doInvokeOnCancel(onCancelCallback[i],internalOnly);}}else if(onCancelCallback!==undefined){if(typeof onCancelCallback==="function"){if(!internalOnly){var e=tryCatch(onCancelCallback).call(this._boundValue());if(e===errorObj){this._attachExtraTrace(e.e);async.throwLater(e.e);}}}else{onCancelCallback._resultCancelled(this);}}};Promise.prototype._invokeOnCancel=function(){var onCancelCallback=this._onCancel();this._unsetOnCancel();async.invoke(this._doInvokeOnCancel,this,onCancelCallback);};Promise.prototype._invokeInternalOnCancel=function(){if(this.isCancellable()){this._doInvokeOnCancel(this._onCancel(),true);this._unsetOnCancel();}};Promise.prototype._resultCancelled=function(){this.cancel();};};},{"./util":36}],7:[function(_dereq_,module,exports){"use strict";module.exports=function(NEXT_FILTER){var util=_dereq_("./util");var getKeys=_dereq_("./es5").keys;var tryCatch=util.tryCatch;var errorObj=util.errorObj;function catchFilter(instances,cb,promise){return function(e){var boundTo=promise._boundValue();predicateLoop:for(var i=0;i<instances.length;++i){var item=instances[i];if(item===Error||item!=null&&item.prototype instanceof Error){if(e instanceof item){return tryCatch(cb).call(boundTo,e);}}else if(typeof item==="function"){var matchesPredicate=tryCatch(item).call(boundTo,e);if(matchesPredicate===errorObj){return matchesPredicate;}else if(matchesPredicate){return tryCatch(cb).call(boundTo,e);}}else if(util.isObject(e)){var keys=getKeys(item);for(var j=0;j<keys.length;++j){var key=keys[j];if(item[key]!=e[key]){continue predicateLoop;}}return tryCatch(cb).call(boundTo,e);}}return NEXT_FILTER;};}return catchFilter;};},{"./es5":13,"./util":36}],8:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise){var longStackTraces=false;var contextStack=[];Promise.prototype._promiseCreated=function(){};Promise.prototype._pushContext=function(){};Promise.prototype._popContext=function(){return null;};Promise._peekContext=Promise.prototype._peekContext=function(){};function Context(){this._trace=new Context.CapturedTrace(peekContext());}Context.prototype._pushContext=function(){if(this._trace!==undefined){this._trace._promiseCreated=null;contextStack.push(this._trace);}};Context.prototype._popContext=function(){if(this._trace!==undefined){var trace=contextStack.pop();var ret=trace._promiseCreated;trace._promiseCreated=null;return ret;}return null;};function createContext(){if(longStackTraces)return new Context();}function peekContext(){var lastIndex=contextStack.length-1;if(lastIndex>=0){return contextStack[lastIndex];}return undefined;}Context.CapturedTrace=null;Context.create=createContext;Context.deactivateLongStackTraces=function(){};Context.activateLongStackTraces=function(){var Promise_pushContext=Promise.prototype._pushContext;var Promise_popContext=Promise.prototype._popContext;var Promise_PeekContext=Promise._peekContext;var Promise_peekContext=Promise.prototype._peekContext;var Promise_promiseCreated=Promise.prototype._promiseCreated;Context.deactivateLongStackTraces=function(){Promise.prototype._pushContext=Promise_pushContext;Promise.prototype._popContext=Promise_popContext;Promise._peekContext=Promise_PeekContext;Promise.prototype._peekContext=Promise_peekContext;Promise.prototype._promiseCreated=Promise_promiseCreated;longStackTraces=false;};longStackTraces=true;Promise.prototype._pushContext=Context.prototype._pushContext;Promise.prototype._popContext=Context.prototype._popContext;Promise._peekContext=Promise.prototype._peekContext=peekContext;Promise.prototype._promiseCreated=function(){var ctx=this._peekContext();if(ctx&&ctx._promiseCreated==null)ctx._promiseCreated=this;};};return Context;};},{}],9:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,Context){var getDomain=Promise._getDomain;var async=Promise._async;var Warning=_dereq_("./errors").Warning;var util=_dereq_("./util");var canAttachTrace=util.canAttachTrace;var unhandledRejectionHandled;var possiblyUnhandledRejection;var bluebirdFramePattern=/[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;var stackFramePattern=null;var formatStack=null;var indentStackFrames=false;var printWarning;var debugging=!!(util.env("BLUEBIRD_DEBUG")!=0&&(true||util.env("BLUEBIRD_DEBUG")||util.env("NODE_ENV")==="development"));var warnings=!!(util.env("BLUEBIRD_WARNINGS")!=0&&(debugging||util.env("BLUEBIRD_WARNINGS")));var longStackTraces=!!(util.env("BLUEBIRD_LONG_STACK_TRACES")!=0&&(debugging||util.env("BLUEBIRD_LONG_STACK_TRACES")));var wForgottenReturn=util.env("BLUEBIRD_W_FORGOTTEN_RETURN")!=0&&(warnings||!!util.env("BLUEBIRD_W_FORGOTTEN_RETURN"));Promise.prototype.suppressUnhandledRejections=function(){var target=this._target();target._bitField=target._bitField&~1048576|524288;};Promise.prototype._ensurePossibleRejectionHandled=function(){if((this._bitField&524288)!==0)return;this._setRejectionIsUnhandled();async.invokeLater(this._notifyUnhandledRejection,this,undefined);};Promise.prototype._notifyUnhandledRejectionIsHandled=function(){fireRejectionEvent("rejectionHandled",unhandledRejectionHandled,undefined,this);};Promise.prototype._setReturnedNonUndefined=function(){this._bitField=this._bitField|268435456;};Promise.prototype._returnedNonUndefined=function(){return(this._bitField&268435456)!==0;};Promise.prototype._notifyUnhandledRejection=function(){if(this._isRejectionUnhandled()){var reason=this._settledValue();this._setUnhandledRejectionIsNotified();fireRejectionEvent("unhandledRejection",possiblyUnhandledRejection,reason,this);}};Promise.prototype._setUnhandledRejectionIsNotified=function(){this._bitField=this._bitField|262144;};Promise.prototype._unsetUnhandledRejectionIsNotified=function(){this._bitField=this._bitField&~262144;};Promise.prototype._isUnhandledRejectionNotified=function(){return(this._bitField&262144)>0;};Promise.prototype._setRejectionIsUnhandled=function(){this._bitField=this._bitField|1048576;};Promise.prototype._unsetRejectionIsUnhandled=function(){this._bitField=this._bitField&~1048576;if(this._isUnhandledRejectionNotified()){this._unsetUnhandledRejectionIsNotified();this._notifyUnhandledRejectionIsHandled();}};Promise.prototype._isRejectionUnhandled=function(){return(this._bitField&1048576)>0;};Promise.prototype._warn=function(message,shouldUseOwnTrace,promise){return warn(message,shouldUseOwnTrace,promise||this);};Promise.onPossiblyUnhandledRejection=function(fn){var domain=getDomain();possiblyUnhandledRejection=typeof fn==="function"?domain===null?fn:domain.bind(fn):undefined;};Promise.onUnhandledRejectionHandled=function(fn){var domain=getDomain();unhandledRejectionHandled=typeof fn==="function"?domain===null?fn:domain.bind(fn):undefined;};var disableLongStackTraces=function(){};Promise.longStackTraces=function(){if(async.haveItemsQueued()&&!config.longStackTraces){throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");}if(!config.longStackTraces&&longStackTracesIsSupported()){var Promise_captureStackTrace=Promise.prototype._captureStackTrace;var Promise_attachExtraTrace=Promise.prototype._attachExtraTrace;config.longStackTraces=true;disableLongStackTraces=function(){if(async.haveItemsQueued()&&!config.longStackTraces){throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");}Promise.prototype._captureStackTrace=Promise_captureStackTrace;Promise.prototype._attachExtraTrace=Promise_attachExtraTrace;Context.deactivateLongStackTraces();async.enableTrampoline();config.longStackTraces=false;};Promise.prototype._captureStackTrace=longStackTracesCaptureStackTrace;Promise.prototype._attachExtraTrace=longStackTracesAttachExtraTrace;Context.activateLongStackTraces();async.disableTrampolineIfNecessary();}};Promise.hasLongStackTraces=function(){return config.longStackTraces&&longStackTracesIsSupported();};var fireDomEvent=function(){try{var event=document.createEvent("CustomEvent");event.initCustomEvent("testingtheevent",false,true,{});util.global.dispatchEvent(event);return function(name,event){var domEvent=document.createEvent("CustomEvent");domEvent.initCustomEvent(name.toLowerCase(),false,true,event);return!util.global.dispatchEvent(domEvent);};}catch(e){}return function(){return false;};}();var fireGlobalEvent=function(){if(util.isNode){return function(){return process.emit.apply(process,arguments);};}else{if(!util.global){return function(){return false;};}return function(name){var methodName="on"+name.toLowerCase();var method=util.global[methodName];if(!method)return false;method.apply(util.global,[].slice.call(arguments,1));return true;};}}();function generatePromiseLifecycleEventObject(name,promise){return{promise:promise};}var eventToObjectGenerator={promiseCreated:generatePromiseLifecycleEventObject,promiseFulfilled:generatePromiseLifecycleEventObject,promiseRejected:generatePromiseLifecycleEventObject,promiseResolved:generatePromiseLifecycleEventObject,promiseCancelled:generatePromiseLifecycleEventObject,promiseChained:function(name,promise,child){return{promise:promise,child:child};},warning:function(name,warning){return{warning:warning};},unhandledRejection:function(name,reason,promise){return{reason:reason,promise:promise};},rejectionHandled:generatePromiseLifecycleEventObject};var activeFireEvent=function(name){var globalEventFired=false;try{globalEventFired=fireGlobalEvent.apply(null,arguments);}catch(e){async.throwLater(e);globalEventFired=true;}var domEventFired=false;try{domEventFired=fireDomEvent(name,eventToObjectGenerator[name].apply(null,arguments));}catch(e){async.throwLater(e);domEventFired=true;}return domEventFired||globalEventFired;};Promise.config=function(opts){opts=Object(opts);if("longStackTraces"in opts){if(opts.longStackTraces){Promise.longStackTraces();}else if(!opts.longStackTraces&&Promise.hasLongStackTraces()){disableLongStackTraces();}}if("warnings"in opts){var warningsOption=opts.warnings;config.warnings=!!warningsOption;wForgottenReturn=config.warnings;if(util.isObject(warningsOption)){if("wForgottenReturn"in warningsOption){wForgottenReturn=!!warningsOption.wForgottenReturn;}}}if("cancellation"in opts&&opts.cancellation&&!config.cancellation){if(async.haveItemsQueued()){throw new Error("cannot enable cancellation after promises are in use");}Promise.prototype._clearCancellationData=cancellationClearCancellationData;Promise.prototype._propagateFrom=cancellationPropagateFrom;Promise.prototype._onCancel=cancellationOnCancel;Promise.prototype._setOnCancel=cancellationSetOnCancel;Promise.prototype._attachCancellationCallback=cancellationAttachCancellationCallback;Promise.prototype._execute=cancellationExecute;propagateFromFunction=cancellationPropagateFrom;config.cancellation=true;}if("monitoring"in opts){if(opts.monitoring&&!config.monitoring){config.monitoring=true;Promise.prototype._fireEvent=activeFireEvent;}else if(!opts.monitoring&&config.monitoring){config.monitoring=false;Promise.prototype._fireEvent=defaultFireEvent;}}};function defaultFireEvent(){return false;}Promise.prototype._fireEvent=defaultFireEvent;Promise.prototype._execute=function(executor,resolve,reject){try{executor(resolve,reject);}catch(e){return e;}};Promise.prototype._onCancel=function(){};Promise.prototype._setOnCancel=function(handler){;};Promise.prototype._attachCancellationCallback=function(onCancel){;};Promise.prototype._captureStackTrace=function(){};Promise.prototype._attachExtraTrace=function(){};Promise.prototype._clearCancellationData=function(){};Promise.prototype._propagateFrom=function(parent,flags){;;};function cancellationExecute(executor,resolve,reject){var promise=this;try{executor(resolve,reject,function(onCancel){if(typeof onCancel!=="function"){throw new TypeError("onCancel must be a function, got: "+util.toString(onCancel));}promise._attachCancellationCallback(onCancel);});}catch(e){return e;}}function cancellationAttachCancellationCallback(onCancel){if(!this.isCancellable())return this;var previousOnCancel=this._onCancel();if(previousOnCancel!==undefined){if(util.isArray(previousOnCancel)){previousOnCancel.push(onCancel);}else{this._setOnCancel([previousOnCancel,onCancel]);}}else{this._setOnCancel(onCancel);}}function cancellationOnCancel(){return this._onCancelField;}function cancellationSetOnCancel(onCancel){this._onCancelField=onCancel;}function cancellationClearCancellationData(){this._cancellationParent=undefined;this._onCancelField=undefined;}function cancellationPropagateFrom(parent,flags){if((flags&1)!==0){this._cancellationParent=parent;var branchesRemainingToCancel=parent._branchesRemainingToCancel;if(branchesRemainingToCancel===undefined){branchesRemainingToCancel=0;}parent._branchesRemainingToCancel=branchesRemainingToCancel+1;}if((flags&2)!==0&&parent._isBound()){this._setBoundTo(parent._boundTo);}}function bindingPropagateFrom(parent,flags){if((flags&2)!==0&&parent._isBound()){this._setBoundTo(parent._boundTo);}}var propagateFromFunction=bindingPropagateFrom;function boundValueFunction(){var ret=this._boundTo;if(ret!==undefined){if(ret instanceof Promise){if(ret.isFulfilled()){return ret.value();}else{return undefined;}}}return ret;}function longStackTracesCaptureStackTrace(){this._trace=new CapturedTrace(this._peekContext());}function longStackTracesAttachExtraTrace(error,ignoreSelf){if(canAttachTrace(error)){var trace=this._trace;if(trace!==undefined){if(ignoreSelf)trace=trace._parent;}if(trace!==undefined){trace.attachExtraTrace(error);}else if(!error.__stackCleaned__){var parsed=parseStackAndMessage(error);util.notEnumerableProp(error,"stack",parsed.message+"\n"+parsed.stack.join("\n"));util.notEnumerableProp(error,"__stackCleaned__",true);}}}function checkForgottenReturns(returnValue,promiseCreated,name,promise,parent){if(returnValue===undefined&&promiseCreated!==null&&wForgottenReturn){if(parent!==undefined&&parent._returnedNonUndefined())return;if((promise._bitField&65535)===0)return;if(name)name=name+" ";var msg="a promise was created in a "+name+"handler but was not returned from it";promise._warn(msg,true,promiseCreated);}}function deprecated(name,replacement){var message=name+" is deprecated and will be removed in a future version.";if(replacement)message+=" Use "+replacement+" instead.";return warn(message);}function warn(message,shouldUseOwnTrace,promise){if(!config.warnings)return;var warning=new Warning(message);var ctx;if(shouldUseOwnTrace){promise._attachExtraTrace(warning);}else if(config.longStackTraces&&(ctx=Promise._peekContext())){ctx.attachExtraTrace(warning);}else{var parsed=parseStackAndMessage(warning);warning.stack=parsed.message+"\n"+parsed.stack.join("\n");}if(!activeFireEvent("warning",warning)){formatAndLogError(warning,"",true);}}function reconstructStack(message,stacks){for(var i=0;i<stacks.length-1;++i){stacks[i].push("From previous event:");stacks[i]=stacks[i].join("\n");}if(i<stacks.length){stacks[i]=stacks[i].join("\n");}return message+"\n"+stacks.join("\n");}function removeDuplicateOrEmptyJumps(stacks){for(var i=0;i<stacks.length;++i){if(stacks[i].length===0||i+1<stacks.length&&stacks[i][0]===stacks[i+1][0]){stacks.splice(i,1);i--;}}}function removeCommonRoots(stacks){var current=stacks[0];for(var i=1;i<stacks.length;++i){var prev=stacks[i];var currentLastIndex=current.length-1;var currentLastLine=current[currentLastIndex];var commonRootMeetPoint=-1;for(var j=prev.length-1;j>=0;--j){if(prev[j]===currentLastLine){commonRootMeetPoint=j;break;}}for(var j=commonRootMeetPoint;j>=0;--j){var line=prev[j];if(current[currentLastIndex]===line){current.pop();currentLastIndex--;}else{break;}}current=prev;}}function cleanStack(stack){var ret=[];for(var i=0;i<stack.length;++i){var line=stack[i];var isTraceLine="    (No stack trace)"===line||stackFramePattern.test(line);var isInternalFrame=isTraceLine&&shouldIgnore(line);if(isTraceLine&&!isInternalFrame){if(indentStackFrames&&line.charAt(0)!==" "){line="    "+line;}ret.push(line);}}return ret;}function stackFramesAsArray(error){var stack=error.stack.replace(/\s+$/g,"").split("\n");for(var i=0;i<stack.length;++i){var line=stack[i];if("    (No stack trace)"===line||stackFramePattern.test(line)){break;}}if(i>0){stack=stack.slice(i);}return stack;}function parseStackAndMessage(error){var stack=error.stack;var message=error.toString();stack=typeof stack==="string"&&stack.length>0?stackFramesAsArray(error):["    (No stack trace)"];return{message:message,stack:cleanStack(stack)};}function formatAndLogError(error,title,isSoft){if(typeof console!=="undefined"){var message;if(util.isObject(error)){var stack=error.stack;message=title+formatStack(stack,error);}else{message=title+String(error);}if(typeof printWarning==="function"){printWarning(message,isSoft);}else if(typeof console.log==="function"||typeof console.log==="object"){console.log(message);}}}function fireRejectionEvent(name,localHandler,reason,promise){var localEventFired=false;try{if(typeof localHandler==="function"){localEventFired=true;if(name==="rejectionHandled"){localHandler(promise);}else{localHandler(reason,promise);}}}catch(e){async.throwLater(e);}if(name==="unhandledRejection"){if(!activeFireEvent(name,reason,promise)&&!localEventFired){formatAndLogError(reason,"Unhandled rejection ");}}else{activeFireEvent(name,promise);}}function formatNonError(obj){var str;if(typeof obj==="function"){str="[function "+(obj.name||"anonymous")+"]";}else{str=obj&&typeof obj.toString==="function"?obj.toString():util.toString(obj);var ruselessToString=/\[object [a-zA-Z0-9$_]+\]/;if(ruselessToString.test(str)){try{var newStr=JSON.stringify(obj);str=newStr;}catch(e){}}if(str.length===0){str="(empty array)";}}return"(<"+snip(str)+">, no stack trace)";}function snip(str){var maxChars=41;if(str.length<maxChars){return str;}return str.substr(0,maxChars-3)+"...";}function longStackTracesIsSupported(){return typeof captureStackTrace==="function";}var shouldIgnore=function(){return false;};var parseLineInfoRegex=/[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;function parseLineInfo(line){var matches=line.match(parseLineInfoRegex);if(matches){return{fileName:matches[1],line:parseInt(matches[2],10)};}}function setBounds(firstLineError,lastLineError){if(!longStackTracesIsSupported())return;var firstStackLines=firstLineError.stack.split("\n");var lastStackLines=lastLineError.stack.split("\n");var firstIndex=-1;var lastIndex=-1;var firstFileName;var lastFileName;for(var i=0;i<firstStackLines.length;++i){var result=parseLineInfo(firstStackLines[i]);if(result){firstFileName=result.fileName;firstIndex=result.line;break;}}for(var i=0;i<lastStackLines.length;++i){var result=parseLineInfo(lastStackLines[i]);if(result){lastFileName=result.fileName;lastIndex=result.line;break;}}if(firstIndex<0||lastIndex<0||!firstFileName||!lastFileName||firstFileName!==lastFileName||firstIndex>=lastIndex){return;}shouldIgnore=function(line){if(bluebirdFramePattern.test(line))return true;var info=parseLineInfo(line);if(info){if(info.fileName===firstFileName&&firstIndex<=info.line&&info.line<=lastIndex){return true;}}return false;};}function CapturedTrace(parent){this._parent=parent;this._promisesCreated=0;var length=this._length=1+(parent===undefined?0:parent._length);captureStackTrace(this,CapturedTrace);if(length>32)this.uncycle();}util.inherits(CapturedTrace,Error);Context.CapturedTrace=CapturedTrace;CapturedTrace.prototype.uncycle=function(){var length=this._length;if(length<2)return;var nodes=[];var stackToIndex={};for(var i=0,node=this;node!==undefined;++i){nodes.push(node);node=node._parent;}length=this._length=i;for(var i=length-1;i>=0;--i){var stack=nodes[i].stack;if(stackToIndex[stack]===undefined){stackToIndex[stack]=i;}}for(var i=0;i<length;++i){var currentStack=nodes[i].stack;var index=stackToIndex[currentStack];if(index!==undefined&&index!==i){if(index>0){nodes[index-1]._parent=undefined;nodes[index-1]._length=1;}nodes[i]._parent=undefined;nodes[i]._length=1;var cycleEdgeNode=i>0?nodes[i-1]:this;if(index<length-1){cycleEdgeNode._parent=nodes[index+1];cycleEdgeNode._parent.uncycle();cycleEdgeNode._length=cycleEdgeNode._parent._length+1;}else{cycleEdgeNode._parent=undefined;cycleEdgeNode._length=1;}var currentChildLength=cycleEdgeNode._length+1;for(var j=i-2;j>=0;--j){nodes[j]._length=currentChildLength;currentChildLength++;}return;}}};CapturedTrace.prototype.attachExtraTrace=function(error){if(error.__stackCleaned__)return;this.uncycle();var parsed=parseStackAndMessage(error);var message=parsed.message;var stacks=[parsed.stack];var trace=this;while(trace!==undefined){stacks.push(cleanStack(trace.stack.split("\n")));trace=trace._parent;}removeCommonRoots(stacks);removeDuplicateOrEmptyJumps(stacks);util.notEnumerableProp(error,"stack",reconstructStack(message,stacks));util.notEnumerableProp(error,"__stackCleaned__",true);};var captureStackTrace=function stackDetection(){var v8stackFramePattern=/^\s*at\s*/;var v8stackFormatter=function(stack,error){if(typeof stack==="string")return stack;if(error.name!==undefined&&error.message!==undefined){return error.toString();}return formatNonError(error);};if(typeof Error.stackTraceLimit==="number"&&typeof Error.captureStackTrace==="function"){Error.stackTraceLimit+=6;stackFramePattern=v8stackFramePattern;formatStack=v8stackFormatter;var captureStackTrace=Error.captureStackTrace;shouldIgnore=function(line){return bluebirdFramePattern.test(line);};return function(receiver,ignoreUntil){Error.stackTraceLimit+=6;captureStackTrace(receiver,ignoreUntil);Error.stackTraceLimit-=6;};}var err=new Error();if(typeof err.stack==="string"&&err.stack.split("\n")[0].indexOf("stackDetection@")>=0){stackFramePattern=/@/;formatStack=v8stackFormatter;indentStackFrames=true;return function captureStackTrace(o){o.stack=new Error().stack;};}var hasStackAfterThrow;try{throw new Error();}catch(e){hasStackAfterThrow="stack"in e;}if(!("stack"in err)&&hasStackAfterThrow&&typeof Error.stackTraceLimit==="number"){stackFramePattern=v8stackFramePattern;formatStack=v8stackFormatter;return function captureStackTrace(o){Error.stackTraceLimit+=6;try{throw new Error();}catch(e){o.stack=e.stack;}Error.stackTraceLimit-=6;};}formatStack=function(stack,error){if(typeof stack==="string")return stack;if((typeof error==="object"||typeof error==="function")&&error.name!==undefined&&error.message!==undefined){return error.toString();}return formatNonError(error);};return null;}([]);if(typeof console!=="undefined"&&typeof console.warn!=="undefined"){printWarning=function(message){console.warn(message);};if(util.isNode&&process.stderr.isTTY){printWarning=function(message,isSoft){var color=isSoft?"\u001b[33m":"\u001b[31m";console.warn(color+message+"\u001b[0m\n");};}else if(!util.isNode&&typeof new Error().stack==="string"){printWarning=function(message,isSoft){console.warn("%c"+message,isSoft?"color: darkorange":"color: red");};}}var config={warnings:warnings,longStackTraces:false,cancellation:false,monitoring:false};if(longStackTraces)Promise.longStackTraces();return{longStackTraces:function(){return config.longStackTraces;},warnings:function(){return config.warnings;},cancellation:function(){return config.cancellation;},monitoring:function(){return config.monitoring;},propagateFromFunction:function(){return propagateFromFunction;},boundValueFunction:function(){return boundValueFunction;},checkForgottenReturns:checkForgottenReturns,setBounds:setBounds,warn:warn,deprecated:deprecated,CapturedTrace:CapturedTrace,fireDomEvent:fireDomEvent,fireGlobalEvent:fireGlobalEvent};};},{"./errors":12,"./util":36}],10:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise){function returner(){return this.value;}function thrower(){throw this.reason;}Promise.prototype["return"]=Promise.prototype.thenReturn=function(value){if(value instanceof Promise)value.suppressUnhandledRejections();return this._then(returner,undefined,undefined,{value:value},undefined);};Promise.prototype["throw"]=Promise.prototype.thenThrow=function(reason){return this._then(thrower,undefined,undefined,{reason:reason},undefined);};Promise.prototype.catchThrow=function(reason){if(arguments.length<=1){return this._then(undefined,thrower,undefined,{reason:reason},undefined);}else{var _reason=arguments[1];var handler=function(){throw _reason;};return this.caught(reason,handler);}};Promise.prototype.catchReturn=function(value){if(arguments.length<=1){if(value instanceof Promise)value.suppressUnhandledRejections();return this._then(undefined,returner,undefined,{value:value},undefined);}else{var _value=arguments[1];if(_value instanceof Promise)_value.suppressUnhandledRejections();var handler=function(){return _value;};return this.caught(value,handler);}};};},{}],11:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL){var PromiseReduce=Promise.reduce;var PromiseAll=Promise.all;function promiseAllThis(){return PromiseAll(this);}function PromiseMapSeries(promises,fn){return PromiseReduce(promises,fn,INTERNAL,INTERNAL);}Promise.prototype.each=function(fn){return this.mapSeries(fn)._then(promiseAllThis,undefined,undefined,this,undefined);};Promise.prototype.mapSeries=function(fn){return PromiseReduce(this,fn,INTERNAL,INTERNAL);};Promise.each=function(promises,fn){return PromiseMapSeries(promises,fn)._then(promiseAllThis,undefined,undefined,promises,undefined);};Promise.mapSeries=PromiseMapSeries;};},{}],12:[function(_dereq_,module,exports){"use strict";var es5=_dereq_("./es5");var Objectfreeze=es5.freeze;var util=_dereq_("./util");var inherits=util.inherits;var notEnumerableProp=util.notEnumerableProp;function subError(nameProperty,defaultMessage){function SubError(message){if(!(this instanceof SubError))return new SubError(message);notEnumerableProp(this,"message",typeof message==="string"?message:defaultMessage);notEnumerableProp(this,"name",nameProperty);if(Error.captureStackTrace){Error.captureStackTrace(this,this.constructor);}else{Error.call(this);}}inherits(SubError,Error);return SubError;}var _TypeError,_RangeError;var Warning=subError("Warning","warning");var CancellationError=subError("CancellationError","cancellation error");var TimeoutError=subError("TimeoutError","timeout error");var AggregateError=subError("AggregateError","aggregate error");try{_TypeError=TypeError;_RangeError=RangeError;}catch(e){_TypeError=subError("TypeError","type error");_RangeError=subError("RangeError","range error");}var methods=("join pop push shift unshift slice filter forEach some "+"every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");for(var i=0;i<methods.length;++i){if(typeof Array.prototype[methods[i]]==="function"){AggregateError.prototype[methods[i]]=Array.prototype[methods[i]];}}es5.defineProperty(AggregateError.prototype,"length",{value:0,configurable:false,writable:true,enumerable:true});AggregateError.prototype["isOperational"]=true;var level=0;AggregateError.prototype.toString=function(){var indent=Array(level*4+1).join(" ");var ret="\n"+indent+"AggregateError of:"+"\n";level++;indent=Array(level*4+1).join(" ");for(var i=0;i<this.length;++i){var str=this[i]===this?"[Circular AggregateError]":this[i]+"";var lines=str.split("\n");for(var j=0;j<lines.length;++j){lines[j]=indent+lines[j];}str=lines.join("\n");ret+=str+"\n";}level--;return ret;};function OperationalError(message){if(!(this instanceof OperationalError))return new OperationalError(message);notEnumerableProp(this,"name","OperationalError");notEnumerableProp(this,"message",message);this.cause=message;this["isOperational"]=true;if(message instanceof Error){notEnumerableProp(this,"message",message.message);notEnumerableProp(this,"stack",message.stack);}else if(Error.captureStackTrace){Error.captureStackTrace(this,this.constructor);}}inherits(OperationalError,Error);var errorTypes=Error["__BluebirdErrorTypes__"];if(!errorTypes){errorTypes=Objectfreeze({CancellationError:CancellationError,TimeoutError:TimeoutError,OperationalError:OperationalError,RejectionError:OperationalError,AggregateError:AggregateError});es5.defineProperty(Error,"__BluebirdErrorTypes__",{value:errorTypes,writable:false,enumerable:false,configurable:false});}module.exports={Error:Error,TypeError:_TypeError,RangeError:_RangeError,CancellationError:errorTypes.CancellationError,OperationalError:errorTypes.OperationalError,TimeoutError:errorTypes.TimeoutError,AggregateError:errorTypes.AggregateError,Warning:Warning};},{"./es5":13,"./util":36}],13:[function(_dereq_,module,exports){var isES5=function(){"use strict";return this===undefined;}();if(isES5){module.exports={freeze:Object.freeze,defineProperty:Object.defineProperty,getDescriptor:Object.getOwnPropertyDescriptor,keys:Object.keys,names:Object.getOwnPropertyNames,getPrototypeOf:Object.getPrototypeOf,isArray:Array.isArray,isES5:isES5,propertyIsWritable:function(obj,prop){var descriptor=Object.getOwnPropertyDescriptor(obj,prop);return!!(!descriptor||descriptor.writable||descriptor.set);}};}else{var has={}.hasOwnProperty;var str={}.toString;var proto={}.constructor.prototype;var ObjectKeys=function(o){var ret=[];for(var key in o){if(has.call(o,key)){ret.push(key);}}return ret;};var ObjectGetDescriptor=function(o,key){return{value:o[key]};};var ObjectDefineProperty=function(o,key,desc){o[key]=desc.value;return o;};var ObjectFreeze=function(obj){return obj;};var ObjectGetPrototypeOf=function(obj){try{return Object(obj).constructor.prototype;}catch(e){return proto;}};var ArrayIsArray=function(obj){try{return str.call(obj)==="[object Array]";}catch(e){return false;}};module.exports={isArray:ArrayIsArray,keys:ObjectKeys,names:ObjectKeys,defineProperty:ObjectDefineProperty,getDescriptor:ObjectGetDescriptor,freeze:ObjectFreeze,getPrototypeOf:ObjectGetPrototypeOf,isES5:isES5,propertyIsWritable:function(){return true;}};}},{}],14:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL){var PromiseMap=Promise.map;Promise.prototype.filter=function(fn,options){return PromiseMap(this,fn,options,INTERNAL);};Promise.filter=function(promises,fn,options){return PromiseMap(promises,fn,options,INTERNAL);};};},{}],15:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,tryConvertToPromise){var util=_dereq_("./util");var CancellationError=Promise.CancellationError;var errorObj=util.errorObj;function PassThroughHandlerContext(promise,type,handler){this.promise=promise;this.type=type;this.handler=handler;this.called=false;this.cancelPromise=null;}PassThroughHandlerContext.prototype.isFinallyHandler=function(){return this.type===0;};function FinallyHandlerCancelReaction(finallyHandler){this.finallyHandler=finallyHandler;}FinallyHandlerCancelReaction.prototype._resultCancelled=function(){checkCancel(this.finallyHandler);};function checkCancel(ctx,reason){if(ctx.cancelPromise!=null){if(arguments.length>1){ctx.cancelPromise._reject(reason);}else{ctx.cancelPromise._cancel();}ctx.cancelPromise=null;return true;}return false;}function succeed(){return finallyHandler.call(this,this.promise._target()._settledValue());}function fail(reason){if(checkCancel(this,reason))return;errorObj.e=reason;return errorObj;}function finallyHandler(reasonOrValue){var promise=this.promise;var handler=this.handler;if(!this.called){this.called=true;var ret=this.isFinallyHandler()?handler.call(promise._boundValue()):handler.call(promise._boundValue(),reasonOrValue);if(ret!==undefined){promise._setReturnedNonUndefined();var maybePromise=tryConvertToPromise(ret,promise);if(maybePromise instanceof Promise){if(this.cancelPromise!=null){if(maybePromise.isCancelled()){var reason=new CancellationError("late cancellation observer");promise._attachExtraTrace(reason);errorObj.e=reason;return errorObj;}else if(maybePromise.isPending()){maybePromise._attachCancellationCallback(new FinallyHandlerCancelReaction(this));}}return maybePromise._then(succeed,fail,undefined,this,undefined);}}}if(promise.isRejected()){checkCancel(this);errorObj.e=reasonOrValue;return errorObj;}else{checkCancel(this);return reasonOrValue;}}Promise.prototype._passThrough=function(handler,type,success,fail){if(typeof handler!=="function")return this.then();return this._then(success,fail,undefined,new PassThroughHandlerContext(this,type,handler),undefined);};Promise.prototype.lastly=Promise.prototype["finally"]=function(handler){return this._passThrough(handler,0,finallyHandler,finallyHandler);};Promise.prototype.tap=function(handler){return this._passThrough(handler,1,finallyHandler);};return PassThroughHandlerContext;};},{"./util":36}],16:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,apiRejection,INTERNAL,tryConvertToPromise,Proxyable,debug){var errors=_dereq_("./errors");var TypeError=errors.TypeError;var util=_dereq_("./util");var errorObj=util.errorObj;var tryCatch=util.tryCatch;var yieldHandlers=[];function promiseFromYieldHandler(value,yieldHandlers,traceParent){for(var i=0;i<yieldHandlers.length;++i){traceParent._pushContext();var result=tryCatch(yieldHandlers[i])(value);traceParent._popContext();if(result===errorObj){traceParent._pushContext();var ret=Promise.reject(errorObj.e);traceParent._popContext();return ret;}var maybePromise=tryConvertToPromise(result,traceParent);if(maybePromise instanceof Promise)return maybePromise;}return null;}function PromiseSpawn(generatorFunction,receiver,yieldHandler,stack){if(debug.cancellation()){var internal=new Promise(INTERNAL);var _finallyPromise=this._finallyPromise=new Promise(INTERNAL);this._promise=internal.lastly(function(){return _finallyPromise;});internal._captureStackTrace();internal._setOnCancel(this);}else{var promise=this._promise=new Promise(INTERNAL);promise._captureStackTrace();}this._stack=stack;this._generatorFunction=generatorFunction;this._receiver=receiver;this._generator=undefined;this._yieldHandlers=typeof yieldHandler==="function"?[yieldHandler].concat(yieldHandlers):yieldHandlers;this._yieldedPromise=null;this._cancellationPhase=false;}util.inherits(PromiseSpawn,Proxyable);PromiseSpawn.prototype._isResolved=function(){return this._promise===null;};PromiseSpawn.prototype._cleanup=function(){this._promise=this._generator=null;if(debug.cancellation()&&this._finallyPromise!==null){this._finallyPromise._fulfill();this._finallyPromise=null;}};PromiseSpawn.prototype._promiseCancelled=function(){if(this._isResolved())return;var implementsReturn=typeof this._generator["return"]!=="undefined";var result;if(!implementsReturn){var reason=new Promise.CancellationError("generator .return() sentinel");Promise.coroutine.returnSentinel=reason;this._promise._attachExtraTrace(reason);this._promise._pushContext();result=tryCatch(this._generator["throw"]).call(this._generator,reason);this._promise._popContext();}else{this._promise._pushContext();result=tryCatch(this._generator["return"]).call(this._generator,undefined);this._promise._popContext();}this._cancellationPhase=true;this._yieldedPromise=null;this._continue(result);};PromiseSpawn.prototype._promiseFulfilled=function(value){this._yieldedPromise=null;this._promise._pushContext();var result=tryCatch(this._generator.next).call(this._generator,value);this._promise._popContext();this._continue(result);};PromiseSpawn.prototype._promiseRejected=function(reason){this._yieldedPromise=null;this._promise._attachExtraTrace(reason);this._promise._pushContext();var result=tryCatch(this._generator["throw"]).call(this._generator,reason);this._promise._popContext();this._continue(result);};PromiseSpawn.prototype._resultCancelled=function(){if(this._yieldedPromise instanceof Promise){var promise=this._yieldedPromise;this._yieldedPromise=null;promise.cancel();}};PromiseSpawn.prototype.promise=function(){return this._promise;};PromiseSpawn.prototype._run=function(){this._generator=this._generatorFunction.call(this._receiver);this._receiver=this._generatorFunction=undefined;this._promiseFulfilled(undefined);};PromiseSpawn.prototype._continue=function(result){var promise=this._promise;if(result===errorObj){this._cleanup();if(this._cancellationPhase){return promise.cancel();}else{return promise._rejectCallback(result.e,false);}}var value=result.value;if(result.done===true){this._cleanup();if(this._cancellationPhase){return promise.cancel();}else{return promise._resolveCallback(value);}}else{var maybePromise=tryConvertToPromise(value,this._promise);if(!(maybePromise instanceof Promise)){maybePromise=promiseFromYieldHandler(maybePromise,this._yieldHandlers,this._promise);if(maybePromise===null){this._promiseRejected(new TypeError("A value %s was yielded that could not be treated as a promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a\u000a".replace("%s",value)+"From coroutine:\u000a"+this._stack.split("\n").slice(1,-7).join("\n")));return;}}maybePromise=maybePromise._target();var bitField=maybePromise._bitField;;if((bitField&50397184)===0){this._yieldedPromise=maybePromise;maybePromise._proxy(this,null);}else if((bitField&33554432)!==0){this._promiseFulfilled(maybePromise._value());}else if((bitField&16777216)!==0){this._promiseRejected(maybePromise._reason());}else{this._promiseCancelled();}}};Promise.coroutine=function(generatorFunction,options){if(typeof generatorFunction!=="function"){throw new TypeError("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");}var yieldHandler=Object(options).yieldHandler;var PromiseSpawn$=PromiseSpawn;var stack=new Error().stack;return function(){var generator=generatorFunction.apply(this,arguments);var spawn=new PromiseSpawn$(undefined,undefined,yieldHandler,stack);var ret=spawn.promise();spawn._generator=generator;spawn._promiseFulfilled(undefined);return ret;};};Promise.coroutine.addYieldHandler=function(fn){if(typeof fn!=="function"){throw new TypeError("expecting a function but got "+util.classString(fn));}yieldHandlers.push(fn);};Promise.spawn=function(generatorFunction){debug.deprecated("Promise.spawn()","Promise.coroutine()");if(typeof generatorFunction!=="function"){return apiRejection("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");}var spawn=new PromiseSpawn(generatorFunction,this);var ret=spawn.promise();spawn._run(Promise.spawn);return ret;};};},{"./errors":12,"./util":36}],17:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,PromiseArray,tryConvertToPromise,INTERNAL){var util=_dereq_("./util");var canEvaluate=util.canEvaluate;var tryCatch=util.tryCatch;var errorObj=util.errorObj;var reject;if(!true){if(canEvaluate){var thenCallback=function(i){return new Function("value","holder","                             \n\
            'use strict';                                                    \n\
            holder.pIndex = value;                                           \n\
            holder.checkFulfillment(this);                                   \n\
            ".replace(/Index/g,i));};var promiseSetter=function(i){return new Function("promise","holder","                           \n\
            'use strict';                                                    \n\
            holder.pIndex = promise;                                         \n\
            ".replace(/Index/g,i));};var generateHolderClass=function(total){var props=new Array(total);for(var i=0;i<props.length;++i){props[i]="this.p"+(i+1);}var assignment=props.join(" = ")+" = null;";var cancellationCode="var promise;\n"+props.map(function(prop){return"                                                         \n\
                promise = "+prop+";                                      \n\
                if (promise instanceof Promise) {                            \n\
                    promise.cancel();                                        \n\
                }                                                            \n\
            ";}).join("\n");var passedArguments=props.join(", ");var name="Holder$"+total;var code="return function(tryCatch, errorObj, Promise) {           \n\
            'use strict';                                                    \n\
            function [TheName](fn) {                                         \n\
                [TheProperties]                                              \n\
                this.fn = fn;                                                \n\
                this.now = 0;                                                \n\
            }                                                                \n\
            [TheName].prototype.checkFulfillment = function(promise) {       \n\
                var now = ++this.now;                                        \n\
                if (now === [TheTotal]) {                                    \n\
                    promise._pushContext();                                  \n\
                    var callback = this.fn;                                  \n\
                    var ret = tryCatch(callback)([ThePassedArguments]);      \n\
                    promise._popContext();                                   \n\
                    if (ret === errorObj) {                                  \n\
                        promise._rejectCallback(ret.e, false);               \n\
                    } else {                                                 \n\
                        promise._resolveCallback(ret);                       \n\
                    }                                                        \n\
                }                                                            \n\
            };                                                               \n\
                                                                             \n\
            [TheName].prototype._resultCancelled = function() {              \n\
                [CancellationCode]                                           \n\
            };                                                               \n\
                                                                             \n\
            return [TheName];                                                \n\
        }(tryCatch, errorObj, Promise);                                      \n\
        ";code=code.replace(/\[TheName\]/g,name).replace(/\[TheTotal\]/g,total).replace(/\[ThePassedArguments\]/g,passedArguments).replace(/\[TheProperties\]/g,assignment).replace(/\[CancellationCode\]/g,cancellationCode);return new Function("tryCatch","errorObj","Promise",code)(tryCatch,errorObj,Promise);};var holderClasses=[];var thenCallbacks=[];var promiseSetters=[];for(var i=0;i<8;++i){holderClasses.push(generateHolderClass(i+1));thenCallbacks.push(thenCallback(i+1));promiseSetters.push(promiseSetter(i+1));}reject=function(reason){this._reject(reason);};}}Promise.join=function(){var last=arguments.length-1;var fn;if(last>0&&typeof arguments[last]==="function"){fn=arguments[last];if(!true){if(last<=8&&canEvaluate){var ret=new Promise(INTERNAL);ret._captureStackTrace();var HolderClass=holderClasses[last-1];var holder=new HolderClass(fn);var callbacks=thenCallbacks;for(var i=0;i<last;++i){var maybePromise=tryConvertToPromise(arguments[i],ret);if(maybePromise instanceof Promise){maybePromise=maybePromise._target();var bitField=maybePromise._bitField;;if((bitField&50397184)===0){maybePromise._then(callbacks[i],reject,undefined,ret,holder);promiseSetters[i](maybePromise,holder);}else if((bitField&33554432)!==0){callbacks[i].call(ret,maybePromise._value(),holder);}else if((bitField&16777216)!==0){ret._reject(maybePromise._reason());}else{ret._cancel();}}else{callbacks[i].call(ret,maybePromise,holder);}}if(!ret._isFateSealed()){ret._setAsyncGuaranteed();ret._setOnCancel(holder);}return ret;}}}var args=[].slice.call(arguments);;if(fn)args.pop();var ret=new PromiseArray(args).promise();return fn!==undefined?ret.spread(fn):ret;};};},{"./util":36}],18:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,PromiseArray,apiRejection,tryConvertToPromise,INTERNAL,debug){var getDomain=Promise._getDomain;var util=_dereq_("./util");var tryCatch=util.tryCatch;var errorObj=util.errorObj;var EMPTY_ARRAY=[];function MappingPromiseArray(promises,fn,limit,_filter){this.constructor$(promises);this._promise._captureStackTrace();var domain=getDomain();this._callback=domain===null?fn:domain.bind(fn);this._preservedValues=_filter===INTERNAL?new Array(this.length()):null;this._limit=limit;this._inFlight=0;this._queue=limit>=1?[]:EMPTY_ARRAY;this._init$(undefined,-2);}util.inherits(MappingPromiseArray,PromiseArray);MappingPromiseArray.prototype._init=function(){};MappingPromiseArray.prototype._promiseFulfilled=function(value,index){var values=this._values;var length=this.length();var preservedValues=this._preservedValues;var limit=this._limit;if(index<0){index=index*-1-1;values[index]=value;if(limit>=1){this._inFlight--;this._drainQueue();if(this._isResolved())return true;}}else{if(limit>=1&&this._inFlight>=limit){values[index]=value;this._queue.push(index);return false;}if(preservedValues!==null)preservedValues[index]=value;var promise=this._promise;var callback=this._callback;var receiver=promise._boundValue();promise._pushContext();var ret=tryCatch(callback).call(receiver,value,index,length);var promiseCreated=promise._popContext();debug.checkForgottenReturns(ret,promiseCreated,preservedValues!==null?"Promise.filter":"Promise.map",promise);if(ret===errorObj){this._reject(ret.e);return true;}var maybePromise=tryConvertToPromise(ret,this._promise);if(maybePromise instanceof Promise){maybePromise=maybePromise._target();var bitField=maybePromise._bitField;;if((bitField&50397184)===0){if(limit>=1)this._inFlight++;values[index]=maybePromise;maybePromise._proxy(this,(index+1)*-1);return false;}else if((bitField&33554432)!==0){ret=maybePromise._value();}else if((bitField&16777216)!==0){this._reject(maybePromise._reason());return true;}else{this._cancel();return true;}}values[index]=ret;}var totalResolved=++this._totalResolved;if(totalResolved>=length){if(preservedValues!==null){this._filter(values,preservedValues);}else{this._resolve(values);}return true;}return false;};MappingPromiseArray.prototype._drainQueue=function(){var queue=this._queue;var limit=this._limit;var values=this._values;while(queue.length>0&&this._inFlight<limit){if(this._isResolved())return;var index=queue.pop();this._promiseFulfilled(values[index],index);}};MappingPromiseArray.prototype._filter=function(booleans,values){var len=values.length;var ret=new Array(len);var j=0;for(var i=0;i<len;++i){if(booleans[i])ret[j++]=values[i];}ret.length=j;this._resolve(ret);};MappingPromiseArray.prototype.preservedValues=function(){return this._preservedValues;};function map(promises,fn,options,_filter){if(typeof fn!=="function"){return apiRejection("expecting a function but got "+util.classString(fn));}var limit=typeof options==="object"&&options!==null?options.concurrency:0;limit=typeof limit==="number"&&isFinite(limit)&&limit>=1?limit:0;return new MappingPromiseArray(promises,fn,limit,_filter).promise();}Promise.prototype.map=function(fn,options){return map(this,fn,options,null);};Promise.map=function(promises,fn,options,_filter){return map(promises,fn,options,_filter);};};},{"./util":36}],19:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL,tryConvertToPromise,apiRejection,debug){var util=_dereq_("./util");var tryCatch=util.tryCatch;Promise.method=function(fn){if(typeof fn!=="function"){throw new Promise.TypeError("expecting a function but got "+util.classString(fn));}return function(){var ret=new Promise(INTERNAL);ret._captureStackTrace();ret._pushContext();var value=tryCatch(fn).apply(this,arguments);var promiseCreated=ret._popContext();debug.checkForgottenReturns(value,promiseCreated,"Promise.method",ret);ret._resolveFromSyncValue(value);return ret;};};Promise.attempt=Promise["try"]=function(fn){if(typeof fn!=="function"){return apiRejection("expecting a function but got "+util.classString(fn));}var ret=new Promise(INTERNAL);ret._captureStackTrace();ret._pushContext();var value;if(arguments.length>1){debug.deprecated("calling Promise.try with more than 1 argument");var arg=arguments[1];var ctx=arguments[2];value=util.isArray(arg)?tryCatch(fn).apply(ctx,arg):tryCatch(fn).call(ctx,arg);}else{value=tryCatch(fn)();}var promiseCreated=ret._popContext();debug.checkForgottenReturns(value,promiseCreated,"Promise.try",ret);ret._resolveFromSyncValue(value);return ret;};Promise.prototype._resolveFromSyncValue=function(value){if(value===util.errorObj){this._rejectCallback(value.e,false);}else{this._resolveCallback(value,true);}};};},{"./util":36}],20:[function(_dereq_,module,exports){"use strict";var util=_dereq_("./util");var maybeWrapAsError=util.maybeWrapAsError;var errors=_dereq_("./errors");var OperationalError=errors.OperationalError;var es5=_dereq_("./es5");function isUntypedError(obj){return obj instanceof Error&&es5.getPrototypeOf(obj)===Error.prototype;}var rErrorKey=/^(?:name|message|stack|cause)$/;function wrapAsOperationalError(obj){var ret;if(isUntypedError(obj)){ret=new OperationalError(obj);ret.name=obj.name;ret.message=obj.message;ret.stack=obj.stack;var keys=es5.keys(obj);for(var i=0;i<keys.length;++i){var key=keys[i];if(!rErrorKey.test(key)){ret[key]=obj[key];}}return ret;}util.markAsOriginatingFromRejection(obj);return obj;}function nodebackForPromise(promise,multiArgs){return function(err,value){if(promise===null)return;if(err){var wrapped=wrapAsOperationalError(maybeWrapAsError(err));promise._attachExtraTrace(wrapped);promise._reject(wrapped);}else if(!multiArgs){promise._fulfill(value);}else{var args=[].slice.call(arguments,1);;promise._fulfill(args);}promise=null;};}module.exports=nodebackForPromise;},{"./errors":12,"./es5":13,"./util":36}],21:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise){var util=_dereq_("./util");var async=Promise._async;var tryCatch=util.tryCatch;var errorObj=util.errorObj;function spreadAdapter(val,nodeback){var promise=this;if(!util.isArray(val))return successAdapter.call(promise,val,nodeback);var ret=tryCatch(nodeback).apply(promise._boundValue(),[null].concat(val));if(ret===errorObj){async.throwLater(ret.e);}}function successAdapter(val,nodeback){var promise=this;var receiver=promise._boundValue();var ret=val===undefined?tryCatch(nodeback).call(receiver,null):tryCatch(nodeback).call(receiver,null,val);if(ret===errorObj){async.throwLater(ret.e);}}function errorAdapter(reason,nodeback){var promise=this;if(!reason){var newReason=new Error(reason+"");newReason.cause=reason;reason=newReason;}var ret=tryCatch(nodeback).call(promise._boundValue(),reason);if(ret===errorObj){async.throwLater(ret.e);}}Promise.prototype.asCallback=Promise.prototype.nodeify=function(nodeback,options){if(typeof nodeback=="function"){var adapter=successAdapter;if(options!==undefined&&Object(options).spread){adapter=spreadAdapter;}this._then(adapter,errorAdapter,undefined,this,nodeback);}return this;};};},{"./util":36}],22:[function(_dereq_,module,exports){"use strict";module.exports=function(){var makeSelfResolutionError=function(){return new TypeError("circular promise resolution chain\u000a\u000a    See http://goo.gl/MqrFmX\u000a");};var reflectHandler=function(){return new Promise.PromiseInspection(this._target());};var apiRejection=function(msg){return Promise.reject(new TypeError(msg));};function Proxyable(){}var UNDEFINED_BINDING={};var util=_dereq_("./util");var getDomain;if(util.isNode){getDomain=function(){var ret=process.domain;if(ret===undefined)ret=null;return ret;};}else{getDomain=function(){return null;};}util.notEnumerableProp(Promise,"_getDomain",getDomain);var es5=_dereq_("./es5");var Async=_dereq_("./async");var async=new Async();es5.defineProperty(Promise,"_async",{value:async});var errors=_dereq_("./errors");var TypeError=Promise.TypeError=errors.TypeError;Promise.RangeError=errors.RangeError;var CancellationError=Promise.CancellationError=errors.CancellationError;Promise.TimeoutError=errors.TimeoutError;Promise.OperationalError=errors.OperationalError;Promise.RejectionError=errors.OperationalError;Promise.AggregateError=errors.AggregateError;var INTERNAL=function(){};var APPLY={};var NEXT_FILTER={};var tryConvertToPromise=_dereq_("./thenables")(Promise,INTERNAL);var PromiseArray=_dereq_("./promise_array")(Promise,INTERNAL,tryConvertToPromise,apiRejection,Proxyable);var Context=_dereq_("./context")(Promise);/*jshint unused:false*/var createContext=Context.create;var debug=_dereq_("./debuggability")(Promise,Context);var CapturedTrace=debug.CapturedTrace;var PassThroughHandlerContext=_dereq_("./finally")(Promise,tryConvertToPromise);var catchFilter=_dereq_("./catch_filter")(NEXT_FILTER);var nodebackForPromise=_dereq_("./nodeback");var errorObj=util.errorObj;var tryCatch=util.tryCatch;function check(self,executor){if(typeof executor!=="function"){throw new TypeError("expecting a function but got "+util.classString(executor));}if(self.constructor!==Promise){throw new TypeError("the promise constructor cannot be invoked directly\u000a\u000a    See http://goo.gl/MqrFmX\u000a");}}function Promise(executor){this._bitField=0;this._fulfillmentHandler0=undefined;this._rejectionHandler0=undefined;this._promise0=undefined;this._receiver0=undefined;if(executor!==INTERNAL){check(this,executor);this._resolveFromExecutor(executor);}this._promiseCreated();this._fireEvent("promiseCreated",this);}Promise.prototype.toString=function(){return"[object Promise]";};Promise.prototype.caught=Promise.prototype["catch"]=function(fn){var len=arguments.length;if(len>1){var catchInstances=new Array(len-1),j=0,i;for(i=0;i<len-1;++i){var item=arguments[i];if(util.isObject(item)){catchInstances[j++]=item;}else{return apiRejection("expecting an object but got "+util.classString(item));}}catchInstances.length=j;fn=arguments[i];return this.then(undefined,catchFilter(catchInstances,fn,this));}return this.then(undefined,fn);};Promise.prototype.reflect=function(){return this._then(reflectHandler,reflectHandler,undefined,this,undefined);};Promise.prototype.then=function(didFulfill,didReject){if(debug.warnings()&&arguments.length>0&&typeof didFulfill!=="function"&&typeof didReject!=="function"){var msg=".then() only accepts functions but was passed: "+util.classString(didFulfill);if(arguments.length>1){msg+=", "+util.classString(didReject);}this._warn(msg);}return this._then(didFulfill,didReject,undefined,undefined,undefined);};Promise.prototype.done=function(didFulfill,didReject){var promise=this._then(didFulfill,didReject,undefined,undefined,undefined);promise._setIsFinal();};Promise.prototype.spread=function(fn){if(typeof fn!=="function"){return apiRejection("expecting a function but got "+util.classString(fn));}return this.all()._then(fn,undefined,undefined,APPLY,undefined);};Promise.prototype.toJSON=function(){var ret={isFulfilled:false,isRejected:false,fulfillmentValue:undefined,rejectionReason:undefined};if(this.isFulfilled()){ret.fulfillmentValue=this.value();ret.isFulfilled=true;}else if(this.isRejected()){ret.rejectionReason=this.reason();ret.isRejected=true;}return ret;};Promise.prototype.all=function(){if(arguments.length>0){this._warn(".all() was passed arguments but it does not take any");}return new PromiseArray(this).promise();};Promise.prototype.error=function(fn){return this.caught(util.originatesFromRejection,fn);};Promise.is=function(val){return val instanceof Promise;};Promise.fromNode=Promise.fromCallback=function(fn){var ret=new Promise(INTERNAL);ret._captureStackTrace();var multiArgs=arguments.length>1?!!Object(arguments[1]).multiArgs:false;var result=tryCatch(fn)(nodebackForPromise(ret,multiArgs));if(result===errorObj){ret._rejectCallback(result.e,true);}if(!ret._isFateSealed())ret._setAsyncGuaranteed();return ret;};Promise.all=function(promises){return new PromiseArray(promises).promise();};Promise.cast=function(obj){var ret=tryConvertToPromise(obj);if(!(ret instanceof Promise)){ret=new Promise(INTERNAL);ret._captureStackTrace();ret._setFulfilled();ret._rejectionHandler0=obj;}return ret;};Promise.resolve=Promise.fulfilled=Promise.cast;Promise.reject=Promise.rejected=function(reason){var ret=new Promise(INTERNAL);ret._captureStackTrace();ret._rejectCallback(reason,true);return ret;};Promise.setScheduler=function(fn){if(typeof fn!=="function"){throw new TypeError("expecting a function but got "+util.classString(fn));}return async.setScheduler(fn);};Promise.prototype._then=function(didFulfill,didReject,_,receiver,internalData){var haveInternalData=internalData!==undefined;var promise=haveInternalData?internalData:new Promise(INTERNAL);var target=this._target();var bitField=target._bitField;if(!haveInternalData){promise._propagateFrom(this,3);promise._captureStackTrace();if(receiver===undefined&&(this._bitField&2097152)!==0){if(!((bitField&50397184)===0)){receiver=this._boundValue();}else{receiver=target===this?undefined:this._boundTo;}}this._fireEvent("promiseChained",this,promise);}var domain=getDomain();if(!((bitField&50397184)===0)){var handler,value,settler=target._settlePromiseCtx;if((bitField&33554432)!==0){value=target._rejectionHandler0;handler=didFulfill;}else if((bitField&16777216)!==0){value=target._fulfillmentHandler0;handler=didReject;target._unsetRejectionIsUnhandled();}else{settler=target._settlePromiseLateCancellationObserver;value=new CancellationError("late cancellation observer");target._attachExtraTrace(value);handler=didReject;}async.invoke(settler,target,{handler:domain===null?handler:typeof handler==="function"&&domain.bind(handler),promise:promise,receiver:receiver,value:value});}else{target._addCallbacks(didFulfill,didReject,promise,receiver,domain);}return promise;};Promise.prototype._length=function(){return this._bitField&65535;};Promise.prototype._isFateSealed=function(){return(this._bitField&117506048)!==0;};Promise.prototype._isFollowing=function(){return(this._bitField&67108864)===67108864;};Promise.prototype._setLength=function(len){this._bitField=this._bitField&-65536|len&65535;};Promise.prototype._setFulfilled=function(){this._bitField=this._bitField|33554432;this._fireEvent("promiseFulfilled",this);};Promise.prototype._setRejected=function(){this._bitField=this._bitField|16777216;this._fireEvent("promiseRejected",this);};Promise.prototype._setFollowing=function(){this._bitField=this._bitField|67108864;this._fireEvent("promiseResolved",this);};Promise.prototype._setIsFinal=function(){this._bitField=this._bitField|4194304;};Promise.prototype._isFinal=function(){return(this._bitField&4194304)>0;};Promise.prototype._unsetCancelled=function(){this._bitField=this._bitField&~65536;};Promise.prototype._setCancelled=function(){this._bitField=this._bitField|65536;this._fireEvent("promiseCancelled",this);};Promise.prototype._setAsyncGuaranteed=function(){if(async.hasCustomScheduler())return;this._bitField=this._bitField|134217728;};Promise.prototype._receiverAt=function(index){var ret=index===0?this._receiver0:this[index*4-4+3];if(ret===UNDEFINED_BINDING){return undefined;}else if(ret===undefined&&this._isBound()){return this._boundValue();}return ret;};Promise.prototype._promiseAt=function(index){return this[index*4-4+2];};Promise.prototype._fulfillmentHandlerAt=function(index){return this[index*4-4+0];};Promise.prototype._rejectionHandlerAt=function(index){return this[index*4-4+1];};Promise.prototype._boundValue=function(){};Promise.prototype._migrateCallback0=function(follower){var bitField=follower._bitField;var fulfill=follower._fulfillmentHandler0;var reject=follower._rejectionHandler0;var promise=follower._promise0;var receiver=follower._receiverAt(0);if(receiver===undefined)receiver=UNDEFINED_BINDING;this._addCallbacks(fulfill,reject,promise,receiver,null);};Promise.prototype._migrateCallbackAt=function(follower,index){var fulfill=follower._fulfillmentHandlerAt(index);var reject=follower._rejectionHandlerAt(index);var promise=follower._promiseAt(index);var receiver=follower._receiverAt(index);if(receiver===undefined)receiver=UNDEFINED_BINDING;this._addCallbacks(fulfill,reject,promise,receiver,null);};Promise.prototype._addCallbacks=function(fulfill,reject,promise,receiver,domain){var index=this._length();if(index>=65535-4){index=0;this._setLength(0);}if(index===0){this._promise0=promise;this._receiver0=receiver;if(typeof fulfill==="function"){this._fulfillmentHandler0=domain===null?fulfill:domain.bind(fulfill);}if(typeof reject==="function"){this._rejectionHandler0=domain===null?reject:domain.bind(reject);}}else{var base=index*4-4;this[base+2]=promise;this[base+3]=receiver;if(typeof fulfill==="function"){this[base+0]=domain===null?fulfill:domain.bind(fulfill);}if(typeof reject==="function"){this[base+1]=domain===null?reject:domain.bind(reject);}}this._setLength(index+1);return index;};Promise.prototype._proxy=function(proxyable,arg){this._addCallbacks(undefined,undefined,arg,proxyable,null);};Promise.prototype._resolveCallback=function(value,shouldBind){if((this._bitField&117506048)!==0)return;if(value===this)return this._rejectCallback(makeSelfResolutionError(),false);var maybePromise=tryConvertToPromise(value,this);if(!(maybePromise instanceof Promise))return this._fulfill(value);if(shouldBind)this._propagateFrom(maybePromise,2);var promise=maybePromise._target();if(promise===this){this._reject(makeSelfResolutionError());return;}var bitField=promise._bitField;if((bitField&50397184)===0){var len=this._length();if(len>0)promise._migrateCallback0(this);for(var i=1;i<len;++i){promise._migrateCallbackAt(this,i);}this._setFollowing();this._setLength(0);this._setFollowee(promise);}else if((bitField&33554432)!==0){this._fulfill(promise._value());}else if((bitField&16777216)!==0){this._reject(promise._reason());}else{var reason=new CancellationError("late cancellation observer");promise._attachExtraTrace(reason);this._reject(reason);}};Promise.prototype._rejectCallback=function(reason,synchronous,ignoreNonErrorWarnings){var trace=util.ensureErrorObject(reason);var hasStack=trace===reason;if(!hasStack&&!ignoreNonErrorWarnings&&debug.warnings()){var message="a promise was rejected with a non-error: "+util.classString(reason);this._warn(message,true);}this._attachExtraTrace(trace,synchronous?hasStack:false);this._reject(reason);};Promise.prototype._resolveFromExecutor=function(executor){var promise=this;this._captureStackTrace();this._pushContext();var synchronous=true;var r=this._execute(executor,function(value){promise._resolveCallback(value);},function(reason){promise._rejectCallback(reason,synchronous);});synchronous=false;this._popContext();if(r!==undefined){promise._rejectCallback(r,true);}};Promise.prototype._settlePromiseFromHandler=function(handler,receiver,value,promise){var bitField=promise._bitField;if((bitField&65536)!==0)return;promise._pushContext();var x;if(receiver===APPLY){if(!value||typeof value.length!=="number"){x=errorObj;x.e=new TypeError("cannot .spread() a non-array: "+util.classString(value));}else{x=tryCatch(handler).apply(this._boundValue(),value);}}else{x=tryCatch(handler).call(receiver,value);}var promiseCreated=promise._popContext();bitField=promise._bitField;if((bitField&65536)!==0)return;if(x===NEXT_FILTER){promise._reject(value);}else if(x===errorObj){promise._rejectCallback(x.e,false);}else{debug.checkForgottenReturns(x,promiseCreated,"",promise,this);promise._resolveCallback(x);}};Promise.prototype._target=function(){var ret=this;while(ret._isFollowing())ret=ret._followee();return ret;};Promise.prototype._followee=function(){return this._rejectionHandler0;};Promise.prototype._setFollowee=function(promise){this._rejectionHandler0=promise;};Promise.prototype._settlePromise=function(promise,handler,receiver,value){var isPromise=promise instanceof Promise;var bitField=this._bitField;var asyncGuaranteed=(bitField&134217728)!==0;if((bitField&65536)!==0){if(isPromise)promise._invokeInternalOnCancel();if(receiver instanceof PassThroughHandlerContext&&receiver.isFinallyHandler()){receiver.cancelPromise=promise;if(tryCatch(handler).call(receiver,value)===errorObj){promise._reject(errorObj.e);}}else if(handler===reflectHandler){promise._fulfill(reflectHandler.call(receiver));}else if(receiver instanceof Proxyable){receiver._promiseCancelled(promise);}else if(isPromise||promise instanceof PromiseArray){promise._cancel();}else{receiver.cancel();}}else if(typeof handler==="function"){if(!isPromise){handler.call(receiver,value,promise);}else{if(asyncGuaranteed)promise._setAsyncGuaranteed();this._settlePromiseFromHandler(handler,receiver,value,promise);}}else if(receiver instanceof Proxyable){if(!receiver._isResolved()){if((bitField&33554432)!==0){receiver._promiseFulfilled(value,promise);}else{receiver._promiseRejected(value,promise);}}}else if(isPromise){if(asyncGuaranteed)promise._setAsyncGuaranteed();if((bitField&33554432)!==0){promise._fulfill(value);}else{promise._reject(value);}}};Promise.prototype._settlePromiseLateCancellationObserver=function(ctx){var handler=ctx.handler;var promise=ctx.promise;var receiver=ctx.receiver;var value=ctx.value;if(typeof handler==="function"){if(!(promise instanceof Promise)){handler.call(receiver,value,promise);}else{this._settlePromiseFromHandler(handler,receiver,value,promise);}}else if(promise instanceof Promise){promise._reject(value);}};Promise.prototype._settlePromiseCtx=function(ctx){this._settlePromise(ctx.promise,ctx.handler,ctx.receiver,ctx.value);};Promise.prototype._settlePromise0=function(handler,value,bitField){var promise=this._promise0;var receiver=this._receiverAt(0);this._promise0=undefined;this._receiver0=undefined;this._settlePromise(promise,handler,receiver,value);};Promise.prototype._clearCallbackDataAtIndex=function(index){var base=index*4-4;this[base+2]=this[base+3]=this[base+0]=this[base+1]=undefined;};Promise.prototype._fulfill=function(value){var bitField=this._bitField;if((bitField&117506048)>>>16)return;if(value===this){var err=makeSelfResolutionError();this._attachExtraTrace(err);return this._reject(err);}this._setFulfilled();this._rejectionHandler0=value;if((bitField&65535)>0){if((bitField&134217728)!==0){this._settlePromises();}else{async.settlePromises(this);}}};Promise.prototype._reject=function(reason){var bitField=this._bitField;if((bitField&117506048)>>>16)return;this._setRejected();this._fulfillmentHandler0=reason;if(this._isFinal()){return async.fatalError(reason,util.isNode);}if((bitField&65535)>0){async.settlePromises(this);}else{this._ensurePossibleRejectionHandled();}};Promise.prototype._fulfillPromises=function(len,value){for(var i=1;i<len;i++){var handler=this._fulfillmentHandlerAt(i);var promise=this._promiseAt(i);var receiver=this._receiverAt(i);this._clearCallbackDataAtIndex(i);this._settlePromise(promise,handler,receiver,value);}};Promise.prototype._rejectPromises=function(len,reason){for(var i=1;i<len;i++){var handler=this._rejectionHandlerAt(i);var promise=this._promiseAt(i);var receiver=this._receiverAt(i);this._clearCallbackDataAtIndex(i);this._settlePromise(promise,handler,receiver,reason);}};Promise.prototype._settlePromises=function(){var bitField=this._bitField;var len=bitField&65535;if(len>0){if((bitField&16842752)!==0){var reason=this._fulfillmentHandler0;this._settlePromise0(this._rejectionHandler0,reason,bitField);this._rejectPromises(len,reason);}else{var value=this._rejectionHandler0;this._settlePromise0(this._fulfillmentHandler0,value,bitField);this._fulfillPromises(len,value);}this._setLength(0);}this._clearCancellationData();};Promise.prototype._settledValue=function(){var bitField=this._bitField;if((bitField&33554432)!==0){return this._rejectionHandler0;}else if((bitField&16777216)!==0){return this._fulfillmentHandler0;}};function deferResolve(v){this.promise._resolveCallback(v);}function deferReject(v){this.promise._rejectCallback(v,false);}Promise.defer=Promise.pending=function(){debug.deprecated("Promise.defer","new Promise");var promise=new Promise(INTERNAL);return{promise:promise,resolve:deferResolve,reject:deferReject};};util.notEnumerableProp(Promise,"_makeSelfResolutionError",makeSelfResolutionError);_dereq_("./method")(Promise,INTERNAL,tryConvertToPromise,apiRejection,debug);_dereq_("./bind")(Promise,INTERNAL,tryConvertToPromise,debug);_dereq_("./cancel")(Promise,PromiseArray,apiRejection,debug);_dereq_("./direct_resolve")(Promise);_dereq_("./synchronous_inspection")(Promise);_dereq_("./join")(Promise,PromiseArray,tryConvertToPromise,INTERNAL,debug);Promise.Promise=Promise;_dereq_('./map.js')(Promise,PromiseArray,apiRejection,tryConvertToPromise,INTERNAL,debug);_dereq_('./call_get.js')(Promise);_dereq_('./using.js')(Promise,apiRejection,tryConvertToPromise,createContext,INTERNAL,debug);_dereq_('./timers.js')(Promise,INTERNAL,debug);_dereq_('./generators.js')(Promise,apiRejection,INTERNAL,tryConvertToPromise,Proxyable,debug);_dereq_('./nodeify.js')(Promise);_dereq_('./promisify.js')(Promise,INTERNAL);_dereq_('./props.js')(Promise,PromiseArray,tryConvertToPromise,apiRejection);_dereq_('./race.js')(Promise,INTERNAL,tryConvertToPromise,apiRejection);_dereq_('./reduce.js')(Promise,PromiseArray,apiRejection,tryConvertToPromise,INTERNAL,debug);_dereq_('./settle.js')(Promise,PromiseArray,debug);_dereq_('./some.js')(Promise,PromiseArray,apiRejection);_dereq_('./filter.js')(Promise,INTERNAL);_dereq_('./each.js')(Promise,INTERNAL);_dereq_('./any.js')(Promise);util.toFastProperties(Promise);util.toFastProperties(Promise.prototype);function fillTypes(value){var p=new Promise(INTERNAL);p._fulfillmentHandler0=value;p._rejectionHandler0=value;p._promise0=value;p._receiver0=value;}// Complete slack tracking, opt out of field-type tracking and           
// stabilize map                                                         
fillTypes({a:1});fillTypes({b:2});fillTypes({c:3});fillTypes(1);fillTypes(function(){});fillTypes(undefined);fillTypes(false);fillTypes(new Promise(INTERNAL));debug.setBounds(Async.firstLineError,util.lastLineError);return Promise;};},{"./any.js":1,"./async":2,"./bind":3,"./call_get.js":5,"./cancel":6,"./catch_filter":7,"./context":8,"./debuggability":9,"./direct_resolve":10,"./each.js":11,"./errors":12,"./es5":13,"./filter.js":14,"./finally":15,"./generators.js":16,"./join":17,"./map.js":18,"./method":19,"./nodeback":20,"./nodeify.js":21,"./promise_array":23,"./promisify.js":24,"./props.js":25,"./race.js":27,"./reduce.js":28,"./settle.js":30,"./some.js":31,"./synchronous_inspection":32,"./thenables":33,"./timers.js":34,"./using.js":35,"./util":36}],23:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL,tryConvertToPromise,apiRejection,Proxyable){var util=_dereq_("./util");var isArray=util.isArray;function toResolutionValue(val){switch(val){case-2:return[];case-3:return{};}}function PromiseArray(values){var promise=this._promise=new Promise(INTERNAL);if(values instanceof Promise){promise._propagateFrom(values,3);}promise._setOnCancel(this);this._values=values;this._length=0;this._totalResolved=0;this._init(undefined,-2);}util.inherits(PromiseArray,Proxyable);PromiseArray.prototype.length=function(){return this._length;};PromiseArray.prototype.promise=function(){return this._promise;};PromiseArray.prototype._init=function init(_,resolveValueIfEmpty){var values=tryConvertToPromise(this._values,this._promise);if(values instanceof Promise){values=values._target();var bitField=values._bitField;;this._values=values;if((bitField&50397184)===0){this._promise._setAsyncGuaranteed();return values._then(init,this._reject,undefined,this,resolveValueIfEmpty);}else if((bitField&33554432)!==0){values=values._value();}else if((bitField&16777216)!==0){return this._reject(values._reason());}else{return this._cancel();}}values=util.asArray(values);if(values===null){var err=apiRejection("expecting an array or an iterable object but got "+util.classString(values)).reason();this._promise._rejectCallback(err,false);return;}if(values.length===0){if(resolveValueIfEmpty===-5){this._resolveEmptyArray();}else{this._resolve(toResolutionValue(resolveValueIfEmpty));}return;}this._iterate(values);};PromiseArray.prototype._iterate=function(values){var len=this.getActualLength(values.length);this._length=len;this._values=this.shouldCopyValues()?new Array(len):this._values;var result=this._promise;var isResolved=false;var bitField=null;for(var i=0;i<len;++i){var maybePromise=tryConvertToPromise(values[i],result);if(maybePromise instanceof Promise){maybePromise=maybePromise._target();bitField=maybePromise._bitField;}else{bitField=null;}if(isResolved){if(bitField!==null){maybePromise.suppressUnhandledRejections();}}else if(bitField!==null){if((bitField&50397184)===0){maybePromise._proxy(this,i);this._values[i]=maybePromise;}else if((bitField&33554432)!==0){isResolved=this._promiseFulfilled(maybePromise._value(),i);}else if((bitField&16777216)!==0){isResolved=this._promiseRejected(maybePromise._reason(),i);}else{isResolved=this._promiseCancelled(i);}}else{isResolved=this._promiseFulfilled(maybePromise,i);}}if(!isResolved)result._setAsyncGuaranteed();};PromiseArray.prototype._isResolved=function(){return this._values===null;};PromiseArray.prototype._resolve=function(value){this._values=null;this._promise._fulfill(value);};PromiseArray.prototype._cancel=function(){if(this._isResolved()||!this._promise.isCancellable())return;this._values=null;this._promise._cancel();};PromiseArray.prototype._reject=function(reason){this._values=null;this._promise._rejectCallback(reason,false);};PromiseArray.prototype._promiseFulfilled=function(value,index){this._values[index]=value;var totalResolved=++this._totalResolved;if(totalResolved>=this._length){this._resolve(this._values);return true;}return false;};PromiseArray.prototype._promiseCancelled=function(){this._cancel();return true;};PromiseArray.prototype._promiseRejected=function(reason){this._totalResolved++;this._reject(reason);return true;};PromiseArray.prototype._resultCancelled=function(){if(this._isResolved())return;var values=this._values;this._cancel();if(values instanceof Promise){values.cancel();}else{for(var i=0;i<values.length;++i){if(values[i]instanceof Promise){values[i].cancel();}}}};PromiseArray.prototype.shouldCopyValues=function(){return true;};PromiseArray.prototype.getActualLength=function(len){return len;};return PromiseArray;};},{"./util":36}],24:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL){var THIS={};var util=_dereq_("./util");var nodebackForPromise=_dereq_("./nodeback");var withAppended=util.withAppended;var maybeWrapAsError=util.maybeWrapAsError;var canEvaluate=util.canEvaluate;var TypeError=_dereq_("./errors").TypeError;var defaultSuffix="Async";var defaultPromisified={__isPromisified__:true};var noCopyProps=["arity","length","name","arguments","caller","callee","prototype","__isPromisified__"];var noCopyPropsPattern=new RegExp("^(?:"+noCopyProps.join("|")+")$");var defaultFilter=function(name){return util.isIdentifier(name)&&name.charAt(0)!=="_"&&name!=="constructor";};function propsFilter(key){return!noCopyPropsPattern.test(key);}function isPromisified(fn){try{return fn.__isPromisified__===true;}catch(e){return false;}}function hasPromisified(obj,key,suffix){var val=util.getDataPropertyOrDefault(obj,key+suffix,defaultPromisified);return val?isPromisified(val):false;}function checkValid(ret,suffix,suffixRegexp){for(var i=0;i<ret.length;i+=2){var key=ret[i];if(suffixRegexp.test(key)){var keyWithoutAsyncSuffix=key.replace(suffixRegexp,"");for(var j=0;j<ret.length;j+=2){if(ret[j]===keyWithoutAsyncSuffix){throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\u000a\u000a    See http://goo.gl/MqrFmX\u000a".replace("%s",suffix));}}}}}function promisifiableMethods(obj,suffix,suffixRegexp,filter){var keys=util.inheritedDataKeys(obj);var ret=[];for(var i=0;i<keys.length;++i){var key=keys[i];var value=obj[key];var passesDefaultFilter=filter===defaultFilter?true:defaultFilter(key,value,obj);if(typeof value==="function"&&!isPromisified(value)&&!hasPromisified(obj,key,suffix)&&filter(key,value,obj,passesDefaultFilter)){ret.push(key,value);}}checkValid(ret,suffix,suffixRegexp);return ret;}var escapeIdentRegex=function(str){return str.replace(/([$])/,"\\$");};var makeNodePromisifiedEval;if(!true){var switchCaseArgumentOrder=function(likelyArgumentCount){var ret=[likelyArgumentCount];var min=Math.max(0,likelyArgumentCount-1-3);for(var i=likelyArgumentCount-1;i>=min;--i){ret.push(i);}for(var i=likelyArgumentCount+1;i<=3;++i){ret.push(i);}return ret;};var argumentSequence=function(argumentCount){return util.filledRange(argumentCount,"_arg","");};var parameterDeclaration=function(parameterCount){return util.filledRange(Math.max(parameterCount,3),"_arg","");};var parameterCount=function(fn){if(typeof fn.length==="number"){return Math.max(Math.min(fn.length,1023+1),0);}return 0;};makeNodePromisifiedEval=function(callback,receiver,originalName,fn,_,multiArgs){var newParameterCount=Math.max(0,parameterCount(fn)-1);var argumentOrder=switchCaseArgumentOrder(newParameterCount);var shouldProxyThis=typeof callback==="string"||receiver===THIS;function generateCallForArgumentCount(count){var args=argumentSequence(count).join(", ");var comma=count>0?", ":"";var ret;if(shouldProxyThis){ret="ret = callback.call(this, {{args}}, nodeback); break;\n";}else{ret=receiver===undefined?"ret = callback({{args}}, nodeback); break;\n":"ret = callback.call(receiver, {{args}}, nodeback); break;\n";}return ret.replace("{{args}}",args).replace(", ",comma);}function generateArgumentSwitchCase(){var ret="";for(var i=0;i<argumentOrder.length;++i){ret+="case "+argumentOrder[i]+":"+generateCallForArgumentCount(argumentOrder[i]);}ret+="                                                             \n\
        default:                                                             \n\
            var args = new Array(len + 1);                                   \n\
            var i = 0;                                                       \n\
            for (var i = 0; i < len; ++i) {                                  \n\
               args[i] = arguments[i];                                       \n\
            }                                                                \n\
            args[i] = nodeback;                                              \n\
            [CodeForCall]                                                    \n\
            break;                                                           \n\
        ".replace("[CodeForCall]",shouldProxyThis?"ret = callback.apply(this, args);\n":"ret = callback.apply(receiver, args);\n");return ret;}var getFunctionCode=typeof callback==="string"?"this != null ? this['"+callback+"'] : fn":"fn";var body="'use strict';                                                \n\
        var ret = function (Parameters) {                                    \n\
            'use strict';                                                    \n\
            var len = arguments.length;                                      \n\
            var promise = new Promise(INTERNAL);                             \n\
            promise._captureStackTrace();                                    \n\
            var nodeback = nodebackForPromise(promise, "+multiArgs+");   \n\
            var ret;                                                         \n\
            var callback = tryCatch([GetFunctionCode]);                      \n\
            switch(len) {                                                    \n\
                [CodeForSwitchCase]                                          \n\
            }                                                                \n\
            if (ret === errorObj) {                                          \n\
                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n\
            }                                                                \n\
            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     \n\
            return promise;                                                  \n\
        };                                                                   \n\
        notEnumerableProp(ret, '__isPromisified__', true);                   \n\
        return ret;                                                          \n\
    ".replace("[CodeForSwitchCase]",generateArgumentSwitchCase()).replace("[GetFunctionCode]",getFunctionCode);body=body.replace("Parameters",parameterDeclaration(newParameterCount));return new Function("Promise","fn","receiver","withAppended","maybeWrapAsError","nodebackForPromise","tryCatch","errorObj","notEnumerableProp","INTERNAL",body)(Promise,fn,receiver,withAppended,maybeWrapAsError,nodebackForPromise,util.tryCatch,util.errorObj,util.notEnumerableProp,INTERNAL);};}function makeNodePromisifiedClosure(callback,receiver,_,fn,__,multiArgs){var defaultThis=function(){return this;}();var method=callback;if(typeof method==="string"){callback=fn;}function promisified(){var _receiver=receiver;if(receiver===THIS)_receiver=this;var promise=new Promise(INTERNAL);promise._captureStackTrace();var cb=typeof method==="string"&&this!==defaultThis?this[method]:callback;var fn=nodebackForPromise(promise,multiArgs);try{cb.apply(_receiver,withAppended(arguments,fn));}catch(e){promise._rejectCallback(maybeWrapAsError(e),true,true);}if(!promise._isFateSealed())promise._setAsyncGuaranteed();return promise;}util.notEnumerableProp(promisified,"__isPromisified__",true);return promisified;}var makeNodePromisified=canEvaluate?makeNodePromisifiedEval:makeNodePromisifiedClosure;function promisifyAll(obj,suffix,filter,promisifier,multiArgs){var suffixRegexp=new RegExp(escapeIdentRegex(suffix)+"$");var methods=promisifiableMethods(obj,suffix,suffixRegexp,filter);for(var i=0,len=methods.length;i<len;i+=2){var key=methods[i];var fn=methods[i+1];var promisifiedKey=key+suffix;if(promisifier===makeNodePromisified){obj[promisifiedKey]=makeNodePromisified(key,THIS,key,fn,suffix,multiArgs);}else{var promisified=promisifier(fn,function(){return makeNodePromisified(key,THIS,key,fn,suffix,multiArgs);});util.notEnumerableProp(promisified,"__isPromisified__",true);obj[promisifiedKey]=promisified;}}util.toFastProperties(obj);return obj;}function promisify(callback,receiver,multiArgs){return makeNodePromisified(callback,receiver,undefined,callback,null,multiArgs);}Promise.promisify=function(fn,options){if(typeof fn!=="function"){throw new TypeError("expecting a function but got "+util.classString(fn));}if(isPromisified(fn)){return fn;}options=Object(options);var receiver=options.context===undefined?THIS:options.context;var multiArgs=!!options.multiArgs;var ret=promisify(fn,receiver,multiArgs);util.copyDescriptors(fn,ret,propsFilter);return ret;};Promise.promisifyAll=function(target,options){if(typeof target!=="function"&&typeof target!=="object"){throw new TypeError("the target of promisifyAll must be an object or a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");}options=Object(options);var multiArgs=!!options.multiArgs;var suffix=options.suffix;if(typeof suffix!=="string")suffix=defaultSuffix;var filter=options.filter;if(typeof filter!=="function")filter=defaultFilter;var promisifier=options.promisifier;if(typeof promisifier!=="function")promisifier=makeNodePromisified;if(!util.isIdentifier(suffix)){throw new RangeError("suffix must be a valid identifier\u000a\u000a    See http://goo.gl/MqrFmX\u000a");}var keys=util.inheritedDataKeys(target);for(var i=0;i<keys.length;++i){var value=target[keys[i]];if(keys[i]!=="constructor"&&util.isClass(value)){promisifyAll(value.prototype,suffix,filter,promisifier,multiArgs);promisifyAll(value,suffix,filter,promisifier,multiArgs);}}return promisifyAll(target,suffix,filter,promisifier,multiArgs);};};},{"./errors":12,"./nodeback":20,"./util":36}],25:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,PromiseArray,tryConvertToPromise,apiRejection){var util=_dereq_("./util");var isObject=util.isObject;var es5=_dereq_("./es5");var Es6Map;if(typeof Map==="function")Es6Map=Map;var mapToEntries=function(){var index=0;var size=0;function extractEntry(value,key){this[index]=value;this[index+size]=key;index++;}return function mapToEntries(map){size=map.size;index=0;var ret=new Array(map.size*2);map.forEach(extractEntry,ret);return ret;};}();var entriesToMap=function(entries){var ret=new Es6Map();var length=entries.length/2|0;for(var i=0;i<length;++i){var key=entries[length+i];var value=entries[i];ret.set(key,value);}return ret;};function PropertiesPromiseArray(obj){var isMap=false;var entries;if(Es6Map!==undefined&&obj instanceof Es6Map){entries=mapToEntries(obj);isMap=true;}else{var keys=es5.keys(obj);var len=keys.length;entries=new Array(len*2);for(var i=0;i<len;++i){var key=keys[i];entries[i]=obj[key];entries[i+len]=key;}}this.constructor$(entries);this._isMap=isMap;this._init$(undefined,-3);}util.inherits(PropertiesPromiseArray,PromiseArray);PropertiesPromiseArray.prototype._init=function(){};PropertiesPromiseArray.prototype._promiseFulfilled=function(value,index){this._values[index]=value;var totalResolved=++this._totalResolved;if(totalResolved>=this._length){var val;if(this._isMap){val=entriesToMap(this._values);}else{val={};var keyOffset=this.length();for(var i=0,len=this.length();i<len;++i){val[this._values[i+keyOffset]]=this._values[i];}}this._resolve(val);return true;}return false;};PropertiesPromiseArray.prototype.shouldCopyValues=function(){return false;};PropertiesPromiseArray.prototype.getActualLength=function(len){return len>>1;};function props(promises){var ret;var castValue=tryConvertToPromise(promises);if(!isObject(castValue)){return apiRejection("cannot await properties of a non-object\u000a\u000a    See http://goo.gl/MqrFmX\u000a");}else if(castValue instanceof Promise){ret=castValue._then(Promise.props,undefined,undefined,undefined,undefined);}else{ret=new PropertiesPromiseArray(castValue).promise();}if(castValue instanceof Promise){ret._propagateFrom(castValue,2);}return ret;}Promise.prototype.props=function(){return props(this);};Promise.props=function(promises){return props(promises);};};},{"./es5":13,"./util":36}],26:[function(_dereq_,module,exports){"use strict";function arrayMove(src,srcIndex,dst,dstIndex,len){for(var j=0;j<len;++j){dst[j+dstIndex]=src[j+srcIndex];src[j+srcIndex]=void 0;}}function Queue(capacity){this._capacity=capacity;this._length=0;this._front=0;}Queue.prototype._willBeOverCapacity=function(size){return this._capacity<size;};Queue.prototype._pushOne=function(arg){var length=this.length();this._checkCapacity(length+1);var i=this._front+length&this._capacity-1;this[i]=arg;this._length=length+1;};Queue.prototype._unshiftOne=function(value){var capacity=this._capacity;this._checkCapacity(this.length()+1);var front=this._front;var i=(front-1&capacity-1^capacity)-capacity;this[i]=value;this._front=i;this._length=this.length()+1;};Queue.prototype.unshift=function(fn,receiver,arg){this._unshiftOne(arg);this._unshiftOne(receiver);this._unshiftOne(fn);};Queue.prototype.push=function(fn,receiver,arg){var length=this.length()+3;if(this._willBeOverCapacity(length)){this._pushOne(fn);this._pushOne(receiver);this._pushOne(arg);return;}var j=this._front+length-3;this._checkCapacity(length);var wrapMask=this._capacity-1;this[j+0&wrapMask]=fn;this[j+1&wrapMask]=receiver;this[j+2&wrapMask]=arg;this._length=length;};Queue.prototype.shift=function(){var front=this._front,ret=this[front];this[front]=undefined;this._front=front+1&this._capacity-1;this._length--;return ret;};Queue.prototype.length=function(){return this._length;};Queue.prototype._checkCapacity=function(size){if(this._capacity<size){this._resizeTo(this._capacity<<1);}};Queue.prototype._resizeTo=function(capacity){var oldCapacity=this._capacity;this._capacity=capacity;var front=this._front;var length=this._length;var moveItemsCount=front+length&oldCapacity-1;arrayMove(this,0,this,oldCapacity,moveItemsCount);};module.exports=Queue;},{}],27:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL,tryConvertToPromise,apiRejection){var util=_dereq_("./util");var raceLater=function(promise){return promise.then(function(array){return race(array,promise);});};function race(promises,parent){var maybePromise=tryConvertToPromise(promises);if(maybePromise instanceof Promise){return raceLater(maybePromise);}else{promises=util.asArray(promises);if(promises===null)return apiRejection("expecting an array or an iterable object but got "+util.classString(promises));}var ret=new Promise(INTERNAL);if(parent!==undefined){ret._propagateFrom(parent,3);}var fulfill=ret._fulfill;var reject=ret._reject;for(var i=0,len=promises.length;i<len;++i){var val=promises[i];if(val===undefined&&!(i in promises)){continue;}Promise.cast(val)._then(fulfill,reject,undefined,ret,null);}return ret;}Promise.race=function(promises){return race(promises,undefined);};Promise.prototype.race=function(){return race(this,undefined);};};},{"./util":36}],28:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,PromiseArray,apiRejection,tryConvertToPromise,INTERNAL,debug){var getDomain=Promise._getDomain;var util=_dereq_("./util");var tryCatch=util.tryCatch;function ReductionPromiseArray(promises,fn,initialValue,_each){this.constructor$(promises);var domain=getDomain();this._fn=domain===null?fn:domain.bind(fn);if(initialValue!==undefined){initialValue=Promise.resolve(initialValue);initialValue._attachCancellationCallback(this);}this._initialValue=initialValue;this._currentCancellable=null;this._eachValues=_each===INTERNAL?[]:undefined;this._promise._captureStackTrace();this._init$(undefined,-5);}util.inherits(ReductionPromiseArray,PromiseArray);ReductionPromiseArray.prototype._gotAccum=function(accum){if(this._eachValues!==undefined&&accum!==INTERNAL){this._eachValues.push(accum);}};ReductionPromiseArray.prototype._eachComplete=function(value){this._eachValues.push(value);return this._eachValues;};ReductionPromiseArray.prototype._init=function(){};ReductionPromiseArray.prototype._resolveEmptyArray=function(){this._resolve(this._eachValues!==undefined?this._eachValues:this._initialValue);};ReductionPromiseArray.prototype.shouldCopyValues=function(){return false;};ReductionPromiseArray.prototype._resolve=function(value){this._promise._resolveCallback(value);this._values=null;};ReductionPromiseArray.prototype._resultCancelled=function(sender){if(sender===this._initialValue)return this._cancel();if(this._isResolved())return;this._resultCancelled$();if(this._currentCancellable instanceof Promise){this._currentCancellable.cancel();}if(this._initialValue instanceof Promise){this._initialValue.cancel();}};ReductionPromiseArray.prototype._iterate=function(values){this._values=values;var value;var i;var length=values.length;if(this._initialValue!==undefined){value=this._initialValue;i=0;}else{value=Promise.resolve(values[0]);i=1;}this._currentCancellable=value;if(!value.isRejected()){for(;i<length;++i){var ctx={accum:null,value:values[i],index:i,length:length,array:this};value=value._then(gotAccum,undefined,undefined,ctx,undefined);}}if(this._eachValues!==undefined){value=value._then(this._eachComplete,undefined,undefined,this,undefined);}value._then(completed,completed,undefined,value,this);};Promise.prototype.reduce=function(fn,initialValue){return reduce(this,fn,initialValue,null);};Promise.reduce=function(promises,fn,initialValue,_each){return reduce(promises,fn,initialValue,_each);};function completed(valueOrReason,array){if(this.isFulfilled()){array._resolve(valueOrReason);}else{array._reject(valueOrReason);}}function reduce(promises,fn,initialValue,_each){if(typeof fn!=="function"){return apiRejection("expecting a function but got "+util.classString(fn));}var array=new ReductionPromiseArray(promises,fn,initialValue,_each);return array.promise();}function gotAccum(accum){this.accum=accum;this.array._gotAccum(accum);var value=tryConvertToPromise(this.value,this.array._promise);if(value instanceof Promise){this.array._currentCancellable=value;return value._then(gotValue,undefined,undefined,this,undefined);}else{return gotValue.call(this,value);}}function gotValue(value){var array=this.array;var promise=array._promise;var fn=tryCatch(array._fn);promise._pushContext();var ret;if(array._eachValues!==undefined){ret=fn.call(promise._boundValue(),value,this.index,this.length);}else{ret=fn.call(promise._boundValue(),this.accum,value,this.index,this.length);}if(ret instanceof Promise){array._currentCancellable=ret;}var promiseCreated=promise._popContext();debug.checkForgottenReturns(ret,promiseCreated,array._eachValues!==undefined?"Promise.each":"Promise.reduce",promise);return ret;}};},{"./util":36}],29:[function(_dereq_,module,exports){"use strict";var util=_dereq_("./util");var schedule;var noAsyncScheduler=function(){throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");};var NativePromise=util.getNativePromise();if(util.isNode&&typeof MutationObserver==="undefined"){var GlobalSetImmediate=global.setImmediate;var ProcessNextTick=process.nextTick;schedule=util.isRecentNode?function(fn){GlobalSetImmediate.call(global,fn);}:function(fn){ProcessNextTick.call(process,fn);};}else if(typeof NativePromise==="function"){var nativePromise=NativePromise.resolve();schedule=function(fn){nativePromise.then(fn);};}else if(typeof MutationObserver!=="undefined"&&!(typeof window!=="undefined"&&window.navigator&&window.navigator.standalone)){schedule=function(){var div=document.createElement("div");var opts={attributes:true};var toggleScheduled=false;var div2=document.createElement("div");var o2=new MutationObserver(function(){div.classList.toggle("foo");toggleScheduled=false;});o2.observe(div2,opts);var scheduleToggle=function(){if(toggleScheduled)return;toggleScheduled=true;div2.classList.toggle("foo");};return function schedule(fn){var o=new MutationObserver(function(){o.disconnect();fn();});o.observe(div,opts);scheduleToggle();};}();}else if(typeof setImmediate!=="undefined"){schedule=function(fn){setImmediate(fn);};}else if(typeof setTimeout!=="undefined"){schedule=function(fn){setTimeout(fn,0);};}else{schedule=noAsyncScheduler;}module.exports=schedule;},{"./util":36}],30:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,PromiseArray,debug){var PromiseInspection=Promise.PromiseInspection;var util=_dereq_("./util");function SettledPromiseArray(values){this.constructor$(values);}util.inherits(SettledPromiseArray,PromiseArray);SettledPromiseArray.prototype._promiseResolved=function(index,inspection){this._values[index]=inspection;var totalResolved=++this._totalResolved;if(totalResolved>=this._length){this._resolve(this._values);return true;}return false;};SettledPromiseArray.prototype._promiseFulfilled=function(value,index){var ret=new PromiseInspection();ret._bitField=33554432;ret._settledValueField=value;return this._promiseResolved(index,ret);};SettledPromiseArray.prototype._promiseRejected=function(reason,index){var ret=new PromiseInspection();ret._bitField=16777216;ret._settledValueField=reason;return this._promiseResolved(index,ret);};Promise.settle=function(promises){debug.deprecated(".settle()",".reflect()");return new SettledPromiseArray(promises).promise();};Promise.prototype.settle=function(){return Promise.settle(this);};};},{"./util":36}],31:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,PromiseArray,apiRejection){var util=_dereq_("./util");var RangeError=_dereq_("./errors").RangeError;var AggregateError=_dereq_("./errors").AggregateError;var isArray=util.isArray;var CANCELLATION={};function SomePromiseArray(values){this.constructor$(values);this._howMany=0;this._unwrap=false;this._initialized=false;}util.inherits(SomePromiseArray,PromiseArray);SomePromiseArray.prototype._init=function(){if(!this._initialized){return;}if(this._howMany===0){this._resolve([]);return;}this._init$(undefined,-5);var isArrayResolved=isArray(this._values);if(!this._isResolved()&&isArrayResolved&&this._howMany>this._canPossiblyFulfill()){this._reject(this._getRangeError(this.length()));}};SomePromiseArray.prototype.init=function(){this._initialized=true;this._init();};SomePromiseArray.prototype.setUnwrap=function(){this._unwrap=true;};SomePromiseArray.prototype.howMany=function(){return this._howMany;};SomePromiseArray.prototype.setHowMany=function(count){this._howMany=count;};SomePromiseArray.prototype._promiseFulfilled=function(value){this._addFulfilled(value);if(this._fulfilled()===this.howMany()){this._values.length=this.howMany();if(this.howMany()===1&&this._unwrap){this._resolve(this._values[0]);}else{this._resolve(this._values);}return true;}return false;};SomePromiseArray.prototype._promiseRejected=function(reason){this._addRejected(reason);return this._checkOutcome();};SomePromiseArray.prototype._promiseCancelled=function(){if(this._values instanceof Promise||this._values==null){return this._cancel();}this._addRejected(CANCELLATION);return this._checkOutcome();};SomePromiseArray.prototype._checkOutcome=function(){if(this.howMany()>this._canPossiblyFulfill()){var e=new AggregateError();for(var i=this.length();i<this._values.length;++i){if(this._values[i]!==CANCELLATION){e.push(this._values[i]);}}if(e.length>0){this._reject(e);}else{this._cancel();}return true;}return false;};SomePromiseArray.prototype._fulfilled=function(){return this._totalResolved;};SomePromiseArray.prototype._rejected=function(){return this._values.length-this.length();};SomePromiseArray.prototype._addRejected=function(reason){this._values.push(reason);};SomePromiseArray.prototype._addFulfilled=function(value){this._values[this._totalResolved++]=value;};SomePromiseArray.prototype._canPossiblyFulfill=function(){return this.length()-this._rejected();};SomePromiseArray.prototype._getRangeError=function(count){var message="Input array must contain at least "+this._howMany+" items but contains only "+count+" items";return new RangeError(message);};SomePromiseArray.prototype._resolveEmptyArray=function(){this._reject(this._getRangeError(0));};function some(promises,howMany){if((howMany|0)!==howMany||howMany<0){return apiRejection("expecting a positive integer\u000a\u000a    See http://goo.gl/MqrFmX\u000a");}var ret=new SomePromiseArray(promises);var promise=ret.promise();ret.setHowMany(howMany);ret.init();return promise;}Promise.some=function(promises,howMany){return some(promises,howMany);};Promise.prototype.some=function(howMany){return some(this,howMany);};Promise._SomePromiseArray=SomePromiseArray;};},{"./errors":12,"./util":36}],32:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise){function PromiseInspection(promise){if(promise!==undefined){promise=promise._target();this._bitField=promise._bitField;this._settledValueField=promise._isFateSealed()?promise._settledValue():undefined;}else{this._bitField=0;this._settledValueField=undefined;}}PromiseInspection.prototype._settledValue=function(){return this._settledValueField;};var value=PromiseInspection.prototype.value=function(){if(!this.isFulfilled()){throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");}return this._settledValue();};var reason=PromiseInspection.prototype.error=PromiseInspection.prototype.reason=function(){if(!this.isRejected()){throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");}return this._settledValue();};var isFulfilled=PromiseInspection.prototype.isFulfilled=function(){return(this._bitField&33554432)!==0;};var isRejected=PromiseInspection.prototype.isRejected=function(){return(this._bitField&16777216)!==0;};var isPending=PromiseInspection.prototype.isPending=function(){return(this._bitField&50397184)===0;};var isResolved=PromiseInspection.prototype.isResolved=function(){return(this._bitField&50331648)!==0;};PromiseInspection.prototype.isCancelled=Promise.prototype._isCancelled=function(){return(this._bitField&65536)===65536;};Promise.prototype.isCancelled=function(){return this._target()._isCancelled();};Promise.prototype.isPending=function(){return isPending.call(this._target());};Promise.prototype.isRejected=function(){return isRejected.call(this._target());};Promise.prototype.isFulfilled=function(){return isFulfilled.call(this._target());};Promise.prototype.isResolved=function(){return isResolved.call(this._target());};Promise.prototype.value=function(){return value.call(this._target());};Promise.prototype.reason=function(){var target=this._target();target._unsetRejectionIsUnhandled();return reason.call(target);};Promise.prototype._value=function(){return this._settledValue();};Promise.prototype._reason=function(){this._unsetRejectionIsUnhandled();return this._settledValue();};Promise.PromiseInspection=PromiseInspection;};},{}],33:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL){var util=_dereq_("./util");var errorObj=util.errorObj;var isObject=util.isObject;function tryConvertToPromise(obj,context){if(isObject(obj)){if(obj instanceof Promise)return obj;var then=getThen(obj);if(then===errorObj){if(context)context._pushContext();var ret=Promise.reject(then.e);if(context)context._popContext();return ret;}else if(typeof then==="function"){if(isAnyBluebirdPromise(obj)){var ret=new Promise(INTERNAL);obj._then(ret._fulfill,ret._reject,undefined,ret,null);return ret;}return doThenable(obj,then,context);}}return obj;}function doGetThen(obj){return obj.then;}function getThen(obj){try{return doGetThen(obj);}catch(e){errorObj.e=e;return errorObj;}}var hasProp={}.hasOwnProperty;function isAnyBluebirdPromise(obj){return hasProp.call(obj,"_promise0");}function doThenable(x,then,context){var promise=new Promise(INTERNAL);var ret=promise;if(context)context._pushContext();promise._captureStackTrace();if(context)context._popContext();var synchronous=true;var result=util.tryCatch(then).call(x,resolve,reject);synchronous=false;if(promise&&result===errorObj){promise._rejectCallback(result.e,true,true);promise=null;}function resolve(value){if(!promise)return;promise._resolveCallback(value);promise=null;}function reject(reason){if(!promise)return;promise._rejectCallback(reason,synchronous,true);promise=null;}return ret;}return tryConvertToPromise;};},{"./util":36}],34:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,INTERNAL,debug){var util=_dereq_("./util");var TimeoutError=Promise.TimeoutError;function HandleWrapper(handle){this.handle=handle;}HandleWrapper.prototype._resultCancelled=function(){clearTimeout(this.handle);};var afterValue=function(value){return delay(+this).thenReturn(value);};var delay=Promise.delay=function(ms,value){var ret;var handle;if(value!==undefined){ret=Promise.resolve(value)._then(afterValue,null,null,ms,undefined);if(debug.cancellation()&&value instanceof Promise){ret._setOnCancel(value);}}else{ret=new Promise(INTERNAL);handle=setTimeout(function(){ret._fulfill();},+ms);if(debug.cancellation()){ret._setOnCancel(new HandleWrapper(handle));}}ret._setAsyncGuaranteed();return ret;};Promise.prototype.delay=function(ms){return delay(ms,this);};var afterTimeout=function(promise,message,parent){var err;if(typeof message!=="string"){if(message instanceof Error){err=message;}else{err=new TimeoutError("operation timed out");}}else{err=new TimeoutError(message);}util.markAsOriginatingFromRejection(err);promise._attachExtraTrace(err);promise._reject(err);if(parent!=null){parent.cancel();}};function successClear(value){clearTimeout(this.handle);return value;}function failureClear(reason){clearTimeout(this.handle);throw reason;}Promise.prototype.timeout=function(ms,message){ms=+ms;var ret,parent;var handleWrapper=new HandleWrapper(setTimeout(function timeoutTimeout(){if(ret.isPending()){afterTimeout(ret,message,parent);}},ms));if(debug.cancellation()){parent=this.then();ret=parent._then(successClear,failureClear,undefined,handleWrapper,undefined);ret._setOnCancel(handleWrapper);}else{ret=this._then(successClear,failureClear,undefined,handleWrapper,undefined);}return ret;};};},{"./util":36}],35:[function(_dereq_,module,exports){"use strict";module.exports=function(Promise,apiRejection,tryConvertToPromise,createContext,INTERNAL,debug){var util=_dereq_("./util");var TypeError=_dereq_("./errors").TypeError;var inherits=_dereq_("./util").inherits;var errorObj=util.errorObj;var tryCatch=util.tryCatch;function thrower(e){setTimeout(function(){throw e;},0);}function castPreservingDisposable(thenable){var maybePromise=tryConvertToPromise(thenable);if(maybePromise!==thenable&&typeof thenable._isDisposable==="function"&&typeof thenable._getDisposer==="function"&&thenable._isDisposable()){maybePromise._setDisposable(thenable._getDisposer());}return maybePromise;}function dispose(resources,inspection){var i=0;var len=resources.length;var ret=new Promise(INTERNAL);function iterator(){if(i>=len)return ret._fulfill();var maybePromise=castPreservingDisposable(resources[i++]);if(maybePromise instanceof Promise&&maybePromise._isDisposable()){try{maybePromise=tryConvertToPromise(maybePromise._getDisposer().tryDispose(inspection),resources.promise);}catch(e){return thrower(e);}if(maybePromise instanceof Promise){return maybePromise._then(iterator,thrower,null,null,null);}}iterator();}iterator();return ret;}function Disposer(data,promise,context){this._data=data;this._promise=promise;this._context=context;}Disposer.prototype.data=function(){return this._data;};Disposer.prototype.promise=function(){return this._promise;};Disposer.prototype.resource=function(){if(this.promise().isFulfilled()){return this.promise().value();}return null;};Disposer.prototype.tryDispose=function(inspection){var resource=this.resource();var context=this._context;if(context!==undefined)context._pushContext();var ret=resource!==null?this.doDispose(resource,inspection):null;if(context!==undefined)context._popContext();this._promise._unsetDisposable();this._data=null;return ret;};Disposer.isDisposer=function(d){return d!=null&&typeof d.resource==="function"&&typeof d.tryDispose==="function";};function FunctionDisposer(fn,promise,context){this.constructor$(fn,promise,context);}inherits(FunctionDisposer,Disposer);FunctionDisposer.prototype.doDispose=function(resource,inspection){var fn=this.data();return fn.call(resource,resource,inspection);};function maybeUnwrapDisposer(value){if(Disposer.isDisposer(value)){this.resources[this.index]._setDisposable(value);return value.promise();}return value;}function ResourceList(length){this.length=length;this.promise=null;this[length-1]=null;}ResourceList.prototype._resultCancelled=function(){var len=this.length;for(var i=0;i<len;++i){var item=this[i];if(item instanceof Promise){item.cancel();}}};Promise.using=function(){var len=arguments.length;if(len<2)return apiRejection("you must pass at least 2 arguments to Promise.using");var fn=arguments[len-1];if(typeof fn!=="function"){return apiRejection("expecting a function but got "+util.classString(fn));}var input;var spreadArgs=true;if(len===2&&Array.isArray(arguments[0])){input=arguments[0];len=input.length;spreadArgs=false;}else{input=arguments;len--;}var resources=new ResourceList(len);for(var i=0;i<len;++i){var resource=input[i];if(Disposer.isDisposer(resource)){var disposer=resource;resource=resource.promise();resource._setDisposable(disposer);}else{var maybePromise=tryConvertToPromise(resource);if(maybePromise instanceof Promise){resource=maybePromise._then(maybeUnwrapDisposer,null,null,{resources:resources,index:i},undefined);}}resources[i]=resource;}var reflectedResources=new Array(resources.length);for(var i=0;i<reflectedResources.length;++i){reflectedResources[i]=Promise.resolve(resources[i]).reflect();}var resultPromise=Promise.all(reflectedResources).then(function(inspections){for(var i=0;i<inspections.length;++i){var inspection=inspections[i];if(inspection.isRejected()){errorObj.e=inspection.error();return errorObj;}else if(!inspection.isFulfilled()){resultPromise.cancel();return;}inspections[i]=inspection.value();}promise._pushContext();fn=tryCatch(fn);var ret=spreadArgs?fn.apply(undefined,inspections):fn(inspections);var promiseCreated=promise._popContext();debug.checkForgottenReturns(ret,promiseCreated,"Promise.using",promise);return ret;});var promise=resultPromise.lastly(function(){var inspection=new Promise.PromiseInspection(resultPromise);return dispose(resources,inspection);});resources.promise=promise;promise._setOnCancel(resources);return promise;};Promise.prototype._setDisposable=function(disposer){this._bitField=this._bitField|131072;this._disposer=disposer;};Promise.prototype._isDisposable=function(){return(this._bitField&131072)>0;};Promise.prototype._getDisposer=function(){return this._disposer;};Promise.prototype._unsetDisposable=function(){this._bitField=this._bitField&~131072;this._disposer=undefined;};Promise.prototype.disposer=function(fn){if(typeof fn==="function"){return new FunctionDisposer(fn,this,createContext());}throw new TypeError();};};},{"./errors":12,"./util":36}],36:[function(_dereq_,module,exports){"use strict";var es5=_dereq_("./es5");var canEvaluate=typeof navigator=="undefined";var errorObj={e:{}};var tryCatchTarget;var globalObject=typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:this!==undefined?this:null;function tryCatcher(){try{var target=tryCatchTarget;tryCatchTarget=null;return target.apply(this,arguments);}catch(e){errorObj.e=e;return errorObj;}}function tryCatch(fn){tryCatchTarget=fn;return tryCatcher;}var inherits=function(Child,Parent){var hasProp={}.hasOwnProperty;function T(){this.constructor=Child;this.constructor$=Parent;for(var propertyName in Parent.prototype){if(hasProp.call(Parent.prototype,propertyName)&&propertyName.charAt(propertyName.length-1)!=="$"){this[propertyName+"$"]=Parent.prototype[propertyName];}}}T.prototype=Parent.prototype;Child.prototype=new T();return Child.prototype;};function isPrimitive(val){return val==null||val===true||val===false||typeof val==="string"||typeof val==="number";}function isObject(value){return typeof value==="function"||typeof value==="object"&&value!==null;}function maybeWrapAsError(maybeError){if(!isPrimitive(maybeError))return maybeError;return new Error(safeToString(maybeError));}function withAppended(target,appendee){var len=target.length;var ret=new Array(len+1);var i;for(i=0;i<len;++i){ret[i]=target[i];}ret[i]=appendee;return ret;}function getDataPropertyOrDefault(obj,key,defaultValue){if(es5.isES5){var desc=Object.getOwnPropertyDescriptor(obj,key);if(desc!=null){return desc.get==null&&desc.set==null?desc.value:defaultValue;}}else{return{}.hasOwnProperty.call(obj,key)?obj[key]:undefined;}}function notEnumerableProp(obj,name,value){if(isPrimitive(obj))return obj;var descriptor={value:value,configurable:true,enumerable:false,writable:true};es5.defineProperty(obj,name,descriptor);return obj;}function thrower(r){throw r;}var inheritedDataKeys=function(){var excludedPrototypes=[Array.prototype,Object.prototype,Function.prototype];var isExcludedProto=function(val){for(var i=0;i<excludedPrototypes.length;++i){if(excludedPrototypes[i]===val){return true;}}return false;};if(es5.isES5){var getKeys=Object.getOwnPropertyNames;return function(obj){var ret=[];var visitedKeys=Object.create(null);while(obj!=null&&!isExcludedProto(obj)){var keys;try{keys=getKeys(obj);}catch(e){return ret;}for(var i=0;i<keys.length;++i){var key=keys[i];if(visitedKeys[key])continue;visitedKeys[key]=true;var desc=Object.getOwnPropertyDescriptor(obj,key);if(desc!=null&&desc.get==null&&desc.set==null){ret.push(key);}}obj=es5.getPrototypeOf(obj);}return ret;};}else{var hasProp={}.hasOwnProperty;return function(obj){if(isExcludedProto(obj))return[];var ret=[];/*jshint forin:false */enumeration:for(var key in obj){if(hasProp.call(obj,key)){ret.push(key);}else{for(var i=0;i<excludedPrototypes.length;++i){if(hasProp.call(excludedPrototypes[i],key)){continue enumeration;}}ret.push(key);}}return ret;};}}();var thisAssignmentPattern=/this\s*\.\s*\S+\s*=/;function isClass(fn){try{if(typeof fn==="function"){var keys=es5.names(fn.prototype);var hasMethods=es5.isES5&&keys.length>1;var hasMethodsOtherThanConstructor=keys.length>0&&!(keys.length===1&&keys[0]==="constructor");var hasThisAssignmentAndStaticMethods=thisAssignmentPattern.test(fn+"")&&es5.names(fn).length>0;if(hasMethods||hasMethodsOtherThanConstructor||hasThisAssignmentAndStaticMethods){return true;}}return false;}catch(e){return false;}}function toFastProperties(obj){/*jshint -W027,-W055,-W031*/function FakeConstructor(){}FakeConstructor.prototype=obj;var l=8;while(l--)new FakeConstructor();return obj;eval(obj);}var rident=/^[a-z$_][a-z$_0-9]*$/i;function isIdentifier(str){return rident.test(str);}function filledRange(count,prefix,suffix){var ret=new Array(count);for(var i=0;i<count;++i){ret[i]=prefix+i+suffix;}return ret;}function safeToString(obj){try{return obj+"";}catch(e){return"[no string representation]";}}function isError(obj){return obj!==null&&typeof obj==="object"&&typeof obj.message==="string"&&typeof obj.name==="string";}function markAsOriginatingFromRejection(e){try{notEnumerableProp(e,"isOperational",true);}catch(ignore){}}function originatesFromRejection(e){if(e==null)return false;return e instanceof Error["__BluebirdErrorTypes__"].OperationalError||e["isOperational"]===true;}function canAttachTrace(obj){return isError(obj)&&es5.propertyIsWritable(obj,"stack");}var ensureErrorObject=function(){if(!("stack"in new Error())){return function(value){if(canAttachTrace(value))return value;try{throw new Error(safeToString(value));}catch(err){return err;}};}else{return function(value){if(canAttachTrace(value))return value;return new Error(safeToString(value));};}}();function classString(obj){return{}.toString.call(obj);}function copyDescriptors(from,to,filter){var keys=es5.names(from);for(var i=0;i<keys.length;++i){var key=keys[i];if(filter(key)){try{es5.defineProperty(to,key,es5.getDescriptor(from,key));}catch(ignore){}}}}var asArray=function(v){if(es5.isArray(v)){return v;}return null;};if(typeof Symbol!=="undefined"&&Symbol.iterator){var ArrayFrom=typeof Array.from==="function"?function(v){return Array.from(v);}:function(v){var ret=[];var it=v[Symbol.iterator]();var itResult;while(!(itResult=it.next()).done){ret.push(itResult.value);}return ret;};asArray=function(v){if(es5.isArray(v)){return v;}else if(v!=null&&typeof v[Symbol.iterator]==="function"){return ArrayFrom(v);}return null;};}var isNode=typeof process!=="undefined"&&classString(process).toLowerCase()==="[object process]";function env(key,def){return isNode?process.env[key]:def;}function getNativePromise(){if(typeof Promise==="function"){try{var promise=new Promise(function(){});if({}.toString.call(promise)==="[object Promise]"){return Promise;}}catch(e){}}}var ret={isClass:isClass,isIdentifier:isIdentifier,inheritedDataKeys:inheritedDataKeys,getDataPropertyOrDefault:getDataPropertyOrDefault,thrower:thrower,isArray:es5.isArray,asArray:asArray,notEnumerableProp:notEnumerableProp,isPrimitive:isPrimitive,isObject:isObject,isError:isError,canEvaluate:canEvaluate,errorObj:errorObj,tryCatch:tryCatch,inherits:inherits,withAppended:withAppended,maybeWrapAsError:maybeWrapAsError,toFastProperties:toFastProperties,filledRange:filledRange,toString:safeToString,canAttachTrace:canAttachTrace,ensureErrorObject:ensureErrorObject,originatesFromRejection:originatesFromRejection,markAsOriginatingFromRejection:markAsOriginatingFromRejection,classString:classString,copyDescriptors:copyDescriptors,hasDevTools:typeof chrome!=="undefined"&&chrome&&typeof chrome.loadTimes==="function",isNode:isNode,env:env,global:globalObject,getNativePromise:getNativePromise};ret.isRecentNode=ret.isNode&&function(){var version=process.versions.node.split(".").map(Number);return version[0]===0&&version[1]>10||version[0]>0;}();if(ret.isNode)ret.toFastProperties(process);try{throw new Error();}catch(e){ret.lastLineError=e;}module.exports=ret;},{"./es5":13}]},{},[4])(4);});;if(typeof window!=='undefined'&&window!==null){window.P=window.Promise;}else if(typeof self!=='undefined'&&self!==null){self.P=self.Promise;}}).call(this,require('_process'),typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{"_process":295}],4:[function(require,module,exports){(function(){var ipfs={};ipfs.localProvider={host:'localhost',port:'5001',protocol:'http'};ipfs.setProvider=function(opts){if(!opts)opts=this.localProvider;if(typeof opts==='object'&&!opts.hasOwnProperty('host')){return;}ipfs.api=opts;};ipfs.api_url=function(path){var api=ipfs.api;return api.protocol+"://"+api.host+(api.port?":"+api.port:"")+(api.root?api.root:"")+"/api/v0"+path;};function ensureProvider(callback){if(!ipfs.api){callback("No provider set",null);return false;}return true;}function request(opts){if(!ensureProvider(opts.callback))return;var req=new XMLHttpRequest();req.addEventListener("load",function(){if(req.status!=200)opts.callback(req.responseText,null);else{var response=req.responseText;if(opts.transform){response=opts.transform(response);}opts.callback(null,response);}});req.open(opts.method||"GET",ipfs.api_url(opts.uri));if(opts.accept){req.setRequestHeader("accept",opts.accept);}if(opts.payload){req.enctype="multipart/form-data";req.send(opts.payload);}else{req.send();}}ipfs.add=function(input,callback){var form=new FormData();var data=isBuffer(input)?input.toString('binary'):input;form.append("file",new Blob([data],{}));request({callback:callback,method:"POST",uri:"/add",payload:form,accept:"application/json",transform:function(response){return response?JSON.parse(response)["Hash"]:null;}});};ipfs.catText=function(ipfsHash,callback){request({callback:callback,uri:"/cat/"+ipfsHash});};ipfs.cat=ipfs.catText;// Alias this for now
ipfs.addJson=function(jsonObject,callback){var jsonString=JSON.stringify(jsonObject);ipfs.add(jsonString,callback);};ipfs.catJson=function(ipfsHash,callback){ipfs.catText(ipfsHash,function(err,jsonString){if(err)callback(err,{});var jsonObject={};try{jsonObject=typeof jsonString==='string'?JSON.parse(jsonString):jsonString;}catch(e){err=e;}callback(err,jsonObject);});};// From https://github.com/feross/is-buffer
function isBuffer(obj){return!!(obj!=null&&(obj._isBuffer||// For Safari 5-7 (missing Object.prototype.constructor)
obj.constructor&&typeof obj.constructor.isBuffer==='function'&&obj.constructor.isBuffer(obj)));}if(typeof window!=='undefined'){window.ipfs=ipfs;}if(typeof module!=='undefined'&&module.exports){module.exports=ipfs;}})();},{}],5:[function(require,module,exports){var basex=require('base-x');var ALPHABET='123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';var base58=basex(ALPHABET);module.exports={encode:base58.encode,decode:base58.decode};},{"base-x":6}],6:[function(require,module,exports){// base-x encoding
// Forked from https://github.com/cryptocoinjs/bs58
// Originally written by Mike Hearn for BitcoinJ
// Copyright (c) 2011 Google Inc
// Ported to JavaScript by Stefan Thomas
// Merged Buffer refactorings from base58-native by Stephen Pair
// Copyright (c) 2013 BitPay Inc
module.exports=function base(ALPHABET){var ALPHABET_MAP={};var BASE=ALPHABET.length;var LEADER=ALPHABET.charAt(0);// pre-compute lookup table
for(var i=0;i<ALPHABET.length;i++){ALPHABET_MAP[ALPHABET.charAt(i)]=i;}function encode(source){if(source.length===0)return'';var digits=[0];for(var i=0;i<source.length;++i){for(var j=0,carry=source[i];j<digits.length;++j){carry+=digits[j]<<8;digits[j]=carry%BASE;carry=carry/BASE|0;}while(carry>0){digits.push(carry%BASE);carry=carry/BASE|0;}}// deal with leading zeros
for(var k=0;source[k]===0&&k<source.length-1;++k){digits.push(0);}// convert digits to a string
for(var ii=0,jj=digits.length-1;ii<=jj;++ii,--jj){var tmp=ALPHABET[digits[ii]];digits[ii]=ALPHABET[digits[jj]];digits[jj]=tmp;}return digits.join('');}function decode(string){if(string.length===0)return[];var bytes=[0];for(var i=0;i<string.length;i++){var value=ALPHABET_MAP[string[i]];if(value===undefined)throw new Error('Non-base'+BASE+' character');for(var j=0,carry=value;j<bytes.length;++j){carry+=bytes[j]*BASE;bytes[j]=carry&0xff;carry>>=8;}while(carry>0){bytes.push(carry&0xff);carry>>=8;}}// deal with leading zeros
for(var k=0;string[k]===LEADER&&k<string.length-1;++k){bytes.push(0);}return bytes.reverse();}return{encode:encode,decode:decode};};},{}],7:[function(require,module,exports){var Promise=require("bluebird");var pkg=require("./package.json");function Pudding(contract){if(!this.abi){throw new Error("Contract ABI not set. Please inherit Pudding and set static .abi variable with contract abi.");}this.contract=contract;this.address=contract.address;for(var i=0;i<this.abi.length;i++){var fn=this.abi[i];if(fn.type=="function"){if(fn.constant==true){this[fn.name]=this.constructor.promisifyFunction(this.contract[fn.name]);}else{this[fn.name]=this.constructor.synchronizeFunction(this.contract[fn.name]);}this[fn.name].call=this.constructor.promisifyFunction(this.contract[fn.name].call);this[fn.name].sendTransaction=this.constructor.promisifyFunction(this.contract[fn.name].sendTransaction);this[fn.name].request=this.contract[fn.name].request;this[fn.name].estimateGas=this.constructor.promisifyFunction(this.contract[fn.name].estimateGas);}if(fn.type=="event"){this[fn.name]=this.contract[fn.name];}}this.allEvents=this.contract.allEvents;};Pudding.new=function(){var args=Array.prototype.slice.call(arguments);var web3=Pudding.getWeb3();if(!this.prototype.binary){throw new Error("Contract binary not set. Please override Pudding and set .binary before calling new()");}var self=this;return new Promise(function(accept,reject){var contract_class=web3.eth.contract(self.prototype.abi);var tx_params={};var last_arg=args[args.length-1];// It's only tx_params if it's an object and not a BigNumber.
if(Pudding.is_object(last_arg)&&last_arg instanceof Pudding.BigNumber==false){tx_params=args.pop();}tx_params=Pudding.merge(Pudding.class_defaults,self.prototype.class_defaults,tx_params);if(tx_params.data==null){tx_params.data=self.prototype.binary;}// web3 0.9.0 and above calls new twice this callback twice.
// Why, I have no idea...
var intermediary=function(err,web3_instance){if(err!=null){reject(err);return;}if(err==null&&web3_instance!=null&&web3_instance.address!=null){accept(new self(web3_instance));}};args.push(tx_params,intermediary);contract_class.new.apply(contract_class,args);});};Pudding.at=function(address){var web3=Pudding.getWeb3();var contract_class=web3.eth.contract(this.prototype.abi);var contract=contract_class.at(address);return new this(contract);};Pudding.deployed=function(){if(!this.prototype.address){throw new Error("Contract address not set - deployed() relies on the contract class having a static 'address' value; please set that before using deployed().");}return this.at(this.prototype.address);};Pudding.extend=function(){var args=Array.prototype.slice.call(arguments);for(var i=0;i<arguments.length;i++){var object=arguments[i];var keys=Object.keys(object);for(var j=0;j<keys.length;j++){var key=keys[j];var value=object[key];this.prototype[key]=value;}}};Pudding.whisk=function(data,constructor){if(this.web3==null){throw new Error("Please call Pudding.setWeb3() before calling Pudding.whisk().");}var Contract=constructor;if(constructor==null){Contract=function(contract){Pudding.apply(this,arguments);};}Contract.prototype=Object.create(Pudding.prototype);Contract.abi=Contract.prototype.abi=data.abi;Contract.binary=Contract.prototype.binary=data.binary;Contract.unlinked_binary=Contract.prototype.unlinked_binary=data.unlinked_binary||data.binary;Contract.prototype.class_defaults=data.defaults||{};Contract.address=Contract.prototype.address=data.address;Contract.deployed_address=Contract.prototype.deployed_address=data.address;// deprecated
Contract.generated_with=Contract.prototype.generated_with=data.generated_with;Contract.contract_name=Contract.prototype.contract_name=data.contract_name;// Post-whisked loads just return the contract.
Contract.load=function(){return Contract;};Contract.new=Pudding.new.bind(Contract);Contract.at=Pudding.at.bind(Contract);Contract.deployed=Pudding.deployed.bind(Contract);Contract.extend=Pudding.extend.bind(Contract);return Contract;};Pudding.load=function(factories,scope){if(scope==null){scope={};}if(!(factories instanceof Array)){factories=[factories];}var names=[];for(var i=0;i<factories.length;i++){var factory=factories[i];var result=factory.load(this);names.push(result.contract_name);scope[result.contract_name]=result;}return names;};Pudding.defaults=function(class_defaults){if(this.class_defaults==null){this.class_defaults={};}if(class_defaults==null){class_defaults={};}var keys=Object.keys(class_defaults);for(var i=0;i<keys.length;i++){var key=keys[i];var value=class_defaults[key];this.class_defaults[key]=value;}return this.class_defaults;};Pudding.setWeb3=function(web3){this.web3=web3;if(this.web3.toBigNumber==null){throw new Error("Pudding.setWeb3() must be passed an instance of Web3 and not Web3 itself.");}this.BigNumber=this.web3.toBigNumber(0).constructor;};Pudding.getWeb3=function(){return this.web3||Pudding.web3;// Note: Pudding often times === this;
};Pudding.is_object=function(val){return typeof val=="object"&&!(val instanceof Array);};Pudding.merge=function(){var merged={};var args=Array.prototype.slice.call(arguments);for(var i=0;i<args.length;i++){var object=args[i];var keys=Object.keys(object);for(var j=0;j<keys.length;j++){var key=keys[j];var value=object[key];merged[key]=value;}}return merged;};Pudding.promisifyFunction=function(fn){var self=this;return function(){var instance=this;var args=Array.prototype.slice.call(arguments);var tx_params={};var last_arg=args[args.length-1];// It's only tx_params if it's an object and not a BigNumber.
if(Pudding.is_object(last_arg)&&last_arg instanceof Pudding.BigNumber==false){tx_params=args.pop();}tx_params=Pudding.merge(Pudding.class_defaults,self.class_defaults,tx_params);return new Promise(function(accept,reject){var callback=function(error,result){if(error!=null){reject(error);}else{accept(result);}};args.push(tx_params,callback);fn.apply(instance.contract,args);});};};Pudding.synchronizeFunction=function(fn){var self=this;var web3=Pudding.getWeb3();return function(){var args=Array.prototype.slice.call(arguments);var tx_params={};var last_arg=args[args.length-1];// It's only tx_params if it's an object and not a BigNumber.
if(Pudding.is_object(last_arg)&&last_arg instanceof Pudding.BigNumber==false){tx_params=args.pop();}tx_params=Pudding.merge(Pudding.class_defaults,self.class_defaults,tx_params);return new Promise(function(accept,reject){var callback=function(error,tx){var interval=null;var max_attempts=240;var attempts=0;if(error!=null){reject(error);return;}var interval;var make_attempt=function(){//console.log "Interval check //{attempts}..."
web3.eth.getTransaction(tx,function(e,tx_info){// If there's an error ignore it.
if(e!=null){return;}if(tx_info.blockHash!=null){clearInterval(interval);accept(tx);}if(attempts>=max_attempts){clearInterval(interval);reject(new Error("Transaction "+tx+" wasn't processed in "+attempts+" attempts!"));}attempts+=1;});};interval=setInterval(make_attempt,1000);make_attempt();};args.push(tx_params,callback);fn.apply(self,args);});};};Pudding.class_defaults={};Pudding.version=pkg.version;module.exports=Pudding;},{"./package.json":8,"bluebird":3}],8:[function(require,module,exports){module.exports={"name":"ether-pudding","version":"2.0.7","description":"Pudding - a (more) delightful Ethereum contract abstraction","author":{"name":"Tim Coulter"},"main":"./index.js","private":false,"scripts":{"test":"mocha"},"repository":{"type":"git","url":"git+https://github.com/consensys/ether-pudding.git"},"license":"MIT License. Copyright Consensys LLC, and authors. All rights reserved.","devDependencies":{"chai":"^3.4.1","ethereumjs-testrpc":"^0.1.1","json-loader":"^0.5.4","mocha":"^2.3.4","solc":"^0.1.6","temp":"^0.8.3","web3":"^0.15.1","webpack":"^1.12.11"},"dependencies":{"bluebird":"^3.1.5","node-dir":"^0.1.11"},"gitHead":"3f6b2b053bac33498b871a67d870ffcb2cc5e7fc","bugs":{"url":"https://github.com/consensys/ether-pudding/issues"},"homepage":"https://github.com/consensys/ether-pudding#readme","_id":"ether-pudding@2.0.7","_shasum":"7b97b037f5082534119cbac015261b2d1c9f7bd2","_from":"ether-pudding@*","_npmVersion":"3.3.12","_nodeVersion":"5.5.0","_npmUser":{"name":"tcoulter","email":"tim@timothyjcoulter.com"},"maintainers":[{"name":"tcoulter","email":"tim@timothyjcoulter.com"}],"dist":{"shasum":"7b97b037f5082534119cbac015261b2d1c9f7bd2","tarball":"https://registry.npmjs.org/ether-pudding/-/ether-pudding-2.0.7.tgz"},"_npmOperationalInternal":{"host":"packages-12-west.internal.npmjs.com","tmp":"tmp/ether-pudding-2.0.7.tgz_1460495922540_0.23199270921759307"},"directories":{},"_resolved":"https://registry.npmjs.org/ether-pudding/-/ether-pudding-2.0.7.tgz"};},{}],9:[function(require,module,exports){var Web3=require('./lib/web3');// dont override global variable
if(typeof window!=='undefined'&&typeof window.Web3==='undefined'){window.Web3=Web3;}module.exports=Web3;},{"./lib/web3":31}],10:[function(require,module,exports){module.exports=[{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"name","outputs":[{"name":"o_name","type":"bytes32"}],"type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"content","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"addr","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"}],"name":"reserve","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"subRegistrar","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_newOwner","type":"address"}],"name":"transfer","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_registrar","type":"address"}],"name":"setSubRegistrar","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"Registrar","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_a","type":"address"},{"name":"_primary","type":"bool"}],"name":"setAddress","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_content","type":"bytes32"}],"name":"setContent","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"}],"name":"disown","outputs":[],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_name","type":"bytes32"},{"indexed":false,"name":"_winner","type":"address"}],"name":"AuctionEnded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_name","type":"bytes32"},{"indexed":false,"name":"_bidder","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"NewBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"name","type":"bytes32"}],"name":"Changed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"name","type":"bytes32"},{"indexed":true,"name":"addr","type":"address"}],"name":"PrimaryChanged","type":"event"}];},{}],11:[function(require,module,exports){module.exports=[{"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_refund","type":"address"}],"name":"disown","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"addr","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"}],"name":"reserve","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_newOwner","type":"address"}],"name":"transfer","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_a","type":"address"}],"name":"setAddr","outputs":[],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"name","type":"bytes32"}],"name":"Changed","type":"event"}];},{}],12:[function(require,module,exports){module.exports=[{"constant":false,"inputs":[{"name":"from","type":"bytes32"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"from","type":"bytes32"},{"name":"to","type":"address"},{"name":"indirectId","type":"bytes32"},{"name":"value","type":"uint256"}],"name":"icapTransfer","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"bytes32"}],"name":"deposit","outputs":[],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"AnonymousDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"bytes32"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"bytes32"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"bytes32"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"indirectId","type":"bytes32"},{"indexed":false,"name":"value","type":"uint256"}],"name":"IcapTransfer","type":"event"}];},{}],13:[function(require,module,exports){var f=require('./formatters');var SolidityType=require('./type');/**
 * SolidityTypeAddress is a prootype that represents address type
 * It matches:
 * address
 * address[]
 * address[4]
 * address[][]
 * address[3][]
 * address[][6][], ...
 */var SolidityTypeAddress=function(){this._inputFormatter=f.formatInputInt;this._outputFormatter=f.formatOutputAddress;};SolidityTypeAddress.prototype=new SolidityType({});SolidityTypeAddress.prototype.constructor=SolidityTypeAddress;SolidityTypeAddress.prototype.isType=function(name){return!!name.match(/address(\[([0-9]*)\])?/);};SolidityTypeAddress.prototype.staticPartLength=function(name){return 32*this.staticArrayLength(name);};module.exports=SolidityTypeAddress;},{"./formatters":18,"./type":23}],14:[function(require,module,exports){var f=require('./formatters');var SolidityType=require('./type');/**
 * SolidityTypeBool is a prootype that represents bool type
 * It matches:
 * bool
 * bool[]
 * bool[4]
 * bool[][]
 * bool[3][]
 * bool[][6][], ...
 */var SolidityTypeBool=function(){this._inputFormatter=f.formatInputBool;this._outputFormatter=f.formatOutputBool;};SolidityTypeBool.prototype=new SolidityType({});SolidityTypeBool.prototype.constructor=SolidityTypeBool;SolidityTypeBool.prototype.isType=function(name){return!!name.match(/^bool(\[([0-9]*)\])*$/);};SolidityTypeBool.prototype.staticPartLength=function(name){return 32*this.staticArrayLength(name);};module.exports=SolidityTypeBool;},{"./formatters":18,"./type":23}],15:[function(require,module,exports){var f=require('./formatters');var SolidityType=require('./type');/**
 * SolidityTypeBytes is a prootype that represents bytes type
 * It matches:
 * bytes
 * bytes[]
 * bytes[4]
 * bytes[][]
 * bytes[3][]
 * bytes[][6][], ...
 * bytes32
 * bytes64[]
 * bytes8[4]
 * bytes256[][]
 * bytes[3][]
 * bytes64[][6][], ...
 */var SolidityTypeBytes=function(){this._inputFormatter=f.formatInputBytes;this._outputFormatter=f.formatOutputBytes;};SolidityTypeBytes.prototype=new SolidityType({});SolidityTypeBytes.prototype.constructor=SolidityTypeBytes;SolidityTypeBytes.prototype.isType=function(name){return!!name.match(/^bytes([0-9]{1,})(\[([0-9]*)\])*$/);};SolidityTypeBytes.prototype.staticPartLength=function(name){var matches=name.match(/^bytes([0-9]*)/);var size=parseInt(matches[1]);return size*this.staticArrayLength(name);};module.exports=SolidityTypeBytes;},{"./formatters":18,"./type":23}],16:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//** 
 * @file coder.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */var f=require('./formatters');var SolidityTypeAddress=require('./address');var SolidityTypeBool=require('./bool');var SolidityTypeInt=require('./int');var SolidityTypeUInt=require('./uint');var SolidityTypeDynamicBytes=require('./dynamicbytes');var SolidityTypeString=require('./string');var SolidityTypeReal=require('./real');var SolidityTypeUReal=require('./ureal');var SolidityTypeBytes=require('./bytes');/**
 * SolidityCoder prototype should be used to encode/decode solidity params of any type
 */var SolidityCoder=function(types){this._types=types;};/**
 * This method should be used to transform type to SolidityType
 *
 * @method _requireType
 * @param {String} type
 * @returns {SolidityType} 
 * @throws {Error} throws if no matching type is found
 */SolidityCoder.prototype._requireType=function(type){var solidityType=this._types.filter(function(t){return t.isType(type);})[0];if(!solidityType){throw Error('invalid solidity type!: '+type);}return solidityType;};/**
 * Should be used to encode plain param
 *
 * @method encodeParam
 * @param {String} type
 * @param {Object} plain param
 * @return {String} encoded plain param
 */SolidityCoder.prototype.encodeParam=function(type,param){return this.encodeParams([type],[param]);};/**
 * Should be used to encode list of params
 *
 * @method encodeParams
 * @param {Array} types
 * @param {Array} params
 * @return {String} encoded list of params
 */SolidityCoder.prototype.encodeParams=function(types,params){var solidityTypes=this.getSolidityTypes(types);var encodeds=solidityTypes.map(function(solidityType,index){return solidityType.encode(params[index],types[index]);});var dynamicOffset=solidityTypes.reduce(function(acc,solidityType,index){var staticPartLength=solidityType.staticPartLength(types[index]);var roundedStaticPartLength=Math.floor((staticPartLength+31)/32)*32;return acc+roundedStaticPartLength;},0);var result=this.encodeMultiWithOffset(types,solidityTypes,encodeds,dynamicOffset);return result;};SolidityCoder.prototype.encodeMultiWithOffset=function(types,solidityTypes,encodeds,dynamicOffset){var result="";var self=this;var isDynamic=function(i){return solidityTypes[i].isDynamicArray(types[i])||solidityTypes[i].isDynamicType(types[i]);};types.forEach(function(type,i){if(isDynamic(i)){result+=f.formatInputInt(dynamicOffset).encode();var e=self.encodeWithOffset(types[i],solidityTypes[i],encodeds[i],dynamicOffset);dynamicOffset+=e.length/2;}else{// don't add length to dynamicOffset. it's already counted
result+=self.encodeWithOffset(types[i],solidityTypes[i],encodeds[i],dynamicOffset);}// TODO: figure out nested arrays
});types.forEach(function(type,i){if(isDynamic(i)){var e=self.encodeWithOffset(types[i],solidityTypes[i],encodeds[i],dynamicOffset);dynamicOffset+=e.length/2;result+=e;}});return result;};// TODO: refactor whole encoding!
SolidityCoder.prototype.encodeWithOffset=function(type,solidityType,encoded,offset){var self=this;if(solidityType.isDynamicArray(type)){return function(){// offset was already set
var nestedName=solidityType.nestedName(type);var nestedStaticPartLength=solidityType.staticPartLength(nestedName);var result=encoded[0];(function(){var previousLength=2;// in int
if(solidityType.isDynamicArray(nestedName)){for(var i=1;i<encoded.length;i++){previousLength+=+encoded[i-1][0]||0;result+=f.formatInputInt(offset+i*nestedStaticPartLength+previousLength*32).encode();}}})();// first element is length, skip it
(function(){for(var i=0;i<encoded.length-1;i++){var additionalOffset=result/2;result+=self.encodeWithOffset(nestedName,solidityType,encoded[i+1],offset+additionalOffset);}})();return result;}();}else if(solidityType.isStaticArray(type)){return function(){var nestedName=solidityType.nestedName(type);var nestedStaticPartLength=solidityType.staticPartLength(nestedName);var result="";if(solidityType.isDynamicArray(nestedName)){(function(){var previousLength=0;// in int
for(var i=0;i<encoded.length;i++){// calculate length of previous item
previousLength+=+(encoded[i-1]||[])[0]||0;result+=f.formatInputInt(offset+i*nestedStaticPartLength+previousLength*32).encode();}})();}(function(){for(var i=0;i<encoded.length;i++){var additionalOffset=result/2;result+=self.encodeWithOffset(nestedName,solidityType,encoded[i],offset+additionalOffset);}})();return result;}();}return encoded;};/**
 * Should be used to decode bytes to plain param
 *
 * @method decodeParam
 * @param {String} type
 * @param {String} bytes
 * @return {Object} plain param
 */SolidityCoder.prototype.decodeParam=function(type,bytes){return this.decodeParams([type],bytes)[0];};/**
 * Should be used to decode list of params
 *
 * @method decodeParam
 * @param {Array} types
 * @param {String} bytes
 * @return {Array} array of plain params
 */SolidityCoder.prototype.decodeParams=function(types,bytes){var solidityTypes=this.getSolidityTypes(types);var offsets=this.getOffsets(types,solidityTypes);return solidityTypes.map(function(solidityType,index){return solidityType.decode(bytes,offsets[index],types[index],index);});};SolidityCoder.prototype.getOffsets=function(types,solidityTypes){var lengths=solidityTypes.map(function(solidityType,index){return solidityType.staticPartLength(types[index]);});for(var i=1;i<lengths.length;i++){// sum with length of previous element
lengths[i]+=lengths[i-1];}return lengths.map(function(length,index){// remove the current length, so the length is sum of previous elements
var staticPartLength=solidityTypes[index].staticPartLength(types[index]);return length-staticPartLength;});};SolidityCoder.prototype.getSolidityTypes=function(types){var self=this;return types.map(function(type){return self._requireType(type);});};var coder=new SolidityCoder([new SolidityTypeAddress(),new SolidityTypeBool(),new SolidityTypeInt(),new SolidityTypeUInt(),new SolidityTypeDynamicBytes(),new SolidityTypeBytes(),new SolidityTypeString(),new SolidityTypeReal(),new SolidityTypeUReal()]);module.exports=coder;},{"./address":13,"./bool":14,"./bytes":15,"./dynamicbytes":17,"./formatters":18,"./int":19,"./real":21,"./string":22,"./uint":24,"./ureal":25}],17:[function(require,module,exports){var f=require('./formatters');var SolidityType=require('./type');var SolidityTypeDynamicBytes=function(){this._inputFormatter=f.formatInputDynamicBytes;this._outputFormatter=f.formatOutputDynamicBytes;};SolidityTypeDynamicBytes.prototype=new SolidityType({});SolidityTypeDynamicBytes.prototype.constructor=SolidityTypeDynamicBytes;SolidityTypeDynamicBytes.prototype.isType=function(name){return!!name.match(/^bytes(\[([0-9]*)\])*$/);};SolidityTypeDynamicBytes.prototype.staticPartLength=function(name){return 32*this.staticArrayLength(name);};SolidityTypeDynamicBytes.prototype.isDynamicType=function(){return true;};module.exports=SolidityTypeDynamicBytes;},{"./formatters":18,"./type":23}],18:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//** 
 * @file formatters.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */var BigNumber=require('bignumber.js');var utils=require('../utils/utils');var c=require('../utils/config');var SolidityParam=require('./param');/**
 * Formats input value to byte representation of int
 * If value is negative, return it's two's complement
 * If the value is floating point, round it down
 *
 * @method formatInputInt
 * @param {String|Number|BigNumber} value that needs to be formatted
 * @returns {SolidityParam}
 */var formatInputInt=function(value){BigNumber.config(c.ETH_BIGNUMBER_ROUNDING_MODE);var result=utils.padLeft(utils.toTwosComplement(value).round().toString(16),64);return new SolidityParam(result);};/**
 * Formats input bytes
 *
 * @method formatInputBytes
 * @param {String}
 * @returns {SolidityParam}
 */var formatInputBytes=function(value){var result=utils.toHex(value).substr(2);var l=Math.floor((result.length+63)/64);result=utils.padRight(result,l*64);return new SolidityParam(result);};/**
 * Formats input bytes
 *
 * @method formatDynamicInputBytes
 * @param {String}
 * @returns {SolidityParam}
 */var formatInputDynamicBytes=function(value){var result=utils.toHex(value).substr(2);var length=result.length/2;var l=Math.floor((result.length+63)/64);result=utils.padRight(result,l*64);return new SolidityParam(formatInputInt(length).value+result);};/**
 * Formats input value to byte representation of string
 *
 * @method formatInputString
 * @param {String}
 * @returns {SolidityParam}
 */var formatInputString=function(value){var result=utils.fromUtf8(value).substr(2);var length=result.length/2;var l=Math.floor((result.length+63)/64);result=utils.padRight(result,l*64);return new SolidityParam(formatInputInt(length).value+result);};/**
 * Formats input value to byte representation of bool
 *
 * @method formatInputBool
 * @param {Boolean}
 * @returns {SolidityParam}
 */var formatInputBool=function(value){var result='000000000000000000000000000000000000000000000000000000000000000'+(value?'1':'0');return new SolidityParam(result);};/**
 * Formats input value to byte representation of real
 * Values are multiplied by 2^m and encoded as integers
 *
 * @method formatInputReal
 * @param {String|Number|BigNumber}
 * @returns {SolidityParam}
 */var formatInputReal=function(value){return formatInputInt(new BigNumber(value).times(new BigNumber(2).pow(128)));};/**
 * Check if input value is negative
 *
 * @method signedIsNegative
 * @param {String} value is hex format
 * @returns {Boolean} true if it is negative, otherwise false
 */var signedIsNegative=function(value){return new BigNumber(value.substr(0,1),16).toString(2).substr(0,1)==='1';};/**
 * Formats right-aligned output bytes to int
 *
 * @method formatOutputInt
 * @param {SolidityParam} param
 * @returns {BigNumber} right-aligned output bytes formatted to big number
 */var formatOutputInt=function(param){var value=param.staticPart()||"0";// check if it's negative number
// it it is, return two's complement
if(signedIsNegative(value)){return new BigNumber(value,16).minus(new BigNumber('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',16)).minus(1);}return new BigNumber(value,16);};/**
 * Formats right-aligned output bytes to uint
 *
 * @method formatOutputUInt
 * @param {SolidityParam}
 * @returns {BigNumeber} right-aligned output bytes formatted to uint
 */var formatOutputUInt=function(param){var value=param.staticPart()||"0";return new BigNumber(value,16);};/**
 * Formats right-aligned output bytes to real
 *
 * @method formatOutputReal
 * @param {SolidityParam}
 * @returns {BigNumber} input bytes formatted to real
 */var formatOutputReal=function(param){return formatOutputInt(param).dividedBy(new BigNumber(2).pow(128));};/**
 * Formats right-aligned output bytes to ureal
 *
 * @method formatOutputUReal
 * @param {SolidityParam}
 * @returns {BigNumber} input bytes formatted to ureal
 */var formatOutputUReal=function(param){return formatOutputUInt(param).dividedBy(new BigNumber(2).pow(128));};/**
 * Should be used to format output bool
 *
 * @method formatOutputBool
 * @param {SolidityParam}
 * @returns {Boolean} right-aligned input bytes formatted to bool
 */var formatOutputBool=function(param){return param.staticPart()==='0000000000000000000000000000000000000000000000000000000000000001'?true:false;};/**
 * Should be used to format output bytes
 *
 * @method formatOutputBytes
 * @param {SolidityParam} left-aligned hex representation of string
 * @returns {String} hex string
 */var formatOutputBytes=function(param){return'0x'+param.staticPart();};/**
 * Should be used to format output bytes
 *
 * @method formatOutputDynamicBytes
 * @param {SolidityParam} left-aligned hex representation of string
 * @returns {String} hex string
 */var formatOutputDynamicBytes=function(param){var length=new BigNumber(param.dynamicPart().slice(0,64),16).toNumber()*2;return'0x'+param.dynamicPart().substr(64,length);};/**
 * Should be used to format output string
 *
 * @method formatOutputString
 * @param {SolidityParam} left-aligned hex representation of string
 * @returns {String} ascii string
 */var formatOutputString=function(param){var length=new BigNumber(param.dynamicPart().slice(0,64),16).toNumber()*2;return utils.toUtf8(param.dynamicPart().substr(64,length));};/**
 * Should be used to format output address
 *
 * @method formatOutputAddress
 * @param {SolidityParam} right-aligned input bytes
 * @returns {String} address
 */var formatOutputAddress=function(param){var value=param.staticPart();return"0x"+value.slice(value.length-40,value.length);};module.exports={formatInputInt:formatInputInt,formatInputBytes:formatInputBytes,formatInputDynamicBytes:formatInputDynamicBytes,formatInputString:formatInputString,formatInputBool:formatInputBool,formatInputReal:formatInputReal,formatOutputInt:formatOutputInt,formatOutputUInt:formatOutputUInt,formatOutputReal:formatOutputReal,formatOutputUReal:formatOutputUReal,formatOutputBool:formatOutputBool,formatOutputBytes:formatOutputBytes,formatOutputDynamicBytes:formatOutputDynamicBytes,formatOutputString:formatOutputString,formatOutputAddress:formatOutputAddress};},{"../utils/config":27,"../utils/utils":29,"./param":20,"bignumber.js":58}],19:[function(require,module,exports){var f=require('./formatters');var SolidityType=require('./type');/**
 * SolidityTypeInt is a prootype that represents int type
 * It matches:
 * int
 * int[]
 * int[4]
 * int[][]
 * int[3][]
 * int[][6][], ...
 * int32
 * int64[]
 * int8[4]
 * int256[][]
 * int[3][]
 * int64[][6][], ...
 */var SolidityTypeInt=function(){this._inputFormatter=f.formatInputInt;this._outputFormatter=f.formatOutputInt;};SolidityTypeInt.prototype=new SolidityType({});SolidityTypeInt.prototype.constructor=SolidityTypeInt;SolidityTypeInt.prototype.isType=function(name){return!!name.match(/^int([0-9]*)?(\[([0-9]*)\])*$/);};SolidityTypeInt.prototype.staticPartLength=function(name){return 32*this.staticArrayLength(name);};module.exports=SolidityTypeInt;},{"./formatters":18,"./type":23}],20:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//** 
 * @file param.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */var utils=require('../utils/utils');/**
 * SolidityParam object prototype.
 * Should be used when encoding, decoding solidity bytes
 */var SolidityParam=function(value,offset){this.value=value||'';this.offset=offset;// offset in bytes
};/**
 * This method should be used to get length of params's dynamic part
 * 
 * @method dynamicPartLength
 * @returns {Number} length of dynamic part (in bytes)
 */SolidityParam.prototype.dynamicPartLength=function(){return this.dynamicPart().length/2;};/**
 * This method should be used to create copy of solidity param with different offset
 *
 * @method withOffset
 * @param {Number} offset length in bytes
 * @returns {SolidityParam} new solidity param with applied offset
 */SolidityParam.prototype.withOffset=function(offset){return new SolidityParam(this.value,offset);};/**
 * This method should be used to combine solidity params together
 * eg. when appending an array
 *
 * @method combine
 * @param {SolidityParam} param with which we should combine
 * @param {SolidityParam} result of combination
 */SolidityParam.prototype.combine=function(param){return new SolidityParam(this.value+param.value);};/**
 * This method should be called to check if param has dynamic size.
 * If it has, it returns true, otherwise false
 *
 * @method isDynamic
 * @returns {Boolean}
 */SolidityParam.prototype.isDynamic=function(){return this.offset!==undefined;};/**
 * This method should be called to transform offset to bytes
 *
 * @method offsetAsBytes
 * @returns {String} bytes representation of offset
 */SolidityParam.prototype.offsetAsBytes=function(){return!this.isDynamic()?'':utils.padLeft(utils.toTwosComplement(this.offset).toString(16),64);};/**
 * This method should be called to get static part of param
 *
 * @method staticPart
 * @returns {String} offset if it is a dynamic param, otherwise value
 */SolidityParam.prototype.staticPart=function(){if(!this.isDynamic()){return this.value;}return this.offsetAsBytes();};/**
 * This method should be called to get dynamic part of param
 *
 * @method dynamicPart
 * @returns {String} returns a value if it is a dynamic param, otherwise empty string
 */SolidityParam.prototype.dynamicPart=function(){return this.isDynamic()?this.value:'';};/**
 * This method should be called to encode param
 *
 * @method encode
 * @returns {String}
 */SolidityParam.prototype.encode=function(){return this.staticPart()+this.dynamicPart();};/**
 * This method should be called to encode array of params
 *
 * @method encodeList
 * @param {Array[SolidityParam]} params
 * @returns {String}
 */SolidityParam.encodeList=function(params){// updating offsets
var totalOffset=params.length*32;var offsetParams=params.map(function(param){if(!param.isDynamic()){return param;}var offset=totalOffset;totalOffset+=param.dynamicPartLength();return param.withOffset(offset);});// encode everything!
return offsetParams.reduce(function(result,param){return result+param.dynamicPart();},offsetParams.reduce(function(result,param){return result+param.staticPart();},''));};module.exports=SolidityParam;},{"../utils/utils":29}],21:[function(require,module,exports){var f=require('./formatters');var SolidityType=require('./type');/**
 * SolidityTypeReal is a prootype that represents real type
 * It matches:
 * real
 * real[]
 * real[4]
 * real[][]
 * real[3][]
 * real[][6][], ...
 * real32
 * real64[]
 * real8[4]
 * real256[][]
 * real[3][]
 * real64[][6][], ...
 */var SolidityTypeReal=function(){this._inputFormatter=f.formatInputReal;this._outputFormatter=f.formatOutputReal;};SolidityTypeReal.prototype=new SolidityType({});SolidityTypeReal.prototype.constructor=SolidityTypeReal;SolidityTypeReal.prototype.isType=function(name){return!!name.match(/real([0-9]*)?(\[([0-9]*)\])?/);};SolidityTypeReal.prototype.staticPartLength=function(name){return 32*this.staticArrayLength(name);};module.exports=SolidityTypeReal;},{"./formatters":18,"./type":23}],22:[function(require,module,exports){var f=require('./formatters');var SolidityType=require('./type');var SolidityTypeString=function(){this._inputFormatter=f.formatInputString;this._outputFormatter=f.formatOutputString;};SolidityTypeString.prototype=new SolidityType({});SolidityTypeString.prototype.constructor=SolidityTypeString;SolidityTypeString.prototype.isType=function(name){return!!name.match(/^string(\[([0-9]*)\])*$/);};SolidityTypeString.prototype.staticPartLength=function(name){return 32*this.staticArrayLength(name);};SolidityTypeString.prototype.isDynamicType=function(){return true;};module.exports=SolidityTypeString;},{"./formatters":18,"./type":23}],23:[function(require,module,exports){var f=require('./formatters');var SolidityParam=require('./param');/**
 * SolidityType prototype is used to encode/decode solidity params of certain type
 */var SolidityType=function(config){this._inputFormatter=config.inputFormatter;this._outputFormatter=config.outputFormatter;};/**
 * Should be used to determine if this SolidityType do match given name
 *
 * @method isType
 * @param {String} name
 * @return {Bool} true if type match this SolidityType, otherwise false
 */SolidityType.prototype.isType=function(name){throw"this method should be overrwritten for type "+name;};/**
 * Should be used to determine what is the length of static part in given type
 *
 * @method staticPartLength
 * @param {String} name
 * @return {Number} length of static part in bytes
 */SolidityType.prototype.staticPartLength=function(name){throw"this method should be overrwritten for type: "+name;};/**
 * Should be used to determine if type is dynamic array
 * eg: 
 * "type[]" => true
 * "type[4]" => false
 *
 * @method isDynamicArray
 * @param {String} name
 * @return {Bool} true if the type is dynamic array 
 */SolidityType.prototype.isDynamicArray=function(name){var nestedTypes=this.nestedTypes(name);return!!nestedTypes&&!nestedTypes[nestedTypes.length-1].match(/[0-9]{1,}/g);};/**
 * Should be used to determine if type is static array
 * eg: 
 * "type[]" => false
 * "type[4]" => true
 *
 * @method isStaticArray
 * @param {String} name
 * @return {Bool} true if the type is static array 
 */SolidityType.prototype.isStaticArray=function(name){var nestedTypes=this.nestedTypes(name);return!!nestedTypes&&!!nestedTypes[nestedTypes.length-1].match(/[0-9]{1,}/g);};/**
 * Should return length of static array
 * eg. 
 * "int[32]" => 32
 * "int256[14]" => 14
 * "int[2][3]" => 3
 * "int" => 1
 * "int[1]" => 1
 * "int[]" => 1
 *
 * @method staticArrayLength
 * @param {String} name
 * @return {Number} static array length
 */SolidityType.prototype.staticArrayLength=function(name){var nestedTypes=this.nestedTypes(name);if(nestedTypes){return parseInt(nestedTypes[nestedTypes.length-1].match(/[0-9]{1,}/g)||1);}return 1;};/**
 * Should return nested type
 * eg.
 * "int[32]" => "int"
 * "int256[14]" => "int256"
 * "int[2][3]" => "int[2]"
 * "int" => "int"
 * "int[]" => "int"
 *
 * @method nestedName
 * @param {String} name
 * @return {String} nested name
 */SolidityType.prototype.nestedName=function(name){// remove last [] in name
var nestedTypes=this.nestedTypes(name);if(!nestedTypes){return name;}return name.substr(0,name.length-nestedTypes[nestedTypes.length-1].length);};/**
 * Should return true if type has dynamic size by default
 * such types are "string", "bytes"
 *
 * @method isDynamicType
 * @param {String} name
 * @return {Bool} true if is dynamic, otherwise false
 */SolidityType.prototype.isDynamicType=function(){return false;};/**
 * Should return array of nested types
 * eg.
 * "int[2][3][]" => ["[2]", "[3]", "[]"]
 * "int[] => ["[]"]
 * "int" => null
 *
 * @method nestedTypes
 * @param {String} name
 * @return {Array} array of nested types
 */SolidityType.prototype.nestedTypes=function(name){// return list of strings eg. "[]", "[3]", "[]", "[2]"
return name.match(/(\[[0-9]*\])/g);};/**
 * Should be used to encode the value
 *
 * @method encode
 * @param {Object} value 
 * @param {String} name
 * @return {String} encoded value
 */SolidityType.prototype.encode=function(value,name){var self=this;if(this.isDynamicArray(name)){return function(){var length=value.length;// in int
var nestedName=self.nestedName(name);var result=[];result.push(f.formatInputInt(length).encode());value.forEach(function(v){result.push(self.encode(v,nestedName));});return result;}();}else if(this.isStaticArray(name)){return function(){var length=self.staticArrayLength(name);// in int
var nestedName=self.nestedName(name);var result=[];for(var i=0;i<length;i++){result.push(self.encode(value[i],nestedName));}return result;}();}return this._inputFormatter(value,name).encode();};/**
 * Should be used to decode value from bytes
 *
 * @method decode
 * @param {String} bytes
 * @param {Number} offset in bytes
 * @param {String} name type name
 * @returns {Object} decoded value
 */SolidityType.prototype.decode=function(bytes,offset,name){var self=this;if(this.isDynamicArray(name)){return function(){var arrayOffset=parseInt('0x'+bytes.substr(offset*2,64));// in bytes
var length=parseInt('0x'+bytes.substr(arrayOffset*2,64));// in int
var arrayStart=arrayOffset+32;// array starts after length; // in bytes
var nestedName=self.nestedName(name);var nestedStaticPartLength=self.staticPartLength(nestedName);// in bytes
var roundedNestedStaticPartLength=Math.floor((nestedStaticPartLength+31)/32)*32;var result=[];for(var i=0;i<length*roundedNestedStaticPartLength;i+=roundedNestedStaticPartLength){result.push(self.decode(bytes,arrayStart+i,nestedName));}return result;}();}else if(this.isStaticArray(name)){return function(){var length=self.staticArrayLength(name);// in int
var arrayStart=offset;// in bytes
var nestedName=self.nestedName(name);var nestedStaticPartLength=self.staticPartLength(nestedName);// in bytes
var roundedNestedStaticPartLength=Math.floor((nestedStaticPartLength+31)/32)*32;var result=[];for(var i=0;i<length*roundedNestedStaticPartLength;i+=roundedNestedStaticPartLength){result.push(self.decode(bytes,arrayStart+i,nestedName));}return result;}();}else if(this.isDynamicType(name)){return function(){var dynamicOffset=parseInt('0x'+bytes.substr(offset*2,64));// in bytes
var length=parseInt('0x'+bytes.substr(dynamicOffset*2,64));// in bytes
var roundedLength=Math.floor((length+31)/32);// in int
return self._outputFormatter(new SolidityParam(bytes.substr(dynamicOffset*2,(1+roundedLength)*64),0));}();}var length=this.staticPartLength(name);return this._outputFormatter(new SolidityParam(bytes.substr(offset*2,length*2)));};module.exports=SolidityType;},{"./formatters":18,"./param":20}],24:[function(require,module,exports){var f=require('./formatters');var SolidityType=require('./type');/**
 * SolidityTypeUInt is a prootype that represents uint type
 * It matches:
 * uint
 * uint[]
 * uint[4]
 * uint[][]
 * uint[3][]
 * uint[][6][], ...
 * uint32
 * uint64[]
 * uint8[4]
 * uint256[][]
 * uint[3][]
 * uint64[][6][], ...
 */var SolidityTypeUInt=function(){this._inputFormatter=f.formatInputInt;this._outputFormatter=f.formatOutputUInt;};SolidityTypeUInt.prototype=new SolidityType({});SolidityTypeUInt.prototype.constructor=SolidityTypeUInt;SolidityTypeUInt.prototype.isType=function(name){return!!name.match(/^uint([0-9]*)?(\[([0-9]*)\])*$/);};SolidityTypeUInt.prototype.staticPartLength=function(name){return 32*this.staticArrayLength(name);};module.exports=SolidityTypeUInt;},{"./formatters":18,"./type":23}],25:[function(require,module,exports){var f=require('./formatters');var SolidityType=require('./type');/**
 * SolidityTypeUReal is a prootype that represents ureal type
 * It matches:
 * ureal
 * ureal[]
 * ureal[4]
 * ureal[][]
 * ureal[3][]
 * ureal[][6][], ...
 * ureal32
 * ureal64[]
 * ureal8[4]
 * ureal256[][]
 * ureal[3][]
 * ureal64[][6][], ...
 */var SolidityTypeUReal=function(){this._inputFormatter=f.formatInputReal;this._outputFormatter=f.formatOutputUReal;};SolidityTypeUReal.prototype=new SolidityType({});SolidityTypeUReal.prototype.constructor=SolidityTypeUReal;SolidityTypeUReal.prototype.isType=function(name){return!!name.match(/^ureal([0-9]*)?(\[([0-9]*)\])*$/);};SolidityTypeUReal.prototype.staticPartLength=function(name){return 32*this.staticArrayLength(name);};module.exports=SolidityTypeUReal;},{"./formatters":18,"./type":23}],26:[function(require,module,exports){'use strict';// go env doesn't have and need XMLHttpRequest
if(typeof XMLHttpRequest==='undefined'){exports.XMLHttpRequest={};}else{exports.XMLHttpRequest=XMLHttpRequest;// jshint ignore:line
}},{}],27:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//** @file config.js
 * @authors:
 *   Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 *//**
 * Utils
 * 
 * @module utils
 *//**
 * Utility functions
 * 
 * @class [utils] config
 * @constructor
 *//// required to define ETH_BIGNUMBER_ROUNDING_MODE
var BigNumber=require('bignumber.js');var ETH_UNITS=['wei','kwei','Mwei','Gwei','szabo','finney','femtoether','picoether','nanoether','microether','milliether','nano','micro','milli','ether','grand','Mether','Gether','Tether','Pether','Eether','Zether','Yether','Nether','Dether','Vether','Uether'];module.exports={ETH_PADDING:32,ETH_SIGNATURE_LENGTH:4,ETH_UNITS:ETH_UNITS,ETH_BIGNUMBER_ROUNDING_MODE:{ROUNDING_MODE:BigNumber.ROUND_DOWN},ETH_POLLING_TIMEOUT:1000/2,defaultBlock:'latest',defaultAccount:undefined};},{"bignumber.js":58}],28:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//** 
 * @file sha3.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */var CryptoJS=require('crypto-js');var sha3=require('crypto-js/sha3');module.exports=function(value,options){if(options&&options.encoding==='hex'){if(value.length>2&&value.substr(0,2)==='0x'){value=value.substr(2);}value=CryptoJS.enc.Hex.parse(value);}return sha3(value,{outputLength:256}).toString();};},{"crypto-js":67,"crypto-js/sha3":88}],29:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//**
 * @file utils.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 *//**
 * Utils
 *
 * @module utils
 *//**
 * Utility functions
 *
 * @class [utils] utils
 * @constructor
 */var BigNumber=require('bignumber.js');var sha3=require('./sha3.js');var utf8=require('utf8');var unitMap={'noether':'0','wei':'1','kwei':'1000','Kwei':'1000','babbage':'1000','femtoether':'1000','mwei':'1000000','Mwei':'1000000','lovelace':'1000000','picoether':'1000000','gwei':'1000000000','Gwei':'1000000000','shannon':'1000000000','nanoether':'1000000000','nano':'1000000000','szabo':'1000000000000','microether':'1000000000000','micro':'1000000000000','finney':'1000000000000000','milliether':'1000000000000000','milli':'1000000000000000','ether':'1000000000000000000','kether':'1000000000000000000000','grand':'1000000000000000000000','mether':'1000000000000000000000000','gether':'1000000000000000000000000000','tether':'1000000000000000000000000000000'};/**
 * Should be called to pad string to expected length
 *
 * @method padLeft
 * @param {String} string to be padded
 * @param {Number} characters that result string should have
 * @param {String} sign, by default 0
 * @returns {String} right aligned string
 */var padLeft=function(string,chars,sign){return new Array(chars-string.length+1).join(sign?sign:"0")+string;};/**
 * Should be called to pad string to expected length
 *
 * @method padRight
 * @param {String} string to be padded
 * @param {Number} characters that result string should have
 * @param {String} sign, by default 0
 * @returns {String} right aligned string
 */var padRight=function(string,chars,sign){return string+new Array(chars-string.length+1).join(sign?sign:"0");};/**
 * Should be called to get utf8 from it's hex representation
 *
 * @method toUtf8
 * @param {String} string in hex
 * @returns {String} ascii string representation of hex value
 */var toUtf8=function(hex){// Find termination
var str="";var i=0,l=hex.length;if(hex.substring(0,2)==='0x'){i=2;}for(;i<l;i+=2){var code=parseInt(hex.substr(i,2),16);if(code===0)break;str+=String.fromCharCode(code);}return utf8.decode(str);};/**
 * Should be called to get ascii from it's hex representation
 *
 * @method toAscii
 * @param {String} string in hex
 * @returns {String} ascii string representation of hex value
 */var toAscii=function(hex){// Find termination
var str="";var i=0,l=hex.length;if(hex.substring(0,2)==='0x'){i=2;}for(;i<l;i+=2){var code=parseInt(hex.substr(i,2),16);str+=String.fromCharCode(code);}return str;};/**
 * Should be called to get hex representation (prefixed by 0x) of utf8 string
 *
 * @method fromUtf8
 * @param {String} string
 * @param {Number} optional padding
 * @returns {String} hex representation of input string
 */var fromUtf8=function(str){str=utf8.encode(str);var hex="";for(var i=0;i<str.length;i++){var code=str.charCodeAt(i);if(code===0)break;var n=code.toString(16);hex+=n.length<2?'0'+n:n;}return"0x"+hex;};/**
 * Should be called to get hex representation (prefixed by 0x) of ascii string
 *
 * @method fromAscii
 * @param {String} string
 * @param {Number} optional padding
 * @returns {String} hex representation of input string
 */var fromAscii=function(str){var hex="";for(var i=0;i<str.length;i++){var code=str.charCodeAt(i);var n=code.toString(16);hex+=n.length<2?'0'+n:n;}return"0x"+hex;};/**
 * Should be used to create full function/event name from json abi
 *
 * @method transformToFullName
 * @param {Object} json-abi
 * @return {String} full fnction/event name
 */var transformToFullName=function(json){if(json.name.indexOf('(')!==-1){return json.name;}var typeName=json.inputs.map(function(i){return i.type;}).join();return json.name+'('+typeName+')';};/**
 * Should be called to get display name of contract function
 *
 * @method extractDisplayName
 * @param {String} name of function/event
 * @returns {String} display name for function/event eg. multiply(uint256) -> multiply
 */var extractDisplayName=function(name){var length=name.indexOf('(');return length!==-1?name.substr(0,length):name;};/// @returns overloaded part of function/event name
var extractTypeName=function(name){/// TODO: make it invulnerable
var length=name.indexOf('(');return length!==-1?name.substr(length+1,name.length-1-(length+1)).replace(' ',''):"";};/**
 * Converts value to it's decimal representation in string
 *
 * @method toDecimal
 * @param {String|Number|BigNumber}
 * @return {String}
 */var toDecimal=function(value){return toBigNumber(value).toNumber();};/**
 * Converts value to it's hex representation
 *
 * @method fromDecimal
 * @param {String|Number|BigNumber}
 * @return {String}
 */var fromDecimal=function(value){var number=toBigNumber(value);var result=number.toString(16);return number.lessThan(0)?'-0x'+result.substr(1):'0x'+result;};/**
 * Auto converts any given value into it's hex representation.
 *
 * And even stringifys objects before.
 *
 * @method toHex
 * @param {String|Number|BigNumber|Object}
 * @return {String}
 */var toHex=function(val){/*jshint maxcomplexity: 8 */if(isBoolean(val))return fromDecimal(+val);if(isBigNumber(val))return fromDecimal(val);if(isObject(val))return fromUtf8(JSON.stringify(val));// if its a negative number, pass it through fromDecimal
if(isString(val)){if(val.indexOf('-0x')===0)return fromDecimal(val);else if(val.indexOf('0x')===0)return val;else if(!isFinite(val))return fromAscii(val);}return fromDecimal(val);};/**
 * Returns value of unit in Wei
 *
 * @method getValueOfUnit
 * @param {String} unit the unit to convert to, default ether
 * @returns {BigNumber} value of the unit (in Wei)
 * @throws error if the unit is not correct:w
 */var getValueOfUnit=function(unit){unit=unit?unit.toLowerCase():'ether';var unitValue=unitMap[unit];if(unitValue===undefined){throw new Error('This unit doesn\'t exists, please use the one of the following units'+JSON.stringify(unitMap,null,2));}return new BigNumber(unitValue,10);};/**
 * Takes a number of wei and converts it to any other ether unit.
 *
 * Possible units are:
 *   SI Short   SI Full        Effigy       Other
 * - kwei       femtoether     babbage
 * - mwei       picoether      lovelace
 * - gwei       nanoether      shannon      nano
 * - --         microether     szabo        micro
 * - --         milliether     finney       milli
 * - ether      --             --
 * - kether                    --           grand
 * - mether
 * - gether
 * - tether
 *
 * @method fromWei
 * @param {Number|String} number can be a number, number string or a HEX of a decimal
 * @param {String} unit the unit to convert to, default ether
 * @return {String|Object} When given a BigNumber object it returns one as well, otherwise a number
*/var fromWei=function(number,unit){var returnValue=toBigNumber(number).dividedBy(getValueOfUnit(unit));return isBigNumber(number)?returnValue:returnValue.toString(10);};/**
 * Takes a number of a unit and converts it to wei.
 *
 * Possible units are:
 *   SI Short   SI Full        Effigy       Other
 * - kwei       femtoether     babbage
 * - mwei       picoether      lovelace
 * - gwei       nanoether      shannon      nano
 * - --         microether     szabo        micro
 * - --         microether     szabo        micro
 * - --         milliether     finney       milli
 * - ether      --             --
 * - kether                    --           grand
 * - mether
 * - gether
 * - tether
 *
 * @method toWei
 * @param {Number|String|BigNumber} number can be a number, number string or a HEX of a decimal
 * @param {String} unit the unit to convert from, default ether
 * @return {String|Object} When given a BigNumber object it returns one as well, otherwise a number
*/var toWei=function(number,unit){var returnValue=toBigNumber(number).times(getValueOfUnit(unit));return isBigNumber(number)?returnValue:returnValue.toString(10);};/**
 * Takes an input and transforms it into an bignumber
 *
 * @method toBigNumber
 * @param {Number|String|BigNumber} a number, string, HEX string or BigNumber
 * @return {BigNumber} BigNumber
*/var toBigNumber=function(number){/*jshint maxcomplexity:5 */number=number||0;if(isBigNumber(number))return number;if(isString(number)&&(number.indexOf('0x')===0||number.indexOf('-0x')===0)){return new BigNumber(number.replace('0x',''),16);}return new BigNumber(number.toString(10),10);};/**
 * Takes and input transforms it into bignumber and if it is negative value, into two's complement
 *
 * @method toTwosComplement
 * @param {Number|String|BigNumber}
 * @return {BigNumber}
 */var toTwosComplement=function(number){var bigNumber=toBigNumber(number);if(bigNumber.lessThan(0)){return new BigNumber("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",16).plus(bigNumber).plus(1);}return bigNumber;};/**
 * Checks if the given string is strictly an address
 *
 * @method isStrictAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
*/var isStrictAddress=function(address){return (/^0x[0-9a-f]{40}$/i.test(address));};/**
 * Checks if the given string is an address
 *
 * @method isAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
*/var isAddress=function(address){if(!/^(0x)?[0-9a-f]{40}$/i.test(address)){// check if it has the basic requirements of an address
return false;}else if(/^(0x)?[0-9a-f]{40}$/.test(address)||/^(0x)?[0-9A-F]{40}$/.test(address)){// If it's all small caps or all all caps, return true
return true;}else{// Otherwise check each case
return isChecksumAddress(address);}};/**
 * Checks if the given string is a checksummed address
 *
 * @method isChecksumAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
*/var isChecksumAddress=function(address){// Check each case
address=address.replace('0x','');var addressHash=sha3(address.toLowerCase());for(var i=0;i<40;i++){// the nth letter should be uppercase if the nth digit of casemap is 1
if(parseInt(addressHash[i],16)>7&&address[i].toUpperCase()!==address[i]||parseInt(addressHash[i],16)<=7&&address[i].toLowerCase()!==address[i]){return false;}}return true;};/**
 * Makes a checksum address
 *
 * @method toChecksumAddress
 * @param {String} address the given HEX adress
 * @return {String}
*/var toChecksumAddress=function(address){if(typeof address==='undefined')return'';address=address.toLowerCase().replace('0x','');var addressHash=sha3(address);var checksumAddress='0x';for(var i=0;i<address.length;i++){// If ith character is 9 to f then make it uppercase 
if(parseInt(addressHash[i],16)>7){checksumAddress+=address[i].toUpperCase();}else{checksumAddress+=address[i];}}return checksumAddress;};/**
 * Transforms given string to valid 20 bytes-length addres with 0x prefix
 *
 * @method toAddress
 * @param {String} address
 * @return {String} formatted address
 */var toAddress=function(address){if(isStrictAddress(address)){return address;}if(/^[0-9a-f]{40}$/.test(address)){return'0x'+address;}return'0x'+padLeft(toHex(address).substr(2),40);};/**
 * Returns true if object is BigNumber, otherwise false
 *
 * @method isBigNumber
 * @param {Object}
 * @return {Boolean}
 */var isBigNumber=function(object){return object instanceof BigNumber||object&&object.constructor&&object.constructor.name==='BigNumber';};/**
 * Returns true if object is string, otherwise false
 *
 * @method isString
 * @param {Object}
 * @return {Boolean}
 */var isString=function(object){return typeof object==='string'||object&&object.constructor&&object.constructor.name==='String';};/**
 * Returns true if object is function, otherwise false
 *
 * @method isFunction
 * @param {Object}
 * @return {Boolean}
 */var isFunction=function(object){return typeof object==='function';};/**
 * Returns true if object is Objet, otherwise false
 *
 * @method isObject
 * @param {Object}
 * @return {Boolean}
 */var isObject=function(object){return typeof object==='object';};/**
 * Returns true if object is boolean, otherwise false
 *
 * @method isBoolean
 * @param {Object}
 * @return {Boolean}
 */var isBoolean=function(object){return typeof object==='boolean';};/**
 * Returns true if object is array, otherwise false
 *
 * @method isArray
 * @param {Object}
 * @return {Boolean}
 */var isArray=function(object){return object instanceof Array;};/**
 * Returns true if given string is valid json object
 *
 * @method isJson
 * @param {String}
 * @return {Boolean}
 */var isJson=function(str){try{return!!JSON.parse(str);}catch(e){return false;}};module.exports={padLeft:padLeft,padRight:padRight,toHex:toHex,toDecimal:toDecimal,fromDecimal:fromDecimal,toUtf8:toUtf8,toAscii:toAscii,fromUtf8:fromUtf8,fromAscii:fromAscii,transformToFullName:transformToFullName,extractDisplayName:extractDisplayName,extractTypeName:extractTypeName,toWei:toWei,fromWei:fromWei,toBigNumber:toBigNumber,toTwosComplement:toTwosComplement,toAddress:toAddress,isBigNumber:isBigNumber,isStrictAddress:isStrictAddress,isAddress:isAddress,isChecksumAddress:isChecksumAddress,toChecksumAddress:toChecksumAddress,isFunction:isFunction,isString:isString,isObject:isObject,isBoolean:isBoolean,isArray:isArray,isJson:isJson};},{"./sha3.js":28,"bignumber.js":58,"utf8":93}],30:[function(require,module,exports){module.exports={"version":"0.15.3"};},{}],31:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//**
 * @file web3.js
 * @authors:
 *   Jeffrey Wilcke <jeff@ethdev.com>
 *   Marek Kotewicz <marek@ethdev.com>
 *   Marian Oancea <marian@ethdev.com>
 *   Fabian Vogelsteller <fabian@ethdev.com>
 *   Gav Wood <g@ethdev.com>
 * @date 2014
 */var RequestManager=require('./web3/requestmanager');var Iban=require('./web3/iban');var Eth=require('./web3/methods/eth');var DB=require('./web3/methods/db');var Shh=require('./web3/methods/shh');var Net=require('./web3/methods/net');var Personal=require('./web3/methods/personal');var Settings=require('./web3/settings');var version=require('./version.json');var utils=require('./utils/utils');var sha3=require('./utils/sha3');var extend=require('./web3/extend');var Batch=require('./web3/batch');var Property=require('./web3/property');var HttpProvider=require('./web3/httpprovider');var IpcProvider=require('./web3/ipcprovider');function Web3(provider){this._requestManager=new RequestManager(provider);this.currentProvider=provider;this.eth=new Eth(this);this.db=new DB(this);this.shh=new Shh(this);this.net=new Net(this);this.personal=new Personal(this);this.settings=new Settings();this.version={api:version.version};this.providers={HttpProvider:HttpProvider,IpcProvider:IpcProvider};this._extend=extend(this);this._extend({properties:properties()});}// expose providers on the class
Web3.providers={HttpProvider:HttpProvider,IpcProvider:IpcProvider};Web3.prototype.setProvider=function(provider){this._requestManager.setProvider(provider);this.currentProvider=provider;};Web3.prototype.reset=function(keepIsSyncing){this._requestManager.reset(keepIsSyncing);this.settings=new Settings();};Web3.prototype.toHex=utils.toHex;Web3.prototype.toAscii=utils.toAscii;Web3.prototype.toUtf8=utils.toUtf8;Web3.prototype.fromAscii=utils.fromAscii;Web3.prototype.fromUtf8=utils.fromUtf8;Web3.prototype.toDecimal=utils.toDecimal;Web3.prototype.fromDecimal=utils.fromDecimal;Web3.prototype.toBigNumber=utils.toBigNumber;Web3.prototype.toWei=utils.toWei;Web3.prototype.fromWei=utils.fromWei;Web3.prototype.isAddress=utils.isAddress;Web3.prototype.isChecksumAddress=utils.isChecksumAddress;Web3.prototype.toChecksumAddress=utils.toChecksumAddress;Web3.prototype.isIBAN=utils.isIBAN;Web3.prototype.sha3=sha3;/**
 * Transforms direct icap to address
 */Web3.prototype.fromICAP=function(icap){var iban=new Iban(icap);return iban.address();};var properties=function(){return[new Property({name:'version.node',getter:'web3_clientVersion'}),new Property({name:'version.network',getter:'net_version',inputFormatter:utils.toDecimal}),new Property({name:'version.ethereum',getter:'eth_protocolVersion',inputFormatter:utils.toDecimal}),new Property({name:'version.whisper',getter:'shh_version',inputFormatter:utils.toDecimal})];};Web3.prototype.isConnected=function(){return this.currentProvider&&this.currentProvider.isConnected();};Web3.prototype.createBatch=function(){return new Batch(this);};module.exports=Web3;},{"./utils/sha3":28,"./utils/utils":29,"./version.json":30,"./web3/batch":33,"./web3/extend":37,"./web3/httpprovider":41,"./web3/iban":42,"./web3/ipcprovider":43,"./web3/methods/db":46,"./web3/methods/eth":47,"./web3/methods/net":48,"./web3/methods/personal":49,"./web3/methods/shh":50,"./web3/property":53,"./web3/requestmanager":54,"./web3/settings":55}],32:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//** 
 * @file allevents.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2014
 */var sha3=require('../utils/sha3');var SolidityEvent=require('./event');var formatters=require('./formatters');var utils=require('../utils/utils');var Filter=require('./filter');var watches=require('./methods/watches');var AllSolidityEvents=function(requestManager,json,address){this._requestManager=requestManager;this._json=json;this._address=address;};AllSolidityEvents.prototype.encode=function(options){options=options||{};var result={};['fromBlock','toBlock'].filter(function(f){return options[f]!==undefined;}).forEach(function(f){result[f]=formatters.inputBlockNumberFormatter(options[f]);});result.address=this._address;return result;};AllSolidityEvents.prototype.decode=function(data){data.data=data.data||'';data.topics=data.topics||[];var eventTopic=data.topics[0].slice(2);var match=this._json.filter(function(j){return eventTopic===sha3(utils.transformToFullName(j));})[0];if(!match){// cannot find matching event?
console.warn('cannot find event for log');return data;}var event=new SolidityEvent(this._requestManager,match,this._address);return event.decode(data);};AllSolidityEvents.prototype.execute=function(options,callback){if(utils.isFunction(arguments[arguments.length-1])){callback=arguments[arguments.length-1];if(arguments.length===1)options=null;}var o=this.encode(options);var formatter=this.decode.bind(this);return new Filter(this._requestManager,o,watches.eth(),formatter,callback);};AllSolidityEvents.prototype.attachToContract=function(contract){var execute=this.execute.bind(this);contract.allEvents=execute;};module.exports=AllSolidityEvents;},{"../utils/sha3":28,"../utils/utils":29,"./event":36,"./filter":38,"./formatters":39,"./methods/watches":51}],33:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//** 
 * @file batch.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */var Jsonrpc=require('./jsonrpc');var errors=require('./errors');var Batch=function(web3){this.requestManager=web3._requestManager;this.requests=[];};/**
 * Should be called to add create new request to batch request
 *
 * @method add
 * @param {Object} jsonrpc requet object
 */Batch.prototype.add=function(request){this.requests.push(request);};/**
 * Should be called to execute batch request
 *
 * @method execute
 */Batch.prototype.execute=function(){var requests=this.requests;this.requestManager.sendBatch(requests,function(err,results){results=results||[];requests.map(function(request,index){return results[index]||{};}).forEach(function(result,index){if(requests[index].callback){if(!Jsonrpc.getInstance().isValidResponse(result)){return requests[index].callback(errors.InvalidResponse(result));}requests[index].callback(null,requests[index].format?requests[index].format(result.result):result.result);}});});};module.exports=Batch;},{"./errors":35,"./jsonrpc":44}],34:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//**
 * @file contract.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2014
 */var utils=require('../utils/utils');var coder=require('../solidity/coder');var SolidityEvent=require('./event');var SolidityFunction=require('./function');var AllEvents=require('./allevents');/**
 * Should be called to encode constructor params
 *
 * @method encodeConstructorParams
 * @param {Array} abi
 * @param {Array} constructor params
 */var encodeConstructorParams=function(abi,params){return abi.filter(function(json){return json.type==='constructor'&&json.inputs.length===params.length;}).map(function(json){return json.inputs.map(function(input){return input.type;});}).map(function(types){return coder.encodeParams(types,params);})[0]||'';};/**
 * Should be called to add functions to contract object
 *
 * @method addFunctionsToContract
 * @param {Contract} contract
 * @param {Array} abi
 */var addFunctionsToContract=function(contract){contract.abi.filter(function(json){return json.type==='function';}).map(function(json){return new SolidityFunction(contract._eth,json,contract.address);}).forEach(function(f){f.attachToContract(contract);});};/**
 * Should be called to add events to contract object
 *
 * @method addEventsToContract
 * @param {Contract} contract
 * @param {Array} abi
 */var addEventsToContract=function(contract){var events=contract.abi.filter(function(json){return json.type==='event';});var All=new AllEvents(contract._eth._requestManager,events,contract.address);All.attachToContract(contract);events.map(function(json){return new SolidityEvent(contract._eth._requestManager,json,contract.address);}).forEach(function(e){e.attachToContract(contract);});};/**
 * Should be called to check if the contract gets properly deployed on the blockchain.
 *
 * @method checkForContractAddress
 * @param {Object} contract
 * @param {Function} callback
 * @returns {Undefined}
 */var checkForContractAddress=function(contract,callback){var count=0,callbackFired=false;// wait for receipt
var filter=contract._eth.filter('latest',function(e){if(!e&&!callbackFired){count++;// stop watching after 50 blocks (timeout)
if(count>50){filter.stopWatching();callbackFired=true;if(callback)callback(new Error('Contract transaction couldn\'t be found after 50 blocks'));else throw new Error('Contract transaction couldn\'t be found after 50 blocks');}else{contract._eth.getTransactionReceipt(contract.transactionHash,function(e,receipt){if(receipt&&!callbackFired){contract._eth.getCode(receipt.contractAddress,function(e,code){/*jshint maxcomplexity: 6 */if(callbackFired||!code)return;filter.stopWatching();callbackFired=true;if(code.length>2){// console.log('Contract code deployed!');
contract.address=receipt.contractAddress;// attach events and methods again after we have
addFunctionsToContract(contract);addEventsToContract(contract);// call callback for the second time
if(callback)callback(null,contract);}else{if(callback)callback(new Error('The contract code couldn\'t be stored, please check your gas amount.'));else throw new Error('The contract code couldn\'t be stored, please check your gas amount.');}});}});}}});};/**
 * Should be called to create new ContractFactory instance
 *
 * @method ContractFactory
 * @param {Array} abi
 */var ContractFactory=function(eth,abi){this.eth=eth;this.abi=abi;/**
     * Should be called to create new contract on a blockchain
     *
     * @method new
     * @param {Any} contract constructor param1 (optional)
     * @param {Any} contract constructor param2 (optional)
     * @param {Object} contract transaction object (required)
     * @param {Function} callback
     * @returns {Contract} returns contract instance
     */this.new=function(){var contract=new Contract(this.eth,this.abi);// parse arguments
var options={};// required!
var callback;var args=Array.prototype.slice.call(arguments);if(utils.isFunction(args[args.length-1])){callback=args.pop();}var last=args[args.length-1];if(utils.isObject(last)&&!utils.isArray(last)){options=args.pop();}var bytes=encodeConstructorParams(this.abi,args);options.data+=bytes;if(callback){// wait for the contract address adn check if the code was deployed
this.eth.sendTransaction(options,function(err,hash){if(err){callback(err);}else{// add the transaction hash
contract.transactionHash=hash;// call callback for the first time
callback(null,contract);checkForContractAddress(contract,callback);}});}else{var hash=this.eth.sendTransaction(options);// add the transaction hash
contract.transactionHash=hash;checkForContractAddress(contract);}return contract;};this.new.getData=this.getData.bind(this);};/**
 * Should be called to create new ContractFactory
 *
 * @method contract
 * @param {Array} abi
 * @returns {ContractFactory} new contract factory
 *///var contract = function (abi) {
//return new ContractFactory(abi);
//};
/**
 * Should be called to get access to existing contract on a blockchain
 *
 * @method at
 * @param {Address} contract address (required)
 * @param {Function} callback {optional)
 * @returns {Contract} returns contract if no callback was passed,
 * otherwise calls callback function (err, contract)
 */ContractFactory.prototype.at=function(address,callback){var contract=new Contract(this.eth,this.abi,address);// this functions are not part of prototype,
// because we dont want to spoil the interface
addFunctionsToContract(contract);addEventsToContract(contract);if(callback){callback(null,contract);}return contract;};/**
 * Gets the data, which is data to deploy plus constructor params
 *
 * @method getData
 */ContractFactory.prototype.getData=function(){var options={};// required!
var args=Array.prototype.slice.call(arguments);var last=args[args.length-1];if(utils.isObject(last)&&!utils.isArray(last)){options=args.pop();}var bytes=encodeConstructorParams(this.abi,args);options.data+=bytes;return options.data;};/**
 * Should be called to create new contract instance
 *
 * @method Contract
 * @param {Array} abi
 * @param {Address} contract address
 */var Contract=function(eth,abi,address){this._eth=eth;this.transactionHash=null;this.address=address;this.abi=abi;};module.exports=ContractFactory;},{"../solidity/coder":16,"../utils/utils":29,"./allevents":32,"./event":36,"./function":40}],35:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//** 
 * @file errors.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */module.exports={InvalidNumberOfParams:function(){return new Error('Invalid number of input parameters');},InvalidConnection:function(host){return new Error('CONNECTION ERROR: Couldn\'t connect to node '+host+'.');},InvalidProvider:function(){return new Error('Provider not set or invalid');},InvalidResponse:function(result){var message=!!result&&!!result.error&&!!result.error.message?result.error.message:'Invalid JSON RPC response: '+JSON.stringify(result);return new Error(message);}};},{}],36:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//** 
 * @file event.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2014
 */var utils=require('../utils/utils');var coder=require('../solidity/coder');var formatters=require('./formatters');var sha3=require('../utils/sha3');var Filter=require('./filter');var watches=require('./methods/watches');/**
 * This prototype should be used to create event filters
 */var SolidityEvent=function(requestManager,json,address){this._requestManager=requestManager;this._params=json.inputs;this._name=utils.transformToFullName(json);this._address=address;this._anonymous=json.anonymous;};/**
 * Should be used to get filtered param types
 *
 * @method types
 * @param {Bool} decide if returned typed should be indexed
 * @return {Array} array of types
 */SolidityEvent.prototype.types=function(indexed){return this._params.filter(function(i){return i.indexed===indexed;}).map(function(i){return i.type;});};/**
 * Should be used to get event display name
 *
 * @method displayName
 * @return {String} event display name
 */SolidityEvent.prototype.displayName=function(){return utils.extractDisplayName(this._name);};/**
 * Should be used to get event type name
 *
 * @method typeName
 * @return {String} event type name
 */SolidityEvent.prototype.typeName=function(){return utils.extractTypeName(this._name);};/**
 * Should be used to get event signature
 *
 * @method signature
 * @return {String} event signature
 */SolidityEvent.prototype.signature=function(){return sha3(this._name);};/**
 * Should be used to encode indexed params and options to one final object
 * 
 * @method encode
 * @param {Object} indexed
 * @param {Object} options
 * @return {Object} everything combined together and encoded
 */SolidityEvent.prototype.encode=function(indexed,options){indexed=indexed||{};options=options||{};var result={};['fromBlock','toBlock'].filter(function(f){return options[f]!==undefined;}).forEach(function(f){result[f]=formatters.inputBlockNumberFormatter(options[f]);});result.topics=[];result.address=this._address;if(!this._anonymous){result.topics.push('0x'+this.signature());}var indexedTopics=this._params.filter(function(i){return i.indexed===true;}).map(function(i){var value=indexed[i.name];if(value===undefined||value===null){return null;}if(utils.isArray(value)){return value.map(function(v){return'0x'+coder.encodeParam(i.type,v);});}return'0x'+coder.encodeParam(i.type,value);});result.topics=result.topics.concat(indexedTopics);return result;};/**
 * Should be used to decode indexed params and options
 *
 * @method decode
 * @param {Object} data
 * @return {Object} result object with decoded indexed && not indexed params
 */SolidityEvent.prototype.decode=function(data){data.data=data.data||'';data.topics=data.topics||[];var argTopics=this._anonymous?data.topics:data.topics.slice(1);var indexedData=argTopics.map(function(topics){return topics.slice(2);}).join("");var indexedParams=coder.decodeParams(this.types(true),indexedData);var notIndexedData=data.data.slice(2);var notIndexedParams=coder.decodeParams(this.types(false),notIndexedData);var result=formatters.outputLogFormatter(data);result.event=this.displayName();result.address=data.address;result.args=this._params.reduce(function(acc,current){acc[current.name]=current.indexed?indexedParams.shift():notIndexedParams.shift();return acc;},{});delete result.data;delete result.topics;return result;};/**
 * Should be used to create new filter object from event
 *
 * @method execute
 * @param {Object} indexed
 * @param {Object} options
 * @return {Object} filter object
 */SolidityEvent.prototype.execute=function(indexed,options,callback){if(utils.isFunction(arguments[arguments.length-1])){callback=arguments[arguments.length-1];if(arguments.length===2)options=null;if(arguments.length===1){options=null;indexed={};}}var o=this.encode(indexed,options);var formatter=this.decode.bind(this);return new Filter(this._requestManager,o,watches.eth(),formatter,callback);};/**
 * Should be used to attach event to contract object
 *
 * @method attachToContract
 * @param {Contract}
 */SolidityEvent.prototype.attachToContract=function(contract){var execute=this.execute.bind(this);var displayName=this.displayName();if(!contract[displayName]){contract[displayName]=execute;}contract[displayName][this.typeName()]=this.execute.bind(this,contract);};module.exports=SolidityEvent;},{"../solidity/coder":16,"../utils/sha3":28,"../utils/utils":29,"./filter":38,"./formatters":39,"./methods/watches":51}],37:[function(require,module,exports){var formatters=require('./formatters');var utils=require('./../utils/utils');var Method=require('./method');var Property=require('./property');// TODO: refactor, so the input params are not altered.
// it's necessary to make same 'extension' work with multiple providers
var extend=function(web3){/* jshint maxcomplexity:5 */var ex=function(extension){var extendedObject;if(extension.property){if(!web3[extension.property]){web3[extension.property]={};}extendedObject=web3[extension.property];}else{extendedObject=web3;}if(extension.methods){extension.methods.forEach(function(method){method.attachToObject(extendedObject);method.setRequestManager(web3._requestManager);});}if(extension.properties){extension.properties.forEach(function(property){property.attachToObject(extendedObject);property.setRequestManager(web3._requestManager);});}};ex.formatters=formatters;ex.utils=utils;ex.Method=Method;ex.Property=Property;return ex;};module.exports=extend;},{"./../utils/utils":29,"./formatters":39,"./method":45,"./property":53}],38:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//** @file filter.js
 * @authors:
 *   Jeffrey Wilcke <jeff@ethdev.com>
 *   Marek Kotewicz <marek@ethdev.com>
 *   Marian Oancea <marian@ethdev.com>
 *   Fabian Vogelsteller <fabian@ethdev.com>
 *   Gav Wood <g@ethdev.com>
 * @date 2014
 */var formatters=require('./formatters');var utils=require('../utils/utils');/**
* Converts a given topic to a hex string, but also allows null values.
*
* @param {Mixed} value
* @return {String}
*/var toTopic=function(value){if(value===null||typeof value==='undefined')return null;value=String(value);if(value.indexOf('0x')===0)return value;else return utils.fromUtf8(value);};/// This method should be called on options object, to verify deprecated properties && lazy load dynamic ones
/// @param should be string or object
/// @returns options string or object
var getOptions=function(options){if(utils.isString(options)){return options;}options=options||{};// make sure topics, get converted to hex
options.topics=options.topics||[];options.topics=options.topics.map(function(topic){return utils.isArray(topic)?topic.map(toTopic):toTopic(topic);});return{topics:options.topics,from:options.from,to:options.to,address:options.address,fromBlock:formatters.inputBlockNumberFormatter(options.fromBlock),toBlock:formatters.inputBlockNumberFormatter(options.toBlock)};};/**
Adds the callback and sets up the methods, to iterate over the results.

@method getLogsAtStart
@param {Object} self
@param {funciton}
*/var getLogsAtStart=function(self,callback){// call getFilterLogs for the first watch callback start
if(!utils.isString(self.options)){self.get(function(err,messages){// don't send all the responses to all the watches again... just to self one
if(err){callback(err);}if(utils.isArray(messages)){messages.forEach(function(message){callback(null,message);});}});}};/**
Adds the callback and sets up the methods, to iterate over the results.

@method pollFilter
@param {Object} self
*/var pollFilter=function(self){var onMessage=function(error,messages){if(error){return self.callbacks.forEach(function(callback){callback(error);});}if(utils.isArray(messages)){messages.forEach(function(message){message=self.formatter?self.formatter(message):message;self.callbacks.forEach(function(callback){callback(null,message);});});}};self.requestManager.startPolling({method:self.implementation.poll.call,params:[self.filterId]},self.filterId,onMessage,self.stopWatching.bind(self));};var Filter=function(requestManager,options,methods,formatter,callback){var self=this;var implementation={};methods.forEach(function(method){method.setRequestManager(requestManager);method.attachToObject(implementation);});this.requestManager=requestManager;this.options=getOptions(options);this.implementation=implementation;this.filterId=null;this.callbacks=[];this.getLogsCallbacks=[];this.pollFilters=[];this.formatter=formatter;this.implementation.newFilter(this.options,function(error,id){if(error){self.callbacks.forEach(function(cb){cb(error);});}else{self.filterId=id;// check if there are get pending callbacks as a consequence
// of calling get() with filterId unassigned.
self.getLogsCallbacks.forEach(function(cb){self.get(cb);});self.getLogsCallbacks=[];// get filter logs for the already existing watch calls
self.callbacks.forEach(function(cb){getLogsAtStart(self,cb);});if(self.callbacks.length>0)pollFilter(self);// start to watch immediately
if(typeof callback==='function'){return self.watch(callback);}}});return this;};Filter.prototype.watch=function(callback){this.callbacks.push(callback);if(this.filterId){getLogsAtStart(this,callback);pollFilter(this);}return this;};Filter.prototype.stopWatching=function(){this.requestManager.stopPolling(this.filterId);// remove filter async
this.implementation.uninstallFilter(this.filterId,function(){});this.callbacks=[];};Filter.prototype.get=function(callback){var self=this;if(utils.isFunction(callback)){if(this.filterId===null){// If filterId is not set yet, call it back
// when newFilter() assigns it.
this.getLogsCallbacks.push(callback);}else{this.implementation.getLogs(this.filterId,function(err,res){if(err){callback(err);}else{callback(null,res.map(function(log){return self.formatter?self.formatter(log):log;}));}});}}else{if(this.filterId===null){throw new Error('Filter ID Error: filter().get() can\'t be chained synchronous, please provide a callback for the get() method.');}var logs=this.implementation.getLogs(this.filterId);return logs.map(function(log){return self.formatter?self.formatter(log):log;});}return this;};module.exports=Filter;},{"../utils/utils":29,"./formatters":39}],39:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//** 
 * @file formatters.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @author Fabian Vogelsteller <fabian@ethdev.com>
 * @date 2015
 */var utils=require('../utils/utils');var config=require('../utils/config');var Iban=require('./iban');/**
 * Should the format output to a big number
 *
 * @method outputBigNumberFormatter
 * @param {String|Number|BigNumber}
 * @returns {BigNumber} object
 */var outputBigNumberFormatter=function(number){return utils.toBigNumber(number);};var isPredefinedBlockNumber=function(blockNumber){return blockNumber==='latest'||blockNumber==='pending'||blockNumber==='earliest';};var inputDefaultBlockNumberFormatter=function(blockNumber){if(blockNumber===undefined){return config.defaultBlock;}return inputBlockNumberFormatter(blockNumber);};var inputBlockNumberFormatter=function(blockNumber){if(blockNumber===undefined){return undefined;}else if(isPredefinedBlockNumber(blockNumber)){return blockNumber;}return utils.toHex(blockNumber);};/**
 * Formats the input of a transaction and converts all values to HEX
 *
 * @method inputCallFormatter
 * @param {Object} transaction options
 * @returns object
*/var inputCallFormatter=function(options){options.from=options.from||config.defaultAccount;if(options.from){options.from=inputAddressFormatter(options.from);}if(options.to){// it might be contract creation
options.to=inputAddressFormatter(options.to);}['gasPrice','gas','value','nonce'].filter(function(key){return options[key]!==undefined;}).forEach(function(key){options[key]=utils.fromDecimal(options[key]);});return options;};/**
 * Formats the input of a transaction and converts all values to HEX
 *
 * @method inputTransactionFormatter
 * @param {Object} transaction options
 * @returns object
*/var inputTransactionFormatter=function(options){options.from=options.from||config.defaultAccount;options.from=inputAddressFormatter(options.from);if(options.to){// it might be contract creation
options.to=inputAddressFormatter(options.to);}['gasPrice','gas','value','nonce'].filter(function(key){return options[key]!==undefined;}).forEach(function(key){options[key]=utils.fromDecimal(options[key]);});return options;};/**
 * Formats the output of a transaction to its proper values
 * 
 * @method outputTransactionFormatter
 * @param {Object} tx
 * @returns {Object}
*/var outputTransactionFormatter=function(tx){if(tx.blockNumber!==null)tx.blockNumber=utils.toDecimal(tx.blockNumber);if(tx.transactionIndex!==null)tx.transactionIndex=utils.toDecimal(tx.transactionIndex);tx.nonce=utils.toDecimal(tx.nonce);tx.gas=utils.toDecimal(tx.gas);tx.gasPrice=utils.toBigNumber(tx.gasPrice);tx.value=utils.toBigNumber(tx.value);return tx;};/**
 * Formats the output of a transaction receipt to its proper values
 * 
 * @method outputTransactionReceiptFormatter
 * @param {Object} receipt
 * @returns {Object}
*/var outputTransactionReceiptFormatter=function(receipt){if(receipt.blockNumber!==null)receipt.blockNumber=utils.toDecimal(receipt.blockNumber);if(receipt.transactionIndex!==null)receipt.transactionIndex=utils.toDecimal(receipt.transactionIndex);receipt.cumulativeGasUsed=utils.toDecimal(receipt.cumulativeGasUsed);receipt.gasUsed=utils.toDecimal(receipt.gasUsed);if(utils.isArray(receipt.logs)){receipt.logs=receipt.logs.map(function(log){return outputLogFormatter(log);});}return receipt;};/**
 * Formats the output of a block to its proper values
 *
 * @method outputBlockFormatter
 * @param {Object} block 
 * @returns {Object}
*/var outputBlockFormatter=function(block){// transform to number
block.gasLimit=utils.toDecimal(block.gasLimit);block.gasUsed=utils.toDecimal(block.gasUsed);block.size=utils.toDecimal(block.size);block.timestamp=utils.toDecimal(block.timestamp);if(block.number!==null)block.number=utils.toDecimal(block.number);block.difficulty=utils.toBigNumber(block.difficulty);block.totalDifficulty=utils.toBigNumber(block.totalDifficulty);if(utils.isArray(block.transactions)){block.transactions.forEach(function(item){if(!utils.isString(item))return outputTransactionFormatter(item);});}return block;};/**
 * Formats the output of a log
 * 
 * @method outputLogFormatter
 * @param {Object} log object
 * @returns {Object} log
*/var outputLogFormatter=function(log){if(log.blockNumber!==null)log.blockNumber=utils.toDecimal(log.blockNumber);if(log.transactionIndex!==null)log.transactionIndex=utils.toDecimal(log.transactionIndex);if(log.logIndex!==null)log.logIndex=utils.toDecimal(log.logIndex);return log;};/**
 * Formats the input of a whisper post and converts all values to HEX
 *
 * @method inputPostFormatter
 * @param {Object} transaction object
 * @returns {Object}
*/var inputPostFormatter=function(post){// post.payload = utils.toHex(post.payload);
post.ttl=utils.fromDecimal(post.ttl);post.workToProve=utils.fromDecimal(post.workToProve);post.priority=utils.fromDecimal(post.priority);// fallback
if(!utils.isArray(post.topics)){post.topics=post.topics?[post.topics]:[];}// format the following options
post.topics=post.topics.map(function(topic){// convert only if not hex
return topic.indexOf('0x')===0?topic:utils.fromUtf8(topic);});return post;};/**
 * Formats the output of a received post message
 *
 * @method outputPostFormatter
 * @param {Object}
 * @returns {Object}
 */var outputPostFormatter=function(post){post.expiry=utils.toDecimal(post.expiry);post.sent=utils.toDecimal(post.sent);post.ttl=utils.toDecimal(post.ttl);post.workProved=utils.toDecimal(post.workProved);// post.payloadRaw = post.payload;
// post.payload = utils.toAscii(post.payload);
// if (utils.isJson(post.payload)) {
//     post.payload = JSON.parse(post.payload);
// }
// format the following options
if(!post.topics){post.topics=[];}post.topics=post.topics.map(function(topic){return utils.toAscii(topic);});return post;};var inputAddressFormatter=function(address){var iban=new Iban(address);if(iban.isValid()&&iban.isDirect()){return'0x'+iban.address();}else if(utils.isStrictAddress(address)){return address;}else if(utils.isAddress(address)){return'0x'+address;}throw'invalid address';};var outputSyncingFormatter=function(result){result.startingBlock=utils.toDecimal(result.startingBlock);result.currentBlock=utils.toDecimal(result.currentBlock);result.highestBlock=utils.toDecimal(result.highestBlock);return result;};module.exports={inputDefaultBlockNumberFormatter:inputDefaultBlockNumberFormatter,inputBlockNumberFormatter:inputBlockNumberFormatter,inputCallFormatter:inputCallFormatter,inputTransactionFormatter:inputTransactionFormatter,inputAddressFormatter:inputAddressFormatter,inputPostFormatter:inputPostFormatter,outputBigNumberFormatter:outputBigNumberFormatter,outputTransactionFormatter:outputTransactionFormatter,outputTransactionReceiptFormatter:outputTransactionReceiptFormatter,outputBlockFormatter:outputBlockFormatter,outputLogFormatter:outputLogFormatter,outputPostFormatter:outputPostFormatter,outputSyncingFormatter:outputSyncingFormatter};},{"../utils/config":27,"../utils/utils":29,"./iban":42}],40:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//**
 * @file function.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */var coder=require('../solidity/coder');var utils=require('../utils/utils');var formatters=require('./formatters');var sha3=require('../utils/sha3');/**
 * This prototype should be used to call/sendTransaction to solidity functions
 */var SolidityFunction=function(eth,json,address){this._eth=eth;this._inputTypes=json.inputs.map(function(i){return i.type;});this._outputTypes=json.outputs.map(function(i){return i.type;});this._constant=json.constant;this._name=utils.transformToFullName(json);this._address=address;};SolidityFunction.prototype.extractCallback=function(args){if(utils.isFunction(args[args.length-1])){return args.pop();// modify the args array!
}};SolidityFunction.prototype.extractDefaultBlock=function(args){if(args.length>this._inputTypes.length&&!utils.isObject(args[args.length-1])){return formatters.inputDefaultBlockNumberFormatter(args.pop());// modify the args array!
}};/**
 * Should be used to create payload from arguments
 *
 * @method toPayload
 * @param {Array} solidity function params
 * @param {Object} optional payload options
 */SolidityFunction.prototype.toPayload=function(args){var options={};if(args.length>this._inputTypes.length&&utils.isObject(args[args.length-1])){options=args[args.length-1];}options.to=this._address;options.data='0x'+this.signature()+coder.encodeParams(this._inputTypes,args);return options;};/**
 * Should be used to get function signature
 *
 * @method signature
 * @return {String} function signature
 */SolidityFunction.prototype.signature=function(){return sha3(this._name).slice(0,8);};SolidityFunction.prototype.unpackOutput=function(output){if(!output){return;}output=output.length>=2?output.slice(2):output;var result=coder.decodeParams(this._outputTypes,output);return result.length===1?result[0]:result;};/**
 * Calls a contract function.
 *
 * @method call
 * @param {...Object} Contract function arguments
 * @param {function} If the last argument is a function, the contract function
 *   call will be asynchronous, and the callback will be passed the
 *   error and result.
 * @return {String} output bytes
 */SolidityFunction.prototype.call=function(){var args=Array.prototype.slice.call(arguments).filter(function(a){return a!==undefined;});var callback=this.extractCallback(args);var defaultBlock=this.extractDefaultBlock(args);var payload=this.toPayload(args);if(!callback){var output=this._eth.call(payload,defaultBlock);return this.unpackOutput(output);}var self=this;this._eth.call(payload,defaultBlock,function(error,output){callback(error,self.unpackOutput(output));});};/**
 * Should be used to sendTransaction to solidity function
 *
 * @method sendTransaction
 */SolidityFunction.prototype.sendTransaction=function(){var args=Array.prototype.slice.call(arguments).filter(function(a){return a!==undefined;});var callback=this.extractCallback(args);var payload=this.toPayload(args);if(!callback){return this._eth.sendTransaction(payload);}this._eth.sendTransaction(payload,callback);};/**
 * Should be used to estimateGas of solidity function
 *
 * @method estimateGas
 */SolidityFunction.prototype.estimateGas=function(){var args=Array.prototype.slice.call(arguments);var callback=this.extractCallback(args);var payload=this.toPayload(args);if(!callback){return this._eth.estimateGas(payload);}this._eth.estimateGas(payload,callback);};/**
 * Return the encoded data of the call
 *
 * @method getData
 * @return {String} the encoded data
 */SolidityFunction.prototype.getData=function(){var args=Array.prototype.slice.call(arguments);var payload=this.toPayload(args);return payload.data;};/**
 * Should be used to get function display name
 *
 * @method displayName
 * @return {String} display name of the function
 */SolidityFunction.prototype.displayName=function(){return utils.extractDisplayName(this._name);};/**
 * Should be used to get function type name
 *
 * @method typeName
 * @return {String} type name of the function
 */SolidityFunction.prototype.typeName=function(){return utils.extractTypeName(this._name);};/**
 * Should be called to get rpc requests from solidity function
 *
 * @method request
 * @returns {Object}
 */SolidityFunction.prototype.request=function(){var args=Array.prototype.slice.call(arguments);var callback=this.extractCallback(args);var payload=this.toPayload(args);var format=this.unpackOutput.bind(this);return{method:this._constant?'eth_call':'eth_sendTransaction',callback:callback,params:[payload],format:format};};/**
 * Should be called to execute function
 *
 * @method execute
 */SolidityFunction.prototype.execute=function(){var transaction=!this._constant;// send transaction
if(transaction){return this.sendTransaction.apply(this,Array.prototype.slice.call(arguments));}// call
return this.call.apply(this,Array.prototype.slice.call(arguments));};/**
 * Should be called to attach function to contract
 *
 * @method attachToContract
 * @param {Contract}
 */SolidityFunction.prototype.attachToContract=function(contract){var execute=this.execute.bind(this);execute.request=this.request.bind(this);execute.call=this.call.bind(this);execute.sendTransaction=this.sendTransaction.bind(this);execute.estimateGas=this.estimateGas.bind(this);execute.getData=this.getData.bind(this);var displayName=this.displayName();if(!contract[displayName]){contract[displayName]=execute;}contract[displayName][this.typeName()]=execute;// circular!!!!
};module.exports=SolidityFunction;},{"../solidity/coder":16,"../utils/sha3":28,"../utils/utils":29,"./formatters":39}],41:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//** @file httpprovider.js
 * @authors:
 *   Marek Kotewicz <marek@ethdev.com>
 *   Marian Oancea <marian@ethdev.com>
 *   Fabian Vogelsteller <fabian@ethdev.com>
 * @date 2015
 */"use strict";var errors=require('./errors');// workaround to use httpprovider in different envs
var XMLHttpRequest;// jshint ignore: line
// meteor server environment
if(typeof Meteor!=='undefined'&&Meteor.isServer){// jshint ignore: line
XMLHttpRequest=Npm.require('xmlhttprequest').XMLHttpRequest;// jshint ignore: line
// browser
}else if(typeof window!=='undefined'&&window.XMLHttpRequest){XMLHttpRequest=window.XMLHttpRequest;// jshint ignore: line
// node
}else{XMLHttpRequest=require('xmlhttprequest').XMLHttpRequest;// jshint ignore: line
}/**
 * HttpProvider should be used to send rpc calls over http
 */var HttpProvider=function(host){this.host=host||'http://localhost:8545';};/**
 * Should be called to prepare new XMLHttpRequest
 *
 * @method prepareRequest
 * @param {Boolean} true if request should be async
 * @return {XMLHttpRequest} object
 */HttpProvider.prototype.prepareRequest=function(async){var request=new XMLHttpRequest();request.open('POST',this.host,async);request.setRequestHeader('Content-Type','application/json');return request;};/**
 * Should be called to make sync request
 *
 * @method send
 * @param {Object} payload
 * @return {Object} result
 */HttpProvider.prototype.send=function(payload){var request=this.prepareRequest(false);try{request.send(JSON.stringify(payload));}catch(error){throw errors.InvalidConnection(this.host);}var result=request.responseText;try{result=JSON.parse(result);}catch(e){throw errors.InvalidResponse(request.responseText);}return result;};/**
 * Should be used to make async request
 *
 * @method sendAsync
 * @param {Object} payload
 * @param {Function} callback triggered on end with (err, result)
 */HttpProvider.prototype.sendAsync=function(payload,callback){var request=this.prepareRequest(true);request.onreadystatechange=function(){if(request.readyState===4){var result=request.responseText;var error=null;try{result=JSON.parse(result);}catch(e){error=errors.InvalidResponse(request.responseText);}callback(error,result);}};try{request.send(JSON.stringify(payload));}catch(error){callback(errors.InvalidConnection(this.host));}};/**
 * Synchronously tries to make Http request
 *
 * @method isConnected
 * @return {Boolean} returns true if request haven't failed. Otherwise false
 */HttpProvider.prototype.isConnected=function(){try{this.send({id:9999999999,jsonrpc:'2.0',method:'net_listening',params:[]});return true;}catch(e){return false;}};module.exports=HttpProvider;},{"./errors":35,"xmlhttprequest":26}],42:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//** 
 * @file iban.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */var BigNumber=require('bignumber.js');var padLeft=function(string,bytes){var result=string;while(result.length<bytes*2){result='00'+result;}return result;};/**
 * Prepare an IBAN for mod 97 computation by moving the first 4 chars to the end and transforming the letters to
 * numbers (A = 10, B = 11, ..., Z = 35), as specified in ISO13616.
 *
 * @method iso13616Prepare
 * @param {String} iban the IBAN
 * @returns {String} the prepared IBAN
 */var iso13616Prepare=function(iban){var A='A'.charCodeAt(0);var Z='Z'.charCodeAt(0);iban=iban.toUpperCase();iban=iban.substr(4)+iban.substr(0,4);return iban.split('').map(function(n){var code=n.charCodeAt(0);if(code>=A&&code<=Z){// A = 10, B = 11, ... Z = 35
return code-A+10;}else{return n;}}).join('');};/**
 * Calculates the MOD 97 10 of the passed IBAN as specified in ISO7064.
 *
 * @method mod9710
 * @param {String} iban
 * @returns {Number}
 */var mod9710=function(iban){var remainder=iban,block;while(remainder.length>2){block=remainder.slice(0,9);remainder=parseInt(block,10)%97+remainder.slice(block.length);}return parseInt(remainder,10)%97;};/**
 * This prototype should be used to create iban object from iban correct string
 *
 * @param {String} iban
 */var Iban=function(iban){this._iban=iban;};/**
 * This method should be used to create iban object from ethereum address
 *
 * @method fromAddress
 * @param {String} address
 * @return {Iban} the IBAN object
 */Iban.fromAddress=function(address){var asBn=new BigNumber(address,16);var base36=asBn.toString(36);var padded=padLeft(base36,15);return Iban.fromBban(padded.toUpperCase());};/**
 * Convert the passed BBAN to an IBAN for this country specification.
 * Please note that <i>"generation of the IBAN shall be the exclusive responsibility of the bank/branch servicing the account"</i>.
 * This method implements the preferred algorithm described in http://en.wikipedia.org/wiki/International_Bank_Account_Number#Generating_IBAN_check_digits
 *
 * @method fromBban
 * @param {String} bban the BBAN to convert to IBAN
 * @returns {Iban} the IBAN object
 */Iban.fromBban=function(bban){var countryCode='XE';var remainder=mod9710(iso13616Prepare(countryCode+'00'+bban));var checkDigit=('0'+(98-remainder)).slice(-2);return new Iban(countryCode+checkDigit+bban);};/**
 * Should be used to create IBAN object for given institution and identifier
 *
 * @method createIndirect
 * @param {Object} options, required options are "institution" and "identifier"
 * @return {Iban} the IBAN object
 */Iban.createIndirect=function(options){return Iban.fromBban('ETH'+options.institution+options.identifier);};/**
 * Thos method should be used to check if given string is valid iban object
 *
 * @method isValid
 * @param {String} iban string
 * @return {Boolean} true if it is valid IBAN
 */Iban.isValid=function(iban){var i=new Iban(iban);return i.isValid();};/**
 * Should be called to check if iban is correct
 *
 * @method isValid
 * @returns {Boolean} true if it is, otherwise false
 */Iban.prototype.isValid=function(){return (/^XE[0-9]{2}(ETH[0-9A-Z]{13}|[0-9A-Z]{30,31})$/.test(this._iban)&&mod9710(iso13616Prepare(this._iban))===1);};/**
 * Should be called to check if iban number is direct
 *
 * @method isDirect
 * @returns {Boolean} true if it is, otherwise false
 */Iban.prototype.isDirect=function(){return this._iban.length===34||this._iban.length===35;};/**
 * Should be called to check if iban number if indirect
 *
 * @method isIndirect
 * @returns {Boolean} true if it is, otherwise false
 */Iban.prototype.isIndirect=function(){return this._iban.length===20;};/**
 * Should be called to get iban checksum
 * Uses the mod-97-10 checksumming protocol (ISO/IEC 7064:2003)
 *
 * @method checksum
 * @returns {String} checksum
 */Iban.prototype.checksum=function(){return this._iban.substr(2,2);};/**
 * Should be called to get institution identifier
 * eg. XREG
 *
 * @method institution
 * @returns {String} institution identifier
 */Iban.prototype.institution=function(){return this.isIndirect()?this._iban.substr(7,4):'';};/**
 * Should be called to get client identifier within institution
 * eg. GAVOFYORK
 *
 * @method client
 * @returns {String} client identifier
 */Iban.prototype.client=function(){return this.isIndirect()?this._iban.substr(11):'';};/**
 * Should be called to get client direct address
 *
 * @method address
 * @returns {String} client direct address
 */Iban.prototype.address=function(){if(this.isDirect()){var base36=this._iban.substr(4);var asBn=new BigNumber(base36,36);return padLeft(asBn.toString(16),20);}return'';};Iban.prototype.toString=function(){return this._iban;};module.exports=Iban;},{"bignumber.js":58}],43:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//** @file ipcprovider.js
 * @authors:
 *   Fabian Vogelsteller <fabian@ethdev.com>
 * @date 2015
 */"use strict";var utils=require('../utils/utils');var errors=require('./errors');var IpcProvider=function(path,net){var _this=this;this.responseCallbacks={};this.path=path;this.connection=net.connect({path:this.path});this.connection.on('error',function(e){console.error('IPC Connection Error',e);_this._timeout();});this.connection.on('end',function(){_this._timeout();});// LISTEN FOR CONNECTION RESPONSES
this.connection.on('data',function(data){/*jshint maxcomplexity: 6 */_this._parseResponse(data.toString()).forEach(function(result){var id=null;// get the id which matches the returned id
if(utils.isArray(result)){result.forEach(function(load){if(_this.responseCallbacks[load.id])id=load.id;});}else{id=result.id;}// fire the callback
if(_this.responseCallbacks[id]){_this.responseCallbacks[id](null,result);delete _this.responseCallbacks[id];}});});};/**
Will parse the response and make an array out of it.

@method _parseResponse
@param {String} data
*/IpcProvider.prototype._parseResponse=function(data){var _this=this,returnValues=[];// DE-CHUNKER
var dechunkedData=data.replace(/\}[\n\r]?\{/g,'}|--|{')// }{
.replace(/\}\][\n\r]?\[\{/g,'}]|--|[{')// }][{
.replace(/\}[\n\r]?\[\{/g,'}|--|[{')// }[{
.replace(/\}\][\n\r]?\{/g,'}]|--|{')// }]{
.split('|--|');dechunkedData.forEach(function(data){// prepend the last chunk
if(_this.lastChunk)data=_this.lastChunk+data;var result=null;try{result=JSON.parse(data);}catch(e){_this.lastChunk=data;// start timeout to cancel all requests
clearTimeout(_this.lastChunkTimeout);_this.lastChunkTimeout=setTimeout(function(){_this._timeout();throw errors.InvalidResponse(data);},1000*15);return;}// cancel timeout and set chunk to null
clearTimeout(_this.lastChunkTimeout);_this.lastChunk=null;if(result)returnValues.push(result);});return returnValues;};/**
Get the adds a callback to the responseCallbacks object,
which will be called if a response matching the response Id will arrive.

@method _addResponseCallback
*/IpcProvider.prototype._addResponseCallback=function(payload,callback){var id=payload.id||payload[0].id;var method=payload.method||payload[0].method;this.responseCallbacks[id]=callback;this.responseCallbacks[id].method=method;};/**
Timeout all requests when the end/error event is fired

@method _timeout
*/IpcProvider.prototype._timeout=function(){for(var key in this.responseCallbacks){if(this.responseCallbacks.hasOwnProperty(key)){this.responseCallbacks[key](errors.InvalidConnection('on IPC'));delete this.responseCallbacks[key];}}};/**
Check if the current connection is still valid.

@method isConnected
*/IpcProvider.prototype.isConnected=function(){var _this=this;// try reconnect, when connection is gone
if(!_this.connection.writable)_this.connection.connect({path:_this.path});return!!this.connection.writable;};IpcProvider.prototype.send=function(payload){if(this.connection.writeSync){var result;// try reconnect, when connection is gone
if(!this.connection.writable)this.connection.connect({path:this.path});var data=this.connection.writeSync(JSON.stringify(payload));try{result=JSON.parse(data);}catch(e){throw errors.InvalidResponse(data);}return result;}else{throw new Error('You tried to send "'+payload.method+'" synchronously. Synchronous requests are not supported by the IPC provider.');}};IpcProvider.prototype.sendAsync=function(payload,callback){// try reconnect, when connection is gone
if(!this.connection.writable)this.connection.connect({path:this.path});this.connection.write(JSON.stringify(payload));this._addResponseCallback(payload,callback);};module.exports=IpcProvider;},{"../utils/utils":29,"./errors":35}],44:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//** @file jsonrpc.js
 * @authors:
 *   Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */var Jsonrpc=function(){// singleton pattern
if(arguments.callee._singletonInstance){return arguments.callee._singletonInstance;}arguments.callee._singletonInstance=this;this.messageId=1;};/**
 * @return {Jsonrpc} singleton
 */Jsonrpc.getInstance=function(){var instance=new Jsonrpc();return instance;};/**
 * Should be called to valid json create payload object
 *
 * @method toPayload
 * @param {Function} method of jsonrpc call, required
 * @param {Array} params, an array of method params, optional
 * @returns {Object} valid jsonrpc payload object
 */Jsonrpc.prototype.toPayload=function(method,params){if(!method)console.error('jsonrpc method should be specified!');return{jsonrpc:'2.0',method:method,params:params||[],id:this.messageId++};};/**
 * Should be called to check if jsonrpc response is valid
 *
 * @method isValidResponse
 * @param {Object}
 * @returns {Boolean} true if response is valid, otherwise false
 */Jsonrpc.prototype.isValidResponse=function(response){return!!response&&!response.error&&response.jsonrpc==='2.0'&&typeof response.id==='number'&&response.result!==undefined;// only undefined is not valid json object
};/**
 * Should be called to create batch payload object
 *
 * @method toBatchPayload
 * @param {Array} messages, an array of objects with method (required) and params (optional) fields
 * @returns {Array} batch payload
 */Jsonrpc.prototype.toBatchPayload=function(messages){var self=this;return messages.map(function(message){return self.toPayload(message.method,message.params);});};module.exports=Jsonrpc;},{}],45:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//**
 * @file method.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */var utils=require('../utils/utils');var errors=require('./errors');var Method=function(options){this.name=options.name;this.call=options.call;this.params=options.params||0;this.inputFormatter=options.inputFormatter;this.outputFormatter=options.outputFormatter;this.requestManager=null;};Method.prototype.setRequestManager=function(rm){this.requestManager=rm;};/**
 * Should be used to determine name of the jsonrpc method based on arguments
 *
 * @method getCall
 * @param {Array} arguments
 * @return {String} name of jsonrpc method
 */Method.prototype.getCall=function(args){return utils.isFunction(this.call)?this.call(args):this.call;};/**
 * Should be used to extract callback from array of arguments. Modifies input param
 *
 * @method extractCallback
 * @param {Array} arguments
 * @return {Function|Null} callback, if exists
 */Method.prototype.extractCallback=function(args){if(utils.isFunction(args[args.length-1])){return args.pop();// modify the args array!
}};/**
 * Should be called to check if the number of arguments is correct
 * 
 * @method validateArgs
 * @param {Array} arguments
 * @throws {Error} if it is not
 */Method.prototype.validateArgs=function(args){if(args.length!==this.params){throw errors.InvalidNumberOfParams();}};/**
 * Should be called to format input args of method
 * 
 * @method formatInput
 * @param {Array}
 * @return {Array}
 */Method.prototype.formatInput=function(args){if(!this.inputFormatter){return args;}return this.inputFormatter.map(function(formatter,index){return formatter?formatter(args[index]):args[index];});};/**
 * Should be called to format output(result) of method
 *
 * @method formatOutput
 * @param {Object}
 * @return {Object}
 */Method.prototype.formatOutput=function(result){return this.outputFormatter&&result?this.outputFormatter(result):result;};/**
 * Should create payload from given input args
 *
 * @method toPayload
 * @param {Array} args
 * @return {Object}
 */Method.prototype.toPayload=function(args){var call=this.getCall(args);var callback=this.extractCallback(args);var params=this.formatInput(args);this.validateArgs(params);return{method:call,params:params,callback:callback};};Method.prototype.attachToObject=function(obj){var func=this.buildCall();func.call=this.call;// TODO!!! that's ugly. filter.js uses it
var name=this.name.split('.');if(name.length>1){obj[name[0]]=obj[name[0]]||{};obj[name[0]][name[1]]=func;}else{obj[name[0]]=func;}};Method.prototype.buildCall=function(){var method=this;var send=function(){var payload=method.toPayload(Array.prototype.slice.call(arguments));if(payload.callback){return method.requestManager.sendAsync(payload,function(err,result){payload.callback(err,method.formatOutput(result));});}return method.formatOutput(method.requestManager.send(payload));};send.request=this.request.bind(this);return send;};/**
 * Should be called to create pure JSONRPC request which can be used in batch request
 *
 * @method request
 * @param {...} params
 * @return {Object} jsonrpc request
 */Method.prototype.request=function(){var payload=this.toPayload(Array.prototype.slice.call(arguments));payload.format=this.formatOutput.bind(this);return payload;};module.exports=Method;},{"../utils/utils":29,"./errors":35}],46:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//** @file db.js
 * @authors:
 *   Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */var Method=require('../method');var DB=function(web3){this._requestManager=web3._requestManager;var self=this;methods().forEach(function(method){method.attachToObject(self);method.setRequestManager(web3._requestManager);});};var methods=function(){var putString=new Method({name:'putString',call:'db_putString',params:3});var getString=new Method({name:'getString',call:'db_getString',params:2});var putHex=new Method({name:'putHex',call:'db_putHex',params:3});var getHex=new Method({name:'getHex',call:'db_getHex',params:2});return[putString,getString,putHex,getHex];};module.exports=DB;},{"../method":45}],47:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//**
 * @file eth.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @author Fabian Vogelsteller <fabian@ethdev.com>
 * @date 2015
 */"use strict";var formatters=require('../formatters');var utils=require('../../utils/utils');var Method=require('../method');var Property=require('../property');var c=require('../../utils/config');var Contract=require('../contract');var watches=require('./watches');var Filter=require('../filter');var IsSyncing=require('../syncing');var namereg=require('../namereg');var Iban=require('../iban');var transfer=require('../transfer');var blockCall=function(args){return utils.isString(args[0])&&args[0].indexOf('0x')===0?"eth_getBlockByHash":"eth_getBlockByNumber";};var transactionFromBlockCall=function(args){return utils.isString(args[0])&&args[0].indexOf('0x')===0?'eth_getTransactionByBlockHashAndIndex':'eth_getTransactionByBlockNumberAndIndex';};var uncleCall=function(args){return utils.isString(args[0])&&args[0].indexOf('0x')===0?'eth_getUncleByBlockHashAndIndex':'eth_getUncleByBlockNumberAndIndex';};var getBlockTransactionCountCall=function(args){return utils.isString(args[0])&&args[0].indexOf('0x')===0?'eth_getBlockTransactionCountByHash':'eth_getBlockTransactionCountByNumber';};var uncleCountCall=function(args){return utils.isString(args[0])&&args[0].indexOf('0x')===0?'eth_getUncleCountByBlockHash':'eth_getUncleCountByBlockNumber';};function Eth(web3){this._requestManager=web3._requestManager;var self=this;methods().forEach(function(method){method.attachToObject(self);method.setRequestManager(self._requestManager);});properties().forEach(function(p){p.attachToObject(self);p.setRequestManager(self._requestManager);});this.iban=Iban;this.sendIBANTransaction=transfer.bind(null,this);}Object.defineProperty(Eth.prototype,'defaultBlock',{get:function(){return c.defaultBlock;},set:function(val){c.defaultBlock=val;return val;}});Object.defineProperty(Eth.prototype,'defaultAccount',{get:function(){return c.defaultAccount;},set:function(val){c.defaultAccount=val;return val;}});var methods=function(){var getBalance=new Method({name:'getBalance',call:'eth_getBalance',params:2,inputFormatter:[formatters.inputAddressFormatter,formatters.inputDefaultBlockNumberFormatter],outputFormatter:formatters.outputBigNumberFormatter});var getStorageAt=new Method({name:'getStorageAt',call:'eth_getStorageAt',params:3,inputFormatter:[null,utils.toHex,formatters.inputDefaultBlockNumberFormatter]});var getCode=new Method({name:'getCode',call:'eth_getCode',params:2,inputFormatter:[formatters.inputAddressFormatter,formatters.inputDefaultBlockNumberFormatter]});var getBlock=new Method({name:'getBlock',call:blockCall,params:2,inputFormatter:[formatters.inputBlockNumberFormatter,function(val){return!!val;}],outputFormatter:formatters.outputBlockFormatter});var getUncle=new Method({name:'getUncle',call:uncleCall,params:2,inputFormatter:[formatters.inputBlockNumberFormatter,utils.toHex],outputFormatter:formatters.outputBlockFormatter});var getCompilers=new Method({name:'getCompilers',call:'eth_getCompilers',params:0});var getBlockTransactionCount=new Method({name:'getBlockTransactionCount',call:getBlockTransactionCountCall,params:1,inputFormatter:[formatters.inputBlockNumberFormatter],outputFormatter:utils.toDecimal});var getBlockUncleCount=new Method({name:'getBlockUncleCount',call:uncleCountCall,params:1,inputFormatter:[formatters.inputBlockNumberFormatter],outputFormatter:utils.toDecimal});var getTransaction=new Method({name:'getTransaction',call:'eth_getTransactionByHash',params:1,outputFormatter:formatters.outputTransactionFormatter});var getTransactionFromBlock=new Method({name:'getTransactionFromBlock',call:transactionFromBlockCall,params:2,inputFormatter:[formatters.inputBlockNumberFormatter,utils.toHex],outputFormatter:formatters.outputTransactionFormatter});var getTransactionReceipt=new Method({name:'getTransactionReceipt',call:'eth_getTransactionReceipt',params:1,outputFormatter:formatters.outputTransactionReceiptFormatter});var getTransactionCount=new Method({name:'getTransactionCount',call:'eth_getTransactionCount',params:2,inputFormatter:[null,formatters.inputDefaultBlockNumberFormatter],outputFormatter:utils.toDecimal});var sendRawTransaction=new Method({name:'sendRawTransaction',call:'eth_sendRawTransaction',params:1,inputFormatter:[null]});var sendTransaction=new Method({name:'sendTransaction',call:'eth_sendTransaction',params:1,inputFormatter:[formatters.inputTransactionFormatter]});var sign=new Method({name:'sign',call:'eth_sign',params:2,inputFormatter:[formatters.inputAddressFormatter,null]});var call=new Method({name:'call',call:'eth_call',params:2,inputFormatter:[formatters.inputCallFormatter,formatters.inputDefaultBlockNumberFormatter]});var estimateGas=new Method({name:'estimateGas',call:'eth_estimateGas',params:1,inputFormatter:[formatters.inputCallFormatter],outputFormatter:utils.toDecimal});var compileSolidity=new Method({name:'compile.solidity',call:'eth_compileSolidity',params:1});var compileLLL=new Method({name:'compile.lll',call:'eth_compileLLL',params:1});var compileSerpent=new Method({name:'compile.serpent',call:'eth_compileSerpent',params:1});var submitWork=new Method({name:'submitWork',call:'eth_submitWork',params:3});var getWork=new Method({name:'getWork',call:'eth_getWork',params:0});return[getBalance,getStorageAt,getCode,getBlock,getUncle,getCompilers,getBlockTransactionCount,getBlockUncleCount,getTransaction,getTransactionFromBlock,getTransactionReceipt,getTransactionCount,call,estimateGas,sendRawTransaction,sendTransaction,sign,compileSolidity,compileLLL,compileSerpent,submitWork,getWork];};var properties=function(){return[new Property({name:'coinbase',getter:'eth_coinbase'}),new Property({name:'mining',getter:'eth_mining'}),new Property({name:'hashrate',getter:'eth_hashrate',outputFormatter:utils.toDecimal}),new Property({name:'syncing',getter:'eth_syncing',outputFormatter:formatters.outputSyncingFormatter}),new Property({name:'gasPrice',getter:'eth_gasPrice',outputFormatter:formatters.outputBigNumberFormatter}),new Property({name:'accounts',getter:'eth_accounts'}),new Property({name:'blockNumber',getter:'eth_blockNumber',outputFormatter:utils.toDecimal})];};Eth.prototype.contract=function(abi){var factory=new Contract(this,abi);return factory;};Eth.prototype.filter=function(fil,callback){return new Filter(this._requestManager,fil,watches.eth(),formatters.outputLogFormatter,callback);};Eth.prototype.namereg=function(){return this.contract(namereg.global.abi).at(namereg.global.address);};Eth.prototype.icapNamereg=function(){return this.contract(namereg.icap.abi).at(namereg.icap.address);};Eth.prototype.isSyncing=function(callback){return new IsSyncing(this._requestManager,callback);};module.exports=Eth;},{"../../utils/config":27,"../../utils/utils":29,"../contract":34,"../filter":38,"../formatters":39,"../iban":42,"../method":45,"../namereg":52,"../property":53,"../syncing":56,"../transfer":57,"./watches":51}],48:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//** @file eth.js
 * @authors:
 *   Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */var utils=require('../../utils/utils');var Property=require('../property');var Net=function(web3){this._requestManager=web3._requestManager;var self=this;properties().forEach(function(p){p.attachToObject(self);p.setRequestManager(web3._requestManager);});};/// @returns an array of objects describing web3.eth api properties
var properties=function(){return[new Property({name:'listening',getter:'net_listening'}),new Property({name:'peerCount',getter:'net_peerCount',outputFormatter:utils.toDecimal})];};module.exports=Net;},{"../../utils/utils":29,"../property":53}],49:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//**
 * @file eth.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @author Fabian Vogelsteller <fabian@ethdev.com>
 * @date 2015
 */"use strict";var Method=require('../method');var Property=require('../property');function Personal(web3){this._requestManager=web3._requestManager;var self=this;methods().forEach(function(method){method.attachToObject(self);method.setRequestManager(self._requestManager);});properties().forEach(function(p){p.attachToObject(self);p.setRequestManager(self._requestManager);});}var methods=function(){var newAccount=new Method({name:'newAccount',call:'personal_newAccount',params:1,inputFormatter:[null]});var unlockAccount=new Method({name:'unlockAccount',call:'personal_unlockAccount',params:3,inputFormatter:[null,null,null]});return[newAccount,unlockAccount];};var properties=function(){return[new Property({name:'listAccounts',getter:'personal_listAccounts'})];};module.exports=Personal;},{"../method":45,"../property":53}],50:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//** @file shh.js
 * @authors:
 *   Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */var Method=require('../method');var formatters=require('../formatters');var Filter=require('../filter');var watches=require('./watches');var Shh=function(web3){this._requestManager=web3._requestManager;var self=this;methods().forEach(function(method){method.attachToObject(self);method.setRequestManager(self._requestManager);});};Shh.prototype.filter=function(fil,callback){return new Filter(this._requestManager,fil,watches.shh(),formatters.outputPostFormatter,callback);};var methods=function(){var post=new Method({name:'post',call:'shh_post',params:1,inputFormatter:[formatters.inputPostFormatter]});var newIdentity=new Method({name:'newIdentity',call:'shh_newIdentity',params:0});var hasIdentity=new Method({name:'hasIdentity',call:'shh_hasIdentity',params:1});var newGroup=new Method({name:'newGroup',call:'shh_newGroup',params:0});var addToGroup=new Method({name:'addToGroup',call:'shh_addToGroup',params:0});return[post,newIdentity,hasIdentity,newGroup,addToGroup];};module.exports=Shh;},{"../filter":38,"../formatters":39,"../method":45,"./watches":51}],51:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//** @file watches.js
 * @authors:
 *   Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */var Method=require('../method');/// @returns an array of objects describing web3.eth.filter api methods
var eth=function(){var newFilterCall=function(args){var type=args[0];switch(type){case'latest':args.shift();this.params=0;return'eth_newBlockFilter';case'pending':args.shift();this.params=0;return'eth_newPendingTransactionFilter';default:return'eth_newFilter';}};var newFilter=new Method({name:'newFilter',call:newFilterCall,params:1});var uninstallFilter=new Method({name:'uninstallFilter',call:'eth_uninstallFilter',params:1});var getLogs=new Method({name:'getLogs',call:'eth_getFilterLogs',params:1});var poll=new Method({name:'poll',call:'eth_getFilterChanges',params:1});return[newFilter,uninstallFilter,getLogs,poll];};/// @returns an array of objects describing web3.shh.watch api methods
var shh=function(){var newFilter=new Method({name:'newFilter',call:'shh_newFilter',params:1});var uninstallFilter=new Method({name:'uninstallFilter',call:'shh_uninstallFilter',params:1});var getLogs=new Method({name:'getLogs',call:'shh_getMessages',params:1});var poll=new Method({name:'poll',call:'shh_getFilterChanges',params:1});return[newFilter,uninstallFilter,getLogs,poll];};module.exports={eth:eth,shh:shh};},{"../method":45}],52:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//** 
 * @file namereg.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */var globalRegistrarAbi=require('../contracts/GlobalRegistrar.json');var icapRegistrarAbi=require('../contracts/ICAPRegistrar.json');var globalNameregAddress='0xc6d9d2cd449a754c494264e1809c50e34d64562b';var icapNameregAddress='0xa1a111bc074c9cfa781f0c38e63bd51c91b8af00';module.exports={global:{abi:globalRegistrarAbi,address:globalNameregAddress},icap:{abi:icapRegistrarAbi,address:icapNameregAddress}};},{"../contracts/GlobalRegistrar.json":10,"../contracts/ICAPRegistrar.json":11}],53:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//**
 * @file property.js
 * @author Fabian Vogelsteller <fabian@frozeman.de>
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */var utils=require('../utils/utils');var Property=function(options){this.name=options.name;this.getter=options.getter;this.setter=options.setter;this.outputFormatter=options.outputFormatter;this.inputFormatter=options.inputFormatter;this.requestManager=null;};Property.prototype.setRequestManager=function(rm){this.requestManager=rm;};/**
 * Should be called to format input args of method
 * 
 * @method formatInput
 * @param {Array}
 * @return {Array}
 */Property.prototype.formatInput=function(arg){return this.inputFormatter?this.inputFormatter(arg):arg;};/**
 * Should be called to format output(result) of method
 *
 * @method formatOutput
 * @param {Object}
 * @return {Object}
 */Property.prototype.formatOutput=function(result){return this.outputFormatter&&result!==null?this.outputFormatter(result):result;};/**
 * Should be used to extract callback from array of arguments. Modifies input param
 *
 * @method extractCallback
 * @param {Array} arguments
 * @return {Function|Null} callback, if exists
 */Property.prototype.extractCallback=function(args){if(utils.isFunction(args[args.length-1])){return args.pop();// modify the args array!
}};/**
 * Should attach function to method
 * 
 * @method attachToObject
 * @param {Object}
 * @param {Function}
 */Property.prototype.attachToObject=function(obj){var proto={get:this.buildGet(),enumerable:true};var names=this.name.split('.');var name=names[0];if(names.length>1){obj[names[0]]=obj[names[0]]||{};obj=obj[names[0]];name=names[1];}Object.defineProperty(obj,name,proto);obj[asyncGetterName(name)]=this.buildAsyncGet();};var asyncGetterName=function(name){return'get'+name.charAt(0).toUpperCase()+name.slice(1);};Property.prototype.buildGet=function(){var property=this;return function get(){return property.formatOutput(property.requestManager.send({method:property.getter}));};};Property.prototype.buildAsyncGet=function(){var property=this;var get=function(callback){property.requestManager.sendAsync({method:property.getter},function(err,result){callback(err,property.formatOutput(result));});};get.request=this.request.bind(this);return get;};/**
 * Should be called to create pure JSONRPC request which can be used in batch request
 *
 * @method request
 * @param {...} params
 * @return {Object} jsonrpc request
 */Property.prototype.request=function(){var payload={method:this.getter,params:[],callback:this.extractCallback(Array.prototype.slice.call(arguments))};payload.format=this.formatOutput.bind(this);return payload;};module.exports=Property;},{"../utils/utils":29}],54:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//** 
 * @file requestmanager.js
 * @author Jeffrey Wilcke <jeff@ethdev.com>
 * @author Marek Kotewicz <marek@ethdev.com>
 * @author Marian Oancea <marian@ethdev.com>
 * @author Fabian Vogelsteller <fabian@ethdev.com>
 * @author Gav Wood <g@ethdev.com>
 * @date 2014
 */var Jsonrpc=require('./jsonrpc');var utils=require('../utils/utils');var c=require('../utils/config');var errors=require('./errors');/**
 * It's responsible for passing messages to providers
 * It's also responsible for polling the ethereum node for incoming messages
 * Default poll timeout is 1 second
 * Singleton
 */var RequestManager=function(provider){this.provider=provider;this.polls={};this.timeout=null;};/**
 * Should be used to synchronously send request
 *
 * @method send
 * @param {Object} data
 * @return {Object}
 */RequestManager.prototype.send=function(data){if(!this.provider){console.error(errors.InvalidProvider());return null;}var payload=Jsonrpc.getInstance().toPayload(data.method,data.params);var result=this.provider.send(payload);if(!Jsonrpc.getInstance().isValidResponse(result)){throw errors.InvalidResponse(result);}return result.result;};/**
 * Should be used to asynchronously send request
 *
 * @method sendAsync
 * @param {Object} data
 * @param {Function} callback
 */RequestManager.prototype.sendAsync=function(data,callback){if(!this.provider){return callback(errors.InvalidProvider());}var payload=Jsonrpc.getInstance().toPayload(data.method,data.params);this.provider.sendAsync(payload,function(err,result){if(err){return callback(err);}if(!Jsonrpc.getInstance().isValidResponse(result)){return callback(errors.InvalidResponse(result));}callback(null,result.result);});};/**
 * Should be called to asynchronously send batch request
 *
 * @method sendBatch
 * @param {Array} batch data
 * @param {Function} callback
 */RequestManager.prototype.sendBatch=function(data,callback){if(!this.provider){return callback(errors.InvalidProvider());}var payload=Jsonrpc.getInstance().toBatchPayload(data);this.provider.sendAsync(payload,function(err,results){if(err){return callback(err);}if(!utils.isArray(results)){return callback(errors.InvalidResponse(results));}callback(err,results);});};/**
 * Should be used to set provider of request manager
 *
 * @method setProvider
 * @param {Object}
 */RequestManager.prototype.setProvider=function(p){this.provider=p;};/**
 * Should be used to start polling
 *
 * @method startPolling
 * @param {Object} data
 * @param {Number} pollId
 * @param {Function} callback
 * @param {Function} uninstall
 *
 * @todo cleanup number of params
 */RequestManager.prototype.startPolling=function(data,pollId,callback,uninstall){this.polls[pollId]={data:data,id:pollId,callback:callback,uninstall:uninstall};// start polling
if(!this.timeout){this.poll();}};/**
 * Should be used to stop polling for filter with given id
 *
 * @method stopPolling
 * @param {Number} pollId
 */RequestManager.prototype.stopPolling=function(pollId){delete this.polls[pollId];// stop polling
if(Object.keys(this.polls).length===0&&this.timeout){clearTimeout(this.timeout);this.timeout=null;}};/**
 * Should be called to reset the polling mechanism of the request manager
 *
 * @method reset
 */RequestManager.prototype.reset=function(keepIsSyncing){/*jshint maxcomplexity:5 */for(var key in this.polls){// remove all polls, except sync polls,
// they need to be removed manually by calling syncing.stopWatching()
if(!keepIsSyncing||key.indexOf('syncPoll_')===-1){this.polls[key].uninstall();delete this.polls[key];}}// stop polling
if(Object.keys(this.polls).length===0&&this.timeout){clearTimeout(this.timeout);this.timeout=null;}};/**
 * Should be called to poll for changes on filter with given id
 *
 * @method poll
 */RequestManager.prototype.poll=function(){/*jshint maxcomplexity: 6 */this.timeout=setTimeout(this.poll.bind(this),c.ETH_POLLING_TIMEOUT);if(Object.keys(this.polls).length===0){return;}if(!this.provider){console.error(errors.InvalidProvider());return;}var pollsData=[];var pollsIds=[];for(var key in this.polls){pollsData.push(this.polls[key].data);pollsIds.push(key);}if(pollsData.length===0){return;}var payload=Jsonrpc.getInstance().toBatchPayload(pollsData);// map the request id to they poll id
var pollsIdMap={};payload.forEach(function(load,index){pollsIdMap[load.id]=pollsIds[index];});var self=this;this.provider.sendAsync(payload,function(error,results){// TODO: console log?
if(error){return;}if(!utils.isArray(results)){throw errors.InvalidResponse(results);}results.map(function(result){var id=pollsIdMap[result.id];// make sure the filter is still installed after arrival of the request
if(self.polls[id]){result.callback=self.polls[id].callback;return result;}else return false;}).filter(function(result){return!!result;}).filter(function(result){var valid=Jsonrpc.getInstance().isValidResponse(result);if(!valid){result.callback(errors.InvalidResponse(result));}return valid;}).forEach(function(result){result.callback(null,result.result);});});};module.exports=RequestManager;},{"../utils/config":27,"../utils/utils":29,"./errors":35,"./jsonrpc":44}],55:[function(require,module,exports){var Settings=function(){this.defaultBlock='latest';this.defaultAccount=undefined;};module.exports=Settings;},{}],56:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//** @file syncing.js
 * @authors:
 *   Fabian Vogelsteller <fabian@ethdev.com>
 * @date 2015
 */var formatters=require('./formatters');var utils=require('../utils/utils');var count=1;/**
Adds the callback and sets up the methods, to iterate over the results.

@method pollSyncing
@param {Object} self
*/var pollSyncing=function(self){var onMessage=function(error,sync){if(error){return self.callbacks.forEach(function(callback){callback(error);});}if(utils.isObject(sync)&&sync.startingBlock)sync=formatters.outputSyncingFormatter(sync);self.callbacks.forEach(function(callback){if(self.lastSyncState!==sync){// call the callback with true first so the app can stop anything, before receiving the sync data
if(!self.lastSyncState&&utils.isObject(sync))callback(null,true);// call on the next CPU cycle, so the actions of the sync stop can be processes first
setTimeout(function(){callback(null,sync);},0);self.lastSyncState=sync;}});};self.requestManager.startPolling({method:'eth_syncing',params:[]},self.pollId,onMessage,self.stopWatching.bind(self));};var IsSyncing=function(requestManager,callback){this.requestManager=requestManager;this.pollId='syncPoll_'+count++;this.callbacks=[];this.addCallback(callback);this.lastSyncState=false;pollSyncing(this);return this;};IsSyncing.prototype.addCallback=function(callback){if(callback)this.callbacks.push(callback);return this;};IsSyncing.prototype.stopWatching=function(){this.requestManager.stopPolling(this.pollId);this.callbacks=[];};module.exports=IsSyncing;},{"../utils/utils":29,"./formatters":39}],57:[function(require,module,exports){/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*//** 
 * @file transfer.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */var Iban=require('./iban');var exchangeAbi=require('../contracts/SmartExchange.json');/**
 * Should be used to make Iban transfer
 *
 * @method transfer
 * @param {String} from
 * @param {String} to iban
 * @param {Value} value to be tranfered
 * @param {Function} callback, callback
 */var transfer=function(eth,from,to,value,callback){var iban=new Iban(to);if(!iban.isValid()){throw new Error('invalid iban address');}if(iban.isDirect()){return transferToAddress(eth,from,iban.address(),value,callback);}if(!callback){var address=eth.icapNamereg().addr(iban.institution());return deposit(eth,from,address,value,iban.client());}eth.icapNamereg().addr(iban.institution(),function(err,address){return deposit(eth,from,address,value,iban.client(),callback);});};/**
 * Should be used to transfer funds to certain address
 *
 * @method transferToAddress
 * @param {String} from
 * @param {String} to
 * @param {Value} value to be tranfered
 * @param {Function} callback, callback
 */var transferToAddress=function(eth,from,to,value,callback){return eth.sendTransaction({address:to,from:from,value:value},callback);};/**
 * Should be used to deposit funds to generic Exchange contract (must implement deposit(bytes32) method!)
 *
 * @method deposit
 * @param {String} from
 * @param {String} to
 * @param {Value} value to be transfered
 * @param {String} client unique identifier
 * @param {Function} callback, callback
 */var deposit=function(eth,from,to,value,client,callback){var abi=exchangeAbi;return eth.contract(abi).at(to).deposit(client,{from:from,value:value},callback);};module.exports=transfer;},{"../contracts/SmartExchange.json":12,"./iban":42}],58:[function(require,module,exports){/*! bignumber.js v2.0.7 https://github.com/MikeMcl/bignumber.js/LICENCE */;(function(global){'use strict';/*
      bignumber.js v2.0.7
      A JavaScript library for arbitrary-precision arithmetic.
      https://github.com/MikeMcl/bignumber.js
      Copyright (c) 2015 Michael Mclaughlin <M8ch88l@gmail.com>
      MIT Expat Licence
    */var BigNumber,crypto,parseNumeric,isNumeric=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,mathceil=Math.ceil,mathfloor=Math.floor,notBool=' not a boolean or binary digit',roundingMode='rounding mode',tooManyDigits='number type has more than 15 significant digits',ALPHABET='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_',BASE=1e14,LOG_BASE=14,MAX_SAFE_INTEGER=0x1fffffffffffff,// 2^53 - 1
// MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
POWS_TEN=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],SQRT_BASE=1e7,/*
         * The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
         * the arguments to toExponential, toFixed, toFormat, and toPrecision, beyond which an
         * exception is thrown (if ERRORS is true).
         */MAX=1E9;// 0 to MAX_INT32
/*
     * Create and return a BigNumber constructor.
     */function another(configObj){var div,// id tracks the caller function, so its name can be included in error messages.
id=0,P=BigNumber.prototype,ONE=new BigNumber(1),/********************************* EDITABLE DEFAULTS **********************************//*
             * The default values below must be integers within the inclusive ranges stated.
             * The values can also be changed at run-time using BigNumber.config.
             */// The maximum number of decimal places for operations involving division.
DECIMAL_PLACES=20,// 0 to MAX
/*
             * The rounding mode used when rounding to the above decimal places, and when using
             * toExponential, toFixed, toFormat and toPrecision, and round (default value).
             * UP         0 Away from zero.
             * DOWN       1 Towards zero.
             * CEIL       2 Towards +Infinity.
             * FLOOR      3 Towards -Infinity.
             * HALF_UP    4 Towards nearest neighbour. If equidistant, up.
             * HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
             * HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
             * HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
             * HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
             */ROUNDING_MODE=4,// 0 to 8
// EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]
// The exponent value at and beneath which toString returns exponential notation.
// Number type: -7
TO_EXP_NEG=-7,// 0 to -MAX
// The exponent value at and above which toString returns exponential notation.
// Number type: 21
TO_EXP_POS=21,// 0 to MAX
// RANGE : [MIN_EXP, MAX_EXP]
// The minimum exponent value, beneath which underflow to zero occurs.
// Number type: -324  (5e-324)
MIN_EXP=-1e7,// -1 to -MAX
// The maximum exponent value, above which overflow to Infinity occurs.
// Number type:  308  (1.7976931348623157e+308)
// For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
MAX_EXP=1e7,// 1 to MAX
// Whether BigNumber Errors are ever thrown.
ERRORS=true,// true or false
// Change to intValidatorNoErrors if ERRORS is false.
isValidInt=intValidatorWithErrors,// intValidatorWithErrors/intValidatorNoErrors
// Whether to use cryptographically-secure random number generation, if available.
CRYPTO=false,// true or false
/*
             * The modulo mode used when calculating the modulus: a mod n.
             * The quotient (q = a / n) is calculated according to the corresponding rounding mode.
             * The remainder (r) is calculated as: r = a - n * q.
             *
             * UP        0 The remainder is positive if the dividend is negative, else is negative.
             * DOWN      1 The remainder has the same sign as the dividend.
             *             This modulo mode is commonly known as 'truncated division' and is
             *             equivalent to (a % n) in JavaScript.
             * FLOOR     3 The remainder has the same sign as the divisor (Python %).
             * HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
             * EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
             *             The remainder is always positive.
             *
             * The truncated division, floored division, Euclidian division and IEEE 754 remainder
             * modes are commonly used for the modulus operation.
             * Although the other rounding modes can also be used, they may not give useful results.
             */MODULO_MODE=1,// 0 to 9
// The maximum number of significant digits of the result of the toPower operation.
// If POW_PRECISION is 0, there will be unlimited significant digits.
POW_PRECISION=100,// 0 to MAX
// The format specification used by the BigNumber.prototype.toFormat method.
FORMAT={decimalSeparator:'.',groupSeparator:',',groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:'\xA0',// non-breaking space
fractionGroupSize:0};/******************************************************************************************/// CONSTRUCTOR
/*
         * The BigNumber constructor and exported function.
         * Create and return a new instance of a BigNumber object.
         *
         * n {number|string|BigNumber} A numeric value.
         * [b] {number} The base of n. Integer, 2 to 64 inclusive.
         */function BigNumber(n,b){var c,e,i,num,len,str,x=this;// Enable constructor usage without new.
if(!(x instanceof BigNumber)){// 'BigNumber() constructor call without new: {n}'
if(ERRORS)raise(26,'constructor call without new',n);return new BigNumber(n,b);}// 'new BigNumber() base not an integer: {b}'
// 'new BigNumber() base out of range: {b}'
if(b==null||!isValidInt(b,2,64,id,'base')){// Duplicate.
if(n instanceof BigNumber){x.s=n.s;x.e=n.e;x.c=(n=n.c)?n.slice():n;id=0;return;}if((num=typeof n=='number')&&n*0==0){x.s=1/n<0?(n=-n,-1):1;// Fast path for integers.
if(n===~~n){for(e=0,i=n;i>=10;i/=10,e++);x.e=e;x.c=[n];id=0;return;}str=n+'';}else{if(!isNumeric.test(str=n+''))return parseNumeric(x,str,num);x.s=str.charCodeAt(0)===45?(str=str.slice(1),-1):1;}}else{b=b|0;str=n+'';// Ensure return value is rounded to DECIMAL_PLACES as with other bases.
// Allow exponential notation to be used with base 10 argument.
if(b==10){x=new BigNumber(n instanceof BigNumber?n:str);return round(x,DECIMAL_PLACES+x.e+1,ROUNDING_MODE);}// Avoid potential interpretation of Infinity and NaN as base 44+ values.
// Any number in exponential form will fail due to the [Ee][+-].
if((num=typeof n=='number')&&n*0!=0||!new RegExp('^-?'+(c='['+ALPHABET.slice(0,b)+']+')+'(?:\\.'+c+')?$',b<37?'i':'').test(str)){return parseNumeric(x,str,num,b);}if(num){x.s=1/n<0?(str=str.slice(1),-1):1;if(ERRORS&&str.replace(/^0\.0*|\./,'').length>15){// 'new BigNumber() number type has more than 15 significant digits: {n}'
raise(id,tooManyDigits,n);}// Prevent later check for length on converted number.
num=false;}else{x.s=str.charCodeAt(0)===45?(str=str.slice(1),-1):1;}str=convertBase(str,10,b,x.s);}// Decimal point?
if((e=str.indexOf('.'))>-1)str=str.replace('.','');// Exponential form?
if((i=str.search(/e/i))>0){// Determine exponent.
if(e<0)e=i;e+=+str.slice(i+1);str=str.substring(0,i);}else if(e<0){// Integer.
e=str.length;}// Determine leading zeros.
for(i=0;str.charCodeAt(i)===48;i++);// Determine trailing zeros.
for(len=str.length;str.charCodeAt(--len)===48;);str=str.slice(i,len+1);if(str){len=str.length;// Disallow numbers with over 15 significant digits if number type.
// 'new BigNumber() number type has more than 15 significant digits: {n}'
if(num&&ERRORS&&len>15)raise(id,tooManyDigits,x.s*n);e=e-i-1;// Overflow?
if(e>MAX_EXP){// Infinity.
x.c=x.e=null;// Underflow?
}else if(e<MIN_EXP){// Zero.
x.c=[x.e=0];}else{x.e=e;x.c=[];// Transform base
// e is the base 10 exponent.
// i is where to slice str to get the first element of the coefficient array.
i=(e+1)%LOG_BASE;if(e<0)i+=LOG_BASE;if(i<len){if(i)x.c.push(+str.slice(0,i));for(len-=LOG_BASE;i<len;){x.c.push(+str.slice(i,i+=LOG_BASE));}str=str.slice(i);i=LOG_BASE-str.length;}else{i-=len;}for(;i--;str+='0');x.c.push(+str);}}else{// Zero.
x.c=[x.e=0];}id=0;}// CONSTRUCTOR PROPERTIES
BigNumber.another=another;BigNumber.ROUND_UP=0;BigNumber.ROUND_DOWN=1;BigNumber.ROUND_CEIL=2;BigNumber.ROUND_FLOOR=3;BigNumber.ROUND_HALF_UP=4;BigNumber.ROUND_HALF_DOWN=5;BigNumber.ROUND_HALF_EVEN=6;BigNumber.ROUND_HALF_CEIL=7;BigNumber.ROUND_HALF_FLOOR=8;BigNumber.EUCLID=9;/*
         * Configure infrequently-changing library-wide settings.
         *
         * Accept an object or an argument list, with one or many of the following properties or
         * parameters respectively:
         *
         *   DECIMAL_PLACES  {number}  Integer, 0 to MAX inclusive
         *   ROUNDING_MODE   {number}  Integer, 0 to 8 inclusive
         *   EXPONENTIAL_AT  {number|number[]}  Integer, -MAX to MAX inclusive or
         *                                      [integer -MAX to 0 incl., 0 to MAX incl.]
         *   RANGE           {number|number[]}  Non-zero integer, -MAX to MAX inclusive or
         *                                      [integer -MAX to -1 incl., integer 1 to MAX incl.]
         *   ERRORS          {boolean|number}   true, false, 1 or 0
         *   CRYPTO          {boolean|number}   true, false, 1 or 0
         *   MODULO_MODE     {number}           0 to 9 inclusive
         *   POW_PRECISION   {number}           0 to MAX inclusive
         *   FORMAT          {object}           See BigNumber.prototype.toFormat
         *      decimalSeparator       {string}
         *      groupSeparator         {string}
         *      groupSize              {number}
         *      secondaryGroupSize     {number}
         *      fractionGroupSeparator {string}
         *      fractionGroupSize      {number}
         *
         * (The values assigned to the above FORMAT object properties are not checked for validity.)
         *
         * E.g.
         * BigNumber.config(20, 4) is equivalent to
         * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
         *
         * Ignore properties/parameters set to null or undefined.
         * Return an object with the properties current values.
         */BigNumber.config=function(){var v,p,i=0,r={},a=arguments,o=a[0],has=o&&typeof o=='object'?function(){if(o.hasOwnProperty(p))return(v=o[p])!=null;}:function(){if(a.length>i)return(v=a[i++])!=null;};// DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
// 'config() DECIMAL_PLACES not an integer: {v}'
// 'config() DECIMAL_PLACES out of range: {v}'
if(has(p='DECIMAL_PLACES')&&isValidInt(v,0,MAX,2,p)){DECIMAL_PLACES=v|0;}r[p]=DECIMAL_PLACES;// ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
// 'config() ROUNDING_MODE not an integer: {v}'
// 'config() ROUNDING_MODE out of range: {v}'
if(has(p='ROUNDING_MODE')&&isValidInt(v,0,8,2,p)){ROUNDING_MODE=v|0;}r[p]=ROUNDING_MODE;// EXPONENTIAL_AT {number|number[]}
// Integer, -MAX to MAX inclusive or [integer -MAX to 0 inclusive, 0 to MAX inclusive].
// 'config() EXPONENTIAL_AT not an integer: {v}'
// 'config() EXPONENTIAL_AT out of range: {v}'
if(has(p='EXPONENTIAL_AT')){if(isArray(v)){if(isValidInt(v[0],-MAX,0,2,p)&&isValidInt(v[1],0,MAX,2,p)){TO_EXP_NEG=v[0]|0;TO_EXP_POS=v[1]|0;}}else if(isValidInt(v,-MAX,MAX,2,p)){TO_EXP_NEG=-(TO_EXP_POS=(v<0?-v:v)|0);}}r[p]=[TO_EXP_NEG,TO_EXP_POS];// RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
// [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
// 'config() RANGE not an integer: {v}'
// 'config() RANGE cannot be zero: {v}'
// 'config() RANGE out of range: {v}'
if(has(p='RANGE')){if(isArray(v)){if(isValidInt(v[0],-MAX,-1,2,p)&&isValidInt(v[1],1,MAX,2,p)){MIN_EXP=v[0]|0;MAX_EXP=v[1]|0;}}else if(isValidInt(v,-MAX,MAX,2,p)){if(v|0)MIN_EXP=-(MAX_EXP=(v<0?-v:v)|0);else if(ERRORS)raise(2,p+' cannot be zero',v);}}r[p]=[MIN_EXP,MAX_EXP];// ERRORS {boolean|number} true, false, 1 or 0.
// 'config() ERRORS not a boolean or binary digit: {v}'
if(has(p='ERRORS')){if(v===!!v||v===1||v===0){id=0;isValidInt=(ERRORS=!!v)?intValidatorWithErrors:intValidatorNoErrors;}else if(ERRORS){raise(2,p+notBool,v);}}r[p]=ERRORS;// CRYPTO {boolean|number} true, false, 1 or 0.
// 'config() CRYPTO not a boolean or binary digit: {v}'
// 'config() crypto unavailable: {crypto}'
if(has(p='CRYPTO')){if(v===!!v||v===1||v===0){CRYPTO=!!(v&&crypto&&typeof crypto=='object');if(v&&!CRYPTO&&ERRORS)raise(2,'crypto unavailable',crypto);}else if(ERRORS){raise(2,p+notBool,v);}}r[p]=CRYPTO;// MODULO_MODE {number} Integer, 0 to 9 inclusive.
// 'config() MODULO_MODE not an integer: {v}'
// 'config() MODULO_MODE out of range: {v}'
if(has(p='MODULO_MODE')&&isValidInt(v,0,9,2,p)){MODULO_MODE=v|0;}r[p]=MODULO_MODE;// POW_PRECISION {number} Integer, 0 to MAX inclusive.
// 'config() POW_PRECISION not an integer: {v}'
// 'config() POW_PRECISION out of range: {v}'
if(has(p='POW_PRECISION')&&isValidInt(v,0,MAX,2,p)){POW_PRECISION=v|0;}r[p]=POW_PRECISION;// FORMAT {object}
// 'config() FORMAT not an object: {v}'
if(has(p='FORMAT')){if(typeof v=='object'){FORMAT=v;}else if(ERRORS){raise(2,p+' not an object',v);}}r[p]=FORMAT;return r;};/*
         * Return a new BigNumber whose value is the maximum of the arguments.
         *
         * arguments {number|string|BigNumber}
         */BigNumber.max=function(){return maxOrMin(arguments,P.lt);};/*
         * Return a new BigNumber whose value is the minimum of the arguments.
         *
         * arguments {number|string|BigNumber}
         */BigNumber.min=function(){return maxOrMin(arguments,P.gt);};/*
         * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
         * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
         * zeros are produced).
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         *
         * 'random() decimal places not an integer: {dp}'
         * 'random() decimal places out of range: {dp}'
         * 'random() crypto unavailable: {crypto}'
         */BigNumber.random=function(){var pow2_53=0x20000000000000;// Return a 53 bit integer n, where 0 <= n < 9007199254740992.
// Check if Math.random() produces more than 32 bits of randomness.
// If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
// 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
var random53bitInt=Math.random()*pow2_53&0x1fffff?function(){return mathfloor(Math.random()*pow2_53);}:function(){return(Math.random()*0x40000000|0)*0x800000+(Math.random()*0x800000|0);};return function(dp){var a,b,e,k,v,i=0,c=[],rand=new BigNumber(ONE);dp=dp==null||!isValidInt(dp,0,MAX,14)?DECIMAL_PLACES:dp|0;k=mathceil(dp/LOG_BASE);if(CRYPTO){// Browsers supporting crypto.getRandomValues.
if(crypto&&crypto.getRandomValues){a=crypto.getRandomValues(new Uint32Array(k*=2));for(;i<k;){// 53 bits:
// ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
// 11111 11111111 11111111 11111111 11100000 00000000 00000000
// ((Math.pow(2, 32) - 1) >>> 11).toString(2)
//                                     11111 11111111 11111111
// 0x20000 is 2^21.
v=a[i]*0x20000+(a[i+1]>>>11);// Rejection sampling:
// 0 <= v < 9007199254740992
// Probability that v >= 9e15, is
// 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
if(v>=9e15){b=crypto.getRandomValues(new Uint32Array(2));a[i]=b[0];a[i+1]=b[1];}else{// 0 <= v <= 8999999999999999
// 0 <= (v % 1e14) <= 99999999999999
c.push(v%1e14);i+=2;}}i=k/2;// Node.js supporting crypto.randomBytes.
}else if(crypto&&crypto.randomBytes){// buffer
a=crypto.randomBytes(k*=7);for(;i<k;){// 0x1000000000000 is 2^48, 0x10000000000 is 2^40
// 0x100000000 is 2^32, 0x1000000 is 2^24
// 11111 11111111 11111111 11111111 11111111 11111111 11111111
// 0 <= v < 9007199254740992
v=(a[i]&31)*0x1000000000000+a[i+1]*0x10000000000+a[i+2]*0x100000000+a[i+3]*0x1000000+(a[i+4]<<16)+(a[i+5]<<8)+a[i+6];if(v>=9e15){crypto.randomBytes(7).copy(a,i);}else{// 0 <= (v % 1e14) <= 99999999999999
c.push(v%1e14);i+=7;}}i=k/7;}else if(ERRORS){raise(14,'crypto unavailable',crypto);}}// Use Math.random: CRYPTO is false or crypto is unavailable and ERRORS is false.
if(!i){for(;i<k;){v=random53bitInt();if(v<9e15)c[i++]=v%1e14;}}k=c[--i];dp%=LOG_BASE;// Convert trailing digits to zeros according to dp.
if(k&&dp){v=POWS_TEN[LOG_BASE-dp];c[i]=mathfloor(k/v)*v;}// Remove trailing elements which are zero.
for(;c[i]===0;c.pop(),i--);// Zero?
if(i<0){c=[e=0];}else{// Remove leading elements which are zero and adjust exponent accordingly.
for(e=-1;c[0]===0;c.shift(),e-=LOG_BASE);// Count the digits of the first element of c to determine leading zeros, and...
for(i=1,v=c[0];v>=10;v/=10,i++);// adjust the exponent accordingly.
if(i<LOG_BASE)e-=LOG_BASE-i;}rand.e=e;rand.c=c;return rand;};}();// PRIVATE FUNCTIONS
// Convert a numeric string of baseIn to a numeric string of baseOut.
function convertBase(str,baseOut,baseIn,sign){var d,e,k,r,x,xc,y,i=str.indexOf('.'),dp=DECIMAL_PLACES,rm=ROUNDING_MODE;if(baseIn<37)str=str.toLowerCase();// Non-integer.
if(i>=0){k=POW_PRECISION;// Unlimited precision.
POW_PRECISION=0;str=str.replace('.','');y=new BigNumber(baseIn);x=y.pow(str.length-i);POW_PRECISION=k;// Convert str as if an integer, then restore the fraction part by dividing the
// result by its base raised to a power.
y.c=toBaseOut(toFixedPoint(coeffToString(x.c),x.e),10,baseOut);y.e=y.c.length;}// Convert the number as integer.
xc=toBaseOut(str,baseIn,baseOut);e=k=xc.length;// Remove trailing zeros.
for(;xc[--k]==0;xc.pop());if(!xc[0])return'0';if(i<0){--e;}else{x.c=xc;x.e=e;// sign is needed for correct rounding.
x.s=sign;x=div(x,y,dp,rm,baseOut);xc=x.c;r=x.r;e=x.e;}d=e+dp+1;// The rounding digit, i.e. the digit to the right of the digit that may be rounded up.
i=xc[d];k=baseOut/2;r=r||d<0||xc[d+1]!=null;r=rm<4?(i!=null||r)&&(rm==0||rm==(x.s<0?3:2)):i>k||i==k&&(rm==4||r||rm==6&&xc[d-1]&1||rm==(x.s<0?8:7));if(d<1||!xc[0]){// 1^-dp or 0.
str=r?toFixedPoint('1',-dp):'0';}else{xc.length=d;if(r){// Rounding up may mean the previous digit has to be rounded up and so on.
for(--baseOut;++xc[--d]>baseOut;){xc[d]=0;if(!d){++e;xc.unshift(1);}}}// Determine trailing zeros.
for(k=xc.length;!xc[--k];);// E.g. [4, 11, 15] becomes 4bf.
for(i=0,str='';i<=k;str+=ALPHABET.charAt(xc[i++]));str=toFixedPoint(str,e);}// The caller will add the sign.
return str;}// Perform division in the specified base. Called by div and convertBase.
div=function(){// Assume non-zero x and k.
function multiply(x,k,base){var m,temp,xlo,xhi,carry=0,i=x.length,klo=k%SQRT_BASE,khi=k/SQRT_BASE|0;for(x=x.slice();i--;){xlo=x[i]%SQRT_BASE;xhi=x[i]/SQRT_BASE|0;m=khi*xlo+xhi*klo;temp=klo*xlo+m%SQRT_BASE*SQRT_BASE+carry;carry=(temp/base|0)+(m/SQRT_BASE|0)+khi*xhi;x[i]=temp%base;}if(carry)x.unshift(carry);return x;}function compare(a,b,aL,bL){var i,cmp;if(aL!=bL){cmp=aL>bL?1:-1;}else{for(i=cmp=0;i<aL;i++){if(a[i]!=b[i]){cmp=a[i]>b[i]?1:-1;break;}}}return cmp;}function subtract(a,b,aL,base){var i=0;// Subtract b from a.
for(;aL--;){a[aL]-=i;i=a[aL]<b[aL]?1:0;a[aL]=i*base+a[aL]-b[aL];}// Remove leading zeros.
for(;!a[0]&&a.length>1;a.shift());}// x: dividend, y: divisor.
return function(x,y,dp,rm,base){var cmp,e,i,more,n,prod,prodL,q,qc,rem,remL,rem0,xi,xL,yc0,yL,yz,s=x.s==y.s?1:-1,xc=x.c,yc=y.c;// Either NaN, Infinity or 0?
if(!xc||!xc[0]||!yc||!yc[0]){return new BigNumber(// Return NaN if either NaN, or both Infinity or 0.
!x.s||!y.s||(xc?yc&&xc[0]==yc[0]:!yc)?NaN:// Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
xc&&xc[0]==0||!yc?s*0:s/0);}q=new BigNumber(s);qc=q.c=[];e=x.e-y.e;s=dp+e+1;if(!base){base=BASE;e=bitFloor(x.e/LOG_BASE)-bitFloor(y.e/LOG_BASE);s=s/LOG_BASE|0;}// Result exponent may be one less then the current value of e.
// The coefficients of the BigNumbers from convertBase may have trailing zeros.
for(i=0;yc[i]==(xc[i]||0);i++);if(yc[i]>(xc[i]||0))e--;if(s<0){qc.push(1);more=true;}else{xL=xc.length;yL=yc.length;i=0;s+=2;// Normalise xc and yc so highest order digit of yc is >= base / 2.
n=mathfloor(base/(yc[0]+1));// Not necessary, but to handle odd bases where yc[0] == ( base / 2 ) - 1.
// if ( n > 1 || n++ == 1 && yc[0] < base / 2 ) {
if(n>1){yc=multiply(yc,n,base);xc=multiply(xc,n,base);yL=yc.length;xL=xc.length;}xi=yL;rem=xc.slice(0,yL);remL=rem.length;// Add zeros to make remainder as long as divisor.
for(;remL<yL;rem[remL++]=0);yz=yc.slice();yz.unshift(0);yc0=yc[0];if(yc[1]>=base/2)yc0++;// Not necessary, but to prevent trial digit n > base, when using base 3.
// else if ( base == 3 && yc0 == 1 ) yc0 = 1 + 1e-15;
do{n=0;// Compare divisor and remainder.
cmp=compare(yc,rem,yL,remL);// If divisor < remainder.
if(cmp<0){// Calculate trial digit, n.
rem0=rem[0];if(yL!=remL)rem0=rem0*base+(rem[1]||0);// n is how many times the divisor goes into the current remainder.
n=mathfloor(rem0/yc0);//  Algorithm:
//  1. product = divisor * trial digit (n)
//  2. if product > remainder: product -= divisor, n--
//  3. remainder -= product
//  4. if product was < remainder at 2:
//    5. compare new remainder and divisor
//    6. If remainder > divisor: remainder -= divisor, n++
if(n>1){// n may be > base only when base is 3.
if(n>=base)n=base-1;// product = divisor * trial digit.
prod=multiply(yc,n,base);prodL=prod.length;remL=rem.length;// Compare product and remainder.
// If product > remainder.
// Trial digit n too high.
// n is 1 too high about 5% of the time, and is not known to have
// ever been more than 1 too high.
while(compare(prod,rem,prodL,remL)==1){n--;// Subtract divisor from product.
subtract(prod,yL<prodL?yz:yc,prodL,base);prodL=prod.length;cmp=1;}}else{// n is 0 or 1, cmp is -1.
// If n is 0, there is no need to compare yc and rem again below,
// so change cmp to 1 to avoid it.
// If n is 1, leave cmp as -1, so yc and rem are compared again.
if(n==0){// divisor < remainder, so n must be at least 1.
cmp=n=1;}// product = divisor
prod=yc.slice();prodL=prod.length;}if(prodL<remL)prod.unshift(0);// Subtract product from remainder.
subtract(rem,prod,remL,base);remL=rem.length;// If product was < remainder.
if(cmp==-1){// Compare divisor and new remainder.
// If divisor < new remainder, subtract divisor from remainder.
// Trial digit n too low.
// n is 1 too low about 5% of the time, and very rarely 2 too low.
while(compare(yc,rem,yL,remL)<1){n++;// Subtract divisor from remainder.
subtract(rem,yL<remL?yz:yc,remL,base);remL=rem.length;}}}else if(cmp===0){n++;rem=[0];}// else cmp === 1 and n will be 0
// Add the next digit, n, to the result array.
qc[i++]=n;// Update the remainder.
if(rem[0]){rem[remL++]=xc[xi]||0;}else{rem=[xc[xi]];remL=1;}}while((xi++<xL||rem[0]!=null)&&s--);more=rem[0]!=null;// Leading zero?
if(!qc[0])qc.shift();}if(base==BASE){// To calculate q.e, first get the number of digits of qc[0].
for(i=1,s=qc[0];s>=10;s/=10,i++);round(q,dp+(q.e=i+e*LOG_BASE-1)+1,rm,more);// Caller is convertBase.
}else{q.e=e;q.r=+more;}return q;};}();/*
         * Return a string representing the value of BigNumber n in fixed-point or exponential
         * notation rounded to the specified decimal places or significant digits.
         *
         * n is a BigNumber.
         * i is the index of the last digit required (i.e. the digit that may be rounded up).
         * rm is the rounding mode.
         * caller is caller id: toExponential 19, toFixed 20, toFormat 21, toPrecision 24.
         */function format(n,i,rm,caller){var c0,e,ne,len,str;rm=rm!=null&&isValidInt(rm,0,8,caller,roundingMode)?rm|0:ROUNDING_MODE;if(!n.c)return n.toString();c0=n.c[0];ne=n.e;if(i==null){str=coeffToString(n.c);str=caller==19||caller==24&&ne<=TO_EXP_NEG?toExponential(str,ne):toFixedPoint(str,ne);}else{n=round(new BigNumber(n),i,rm);// n.e may have changed if the value was rounded up.
e=n.e;str=coeffToString(n.c);len=str.length;// toPrecision returns exponential notation if the number of significant digits
// specified is less than the number of digits necessary to represent the integer
// part of the value in fixed-point notation.
// Exponential notation.
if(caller==19||caller==24&&(i<=e||e<=TO_EXP_NEG)){// Append zeros?
for(;len<i;str+='0',len++);str=toExponential(str,e);// Fixed-point notation.
}else{i-=ne;str=toFixedPoint(str,e);// Append zeros?
if(e+1>len){if(--i>0)for(str+='.';i--;str+='0');}else{i+=e-len;if(i>0){if(e+1==len)str+='.';for(;i--;str+='0');}}}}return n.s<0&&c0?'-'+str:str;}// Handle BigNumber.max and BigNumber.min.
function maxOrMin(args,method){var m,n,i=0;if(isArray(args[0]))args=args[0];m=new BigNumber(args[0]);for(;++i<args.length;){n=new BigNumber(args[i]);// If any number is NaN, return NaN.
if(!n.s){m=n;break;}else if(method.call(m,n)){m=n;}}return m;}/*
         * Return true if n is an integer in range, otherwise throw.
         * Use for argument validation when ERRORS is true.
         */function intValidatorWithErrors(n,min,max,caller,name){if(n<min||n>max||n!=truncate(n)){raise(caller,(name||'decimal places')+(n<min||n>max?' out of range':' not an integer'),n);}return true;}/*
         * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
         * Called by minus, plus and times.
         */function normalise(n,c,e){var i=1,j=c.length;// Remove trailing zeros.
for(;!c[--j];c.pop());// Calculate the base 10 exponent. First get the number of digits of c[0].
for(j=c[0];j>=10;j/=10,i++);// Overflow?
if((e=i+e*LOG_BASE-1)>MAX_EXP){// Infinity.
n.c=n.e=null;// Underflow?
}else if(e<MIN_EXP){// Zero.
n.c=[n.e=0];}else{n.e=e;n.c=c;}return n;}// Handle values that fail the validity test in BigNumber.
parseNumeric=function(){var basePrefix=/^(-?)0([xbo])/i,dotAfter=/^([^.]+)\.$/,dotBefore=/^\.([^.]+)$/,isInfinityOrNaN=/^-?(Infinity|NaN)$/,whitespaceOrPlus=/^\s*\+|^\s+|\s+$/g;return function(x,str,num,b){var base,s=num?str:str.replace(whitespaceOrPlus,'');// No exception on ±Infinity or NaN.
if(isInfinityOrNaN.test(s)){x.s=isNaN(s)?null:s<0?-1:1;}else{if(!num){// basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
s=s.replace(basePrefix,function(m,p1,p2){base=(p2=p2.toLowerCase())=='x'?16:p2=='b'?2:8;return!b||b==base?p1:m;});if(b){base=b;// E.g. '1.' to '1', '.1' to '0.1'
s=s.replace(dotAfter,'$1').replace(dotBefore,'0.$1');}if(str!=s)return new BigNumber(s,base);}// 'new BigNumber() not a number: {n}'
// 'new BigNumber() not a base {b} number: {n}'
if(ERRORS)raise(id,'not a'+(b?' base '+b:'')+' number',str);x.s=null;}x.c=x.e=null;id=0;};}();// Throw a BigNumber Error.
function raise(caller,msg,val){var error=new Error(['new BigNumber',// 0
'cmp',// 1
'config',// 2
'div',// 3
'divToInt',// 4
'eq',// 5
'gt',// 6
'gte',// 7
'lt',// 8
'lte',// 9
'minus',// 10
'mod',// 11
'plus',// 12
'precision',// 13
'random',// 14
'round',// 15
'shift',// 16
'times',// 17
'toDigits',// 18
'toExponential',// 19
'toFixed',// 20
'toFormat',// 21
'toFraction',// 22
'pow',// 23
'toPrecision',// 24
'toString',// 25
'BigNumber'// 26
][caller]+'() '+msg+': '+val);error.name='BigNumber Error';id=0;throw error;}/*
         * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
         * If r is truthy, it is known that there are more digits after the rounding digit.
         */function round(x,sd,rm,r){var d,i,j,k,n,ni,rd,xc=x.c,pows10=POWS_TEN;// if x is not Infinity or NaN...
if(xc){// rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
// n is a base 1e14 number, the value of the element of array x.c containing rd.
// ni is the index of n within x.c.
// d is the number of digits of n.
// i is the index of rd within n including leading zeros.
// j is the actual index of rd within n (if < 0, rd is a leading zero).
out:{// Get the number of digits of the first element of xc.
for(d=1,k=xc[0];k>=10;k/=10,d++);i=sd-d;// If the rounding digit is in the first element of xc...
if(i<0){i+=LOG_BASE;j=sd;n=xc[ni=0];// Get the rounding digit at index j of n.
rd=n/pows10[d-j-1]%10|0;}else{ni=mathceil((i+1)/LOG_BASE);if(ni>=xc.length){if(r){// Needed by sqrt.
for(;xc.length<=ni;xc.push(0));n=rd=0;d=1;i%=LOG_BASE;j=i-LOG_BASE+1;}else{break out;}}else{n=k=xc[ni];// Get the number of digits of n.
for(d=1;k>=10;k/=10,d++);// Get the index of rd within n.
i%=LOG_BASE;// Get the index of rd within n, adjusted for leading zeros.
// The number of leading zeros of n is given by LOG_BASE - d.
j=i-LOG_BASE+d;// Get the rounding digit at index j of n.
rd=j<0?0:n/pows10[d-j-1]%10|0;}}r=r||sd<0||// Are there any non-zero digits after the rounding digit?
// The expression  n % pows10[ d - j - 1 ]  returns all digits of n to the right
// of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
xc[ni+1]!=null||(j<0?n:n%pows10[d-j-1]);r=rm<4?(rd||r)&&(rm==0||rm==(x.s<0?3:2)):rd>5||rd==5&&(rm==4||r||rm==6&&// Check whether the digit to the left of the rounding digit is odd.
(i>0?j>0?n/pows10[d-j]:0:xc[ni-1])%10&1||rm==(x.s<0?8:7));if(sd<1||!xc[0]){xc.length=0;if(r){// Convert sd to decimal places.
sd-=x.e+1;// 1, 0.1, 0.01, 0.001, 0.0001 etc.
xc[0]=pows10[sd%LOG_BASE];x.e=-sd||0;}else{// Zero.
xc[0]=x.e=0;}return x;}// Remove excess digits.
if(i==0){xc.length=ni;k=1;ni--;}else{xc.length=ni+1;k=pows10[LOG_BASE-i];// E.g. 56700 becomes 56000 if 7 is the rounding digit.
// j > 0 means i > number of leading zeros of n.
xc[ni]=j>0?mathfloor(n/pows10[d-j]%pows10[j])*k:0;}// Round up?
if(r){for(;;){// If the digit to be rounded up is in the first element of xc...
if(ni==0){// i will be the length of xc[0] before k is added.
for(i=1,j=xc[0];j>=10;j/=10,i++);j=xc[0]+=k;for(k=1;j>=10;j/=10,k++);// if i != k the length has increased.
if(i!=k){x.e++;if(xc[0]==BASE)xc[0]=1;}break;}else{xc[ni]+=k;if(xc[ni]!=BASE)break;xc[ni--]=0;k=1;}}}// Remove trailing zeros.
for(i=xc.length;xc[--i]===0;xc.pop());}// Overflow? Infinity.
if(x.e>MAX_EXP){x.c=x.e=null;// Underflow? Zero.
}else if(x.e<MIN_EXP){x.c=[x.e=0];}}return x;}// PROTOTYPE/INSTANCE METHODS
/*
         * Return a new BigNumber whose value is the absolute value of this BigNumber.
         */P.absoluteValue=P.abs=function(){var x=new BigNumber(this);if(x.s<0)x.s=1;return x;};/*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a whole
         * number in the direction of Infinity.
         */P.ceil=function(){return round(new BigNumber(this),this.e+1,2);};/*
         * Return
         * 1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
         * -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
         * 0 if they have the same value,
         * or null if the value of either is NaN.
         */P.comparedTo=P.cmp=function(y,b){id=1;return compare(this,new BigNumber(y,b));};/*
         * Return the number of decimal places of the value of this BigNumber, or null if the value
         * of this BigNumber is ±Infinity or NaN.
         */P.decimalPlaces=P.dp=function(){var n,v,c=this.c;if(!c)return null;n=((v=c.length-1)-bitFloor(this.e/LOG_BASE))*LOG_BASE;// Subtract the number of trailing zeros of the last number.
if(v=c[v])for(;v%10==0;v/=10,n--);if(n<0)n=0;return n;};/*
         *  n / 0 = I
         *  n / N = N
         *  n / I = 0
         *  0 / n = 0
         *  0 / 0 = N
         *  0 / N = N
         *  0 / I = 0
         *  N / n = N
         *  N / 0 = N
         *  N / N = N
         *  N / I = N
         *  I / n = I
         *  I / 0 = I
         *  I / N = N
         *  I / I = N
         *
         * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
         * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
         */P.dividedBy=P.div=function(y,b){id=3;return div(this,new BigNumber(y,b),DECIMAL_PLACES,ROUNDING_MODE);};/*
         * Return a new BigNumber whose value is the integer part of dividing the value of this
         * BigNumber by the value of BigNumber(y, b).
         */P.dividedToIntegerBy=P.divToInt=function(y,b){id=4;return div(this,new BigNumber(y,b),0,1);};/*
         * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
         * otherwise returns false.
         */P.equals=P.eq=function(y,b){id=5;return compare(this,new BigNumber(y,b))===0;};/*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a whole
         * number in the direction of -Infinity.
         */P.floor=function(){return round(new BigNumber(this),this.e+1,3);};/*
         * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
         * otherwise returns false.
         */P.greaterThan=P.gt=function(y,b){id=6;return compare(this,new BigNumber(y,b))>0;};/*
         * Return true if the value of this BigNumber is greater than or equal to the value of
         * BigNumber(y, b), otherwise returns false.
         */P.greaterThanOrEqualTo=P.gte=function(y,b){id=7;return(b=compare(this,new BigNumber(y,b)))===1||b===0;};/*
         * Return true if the value of this BigNumber is a finite number, otherwise returns false.
         */P.isFinite=function(){return!!this.c;};/*
         * Return true if the value of this BigNumber is an integer, otherwise return false.
         */P.isInteger=P.isInt=function(){return!!this.c&&bitFloor(this.e/LOG_BASE)>this.c.length-2;};/*
         * Return true if the value of this BigNumber is NaN, otherwise returns false.
         */P.isNaN=function(){return!this.s;};/*
         * Return true if the value of this BigNumber is negative, otherwise returns false.
         */P.isNegative=P.isNeg=function(){return this.s<0;};/*
         * Return true if the value of this BigNumber is 0 or -0, otherwise returns false.
         */P.isZero=function(){return!!this.c&&this.c[0]==0;};/*
         * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
         * otherwise returns false.
         */P.lessThan=P.lt=function(y,b){id=8;return compare(this,new BigNumber(y,b))<0;};/*
         * Return true if the value of this BigNumber is less than or equal to the value of
         * BigNumber(y, b), otherwise returns false.
         */P.lessThanOrEqualTo=P.lte=function(y,b){id=9;return(b=compare(this,new BigNumber(y,b)))===-1||b===0;};/*
         *  n - 0 = n
         *  n - N = N
         *  n - I = -I
         *  0 - n = -n
         *  0 - 0 = 0
         *  0 - N = N
         *  0 - I = -I
         *  N - n = N
         *  N - 0 = N
         *  N - N = N
         *  N - I = N
         *  I - n = I
         *  I - 0 = I
         *  I - N = N
         *  I - I = N
         *
         * Return a new BigNumber whose value is the value of this BigNumber minus the value of
         * BigNumber(y, b).
         */P.minus=P.sub=function(y,b){var i,j,t,xLTy,x=this,a=x.s;id=10;y=new BigNumber(y,b);b=y.s;// Either NaN?
if(!a||!b)return new BigNumber(NaN);// Signs differ?
if(a!=b){y.s=-b;return x.plus(y);}var xe=x.e/LOG_BASE,ye=y.e/LOG_BASE,xc=x.c,yc=y.c;if(!xe||!ye){// Either Infinity?
if(!xc||!yc)return xc?(y.s=-b,y):new BigNumber(yc?x:NaN);// Either zero?
if(!xc[0]||!yc[0]){// Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
return yc[0]?(y.s=-b,y):new BigNumber(xc[0]?x:// IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
ROUNDING_MODE==3?-0:0);}}xe=bitFloor(xe);ye=bitFloor(ye);xc=xc.slice();// Determine which is the bigger number.
if(a=xe-ye){if(xLTy=a<0){a=-a;t=xc;}else{ye=xe;t=yc;}t.reverse();// Prepend zeros to equalise exponents.
for(b=a;b--;t.push(0));t.reverse();}else{// Exponents equal. Check digit by digit.
j=(xLTy=(a=xc.length)<(b=yc.length))?a:b;for(a=b=0;b<j;b++){if(xc[b]!=yc[b]){xLTy=xc[b]<yc[b];break;}}}// x < y? Point xc to the array of the bigger number.
if(xLTy)t=xc,xc=yc,yc=t,y.s=-y.s;b=(j=yc.length)-(i=xc.length);// Append zeros to xc if shorter.
// No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
if(b>0)for(;b--;xc[i++]=0);b=BASE-1;// Subtract yc from xc.
for(;j>a;){if(xc[--j]<yc[j]){for(i=j;i&&!xc[--i];xc[i]=b);--xc[i];xc[j]+=BASE;}xc[j]-=yc[j];}// Remove leading zeros and adjust exponent accordingly.
for(;xc[0]==0;xc.shift(),--ye);// Zero?
if(!xc[0]){// Following IEEE 754 (2008) 6.3,
// n - n = +0  but  n - n = -0  when rounding towards -Infinity.
y.s=ROUNDING_MODE==3?-1:1;y.c=[y.e=0];return y;}// No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
// for finite x and y.
return normalise(y,xc,ye);};/*
         *   n % 0 =  N
         *   n % N =  N
         *   n % I =  n
         *   0 % n =  0
         *  -0 % n = -0
         *   0 % 0 =  N
         *   0 % N =  N
         *   0 % I =  0
         *   N % n =  N
         *   N % 0 =  N
         *   N % N =  N
         *   N % I =  N
         *   I % n =  N
         *   I % 0 =  N
         *   I % N =  N
         *   I % I =  N
         *
         * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
         * BigNumber(y, b). The result depends on the value of MODULO_MODE.
         */P.modulo=P.mod=function(y,b){var q,s,x=this;id=11;y=new BigNumber(y,b);// Return NaN if x is Infinity or NaN, or y is NaN or zero.
if(!x.c||!y.s||y.c&&!y.c[0]){return new BigNumber(NaN);// Return x if y is Infinity or x is zero.
}else if(!y.c||x.c&&!x.c[0]){return new BigNumber(x);}if(MODULO_MODE==9){// Euclidian division: q = sign(y) * floor(x / abs(y))
// r = x - qy    where  0 <= r < abs(y)
s=y.s;y.s=1;q=div(x,y,0,3);y.s=s;q.s*=s;}else{q=div(x,y,0,MODULO_MODE);}return x.minus(q.times(y));};/*
         * Return a new BigNumber whose value is the value of this BigNumber negated,
         * i.e. multiplied by -1.
         */P.negated=P.neg=function(){var x=new BigNumber(this);x.s=-x.s||null;return x;};/*
         *  n + 0 = n
         *  n + N = N
         *  n + I = I
         *  0 + n = n
         *  0 + 0 = 0
         *  0 + N = N
         *  0 + I = I
         *  N + n = N
         *  N + 0 = N
         *  N + N = N
         *  N + I = N
         *  I + n = I
         *  I + 0 = I
         *  I + N = N
         *  I + I = I
         *
         * Return a new BigNumber whose value is the value of this BigNumber plus the value of
         * BigNumber(y, b).
         */P.plus=P.add=function(y,b){var t,x=this,a=x.s;id=12;y=new BigNumber(y,b);b=y.s;// Either NaN?
if(!a||!b)return new BigNumber(NaN);// Signs differ?
if(a!=b){y.s=-b;return x.minus(y);}var xe=x.e/LOG_BASE,ye=y.e/LOG_BASE,xc=x.c,yc=y.c;if(!xe||!ye){// Return ±Infinity if either ±Infinity.
if(!xc||!yc)return new BigNumber(a/0);// Either zero?
// Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
if(!xc[0]||!yc[0])return yc[0]?y:new BigNumber(xc[0]?x:a*0);}xe=bitFloor(xe);ye=bitFloor(ye);xc=xc.slice();// Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
if(a=xe-ye){if(a>0){ye=xe;t=yc;}else{a=-a;t=xc;}t.reverse();for(;a--;t.push(0));t.reverse();}a=xc.length;b=yc.length;// Point xc to the longer array, and b to the shorter length.
if(a-b<0)t=yc,yc=xc,xc=t,b=a;// Only start adding at yc.length - 1 as the further digits of xc can be ignored.
for(a=0;b;){a=(xc[--b]=xc[b]+yc[b]+a)/BASE|0;xc[b]%=BASE;}if(a){xc.unshift(a);++ye;}// No need to check for zero, as +x + +y != 0 && -x + -y != 0
// ye = MAX_EXP + 1 possible
return normalise(y,xc,ye);};/*
         * Return the number of significant digits of the value of this BigNumber.
         *
         * [z] {boolean|number} Whether to count integer-part trailing zeros: true, false, 1 or 0.
         */P.precision=P.sd=function(z){var n,v,x=this,c=x.c;// 'precision() argument not a boolean or binary digit: {z}'
if(z!=null&&z!==!!z&&z!==1&&z!==0){if(ERRORS)raise(13,'argument'+notBool,z);if(z!=!!z)z=null;}if(!c)return null;v=c.length-1;n=v*LOG_BASE+1;if(v=c[v]){// Subtract the number of trailing zeros of the last element.
for(;v%10==0;v/=10,n--);// Add the number of digits of the first element.
for(v=c[0];v>=10;v/=10,n++);}if(z&&x.e+1>n)n=x.e+1;return n;};/*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a maximum of
         * dp decimal places using rounding mode rm, or to 0 and ROUNDING_MODE respectively if
         * omitted.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'round() decimal places out of range: {dp}'
         * 'round() decimal places not an integer: {dp}'
         * 'round() rounding mode not an integer: {rm}'
         * 'round() rounding mode out of range: {rm}'
         */P.round=function(dp,rm){var n=new BigNumber(this);if(dp==null||isValidInt(dp,0,MAX,15)){round(n,~~dp+this.e+1,rm==null||!isValidInt(rm,0,8,15,roundingMode)?ROUNDING_MODE:rm|0);}return n;};/*
         * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
         * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
         *
         * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
         *
         * If k is out of range and ERRORS is false, the result will be ±0 if k < 0, or ±Infinity
         * otherwise.
         *
         * 'shift() argument not an integer: {k}'
         * 'shift() argument out of range: {k}'
         */P.shift=function(k){var n=this;return isValidInt(k,-MAX_SAFE_INTEGER,MAX_SAFE_INTEGER,16,'argument')// k < 1e+21, or truncate(k) will produce exponential notation.
?n.times('1e'+truncate(k)):new BigNumber(n.c&&n.c[0]&&(k<-MAX_SAFE_INTEGER||k>MAX_SAFE_INTEGER)?n.s*(k<0?0:1/0):n);};/*
         *  sqrt(-n) =  N
         *  sqrt( N) =  N
         *  sqrt(-I) =  N
         *  sqrt( I) =  I
         *  sqrt( 0) =  0
         *  sqrt(-0) = -0
         *
         * Return a new BigNumber whose value is the square root of the value of this BigNumber,
         * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
         */P.squareRoot=P.sqrt=function(){var m,n,r,rep,t,x=this,c=x.c,s=x.s,e=x.e,dp=DECIMAL_PLACES+4,half=new BigNumber('0.5');// Negative/NaN/Infinity/zero?
if(s!==1||!c||!c[0]){return new BigNumber(!s||s<0&&(!c||c[0])?NaN:c?x:1/0);}// Initial estimate.
s=Math.sqrt(+x);// Math.sqrt underflow/overflow?
// Pass x to Math.sqrt as integer, then adjust the exponent of the result.
if(s==0||s==1/0){n=coeffToString(c);if((n.length+e)%2==0)n+='0';s=Math.sqrt(n);e=bitFloor((e+1)/2)-(e<0||e%2);if(s==1/0){n='1e'+e;}else{n=s.toExponential();n=n.slice(0,n.indexOf('e')+1)+e;}r=new BigNumber(n);}else{r=new BigNumber(s+'');}// Check for zero.
// r could be zero if MIN_EXP is changed after the this value was created.
// This would cause a division by zero (x/t) and hence Infinity below, which would cause
// coeffToString to throw.
if(r.c[0]){e=r.e;s=e+dp;if(s<3)s=0;// Newton-Raphson iteration.
for(;;){t=r;r=half.times(t.plus(div(x,t,dp,1)));if(coeffToString(t.c).slice(0,s)===(n=coeffToString(r.c)).slice(0,s)){// The exponent of r may here be one less than the final result exponent,
// e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
// are indexed correctly.
if(r.e<e)--s;n=n.slice(s-3,s+1);// The 4th rounding digit may be in error by -1 so if the 4 rounding digits
// are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
// iteration.
if(n=='9999'||!rep&&n=='4999'){// On the first iteration only, check to see if rounding up gives the
// exact result as the nines may infinitely repeat.
if(!rep){round(t,t.e+DECIMAL_PLACES+2,0);if(t.times(t).eq(x)){r=t;break;}}dp+=4;s+=4;rep=1;}else{// If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
// result. If not, then there are further digits and m will be truthy.
if(!+n||!+n.slice(1)&&n.charAt(0)=='5'){// Truncate to the first rounding digit.
round(r,r.e+DECIMAL_PLACES+2,1);m=!r.times(r).eq(x);}break;}}}}return round(r,r.e+DECIMAL_PLACES+1,ROUNDING_MODE,m);};/*
         *  n * 0 = 0
         *  n * N = N
         *  n * I = I
         *  0 * n = 0
         *  0 * 0 = 0
         *  0 * N = N
         *  0 * I = N
         *  N * n = N
         *  N * 0 = N
         *  N * N = N
         *  N * I = N
         *  I * n = I
         *  I * 0 = N
         *  I * N = N
         *  I * I = I
         *
         * Return a new BigNumber whose value is the value of this BigNumber times the value of
         * BigNumber(y, b).
         */P.times=P.mul=function(y,b){var c,e,i,j,k,m,xcL,xlo,xhi,ycL,ylo,yhi,zc,base,sqrtBase,x=this,xc=x.c,yc=(id=17,y=new BigNumber(y,b)).c;// Either NaN, ±Infinity or ±0?
if(!xc||!yc||!xc[0]||!yc[0]){// Return NaN if either is NaN, or one is 0 and the other is Infinity.
if(!x.s||!y.s||xc&&!xc[0]&&!yc||yc&&!yc[0]&&!xc){y.c=y.e=y.s=null;}else{y.s*=x.s;// Return ±Infinity if either is ±Infinity.
if(!xc||!yc){y.c=y.e=null;// Return ±0 if either is ±0.
}else{y.c=[0];y.e=0;}}return y;}e=bitFloor(x.e/LOG_BASE)+bitFloor(y.e/LOG_BASE);y.s*=x.s;xcL=xc.length;ycL=yc.length;// Ensure xc points to longer array and xcL to its length.
if(xcL<ycL)zc=xc,xc=yc,yc=zc,i=xcL,xcL=ycL,ycL=i;// Initialise the result array with zeros.
for(i=xcL+ycL,zc=[];i--;zc.push(0));base=BASE;sqrtBase=SQRT_BASE;for(i=ycL;--i>=0;){c=0;ylo=yc[i]%sqrtBase;yhi=yc[i]/sqrtBase|0;for(k=xcL,j=i+k;j>i;){xlo=xc[--k]%sqrtBase;xhi=xc[k]/sqrtBase|0;m=yhi*xlo+xhi*ylo;xlo=ylo*xlo+m%sqrtBase*sqrtBase+zc[j]+c;c=(xlo/base|0)+(m/sqrtBase|0)+yhi*xhi;zc[j--]=xlo%base;}zc[j]=c;}if(c){++e;}else{zc.shift();}return normalise(y,zc,e);};/*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a maximum of
         * sd significant digits using rounding mode rm, or ROUNDING_MODE if rm is omitted.
         *
         * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toDigits() precision out of range: {sd}'
         * 'toDigits() precision not an integer: {sd}'
         * 'toDigits() rounding mode not an integer: {rm}'
         * 'toDigits() rounding mode out of range: {rm}'
         */P.toDigits=function(sd,rm){var n=new BigNumber(this);sd=sd==null||!isValidInt(sd,1,MAX,18,'precision')?null:sd|0;rm=rm==null||!isValidInt(rm,0,8,18,roundingMode)?ROUNDING_MODE:rm|0;return sd?round(n,sd,rm):n;};/*
         * Return a string representing the value of this BigNumber in exponential notation and
         * rounded using ROUNDING_MODE to dp fixed decimal places.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toExponential() decimal places not an integer: {dp}'
         * 'toExponential() decimal places out of range: {dp}'
         * 'toExponential() rounding mode not an integer: {rm}'
         * 'toExponential() rounding mode out of range: {rm}'
         */P.toExponential=function(dp,rm){return format(this,dp!=null&&isValidInt(dp,0,MAX,19)?~~dp+1:null,rm,19);};/*
         * Return a string representing the value of this BigNumber in fixed-point notation rounding
         * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
         *
         * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
         * but e.g. (-0.00001).toFixed(0) is '-0'.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toFixed() decimal places not an integer: {dp}'
         * 'toFixed() decimal places out of range: {dp}'
         * 'toFixed() rounding mode not an integer: {rm}'
         * 'toFixed() rounding mode out of range: {rm}'
         */P.toFixed=function(dp,rm){return format(this,dp!=null&&isValidInt(dp,0,MAX,20)?~~dp+this.e+1:null,rm,20);};/*
         * Return a string representing the value of this BigNumber in fixed-point notation rounded
         * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
         * of the FORMAT object (see BigNumber.config).
         *
         * FORMAT = {
         *      decimalSeparator : '.',
         *      groupSeparator : ',',
         *      groupSize : 3,
         *      secondaryGroupSize : 0,
         *      fractionGroupSeparator : '\xA0',    // non-breaking space
         *      fractionGroupSize : 0
         * };
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toFormat() decimal places not an integer: {dp}'
         * 'toFormat() decimal places out of range: {dp}'
         * 'toFormat() rounding mode not an integer: {rm}'
         * 'toFormat() rounding mode out of range: {rm}'
         */P.toFormat=function(dp,rm){var str=format(this,dp!=null&&isValidInt(dp,0,MAX,21)?~~dp+this.e+1:null,rm,21);if(this.c){var i,arr=str.split('.'),g1=+FORMAT.groupSize,g2=+FORMAT.secondaryGroupSize,groupSeparator=FORMAT.groupSeparator,intPart=arr[0],fractionPart=arr[1],isNeg=this.s<0,intDigits=isNeg?intPart.slice(1):intPart,len=intDigits.length;if(g2)i=g1,g1=g2,g2=i,len-=i;if(g1>0&&len>0){i=len%g1||g1;intPart=intDigits.substr(0,i);for(;i<len;i+=g1){intPart+=groupSeparator+intDigits.substr(i,g1);}if(g2>0)intPart+=groupSeparator+intDigits.slice(i);if(isNeg)intPart='-'+intPart;}str=fractionPart?intPart+FORMAT.decimalSeparator+((g2=+FORMAT.fractionGroupSize)?fractionPart.replace(new RegExp('\\d{'+g2+'}\\B','g'),'$&'+FORMAT.fractionGroupSeparator):fractionPart):intPart;}return str;};/*
         * Return a string array representing the value of this BigNumber as a simple fraction with
         * an integer numerator and an integer denominator. The denominator will be a positive
         * non-zero value less than or equal to the specified maximum denominator. If a maximum
         * denominator is not specified, the denominator will be the lowest value necessary to
         * represent the number exactly.
         *
         * [md] {number|string|BigNumber} Integer >= 1 and < Infinity. The maximum denominator.
         *
         * 'toFraction() max denominator not an integer: {md}'
         * 'toFraction() max denominator out of range: {md}'
         */P.toFraction=function(md){var arr,d0,d2,e,exp,n,n0,q,s,k=ERRORS,x=this,xc=x.c,d=new BigNumber(ONE),n1=d0=new BigNumber(ONE),d1=n0=new BigNumber(ONE);if(md!=null){ERRORS=false;n=new BigNumber(md);ERRORS=k;if(!(k=n.isInt())||n.lt(ONE)){if(ERRORS){raise(22,'max denominator '+(k?'out of range':'not an integer'),md);}// ERRORS is false:
// If md is a finite non-integer >= 1, round it to an integer and use it.
md=!k&&n.c&&round(n,n.e+1,1).gte(ONE)?n:null;}}if(!xc)return x.toString();s=coeffToString(xc);// Determine initial denominator.
// d is a power of 10 and the minimum max denominator that specifies the value exactly.
e=d.e=s.length-x.e-1;d.c[0]=POWS_TEN[(exp=e%LOG_BASE)<0?LOG_BASE+exp:exp];md=!md||n.cmp(d)>0?e>0?d:n1:n;exp=MAX_EXP;MAX_EXP=1/0;n=new BigNumber(s);// n0 = d1 = 0
n0.c[0]=0;for(;;){q=div(n,d,0,1);d2=d0.plus(q.times(d1));if(d2.cmp(md)==1)break;d0=d1;d1=d2;n1=n0.plus(q.times(d2=n1));n0=d2;d=n.minus(q.times(d2=d));n=d2;}d2=div(md.minus(d0),d1,0,1);n0=n0.plus(d2.times(n1));d0=d0.plus(d2.times(d1));n0.s=n1.s=x.s;e*=2;// Determine which fraction is closer to x, n0/d0 or n1/d1
arr=div(n1,d1,e,ROUNDING_MODE).minus(x).abs().cmp(div(n0,d0,e,ROUNDING_MODE).minus(x).abs())<1?[n1.toString(),d1.toString()]:[n0.toString(),d0.toString()];MAX_EXP=exp;return arr;};/*
         * Return the value of this BigNumber converted to a number primitive.
         */P.toNumber=function(){var x=this;// Ensure zero has correct sign.
return+x||(x.s?x.s*0:NaN);};/*
         * Return a BigNumber whose value is the value of this BigNumber raised to the power n.
         * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
         * If POW_PRECISION is not 0, round to POW_PRECISION using ROUNDING_MODE.
         *
         * n {number} Integer, -9007199254740992 to 9007199254740992 inclusive.
         * (Performs 54 loop iterations for n of 9007199254740992.)
         *
         * 'pow() exponent not an integer: {n}'
         * 'pow() exponent out of range: {n}'
         */P.toPower=P.pow=function(n){var k,y,i=mathfloor(n<0?-n:+n),x=this;// Pass ±Infinity to Math.pow if exponent is out of range.
if(!isValidInt(n,-MAX_SAFE_INTEGER,MAX_SAFE_INTEGER,23,'exponent')&&(!isFinite(n)||i>MAX_SAFE_INTEGER&&(n/=0)||parseFloat(n)!=n&&!(n=NaN))){return new BigNumber(Math.pow(+x,n));}// Truncating each coefficient array to a length of k after each multiplication equates
// to truncating significant digits to POW_PRECISION + [28, 41], i.e. there will be a
// minimum of 28 guard digits retained. (Using + 1.5 would give [9, 21] guard digits.)
k=POW_PRECISION?mathceil(POW_PRECISION/LOG_BASE+2):0;y=new BigNumber(ONE);for(;;){if(i%2){y=y.times(x);if(!y.c)break;if(k&&y.c.length>k)y.c.length=k;}i=mathfloor(i/2);if(!i)break;x=x.times(x);if(k&&x.c&&x.c.length>k)x.c.length=k;}if(n<0)y=ONE.div(y);return k?round(y,POW_PRECISION,ROUNDING_MODE):y;};/*
         * Return a string representing the value of this BigNumber rounded to sd significant digits
         * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
         * necessary to represent the integer part of the value in fixed-point notation, then use
         * exponential notation.
         *
         * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toPrecision() precision not an integer: {sd}'
         * 'toPrecision() precision out of range: {sd}'
         * 'toPrecision() rounding mode not an integer: {rm}'
         * 'toPrecision() rounding mode out of range: {rm}'
         */P.toPrecision=function(sd,rm){return format(this,sd!=null&&isValidInt(sd,1,MAX,24,'precision')?sd|0:null,rm,24);};/*
         * Return a string representing the value of this BigNumber in base b, or base 10 if b is
         * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
         * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
         * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
         * TO_EXP_NEG, return exponential notation.
         *
         * [b] {number} Integer, 2 to 64 inclusive.
         *
         * 'toString() base not an integer: {b}'
         * 'toString() base out of range: {b}'
         */P.toString=function(b){var str,n=this,s=n.s,e=n.e;// Infinity or NaN?
if(e===null){if(s){str='Infinity';if(s<0)str='-'+str;}else{str='NaN';}}else{str=coeffToString(n.c);if(b==null||!isValidInt(b,2,64,25,'base')){str=e<=TO_EXP_NEG||e>=TO_EXP_POS?toExponential(str,e):toFixedPoint(str,e);}else{str=convertBase(toFixedPoint(str,e),b|0,10,s);}if(s<0&&n.c[0])str='-'+str;}return str;};/*
         * Return a new BigNumber whose value is the value of this BigNumber truncated to a whole
         * number.
         */P.truncated=P.trunc=function(){return round(new BigNumber(this),this.e+1,1);};/*
         * Return as toString, but do not accept a base argument.
         */P.valueOf=P.toJSON=function(){return this.toString();};// Aliases for BigDecimal methods.
//P.add = P.plus;         // P.add included above
//P.subtract = P.minus;   // P.sub included above
//P.multiply = P.times;   // P.mul included above
//P.divide = P.div;
//P.remainder = P.mod;
//P.compareTo = P.cmp;
//P.negate = P.neg;
if(configObj!=null)BigNumber.config(configObj);return BigNumber;}// PRIVATE HELPER FUNCTIONS
function bitFloor(n){var i=n|0;return n>0||n===i?i:i-1;}// Return a coefficient array as a string of base 10 digits.
function coeffToString(a){var s,z,i=1,j=a.length,r=a[0]+'';for(;i<j;){s=a[i++]+'';z=LOG_BASE-s.length;for(;z--;s='0'+s);r+=s;}// Determine trailing zeros.
for(j=r.length;r.charCodeAt(--j)===48;);return r.slice(0,j+1||1);}// Compare the value of BigNumbers x and y.
function compare(x,y){var a,b,xc=x.c,yc=y.c,i=x.s,j=y.s,k=x.e,l=y.e;// Either NaN?
if(!i||!j)return null;a=xc&&!xc[0];b=yc&&!yc[0];// Either zero?
if(a||b)return a?b?0:-j:i;// Signs differ?
if(i!=j)return i;a=i<0;b=k==l;// Either Infinity?
if(!xc||!yc)return b?0:!xc^a?1:-1;// Compare exponents.
if(!b)return k>l^a?1:-1;j=(k=xc.length)<(l=yc.length)?k:l;// Compare digit by digit.
for(i=0;i<j;i++)if(xc[i]!=yc[i])return xc[i]>yc[i]^a?1:-1;// Compare lengths.
return k==l?0:k>l^a?1:-1;}/*
     * Return true if n is a valid number in range, otherwise false.
     * Use for argument validation when ERRORS is false.
     * Note: parseInt('1e+1') == 1 but parseFloat('1e+1') == 10.
     */function intValidatorNoErrors(n,min,max){return(n=truncate(n))>=min&&n<=max;}function isArray(obj){return Object.prototype.toString.call(obj)=='[object Array]';}/*
     * Convert string of baseIn to an array of numbers of baseOut.
     * Eg. convertBase('255', 10, 16) returns [15, 15].
     * Eg. convertBase('ff', 16, 10) returns [2, 5, 5].
     */function toBaseOut(str,baseIn,baseOut){var j,arr=[0],arrL,i=0,len=str.length;for(;i<len;){for(arrL=arr.length;arrL--;arr[arrL]*=baseIn);arr[j=0]+=ALPHABET.indexOf(str.charAt(i++));for(;j<arr.length;j++){if(arr[j]>baseOut-1){if(arr[j+1]==null)arr[j+1]=0;arr[j+1]+=arr[j]/baseOut|0;arr[j]%=baseOut;}}}return arr.reverse();}function toExponential(str,e){return(str.length>1?str.charAt(0)+'.'+str.slice(1):str)+(e<0?'e':'e+')+e;}function toFixedPoint(str,e){var len,z;// Negative exponent?
if(e<0){// Prepend zeros.
for(z='0.';++e;z+='0');str=z+str;// Positive exponent
}else{len=str.length;// Append zeros.
if(++e>len){for(z='0',e-=len;--e;z+='0');str+=z;}else if(e<len){str=str.slice(0,e)+'.'+str.slice(e);}}return str;}function truncate(n){n=parseFloat(n);return n<0?mathceil(n):mathfloor(n);}// EXPORT
BigNumber=another();// AMD.
if(typeof define=='function'&&define.amd){define(function(){return BigNumber;});// Node and other environments that support module.exports.
}else if(typeof module!='undefined'&&module.exports){module.exports=BigNumber;if(!crypto)try{crypto=require('crypto');}catch(e){}// Browser.
}else{global.BigNumber=BigNumber;}})(this);},{"crypto":99}],59:[function(require,module,exports){;(function(root,factory,undef){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"),require("./enc-base64"),require("./md5"),require("./evpkdf"),require("./cipher-core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){(function(){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var BlockCipher=C_lib.BlockCipher;var C_algo=C.algo;// Lookup tables
var SBOX=[];var INV_SBOX=[];var SUB_MIX_0=[];var SUB_MIX_1=[];var SUB_MIX_2=[];var SUB_MIX_3=[];var INV_SUB_MIX_0=[];var INV_SUB_MIX_1=[];var INV_SUB_MIX_2=[];var INV_SUB_MIX_3=[];// Compute lookup tables
(function(){// Compute double table
var d=[];for(var i=0;i<256;i++){if(i<128){d[i]=i<<1;}else{d[i]=i<<1^0x11b;}}// Walk GF(2^8)
var x=0;var xi=0;for(var i=0;i<256;i++){// Compute sbox
var sx=xi^xi<<1^xi<<2^xi<<3^xi<<4;sx=sx>>>8^sx&0xff^0x63;SBOX[x]=sx;INV_SBOX[sx]=x;// Compute multiplication
var x2=d[x];var x4=d[x2];var x8=d[x4];// Compute sub bytes, mix columns tables
var t=d[sx]*0x101^sx*0x1010100;SUB_MIX_0[x]=t<<24|t>>>8;SUB_MIX_1[x]=t<<16|t>>>16;SUB_MIX_2[x]=t<<8|t>>>24;SUB_MIX_3[x]=t;// Compute inv sub bytes, inv mix columns tables
var t=x8*0x1010101^x4*0x10001^x2*0x101^x*0x1010100;INV_SUB_MIX_0[sx]=t<<24|t>>>8;INV_SUB_MIX_1[sx]=t<<16|t>>>16;INV_SUB_MIX_2[sx]=t<<8|t>>>24;INV_SUB_MIX_3[sx]=t;// Compute next counter
if(!x){x=xi=1;}else{x=x2^d[d[d[x8^x2]]];xi^=d[d[xi]];}}})();// Precomputed Rcon lookup
var RCON=[0x00,0x01,0x02,0x04,0x08,0x10,0x20,0x40,0x80,0x1b,0x36];/**
	     * AES block cipher algorithm.
	     */var AES=C_algo.AES=BlockCipher.extend({_doReset:function(){// Shortcuts
var key=this._key;var keyWords=key.words;var keySize=key.sigBytes/4;// Compute number of rounds
var nRounds=this._nRounds=keySize+6;// Compute number of key schedule rows
var ksRows=(nRounds+1)*4;// Compute key schedule
var keySchedule=this._keySchedule=[];for(var ksRow=0;ksRow<ksRows;ksRow++){if(ksRow<keySize){keySchedule[ksRow]=keyWords[ksRow];}else{var t=keySchedule[ksRow-1];if(!(ksRow%keySize)){// Rot word
t=t<<8|t>>>24;// Sub word
t=SBOX[t>>>24]<<24|SBOX[t>>>16&0xff]<<16|SBOX[t>>>8&0xff]<<8|SBOX[t&0xff];// Mix Rcon
t^=RCON[ksRow/keySize|0]<<24;}else if(keySize>6&&ksRow%keySize==4){// Sub word
t=SBOX[t>>>24]<<24|SBOX[t>>>16&0xff]<<16|SBOX[t>>>8&0xff]<<8|SBOX[t&0xff];}keySchedule[ksRow]=keySchedule[ksRow-keySize]^t;}}// Compute inv key schedule
var invKeySchedule=this._invKeySchedule=[];for(var invKsRow=0;invKsRow<ksRows;invKsRow++){var ksRow=ksRows-invKsRow;if(invKsRow%4){var t=keySchedule[ksRow];}else{var t=keySchedule[ksRow-4];}if(invKsRow<4||ksRow<=4){invKeySchedule[invKsRow]=t;}else{invKeySchedule[invKsRow]=INV_SUB_MIX_0[SBOX[t>>>24]]^INV_SUB_MIX_1[SBOX[t>>>16&0xff]]^INV_SUB_MIX_2[SBOX[t>>>8&0xff]]^INV_SUB_MIX_3[SBOX[t&0xff]];}}},encryptBlock:function(M,offset){this._doCryptBlock(M,offset,this._keySchedule,SUB_MIX_0,SUB_MIX_1,SUB_MIX_2,SUB_MIX_3,SBOX);},decryptBlock:function(M,offset){// Swap 2nd and 4th rows
var t=M[offset+1];M[offset+1]=M[offset+3];M[offset+3]=t;this._doCryptBlock(M,offset,this._invKeySchedule,INV_SUB_MIX_0,INV_SUB_MIX_1,INV_SUB_MIX_2,INV_SUB_MIX_3,INV_SBOX);// Inv swap 2nd and 4th rows
var t=M[offset+1];M[offset+1]=M[offset+3];M[offset+3]=t;},_doCryptBlock:function(M,offset,keySchedule,SUB_MIX_0,SUB_MIX_1,SUB_MIX_2,SUB_MIX_3,SBOX){// Shortcut
var nRounds=this._nRounds;// Get input, add round key
var s0=M[offset]^keySchedule[0];var s1=M[offset+1]^keySchedule[1];var s2=M[offset+2]^keySchedule[2];var s3=M[offset+3]^keySchedule[3];// Key schedule row counter
var ksRow=4;// Rounds
for(var round=1;round<nRounds;round++){// Shift rows, sub bytes, mix columns, add round key
var t0=SUB_MIX_0[s0>>>24]^SUB_MIX_1[s1>>>16&0xff]^SUB_MIX_2[s2>>>8&0xff]^SUB_MIX_3[s3&0xff]^keySchedule[ksRow++];var t1=SUB_MIX_0[s1>>>24]^SUB_MIX_1[s2>>>16&0xff]^SUB_MIX_2[s3>>>8&0xff]^SUB_MIX_3[s0&0xff]^keySchedule[ksRow++];var t2=SUB_MIX_0[s2>>>24]^SUB_MIX_1[s3>>>16&0xff]^SUB_MIX_2[s0>>>8&0xff]^SUB_MIX_3[s1&0xff]^keySchedule[ksRow++];var t3=SUB_MIX_0[s3>>>24]^SUB_MIX_1[s0>>>16&0xff]^SUB_MIX_2[s1>>>8&0xff]^SUB_MIX_3[s2&0xff]^keySchedule[ksRow++];// Update state
s0=t0;s1=t1;s2=t2;s3=t3;}// Shift rows, sub bytes, add round key
var t0=(SBOX[s0>>>24]<<24|SBOX[s1>>>16&0xff]<<16|SBOX[s2>>>8&0xff]<<8|SBOX[s3&0xff])^keySchedule[ksRow++];var t1=(SBOX[s1>>>24]<<24|SBOX[s2>>>16&0xff]<<16|SBOX[s3>>>8&0xff]<<8|SBOX[s0&0xff])^keySchedule[ksRow++];var t2=(SBOX[s2>>>24]<<24|SBOX[s3>>>16&0xff]<<16|SBOX[s0>>>8&0xff]<<8|SBOX[s1&0xff])^keySchedule[ksRow++];var t3=(SBOX[s3>>>24]<<24|SBOX[s0>>>16&0xff]<<16|SBOX[s1>>>8&0xff]<<8|SBOX[s2&0xff])^keySchedule[ksRow++];// Set output
M[offset]=t0;M[offset+1]=t1;M[offset+2]=t2;M[offset+3]=t3;},keySize:256/32});/**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
	     */C.AES=BlockCipher._createHelper(AES);})();return CryptoJS.AES;});},{"./cipher-core":60,"./core":61,"./enc-base64":62,"./evpkdf":64,"./md5":69}],60:[function(require,module,exports){;(function(root,factory){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){/**
	 * Cipher core components.
	 */CryptoJS.lib.Cipher||function(undefined){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var Base=C_lib.Base;var WordArray=C_lib.WordArray;var BufferedBlockAlgorithm=C_lib.BufferedBlockAlgorithm;var C_enc=C.enc;var Utf8=C_enc.Utf8;var Base64=C_enc.Base64;var C_algo=C.algo;var EvpKDF=C_algo.EvpKDF;/**
	     * Abstract base cipher template.
	     *
	     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
	     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
	     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
	     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
	     */var Cipher=C_lib.Cipher=BufferedBlockAlgorithm.extend({/**
	         * Configuration options.
	         *
	         * @property {WordArray} iv The IV to use for this operation.
	         */cfg:Base.extend(),/**
	         * Creates this cipher in encryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
	         */createEncryptor:function(key,cfg){return this.create(this._ENC_XFORM_MODE,key,cfg);},/**
	         * Creates this cipher in decryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
	         */createDecryptor:function(key,cfg){return this.create(this._DEC_XFORM_MODE,key,cfg);},/**
	         * Initializes a newly created cipher.
	         *
	         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
	         */init:function(xformMode,key,cfg){// Apply config defaults
this.cfg=this.cfg.extend(cfg);// Store transform mode and key
this._xformMode=xformMode;this._key=key;// Set initial values
this.reset();},/**
	         * Resets this cipher to its initial state.
	         *
	         * @example
	         *
	         *     cipher.reset();
	         */reset:function(){// Reset data buffer
BufferedBlockAlgorithm.reset.call(this);// Perform concrete-cipher logic
this._doReset();},/**
	         * Adds data to be encrypted or decrypted.
	         *
	         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.process('data');
	         *     var encrypted = cipher.process(wordArray);
	         */process:function(dataUpdate){// Append
this._append(dataUpdate);// Process available blocks
return this._process();},/**
	         * Finalizes the encryption or decryption process.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after final processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.finalize();
	         *     var encrypted = cipher.finalize('data');
	         *     var encrypted = cipher.finalize(wordArray);
	         */finalize:function(dataUpdate){// Final data update
if(dataUpdate){this._append(dataUpdate);}// Perform concrete-cipher logic
var finalProcessedData=this._doFinalize();return finalProcessedData;},keySize:128/32,ivSize:128/32,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,/**
	         * Creates shortcut functions to a cipher's object interface.
	         *
	         * @param {Cipher} cipher The cipher to create a helper for.
	         *
	         * @return {Object} An object with encrypt and decrypt shortcut functions.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
	         */_createHelper:function(){function selectCipherStrategy(key){if(typeof key=='string'){return PasswordBasedCipher;}else{return SerializableCipher;}}return function(cipher){return{encrypt:function(message,key,cfg){return selectCipherStrategy(key).encrypt(cipher,message,key,cfg);},decrypt:function(ciphertext,key,cfg){return selectCipherStrategy(key).decrypt(cipher,ciphertext,key,cfg);}};};}()});/**
	     * Abstract base stream cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
	     */var StreamCipher=C_lib.StreamCipher=Cipher.extend({_doFinalize:function(){// Process partial blocks
var finalProcessedBlocks=this._process(!!'flush');return finalProcessedBlocks;},blockSize:1});/**
	     * Mode namespace.
	     */var C_mode=C.mode={};/**
	     * Abstract base block cipher mode template.
	     */var BlockCipherMode=C_lib.BlockCipherMode=Base.extend({/**
	         * Creates this mode for encryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
	         */createEncryptor:function(cipher,iv){return this.Encryptor.create(cipher,iv);},/**
	         * Creates this mode for decryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
	         */createDecryptor:function(cipher,iv){return this.Decryptor.create(cipher,iv);},/**
	         * Initializes a newly created mode.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
	         */init:function(cipher,iv){this._cipher=cipher;this._iv=iv;}});/**
	     * Cipher Block Chaining mode.
	     */var CBC=C_mode.CBC=function(){/**
	         * Abstract base CBC mode.
	         */var CBC=BlockCipherMode.extend();/**
	         * CBC encryptor.
	         */CBC.Encryptor=CBC.extend({/**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */processBlock:function(words,offset){// Shortcuts
var cipher=this._cipher;var blockSize=cipher.blockSize;// XOR and encrypt
xorBlock.call(this,words,offset,blockSize);cipher.encryptBlock(words,offset);// Remember this block to use with next block
this._prevBlock=words.slice(offset,offset+blockSize);}});/**
	         * CBC decryptor.
	         */CBC.Decryptor=CBC.extend({/**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */processBlock:function(words,offset){// Shortcuts
var cipher=this._cipher;var blockSize=cipher.blockSize;// Remember this block to use with next block
var thisBlock=words.slice(offset,offset+blockSize);// Decrypt and XOR
cipher.decryptBlock(words,offset);xorBlock.call(this,words,offset,blockSize);// This block becomes the previous block
this._prevBlock=thisBlock;}});function xorBlock(words,offset,blockSize){// Shortcut
var iv=this._iv;// Choose mixing block
if(iv){var block=iv;// Remove IV for subsequent blocks
this._iv=undefined;}else{var block=this._prevBlock;}// XOR blocks
for(var i=0;i<blockSize;i++){words[offset+i]^=block[i];}}return CBC;}();/**
	     * Padding namespace.
	     */var C_pad=C.pad={};/**
	     * PKCS #5/7 padding strategy.
	     */var Pkcs7=C_pad.Pkcs7={/**
	         * Pads data using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to pad.
	         * @param {number} blockSize The multiple that the data should be padded to.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
	         */pad:function(data,blockSize){// Shortcut
var blockSizeBytes=blockSize*4;// Count padding bytes
var nPaddingBytes=blockSizeBytes-data.sigBytes%blockSizeBytes;// Create padding word
var paddingWord=nPaddingBytes<<24|nPaddingBytes<<16|nPaddingBytes<<8|nPaddingBytes;// Create padding
var paddingWords=[];for(var i=0;i<nPaddingBytes;i+=4){paddingWords.push(paddingWord);}var padding=WordArray.create(paddingWords,nPaddingBytes);// Add padding
data.concat(padding);},/**
	         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to unpad.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
	         */unpad:function(data){// Get number of padding bytes from last byte
var nPaddingBytes=data.words[data.sigBytes-1>>>2]&0xff;// Remove padding
data.sigBytes-=nPaddingBytes;}};/**
	     * Abstract base block cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
	     */var BlockCipher=C_lib.BlockCipher=Cipher.extend({/**
	         * Configuration options.
	         *
	         * @property {Mode} mode The block mode to use. Default: CBC
	         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
	         */cfg:Cipher.cfg.extend({mode:CBC,padding:Pkcs7}),reset:function(){// Reset cipher
Cipher.reset.call(this);// Shortcuts
var cfg=this.cfg;var iv=cfg.iv;var mode=cfg.mode;// Reset block mode
if(this._xformMode==this._ENC_XFORM_MODE){var modeCreator=mode.createEncryptor;}else/* if (this._xformMode == this._DEC_XFORM_MODE) */{var modeCreator=mode.createDecryptor;// Keep at least one block in the buffer for unpadding
this._minBufferSize=1;}this._mode=modeCreator.call(mode,this,iv&&iv.words);},_doProcessBlock:function(words,offset){this._mode.processBlock(words,offset);},_doFinalize:function(){// Shortcut
var padding=this.cfg.padding;// Finalize
if(this._xformMode==this._ENC_XFORM_MODE){// Pad data
padding.pad(this._data,this.blockSize);// Process final blocks
var finalProcessedBlocks=this._process(!!'flush');}else/* if (this._xformMode == this._DEC_XFORM_MODE) */{// Process final blocks
var finalProcessedBlocks=this._process(!!'flush');// Unpad data
padding.unpad(finalProcessedBlocks);}return finalProcessedBlocks;},blockSize:128/32});/**
	     * A collection of cipher parameters.
	     *
	     * @property {WordArray} ciphertext The raw ciphertext.
	     * @property {WordArray} key The key to this ciphertext.
	     * @property {WordArray} iv The IV used in the ciphering operation.
	     * @property {WordArray} salt The salt used with a key derivation function.
	     * @property {Cipher} algorithm The cipher algorithm.
	     * @property {Mode} mode The block mode used in the ciphering operation.
	     * @property {Padding} padding The padding scheme used in the ciphering operation.
	     * @property {number} blockSize The block size of the cipher.
	     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
	     */var CipherParams=C_lib.CipherParams=Base.extend({/**
	         * Initializes a newly created cipher params object.
	         *
	         * @param {Object} cipherParams An object with any of the possible cipher parameters.
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.lib.CipherParams.create({
	         *         ciphertext: ciphertextWordArray,
	         *         key: keyWordArray,
	         *         iv: ivWordArray,
	         *         salt: saltWordArray,
	         *         algorithm: CryptoJS.algo.AES,
	         *         mode: CryptoJS.mode.CBC,
	         *         padding: CryptoJS.pad.PKCS7,
	         *         blockSize: 4,
	         *         formatter: CryptoJS.format.OpenSSL
	         *     });
	         */init:function(cipherParams){this.mixIn(cipherParams);},/**
	         * Converts this cipher params object to a string.
	         *
	         * @param {Format} formatter (Optional) The formatting strategy to use.
	         *
	         * @return {string} The stringified cipher params.
	         *
	         * @throws Error If neither the formatter nor the default formatter is set.
	         *
	         * @example
	         *
	         *     var string = cipherParams + '';
	         *     var string = cipherParams.toString();
	         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
	         */toString:function(formatter){return(formatter||this.formatter).stringify(this);}});/**
	     * Format namespace.
	     */var C_format=C.format={};/**
	     * OpenSSL formatting strategy.
	     */var OpenSSLFormatter=C_format.OpenSSL={/**
	         * Converts a cipher params object to an OpenSSL-compatible string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The OpenSSL-compatible string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
	         */stringify:function(cipherParams){// Shortcuts
var ciphertext=cipherParams.ciphertext;var salt=cipherParams.salt;// Format
if(salt){var wordArray=WordArray.create([0x53616c74,0x65645f5f]).concat(salt).concat(ciphertext);}else{var wordArray=ciphertext;}return wordArray.toString(Base64);},/**
	         * Converts an OpenSSL-compatible string to a cipher params object.
	         *
	         * @param {string} openSSLStr The OpenSSL-compatible string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
	         */parse:function(openSSLStr){// Parse base64
var ciphertext=Base64.parse(openSSLStr);// Shortcut
var ciphertextWords=ciphertext.words;// Test for salt
if(ciphertextWords[0]==0x53616c74&&ciphertextWords[1]==0x65645f5f){// Extract salt
var salt=WordArray.create(ciphertextWords.slice(2,4));// Remove salt from ciphertext
ciphertextWords.splice(0,4);ciphertext.sigBytes-=16;}return CipherParams.create({ciphertext:ciphertext,salt:salt});}};/**
	     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
	     */var SerializableCipher=C_lib.SerializableCipher=Base.extend({/**
	         * Configuration options.
	         *
	         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
	         */cfg:Base.extend({format:OpenSSLFormatter}),/**
	         * Encrypts a message.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */encrypt:function(cipher,message,key,cfg){// Apply config defaults
cfg=this.cfg.extend(cfg);// Encrypt
var encryptor=cipher.createEncryptor(key,cfg);var ciphertext=encryptor.finalize(message);// Shortcut
var cipherCfg=encryptor.cfg;// Create and return serializable cipher params
return CipherParams.create({ciphertext:ciphertext,key:key,iv:cipherCfg.iv,algorithm:cipher,mode:cipherCfg.mode,padding:cipherCfg.padding,blockSize:cipher.blockSize,formatter:cfg.format});},/**
	         * Decrypts serialized ciphertext.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */decrypt:function(cipher,ciphertext,key,cfg){// Apply config defaults
cfg=this.cfg.extend(cfg);// Convert string to CipherParams
ciphertext=this._parse(ciphertext,cfg.format);// Decrypt
var plaintext=cipher.createDecryptor(key,cfg).finalize(ciphertext.ciphertext);return plaintext;},/**
	         * Converts serialized ciphertext to CipherParams,
	         * else assumed CipherParams already and returns ciphertext unchanged.
	         *
	         * @param {CipherParams|string} ciphertext The ciphertext.
	         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
	         *
	         * @return {CipherParams} The unserialized ciphertext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
	         */_parse:function(ciphertext,format){if(typeof ciphertext=='string'){return format.parse(ciphertext,this);}else{return ciphertext;}}});/**
	     * Key derivation function namespace.
	     */var C_kdf=C.kdf={};/**
	     * OpenSSL key derivation function.
	     */var OpenSSLKdf=C_kdf.OpenSSL={/**
	         * Derives a key and IV from a password.
	         *
	         * @param {string} password The password to derive from.
	         * @param {number} keySize The size in words of the key to generate.
	         * @param {number} ivSize The size in words of the IV to generate.
	         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
	         *
	         * @return {CipherParams} A cipher params object with the key, IV, and salt.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
	         */execute:function(password,keySize,ivSize,salt){// Generate random salt
if(!salt){salt=WordArray.random(64/8);}// Derive key and IV
var key=EvpKDF.create({keySize:keySize+ivSize}).compute(password,salt);// Separate key and IV
var iv=WordArray.create(key.words.slice(keySize),ivSize*4);key.sigBytes=keySize*4;// Return params
return CipherParams.create({key:key,iv:iv,salt:salt});}};/**
	     * A serializable cipher wrapper that derives the key from a password,
	     * and returns ciphertext as a serializable cipher params object.
	     */var PasswordBasedCipher=C_lib.PasswordBasedCipher=SerializableCipher.extend({/**
	         * Configuration options.
	         *
	         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
	         */cfg:SerializableCipher.cfg.extend({kdf:OpenSSLKdf}),/**
	         * Encrypts a message using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
	         */encrypt:function(cipher,message,password,cfg){// Apply config defaults
cfg=this.cfg.extend(cfg);// Derive key and other params
var derivedParams=cfg.kdf.execute(password,cipher.keySize,cipher.ivSize);// Add IV to config
cfg.iv=derivedParams.iv;// Encrypt
var ciphertext=SerializableCipher.encrypt.call(this,cipher,message,derivedParams.key,cfg);// Mix in derived params
ciphertext.mixIn(derivedParams);return ciphertext;},/**
	         * Decrypts serialized ciphertext using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
	         */decrypt:function(cipher,ciphertext,password,cfg){// Apply config defaults
cfg=this.cfg.extend(cfg);// Convert string to CipherParams
ciphertext=this._parse(ciphertext,cfg.format);// Derive key and other params
var derivedParams=cfg.kdf.execute(password,cipher.keySize,cipher.ivSize,ciphertext.salt);// Add IV to config
cfg.iv=derivedParams.iv;// Decrypt
var plaintext=SerializableCipher.decrypt.call(this,cipher,ciphertext,derivedParams.key,cfg);return plaintext;}});}();});},{"./core":61}],61:[function(require,module,exports){;(function(root,factory){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory();}else if(typeof define==="function"&&define.amd){// AMD
define([],factory);}else{// Global (browser)
root.CryptoJS=factory();}})(this,function(){/**
	 * CryptoJS core components.
	 */var CryptoJS=CryptoJS||function(Math,undefined){/**
	     * CryptoJS namespace.
	     */var C={};/**
	     * Library namespace.
	     */var C_lib=C.lib={};/**
	     * Base object for prototypal inheritance.
	     */var Base=C_lib.Base=function(){function F(){}return{/**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */extend:function(overrides){// Spawn
F.prototype=this;var subtype=new F();// Augment
if(overrides){subtype.mixIn(overrides);}// Create default initializer
if(!subtype.hasOwnProperty('init')){subtype.init=function(){subtype.$super.init.apply(this,arguments);};}// Initializer's prototype is the subtype object
subtype.init.prototype=subtype;// Reference supertype
subtype.$super=this;return subtype;},/**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */create:function(){var instance=this.extend();instance.init.apply(instance,arguments);return instance;},/**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */init:function(){},/**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */mixIn:function(properties){for(var propertyName in properties){if(properties.hasOwnProperty(propertyName)){this[propertyName]=properties[propertyName];}}// IE won't copy toString using the loop above
if(properties.hasOwnProperty('toString')){this.toString=properties.toString;}},/**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */clone:function(){return this.init.prototype.extend(this);}};}();/**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */var WordArray=C_lib.WordArray=Base.extend({/**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */init:function(words,sigBytes){words=this.words=words||[];if(sigBytes!=undefined){this.sigBytes=sigBytes;}else{this.sigBytes=words.length*4;}},/**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */toString:function(encoder){return(encoder||Hex).stringify(this);},/**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */concat:function(wordArray){// Shortcuts
var thisWords=this.words;var thatWords=wordArray.words;var thisSigBytes=this.sigBytes;var thatSigBytes=wordArray.sigBytes;// Clamp excess bits
this.clamp();// Concat
if(thisSigBytes%4){// Copy one byte at a time
for(var i=0;i<thatSigBytes;i++){var thatByte=thatWords[i>>>2]>>>24-i%4*8&0xff;thisWords[thisSigBytes+i>>>2]|=thatByte<<24-(thisSigBytes+i)%4*8;}}else{// Copy one word at a time
for(var i=0;i<thatSigBytes;i+=4){thisWords[thisSigBytes+i>>>2]=thatWords[i>>>2];}}this.sigBytes+=thatSigBytes;// Chainable
return this;},/**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */clamp:function(){// Shortcuts
var words=this.words;var sigBytes=this.sigBytes;// Clamp
words[sigBytes>>>2]&=0xffffffff<<32-sigBytes%4*8;words.length=Math.ceil(sigBytes/4);},/**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */clone:function(){var clone=Base.clone.call(this);clone.words=this.words.slice(0);return clone;},/**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */random:function(nBytes){var words=[];var r=function(m_w){var m_w=m_w;var m_z=0x3ade68b1;var mask=0xffffffff;return function(){m_z=0x9069*(m_z&0xFFFF)+(m_z>>0x10)&mask;m_w=0x4650*(m_w&0xFFFF)+(m_w>>0x10)&mask;var result=(m_z<<0x10)+m_w&mask;result/=0x100000000;result+=0.5;return result*(Math.random()>.5?1:-1);};};for(var i=0,rcache;i<nBytes;i+=4){var _r=r((rcache||Math.random())*0x100000000);rcache=_r()*0x3ade67b7;words.push(_r()*0x100000000|0);}return new WordArray.init(words,nBytes);}});/**
	     * Encoder namespace.
	     */var C_enc=C.enc={};/**
	     * Hex encoding strategy.
	     */var Hex=C_enc.Hex={/**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */stringify:function(wordArray){// Shortcuts
var words=wordArray.words;var sigBytes=wordArray.sigBytes;// Convert
var hexChars=[];for(var i=0;i<sigBytes;i++){var bite=words[i>>>2]>>>24-i%4*8&0xff;hexChars.push((bite>>>4).toString(16));hexChars.push((bite&0x0f).toString(16));}return hexChars.join('');},/**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */parse:function(hexStr){// Shortcut
var hexStrLength=hexStr.length;// Convert
var words=[];for(var i=0;i<hexStrLength;i+=2){words[i>>>3]|=parseInt(hexStr.substr(i,2),16)<<24-i%8*4;}return new WordArray.init(words,hexStrLength/2);}};/**
	     * Latin1 encoding strategy.
	     */var Latin1=C_enc.Latin1={/**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */stringify:function(wordArray){// Shortcuts
var words=wordArray.words;var sigBytes=wordArray.sigBytes;// Convert
var latin1Chars=[];for(var i=0;i<sigBytes;i++){var bite=words[i>>>2]>>>24-i%4*8&0xff;latin1Chars.push(String.fromCharCode(bite));}return latin1Chars.join('');},/**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */parse:function(latin1Str){// Shortcut
var latin1StrLength=latin1Str.length;// Convert
var words=[];for(var i=0;i<latin1StrLength;i++){words[i>>>2]|=(latin1Str.charCodeAt(i)&0xff)<<24-i%4*8;}return new WordArray.init(words,latin1StrLength);}};/**
	     * UTF-8 encoding strategy.
	     */var Utf8=C_enc.Utf8={/**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */stringify:function(wordArray){try{return decodeURIComponent(escape(Latin1.stringify(wordArray)));}catch(e){throw new Error('Malformed UTF-8 data');}},/**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */parse:function(utf8Str){return Latin1.parse(unescape(encodeURIComponent(utf8Str)));}};/**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */var BufferedBlockAlgorithm=C_lib.BufferedBlockAlgorithm=Base.extend({/**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */reset:function(){// Initial values
this._data=new WordArray.init();this._nDataBytes=0;},/**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */_append:function(data){// Convert string to WordArray, else assume WordArray already
if(typeof data=='string'){data=Utf8.parse(data);}// Append
this._data.concat(data);this._nDataBytes+=data.sigBytes;},/**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */_process:function(doFlush){// Shortcuts
var data=this._data;var dataWords=data.words;var dataSigBytes=data.sigBytes;var blockSize=this.blockSize;var blockSizeBytes=blockSize*4;// Count blocks ready
var nBlocksReady=dataSigBytes/blockSizeBytes;if(doFlush){// Round up to include partial blocks
nBlocksReady=Math.ceil(nBlocksReady);}else{// Round down to include only full blocks,
// less the number of blocks that must remain in the buffer
nBlocksReady=Math.max((nBlocksReady|0)-this._minBufferSize,0);}// Count words ready
var nWordsReady=nBlocksReady*blockSize;// Count bytes ready
var nBytesReady=Math.min(nWordsReady*4,dataSigBytes);// Process blocks
if(nWordsReady){for(var offset=0;offset<nWordsReady;offset+=blockSize){// Perform concrete-algorithm logic
this._doProcessBlock(dataWords,offset);}// Remove processed words
var processedWords=dataWords.splice(0,nWordsReady);data.sigBytes-=nBytesReady;}// Return processed words
return new WordArray.init(processedWords,nBytesReady);},/**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */clone:function(){var clone=Base.clone.call(this);clone._data=this._data.clone();return clone;},_minBufferSize:0});/**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */var Hasher=C_lib.Hasher=BufferedBlockAlgorithm.extend({/**
	         * Configuration options.
	         */cfg:Base.extend(),/**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */init:function(cfg){// Apply config defaults
this.cfg=this.cfg.extend(cfg);// Set initial values
this.reset();},/**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */reset:function(){// Reset data buffer
BufferedBlockAlgorithm.reset.call(this);// Perform concrete-hasher logic
this._doReset();},/**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */update:function(messageUpdate){// Append
this._append(messageUpdate);// Update the hash
this._process();// Chainable
return this;},/**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */finalize:function(messageUpdate){// Final message update
if(messageUpdate){this._append(messageUpdate);}// Perform concrete-hasher logic
var hash=this._doFinalize();return hash;},blockSize:512/32,/**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */_createHelper:function(hasher){return function(message,cfg){return new hasher.init(cfg).finalize(message);};},/**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */_createHmacHelper:function(hasher){return function(message,key){return new C_algo.HMAC.init(hasher,key).finalize(message);};}});/**
	     * Algorithm namespace.
	     */var C_algo=C.algo={};return C;}(Math);return CryptoJS;});},{}],62:[function(require,module,exports){;(function(root,factory){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){(function(){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var C_enc=C.enc;/**
	     * Base64 encoding strategy.
	     */var Base64=C_enc.Base64={/**
	         * Converts a word array to a Base64 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Base64 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
	         */stringify:function(wordArray){// Shortcuts
var words=wordArray.words;var sigBytes=wordArray.sigBytes;var map=this._map;// Clamp excess bits
wordArray.clamp();// Convert
var base64Chars=[];for(var i=0;i<sigBytes;i+=3){var byte1=words[i>>>2]>>>24-i%4*8&0xff;var byte2=words[i+1>>>2]>>>24-(i+1)%4*8&0xff;var byte3=words[i+2>>>2]>>>24-(i+2)%4*8&0xff;var triplet=byte1<<16|byte2<<8|byte3;for(var j=0;j<4&&i+j*0.75<sigBytes;j++){base64Chars.push(map.charAt(triplet>>>6*(3-j)&0x3f));}}// Add padding
var paddingChar=map.charAt(64);if(paddingChar){while(base64Chars.length%4){base64Chars.push(paddingChar);}}return base64Chars.join('');},/**
	         * Converts a Base64 string to a word array.
	         *
	         * @param {string} base64Str The Base64 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
	         */parse:function(base64Str){// Shortcuts
var base64StrLength=base64Str.length;var map=this._map;// Ignore padding
var paddingChar=map.charAt(64);if(paddingChar){var paddingIndex=base64Str.indexOf(paddingChar);if(paddingIndex!=-1){base64StrLength=paddingIndex;}}// Convert
var words=[];var nBytes=0;for(var i=0;i<base64StrLength;i++){if(i%4){var bits1=map.indexOf(base64Str.charAt(i-1))<<i%4*2;var bits2=map.indexOf(base64Str.charAt(i))>>>6-i%4*2;var bitsCombined=bits1|bits2;words[nBytes>>>2]|=bitsCombined<<24-nBytes%4*8;nBytes++;}}return WordArray.create(words,nBytes);},_map:'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='};})();return CryptoJS.enc.Base64;});},{"./core":61}],63:[function(require,module,exports){;(function(root,factory){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){(function(){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var C_enc=C.enc;/**
	     * UTF-16 BE encoding strategy.
	     */var Utf16BE=C_enc.Utf16=C_enc.Utf16BE={/**
	         * Converts a word array to a UTF-16 BE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 BE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
	         */stringify:function(wordArray){// Shortcuts
var words=wordArray.words;var sigBytes=wordArray.sigBytes;// Convert
var utf16Chars=[];for(var i=0;i<sigBytes;i+=2){var codePoint=words[i>>>2]>>>16-i%4*8&0xffff;utf16Chars.push(String.fromCharCode(codePoint));}return utf16Chars.join('');},/**
	         * Converts a UTF-16 BE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 BE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
	         */parse:function(utf16Str){// Shortcut
var utf16StrLength=utf16Str.length;// Convert
var words=[];for(var i=0;i<utf16StrLength;i++){words[i>>>1]|=utf16Str.charCodeAt(i)<<16-i%2*16;}return WordArray.create(words,utf16StrLength*2);}};/**
	     * UTF-16 LE encoding strategy.
	     */C_enc.Utf16LE={/**
	         * Converts a word array to a UTF-16 LE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 LE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
	         */stringify:function(wordArray){// Shortcuts
var words=wordArray.words;var sigBytes=wordArray.sigBytes;// Convert
var utf16Chars=[];for(var i=0;i<sigBytes;i+=2){var codePoint=swapEndian(words[i>>>2]>>>16-i%4*8&0xffff);utf16Chars.push(String.fromCharCode(codePoint));}return utf16Chars.join('');},/**
	         * Converts a UTF-16 LE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 LE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
	         */parse:function(utf16Str){// Shortcut
var utf16StrLength=utf16Str.length;// Convert
var words=[];for(var i=0;i<utf16StrLength;i++){words[i>>>1]|=swapEndian(utf16Str.charCodeAt(i)<<16-i%2*16);}return WordArray.create(words,utf16StrLength*2);}};function swapEndian(word){return word<<8&0xff00ff00|word>>>8&0x00ff00ff;}})();return CryptoJS.enc.Utf16;});},{"./core":61}],64:[function(require,module,exports){;(function(root,factory,undef){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"),require("./sha1"),require("./hmac"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core","./sha1","./hmac"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){(function(){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var Base=C_lib.Base;var WordArray=C_lib.WordArray;var C_algo=C.algo;var MD5=C_algo.MD5;/**
	     * This key derivation function is meant to conform with EVP_BytesToKey.
	     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
	     */var EvpKDF=C_algo.EvpKDF=Base.extend({/**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */cfg:Base.extend({keySize:128/32,hasher:MD5,iterations:1}),/**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.EvpKDF.create();
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
	         */init:function(cfg){this.cfg=this.cfg.extend(cfg);},/**
	         * Derives a key from a password.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */compute:function(password,salt){// Shortcut
var cfg=this.cfg;// Init hasher
var hasher=cfg.hasher.create();// Initial values
var derivedKey=WordArray.create();// Shortcuts
var derivedKeyWords=derivedKey.words;var keySize=cfg.keySize;var iterations=cfg.iterations;// Generate key
while(derivedKeyWords.length<keySize){if(block){hasher.update(block);}var block=hasher.update(password).finalize(salt);hasher.reset();// Iterations
for(var i=1;i<iterations;i++){block=hasher.finalize(block);hasher.reset();}derivedKey.concat(block);}derivedKey.sigBytes=keySize*4;return derivedKey;}});/**
	     * Derives a key from a password.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.EvpKDF(password, salt);
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
	     */C.EvpKDF=function(password,salt,cfg){return EvpKDF.create(cfg).compute(password,salt);};})();return CryptoJS.EvpKDF;});},{"./core":61,"./hmac":66,"./sha1":85}],65:[function(require,module,exports){;(function(root,factory,undef){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"),require("./cipher-core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core","./cipher-core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){(function(undefined){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var CipherParams=C_lib.CipherParams;var C_enc=C.enc;var Hex=C_enc.Hex;var C_format=C.format;var HexFormatter=C_format.Hex={/**
	         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The hexadecimally encoded string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
	         */stringify:function(cipherParams){return cipherParams.ciphertext.toString(Hex);},/**
	         * Converts a hexadecimally encoded ciphertext string to a cipher params object.
	         *
	         * @param {string} input The hexadecimally encoded string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
	         */parse:function(input){var ciphertext=Hex.parse(input);return CipherParams.create({ciphertext:ciphertext});}};})();return CryptoJS.format.Hex;});},{"./cipher-core":60,"./core":61}],66:[function(require,module,exports){;(function(root,factory){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){(function(){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var Base=C_lib.Base;var C_enc=C.enc;var Utf8=C_enc.Utf8;var C_algo=C.algo;/**
	     * HMAC algorithm.
	     */var HMAC=C_algo.HMAC=Base.extend({/**
	         * Initializes a newly created HMAC.
	         *
	         * @param {Hasher} hasher The hash algorithm to use.
	         * @param {WordArray|string} key The secret key.
	         *
	         * @example
	         *
	         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
	         */init:function(hasher,key){// Init hasher
hasher=this._hasher=new hasher.init();// Convert string to WordArray, else assume WordArray already
if(typeof key=='string'){key=Utf8.parse(key);}// Shortcuts
var hasherBlockSize=hasher.blockSize;var hasherBlockSizeBytes=hasherBlockSize*4;// Allow arbitrary length keys
if(key.sigBytes>hasherBlockSizeBytes){key=hasher.finalize(key);}// Clamp excess bits
key.clamp();// Clone key for inner and outer pads
var oKey=this._oKey=key.clone();var iKey=this._iKey=key.clone();// Shortcuts
var oKeyWords=oKey.words;var iKeyWords=iKey.words;// XOR keys with pad constants
for(var i=0;i<hasherBlockSize;i++){oKeyWords[i]^=0x5c5c5c5c;iKeyWords[i]^=0x36363636;}oKey.sigBytes=iKey.sigBytes=hasherBlockSizeBytes;// Set initial values
this.reset();},/**
	         * Resets this HMAC to its initial state.
	         *
	         * @example
	         *
	         *     hmacHasher.reset();
	         */reset:function(){// Shortcut
var hasher=this._hasher;// Reset
hasher.reset();hasher.update(this._iKey);},/**
	         * Updates this HMAC with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {HMAC} This HMAC instance.
	         *
	         * @example
	         *
	         *     hmacHasher.update('message');
	         *     hmacHasher.update(wordArray);
	         */update:function(messageUpdate){this._hasher.update(messageUpdate);// Chainable
return this;},/**
	         * Finalizes the HMAC computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The HMAC.
	         *
	         * @example
	         *
	         *     var hmac = hmacHasher.finalize();
	         *     var hmac = hmacHasher.finalize('message');
	         *     var hmac = hmacHasher.finalize(wordArray);
	         */finalize:function(messageUpdate){// Shortcut
var hasher=this._hasher;// Compute HMAC
var innerHash=hasher.finalize(messageUpdate);hasher.reset();var hmac=hasher.finalize(this._oKey.clone().concat(innerHash));return hmac;}});})();});},{"./core":61}],67:[function(require,module,exports){;(function(root,factory,undef){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"),require("./x64-core"),require("./lib-typedarrays"),require("./enc-utf16"),require("./enc-base64"),require("./md5"),require("./sha1"),require("./sha256"),require("./sha224"),require("./sha512"),require("./sha384"),require("./sha3"),require("./ripemd160"),require("./hmac"),require("./pbkdf2"),require("./evpkdf"),require("./cipher-core"),require("./mode-cfb"),require("./mode-ctr"),require("./mode-ctr-gladman"),require("./mode-ofb"),require("./mode-ecb"),require("./pad-ansix923"),require("./pad-iso10126"),require("./pad-iso97971"),require("./pad-zeropadding"),require("./pad-nopadding"),require("./format-hex"),require("./aes"),require("./tripledes"),require("./rc4"),require("./rabbit"),require("./rabbit-legacy"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core","./x64-core","./lib-typedarrays","./enc-utf16","./enc-base64","./md5","./sha1","./sha256","./sha224","./sha512","./sha384","./sha3","./ripemd160","./hmac","./pbkdf2","./evpkdf","./cipher-core","./mode-cfb","./mode-ctr","./mode-ctr-gladman","./mode-ofb","./mode-ecb","./pad-ansix923","./pad-iso10126","./pad-iso97971","./pad-zeropadding","./pad-nopadding","./format-hex","./aes","./tripledes","./rc4","./rabbit","./rabbit-legacy"],factory);}else{// Global (browser)
root.CryptoJS=factory(root.CryptoJS);}})(this,function(CryptoJS){return CryptoJS;});},{"./aes":59,"./cipher-core":60,"./core":61,"./enc-base64":62,"./enc-utf16":63,"./evpkdf":64,"./format-hex":65,"./hmac":66,"./lib-typedarrays":68,"./md5":69,"./mode-cfb":70,"./mode-ctr":72,"./mode-ctr-gladman":71,"./mode-ecb":73,"./mode-ofb":74,"./pad-ansix923":75,"./pad-iso10126":76,"./pad-iso97971":77,"./pad-nopadding":78,"./pad-zeropadding":79,"./pbkdf2":80,"./rabbit":82,"./rabbit-legacy":81,"./rc4":83,"./ripemd160":84,"./sha1":85,"./sha224":86,"./sha256":87,"./sha3":88,"./sha384":89,"./sha512":90,"./tripledes":91,"./x64-core":92}],68:[function(require,module,exports){;(function(root,factory){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){(function(){// Check if typed arrays are supported
if(typeof ArrayBuffer!='function'){return;}// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;// Reference original init
var superInit=WordArray.init;// Augment WordArray.init to handle typed arrays
var subInit=WordArray.init=function(typedArray){// Convert buffers to uint8
if(typedArray instanceof ArrayBuffer){typedArray=new Uint8Array(typedArray);}// Convert other array views to uint8
if(typedArray instanceof Int8Array||typeof Uint8ClampedArray!=="undefined"&&typedArray instanceof Uint8ClampedArray||typedArray instanceof Int16Array||typedArray instanceof Uint16Array||typedArray instanceof Int32Array||typedArray instanceof Uint32Array||typedArray instanceof Float32Array||typedArray instanceof Float64Array){typedArray=new Uint8Array(typedArray.buffer,typedArray.byteOffset,typedArray.byteLength);}// Handle Uint8Array
if(typedArray instanceof Uint8Array){// Shortcut
var typedArrayByteLength=typedArray.byteLength;// Extract bytes
var words=[];for(var i=0;i<typedArrayByteLength;i++){words[i>>>2]|=typedArray[i]<<24-i%4*8;}// Initialize this word array
superInit.call(this,words,typedArrayByteLength);}else{// Else call normal init
superInit.apply(this,arguments);}};subInit.prototype=WordArray;})();return CryptoJS.lib.WordArray;});},{"./core":61}],69:[function(require,module,exports){;(function(root,factory){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){(function(Math){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var Hasher=C_lib.Hasher;var C_algo=C.algo;// Constants table
var T=[];// Compute constants
(function(){for(var i=0;i<64;i++){T[i]=Math.abs(Math.sin(i+1))*0x100000000|0;}})();/**
	     * MD5 hash algorithm.
	     */var MD5=C_algo.MD5=Hasher.extend({_doReset:function(){this._hash=new WordArray.init([0x67452301,0xefcdab89,0x98badcfe,0x10325476]);},_doProcessBlock:function(M,offset){// Swap endian
for(var i=0;i<16;i++){// Shortcuts
var offset_i=offset+i;var M_offset_i=M[offset_i];M[offset_i]=(M_offset_i<<8|M_offset_i>>>24)&0x00ff00ff|(M_offset_i<<24|M_offset_i>>>8)&0xff00ff00;}// Shortcuts
var H=this._hash.words;var M_offset_0=M[offset+0];var M_offset_1=M[offset+1];var M_offset_2=M[offset+2];var M_offset_3=M[offset+3];var M_offset_4=M[offset+4];var M_offset_5=M[offset+5];var M_offset_6=M[offset+6];var M_offset_7=M[offset+7];var M_offset_8=M[offset+8];var M_offset_9=M[offset+9];var M_offset_10=M[offset+10];var M_offset_11=M[offset+11];var M_offset_12=M[offset+12];var M_offset_13=M[offset+13];var M_offset_14=M[offset+14];var M_offset_15=M[offset+15];// Working varialbes
var a=H[0];var b=H[1];var c=H[2];var d=H[3];// Computation
a=FF(a,b,c,d,M_offset_0,7,T[0]);d=FF(d,a,b,c,M_offset_1,12,T[1]);c=FF(c,d,a,b,M_offset_2,17,T[2]);b=FF(b,c,d,a,M_offset_3,22,T[3]);a=FF(a,b,c,d,M_offset_4,7,T[4]);d=FF(d,a,b,c,M_offset_5,12,T[5]);c=FF(c,d,a,b,M_offset_6,17,T[6]);b=FF(b,c,d,a,M_offset_7,22,T[7]);a=FF(a,b,c,d,M_offset_8,7,T[8]);d=FF(d,a,b,c,M_offset_9,12,T[9]);c=FF(c,d,a,b,M_offset_10,17,T[10]);b=FF(b,c,d,a,M_offset_11,22,T[11]);a=FF(a,b,c,d,M_offset_12,7,T[12]);d=FF(d,a,b,c,M_offset_13,12,T[13]);c=FF(c,d,a,b,M_offset_14,17,T[14]);b=FF(b,c,d,a,M_offset_15,22,T[15]);a=GG(a,b,c,d,M_offset_1,5,T[16]);d=GG(d,a,b,c,M_offset_6,9,T[17]);c=GG(c,d,a,b,M_offset_11,14,T[18]);b=GG(b,c,d,a,M_offset_0,20,T[19]);a=GG(a,b,c,d,M_offset_5,5,T[20]);d=GG(d,a,b,c,M_offset_10,9,T[21]);c=GG(c,d,a,b,M_offset_15,14,T[22]);b=GG(b,c,d,a,M_offset_4,20,T[23]);a=GG(a,b,c,d,M_offset_9,5,T[24]);d=GG(d,a,b,c,M_offset_14,9,T[25]);c=GG(c,d,a,b,M_offset_3,14,T[26]);b=GG(b,c,d,a,M_offset_8,20,T[27]);a=GG(a,b,c,d,M_offset_13,5,T[28]);d=GG(d,a,b,c,M_offset_2,9,T[29]);c=GG(c,d,a,b,M_offset_7,14,T[30]);b=GG(b,c,d,a,M_offset_12,20,T[31]);a=HH(a,b,c,d,M_offset_5,4,T[32]);d=HH(d,a,b,c,M_offset_8,11,T[33]);c=HH(c,d,a,b,M_offset_11,16,T[34]);b=HH(b,c,d,a,M_offset_14,23,T[35]);a=HH(a,b,c,d,M_offset_1,4,T[36]);d=HH(d,a,b,c,M_offset_4,11,T[37]);c=HH(c,d,a,b,M_offset_7,16,T[38]);b=HH(b,c,d,a,M_offset_10,23,T[39]);a=HH(a,b,c,d,M_offset_13,4,T[40]);d=HH(d,a,b,c,M_offset_0,11,T[41]);c=HH(c,d,a,b,M_offset_3,16,T[42]);b=HH(b,c,d,a,M_offset_6,23,T[43]);a=HH(a,b,c,d,M_offset_9,4,T[44]);d=HH(d,a,b,c,M_offset_12,11,T[45]);c=HH(c,d,a,b,M_offset_15,16,T[46]);b=HH(b,c,d,a,M_offset_2,23,T[47]);a=II(a,b,c,d,M_offset_0,6,T[48]);d=II(d,a,b,c,M_offset_7,10,T[49]);c=II(c,d,a,b,M_offset_14,15,T[50]);b=II(b,c,d,a,M_offset_5,21,T[51]);a=II(a,b,c,d,M_offset_12,6,T[52]);d=II(d,a,b,c,M_offset_3,10,T[53]);c=II(c,d,a,b,M_offset_10,15,T[54]);b=II(b,c,d,a,M_offset_1,21,T[55]);a=II(a,b,c,d,M_offset_8,6,T[56]);d=II(d,a,b,c,M_offset_15,10,T[57]);c=II(c,d,a,b,M_offset_6,15,T[58]);b=II(b,c,d,a,M_offset_13,21,T[59]);a=II(a,b,c,d,M_offset_4,6,T[60]);d=II(d,a,b,c,M_offset_11,10,T[61]);c=II(c,d,a,b,M_offset_2,15,T[62]);b=II(b,c,d,a,M_offset_9,21,T[63]);// Intermediate hash value
H[0]=H[0]+a|0;H[1]=H[1]+b|0;H[2]=H[2]+c|0;H[3]=H[3]+d|0;},_doFinalize:function(){// Shortcuts
var data=this._data;var dataWords=data.words;var nBitsTotal=this._nDataBytes*8;var nBitsLeft=data.sigBytes*8;// Add padding
dataWords[nBitsLeft>>>5]|=0x80<<24-nBitsLeft%32;var nBitsTotalH=Math.floor(nBitsTotal/0x100000000);var nBitsTotalL=nBitsTotal;dataWords[(nBitsLeft+64>>>9<<4)+15]=(nBitsTotalH<<8|nBitsTotalH>>>24)&0x00ff00ff|(nBitsTotalH<<24|nBitsTotalH>>>8)&0xff00ff00;dataWords[(nBitsLeft+64>>>9<<4)+14]=(nBitsTotalL<<8|nBitsTotalL>>>24)&0x00ff00ff|(nBitsTotalL<<24|nBitsTotalL>>>8)&0xff00ff00;data.sigBytes=(dataWords.length+1)*4;// Hash final blocks
this._process();// Shortcuts
var hash=this._hash;var H=hash.words;// Swap endian
for(var i=0;i<4;i++){// Shortcut
var H_i=H[i];H[i]=(H_i<<8|H_i>>>24)&0x00ff00ff|(H_i<<24|H_i>>>8)&0xff00ff00;}// Return final computed hash
return hash;},clone:function(){var clone=Hasher.clone.call(this);clone._hash=this._hash.clone();return clone;}});function FF(a,b,c,d,x,s,t){var n=a+(b&c|~b&d)+x+t;return(n<<s|n>>>32-s)+b;}function GG(a,b,c,d,x,s,t){var n=a+(b&d|c&~d)+x+t;return(n<<s|n>>>32-s)+b;}function HH(a,b,c,d,x,s,t){var n=a+(b^c^d)+x+t;return(n<<s|n>>>32-s)+b;}function II(a,b,c,d,x,s,t){var n=a+(c^(b|~d))+x+t;return(n<<s|n>>>32-s)+b;}/**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.MD5('message');
	     *     var hash = CryptoJS.MD5(wordArray);
	     */C.MD5=Hasher._createHelper(MD5);/**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacMD5(message, key);
	     */C.HmacMD5=Hasher._createHmacHelper(MD5);})(Math);return CryptoJS.MD5;});},{"./core":61}],70:[function(require,module,exports){;(function(root,factory,undef){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"),require("./cipher-core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core","./cipher-core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){/**
	 * Cipher Feedback block mode.
	 */CryptoJS.mode.CFB=function(){var CFB=CryptoJS.lib.BlockCipherMode.extend();CFB.Encryptor=CFB.extend({processBlock:function(words,offset){// Shortcuts
var cipher=this._cipher;var blockSize=cipher.blockSize;generateKeystreamAndEncrypt.call(this,words,offset,blockSize,cipher);// Remember this block to use with next block
this._prevBlock=words.slice(offset,offset+blockSize);}});CFB.Decryptor=CFB.extend({processBlock:function(words,offset){// Shortcuts
var cipher=this._cipher;var blockSize=cipher.blockSize;// Remember this block to use with next block
var thisBlock=words.slice(offset,offset+blockSize);generateKeystreamAndEncrypt.call(this,words,offset,blockSize,cipher);// This block becomes the previous block
this._prevBlock=thisBlock;}});function generateKeystreamAndEncrypt(words,offset,blockSize,cipher){// Shortcut
var iv=this._iv;// Generate keystream
if(iv){var keystream=iv.slice(0);// Remove IV for subsequent blocks
this._iv=undefined;}else{var keystream=this._prevBlock;}cipher.encryptBlock(keystream,0);// Encrypt
for(var i=0;i<blockSize;i++){words[offset+i]^=keystream[i];}}return CFB;}();return CryptoJS.mode.CFB;});},{"./cipher-core":60,"./core":61}],71:[function(require,module,exports){;(function(root,factory,undef){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"),require("./cipher-core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core","./cipher-core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){/** @preserve
	 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
	 * derived from CryptoJS.mode.CTR
	 * Jan Hruby jhruby.web@gmail.com
	 */CryptoJS.mode.CTRGladman=function(){var CTRGladman=CryptoJS.lib.BlockCipherMode.extend();function incWord(word){if((word>>24&0xff)===0xff){//overflow
var b1=word>>16&0xff;var b2=word>>8&0xff;var b3=word&0xff;if(b1===0xff)// overflow b1
{b1=0;if(b2===0xff){b2=0;if(b3===0xff){b3=0;}else{++b3;}}else{++b2;}}else{++b1;}word=0;word+=b1<<16;word+=b2<<8;word+=b3;}else{word+=0x01<<24;}return word;}function incCounter(counter){if((counter[0]=incWord(counter[0]))===0){// encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
counter[1]=incWord(counter[1]);}return counter;}var Encryptor=CTRGladman.Encryptor=CTRGladman.extend({processBlock:function(words,offset){// Shortcuts
var cipher=this._cipher;var blockSize=cipher.blockSize;var iv=this._iv;var counter=this._counter;// Generate keystream
if(iv){counter=this._counter=iv.slice(0);// Remove IV for subsequent blocks
this._iv=undefined;}incCounter(counter);var keystream=counter.slice(0);cipher.encryptBlock(keystream,0);// Encrypt
for(var i=0;i<blockSize;i++){words[offset+i]^=keystream[i];}}});CTRGladman.Decryptor=Encryptor;return CTRGladman;}();return CryptoJS.mode.CTRGladman;});},{"./cipher-core":60,"./core":61}],72:[function(require,module,exports){;(function(root,factory,undef){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"),require("./cipher-core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core","./cipher-core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){/**
	 * Counter block mode.
	 */CryptoJS.mode.CTR=function(){var CTR=CryptoJS.lib.BlockCipherMode.extend();var Encryptor=CTR.Encryptor=CTR.extend({processBlock:function(words,offset){// Shortcuts
var cipher=this._cipher;var blockSize=cipher.blockSize;var iv=this._iv;var counter=this._counter;// Generate keystream
if(iv){counter=this._counter=iv.slice(0);// Remove IV for subsequent blocks
this._iv=undefined;}var keystream=counter.slice(0);cipher.encryptBlock(keystream,0);// Increment counter
counter[blockSize-1]=counter[blockSize-1]+1|0;// Encrypt
for(var i=0;i<blockSize;i++){words[offset+i]^=keystream[i];}}});CTR.Decryptor=Encryptor;return CTR;}();return CryptoJS.mode.CTR;});},{"./cipher-core":60,"./core":61}],73:[function(require,module,exports){;(function(root,factory,undef){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"),require("./cipher-core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core","./cipher-core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){/**
	 * Electronic Codebook block mode.
	 */CryptoJS.mode.ECB=function(){var ECB=CryptoJS.lib.BlockCipherMode.extend();ECB.Encryptor=ECB.extend({processBlock:function(words,offset){this._cipher.encryptBlock(words,offset);}});ECB.Decryptor=ECB.extend({processBlock:function(words,offset){this._cipher.decryptBlock(words,offset);}});return ECB;}();return CryptoJS.mode.ECB;});},{"./cipher-core":60,"./core":61}],74:[function(require,module,exports){;(function(root,factory,undef){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"),require("./cipher-core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core","./cipher-core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){/**
	 * Output Feedback block mode.
	 */CryptoJS.mode.OFB=function(){var OFB=CryptoJS.lib.BlockCipherMode.extend();var Encryptor=OFB.Encryptor=OFB.extend({processBlock:function(words,offset){// Shortcuts
var cipher=this._cipher;var blockSize=cipher.blockSize;var iv=this._iv;var keystream=this._keystream;// Generate keystream
if(iv){keystream=this._keystream=iv.slice(0);// Remove IV for subsequent blocks
this._iv=undefined;}cipher.encryptBlock(keystream,0);// Encrypt
for(var i=0;i<blockSize;i++){words[offset+i]^=keystream[i];}}});OFB.Decryptor=Encryptor;return OFB;}();return CryptoJS.mode.OFB;});},{"./cipher-core":60,"./core":61}],75:[function(require,module,exports){;(function(root,factory,undef){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"),require("./cipher-core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core","./cipher-core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){/**
	 * ANSI X.923 padding strategy.
	 */CryptoJS.pad.AnsiX923={pad:function(data,blockSize){// Shortcuts
var dataSigBytes=data.sigBytes;var blockSizeBytes=blockSize*4;// Count padding bytes
var nPaddingBytes=blockSizeBytes-dataSigBytes%blockSizeBytes;// Compute last byte position
var lastBytePos=dataSigBytes+nPaddingBytes-1;// Pad
data.clamp();data.words[lastBytePos>>>2]|=nPaddingBytes<<24-lastBytePos%4*8;data.sigBytes+=nPaddingBytes;},unpad:function(data){// Get number of padding bytes from last byte
var nPaddingBytes=data.words[data.sigBytes-1>>>2]&0xff;// Remove padding
data.sigBytes-=nPaddingBytes;}};return CryptoJS.pad.Ansix923;});},{"./cipher-core":60,"./core":61}],76:[function(require,module,exports){;(function(root,factory,undef){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"),require("./cipher-core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core","./cipher-core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){/**
	 * ISO 10126 padding strategy.
	 */CryptoJS.pad.Iso10126={pad:function(data,blockSize){// Shortcut
var blockSizeBytes=blockSize*4;// Count padding bytes
var nPaddingBytes=blockSizeBytes-data.sigBytes%blockSizeBytes;// Pad
data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes-1)).concat(CryptoJS.lib.WordArray.create([nPaddingBytes<<24],1));},unpad:function(data){// Get number of padding bytes from last byte
var nPaddingBytes=data.words[data.sigBytes-1>>>2]&0xff;// Remove padding
data.sigBytes-=nPaddingBytes;}};return CryptoJS.pad.Iso10126;});},{"./cipher-core":60,"./core":61}],77:[function(require,module,exports){;(function(root,factory,undef){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"),require("./cipher-core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core","./cipher-core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){/**
	 * ISO/IEC 9797-1 Padding Method 2.
	 */CryptoJS.pad.Iso97971={pad:function(data,blockSize){// Add 0x80 byte
data.concat(CryptoJS.lib.WordArray.create([0x80000000],1));// Zero pad the rest
CryptoJS.pad.ZeroPadding.pad(data,blockSize);},unpad:function(data){// Remove zero padding
CryptoJS.pad.ZeroPadding.unpad(data);// Remove one more byte -- the 0x80 byte
data.sigBytes--;}};return CryptoJS.pad.Iso97971;});},{"./cipher-core":60,"./core":61}],78:[function(require,module,exports){;(function(root,factory,undef){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"),require("./cipher-core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core","./cipher-core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){/**
	 * A noop padding strategy.
	 */CryptoJS.pad.NoPadding={pad:function(){},unpad:function(){}};return CryptoJS.pad.NoPadding;});},{"./cipher-core":60,"./core":61}],79:[function(require,module,exports){;(function(root,factory,undef){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"),require("./cipher-core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core","./cipher-core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){/**
	 * Zero padding strategy.
	 */CryptoJS.pad.ZeroPadding={pad:function(data,blockSize){// Shortcut
var blockSizeBytes=blockSize*4;// Pad
data.clamp();data.sigBytes+=blockSizeBytes-(data.sigBytes%blockSizeBytes||blockSizeBytes);},unpad:function(data){// Shortcut
var dataWords=data.words;// Unpad
var i=data.sigBytes-1;while(!(dataWords[i>>>2]>>>24-i%4*8&0xff)){i--;}data.sigBytes=i+1;}};return CryptoJS.pad.ZeroPadding;});},{"./cipher-core":60,"./core":61}],80:[function(require,module,exports){;(function(root,factory,undef){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"),require("./sha1"),require("./hmac"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core","./sha1","./hmac"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){(function(){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var Base=C_lib.Base;var WordArray=C_lib.WordArray;var C_algo=C.algo;var SHA1=C_algo.SHA1;var HMAC=C_algo.HMAC;/**
	     * Password-Based Key Derivation Function 2 algorithm.
	     */var PBKDF2=C_algo.PBKDF2=Base.extend({/**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hasher to use. Default: SHA1
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */cfg:Base.extend({keySize:128/32,hasher:SHA1,iterations:1}),/**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.PBKDF2.create();
	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
	         */init:function(cfg){this.cfg=this.cfg.extend(cfg);},/**
	         * Computes the Password-Based Key Derivation Function 2.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */compute:function(password,salt){// Shortcut
var cfg=this.cfg;// Init HMAC
var hmac=HMAC.create(cfg.hasher,password);// Initial values
var derivedKey=WordArray.create();var blockIndex=WordArray.create([0x00000001]);// Shortcuts
var derivedKeyWords=derivedKey.words;var blockIndexWords=blockIndex.words;var keySize=cfg.keySize;var iterations=cfg.iterations;// Generate key
while(derivedKeyWords.length<keySize){var block=hmac.update(salt).finalize(blockIndex);hmac.reset();// Shortcuts
var blockWords=block.words;var blockWordsLength=blockWords.length;// Iterations
var intermediate=block;for(var i=1;i<iterations;i++){intermediate=hmac.finalize(intermediate);hmac.reset();// Shortcut
var intermediateWords=intermediate.words;// XOR intermediate with block
for(var j=0;j<blockWordsLength;j++){blockWords[j]^=intermediateWords[j];}}derivedKey.concat(block);blockIndexWords[0]++;}derivedKey.sigBytes=keySize*4;return derivedKey;}});/**
	     * Computes the Password-Based Key Derivation Function 2.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.PBKDF2(password, salt);
	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
	     */C.PBKDF2=function(password,salt,cfg){return PBKDF2.create(cfg).compute(password,salt);};})();return CryptoJS.PBKDF2;});},{"./core":61,"./hmac":66,"./sha1":85}],81:[function(require,module,exports){;(function(root,factory,undef){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"),require("./enc-base64"),require("./md5"),require("./evpkdf"),require("./cipher-core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){(function(){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var StreamCipher=C_lib.StreamCipher;var C_algo=C.algo;// Reusable objects
var S=[];var C_=[];var G=[];/**
	     * Rabbit stream cipher algorithm.
	     *
	     * This is a legacy version that neglected to convert the key to little-endian.
	     * This error doesn't affect the cipher's security,
	     * but it does affect its compatibility with other implementations.
	     */var RabbitLegacy=C_algo.RabbitLegacy=StreamCipher.extend({_doReset:function(){// Shortcuts
var K=this._key.words;var iv=this.cfg.iv;// Generate initial state values
var X=this._X=[K[0],K[3]<<16|K[2]>>>16,K[1],K[0]<<16|K[3]>>>16,K[2],K[1]<<16|K[0]>>>16,K[3],K[2]<<16|K[1]>>>16];// Generate initial counter values
var C=this._C=[K[2]<<16|K[2]>>>16,K[0]&0xffff0000|K[1]&0x0000ffff,K[3]<<16|K[3]>>>16,K[1]&0xffff0000|K[2]&0x0000ffff,K[0]<<16|K[0]>>>16,K[2]&0xffff0000|K[3]&0x0000ffff,K[1]<<16|K[1]>>>16,K[3]&0xffff0000|K[0]&0x0000ffff];// Carry bit
this._b=0;// Iterate the system four times
for(var i=0;i<4;i++){nextState.call(this);}// Modify the counters
for(var i=0;i<8;i++){C[i]^=X[i+4&7];}// IV setup
if(iv){// Shortcuts
var IV=iv.words;var IV_0=IV[0];var IV_1=IV[1];// Generate four subvectors
var i0=(IV_0<<8|IV_0>>>24)&0x00ff00ff|(IV_0<<24|IV_0>>>8)&0xff00ff00;var i2=(IV_1<<8|IV_1>>>24)&0x00ff00ff|(IV_1<<24|IV_1>>>8)&0xff00ff00;var i1=i0>>>16|i2&0xffff0000;var i3=i2<<16|i0&0x0000ffff;// Modify counter values
C[0]^=i0;C[1]^=i1;C[2]^=i2;C[3]^=i3;C[4]^=i0;C[5]^=i1;C[6]^=i2;C[7]^=i3;// Iterate the system four times
for(var i=0;i<4;i++){nextState.call(this);}}},_doProcessBlock:function(M,offset){// Shortcut
var X=this._X;// Iterate the system
nextState.call(this);// Generate four keystream words
S[0]=X[0]^X[5]>>>16^X[3]<<16;S[1]=X[2]^X[7]>>>16^X[5]<<16;S[2]=X[4]^X[1]>>>16^X[7]<<16;S[3]=X[6]^X[3]>>>16^X[1]<<16;for(var i=0;i<4;i++){// Swap endian
S[i]=(S[i]<<8|S[i]>>>24)&0x00ff00ff|(S[i]<<24|S[i]>>>8)&0xff00ff00;// Encrypt
M[offset+i]^=S[i];}},blockSize:128/32,ivSize:64/32});function nextState(){// Shortcuts
var X=this._X;var C=this._C;// Save old counter values
for(var i=0;i<8;i++){C_[i]=C[i];}// Calculate new counter values
C[0]=C[0]+0x4d34d34d+this._b|0;C[1]=C[1]+0xd34d34d3+(C[0]>>>0<C_[0]>>>0?1:0)|0;C[2]=C[2]+0x34d34d34+(C[1]>>>0<C_[1]>>>0?1:0)|0;C[3]=C[3]+0x4d34d34d+(C[2]>>>0<C_[2]>>>0?1:0)|0;C[4]=C[4]+0xd34d34d3+(C[3]>>>0<C_[3]>>>0?1:0)|0;C[5]=C[5]+0x34d34d34+(C[4]>>>0<C_[4]>>>0?1:0)|0;C[6]=C[6]+0x4d34d34d+(C[5]>>>0<C_[5]>>>0?1:0)|0;C[7]=C[7]+0xd34d34d3+(C[6]>>>0<C_[6]>>>0?1:0)|0;this._b=C[7]>>>0<C_[7]>>>0?1:0;// Calculate the g-values
for(var i=0;i<8;i++){var gx=X[i]+C[i];// Construct high and low argument for squaring
var ga=gx&0xffff;var gb=gx>>>16;// Calculate high and low result of squaring
var gh=((ga*ga>>>17)+ga*gb>>>15)+gb*gb;var gl=((gx&0xffff0000)*gx|0)+((gx&0x0000ffff)*gx|0);// High XOR low
G[i]=gh^gl;}// Calculate new state values
X[0]=G[0]+(G[7]<<16|G[7]>>>16)+(G[6]<<16|G[6]>>>16)|0;X[1]=G[1]+(G[0]<<8|G[0]>>>24)+G[7]|0;X[2]=G[2]+(G[1]<<16|G[1]>>>16)+(G[0]<<16|G[0]>>>16)|0;X[3]=G[3]+(G[2]<<8|G[2]>>>24)+G[1]|0;X[4]=G[4]+(G[3]<<16|G[3]>>>16)+(G[2]<<16|G[2]>>>16)|0;X[5]=G[5]+(G[4]<<8|G[4]>>>24)+G[3]|0;X[6]=G[6]+(G[5]<<16|G[5]>>>16)+(G[4]<<16|G[4]>>>16)|0;X[7]=G[7]+(G[6]<<8|G[6]>>>24)+G[5]|0;}/**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
	     */C.RabbitLegacy=StreamCipher._createHelper(RabbitLegacy);})();return CryptoJS.RabbitLegacy;});},{"./cipher-core":60,"./core":61,"./enc-base64":62,"./evpkdf":64,"./md5":69}],82:[function(require,module,exports){;(function(root,factory,undef){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"),require("./enc-base64"),require("./md5"),require("./evpkdf"),require("./cipher-core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){(function(){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var StreamCipher=C_lib.StreamCipher;var C_algo=C.algo;// Reusable objects
var S=[];var C_=[];var G=[];/**
	     * Rabbit stream cipher algorithm
	     */var Rabbit=C_algo.Rabbit=StreamCipher.extend({_doReset:function(){// Shortcuts
var K=this._key.words;var iv=this.cfg.iv;// Swap endian
for(var i=0;i<4;i++){K[i]=(K[i]<<8|K[i]>>>24)&0x00ff00ff|(K[i]<<24|K[i]>>>8)&0xff00ff00;}// Generate initial state values
var X=this._X=[K[0],K[3]<<16|K[2]>>>16,K[1],K[0]<<16|K[3]>>>16,K[2],K[1]<<16|K[0]>>>16,K[3],K[2]<<16|K[1]>>>16];// Generate initial counter values
var C=this._C=[K[2]<<16|K[2]>>>16,K[0]&0xffff0000|K[1]&0x0000ffff,K[3]<<16|K[3]>>>16,K[1]&0xffff0000|K[2]&0x0000ffff,K[0]<<16|K[0]>>>16,K[2]&0xffff0000|K[3]&0x0000ffff,K[1]<<16|K[1]>>>16,K[3]&0xffff0000|K[0]&0x0000ffff];// Carry bit
this._b=0;// Iterate the system four times
for(var i=0;i<4;i++){nextState.call(this);}// Modify the counters
for(var i=0;i<8;i++){C[i]^=X[i+4&7];}// IV setup
if(iv){// Shortcuts
var IV=iv.words;var IV_0=IV[0];var IV_1=IV[1];// Generate four subvectors
var i0=(IV_0<<8|IV_0>>>24)&0x00ff00ff|(IV_0<<24|IV_0>>>8)&0xff00ff00;var i2=(IV_1<<8|IV_1>>>24)&0x00ff00ff|(IV_1<<24|IV_1>>>8)&0xff00ff00;var i1=i0>>>16|i2&0xffff0000;var i3=i2<<16|i0&0x0000ffff;// Modify counter values
C[0]^=i0;C[1]^=i1;C[2]^=i2;C[3]^=i3;C[4]^=i0;C[5]^=i1;C[6]^=i2;C[7]^=i3;// Iterate the system four times
for(var i=0;i<4;i++){nextState.call(this);}}},_doProcessBlock:function(M,offset){// Shortcut
var X=this._X;// Iterate the system
nextState.call(this);// Generate four keystream words
S[0]=X[0]^X[5]>>>16^X[3]<<16;S[1]=X[2]^X[7]>>>16^X[5]<<16;S[2]=X[4]^X[1]>>>16^X[7]<<16;S[3]=X[6]^X[3]>>>16^X[1]<<16;for(var i=0;i<4;i++){// Swap endian
S[i]=(S[i]<<8|S[i]>>>24)&0x00ff00ff|(S[i]<<24|S[i]>>>8)&0xff00ff00;// Encrypt
M[offset+i]^=S[i];}},blockSize:128/32,ivSize:64/32});function nextState(){// Shortcuts
var X=this._X;var C=this._C;// Save old counter values
for(var i=0;i<8;i++){C_[i]=C[i];}// Calculate new counter values
C[0]=C[0]+0x4d34d34d+this._b|0;C[1]=C[1]+0xd34d34d3+(C[0]>>>0<C_[0]>>>0?1:0)|0;C[2]=C[2]+0x34d34d34+(C[1]>>>0<C_[1]>>>0?1:0)|0;C[3]=C[3]+0x4d34d34d+(C[2]>>>0<C_[2]>>>0?1:0)|0;C[4]=C[4]+0xd34d34d3+(C[3]>>>0<C_[3]>>>0?1:0)|0;C[5]=C[5]+0x34d34d34+(C[4]>>>0<C_[4]>>>0?1:0)|0;C[6]=C[6]+0x4d34d34d+(C[5]>>>0<C_[5]>>>0?1:0)|0;C[7]=C[7]+0xd34d34d3+(C[6]>>>0<C_[6]>>>0?1:0)|0;this._b=C[7]>>>0<C_[7]>>>0?1:0;// Calculate the g-values
for(var i=0;i<8;i++){var gx=X[i]+C[i];// Construct high and low argument for squaring
var ga=gx&0xffff;var gb=gx>>>16;// Calculate high and low result of squaring
var gh=((ga*ga>>>17)+ga*gb>>>15)+gb*gb;var gl=((gx&0xffff0000)*gx|0)+((gx&0x0000ffff)*gx|0);// High XOR low
G[i]=gh^gl;}// Calculate new state values
X[0]=G[0]+(G[7]<<16|G[7]>>>16)+(G[6]<<16|G[6]>>>16)|0;X[1]=G[1]+(G[0]<<8|G[0]>>>24)+G[7]|0;X[2]=G[2]+(G[1]<<16|G[1]>>>16)+(G[0]<<16|G[0]>>>16)|0;X[3]=G[3]+(G[2]<<8|G[2]>>>24)+G[1]|0;X[4]=G[4]+(G[3]<<16|G[3]>>>16)+(G[2]<<16|G[2]>>>16)|0;X[5]=G[5]+(G[4]<<8|G[4]>>>24)+G[3]|0;X[6]=G[6]+(G[5]<<16|G[5]>>>16)+(G[4]<<16|G[4]>>>16)|0;X[7]=G[7]+(G[6]<<8|G[6]>>>24)+G[5]|0;}/**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
	     */C.Rabbit=StreamCipher._createHelper(Rabbit);})();return CryptoJS.Rabbit;});},{"./cipher-core":60,"./core":61,"./enc-base64":62,"./evpkdf":64,"./md5":69}],83:[function(require,module,exports){;(function(root,factory,undef){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"),require("./enc-base64"),require("./md5"),require("./evpkdf"),require("./cipher-core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){(function(){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var StreamCipher=C_lib.StreamCipher;var C_algo=C.algo;/**
	     * RC4 stream cipher algorithm.
	     */var RC4=C_algo.RC4=StreamCipher.extend({_doReset:function(){// Shortcuts
var key=this._key;var keyWords=key.words;var keySigBytes=key.sigBytes;// Init sbox
var S=this._S=[];for(var i=0;i<256;i++){S[i]=i;}// Key setup
for(var i=0,j=0;i<256;i++){var keyByteIndex=i%keySigBytes;var keyByte=keyWords[keyByteIndex>>>2]>>>24-keyByteIndex%4*8&0xff;j=(j+S[i]+keyByte)%256;// Swap
var t=S[i];S[i]=S[j];S[j]=t;}// Counters
this._i=this._j=0;},_doProcessBlock:function(M,offset){M[offset]^=generateKeystreamWord.call(this);},keySize:256/32,ivSize:0});function generateKeystreamWord(){// Shortcuts
var S=this._S;var i=this._i;var j=this._j;// Generate keystream word
var keystreamWord=0;for(var n=0;n<4;n++){i=(i+1)%256;j=(j+S[i])%256;// Swap
var t=S[i];S[i]=S[j];S[j]=t;keystreamWord|=S[(S[i]+S[j])%256]<<24-n*8;}// Update counters
this._i=i;this._j=j;return keystreamWord;}/**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
	     */C.RC4=StreamCipher._createHelper(RC4);/**
	     * Modified RC4 stream cipher algorithm.
	     */var RC4Drop=C_algo.RC4Drop=RC4.extend({/**
	         * Configuration options.
	         *
	         * @property {number} drop The number of keystream words to drop. Default 192
	         */cfg:RC4.cfg.extend({drop:192}),_doReset:function(){RC4._doReset.call(this);// Drop
for(var i=this.cfg.drop;i>0;i--){generateKeystreamWord.call(this);}}});/**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
	     */C.RC4Drop=StreamCipher._createHelper(RC4Drop);})();return CryptoJS.RC4;});},{"./cipher-core":60,"./core":61,"./enc-base64":62,"./evpkdf":64,"./md5":69}],84:[function(require,module,exports){;(function(root,factory){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/(function(Math){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var Hasher=C_lib.Hasher;var C_algo=C.algo;// Constants table
var _zl=WordArray.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]);var _zr=WordArray.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]);var _sl=WordArray.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]);var _sr=WordArray.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]);var _hl=WordArray.create([0x00000000,0x5A827999,0x6ED9EBA1,0x8F1BBCDC,0xA953FD4E]);var _hr=WordArray.create([0x50A28BE6,0x5C4DD124,0x6D703EF3,0x7A6D76E9,0x00000000]);/**
	     * RIPEMD160 hash algorithm.
	     */var RIPEMD160=C_algo.RIPEMD160=Hasher.extend({_doReset:function(){this._hash=WordArray.create([0x67452301,0xEFCDAB89,0x98BADCFE,0x10325476,0xC3D2E1F0]);},_doProcessBlock:function(M,offset){// Swap endian
for(var i=0;i<16;i++){// Shortcuts
var offset_i=offset+i;var M_offset_i=M[offset_i];// Swap
M[offset_i]=(M_offset_i<<8|M_offset_i>>>24)&0x00ff00ff|(M_offset_i<<24|M_offset_i>>>8)&0xff00ff00;}// Shortcut
var H=this._hash.words;var hl=_hl.words;var hr=_hr.words;var zl=_zl.words;var zr=_zr.words;var sl=_sl.words;var sr=_sr.words;// Working variables
var al,bl,cl,dl,el;var ar,br,cr,dr,er;ar=al=H[0];br=bl=H[1];cr=cl=H[2];dr=dl=H[3];er=el=H[4];// Computation
var t;for(var i=0;i<80;i+=1){t=al+M[offset+zl[i]]|0;if(i<16){t+=f1(bl,cl,dl)+hl[0];}else if(i<32){t+=f2(bl,cl,dl)+hl[1];}else if(i<48){t+=f3(bl,cl,dl)+hl[2];}else if(i<64){t+=f4(bl,cl,dl)+hl[3];}else{// if (i<80) {
t+=f5(bl,cl,dl)+hl[4];}t=t|0;t=rotl(t,sl[i]);t=t+el|0;al=el;el=dl;dl=rotl(cl,10);cl=bl;bl=t;t=ar+M[offset+zr[i]]|0;if(i<16){t+=f5(br,cr,dr)+hr[0];}else if(i<32){t+=f4(br,cr,dr)+hr[1];}else if(i<48){t+=f3(br,cr,dr)+hr[2];}else if(i<64){t+=f2(br,cr,dr)+hr[3];}else{// if (i<80) {
t+=f1(br,cr,dr)+hr[4];}t=t|0;t=rotl(t,sr[i]);t=t+er|0;ar=er;er=dr;dr=rotl(cr,10);cr=br;br=t;}// Intermediate hash value
t=H[1]+cl+dr|0;H[1]=H[2]+dl+er|0;H[2]=H[3]+el+ar|0;H[3]=H[4]+al+br|0;H[4]=H[0]+bl+cr|0;H[0]=t;},_doFinalize:function(){// Shortcuts
var data=this._data;var dataWords=data.words;var nBitsTotal=this._nDataBytes*8;var nBitsLeft=data.sigBytes*8;// Add padding
dataWords[nBitsLeft>>>5]|=0x80<<24-nBitsLeft%32;dataWords[(nBitsLeft+64>>>9<<4)+14]=(nBitsTotal<<8|nBitsTotal>>>24)&0x00ff00ff|(nBitsTotal<<24|nBitsTotal>>>8)&0xff00ff00;data.sigBytes=(dataWords.length+1)*4;// Hash final blocks
this._process();// Shortcuts
var hash=this._hash;var H=hash.words;// Swap endian
for(var i=0;i<5;i++){// Shortcut
var H_i=H[i];// Swap
H[i]=(H_i<<8|H_i>>>24)&0x00ff00ff|(H_i<<24|H_i>>>8)&0xff00ff00;}// Return final computed hash
return hash;},clone:function(){var clone=Hasher.clone.call(this);clone._hash=this._hash.clone();return clone;}});function f1(x,y,z){return x^y^z;}function f2(x,y,z){return x&y|~x&z;}function f3(x,y,z){return(x|~y)^z;}function f4(x,y,z){return x&z|y&~z;}function f5(x,y,z){return x^(y|~z);}function rotl(x,n){return x<<n|x>>>32-n;}/**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.RIPEMD160('message');
	     *     var hash = CryptoJS.RIPEMD160(wordArray);
	     */C.RIPEMD160=Hasher._createHelper(RIPEMD160);/**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
	     */C.HmacRIPEMD160=Hasher._createHmacHelper(RIPEMD160);})(Math);return CryptoJS.RIPEMD160;});},{"./core":61}],85:[function(require,module,exports){;(function(root,factory){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){(function(){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var Hasher=C_lib.Hasher;var C_algo=C.algo;// Reusable object
var W=[];/**
	     * SHA-1 hash algorithm.
	     */var SHA1=C_algo.SHA1=Hasher.extend({_doReset:function(){this._hash=new WordArray.init([0x67452301,0xefcdab89,0x98badcfe,0x10325476,0xc3d2e1f0]);},_doProcessBlock:function(M,offset){// Shortcut
var H=this._hash.words;// Working variables
var a=H[0];var b=H[1];var c=H[2];var d=H[3];var e=H[4];// Computation
for(var i=0;i<80;i++){if(i<16){W[i]=M[offset+i]|0;}else{var n=W[i-3]^W[i-8]^W[i-14]^W[i-16];W[i]=n<<1|n>>>31;}var t=(a<<5|a>>>27)+e+W[i];if(i<20){t+=(b&c|~b&d)+0x5a827999;}else if(i<40){t+=(b^c^d)+0x6ed9eba1;}else if(i<60){t+=(b&c|b&d|c&d)-0x70e44324;}else/* if (i < 80) */{t+=(b^c^d)-0x359d3e2a;}e=d;d=c;c=b<<30|b>>>2;b=a;a=t;}// Intermediate hash value
H[0]=H[0]+a|0;H[1]=H[1]+b|0;H[2]=H[2]+c|0;H[3]=H[3]+d|0;H[4]=H[4]+e|0;},_doFinalize:function(){// Shortcuts
var data=this._data;var dataWords=data.words;var nBitsTotal=this._nDataBytes*8;var nBitsLeft=data.sigBytes*8;// Add padding
dataWords[nBitsLeft>>>5]|=0x80<<24-nBitsLeft%32;dataWords[(nBitsLeft+64>>>9<<4)+14]=Math.floor(nBitsTotal/0x100000000);dataWords[(nBitsLeft+64>>>9<<4)+15]=nBitsTotal;data.sigBytes=dataWords.length*4;// Hash final blocks
this._process();// Return final computed hash
return this._hash;},clone:function(){var clone=Hasher.clone.call(this);clone._hash=this._hash.clone();return clone;}});/**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA1('message');
	     *     var hash = CryptoJS.SHA1(wordArray);
	     */C.SHA1=Hasher._createHelper(SHA1);/**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA1(message, key);
	     */C.HmacSHA1=Hasher._createHmacHelper(SHA1);})();return CryptoJS.SHA1;});},{"./core":61}],86:[function(require,module,exports){;(function(root,factory,undef){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"),require("./sha256"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core","./sha256"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){(function(){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var C_algo=C.algo;var SHA256=C_algo.SHA256;/**
	     * SHA-224 hash algorithm.
	     */var SHA224=C_algo.SHA224=SHA256.extend({_doReset:function(){this._hash=new WordArray.init([0xc1059ed8,0x367cd507,0x3070dd17,0xf70e5939,0xffc00b31,0x68581511,0x64f98fa7,0xbefa4fa4]);},_doFinalize:function(){var hash=SHA256._doFinalize.call(this);hash.sigBytes-=4;return hash;}});/**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA224('message');
	     *     var hash = CryptoJS.SHA224(wordArray);
	     */C.SHA224=SHA256._createHelper(SHA224);/**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA224(message, key);
	     */C.HmacSHA224=SHA256._createHmacHelper(SHA224);})();return CryptoJS.SHA224;});},{"./core":61,"./sha256":87}],87:[function(require,module,exports){;(function(root,factory){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){(function(Math){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var Hasher=C_lib.Hasher;var C_algo=C.algo;// Initialization and round constants tables
var H=[];var K=[];// Compute constants
(function(){function isPrime(n){var sqrtN=Math.sqrt(n);for(var factor=2;factor<=sqrtN;factor++){if(!(n%factor)){return false;}}return true;}function getFractionalBits(n){return(n-(n|0))*0x100000000|0;}var n=2;var nPrime=0;while(nPrime<64){if(isPrime(n)){if(nPrime<8){H[nPrime]=getFractionalBits(Math.pow(n,1/2));}K[nPrime]=getFractionalBits(Math.pow(n,1/3));nPrime++;}n++;}})();// Reusable object
var W=[];/**
	     * SHA-256 hash algorithm.
	     */var SHA256=C_algo.SHA256=Hasher.extend({_doReset:function(){this._hash=new WordArray.init(H.slice(0));},_doProcessBlock:function(M,offset){// Shortcut
var H=this._hash.words;// Working variables
var a=H[0];var b=H[1];var c=H[2];var d=H[3];var e=H[4];var f=H[5];var g=H[6];var h=H[7];// Computation
for(var i=0;i<64;i++){if(i<16){W[i]=M[offset+i]|0;}else{var gamma0x=W[i-15];var gamma0=(gamma0x<<25|gamma0x>>>7)^(gamma0x<<14|gamma0x>>>18)^gamma0x>>>3;var gamma1x=W[i-2];var gamma1=(gamma1x<<15|gamma1x>>>17)^(gamma1x<<13|gamma1x>>>19)^gamma1x>>>10;W[i]=gamma0+W[i-7]+gamma1+W[i-16];}var ch=e&f^~e&g;var maj=a&b^a&c^b&c;var sigma0=(a<<30|a>>>2)^(a<<19|a>>>13)^(a<<10|a>>>22);var sigma1=(e<<26|e>>>6)^(e<<21|e>>>11)^(e<<7|e>>>25);var t1=h+sigma1+ch+K[i]+W[i];var t2=sigma0+maj;h=g;g=f;f=e;e=d+t1|0;d=c;c=b;b=a;a=t1+t2|0;}// Intermediate hash value
H[0]=H[0]+a|0;H[1]=H[1]+b|0;H[2]=H[2]+c|0;H[3]=H[3]+d|0;H[4]=H[4]+e|0;H[5]=H[5]+f|0;H[6]=H[6]+g|0;H[7]=H[7]+h|0;},_doFinalize:function(){// Shortcuts
var data=this._data;var dataWords=data.words;var nBitsTotal=this._nDataBytes*8;var nBitsLeft=data.sigBytes*8;// Add padding
dataWords[nBitsLeft>>>5]|=0x80<<24-nBitsLeft%32;dataWords[(nBitsLeft+64>>>9<<4)+14]=Math.floor(nBitsTotal/0x100000000);dataWords[(nBitsLeft+64>>>9<<4)+15]=nBitsTotal;data.sigBytes=dataWords.length*4;// Hash final blocks
this._process();// Return final computed hash
return this._hash;},clone:function(){var clone=Hasher.clone.call(this);clone._hash=this._hash.clone();return clone;}});/**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */C.SHA256=Hasher._createHelper(SHA256);/**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */C.HmacSHA256=Hasher._createHmacHelper(SHA256);})(Math);return CryptoJS.SHA256;});},{"./core":61}],88:[function(require,module,exports){;(function(root,factory,undef){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"),require("./x64-core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core","./x64-core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){(function(Math){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var Hasher=C_lib.Hasher;var C_x64=C.x64;var X64Word=C_x64.Word;var C_algo=C.algo;// Constants tables
var RHO_OFFSETS=[];var PI_INDEXES=[];var ROUND_CONSTANTS=[];// Compute Constants
(function(){// Compute rho offset constants
var x=1,y=0;for(var t=0;t<24;t++){RHO_OFFSETS[x+5*y]=(t+1)*(t+2)/2%64;var newX=y%5;var newY=(2*x+3*y)%5;x=newX;y=newY;}// Compute pi index constants
for(var x=0;x<5;x++){for(var y=0;y<5;y++){PI_INDEXES[x+5*y]=y+(2*x+3*y)%5*5;}}// Compute round constants
var LFSR=0x01;for(var i=0;i<24;i++){var roundConstantMsw=0;var roundConstantLsw=0;for(var j=0;j<7;j++){if(LFSR&0x01){var bitPosition=(1<<j)-1;if(bitPosition<32){roundConstantLsw^=1<<bitPosition;}else/* if (bitPosition >= 32) */{roundConstantMsw^=1<<bitPosition-32;}}// Compute next LFSR
if(LFSR&0x80){// Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
LFSR=LFSR<<1^0x71;}else{LFSR<<=1;}}ROUND_CONSTANTS[i]=X64Word.create(roundConstantMsw,roundConstantLsw);}})();// Reusable objects for temporary values
var T=[];(function(){for(var i=0;i<25;i++){T[i]=X64Word.create();}})();/**
	     * SHA-3 hash algorithm.
	     */var SHA3=C_algo.SHA3=Hasher.extend({/**
	         * Configuration options.
	         *
	         * @property {number} outputLength
	         *   The desired number of bits in the output hash.
	         *   Only values permitted are: 224, 256, 384, 512.
	         *   Default: 512
	         */cfg:Hasher.cfg.extend({outputLength:512}),_doReset:function(){var state=this._state=[];for(var i=0;i<25;i++){state[i]=new X64Word.init();}this.blockSize=(1600-2*this.cfg.outputLength)/32;},_doProcessBlock:function(M,offset){// Shortcuts
var state=this._state;var nBlockSizeLanes=this.blockSize/2;// Absorb
for(var i=0;i<nBlockSizeLanes;i++){// Shortcuts
var M2i=M[offset+2*i];var M2i1=M[offset+2*i+1];// Swap endian
M2i=(M2i<<8|M2i>>>24)&0x00ff00ff|(M2i<<24|M2i>>>8)&0xff00ff00;M2i1=(M2i1<<8|M2i1>>>24)&0x00ff00ff|(M2i1<<24|M2i1>>>8)&0xff00ff00;// Absorb message into state
var lane=state[i];lane.high^=M2i1;lane.low^=M2i;}// Rounds
for(var round=0;round<24;round++){// Theta
for(var x=0;x<5;x++){// Mix column lanes
var tMsw=0,tLsw=0;for(var y=0;y<5;y++){var lane=state[x+5*y];tMsw^=lane.high;tLsw^=lane.low;}// Temporary values
var Tx=T[x];Tx.high=tMsw;Tx.low=tLsw;}for(var x=0;x<5;x++){// Shortcuts
var Tx4=T[(x+4)%5];var Tx1=T[(x+1)%5];var Tx1Msw=Tx1.high;var Tx1Lsw=Tx1.low;// Mix surrounding columns
var tMsw=Tx4.high^(Tx1Msw<<1|Tx1Lsw>>>31);var tLsw=Tx4.low^(Tx1Lsw<<1|Tx1Msw>>>31);for(var y=0;y<5;y++){var lane=state[x+5*y];lane.high^=tMsw;lane.low^=tLsw;}}// Rho Pi
for(var laneIndex=1;laneIndex<25;laneIndex++){// Shortcuts
var lane=state[laneIndex];var laneMsw=lane.high;var laneLsw=lane.low;var rhoOffset=RHO_OFFSETS[laneIndex];// Rotate lanes
if(rhoOffset<32){var tMsw=laneMsw<<rhoOffset|laneLsw>>>32-rhoOffset;var tLsw=laneLsw<<rhoOffset|laneMsw>>>32-rhoOffset;}else/* if (rhoOffset >= 32) */{var tMsw=laneLsw<<rhoOffset-32|laneMsw>>>64-rhoOffset;var tLsw=laneMsw<<rhoOffset-32|laneLsw>>>64-rhoOffset;}// Transpose lanes
var TPiLane=T[PI_INDEXES[laneIndex]];TPiLane.high=tMsw;TPiLane.low=tLsw;}// Rho pi at x = y = 0
var T0=T[0];var state0=state[0];T0.high=state0.high;T0.low=state0.low;// Chi
for(var x=0;x<5;x++){for(var y=0;y<5;y++){// Shortcuts
var laneIndex=x+5*y;var lane=state[laneIndex];var TLane=T[laneIndex];var Tx1Lane=T[(x+1)%5+5*y];var Tx2Lane=T[(x+2)%5+5*y];// Mix rows
lane.high=TLane.high^~Tx1Lane.high&Tx2Lane.high;lane.low=TLane.low^~Tx1Lane.low&Tx2Lane.low;}}// Iota
var lane=state[0];var roundConstant=ROUND_CONSTANTS[round];lane.high^=roundConstant.high;lane.low^=roundConstant.low;;}},_doFinalize:function(){// Shortcuts
var data=this._data;var dataWords=data.words;var nBitsTotal=this._nDataBytes*8;var nBitsLeft=data.sigBytes*8;var blockSizeBits=this.blockSize*32;// Add padding
dataWords[nBitsLeft>>>5]|=0x1<<24-nBitsLeft%32;dataWords[(Math.ceil((nBitsLeft+1)/blockSizeBits)*blockSizeBits>>>5)-1]|=0x80;data.sigBytes=dataWords.length*4;// Hash final blocks
this._process();// Shortcuts
var state=this._state;var outputLengthBytes=this.cfg.outputLength/8;var outputLengthLanes=outputLengthBytes/8;// Squeeze
var hashWords=[];for(var i=0;i<outputLengthLanes;i++){// Shortcuts
var lane=state[i];var laneMsw=lane.high;var laneLsw=lane.low;// Swap endian
laneMsw=(laneMsw<<8|laneMsw>>>24)&0x00ff00ff|(laneMsw<<24|laneMsw>>>8)&0xff00ff00;laneLsw=(laneLsw<<8|laneLsw>>>24)&0x00ff00ff|(laneLsw<<24|laneLsw>>>8)&0xff00ff00;// Squeeze state to retrieve hash
hashWords.push(laneLsw);hashWords.push(laneMsw);}// Return final computed hash
return new WordArray.init(hashWords,outputLengthBytes);},clone:function(){var clone=Hasher.clone.call(this);var state=clone._state=this._state.slice(0);for(var i=0;i<25;i++){state[i]=state[i].clone();}return clone;}});/**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA3('message');
	     *     var hash = CryptoJS.SHA3(wordArray);
	     */C.SHA3=Hasher._createHelper(SHA3);/**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA3(message, key);
	     */C.HmacSHA3=Hasher._createHmacHelper(SHA3);})(Math);return CryptoJS.SHA3;});},{"./core":61,"./x64-core":92}],89:[function(require,module,exports){;(function(root,factory,undef){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"),require("./x64-core"),require("./sha512"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core","./x64-core","./sha512"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){(function(){// Shortcuts
var C=CryptoJS;var C_x64=C.x64;var X64Word=C_x64.Word;var X64WordArray=C_x64.WordArray;var C_algo=C.algo;var SHA512=C_algo.SHA512;/**
	     * SHA-384 hash algorithm.
	     */var SHA384=C_algo.SHA384=SHA512.extend({_doReset:function(){this._hash=new X64WordArray.init([new X64Word.init(0xcbbb9d5d,0xc1059ed8),new X64Word.init(0x629a292a,0x367cd507),new X64Word.init(0x9159015a,0x3070dd17),new X64Word.init(0x152fecd8,0xf70e5939),new X64Word.init(0x67332667,0xffc00b31),new X64Word.init(0x8eb44a87,0x68581511),new X64Word.init(0xdb0c2e0d,0x64f98fa7),new X64Word.init(0x47b5481d,0xbefa4fa4)]);},_doFinalize:function(){var hash=SHA512._doFinalize.call(this);hash.sigBytes-=16;return hash;}});/**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA384('message');
	     *     var hash = CryptoJS.SHA384(wordArray);
	     */C.SHA384=SHA512._createHelper(SHA384);/**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA384(message, key);
	     */C.HmacSHA384=SHA512._createHmacHelper(SHA384);})();return CryptoJS.SHA384;});},{"./core":61,"./sha512":90,"./x64-core":92}],90:[function(require,module,exports){;(function(root,factory,undef){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"),require("./x64-core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core","./x64-core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){(function(){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var Hasher=C_lib.Hasher;var C_x64=C.x64;var X64Word=C_x64.Word;var X64WordArray=C_x64.WordArray;var C_algo=C.algo;function X64Word_create(){return X64Word.create.apply(X64Word,arguments);}// Constants
var K=[X64Word_create(0x428a2f98,0xd728ae22),X64Word_create(0x71374491,0x23ef65cd),X64Word_create(0xb5c0fbcf,0xec4d3b2f),X64Word_create(0xe9b5dba5,0x8189dbbc),X64Word_create(0x3956c25b,0xf348b538),X64Word_create(0x59f111f1,0xb605d019),X64Word_create(0x923f82a4,0xaf194f9b),X64Word_create(0xab1c5ed5,0xda6d8118),X64Word_create(0xd807aa98,0xa3030242),X64Word_create(0x12835b01,0x45706fbe),X64Word_create(0x243185be,0x4ee4b28c),X64Word_create(0x550c7dc3,0xd5ffb4e2),X64Word_create(0x72be5d74,0xf27b896f),X64Word_create(0x80deb1fe,0x3b1696b1),X64Word_create(0x9bdc06a7,0x25c71235),X64Word_create(0xc19bf174,0xcf692694),X64Word_create(0xe49b69c1,0x9ef14ad2),X64Word_create(0xefbe4786,0x384f25e3),X64Word_create(0x0fc19dc6,0x8b8cd5b5),X64Word_create(0x240ca1cc,0x77ac9c65),X64Word_create(0x2de92c6f,0x592b0275),X64Word_create(0x4a7484aa,0x6ea6e483),X64Word_create(0x5cb0a9dc,0xbd41fbd4),X64Word_create(0x76f988da,0x831153b5),X64Word_create(0x983e5152,0xee66dfab),X64Word_create(0xa831c66d,0x2db43210),X64Word_create(0xb00327c8,0x98fb213f),X64Word_create(0xbf597fc7,0xbeef0ee4),X64Word_create(0xc6e00bf3,0x3da88fc2),X64Word_create(0xd5a79147,0x930aa725),X64Word_create(0x06ca6351,0xe003826f),X64Word_create(0x14292967,0x0a0e6e70),X64Word_create(0x27b70a85,0x46d22ffc),X64Word_create(0x2e1b2138,0x5c26c926),X64Word_create(0x4d2c6dfc,0x5ac42aed),X64Word_create(0x53380d13,0x9d95b3df),X64Word_create(0x650a7354,0x8baf63de),X64Word_create(0x766a0abb,0x3c77b2a8),X64Word_create(0x81c2c92e,0x47edaee6),X64Word_create(0x92722c85,0x1482353b),X64Word_create(0xa2bfe8a1,0x4cf10364),X64Word_create(0xa81a664b,0xbc423001),X64Word_create(0xc24b8b70,0xd0f89791),X64Word_create(0xc76c51a3,0x0654be30),X64Word_create(0xd192e819,0xd6ef5218),X64Word_create(0xd6990624,0x5565a910),X64Word_create(0xf40e3585,0x5771202a),X64Word_create(0x106aa070,0x32bbd1b8),X64Word_create(0x19a4c116,0xb8d2d0c8),X64Word_create(0x1e376c08,0x5141ab53),X64Word_create(0x2748774c,0xdf8eeb99),X64Word_create(0x34b0bcb5,0xe19b48a8),X64Word_create(0x391c0cb3,0xc5c95a63),X64Word_create(0x4ed8aa4a,0xe3418acb),X64Word_create(0x5b9cca4f,0x7763e373),X64Word_create(0x682e6ff3,0xd6b2b8a3),X64Word_create(0x748f82ee,0x5defb2fc),X64Word_create(0x78a5636f,0x43172f60),X64Word_create(0x84c87814,0xa1f0ab72),X64Word_create(0x8cc70208,0x1a6439ec),X64Word_create(0x90befffa,0x23631e28),X64Word_create(0xa4506ceb,0xde82bde9),X64Word_create(0xbef9a3f7,0xb2c67915),X64Word_create(0xc67178f2,0xe372532b),X64Word_create(0xca273ece,0xea26619c),X64Word_create(0xd186b8c7,0x21c0c207),X64Word_create(0xeada7dd6,0xcde0eb1e),X64Word_create(0xf57d4f7f,0xee6ed178),X64Word_create(0x06f067aa,0x72176fba),X64Word_create(0x0a637dc5,0xa2c898a6),X64Word_create(0x113f9804,0xbef90dae),X64Word_create(0x1b710b35,0x131c471b),X64Word_create(0x28db77f5,0x23047d84),X64Word_create(0x32caab7b,0x40c72493),X64Word_create(0x3c9ebe0a,0x15c9bebc),X64Word_create(0x431d67c4,0x9c100d4c),X64Word_create(0x4cc5d4be,0xcb3e42b6),X64Word_create(0x597f299c,0xfc657e2a),X64Word_create(0x5fcb6fab,0x3ad6faec),X64Word_create(0x6c44198c,0x4a475817)];// Reusable objects
var W=[];(function(){for(var i=0;i<80;i++){W[i]=X64Word_create();}})();/**
	     * SHA-512 hash algorithm.
	     */var SHA512=C_algo.SHA512=Hasher.extend({_doReset:function(){this._hash=new X64WordArray.init([new X64Word.init(0x6a09e667,0xf3bcc908),new X64Word.init(0xbb67ae85,0x84caa73b),new X64Word.init(0x3c6ef372,0xfe94f82b),new X64Word.init(0xa54ff53a,0x5f1d36f1),new X64Word.init(0x510e527f,0xade682d1),new X64Word.init(0x9b05688c,0x2b3e6c1f),new X64Word.init(0x1f83d9ab,0xfb41bd6b),new X64Word.init(0x5be0cd19,0x137e2179)]);},_doProcessBlock:function(M,offset){// Shortcuts
var H=this._hash.words;var H0=H[0];var H1=H[1];var H2=H[2];var H3=H[3];var H4=H[4];var H5=H[5];var H6=H[6];var H7=H[7];var H0h=H0.high;var H0l=H0.low;var H1h=H1.high;var H1l=H1.low;var H2h=H2.high;var H2l=H2.low;var H3h=H3.high;var H3l=H3.low;var H4h=H4.high;var H4l=H4.low;var H5h=H5.high;var H5l=H5.low;var H6h=H6.high;var H6l=H6.low;var H7h=H7.high;var H7l=H7.low;// Working variables
var ah=H0h;var al=H0l;var bh=H1h;var bl=H1l;var ch=H2h;var cl=H2l;var dh=H3h;var dl=H3l;var eh=H4h;var el=H4l;var fh=H5h;var fl=H5l;var gh=H6h;var gl=H6l;var hh=H7h;var hl=H7l;// Rounds
for(var i=0;i<80;i++){// Shortcut
var Wi=W[i];// Extend message
if(i<16){var Wih=Wi.high=M[offset+i*2]|0;var Wil=Wi.low=M[offset+i*2+1]|0;}else{// Gamma0
var gamma0x=W[i-15];var gamma0xh=gamma0x.high;var gamma0xl=gamma0x.low;var gamma0h=(gamma0xh>>>1|gamma0xl<<31)^(gamma0xh>>>8|gamma0xl<<24)^gamma0xh>>>7;var gamma0l=(gamma0xl>>>1|gamma0xh<<31)^(gamma0xl>>>8|gamma0xh<<24)^(gamma0xl>>>7|gamma0xh<<25);// Gamma1
var gamma1x=W[i-2];var gamma1xh=gamma1x.high;var gamma1xl=gamma1x.low;var gamma1h=(gamma1xh>>>19|gamma1xl<<13)^(gamma1xh<<3|gamma1xl>>>29)^gamma1xh>>>6;var gamma1l=(gamma1xl>>>19|gamma1xh<<13)^(gamma1xl<<3|gamma1xh>>>29)^(gamma1xl>>>6|gamma1xh<<26);// W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
var Wi7=W[i-7];var Wi7h=Wi7.high;var Wi7l=Wi7.low;var Wi16=W[i-16];var Wi16h=Wi16.high;var Wi16l=Wi16.low;var Wil=gamma0l+Wi7l;var Wih=gamma0h+Wi7h+(Wil>>>0<gamma0l>>>0?1:0);var Wil=Wil+gamma1l;var Wih=Wih+gamma1h+(Wil>>>0<gamma1l>>>0?1:0);var Wil=Wil+Wi16l;var Wih=Wih+Wi16h+(Wil>>>0<Wi16l>>>0?1:0);Wi.high=Wih;Wi.low=Wil;}var chh=eh&fh^~eh&gh;var chl=el&fl^~el&gl;var majh=ah&bh^ah&ch^bh&ch;var majl=al&bl^al&cl^bl&cl;var sigma0h=(ah>>>28|al<<4)^(ah<<30|al>>>2)^(ah<<25|al>>>7);var sigma0l=(al>>>28|ah<<4)^(al<<30|ah>>>2)^(al<<25|ah>>>7);var sigma1h=(eh>>>14|el<<18)^(eh>>>18|el<<14)^(eh<<23|el>>>9);var sigma1l=(el>>>14|eh<<18)^(el>>>18|eh<<14)^(el<<23|eh>>>9);// t1 = h + sigma1 + ch + K[i] + W[i]
var Ki=K[i];var Kih=Ki.high;var Kil=Ki.low;var t1l=hl+sigma1l;var t1h=hh+sigma1h+(t1l>>>0<hl>>>0?1:0);var t1l=t1l+chl;var t1h=t1h+chh+(t1l>>>0<chl>>>0?1:0);var t1l=t1l+Kil;var t1h=t1h+Kih+(t1l>>>0<Kil>>>0?1:0);var t1l=t1l+Wil;var t1h=t1h+Wih+(t1l>>>0<Wil>>>0?1:0);// t2 = sigma0 + maj
var t2l=sigma0l+majl;var t2h=sigma0h+majh+(t2l>>>0<sigma0l>>>0?1:0);// Update working variables
hh=gh;hl=gl;gh=fh;gl=fl;fh=eh;fl=el;el=dl+t1l|0;eh=dh+t1h+(el>>>0<dl>>>0?1:0)|0;dh=ch;dl=cl;ch=bh;cl=bl;bh=ah;bl=al;al=t1l+t2l|0;ah=t1h+t2h+(al>>>0<t1l>>>0?1:0)|0;}// Intermediate hash value
H0l=H0.low=H0l+al;H0.high=H0h+ah+(H0l>>>0<al>>>0?1:0);H1l=H1.low=H1l+bl;H1.high=H1h+bh+(H1l>>>0<bl>>>0?1:0);H2l=H2.low=H2l+cl;H2.high=H2h+ch+(H2l>>>0<cl>>>0?1:0);H3l=H3.low=H3l+dl;H3.high=H3h+dh+(H3l>>>0<dl>>>0?1:0);H4l=H4.low=H4l+el;H4.high=H4h+eh+(H4l>>>0<el>>>0?1:0);H5l=H5.low=H5l+fl;H5.high=H5h+fh+(H5l>>>0<fl>>>0?1:0);H6l=H6.low=H6l+gl;H6.high=H6h+gh+(H6l>>>0<gl>>>0?1:0);H7l=H7.low=H7l+hl;H7.high=H7h+hh+(H7l>>>0<hl>>>0?1:0);},_doFinalize:function(){// Shortcuts
var data=this._data;var dataWords=data.words;var nBitsTotal=this._nDataBytes*8;var nBitsLeft=data.sigBytes*8;// Add padding
dataWords[nBitsLeft>>>5]|=0x80<<24-nBitsLeft%32;dataWords[(nBitsLeft+128>>>10<<5)+30]=Math.floor(nBitsTotal/0x100000000);dataWords[(nBitsLeft+128>>>10<<5)+31]=nBitsTotal;data.sigBytes=dataWords.length*4;// Hash final blocks
this._process();// Convert hash to 32-bit word array before returning
var hash=this._hash.toX32();// Return final computed hash
return hash;},clone:function(){var clone=Hasher.clone.call(this);clone._hash=this._hash.clone();return clone;},blockSize:1024/32});/**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA512('message');
	     *     var hash = CryptoJS.SHA512(wordArray);
	     */C.SHA512=Hasher._createHelper(SHA512);/**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA512(message, key);
	     */C.HmacSHA512=Hasher._createHmacHelper(SHA512);})();return CryptoJS.SHA512;});},{"./core":61,"./x64-core":92}],91:[function(require,module,exports){;(function(root,factory,undef){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"),require("./enc-base64"),require("./md5"),require("./evpkdf"),require("./cipher-core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){(function(){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var BlockCipher=C_lib.BlockCipher;var C_algo=C.algo;// Permuted Choice 1 constants
var PC1=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4];// Permuted Choice 2 constants
var PC2=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32];// Cumulative bit shift constants
var BIT_SHIFTS=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28];// SBOXes and round permutation constants
var SBOX_P=[{0x0:0x808200,0x10000000:0x8000,0x20000000:0x808002,0x30000000:0x2,0x40000000:0x200,0x50000000:0x808202,0x60000000:0x800202,0x70000000:0x800000,0x80000000:0x202,0x90000000:0x800200,0xa0000000:0x8200,0xb0000000:0x808000,0xc0000000:0x8002,0xd0000000:0x800002,0xe0000000:0x0,0xf0000000:0x8202,0x8000000:0x0,0x18000000:0x808202,0x28000000:0x8202,0x38000000:0x8000,0x48000000:0x808200,0x58000000:0x200,0x68000000:0x808002,0x78000000:0x2,0x88000000:0x800200,0x98000000:0x8200,0xa8000000:0x808000,0xb8000000:0x800202,0xc8000000:0x800002,0xd8000000:0x8002,0xe8000000:0x202,0xf8000000:0x800000,0x1:0x8000,0x10000001:0x2,0x20000001:0x808200,0x30000001:0x800000,0x40000001:0x808002,0x50000001:0x8200,0x60000001:0x200,0x70000001:0x800202,0x80000001:0x808202,0x90000001:0x808000,0xa0000001:0x800002,0xb0000001:0x8202,0xc0000001:0x202,0xd0000001:0x800200,0xe0000001:0x8002,0xf0000001:0x0,0x8000001:0x808202,0x18000001:0x808000,0x28000001:0x800000,0x38000001:0x200,0x48000001:0x8000,0x58000001:0x800002,0x68000001:0x2,0x78000001:0x8202,0x88000001:0x8002,0x98000001:0x800202,0xa8000001:0x202,0xb8000001:0x808200,0xc8000001:0x800200,0xd8000001:0x0,0xe8000001:0x8200,0xf8000001:0x808002},{0x0:0x40084010,0x1000000:0x4000,0x2000000:0x80000,0x3000000:0x40080010,0x4000000:0x40000010,0x5000000:0x40084000,0x6000000:0x40004000,0x7000000:0x10,0x8000000:0x84000,0x9000000:0x40004010,0xa000000:0x40000000,0xb000000:0x84010,0xc000000:0x80010,0xd000000:0x0,0xe000000:0x4010,0xf000000:0x40080000,0x800000:0x40004000,0x1800000:0x84010,0x2800000:0x10,0x3800000:0x40004010,0x4800000:0x40084010,0x5800000:0x40000000,0x6800000:0x80000,0x7800000:0x40080010,0x8800000:0x80010,0x9800000:0x0,0xa800000:0x4000,0xb800000:0x40080000,0xc800000:0x40000010,0xd800000:0x84000,0xe800000:0x40084000,0xf800000:0x4010,0x10000000:0x0,0x11000000:0x40080010,0x12000000:0x40004010,0x13000000:0x40084000,0x14000000:0x40080000,0x15000000:0x10,0x16000000:0x84010,0x17000000:0x4000,0x18000000:0x4010,0x19000000:0x80000,0x1a000000:0x80010,0x1b000000:0x40000010,0x1c000000:0x84000,0x1d000000:0x40004000,0x1e000000:0x40000000,0x1f000000:0x40084010,0x10800000:0x84010,0x11800000:0x80000,0x12800000:0x40080000,0x13800000:0x4000,0x14800000:0x40004000,0x15800000:0x40084010,0x16800000:0x10,0x17800000:0x40000000,0x18800000:0x40084000,0x19800000:0x40000010,0x1a800000:0x40004010,0x1b800000:0x80010,0x1c800000:0x0,0x1d800000:0x4010,0x1e800000:0x40080010,0x1f800000:0x84000},{0x0:0x104,0x100000:0x0,0x200000:0x4000100,0x300000:0x10104,0x400000:0x10004,0x500000:0x4000004,0x600000:0x4010104,0x700000:0x4010000,0x800000:0x4000000,0x900000:0x4010100,0xa00000:0x10100,0xb00000:0x4010004,0xc00000:0x4000104,0xd00000:0x10000,0xe00000:0x4,0xf00000:0x100,0x80000:0x4010100,0x180000:0x4010004,0x280000:0x0,0x380000:0x4000100,0x480000:0x4000004,0x580000:0x10000,0x680000:0x10004,0x780000:0x104,0x880000:0x4,0x980000:0x100,0xa80000:0x4010000,0xb80000:0x10104,0xc80000:0x10100,0xd80000:0x4000104,0xe80000:0x4010104,0xf80000:0x4000000,0x1000000:0x4010100,0x1100000:0x10004,0x1200000:0x10000,0x1300000:0x4000100,0x1400000:0x100,0x1500000:0x4010104,0x1600000:0x4000004,0x1700000:0x0,0x1800000:0x4000104,0x1900000:0x4000000,0x1a00000:0x4,0x1b00000:0x10100,0x1c00000:0x4010000,0x1d00000:0x104,0x1e00000:0x10104,0x1f00000:0x4010004,0x1080000:0x4000000,0x1180000:0x104,0x1280000:0x4010100,0x1380000:0x0,0x1480000:0x10004,0x1580000:0x4000100,0x1680000:0x100,0x1780000:0x4010004,0x1880000:0x10000,0x1980000:0x4010104,0x1a80000:0x10104,0x1b80000:0x4000004,0x1c80000:0x4000104,0x1d80000:0x4010000,0x1e80000:0x4,0x1f80000:0x10100},{0x0:0x80401000,0x10000:0x80001040,0x20000:0x401040,0x30000:0x80400000,0x40000:0x0,0x50000:0x401000,0x60000:0x80000040,0x70000:0x400040,0x80000:0x80000000,0x90000:0x400000,0xa0000:0x40,0xb0000:0x80001000,0xc0000:0x80400040,0xd0000:0x1040,0xe0000:0x1000,0xf0000:0x80401040,0x8000:0x80001040,0x18000:0x40,0x28000:0x80400040,0x38000:0x80001000,0x48000:0x401000,0x58000:0x80401040,0x68000:0x0,0x78000:0x80400000,0x88000:0x1000,0x98000:0x80401000,0xa8000:0x400000,0xb8000:0x1040,0xc8000:0x80000000,0xd8000:0x400040,0xe8000:0x401040,0xf8000:0x80000040,0x100000:0x400040,0x110000:0x401000,0x120000:0x80000040,0x130000:0x0,0x140000:0x1040,0x150000:0x80400040,0x160000:0x80401000,0x170000:0x80001040,0x180000:0x80401040,0x190000:0x80000000,0x1a0000:0x80400000,0x1b0000:0x401040,0x1c0000:0x80001000,0x1d0000:0x400000,0x1e0000:0x40,0x1f0000:0x1000,0x108000:0x80400000,0x118000:0x80401040,0x128000:0x0,0x138000:0x401000,0x148000:0x400040,0x158000:0x80000000,0x168000:0x80001040,0x178000:0x40,0x188000:0x80000040,0x198000:0x1000,0x1a8000:0x80001000,0x1b8000:0x80400040,0x1c8000:0x1040,0x1d8000:0x80401000,0x1e8000:0x400000,0x1f8000:0x401040},{0x0:0x80,0x1000:0x1040000,0x2000:0x40000,0x3000:0x20000000,0x4000:0x20040080,0x5000:0x1000080,0x6000:0x21000080,0x7000:0x40080,0x8000:0x1000000,0x9000:0x20040000,0xa000:0x20000080,0xb000:0x21040080,0xc000:0x21040000,0xd000:0x0,0xe000:0x1040080,0xf000:0x21000000,0x800:0x1040080,0x1800:0x21000080,0x2800:0x80,0x3800:0x1040000,0x4800:0x40000,0x5800:0x20040080,0x6800:0x21040000,0x7800:0x20000000,0x8800:0x20040000,0x9800:0x0,0xa800:0x21040080,0xb800:0x1000080,0xc800:0x20000080,0xd800:0x21000000,0xe800:0x1000000,0xf800:0x40080,0x10000:0x40000,0x11000:0x80,0x12000:0x20000000,0x13000:0x21000080,0x14000:0x1000080,0x15000:0x21040000,0x16000:0x20040080,0x17000:0x1000000,0x18000:0x21040080,0x19000:0x21000000,0x1a000:0x1040000,0x1b000:0x20040000,0x1c000:0x40080,0x1d000:0x20000080,0x1e000:0x0,0x1f000:0x1040080,0x10800:0x21000080,0x11800:0x1000000,0x12800:0x1040000,0x13800:0x20040080,0x14800:0x20000000,0x15800:0x1040080,0x16800:0x80,0x17800:0x21040000,0x18800:0x40080,0x19800:0x21040080,0x1a800:0x0,0x1b800:0x21000000,0x1c800:0x1000080,0x1d800:0x40000,0x1e800:0x20040000,0x1f800:0x20000080},{0x0:0x10000008,0x100:0x2000,0x200:0x10200000,0x300:0x10202008,0x400:0x10002000,0x500:0x200000,0x600:0x200008,0x700:0x10000000,0x800:0x0,0x900:0x10002008,0xa00:0x202000,0xb00:0x8,0xc00:0x10200008,0xd00:0x202008,0xe00:0x2008,0xf00:0x10202000,0x80:0x10200000,0x180:0x10202008,0x280:0x8,0x380:0x200000,0x480:0x202008,0x580:0x10000008,0x680:0x10002000,0x780:0x2008,0x880:0x200008,0x980:0x2000,0xa80:0x10002008,0xb80:0x10200008,0xc80:0x0,0xd80:0x10202000,0xe80:0x202000,0xf80:0x10000000,0x1000:0x10002000,0x1100:0x10200008,0x1200:0x10202008,0x1300:0x2008,0x1400:0x200000,0x1500:0x10000000,0x1600:0x10000008,0x1700:0x202000,0x1800:0x202008,0x1900:0x0,0x1a00:0x8,0x1b00:0x10200000,0x1c00:0x2000,0x1d00:0x10002008,0x1e00:0x10202000,0x1f00:0x200008,0x1080:0x8,0x1180:0x202000,0x1280:0x200000,0x1380:0x10000008,0x1480:0x10002000,0x1580:0x2008,0x1680:0x10202008,0x1780:0x10200000,0x1880:0x10202000,0x1980:0x10200008,0x1a80:0x2000,0x1b80:0x202008,0x1c80:0x200008,0x1d80:0x0,0x1e80:0x10000000,0x1f80:0x10002008},{0x0:0x100000,0x10:0x2000401,0x20:0x400,0x30:0x100401,0x40:0x2100401,0x50:0x0,0x60:0x1,0x70:0x2100001,0x80:0x2000400,0x90:0x100001,0xa0:0x2000001,0xb0:0x2100400,0xc0:0x2100000,0xd0:0x401,0xe0:0x100400,0xf0:0x2000000,0x8:0x2100001,0x18:0x0,0x28:0x2000401,0x38:0x2100400,0x48:0x100000,0x58:0x2000001,0x68:0x2000000,0x78:0x401,0x88:0x100401,0x98:0x2000400,0xa8:0x2100000,0xb8:0x100001,0xc8:0x400,0xd8:0x2100401,0xe8:0x1,0xf8:0x100400,0x100:0x2000000,0x110:0x100000,0x120:0x2000401,0x130:0x2100001,0x140:0x100001,0x150:0x2000400,0x160:0x2100400,0x170:0x100401,0x180:0x401,0x190:0x2100401,0x1a0:0x100400,0x1b0:0x1,0x1c0:0x0,0x1d0:0x2100000,0x1e0:0x2000001,0x1f0:0x400,0x108:0x100400,0x118:0x2000401,0x128:0x2100001,0x138:0x1,0x148:0x2000000,0x158:0x100000,0x168:0x401,0x178:0x2100400,0x188:0x2000001,0x198:0x2100000,0x1a8:0x0,0x1b8:0x2100401,0x1c8:0x100401,0x1d8:0x400,0x1e8:0x2000400,0x1f8:0x100001},{0x0:0x8000820,0x1:0x20000,0x2:0x8000000,0x3:0x20,0x4:0x20020,0x5:0x8020820,0x6:0x8020800,0x7:0x800,0x8:0x8020000,0x9:0x8000800,0xa:0x20800,0xb:0x8020020,0xc:0x820,0xd:0x0,0xe:0x8000020,0xf:0x20820,0x80000000:0x800,0x80000001:0x8020820,0x80000002:0x8000820,0x80000003:0x8000000,0x80000004:0x8020000,0x80000005:0x20800,0x80000006:0x20820,0x80000007:0x20,0x80000008:0x8000020,0x80000009:0x820,0x8000000a:0x20020,0x8000000b:0x8020800,0x8000000c:0x0,0x8000000d:0x8020020,0x8000000e:0x8000800,0x8000000f:0x20000,0x10:0x20820,0x11:0x8020800,0x12:0x20,0x13:0x800,0x14:0x8000800,0x15:0x8000020,0x16:0x8020020,0x17:0x20000,0x18:0x0,0x19:0x20020,0x1a:0x8020000,0x1b:0x8000820,0x1c:0x8020820,0x1d:0x20800,0x1e:0x820,0x1f:0x8000000,0x80000010:0x20000,0x80000011:0x800,0x80000012:0x8020020,0x80000013:0x20820,0x80000014:0x20,0x80000015:0x8020000,0x80000016:0x8000000,0x80000017:0x8000820,0x80000018:0x8020820,0x80000019:0x8000020,0x8000001a:0x8000800,0x8000001b:0x0,0x8000001c:0x20800,0x8000001d:0x820,0x8000001e:0x20020,0x8000001f:0x8020800}];// Masks that select the SBOX input
var SBOX_MASK=[0xf8000001,0x1f800000,0x01f80000,0x001f8000,0x0001f800,0x00001f80,0x000001f8,0x8000001f];/**
	     * DES block cipher algorithm.
	     */var DES=C_algo.DES=BlockCipher.extend({_doReset:function(){// Shortcuts
var key=this._key;var keyWords=key.words;// Select 56 bits according to PC1
var keyBits=[];for(var i=0;i<56;i++){var keyBitPos=PC1[i]-1;keyBits[i]=keyWords[keyBitPos>>>5]>>>31-keyBitPos%32&1;}// Assemble 16 subkeys
var subKeys=this._subKeys=[];for(var nSubKey=0;nSubKey<16;nSubKey++){// Create subkey
var subKey=subKeys[nSubKey]=[];// Shortcut
var bitShift=BIT_SHIFTS[nSubKey];// Select 48 bits according to PC2
for(var i=0;i<24;i++){// Select from the left 28 key bits
subKey[i/6|0]|=keyBits[(PC2[i]-1+bitShift)%28]<<31-i%6;// Select from the right 28 key bits
subKey[4+(i/6|0)]|=keyBits[28+(PC2[i+24]-1+bitShift)%28]<<31-i%6;}// Since each subkey is applied to an expanded 32-bit input,
// the subkey can be broken into 8 values scaled to 32-bits,
// which allows the key to be used without expansion
subKey[0]=subKey[0]<<1|subKey[0]>>>31;for(var i=1;i<7;i++){subKey[i]=subKey[i]>>>(i-1)*4+3;}subKey[7]=subKey[7]<<5|subKey[7]>>>27;}// Compute inverse subkeys
var invSubKeys=this._invSubKeys=[];for(var i=0;i<16;i++){invSubKeys[i]=subKeys[15-i];}},encryptBlock:function(M,offset){this._doCryptBlock(M,offset,this._subKeys);},decryptBlock:function(M,offset){this._doCryptBlock(M,offset,this._invSubKeys);},_doCryptBlock:function(M,offset,subKeys){// Get input
this._lBlock=M[offset];this._rBlock=M[offset+1];// Initial permutation
exchangeLR.call(this,4,0x0f0f0f0f);exchangeLR.call(this,16,0x0000ffff);exchangeRL.call(this,2,0x33333333);exchangeRL.call(this,8,0x00ff00ff);exchangeLR.call(this,1,0x55555555);// Rounds
for(var round=0;round<16;round++){// Shortcuts
var subKey=subKeys[round];var lBlock=this._lBlock;var rBlock=this._rBlock;// Feistel function
var f=0;for(var i=0;i<8;i++){f|=SBOX_P[i][((rBlock^subKey[i])&SBOX_MASK[i])>>>0];}this._lBlock=rBlock;this._rBlock=lBlock^f;}// Undo swap from last round
var t=this._lBlock;this._lBlock=this._rBlock;this._rBlock=t;// Final permutation
exchangeLR.call(this,1,0x55555555);exchangeRL.call(this,8,0x00ff00ff);exchangeRL.call(this,2,0x33333333);exchangeLR.call(this,16,0x0000ffff);exchangeLR.call(this,4,0x0f0f0f0f);// Set output
M[offset]=this._lBlock;M[offset+1]=this._rBlock;},keySize:64/32,ivSize:64/32,blockSize:64/32});// Swap bits across the left and right words
function exchangeLR(offset,mask){var t=(this._lBlock>>>offset^this._rBlock)&mask;this._rBlock^=t;this._lBlock^=t<<offset;}function exchangeRL(offset,mask){var t=(this._rBlock>>>offset^this._lBlock)&mask;this._lBlock^=t;this._rBlock^=t<<offset;}/**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
	     */C.DES=BlockCipher._createHelper(DES);/**
	     * Triple-DES block cipher algorithm.
	     */var TripleDES=C_algo.TripleDES=BlockCipher.extend({_doReset:function(){// Shortcuts
var key=this._key;var keyWords=key.words;// Create DES instances
this._des1=DES.createEncryptor(WordArray.create(keyWords.slice(0,2)));this._des2=DES.createEncryptor(WordArray.create(keyWords.slice(2,4)));this._des3=DES.createEncryptor(WordArray.create(keyWords.slice(4,6)));},encryptBlock:function(M,offset){this._des1.encryptBlock(M,offset);this._des2.decryptBlock(M,offset);this._des3.encryptBlock(M,offset);},decryptBlock:function(M,offset){this._des3.decryptBlock(M,offset);this._des2.encryptBlock(M,offset);this._des1.decryptBlock(M,offset);},keySize:192/32,ivSize:64/32,blockSize:64/32});/**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
	     */C.TripleDES=BlockCipher._createHelper(TripleDES);})();return CryptoJS.TripleDES;});},{"./cipher-core":60,"./core":61,"./enc-base64":62,"./evpkdf":64,"./md5":69}],92:[function(require,module,exports){;(function(root,factory){if(typeof exports==="object"){// CommonJS
module.exports=exports=factory(require("./core"));}else if(typeof define==="function"&&define.amd){// AMD
define(["./core"],factory);}else{// Global (browser)
factory(root.CryptoJS);}})(this,function(CryptoJS){(function(undefined){// Shortcuts
var C=CryptoJS;var C_lib=C.lib;var Base=C_lib.Base;var X32WordArray=C_lib.WordArray;/**
	     * x64 namespace.
	     */var C_x64=C.x64={};/**
	     * A 64-bit word.
	     */var X64Word=C_x64.Word=Base.extend({/**
	         * Initializes a newly created 64-bit word.
	         *
	         * @param {number} high The high 32 bits.
	         * @param {number} low The low 32 bits.
	         *
	         * @example
	         *
	         *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
	         */init:function(high,low){this.high=high;this.low=low;}/**
	         * Bitwise NOTs this word.
	         *
	         * @return {X64Word} A new x64-Word object after negating.
	         *
	         * @example
	         *
	         *     var negated = x64Word.not();
	         */// not: function () {
// var high = ~this.high;
// var low = ~this.low;
// return X64Word.create(high, low);
// },
/**
	         * Bitwise ANDs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to AND with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ANDing.
	         *
	         * @example
	         *
	         *     var anded = x64Word.and(anotherX64Word);
	         */// and: function (word) {
// var high = this.high & word.high;
// var low = this.low & word.low;
// return X64Word.create(high, low);
// },
/**
	         * Bitwise ORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to OR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ORing.
	         *
	         * @example
	         *
	         *     var ored = x64Word.or(anotherX64Word);
	         */// or: function (word) {
// var high = this.high | word.high;
// var low = this.low | word.low;
// return X64Word.create(high, low);
// },
/**
	         * Bitwise XORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to XOR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after XORing.
	         *
	         * @example
	         *
	         *     var xored = x64Word.xor(anotherX64Word);
	         */// xor: function (word) {
// var high = this.high ^ word.high;
// var low = this.low ^ word.low;
// return X64Word.create(high, low);
// },
/**
	         * Shifts this word n bits to the left.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftL(25);
	         */// shiftL: function (n) {
// if (n < 32) {
// var high = (this.high << n) | (this.low >>> (32 - n));
// var low = this.low << n;
// } else {
// var high = this.low << (n - 32);
// var low = 0;
// }
// return X64Word.create(high, low);
// },
/**
	         * Shifts this word n bits to the right.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftR(7);
	         */// shiftR: function (n) {
// if (n < 32) {
// var low = (this.low >>> n) | (this.high << (32 - n));
// var high = this.high >>> n;
// } else {
// var low = this.high >>> (n - 32);
// var high = 0;
// }
// return X64Word.create(high, low);
// },
/**
	         * Rotates this word n bits to the left.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotL(25);
	         */// rotL: function (n) {
// return this.shiftL(n).or(this.shiftR(64 - n));
// },
/**
	         * Rotates this word n bits to the right.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotR(7);
	         */// rotR: function (n) {
// return this.shiftR(n).or(this.shiftL(64 - n));
// },
/**
	         * Adds this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to add with this word.
	         *
	         * @return {X64Word} A new x64-Word object after adding.
	         *
	         * @example
	         *
	         *     var added = x64Word.add(anotherX64Word);
	         */// add: function (word) {
// var low = (this.low + word.low) | 0;
// var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
// var high = (this.high + word.high + carry) | 0;
// return X64Word.create(high, low);
// }
});/**
	     * An array of 64-bit words.
	     *
	     * @property {Array} words The array of CryptoJS.x64.Word objects.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */var X64WordArray=C_x64.WordArray=Base.extend({/**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create();
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ]);
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ], 10);
	         */init:function(words,sigBytes){words=this.words=words||[];if(sigBytes!=undefined){this.sigBytes=sigBytes;}else{this.sigBytes=words.length*8;}},/**
	         * Converts this 64-bit word array to a 32-bit word array.
	         *
	         * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
	         *
	         * @example
	         *
	         *     var x32WordArray = x64WordArray.toX32();
	         */toX32:function(){// Shortcuts
var x64Words=this.words;var x64WordsLength=x64Words.length;// Convert
var x32Words=[];for(var i=0;i<x64WordsLength;i++){var x64Word=x64Words[i];x32Words.push(x64Word.high);x32Words.push(x64Word.low);}return X32WordArray.create(x32Words,this.sigBytes);},/**
	         * Creates a copy of this word array.
	         *
	         * @return {X64WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = x64WordArray.clone();
	         */clone:function(){var clone=Base.clone.call(this);// Clone "words" array
var words=clone.words=this.words.slice(0);// Clone each X64Word object
var wordsLength=words.length;for(var i=0;i<wordsLength;i++){words[i]=words[i].clone();}return clone;}});})();return CryptoJS;});},{"./core":61}],93:[function(require,module,exports){(function(global){/*! https://mths.be/utf8js v2.0.0 by @mathias */;(function(root){// Detect free variables `exports`
var freeExports=typeof exports=='object'&&exports;// Detect free variable `module`
var freeModule=typeof module=='object'&&module&&module.exports==freeExports&&module;// Detect free variable `global`, from Node.js or Browserified code,
// and use it as `root`
var freeGlobal=typeof global=='object'&&global;if(freeGlobal.global===freeGlobal||freeGlobal.window===freeGlobal){root=freeGlobal;}/*--------------------------------------------------------------------------*/var stringFromCharCode=String.fromCharCode;// Taken from https://mths.be/punycode
function ucs2decode(string){var output=[];var counter=0;var length=string.length;var value;var extra;while(counter<length){value=string.charCodeAt(counter++);if(value>=0xD800&&value<=0xDBFF&&counter<length){// high surrogate, and there is a next character
extra=string.charCodeAt(counter++);if((extra&0xFC00)==0xDC00){// low surrogate
output.push(((value&0x3FF)<<10)+(extra&0x3FF)+0x10000);}else{// unmatched surrogate; only append this code unit, in case the next
// code unit is the high surrogate of a surrogate pair
output.push(value);counter--;}}else{output.push(value);}}return output;}// Taken from https://mths.be/punycode
function ucs2encode(array){var length=array.length;var index=-1;var value;var output='';while(++index<length){value=array[index];if(value>0xFFFF){value-=0x10000;output+=stringFromCharCode(value>>>10&0x3FF|0xD800);value=0xDC00|value&0x3FF;}output+=stringFromCharCode(value);}return output;}function checkScalarValue(codePoint){if(codePoint>=0xD800&&codePoint<=0xDFFF){throw Error('Lone surrogate U+'+codePoint.toString(16).toUpperCase()+' is not a scalar value');}}/*--------------------------------------------------------------------------*/function createByte(codePoint,shift){return stringFromCharCode(codePoint>>shift&0x3F|0x80);}function encodeCodePoint(codePoint){if((codePoint&0xFFFFFF80)==0){// 1-byte sequence
return stringFromCharCode(codePoint);}var symbol='';if((codePoint&0xFFFFF800)==0){// 2-byte sequence
symbol=stringFromCharCode(codePoint>>6&0x1F|0xC0);}else if((codePoint&0xFFFF0000)==0){// 3-byte sequence
checkScalarValue(codePoint);symbol=stringFromCharCode(codePoint>>12&0x0F|0xE0);symbol+=createByte(codePoint,6);}else if((codePoint&0xFFE00000)==0){// 4-byte sequence
symbol=stringFromCharCode(codePoint>>18&0x07|0xF0);symbol+=createByte(codePoint,12);symbol+=createByte(codePoint,6);}symbol+=stringFromCharCode(codePoint&0x3F|0x80);return symbol;}function utf8encode(string){var codePoints=ucs2decode(string);var length=codePoints.length;var index=-1;var codePoint;var byteString='';while(++index<length){codePoint=codePoints[index];byteString+=encodeCodePoint(codePoint);}return byteString;}/*--------------------------------------------------------------------------*/function readContinuationByte(){if(byteIndex>=byteCount){throw Error('Invalid byte index');}var continuationByte=byteArray[byteIndex]&0xFF;byteIndex++;if((continuationByte&0xC0)==0x80){return continuationByte&0x3F;}// If we end up here, it’s not a continuation byte
throw Error('Invalid continuation byte');}function decodeSymbol(){var byte1;var byte2;var byte3;var byte4;var codePoint;if(byteIndex>byteCount){throw Error('Invalid byte index');}if(byteIndex==byteCount){return false;}// Read first byte
byte1=byteArray[byteIndex]&0xFF;byteIndex++;// 1-byte sequence (no continuation bytes)
if((byte1&0x80)==0){return byte1;}// 2-byte sequence
if((byte1&0xE0)==0xC0){var byte2=readContinuationByte();codePoint=(byte1&0x1F)<<6|byte2;if(codePoint>=0x80){return codePoint;}else{throw Error('Invalid continuation byte');}}// 3-byte sequence (may include unpaired surrogates)
if((byte1&0xF0)==0xE0){byte2=readContinuationByte();byte3=readContinuationByte();codePoint=(byte1&0x0F)<<12|byte2<<6|byte3;if(codePoint>=0x0800){checkScalarValue(codePoint);return codePoint;}else{throw Error('Invalid continuation byte');}}// 4-byte sequence
if((byte1&0xF8)==0xF0){byte2=readContinuationByte();byte3=readContinuationByte();byte4=readContinuationByte();codePoint=(byte1&0x0F)<<0x12|byte2<<0x0C|byte3<<0x06|byte4;if(codePoint>=0x010000&&codePoint<=0x10FFFF){return codePoint;}}throw Error('Invalid UTF-8 detected');}var byteArray;var byteCount;var byteIndex;function utf8decode(byteString){byteArray=ucs2decode(byteString);byteCount=byteArray.length;byteIndex=0;var codePoints=[];var tmp;while((tmp=decodeSymbol())!==false){codePoints.push(tmp);}return ucs2encode(codePoints);}/*--------------------------------------------------------------------------*/var utf8={'version':'2.0.0','encode':utf8encode,'decode':utf8decode};// Some AMD build optimizers, like r.js, check for specific condition patterns
// like the following:
if(typeof define=='function'&&typeof define.amd=='object'&&define.amd){define(function(){return utf8;});}else if(freeExports&&!freeExports.nodeType){if(freeModule){// in Node.js or RingoJS v0.8.0+
freeModule.exports=utf8;}else{// in Narwhal or RingoJS v0.7.0-
var object={};var hasOwnProperty=object.hasOwnProperty;for(var key in utf8){hasOwnProperty.call(utf8,key)&&(freeExports[key]=utf8[key]);}}}else{// in Rhino or a web browser
root.utf8=utf8;}})(this);}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{}],94:[function(require,module,exports){},{}],95:[function(require,module,exports){(function(global){/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 *//* eslint-disable no-proto */'use strict';var base64=require('base64-js');var ieee754=require('ieee754');var isArray=require('isarray');exports.Buffer=Buffer;exports.SlowBuffer=SlowBuffer;exports.INSPECT_MAX_BYTES=50;Buffer.poolSize=8192;// not used by this implementation
var rootParent={};/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */Buffer.TYPED_ARRAY_SUPPORT=global.TYPED_ARRAY_SUPPORT!==undefined?global.TYPED_ARRAY_SUPPORT:typedArraySupport();function typedArraySupport(){try{var arr=new Uint8Array(1);arr.foo=function(){return 42;};return arr.foo()===42&&// typed array instances can be augmented
typeof arr.subarray==='function'&&// chrome 9-10 lack `subarray`
arr.subarray(1,1).byteLength===0;// ie10 has broken `subarray`
}catch(e){return false;}}function kMaxLength(){return Buffer.TYPED_ARRAY_SUPPORT?0x7fffffff:0x3fffffff;}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function Buffer(arg){if(!(this instanceof Buffer)){// Avoid going through an ArgumentsAdaptorTrampoline in the common case.
if(arguments.length>1)return new Buffer(arg,arguments[1]);return new Buffer(arg);}if(!Buffer.TYPED_ARRAY_SUPPORT){this.length=0;this.parent=undefined;}// Common case.
if(typeof arg==='number'){return fromNumber(this,arg);}// Slightly less common case.
if(typeof arg==='string'){return fromString(this,arg,arguments.length>1?arguments[1]:'utf8');}// Unusual.
return fromObject(this,arg);}// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment=function(arr){arr.__proto__=Buffer.prototype;return arr;};function fromNumber(that,length){that=allocate(that,length<0?0:checked(length)|0);if(!Buffer.TYPED_ARRAY_SUPPORT){for(var i=0;i<length;i++){that[i]=0;}}return that;}function fromString(that,string,encoding){if(typeof encoding!=='string'||encoding==='')encoding='utf8';// Assumption: byteLength() return value is always < kMaxLength.
var length=byteLength(string,encoding)|0;that=allocate(that,length);that.write(string,encoding);return that;}function fromObject(that,object){if(Buffer.isBuffer(object))return fromBuffer(that,object);if(isArray(object))return fromArray(that,object);if(object==null){throw new TypeError('must start with number, buffer, array or string');}if(typeof ArrayBuffer!=='undefined'){if(object.buffer instanceof ArrayBuffer){return fromTypedArray(that,object);}if(object instanceof ArrayBuffer){return fromArrayBuffer(that,object);}}if(object.length)return fromArrayLike(that,object);return fromJsonObject(that,object);}function fromBuffer(that,buffer){var length=checked(buffer.length)|0;that=allocate(that,length);buffer.copy(that,0,0,length);return that;}function fromArray(that,array){var length=checked(array.length)|0;that=allocate(that,length);for(var i=0;i<length;i+=1){that[i]=array[i]&255;}return that;}// Duplicate of fromArray() to keep fromArray() monomorphic.
function fromTypedArray(that,array){var length=checked(array.length)|0;that=allocate(that,length);// Truncating the elements is probably not what people expect from typed
// arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
// of the old Buffer constructor.
for(var i=0;i<length;i+=1){that[i]=array[i]&255;}return that;}function fromArrayBuffer(that,array){array.byteLength;// this throws if `array` is not a valid ArrayBuffer
if(Buffer.TYPED_ARRAY_SUPPORT){// Return an augmented `Uint8Array` instance, for best performance
that=new Uint8Array(array);that.__proto__=Buffer.prototype;}else{// Fallback: Return an object instance of the Buffer class
that=fromTypedArray(that,new Uint8Array(array));}return that;}function fromArrayLike(that,array){var length=checked(array.length)|0;that=allocate(that,length);for(var i=0;i<length;i+=1){that[i]=array[i]&255;}return that;}// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
// Returns a zero-length buffer for inputs that don't conform to the spec.
function fromJsonObject(that,object){var array;var length=0;if(object.type==='Buffer'&&isArray(object.data)){array=object.data;length=checked(array.length)|0;}that=allocate(that,length);for(var i=0;i<length;i+=1){that[i]=array[i]&255;}return that;}if(Buffer.TYPED_ARRAY_SUPPORT){Buffer.prototype.__proto__=Uint8Array.prototype;Buffer.__proto__=Uint8Array;}else{// pre-set for values that may exist in the future
Buffer.prototype.length=undefined;Buffer.prototype.parent=undefined;}function allocate(that,length){if(Buffer.TYPED_ARRAY_SUPPORT){// Return an augmented `Uint8Array` instance, for best performance
that=new Uint8Array(length);that.__proto__=Buffer.prototype;}else{// Fallback: Return an object instance of the Buffer class
that.length=length;}var fromPool=length!==0&&length<=Buffer.poolSize>>>1;if(fromPool)that.parent=rootParent;return that;}function checked(length){// Note: cannot use `length < kMaxLength` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(length>=kMaxLength()){throw new RangeError('Attempt to allocate Buffer larger than maximum '+'size: 0x'+kMaxLength().toString(16)+' bytes');}return length|0;}function SlowBuffer(subject,encoding){if(!(this instanceof SlowBuffer))return new SlowBuffer(subject,encoding);var buf=new Buffer(subject,encoding);delete buf.parent;return buf;}Buffer.isBuffer=function isBuffer(b){return!!(b!=null&&b._isBuffer);};Buffer.compare=function compare(a,b){if(!Buffer.isBuffer(a)||!Buffer.isBuffer(b)){throw new TypeError('Arguments must be Buffers');}if(a===b)return 0;var x=a.length;var y=b.length;var i=0;var len=Math.min(x,y);while(i<len){if(a[i]!==b[i])break;++i;}if(i!==len){x=a[i];y=b[i];}if(x<y)return-1;if(y<x)return 1;return 0;};Buffer.isEncoding=function isEncoding(encoding){switch(String(encoding).toLowerCase()){case'hex':case'utf8':case'utf-8':case'ascii':case'binary':case'base64':case'raw':case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return true;default:return false;}};Buffer.concat=function concat(list,length){if(!isArray(list))throw new TypeError('list argument must be an Array of Buffers.');if(list.length===0){return new Buffer(0);}var i;if(length===undefined){length=0;for(i=0;i<list.length;i++){length+=list[i].length;}}var buf=new Buffer(length);var pos=0;for(i=0;i<list.length;i++){var item=list[i];item.copy(buf,pos);pos+=item.length;}return buf;};function byteLength(string,encoding){if(typeof string!=='string')string=''+string;var len=string.length;if(len===0)return 0;// Use a for loop to avoid recursion
var loweredCase=false;for(;;){switch(encoding){case'ascii':case'binary':// Deprecated
case'raw':case'raws':return len;case'utf8':case'utf-8':return utf8ToBytes(string).length;case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return len*2;case'hex':return len>>>1;case'base64':return base64ToBytes(string).length;default:if(loweredCase)return utf8ToBytes(string).length;// assume utf8
encoding=(''+encoding).toLowerCase();loweredCase=true;}}}Buffer.byteLength=byteLength;function slowToString(encoding,start,end){var loweredCase=false;start=start|0;end=end===undefined||end===Infinity?this.length:end|0;if(!encoding)encoding='utf8';if(start<0)start=0;if(end>this.length)end=this.length;if(end<=start)return'';while(true){switch(encoding){case'hex':return hexSlice(this,start,end);case'utf8':case'utf-8':return utf8Slice(this,start,end);case'ascii':return asciiSlice(this,start,end);case'binary':return binarySlice(this,start,end);case'base64':return base64Slice(this,start,end);case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return utf16leSlice(this,start,end);default:if(loweredCase)throw new TypeError('Unknown encoding: '+encoding);encoding=(encoding+'').toLowerCase();loweredCase=true;}}}// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer=true;Buffer.prototype.toString=function toString(){var length=this.length|0;if(length===0)return'';if(arguments.length===0)return utf8Slice(this,0,length);return slowToString.apply(this,arguments);};Buffer.prototype.equals=function equals(b){if(!Buffer.isBuffer(b))throw new TypeError('Argument must be a Buffer');if(this===b)return true;return Buffer.compare(this,b)===0;};Buffer.prototype.inspect=function inspect(){var str='';var max=exports.INSPECT_MAX_BYTES;if(this.length>0){str=this.toString('hex',0,max).match(/.{2}/g).join(' ');if(this.length>max)str+=' ... ';}return'<Buffer '+str+'>';};Buffer.prototype.compare=function compare(b){if(!Buffer.isBuffer(b))throw new TypeError('Argument must be a Buffer');if(this===b)return 0;return Buffer.compare(this,b);};Buffer.prototype.indexOf=function indexOf(val,byteOffset){if(byteOffset>0x7fffffff)byteOffset=0x7fffffff;else if(byteOffset<-0x80000000)byteOffset=-0x80000000;byteOffset>>=0;if(this.length===0)return-1;if(byteOffset>=this.length)return-1;// Negative offsets start from the end of the buffer
if(byteOffset<0)byteOffset=Math.max(this.length+byteOffset,0);if(typeof val==='string'){if(val.length===0)return-1;// special case: looking for empty string always fails
return String.prototype.indexOf.call(this,val,byteOffset);}if(Buffer.isBuffer(val)){return arrayIndexOf(this,val,byteOffset);}if(typeof val==='number'){if(Buffer.TYPED_ARRAY_SUPPORT&&Uint8Array.prototype.indexOf==='function'){return Uint8Array.prototype.indexOf.call(this,val,byteOffset);}return arrayIndexOf(this,[val],byteOffset);}function arrayIndexOf(arr,val,byteOffset){var foundIndex=-1;for(var i=0;byteOffset+i<arr.length;i++){if(arr[byteOffset+i]===val[foundIndex===-1?0:i-foundIndex]){if(foundIndex===-1)foundIndex=i;if(i-foundIndex+1===val.length)return byteOffset+foundIndex;}else{foundIndex=-1;}}return-1;}throw new TypeError('val must be string, number or Buffer');};function hexWrite(buf,string,offset,length){offset=Number(offset)||0;var remaining=buf.length-offset;if(!length){length=remaining;}else{length=Number(length);if(length>remaining){length=remaining;}}// must be an even number of digits
var strLen=string.length;if(strLen%2!==0)throw new Error('Invalid hex string');if(length>strLen/2){length=strLen/2;}for(var i=0;i<length;i++){var parsed=parseInt(string.substr(i*2,2),16);if(isNaN(parsed))throw new Error('Invalid hex string');buf[offset+i]=parsed;}return i;}function utf8Write(buf,string,offset,length){return blitBuffer(utf8ToBytes(string,buf.length-offset),buf,offset,length);}function asciiWrite(buf,string,offset,length){return blitBuffer(asciiToBytes(string),buf,offset,length);}function binaryWrite(buf,string,offset,length){return asciiWrite(buf,string,offset,length);}function base64Write(buf,string,offset,length){return blitBuffer(base64ToBytes(string),buf,offset,length);}function ucs2Write(buf,string,offset,length){return blitBuffer(utf16leToBytes(string,buf.length-offset),buf,offset,length);}Buffer.prototype.write=function write(string,offset,length,encoding){// Buffer#write(string)
if(offset===undefined){encoding='utf8';length=this.length;offset=0;// Buffer#write(string, encoding)
}else if(length===undefined&&typeof offset==='string'){encoding=offset;length=this.length;offset=0;// Buffer#write(string, offset[, length][, encoding])
}else if(isFinite(offset)){offset=offset|0;if(isFinite(length)){length=length|0;if(encoding===undefined)encoding='utf8';}else{encoding=length;length=undefined;}// legacy write(string, encoding, offset, length) - remove in v0.13
}else{var swap=encoding;encoding=offset;offset=length|0;length=swap;}var remaining=this.length-offset;if(length===undefined||length>remaining)length=remaining;if(string.length>0&&(length<0||offset<0)||offset>this.length){throw new RangeError('attempt to write outside buffer bounds');}if(!encoding)encoding='utf8';var loweredCase=false;for(;;){switch(encoding){case'hex':return hexWrite(this,string,offset,length);case'utf8':case'utf-8':return utf8Write(this,string,offset,length);case'ascii':return asciiWrite(this,string,offset,length);case'binary':return binaryWrite(this,string,offset,length);case'base64':// Warning: maxLength not taken into account in base64Write
return base64Write(this,string,offset,length);case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return ucs2Write(this,string,offset,length);default:if(loweredCase)throw new TypeError('Unknown encoding: '+encoding);encoding=(''+encoding).toLowerCase();loweredCase=true;}}};Buffer.prototype.toJSON=function toJSON(){return{type:'Buffer',data:Array.prototype.slice.call(this._arr||this,0)};};function base64Slice(buf,start,end){if(start===0&&end===buf.length){return base64.fromByteArray(buf);}else{return base64.fromByteArray(buf.slice(start,end));}}function utf8Slice(buf,start,end){end=Math.min(buf.length,end);var res=[];var i=start;while(i<end){var firstByte=buf[i];var codePoint=null;var bytesPerSequence=firstByte>0xEF?4:firstByte>0xDF?3:firstByte>0xBF?2:1;if(i+bytesPerSequence<=end){var secondByte,thirdByte,fourthByte,tempCodePoint;switch(bytesPerSequence){case 1:if(firstByte<0x80){codePoint=firstByte;}break;case 2:secondByte=buf[i+1];if((secondByte&0xC0)===0x80){tempCodePoint=(firstByte&0x1F)<<0x6|secondByte&0x3F;if(tempCodePoint>0x7F){codePoint=tempCodePoint;}}break;case 3:secondByte=buf[i+1];thirdByte=buf[i+2];if((secondByte&0xC0)===0x80&&(thirdByte&0xC0)===0x80){tempCodePoint=(firstByte&0xF)<<0xC|(secondByte&0x3F)<<0x6|thirdByte&0x3F;if(tempCodePoint>0x7FF&&(tempCodePoint<0xD800||tempCodePoint>0xDFFF)){codePoint=tempCodePoint;}}break;case 4:secondByte=buf[i+1];thirdByte=buf[i+2];fourthByte=buf[i+3];if((secondByte&0xC0)===0x80&&(thirdByte&0xC0)===0x80&&(fourthByte&0xC0)===0x80){tempCodePoint=(firstByte&0xF)<<0x12|(secondByte&0x3F)<<0xC|(thirdByte&0x3F)<<0x6|fourthByte&0x3F;if(tempCodePoint>0xFFFF&&tempCodePoint<0x110000){codePoint=tempCodePoint;}}}}if(codePoint===null){// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
codePoint=0xFFFD;bytesPerSequence=1;}else if(codePoint>0xFFFF){// encode to utf16 (surrogate pair dance)
codePoint-=0x10000;res.push(codePoint>>>10&0x3FF|0xD800);codePoint=0xDC00|codePoint&0x3FF;}res.push(codePoint);i+=bytesPerSequence;}return decodeCodePointsArray(res);}// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH=0x1000;function decodeCodePointsArray(codePoints){var len=codePoints.length;if(len<=MAX_ARGUMENTS_LENGTH){return String.fromCharCode.apply(String,codePoints);// avoid extra slice()
}// Decode in chunks to avoid "call stack size exceeded".
var res='';var i=0;while(i<len){res+=String.fromCharCode.apply(String,codePoints.slice(i,i+=MAX_ARGUMENTS_LENGTH));}return res;}function asciiSlice(buf,start,end){var ret='';end=Math.min(buf.length,end);for(var i=start;i<end;i++){ret+=String.fromCharCode(buf[i]&0x7F);}return ret;}function binarySlice(buf,start,end){var ret='';end=Math.min(buf.length,end);for(var i=start;i<end;i++){ret+=String.fromCharCode(buf[i]);}return ret;}function hexSlice(buf,start,end){var len=buf.length;if(!start||start<0)start=0;if(!end||end<0||end>len)end=len;var out='';for(var i=start;i<end;i++){out+=toHex(buf[i]);}return out;}function utf16leSlice(buf,start,end){var bytes=buf.slice(start,end);var res='';for(var i=0;i<bytes.length;i+=2){res+=String.fromCharCode(bytes[i]+bytes[i+1]*256);}return res;}Buffer.prototype.slice=function slice(start,end){var len=this.length;start=~~start;end=end===undefined?len:~~end;if(start<0){start+=len;if(start<0)start=0;}else if(start>len){start=len;}if(end<0){end+=len;if(end<0)end=0;}else if(end>len){end=len;}if(end<start)end=start;var newBuf;if(Buffer.TYPED_ARRAY_SUPPORT){newBuf=this.subarray(start,end);newBuf.__proto__=Buffer.prototype;}else{var sliceLen=end-start;newBuf=new Buffer(sliceLen,undefined);for(var i=0;i<sliceLen;i++){newBuf[i]=this[i+start];}}if(newBuf.length)newBuf.parent=this.parent||this;return newBuf;};/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function checkOffset(offset,ext,length){if(offset%1!==0||offset<0)throw new RangeError('offset is not uint');if(offset+ext>length)throw new RangeError('Trying to access beyond buffer length');}Buffer.prototype.readUIntLE=function readUIntLE(offset,byteLength,noAssert){offset=offset|0;byteLength=byteLength|0;if(!noAssert)checkOffset(offset,byteLength,this.length);var val=this[offset];var mul=1;var i=0;while(++i<byteLength&&(mul*=0x100)){val+=this[offset+i]*mul;}return val;};Buffer.prototype.readUIntBE=function readUIntBE(offset,byteLength,noAssert){offset=offset|0;byteLength=byteLength|0;if(!noAssert){checkOffset(offset,byteLength,this.length);}var val=this[offset+--byteLength];var mul=1;while(byteLength>0&&(mul*=0x100)){val+=this[offset+--byteLength]*mul;}return val;};Buffer.prototype.readUInt8=function readUInt8(offset,noAssert){if(!noAssert)checkOffset(offset,1,this.length);return this[offset];};Buffer.prototype.readUInt16LE=function readUInt16LE(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);return this[offset]|this[offset+1]<<8;};Buffer.prototype.readUInt16BE=function readUInt16BE(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);return this[offset]<<8|this[offset+1];};Buffer.prototype.readUInt32LE=function readUInt32LE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return(this[offset]|this[offset+1]<<8|this[offset+2]<<16)+this[offset+3]*0x1000000;};Buffer.prototype.readUInt32BE=function readUInt32BE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return this[offset]*0x1000000+(this[offset+1]<<16|this[offset+2]<<8|this[offset+3]);};Buffer.prototype.readIntLE=function readIntLE(offset,byteLength,noAssert){offset=offset|0;byteLength=byteLength|0;if(!noAssert)checkOffset(offset,byteLength,this.length);var val=this[offset];var mul=1;var i=0;while(++i<byteLength&&(mul*=0x100)){val+=this[offset+i]*mul;}mul*=0x80;if(val>=mul)val-=Math.pow(2,8*byteLength);return val;};Buffer.prototype.readIntBE=function readIntBE(offset,byteLength,noAssert){offset=offset|0;byteLength=byteLength|0;if(!noAssert)checkOffset(offset,byteLength,this.length);var i=byteLength;var mul=1;var val=this[offset+--i];while(i>0&&(mul*=0x100)){val+=this[offset+--i]*mul;}mul*=0x80;if(val>=mul)val-=Math.pow(2,8*byteLength);return val;};Buffer.prototype.readInt8=function readInt8(offset,noAssert){if(!noAssert)checkOffset(offset,1,this.length);if(!(this[offset]&0x80))return this[offset];return(0xff-this[offset]+1)*-1;};Buffer.prototype.readInt16LE=function readInt16LE(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);var val=this[offset]|this[offset+1]<<8;return val&0x8000?val|0xFFFF0000:val;};Buffer.prototype.readInt16BE=function readInt16BE(offset,noAssert){if(!noAssert)checkOffset(offset,2,this.length);var val=this[offset+1]|this[offset]<<8;return val&0x8000?val|0xFFFF0000:val;};Buffer.prototype.readInt32LE=function readInt32LE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return this[offset]|this[offset+1]<<8|this[offset+2]<<16|this[offset+3]<<24;};Buffer.prototype.readInt32BE=function readInt32BE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return this[offset]<<24|this[offset+1]<<16|this[offset+2]<<8|this[offset+3];};Buffer.prototype.readFloatLE=function readFloatLE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return ieee754.read(this,offset,true,23,4);};Buffer.prototype.readFloatBE=function readFloatBE(offset,noAssert){if(!noAssert)checkOffset(offset,4,this.length);return ieee754.read(this,offset,false,23,4);};Buffer.prototype.readDoubleLE=function readDoubleLE(offset,noAssert){if(!noAssert)checkOffset(offset,8,this.length);return ieee754.read(this,offset,true,52,8);};Buffer.prototype.readDoubleBE=function readDoubleBE(offset,noAssert){if(!noAssert)checkOffset(offset,8,this.length);return ieee754.read(this,offset,false,52,8);};function checkInt(buf,value,offset,ext,max,min){if(!Buffer.isBuffer(buf))throw new TypeError('buffer must be a Buffer instance');if(value>max||value<min)throw new RangeError('value is out of bounds');if(offset+ext>buf.length)throw new RangeError('index out of range');}Buffer.prototype.writeUIntLE=function writeUIntLE(value,offset,byteLength,noAssert){value=+value;offset=offset|0;byteLength=byteLength|0;if(!noAssert)checkInt(this,value,offset,byteLength,Math.pow(2,8*byteLength),0);var mul=1;var i=0;this[offset]=value&0xFF;while(++i<byteLength&&(mul*=0x100)){this[offset+i]=value/mul&0xFF;}return offset+byteLength;};Buffer.prototype.writeUIntBE=function writeUIntBE(value,offset,byteLength,noAssert){value=+value;offset=offset|0;byteLength=byteLength|0;if(!noAssert)checkInt(this,value,offset,byteLength,Math.pow(2,8*byteLength),0);var i=byteLength-1;var mul=1;this[offset+i]=value&0xFF;while(--i>=0&&(mul*=0x100)){this[offset+i]=value/mul&0xFF;}return offset+byteLength;};Buffer.prototype.writeUInt8=function writeUInt8(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,1,0xff,0);if(!Buffer.TYPED_ARRAY_SUPPORT)value=Math.floor(value);this[offset]=value&0xff;return offset+1;};function objectWriteUInt16(buf,value,offset,littleEndian){if(value<0)value=0xffff+value+1;for(var i=0,j=Math.min(buf.length-offset,2);i<j;i++){buf[offset+i]=(value&0xff<<8*(littleEndian?i:1-i))>>>(littleEndian?i:1-i)*8;}}Buffer.prototype.writeUInt16LE=function writeUInt16LE(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,2,0xffff,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value&0xff;this[offset+1]=value>>>8;}else{objectWriteUInt16(this,value,offset,true);}return offset+2;};Buffer.prototype.writeUInt16BE=function writeUInt16BE(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,2,0xffff,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value>>>8;this[offset+1]=value&0xff;}else{objectWriteUInt16(this,value,offset,false);}return offset+2;};function objectWriteUInt32(buf,value,offset,littleEndian){if(value<0)value=0xffffffff+value+1;for(var i=0,j=Math.min(buf.length-offset,4);i<j;i++){buf[offset+i]=value>>>(littleEndian?i:3-i)*8&0xff;}}Buffer.prototype.writeUInt32LE=function writeUInt32LE(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,4,0xffffffff,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset+3]=value>>>24;this[offset+2]=value>>>16;this[offset+1]=value>>>8;this[offset]=value&0xff;}else{objectWriteUInt32(this,value,offset,true);}return offset+4;};Buffer.prototype.writeUInt32BE=function writeUInt32BE(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,4,0xffffffff,0);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value>>>24;this[offset+1]=value>>>16;this[offset+2]=value>>>8;this[offset+3]=value&0xff;}else{objectWriteUInt32(this,value,offset,false);}return offset+4;};Buffer.prototype.writeIntLE=function writeIntLE(value,offset,byteLength,noAssert){value=+value;offset=offset|0;if(!noAssert){var limit=Math.pow(2,8*byteLength-1);checkInt(this,value,offset,byteLength,limit-1,-limit);}var i=0;var mul=1;var sub=value<0?1:0;this[offset]=value&0xFF;while(++i<byteLength&&(mul*=0x100)){this[offset+i]=(value/mul>>0)-sub&0xFF;}return offset+byteLength;};Buffer.prototype.writeIntBE=function writeIntBE(value,offset,byteLength,noAssert){value=+value;offset=offset|0;if(!noAssert){var limit=Math.pow(2,8*byteLength-1);checkInt(this,value,offset,byteLength,limit-1,-limit);}var i=byteLength-1;var mul=1;var sub=value<0?1:0;this[offset+i]=value&0xFF;while(--i>=0&&(mul*=0x100)){this[offset+i]=(value/mul>>0)-sub&0xFF;}return offset+byteLength;};Buffer.prototype.writeInt8=function writeInt8(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,1,0x7f,-0x80);if(!Buffer.TYPED_ARRAY_SUPPORT)value=Math.floor(value);if(value<0)value=0xff+value+1;this[offset]=value&0xff;return offset+1;};Buffer.prototype.writeInt16LE=function writeInt16LE(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,2,0x7fff,-0x8000);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value&0xff;this[offset+1]=value>>>8;}else{objectWriteUInt16(this,value,offset,true);}return offset+2;};Buffer.prototype.writeInt16BE=function writeInt16BE(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,2,0x7fff,-0x8000);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value>>>8;this[offset+1]=value&0xff;}else{objectWriteUInt16(this,value,offset,false);}return offset+2;};Buffer.prototype.writeInt32LE=function writeInt32LE(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,4,0x7fffffff,-0x80000000);if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value&0xff;this[offset+1]=value>>>8;this[offset+2]=value>>>16;this[offset+3]=value>>>24;}else{objectWriteUInt32(this,value,offset,true);}return offset+4;};Buffer.prototype.writeInt32BE=function writeInt32BE(value,offset,noAssert){value=+value;offset=offset|0;if(!noAssert)checkInt(this,value,offset,4,0x7fffffff,-0x80000000);if(value<0)value=0xffffffff+value+1;if(Buffer.TYPED_ARRAY_SUPPORT){this[offset]=value>>>24;this[offset+1]=value>>>16;this[offset+2]=value>>>8;this[offset+3]=value&0xff;}else{objectWriteUInt32(this,value,offset,false);}return offset+4;};function checkIEEE754(buf,value,offset,ext,max,min){if(offset+ext>buf.length)throw new RangeError('index out of range');if(offset<0)throw new RangeError('index out of range');}function writeFloat(buf,value,offset,littleEndian,noAssert){if(!noAssert){checkIEEE754(buf,value,offset,4,3.4028234663852886e+38,-3.4028234663852886e+38);}ieee754.write(buf,value,offset,littleEndian,23,4);return offset+4;}Buffer.prototype.writeFloatLE=function writeFloatLE(value,offset,noAssert){return writeFloat(this,value,offset,true,noAssert);};Buffer.prototype.writeFloatBE=function writeFloatBE(value,offset,noAssert){return writeFloat(this,value,offset,false,noAssert);};function writeDouble(buf,value,offset,littleEndian,noAssert){if(!noAssert){checkIEEE754(buf,value,offset,8,1.7976931348623157E+308,-1.7976931348623157E+308);}ieee754.write(buf,value,offset,littleEndian,52,8);return offset+8;}Buffer.prototype.writeDoubleLE=function writeDoubleLE(value,offset,noAssert){return writeDouble(this,value,offset,true,noAssert);};Buffer.prototype.writeDoubleBE=function writeDoubleBE(value,offset,noAssert){return writeDouble(this,value,offset,false,noAssert);};// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy=function copy(target,targetStart,start,end){if(!start)start=0;if(!end&&end!==0)end=this.length;if(targetStart>=target.length)targetStart=target.length;if(!targetStart)targetStart=0;if(end>0&&end<start)end=start;// Copy 0 bytes; we're done
if(end===start)return 0;if(target.length===0||this.length===0)return 0;// Fatal error conditions
if(targetStart<0){throw new RangeError('targetStart out of bounds');}if(start<0||start>=this.length)throw new RangeError('sourceStart out of bounds');if(end<0)throw new RangeError('sourceEnd out of bounds');// Are we oob?
if(end>this.length)end=this.length;if(target.length-targetStart<end-start){end=target.length-targetStart+start;}var len=end-start;var i;if(this===target&&start<targetStart&&targetStart<end){// descending copy from end
for(i=len-1;i>=0;i--){target[i+targetStart]=this[i+start];}}else if(len<1000||!Buffer.TYPED_ARRAY_SUPPORT){// ascending copy from start
for(i=0;i<len;i++){target[i+targetStart]=this[i+start];}}else{Uint8Array.prototype.set.call(target,this.subarray(start,start+len),targetStart);}return len;};// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill=function fill(value,start,end){if(!value)value=0;if(!start)start=0;if(!end)end=this.length;if(end<start)throw new RangeError('end < start');// Fill 0 bytes; we're done
if(end===start)return;if(this.length===0)return;if(start<0||start>=this.length)throw new RangeError('start out of bounds');if(end<0||end>this.length)throw new RangeError('end out of bounds');var i;if(typeof value==='number'){for(i=start;i<end;i++){this[i]=value;}}else{var bytes=utf8ToBytes(value.toString());var len=bytes.length;for(i=start;i<end;i++){this[i]=bytes[i%len];}}return this;};// HELPER FUNCTIONS
// ================
var INVALID_BASE64_RE=/[^+\/0-9A-Za-z-_]/g;function base64clean(str){// Node strips out invalid characters like \n and \t from the string, base64-js does not
str=stringtrim(str).replace(INVALID_BASE64_RE,'');// Node converts strings with length < 2 to ''
if(str.length<2)return'';// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
while(str.length%4!==0){str=str+'=';}return str;}function stringtrim(str){if(str.trim)return str.trim();return str.replace(/^\s+|\s+$/g,'');}function toHex(n){if(n<16)return'0'+n.toString(16);return n.toString(16);}function utf8ToBytes(string,units){units=units||Infinity;var codePoint;var length=string.length;var leadSurrogate=null;var bytes=[];for(var i=0;i<length;i++){codePoint=string.charCodeAt(i);// is surrogate component
if(codePoint>0xD7FF&&codePoint<0xE000){// last char was a lead
if(!leadSurrogate){// no lead yet
if(codePoint>0xDBFF){// unexpected trail
if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD);continue;}else if(i+1===length){// unpaired lead
if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD);continue;}// valid lead
leadSurrogate=codePoint;continue;}// 2 leads in a row
if(codePoint<0xDC00){if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD);leadSurrogate=codePoint;continue;}// valid surrogate pair
codePoint=(leadSurrogate-0xD800<<10|codePoint-0xDC00)+0x10000;}else if(leadSurrogate){// valid bmp char, but last char was a lead
if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD);}leadSurrogate=null;// encode utf8
if(codePoint<0x80){if((units-=1)<0)break;bytes.push(codePoint);}else if(codePoint<0x800){if((units-=2)<0)break;bytes.push(codePoint>>0x6|0xC0,codePoint&0x3F|0x80);}else if(codePoint<0x10000){if((units-=3)<0)break;bytes.push(codePoint>>0xC|0xE0,codePoint>>0x6&0x3F|0x80,codePoint&0x3F|0x80);}else if(codePoint<0x110000){if((units-=4)<0)break;bytes.push(codePoint>>0x12|0xF0,codePoint>>0xC&0x3F|0x80,codePoint>>0x6&0x3F|0x80,codePoint&0x3F|0x80);}else{throw new Error('Invalid code point');}}return bytes;}function asciiToBytes(str){var byteArray=[];for(var i=0;i<str.length;i++){// Node's code seems to be doing this and not & 0x7F..
byteArray.push(str.charCodeAt(i)&0xFF);}return byteArray;}function utf16leToBytes(str,units){var c,hi,lo;var byteArray=[];for(var i=0;i<str.length;i++){if((units-=2)<0)break;c=str.charCodeAt(i);hi=c>>8;lo=c%256;byteArray.push(lo);byteArray.push(hi);}return byteArray;}function base64ToBytes(str){return base64.toByteArray(base64clean(str));}function blitBuffer(src,dst,offset,length){for(var i=0;i<length;i++){if(i+offset>=dst.length||i>=src.length)break;dst[i+offset]=src[i];}return i;}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{"base64-js":96,"ieee754":97,"isarray":98}],96:[function(require,module,exports){;(function(exports){'use strict';var lookup='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';var Arr=typeof Uint8Array!=='undefined'?Uint8Array:Array;var PLUS='+'.charCodeAt(0);var SLASH='/'.charCodeAt(0);var NUMBER='0'.charCodeAt(0);var LOWER='a'.charCodeAt(0);var UPPER='A'.charCodeAt(0);var PLUS_URL_SAFE='-'.charCodeAt(0);var SLASH_URL_SAFE='_'.charCodeAt(0);function decode(elt){var code=elt.charCodeAt(0);if(code===PLUS||code===PLUS_URL_SAFE)return 62;// '+'
if(code===SLASH||code===SLASH_URL_SAFE)return 63;// '/'
if(code<NUMBER)return-1;// no match
if(code<NUMBER+10)return code-NUMBER+26+26;if(code<UPPER+26)return code-UPPER;if(code<LOWER+26)return code-LOWER+26;}function b64ToByteArray(b64){var i,j,l,tmp,placeHolders,arr;if(b64.length%4>0){throw new Error('Invalid string. Length must be a multiple of 4');}// the number of equal signs (place holders)
// if there are two placeholders, than the two characters before it
// represent one byte
// if there is only one, then the three characters before it represent 2 bytes
// this is just a cheap hack to not do indexOf twice
var len=b64.length;placeHolders=b64.charAt(len-2)==='='?2:b64.charAt(len-1)==='='?1:0;// base64 is 4/3 + up to two characters of the original data
arr=new Arr(b64.length*3/4-placeHolders);// if there are placeholders, only get up to the last complete 4 chars
l=placeHolders>0?b64.length-4:b64.length;var L=0;function push(v){arr[L++]=v;}for(i=0,j=0;i<l;i+=4,j+=3){tmp=decode(b64.charAt(i))<<18|decode(b64.charAt(i+1))<<12|decode(b64.charAt(i+2))<<6|decode(b64.charAt(i+3));push((tmp&0xFF0000)>>16);push((tmp&0xFF00)>>8);push(tmp&0xFF);}if(placeHolders===2){tmp=decode(b64.charAt(i))<<2|decode(b64.charAt(i+1))>>4;push(tmp&0xFF);}else if(placeHolders===1){tmp=decode(b64.charAt(i))<<10|decode(b64.charAt(i+1))<<4|decode(b64.charAt(i+2))>>2;push(tmp>>8&0xFF);push(tmp&0xFF);}return arr;}function uint8ToBase64(uint8){var i;var extraBytes=uint8.length%3;// if we have 1 byte left, pad 2 bytes
var output='';var temp,length;function encode(num){return lookup.charAt(num);}function tripletToBase64(num){return encode(num>>18&0x3F)+encode(num>>12&0x3F)+encode(num>>6&0x3F)+encode(num&0x3F);}// go through the array every three bytes, we'll deal with trailing stuff later
for(i=0,length=uint8.length-extraBytes;i<length;i+=3){temp=(uint8[i]<<16)+(uint8[i+1]<<8)+uint8[i+2];output+=tripletToBase64(temp);}// pad the end with zeros, but make sure to not forget the extra bytes
switch(extraBytes){case 1:temp=uint8[uint8.length-1];output+=encode(temp>>2);output+=encode(temp<<4&0x3F);output+='==';break;case 2:temp=(uint8[uint8.length-2]<<8)+uint8[uint8.length-1];output+=encode(temp>>10);output+=encode(temp>>4&0x3F);output+=encode(temp<<2&0x3F);output+='=';break;default:break;}return output;}exports.toByteArray=b64ToByteArray;exports.fromByteArray=uint8ToBase64;})(typeof exports==='undefined'?this.base64js={}:exports);},{}],97:[function(require,module,exports){exports.read=function(buffer,offset,isLE,mLen,nBytes){var e,m;var eLen=nBytes*8-mLen-1;var eMax=(1<<eLen)-1;var eBias=eMax>>1;var nBits=-7;var i=isLE?nBytes-1:0;var d=isLE?-1:1;var s=buffer[offset+i];i+=d;e=s&(1<<-nBits)-1;s>>=-nBits;nBits+=eLen;for(;nBits>0;e=e*256+buffer[offset+i],i+=d,nBits-=8){}m=e&(1<<-nBits)-1;e>>=-nBits;nBits+=mLen;for(;nBits>0;m=m*256+buffer[offset+i],i+=d,nBits-=8){}if(e===0){e=1-eBias;}else if(e===eMax){return m?NaN:(s?-1:1)*Infinity;}else{m=m+Math.pow(2,mLen);e=e-eBias;}return(s?-1:1)*m*Math.pow(2,e-mLen);};exports.write=function(buffer,value,offset,isLE,mLen,nBytes){var e,m,c;var eLen=nBytes*8-mLen-1;var eMax=(1<<eLen)-1;var eBias=eMax>>1;var rt=mLen===23?Math.pow(2,-24)-Math.pow(2,-77):0;var i=isLE?0:nBytes-1;var d=isLE?1:-1;var s=value<0||value===0&&1/value<0?1:0;value=Math.abs(value);if(isNaN(value)||value===Infinity){m=isNaN(value)?1:0;e=eMax;}else{e=Math.floor(Math.log(value)/Math.LN2);if(value*(c=Math.pow(2,-e))<1){e--;c*=2;}if(e+eBias>=1){value+=rt/c;}else{value+=rt*Math.pow(2,1-eBias);}if(value*c>=2){e++;c/=2;}if(e+eBias>=eMax){m=0;e=eMax;}else if(e+eBias>=1){m=(value*c-1)*Math.pow(2,mLen);e=e+eBias;}else{m=value*Math.pow(2,eBias-1)*Math.pow(2,mLen);e=0;}}for(;mLen>=8;buffer[offset+i]=m&0xff,i+=d,m/=256,mLen-=8){}e=e<<mLen|m;eLen+=mLen;for(;eLen>0;buffer[offset+i]=e&0xff,i+=d,e/=256,eLen-=8){}buffer[offset+i-d]|=s*128;};},{}],98:[function(require,module,exports){var toString={}.toString;module.exports=Array.isArray||function(arr){return toString.call(arr)=='[object Array]';};},{}],99:[function(require,module,exports){'use strict';exports.randomBytes=exports.rng=exports.pseudoRandomBytes=exports.prng=require('randombytes');exports.createHash=exports.Hash=require('create-hash');exports.createHmac=exports.Hmac=require('create-hmac');var hashes=['sha1','sha224','sha256','sha384','sha512','md5','rmd160'].concat(Object.keys(require('browserify-sign/algos')));exports.getHashes=function(){return hashes;};var p=require('pbkdf2');exports.pbkdf2=p.pbkdf2;exports.pbkdf2Sync=p.pbkdf2Sync;var aes=require('browserify-cipher');['Cipher','createCipher','Cipheriv','createCipheriv','Decipher','createDecipher','Decipheriv','createDecipheriv','getCiphers','listCiphers'].forEach(function(key){exports[key]=aes[key];});var dh=require('diffie-hellman');['DiffieHellmanGroup','createDiffieHellmanGroup','getDiffieHellman','createDiffieHellman','DiffieHellman'].forEach(function(key){exports[key]=dh[key];});var sign=require('browserify-sign');['createSign','Sign','createVerify','Verify'].forEach(function(key){exports[key]=sign[key];});exports.createECDH=require('create-ecdh');var publicEncrypt=require('public-encrypt');['publicEncrypt','privateEncrypt','publicDecrypt','privateDecrypt'].forEach(function(key){exports[key]=publicEncrypt[key];})// the least I can do is make error messages for the rest of the node.js/crypto api.
;['createCredentials'].forEach(function(name){exports[name]=function(){throw new Error(['sorry, '+name+' is not implemented yet','we accept pull requests','https://github.com/crypto-browserify/crypto-browserify'].join('\n'));};});},{"browserify-cipher":100,"browserify-sign":130,"browserify-sign/algos":129,"create-ecdh":197,"create-hash":223,"create-hmac":236,"diffie-hellman":237,"pbkdf2":244,"public-encrypt":245,"randombytes":290}],100:[function(require,module,exports){var ebtk=require('evp_bytestokey');var aes=require('browserify-aes/browser');var DES=require('browserify-des');var desModes=require('browserify-des/modes');var aesModes=require('browserify-aes/modes');function createCipher(suite,password){var keyLen,ivLen;suite=suite.toLowerCase();if(aesModes[suite]){keyLen=aesModes[suite].key;ivLen=aesModes[suite].iv;}else if(desModes[suite]){keyLen=desModes[suite].key*8;ivLen=desModes[suite].iv;}else{throw new TypeError('invalid suite type');}var keys=ebtk(password,false,keyLen,ivLen);return createCipheriv(suite,keys.key,keys.iv);}function createDecipher(suite,password){var keyLen,ivLen;suite=suite.toLowerCase();if(aesModes[suite]){keyLen=aesModes[suite].key;ivLen=aesModes[suite].iv;}else if(desModes[suite]){keyLen=desModes[suite].key*8;ivLen=desModes[suite].iv;}else{throw new TypeError('invalid suite type');}var keys=ebtk(password,false,keyLen,ivLen);return createDecipheriv(suite,keys.key,keys.iv);}function createCipheriv(suite,key,iv){suite=suite.toLowerCase();if(aesModes[suite]){return aes.createCipheriv(suite,key,iv);}else if(desModes[suite]){return new DES({key:key,iv:iv,mode:suite});}else{throw new TypeError('invalid suite type');}}function createDecipheriv(suite,key,iv){suite=suite.toLowerCase();if(aesModes[suite]){return aes.createDecipheriv(suite,key,iv);}else if(desModes[suite]){return new DES({key:key,iv:iv,mode:suite,decrypt:true});}else{throw new TypeError('invalid suite type');}}exports.createCipher=exports.Cipher=createCipher;exports.createCipheriv=exports.Cipheriv=createCipheriv;exports.createDecipher=exports.Decipher=createDecipher;exports.createDecipheriv=exports.Decipheriv=createDecipheriv;function getCiphers(){return Object.keys(desModes).concat(aes.getCiphers());}exports.listCiphers=exports.getCiphers=getCiphers;},{"browserify-aes/browser":103,"browserify-aes/modes":107,"browserify-des":118,"browserify-des/modes":119,"evp_bytestokey":128}],101:[function(require,module,exports){(function(Buffer){// based on the aes implimentation in triple sec
// https://github.com/keybase/triplesec
// which is in turn based on the one from crypto-js
// https://code.google.com/p/crypto-js/
var uint_max=Math.pow(2,32);function fixup_uint32(x){var ret,x_pos;ret=x>uint_max||x<0?(x_pos=Math.abs(x)%uint_max,x<0?uint_max-x_pos:x_pos):x;return ret;}function scrub_vec(v){for(var i=0;i<v.length;v++){v[i]=0;}return false;}function Global(){this.SBOX=[];this.INV_SBOX=[];this.SUB_MIX=[[],[],[],[]];this.INV_SUB_MIX=[[],[],[],[]];this.init();this.RCON=[0x00,0x01,0x02,0x04,0x08,0x10,0x20,0x40,0x80,0x1b,0x36];}Global.prototype.init=function(){var d,i,sx,t,x,x2,x4,x8,xi,_i;d=function(){var _i,_results;_results=[];for(i=_i=0;_i<256;i=++_i){if(i<128){_results.push(i<<1);}else{_results.push(i<<1^0x11b);}}return _results;}();x=0;xi=0;for(i=_i=0;_i<256;i=++_i){sx=xi^xi<<1^xi<<2^xi<<3^xi<<4;sx=sx>>>8^sx&0xff^0x63;this.SBOX[x]=sx;this.INV_SBOX[sx]=x;x2=d[x];x4=d[x2];x8=d[x4];t=d[sx]*0x101^sx*0x1010100;this.SUB_MIX[0][x]=t<<24|t>>>8;this.SUB_MIX[1][x]=t<<16|t>>>16;this.SUB_MIX[2][x]=t<<8|t>>>24;this.SUB_MIX[3][x]=t;t=x8*0x1010101^x4*0x10001^x2*0x101^x*0x1010100;this.INV_SUB_MIX[0][sx]=t<<24|t>>>8;this.INV_SUB_MIX[1][sx]=t<<16|t>>>16;this.INV_SUB_MIX[2][sx]=t<<8|t>>>24;this.INV_SUB_MIX[3][sx]=t;if(x===0){x=xi=1;}else{x=x2^d[d[d[x8^x2]]];xi^=d[d[xi]];}}return true;};var G=new Global();AES.blockSize=4*4;AES.prototype.blockSize=AES.blockSize;AES.keySize=256/8;AES.prototype.keySize=AES.keySize;function bufferToArray(buf){var len=buf.length/4;var out=new Array(len);var i=-1;while(++i<len){out[i]=buf.readUInt32BE(i*4);}return out;}function AES(key){this._key=bufferToArray(key);this._doReset();}AES.prototype._doReset=function(){var invKsRow,keySize,keyWords,ksRow,ksRows,t;keyWords=this._key;keySize=keyWords.length;this._nRounds=keySize+6;ksRows=(this._nRounds+1)*4;this._keySchedule=[];for(ksRow=0;ksRow<ksRows;ksRow++){this._keySchedule[ksRow]=ksRow<keySize?keyWords[ksRow]:(t=this._keySchedule[ksRow-1],ksRow%keySize===0?(t=t<<8|t>>>24,t=G.SBOX[t>>>24]<<24|G.SBOX[t>>>16&0xff]<<16|G.SBOX[t>>>8&0xff]<<8|G.SBOX[t&0xff],t^=G.RCON[ksRow/keySize|0]<<24):keySize>6&&ksRow%keySize===4?t=G.SBOX[t>>>24]<<24|G.SBOX[t>>>16&0xff]<<16|G.SBOX[t>>>8&0xff]<<8|G.SBOX[t&0xff]:void 0,this._keySchedule[ksRow-keySize]^t);}this._invKeySchedule=[];for(invKsRow=0;invKsRow<ksRows;invKsRow++){ksRow=ksRows-invKsRow;t=this._keySchedule[ksRow-(invKsRow%4?0:4)];this._invKeySchedule[invKsRow]=invKsRow<4||ksRow<=4?t:G.INV_SUB_MIX[0][G.SBOX[t>>>24]]^G.INV_SUB_MIX[1][G.SBOX[t>>>16&0xff]]^G.INV_SUB_MIX[2][G.SBOX[t>>>8&0xff]]^G.INV_SUB_MIX[3][G.SBOX[t&0xff]];}return true;};AES.prototype.encryptBlock=function(M){M=bufferToArray(new Buffer(M));var out=this._doCryptBlock(M,this._keySchedule,G.SUB_MIX,G.SBOX);var buf=new Buffer(16);buf.writeUInt32BE(out[0],0);buf.writeUInt32BE(out[1],4);buf.writeUInt32BE(out[2],8);buf.writeUInt32BE(out[3],12);return buf;};AES.prototype.decryptBlock=function(M){M=bufferToArray(new Buffer(M));var temp=[M[3],M[1]];M[1]=temp[0];M[3]=temp[1];var out=this._doCryptBlock(M,this._invKeySchedule,G.INV_SUB_MIX,G.INV_SBOX);var buf=new Buffer(16);buf.writeUInt32BE(out[0],0);buf.writeUInt32BE(out[3],4);buf.writeUInt32BE(out[2],8);buf.writeUInt32BE(out[1],12);return buf;};AES.prototype.scrub=function(){scrub_vec(this._keySchedule);scrub_vec(this._invKeySchedule);scrub_vec(this._key);};AES.prototype._doCryptBlock=function(M,keySchedule,SUB_MIX,SBOX){var ksRow,s0,s1,s2,s3,t0,t1,t2,t3;s0=M[0]^keySchedule[0];s1=M[1]^keySchedule[1];s2=M[2]^keySchedule[2];s3=M[3]^keySchedule[3];ksRow=4;for(var round=1;round<this._nRounds;round++){t0=SUB_MIX[0][s0>>>24]^SUB_MIX[1][s1>>>16&0xff]^SUB_MIX[2][s2>>>8&0xff]^SUB_MIX[3][s3&0xff]^keySchedule[ksRow++];t1=SUB_MIX[0][s1>>>24]^SUB_MIX[1][s2>>>16&0xff]^SUB_MIX[2][s3>>>8&0xff]^SUB_MIX[3][s0&0xff]^keySchedule[ksRow++];t2=SUB_MIX[0][s2>>>24]^SUB_MIX[1][s3>>>16&0xff]^SUB_MIX[2][s0>>>8&0xff]^SUB_MIX[3][s1&0xff]^keySchedule[ksRow++];t3=SUB_MIX[0][s3>>>24]^SUB_MIX[1][s0>>>16&0xff]^SUB_MIX[2][s1>>>8&0xff]^SUB_MIX[3][s2&0xff]^keySchedule[ksRow++];s0=t0;s1=t1;s2=t2;s3=t3;}t0=(SBOX[s0>>>24]<<24|SBOX[s1>>>16&0xff]<<16|SBOX[s2>>>8&0xff]<<8|SBOX[s3&0xff])^keySchedule[ksRow++];t1=(SBOX[s1>>>24]<<24|SBOX[s2>>>16&0xff]<<16|SBOX[s3>>>8&0xff]<<8|SBOX[s0&0xff])^keySchedule[ksRow++];t2=(SBOX[s2>>>24]<<24|SBOX[s3>>>16&0xff]<<16|SBOX[s0>>>8&0xff]<<8|SBOX[s1&0xff])^keySchedule[ksRow++];t3=(SBOX[s3>>>24]<<24|SBOX[s0>>>16&0xff]<<16|SBOX[s1>>>8&0xff]<<8|SBOX[s2&0xff])^keySchedule[ksRow++];return[fixup_uint32(t0),fixup_uint32(t1),fixup_uint32(t2),fixup_uint32(t3)];};exports.AES=AES;}).call(this,require("buffer").Buffer);},{"buffer":95}],102:[function(require,module,exports){(function(Buffer){var aes=require('./aes');var Transform=require('cipher-base');var inherits=require('inherits');var GHASH=require('./ghash');var xor=require('buffer-xor');inherits(StreamCipher,Transform);module.exports=StreamCipher;function StreamCipher(mode,key,iv,decrypt){if(!(this instanceof StreamCipher)){return new StreamCipher(mode,key,iv);}Transform.call(this);this._finID=Buffer.concat([iv,new Buffer([0,0,0,1])]);iv=Buffer.concat([iv,new Buffer([0,0,0,2])]);this._cipher=new aes.AES(key);this._prev=new Buffer(iv.length);this._cache=new Buffer('');this._secCache=new Buffer('');this._decrypt=decrypt;this._alen=0;this._len=0;iv.copy(this._prev);this._mode=mode;var h=new Buffer(4);h.fill(0);this._ghash=new GHASH(this._cipher.encryptBlock(h));this._authTag=null;this._called=false;}StreamCipher.prototype._update=function(chunk){if(!this._called&&this._alen){var rump=16-this._alen%16;if(rump<16){rump=new Buffer(rump);rump.fill(0);this._ghash.update(rump);}}this._called=true;var out=this._mode.encrypt(this,chunk);if(this._decrypt){this._ghash.update(chunk);}else{this._ghash.update(out);}this._len+=chunk.length;return out;};StreamCipher.prototype._final=function(){if(this._decrypt&&!this._authTag){throw new Error('Unsupported state or unable to authenticate data');}var tag=xor(this._ghash.final(this._alen*8,this._len*8),this._cipher.encryptBlock(this._finID));if(this._decrypt){if(xorTest(tag,this._authTag)){throw new Error('Unsupported state or unable to authenticate data');}}else{this._authTag=tag;}this._cipher.scrub();};StreamCipher.prototype.getAuthTag=function getAuthTag(){if(!this._decrypt&&Buffer.isBuffer(this._authTag)){return this._authTag;}else{throw new Error('Attempting to get auth tag in unsupported state');}};StreamCipher.prototype.setAuthTag=function setAuthTag(tag){if(this._decrypt){this._authTag=tag;}else{throw new Error('Attempting to set auth tag in unsupported state');}};StreamCipher.prototype.setAAD=function setAAD(buf){if(!this._called){this._ghash.update(buf);this._alen+=buf.length;}else{throw new Error('Attempting to set AAD in unsupported state');}};function xorTest(a,b){var out=0;if(a.length!==b.length){out++;}var len=Math.min(a.length,b.length);var i=-1;while(++i<len){out+=a[i]^b[i];}return out;}}).call(this,require("buffer").Buffer);},{"./aes":101,"./ghash":106,"buffer":95,"buffer-xor":115,"cipher-base":116,"inherits":292}],103:[function(require,module,exports){var ciphers=require('./encrypter');exports.createCipher=exports.Cipher=ciphers.createCipher;exports.createCipheriv=exports.Cipheriv=ciphers.createCipheriv;var deciphers=require('./decrypter');exports.createDecipher=exports.Decipher=deciphers.createDecipher;exports.createDecipheriv=exports.Decipheriv=deciphers.createDecipheriv;var modes=require('./modes');function getCiphers(){return Object.keys(modes);}exports.listCiphers=exports.getCiphers=getCiphers;},{"./decrypter":104,"./encrypter":105,"./modes":107}],104:[function(require,module,exports){(function(Buffer){var aes=require('./aes');var Transform=require('cipher-base');var inherits=require('inherits');var modes=require('./modes');var StreamCipher=require('./streamCipher');var AuthCipher=require('./authCipher');var ebtk=require('evp_bytestokey');inherits(Decipher,Transform);function Decipher(mode,key,iv){if(!(this instanceof Decipher)){return new Decipher(mode,key,iv);}Transform.call(this);this._cache=new Splitter();this._last=void 0;this._cipher=new aes.AES(key);this._prev=new Buffer(iv.length);iv.copy(this._prev);this._mode=mode;this._autopadding=true;}Decipher.prototype._update=function(data){this._cache.add(data);var chunk;var thing;var out=[];while(chunk=this._cache.get(this._autopadding)){thing=this._mode.decrypt(this,chunk);out.push(thing);}return Buffer.concat(out);};Decipher.prototype._final=function(){var chunk=this._cache.flush();if(this._autopadding){return unpad(this._mode.decrypt(this,chunk));}else if(chunk){throw new Error('data not multiple of block length');}};Decipher.prototype.setAutoPadding=function(setTo){this._autopadding=!!setTo;return this;};function Splitter(){if(!(this instanceof Splitter)){return new Splitter();}this.cache=new Buffer('');}Splitter.prototype.add=function(data){this.cache=Buffer.concat([this.cache,data]);};Splitter.prototype.get=function(autoPadding){var out;if(autoPadding){if(this.cache.length>16){out=this.cache.slice(0,16);this.cache=this.cache.slice(16);return out;}}else{if(this.cache.length>=16){out=this.cache.slice(0,16);this.cache=this.cache.slice(16);return out;}}return null;};Splitter.prototype.flush=function(){if(this.cache.length){return this.cache;}};function unpad(last){var padded=last[15];var i=-1;while(++i<padded){if(last[i+(16-padded)]!==padded){throw new Error('unable to decrypt data');}}if(padded===16){return;}return last.slice(0,16-padded);}var modelist={ECB:require('./modes/ecb'),CBC:require('./modes/cbc'),CFB:require('./modes/cfb'),CFB8:require('./modes/cfb8'),CFB1:require('./modes/cfb1'),OFB:require('./modes/ofb'),CTR:require('./modes/ctr'),GCM:require('./modes/ctr')};function createDecipheriv(suite,password,iv){var config=modes[suite.toLowerCase()];if(!config){throw new TypeError('invalid suite type');}if(typeof iv==='string'){iv=new Buffer(iv);}if(typeof password==='string'){password=new Buffer(password);}if(password.length!==config.key/8){throw new TypeError('invalid key length '+password.length);}if(iv.length!==config.iv){throw new TypeError('invalid iv length '+iv.length);}if(config.type==='stream'){return new StreamCipher(modelist[config.mode],password,iv,true);}else if(config.type==='auth'){return new AuthCipher(modelist[config.mode],password,iv,true);}return new Decipher(modelist[config.mode],password,iv);}function createDecipher(suite,password){var config=modes[suite.toLowerCase()];if(!config){throw new TypeError('invalid suite type');}var keys=ebtk(password,false,config.key,config.iv);return createDecipheriv(suite,keys.key,keys.iv);}exports.createDecipher=createDecipher;exports.createDecipheriv=createDecipheriv;}).call(this,require("buffer").Buffer);},{"./aes":101,"./authCipher":102,"./modes":107,"./modes/cbc":108,"./modes/cfb":109,"./modes/cfb1":110,"./modes/cfb8":111,"./modes/ctr":112,"./modes/ecb":113,"./modes/ofb":114,"./streamCipher":117,"buffer":95,"cipher-base":116,"evp_bytestokey":128,"inherits":292}],105:[function(require,module,exports){(function(Buffer){var aes=require('./aes');var Transform=require('cipher-base');var inherits=require('inherits');var modes=require('./modes');var ebtk=require('evp_bytestokey');var StreamCipher=require('./streamCipher');var AuthCipher=require('./authCipher');inherits(Cipher,Transform);function Cipher(mode,key,iv){if(!(this instanceof Cipher)){return new Cipher(mode,key,iv);}Transform.call(this);this._cache=new Splitter();this._cipher=new aes.AES(key);this._prev=new Buffer(iv.length);iv.copy(this._prev);this._mode=mode;this._autopadding=true;}Cipher.prototype._update=function(data){this._cache.add(data);var chunk;var thing;var out=[];while(chunk=this._cache.get()){thing=this._mode.encrypt(this,chunk);out.push(thing);}return Buffer.concat(out);};Cipher.prototype._final=function(){var chunk=this._cache.flush();if(this._autopadding){chunk=this._mode.encrypt(this,chunk);this._cipher.scrub();return chunk;}else if(chunk.toString('hex')!=='10101010101010101010101010101010'){this._cipher.scrub();throw new Error('data not multiple of block length');}};Cipher.prototype.setAutoPadding=function(setTo){this._autopadding=!!setTo;return this;};function Splitter(){if(!(this instanceof Splitter)){return new Splitter();}this.cache=new Buffer('');}Splitter.prototype.add=function(data){this.cache=Buffer.concat([this.cache,data]);};Splitter.prototype.get=function(){if(this.cache.length>15){var out=this.cache.slice(0,16);this.cache=this.cache.slice(16);return out;}return null;};Splitter.prototype.flush=function(){var len=16-this.cache.length;var padBuff=new Buffer(len);var i=-1;while(++i<len){padBuff.writeUInt8(len,i);}var out=Buffer.concat([this.cache,padBuff]);return out;};var modelist={ECB:require('./modes/ecb'),CBC:require('./modes/cbc'),CFB:require('./modes/cfb'),CFB8:require('./modes/cfb8'),CFB1:require('./modes/cfb1'),OFB:require('./modes/ofb'),CTR:require('./modes/ctr'),GCM:require('./modes/ctr')};function createCipheriv(suite,password,iv){var config=modes[suite.toLowerCase()];if(!config){throw new TypeError('invalid suite type');}if(typeof iv==='string'){iv=new Buffer(iv);}if(typeof password==='string'){password=new Buffer(password);}if(password.length!==config.key/8){throw new TypeError('invalid key length '+password.length);}if(iv.length!==config.iv){throw new TypeError('invalid iv length '+iv.length);}if(config.type==='stream'){return new StreamCipher(modelist[config.mode],password,iv);}else if(config.type==='auth'){return new AuthCipher(modelist[config.mode],password,iv);}return new Cipher(modelist[config.mode],password,iv);}function createCipher(suite,password){var config=modes[suite.toLowerCase()];if(!config){throw new TypeError('invalid suite type');}var keys=ebtk(password,false,config.key,config.iv);return createCipheriv(suite,keys.key,keys.iv);}exports.createCipheriv=createCipheriv;exports.createCipher=createCipher;}).call(this,require("buffer").Buffer);},{"./aes":101,"./authCipher":102,"./modes":107,"./modes/cbc":108,"./modes/cfb":109,"./modes/cfb1":110,"./modes/cfb8":111,"./modes/ctr":112,"./modes/ecb":113,"./modes/ofb":114,"./streamCipher":117,"buffer":95,"cipher-base":116,"evp_bytestokey":128,"inherits":292}],106:[function(require,module,exports){(function(Buffer){var zeros=new Buffer(16);zeros.fill(0);module.exports=GHASH;function GHASH(key){this.h=key;this.state=new Buffer(16);this.state.fill(0);this.cache=new Buffer('');}// from http://bitwiseshiftleft.github.io/sjcl/doc/symbols/src/core_gcm.js.html
// by Juho Vähä-Herttua
GHASH.prototype.ghash=function(block){var i=-1;while(++i<block.length){this.state[i]^=block[i];}this._multiply();};GHASH.prototype._multiply=function(){var Vi=toArray(this.h);var Zi=[0,0,0,0];var j,xi,lsb_Vi;var i=-1;while(++i<128){xi=(this.state[~~(i/8)]&1<<7-i%8)!==0;if(xi){// Z_i+1 = Z_i ^ V_i
Zi=xor(Zi,Vi);}// Store the value of LSB(V_i)
lsb_Vi=(Vi[3]&1)!==0;// V_i+1 = V_i >> 1
for(j=3;j>0;j--){Vi[j]=Vi[j]>>>1|(Vi[j-1]&1)<<31;}Vi[0]=Vi[0]>>>1;// If LSB(V_i) is 1, V_i+1 = (V_i >> 1) ^ R
if(lsb_Vi){Vi[0]=Vi[0]^0xe1<<24;}}this.state=fromArray(Zi);};GHASH.prototype.update=function(buf){this.cache=Buffer.concat([this.cache,buf]);var chunk;while(this.cache.length>=16){chunk=this.cache.slice(0,16);this.cache=this.cache.slice(16);this.ghash(chunk);}};GHASH.prototype.final=function(abl,bl){if(this.cache.length){this.ghash(Buffer.concat([this.cache,zeros],16));}this.ghash(fromArray([0,abl,0,bl]));return this.state;};function toArray(buf){return[buf.readUInt32BE(0),buf.readUInt32BE(4),buf.readUInt32BE(8),buf.readUInt32BE(12)];}function fromArray(out){out=out.map(fixup_uint32);var buf=new Buffer(16);buf.writeUInt32BE(out[0],0);buf.writeUInt32BE(out[1],4);buf.writeUInt32BE(out[2],8);buf.writeUInt32BE(out[3],12);return buf;}var uint_max=Math.pow(2,32);function fixup_uint32(x){var ret,x_pos;ret=x>uint_max||x<0?(x_pos=Math.abs(x)%uint_max,x<0?uint_max-x_pos:x_pos):x;return ret;}function xor(a,b){return[a[0]^b[0],a[1]^b[1],a[2]^b[2],a[3]^b[3]];}}).call(this,require("buffer").Buffer);},{"buffer":95}],107:[function(require,module,exports){exports['aes-128-ecb']={cipher:'AES',key:128,iv:0,mode:'ECB',type:'block'};exports['aes-192-ecb']={cipher:'AES',key:192,iv:0,mode:'ECB',type:'block'};exports['aes-256-ecb']={cipher:'AES',key:256,iv:0,mode:'ECB',type:'block'};exports['aes-128-cbc']={cipher:'AES',key:128,iv:16,mode:'CBC',type:'block'};exports['aes-192-cbc']={cipher:'AES',key:192,iv:16,mode:'CBC',type:'block'};exports['aes-256-cbc']={cipher:'AES',key:256,iv:16,mode:'CBC',type:'block'};exports['aes128']=exports['aes-128-cbc'];exports['aes192']=exports['aes-192-cbc'];exports['aes256']=exports['aes-256-cbc'];exports['aes-128-cfb']={cipher:'AES',key:128,iv:16,mode:'CFB',type:'stream'};exports['aes-192-cfb']={cipher:'AES',key:192,iv:16,mode:'CFB',type:'stream'};exports['aes-256-cfb']={cipher:'AES',key:256,iv:16,mode:'CFB',type:'stream'};exports['aes-128-cfb8']={cipher:'AES',key:128,iv:16,mode:'CFB8',type:'stream'};exports['aes-192-cfb8']={cipher:'AES',key:192,iv:16,mode:'CFB8',type:'stream'};exports['aes-256-cfb8']={cipher:'AES',key:256,iv:16,mode:'CFB8',type:'stream'};exports['aes-128-cfb1']={cipher:'AES',key:128,iv:16,mode:'CFB1',type:'stream'};exports['aes-192-cfb1']={cipher:'AES',key:192,iv:16,mode:'CFB1',type:'stream'};exports['aes-256-cfb1']={cipher:'AES',key:256,iv:16,mode:'CFB1',type:'stream'};exports['aes-128-ofb']={cipher:'AES',key:128,iv:16,mode:'OFB',type:'stream'};exports['aes-192-ofb']={cipher:'AES',key:192,iv:16,mode:'OFB',type:'stream'};exports['aes-256-ofb']={cipher:'AES',key:256,iv:16,mode:'OFB',type:'stream'};exports['aes-128-ctr']={cipher:'AES',key:128,iv:16,mode:'CTR',type:'stream'};exports['aes-192-ctr']={cipher:'AES',key:192,iv:16,mode:'CTR',type:'stream'};exports['aes-256-ctr']={cipher:'AES',key:256,iv:16,mode:'CTR',type:'stream'};exports['aes-128-gcm']={cipher:'AES',key:128,iv:12,mode:'GCM',type:'auth'};exports['aes-192-gcm']={cipher:'AES',key:192,iv:12,mode:'GCM',type:'auth'};exports['aes-256-gcm']={cipher:'AES',key:256,iv:12,mode:'GCM',type:'auth'};},{}],108:[function(require,module,exports){var xor=require('buffer-xor');exports.encrypt=function(self,block){var data=xor(block,self._prev);self._prev=self._cipher.encryptBlock(data);return self._prev;};exports.decrypt=function(self,block){var pad=self._prev;self._prev=block;var out=self._cipher.decryptBlock(block);return xor(out,pad);};},{"buffer-xor":115}],109:[function(require,module,exports){(function(Buffer){var xor=require('buffer-xor');exports.encrypt=function(self,data,decrypt){var out=new Buffer('');var len;while(data.length){if(self._cache.length===0){self._cache=self._cipher.encryptBlock(self._prev);self._prev=new Buffer('');}if(self._cache.length<=data.length){len=self._cache.length;out=Buffer.concat([out,encryptStart(self,data.slice(0,len),decrypt)]);data=data.slice(len);}else{out=Buffer.concat([out,encryptStart(self,data,decrypt)]);break;}}return out;};function encryptStart(self,data,decrypt){var len=data.length;var out=xor(data,self._cache);self._cache=self._cache.slice(len);self._prev=Buffer.concat([self._prev,decrypt?data:out]);return out;}}).call(this,require("buffer").Buffer);},{"buffer":95,"buffer-xor":115}],110:[function(require,module,exports){(function(Buffer){function encryptByte(self,byteParam,decrypt){var pad;var i=-1;var len=8;var out=0;var bit,value;while(++i<len){pad=self._cipher.encryptBlock(self._prev);bit=byteParam&1<<7-i?0x80:0;value=pad[0]^bit;out+=(value&0x80)>>i%8;self._prev=shiftIn(self._prev,decrypt?bit:value);}return out;}exports.encrypt=function(self,chunk,decrypt){var len=chunk.length;var out=new Buffer(len);var i=-1;while(++i<len){out[i]=encryptByte(self,chunk[i],decrypt);}return out;};function shiftIn(buffer,value){var len=buffer.length;var i=-1;var out=new Buffer(buffer.length);buffer=Buffer.concat([buffer,new Buffer([value])]);while(++i<len){out[i]=buffer[i]<<1|buffer[i+1]>>7;}return out;}}).call(this,require("buffer").Buffer);},{"buffer":95}],111:[function(require,module,exports){(function(Buffer){function encryptByte(self,byteParam,decrypt){var pad=self._cipher.encryptBlock(self._prev);var out=pad[0]^byteParam;self._prev=Buffer.concat([self._prev.slice(1),new Buffer([decrypt?byteParam:out])]);return out;}exports.encrypt=function(self,chunk,decrypt){var len=chunk.length;var out=new Buffer(len);var i=-1;while(++i<len){out[i]=encryptByte(self,chunk[i],decrypt);}return out;};}).call(this,require("buffer").Buffer);},{"buffer":95}],112:[function(require,module,exports){(function(Buffer){var xor=require('buffer-xor');function incr32(iv){var len=iv.length;var item;while(len--){item=iv.readUInt8(len);if(item===255){iv.writeUInt8(0,len);}else{item++;iv.writeUInt8(item,len);break;}}}function getBlock(self){var out=self._cipher.encryptBlock(self._prev);incr32(self._prev);return out;}exports.encrypt=function(self,chunk){while(self._cache.length<chunk.length){self._cache=Buffer.concat([self._cache,getBlock(self)]);}var pad=self._cache.slice(0,chunk.length);self._cache=self._cache.slice(chunk.length);return xor(chunk,pad);};}).call(this,require("buffer").Buffer);},{"buffer":95,"buffer-xor":115}],113:[function(require,module,exports){exports.encrypt=function(self,block){return self._cipher.encryptBlock(block);};exports.decrypt=function(self,block){return self._cipher.decryptBlock(block);};},{}],114:[function(require,module,exports){(function(Buffer){var xor=require('buffer-xor');function getBlock(self){self._prev=self._cipher.encryptBlock(self._prev);return self._prev;}exports.encrypt=function(self,chunk){while(self._cache.length<chunk.length){self._cache=Buffer.concat([self._cache,getBlock(self)]);}var pad=self._cache.slice(0,chunk.length);self._cache=self._cache.slice(chunk.length);return xor(chunk,pad);};}).call(this,require("buffer").Buffer);},{"buffer":95,"buffer-xor":115}],115:[function(require,module,exports){(function(Buffer){module.exports=function xor(a,b){var length=Math.min(a.length,b.length);var buffer=new Buffer(length);for(var i=0;i<length;++i){buffer[i]=a[i]^b[i];}return buffer;};}).call(this,require("buffer").Buffer);},{"buffer":95}],116:[function(require,module,exports){(function(Buffer){var Transform=require('stream').Transform;var inherits=require('inherits');var StringDecoder=require('string_decoder').StringDecoder;module.exports=CipherBase;inherits(CipherBase,Transform);function CipherBase(hashMode){Transform.call(this);this.hashMode=typeof hashMode==='string';if(this.hashMode){this[hashMode]=this._finalOrDigest;}else{this.final=this._finalOrDigest;}this._decoder=null;this._encoding=null;}CipherBase.prototype.update=function(data,inputEnc,outputEnc){if(typeof data==='string'){data=new Buffer(data,inputEnc);}var outData=this._update(data);if(this.hashMode){return this;}if(outputEnc){outData=this._toString(outData,outputEnc);}return outData;};CipherBase.prototype.setAutoPadding=function(){};CipherBase.prototype.getAuthTag=function(){throw new Error('trying to get auth tag in unsupported state');};CipherBase.prototype.setAuthTag=function(){throw new Error('trying to set auth tag in unsupported state');};CipherBase.prototype.setAAD=function(){throw new Error('trying to set aad in unsupported state');};CipherBase.prototype._transform=function(data,_,next){var err;try{if(this.hashMode){this._update(data);}else{this.push(this._update(data));}}catch(e){err=e;}finally{next(err);}};CipherBase.prototype._flush=function(done){var err;try{this.push(this._final());}catch(e){err=e;}finally{done(err);}};CipherBase.prototype._finalOrDigest=function(outputEnc){var outData=this._final()||new Buffer('');if(outputEnc){outData=this._toString(outData,outputEnc,true);}return outData;};CipherBase.prototype._toString=function(value,enc,final){if(!this._decoder){this._decoder=new StringDecoder(enc);this._encoding=enc;}if(this._encoding!==enc){throw new Error('can\'t switch encodings');}var out=this._decoder.write(value);if(final){out+=this._decoder.end();}return out;};}).call(this,require("buffer").Buffer);},{"buffer":95,"inherits":292,"stream":309,"string_decoder":310}],117:[function(require,module,exports){(function(Buffer){var aes=require('./aes');var Transform=require('cipher-base');var inherits=require('inherits');inherits(StreamCipher,Transform);module.exports=StreamCipher;function StreamCipher(mode,key,iv,decrypt){if(!(this instanceof StreamCipher)){return new StreamCipher(mode,key,iv);}Transform.call(this);this._cipher=new aes.AES(key);this._prev=new Buffer(iv.length);this._cache=new Buffer('');this._secCache=new Buffer('');this._decrypt=decrypt;iv.copy(this._prev);this._mode=mode;}StreamCipher.prototype._update=function(chunk){return this._mode.encrypt(this,chunk,this._decrypt);};StreamCipher.prototype._final=function(){this._cipher.scrub();};}).call(this,require("buffer").Buffer);},{"./aes":101,"buffer":95,"cipher-base":116,"inherits":292}],118:[function(require,module,exports){(function(Buffer){var CipherBase=require('cipher-base');var des=require('des.js');var inherits=require('inherits');var modes={'des-ede3-cbc':des.CBC.instantiate(des.EDE),'des-ede3':des.EDE,'des-ede-cbc':des.CBC.instantiate(des.EDE),'des-ede':des.EDE,'des-cbc':des.CBC.instantiate(des.DES),'des-ecb':des.DES};modes.des=modes['des-cbc'];modes.des3=modes['des-ede3-cbc'];module.exports=DES;inherits(DES,CipherBase);function DES(opts){CipherBase.call(this);var modeName=opts.mode.toLowerCase();var mode=modes[modeName];var type;if(opts.decrypt){type='decrypt';}else{type='encrypt';}var key=opts.key;if(modeName==='des-ede'||modeName==='des-ede-cbc'){key=Buffer.concat([key,key.slice(0,8)]);}var iv=opts.iv;this._des=mode.create({key:key,iv:iv,type:type});}DES.prototype._update=function(data){return new Buffer(this._des.update(data));};DES.prototype._final=function(){return new Buffer(this._des.final());};}).call(this,require("buffer").Buffer);},{"buffer":95,"cipher-base":120,"des.js":121,"inherits":292}],119:[function(require,module,exports){exports['des-ecb']={key:8,iv:0};exports['des-cbc']=exports.des={key:8,iv:8};exports['des-ede3-cbc']=exports.des3={key:24,iv:8};exports['des-ede3']={key:24,iv:0};exports['des-ede-cbc']={key:16,iv:8};exports['des-ede']={key:16,iv:0};},{}],120:[function(require,module,exports){arguments[4][116][0].apply(exports,arguments);},{"buffer":95,"dup":116,"inherits":292,"stream":309,"string_decoder":310}],121:[function(require,module,exports){'use strict';exports.utils=require('./des/utils');exports.Cipher=require('./des/cipher');exports.DES=require('./des/des');exports.CBC=require('./des/cbc');exports.EDE=require('./des/ede');},{"./des/cbc":122,"./des/cipher":123,"./des/des":124,"./des/ede":125,"./des/utils":126}],122:[function(require,module,exports){'use strict';var assert=require('minimalistic-assert');var inherits=require('inherits');var proto={};function CBCState(iv){assert.equal(iv.length,8,'Invalid IV length');this.iv=new Array(8);for(var i=0;i<this.iv.length;i++)this.iv[i]=iv[i];}function instantiate(Base){function CBC(options){Base.call(this,options);this._cbcInit();}inherits(CBC,Base);var keys=Object.keys(proto);for(var i=0;i<keys.length;i++){var key=keys[i];CBC.prototype[key]=proto[key];}CBC.create=function create(options){return new CBC(options);};return CBC;}exports.instantiate=instantiate;proto._cbcInit=function _cbcInit(){var state=new CBCState(this.options.iv);this._cbcState=state;};proto._update=function _update(inp,inOff,out,outOff){var state=this._cbcState;var superProto=this.constructor.super_.prototype;var iv=state.iv;if(this.type==='encrypt'){for(var i=0;i<this.blockSize;i++)iv[i]^=inp[inOff+i];superProto._update.call(this,iv,0,out,outOff);for(var i=0;i<this.blockSize;i++)iv[i]=out[outOff+i];}else{superProto._update.call(this,inp,inOff,out,outOff);for(var i=0;i<this.blockSize;i++)out[outOff+i]^=iv[i];for(var i=0;i<this.blockSize;i++)iv[i]=inp[inOff+i];}};},{"inherits":292,"minimalistic-assert":127}],123:[function(require,module,exports){'use strict';var assert=require('minimalistic-assert');function Cipher(options){this.options=options;this.type=this.options.type;this.blockSize=8;this._init();this.buffer=new Array(this.blockSize);this.bufferOff=0;}module.exports=Cipher;Cipher.prototype._init=function _init(){// Might be overrided
};Cipher.prototype.update=function update(data){if(data.length===0)return[];if(this.type==='decrypt')return this._updateDecrypt(data);else return this._updateEncrypt(data);};Cipher.prototype._buffer=function _buffer(data,off){// Append data to buffer
var min=Math.min(this.buffer.length-this.bufferOff,data.length-off);for(var i=0;i<min;i++)this.buffer[this.bufferOff+i]=data[off+i];this.bufferOff+=min;// Shift next
return min;};Cipher.prototype._flushBuffer=function _flushBuffer(out,off){this._update(this.buffer,0,out,off);this.bufferOff=0;return this.blockSize;};Cipher.prototype._updateEncrypt=function _updateEncrypt(data){var inputOff=0;var outputOff=0;var count=(this.bufferOff+data.length)/this.blockSize|0;var out=new Array(count*this.blockSize);if(this.bufferOff!==0){inputOff+=this._buffer(data,inputOff);if(this.bufferOff===this.buffer.length)outputOff+=this._flushBuffer(out,outputOff);}// Write blocks
var max=data.length-(data.length-inputOff)%this.blockSize;for(;inputOff<max;inputOff+=this.blockSize){this._update(data,inputOff,out,outputOff);outputOff+=this.blockSize;}// Queue rest
for(;inputOff<data.length;inputOff++,this.bufferOff++)this.buffer[this.bufferOff]=data[inputOff];return out;};Cipher.prototype._updateDecrypt=function _updateDecrypt(data){var inputOff=0;var outputOff=0;var count=Math.ceil((this.bufferOff+data.length)/this.blockSize)-1;var out=new Array(count*this.blockSize);// TODO(indutny): optimize it, this is far from optimal
for(;count>0;count--){inputOff+=this._buffer(data,inputOff);outputOff+=this._flushBuffer(out,outputOff);}// Buffer rest of the input
inputOff+=this._buffer(data,inputOff);return out;};Cipher.prototype.final=function final(buffer){var first;if(buffer)first=this.update(buffer);var last;if(this.type==='encrypt')last=this._finalEncrypt();else last=this._finalDecrypt();if(first)return first.concat(last);else return last;};Cipher.prototype._pad=function _pad(buffer,off){if(off===0)return false;while(off<buffer.length)buffer[off++]=0;return true;};Cipher.prototype._finalEncrypt=function _finalEncrypt(){if(!this._pad(this.buffer,this.bufferOff))return[];var out=new Array(this.blockSize);this._update(this.buffer,0,out,0);return out;};Cipher.prototype._unpad=function _unpad(buffer){return buffer;};Cipher.prototype._finalDecrypt=function _finalDecrypt(){assert.equal(this.bufferOff,this.blockSize,'Not enough data to decrypt');var out=new Array(this.blockSize);this._flushBuffer(out,0);return this._unpad(out);};},{"minimalistic-assert":127}],124:[function(require,module,exports){'use strict';var assert=require('minimalistic-assert');var inherits=require('inherits');var des=require('../des');var utils=des.utils;var Cipher=des.Cipher;function DESState(){this.tmp=new Array(2);this.keys=null;}function DES(options){Cipher.call(this,options);var state=new DESState();this._desState=state;this.deriveKeys(state,options.key);}inherits(DES,Cipher);module.exports=DES;DES.create=function create(options){return new DES(options);};var shiftTable=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1];DES.prototype.deriveKeys=function deriveKeys(state,key){state.keys=new Array(16*2);assert.equal(key.length,this.blockSize,'Invalid key length');var kL=utils.readUInt32BE(key,0);var kR=utils.readUInt32BE(key,4);utils.pc1(kL,kR,state.tmp,0);kL=state.tmp[0];kR=state.tmp[1];for(var i=0;i<state.keys.length;i+=2){var shift=shiftTable[i>>>1];kL=utils.r28shl(kL,shift);kR=utils.r28shl(kR,shift);utils.pc2(kL,kR,state.keys,i);}};DES.prototype._update=function _update(inp,inOff,out,outOff){var state=this._desState;var l=utils.readUInt32BE(inp,inOff);var r=utils.readUInt32BE(inp,inOff+4);// Initial Permutation
utils.ip(l,r,state.tmp,0);l=state.tmp[0];r=state.tmp[1];if(this.type==='encrypt')this._encrypt(state,l,r,state.tmp,0);else this._decrypt(state,l,r,state.tmp,0);l=state.tmp[0];r=state.tmp[1];utils.writeUInt32BE(out,l,outOff);utils.writeUInt32BE(out,r,outOff+4);};DES.prototype._pad=function _pad(buffer,off){var value=buffer.length-off;for(var i=off;i<buffer.length;i++)buffer[i]=value;return true;};DES.prototype._unpad=function _unpad(buffer){var pad=buffer[buffer.length-1];for(var i=buffer.length-pad;i<buffer.length;i++)assert.equal(buffer[i],pad);return buffer.slice(0,buffer.length-pad);};DES.prototype._encrypt=function _encrypt(state,lStart,rStart,out,off){var l=lStart;var r=rStart;// Apply f() x16 times
for(var i=0;i<state.keys.length;i+=2){var keyL=state.keys[i];var keyR=state.keys[i+1];// f(r, k)
utils.expand(r,state.tmp,0);keyL^=state.tmp[0];keyR^=state.tmp[1];var s=utils.substitute(keyL,keyR);var f=utils.permute(s);var t=r;r=(l^f)>>>0;l=t;}// Reverse Initial Permutation
utils.rip(r,l,out,off);};DES.prototype._decrypt=function _decrypt(state,lStart,rStart,out,off){var l=rStart;var r=lStart;// Apply f() x16 times
for(var i=state.keys.length-2;i>=0;i-=2){var keyL=state.keys[i];var keyR=state.keys[i+1];// f(r, k)
utils.expand(l,state.tmp,0);keyL^=state.tmp[0];keyR^=state.tmp[1];var s=utils.substitute(keyL,keyR);var f=utils.permute(s);var t=l;l=(r^f)>>>0;r=t;}// Reverse Initial Permutation
utils.rip(l,r,out,off);};},{"../des":121,"inherits":292,"minimalistic-assert":127}],125:[function(require,module,exports){'use strict';var assert=require('minimalistic-assert');var inherits=require('inherits');var des=require('../des');var Cipher=des.Cipher;var DES=des.DES;function EDEState(type,key){assert.equal(key.length,24,'Invalid key length');var k1=key.slice(0,8);var k2=key.slice(8,16);var k3=key.slice(16,24);if(type==='encrypt'){this.ciphers=[DES.create({type:'encrypt',key:k1}),DES.create({type:'decrypt',key:k2}),DES.create({type:'encrypt',key:k3})];}else{this.ciphers=[DES.create({type:'decrypt',key:k3}),DES.create({type:'encrypt',key:k2}),DES.create({type:'decrypt',key:k1})];}}function EDE(options){Cipher.call(this,options);var state=new EDEState(this.type,this.options.key);this._edeState=state;}inherits(EDE,Cipher);module.exports=EDE;EDE.create=function create(options){return new EDE(options);};EDE.prototype._update=function _update(inp,inOff,out,outOff){var state=this._edeState;state.ciphers[0]._update(inp,inOff,out,outOff);state.ciphers[1]._update(out,outOff,out,outOff);state.ciphers[2]._update(out,outOff,out,outOff);};EDE.prototype._pad=DES.prototype._pad;EDE.prototype._unpad=DES.prototype._unpad;},{"../des":121,"inherits":292,"minimalistic-assert":127}],126:[function(require,module,exports){'use strict';exports.readUInt32BE=function readUInt32BE(bytes,off){var res=bytes[0+off]<<24|bytes[1+off]<<16|bytes[2+off]<<8|bytes[3+off];return res>>>0;};exports.writeUInt32BE=function writeUInt32BE(bytes,value,off){bytes[0+off]=value>>>24;bytes[1+off]=value>>>16&0xff;bytes[2+off]=value>>>8&0xff;bytes[3+off]=value&0xff;};exports.ip=function ip(inL,inR,out,off){var outL=0;var outR=0;for(var i=6;i>=0;i-=2){for(var j=0;j<=24;j+=8){outL<<=1;outL|=inR>>>j+i&1;}for(var j=0;j<=24;j+=8){outL<<=1;outL|=inL>>>j+i&1;}}for(var i=6;i>=0;i-=2){for(var j=1;j<=25;j+=8){outR<<=1;outR|=inR>>>j+i&1;}for(var j=1;j<=25;j+=8){outR<<=1;outR|=inL>>>j+i&1;}}out[off+0]=outL>>>0;out[off+1]=outR>>>0;};exports.rip=function rip(inL,inR,out,off){var outL=0;var outR=0;for(var i=0;i<4;i++){for(var j=24;j>=0;j-=8){outL<<=1;outL|=inR>>>j+i&1;outL<<=1;outL|=inL>>>j+i&1;}}for(var i=4;i<8;i++){for(var j=24;j>=0;j-=8){outR<<=1;outR|=inR>>>j+i&1;outR<<=1;outR|=inL>>>j+i&1;}}out[off+0]=outL>>>0;out[off+1]=outR>>>0;};exports.pc1=function pc1(inL,inR,out,off){var outL=0;var outR=0;// 7, 15, 23, 31, 39, 47, 55, 63
// 6, 14, 22, 30, 39, 47, 55, 63
// 5, 13, 21, 29, 39, 47, 55, 63
// 4, 12, 20, 28
for(var i=7;i>=5;i--){for(var j=0;j<=24;j+=8){outL<<=1;outL|=inR>>j+i&1;}for(var j=0;j<=24;j+=8){outL<<=1;outL|=inL>>j+i&1;}}for(var j=0;j<=24;j+=8){outL<<=1;outL|=inR>>j+i&1;}// 1, 9, 17, 25, 33, 41, 49, 57
// 2, 10, 18, 26, 34, 42, 50, 58
// 3, 11, 19, 27, 35, 43, 51, 59
// 36, 44, 52, 60
for(var i=1;i<=3;i++){for(var j=0;j<=24;j+=8){outR<<=1;outR|=inR>>j+i&1;}for(var j=0;j<=24;j+=8){outR<<=1;outR|=inL>>j+i&1;}}for(var j=0;j<=24;j+=8){outR<<=1;outR|=inL>>j+i&1;}out[off+0]=outL>>>0;out[off+1]=outR>>>0;};exports.r28shl=function r28shl(num,shift){return num<<shift&0xfffffff|num>>>28-shift;};var pc2table=[// inL => outL
14,11,17,4,27,23,25,0,13,22,7,18,5,9,16,24,2,20,12,21,1,8,15,26,// inR => outR
15,4,25,19,9,1,26,16,5,11,23,8,12,7,17,0,22,3,10,14,6,20,27,24];exports.pc2=function pc2(inL,inR,out,off){var outL=0;var outR=0;var len=pc2table.length>>>1;for(var i=0;i<len;i++){outL<<=1;outL|=inL>>>pc2table[i]&0x1;}for(var i=len;i<pc2table.length;i++){outR<<=1;outR|=inR>>>pc2table[i]&0x1;}out[off+0]=outL>>>0;out[off+1]=outR>>>0;};exports.expand=function expand(r,out,off){var outL=0;var outR=0;outL=(r&1)<<5|r>>>27;for(var i=23;i>=15;i-=4){outL<<=6;outL|=r>>>i&0x3f;}for(var i=11;i>=3;i-=4){outR|=r>>>i&0x3f;outR<<=6;}outR|=(r&0x1f)<<1|r>>>31;out[off+0]=outL>>>0;out[off+1]=outR>>>0;};var sTable=[14,0,4,15,13,7,1,4,2,14,15,2,11,13,8,1,3,10,10,6,6,12,12,11,5,9,9,5,0,3,7,8,4,15,1,12,14,8,8,2,13,4,6,9,2,1,11,7,15,5,12,11,9,3,7,14,3,10,10,0,5,6,0,13,15,3,1,13,8,4,14,7,6,15,11,2,3,8,4,14,9,12,7,0,2,1,13,10,12,6,0,9,5,11,10,5,0,13,14,8,7,10,11,1,10,3,4,15,13,4,1,2,5,11,8,6,12,7,6,12,9,0,3,5,2,14,15,9,10,13,0,7,9,0,14,9,6,3,3,4,15,6,5,10,1,2,13,8,12,5,7,14,11,12,4,11,2,15,8,1,13,1,6,10,4,13,9,0,8,6,15,9,3,8,0,7,11,4,1,15,2,14,12,3,5,11,10,5,14,2,7,12,7,13,13,8,14,11,3,5,0,6,6,15,9,0,10,3,1,4,2,7,8,2,5,12,11,1,12,10,4,14,15,9,10,3,6,15,9,0,0,6,12,10,11,1,7,13,13,8,15,9,1,4,3,5,14,11,5,12,2,7,8,2,4,14,2,14,12,11,4,2,1,12,7,4,10,7,11,13,6,1,8,5,5,0,3,15,15,10,13,3,0,9,14,8,9,6,4,11,2,8,1,12,11,7,10,1,13,14,7,2,8,13,15,6,9,15,12,0,5,9,6,10,3,4,0,5,14,3,12,10,1,15,10,4,15,2,9,7,2,12,6,9,8,5,0,6,13,1,3,13,4,14,14,0,7,11,5,3,11,8,9,4,14,3,15,2,5,12,2,9,8,5,12,15,3,10,7,11,0,14,4,1,10,7,1,6,13,0,11,8,6,13,4,13,11,0,2,11,14,7,15,4,0,9,8,1,13,10,3,14,12,3,9,5,7,12,5,2,10,15,6,8,1,6,1,6,4,11,11,13,13,8,12,1,3,4,7,10,14,7,10,9,15,5,6,0,8,15,0,14,5,2,9,3,2,12,13,1,2,15,8,13,4,8,6,10,15,3,11,7,1,4,10,12,9,5,3,6,14,11,5,0,0,14,12,9,7,2,7,2,11,1,4,14,1,7,9,4,12,10,14,8,2,13,0,15,6,12,10,9,13,0,15,3,3,5,5,6,8,11];exports.substitute=function substitute(inL,inR){var out=0;for(var i=0;i<4;i++){var b=inL>>>18-i*6&0x3f;var sb=sTable[i*0x40+b];out<<=4;out|=sb;}for(var i=0;i<4;i++){var b=inR>>>18-i*6&0x3f;var sb=sTable[4*0x40+i*0x40+b];out<<=4;out|=sb;}return out>>>0;};var permuteTable=[16,25,12,11,3,20,4,15,31,17,9,6,27,14,1,22,30,24,8,18,0,5,29,23,13,19,2,26,10,21,28,7];exports.permute=function permute(num){var out=0;for(var i=0;i<permuteTable.length;i++){out<<=1;out|=num>>>permuteTable[i]&0x1;}return out>>>0;};exports.padSplit=function padSplit(num,size,group){var str=num.toString(2);while(str.length<size)str='0'+str;var out=[];for(var i=0;i<size;i+=group)out.push(str.slice(i,i+group));return out.join(' ');};},{}],127:[function(require,module,exports){module.exports=assert;function assert(val,msg){if(!val)throw new Error(msg||'Assertion failed');}assert.equal=function assertEqual(l,r,msg){if(l!=r)throw new Error(msg||'Assertion failed: '+l+' != '+r);};},{}],128:[function(require,module,exports){(function(Buffer){var md5=require('create-hash/md5');module.exports=EVP_BytesToKey;function EVP_BytesToKey(password,salt,keyLen,ivLen){if(!Buffer.isBuffer(password)){password=new Buffer(password,'binary');}if(salt&&!Buffer.isBuffer(salt)){salt=new Buffer(salt,'binary');}keyLen=keyLen/8;ivLen=ivLen||0;var ki=0;var ii=0;var key=new Buffer(keyLen);var iv=new Buffer(ivLen);var addmd=0;var md_buf;var i;var bufs=[];while(true){if(addmd++>0){bufs.push(md_buf);}bufs.push(password);if(salt){bufs.push(salt);}md_buf=md5(Buffer.concat(bufs));bufs=[];i=0;if(keyLen>0){while(true){if(keyLen===0){break;}if(i===md_buf.length){break;}key[ki++]=md_buf[i];keyLen--;i++;}}if(ivLen>0&&i!==md_buf.length){while(true){if(ivLen===0){break;}if(i===md_buf.length){break;}iv[ii++]=md_buf[i];ivLen--;i++;}}if(keyLen===0&&ivLen===0){break;}}for(i=0;i<md_buf.length;i++){md_buf[i]=0;}return{key:key,iv:iv};}}).call(this,require("buffer").Buffer);},{"buffer":95,"create-hash/md5":225}],129:[function(require,module,exports){(function(Buffer){'use strict';exports['RSA-SHA224']=exports.sha224WithRSAEncryption={sign:'rsa',hash:'sha224',id:new Buffer('302d300d06096086480165030402040500041c','hex')};exports['RSA-SHA256']=exports.sha256WithRSAEncryption={sign:'rsa',hash:'sha256',id:new Buffer('3031300d060960864801650304020105000420','hex')};exports['RSA-SHA384']=exports.sha384WithRSAEncryption={sign:'rsa',hash:'sha384',id:new Buffer('3041300d060960864801650304020205000430','hex')};exports['RSA-SHA512']=exports.sha512WithRSAEncryption={sign:'rsa',hash:'sha512',id:new Buffer('3051300d060960864801650304020305000440','hex')};exports['RSA-SHA1']={sign:'rsa',hash:'sha1',id:new Buffer('3021300906052b0e03021a05000414','hex')};exports['ecdsa-with-SHA1']={sign:'ecdsa',hash:'sha1',id:new Buffer('','hex')};exports.DSA=exports['DSA-SHA1']=exports['DSA-SHA']={sign:'dsa',hash:'sha1',id:new Buffer('','hex')};exports['DSA-SHA224']=exports['DSA-WITH-SHA224']={sign:'dsa',hash:'sha224',id:new Buffer('','hex')};exports['DSA-SHA256']=exports['DSA-WITH-SHA256']={sign:'dsa',hash:'sha256',id:new Buffer('','hex')};exports['DSA-SHA384']=exports['DSA-WITH-SHA384']={sign:'dsa',hash:'sha384',id:new Buffer('','hex')};exports['DSA-SHA512']=exports['DSA-WITH-SHA512']={sign:'dsa',hash:'sha512',id:new Buffer('','hex')};exports['DSA-RIPEMD160']={sign:'dsa',hash:'rmd160',id:new Buffer('','hex')};exports['RSA-RIPEMD160']=exports.ripemd160WithRSA={sign:'rsa',hash:'rmd160',id:new Buffer('3021300906052b2403020105000414','hex')};exports['RSA-MD5']=exports.md5WithRSAEncryption={sign:'rsa',hash:'md5',id:new Buffer('3020300c06082a864886f70d020505000410','hex')};}).call(this,require("buffer").Buffer);},{"buffer":95}],130:[function(require,module,exports){(function(Buffer){var _algos=require('./algos');var createHash=require('create-hash');var inherits=require('inherits');var sign=require('./sign');var stream=require('stream');var verify=require('./verify');var algos={};Object.keys(_algos).forEach(function(key){algos[key]=algos[key.toLowerCase()]=_algos[key];});function Sign(algorithm){stream.Writable.call(this);var data=algos[algorithm];if(!data){throw new Error('Unknown message digest');}this._hashType=data.hash;this._hash=createHash(data.hash);this._tag=data.id;this._signType=data.sign;}inherits(Sign,stream.Writable);Sign.prototype._write=function _write(data,_,done){this._hash.update(data);done();};Sign.prototype.update=function update(data,enc){if(typeof data==='string'){data=new Buffer(data,enc);}this._hash.update(data);return this;};Sign.prototype.sign=function signMethod(key,enc){this.end();var hash=this._hash.digest();var sig=sign(Buffer.concat([this._tag,hash]),key,this._hashType,this._signType);return enc?sig.toString(enc):sig;};function Verify(algorithm){stream.Writable.call(this);var data=algos[algorithm];if(!data){throw new Error('Unknown message digest');}this._hash=createHash(data.hash);this._tag=data.id;this._signType=data.sign;}inherits(Verify,stream.Writable);Verify.prototype._write=function _write(data,_,done){this._hash.update(data);done();};Verify.prototype.update=function update(data,enc){if(typeof data==='string'){data=new Buffer(data,enc);}this._hash.update(data);return this;};Verify.prototype.verify=function verifyMethod(key,sig,enc){if(typeof sig==='string'){sig=new Buffer(sig,enc);}this.end();var hash=this._hash.digest();return verify(sig,Buffer.concat([this._tag,hash]),key,this._signType);};function createSign(algorithm){return new Sign(algorithm);}function createVerify(algorithm){return new Verify(algorithm);}module.exports={Sign:createSign,Verify:createVerify,createSign:createSign,createVerify:createVerify};}).call(this,require("buffer").Buffer);},{"./algos":129,"./sign":195,"./verify":196,"buffer":95,"create-hash":223,"inherits":292,"stream":309}],131:[function(require,module,exports){'use strict';exports['1.3.132.0.10']='secp256k1';exports['1.3.132.0.33']='p224';exports['1.2.840.10045.3.1.1']='p192';exports['1.2.840.10045.3.1.7']='p256';exports['1.3.132.0.34']='p384';exports['1.3.132.0.35']='p521';},{}],132:[function(require,module,exports){(function(module,exports){'use strict';// Utils
function assert(val,msg){if(!val)throw new Error(msg||'Assertion failed');}// Could use `inherits` module, but don't want to move from single file
// architecture yet.
function inherits(ctor,superCtor){ctor.super_=superCtor;var TempCtor=function(){};TempCtor.prototype=superCtor.prototype;ctor.prototype=new TempCtor();ctor.prototype.constructor=ctor;}// BN
function BN(number,base,endian){// May be `new BN(bn)` ?
if(number!==null&&typeof number==='object'&&Array.isArray(number.words)){return number;}this.negative=0;this.words=null;this.length=0;// Reduction context
this.red=null;if(number!==null){if(base==='le'||base==='be'){endian=base;base=10;}this._init(number||0,base||10,endian||'be');}}if(typeof module==='object'){module.exports=BN;}else{exports.BN=BN;}BN.BN=BN;BN.wordSize=26;var Buffer;try{Buffer=require('buffer').Buffer;}catch(e){}BN.max=function max(left,right){if(left.cmp(right)>0)return left;return right;};BN.min=function min(left,right){if(left.cmp(right)<0)return left;return right;};BN.prototype._init=function init(number,base,endian){if(typeof number==='number'){return this._initNumber(number,base,endian);}if(typeof number==='object'){return this._initArray(number,base,endian);}if(base==='hex'){base=16;}assert(base===(base|0)&&base>=2&&base<=36);number=number.toString().replace(/\s+/g,'');var start=0;if(number[0]==='-'){start++;}if(base===16){this._parseHex(number,start);}else{this._parseBase(number,base,start);}if(number[0]==='-'){this.negative=1;}this.strip();if(endian!=='le')return;this._initArray(this.toArray(),base,endian);};BN.prototype._initNumber=function _initNumber(number,base,endian){if(number<0){this.negative=1;number=-number;}if(number<0x4000000){this.words=[number&0x3ffffff];this.length=1;}else if(number<0x10000000000000){this.words=[number&0x3ffffff,number/0x4000000&0x3ffffff];this.length=2;}else{assert(number<0x20000000000000);// 2 ^ 53 (unsafe)
this.words=[number&0x3ffffff,number/0x4000000&0x3ffffff,1];this.length=3;}if(endian!=='le')return;// Reverse the bytes
this._initArray(this.toArray(),base,endian);};BN.prototype._initArray=function _initArray(number,base,endian){// Perhaps a Uint8Array
assert(typeof number.length==='number');if(number.length<=0){this.words=[0];this.length=1;return this;}this.length=Math.ceil(number.length/3);this.words=new Array(this.length);for(var i=0;i<this.length;i++){this.words[i]=0;}var j,w;var off=0;if(endian==='be'){for(i=number.length-1,j=0;i>=0;i-=3){w=number[i]|number[i-1]<<8|number[i-2]<<16;this.words[j]|=w<<off&0x3ffffff;this.words[j+1]=w>>>26-off&0x3ffffff;off+=24;if(off>=26){off-=26;j++;}}}else if(endian==='le'){for(i=0,j=0;i<number.length;i+=3){w=number[i]|number[i+1]<<8|number[i+2]<<16;this.words[j]|=w<<off&0x3ffffff;this.words[j+1]=w>>>26-off&0x3ffffff;off+=24;if(off>=26){off-=26;j++;}}}return this.strip();};function parseHex(str,start,end){var r=0;var len=Math.min(str.length,end);for(var i=start;i<len;i++){var c=str.charCodeAt(i)-48;r<<=4;// 'a' - 'f'
if(c>=49&&c<=54){r|=c-49+0xa;// 'A' - 'F'
}else if(c>=17&&c<=22){r|=c-17+0xa;// '0' - '9'
}else{r|=c&0xf;}}return r;}BN.prototype._parseHex=function _parseHex(number,start){// Create possibly bigger array to ensure that it fits the number
this.length=Math.ceil((number.length-start)/6);this.words=new Array(this.length);for(var i=0;i<this.length;i++){this.words[i]=0;}var j,w;// Scan 24-bit chunks and add them to the number
var off=0;for(i=number.length-6,j=0;i>=start;i-=6){w=parseHex(number,i,i+6);this.words[j]|=w<<off&0x3ffffff;this.words[j+1]|=w>>>26-off&0x3fffff;off+=24;if(off>=26){off-=26;j++;}}if(i+6!==start){w=parseHex(number,start,i+6);this.words[j]|=w<<off&0x3ffffff;this.words[j+1]|=w>>>26-off&0x3fffff;}this.strip();};function parseBase(str,start,end,mul){var r=0;var len=Math.min(str.length,end);for(var i=start;i<len;i++){var c=str.charCodeAt(i)-48;r*=mul;// 'a'
if(c>=49){r+=c-49+0xa;// 'A'
}else if(c>=17){r+=c-17+0xa;// '0' - '9'
}else{r+=c;}}return r;}BN.prototype._parseBase=function _parseBase(number,base,start){// Initialize as zero
this.words=[0];this.length=1;// Find length of limb in base
for(var limbLen=0,limbPow=1;limbPow<=0x3ffffff;limbPow*=base){limbLen++;}limbLen--;limbPow=limbPow/base|0;var total=number.length-start;var mod=total%limbLen;var end=Math.min(total,total-mod)+start;var word=0;for(var i=start;i<end;i+=limbLen){word=parseBase(number,i,i+limbLen,base);this.imuln(limbPow);if(this.words[0]+word<0x4000000){this.words[0]+=word;}else{this._iaddn(word);}}if(mod!==0){var pow=1;word=parseBase(number,i,number.length,base);for(i=0;i<mod;i++){pow*=base;}this.imuln(pow);if(this.words[0]+word<0x4000000){this.words[0]+=word;}else{this._iaddn(word);}}};BN.prototype.copy=function copy(dest){dest.words=new Array(this.length);for(var i=0;i<this.length;i++){dest.words[i]=this.words[i];}dest.length=this.length;dest.negative=this.negative;dest.red=this.red;};BN.prototype.clone=function clone(){var r=new BN(null);this.copy(r);return r;};// Remove leading `0` from `this`
BN.prototype.strip=function strip(){while(this.length>1&&this.words[this.length-1]===0){this.length--;}return this._normSign();};BN.prototype._normSign=function _normSign(){// -0 = 0
if(this.length===1&&this.words[0]===0){this.negative=0;}return this;};BN.prototype.inspect=function inspect(){return(this.red?'<BN-R: ':'<BN: ')+this.toString(16)+'>';};/*

  var zeros = [];
  var groupSizes = [];
  var groupBases = [];

  var s = '';
  var i = -1;
  while (++i < BN.wordSize) {
    zeros[i] = s;
    s += '0';
  }
  groupSizes[0] = 0;
  groupSizes[1] = 0;
  groupBases[0] = 0;
  groupBases[1] = 0;
  var base = 2 - 1;
  while (++base < 36 + 1) {
    var groupSize = 0;
    var groupBase = 1;
    while (groupBase < (1 << BN.wordSize) / base) {
      groupBase *= base;
      groupSize += 1;
    }
    groupSizes[base] = groupSize;
    groupBases[base] = groupBase;
  }

  */var zeros=['','0','00','000','0000','00000','000000','0000000','00000000','000000000','0000000000','00000000000','000000000000','0000000000000','00000000000000','000000000000000','0000000000000000','00000000000000000','000000000000000000','0000000000000000000','00000000000000000000','000000000000000000000','0000000000000000000000','00000000000000000000000','000000000000000000000000','0000000000000000000000000'];var groupSizes=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5];var groupBases=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,10000000,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64000000,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,24300000,28629151,33554432,39135393,45435424,52521875,60466176];BN.prototype.toString=function toString(base,padding){base=base||10;padding=padding|0||1;var out;if(base===16||base==='hex'){out='';var off=0;var carry=0;for(var i=0;i<this.length;i++){var w=this.words[i];var word=((w<<off|carry)&0xffffff).toString(16);carry=w>>>24-off&0xffffff;if(carry!==0||i!==this.length-1){out=zeros[6-word.length]+word+out;}else{out=word+out;}off+=2;if(off>=26){off-=26;i--;}}if(carry!==0){out=carry.toString(16)+out;}while(out.length%padding!==0){out='0'+out;}if(this.negative!==0){out='-'+out;}return out;}if(base===(base|0)&&base>=2&&base<=36){// var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
var groupSize=groupSizes[base];// var groupBase = Math.pow(base, groupSize);
var groupBase=groupBases[base];out='';var c=this.clone();c.negative=0;while(!c.isZero()){var r=c.modn(groupBase).toString(base);c=c.idivn(groupBase);if(!c.isZero()){out=zeros[groupSize-r.length]+r+out;}else{out=r+out;}}if(this.isZero()){out='0'+out;}while(out.length%padding!==0){out='0'+out;}if(this.negative!==0){out='-'+out;}return out;}assert(false,'Base should be between 2 and 36');};BN.prototype.toNumber=function toNumber(){var length=this.bitLength();var ret;if(length<=26){ret=this.words[0];}else if(length<=52){ret=this.words[1]*0x4000000+this.words[0];}else if(length===53){// NOTE: at this stage it is known that the top bit is set
ret=0x10000000000000+this.words[1]*0x4000000+this.words[0];}else{assert(false,'Number can only safely store up to 53 bits');}return this.negative!==0?-ret:ret;};BN.prototype.toJSON=function toJSON(){return this.toString(16);};BN.prototype.toBuffer=function toBuffer(endian,length){assert(typeof Buffer!=='undefined');return new Buffer(this.toArray(endian,length));};BN.prototype.toArray=function toArray(endian,length){var byteLength=this.byteLength();var reqLength=length||Math.max(1,byteLength);assert(byteLength<=reqLength,'byte array longer than desired length');assert(reqLength>0,'Requested array length <= 0');this.strip();var littleEndian=endian==='le';var res=new Array(reqLength);var b,i;var q=this.clone();if(!littleEndian){// Assume big-endian
for(i=0;i<reqLength-byteLength;i++){res[i]=0;}for(i=0;!q.isZero();i++){b=q.andln(0xff);q.iushrn(8);res[reqLength-i-1]=b;}}else{for(i=0;!q.isZero();i++){b=q.andln(0xff);q.iushrn(8);res[i]=b;}for(;i<reqLength;i++){res[i]=0;}}return res;};if(Math.clz32){BN.prototype._countBits=function _countBits(w){return 32-Math.clz32(w);};}else{BN.prototype._countBits=function _countBits(w){var t=w;var r=0;if(t>=0x1000){r+=13;t>>>=13;}if(t>=0x40){r+=7;t>>>=7;}if(t>=0x8){r+=4;t>>>=4;}if(t>=0x02){r+=2;t>>>=2;}return r+t;};}BN.prototype._zeroBits=function _zeroBits(w){// Short-cut
if(w===0)return 26;var t=w;var r=0;if((t&0x1fff)===0){r+=13;t>>>=13;}if((t&0x7f)===0){r+=7;t>>>=7;}if((t&0xf)===0){r+=4;t>>>=4;}if((t&0x3)===0){r+=2;t>>>=2;}if((t&0x1)===0){r++;}return r;};// Return number of used bits in a BN
BN.prototype.bitLength=function bitLength(){var w=this.words[this.length-1];var hi=this._countBits(w);return(this.length-1)*26+hi;};function toBitArray(num){var w=new Array(num.bitLength());for(var bit=0;bit<w.length;bit++){var off=bit/26|0;var wbit=bit%26;w[bit]=(num.words[off]&1<<wbit)>>>wbit;}return w;}// Number of trailing zero bits
BN.prototype.zeroBits=function zeroBits(){if(this.isZero())return 0;var r=0;for(var i=0;i<this.length;i++){var b=this._zeroBits(this.words[i]);r+=b;if(b!==26)break;}return r;};BN.prototype.byteLength=function byteLength(){return Math.ceil(this.bitLength()/8);};BN.prototype.toTwos=function toTwos(width){if(this.negative!==0){return this.abs().inotn(width).iaddn(1);}return this.clone();};BN.prototype.fromTwos=function fromTwos(width){if(this.testn(width-1)){return this.notn(width).iaddn(1).ineg();}return this.clone();};BN.prototype.isNeg=function isNeg(){return this.negative!==0;};// Return negative clone of `this`
BN.prototype.neg=function neg(){return this.clone().ineg();};BN.prototype.ineg=function ineg(){if(!this.isZero()){this.negative^=1;}return this;};// Or `num` with `this` in-place
BN.prototype.iuor=function iuor(num){while(this.length<num.length){this.words[this.length++]=0;}for(var i=0;i<num.length;i++){this.words[i]=this.words[i]|num.words[i];}return this.strip();};BN.prototype.ior=function ior(num){assert((this.negative|num.negative)===0);return this.iuor(num);};// Or `num` with `this`
BN.prototype.or=function or(num){if(this.length>num.length)return this.clone().ior(num);return num.clone().ior(this);};BN.prototype.uor=function uor(num){if(this.length>num.length)return this.clone().iuor(num);return num.clone().iuor(this);};// And `num` with `this` in-place
BN.prototype.iuand=function iuand(num){// b = min-length(num, this)
var b;if(this.length>num.length){b=num;}else{b=this;}for(var i=0;i<b.length;i++){this.words[i]=this.words[i]&num.words[i];}this.length=b.length;return this.strip();};BN.prototype.iand=function iand(num){assert((this.negative|num.negative)===0);return this.iuand(num);};// And `num` with `this`
BN.prototype.and=function and(num){if(this.length>num.length)return this.clone().iand(num);return num.clone().iand(this);};BN.prototype.uand=function uand(num){if(this.length>num.length)return this.clone().iuand(num);return num.clone().iuand(this);};// Xor `num` with `this` in-place
BN.prototype.iuxor=function iuxor(num){// a.length > b.length
var a;var b;if(this.length>num.length){a=this;b=num;}else{a=num;b=this;}for(var i=0;i<b.length;i++){this.words[i]=a.words[i]^b.words[i];}if(this!==a){for(;i<a.length;i++){this.words[i]=a.words[i];}}this.length=a.length;return this.strip();};BN.prototype.ixor=function ixor(num){assert((this.negative|num.negative)===0);return this.iuxor(num);};// Xor `num` with `this`
BN.prototype.xor=function xor(num){if(this.length>num.length)return this.clone().ixor(num);return num.clone().ixor(this);};BN.prototype.uxor=function uxor(num){if(this.length>num.length)return this.clone().iuxor(num);return num.clone().iuxor(this);};// Not ``this`` with ``width`` bitwidth
BN.prototype.inotn=function inotn(width){assert(typeof width==='number'&&width>=0);var bytesNeeded=Math.ceil(width/26)|0;var bitsLeft=width%26;// Extend the buffer with leading zeroes
while(this.length<bytesNeeded){this.words[this.length++]=0;}if(bitsLeft>0){bytesNeeded--;}// Handle complete words
for(var i=0;i<bytesNeeded;i++){this.words[i]=~this.words[i]&0x3ffffff;}// Handle the residue
if(bitsLeft>0){this.words[i]=~this.words[i]&0x3ffffff>>26-bitsLeft;}// And remove leading zeroes
return this.strip();};BN.prototype.notn=function notn(width){return this.clone().inotn(width);};// Set `bit` of `this`
BN.prototype.setn=function setn(bit,val){assert(typeof bit==='number'&&bit>=0);var off=bit/26|0;var wbit=bit%26;while(this.length<=off){this.words[this.length++]=0;}if(val){this.words[off]=this.words[off]|1<<wbit;}else{this.words[off]=this.words[off]&~(1<<wbit);}return this.strip();};// Add `num` to `this` in-place
BN.prototype.iadd=function iadd(num){var r;// negative + positive
if(this.negative!==0&&num.negative===0){this.negative=0;r=this.isub(num);this.negative^=1;return this._normSign();// positive + negative
}else if(this.negative===0&&num.negative!==0){num.negative=0;r=this.isub(num);num.negative=1;return r._normSign();}// a.length > b.length
var a,b;if(this.length>num.length){a=this;b=num;}else{a=num;b=this;}var carry=0;for(var i=0;i<b.length;i++){r=(a.words[i]|0)+(b.words[i]|0)+carry;this.words[i]=r&0x3ffffff;carry=r>>>26;}for(;carry!==0&&i<a.length;i++){r=(a.words[i]|0)+carry;this.words[i]=r&0x3ffffff;carry=r>>>26;}this.length=a.length;if(carry!==0){this.words[this.length]=carry;this.length++;// Copy the rest of the words
}else if(a!==this){for(;i<a.length;i++){this.words[i]=a.words[i];}}return this;};// Add `num` to `this`
BN.prototype.add=function add(num){var res;if(num.negative!==0&&this.negative===0){num.negative=0;res=this.sub(num);num.negative^=1;return res;}else if(num.negative===0&&this.negative!==0){this.negative=0;res=num.sub(this);this.negative=1;return res;}if(this.length>num.length)return this.clone().iadd(num);return num.clone().iadd(this);};// Subtract `num` from `this` in-place
BN.prototype.isub=function isub(num){// this - (-num) = this + num
if(num.negative!==0){num.negative=0;var r=this.iadd(num);num.negative=1;return r._normSign();// -this - num = -(this + num)
}else if(this.negative!==0){this.negative=0;this.iadd(num);this.negative=1;return this._normSign();}// At this point both numbers are positive
var cmp=this.cmp(num);// Optimization - zeroify
if(cmp===0){this.negative=0;this.length=1;this.words[0]=0;return this;}// a > b
var a,b;if(cmp>0){a=this;b=num;}else{a=num;b=this;}var carry=0;for(var i=0;i<b.length;i++){r=(a.words[i]|0)-(b.words[i]|0)+carry;carry=r>>26;this.words[i]=r&0x3ffffff;}for(;carry!==0&&i<a.length;i++){r=(a.words[i]|0)+carry;carry=r>>26;this.words[i]=r&0x3ffffff;}// Copy rest of the words
if(carry===0&&i<a.length&&a!==this){for(;i<a.length;i++){this.words[i]=a.words[i];}}this.length=Math.max(this.length,i);if(a!==this){this.negative=1;}return this.strip();};// Subtract `num` from `this`
BN.prototype.sub=function sub(num){return this.clone().isub(num);};function smallMulTo(self,num,out){out.negative=num.negative^self.negative;var len=self.length+num.length|0;out.length=len;len=len-1|0;// Peel one iteration (compiler can't do it, because of code complexity)
var a=self.words[0]|0;var b=num.words[0]|0;var r=a*b;var lo=r&0x3ffffff;var carry=r/0x4000000|0;out.words[0]=lo;for(var k=1;k<len;k++){// Sum all words with the same `i + j = k` and accumulate `ncarry`,
// note that ncarry could be >= 0x3ffffff
var ncarry=carry>>>26;var rword=carry&0x3ffffff;var maxJ=Math.min(k,num.length-1);for(var j=Math.max(0,k-self.length+1);j<=maxJ;j++){var i=k-j|0;a=self.words[i]|0;b=num.words[j]|0;r=a*b+rword;ncarry+=r/0x4000000|0;rword=r&0x3ffffff;}out.words[k]=rword|0;carry=ncarry|0;}if(carry!==0){out.words[k]=carry|0;}else{out.length--;}return out.strip();}// TODO(indutny): it may be reasonable to omit it for users who don't need
// to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
// multiplication (like elliptic secp256k1).
var comb10MulTo=function comb10MulTo(self,num,out){var a=self.words;var b=num.words;var o=out.words;var c=0;var lo;var mid;var hi;var a0=a[0]|0;var al0=a0&0x1fff;var ah0=a0>>>13;var a1=a[1]|0;var al1=a1&0x1fff;var ah1=a1>>>13;var a2=a[2]|0;var al2=a2&0x1fff;var ah2=a2>>>13;var a3=a[3]|0;var al3=a3&0x1fff;var ah3=a3>>>13;var a4=a[4]|0;var al4=a4&0x1fff;var ah4=a4>>>13;var a5=a[5]|0;var al5=a5&0x1fff;var ah5=a5>>>13;var a6=a[6]|0;var al6=a6&0x1fff;var ah6=a6>>>13;var a7=a[7]|0;var al7=a7&0x1fff;var ah7=a7>>>13;var a8=a[8]|0;var al8=a8&0x1fff;var ah8=a8>>>13;var a9=a[9]|0;var al9=a9&0x1fff;var ah9=a9>>>13;var b0=b[0]|0;var bl0=b0&0x1fff;var bh0=b0>>>13;var b1=b[1]|0;var bl1=b1&0x1fff;var bh1=b1>>>13;var b2=b[2]|0;var bl2=b2&0x1fff;var bh2=b2>>>13;var b3=b[3]|0;var bl3=b3&0x1fff;var bh3=b3>>>13;var b4=b[4]|0;var bl4=b4&0x1fff;var bh4=b4>>>13;var b5=b[5]|0;var bl5=b5&0x1fff;var bh5=b5>>>13;var b6=b[6]|0;var bl6=b6&0x1fff;var bh6=b6>>>13;var b7=b[7]|0;var bl7=b7&0x1fff;var bh7=b7>>>13;var b8=b[8]|0;var bl8=b8&0x1fff;var bh8=b8>>>13;var b9=b[9]|0;var bl9=b9&0x1fff;var bh9=b9>>>13;out.negative=self.negative^num.negative;out.length=19;/* k = 0 */lo=Math.imul(al0,bl0);mid=Math.imul(al0,bh0);mid+=Math.imul(ah0,bl0);hi=Math.imul(ah0,bh0);var w0=c+lo+((mid&0x1fff)<<13);c=hi+(mid>>>13)+(w0>>>26);w0&=0x3ffffff;/* k = 1 */lo=Math.imul(al1,bl0);mid=Math.imul(al1,bh0);mid+=Math.imul(ah1,bl0);hi=Math.imul(ah1,bh0);lo+=Math.imul(al0,bl1);mid+=Math.imul(al0,bh1);mid+=Math.imul(ah0,bl1);hi+=Math.imul(ah0,bh1);var w1=c+lo+((mid&0x1fff)<<13);c=hi+(mid>>>13)+(w1>>>26);w1&=0x3ffffff;/* k = 2 */lo=Math.imul(al2,bl0);mid=Math.imul(al2,bh0);mid+=Math.imul(ah2,bl0);hi=Math.imul(ah2,bh0);lo+=Math.imul(al1,bl1);mid+=Math.imul(al1,bh1);mid+=Math.imul(ah1,bl1);hi+=Math.imul(ah1,bh1);lo+=Math.imul(al0,bl2);mid+=Math.imul(al0,bh2);mid+=Math.imul(ah0,bl2);hi+=Math.imul(ah0,bh2);var w2=c+lo+((mid&0x1fff)<<13);c=hi+(mid>>>13)+(w2>>>26);w2&=0x3ffffff;/* k = 3 */lo=Math.imul(al3,bl0);mid=Math.imul(al3,bh0);mid+=Math.imul(ah3,bl0);hi=Math.imul(ah3,bh0);lo+=Math.imul(al2,bl1);mid+=Math.imul(al2,bh1);mid+=Math.imul(ah2,bl1);hi+=Math.imul(ah2,bh1);lo+=Math.imul(al1,bl2);mid+=Math.imul(al1,bh2);mid+=Math.imul(ah1,bl2);hi+=Math.imul(ah1,bh2);lo+=Math.imul(al0,bl3);mid+=Math.imul(al0,bh3);mid+=Math.imul(ah0,bl3);hi+=Math.imul(ah0,bh3);var w3=c+lo+((mid&0x1fff)<<13);c=hi+(mid>>>13)+(w3>>>26);w3&=0x3ffffff;/* k = 4 */lo=Math.imul(al4,bl0);mid=Math.imul(al4,bh0);mid+=Math.imul(ah4,bl0);hi=Math.imul(ah4,bh0);lo+=Math.imul(al3,bl1);mid+=Math.imul(al3,bh1);mid+=Math.imul(ah3,bl1);hi+=Math.imul(ah3,bh1);lo+=Math.imul(al2,bl2);mid+=Math.imul(al2,bh2);mid+=Math.imul(ah2,bl2);hi+=Math.imul(ah2,bh2);lo+=Math.imul(al1,bl3);mid+=Math.imul(al1,bh3);mid+=Math.imul(ah1,bl3);hi+=Math.imul(ah1,bh3);lo+=Math.imul(al0,bl4);mid+=Math.imul(al0,bh4);mid+=Math.imul(ah0,bl4);hi+=Math.imul(ah0,bh4);var w4=c+lo+((mid&0x1fff)<<13);c=hi+(mid>>>13)+(w4>>>26);w4&=0x3ffffff;/* k = 5 */lo=Math.imul(al5,bl0);mid=Math.imul(al5,bh0);mid+=Math.imul(ah5,bl0);hi=Math.imul(ah5,bh0);lo+=Math.imul(al4,bl1);mid+=Math.imul(al4,bh1);mid+=Math.imul(ah4,bl1);hi+=Math.imul(ah4,bh1);lo+=Math.imul(al3,bl2);mid+=Math.imul(al3,bh2);mid+=Math.imul(ah3,bl2);hi+=Math.imul(ah3,bh2);lo+=Math.imul(al2,bl3);mid+=Math.imul(al2,bh3);mid+=Math.imul(ah2,bl3);hi+=Math.imul(ah2,bh3);lo+=Math.imul(al1,bl4);mid+=Math.imul(al1,bh4);mid+=Math.imul(ah1,bl4);hi+=Math.imul(ah1,bh4);lo+=Math.imul(al0,bl5);mid+=Math.imul(al0,bh5);mid+=Math.imul(ah0,bl5);hi+=Math.imul(ah0,bh5);var w5=c+lo+((mid&0x1fff)<<13);c=hi+(mid>>>13)+(w5>>>26);w5&=0x3ffffff;/* k = 6 */lo=Math.imul(al6,bl0);mid=Math.imul(al6,bh0);mid+=Math.imul(ah6,bl0);hi=Math.imul(ah6,bh0);lo+=Math.imul(al5,bl1);mid+=Math.imul(al5,bh1);mid+=Math.imul(ah5,bl1);hi+=Math.imul(ah5,bh1);lo+=Math.imul(al4,bl2);mid+=Math.imul(al4,bh2);mid+=Math.imul(ah4,bl2);hi+=Math.imul(ah4,bh2);lo+=Math.imul(al3,bl3);mid+=Math.imul(al3,bh3);mid+=Math.imul(ah3,bl3);hi+=Math.imul(ah3,bh3);lo+=Math.imul(al2,bl4);mid+=Math.imul(al2,bh4);mid+=Math.imul(ah2,bl4);hi+=Math.imul(ah2,bh4);lo+=Math.imul(al1,bl5);mid+=Math.imul(al1,bh5);mid+=Math.imul(ah1,bl5);hi+=Math.imul(ah1,bh5);lo+=Math.imul(al0,bl6);mid+=Math.imul(al0,bh6);mid+=Math.imul(ah0,bl6);hi+=Math.imul(ah0,bh6);var w6=c+lo+((mid&0x1fff)<<13);c=hi+(mid>>>13)+(w6>>>26);w6&=0x3ffffff;/* k = 7 */lo=Math.imul(al7,bl0);mid=Math.imul(al7,bh0);mid+=Math.imul(ah7,bl0);hi=Math.imul(ah7,bh0);lo+=Math.imul(al6,bl1);mid+=Math.imul(al6,bh1);mid+=Math.imul(ah6,bl1);hi+=Math.imul(ah6,bh1);lo+=Math.imul(al5,bl2);mid+=Math.imul(al5,bh2);mid+=Math.imul(ah5,bl2);hi+=Math.imul(ah5,bh2);lo+=Math.imul(al4,bl3);mid+=Math.imul(al4,bh3);mid+=Math.imul(ah4,bl3);hi+=Math.imul(ah4,bh3);lo+=Math.imul(al3,bl4);mid+=Math.imul(al3,bh4);mid+=Math.imul(ah3,bl4);hi+=Math.imul(ah3,bh4);lo+=Math.imul(al2,bl5);mid+=Math.imul(al2,bh5);mid+=Math.imul(ah2,bl5);hi+=Math.imul(ah2,bh5);lo+=Math.imul(al1,bl6);mid+=Math.imul(al1,bh6);mid+=Math.imul(ah1,bl6);hi+=Math.imul(ah1,bh6);lo+=Math.imul(al0,bl7);mid+=Math.imul(al0,bh7);mid+=Math.imul(ah0,bl7);hi+=Math.imul(ah0,bh7);var w7=c+lo+((mid&0x1fff)<<13);c=hi+(mid>>>13)+(w7>>>26);w7&=0x3ffffff;/* k = 8 */lo=Math.imul(al8,bl0);mid=Math.imul(al8,bh0);mid+=Math.imul(ah8,bl0);hi=Math.imul(ah8,bh0);lo+=Math.imul(al7,bl1);mid+=Math.imul(al7,bh1);mid+=Math.imul(ah7,bl1);hi+=Math.imul(ah7,bh1);lo+=Math.imul(al6,bl2);mid+=Math.imul(al6,bh2);mid+=Math.imul(ah6,bl2);hi+=Math.imul(ah6,bh2);lo+=Math.imul(al5,bl3);mid+=Math.imul(al5,bh3);mid+=Math.imul(ah5,bl3);hi+=Math.imul(ah5,bh3);lo+=Math.imul(al4,bl4);mid+=Math.imul(al4,bh4);mid+=Math.imul(ah4,bl4);hi+=Math.imul(ah4,bh4);lo+=Math.imul(al3,bl5);mid+=Math.imul(al3,bh5);mid+=Math.imul(ah3,bl5);hi+=Math.imul(ah3,bh5);lo+=Math.imul(al2,bl6);mid+=Math.imul(al2,bh6);mid+=Math.imul(ah2,bl6);hi+=Math.imul(ah2,bh6);lo+=Math.imul(al1,bl7);mid+=Math.imul(al1,bh7);mid+=Math.imul(ah1,bl7);hi+=Math.imul(ah1,bh7);lo+=Math.imul(al0,bl8);mid+=Math.imul(al0,bh8);mid+=Math.imul(ah0,bl8);hi+=Math.imul(ah0,bh8);var w8=c+lo+((mid&0x1fff)<<13);c=hi+(mid>>>13)+(w8>>>26);w8&=0x3ffffff;/* k = 9 */lo=Math.imul(al9,bl0);mid=Math.imul(al9,bh0);mid+=Math.imul(ah9,bl0);hi=Math.imul(ah9,bh0);lo+=Math.imul(al8,bl1);mid+=Math.imul(al8,bh1);mid+=Math.imul(ah8,bl1);hi+=Math.imul(ah8,bh1);lo+=Math.imul(al7,bl2);mid+=Math.imul(al7,bh2);mid+=Math.imul(ah7,bl2);hi+=Math.imul(ah7,bh2);lo+=Math.imul(al6,bl3);mid+=Math.imul(al6,bh3);mid+=Math.imul(ah6,bl3);hi+=Math.imul(ah6,bh3);lo+=Math.imul(al5,bl4);mid+=Math.imul(al5,bh4);mid+=Math.imul(ah5,bl4);hi+=Math.imul(ah5,bh4);lo+=Math.imul(al4,bl5);mid+=Math.imul(al4,bh5);mid+=Math.imul(ah4,bl5);hi+=Math.imul(ah4,bh5);lo+=Math.imul(al3,bl6);mid+=Math.imul(al3,bh6);mid+=Math.imul(ah3,bl6);hi+=Math.imul(ah3,bh6);lo+=Math.imul(al2,bl7);mid+=Math.imul(al2,bh7);mid+=Math.imul(ah2,bl7);hi+=Math.imul(ah2,bh7);lo+=Math.imul(al1,bl8);mid+=Math.imul(al1,bh8);mid+=Math.imul(ah1,bl8);hi+=Math.imul(ah1,bh8);lo+=Math.imul(al0,bl9);mid+=Math.imul(al0,bh9);mid+=Math.imul(ah0,bl9);hi+=Math.imul(ah0,bh9);var w9=c+lo+((mid&0x1fff)<<13);c=hi+(mid>>>13)+(w9>>>26);w9&=0x3ffffff;/* k = 10 */lo=Math.imul(al9,bl1);mid=Math.imul(al9,bh1);mid+=Math.imul(ah9,bl1);hi=Math.imul(ah9,bh1);lo+=Math.imul(al8,bl2);mid+=Math.imul(al8,bh2);mid+=Math.imul(ah8,bl2);hi+=Math.imul(ah8,bh2);lo+=Math.imul(al7,bl3);mid+=Math.imul(al7,bh3);mid+=Math.imul(ah7,bl3);hi+=Math.imul(ah7,bh3);lo+=Math.imul(al6,bl4);mid+=Math.imul(al6,bh4);mid+=Math.imul(ah6,bl4);hi+=Math.imul(ah6,bh4);lo+=Math.imul(al5,bl5);mid+=Math.imul(al5,bh5);mid+=Math.imul(ah5,bl5);hi+=Math.imul(ah5,bh5);lo+=Math.imul(al4,bl6);mid+=Math.imul(al4,bh6);mid+=Math.imul(ah4,bl6);hi+=Math.imul(ah4,bh6);lo+=Math.imul(al3,bl7);mid+=Math.imul(al3,bh7);mid+=Math.imul(ah3,bl7);hi+=Math.imul(ah3,bh7);lo+=Math.imul(al2,bl8);mid+=Math.imul(al2,bh8);mid+=Math.imul(ah2,bl8);hi+=Math.imul(ah2,bh8);lo+=Math.imul(al1,bl9);mid+=Math.imul(al1,bh9);mid+=Math.imul(ah1,bl9);hi+=Math.imul(ah1,bh9);var w10=c+lo+((mid&0x1fff)<<13);c=hi+(mid>>>13)+(w10>>>26);w10&=0x3ffffff;/* k = 11 */lo=Math.imul(al9,bl2);mid=Math.imul(al9,bh2);mid+=Math.imul(ah9,bl2);hi=Math.imul(ah9,bh2);lo+=Math.imul(al8,bl3);mid+=Math.imul(al8,bh3);mid+=Math.imul(ah8,bl3);hi+=Math.imul(ah8,bh3);lo+=Math.imul(al7,bl4);mid+=Math.imul(al7,bh4);mid+=Math.imul(ah7,bl4);hi+=Math.imul(ah7,bh4);lo+=Math.imul(al6,bl5);mid+=Math.imul(al6,bh5);mid+=Math.imul(ah6,bl5);hi+=Math.imul(ah6,bh5);lo+=Math.imul(al5,bl6);mid+=Math.imul(al5,bh6);mid+=Math.imul(ah5,bl6);hi+=Math.imul(ah5,bh6);lo+=Math.imul(al4,bl7);mid+=Math.imul(al4,bh7);mid+=Math.imul(ah4,bl7);hi+=Math.imul(ah4,bh7);lo+=Math.imul(al3,bl8);mid+=Math.imul(al3,bh8);mid+=Math.imul(ah3,bl8);hi+=Math.imul(ah3,bh8);lo+=Math.imul(al2,bl9);mid+=Math.imul(al2,bh9);mid+=Math.imul(ah2,bl9);hi+=Math.imul(ah2,bh9);var w11=c+lo+((mid&0x1fff)<<13);c=hi+(mid>>>13)+(w11>>>26);w11&=0x3ffffff;/* k = 12 */lo=Math.imul(al9,bl3);mid=Math.imul(al9,bh3);mid+=Math.imul(ah9,bl3);hi=Math.imul(ah9,bh3);lo+=Math.imul(al8,bl4);mid+=Math.imul(al8,bh4);mid+=Math.imul(ah8,bl4);hi+=Math.imul(ah8,bh4);lo+=Math.imul(al7,bl5);mid+=Math.imul(al7,bh5);mid+=Math.imul(ah7,bl5);hi+=Math.imul(ah7,bh5);lo+=Math.imul(al6,bl6);mid+=Math.imul(al6,bh6);mid+=Math.imul(ah6,bl6);hi+=Math.imul(ah6,bh6);lo+=Math.imul(al5,bl7);mid+=Math.imul(al5,bh7);mid+=Math.imul(ah5,bl7);hi+=Math.imul(ah5,bh7);lo+=Math.imul(al4,bl8);mid+=Math.imul(al4,bh8);mid+=Math.imul(ah4,bl8);hi+=Math.imul(ah4,bh8);lo+=Math.imul(al3,bl9);mid+=Math.imul(al3,bh9);mid+=Math.imul(ah3,bl9);hi+=Math.imul(ah3,bh9);var w12=c+lo+((mid&0x1fff)<<13);c=hi+(mid>>>13)+(w12>>>26);w12&=0x3ffffff;/* k = 13 */lo=Math.imul(al9,bl4);mid=Math.imul(al9,bh4);mid+=Math.imul(ah9,bl4);hi=Math.imul(ah9,bh4);lo+=Math.imul(al8,bl5);mid+=Math.imul(al8,bh5);mid+=Math.imul(ah8,bl5);hi+=Math.imul(ah8,bh5);lo+=Math.imul(al7,bl6);mid+=Math.imul(al7,bh6);mid+=Math.imul(ah7,bl6);hi+=Math.imul(ah7,bh6);lo+=Math.imul(al6,bl7);mid+=Math.imul(al6,bh7);mid+=Math.imul(ah6,bl7);hi+=Math.imul(ah6,bh7);lo+=Math.imul(al5,bl8);mid+=Math.imul(al5,bh8);mid+=Math.imul(ah5,bl8);hi+=Math.imul(ah5,bh8);lo+=Math.imul(al4,bl9);mid+=Math.imul(al4,bh9);mid+=Math.imul(ah4,bl9);hi+=Math.imul(ah4,bh9);var w13=c+lo+((mid&0x1fff)<<13);c=hi+(mid>>>13)+(w13>>>26);w13&=0x3ffffff;/* k = 14 */lo=Math.imul(al9,bl5);mid=Math.imul(al9,bh5);mid+=Math.imul(ah9,bl5);hi=Math.imul(ah9,bh5);lo+=Math.imul(al8,bl6);mid+=Math.imul(al8,bh6);mid+=Math.imul(ah8,bl6);hi+=Math.imul(ah8,bh6);lo+=Math.imul(al7,bl7);mid+=Math.imul(al7,bh7);mid+=Math.imul(ah7,bl7);hi+=Math.imul(ah7,bh7);lo+=Math.imul(al6,bl8);mid+=Math.imul(al6,bh8);mid+=Math.imul(ah6,bl8);hi+=Math.imul(ah6,bh8);lo+=Math.imul(al5,bl9);mid+=Math.imul(al5,bh9);mid+=Math.imul(ah5,bl9);hi+=Math.imul(ah5,bh9);var w14=c+lo+((mid&0x1fff)<<13);c=hi+(mid>>>13)+(w14>>>26);w14&=0x3ffffff;/* k = 15 */lo=Math.imul(al9,bl6);mid=Math.imul(al9,bh6);mid+=Math.imul(ah9,bl6);hi=Math.imul(ah9,bh6);lo+=Math.imul(al8,bl7);mid+=Math.imul(al8,bh7);mid+=Math.imul(ah8,bl7);hi+=Math.imul(ah8,bh7);lo+=Math.imul(al7,bl8);mid+=Math.imul(al7,bh8);mid+=Math.imul(ah7,bl8);hi+=Math.imul(ah7,bh8);lo+=Math.imul(al6,bl9);mid+=Math.imul(al6,bh9);mid+=Math.imul(ah6,bl9);hi+=Math.imul(ah6,bh9);var w15=c+lo+((mid&0x1fff)<<13);c=hi+(mid>>>13)+(w15>>>26);w15&=0x3ffffff;/* k = 16 */lo=Math.imul(al9,bl7);mid=Math.imul(al9,bh7);mid+=Math.imul(ah9,bl7);hi=Math.imul(ah9,bh7);lo+=Math.imul(al8,bl8);mid+=Math.imul(al8,bh8);mid+=Math.imul(ah8,bl8);hi+=Math.imul(ah8,bh8);lo+=Math.imul(al7,bl9);mid+=Math.imul(al7,bh9);mid+=Math.imul(ah7,bl9);hi+=Math.imul(ah7,bh9);var w16=c+lo+((mid&0x1fff)<<13);c=hi+(mid>>>13)+(w16>>>26);w16&=0x3ffffff;/* k = 17 */lo=Math.imul(al9,bl8);mid=Math.imul(al9,bh8);mid+=Math.imul(ah9,bl8);hi=Math.imul(ah9,bh8);lo+=Math.imul(al8,bl9);mid+=Math.imul(al8,bh9);mid+=Math.imul(ah8,bl9);hi+=Math.imul(ah8,bh9);var w17=c+lo+((mid&0x1fff)<<13);c=hi+(mid>>>13)+(w17>>>26);w17&=0x3ffffff;/* k = 18 */lo=Math.imul(al9,bl9);mid=Math.imul(al9,bh9);mid+=Math.imul(ah9,bl9);hi=Math.imul(ah9,bh9);var w18=c+lo+((mid&0x1fff)<<13);c=hi+(mid>>>13)+(w18>>>26);w18&=0x3ffffff;o[0]=w0;o[1]=w1;o[2]=w2;o[3]=w3;o[4]=w4;o[5]=w5;o[6]=w6;o[7]=w7;o[8]=w8;o[9]=w9;o[10]=w10;o[11]=w11;o[12]=w12;o[13]=w13;o[14]=w14;o[15]=w15;o[16]=w16;o[17]=w17;o[18]=w18;if(c!==0){o[19]=c;out.length++;}return out;};// Polyfill comb
if(!Math.imul){comb10MulTo=smallMulTo;}function bigMulTo(self,num,out){out.negative=num.negative^self.negative;out.length=self.length+num.length;var carry=0;var hncarry=0;for(var k=0;k<out.length-1;k++){// Sum all words with the same `i + j = k` and accumulate `ncarry`,
// note that ncarry could be >= 0x3ffffff
var ncarry=hncarry;hncarry=0;var rword=carry&0x3ffffff;var maxJ=Math.min(k,num.length-1);for(var j=Math.max(0,k-self.length+1);j<=maxJ;j++){var i=k-j;var a=self.words[i]|0;var b=num.words[j]|0;var r=a*b;var lo=r&0x3ffffff;ncarry=ncarry+(r/0x4000000|0)|0;lo=lo+rword|0;rword=lo&0x3ffffff;ncarry=ncarry+(lo>>>26)|0;hncarry+=ncarry>>>26;ncarry&=0x3ffffff;}out.words[k]=rword;carry=ncarry;ncarry=hncarry;}if(carry!==0){out.words[k]=carry;}else{out.length--;}return out.strip();}function jumboMulTo(self,num,out){var fftm=new FFTM();return fftm.mulp(self,num,out);}BN.prototype.mulTo=function mulTo(num,out){var res;var len=this.length+num.length;if(this.length===10&&num.length===10){res=comb10MulTo(this,num,out);}else if(len<63){res=smallMulTo(this,num,out);}else if(len<1024){res=bigMulTo(this,num,out);}else{res=jumboMulTo(this,num,out);}return res;};// Cooley-Tukey algorithm for FFT
// slightly revisited to rely on looping instead of recursion
function FFTM(x,y){this.x=x;this.y=y;}FFTM.prototype.makeRBT=function makeRBT(N){var t=new Array(N);var l=BN.prototype._countBits(N)-1;for(var i=0;i<N;i++){t[i]=this.revBin(i,l,N);}return t;};// Returns binary-reversed representation of `x`
FFTM.prototype.revBin=function revBin(x,l,N){if(x===0||x===N-1)return x;var rb=0;for(var i=0;i<l;i++){rb|=(x&1)<<l-i-1;x>>=1;}return rb;};// Performs "tweedling" phase, therefore 'emulating'
// behaviour of the recursive algorithm
FFTM.prototype.permute=function permute(rbt,rws,iws,rtws,itws,N){for(var i=0;i<N;i++){rtws[i]=rws[rbt[i]];itws[i]=iws[rbt[i]];}};FFTM.prototype.transform=function transform(rws,iws,rtws,itws,N,rbt){this.permute(rbt,rws,iws,rtws,itws,N);for(var s=1;s<N;s<<=1){var l=s<<1;var rtwdf=Math.cos(2*Math.PI/l);var itwdf=Math.sin(2*Math.PI/l);for(var p=0;p<N;p+=l){var rtwdf_=rtwdf;var itwdf_=itwdf;for(var j=0;j<s;j++){var re=rtws[p+j];var ie=itws[p+j];var ro=rtws[p+j+s];var io=itws[p+j+s];var rx=rtwdf_*ro-itwdf_*io;io=rtwdf_*io+itwdf_*ro;ro=rx;rtws[p+j]=re+ro;itws[p+j]=ie+io;rtws[p+j+s]=re-ro;itws[p+j+s]=ie-io;/* jshint maxdepth : false */if(j!==l){rx=rtwdf*rtwdf_-itwdf*itwdf_;itwdf_=rtwdf*itwdf_+itwdf*rtwdf_;rtwdf_=rx;}}}}};FFTM.prototype.guessLen13b=function guessLen13b(n,m){var N=Math.max(m,n)|1;var odd=N&1;var i=0;for(N=N/2|0;N;N=N>>>1){i++;}return 1<<i+1+odd;};FFTM.prototype.conjugate=function conjugate(rws,iws,N){if(N<=1)return;for(var i=0;i<N/2;i++){var t=rws[i];rws[i]=rws[N-i-1];rws[N-i-1]=t;t=iws[i];iws[i]=-iws[N-i-1];iws[N-i-1]=-t;}};FFTM.prototype.normalize13b=function normalize13b(ws,N){var carry=0;for(var i=0;i<N/2;i++){var w=Math.round(ws[2*i+1]/N)*0x2000+Math.round(ws[2*i]/N)+carry;ws[i]=w&0x3ffffff;if(w<0x4000000){carry=0;}else{carry=w/0x4000000|0;}}return ws;};FFTM.prototype.convert13b=function convert13b(ws,len,rws,N){var carry=0;for(var i=0;i<len;i++){carry=carry+(ws[i]|0);rws[2*i]=carry&0x1fff;carry=carry>>>13;rws[2*i+1]=carry&0x1fff;carry=carry>>>13;}// Pad with zeroes
for(i=2*len;i<N;++i){rws[i]=0;}assert(carry===0);assert((carry&~0x1fff)===0);};FFTM.prototype.stub=function stub(N){var ph=new Array(N);for(var i=0;i<N;i++){ph[i]=0;}return ph;};FFTM.prototype.mulp=function mulp(x,y,out){var N=2*this.guessLen13b(x.length,y.length);var rbt=this.makeRBT(N);var _=this.stub(N);var rws=new Array(N);var rwst=new Array(N);var iwst=new Array(N);var nrws=new Array(N);var nrwst=new Array(N);var niwst=new Array(N);var rmws=out.words;rmws.length=N;this.convert13b(x.words,x.length,rws,N);this.convert13b(y.words,y.length,nrws,N);this.transform(rws,_,rwst,iwst,N,rbt);this.transform(nrws,_,nrwst,niwst,N,rbt);for(var i=0;i<N;i++){var rx=rwst[i]*nrwst[i]-iwst[i]*niwst[i];iwst[i]=rwst[i]*niwst[i]+iwst[i]*nrwst[i];rwst[i]=rx;}this.conjugate(rwst,iwst,N);this.transform(rwst,iwst,rmws,_,N,rbt);this.conjugate(rmws,_,N);this.normalize13b(rmws,N);out.negative=x.negative^y.negative;out.length=x.length+y.length;return out.strip();};// Multiply `this` by `num`
BN.prototype.mul=function mul(num){var out=new BN(null);out.words=new Array(this.length+num.length);return this.mulTo(num,out);};// Multiply employing FFT
BN.prototype.mulf=function mulf(num){var out=new BN(null);out.words=new Array(this.length+num.length);return jumboMulTo(this,num,out);};// In-place Multiplication
BN.prototype.imul=function imul(num){return this.clone().mulTo(num,this);};BN.prototype.imuln=function imuln(num){assert(typeof num==='number');// Carry
var carry=0;for(var i=0;i<this.length;i++){var w=(this.words[i]|0)*num;var lo=(w&0x3ffffff)+(carry&0x3ffffff);carry>>=26;carry+=w/0x4000000|0;// NOTE: lo is 27bit maximum
carry+=lo>>>26;this.words[i]=lo&0x3ffffff;}if(carry!==0){this.words[i]=carry;this.length++;}return this;};BN.prototype.muln=function muln(num){return this.clone().imuln(num);};// `this` * `this`
BN.prototype.sqr=function sqr(){return this.mul(this);};// `this` * `this` in-place
BN.prototype.isqr=function isqr(){return this.imul(this.clone());};// Math.pow(`this`, `num`)
BN.prototype.pow=function pow(num){var w=toBitArray(num);if(w.length===0)return new BN(1);// Skip leading zeroes
var res=this;for(var i=0;i<w.length;i++,res=res.sqr()){if(w[i]!==0)break;}if(++i<w.length){for(var q=res.sqr();i<w.length;i++,q=q.sqr()){if(w[i]===0)continue;res=res.mul(q);}}return res;};// Shift-left in-place
BN.prototype.iushln=function iushln(bits){assert(typeof bits==='number'&&bits>=0);var r=bits%26;var s=(bits-r)/26;var carryMask=0x3ffffff>>>26-r<<26-r;var i;if(r!==0){var carry=0;for(i=0;i<this.length;i++){var newCarry=this.words[i]&carryMask;var c=(this.words[i]|0)-newCarry<<r;this.words[i]=c|carry;carry=newCarry>>>26-r;}if(carry){this.words[i]=carry;this.length++;}}if(s!==0){for(i=this.length-1;i>=0;i--){this.words[i+s]=this.words[i];}for(i=0;i<s;i++){this.words[i]=0;}this.length+=s;}return this.strip();};BN.prototype.ishln=function ishln(bits){// TODO(indutny): implement me
assert(this.negative===0);return this.iushln(bits);};// Shift-right in-place
// NOTE: `hint` is a lowest bit before trailing zeroes
// NOTE: if `extended` is present - it will be filled with destroyed bits
BN.prototype.iushrn=function iushrn(bits,hint,extended){assert(typeof bits==='number'&&bits>=0);var h;if(hint){h=(hint-hint%26)/26;}else{h=0;}var r=bits%26;var s=Math.min((bits-r)/26,this.length);var mask=0x3ffffff^0x3ffffff>>>r<<r;var maskedWords=extended;h-=s;h=Math.max(0,h);// Extended mode, copy masked part
if(maskedWords){for(var i=0;i<s;i++){maskedWords.words[i]=this.words[i];}maskedWords.length=s;}if(s===0){// No-op, we should not move anything at all
}else if(this.length>s){this.length-=s;for(i=0;i<this.length;i++){this.words[i]=this.words[i+s];}}else{this.words[0]=0;this.length=1;}var carry=0;for(i=this.length-1;i>=0&&(carry!==0||i>=h);i--){var word=this.words[i]|0;this.words[i]=carry<<26-r|word>>>r;carry=word&mask;}// Push carried bits as a mask
if(maskedWords&&carry!==0){maskedWords.words[maskedWords.length++]=carry;}if(this.length===0){this.words[0]=0;this.length=1;}return this.strip();};BN.prototype.ishrn=function ishrn(bits,hint,extended){// TODO(indutny): implement me
assert(this.negative===0);return this.iushrn(bits,hint,extended);};// Shift-left
BN.prototype.shln=function shln(bits){return this.clone().ishln(bits);};BN.prototype.ushln=function ushln(bits){return this.clone().iushln(bits);};// Shift-right
BN.prototype.shrn=function shrn(bits){return this.clone().ishrn(bits);};BN.prototype.ushrn=function ushrn(bits){return this.clone().iushrn(bits);};// Test if n bit is set
BN.prototype.testn=function testn(bit){assert(typeof bit==='number'&&bit>=0);var r=bit%26;var s=(bit-r)/26;var q=1<<r;// Fast case: bit is much higher than all existing words
if(this.length<=s)return false;// Check bit and return
var w=this.words[s];return!!(w&q);};// Return only lowers bits of number (in-place)
BN.prototype.imaskn=function imaskn(bits){assert(typeof bits==='number'&&bits>=0);var r=bits%26;var s=(bits-r)/26;assert(this.negative===0,'imaskn works only with positive numbers');if(r!==0){s++;}this.length=Math.min(s,this.length);if(r!==0){var mask=0x3ffffff^0x3ffffff>>>r<<r;this.words[this.length-1]&=mask;}return this.strip();};// Return only lowers bits of number
BN.prototype.maskn=function maskn(bits){return this.clone().imaskn(bits);};// Add plain number `num` to `this`
BN.prototype.iaddn=function iaddn(num){assert(typeof num==='number');if(num<0)return this.isubn(-num);// Possible sign change
if(this.negative!==0){if(this.length===1&&(this.words[0]|0)<num){this.words[0]=num-(this.words[0]|0);this.negative=0;return this;}this.negative=0;this.isubn(num);this.negative=1;return this;}// Add without checks
return this._iaddn(num);};BN.prototype._iaddn=function _iaddn(num){this.words[0]+=num;// Carry
for(var i=0;i<this.length&&this.words[i]>=0x4000000;i++){this.words[i]-=0x4000000;if(i===this.length-1){this.words[i+1]=1;}else{this.words[i+1]++;}}this.length=Math.max(this.length,i+1);return this;};// Subtract plain number `num` from `this`
BN.prototype.isubn=function isubn(num){assert(typeof num==='number');if(num<0)return this.iaddn(-num);if(this.negative!==0){this.negative=0;this.iaddn(num);this.negative=1;return this;}this.words[0]-=num;if(this.length===1&&this.words[0]<0){this.words[0]=-this.words[0];this.negative=1;}else{// Carry
for(var i=0;i<this.length&&this.words[i]<0;i++){this.words[i]+=0x4000000;this.words[i+1]-=1;}}return this.strip();};BN.prototype.addn=function addn(num){return this.clone().iaddn(num);};BN.prototype.subn=function subn(num){return this.clone().isubn(num);};BN.prototype.iabs=function iabs(){this.negative=0;return this;};BN.prototype.abs=function abs(){return this.clone().iabs();};BN.prototype._ishlnsubmul=function _ishlnsubmul(num,mul,shift){// Bigger storage is needed
var len=num.length+shift;var i;if(this.words.length<len){var t=new Array(len);for(i=0;i<this.length;i++){t[i]=this.words[i];}this.words=t;}else{i=this.length;}// Zeroify rest
this.length=Math.max(this.length,len);for(;i<this.length;i++){this.words[i]=0;}var w;var carry=0;for(i=0;i<num.length;i++){w=(this.words[i+shift]|0)+carry;var right=(num.words[i]|0)*mul;w-=right&0x3ffffff;carry=(w>>26)-(right/0x4000000|0);this.words[i+shift]=w&0x3ffffff;}for(;i<this.length-shift;i++){w=(this.words[i+shift]|0)+carry;carry=w>>26;this.words[i+shift]=w&0x3ffffff;}if(carry===0)return this.strip();// Subtraction overflow
assert(carry===-1);carry=0;for(i=0;i<this.length;i++){w=-(this.words[i]|0)+carry;carry=w>>26;this.words[i]=w&0x3ffffff;}this.negative=1;return this.strip();};BN.prototype._wordDiv=function _wordDiv(num,mode){var shift=this.length-num.length;var a=this.clone();var b=num;// Normalize
var bhi=b.words[b.length-1]|0;var bhiBits=this._countBits(bhi);shift=26-bhiBits;if(shift!==0){b=b.ushln(shift);a.iushln(shift);bhi=b.words[b.length-1]|0;}// Initialize quotient
var m=a.length-b.length;var q;if(mode!=='mod'){q=new BN(null);q.length=m+1;q.words=new Array(q.length);for(var i=0;i<q.length;i++){q.words[i]=0;}}var diff=a.clone()._ishlnsubmul(b,1,m);if(diff.negative===0){a=diff;if(q){q.words[m]=1;}}for(var j=m-1;j>=0;j--){var qj=(a.words[b.length+j]|0)*0x4000000+(a.words[b.length+j-1]|0);// NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
// (0x7ffffff)
qj=Math.min(qj/bhi|0,0x3ffffff);a._ishlnsubmul(b,qj,j);while(a.negative!==0){qj--;a.negative=0;a._ishlnsubmul(b,1,j);if(!a.isZero()){a.negative^=1;}}if(q){q.words[j]=qj;}}if(q){q.strip();}a.strip();// Denormalize
if(mode!=='div'&&shift!==0){a.iushrn(shift);}return{div:q||null,mod:a};};BN.prototype.divmod=function divmod(num,mode,positive){assert(!num.isZero());var div,mod,res;if(this.negative!==0&&num.negative===0){res=this.neg().divmod(num,mode);if(mode!=='mod'){div=res.div.neg();}if(mode!=='div'){mod=res.mod.neg();if(positive&&mod.negative!==0){mod.iadd(num);}}return{div:div,mod:mod};}if(this.negative===0&&num.negative!==0){res=this.divmod(num.neg(),mode);if(mode!=='mod'){div=res.div.neg();}return{div:div,mod:res.mod};}if((this.negative&num.negative)!==0){res=this.neg().divmod(num.neg(),mode);if(mode!=='div'){mod=res.mod.neg();if(positive&&mod.negative!==0){mod.isub(num);}}return{div:res.div,mod:mod};}// Both numbers are positive at this point
// Strip both numbers to approximate shift value
if(num.length>this.length||this.cmp(num)<0){return{div:new BN(0),mod:this};}// Very short reduction
if(num.length===1){if(mode==='div'){return{div:this.divn(num.words[0]),mod:null};}if(mode==='mod'){return{div:null,mod:new BN(this.modn(num.words[0]))};}return{div:this.divn(num.words[0]),mod:new BN(this.modn(num.words[0]))};}return this._wordDiv(num,mode);};// Find `this` / `num`
BN.prototype.div=function div(num){return this.divmod(num,'div',false).div;};// Find `this` % `num`
BN.prototype.mod=function mod(num){return this.divmod(num,'mod',false).mod;};BN.prototype.umod=function umod(num){return this.divmod(num,'mod',true).mod;};// Find Round(`this` / `num`)
BN.prototype.divRound=function divRound(num){var dm=this.divmod(num);// Fast case - exact division
if(dm.mod.isZero())return dm.div;var mod=dm.div.negative!==0?dm.mod.isub(num):dm.mod;var half=num.ushrn(1);var r2=num.andln(1);var cmp=mod.cmp(half);// Round down
if(cmp<0||r2===1&&cmp===0)return dm.div;// Round up
return dm.div.negative!==0?dm.div.isubn(1):dm.div.iaddn(1);};BN.prototype.modn=function modn(num){assert(num<=0x3ffffff);var p=(1<<26)%num;var acc=0;for(var i=this.length-1;i>=0;i--){acc=(p*acc+(this.words[i]|0))%num;}return acc;};// In-place division by number
BN.prototype.idivn=function idivn(num){assert(num<=0x3ffffff);var carry=0;for(var i=this.length-1;i>=0;i--){var w=(this.words[i]|0)+carry*0x4000000;this.words[i]=w/num|0;carry=w%num;}return this.strip();};BN.prototype.divn=function divn(num){return this.clone().idivn(num);};BN.prototype.egcd=function egcd(p){assert(p.negative===0);assert(!p.isZero());var x=this;var y=p.clone();if(x.negative!==0){x=x.umod(p);}else{x=x.clone();}// A * x + B * y = x
var A=new BN(1);var B=new BN(0);// C * x + D * y = y
var C=new BN(0);var D=new BN(1);var g=0;while(x.isEven()&&y.isEven()){x.iushrn(1);y.iushrn(1);++g;}var yp=y.clone();var xp=x.clone();while(!x.isZero()){for(var i=0,im=1;(x.words[0]&im)===0&&i<26;++i,im<<=1);if(i>0){x.iushrn(i);while(i-->0){if(A.isOdd()||B.isOdd()){A.iadd(yp);B.isub(xp);}A.iushrn(1);B.iushrn(1);}}for(var j=0,jm=1;(y.words[0]&jm)===0&&j<26;++j,jm<<=1);if(j>0){y.iushrn(j);while(j-->0){if(C.isOdd()||D.isOdd()){C.iadd(yp);D.isub(xp);}C.iushrn(1);D.iushrn(1);}}if(x.cmp(y)>=0){x.isub(y);A.isub(C);B.isub(D);}else{y.isub(x);C.isub(A);D.isub(B);}}return{a:C,b:D,gcd:y.iushln(g)};};// This is reduced incarnation of the binary EEA
// above, designated to invert members of the
// _prime_ fields F(p) at a maximal speed
BN.prototype._invmp=function _invmp(p){assert(p.negative===0);assert(!p.isZero());var a=this;var b=p.clone();if(a.negative!==0){a=a.umod(p);}else{a=a.clone();}var x1=new BN(1);var x2=new BN(0);var delta=b.clone();while(a.cmpn(1)>0&&b.cmpn(1)>0){for(var i=0,im=1;(a.words[0]&im)===0&&i<26;++i,im<<=1);if(i>0){a.iushrn(i);while(i-->0){if(x1.isOdd()){x1.iadd(delta);}x1.iushrn(1);}}for(var j=0,jm=1;(b.words[0]&jm)===0&&j<26;++j,jm<<=1);if(j>0){b.iushrn(j);while(j-->0){if(x2.isOdd()){x2.iadd(delta);}x2.iushrn(1);}}if(a.cmp(b)>=0){a.isub(b);x1.isub(x2);}else{b.isub(a);x2.isub(x1);}}var res;if(a.cmpn(1)===0){res=x1;}else{res=x2;}if(res.cmpn(0)<0){res.iadd(p);}return res;};BN.prototype.gcd=function gcd(num){if(this.isZero())return num.clone();if(num.isZero())return this.clone();var a=this.clone();var b=num.clone();a.negative=0;b.negative=0;// Remove common factor of two
for(var shift=0;a.isEven()&&b.isEven();shift++){a.iushrn(1);b.iushrn(1);}do{while(a.isEven()){a.iushrn(1);}while(b.isEven()){b.iushrn(1);}var r=a.cmp(b);if(r<0){// Swap `a` and `b` to make `a` always bigger than `b`
var t=a;a=b;b=t;}else if(r===0||b.cmpn(1)===0){break;}a.isub(b);}while(true);return b.iushln(shift);};// Invert number in the field F(num)
BN.prototype.invm=function invm(num){return this.egcd(num).a.umod(num);};BN.prototype.isEven=function isEven(){return(this.words[0]&1)===0;};BN.prototype.isOdd=function isOdd(){return(this.words[0]&1)===1;};// And first word and num
BN.prototype.andln=function andln(num){return this.words[0]&num;};// Increment at the bit position in-line
BN.prototype.bincn=function bincn(bit){assert(typeof bit==='number');var r=bit%26;var s=(bit-r)/26;var q=1<<r;// Fast case: bit is much higher than all existing words
if(this.length<=s){for(var i=this.length;i<s+1;i++){this.words[i]=0;}this.words[s]|=q;this.length=s+1;return this;}// Add bit and propagate, if needed
var carry=q;for(i=s;carry!==0&&i<this.length;i++){var w=this.words[i]|0;w+=carry;carry=w>>>26;w&=0x3ffffff;this.words[i]=w;}if(carry!==0){this.words[i]=carry;this.length++;}return this;};BN.prototype.isZero=function isZero(){return this.length===1&&this.words[0]===0;};BN.prototype.cmpn=function cmpn(num){var negative=num<0;if(this.negative!==0&&!negative)return-1;if(this.negative===0&&negative)return 1;this.strip();var res;if(this.length>1){res=1;}else{if(negative){num=-num;}assert(num<=0x3ffffff,'Number is too big');var w=this.words[0]|0;res=w===num?0:w<num?-1:1;}if(this.negative!==0){res=-res;}return res;};// Compare two numbers and return:
// 1 - if `this` > `num`
// 0 - if `this` == `num`
// -1 - if `this` < `num`
BN.prototype.cmp=function cmp(num){if(this.negative!==0&&num.negative===0)return-1;if(this.negative===0&&num.negative!==0)return 1;var res=this.ucmp(num);if(this.negative!==0)return-res;return res;};// Unsigned comparison
BN.prototype.ucmp=function ucmp(num){// At this point both numbers have the same sign
if(this.length>num.length)return 1;if(this.length<num.length)return-1;var res=0;for(var i=this.length-1;i>=0;i--){var a=this.words[i]|0;var b=num.words[i]|0;if(a===b)continue;if(a<b){res=-1;}else if(a>b){res=1;}break;}return res;};BN.prototype.gtn=function gtn(num){return this.cmpn(num)===1;};BN.prototype.gt=function gt(num){return this.cmp(num)===1;};BN.prototype.gten=function gten(num){return this.cmpn(num)>=0;};BN.prototype.gte=function gte(num){return this.cmp(num)>=0;};BN.prototype.ltn=function ltn(num){return this.cmpn(num)===-1;};BN.prototype.lt=function lt(num){return this.cmp(num)===-1;};BN.prototype.lten=function lten(num){return this.cmpn(num)<=0;};BN.prototype.lte=function lte(num){return this.cmp(num)<=0;};BN.prototype.eqn=function eqn(num){return this.cmpn(num)===0;};BN.prototype.eq=function eq(num){return this.cmp(num)===0;};//
// A reduce context, could be using montgomery or something better, depending
// on the `m` itself.
//
BN.red=function red(num){return new Red(num);};BN.prototype.toRed=function toRed(ctx){assert(!this.red,'Already a number in reduction context');assert(this.negative===0,'red works only with positives');return ctx.convertTo(this)._forceRed(ctx);};BN.prototype.fromRed=function fromRed(){assert(this.red,'fromRed works only with numbers in reduction context');return this.red.convertFrom(this);};BN.prototype._forceRed=function _forceRed(ctx){this.red=ctx;return this;};BN.prototype.forceRed=function forceRed(ctx){assert(!this.red,'Already a number in reduction context');return this._forceRed(ctx);};BN.prototype.redAdd=function redAdd(num){assert(this.red,'redAdd works only with red numbers');return this.red.add(this,num);};BN.prototype.redIAdd=function redIAdd(num){assert(this.red,'redIAdd works only with red numbers');return this.red.iadd(this,num);};BN.prototype.redSub=function redSub(num){assert(this.red,'redSub works only with red numbers');return this.red.sub(this,num);};BN.prototype.redISub=function redISub(num){assert(this.red,'redISub works only with red numbers');return this.red.isub(this,num);};BN.prototype.redShl=function redShl(num){assert(this.red,'redShl works only with red numbers');return this.red.ushl(this,num);};BN.prototype.redMul=function redMul(num){assert(this.red,'redMul works only with red numbers');this.red._verify2(this,num);return this.red.mul(this,num);};BN.prototype.redIMul=function redIMul(num){assert(this.red,'redMul works only with red numbers');this.red._verify2(this,num);return this.red.imul(this,num);};BN.prototype.redSqr=function redSqr(){assert(this.red,'redSqr works only with red numbers');this.red._verify1(this);return this.red.sqr(this);};BN.prototype.redISqr=function redISqr(){assert(this.red,'redISqr works only with red numbers');this.red._verify1(this);return this.red.isqr(this);};// Square root over p
BN.prototype.redSqrt=function redSqrt(){assert(this.red,'redSqrt works only with red numbers');this.red._verify1(this);return this.red.sqrt(this);};BN.prototype.redInvm=function redInvm(){assert(this.red,'redInvm works only with red numbers');this.red._verify1(this);return this.red.invm(this);};// Return negative clone of `this` % `red modulo`
BN.prototype.redNeg=function redNeg(){assert(this.red,'redNeg works only with red numbers');this.red._verify1(this);return this.red.neg(this);};BN.prototype.redPow=function redPow(num){assert(this.red&&!num.red,'redPow(normalNum)');this.red._verify1(this);return this.red.pow(this,num);};// Prime numbers with efficient reduction
var primes={k256:null,p224:null,p192:null,p25519:null};// Pseudo-Mersenne prime
function MPrime(name,p){// P = 2 ^ N - K
this.name=name;this.p=new BN(p,16);this.n=this.p.bitLength();this.k=new BN(1).iushln(this.n).isub(this.p);this.tmp=this._tmp();}MPrime.prototype._tmp=function _tmp(){var tmp=new BN(null);tmp.words=new Array(Math.ceil(this.n/13));return tmp;};MPrime.prototype.ireduce=function ireduce(num){// Assumes that `num` is less than `P^2`
// num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
var r=num;var rlen;do{this.split(r,this.tmp);r=this.imulK(r);r=r.iadd(this.tmp);rlen=r.bitLength();}while(rlen>this.n);var cmp=rlen<this.n?-1:r.ucmp(this.p);if(cmp===0){r.words[0]=0;r.length=1;}else if(cmp>0){r.isub(this.p);}else{r.strip();}return r;};MPrime.prototype.split=function split(input,out){input.iushrn(this.n,0,out);};MPrime.prototype.imulK=function imulK(num){return num.imul(this.k);};function K256(){MPrime.call(this,'k256','ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');}inherits(K256,MPrime);K256.prototype.split=function split(input,output){// 256 = 9 * 26 + 22
var mask=0x3fffff;var outLen=Math.min(input.length,9);for(var i=0;i<outLen;i++){output.words[i]=input.words[i];}output.length=outLen;if(input.length<=9){input.words[0]=0;input.length=1;return;}// Shift by 9 limbs
var prev=input.words[9];output.words[output.length++]=prev&mask;for(i=10;i<input.length;i++){var next=input.words[i]|0;input.words[i-10]=(next&mask)<<4|prev>>>22;prev=next;}input.words[i-10]=prev>>>22;input.length-=9;};K256.prototype.imulK=function imulK(num){// K = 0x1000003d1 = [ 0x40, 0x3d1 ]
num.words[num.length]=0;num.words[num.length+1]=0;num.length+=2;// bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390
var lo=0;for(var i=0;i<num.length;i++){var w=num.words[i]|0;lo+=w*0x3d1;num.words[i]=lo&0x3ffffff;lo=w*0x40+(lo/0x4000000|0);}// Fast length reduction
if(num.words[num.length-1]===0){num.length--;if(num.words[num.length-1]===0){num.length--;}}return num;};function P224(){MPrime.call(this,'p224','ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');}inherits(P224,MPrime);function P192(){MPrime.call(this,'p192','ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');}inherits(P192,MPrime);function P25519(){// 2 ^ 255 - 19
MPrime.call(this,'25519','7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');}inherits(P25519,MPrime);P25519.prototype.imulK=function imulK(num){// K = 0x13
var carry=0;for(var i=0;i<num.length;i++){var hi=(num.words[i]|0)*0x13+carry;var lo=hi&0x3ffffff;hi>>>=26;num.words[i]=lo;carry=hi;}if(carry!==0){num.words[num.length++]=carry;}return num;};// Exported mostly for testing purposes, use plain name instead
BN._prime=function prime(name){// Cached version of prime
if(primes[name])return primes[name];var prime;if(name==='k256'){prime=new K256();}else if(name==='p224'){prime=new P224();}else if(name==='p192'){prime=new P192();}else if(name==='p25519'){prime=new P25519();}else{throw new Error('Unknown prime '+name);}primes[name]=prime;return prime;};//
// Base reduction engine
//
function Red(m){if(typeof m==='string'){var prime=BN._prime(m);this.m=prime.p;this.prime=prime;}else{this.m=m;this.prime=null;}}Red.prototype._verify1=function _verify1(a){assert(a.negative===0,'red works only with positives');assert(a.red,'red works only with red numbers');};Red.prototype._verify2=function _verify2(a,b){assert((a.negative|b.negative)===0,'red works only with positives');assert(a.red&&a.red===b.red,'red works only with red numbers');};Red.prototype.imod=function imod(a){if(this.prime)return this.prime.ireduce(a)._forceRed(this);return a.umod(this.m)._forceRed(this);};Red.prototype.neg=function neg(a){if(a.isZero()){return a.clone();}return this.m.sub(a)._forceRed(this);};Red.prototype.add=function add(a,b){this._verify2(a,b);var res=a.add(b);if(res.cmp(this.m)>=0){res.isub(this.m);}return res._forceRed(this);};Red.prototype.iadd=function iadd(a,b){this._verify2(a,b);var res=a.iadd(b);if(res.cmp(this.m)>=0){res.isub(this.m);}return res;};Red.prototype.sub=function sub(a,b){this._verify2(a,b);var res=a.sub(b);if(res.cmpn(0)<0){res.iadd(this.m);}return res._forceRed(this);};Red.prototype.isub=function isub(a,b){this._verify2(a,b);var res=a.isub(b);if(res.cmpn(0)<0){res.iadd(this.m);}return res;};Red.prototype.shl=function shl(a,num){this._verify1(a);return this.imod(a.ushln(num));};Red.prototype.imul=function imul(a,b){this._verify2(a,b);return this.imod(a.imul(b));};Red.prototype.mul=function mul(a,b){this._verify2(a,b);return this.imod(a.mul(b));};Red.prototype.isqr=function isqr(a){return this.imul(a,a.clone());};Red.prototype.sqr=function sqr(a){return this.mul(a,a);};Red.prototype.sqrt=function sqrt(a){if(a.isZero())return a.clone();var mod3=this.m.andln(3);assert(mod3%2===1);// Fast case
if(mod3===3){var pow=this.m.add(new BN(1)).iushrn(2);return this.pow(a,pow);}// Tonelli-Shanks algorithm (Totally unoptimized and slow)
//
// Find Q and S, that Q * 2 ^ S = (P - 1)
var q=this.m.subn(1);var s=0;while(!q.isZero()&&q.andln(1)===0){s++;q.iushrn(1);}assert(!q.isZero());var one=new BN(1).toRed(this);var nOne=one.redNeg();// Find quadratic non-residue
// NOTE: Max is such because of generalized Riemann hypothesis.
var lpow=this.m.subn(1).iushrn(1);var z=this.m.bitLength();z=new BN(2*z*z).toRed(this);while(this.pow(z,lpow).cmp(nOne)!==0){z.redIAdd(nOne);}var c=this.pow(z,q);var r=this.pow(a,q.addn(1).iushrn(1));var t=this.pow(a,q);var m=s;while(t.cmp(one)!==0){var tmp=t;for(var i=0;tmp.cmp(one)!==0;i++){tmp=tmp.redSqr();}assert(i<m);var b=this.pow(c,new BN(1).iushln(m-i-1));r=r.redMul(b);c=b.redSqr();t=t.redMul(c);m=i;}return r;};Red.prototype.invm=function invm(a){var inv=a._invmp(this.m);if(inv.negative!==0){inv.negative=0;return this.imod(inv).redNeg();}else{return this.imod(inv);}};Red.prototype.pow=function pow(a,num){if(num.isZero())return new BN(1);if(num.cmpn(1)===0)return a.clone();var windowSize=4;var wnd=new Array(1<<windowSize);wnd[0]=new BN(1).toRed(this);wnd[1]=a;for(var i=2;i<wnd.length;i++){wnd[i]=this.mul(wnd[i-1],a);}var res=wnd[0];var current=0;var currentLen=0;var start=num.bitLength()%26;if(start===0){start=26;}for(i=num.length-1;i>=0;i--){var word=num.words[i];for(var j=start-1;j>=0;j--){var bit=word>>j&1;if(res!==wnd[0]){res=this.sqr(res);}if(bit===0&&current===0){currentLen=0;continue;}current<<=1;current|=bit;currentLen++;if(currentLen!==windowSize&&(i!==0||j!==0))continue;res=this.mul(res,wnd[current]);currentLen=0;current=0;}start=26;}return res;};Red.prototype.convertTo=function convertTo(num){var r=num.umod(this.m);return r===num?r.clone():r;};Red.prototype.convertFrom=function convertFrom(num){var res=num.clone();res.red=null;return res;};//
// Montgomery method engine
//
BN.mont=function mont(num){return new Mont(num);};function Mont(m){Red.call(this,m);this.shift=this.m.bitLength();if(this.shift%26!==0){this.shift+=26-this.shift%26;}this.r=new BN(1).iushln(this.shift);this.r2=this.imod(this.r.sqr());this.rinv=this.r._invmp(this.m);this.minv=this.rinv.mul(this.r).isubn(1).div(this.m);this.minv=this.minv.umod(this.r);this.minv=this.r.sub(this.minv);}inherits(Mont,Red);Mont.prototype.convertTo=function convertTo(num){return this.imod(num.ushln(this.shift));};Mont.prototype.convertFrom=function convertFrom(num){var r=this.imod(num.mul(this.rinv));r.red=null;return r;};Mont.prototype.imul=function imul(a,b){if(a.isZero()||b.isZero()){a.words[0]=0;a.length=1;return a;}var t=a.imul(b);var c=t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);var u=t.isub(c).iushrn(this.shift);var res=u;if(u.cmp(this.m)>=0){res=u.isub(this.m);}else if(u.cmpn(0)<0){res=u.iadd(this.m);}return res._forceRed(this);};Mont.prototype.mul=function mul(a,b){if(a.isZero()||b.isZero())return new BN(0)._forceRed(this);var t=a.mul(b);var c=t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);var u=t.isub(c).iushrn(this.shift);var res=u;if(u.cmp(this.m)>=0){res=u.isub(this.m);}else if(u.cmpn(0)<0){res=u.iadd(this.m);}return res._forceRed(this);};Mont.prototype.invm=function invm(a){// (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
var res=this.imod(a._invmp(this.m).mul(this.r2));return res._forceRed(this);};})(typeof module==='undefined'||module,this);},{"buffer":94}],133:[function(require,module,exports){(function(Buffer){var bn=require('bn.js');var randomBytes=require('randombytes');module.exports=crt;function blind(priv){var r=getr(priv);var blinder=r.toRed(bn.mont(priv.modulus)).redPow(new bn(priv.publicExponent)).fromRed();return{blinder:blinder,unblinder:r.invm(priv.modulus)};}function crt(msg,priv){var blinds=blind(priv);var len=priv.modulus.byteLength();var mod=bn.mont(priv.modulus);var blinded=new bn(msg).mul(blinds.blinder).umod(priv.modulus);var c1=blinded.toRed(bn.mont(priv.prime1));var c2=blinded.toRed(bn.mont(priv.prime2));var qinv=priv.coefficient;var p=priv.prime1;var q=priv.prime2;var m1=c1.redPow(priv.exponent1);var m2=c2.redPow(priv.exponent2);m1=m1.fromRed();m2=m2.fromRed();var h=m1.isub(m2).imul(qinv).umod(p);h.imul(q);m2.iadd(h);return new Buffer(m2.imul(blinds.unblinder).umod(priv.modulus).toArray(false,len));}crt.getr=getr;function getr(priv){var len=priv.modulus.byteLength();var r=new bn(randomBytes(len));while(r.cmp(priv.modulus)>=0||!r.umod(priv.prime1)||!r.umod(priv.prime2)){r=new bn(randomBytes(len));}return r;}}).call(this,require("buffer").Buffer);},{"bn.js":132,"buffer":95,"randombytes":290}],134:[function(require,module,exports){'use strict';var elliptic=exports;elliptic.version=require('../package.json').version;elliptic.utils=require('./elliptic/utils');elliptic.rand=require('brorand');elliptic.hmacDRBG=require('./elliptic/hmac-drbg');elliptic.curve=require('./elliptic/curve');elliptic.curves=require('./elliptic/curves');// Protocols
elliptic.ec=require('./elliptic/ec');elliptic.eddsa=require('./elliptic/eddsa');},{"../package.json":157,"./elliptic/curve":137,"./elliptic/curves":140,"./elliptic/ec":141,"./elliptic/eddsa":144,"./elliptic/hmac-drbg":147,"./elliptic/utils":149,"brorand":150}],135:[function(require,module,exports){'use strict';var BN=require('bn.js');var elliptic=require('../../elliptic');var utils=elliptic.utils;var getNAF=utils.getNAF;var getJSF=utils.getJSF;var assert=utils.assert;function BaseCurve(type,conf){this.type=type;this.p=new BN(conf.p,16);// Use Montgomery, when there is no fast reduction for the prime
this.red=conf.prime?BN.red(conf.prime):BN.mont(this.p);// Useful for many curves
this.zero=new BN(0).toRed(this.red);this.one=new BN(1).toRed(this.red);this.two=new BN(2).toRed(this.red);// Curve configuration, optional
this.n=conf.n&&new BN(conf.n,16);this.g=conf.g&&this.pointFromJSON(conf.g,conf.gRed);// Temporary arrays
this._wnafT1=new Array(4);this._wnafT2=new Array(4);this._wnafT3=new Array(4);this._wnafT4=new Array(4);}module.exports=BaseCurve;BaseCurve.prototype.point=function point(){throw new Error('Not implemented');};BaseCurve.prototype.validate=function validate(){throw new Error('Not implemented');};BaseCurve.prototype._fixedNafMul=function _fixedNafMul(p,k){assert(p.precomputed);var doubles=p._getDoubles();var naf=getNAF(k,1);var I=(1<<doubles.step+1)-(doubles.step%2===0?2:1);I/=3;// Translate into more windowed form
var repr=[];for(var j=0;j<naf.length;j+=doubles.step){var nafW=0;for(var k=j+doubles.step-1;k>=j;k--)nafW=(nafW<<1)+naf[k];repr.push(nafW);}var a=this.jpoint(null,null,null);var b=this.jpoint(null,null,null);for(var i=I;i>0;i--){for(var j=0;j<repr.length;j++){var nafW=repr[j];if(nafW===i)b=b.mixedAdd(doubles.points[j]);else if(nafW===-i)b=b.mixedAdd(doubles.points[j].neg());}a=a.add(b);}return a.toP();};BaseCurve.prototype._wnafMul=function _wnafMul(p,k){var w=4;// Precompute window
var nafPoints=p._getNAFPoints(w);w=nafPoints.wnd;var wnd=nafPoints.points;// Get NAF form
var naf=getNAF(k,w);// Add `this`*(N+1) for every w-NAF index
var acc=this.jpoint(null,null,null);for(var i=naf.length-1;i>=0;i--){// Count zeroes
for(var k=0;i>=0&&naf[i]===0;i--)k++;if(i>=0)k++;acc=acc.dblp(k);if(i<0)break;var z=naf[i];assert(z!==0);if(p.type==='affine'){// J +- P
if(z>0)acc=acc.mixedAdd(wnd[z-1>>1]);else acc=acc.mixedAdd(wnd[-z-1>>1].neg());}else{// J +- J
if(z>0)acc=acc.add(wnd[z-1>>1]);else acc=acc.add(wnd[-z-1>>1].neg());}}return p.type==='affine'?acc.toP():acc;};BaseCurve.prototype._wnafMulAdd=function _wnafMulAdd(defW,points,coeffs,len){var wndWidth=this._wnafT1;var wnd=this._wnafT2;var naf=this._wnafT3;// Fill all arrays
var max=0;for(var i=0;i<len;i++){var p=points[i];var nafPoints=p._getNAFPoints(defW);wndWidth[i]=nafPoints.wnd;wnd[i]=nafPoints.points;}// Comb small window NAFs
for(var i=len-1;i>=1;i-=2){var a=i-1;var b=i;if(wndWidth[a]!==1||wndWidth[b]!==1){naf[a]=getNAF(coeffs[a],wndWidth[a]);naf[b]=getNAF(coeffs[b],wndWidth[b]);max=Math.max(naf[a].length,max);max=Math.max(naf[b].length,max);continue;}var comb=[points[a],/* 1 */null,/* 3 */null,/* 5 */points[b]/* 7 */];// Try to avoid Projective points, if possible
if(points[a].y.cmp(points[b].y)===0){comb[1]=points[a].add(points[b]);comb[2]=points[a].toJ().mixedAdd(points[b].neg());}else if(points[a].y.cmp(points[b].y.redNeg())===0){comb[1]=points[a].toJ().mixedAdd(points[b]);comb[2]=points[a].add(points[b].neg());}else{comb[1]=points[a].toJ().mixedAdd(points[b]);comb[2]=points[a].toJ().mixedAdd(points[b].neg());}var index=[-3,/* -1 -1 */-1,/* -1 0 */-5,/* -1 1 */-7,/* 0 -1 */0,/* 0 0 */7,/* 0 1 */5,/* 1 -1 */1,/* 1 0 */3/* 1 1 */];var jsf=getJSF(coeffs[a],coeffs[b]);max=Math.max(jsf[0].length,max);naf[a]=new Array(max);naf[b]=new Array(max);for(var j=0;j<max;j++){var ja=jsf[0][j]|0;var jb=jsf[1][j]|0;naf[a][j]=index[(ja+1)*3+(jb+1)];naf[b][j]=0;wnd[a]=comb;}}var acc=this.jpoint(null,null,null);var tmp=this._wnafT4;for(var i=max;i>=0;i--){var k=0;while(i>=0){var zero=true;for(var j=0;j<len;j++){tmp[j]=naf[j][i]|0;if(tmp[j]!==0)zero=false;}if(!zero)break;k++;i--;}if(i>=0)k++;acc=acc.dblp(k);if(i<0)break;for(var j=0;j<len;j++){var z=tmp[j];var p;if(z===0)continue;else if(z>0)p=wnd[j][z-1>>1];else if(z<0)p=wnd[j][-z-1>>1].neg();if(p.type==='affine')acc=acc.mixedAdd(p);else acc=acc.add(p);}}// Zeroify references
for(var i=0;i<len;i++)wnd[i]=null;return acc.toP();};function BasePoint(curve,type){this.curve=curve;this.type=type;this.precomputed=null;}BaseCurve.BasePoint=BasePoint;BasePoint.prototype.eq=function eq()/*other*/{throw new Error('Not implemented');};BasePoint.prototype.validate=function validate(){return this.curve.validate(this);};BaseCurve.prototype.decodePoint=function decodePoint(bytes,enc){bytes=utils.toArray(bytes,enc);var len=this.p.byteLength();if(bytes[0]===0x04&&bytes.length-1===2*len){return this.point(bytes.slice(1,1+len),bytes.slice(1+len,1+2*len));}else if((bytes[0]===0x02||bytes[0]===0x03)&&bytes.length-1===len){return this.pointFromX(bytes.slice(1,1+len),bytes[0]===0x03);}throw new Error('Unknown point format');};BasePoint.prototype.encodeCompressed=function encodeCompressed(enc){return this.encode(enc,true);};BasePoint.prototype._encode=function _encode(compact){var len=this.curve.p.byteLength();var x=this.getX().toArray('be',len);if(compact)return[this.getY().isEven()?0x02:0x03].concat(x);return[0x04].concat(x,this.getY().toArray('be',len));};BasePoint.prototype.encode=function encode(enc,compact){return utils.encode(this._encode(compact),enc);};BasePoint.prototype.precompute=function precompute(power){if(this.precomputed)return this;var precomputed={doubles:null,naf:null,beta:null};precomputed.naf=this._getNAFPoints(8);precomputed.doubles=this._getDoubles(4,power);precomputed.beta=this._getBeta();this.precomputed=precomputed;return this;};BasePoint.prototype._hasDoubles=function _hasDoubles(k){if(!this.precomputed)return false;var doubles=this.precomputed.doubles;if(!doubles)return false;return doubles.points.length>=Math.ceil((k.bitLength()+1)/doubles.step);};BasePoint.prototype._getDoubles=function _getDoubles(step,power){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles;var doubles=[this];var acc=this;for(var i=0;i<power;i+=step){for(var j=0;j<step;j++)acc=acc.dbl();doubles.push(acc);}return{step:step,points:doubles};};BasePoint.prototype._getNAFPoints=function _getNAFPoints(wnd){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf;var res=[this];var max=(1<<wnd)-1;var dbl=max===1?null:this.dbl();for(var i=1;i<max;i++)res[i]=res[i-1].add(dbl);return{wnd:wnd,points:res};};BasePoint.prototype._getBeta=function _getBeta(){return null;};BasePoint.prototype.dblp=function dblp(k){var r=this;for(var i=0;i<k;i++)r=r.dbl();return r;};},{"../../elliptic":134,"bn.js":132}],136:[function(require,module,exports){'use strict';var curve=require('../curve');var elliptic=require('../../elliptic');var BN=require('bn.js');var inherits=require('inherits');var Base=curve.base;var assert=elliptic.utils.assert;function EdwardsCurve(conf){// NOTE: Important as we are creating point in Base.call()
this.twisted=(conf.a|0)!==1;this.mOneA=this.twisted&&(conf.a|0)===-1;this.extended=this.mOneA;Base.call(this,'edwards',conf);this.a=new BN(conf.a,16).umod(this.red.m);this.a=this.a.toRed(this.red);this.c=new BN(conf.c,16).toRed(this.red);this.c2=this.c.redSqr();this.d=new BN(conf.d,16).toRed(this.red);this.dd=this.d.redAdd(this.d);assert(!this.twisted||this.c.fromRed().cmpn(1)===0);this.oneC=(conf.c|0)===1;}inherits(EdwardsCurve,Base);module.exports=EdwardsCurve;EdwardsCurve.prototype._mulA=function _mulA(num){if(this.mOneA)return num.redNeg();else return this.a.redMul(num);};EdwardsCurve.prototype._mulC=function _mulC(num){if(this.oneC)return num;else return this.c.redMul(num);};// Just for compatibility with Short curve
EdwardsCurve.prototype.jpoint=function jpoint(x,y,z,t){return this.point(x,y,z,t);};EdwardsCurve.prototype.pointFromX=function pointFromX(x,odd){x=new BN(x,16);if(!x.red)x=x.toRed(this.red);var x2=x.redSqr();var rhs=this.c2.redSub(this.a.redMul(x2));var lhs=this.one.redSub(this.c2.redMul(this.d).redMul(x2));var y2=rhs.redMul(lhs.redInvm());var y=y2.redSqrt();if(y.redSqr().redSub(y2).cmp(this.zero)!==0)throw new Error('invalid point');var isOdd=y.fromRed().isOdd();if(odd&&!isOdd||!odd&&isOdd)y=y.redNeg();return this.point(x,y);};EdwardsCurve.prototype.pointFromY=function pointFromY(y,odd){y=new BN(y,16);if(!y.red)y=y.toRed(this.red);// x^2 = (y^2 - 1) / (d y^2 + 1)
var y2=y.redSqr();var lhs=y2.redSub(this.one);var rhs=y2.redMul(this.d).redAdd(this.one);var x2=lhs.redMul(rhs.redInvm());if(x2.cmp(this.zero)===0){if(odd)throw new Error('invalid point');else return this.point(this.zero,y);}var x=x2.redSqrt();if(x.redSqr().redSub(x2).cmp(this.zero)!==0)throw new Error('invalid point');if(x.isOdd()!==odd)x=x.redNeg();return this.point(x,y);};EdwardsCurve.prototype.validate=function validate(point){if(point.isInfinity())return true;// Curve: A * X^2 + Y^2 = C^2 * (1 + D * X^2 * Y^2)
point.normalize();var x2=point.x.redSqr();var y2=point.y.redSqr();var lhs=x2.redMul(this.a).redAdd(y2);var rhs=this.c2.redMul(this.one.redAdd(this.d.redMul(x2).redMul(y2)));return lhs.cmp(rhs)===0;};function Point(curve,x,y,z,t){Base.BasePoint.call(this,curve,'projective');if(x===null&&y===null&&z===null){this.x=this.curve.zero;this.y=this.curve.one;this.z=this.curve.one;this.t=this.curve.zero;this.zOne=true;}else{this.x=new BN(x,16);this.y=new BN(y,16);this.z=z?new BN(z,16):this.curve.one;this.t=t&&new BN(t,16);if(!this.x.red)this.x=this.x.toRed(this.curve.red);if(!this.y.red)this.y=this.y.toRed(this.curve.red);if(!this.z.red)this.z=this.z.toRed(this.curve.red);if(this.t&&!this.t.red)this.t=this.t.toRed(this.curve.red);this.zOne=this.z===this.curve.one;// Use extended coordinates
if(this.curve.extended&&!this.t){this.t=this.x.redMul(this.y);if(!this.zOne)this.t=this.t.redMul(this.z.redInvm());}}}inherits(Point,Base.BasePoint);EdwardsCurve.prototype.pointFromJSON=function pointFromJSON(obj){return Point.fromJSON(this,obj);};EdwardsCurve.prototype.point=function point(x,y,z,t){return new Point(this,x,y,z,t);};Point.fromJSON=function fromJSON(curve,obj){return new Point(curve,obj[0],obj[1],obj[2]);};Point.prototype.inspect=function inspect(){if(this.isInfinity())return'<EC Point Infinity>';return'<EC Point x: '+this.x.fromRed().toString(16,2)+' y: '+this.y.fromRed().toString(16,2)+' z: '+this.z.fromRed().toString(16,2)+'>';};Point.prototype.isInfinity=function isInfinity(){// XXX This code assumes that zero is always zero in red
return this.x.cmpn(0)===0&&this.y.cmp(this.z)===0;};Point.prototype._extDbl=function _extDbl(){// hyperelliptic.org/EFD/g1p/auto-twisted-extended-1.html
//     #doubling-dbl-2008-hwcd
// 4M + 4S
// A = X1^2
var a=this.x.redSqr();// B = Y1^2
var b=this.y.redSqr();// C = 2 * Z1^2
var c=this.z.redSqr();c=c.redIAdd(c);// D = a * A
var d=this.curve._mulA(a);// E = (X1 + Y1)^2 - A - B
var e=this.x.redAdd(this.y).redSqr().redISub(a).redISub(b);// G = D + B
var g=d.redAdd(b);// F = G - C
var f=g.redSub(c);// H = D - B
var h=d.redSub(b);// X3 = E * F
var nx=e.redMul(f);// Y3 = G * H
var ny=g.redMul(h);// T3 = E * H
var nt=e.redMul(h);// Z3 = F * G
var nz=f.redMul(g);return this.curve.point(nx,ny,nz,nt);};Point.prototype._projDbl=function _projDbl(){// hyperelliptic.org/EFD/g1p/auto-twisted-projective.html
//     #doubling-dbl-2008-bbjlp
//     #doubling-dbl-2007-bl
// and others
// Generally 3M + 4S or 2M + 4S
// B = (X1 + Y1)^2
var b=this.x.redAdd(this.y).redSqr();// C = X1^2
var c=this.x.redSqr();// D = Y1^2
var d=this.y.redSqr();var nx;var ny;var nz;if(this.curve.twisted){// E = a * C
var e=this.curve._mulA(c);// F = E + D
var f=e.redAdd(d);if(this.zOne){// X3 = (B - C - D) * (F - 2)
nx=b.redSub(c).redSub(d).redMul(f.redSub(this.curve.two));// Y3 = F * (E - D)
ny=f.redMul(e.redSub(d));// Z3 = F^2 - 2 * F
nz=f.redSqr().redSub(f).redSub(f);}else{// H = Z1^2
var h=this.z.redSqr();// J = F - 2 * H
var j=f.redSub(h).redISub(h);// X3 = (B-C-D)*J
nx=b.redSub(c).redISub(d).redMul(j);// Y3 = F * (E - D)
ny=f.redMul(e.redSub(d));// Z3 = F * J
nz=f.redMul(j);}}else{// E = C + D
var e=c.redAdd(d);// H = (c * Z1)^2
var h=this.curve._mulC(this.c.redMul(this.z)).redSqr();// J = E - 2 * H
var j=e.redSub(h).redSub(h);// X3 = c * (B - E) * J
nx=this.curve._mulC(b.redISub(e)).redMul(j);// Y3 = c * E * (C - D)
ny=this.curve._mulC(e).redMul(c.redISub(d));// Z3 = E * J
nz=e.redMul(j);}return this.curve.point(nx,ny,nz);};Point.prototype.dbl=function dbl(){if(this.isInfinity())return this;// Double in extended coordinates
if(this.curve.extended)return this._extDbl();else return this._projDbl();};Point.prototype._extAdd=function _extAdd(p){// hyperelliptic.org/EFD/g1p/auto-twisted-extended-1.html
//     #addition-add-2008-hwcd-3
// 8M
// A = (Y1 - X1) * (Y2 - X2)
var a=this.y.redSub(this.x).redMul(p.y.redSub(p.x));// B = (Y1 + X1) * (Y2 + X2)
var b=this.y.redAdd(this.x).redMul(p.y.redAdd(p.x));// C = T1 * k * T2
var c=this.t.redMul(this.curve.dd).redMul(p.t);// D = Z1 * 2 * Z2
var d=this.z.redMul(p.z.redAdd(p.z));// E = B - A
var e=b.redSub(a);// F = D - C
var f=d.redSub(c);// G = D + C
var g=d.redAdd(c);// H = B + A
var h=b.redAdd(a);// X3 = E * F
var nx=e.redMul(f);// Y3 = G * H
var ny=g.redMul(h);// T3 = E * H
var nt=e.redMul(h);// Z3 = F * G
var nz=f.redMul(g);return this.curve.point(nx,ny,nz,nt);};Point.prototype._projAdd=function _projAdd(p){// hyperelliptic.org/EFD/g1p/auto-twisted-projective.html
//     #addition-add-2008-bbjlp
//     #addition-add-2007-bl
// 10M + 1S
// A = Z1 * Z2
var a=this.z.redMul(p.z);// B = A^2
var b=a.redSqr();// C = X1 * X2
var c=this.x.redMul(p.x);// D = Y1 * Y2
var d=this.y.redMul(p.y);// E = d * C * D
var e=this.curve.d.redMul(c).redMul(d);// F = B - E
var f=b.redSub(e);// G = B + E
var g=b.redAdd(e);// X3 = A * F * ((X1 + Y1) * (X2 + Y2) - C - D)
var tmp=this.x.redAdd(this.y).redMul(p.x.redAdd(p.y)).redISub(c).redISub(d);var nx=a.redMul(f).redMul(tmp);var ny;var nz;if(this.curve.twisted){// Y3 = A * G * (D - a * C)
ny=a.redMul(g).redMul(d.redSub(this.curve._mulA(c)));// Z3 = F * G
nz=f.redMul(g);}else{// Y3 = A * G * (D - C)
ny=a.redMul(g).redMul(d.redSub(c));// Z3 = c * F * G
nz=this.curve._mulC(f).redMul(g);}return this.curve.point(nx,ny,nz);};Point.prototype.add=function add(p){if(this.isInfinity())return p;if(p.isInfinity())return this;if(this.curve.extended)return this._extAdd(p);else return this._projAdd(p);};Point.prototype.mul=function mul(k){if(this._hasDoubles(k))return this.curve._fixedNafMul(this,k);else return this.curve._wnafMul(this,k);};Point.prototype.mulAdd=function mulAdd(k1,p,k2){return this.curve._wnafMulAdd(1,[this,p],[k1,k2],2);};Point.prototype.normalize=function normalize(){if(this.zOne)return this;// Normalize coordinates
var zi=this.z.redInvm();this.x=this.x.redMul(zi);this.y=this.y.redMul(zi);if(this.t)this.t=this.t.redMul(zi);this.z=this.curve.one;this.zOne=true;return this;};Point.prototype.neg=function neg(){return this.curve.point(this.x.redNeg(),this.y,this.z,this.t&&this.t.redNeg());};Point.prototype.getX=function getX(){this.normalize();return this.x.fromRed();};Point.prototype.getY=function getY(){this.normalize();return this.y.fromRed();};Point.prototype.eq=function eq(other){return this===other||this.getX().cmp(other.getX())===0&&this.getY().cmp(other.getY())===0;};// Compatibility with BaseCurve
Point.prototype.toP=Point.prototype.normalize;Point.prototype.mixedAdd=Point.prototype.add;},{"../../elliptic":134,"../curve":137,"bn.js":132,"inherits":292}],137:[function(require,module,exports){'use strict';var curve=exports;curve.base=require('./base');curve.short=require('./short');curve.mont=require('./mont');curve.edwards=require('./edwards');},{"./base":135,"./edwards":136,"./mont":138,"./short":139}],138:[function(require,module,exports){'use strict';var curve=require('../curve');var BN=require('bn.js');var inherits=require('inherits');var Base=curve.base;var elliptic=require('../../elliptic');var utils=elliptic.utils;function MontCurve(conf){Base.call(this,'mont',conf);this.a=new BN(conf.a,16).toRed(this.red);this.b=new BN(conf.b,16).toRed(this.red);this.i4=new BN(4).toRed(this.red).redInvm();this.two=new BN(2).toRed(this.red);this.a24=this.i4.redMul(this.a.redAdd(this.two));}inherits(MontCurve,Base);module.exports=MontCurve;MontCurve.prototype.validate=function validate(point){var x=point.normalize().x;var x2=x.redSqr();var rhs=x2.redMul(x).redAdd(x2.redMul(this.a)).redAdd(x);var y=rhs.redSqrt();return y.redSqr().cmp(rhs)===0;};function Point(curve,x,z){Base.BasePoint.call(this,curve,'projective');if(x===null&&z===null){this.x=this.curve.one;this.z=this.curve.zero;}else{this.x=new BN(x,16);this.z=new BN(z,16);if(!this.x.red)this.x=this.x.toRed(this.curve.red);if(!this.z.red)this.z=this.z.toRed(this.curve.red);}}inherits(Point,Base.BasePoint);MontCurve.prototype.decodePoint=function decodePoint(bytes,enc){return this.point(utils.toArray(bytes,enc),1);};MontCurve.prototype.point=function point(x,z){return new Point(this,x,z);};MontCurve.prototype.pointFromJSON=function pointFromJSON(obj){return Point.fromJSON(this,obj);};Point.prototype.precompute=function precompute(){// No-op
};Point.prototype._encode=function _encode(){return this.getX().toArray('be',this.curve.p.byteLength());};Point.fromJSON=function fromJSON(curve,obj){return new Point(curve,obj[0],obj[1]||curve.one);};Point.prototype.inspect=function inspect(){if(this.isInfinity())return'<EC Point Infinity>';return'<EC Point x: '+this.x.fromRed().toString(16,2)+' z: '+this.z.fromRed().toString(16,2)+'>';};Point.prototype.isInfinity=function isInfinity(){// XXX This code assumes that zero is always zero in red
return this.z.cmpn(0)===0;};Point.prototype.dbl=function dbl(){// http://hyperelliptic.org/EFD/g1p/auto-montgom-xz.html#doubling-dbl-1987-m-3
// 2M + 2S + 4A
// A = X1 + Z1
var a=this.x.redAdd(this.z);// AA = A^2
var aa=a.redSqr();// B = X1 - Z1
var b=this.x.redSub(this.z);// BB = B^2
var bb=b.redSqr();// C = AA - BB
var c=aa.redSub(bb);// X3 = AA * BB
var nx=aa.redMul(bb);// Z3 = C * (BB + A24 * C)
var nz=c.redMul(bb.redAdd(this.curve.a24.redMul(c)));return this.curve.point(nx,nz);};Point.prototype.add=function add(){throw new Error('Not supported on Montgomery curve');};Point.prototype.diffAdd=function diffAdd(p,diff){// http://hyperelliptic.org/EFD/g1p/auto-montgom-xz.html#diffadd-dadd-1987-m-3
// 4M + 2S + 6A
// A = X2 + Z2
var a=this.x.redAdd(this.z);// B = X2 - Z2
var b=this.x.redSub(this.z);// C = X3 + Z3
var c=p.x.redAdd(p.z);// D = X3 - Z3
var d=p.x.redSub(p.z);// DA = D * A
var da=d.redMul(a);// CB = C * B
var cb=c.redMul(b);// X5 = Z1 * (DA + CB)^2
var nx=diff.z.redMul(da.redAdd(cb).redSqr());// Z5 = X1 * (DA - CB)^2
var nz=diff.x.redMul(da.redISub(cb).redSqr());return this.curve.point(nx,nz);};Point.prototype.mul=function mul(k){var t=k.clone();var a=this;// (N / 2) * Q + Q
var b=this.curve.point(null,null);// (N / 2) * Q
var c=this;// Q
for(var bits=[];t.cmpn(0)!==0;t.iushrn(1))bits.push(t.andln(1));for(var i=bits.length-1;i>=0;i--){if(bits[i]===0){// N * Q + Q = ((N / 2) * Q + Q)) + (N / 2) * Q
a=a.diffAdd(b,c);// N * Q = 2 * ((N / 2) * Q + Q))
b=b.dbl();}else{// N * Q = ((N / 2) * Q + Q) + ((N / 2) * Q)
b=a.diffAdd(b,c);// N * Q + Q = 2 * ((N / 2) * Q + Q)
a=a.dbl();}}return b;};Point.prototype.mulAdd=function mulAdd(){throw new Error('Not supported on Montgomery curve');};Point.prototype.eq=function eq(other){return this.getX().cmp(other.getX())===0;};Point.prototype.normalize=function normalize(){this.x=this.x.redMul(this.z.redInvm());this.z=this.curve.one;return this;};Point.prototype.getX=function getX(){// Normalize coordinates
this.normalize();return this.x.fromRed();};},{"../../elliptic":134,"../curve":137,"bn.js":132,"inherits":292}],139:[function(require,module,exports){'use strict';var curve=require('../curve');var elliptic=require('../../elliptic');var BN=require('bn.js');var inherits=require('inherits');var Base=curve.base;var assert=elliptic.utils.assert;function ShortCurve(conf){Base.call(this,'short',conf);this.a=new BN(conf.a,16).toRed(this.red);this.b=new BN(conf.b,16).toRed(this.red);this.tinv=this.two.redInvm();this.zeroA=this.a.fromRed().cmpn(0)===0;this.threeA=this.a.fromRed().sub(this.p).cmpn(-3)===0;// If the curve is endomorphic, precalculate beta and lambda
this.endo=this._getEndomorphism(conf);this._endoWnafT1=new Array(4);this._endoWnafT2=new Array(4);}inherits(ShortCurve,Base);module.exports=ShortCurve;ShortCurve.prototype._getEndomorphism=function _getEndomorphism(conf){// No efficient endomorphism
if(!this.zeroA||!this.g||!this.n||this.p.modn(3)!==1)return;// Compute beta and lambda, that lambda * P = (beta * Px; Py)
var beta;var lambda;if(conf.beta){beta=new BN(conf.beta,16).toRed(this.red);}else{var betas=this._getEndoRoots(this.p);// Choose the smallest beta
beta=betas[0].cmp(betas[1])<0?betas[0]:betas[1];beta=beta.toRed(this.red);}if(conf.lambda){lambda=new BN(conf.lambda,16);}else{// Choose the lambda that is matching selected beta
var lambdas=this._getEndoRoots(this.n);if(this.g.mul(lambdas[0]).x.cmp(this.g.x.redMul(beta))===0){lambda=lambdas[0];}else{lambda=lambdas[1];assert(this.g.mul(lambda).x.cmp(this.g.x.redMul(beta))===0);}}// Get basis vectors, used for balanced length-two representation
var basis;if(conf.basis){basis=conf.basis.map(function(vec){return{a:new BN(vec.a,16),b:new BN(vec.b,16)};});}else{basis=this._getEndoBasis(lambda);}return{beta:beta,lambda:lambda,basis:basis};};ShortCurve.prototype._getEndoRoots=function _getEndoRoots(num){// Find roots of for x^2 + x + 1 in F
// Root = (-1 +- Sqrt(-3)) / 2
//
var red=num===this.p?this.red:BN.mont(num);var tinv=new BN(2).toRed(red).redInvm();var ntinv=tinv.redNeg();var s=new BN(3).toRed(red).redNeg().redSqrt().redMul(tinv);var l1=ntinv.redAdd(s).fromRed();var l2=ntinv.redSub(s).fromRed();return[l1,l2];};ShortCurve.prototype._getEndoBasis=function _getEndoBasis(lambda){// aprxSqrt >= sqrt(this.n)
var aprxSqrt=this.n.ushrn(Math.floor(this.n.bitLength()/2));// 3.74
// Run EGCD, until r(L + 1) < aprxSqrt
var u=lambda;var v=this.n.clone();var x1=new BN(1);var y1=new BN(0);var x2=new BN(0);var y2=new BN(1);// NOTE: all vectors are roots of: a + b * lambda = 0 (mod n)
var a0;var b0;// First vector
var a1;var b1;// Second vector
var a2;var b2;var prevR;var i=0;var r;var x;while(u.cmpn(0)!==0){var q=v.div(u);r=v.sub(q.mul(u));x=x2.sub(q.mul(x1));var y=y2.sub(q.mul(y1));if(!a1&&r.cmp(aprxSqrt)<0){a0=prevR.neg();b0=x1;a1=r.neg();b1=x;}else if(a1&&++i===2){break;}prevR=r;v=u;u=r;x2=x1;x1=x;y2=y1;y1=y;}a2=r.neg();b2=x;var len1=a1.sqr().add(b1.sqr());var len2=a2.sqr().add(b2.sqr());if(len2.cmp(len1)>=0){a2=a0;b2=b0;}// Normalize signs
if(a1.negative){a1=a1.neg();b1=b1.neg();}if(a2.negative){a2=a2.neg();b2=b2.neg();}return[{a:a1,b:b1},{a:a2,b:b2}];};ShortCurve.prototype._endoSplit=function _endoSplit(k){var basis=this.endo.basis;var v1=basis[0];var v2=basis[1];var c1=v2.b.mul(k).divRound(this.n);var c2=v1.b.neg().mul(k).divRound(this.n);var p1=c1.mul(v1.a);var p2=c2.mul(v2.a);var q1=c1.mul(v1.b);var q2=c2.mul(v2.b);// Calculate answer
var k1=k.sub(p1).sub(p2);var k2=q1.add(q2).neg();return{k1:k1,k2:k2};};ShortCurve.prototype.pointFromX=function pointFromX(x,odd){x=new BN(x,16);if(!x.red)x=x.toRed(this.red);var y2=x.redSqr().redMul(x).redIAdd(x.redMul(this.a)).redIAdd(this.b);var y=y2.redSqrt();if(y.redSqr().redSub(y2).cmp(this.zero)!==0)throw new Error('invalid point');// XXX Is there any way to tell if the number is odd without converting it
// to non-red form?
var isOdd=y.fromRed().isOdd();if(odd&&!isOdd||!odd&&isOdd)y=y.redNeg();return this.point(x,y);};ShortCurve.prototype.validate=function validate(point){if(point.inf)return true;var x=point.x;var y=point.y;var ax=this.a.redMul(x);var rhs=x.redSqr().redMul(x).redIAdd(ax).redIAdd(this.b);return y.redSqr().redISub(rhs).cmpn(0)===0;};ShortCurve.prototype._endoWnafMulAdd=function _endoWnafMulAdd(points,coeffs){var npoints=this._endoWnafT1;var ncoeffs=this._endoWnafT2;for(var i=0;i<points.length;i++){var split=this._endoSplit(coeffs[i]);var p=points[i];var beta=p._getBeta();if(split.k1.negative){split.k1.ineg();p=p.neg(true);}if(split.k2.negative){split.k2.ineg();beta=beta.neg(true);}npoints[i*2]=p;npoints[i*2+1]=beta;ncoeffs[i*2]=split.k1;ncoeffs[i*2+1]=split.k2;}var res=this._wnafMulAdd(1,npoints,ncoeffs,i*2);// Clean-up references to points and coefficients
for(var j=0;j<i*2;j++){npoints[j]=null;ncoeffs[j]=null;}return res;};function Point(curve,x,y,isRed){Base.BasePoint.call(this,curve,'affine');if(x===null&&y===null){this.x=null;this.y=null;this.inf=true;}else{this.x=new BN(x,16);this.y=new BN(y,16);// Force redgomery representation when loading from JSON
if(isRed){this.x.forceRed(this.curve.red);this.y.forceRed(this.curve.red);}if(!this.x.red)this.x=this.x.toRed(this.curve.red);if(!this.y.red)this.y=this.y.toRed(this.curve.red);this.inf=false;}}inherits(Point,Base.BasePoint);ShortCurve.prototype.point=function point(x,y,isRed){return new Point(this,x,y,isRed);};ShortCurve.prototype.pointFromJSON=function pointFromJSON(obj,red){return Point.fromJSON(this,obj,red);};Point.prototype._getBeta=function _getBeta(){if(!this.curve.endo)return;var pre=this.precomputed;if(pre&&pre.beta)return pre.beta;var beta=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);if(pre){var curve=this.curve;var endoMul=function(p){return curve.point(p.x.redMul(curve.endo.beta),p.y);};pre.beta=beta;beta.precomputed={beta:null,naf:pre.naf&&{wnd:pre.naf.wnd,points:pre.naf.points.map(endoMul)},doubles:pre.doubles&&{step:pre.doubles.step,points:pre.doubles.points.map(endoMul)}};}return beta;};Point.prototype.toJSON=function toJSON(){if(!this.precomputed)return[this.x,this.y];return[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}];};Point.fromJSON=function fromJSON(curve,obj,red){if(typeof obj==='string')obj=JSON.parse(obj);var res=curve.point(obj[0],obj[1],red);if(!obj[2])return res;function obj2point(obj){return curve.point(obj[0],obj[1],red);}var pre=obj[2];res.precomputed={beta:null,doubles:pre.doubles&&{step:pre.doubles.step,points:[res].concat(pre.doubles.points.map(obj2point))},naf:pre.naf&&{wnd:pre.naf.wnd,points:[res].concat(pre.naf.points.map(obj2point))}};return res;};Point.prototype.inspect=function inspect(){if(this.isInfinity())return'<EC Point Infinity>';return'<EC Point x: '+this.x.fromRed().toString(16,2)+' y: '+this.y.fromRed().toString(16,2)+'>';};Point.prototype.isInfinity=function isInfinity(){return this.inf;};Point.prototype.add=function add(p){// O + P = P
if(this.inf)return p;// P + O = P
if(p.inf)return this;// P + P = 2P
if(this.eq(p))return this.dbl();// P + (-P) = O
if(this.neg().eq(p))return this.curve.point(null,null);// P + Q = O
if(this.x.cmp(p.x)===0)return this.curve.point(null,null);var c=this.y.redSub(p.y);if(c.cmpn(0)!==0)c=c.redMul(this.x.redSub(p.x).redInvm());var nx=c.redSqr().redISub(this.x).redISub(p.x);var ny=c.redMul(this.x.redSub(nx)).redISub(this.y);return this.curve.point(nx,ny);};Point.prototype.dbl=function dbl(){if(this.inf)return this;// 2P = O
var ys1=this.y.redAdd(this.y);if(ys1.cmpn(0)===0)return this.curve.point(null,null);var a=this.curve.a;var x2=this.x.redSqr();var dyinv=ys1.redInvm();var c=x2.redAdd(x2).redIAdd(x2).redIAdd(a).redMul(dyinv);var nx=c.redSqr().redISub(this.x.redAdd(this.x));var ny=c.redMul(this.x.redSub(nx)).redISub(this.y);return this.curve.point(nx,ny);};Point.prototype.getX=function getX(){return this.x.fromRed();};Point.prototype.getY=function getY(){return this.y.fromRed();};Point.prototype.mul=function mul(k){k=new BN(k,16);if(this._hasDoubles(k))return this.curve._fixedNafMul(this,k);else if(this.curve.endo)return this.curve._endoWnafMulAdd([this],[k]);else return this.curve._wnafMul(this,k);};Point.prototype.mulAdd=function mulAdd(k1,p2,k2){var points=[this,p2];var coeffs=[k1,k2];if(this.curve.endo)return this.curve._endoWnafMulAdd(points,coeffs);else return this.curve._wnafMulAdd(1,points,coeffs,2);};Point.prototype.eq=function eq(p){return this===p||this.inf===p.inf&&(this.inf||this.x.cmp(p.x)===0&&this.y.cmp(p.y)===0);};Point.prototype.neg=function neg(_precompute){if(this.inf)return this;var res=this.curve.point(this.x,this.y.redNeg());if(_precompute&&this.precomputed){var pre=this.precomputed;var negate=function(p){return p.neg();};res.precomputed={naf:pre.naf&&{wnd:pre.naf.wnd,points:pre.naf.points.map(negate)},doubles:pre.doubles&&{step:pre.doubles.step,points:pre.doubles.points.map(negate)}};}return res;};Point.prototype.toJ=function toJ(){if(this.inf)return this.curve.jpoint(null,null,null);var res=this.curve.jpoint(this.x,this.y,this.curve.one);return res;};function JPoint(curve,x,y,z){Base.BasePoint.call(this,curve,'jacobian');if(x===null&&y===null&&z===null){this.x=this.curve.one;this.y=this.curve.one;this.z=new BN(0);}else{this.x=new BN(x,16);this.y=new BN(y,16);this.z=new BN(z,16);}if(!this.x.red)this.x=this.x.toRed(this.curve.red);if(!this.y.red)this.y=this.y.toRed(this.curve.red);if(!this.z.red)this.z=this.z.toRed(this.curve.red);this.zOne=this.z===this.curve.one;}inherits(JPoint,Base.BasePoint);ShortCurve.prototype.jpoint=function jpoint(x,y,z){return new JPoint(this,x,y,z);};JPoint.prototype.toP=function toP(){if(this.isInfinity())return this.curve.point(null,null);var zinv=this.z.redInvm();var zinv2=zinv.redSqr();var ax=this.x.redMul(zinv2);var ay=this.y.redMul(zinv2).redMul(zinv);return this.curve.point(ax,ay);};JPoint.prototype.neg=function neg(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z);};JPoint.prototype.add=function add(p){// O + P = P
if(this.isInfinity())return p;// P + O = P
if(p.isInfinity())return this;// 12M + 4S + 7A
var pz2=p.z.redSqr();var z2=this.z.redSqr();var u1=this.x.redMul(pz2);var u2=p.x.redMul(z2);var s1=this.y.redMul(pz2.redMul(p.z));var s2=p.y.redMul(z2.redMul(this.z));var h=u1.redSub(u2);var r=s1.redSub(s2);if(h.cmpn(0)===0){if(r.cmpn(0)!==0)return this.curve.jpoint(null,null,null);else return this.dbl();}var h2=h.redSqr();var h3=h2.redMul(h);var v=u1.redMul(h2);var nx=r.redSqr().redIAdd(h3).redISub(v).redISub(v);var ny=r.redMul(v.redISub(nx)).redISub(s1.redMul(h3));var nz=this.z.redMul(p.z).redMul(h);return this.curve.jpoint(nx,ny,nz);};JPoint.prototype.mixedAdd=function mixedAdd(p){// O + P = P
if(this.isInfinity())return p.toJ();// P + O = P
if(p.isInfinity())return this;// 8M + 3S + 7A
var z2=this.z.redSqr();var u1=this.x;var u2=p.x.redMul(z2);var s1=this.y;var s2=p.y.redMul(z2).redMul(this.z);var h=u1.redSub(u2);var r=s1.redSub(s2);if(h.cmpn(0)===0){if(r.cmpn(0)!==0)return this.curve.jpoint(null,null,null);else return this.dbl();}var h2=h.redSqr();var h3=h2.redMul(h);var v=u1.redMul(h2);var nx=r.redSqr().redIAdd(h3).redISub(v).redISub(v);var ny=r.redMul(v.redISub(nx)).redISub(s1.redMul(h3));var nz=this.z.redMul(h);return this.curve.jpoint(nx,ny,nz);};JPoint.prototype.dblp=function dblp(pow){if(pow===0)return this;if(this.isInfinity())return this;if(!pow)return this.dbl();if(this.curve.zeroA||this.curve.threeA){var r=this;for(var i=0;i<pow;i++)r=r.dbl();return r;}// 1M + 2S + 1A + N * (4S + 5M + 8A)
// N = 1 => 6M + 6S + 9A
var a=this.curve.a;var tinv=this.curve.tinv;var jx=this.x;var jy=this.y;var jz=this.z;var jz4=jz.redSqr().redSqr();// Reuse results
var jyd=jy.redAdd(jy);for(var i=0;i<pow;i++){var jx2=jx.redSqr();var jyd2=jyd.redSqr();var jyd4=jyd2.redSqr();var c=jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));var t1=jx.redMul(jyd2);var nx=c.redSqr().redISub(t1.redAdd(t1));var t2=t1.redISub(nx);var dny=c.redMul(t2);dny=dny.redIAdd(dny).redISub(jyd4);var nz=jyd.redMul(jz);if(i+1<pow)jz4=jz4.redMul(jyd4);jx=nx;jz=nz;jyd=dny;}return this.curve.jpoint(jx,jyd.redMul(tinv),jz);};JPoint.prototype.dbl=function dbl(){if(this.isInfinity())return this;if(this.curve.zeroA)return this._zeroDbl();else if(this.curve.threeA)return this._threeDbl();else return this._dbl();};JPoint.prototype._zeroDbl=function _zeroDbl(){var nx;var ny;var nz;// Z = 1
if(this.zOne){// hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-0.html
//     #doubling-mdbl-2007-bl
// 1M + 5S + 14A
// XX = X1^2
var xx=this.x.redSqr();// YY = Y1^2
var yy=this.y.redSqr();// YYYY = YY^2
var yyyy=yy.redSqr();// S = 2 * ((X1 + YY)^2 - XX - YYYY)
var s=this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);s=s.redIAdd(s);// M = 3 * XX + a; a = 0
var m=xx.redAdd(xx).redIAdd(xx);// T = M ^ 2 - 2*S
var t=m.redSqr().redISub(s).redISub(s);// 8 * YYYY
var yyyy8=yyyy.redIAdd(yyyy);yyyy8=yyyy8.redIAdd(yyyy8);yyyy8=yyyy8.redIAdd(yyyy8);// X3 = T
nx=t;// Y3 = M * (S - T) - 8 * YYYY
ny=m.redMul(s.redISub(t)).redISub(yyyy8);// Z3 = 2*Y1
nz=this.y.redAdd(this.y);}else{// hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-0.html
//     #doubling-dbl-2009-l
// 2M + 5S + 13A
// A = X1^2
var a=this.x.redSqr();// B = Y1^2
var b=this.y.redSqr();// C = B^2
var c=b.redSqr();// D = 2 * ((X1 + B)^2 - A - C)
var d=this.x.redAdd(b).redSqr().redISub(a).redISub(c);d=d.redIAdd(d);// E = 3 * A
var e=a.redAdd(a).redIAdd(a);// F = E^2
var f=e.redSqr();// 8 * C
var c8=c.redIAdd(c);c8=c8.redIAdd(c8);c8=c8.redIAdd(c8);// X3 = F - 2 * D
nx=f.redISub(d).redISub(d);// Y3 = E * (D - X3) - 8 * C
ny=e.redMul(d.redISub(nx)).redISub(c8);// Z3 = 2 * Y1 * Z1
nz=this.y.redMul(this.z);nz=nz.redIAdd(nz);}return this.curve.jpoint(nx,ny,nz);};JPoint.prototype._threeDbl=function _threeDbl(){var nx;var ny;var nz;// Z = 1
if(this.zOne){// hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-3.html
//     #doubling-mdbl-2007-bl
// 1M + 5S + 15A
// XX = X1^2
var xx=this.x.redSqr();// YY = Y1^2
var yy=this.y.redSqr();// YYYY = YY^2
var yyyy=yy.redSqr();// S = 2 * ((X1 + YY)^2 - XX - YYYY)
var s=this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);s=s.redIAdd(s);// M = 3 * XX + a
var m=xx.redAdd(xx).redIAdd(xx).redIAdd(this.curve.a);// T = M^2 - 2 * S
var t=m.redSqr().redISub(s).redISub(s);// X3 = T
nx=t;// Y3 = M * (S - T) - 8 * YYYY
var yyyy8=yyyy.redIAdd(yyyy);yyyy8=yyyy8.redIAdd(yyyy8);yyyy8=yyyy8.redIAdd(yyyy8);ny=m.redMul(s.redISub(t)).redISub(yyyy8);// Z3 = 2 * Y1
nz=this.y.redAdd(this.y);}else{// hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-3.html#doubling-dbl-2001-b
// 3M + 5S
// delta = Z1^2
var delta=this.z.redSqr();// gamma = Y1^2
var gamma=this.y.redSqr();// beta = X1 * gamma
var beta=this.x.redMul(gamma);// alpha = 3 * (X1 - delta) * (X1 + delta)
var alpha=this.x.redSub(delta).redMul(this.x.redAdd(delta));alpha=alpha.redAdd(alpha).redIAdd(alpha);// X3 = alpha^2 - 8 * beta
var beta4=beta.redIAdd(beta);beta4=beta4.redIAdd(beta4);var beta8=beta4.redAdd(beta4);nx=alpha.redSqr().redISub(beta8);// Z3 = (Y1 + Z1)^2 - gamma - delta
nz=this.y.redAdd(this.z).redSqr().redISub(gamma).redISub(delta);// Y3 = alpha * (4 * beta - X3) - 8 * gamma^2
var ggamma8=gamma.redSqr();ggamma8=ggamma8.redIAdd(ggamma8);ggamma8=ggamma8.redIAdd(ggamma8);ggamma8=ggamma8.redIAdd(ggamma8);ny=alpha.redMul(beta4.redISub(nx)).redISub(ggamma8);}return this.curve.jpoint(nx,ny,nz);};JPoint.prototype._dbl=function _dbl(){var a=this.curve.a;// 4M + 6S + 10A
var jx=this.x;var jy=this.y;var jz=this.z;var jz4=jz.redSqr().redSqr();var jx2=jx.redSqr();var jy2=jy.redSqr();var c=jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));var jxd4=jx.redAdd(jx);jxd4=jxd4.redIAdd(jxd4);var t1=jxd4.redMul(jy2);var nx=c.redSqr().redISub(t1.redAdd(t1));var t2=t1.redISub(nx);var jyd8=jy2.redSqr();jyd8=jyd8.redIAdd(jyd8);jyd8=jyd8.redIAdd(jyd8);jyd8=jyd8.redIAdd(jyd8);var ny=c.redMul(t2).redISub(jyd8);var nz=jy.redAdd(jy).redMul(jz);return this.curve.jpoint(nx,ny,nz);};JPoint.prototype.trpl=function trpl(){if(!this.curve.zeroA)return this.dbl().add(this);// hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-0.html#tripling-tpl-2007-bl
// 5M + 10S + ...
// XX = X1^2
var xx=this.x.redSqr();// YY = Y1^2
var yy=this.y.redSqr();// ZZ = Z1^2
var zz=this.z.redSqr();// YYYY = YY^2
var yyyy=yy.redSqr();// M = 3 * XX + a * ZZ2; a = 0
var m=xx.redAdd(xx).redIAdd(xx);// MM = M^2
var mm=m.redSqr();// E = 6 * ((X1 + YY)^2 - XX - YYYY) - MM
var e=this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);e=e.redIAdd(e);e=e.redAdd(e).redIAdd(e);e=e.redISub(mm);// EE = E^2
var ee=e.redSqr();// T = 16*YYYY
var t=yyyy.redIAdd(yyyy);t=t.redIAdd(t);t=t.redIAdd(t);t=t.redIAdd(t);// U = (M + E)^2 - MM - EE - T
var u=m.redIAdd(e).redSqr().redISub(mm).redISub(ee).redISub(t);// X3 = 4 * (X1 * EE - 4 * YY * U)
var yyu4=yy.redMul(u);yyu4=yyu4.redIAdd(yyu4);yyu4=yyu4.redIAdd(yyu4);var nx=this.x.redMul(ee).redISub(yyu4);nx=nx.redIAdd(nx);nx=nx.redIAdd(nx);// Y3 = 8 * Y1 * (U * (T - U) - E * EE)
var ny=this.y.redMul(u.redMul(t.redISub(u)).redISub(e.redMul(ee)));ny=ny.redIAdd(ny);ny=ny.redIAdd(ny);ny=ny.redIAdd(ny);// Z3 = (Z1 + E)^2 - ZZ - EE
var nz=this.z.redAdd(e).redSqr().redISub(zz).redISub(ee);return this.curve.jpoint(nx,ny,nz);};JPoint.prototype.mul=function mul(k,kbase){k=new BN(k,kbase);return this.curve._wnafMul(this,k);};JPoint.prototype.eq=function eq(p){if(p.type==='affine')return this.eq(p.toJ());if(this===p)return true;// x1 * z2^2 == x2 * z1^2
var z2=this.z.redSqr();var pz2=p.z.redSqr();if(this.x.redMul(pz2).redISub(p.x.redMul(z2)).cmpn(0)!==0)return false;// y1 * z2^3 == y2 * z1^3
var z3=z2.redMul(this.z);var pz3=pz2.redMul(p.z);return this.y.redMul(pz3).redISub(p.y.redMul(z3)).cmpn(0)===0;};JPoint.prototype.inspect=function inspect(){if(this.isInfinity())return'<EC JPoint Infinity>';return'<EC JPoint x: '+this.x.toString(16,2)+' y: '+this.y.toString(16,2)+' z: '+this.z.toString(16,2)+'>';};JPoint.prototype.isInfinity=function isInfinity(){// XXX This code assumes that zero is always zero in red
return this.z.cmpn(0)===0;};},{"../../elliptic":134,"../curve":137,"bn.js":132,"inherits":292}],140:[function(require,module,exports){'use strict';var curves=exports;var hash=require('hash.js');var elliptic=require('../elliptic');var assert=elliptic.utils.assert;function PresetCurve(options){if(options.type==='short')this.curve=new elliptic.curve.short(options);else if(options.type==='edwards')this.curve=new elliptic.curve.edwards(options);else this.curve=new elliptic.curve.mont(options);this.g=this.curve.g;this.n=this.curve.n;this.hash=options.hash;assert(this.g.validate(),'Invalid curve');assert(this.g.mul(this.n).isInfinity(),'Invalid curve, G*N != O');}curves.PresetCurve=PresetCurve;function defineCurve(name,options){Object.defineProperty(curves,name,{configurable:true,enumerable:true,get:function(){var curve=new PresetCurve(options);Object.defineProperty(curves,name,{configurable:true,enumerable:true,value:curve});return curve;}});}defineCurve('p192',{type:'short',prime:'p192',p:'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff',a:'ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc',b:'64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1',n:'ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831',hash:hash.sha256,gRed:false,g:['188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012','07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811']});defineCurve('p224',{type:'short',prime:'p224',p:'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001',a:'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe',b:'b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4',n:'ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d',hash:hash.sha256,gRed:false,g:['b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21','bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34']});defineCurve('p256',{type:'short',prime:null,p:'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff',a:'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc',b:'5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b',n:'ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551',hash:hash.sha256,gRed:false,g:['6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296','4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5']});defineCurve('p384',{type:'short',prime:null,p:'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff '+'fffffffe ffffffff 00000000 00000000 ffffffff',a:'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff '+'fffffffe ffffffff 00000000 00000000 fffffffc',b:'b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f '+'5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef',n:'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 '+'f4372ddf 581a0db2 48b0a77a ecec196a ccc52973',hash:hash.sha384,gRed:false,g:['aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 '+'5502f25d bf55296c 3a545e38 72760ab7','3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 '+'0a60b1ce 1d7e819d 7a431d7c 90ea0e5f']});defineCurve('p521',{type:'short',prime:null,p:'000001ff ffffffff ffffffff ffffffff ffffffff ffffffff '+'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff '+'ffffffff ffffffff ffffffff ffffffff ffffffff',a:'000001ff ffffffff ffffffff ffffffff ffffffff ffffffff '+'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff '+'ffffffff ffffffff ffffffff ffffffff fffffffc',b:'00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b '+'99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd '+'3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00',n:'000001ff ffffffff ffffffff ffffffff ffffffff ffffffff '+'ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 '+'f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409',hash:hash.sha512,gRed:false,g:['000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 '+'053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 '+'a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66','00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 '+'579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 '+'3fad0761 353c7086 a272c240 88be9476 9fd16650']});defineCurve('curve25519',{type:'mont',prime:'p25519',p:'7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',a:'76d06',b:'0',n:'1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',hash:hash.sha256,gRed:false,g:['9']});defineCurve('ed25519',{type:'edwards',prime:'p25519',p:'7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',a:'-1',c:'1',// -121665 * (121666^(-1)) (mod P)
d:'52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3',n:'1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',hash:hash.sha256,gRed:false,g:['216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a',// 4/5
'6666666666666666666666666666666666666666666666666666666666666658']});var pre;try{pre=require('./precomputed/secp256k1');}catch(e){pre=undefined;}defineCurve('secp256k1',{type:'short',prime:'k256',p:'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',a:'0',b:'7',n:'ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141',h:'1',hash:hash.sha256,// Precomputed endomorphism
beta:'7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee',lambda:'5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72',basis:[{a:'3086d221a7d46bcde86c90e49284eb15',b:'-e4437ed6010e88286f547fa90abfe4c3'},{a:'114ca50f7a8e2f3f657c1108d9d44cfd8',b:'3086d221a7d46bcde86c90e49284eb15'}],gRed:false,g:['79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798','483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8',pre]});},{"../elliptic":134,"./precomputed/secp256k1":148,"hash.js":151}],141:[function(require,module,exports){'use strict';var BN=require('bn.js');var elliptic=require('../../elliptic');var utils=elliptic.utils;var assert=utils.assert;var KeyPair=require('./key');var Signature=require('./signature');function EC(options){if(!(this instanceof EC))return new EC(options);// Shortcut `elliptic.ec(curve-name)`
if(typeof options==='string'){assert(elliptic.curves.hasOwnProperty(options),'Unknown curve '+options);options=elliptic.curves[options];}// Shortcut for `elliptic.ec(elliptic.curves.curveName)`
if(options instanceof elliptic.curves.PresetCurve)options={curve:options};this.curve=options.curve.curve;this.n=this.curve.n;this.nh=this.n.ushrn(1);this.g=this.curve.g;// Point on curve
this.g=options.curve.g;this.g.precompute(options.curve.n.bitLength()+1);// Hash for function for DRBG
this.hash=options.hash||options.curve.hash;}module.exports=EC;EC.prototype.keyPair=function keyPair(options){return new KeyPair(this,options);};EC.prototype.keyFromPrivate=function keyFromPrivate(priv,enc){return KeyPair.fromPrivate(this,priv,enc);};EC.prototype.keyFromPublic=function keyFromPublic(pub,enc){return KeyPair.fromPublic(this,pub,enc);};EC.prototype.genKeyPair=function genKeyPair(options){if(!options)options={};// Instantiate Hmac_DRBG
var drbg=new elliptic.hmacDRBG({hash:this.hash,pers:options.pers,entropy:options.entropy||elliptic.rand(this.hash.hmacStrength),nonce:this.n.toArray()});var bytes=this.n.byteLength();var ns2=this.n.sub(new BN(2));do{var priv=new BN(drbg.generate(bytes));if(priv.cmp(ns2)>0)continue;priv.iaddn(1);return this.keyFromPrivate(priv);}while(true);};EC.prototype._truncateToN=function truncateToN(msg,truncOnly){var delta=msg.byteLength()*8-this.n.bitLength();if(delta>0)msg=msg.ushrn(delta);if(!truncOnly&&msg.cmp(this.n)>=0)return msg.sub(this.n);else return msg;};EC.prototype.sign=function sign(msg,key,enc,options){if(typeof enc==='object'){options=enc;enc=null;}if(!options)options={};key=this.keyFromPrivate(key,enc);msg=this._truncateToN(new BN(msg,16));// Zero-extend key to provide enough entropy
var bytes=this.n.byteLength();var bkey=key.getPrivate().toArray('be',bytes);// Zero-extend nonce to have the same byte size as N
var nonce=msg.toArray('be',bytes);// Instantiate Hmac_DRBG
var drbg=new elliptic.hmacDRBG({hash:this.hash,entropy:bkey,nonce:nonce,pers:options.pers,persEnc:options.persEnc});// Number of bytes to generate
var ns1=this.n.sub(new BN(1));for(var iter=0;true;iter++){var k=options.k?options.k(iter):new BN(drbg.generate(this.n.byteLength()));k=this._truncateToN(k,true);if(k.cmpn(1)<=0||k.cmp(ns1)>=0)continue;var kp=this.g.mul(k);if(kp.isInfinity())continue;var kpX=kp.getX();var r=kpX.umod(this.n);if(r.cmpn(0)===0)continue;var s=k.invm(this.n).mul(r.mul(key.getPrivate()).iadd(msg));s=s.umod(this.n);if(s.cmpn(0)===0)continue;var recoveryParam=(kp.getY().isOdd()?1:0)|(kpX.cmp(r)!==0?2:0);// Use complement of `s`, if it is > `n / 2`
if(options.canonical&&s.cmp(this.nh)>0){s=this.n.sub(s);recoveryParam^=1;}return new Signature({r:r,s:s,recoveryParam:recoveryParam});}};EC.prototype.verify=function verify(msg,signature,key,enc){msg=this._truncateToN(new BN(msg,16));key=this.keyFromPublic(key,enc);signature=new Signature(signature,'hex');// Perform primitive values validation
var r=signature.r;var s=signature.s;if(r.cmpn(1)<0||r.cmp(this.n)>=0)return false;if(s.cmpn(1)<0||s.cmp(this.n)>=0)return false;// Validate signature
var sinv=s.invm(this.n);var u1=sinv.mul(msg).umod(this.n);var u2=sinv.mul(r).umod(this.n);var p=this.g.mulAdd(u1,key.getPublic(),u2);if(p.isInfinity())return false;return p.getX().umod(this.n).cmp(r)===0;};EC.prototype.recoverPubKey=function(msg,signature,j,enc){assert((3&j)===j,'The recovery param is more than two bits');signature=new Signature(signature,enc);var n=this.n;var e=new BN(msg);var r=signature.r;var s=signature.s;// A set LSB signifies that the y-coordinate is odd
var isYOdd=j&1;var isSecondKey=j>>1;if(r.cmp(this.curve.p.umod(this.curve.n))>=0&&isSecondKey)throw new Error('Unable to find sencond key candinate');// 1.1. Let x = r + jn.
if(isSecondKey)r=this.curve.pointFromX(r.add(this.curve.n),isYOdd);else r=this.curve.pointFromX(r,isYOdd);var eNeg=n.sub(e);// 1.6.1 Compute Q = r^-1 (sR -  eG)
//               Q = r^-1 (sR + -eG)
var rInv=signature.r.invm(n);return this.g.mulAdd(eNeg,r,s).mul(rInv);};EC.prototype.getKeyRecoveryParam=function(e,signature,Q,enc){signature=new Signature(signature,enc);if(signature.recoveryParam!==null)return signature.recoveryParam;for(var i=0;i<4;i++){var Qprime;try{Qprime=this.recoverPubKey(e,signature,i);}catch(e){continue;}if(Qprime.eq(Q))return i;}throw new Error('Unable to find valid recovery factor');};},{"../../elliptic":134,"./key":142,"./signature":143,"bn.js":132}],142:[function(require,module,exports){'use strict';var BN=require('bn.js');function KeyPair(ec,options){this.ec=ec;this.priv=null;this.pub=null;// KeyPair(ec, { priv: ..., pub: ... })
if(options.priv)this._importPrivate(options.priv,options.privEnc);if(options.pub)this._importPublic(options.pub,options.pubEnc);}module.exports=KeyPair;KeyPair.fromPublic=function fromPublic(ec,pub,enc){if(pub instanceof KeyPair)return pub;return new KeyPair(ec,{pub:pub,pubEnc:enc});};KeyPair.fromPrivate=function fromPrivate(ec,priv,enc){if(priv instanceof KeyPair)return priv;return new KeyPair(ec,{priv:priv,privEnc:enc});};KeyPair.prototype.validate=function validate(){var pub=this.getPublic();if(pub.isInfinity())return{result:false,reason:'Invalid public key'};if(!pub.validate())return{result:false,reason:'Public key is not a point'};if(!pub.mul(this.ec.curve.n).isInfinity())return{result:false,reason:'Public key * N != O'};return{result:true,reason:null};};KeyPair.prototype.getPublic=function getPublic(compact,enc){// compact is optional argument
if(typeof compact==='string'){enc=compact;compact=null;}if(!this.pub)this.pub=this.ec.g.mul(this.priv);if(!enc)return this.pub;return this.pub.encode(enc,compact);};KeyPair.prototype.getPrivate=function getPrivate(enc){if(enc==='hex')return this.priv.toString(16,2);else return this.priv;};KeyPair.prototype._importPrivate=function _importPrivate(key,enc){this.priv=new BN(key,enc||16);// Ensure that the priv won't be bigger than n, otherwise we may fail
// in fixed multiplication method
this.priv=this.priv.umod(this.ec.curve.n);};KeyPair.prototype._importPublic=function _importPublic(key,enc){if(key.x||key.y){this.pub=this.ec.curve.point(key.x,key.y);return;}this.pub=this.ec.curve.decodePoint(key,enc);};// ECDH
KeyPair.prototype.derive=function derive(pub){return pub.mul(this.priv).getX();};// ECDSA
KeyPair.prototype.sign=function sign(msg,enc,options){return this.ec.sign(msg,this,enc,options);};KeyPair.prototype.verify=function verify(msg,signature){return this.ec.verify(msg,signature,this);};KeyPair.prototype.inspect=function inspect(){return'<Key priv: '+(this.priv&&this.priv.toString(16,2))+' pub: '+(this.pub&&this.pub.inspect())+' >';};},{"bn.js":132}],143:[function(require,module,exports){'use strict';var BN=require('bn.js');var elliptic=require('../../elliptic');var utils=elliptic.utils;var assert=utils.assert;function Signature(options,enc){if(options instanceof Signature)return options;if(this._importDER(options,enc))return;assert(options.r&&options.s,'Signature without r or s');this.r=new BN(options.r,16);this.s=new BN(options.s,16);if(options.recoveryParam===undefined)this.recoveryParam=null;else this.recoveryParam=options.recoveryParam;}module.exports=Signature;function Position(){this.place=0;}function getLength(buf,p){var initial=buf[p.place++];if(!(initial&0x80)){return initial;}var octetLen=initial&0xf;var val=0;for(var i=0,off=p.place;i<octetLen;i++,off++){val<<=8;val|=buf[off];}p.place=off;return val;}function rmPadding(buf){var i=0;var len=buf.length-1;while(!buf[i]&&!(buf[i+1]&0x80)&&i<len){i++;}if(i===0){return buf;}return buf.slice(i);}Signature.prototype._importDER=function _importDER(data,enc){data=utils.toArray(data,enc);var p=new Position();if(data[p.place++]!==0x30){return false;}var len=getLength(data,p);if(len+p.place!==data.length){return false;}if(data[p.place++]!==0x02){return false;}var rlen=getLength(data,p);var r=data.slice(p.place,rlen+p.place);p.place+=rlen;if(data[p.place++]!==0x02){return false;}var slen=getLength(data,p);if(data.length!==slen+p.place){return false;}var s=data.slice(p.place,slen+p.place);if(r[0]===0&&r[1]&0x80){r=r.slice(1);}if(s[0]===0&&s[1]&0x80){s=s.slice(1);}this.r=new BN(r);this.s=new BN(s);this.recoveryParam=null;return true;};function constructLength(arr,len){if(len<0x80){arr.push(len);return;}var octets=1+(Math.log(len)/Math.LN2>>>3);arr.push(octets|0x80);while(--octets){arr.push(len>>>(octets<<3)&0xff);}arr.push(len);}Signature.prototype.toDER=function toDER(enc){var r=this.r.toArray();var s=this.s.toArray();// Pad values
if(r[0]&0x80)r=[0].concat(r);// Pad values
if(s[0]&0x80)s=[0].concat(s);r=rmPadding(r);s=rmPadding(s);while(!s[0]&&!(s[1]&0x80)){s=s.slice(1);}var arr=[0x02];constructLength(arr,r.length);arr=arr.concat(r);arr.push(0x02);constructLength(arr,s.length);var backHalf=arr.concat(s);var res=[0x30];constructLength(res,backHalf.length);res=res.concat(backHalf);return utils.encode(res,enc);};},{"../../elliptic":134,"bn.js":132}],144:[function(require,module,exports){'use strict';var hash=require('hash.js');var elliptic=require('../../elliptic');var utils=elliptic.utils;var assert=utils.assert;var parseBytes=utils.parseBytes;var KeyPair=require('./key');var Signature=require('./signature');function EDDSA(curve){assert(curve==='ed25519','only tested with ed25519 so far');if(!(this instanceof EDDSA))return new EDDSA(curve);var curve=elliptic.curves[curve].curve;this.curve=curve;this.g=curve.g;this.g.precompute(curve.n.bitLength()+1);this.pointClass=curve.point().constructor;this.encodingLength=Math.ceil(curve.n.bitLength()/8);this.hash=hash.sha512;}module.exports=EDDSA;/**
* @param {Array|String} message - message bytes
* @param {Array|String|KeyPair} secret - secret bytes or a keypair
* @returns {Signature} - signature
*/EDDSA.prototype.sign=function sign(message,secret){message=parseBytes(message);var key=this.keyFromSecret(secret);var r=this.hashInt(key.messagePrefix(),message);var R=this.g.mul(r);var Rencoded=this.encodePoint(R);var s_=this.hashInt(Rencoded,key.pubBytes(),message).mul(key.priv());var S=r.add(s_).umod(this.curve.n);return this.makeSignature({R:R,S:S,Rencoded:Rencoded});};/**
* @param {Array} message - message bytes
* @param {Array|String|Signature} sig - sig bytes
* @param {Array|String|Point|KeyPair} pub - public key
* @returns {Boolean} - true if public key matches sig of message
*/EDDSA.prototype.verify=function verify(message,sig,pub){message=parseBytes(message);sig=this.makeSignature(sig);var key=this.keyFromPublic(pub);var h=this.hashInt(sig.Rencoded(),key.pubBytes(),message);var SG=this.g.mul(sig.S());var RplusAh=sig.R().add(key.pub().mul(h));return RplusAh.eq(SG);};EDDSA.prototype.hashInt=function hashInt(){var hash=this.hash();for(var i=0;i<arguments.length;i++)hash.update(arguments[i]);return utils.intFromLE(hash.digest()).umod(this.curve.n);};EDDSA.prototype.keyFromPublic=function keyFromPublic(pub){return KeyPair.fromPublic(this,pub);};EDDSA.prototype.keyFromSecret=function keyFromSecret(secret){return KeyPair.fromSecret(this,secret);};EDDSA.prototype.makeSignature=function makeSignature(sig){if(sig instanceof Signature)return sig;return new Signature(this,sig);};/**
* * https://tools.ietf.org/html/draft-josefsson-eddsa-ed25519-03#section-5.2
*
* EDDSA defines methods for encoding and decoding points and integers. These are
* helper convenience methods, that pass along to utility functions implied
* parameters.
*
*/EDDSA.prototype.encodePoint=function encodePoint(point){var enc=point.getY().toArray('le',this.encodingLength);enc[this.encodingLength-1]|=point.getX().isOdd()?0x80:0;return enc;};EDDSA.prototype.decodePoint=function decodePoint(bytes){bytes=utils.parseBytes(bytes);var lastIx=bytes.length-1;var normed=bytes.slice(0,lastIx).concat(bytes[lastIx]&~0x80);var xIsOdd=(bytes[lastIx]&0x80)!==0;var y=utils.intFromLE(normed);return this.curve.pointFromY(y,xIsOdd);};EDDSA.prototype.encodeInt=function encodeInt(num){return num.toArray('le',this.encodingLength);};EDDSA.prototype.decodeInt=function decodeInt(bytes){return utils.intFromLE(bytes);};EDDSA.prototype.isPoint=function isPoint(val){return val instanceof this.pointClass;};},{"../../elliptic":134,"./key":145,"./signature":146,"hash.js":151}],145:[function(require,module,exports){'use strict';var elliptic=require('../../elliptic');var utils=elliptic.utils;var assert=utils.assert;var parseBytes=utils.parseBytes;var cachedProperty=utils.cachedProperty;/**
* @param {EDDSA} eddsa - instance
* @param {Object} params - public/private key parameters
*
* @param {Array<Byte>} [params.secret] - secret seed bytes
* @param {Point} [params.pub] - public key point (aka `A` in eddsa terms)
* @param {Array<Byte>} [params.pub] - public key point encoded as bytes
*
*/function KeyPair(eddsa,params){this.eddsa=eddsa;this._secret=parseBytes(params.secret);if(eddsa.isPoint(params.pub))this._pub=params.pub;else this._pubBytes=parseBytes(params.pub);}KeyPair.fromPublic=function fromPublic(eddsa,pub){if(pub instanceof KeyPair)return pub;return new KeyPair(eddsa,{pub:pub});};KeyPair.fromSecret=function fromSecret(eddsa,secret){if(secret instanceof KeyPair)return secret;return new KeyPair(eddsa,{secret:secret});};KeyPair.prototype.secret=function secret(){return this._secret;};cachedProperty(KeyPair,function pubBytes(){return this.eddsa.encodePoint(this.pub());});cachedProperty(KeyPair,function pub(){if(this._pubBytes)return this.eddsa.decodePoint(this._pubBytes);return this.eddsa.g.mul(this.priv());});cachedProperty(KeyPair,function privBytes(){var eddsa=this.eddsa;var hash=this.hash();var lastIx=eddsa.encodingLength-1;var a=hash.slice(0,eddsa.encodingLength);a[0]&=248;a[lastIx]&=127;a[lastIx]|=64;return a;});cachedProperty(KeyPair,function priv(){return this.eddsa.decodeInt(this.privBytes());});cachedProperty(KeyPair,function hash(){return this.eddsa.hash().update(this.secret()).digest();});cachedProperty(KeyPair,function messagePrefix(){return this.hash().slice(this.eddsa.encodingLength);});KeyPair.prototype.sign=function sign(message){assert(this._secret,'KeyPair can only verify');return this.eddsa.sign(message,this);};KeyPair.prototype.verify=function verify(message,sig){return this.eddsa.verify(message,sig,this);};KeyPair.prototype.getSecret=function getSecret(enc){assert(this._secret,'KeyPair is public only');return utils.encode(this.secret(),enc);};KeyPair.prototype.getPublic=function getPublic(enc){return utils.encode(this.pubBytes(),enc);};module.exports=KeyPair;},{"../../elliptic":134}],146:[function(require,module,exports){'use strict';var BN=require('bn.js');var elliptic=require('../../elliptic');var utils=elliptic.utils;var assert=utils.assert;var cachedProperty=utils.cachedProperty;var parseBytes=utils.parseBytes;/**
* @param {EDDSA} eddsa - eddsa instance
* @param {Array<Bytes>|Object} sig -
* @param {Array<Bytes>|Point} [sig.R] - R point as Point or bytes
* @param {Array<Bytes>|bn} [sig.S] - S scalar as bn or bytes
* @param {Array<Bytes>} [sig.Rencoded] - R point encoded
* @param {Array<Bytes>} [sig.Sencoded] - S scalar encoded
*/function Signature(eddsa,sig){this.eddsa=eddsa;if(typeof sig!=='object')sig=parseBytes(sig);if(Array.isArray(sig)){sig={R:sig.slice(0,eddsa.encodingLength),S:sig.slice(eddsa.encodingLength)};}assert(sig.R&&sig.S,'Signature without R or S');if(eddsa.isPoint(sig.R))this._R=sig.R;if(sig.S instanceof BN)this._S=sig.S;this._Rencoded=Array.isArray(sig.R)?sig.R:sig.Rencoded;this._Sencoded=Array.isArray(sig.S)?sig.S:sig.Sencoded;}cachedProperty(Signature,function S(){return this.eddsa.decodeInt(this.Sencoded());});cachedProperty(Signature,function R(){return this.eddsa.decodePoint(this.Rencoded());});cachedProperty(Signature,function Rencoded(){return this.eddsa.encodePoint(this.R());});cachedProperty(Signature,function Sencoded(){return this.eddsa.encodeInt(this.S());});Signature.prototype.toBytes=function toBytes(){return this.Rencoded().concat(this.Sencoded());};Signature.prototype.toHex=function toHex(){return utils.encode(this.toBytes(),'hex').toUpperCase();};module.exports=Signature;},{"../../elliptic":134,"bn.js":132}],147:[function(require,module,exports){'use strict';var hash=require('hash.js');var elliptic=require('../elliptic');var utils=elliptic.utils;var assert=utils.assert;function HmacDRBG(options){if(!(this instanceof HmacDRBG))return new HmacDRBG(options);this.hash=options.hash;this.predResist=!!options.predResist;this.outLen=this.hash.outSize;this.minEntropy=options.minEntropy||this.hash.hmacStrength;this.reseed=null;this.reseedInterval=null;this.K=null;this.V=null;var entropy=utils.toArray(options.entropy,options.entropyEnc);var nonce=utils.toArray(options.nonce,options.nonceEnc);var pers=utils.toArray(options.pers,options.persEnc);assert(entropy.length>=this.minEntropy/8,'Not enough entropy. Minimum is: '+this.minEntropy+' bits');this._init(entropy,nonce,pers);}module.exports=HmacDRBG;HmacDRBG.prototype._init=function init(entropy,nonce,pers){var seed=entropy.concat(nonce).concat(pers);this.K=new Array(this.outLen/8);this.V=new Array(this.outLen/8);for(var i=0;i<this.V.length;i++){this.K[i]=0x00;this.V[i]=0x01;}this._update(seed);this.reseed=1;this.reseedInterval=0x1000000000000;// 2^48
};HmacDRBG.prototype._hmac=function hmac(){return new hash.hmac(this.hash,this.K);};HmacDRBG.prototype._update=function update(seed){var kmac=this._hmac().update(this.V).update([0x00]);if(seed)kmac=kmac.update(seed);this.K=kmac.digest();this.V=this._hmac().update(this.V).digest();if(!seed)return;this.K=this._hmac().update(this.V).update([0x01]).update(seed).digest();this.V=this._hmac().update(this.V).digest();};HmacDRBG.prototype.reseed=function reseed(entropy,entropyEnc,add,addEnc){// Optional entropy enc
if(typeof entropyEnc!=='string'){addEnc=add;add=entropyEnc;entropyEnc=null;}entropy=utils.toBuffer(entropy,entropyEnc);add=utils.toBuffer(add,addEnc);assert(entropy.length>=this.minEntropy/8,'Not enough entropy. Minimum is: '+this.minEntropy+' bits');this._update(entropy.concat(add||[]));this.reseed=1;};HmacDRBG.prototype.generate=function generate(len,enc,add,addEnc){if(this.reseed>this.reseedInterval)throw new Error('Reseed is required');// Optional encoding
if(typeof enc!=='string'){addEnc=add;add=enc;enc=null;}// Optional additional data
if(add){add=utils.toArray(add,addEnc);this._update(add);}var temp=[];while(temp.length<len){this.V=this._hmac().update(this.V).digest();temp=temp.concat(this.V);}var res=temp.slice(0,len);this._update(add);this.reseed++;return utils.encode(res,enc);};},{"../elliptic":134,"hash.js":151}],148:[function(require,module,exports){module.exports={doubles:{step:4,points:[['e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a','f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821'],['8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508','11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf'],['175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739','d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695'],['363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640','4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9'],['8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c','4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36'],['723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda','96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f'],['eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa','5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999'],['100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0','cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09'],['e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d','9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d'],['feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d','e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088'],['da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1','9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d'],['53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0','5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8'],['8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047','10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a'],['385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862','283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453'],['6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7','7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160'],['3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd','56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0'],['85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83','7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6'],['948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a','53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589'],['6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8','bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17'],['e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d','4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda'],['e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725','7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd'],['213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754','4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2'],['4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c','17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6'],['fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6','6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f'],['76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39','c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01'],['c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891','893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3'],['d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b','febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f'],['b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03','2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7'],['e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d','eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78'],['a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070','7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1'],['90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4','e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150'],['8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da','662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82'],['e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11','1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc'],['8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e','efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b'],['e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41','2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51'],['b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef','67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45'],['d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8','db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120'],['324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d','648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84'],['4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96','35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d'],['9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd','ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d'],['6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5','9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8'],['a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266','40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8'],['7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71','34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac'],['928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac','c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f'],['85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751','1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962'],['ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e','493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907'],['827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241','c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec'],['eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3','be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d'],['e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f','4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414'],['1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19','aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd'],['146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be','b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0'],['fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9','6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811'],['da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2','8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1'],['a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13','7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c'],['174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c','ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73'],['959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba','2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd'],['d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151','e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405'],['64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073','d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589'],['8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458','38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e'],['13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b','69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27'],['bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366','d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1'],['8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa','40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482'],['8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0','620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945'],['dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787','7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573'],['f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e','ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82']]},naf:{wnd:7,points:[['f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9','388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672'],['2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4','d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6'],['5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc','6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da'],['acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe','cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37'],['774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb','d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b'],['f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8','ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81'],['d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e','581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58'],['defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34','4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77'],['2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c','85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a'],['352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5','321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c'],['2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f','2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67'],['9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714','73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402'],['daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729','a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55'],['c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db','2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482'],['6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4','e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82'],['1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5','b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396'],['605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479','2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49'],['62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d','80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf'],['80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f','1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a'],['7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb','d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7'],['d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9','eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933'],['49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963','758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a'],['77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74','958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6'],['f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530','e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37'],['463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b','5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e'],['f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247','cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6'],['caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1','cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476'],['2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120','4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40'],['7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435','91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61'],['754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18','673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683'],['e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8','59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5'],['186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb','3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b'],['df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f','55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417'],['5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143','efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868'],['290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba','e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a'],['af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45','f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6'],['766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a','744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996'],['59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e','c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e'],['f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8','e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d'],['7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c','30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2'],['948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519','e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e'],['7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab','100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437'],['3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca','ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311'],['d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf','8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4'],['1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610','68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575'],['733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4','f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d'],['15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c','d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d'],['a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940','edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629'],['e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980','a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06'],['311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3','66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374'],['34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf','9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee'],['f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63','4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1'],['d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448','fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b'],['32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf','5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661'],['7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5','8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6'],['ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6','8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e'],['16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5','5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d'],['eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99','f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc'],['78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51','f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4'],['494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5','42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c'],['a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5','204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b'],['c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997','4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913'],['841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881','73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154'],['5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5','39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865'],['36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66','d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc'],['336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726','ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224'],['8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede','6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e'],['1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94','60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6'],['85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31','3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511'],['29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51','b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b'],['a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252','ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2'],['4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5','cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c'],['d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b','6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3'],['ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4','322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d'],['af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f','6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700'],['e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889','2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4'],['591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246','b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196'],['11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984','998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4'],['3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a','b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257'],['cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030','bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13'],['c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197','6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096'],['c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593','c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38'],['a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef','21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f'],['347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38','60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448'],['da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a','49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a'],['c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111','5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4'],['4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502','7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437'],['3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea','be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7'],['cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26','8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d'],['b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986','39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a'],['d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e','62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54'],['48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4','25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77'],['dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda','ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517'],['6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859','cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10'],['e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f','f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125'],['eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c','6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e'],['13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942','fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1'],['ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a','1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2'],['b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80','5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423'],['ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d','438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8'],['8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1','cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758'],['52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63','c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375'],['e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352','6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d'],['7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193','ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec'],['5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00','9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0'],['32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58','ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c'],['e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7','d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4'],['8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8','c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f'],['4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e','67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649'],['3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d','cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826'],['674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b','299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5'],['d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f','f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87'],['30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6','462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b'],['be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297','62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc'],['93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a','7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c'],['b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c','ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f'],['d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52','4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a'],['d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb','bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46'],['463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065','bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f'],['7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917','603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03'],['74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9','cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08'],['30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3','553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8'],['9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57','712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373'],['176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66','ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3'],['75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8','9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8'],['809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721','9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1'],['1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180','4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9']]}};},{}],149:[function(require,module,exports){'use strict';var utils=exports;var BN=require('bn.js');utils.assert=function assert(val,msg){if(!val)throw new Error(msg||'Assertion failed');};function toArray(msg,enc){if(Array.isArray(msg))return msg.slice();if(!msg)return[];var res=[];if(typeof msg!=='string'){for(var i=0;i<msg.length;i++)res[i]=msg[i]|0;return res;}if(!enc){for(var i=0;i<msg.length;i++){var c=msg.charCodeAt(i);var hi=c>>8;var lo=c&0xff;if(hi)res.push(hi,lo);else res.push(lo);}}else if(enc==='hex'){msg=msg.replace(/[^a-z0-9]+/ig,'');if(msg.length%2!==0)msg='0'+msg;for(var i=0;i<msg.length;i+=2)res.push(parseInt(msg[i]+msg[i+1],16));}return res;}utils.toArray=toArray;function zero2(word){if(word.length===1)return'0'+word;else return word;}utils.zero2=zero2;function toHex(msg){var res='';for(var i=0;i<msg.length;i++)res+=zero2(msg[i].toString(16));return res;}utils.toHex=toHex;utils.encode=function encode(arr,enc){if(enc==='hex')return toHex(arr);else return arr;};// Represent num in a w-NAF form
function getNAF(num,w){var naf=[];var ws=1<<w+1;var k=num.clone();while(k.cmpn(1)>=0){var z;if(k.isOdd()){var mod=k.andln(ws-1);if(mod>(ws>>1)-1)z=(ws>>1)-mod;else z=mod;k.isubn(z);}else{z=0;}naf.push(z);// Optimization, shift by word if possible
var shift=k.cmpn(0)!==0&&k.andln(ws-1)===0?w+1:1;for(var i=1;i<shift;i++)naf.push(0);k.iushrn(shift);}return naf;}utils.getNAF=getNAF;// Represent k1, k2 in a Joint Sparse Form
function getJSF(k1,k2){var jsf=[[],[]];k1=k1.clone();k2=k2.clone();var d1=0;var d2=0;while(k1.cmpn(-d1)>0||k2.cmpn(-d2)>0){// First phase
var m14=k1.andln(3)+d1&3;var m24=k2.andln(3)+d2&3;if(m14===3)m14=-1;if(m24===3)m24=-1;var u1;if((m14&1)===0){u1=0;}else{var m8=k1.andln(7)+d1&7;if((m8===3||m8===5)&&m24===2)u1=-m14;else u1=m14;}jsf[0].push(u1);var u2;if((m24&1)===0){u2=0;}else{var m8=k2.andln(7)+d2&7;if((m8===3||m8===5)&&m14===2)u2=-m24;else u2=m24;}jsf[1].push(u2);// Second phase
if(2*d1===u1+1)d1=1-d1;if(2*d2===u2+1)d2=1-d2;k1.iushrn(1);k2.iushrn(1);}return jsf;}utils.getJSF=getJSF;function cachedProperty(obj,computer){var name=computer.name;var key='_'+name;obj.prototype[name]=function cachedProperty(){return this[key]!==undefined?this[key]:this[key]=computer.call(this);};}utils.cachedProperty=cachedProperty;function parseBytes(bytes){return typeof bytes==='string'?utils.toArray(bytes,'hex'):bytes;}utils.parseBytes=parseBytes;function intFromLE(bytes){return new BN(bytes,'hex','le');}utils.intFromLE=intFromLE;},{"bn.js":132}],150:[function(require,module,exports){var r;module.exports=function rand(len){if(!r)r=new Rand(null);return r.generate(len);};function Rand(rand){this.rand=rand;}module.exports.Rand=Rand;Rand.prototype.generate=function generate(len){return this._rand(len);};if(typeof window==='object'){if(window.crypto&&window.crypto.getRandomValues){// Modern browsers
Rand.prototype._rand=function _rand(n){var arr=new Uint8Array(n);window.crypto.getRandomValues(arr);return arr;};}else if(window.msCrypto&&window.msCrypto.getRandomValues){// IE
Rand.prototype._rand=function _rand(n){var arr=new Uint8Array(n);window.msCrypto.getRandomValues(arr);return arr;};}else{// Old junk
Rand.prototype._rand=function(){throw new Error('Not implemented yet');};}}else{// Node.js or Web worker
try{var crypto=require('cry'+'pto');Rand.prototype._rand=function _rand(n){return crypto.randomBytes(n);};}catch(e){// Emulate crypto API using randy
Rand.prototype._rand=function _rand(n){var res=new Uint8Array(n);for(var i=0;i<res.length;i++)res[i]=this.rand.getByte();return res;};}}},{}],151:[function(require,module,exports){var hash=exports;hash.utils=require('./hash/utils');hash.common=require('./hash/common');hash.sha=require('./hash/sha');hash.ripemd=require('./hash/ripemd');hash.hmac=require('./hash/hmac');// Proxy hash functions to the main object
hash.sha1=hash.sha.sha1;hash.sha256=hash.sha.sha256;hash.sha224=hash.sha.sha224;hash.sha384=hash.sha.sha384;hash.sha512=hash.sha.sha512;hash.ripemd160=hash.ripemd.ripemd160;},{"./hash/common":152,"./hash/hmac":153,"./hash/ripemd":154,"./hash/sha":155,"./hash/utils":156}],152:[function(require,module,exports){var hash=require('../hash');var utils=hash.utils;var assert=utils.assert;function BlockHash(){this.pending=null;this.pendingTotal=0;this.blockSize=this.constructor.blockSize;this.outSize=this.constructor.outSize;this.hmacStrength=this.constructor.hmacStrength;this.padLength=this.constructor.padLength/8;this.endian='big';this._delta8=this.blockSize/8;this._delta32=this.blockSize/32;}exports.BlockHash=BlockHash;BlockHash.prototype.update=function update(msg,enc){// Convert message to array, pad it, and join into 32bit blocks
msg=utils.toArray(msg,enc);if(!this.pending)this.pending=msg;else this.pending=this.pending.concat(msg);this.pendingTotal+=msg.length;// Enough data, try updating
if(this.pending.length>=this._delta8){msg=this.pending;// Process pending data in blocks
var r=msg.length%this._delta8;this.pending=msg.slice(msg.length-r,msg.length);if(this.pending.length===0)this.pending=null;msg=utils.join32(msg,0,msg.length-r,this.endian);for(var i=0;i<msg.length;i+=this._delta32)this._update(msg,i,i+this._delta32);}return this;};BlockHash.prototype.digest=function digest(enc){this.update(this._pad());assert(this.pending===null);return this._digest(enc);};BlockHash.prototype._pad=function pad(){var len=this.pendingTotal;var bytes=this._delta8;var k=bytes-(len+this.padLength)%bytes;var res=new Array(k+this.padLength);res[0]=0x80;for(var i=1;i<k;i++)res[i]=0;// Append length
len<<=3;if(this.endian==='big'){for(var t=8;t<this.padLength;t++)res[i++]=0;res[i++]=0;res[i++]=0;res[i++]=0;res[i++]=0;res[i++]=len>>>24&0xff;res[i++]=len>>>16&0xff;res[i++]=len>>>8&0xff;res[i++]=len&0xff;}else{res[i++]=len&0xff;res[i++]=len>>>8&0xff;res[i++]=len>>>16&0xff;res[i++]=len>>>24&0xff;res[i++]=0;res[i++]=0;res[i++]=0;res[i++]=0;for(var t=8;t<this.padLength;t++)res[i++]=0;}return res;};},{"../hash":151}],153:[function(require,module,exports){var hmac=exports;var hash=require('../hash');var utils=hash.utils;var assert=utils.assert;function Hmac(hash,key,enc){if(!(this instanceof Hmac))return new Hmac(hash,key,enc);this.Hash=hash;this.blockSize=hash.blockSize/8;this.outSize=hash.outSize/8;this.inner=null;this.outer=null;this._init(utils.toArray(key,enc));}module.exports=Hmac;Hmac.prototype._init=function init(key){// Shorten key, if needed
if(key.length>this.blockSize)key=new this.Hash().update(key).digest();assert(key.length<=this.blockSize);// Add padding to key
for(var i=key.length;i<this.blockSize;i++)key.push(0);for(var i=0;i<key.length;i++)key[i]^=0x36;this.inner=new this.Hash().update(key);// 0x36 ^ 0x5c = 0x6a
for(var i=0;i<key.length;i++)key[i]^=0x6a;this.outer=new this.Hash().update(key);};Hmac.prototype.update=function update(msg,enc){this.inner.update(msg,enc);return this;};Hmac.prototype.digest=function digest(enc){this.outer.update(this.inner.digest());return this.outer.digest(enc);};},{"../hash":151}],154:[function(require,module,exports){var hash=require('../hash');var utils=hash.utils;var rotl32=utils.rotl32;var sum32=utils.sum32;var sum32_3=utils.sum32_3;var sum32_4=utils.sum32_4;var BlockHash=hash.common.BlockHash;function RIPEMD160(){if(!(this instanceof RIPEMD160))return new RIPEMD160();BlockHash.call(this);this.h=[0x67452301,0xefcdab89,0x98badcfe,0x10325476,0xc3d2e1f0];this.endian='little';}utils.inherits(RIPEMD160,BlockHash);exports.ripemd160=RIPEMD160;RIPEMD160.blockSize=512;RIPEMD160.outSize=160;RIPEMD160.hmacStrength=192;RIPEMD160.padLength=64;RIPEMD160.prototype._update=function update(msg,start){var A=this.h[0];var B=this.h[1];var C=this.h[2];var D=this.h[3];var E=this.h[4];var Ah=A;var Bh=B;var Ch=C;var Dh=D;var Eh=E;for(var j=0;j<80;j++){var T=sum32(rotl32(sum32_4(A,f(j,B,C,D),msg[r[j]+start],K(j)),s[j]),E);A=E;E=D;D=rotl32(C,10);C=B;B=T;T=sum32(rotl32(sum32_4(Ah,f(79-j,Bh,Ch,Dh),msg[rh[j]+start],Kh(j)),sh[j]),Eh);Ah=Eh;Eh=Dh;Dh=rotl32(Ch,10);Ch=Bh;Bh=T;}T=sum32_3(this.h[1],C,Dh);this.h[1]=sum32_3(this.h[2],D,Eh);this.h[2]=sum32_3(this.h[3],E,Ah);this.h[3]=sum32_3(this.h[4],A,Bh);this.h[4]=sum32_3(this.h[0],B,Ch);this.h[0]=T;};RIPEMD160.prototype._digest=function digest(enc){if(enc==='hex')return utils.toHex32(this.h,'little');else return utils.split32(this.h,'little');};function f(j,x,y,z){if(j<=15)return x^y^z;else if(j<=31)return x&y|~x&z;else if(j<=47)return(x|~y)^z;else if(j<=63)return x&z|y&~z;else return x^(y|~z);}function K(j){if(j<=15)return 0x00000000;else if(j<=31)return 0x5a827999;else if(j<=47)return 0x6ed9eba1;else if(j<=63)return 0x8f1bbcdc;else return 0xa953fd4e;}function Kh(j){if(j<=15)return 0x50a28be6;else if(j<=31)return 0x5c4dd124;else if(j<=47)return 0x6d703ef3;else if(j<=63)return 0x7a6d76e9;else return 0x00000000;}var r=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13];var rh=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11];var s=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6];var sh=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11];},{"../hash":151}],155:[function(require,module,exports){var hash=require('../hash');var utils=hash.utils;var assert=utils.assert;var rotr32=utils.rotr32;var rotl32=utils.rotl32;var sum32=utils.sum32;var sum32_4=utils.sum32_4;var sum32_5=utils.sum32_5;var rotr64_hi=utils.rotr64_hi;var rotr64_lo=utils.rotr64_lo;var shr64_hi=utils.shr64_hi;var shr64_lo=utils.shr64_lo;var sum64=utils.sum64;var sum64_hi=utils.sum64_hi;var sum64_lo=utils.sum64_lo;var sum64_4_hi=utils.sum64_4_hi;var sum64_4_lo=utils.sum64_4_lo;var sum64_5_hi=utils.sum64_5_hi;var sum64_5_lo=utils.sum64_5_lo;var BlockHash=hash.common.BlockHash;var sha256_K=[0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];var sha512_K=[0x428a2f98,0xd728ae22,0x71374491,0x23ef65cd,0xb5c0fbcf,0xec4d3b2f,0xe9b5dba5,0x8189dbbc,0x3956c25b,0xf348b538,0x59f111f1,0xb605d019,0x923f82a4,0xaf194f9b,0xab1c5ed5,0xda6d8118,0xd807aa98,0xa3030242,0x12835b01,0x45706fbe,0x243185be,0x4ee4b28c,0x550c7dc3,0xd5ffb4e2,0x72be5d74,0xf27b896f,0x80deb1fe,0x3b1696b1,0x9bdc06a7,0x25c71235,0xc19bf174,0xcf692694,0xe49b69c1,0x9ef14ad2,0xefbe4786,0x384f25e3,0x0fc19dc6,0x8b8cd5b5,0x240ca1cc,0x77ac9c65,0x2de92c6f,0x592b0275,0x4a7484aa,0x6ea6e483,0x5cb0a9dc,0xbd41fbd4,0x76f988da,0x831153b5,0x983e5152,0xee66dfab,0xa831c66d,0x2db43210,0xb00327c8,0x98fb213f,0xbf597fc7,0xbeef0ee4,0xc6e00bf3,0x3da88fc2,0xd5a79147,0x930aa725,0x06ca6351,0xe003826f,0x14292967,0x0a0e6e70,0x27b70a85,0x46d22ffc,0x2e1b2138,0x5c26c926,0x4d2c6dfc,0x5ac42aed,0x53380d13,0x9d95b3df,0x650a7354,0x8baf63de,0x766a0abb,0x3c77b2a8,0x81c2c92e,0x47edaee6,0x92722c85,0x1482353b,0xa2bfe8a1,0x4cf10364,0xa81a664b,0xbc423001,0xc24b8b70,0xd0f89791,0xc76c51a3,0x0654be30,0xd192e819,0xd6ef5218,0xd6990624,0x5565a910,0xf40e3585,0x5771202a,0x106aa070,0x32bbd1b8,0x19a4c116,0xb8d2d0c8,0x1e376c08,0x5141ab53,0x2748774c,0xdf8eeb99,0x34b0bcb5,0xe19b48a8,0x391c0cb3,0xc5c95a63,0x4ed8aa4a,0xe3418acb,0x5b9cca4f,0x7763e373,0x682e6ff3,0xd6b2b8a3,0x748f82ee,0x5defb2fc,0x78a5636f,0x43172f60,0x84c87814,0xa1f0ab72,0x8cc70208,0x1a6439ec,0x90befffa,0x23631e28,0xa4506ceb,0xde82bde9,0xbef9a3f7,0xb2c67915,0xc67178f2,0xe372532b,0xca273ece,0xea26619c,0xd186b8c7,0x21c0c207,0xeada7dd6,0xcde0eb1e,0xf57d4f7f,0xee6ed178,0x06f067aa,0x72176fba,0x0a637dc5,0xa2c898a6,0x113f9804,0xbef90dae,0x1b710b35,0x131c471b,0x28db77f5,0x23047d84,0x32caab7b,0x40c72493,0x3c9ebe0a,0x15c9bebc,0x431d67c4,0x9c100d4c,0x4cc5d4be,0xcb3e42b6,0x597f299c,0xfc657e2a,0x5fcb6fab,0x3ad6faec,0x6c44198c,0x4a475817];var sha1_K=[0x5A827999,0x6ED9EBA1,0x8F1BBCDC,0xCA62C1D6];function SHA256(){if(!(this instanceof SHA256))return new SHA256();BlockHash.call(this);this.h=[0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];this.k=sha256_K;this.W=new Array(64);}utils.inherits(SHA256,BlockHash);exports.sha256=SHA256;SHA256.blockSize=512;SHA256.outSize=256;SHA256.hmacStrength=192;SHA256.padLength=64;SHA256.prototype._update=function _update(msg,start){var W=this.W;for(var i=0;i<16;i++)W[i]=msg[start+i];for(;i<W.length;i++)W[i]=sum32_4(g1_256(W[i-2]),W[i-7],g0_256(W[i-15]),W[i-16]);var a=this.h[0];var b=this.h[1];var c=this.h[2];var d=this.h[3];var e=this.h[4];var f=this.h[5];var g=this.h[6];var h=this.h[7];assert(this.k.length===W.length);for(var i=0;i<W.length;i++){var T1=sum32_5(h,s1_256(e),ch32(e,f,g),this.k[i],W[i]);var T2=sum32(s0_256(a),maj32(a,b,c));h=g;g=f;f=e;e=sum32(d,T1);d=c;c=b;b=a;a=sum32(T1,T2);}this.h[0]=sum32(this.h[0],a);this.h[1]=sum32(this.h[1],b);this.h[2]=sum32(this.h[2],c);this.h[3]=sum32(this.h[3],d);this.h[4]=sum32(this.h[4],e);this.h[5]=sum32(this.h[5],f);this.h[6]=sum32(this.h[6],g);this.h[7]=sum32(this.h[7],h);};SHA256.prototype._digest=function digest(enc){if(enc==='hex')return utils.toHex32(this.h,'big');else return utils.split32(this.h,'big');};function SHA224(){if(!(this instanceof SHA224))return new SHA224();SHA256.call(this);this.h=[0xc1059ed8,0x367cd507,0x3070dd17,0xf70e5939,0xffc00b31,0x68581511,0x64f98fa7,0xbefa4fa4];}utils.inherits(SHA224,SHA256);exports.sha224=SHA224;SHA224.blockSize=512;SHA224.outSize=224;SHA224.hmacStrength=192;SHA224.padLength=64;SHA224.prototype._digest=function digest(enc){// Just truncate output
if(enc==='hex')return utils.toHex32(this.h.slice(0,7),'big');else return utils.split32(this.h.slice(0,7),'big');};function SHA512(){if(!(this instanceof SHA512))return new SHA512();BlockHash.call(this);this.h=[0x6a09e667,0xf3bcc908,0xbb67ae85,0x84caa73b,0x3c6ef372,0xfe94f82b,0xa54ff53a,0x5f1d36f1,0x510e527f,0xade682d1,0x9b05688c,0x2b3e6c1f,0x1f83d9ab,0xfb41bd6b,0x5be0cd19,0x137e2179];this.k=sha512_K;this.W=new Array(160);}utils.inherits(SHA512,BlockHash);exports.sha512=SHA512;SHA512.blockSize=1024;SHA512.outSize=512;SHA512.hmacStrength=192;SHA512.padLength=128;SHA512.prototype._prepareBlock=function _prepareBlock(msg,start){var W=this.W;// 32 x 32bit words
for(var i=0;i<32;i++)W[i]=msg[start+i];for(;i<W.length;i+=2){var c0_hi=g1_512_hi(W[i-4],W[i-3]);// i - 2
var c0_lo=g1_512_lo(W[i-4],W[i-3]);var c1_hi=W[i-14];// i - 7
var c1_lo=W[i-13];var c2_hi=g0_512_hi(W[i-30],W[i-29]);// i - 15
var c2_lo=g0_512_lo(W[i-30],W[i-29]);var c3_hi=W[i-32];// i - 16
var c3_lo=W[i-31];W[i]=sum64_4_hi(c0_hi,c0_lo,c1_hi,c1_lo,c2_hi,c2_lo,c3_hi,c3_lo);W[i+1]=sum64_4_lo(c0_hi,c0_lo,c1_hi,c1_lo,c2_hi,c2_lo,c3_hi,c3_lo);}};SHA512.prototype._update=function _update(msg,start){this._prepareBlock(msg,start);var W=this.W;var ah=this.h[0];var al=this.h[1];var bh=this.h[2];var bl=this.h[3];var ch=this.h[4];var cl=this.h[5];var dh=this.h[6];var dl=this.h[7];var eh=this.h[8];var el=this.h[9];var fh=this.h[10];var fl=this.h[11];var gh=this.h[12];var gl=this.h[13];var hh=this.h[14];var hl=this.h[15];assert(this.k.length===W.length);for(var i=0;i<W.length;i+=2){var c0_hi=hh;var c0_lo=hl;var c1_hi=s1_512_hi(eh,el);var c1_lo=s1_512_lo(eh,el);var c2_hi=ch64_hi(eh,el,fh,fl,gh,gl);var c2_lo=ch64_lo(eh,el,fh,fl,gh,gl);var c3_hi=this.k[i];var c3_lo=this.k[i+1];var c4_hi=W[i];var c4_lo=W[i+1];var T1_hi=sum64_5_hi(c0_hi,c0_lo,c1_hi,c1_lo,c2_hi,c2_lo,c3_hi,c3_lo,c4_hi,c4_lo);var T1_lo=sum64_5_lo(c0_hi,c0_lo,c1_hi,c1_lo,c2_hi,c2_lo,c3_hi,c3_lo,c4_hi,c4_lo);var c0_hi=s0_512_hi(ah,al);var c0_lo=s0_512_lo(ah,al);var c1_hi=maj64_hi(ah,al,bh,bl,ch,cl);var c1_lo=maj64_lo(ah,al,bh,bl,ch,cl);var T2_hi=sum64_hi(c0_hi,c0_lo,c1_hi,c1_lo);var T2_lo=sum64_lo(c0_hi,c0_lo,c1_hi,c1_lo);hh=gh;hl=gl;gh=fh;gl=fl;fh=eh;fl=el;eh=sum64_hi(dh,dl,T1_hi,T1_lo);el=sum64_lo(dl,dl,T1_hi,T1_lo);dh=ch;dl=cl;ch=bh;cl=bl;bh=ah;bl=al;ah=sum64_hi(T1_hi,T1_lo,T2_hi,T2_lo);al=sum64_lo(T1_hi,T1_lo,T2_hi,T2_lo);}sum64(this.h,0,ah,al);sum64(this.h,2,bh,bl);sum64(this.h,4,ch,cl);sum64(this.h,6,dh,dl);sum64(this.h,8,eh,el);sum64(this.h,10,fh,fl);sum64(this.h,12,gh,gl);sum64(this.h,14,hh,hl);};SHA512.prototype._digest=function digest(enc){if(enc==='hex')return utils.toHex32(this.h,'big');else return utils.split32(this.h,'big');};function SHA384(){if(!(this instanceof SHA384))return new SHA384();SHA512.call(this);this.h=[0xcbbb9d5d,0xc1059ed8,0x629a292a,0x367cd507,0x9159015a,0x3070dd17,0x152fecd8,0xf70e5939,0x67332667,0xffc00b31,0x8eb44a87,0x68581511,0xdb0c2e0d,0x64f98fa7,0x47b5481d,0xbefa4fa4];}utils.inherits(SHA384,SHA512);exports.sha384=SHA384;SHA384.blockSize=1024;SHA384.outSize=384;SHA384.hmacStrength=192;SHA384.padLength=128;SHA384.prototype._digest=function digest(enc){if(enc==='hex')return utils.toHex32(this.h.slice(0,12),'big');else return utils.split32(this.h.slice(0,12),'big');};function SHA1(){if(!(this instanceof SHA1))return new SHA1();BlockHash.call(this);this.h=[0x67452301,0xefcdab89,0x98badcfe,0x10325476,0xc3d2e1f0];this.W=new Array(80);}utils.inherits(SHA1,BlockHash);exports.sha1=SHA1;SHA1.blockSize=512;SHA1.outSize=160;SHA1.hmacStrength=80;SHA1.padLength=64;SHA1.prototype._update=function _update(msg,start){var W=this.W;for(var i=0;i<16;i++)W[i]=msg[start+i];for(;i<W.length;i++)W[i]=rotl32(W[i-3]^W[i-8]^W[i-14]^W[i-16],1);var a=this.h[0];var b=this.h[1];var c=this.h[2];var d=this.h[3];var e=this.h[4];for(var i=0;i<W.length;i++){var s=~~(i/20);var t=sum32_5(rotl32(a,5),ft_1(s,b,c,d),e,W[i],sha1_K[s]);e=d;d=c;c=rotl32(b,30);b=a;a=t;}this.h[0]=sum32(this.h[0],a);this.h[1]=sum32(this.h[1],b);this.h[2]=sum32(this.h[2],c);this.h[3]=sum32(this.h[3],d);this.h[4]=sum32(this.h[4],e);};SHA1.prototype._digest=function digest(enc){if(enc==='hex')return utils.toHex32(this.h,'big');else return utils.split32(this.h,'big');};function ch32(x,y,z){return x&y^~x&z;}function maj32(x,y,z){return x&y^x&z^y&z;}function p32(x,y,z){return x^y^z;}function s0_256(x){return rotr32(x,2)^rotr32(x,13)^rotr32(x,22);}function s1_256(x){return rotr32(x,6)^rotr32(x,11)^rotr32(x,25);}function g0_256(x){return rotr32(x,7)^rotr32(x,18)^x>>>3;}function g1_256(x){return rotr32(x,17)^rotr32(x,19)^x>>>10;}function ft_1(s,x,y,z){if(s===0)return ch32(x,y,z);if(s===1||s===3)return p32(x,y,z);if(s===2)return maj32(x,y,z);}function ch64_hi(xh,xl,yh,yl,zh,zl){var r=xh&yh^~xh&zh;if(r<0)r+=0x100000000;return r;}function ch64_lo(xh,xl,yh,yl,zh,zl){var r=xl&yl^~xl&zl;if(r<0)r+=0x100000000;return r;}function maj64_hi(xh,xl,yh,yl,zh,zl){var r=xh&yh^xh&zh^yh&zh;if(r<0)r+=0x100000000;return r;}function maj64_lo(xh,xl,yh,yl,zh,zl){var r=xl&yl^xl&zl^yl&zl;if(r<0)r+=0x100000000;return r;}function s0_512_hi(xh,xl){var c0_hi=rotr64_hi(xh,xl,28);var c1_hi=rotr64_hi(xl,xh,2);// 34
var c2_hi=rotr64_hi(xl,xh,7);// 39
var r=c0_hi^c1_hi^c2_hi;if(r<0)r+=0x100000000;return r;}function s0_512_lo(xh,xl){var c0_lo=rotr64_lo(xh,xl,28);var c1_lo=rotr64_lo(xl,xh,2);// 34
var c2_lo=rotr64_lo(xl,xh,7);// 39
var r=c0_lo^c1_lo^c2_lo;if(r<0)r+=0x100000000;return r;}function s1_512_hi(xh,xl){var c0_hi=rotr64_hi(xh,xl,14);var c1_hi=rotr64_hi(xh,xl,18);var c2_hi=rotr64_hi(xl,xh,9);// 41
var r=c0_hi^c1_hi^c2_hi;if(r<0)r+=0x100000000;return r;}function s1_512_lo(xh,xl){var c0_lo=rotr64_lo(xh,xl,14);var c1_lo=rotr64_lo(xh,xl,18);var c2_lo=rotr64_lo(xl,xh,9);// 41
var r=c0_lo^c1_lo^c2_lo;if(r<0)r+=0x100000000;return r;}function g0_512_hi(xh,xl){var c0_hi=rotr64_hi(xh,xl,1);var c1_hi=rotr64_hi(xh,xl,8);var c2_hi=shr64_hi(xh,xl,7);var r=c0_hi^c1_hi^c2_hi;if(r<0)r+=0x100000000;return r;}function g0_512_lo(xh,xl){var c0_lo=rotr64_lo(xh,xl,1);var c1_lo=rotr64_lo(xh,xl,8);var c2_lo=shr64_lo(xh,xl,7);var r=c0_lo^c1_lo^c2_lo;if(r<0)r+=0x100000000;return r;}function g1_512_hi(xh,xl){var c0_hi=rotr64_hi(xh,xl,19);var c1_hi=rotr64_hi(xl,xh,29);// 61
var c2_hi=shr64_hi(xh,xl,6);var r=c0_hi^c1_hi^c2_hi;if(r<0)r+=0x100000000;return r;}function g1_512_lo(xh,xl){var c0_lo=rotr64_lo(xh,xl,19);var c1_lo=rotr64_lo(xl,xh,29);// 61
var c2_lo=shr64_lo(xh,xl,6);var r=c0_lo^c1_lo^c2_lo;if(r<0)r+=0x100000000;return r;}},{"../hash":151}],156:[function(require,module,exports){var utils=exports;var inherits=require('inherits');function toArray(msg,enc){if(Array.isArray(msg))return msg.slice();if(!msg)return[];var res=[];if(typeof msg==='string'){if(!enc){for(var i=0;i<msg.length;i++){var c=msg.charCodeAt(i);var hi=c>>8;var lo=c&0xff;if(hi)res.push(hi,lo);else res.push(lo);}}else if(enc==='hex'){msg=msg.replace(/[^a-z0-9]+/ig,'');if(msg.length%2!==0)msg='0'+msg;for(var i=0;i<msg.length;i+=2)res.push(parseInt(msg[i]+msg[i+1],16));}}else{for(var i=0;i<msg.length;i++)res[i]=msg[i]|0;}return res;}utils.toArray=toArray;function toHex(msg){var res='';for(var i=0;i<msg.length;i++)res+=zero2(msg[i].toString(16));return res;}utils.toHex=toHex;function htonl(w){var res=w>>>24|w>>>8&0xff00|w<<8&0xff0000|(w&0xff)<<24;return res>>>0;}utils.htonl=htonl;function toHex32(msg,endian){var res='';for(var i=0;i<msg.length;i++){var w=msg[i];if(endian==='little')w=htonl(w);res+=zero8(w.toString(16));}return res;}utils.toHex32=toHex32;function zero2(word){if(word.length===1)return'0'+word;else return word;}utils.zero2=zero2;function zero8(word){if(word.length===7)return'0'+word;else if(word.length===6)return'00'+word;else if(word.length===5)return'000'+word;else if(word.length===4)return'0000'+word;else if(word.length===3)return'00000'+word;else if(word.length===2)return'000000'+word;else if(word.length===1)return'0000000'+word;else return word;}utils.zero8=zero8;function join32(msg,start,end,endian){var len=end-start;assert(len%4===0);var res=new Array(len/4);for(var i=0,k=start;i<res.length;i++,k+=4){var w;if(endian==='big')w=msg[k]<<24|msg[k+1]<<16|msg[k+2]<<8|msg[k+3];else w=msg[k+3]<<24|msg[k+2]<<16|msg[k+1]<<8|msg[k];res[i]=w>>>0;}return res;}utils.join32=join32;function split32(msg,endian){var res=new Array(msg.length*4);for(var i=0,k=0;i<msg.length;i++,k+=4){var m=msg[i];if(endian==='big'){res[k]=m>>>24;res[k+1]=m>>>16&0xff;res[k+2]=m>>>8&0xff;res[k+3]=m&0xff;}else{res[k+3]=m>>>24;res[k+2]=m>>>16&0xff;res[k+1]=m>>>8&0xff;res[k]=m&0xff;}}return res;}utils.split32=split32;function rotr32(w,b){return w>>>b|w<<32-b;}utils.rotr32=rotr32;function rotl32(w,b){return w<<b|w>>>32-b;}utils.rotl32=rotl32;function sum32(a,b){return a+b>>>0;}utils.sum32=sum32;function sum32_3(a,b,c){return a+b+c>>>0;}utils.sum32_3=sum32_3;function sum32_4(a,b,c,d){return a+b+c+d>>>0;}utils.sum32_4=sum32_4;function sum32_5(a,b,c,d,e){return a+b+c+d+e>>>0;}utils.sum32_5=sum32_5;function assert(cond,msg){if(!cond)throw new Error(msg||'Assertion failed');}utils.assert=assert;utils.inherits=inherits;function sum64(buf,pos,ah,al){var bh=buf[pos];var bl=buf[pos+1];var lo=al+bl>>>0;var hi=(lo<al?1:0)+ah+bh;buf[pos]=hi>>>0;buf[pos+1]=lo;}exports.sum64=sum64;function sum64_hi(ah,al,bh,bl){var lo=al+bl>>>0;var hi=(lo<al?1:0)+ah+bh;return hi>>>0;};exports.sum64_hi=sum64_hi;function sum64_lo(ah,al,bh,bl){var lo=al+bl;return lo>>>0;};exports.sum64_lo=sum64_lo;function sum64_4_hi(ah,al,bh,bl,ch,cl,dh,dl){var carry=0;var lo=al;lo=lo+bl>>>0;carry+=lo<al?1:0;lo=lo+cl>>>0;carry+=lo<cl?1:0;lo=lo+dl>>>0;carry+=lo<dl?1:0;var hi=ah+bh+ch+dh+carry;return hi>>>0;};exports.sum64_4_hi=sum64_4_hi;function sum64_4_lo(ah,al,bh,bl,ch,cl,dh,dl){var lo=al+bl+cl+dl;return lo>>>0;};exports.sum64_4_lo=sum64_4_lo;function sum64_5_hi(ah,al,bh,bl,ch,cl,dh,dl,eh,el){var carry=0;var lo=al;lo=lo+bl>>>0;carry+=lo<al?1:0;lo=lo+cl>>>0;carry+=lo<cl?1:0;lo=lo+dl>>>0;carry+=lo<dl?1:0;lo=lo+el>>>0;carry+=lo<el?1:0;var hi=ah+bh+ch+dh+eh+carry;return hi>>>0;};exports.sum64_5_hi=sum64_5_hi;function sum64_5_lo(ah,al,bh,bl,ch,cl,dh,dl,eh,el){var lo=al+bl+cl+dl+el;return lo>>>0;};exports.sum64_5_lo=sum64_5_lo;function rotr64_hi(ah,al,num){var r=al<<32-num|ah>>>num;return r>>>0;};exports.rotr64_hi=rotr64_hi;function rotr64_lo(ah,al,num){var r=ah<<32-num|al>>>num;return r>>>0;};exports.rotr64_lo=rotr64_lo;function shr64_hi(ah,al,num){return ah>>>num;};exports.shr64_hi=shr64_hi;function shr64_lo(ah,al,num){var r=ah<<32-num|al>>>num;return r>>>0;};exports.shr64_lo=shr64_lo;},{"inherits":292}],157:[function(require,module,exports){module.exports={"name":"elliptic","version":"6.2.3","description":"EC cryptography","main":"lib/elliptic.js","files":["lib"],"scripts":{"coverage":"npm run unit --coverage","coveralls":"npm run coverage && cat ./coverage/lcov.info | coveralls","jscs":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/*.js","jshint":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/*.js","lint":"npm run jscs && npm run jshint","test":"npm run lint && npm run unit","unit":"istanbul test _mocha --reporter=spec test/*-test.js"},"repository":{"type":"git","url":"git+ssh://git@github.com/indutny/elliptic.git"},"keywords":["EC","Elliptic","curve","Cryptography"],"author":{"name":"Fedor Indutny","email":"fedor@indutny.com"},"license":"MIT","bugs":{"url":"https://github.com/indutny/elliptic/issues"},"homepage":"https://github.com/indutny/elliptic","devDependencies":{"coveralls":"^2.11.3","istanbul":"^0.4.2","jscs":"^2.9.0","jshint":"^2.6.0","mocha":"^2.1.0"},"dependencies":{"bn.js":"^4.0.0","brorand":"^1.0.1","hash.js":"^1.0.0","inherits":"^2.0.1"},"gitHead":"c32f20b22b420eb6af3c6dda28963deb7facf823","_id":"elliptic@6.2.3","_shasum":"18e46d7306b0951275a2d42063270a14b74ebe99","_from":"elliptic@>=6.0.0 <7.0.0","_npmVersion":"3.3.12","_nodeVersion":"5.4.1","_npmUser":{"name":"indutny","email":"fedor@indutny.com"},"dist":{"shasum":"18e46d7306b0951275a2d42063270a14b74ebe99","tarball":"http://registry.npmjs.org/elliptic/-/elliptic-6.2.3.tgz"},"maintainers":[{"name":"indutny","email":"fedor@indutny.com"}],"directories":{},"_resolved":"https://registry.npmjs.org/elliptic/-/elliptic-6.2.3.tgz"};},{}],158:[function(require,module,exports){module.exports={"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"};},{}],159:[function(require,module,exports){// from https://github.com/indutny/self-signed/blob/gh-pages/lib/asn1.js
// Fedor, you are amazing.
var asn1=require('asn1.js');var RSAPrivateKey=asn1.define('RSAPrivateKey',function(){this.seq().obj(this.key('version').int(),this.key('modulus').int(),this.key('publicExponent').int(),this.key('privateExponent').int(),this.key('prime1').int(),this.key('prime2').int(),this.key('exponent1').int(),this.key('exponent2').int(),this.key('coefficient').int());});exports.RSAPrivateKey=RSAPrivateKey;var RSAPublicKey=asn1.define('RSAPublicKey',function(){this.seq().obj(this.key('modulus').int(),this.key('publicExponent').int());});exports.RSAPublicKey=RSAPublicKey;var PublicKey=asn1.define('SubjectPublicKeyInfo',function(){this.seq().obj(this.key('algorithm').use(AlgorithmIdentifier),this.key('subjectPublicKey').bitstr());});exports.PublicKey=PublicKey;var AlgorithmIdentifier=asn1.define('AlgorithmIdentifier',function(){this.seq().obj(this.key('algorithm').objid(),this.key('none').null_().optional(),this.key('curve').objid().optional(),this.key('params').seq().obj(this.key('p').int(),this.key('q').int(),this.key('g').int()).optional());});var PrivateKeyInfo=asn1.define('PrivateKeyInfo',function(){this.seq().obj(this.key('version').int(),this.key('algorithm').use(AlgorithmIdentifier),this.key('subjectPrivateKey').octstr());});exports.PrivateKey=PrivateKeyInfo;var EncryptedPrivateKeyInfo=asn1.define('EncryptedPrivateKeyInfo',function(){this.seq().obj(this.key('algorithm').seq().obj(this.key('id').objid(),this.key('decrypt').seq().obj(this.key('kde').seq().obj(this.key('id').objid(),this.key('kdeparams').seq().obj(this.key('salt').octstr(),this.key('iters').int())),this.key('cipher').seq().obj(this.key('algo').objid(),this.key('iv').octstr()))),this.key('subjectPrivateKey').octstr());});exports.EncryptedPrivateKey=EncryptedPrivateKeyInfo;var DSAPrivateKey=asn1.define('DSAPrivateKey',function(){this.seq().obj(this.key('version').int(),this.key('p').int(),this.key('q').int(),this.key('g').int(),this.key('pub_key').int(),this.key('priv_key').int());});exports.DSAPrivateKey=DSAPrivateKey;exports.DSAparam=asn1.define('DSAparam',function(){this.int();});var ECPrivateKey=asn1.define('ECPrivateKey',function(){this.seq().obj(this.key('version').int(),this.key('privateKey').octstr(),this.key('parameters').optional().explicit(0).use(ECParameters),this.key('publicKey').optional().explicit(1).bitstr());});exports.ECPrivateKey=ECPrivateKey;var ECParameters=asn1.define('ECParameters',function(){this.choice({namedCurve:this.objid()});});exports.signature=asn1.define('signature',function(){this.seq().obj(this.key('r').int(),this.key('s').int());});},{"asn1.js":162}],160:[function(require,module,exports){(function(Buffer){// adapted from https://github.com/apatil/pemstrip
var findProc=/Proc-Type: 4,ENCRYPTED\r?\nDEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)\r?\n\r?\n([0-9A-z\n\r\+\/\=]+)\r?\n/m;var startRegex=/^-----BEGIN (.*) KEY-----\r?\n/m;var fullRegex=/^-----BEGIN (.*) KEY-----\r?\n([0-9A-z\n\r\+\/\=]+)\r?\n-----END \1 KEY-----$/m;var evp=require('evp_bytestokey');var ciphers=require('browserify-aes');module.exports=function(okey,password){var key=okey.toString();var match=key.match(findProc);var decrypted;if(!match){var match2=key.match(fullRegex);decrypted=new Buffer(match2[2].replace(/\r?\n/g,''),'base64');}else{var suite='aes'+match[1];var iv=new Buffer(match[2],'hex');var cipherText=new Buffer(match[3].replace(/\r?\n/g,''),'base64');var cipherKey=evp(password,iv.slice(0,8),parseInt(match[1],10)).key;var out=[];var cipher=ciphers.createDecipheriv(suite,cipherKey,iv);out.push(cipher.update(cipherText));out.push(cipher.final());decrypted=Buffer.concat(out);}var tag=key.match(startRegex)[1]+' KEY';return{tag:tag,data:decrypted};};}).call(this,require("buffer").Buffer);},{"browserify-aes":179,"buffer":95,"evp_bytestokey":194}],161:[function(require,module,exports){(function(Buffer){var asn1=require('./asn1');var aesid=require('./aesid.json');var fixProc=require('./fixProc');var ciphers=require('browserify-aes');var compat=require('pbkdf2');module.exports=parseKeys;function parseKeys(buffer){var password;if(typeof buffer==='object'&&!Buffer.isBuffer(buffer)){password=buffer.passphrase;buffer=buffer.key;}if(typeof buffer==='string'){buffer=new Buffer(buffer);}var stripped=fixProc(buffer,password);var type=stripped.tag;var data=stripped.data;var subtype,ndata;switch(type){case'PUBLIC KEY':ndata=asn1.PublicKey.decode(data,'der');subtype=ndata.algorithm.algorithm.join('.');switch(subtype){case'1.2.840.113549.1.1.1':return asn1.RSAPublicKey.decode(ndata.subjectPublicKey.data,'der');case'1.2.840.10045.2.1':ndata.subjectPrivateKey=ndata.subjectPublicKey;return{type:'ec',data:ndata};case'1.2.840.10040.4.1':ndata.algorithm.params.pub_key=asn1.DSAparam.decode(ndata.subjectPublicKey.data,'der');return{type:'dsa',data:ndata.algorithm.params};default:throw new Error('unknown key id '+subtype);}throw new Error('unknown key type '+type);case'ENCRYPTED PRIVATE KEY':data=asn1.EncryptedPrivateKey.decode(data,'der');data=decrypt(data,password);// falls through
case'PRIVATE KEY':ndata=asn1.PrivateKey.decode(data,'der');subtype=ndata.algorithm.algorithm.join('.');switch(subtype){case'1.2.840.113549.1.1.1':return asn1.RSAPrivateKey.decode(ndata.subjectPrivateKey,'der');case'1.2.840.10045.2.1':return{curve:ndata.algorithm.curve,privateKey:asn1.ECPrivateKey.decode(ndata.subjectPrivateKey,'der').privateKey};case'1.2.840.10040.4.1':ndata.algorithm.params.priv_key=asn1.DSAparam.decode(ndata.subjectPrivateKey,'der');return{type:'dsa',params:ndata.algorithm.params};default:throw new Error('unknown key id '+subtype);}throw new Error('unknown key type '+type);case'RSA PUBLIC KEY':return asn1.RSAPublicKey.decode(data,'der');case'RSA PRIVATE KEY':return asn1.RSAPrivateKey.decode(data,'der');case'DSA PRIVATE KEY':return{type:'dsa',params:asn1.DSAPrivateKey.decode(data,'der')};case'EC PRIVATE KEY':data=asn1.ECPrivateKey.decode(data,'der');return{curve:data.parameters.value,privateKey:data.privateKey};default:throw new Error('unknown key type '+type);}}parseKeys.signature=asn1.signature;function decrypt(data,password){var salt=data.algorithm.decrypt.kde.kdeparams.salt;var iters=parseInt(data.algorithm.decrypt.kde.kdeparams.iters.toString(),10);var algo=aesid[data.algorithm.decrypt.cipher.algo.join('.')];var iv=data.algorithm.decrypt.cipher.iv;var cipherText=data.subjectPrivateKey;var keylen=parseInt(algo.split('-')[1],10)/8;var key=compat.pbkdf2Sync(password,salt,iters,keylen);var cipher=ciphers.createDecipheriv(algo,key,iv);var out=[];out.push(cipher.update(cipherText));out.push(cipher.final());return Buffer.concat(out);}}).call(this,require("buffer").Buffer);},{"./aesid.json":158,"./asn1":159,"./fixProc":160,"browserify-aes":179,"buffer":95,"pbkdf2":244}],162:[function(require,module,exports){var asn1=exports;asn1.bignum=require('bn.js');asn1.define=require('./asn1/api').define;asn1.base=require('./asn1/base');asn1.constants=require('./asn1/constants');asn1.decoders=require('./asn1/decoders');asn1.encoders=require('./asn1/encoders');},{"./asn1/api":163,"./asn1/base":165,"./asn1/constants":169,"./asn1/decoders":171,"./asn1/encoders":174,"bn.js":132}],163:[function(require,module,exports){var asn1=require('../asn1');var inherits=require('inherits');var api=exports;api.define=function define(name,body){return new Entity(name,body);};function Entity(name,body){this.name=name;this.body=body;this.decoders={};this.encoders={};};Entity.prototype._createNamed=function createNamed(base){var named;try{named=require('vm').runInThisContext('(function '+this.name+'(entity) {\n'+'  this._initNamed(entity);\n'+'})');}catch(e){named=function(entity){this._initNamed(entity);};}inherits(named,base);named.prototype._initNamed=function initnamed(entity){base.call(this,entity);};return new named(this);};Entity.prototype._getDecoder=function _getDecoder(enc){// Lazily create decoder
if(!this.decoders.hasOwnProperty(enc))this.decoders[enc]=this._createNamed(asn1.decoders[enc]);return this.decoders[enc];};Entity.prototype.decode=function decode(data,enc,options){return this._getDecoder(enc).decode(data,options);};Entity.prototype._getEncoder=function _getEncoder(enc){// Lazily create encoder
if(!this.encoders.hasOwnProperty(enc))this.encoders[enc]=this._createNamed(asn1.encoders[enc]);return this.encoders[enc];};Entity.prototype.encode=function encode(data,enc,/* internal */reporter){return this._getEncoder(enc).encode(data,reporter);};},{"../asn1":162,"inherits":292,"vm":311}],164:[function(require,module,exports){var inherits=require('inherits');var Reporter=require('../base').Reporter;var Buffer=require('buffer').Buffer;function DecoderBuffer(base,options){Reporter.call(this,options);if(!Buffer.isBuffer(base)){this.error('Input not Buffer');return;}this.base=base;this.offset=0;this.length=base.length;}inherits(DecoderBuffer,Reporter);exports.DecoderBuffer=DecoderBuffer;DecoderBuffer.prototype.save=function save(){return{offset:this.offset,reporter:Reporter.prototype.save.call(this)};};DecoderBuffer.prototype.restore=function restore(save){// Return skipped data
var res=new DecoderBuffer(this.base);res.offset=save.offset;res.length=this.offset;this.offset=save.offset;Reporter.prototype.restore.call(this,save.reporter);return res;};DecoderBuffer.prototype.isEmpty=function isEmpty(){return this.offset===this.length;};DecoderBuffer.prototype.readUInt8=function readUInt8(fail){if(this.offset+1<=this.length)return this.base.readUInt8(this.offset++,true);else return this.error(fail||'DecoderBuffer overrun');};DecoderBuffer.prototype.skip=function skip(bytes,fail){if(!(this.offset+bytes<=this.length))return this.error(fail||'DecoderBuffer overrun');var res=new DecoderBuffer(this.base);// Share reporter state
res._reporterState=this._reporterState;res.offset=this.offset;res.length=this.offset+bytes;this.offset+=bytes;return res;};DecoderBuffer.prototype.raw=function raw(save){return this.base.slice(save?save.offset:this.offset,this.length);};function EncoderBuffer(value,reporter){if(Array.isArray(value)){this.length=0;this.value=value.map(function(item){if(!(item instanceof EncoderBuffer))item=new EncoderBuffer(item,reporter);this.length+=item.length;return item;},this);}else if(typeof value==='number'){if(!(0<=value&&value<=0xff))return reporter.error('non-byte EncoderBuffer value');this.value=value;this.length=1;}else if(typeof value==='string'){this.value=value;this.length=Buffer.byteLength(value);}else if(Buffer.isBuffer(value)){this.value=value;this.length=value.length;}else{return reporter.error('Unsupported type: '+typeof value);}}exports.EncoderBuffer=EncoderBuffer;EncoderBuffer.prototype.join=function join(out,offset){if(!out)out=new Buffer(this.length);if(!offset)offset=0;if(this.length===0)return out;if(Array.isArray(this.value)){this.value.forEach(function(item){item.join(out,offset);offset+=item.length;});}else{if(typeof this.value==='number')out[offset]=this.value;else if(typeof this.value==='string')out.write(this.value,offset);else if(Buffer.isBuffer(this.value))this.value.copy(out,offset);offset+=this.length;}return out;};},{"../base":165,"buffer":95,"inherits":292}],165:[function(require,module,exports){var base=exports;base.Reporter=require('./reporter').Reporter;base.DecoderBuffer=require('./buffer').DecoderBuffer;base.EncoderBuffer=require('./buffer').EncoderBuffer;base.Node=require('./node');},{"./buffer":164,"./node":166,"./reporter":167}],166:[function(require,module,exports){var Reporter=require('../base').Reporter;var EncoderBuffer=require('../base').EncoderBuffer;var assert=require('minimalistic-assert');// Supported tags
var tags=['seq','seqof','set','setof','octstr','bitstr','objid','bool','gentime','utctime','null_','enum','int','ia5str','utf8str','bmpstr','numstr','printstr'];// Public methods list
var methods=['key','obj','use','optional','explicit','implicit','def','choice','any'].concat(tags);// Overrided methods list
var overrided=['_peekTag','_decodeTag','_use','_decodeStr','_decodeObjid','_decodeTime','_decodeNull','_decodeInt','_decodeBool','_decodeList','_encodeComposite','_encodeStr','_encodeObjid','_encodeTime','_encodeNull','_encodeInt','_encodeBool'];function Node(enc,parent){var state={};this._baseState=state;state.enc=enc;state.parent=parent||null;state.children=null;// State
state.tag=null;state.args=null;state.reverseArgs=null;state.choice=null;state.optional=false;state.any=false;state.obj=false;state.use=null;state.useDecoder=null;state.key=null;state['default']=null;state.explicit=null;state.implicit=null;// Should create new instance on each method
if(!state.parent){state.children=[];this._wrap();}}module.exports=Node;var stateProps=['enc','parent','children','tag','args','reverseArgs','choice','optional','any','obj','use','alteredUse','key','default','explicit','implicit'];Node.prototype.clone=function clone(){var state=this._baseState;var cstate={};stateProps.forEach(function(prop){cstate[prop]=state[prop];});var res=new this.constructor(cstate.parent);res._baseState=cstate;return res;};Node.prototype._wrap=function wrap(){var state=this._baseState;methods.forEach(function(method){this[method]=function _wrappedMethod(){var clone=new this.constructor(this);state.children.push(clone);return clone[method].apply(clone,arguments);};},this);};Node.prototype._init=function init(body){var state=this._baseState;assert(state.parent===null);body.call(this);// Filter children
state.children=state.children.filter(function(child){return child._baseState.parent===this;},this);assert.equal(state.children.length,1,'Root node can have only one child');};Node.prototype._useArgs=function useArgs(args){var state=this._baseState;// Filter children and args
var children=args.filter(function(arg){return arg instanceof this.constructor;},this);args=args.filter(function(arg){return!(arg instanceof this.constructor);},this);if(children.length!==0){assert(state.children===null);state.children=children;// Replace parent to maintain backward link
children.forEach(function(child){child._baseState.parent=this;},this);}if(args.length!==0){assert(state.args===null);state.args=args;state.reverseArgs=args.map(function(arg){if(typeof arg!=='object'||arg.constructor!==Object)return arg;var res={};Object.keys(arg).forEach(function(key){if(key==(key|0))key|=0;var value=arg[key];res[value]=key;});return res;});}};//
// Overrided methods
//
overrided.forEach(function(method){Node.prototype[method]=function _overrided(){var state=this._baseState;throw new Error(method+' not implemented for encoding: '+state.enc);};});//
// Public methods
//
tags.forEach(function(tag){Node.prototype[tag]=function _tagMethod(){var state=this._baseState;var args=Array.prototype.slice.call(arguments);assert(state.tag===null);state.tag=tag;this._useArgs(args);return this;};});Node.prototype.use=function use(item){var state=this._baseState;assert(state.use===null);state.use=item;return this;};Node.prototype.optional=function optional(){var state=this._baseState;state.optional=true;return this;};Node.prototype.def=function def(val){var state=this._baseState;assert(state['default']===null);state['default']=val;state.optional=true;return this;};Node.prototype.explicit=function explicit(num){var state=this._baseState;assert(state.explicit===null&&state.implicit===null);state.explicit=num;return this;};Node.prototype.implicit=function implicit(num){var state=this._baseState;assert(state.explicit===null&&state.implicit===null);state.implicit=num;return this;};Node.prototype.obj=function obj(){var state=this._baseState;var args=Array.prototype.slice.call(arguments);state.obj=true;if(args.length!==0)this._useArgs(args);return this;};Node.prototype.key=function key(newKey){var state=this._baseState;assert(state.key===null);state.key=newKey;return this;};Node.prototype.any=function any(){var state=this._baseState;state.any=true;return this;};Node.prototype.choice=function choice(obj){var state=this._baseState;assert(state.choice===null);state.choice=obj;this._useArgs(Object.keys(obj).map(function(key){return obj[key];}));return this;};//
// Decoding
//
Node.prototype._decode=function decode(input){var state=this._baseState;// Decode root node
if(state.parent===null)return input.wrapResult(state.children[0]._decode(input));var result=state['default'];var present=true;var prevKey;if(state.key!==null)prevKey=input.enterKey(state.key);// Check if tag is there
if(state.optional){var tag=null;if(state.explicit!==null)tag=state.explicit;else if(state.implicit!==null)tag=state.implicit;else if(state.tag!==null)tag=state.tag;if(tag===null&&!state.any){// Trial and Error
var save=input.save();try{if(state.choice===null)this._decodeGeneric(state.tag,input);else this._decodeChoice(input);present=true;}catch(e){present=false;}input.restore(save);}else{present=this._peekTag(input,tag,state.any);if(input.isError(present))return present;}}// Push object on stack
var prevObj;if(state.obj&&present)prevObj=input.enterObject();if(present){// Unwrap explicit values
if(state.explicit!==null){var explicit=this._decodeTag(input,state.explicit);if(input.isError(explicit))return explicit;input=explicit;}// Unwrap implicit and normal values
if(state.use===null&&state.choice===null){if(state.any)var save=input.save();var body=this._decodeTag(input,state.implicit!==null?state.implicit:state.tag,state.any);if(input.isError(body))return body;if(state.any)result=input.raw(save);else input=body;}// Select proper method for tag
if(state.any)result=result;else if(state.choice===null)result=this._decodeGeneric(state.tag,input);else result=this._decodeChoice(input);if(input.isError(result))return result;// Decode children
if(!state.any&&state.choice===null&&state.children!==null){var fail=state.children.some(function decodeChildren(child){// NOTE: We are ignoring errors here, to let parser continue with other
// parts of encoded data
child._decode(input);});if(fail)return err;}}// Pop object
if(state.obj&&present)result=input.leaveObject(prevObj);// Set key
if(state.key!==null&&(result!==null||present===true))input.leaveKey(prevKey,state.key,result);return result;};Node.prototype._decodeGeneric=function decodeGeneric(tag,input){var state=this._baseState;if(tag==='seq'||tag==='set')return null;if(tag==='seqof'||tag==='setof')return this._decodeList(input,tag,state.args[0]);else if(tag==='octstr'||tag==='bitstr')return this._decodeStr(input,tag);else if(tag==='ia5str'||tag==='utf8str'||tag==='bmpstr')return this._decodeStr(input,tag);else if(tag==='numstr'||tag==='printstr')return this._decodeStr(input,tag);else if(tag==='objid'&&state.args)return this._decodeObjid(input,state.args[0],state.args[1]);else if(tag==='objid')return this._decodeObjid(input,null,null);else if(tag==='gentime'||tag==='utctime')return this._decodeTime(input,tag);else if(tag==='null_')return this._decodeNull(input);else if(tag==='bool')return this._decodeBool(input);else if(tag==='int'||tag==='enum')return this._decodeInt(input,state.args&&state.args[0]);else if(state.use!==null)return this._getUse(state.use,input._reporterState.obj)._decode(input);else return input.error('unknown tag: '+tag);return null;};Node.prototype._getUse=function _getUse(entity,obj){var state=this._baseState;// Create altered use decoder if implicit is set
state.useDecoder=this._use(entity,obj);assert(state.useDecoder._baseState.parent===null);state.useDecoder=state.useDecoder._baseState.children[0];if(state.implicit!==state.useDecoder._baseState.implicit){state.useDecoder=state.useDecoder.clone();state.useDecoder._baseState.implicit=state.implicit;}return state.useDecoder;};Node.prototype._decodeChoice=function decodeChoice(input){var state=this._baseState;var result=null;var match=false;Object.keys(state.choice).some(function(key){var save=input.save();var node=state.choice[key];try{var value=node._decode(input);if(input.isError(value))return false;result={type:key,value:value};match=true;}catch(e){input.restore(save);return false;}return true;},this);if(!match)return input.error('Choice not matched');return result;};//
// Encoding
//
Node.prototype._createEncoderBuffer=function createEncoderBuffer(data){return new EncoderBuffer(data,this.reporter);};Node.prototype._encode=function encode(data,reporter,parent){var state=this._baseState;if(state['default']!==null&&state['default']===data)return;var result=this._encodeValue(data,reporter,parent);if(result===undefined)return;if(this._skipDefault(result,reporter,parent))return;return result;};Node.prototype._encodeValue=function encode(data,reporter,parent){var state=this._baseState;// Decode root node
if(state.parent===null)return state.children[0]._encode(data,reporter||new Reporter());var result=null;var present=true;// Set reporter to share it with a child class
this.reporter=reporter;// Check if data is there
if(state.optional&&data===undefined){if(state['default']!==null)data=state['default'];else return;}// For error reporting
var prevKey;// Encode children first
var content=null;var primitive=false;if(state.any){// Anything that was given is translated to buffer
result=this._createEncoderBuffer(data);}else if(state.choice){result=this._encodeChoice(data,reporter);}else if(state.children){content=state.children.map(function(child){if(child._baseState.tag==='null_')return child._encode(null,reporter,data);if(child._baseState.key===null)return reporter.error('Child should have a key');var prevKey=reporter.enterKey(child._baseState.key);if(typeof data!=='object')return reporter.error('Child expected, but input is not object');var res=child._encode(data[child._baseState.key],reporter,data);reporter.leaveKey(prevKey);return res;},this).filter(function(child){return child;});content=this._createEncoderBuffer(content);}else{if(state.tag==='seqof'||state.tag==='setof'){// TODO(indutny): this should be thrown on DSL level
if(!(state.args&&state.args.length===1))return reporter.error('Too many args for : '+state.tag);if(!Array.isArray(data))return reporter.error('seqof/setof, but data is not Array');var child=this.clone();child._baseState.implicit=null;content=this._createEncoderBuffer(data.map(function(item){var state=this._baseState;return this._getUse(state.args[0],data)._encode(item,reporter);},child));}else if(state.use!==null){result=this._getUse(state.use,parent)._encode(data,reporter);}else{content=this._encodePrimitive(state.tag,data);primitive=true;}}// Encode data itself
var result;if(!state.any&&state.choice===null){var tag=state.implicit!==null?state.implicit:state.tag;var cls=state.implicit===null?'universal':'context';if(tag===null){if(state.use===null)reporter.error('Tag could be ommited only for .use()');}else{if(state.use===null)result=this._encodeComposite(tag,primitive,cls,content);}}// Wrap in explicit
if(state.explicit!==null)result=this._encodeComposite(state.explicit,false,'context',result);return result;};Node.prototype._encodeChoice=function encodeChoice(data,reporter){var state=this._baseState;var node=state.choice[data.type];if(!node){assert(false,data.type+' not found in '+JSON.stringify(Object.keys(state.choice)));}return node._encode(data.value,reporter);};Node.prototype._encodePrimitive=function encodePrimitive(tag,data){var state=this._baseState;if(tag==='octstr'||tag==='bitstr'||tag==='ia5str')return this._encodeStr(data,tag);else if(tag==='utf8str'||tag==='bmpstr')return this._encodeStr(data,tag);else if(tag==='numstr'||tag==='printstr')return this._encodeStr(data,tag);else if(tag==='objid'&&state.args)return this._encodeObjid(data,state.reverseArgs[0],state.args[1]);else if(tag==='objid')return this._encodeObjid(data,null,null);else if(tag==='gentime'||tag==='utctime')return this._encodeTime(data,tag);else if(tag==='null_')return this._encodeNull();else if(tag==='int'||tag==='enum')return this._encodeInt(data,state.args&&state.reverseArgs[0]);else if(tag==='bool')return this._encodeBool(data);else throw new Error('Unsupported tag: '+tag);};Node.prototype._isNumstr=function isNumstr(str){return (/^[0-9 ]*$/.test(str));};Node.prototype._isPrintstr=function isPrintstr(str){return (/^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(str));};},{"../base":165,"minimalistic-assert":176}],167:[function(require,module,exports){var inherits=require('inherits');function Reporter(options){this._reporterState={obj:null,path:[],options:options||{},errors:[]};}exports.Reporter=Reporter;Reporter.prototype.isError=function isError(obj){return obj instanceof ReporterError;};Reporter.prototype.save=function save(){var state=this._reporterState;return{obj:state.obj,pathLen:state.path.length};};Reporter.prototype.restore=function restore(data){var state=this._reporterState;state.obj=data.obj;state.path=state.path.slice(0,data.pathLen);};Reporter.prototype.enterKey=function enterKey(key){return this._reporterState.path.push(key);};Reporter.prototype.leaveKey=function leaveKey(index,key,value){var state=this._reporterState;state.path=state.path.slice(0,index-1);if(state.obj!==null)state.obj[key]=value;};Reporter.prototype.enterObject=function enterObject(){var state=this._reporterState;var prev=state.obj;state.obj={};return prev;};Reporter.prototype.leaveObject=function leaveObject(prev){var state=this._reporterState;var now=state.obj;state.obj=prev;return now;};Reporter.prototype.error=function error(msg){var err;var state=this._reporterState;var inherited=msg instanceof ReporterError;if(inherited){err=msg;}else{err=new ReporterError(state.path.map(function(elem){return'['+JSON.stringify(elem)+']';}).join(''),msg.message||msg,msg.stack);}if(!state.options.partial)throw err;if(!inherited)state.errors.push(err);return err;};Reporter.prototype.wrapResult=function wrapResult(result){var state=this._reporterState;if(!state.options.partial)return result;return{result:this.isError(result)?null:result,errors:state.errors};};function ReporterError(path,msg){this.path=path;this.rethrow(msg);};inherits(ReporterError,Error);ReporterError.prototype.rethrow=function rethrow(msg){this.message=msg+' at: '+(this.path||'(shallow)');Error.captureStackTrace(this,ReporterError);return this;};},{"inherits":292}],168:[function(require,module,exports){var constants=require('../constants');exports.tagClass={0:'universal',1:'application',2:'context',3:'private'};exports.tagClassByName=constants._reverse(exports.tagClass);exports.tag={0x00:'end',0x01:'bool',0x02:'int',0x03:'bitstr',0x04:'octstr',0x05:'null_',0x06:'objid',0x07:'objDesc',0x08:'external',0x09:'real',0x0a:'enum',0x0b:'embed',0x0c:'utf8str',0x0d:'relativeOid',0x10:'seq',0x11:'set',0x12:'numstr',0x13:'printstr',0x14:'t61str',0x15:'videostr',0x16:'ia5str',0x17:'utctime',0x18:'gentime',0x19:'graphstr',0x1a:'iso646str',0x1b:'genstr',0x1c:'unistr',0x1d:'charstr',0x1e:'bmpstr'};exports.tagByName=constants._reverse(exports.tag);},{"../constants":169}],169:[function(require,module,exports){var constants=exports;// Helper
constants._reverse=function reverse(map){var res={};Object.keys(map).forEach(function(key){// Convert key to integer if it is stringified
if((key|0)==key)key=key|0;var value=map[key];res[value]=key;});return res;};constants.der=require('./der');},{"./der":168}],170:[function(require,module,exports){var inherits=require('inherits');var asn1=require('../../asn1');var base=asn1.base;var bignum=asn1.bignum;// Import DER constants
var der=asn1.constants.der;function DERDecoder(entity){this.enc='der';this.name=entity.name;this.entity=entity;// Construct base tree
this.tree=new DERNode();this.tree._init(entity.body);};module.exports=DERDecoder;DERDecoder.prototype.decode=function decode(data,options){if(!(data instanceof base.DecoderBuffer))data=new base.DecoderBuffer(data,options);return this.tree._decode(data,options);};// Tree methods
function DERNode(parent){base.Node.call(this,'der',parent);}inherits(DERNode,base.Node);DERNode.prototype._peekTag=function peekTag(buffer,tag,any){if(buffer.isEmpty())return false;var state=buffer.save();var decodedTag=derDecodeTag(buffer,'Failed to peek tag: "'+tag+'"');if(buffer.isError(decodedTag))return decodedTag;buffer.restore(state);return decodedTag.tag===tag||decodedTag.tagStr===tag||any;};DERNode.prototype._decodeTag=function decodeTag(buffer,tag,any){var decodedTag=derDecodeTag(buffer,'Failed to decode tag of "'+tag+'"');if(buffer.isError(decodedTag))return decodedTag;var len=derDecodeLen(buffer,decodedTag.primitive,'Failed to get length of "'+tag+'"');// Failure
if(buffer.isError(len))return len;if(!any&&decodedTag.tag!==tag&&decodedTag.tagStr!==tag&&decodedTag.tagStr+'of'!==tag){return buffer.error('Failed to match tag: "'+tag+'"');}if(decodedTag.primitive||len!==null)return buffer.skip(len,'Failed to match body of: "'+tag+'"');// Indefinite length... find END tag
var state=buffer.save();var res=this._skipUntilEnd(buffer,'Failed to skip indefinite length body: "'+this.tag+'"');if(buffer.isError(res))return res;len=buffer.offset-state.offset;buffer.restore(state);return buffer.skip(len,'Failed to match body of: "'+tag+'"');};DERNode.prototype._skipUntilEnd=function skipUntilEnd(buffer,fail){while(true){var tag=derDecodeTag(buffer,fail);if(buffer.isError(tag))return tag;var len=derDecodeLen(buffer,tag.primitive,fail);if(buffer.isError(len))return len;var res;if(tag.primitive||len!==null)res=buffer.skip(len);else res=this._skipUntilEnd(buffer,fail);// Failure
if(buffer.isError(res))return res;if(tag.tagStr==='end')break;}};DERNode.prototype._decodeList=function decodeList(buffer,tag,decoder){var result=[];while(!buffer.isEmpty()){var possibleEnd=this._peekTag(buffer,'end');if(buffer.isError(possibleEnd))return possibleEnd;var res=decoder.decode(buffer,'der');if(buffer.isError(res)&&possibleEnd)break;result.push(res);}return result;};DERNode.prototype._decodeStr=function decodeStr(buffer,tag){if(tag==='octstr'){return buffer.raw();}else if(tag==='bitstr'){var unused=buffer.readUInt8();if(buffer.isError(unused))return unused;return{unused:unused,data:buffer.raw()};}else if(tag==='ia5str'||tag==='utf8str'){return buffer.raw().toString();}else if(tag==='numstr'){var numstr=buffer.raw().toString('ascii');if(!this._isNumstr(numstr)){return buffer.error('Decoding of string type: '+'numstr unsupported characters');}return numstr;}else if(tag==='printstr'){var printstr=buffer.raw().toString('ascii');if(!this._isPrintstr(printstr)){return buffer.error('Decoding of string type: '+'printstr unsupported characters');}return printstr;}else if(tag==='bmpstr'){var raw=buffer.raw();if(raw.length%2===1)return buffer.error('Decoding of string type: bmpstr length mismatch');var str='';for(var i=0;i<raw.length/2;i++){str+=String.fromCharCode(raw.readUInt16BE(i*2));}return str;}else{return buffer.error('Decoding of string type: '+tag+' unsupported');}};DERNode.prototype._decodeObjid=function decodeObjid(buffer,values,relative){var identifiers=[];var ident=0;while(!buffer.isEmpty()){var subident=buffer.readUInt8();ident<<=7;ident|=subident&0x7f;if((subident&0x80)===0){identifiers.push(ident);ident=0;}}if(subident&0x80)identifiers.push(ident);var first=identifiers[0]/40|0;var second=identifiers[0]%40;if(relative)result=identifiers;else result=[first,second].concat(identifiers.slice(1));if(values){var tmp=values[result.join(' ')];if(tmp===undefined)tmp=values[result.join('.')];if(tmp!==undefined)result=tmp;}return result;};DERNode.prototype._decodeTime=function decodeTime(buffer,tag){var str=buffer.raw().toString();if(tag==='gentime'){var year=str.slice(0,4)|0;var mon=str.slice(4,6)|0;var day=str.slice(6,8)|0;var hour=str.slice(8,10)|0;var min=str.slice(10,12)|0;var sec=str.slice(12,14)|0;}else if(tag==='utctime'){var year=str.slice(0,2)|0;var mon=str.slice(2,4)|0;var day=str.slice(4,6)|0;var hour=str.slice(6,8)|0;var min=str.slice(8,10)|0;var sec=str.slice(10,12)|0;if(year<70)year=2000+year;else year=1900+year;}else{return buffer.error('Decoding '+tag+' time is not supported yet');}return Date.UTC(year,mon-1,day,hour,min,sec,0);};DERNode.prototype._decodeNull=function decodeNull(buffer){return null;};DERNode.prototype._decodeBool=function decodeBool(buffer){var res=buffer.readUInt8();if(buffer.isError(res))return res;else return res!==0;};DERNode.prototype._decodeInt=function decodeInt(buffer,values){// Bigint, return as it is (assume big endian)
var raw=buffer.raw();var res=new bignum(raw);if(values)res=values[res.toString(10)]||res;return res;};DERNode.prototype._use=function use(entity,obj){if(typeof entity==='function')entity=entity(obj);return entity._getDecoder('der').tree;};// Utility methods
function derDecodeTag(buf,fail){var tag=buf.readUInt8(fail);if(buf.isError(tag))return tag;var cls=der.tagClass[tag>>6];var primitive=(tag&0x20)===0;// Multi-octet tag - load
if((tag&0x1f)===0x1f){var oct=tag;tag=0;while((oct&0x80)===0x80){oct=buf.readUInt8(fail);if(buf.isError(oct))return oct;tag<<=7;tag|=oct&0x7f;}}else{tag&=0x1f;}var tagStr=der.tag[tag];return{cls:cls,primitive:primitive,tag:tag,tagStr:tagStr};}function derDecodeLen(buf,primitive,fail){var len=buf.readUInt8(fail);if(buf.isError(len))return len;// Indefinite form
if(!primitive&&len===0x80)return null;// Definite form
if((len&0x80)===0){// Short form
return len;}// Long form
var num=len&0x7f;if(num>=4)return buf.error('length octect is too long');len=0;for(var i=0;i<num;i++){len<<=8;var j=buf.readUInt8(fail);if(buf.isError(j))return j;len|=j;}return len;}},{"../../asn1":162,"inherits":292}],171:[function(require,module,exports){var decoders=exports;decoders.der=require('./der');decoders.pem=require('./pem');},{"./der":170,"./pem":172}],172:[function(require,module,exports){var inherits=require('inherits');var Buffer=require('buffer').Buffer;var asn1=require('../../asn1');var DERDecoder=require('./der');function PEMDecoder(entity){DERDecoder.call(this,entity);this.enc='pem';};inherits(PEMDecoder,DERDecoder);module.exports=PEMDecoder;PEMDecoder.prototype.decode=function decode(data,options){var lines=data.toString().split(/[\r\n]+/g);var label=options.label.toUpperCase();var re=/^-----(BEGIN|END) ([^-]+)-----$/;var start=-1;var end=-1;for(var i=0;i<lines.length;i++){var match=lines[i].match(re);if(match===null)continue;if(match[2]!==label)continue;if(start===-1){if(match[1]!=='BEGIN')break;start=i;}else{if(match[1]!=='END')break;end=i;break;}}if(start===-1||end===-1)throw new Error('PEM section not found for: '+label);var base64=lines.slice(start+1,end).join('');// Remove excessive symbols
base64.replace(/[^a-z0-9\+\/=]+/gi,'');var input=new Buffer(base64,'base64');return DERDecoder.prototype.decode.call(this,input,options);};},{"../../asn1":162,"./der":170,"buffer":95,"inherits":292}],173:[function(require,module,exports){var inherits=require('inherits');var Buffer=require('buffer').Buffer;var asn1=require('../../asn1');var base=asn1.base;var bignum=asn1.bignum;// Import DER constants
var der=asn1.constants.der;function DEREncoder(entity){this.enc='der';this.name=entity.name;this.entity=entity;// Construct base tree
this.tree=new DERNode();this.tree._init(entity.body);};module.exports=DEREncoder;DEREncoder.prototype.encode=function encode(data,reporter){return this.tree._encode(data,reporter).join();};// Tree methods
function DERNode(parent){base.Node.call(this,'der',parent);}inherits(DERNode,base.Node);DERNode.prototype._encodeComposite=function encodeComposite(tag,primitive,cls,content){var encodedTag=encodeTag(tag,primitive,cls,this.reporter);// Short form
if(content.length<0x80){var header=new Buffer(2);header[0]=encodedTag;header[1]=content.length;return this._createEncoderBuffer([header,content]);}// Long form
// Count octets required to store length
var lenOctets=1;for(var i=content.length;i>=0x100;i>>=8)lenOctets++;var header=new Buffer(1+1+lenOctets);header[0]=encodedTag;header[1]=0x80|lenOctets;for(var i=1+lenOctets,j=content.length;j>0;i--,j>>=8)header[i]=j&0xff;return this._createEncoderBuffer([header,content]);};DERNode.prototype._encodeStr=function encodeStr(str,tag){if(tag==='octstr'){return this._createEncoderBuffer(str);}else if(tag==='bitstr'){return this._createEncoderBuffer([str.unused|0,str.data]);}else if(tag==='ia5str'||tag==='utf8str'){return this._createEncoderBuffer(str);}else if(tag==='bmpstr'){var buf=new Buffer(str.length*2);for(var i=0;i<str.length;i++){buf.writeUInt16BE(str.charCodeAt(i),i*2);}return this._createEncoderBuffer(buf);}else if(tag==='numstr'){if(!this._isNumstr(str)){return this.reporter.error('Encoding of string type: numstr supports '+'only digits and space');}return this._createEncoderBuffer(str);}else if(tag==='printstr'){if(!this._isPrintstr(str)){return this.reporter.error('Encoding of string type: printstr supports '+'only latin upper and lower case letters, '+'digits, space, apostrophe, left and rigth '+'parenthesis, plus sign, comma, hyphen, '+'dot, slash, colon, equal sign, '+'question mark');}return this._createEncoderBuffer(str);}else{return this.reporter.error('Encoding of string type: '+tag+' unsupported');}};DERNode.prototype._encodeObjid=function encodeObjid(id,values,relative){if(typeof id==='string'){if(!values)return this.reporter.error('string objid given, but no values map found');if(!values.hasOwnProperty(id))return this.reporter.error('objid not found in values map');id=values[id].split(/[\s\.]+/g);for(var i=0;i<id.length;i++)id[i]|=0;}else if(Array.isArray(id)){id=id.slice();for(var i=0;i<id.length;i++)id[i]|=0;}if(!Array.isArray(id)){return this.reporter.error('objid() should be either array or string, '+'got: '+JSON.stringify(id));}if(!relative){if(id[1]>=40)return this.reporter.error('Second objid identifier OOB');id.splice(0,2,id[0]*40+id[1]);}// Count number of octets
var size=0;for(var i=0;i<id.length;i++){var ident=id[i];for(size++;ident>=0x80;ident>>=7)size++;}var objid=new Buffer(size);var offset=objid.length-1;for(var i=id.length-1;i>=0;i--){var ident=id[i];objid[offset--]=ident&0x7f;while((ident>>=7)>0)objid[offset--]=0x80|ident&0x7f;}return this._createEncoderBuffer(objid);};function two(num){if(num<10)return'0'+num;else return num;}DERNode.prototype._encodeTime=function encodeTime(time,tag){var str;var date=new Date(time);if(tag==='gentime'){str=[two(date.getFullYear()),two(date.getUTCMonth()+1),two(date.getUTCDate()),two(date.getUTCHours()),two(date.getUTCMinutes()),two(date.getUTCSeconds()),'Z'].join('');}else if(tag==='utctime'){str=[two(date.getFullYear()%100),two(date.getUTCMonth()+1),two(date.getUTCDate()),two(date.getUTCHours()),two(date.getUTCMinutes()),two(date.getUTCSeconds()),'Z'].join('');}else{this.reporter.error('Encoding '+tag+' time is not supported yet');}return this._encodeStr(str,'octstr');};DERNode.prototype._encodeNull=function encodeNull(){return this._createEncoderBuffer('');};DERNode.prototype._encodeInt=function encodeInt(num,values){if(typeof num==='string'){if(!values)return this.reporter.error('String int or enum given, but no values map');if(!values.hasOwnProperty(num)){return this.reporter.error('Values map doesn\'t contain: '+JSON.stringify(num));}num=values[num];}// Bignum, assume big endian
if(typeof num!=='number'&&!Buffer.isBuffer(num)){var numArray=num.toArray();if(!num.sign&&numArray[0]&0x80){numArray.unshift(0);}num=new Buffer(numArray);}if(Buffer.isBuffer(num)){var size=num.length;if(num.length===0)size++;var out=new Buffer(size);num.copy(out);if(num.length===0)out[0]=0;return this._createEncoderBuffer(out);}if(num<0x80)return this._createEncoderBuffer(num);if(num<0x100)return this._createEncoderBuffer([0,num]);var size=1;for(var i=num;i>=0x100;i>>=8)size++;var out=new Array(size);for(var i=out.length-1;i>=0;i--){out[i]=num&0xff;num>>=8;}if(out[0]&0x80){out.unshift(0);}return this._createEncoderBuffer(new Buffer(out));};DERNode.prototype._encodeBool=function encodeBool(value){return this._createEncoderBuffer(value?0xff:0);};DERNode.prototype._use=function use(entity,obj){if(typeof entity==='function')entity=entity(obj);return entity._getEncoder('der').tree;};DERNode.prototype._skipDefault=function skipDefault(dataBuffer,reporter,parent){var state=this._baseState;var i;if(state['default']===null)return false;var data=dataBuffer.join();if(state.defaultBuffer===undefined)state.defaultBuffer=this._encodeValue(state['default'],reporter,parent).join();if(data.length!==state.defaultBuffer.length)return false;for(i=0;i<data.length;i++)if(data[i]!==state.defaultBuffer[i])return false;return true;};// Utility methods
function encodeTag(tag,primitive,cls,reporter){var res;if(tag==='seqof')tag='seq';else if(tag==='setof')tag='set';if(der.tagByName.hasOwnProperty(tag))res=der.tagByName[tag];else if(typeof tag==='number'&&(tag|0)===tag)res=tag;else return reporter.error('Unknown tag: '+tag);if(res>=0x1f)return reporter.error('Multi-octet tag encoding unsupported');if(!primitive)res|=0x20;res|=der.tagClassByName[cls||'universal']<<6;return res;}},{"../../asn1":162,"buffer":95,"inherits":292}],174:[function(require,module,exports){var encoders=exports;encoders.der=require('./der');encoders.pem=require('./pem');},{"./der":173,"./pem":175}],175:[function(require,module,exports){var inherits=require('inherits');var Buffer=require('buffer').Buffer;var asn1=require('../../asn1');var DEREncoder=require('./der');function PEMEncoder(entity){DEREncoder.call(this,entity);this.enc='pem';};inherits(PEMEncoder,DEREncoder);module.exports=PEMEncoder;PEMEncoder.prototype.encode=function encode(data,options){var buf=DEREncoder.prototype.encode.call(this,data);var p=buf.toString('base64');var out=['-----BEGIN '+options.label+'-----'];for(var i=0;i<p.length;i+=64)out.push(p.slice(i,i+64));out.push('-----END '+options.label+'-----');return out.join('\n');};},{"../../asn1":162,"./der":173,"buffer":95,"inherits":292}],176:[function(require,module,exports){arguments[4][127][0].apply(exports,arguments);},{"dup":127}],177:[function(require,module,exports){arguments[4][101][0].apply(exports,arguments);},{"buffer":95,"dup":101}],178:[function(require,module,exports){arguments[4][102][0].apply(exports,arguments);},{"./aes":177,"./ghash":182,"buffer":95,"buffer-xor":191,"cipher-base":192,"dup":102,"inherits":292}],179:[function(require,module,exports){arguments[4][103][0].apply(exports,arguments);},{"./decrypter":180,"./encrypter":181,"./modes":183,"dup":103}],180:[function(require,module,exports){arguments[4][104][0].apply(exports,arguments);},{"./aes":177,"./authCipher":178,"./modes":183,"./modes/cbc":184,"./modes/cfb":185,"./modes/cfb1":186,"./modes/cfb8":187,"./modes/ctr":188,"./modes/ecb":189,"./modes/ofb":190,"./streamCipher":193,"buffer":95,"cipher-base":192,"dup":104,"evp_bytestokey":194,"inherits":292}],181:[function(require,module,exports){arguments[4][105][0].apply(exports,arguments);},{"./aes":177,"./authCipher":178,"./modes":183,"./modes/cbc":184,"./modes/cfb":185,"./modes/cfb1":186,"./modes/cfb8":187,"./modes/ctr":188,"./modes/ecb":189,"./modes/ofb":190,"./streamCipher":193,"buffer":95,"cipher-base":192,"dup":105,"evp_bytestokey":194,"inherits":292}],182:[function(require,module,exports){arguments[4][106][0].apply(exports,arguments);},{"buffer":95,"dup":106}],183:[function(require,module,exports){arguments[4][107][0].apply(exports,arguments);},{"dup":107}],184:[function(require,module,exports){arguments[4][108][0].apply(exports,arguments);},{"buffer-xor":191,"dup":108}],185:[function(require,module,exports){arguments[4][109][0].apply(exports,arguments);},{"buffer":95,"buffer-xor":191,"dup":109}],186:[function(require,module,exports){arguments[4][110][0].apply(exports,arguments);},{"buffer":95,"dup":110}],187:[function(require,module,exports){arguments[4][111][0].apply(exports,arguments);},{"buffer":95,"dup":111}],188:[function(require,module,exports){arguments[4][112][0].apply(exports,arguments);},{"buffer":95,"buffer-xor":191,"dup":112}],189:[function(require,module,exports){arguments[4][113][0].apply(exports,arguments);},{"dup":113}],190:[function(require,module,exports){arguments[4][114][0].apply(exports,arguments);},{"buffer":95,"buffer-xor":191,"dup":114}],191:[function(require,module,exports){arguments[4][115][0].apply(exports,arguments);},{"buffer":95,"dup":115}],192:[function(require,module,exports){arguments[4][116][0].apply(exports,arguments);},{"buffer":95,"dup":116,"inherits":292,"stream":309,"string_decoder":310}],193:[function(require,module,exports){arguments[4][117][0].apply(exports,arguments);},{"./aes":177,"buffer":95,"cipher-base":192,"dup":117,"inherits":292}],194:[function(require,module,exports){arguments[4][128][0].apply(exports,arguments);},{"buffer":95,"create-hash/md5":225,"dup":128}],195:[function(require,module,exports){(function(Buffer){// much of this based on https://github.com/indutny/self-signed/blob/gh-pages/lib/rsa.js
var createHmac=require('create-hmac');var crt=require('browserify-rsa');var curves=require('./curves');var elliptic=require('elliptic');var parseKeys=require('parse-asn1');var BN=require('bn.js');var EC=elliptic.ec;function sign(hash,key,hashType,signType){var priv=parseKeys(key);if(priv.curve){if(signType!=='ecdsa')throw new Error('wrong private key type');return ecSign(hash,priv);}else if(priv.type==='dsa'){if(signType!=='dsa'){throw new Error('wrong private key type');}return dsaSign(hash,priv,hashType);}else{if(signType!=='rsa')throw new Error('wrong private key type');}var len=priv.modulus.byteLength();var pad=[0,1];while(hash.length+pad.length+1<len){pad.push(0xff);}pad.push(0x00);var i=-1;while(++i<hash.length){pad.push(hash[i]);}var out=crt(pad,priv);return out;}function ecSign(hash,priv){var curveId=curves[priv.curve.join('.')];if(!curveId)throw new Error('unknown curve '+priv.curve.join('.'));var curve=new EC(curveId);var key=curve.genKeyPair();key._importPrivate(priv.privateKey);var out=key.sign(hash);return new Buffer(out.toDER());}function dsaSign(hash,priv,algo){var x=priv.params.priv_key;var p=priv.params.p;var q=priv.params.q;var g=priv.params.g;var r=new BN(0);var k;var H=bits2int(hash,q).mod(q);var s=false;var kv=getKey(x,q,hash,algo);while(s===false){k=makeKey(q,kv,algo);r=makeR(g,k,p,q);s=k.invm(q).imul(H.add(x.mul(r))).mod(q);if(!s.cmpn(0)){s=false;r=new BN(0);}}return toDER(r,s);}function toDER(r,s){r=r.toArray();s=s.toArray();// Pad values
if(r[0]&0x80){r=[0].concat(r);}// Pad values
if(s[0]&0x80){s=[0].concat(s);}var total=r.length+s.length+4;var res=[0x30,total,0x02,r.length];res=res.concat(r,[0x02,s.length],s);return new Buffer(res);}function getKey(x,q,hash,algo){x=new Buffer(x.toArray());if(x.length<q.byteLength()){var zeros=new Buffer(q.byteLength()-x.length);zeros.fill(0);x=Buffer.concat([zeros,x]);}var hlen=hash.length;var hbits=bits2octets(hash,q);var v=new Buffer(hlen);v.fill(1);var k=new Buffer(hlen);k.fill(0);k=createHmac(algo,k).update(v).update(new Buffer([0])).update(x).update(hbits).digest();v=createHmac(algo,k).update(v).digest();k=createHmac(algo,k).update(v).update(new Buffer([1])).update(x).update(hbits).digest();v=createHmac(algo,k).update(v).digest();return{k:k,v:v};}function bits2int(obits,q){var bits=new BN(obits);var shift=(obits.length<<3)-q.bitLength();if(shift>0){bits.ishrn(shift);}return bits;}function bits2octets(bits,q){bits=bits2int(bits,q);bits=bits.mod(q);var out=new Buffer(bits.toArray());if(out.length<q.byteLength()){var zeros=new Buffer(q.byteLength()-out.length);zeros.fill(0);out=Buffer.concat([zeros,out]);}return out;}function makeKey(q,kv,algo){var t,k;do{t=new Buffer('');while(t.length*8<q.bitLength()){kv.v=createHmac(algo,kv.k).update(kv.v).digest();t=Buffer.concat([t,kv.v]);}k=bits2int(t,q);kv.k=createHmac(algo,kv.k).update(kv.v).update(new Buffer([0])).digest();kv.v=createHmac(algo,kv.k).update(kv.v).digest();}while(k.cmp(q)!==-1);return k;}function makeR(g,k,p,q){return g.toRed(BN.mont(p)).redPow(k).fromRed().mod(q);}module.exports=sign;module.exports.getKey=getKey;module.exports.makeKey=makeKey;}).call(this,require("buffer").Buffer);},{"./curves":131,"bn.js":132,"browserify-rsa":133,"buffer":95,"create-hmac":236,"elliptic":134,"parse-asn1":161}],196:[function(require,module,exports){(function(Buffer){// much of this based on https://github.com/indutny/self-signed/blob/gh-pages/lib/rsa.js
var curves=require('./curves');var elliptic=require('elliptic');var parseKeys=require('parse-asn1');var BN=require('bn.js');var EC=elliptic.ec;function verify(sig,hash,key,signType){var pub=parseKeys(key);if(pub.type==='ec'){if(signType!=='ecdsa'){throw new Error('wrong public key type');}return ecVerify(sig,hash,pub);}else if(pub.type==='dsa'){if(signType!=='dsa'){throw new Error('wrong public key type');}return dsaVerify(sig,hash,pub);}else{if(signType!=='rsa'){throw new Error('wrong public key type');}}var len=pub.modulus.byteLength();var pad=[1];var padNum=0;while(hash.length+pad.length+2<len){pad.push(0xff);padNum++;}pad.push(0x00);var i=-1;while(++i<hash.length){pad.push(hash[i]);}pad=new Buffer(pad);var red=BN.mont(pub.modulus);sig=new BN(sig).toRed(red);sig=sig.redPow(new BN(pub.publicExponent));sig=new Buffer(sig.fromRed().toArray());var out=0;if(padNum<8){out=1;}len=Math.min(sig.length,pad.length);if(sig.length!==pad.length){out=1;}i=-1;while(++i<len){out|=sig[i]^pad[i];}return out===0;}function ecVerify(sig,hash,pub){var curveId=curves[pub.data.algorithm.curve.join('.')];if(!curveId)throw new Error('unknown curve '+pub.data.algorithm.curve.join('.'));var curve=new EC(curveId);var pubkey=pub.data.subjectPrivateKey.data;return curve.verify(hash,sig,pubkey);}function dsaVerify(sig,hash,pub){var p=pub.data.p;var q=pub.data.q;var g=pub.data.g;var y=pub.data.pub_key;var unpacked=parseKeys.signature.decode(sig,'der');var s=unpacked.s;var r=unpacked.r;checkValue(s,q);checkValue(r,q);var montp=BN.mont(p);var w=s.invm(q);var v=g.toRed(montp).redPow(new BN(hash).mul(w).mod(q)).fromRed().mul(y.toRed(montp).redPow(r.mul(w).mod(q)).fromRed()).mod(p).mod(q);return!v.cmp(r);}function checkValue(b,q){if(b.cmpn(0)<=0){throw new Error('invalid sig');}if(b.cmp(q)>=q){throw new Error('invalid sig');}}module.exports=verify;}).call(this,require("buffer").Buffer);},{"./curves":131,"bn.js":132,"buffer":95,"elliptic":134,"parse-asn1":161}],197:[function(require,module,exports){(function(Buffer){var elliptic=require('elliptic');var BN=require('bn.js');module.exports=function createECDH(curve){return new ECDH(curve);};var aliases={secp256k1:{name:'secp256k1',byteLength:32},secp224r1:{name:'p224',byteLength:28},prime256v1:{name:'p256',byteLength:32},prime192v1:{name:'p192',byteLength:24},ed25519:{name:'ed25519',byteLength:32},secp384r1:{name:'p384',byteLength:48},secp521r1:{name:'p521',byteLength:66}};aliases.p224=aliases.secp224r1;aliases.p256=aliases.secp256r1=aliases.prime256v1;aliases.p192=aliases.secp192r1=aliases.prime192v1;aliases.p384=aliases.secp384r1;aliases.p521=aliases.secp521r1;function ECDH(curve){this.curveType=aliases[curve];if(!this.curveType){this.curveType={name:curve};}this.curve=new elliptic.ec(this.curveType.name);this.keys=void 0;}ECDH.prototype.generateKeys=function(enc,format){this.keys=this.curve.genKeyPair();return this.getPublicKey(enc,format);};ECDH.prototype.computeSecret=function(other,inenc,enc){inenc=inenc||'utf8';if(!Buffer.isBuffer(other)){other=new Buffer(other,inenc);}var otherPub=this.curve.keyFromPublic(other).getPublic();var out=otherPub.mul(this.keys.getPrivate()).getX();return formatReturnValue(out,enc,this.curveType.byteLength);};ECDH.prototype.getPublicKey=function(enc,format){var key=this.keys.getPublic(format==='compressed',true);if(format==='hybrid'){if(key[key.length-1]%2){key[0]=7;}else{key[0]=6;}}return formatReturnValue(key,enc);};ECDH.prototype.getPrivateKey=function(enc){return formatReturnValue(this.keys.getPrivate(),enc);};ECDH.prototype.setPublicKey=function(pub,enc){enc=enc||'utf8';if(!Buffer.isBuffer(pub)){pub=new Buffer(pub,enc);}this.keys._importPublic(pub);return this;};ECDH.prototype.setPrivateKey=function(priv,enc){enc=enc||'utf8';if(!Buffer.isBuffer(priv)){priv=new Buffer(priv,enc);}var _priv=new BN(priv);_priv=_priv.toString(16);this.keys._importPrivate(_priv);return this;};function formatReturnValue(bn,enc,len){if(!Array.isArray(bn)){bn=bn.toArray();}var buf=new Buffer(bn);if(len&&buf.length<len){var zeros=new Buffer(len-buf.length);zeros.fill(0);buf=Buffer.concat([zeros,buf]);}if(!enc){return buf;}else{return buf.toString(enc);}}}).call(this,require("buffer").Buffer);},{"bn.js":198,"buffer":95,"elliptic":199}],198:[function(require,module,exports){arguments[4][132][0].apply(exports,arguments);},{"buffer":94,"dup":132}],199:[function(require,module,exports){arguments[4][134][0].apply(exports,arguments);},{"../package.json":222,"./elliptic/curve":202,"./elliptic/curves":205,"./elliptic/ec":206,"./elliptic/eddsa":209,"./elliptic/hmac-drbg":212,"./elliptic/utils":214,"brorand":215,"dup":134}],200:[function(require,module,exports){arguments[4][135][0].apply(exports,arguments);},{"../../elliptic":199,"bn.js":198,"dup":135}],201:[function(require,module,exports){arguments[4][136][0].apply(exports,arguments);},{"../../elliptic":199,"../curve":202,"bn.js":198,"dup":136,"inherits":292}],202:[function(require,module,exports){arguments[4][137][0].apply(exports,arguments);},{"./base":200,"./edwards":201,"./mont":203,"./short":204,"dup":137}],203:[function(require,module,exports){arguments[4][138][0].apply(exports,arguments);},{"../../elliptic":199,"../curve":202,"bn.js":198,"dup":138,"inherits":292}],204:[function(require,module,exports){arguments[4][139][0].apply(exports,arguments);},{"../../elliptic":199,"../curve":202,"bn.js":198,"dup":139,"inherits":292}],205:[function(require,module,exports){arguments[4][140][0].apply(exports,arguments);},{"../elliptic":199,"./precomputed/secp256k1":213,"dup":140,"hash.js":216}],206:[function(require,module,exports){arguments[4][141][0].apply(exports,arguments);},{"../../elliptic":199,"./key":207,"./signature":208,"bn.js":198,"dup":141}],207:[function(require,module,exports){arguments[4][142][0].apply(exports,arguments);},{"bn.js":198,"dup":142}],208:[function(require,module,exports){arguments[4][143][0].apply(exports,arguments);},{"../../elliptic":199,"bn.js":198,"dup":143}],209:[function(require,module,exports){arguments[4][144][0].apply(exports,arguments);},{"../../elliptic":199,"./key":210,"./signature":211,"dup":144,"hash.js":216}],210:[function(require,module,exports){arguments[4][145][0].apply(exports,arguments);},{"../../elliptic":199,"dup":145}],211:[function(require,module,exports){arguments[4][146][0].apply(exports,arguments);},{"../../elliptic":199,"bn.js":198,"dup":146}],212:[function(require,module,exports){arguments[4][147][0].apply(exports,arguments);},{"../elliptic":199,"dup":147,"hash.js":216}],213:[function(require,module,exports){arguments[4][148][0].apply(exports,arguments);},{"dup":148}],214:[function(require,module,exports){arguments[4][149][0].apply(exports,arguments);},{"bn.js":198,"dup":149}],215:[function(require,module,exports){arguments[4][150][0].apply(exports,arguments);},{"dup":150}],216:[function(require,module,exports){arguments[4][151][0].apply(exports,arguments);},{"./hash/common":217,"./hash/hmac":218,"./hash/ripemd":219,"./hash/sha":220,"./hash/utils":221,"dup":151}],217:[function(require,module,exports){arguments[4][152][0].apply(exports,arguments);},{"../hash":216,"dup":152}],218:[function(require,module,exports){arguments[4][153][0].apply(exports,arguments);},{"../hash":216,"dup":153}],219:[function(require,module,exports){arguments[4][154][0].apply(exports,arguments);},{"../hash":216,"dup":154}],220:[function(require,module,exports){arguments[4][155][0].apply(exports,arguments);},{"../hash":216,"dup":155}],221:[function(require,module,exports){arguments[4][156][0].apply(exports,arguments);},{"dup":156,"inherits":292}],222:[function(require,module,exports){arguments[4][157][0].apply(exports,arguments);},{"dup":157}],223:[function(require,module,exports){(function(Buffer){'use strict';var inherits=require('inherits');var md5=require('./md5');var rmd160=require('ripemd160');var sha=require('sha.js');var Base=require('cipher-base');function HashNoConstructor(hash){Base.call(this,'digest');this._hash=hash;this.buffers=[];}inherits(HashNoConstructor,Base);HashNoConstructor.prototype._update=function(data){this.buffers.push(data);};HashNoConstructor.prototype._final=function(){var buf=Buffer.concat(this.buffers);var r=this._hash(buf);this.buffers=null;return r;};function Hash(hash){Base.call(this,'digest');this._hash=hash;}inherits(Hash,Base);Hash.prototype._update=function(data){this._hash.update(data);};Hash.prototype._final=function(){return this._hash.digest();};module.exports=function createHash(alg){alg=alg.toLowerCase();if('md5'===alg)return new HashNoConstructor(md5);if('rmd160'===alg||'ripemd160'===alg)return new HashNoConstructor(rmd160);return new Hash(sha(alg));};}).call(this,require("buffer").Buffer);},{"./md5":225,"buffer":95,"cipher-base":226,"inherits":292,"ripemd160":227,"sha.js":229}],224:[function(require,module,exports){(function(Buffer){'use strict';var intSize=4;var zeroBuffer=new Buffer(intSize);zeroBuffer.fill(0);var chrsz=8;function toArray(buf,bigEndian){if(buf.length%intSize!==0){var len=buf.length+(intSize-buf.length%intSize);buf=Buffer.concat([buf,zeroBuffer],len);}var arr=[];var fn=bigEndian?buf.readInt32BE:buf.readInt32LE;for(var i=0;i<buf.length;i+=intSize){arr.push(fn.call(buf,i));}return arr;}function toBuffer(arr,size,bigEndian){var buf=new Buffer(size);var fn=bigEndian?buf.writeInt32BE:buf.writeInt32LE;for(var i=0;i<arr.length;i++){fn.call(buf,arr[i],i*4,true);}return buf;}function hash(buf,fn,hashSize,bigEndian){if(!Buffer.isBuffer(buf))buf=new Buffer(buf);var arr=fn(toArray(buf,bigEndian),buf.length*chrsz);return toBuffer(arr,hashSize,bigEndian);}exports.hash=hash;}).call(this,require("buffer").Buffer);},{"buffer":95}],225:[function(require,module,exports){'use strict';/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */var helpers=require('./helpers');/*
 * Calculate the MD5 of an array of little-endian words, and a bit length
 */function core_md5(x,len){/* append padding */x[len>>5]|=0x80<<len%32;x[(len+64>>>9<<4)+14]=len;var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;for(var i=0;i<x.length;i+=16){var olda=a;var oldb=b;var oldc=c;var oldd=d;a=md5_ff(a,b,c,d,x[i+0],7,-680876936);d=md5_ff(d,a,b,c,x[i+1],12,-389564586);c=md5_ff(c,d,a,b,x[i+2],17,606105819);b=md5_ff(b,c,d,a,x[i+3],22,-1044525330);a=md5_ff(a,b,c,d,x[i+4],7,-176418897);d=md5_ff(d,a,b,c,x[i+5],12,1200080426);c=md5_ff(c,d,a,b,x[i+6],17,-1473231341);b=md5_ff(b,c,d,a,x[i+7],22,-45705983);a=md5_ff(a,b,c,d,x[i+8],7,1770035416);d=md5_ff(d,a,b,c,x[i+9],12,-1958414417);c=md5_ff(c,d,a,b,x[i+10],17,-42063);b=md5_ff(b,c,d,a,x[i+11],22,-1990404162);a=md5_ff(a,b,c,d,x[i+12],7,1804603682);d=md5_ff(d,a,b,c,x[i+13],12,-40341101);c=md5_ff(c,d,a,b,x[i+14],17,-1502002290);b=md5_ff(b,c,d,a,x[i+15],22,1236535329);a=md5_gg(a,b,c,d,x[i+1],5,-165796510);d=md5_gg(d,a,b,c,x[i+6],9,-1069501632);c=md5_gg(c,d,a,b,x[i+11],14,643717713);b=md5_gg(b,c,d,a,x[i+0],20,-373897302);a=md5_gg(a,b,c,d,x[i+5],5,-701558691);d=md5_gg(d,a,b,c,x[i+10],9,38016083);c=md5_gg(c,d,a,b,x[i+15],14,-660478335);b=md5_gg(b,c,d,a,x[i+4],20,-405537848);a=md5_gg(a,b,c,d,x[i+9],5,568446438);d=md5_gg(d,a,b,c,x[i+14],9,-1019803690);c=md5_gg(c,d,a,b,x[i+3],14,-187363961);b=md5_gg(b,c,d,a,x[i+8],20,1163531501);a=md5_gg(a,b,c,d,x[i+13],5,-1444681467);d=md5_gg(d,a,b,c,x[i+2],9,-51403784);c=md5_gg(c,d,a,b,x[i+7],14,1735328473);b=md5_gg(b,c,d,a,x[i+12],20,-1926607734);a=md5_hh(a,b,c,d,x[i+5],4,-378558);d=md5_hh(d,a,b,c,x[i+8],11,-2022574463);c=md5_hh(c,d,a,b,x[i+11],16,1839030562);b=md5_hh(b,c,d,a,x[i+14],23,-35309556);a=md5_hh(a,b,c,d,x[i+1],4,-1530992060);d=md5_hh(d,a,b,c,x[i+4],11,1272893353);c=md5_hh(c,d,a,b,x[i+7],16,-155497632);b=md5_hh(b,c,d,a,x[i+10],23,-1094730640);a=md5_hh(a,b,c,d,x[i+13],4,681279174);d=md5_hh(d,a,b,c,x[i+0],11,-358537222);c=md5_hh(c,d,a,b,x[i+3],16,-722521979);b=md5_hh(b,c,d,a,x[i+6],23,76029189);a=md5_hh(a,b,c,d,x[i+9],4,-640364487);d=md5_hh(d,a,b,c,x[i+12],11,-421815835);c=md5_hh(c,d,a,b,x[i+15],16,530742520);b=md5_hh(b,c,d,a,x[i+2],23,-995338651);a=md5_ii(a,b,c,d,x[i+0],6,-198630844);d=md5_ii(d,a,b,c,x[i+7],10,1126891415);c=md5_ii(c,d,a,b,x[i+14],15,-1416354905);b=md5_ii(b,c,d,a,x[i+5],21,-57434055);a=md5_ii(a,b,c,d,x[i+12],6,1700485571);d=md5_ii(d,a,b,c,x[i+3],10,-1894986606);c=md5_ii(c,d,a,b,x[i+10],15,-1051523);b=md5_ii(b,c,d,a,x[i+1],21,-2054922799);a=md5_ii(a,b,c,d,x[i+8],6,1873313359);d=md5_ii(d,a,b,c,x[i+15],10,-30611744);c=md5_ii(c,d,a,b,x[i+6],15,-1560198380);b=md5_ii(b,c,d,a,x[i+13],21,1309151649);a=md5_ii(a,b,c,d,x[i+4],6,-145523070);d=md5_ii(d,a,b,c,x[i+11],10,-1120210379);c=md5_ii(c,d,a,b,x[i+2],15,718787259);b=md5_ii(b,c,d,a,x[i+9],21,-343485551);a=safe_add(a,olda);b=safe_add(b,oldb);c=safe_add(c,oldc);d=safe_add(d,oldd);}return Array(a,b,c,d);}/*
 * These functions implement the four basic operations the algorithm uses.
 */function md5_cmn(q,a,b,x,s,t){return safe_add(bit_rol(safe_add(safe_add(a,q),safe_add(x,t)),s),b);}function md5_ff(a,b,c,d,x,s,t){return md5_cmn(b&c|~b&d,a,b,x,s,t);}function md5_gg(a,b,c,d,x,s,t){return md5_cmn(b&d|c&~d,a,b,x,s,t);}function md5_hh(a,b,c,d,x,s,t){return md5_cmn(b^c^d,a,b,x,s,t);}function md5_ii(a,b,c,d,x,s,t){return md5_cmn(c^(b|~d),a,b,x,s,t);}/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */function safe_add(x,y){var lsw=(x&0xFFFF)+(y&0xFFFF);var msw=(x>>16)+(y>>16)+(lsw>>16);return msw<<16|lsw&0xFFFF;}/*
 * Bitwise rotate a 32-bit number to the left.
 */function bit_rol(num,cnt){return num<<cnt|num>>>32-cnt;}module.exports=function md5(buf){return helpers.hash(buf,core_md5,16);};},{"./helpers":224}],226:[function(require,module,exports){arguments[4][116][0].apply(exports,arguments);},{"buffer":95,"dup":116,"inherits":292,"stream":309,"string_decoder":310}],227:[function(require,module,exports){(function(Buffer){/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*//** @preserve
(c) 2012 by Cédric Mesnil. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/// constants table
var zl=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13];var zr=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11];var sl=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6];var sr=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11];var hl=[0x00000000,0x5A827999,0x6ED9EBA1,0x8F1BBCDC,0xA953FD4E];var hr=[0x50A28BE6,0x5C4DD124,0x6D703EF3,0x7A6D76E9,0x00000000];function bytesToWords(bytes){var words=[];for(var i=0,b=0;i<bytes.length;i++,b+=8){words[b>>>5]|=bytes[i]<<24-b%32;}return words;}function wordsToBytes(words){var bytes=[];for(var b=0;b<words.length*32;b+=8){bytes.push(words[b>>>5]>>>24-b%32&0xFF);}return bytes;}function processBlock(H,M,offset){// swap endian
for(var i=0;i<16;i++){var offset_i=offset+i;var M_offset_i=M[offset_i];// Swap
M[offset_i]=(M_offset_i<<8|M_offset_i>>>24)&0x00ff00ff|(M_offset_i<<24|M_offset_i>>>8)&0xff00ff00;}// Working variables
var al,bl,cl,dl,el;var ar,br,cr,dr,er;ar=al=H[0];br=bl=H[1];cr=cl=H[2];dr=dl=H[3];er=el=H[4];// computation
var t;for(i=0;i<80;i+=1){t=al+M[offset+zl[i]]|0;if(i<16){t+=f1(bl,cl,dl)+hl[0];}else if(i<32){t+=f2(bl,cl,dl)+hl[1];}else if(i<48){t+=f3(bl,cl,dl)+hl[2];}else if(i<64){t+=f4(bl,cl,dl)+hl[3];}else{// if (i<80) {
t+=f5(bl,cl,dl)+hl[4];}t=t|0;t=rotl(t,sl[i]);t=t+el|0;al=el;el=dl;dl=rotl(cl,10);cl=bl;bl=t;t=ar+M[offset+zr[i]]|0;if(i<16){t+=f5(br,cr,dr)+hr[0];}else if(i<32){t+=f4(br,cr,dr)+hr[1];}else if(i<48){t+=f3(br,cr,dr)+hr[2];}else if(i<64){t+=f2(br,cr,dr)+hr[3];}else{// if (i<80) {
t+=f1(br,cr,dr)+hr[4];}t=t|0;t=rotl(t,sr[i]);t=t+er|0;ar=er;er=dr;dr=rotl(cr,10);cr=br;br=t;}// intermediate hash value
t=H[1]+cl+dr|0;H[1]=H[2]+dl+er|0;H[2]=H[3]+el+ar|0;H[3]=H[4]+al+br|0;H[4]=H[0]+bl+cr|0;H[0]=t;}function f1(x,y,z){return x^y^z;}function f2(x,y,z){return x&y|~x&z;}function f3(x,y,z){return(x|~y)^z;}function f4(x,y,z){return x&z|y&~z;}function f5(x,y,z){return x^(y|~z);}function rotl(x,n){return x<<n|x>>>32-n;}function ripemd160(message){var H=[0x67452301,0xEFCDAB89,0x98BADCFE,0x10325476,0xC3D2E1F0];if(typeof message==='string'){message=new Buffer(message,'utf8');}var m=bytesToWords(message);var nBitsLeft=message.length*8;var nBitsTotal=message.length*8;// Add padding
m[nBitsLeft>>>5]|=0x80<<24-nBitsLeft%32;m[(nBitsLeft+64>>>9<<4)+14]=(nBitsTotal<<8|nBitsTotal>>>24)&0x00ff00ff|(nBitsTotal<<24|nBitsTotal>>>8)&0xff00ff00;for(var i=0;i<m.length;i+=16){processBlock(H,m,i);}// swap endian
for(i=0;i<5;i++){// shortcut
var H_i=H[i];// Swap
H[i]=(H_i<<8|H_i>>>24)&0x00ff00ff|(H_i<<24|H_i>>>8)&0xff00ff00;}var digestbytes=wordsToBytes(H);return new Buffer(digestbytes);}module.exports=ripemd160;}).call(this,require("buffer").Buffer);},{"buffer":95}],228:[function(require,module,exports){(function(Buffer){// prototype class for hash functions
function Hash(blockSize,finalSize){this._block=new Buffer(blockSize);this._finalSize=finalSize;this._blockSize=blockSize;this._len=0;this._s=0;}Hash.prototype.update=function(data,enc){if(typeof data==='string'){enc=enc||'utf8';data=new Buffer(data,enc);}var l=this._len+=data.length;var s=this._s||0;var f=0;var buffer=this._block;while(s<l){var t=Math.min(data.length,f+this._blockSize-s%this._blockSize);var ch=t-f;for(var i=0;i<ch;i++){buffer[s%this._blockSize+i]=data[i+f];}s+=ch;f+=ch;if(s%this._blockSize===0){this._update(buffer);}}this._s=s;return this;};Hash.prototype.digest=function(enc){// Suppose the length of the message M, in bits, is l
var l=this._len*8;// Append the bit 1 to the end of the message
this._block[this._len%this._blockSize]=0x80;// and then k zero bits, where k is the smallest non-negative solution to the equation (l + 1 + k) === finalSize mod blockSize
this._block.fill(0,this._len%this._blockSize+1);if(l%(this._blockSize*8)>=this._finalSize*8){this._update(this._block);this._block.fill(0);}// to this append the block which is equal to the number l written in binary
// TODO: handle case where l is > Math.pow(2, 29)
this._block.writeInt32BE(l,this._blockSize-4);var hash=this._update(this._block)||this._hash();return enc?hash.toString(enc):hash;};Hash.prototype._update=function(){throw new Error('_update must be implemented by subclass');};module.exports=Hash;}).call(this,require("buffer").Buffer);},{"buffer":95}],229:[function(require,module,exports){var exports=module.exports=function SHA(algorithm){algorithm=algorithm.toLowerCase();var Algorithm=exports[algorithm];if(!Algorithm)throw new Error(algorithm+' is not supported (we accept pull requests)');return new Algorithm();};exports.sha=require('./sha');exports.sha1=require('./sha1');exports.sha224=require('./sha224');exports.sha256=require('./sha256');exports.sha384=require('./sha384');exports.sha512=require('./sha512');},{"./sha":230,"./sha1":231,"./sha224":232,"./sha256":233,"./sha384":234,"./sha512":235}],230:[function(require,module,exports){(function(Buffer){/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-0, as defined
 * in FIPS PUB 180-1
 * This source code is derived from sha1.js of the same repository.
 * The difference between SHA-0 and SHA-1 is just a bitwise rotate left
 * operation was added.
 */var inherits=require('inherits');var Hash=require('./hash');var W=new Array(80);function Sha(){this.init();this._w=W;Hash.call(this,64,56);}inherits(Sha,Hash);Sha.prototype.init=function(){this._a=0x67452301|0;this._b=0xefcdab89|0;this._c=0x98badcfe|0;this._d=0x10325476|0;this._e=0xc3d2e1f0|0;return this;};/*
 * Bitwise rotate a 32-bit number to the left.
 */function rol(num,cnt){return num<<cnt|num>>>32-cnt;}Sha.prototype._update=function(M){var W=this._w;var a=this._a;var b=this._b;var c=this._c;var d=this._d;var e=this._e;var j=0;var k;/*
   * SHA-1 has a bitwise rotate left operation. But, SHA is not
   * function calcW() { return rol(W[j - 3] ^ W[j -  8] ^ W[j - 14] ^ W[j - 16], 1) }
   */function calcW(){return W[j-3]^W[j-8]^W[j-14]^W[j-16];}function loop(w,f){W[j]=w;var t=rol(a,5)+f+e+w+k;e=d;d=c;c=rol(b,30);b=a;a=t;j++;}k=1518500249;while(j<16)loop(M.readInt32BE(j*4),b&c|~b&d);while(j<20)loop(calcW(),b&c|~b&d);k=1859775393;while(j<40)loop(calcW(),b^c^d);k=-1894007588;while(j<60)loop(calcW(),b&c|b&d|c&d);k=-899497514;while(j<80)loop(calcW(),b^c^d);this._a=a+this._a|0;this._b=b+this._b|0;this._c=c+this._c|0;this._d=d+this._d|0;this._e=e+this._e|0;};Sha.prototype._hash=function(){var H=new Buffer(20);H.writeInt32BE(this._a|0,0);H.writeInt32BE(this._b|0,4);H.writeInt32BE(this._c|0,8);H.writeInt32BE(this._d|0,12);H.writeInt32BE(this._e|0,16);return H;};module.exports=Sha;}).call(this,require("buffer").Buffer);},{"./hash":228,"buffer":95,"inherits":292}],231:[function(require,module,exports){(function(Buffer){/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS PUB 180-1
 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */var inherits=require('inherits');var Hash=require('./hash');var W=new Array(80);function Sha1(){this.init();this._w=W;Hash.call(this,64,56);}inherits(Sha1,Hash);Sha1.prototype.init=function(){this._a=0x67452301|0;this._b=0xefcdab89|0;this._c=0x98badcfe|0;this._d=0x10325476|0;this._e=0xc3d2e1f0|0;return this;};/*
 * Bitwise rotate a 32-bit number to the left.
 */function rol(num,cnt){return num<<cnt|num>>>32-cnt;}Sha1.prototype._update=function(M){var W=this._w;var a=this._a;var b=this._b;var c=this._c;var d=this._d;var e=this._e;var j=0;var k;function calcW(){return rol(W[j-3]^W[j-8]^W[j-14]^W[j-16],1);}function loop(w,f){W[j]=w;var t=rol(a,5)+f+e+w+k;e=d;d=c;c=rol(b,30);b=a;a=t;j++;}k=1518500249;while(j<16)loop(M.readInt32BE(j*4),b&c|~b&d);while(j<20)loop(calcW(),b&c|~b&d);k=1859775393;while(j<40)loop(calcW(),b^c^d);k=-1894007588;while(j<60)loop(calcW(),b&c|b&d|c&d);k=-899497514;while(j<80)loop(calcW(),b^c^d);this._a=a+this._a|0;this._b=b+this._b|0;this._c=c+this._c|0;this._d=d+this._d|0;this._e=e+this._e|0;};Sha1.prototype._hash=function(){var H=new Buffer(20);H.writeInt32BE(this._a|0,0);H.writeInt32BE(this._b|0,4);H.writeInt32BE(this._c|0,8);H.writeInt32BE(this._d|0,12);H.writeInt32BE(this._e|0,16);return H;};module.exports=Sha1;}).call(this,require("buffer").Buffer);},{"./hash":228,"buffer":95,"inherits":292}],232:[function(require,module,exports){(function(Buffer){/**
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
 * in FIPS 180-2
 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 *
 */var inherits=require('inherits');var Sha256=require('./sha256');var Hash=require('./hash');var W=new Array(64);function Sha224(){this.init();this._w=W;// new Array(64)
Hash.call(this,64,56);}inherits(Sha224,Sha256);Sha224.prototype.init=function(){this._a=0xc1059ed8|0;this._b=0x367cd507|0;this._c=0x3070dd17|0;this._d=0xf70e5939|0;this._e=0xffc00b31|0;this._f=0x68581511|0;this._g=0x64f98fa7|0;this._h=0xbefa4fa4|0;return this;};Sha224.prototype._hash=function(){var H=new Buffer(28);H.writeInt32BE(this._a,0);H.writeInt32BE(this._b,4);H.writeInt32BE(this._c,8);H.writeInt32BE(this._d,12);H.writeInt32BE(this._e,16);H.writeInt32BE(this._f,20);H.writeInt32BE(this._g,24);return H;};module.exports=Sha224;}).call(this,require("buffer").Buffer);},{"./hash":228,"./sha256":233,"buffer":95,"inherits":292}],233:[function(require,module,exports){(function(Buffer){/**
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
 * in FIPS 180-2
 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 *
 */var inherits=require('inherits');var Hash=require('./hash');var K=[0x428A2F98,0x71374491,0xB5C0FBCF,0xE9B5DBA5,0x3956C25B,0x59F111F1,0x923F82A4,0xAB1C5ED5,0xD807AA98,0x12835B01,0x243185BE,0x550C7DC3,0x72BE5D74,0x80DEB1FE,0x9BDC06A7,0xC19BF174,0xE49B69C1,0xEFBE4786,0x0FC19DC6,0x240CA1CC,0x2DE92C6F,0x4A7484AA,0x5CB0A9DC,0x76F988DA,0x983E5152,0xA831C66D,0xB00327C8,0xBF597FC7,0xC6E00BF3,0xD5A79147,0x06CA6351,0x14292967,0x27B70A85,0x2E1B2138,0x4D2C6DFC,0x53380D13,0x650A7354,0x766A0ABB,0x81C2C92E,0x92722C85,0xA2BFE8A1,0xA81A664B,0xC24B8B70,0xC76C51A3,0xD192E819,0xD6990624,0xF40E3585,0x106AA070,0x19A4C116,0x1E376C08,0x2748774C,0x34B0BCB5,0x391C0CB3,0x4ED8AA4A,0x5B9CCA4F,0x682E6FF3,0x748F82EE,0x78A5636F,0x84C87814,0x8CC70208,0x90BEFFFA,0xA4506CEB,0xBEF9A3F7,0xC67178F2];var W=new Array(64);function Sha256(){this.init();this._w=W;// new Array(64)
Hash.call(this,64,56);}inherits(Sha256,Hash);Sha256.prototype.init=function(){this._a=0x6a09e667|0;this._b=0xbb67ae85|0;this._c=0x3c6ef372|0;this._d=0xa54ff53a|0;this._e=0x510e527f|0;this._f=0x9b05688c|0;this._g=0x1f83d9ab|0;this._h=0x5be0cd19|0;return this;};function Ch(x,y,z){return z^x&(y^z);}function Maj(x,y,z){return x&y|z&(x|y);}function Sigma0(x){return(x>>>2|x<<30)^(x>>>13|x<<19)^(x>>>22|x<<10);}function Sigma1(x){return(x>>>6|x<<26)^(x>>>11|x<<21)^(x>>>25|x<<7);}function Gamma0(x){return(x>>>7|x<<25)^(x>>>18|x<<14)^x>>>3;}function Gamma1(x){return(x>>>17|x<<15)^(x>>>19|x<<13)^x>>>10;}Sha256.prototype._update=function(M){var W=this._w;var a=this._a|0;var b=this._b|0;var c=this._c|0;var d=this._d|0;var e=this._e|0;var f=this._f|0;var g=this._g|0;var h=this._h|0;var j=0;function calcW(){return Gamma1(W[j-2])+W[j-7]+Gamma0(W[j-15])+W[j-16];}function loop(w){W[j]=w;var T1=h+Sigma1(e)+Ch(e,f,g)+K[j]+w;var T2=Sigma0(a)+Maj(a,b,c);h=g;g=f;f=e;e=d+T1;d=c;c=b;b=a;a=T1+T2;j++;}while(j<16)loop(M.readInt32BE(j*4));while(j<64)loop(calcW());this._a=a+this._a|0;this._b=b+this._b|0;this._c=c+this._c|0;this._d=d+this._d|0;this._e=e+this._e|0;this._f=f+this._f|0;this._g=g+this._g|0;this._h=h+this._h|0;};Sha256.prototype._hash=function(){var H=new Buffer(32);H.writeInt32BE(this._a,0);H.writeInt32BE(this._b,4);H.writeInt32BE(this._c,8);H.writeInt32BE(this._d,12);H.writeInt32BE(this._e,16);H.writeInt32BE(this._f,20);H.writeInt32BE(this._g,24);H.writeInt32BE(this._h,28);return H;};module.exports=Sha256;}).call(this,require("buffer").Buffer);},{"./hash":228,"buffer":95,"inherits":292}],234:[function(require,module,exports){(function(Buffer){var inherits=require('inherits');var SHA512=require('./sha512');var Hash=require('./hash');var W=new Array(160);function Sha384(){this.init();this._w=W;Hash.call(this,128,112);}inherits(Sha384,SHA512);Sha384.prototype.init=function(){this._a=0xcbbb9d5d|0;this._b=0x629a292a|0;this._c=0x9159015a|0;this._d=0x152fecd8|0;this._e=0x67332667|0;this._f=0x8eb44a87|0;this._g=0xdb0c2e0d|0;this._h=0x47b5481d|0;this._al=0xc1059ed8|0;this._bl=0x367cd507|0;this._cl=0x3070dd17|0;this._dl=0xf70e5939|0;this._el=0xffc00b31|0;this._fl=0x68581511|0;this._gl=0x64f98fa7|0;this._hl=0xbefa4fa4|0;return this;};Sha384.prototype._hash=function(){var H=new Buffer(48);function writeInt64BE(h,l,offset){H.writeInt32BE(h,offset);H.writeInt32BE(l,offset+4);}writeInt64BE(this._a,this._al,0);writeInt64BE(this._b,this._bl,8);writeInt64BE(this._c,this._cl,16);writeInt64BE(this._d,this._dl,24);writeInt64BE(this._e,this._el,32);writeInt64BE(this._f,this._fl,40);return H;};module.exports=Sha384;}).call(this,require("buffer").Buffer);},{"./hash":228,"./sha512":235,"buffer":95,"inherits":292}],235:[function(require,module,exports){(function(Buffer){var inherits=require('inherits');var Hash=require('./hash');var K=[0x428a2f98,0xd728ae22,0x71374491,0x23ef65cd,0xb5c0fbcf,0xec4d3b2f,0xe9b5dba5,0x8189dbbc,0x3956c25b,0xf348b538,0x59f111f1,0xb605d019,0x923f82a4,0xaf194f9b,0xab1c5ed5,0xda6d8118,0xd807aa98,0xa3030242,0x12835b01,0x45706fbe,0x243185be,0x4ee4b28c,0x550c7dc3,0xd5ffb4e2,0x72be5d74,0xf27b896f,0x80deb1fe,0x3b1696b1,0x9bdc06a7,0x25c71235,0xc19bf174,0xcf692694,0xe49b69c1,0x9ef14ad2,0xefbe4786,0x384f25e3,0x0fc19dc6,0x8b8cd5b5,0x240ca1cc,0x77ac9c65,0x2de92c6f,0x592b0275,0x4a7484aa,0x6ea6e483,0x5cb0a9dc,0xbd41fbd4,0x76f988da,0x831153b5,0x983e5152,0xee66dfab,0xa831c66d,0x2db43210,0xb00327c8,0x98fb213f,0xbf597fc7,0xbeef0ee4,0xc6e00bf3,0x3da88fc2,0xd5a79147,0x930aa725,0x06ca6351,0xe003826f,0x14292967,0x0a0e6e70,0x27b70a85,0x46d22ffc,0x2e1b2138,0x5c26c926,0x4d2c6dfc,0x5ac42aed,0x53380d13,0x9d95b3df,0x650a7354,0x8baf63de,0x766a0abb,0x3c77b2a8,0x81c2c92e,0x47edaee6,0x92722c85,0x1482353b,0xa2bfe8a1,0x4cf10364,0xa81a664b,0xbc423001,0xc24b8b70,0xd0f89791,0xc76c51a3,0x0654be30,0xd192e819,0xd6ef5218,0xd6990624,0x5565a910,0xf40e3585,0x5771202a,0x106aa070,0x32bbd1b8,0x19a4c116,0xb8d2d0c8,0x1e376c08,0x5141ab53,0x2748774c,0xdf8eeb99,0x34b0bcb5,0xe19b48a8,0x391c0cb3,0xc5c95a63,0x4ed8aa4a,0xe3418acb,0x5b9cca4f,0x7763e373,0x682e6ff3,0xd6b2b8a3,0x748f82ee,0x5defb2fc,0x78a5636f,0x43172f60,0x84c87814,0xa1f0ab72,0x8cc70208,0x1a6439ec,0x90befffa,0x23631e28,0xa4506ceb,0xde82bde9,0xbef9a3f7,0xb2c67915,0xc67178f2,0xe372532b,0xca273ece,0xea26619c,0xd186b8c7,0x21c0c207,0xeada7dd6,0xcde0eb1e,0xf57d4f7f,0xee6ed178,0x06f067aa,0x72176fba,0x0a637dc5,0xa2c898a6,0x113f9804,0xbef90dae,0x1b710b35,0x131c471b,0x28db77f5,0x23047d84,0x32caab7b,0x40c72493,0x3c9ebe0a,0x15c9bebc,0x431d67c4,0x9c100d4c,0x4cc5d4be,0xcb3e42b6,0x597f299c,0xfc657e2a,0x5fcb6fab,0x3ad6faec,0x6c44198c,0x4a475817];var W=new Array(160);function Sha512(){this.init();this._w=W;Hash.call(this,128,112);}inherits(Sha512,Hash);Sha512.prototype.init=function(){this._a=0x6a09e667|0;this._b=0xbb67ae85|0;this._c=0x3c6ef372|0;this._d=0xa54ff53a|0;this._e=0x510e527f|0;this._f=0x9b05688c|0;this._g=0x1f83d9ab|0;this._h=0x5be0cd19|0;this._al=0xf3bcc908|0;this._bl=0x84caa73b|0;this._cl=0xfe94f82b|0;this._dl=0x5f1d36f1|0;this._el=0xade682d1|0;this._fl=0x2b3e6c1f|0;this._gl=0xfb41bd6b|0;this._hl=0x137e2179|0;return this;};function Ch(x,y,z){return z^x&(y^z);}function Maj(x,y,z){return x&y|z&(x|y);}function Sigma0(x,xl){return(x>>>28|xl<<4)^(xl>>>2|x<<30)^(xl>>>7|x<<25);}function Sigma1(x,xl){return(x>>>14|xl<<18)^(x>>>18|xl<<14)^(xl>>>9|x<<23);}function Gamma0(x,xl){return(x>>>1|xl<<31)^(x>>>8|xl<<24)^x>>>7;}function Gamma0l(x,xl){return(x>>>1|xl<<31)^(x>>>8|xl<<24)^(x>>>7|xl<<25);}function Gamma1(x,xl){return(x>>>19|xl<<13)^(xl>>>29|x<<3)^x>>>6;}function Gamma1l(x,xl){return(x>>>19|xl<<13)^(xl>>>29|x<<3)^(x>>>6|xl<<26);}Sha512.prototype._update=function(M){var W=this._w;var a=this._a|0;var b=this._b|0;var c=this._c|0;var d=this._d|0;var e=this._e|0;var f=this._f|0;var g=this._g|0;var h=this._h|0;var al=this._al|0;var bl=this._bl|0;var cl=this._cl|0;var dl=this._dl|0;var el=this._el|0;var fl=this._fl|0;var gl=this._gl|0;var hl=this._hl|0;var i=0;var j=0;var Wi,Wil;function calcW(){var x=W[j-15*2];var xl=W[j-15*2+1];var gamma0=Gamma0(x,xl);var gamma0l=Gamma0l(xl,x);x=W[j-2*2];xl=W[j-2*2+1];var gamma1=Gamma1(x,xl);var gamma1l=Gamma1l(xl,x);// W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
var Wi7=W[j-7*2];var Wi7l=W[j-7*2+1];var Wi16=W[j-16*2];var Wi16l=W[j-16*2+1];Wil=gamma0l+Wi7l;Wi=gamma0+Wi7+(Wil>>>0<gamma0l>>>0?1:0);Wil=Wil+gamma1l;Wi=Wi+gamma1+(Wil>>>0<gamma1l>>>0?1:0);Wil=Wil+Wi16l;Wi=Wi+Wi16+(Wil>>>0<Wi16l>>>0?1:0);}function loop(){W[j]=Wi;W[j+1]=Wil;var maj=Maj(a,b,c);var majl=Maj(al,bl,cl);var sigma0h=Sigma0(a,al);var sigma0l=Sigma0(al,a);var sigma1h=Sigma1(e,el);var sigma1l=Sigma1(el,e);// t1 = h + sigma1 + ch + K[i] + W[i]
var Ki=K[j];var Kil=K[j+1];var ch=Ch(e,f,g);var chl=Ch(el,fl,gl);var t1l=hl+sigma1l;var t1=h+sigma1h+(t1l>>>0<hl>>>0?1:0);t1l=t1l+chl;t1=t1+ch+(t1l>>>0<chl>>>0?1:0);t1l=t1l+Kil;t1=t1+Ki+(t1l>>>0<Kil>>>0?1:0);t1l=t1l+Wil;t1=t1+Wi+(t1l>>>0<Wil>>>0?1:0);// t2 = sigma0 + maj
var t2l=sigma0l+majl;var t2=sigma0h+maj+(t2l>>>0<sigma0l>>>0?1:0);h=g;hl=gl;g=f;gl=fl;f=e;fl=el;el=dl+t1l|0;e=d+t1+(el>>>0<dl>>>0?1:0)|0;d=c;dl=cl;c=b;cl=bl;b=a;bl=al;al=t1l+t2l|0;a=t1+t2+(al>>>0<t1l>>>0?1:0)|0;i++;j+=2;}while(i<16){Wi=M.readInt32BE(j*4);Wil=M.readInt32BE(j*4+4);loop();}while(i<80){calcW();loop();}this._al=this._al+al|0;this._bl=this._bl+bl|0;this._cl=this._cl+cl|0;this._dl=this._dl+dl|0;this._el=this._el+el|0;this._fl=this._fl+fl|0;this._gl=this._gl+gl|0;this._hl=this._hl+hl|0;this._a=this._a+a+(this._al>>>0<al>>>0?1:0)|0;this._b=this._b+b+(this._bl>>>0<bl>>>0?1:0)|0;this._c=this._c+c+(this._cl>>>0<cl>>>0?1:0)|0;this._d=this._d+d+(this._dl>>>0<dl>>>0?1:0)|0;this._e=this._e+e+(this._el>>>0<el>>>0?1:0)|0;this._f=this._f+f+(this._fl>>>0<fl>>>0?1:0)|0;this._g=this._g+g+(this._gl>>>0<gl>>>0?1:0)|0;this._h=this._h+h+(this._hl>>>0<hl>>>0?1:0)|0;};Sha512.prototype._hash=function(){var H=new Buffer(64);function writeInt64BE(h,l,offset){H.writeInt32BE(h,offset);H.writeInt32BE(l,offset+4);}writeInt64BE(this._a,this._al,0);writeInt64BE(this._b,this._bl,8);writeInt64BE(this._c,this._cl,16);writeInt64BE(this._d,this._dl,24);writeInt64BE(this._e,this._el,32);writeInt64BE(this._f,this._fl,40);writeInt64BE(this._g,this._gl,48);writeInt64BE(this._h,this._hl,56);return H;};module.exports=Sha512;}).call(this,require("buffer").Buffer);},{"./hash":228,"buffer":95,"inherits":292}],236:[function(require,module,exports){(function(Buffer){'use strict';var createHash=require('create-hash/browser');var inherits=require('inherits');var Transform=require('stream').Transform;var ZEROS=new Buffer(128);ZEROS.fill(0);function Hmac(alg,key){Transform.call(this);alg=alg.toLowerCase();if(typeof key==='string'){key=new Buffer(key);}var blocksize=alg==='sha512'||alg==='sha384'?128:64;this._alg=alg;this._key=key;if(key.length>blocksize){key=createHash(alg).update(key).digest();}else if(key.length<blocksize){key=Buffer.concat([key,ZEROS],blocksize);}var ipad=this._ipad=new Buffer(blocksize);var opad=this._opad=new Buffer(blocksize);for(var i=0;i<blocksize;i++){ipad[i]=key[i]^0x36;opad[i]=key[i]^0x5C;}this._hash=createHash(alg).update(ipad);}inherits(Hmac,Transform);Hmac.prototype.update=function(data,enc){this._hash.update(data,enc);return this;};Hmac.prototype._transform=function(data,_,next){this._hash.update(data);next();};Hmac.prototype._flush=function(next){this.push(this.digest());next();};Hmac.prototype.digest=function(enc){var h=this._hash.digest();return createHash(this._alg).update(this._opad).update(h).digest(enc);};module.exports=function createHmac(alg,key){return new Hmac(alg,key);};}).call(this,require("buffer").Buffer);},{"buffer":95,"create-hash/browser":223,"inherits":292,"stream":309}],237:[function(require,module,exports){(function(Buffer){var generatePrime=require('./lib/generatePrime');var primes=require('./lib/primes.json');var DH=require('./lib/dh');function getDiffieHellman(mod){var prime=new Buffer(primes[mod].prime,'hex');var gen=new Buffer(primes[mod].gen,'hex');return new DH(prime,gen);}var ENCODINGS={'binary':true,'hex':true,'base64':true};function createDiffieHellman(prime,enc,generator,genc){if(Buffer.isBuffer(enc)||ENCODINGS[enc]===undefined){return createDiffieHellman(prime,'binary',enc,generator);}enc=enc||'binary';genc=genc||'binary';generator=generator||new Buffer([2]);if(!Buffer.isBuffer(generator)){generator=new Buffer(generator,genc);}if(typeof prime==='number'){return new DH(generatePrime(prime,generator),generator,true);}if(!Buffer.isBuffer(prime)){prime=new Buffer(prime,enc);}return new DH(prime,generator,true);}exports.DiffieHellmanGroup=exports.createDiffieHellmanGroup=exports.getDiffieHellman=getDiffieHellman;exports.createDiffieHellman=exports.DiffieHellman=createDiffieHellman;}).call(this,require("buffer").Buffer);},{"./lib/dh":238,"./lib/generatePrime":239,"./lib/primes.json":240,"buffer":95}],238:[function(require,module,exports){(function(Buffer){var BN=require('bn.js');var MillerRabin=require('miller-rabin');var millerRabin=new MillerRabin();var TWENTYFOUR=new BN(24);var ELEVEN=new BN(11);var TEN=new BN(10);var THREE=new BN(3);var SEVEN=new BN(7);var primes=require('./generatePrime');var randomBytes=require('randombytes');module.exports=DH;function setPublicKey(pub,enc){enc=enc||'utf8';if(!Buffer.isBuffer(pub)){pub=new Buffer(pub,enc);}this._pub=new BN(pub);return this;}function setPrivateKey(priv,enc){enc=enc||'utf8';if(!Buffer.isBuffer(priv)){priv=new Buffer(priv,enc);}this._priv=new BN(priv);return this;}var primeCache={};function checkPrime(prime,generator){var gen=generator.toString('hex');var hex=[gen,prime.toString(16)].join('_');if(hex in primeCache){return primeCache[hex];}var error=0;if(prime.isEven()||!primes.simpleSieve||!primes.fermatTest(prime)||!millerRabin.test(prime)){//not a prime so +1
error+=1;if(gen==='02'||gen==='05'){// we'd be able to check the generator
// it would fail so +8
error+=8;}else{//we wouldn't be able to test the generator
// so +4
error+=4;}primeCache[hex]=error;return error;}if(!millerRabin.test(prime.shrn(1))){//not a safe prime
error+=2;}var rem;switch(gen){case'02':if(prime.mod(TWENTYFOUR).cmp(ELEVEN)){// unsuidable generator
error+=8;}break;case'05':rem=prime.mod(TEN);if(rem.cmp(THREE)&&rem.cmp(SEVEN)){// prime mod 10 needs to equal 3 or 7
error+=8;}break;default:error+=4;}primeCache[hex]=error;return error;}function DH(prime,generator,malleable){this.setGenerator(generator);this.__prime=new BN(prime);this._prime=BN.mont(this.__prime);this._primeLen=prime.length;this._pub=undefined;this._priv=undefined;this._primeCode=undefined;if(malleable){this.setPublicKey=setPublicKey;this.setPrivateKey=setPrivateKey;}else{this._primeCode=8;}}Object.defineProperty(DH.prototype,'verifyError',{enumerable:true,get:function(){if(typeof this._primeCode!=='number'){this._primeCode=checkPrime(this.__prime,this.__gen);}return this._primeCode;}});DH.prototype.generateKeys=function(){if(!this._priv){this._priv=new BN(randomBytes(this._primeLen));}this._pub=this._gen.toRed(this._prime).redPow(this._priv).fromRed();return this.getPublicKey();};DH.prototype.computeSecret=function(other){other=new BN(other);other=other.toRed(this._prime);var secret=other.redPow(this._priv).fromRed();var out=new Buffer(secret.toArray());var prime=this.getPrime();if(out.length<prime.length){var front=new Buffer(prime.length-out.length);front.fill(0);out=Buffer.concat([front,out]);}return out;};DH.prototype.getPublicKey=function getPublicKey(enc){return formatReturnValue(this._pub,enc);};DH.prototype.getPrivateKey=function getPrivateKey(enc){return formatReturnValue(this._priv,enc);};DH.prototype.getPrime=function(enc){return formatReturnValue(this.__prime,enc);};DH.prototype.getGenerator=function(enc){return formatReturnValue(this._gen,enc);};DH.prototype.setGenerator=function(gen,enc){enc=enc||'utf8';if(!Buffer.isBuffer(gen)){gen=new Buffer(gen,enc);}this.__gen=gen;this._gen=new BN(gen);return this;};function formatReturnValue(bn,enc){var buf=new Buffer(bn.toArray());if(!enc){return buf;}else{return buf.toString(enc);}}}).call(this,require("buffer").Buffer);},{"./generatePrime":239,"bn.js":241,"buffer":95,"miller-rabin":242,"randombytes":290}],239:[function(require,module,exports){var randomBytes=require('randombytes');module.exports=findPrime;findPrime.simpleSieve=simpleSieve;findPrime.fermatTest=fermatTest;var BN=require('bn.js');var TWENTYFOUR=new BN(24);var MillerRabin=require('miller-rabin');var millerRabin=new MillerRabin();var ONE=new BN(1);var TWO=new BN(2);var FIVE=new BN(5);var SIXTEEN=new BN(16);var EIGHT=new BN(8);var TEN=new BN(10);var THREE=new BN(3);var SEVEN=new BN(7);var ELEVEN=new BN(11);var FOUR=new BN(4);var TWELVE=new BN(12);var primes=null;function _getPrimes(){if(primes!==null)return primes;var limit=0x100000;var res=[];res[0]=2;for(var i=1,k=3;k<limit;k+=2){var sqrt=Math.ceil(Math.sqrt(k));for(var j=0;j<i&&res[j]<=sqrt;j++)if(k%res[j]===0)break;if(i!==j&&res[j]<=sqrt)continue;res[i++]=k;}primes=res;return res;}function simpleSieve(p){var primes=_getPrimes();for(var i=0;i<primes.length;i++)if(p.modn(primes[i])===0){if(p.cmpn(primes[i])===0){return true;}else{return false;}}return true;}function fermatTest(p){var red=BN.mont(p);return TWO.toRed(red).redPow(p.subn(1)).fromRed().cmpn(1)===0;}function findPrime(bits,gen){if(bits<16){// this is what openssl does
if(gen===2||gen===5){return new BN([0x8c,0x7b]);}else{return new BN([0x8c,0x27]);}}gen=new BN(gen);var num,n2;while(true){num=new BN(randomBytes(Math.ceil(bits/8)));while(num.bitLength()>bits){num.ishrn(1);}if(num.isEven()){num.iadd(ONE);}if(!num.testn(1)){num.iadd(TWO);}if(!gen.cmp(TWO)){while(num.mod(TWENTYFOUR).cmp(ELEVEN)){num.iadd(FOUR);}}else if(!gen.cmp(FIVE)){while(num.mod(TEN).cmp(THREE)){num.iadd(FOUR);}}n2=num.shrn(1);if(simpleSieve(n2)&&simpleSieve(num)&&fermatTest(n2)&&fermatTest(num)&&millerRabin.test(n2)&&millerRabin.test(num)){return num;}}}},{"bn.js":241,"miller-rabin":242,"randombytes":290}],240:[function(require,module,exports){module.exports={"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}};},{}],241:[function(require,module,exports){arguments[4][132][0].apply(exports,arguments);},{"buffer":94,"dup":132}],242:[function(require,module,exports){var bn=require('bn.js');var brorand=require('brorand');function MillerRabin(rand){this.rand=rand||new brorand.Rand();}module.exports=MillerRabin;MillerRabin.create=function create(rand){return new MillerRabin(rand);};MillerRabin.prototype._rand=function _rand(n){var len=n.bitLength();var buf=this.rand.generate(Math.ceil(len/8));// Set low bits
buf[0]|=3;// Mask high bits
var mask=len&0x7;if(mask!==0)buf[buf.length-1]>>=7-mask;return new bn(buf);};MillerRabin.prototype.test=function test(n,k,cb){var len=n.bitLength();var red=bn.mont(n);var rone=new bn(1).toRed(red);if(!k)k=Math.max(1,len/48|0);// Find d and s, (n - 1) = (2 ^ s) * d;
var n1=n.subn(1);var n2=n1.subn(1);for(var s=0;!n1.testn(s);s++){}var d=n.shrn(s);var rn1=n1.toRed(red);var prime=true;for(;k>0;k--){var a=this._rand(n2);if(cb)cb(a);var x=a.toRed(red).redPow(d);if(x.cmp(rone)===0||x.cmp(rn1)===0)continue;for(var i=1;i<s;i++){x=x.redSqr();if(x.cmp(rone)===0)return false;if(x.cmp(rn1)===0)break;}if(i===s)return false;}return prime;};MillerRabin.prototype.getDivisor=function getDivisor(n,k){var len=n.bitLength();var red=bn.mont(n);var rone=new bn(1).toRed(red);if(!k)k=Math.max(1,len/48|0);// Find d and s, (n - 1) = (2 ^ s) * d;
var n1=n.subn(1);var n2=n1.subn(1);for(var s=0;!n1.testn(s);s++){}var d=n.shrn(s);var rn1=n1.toRed(red);for(;k>0;k--){var a=this._rand(n2);var g=n.gcd(a);if(g.cmpn(1)!==0)return g;var x=a.toRed(red).redPow(d);if(x.cmp(rone)===0||x.cmp(rn1)===0)continue;for(var i=1;i<s;i++){x=x.redSqr();if(x.cmp(rone)===0)return x.fromRed().subn(1).gcd(n);if(x.cmp(rn1)===0)break;}if(i===s){x=x.redSqr();return x.fromRed().subn(1).gcd(n);}}return false;};},{"bn.js":241,"brorand":243}],243:[function(require,module,exports){arguments[4][150][0].apply(exports,arguments);},{"dup":150}],244:[function(require,module,exports){(function(Buffer){var createHmac=require('create-hmac');var MAX_ALLOC=Math.pow(2,30)-1;// default in iojs
exports.pbkdf2=pbkdf2;function pbkdf2(password,salt,iterations,keylen,digest,callback){if(typeof digest==='function'){callback=digest;digest=undefined;}if(typeof callback!=='function'){throw new Error('No callback provided to pbkdf2');}var result=pbkdf2Sync(password,salt,iterations,keylen,digest);setTimeout(function(){callback(undefined,result);});}exports.pbkdf2Sync=pbkdf2Sync;function pbkdf2Sync(password,salt,iterations,keylen,digest){if(typeof iterations!=='number'){throw new TypeError('Iterations not a number');}if(iterations<0){throw new TypeError('Bad iterations');}if(typeof keylen!=='number'){throw new TypeError('Key length not a number');}if(keylen<0||keylen>MAX_ALLOC){throw new TypeError('Bad key length');}digest=digest||'sha1';if(!Buffer.isBuffer(password))password=new Buffer(password,'binary');if(!Buffer.isBuffer(salt))salt=new Buffer(salt,'binary');var hLen;var l=1;var DK=new Buffer(keylen);var block1=new Buffer(salt.length+4);salt.copy(block1,0,0,salt.length);var r;var T;for(var i=1;i<=l;i++){block1.writeUInt32BE(i,salt.length);var U=createHmac(digest,password).update(block1).digest();if(!hLen){hLen=U.length;T=new Buffer(hLen);l=Math.ceil(keylen/hLen);r=keylen-(l-1)*hLen;}U.copy(T,0,0,hLen);for(var j=1;j<iterations;j++){U=createHmac(digest,password).update(U).digest();for(var k=0;k<hLen;k++){T[k]^=U[k];}}var destPos=(i-1)*hLen;var len=i===l?r:hLen;T.copy(DK,destPos,0,len);}return DK;}}).call(this,require("buffer").Buffer);},{"buffer":95,"create-hmac":236}],245:[function(require,module,exports){exports.publicEncrypt=require('./publicEncrypt');exports.privateDecrypt=require('./privateDecrypt');exports.privateEncrypt=function privateEncrypt(key,buf){return exports.publicEncrypt(key,buf,true);};exports.publicDecrypt=function publicDecrypt(key,buf){return exports.privateDecrypt(key,buf,true);};},{"./privateDecrypt":286,"./publicEncrypt":287}],246:[function(require,module,exports){(function(Buffer){var createHash=require('create-hash');module.exports=function(seed,len){var t=new Buffer('');var i=0,c;while(t.length<len){c=i2ops(i++);t=Buffer.concat([t,createHash('sha1').update(seed).update(c).digest()]);}return t.slice(0,len);};function i2ops(c){var out=new Buffer(4);out.writeUInt32BE(c,0);return out;}}).call(this,require("buffer").Buffer);},{"buffer":95,"create-hash":223}],247:[function(require,module,exports){arguments[4][132][0].apply(exports,arguments);},{"buffer":94,"dup":132}],248:[function(require,module,exports){arguments[4][133][0].apply(exports,arguments);},{"bn.js":247,"buffer":95,"dup":133,"randombytes":290}],249:[function(require,module,exports){arguments[4][158][0].apply(exports,arguments);},{"dup":158}],250:[function(require,module,exports){arguments[4][159][0].apply(exports,arguments);},{"asn1.js":253,"dup":159}],251:[function(require,module,exports){arguments[4][160][0].apply(exports,arguments);},{"browserify-aes":270,"buffer":95,"dup":160,"evp_bytestokey":285}],252:[function(require,module,exports){arguments[4][161][0].apply(exports,arguments);},{"./aesid.json":249,"./asn1":250,"./fixProc":251,"browserify-aes":270,"buffer":95,"dup":161,"pbkdf2":244}],253:[function(require,module,exports){arguments[4][162][0].apply(exports,arguments);},{"./asn1/api":254,"./asn1/base":256,"./asn1/constants":260,"./asn1/decoders":262,"./asn1/encoders":265,"bn.js":247,"dup":162}],254:[function(require,module,exports){arguments[4][163][0].apply(exports,arguments);},{"../asn1":253,"dup":163,"inherits":292,"vm":311}],255:[function(require,module,exports){arguments[4][164][0].apply(exports,arguments);},{"../base":256,"buffer":95,"dup":164,"inherits":292}],256:[function(require,module,exports){arguments[4][165][0].apply(exports,arguments);},{"./buffer":255,"./node":257,"./reporter":258,"dup":165}],257:[function(require,module,exports){arguments[4][166][0].apply(exports,arguments);},{"../base":256,"dup":166,"minimalistic-assert":267}],258:[function(require,module,exports){arguments[4][167][0].apply(exports,arguments);},{"dup":167,"inherits":292}],259:[function(require,module,exports){arguments[4][168][0].apply(exports,arguments);},{"../constants":260,"dup":168}],260:[function(require,module,exports){arguments[4][169][0].apply(exports,arguments);},{"./der":259,"dup":169}],261:[function(require,module,exports){arguments[4][170][0].apply(exports,arguments);},{"../../asn1":253,"dup":170,"inherits":292}],262:[function(require,module,exports){arguments[4][171][0].apply(exports,arguments);},{"./der":261,"./pem":263,"dup":171}],263:[function(require,module,exports){arguments[4][172][0].apply(exports,arguments);},{"../../asn1":253,"./der":261,"buffer":95,"dup":172,"inherits":292}],264:[function(require,module,exports){arguments[4][173][0].apply(exports,arguments);},{"../../asn1":253,"buffer":95,"dup":173,"inherits":292}],265:[function(require,module,exports){arguments[4][174][0].apply(exports,arguments);},{"./der":264,"./pem":266,"dup":174}],266:[function(require,module,exports){arguments[4][175][0].apply(exports,arguments);},{"../../asn1":253,"./der":264,"buffer":95,"dup":175,"inherits":292}],267:[function(require,module,exports){arguments[4][127][0].apply(exports,arguments);},{"dup":127}],268:[function(require,module,exports){arguments[4][101][0].apply(exports,arguments);},{"buffer":95,"dup":101}],269:[function(require,module,exports){arguments[4][102][0].apply(exports,arguments);},{"./aes":268,"./ghash":273,"buffer":95,"buffer-xor":282,"cipher-base":283,"dup":102,"inherits":292}],270:[function(require,module,exports){arguments[4][103][0].apply(exports,arguments);},{"./decrypter":271,"./encrypter":272,"./modes":274,"dup":103}],271:[function(require,module,exports){arguments[4][104][0].apply(exports,arguments);},{"./aes":268,"./authCipher":269,"./modes":274,"./modes/cbc":275,"./modes/cfb":276,"./modes/cfb1":277,"./modes/cfb8":278,"./modes/ctr":279,"./modes/ecb":280,"./modes/ofb":281,"./streamCipher":284,"buffer":95,"cipher-base":283,"dup":104,"evp_bytestokey":285,"inherits":292}],272:[function(require,module,exports){arguments[4][105][0].apply(exports,arguments);},{"./aes":268,"./authCipher":269,"./modes":274,"./modes/cbc":275,"./modes/cfb":276,"./modes/cfb1":277,"./modes/cfb8":278,"./modes/ctr":279,"./modes/ecb":280,"./modes/ofb":281,"./streamCipher":284,"buffer":95,"cipher-base":283,"dup":105,"evp_bytestokey":285,"inherits":292}],273:[function(require,module,exports){arguments[4][106][0].apply(exports,arguments);},{"buffer":95,"dup":106}],274:[function(require,module,exports){arguments[4][107][0].apply(exports,arguments);},{"dup":107}],275:[function(require,module,exports){arguments[4][108][0].apply(exports,arguments);},{"buffer-xor":282,"dup":108}],276:[function(require,module,exports){arguments[4][109][0].apply(exports,arguments);},{"buffer":95,"buffer-xor":282,"dup":109}],277:[function(require,module,exports){arguments[4][110][0].apply(exports,arguments);},{"buffer":95,"dup":110}],278:[function(require,module,exports){arguments[4][111][0].apply(exports,arguments);},{"buffer":95,"dup":111}],279:[function(require,module,exports){arguments[4][112][0].apply(exports,arguments);},{"buffer":95,"buffer-xor":282,"dup":112}],280:[function(require,module,exports){arguments[4][113][0].apply(exports,arguments);},{"dup":113}],281:[function(require,module,exports){arguments[4][114][0].apply(exports,arguments);},{"buffer":95,"buffer-xor":282,"dup":114}],282:[function(require,module,exports){arguments[4][115][0].apply(exports,arguments);},{"buffer":95,"dup":115}],283:[function(require,module,exports){arguments[4][116][0].apply(exports,arguments);},{"buffer":95,"dup":116,"inherits":292,"stream":309,"string_decoder":310}],284:[function(require,module,exports){arguments[4][117][0].apply(exports,arguments);},{"./aes":268,"buffer":95,"cipher-base":283,"dup":117,"inherits":292}],285:[function(require,module,exports){arguments[4][128][0].apply(exports,arguments);},{"buffer":95,"create-hash/md5":225,"dup":128}],286:[function(require,module,exports){(function(Buffer){var parseKeys=require('parse-asn1');var mgf=require('./mgf');var xor=require('./xor');var bn=require('bn.js');var crt=require('browserify-rsa');var createHash=require('create-hash');var withPublic=require('./withPublic');module.exports=function privateDecrypt(private_key,enc,reverse){var padding;if(private_key.padding){padding=private_key.padding;}else if(reverse){padding=1;}else{padding=4;}var key=parseKeys(private_key);var k=key.modulus.byteLength();if(enc.length>k||new bn(enc).cmp(key.modulus)>=0){throw new Error('decryption error');}var msg;if(reverse){msg=withPublic(new bn(enc),key);}else{msg=crt(enc,key);}var zBuffer=new Buffer(k-msg.length);zBuffer.fill(0);msg=Buffer.concat([zBuffer,msg],k);if(padding===4){return oaep(key,msg);}else if(padding===1){return pkcs1(key,msg,reverse);}else if(padding===3){return msg;}else{throw new Error('unknown padding');}};function oaep(key,msg){var n=key.modulus;var k=key.modulus.byteLength();var mLen=msg.length;var iHash=createHash('sha1').update(new Buffer('')).digest();var hLen=iHash.length;var hLen2=2*hLen;if(msg[0]!==0){throw new Error('decryption error');}var maskedSeed=msg.slice(1,hLen+1);var maskedDb=msg.slice(hLen+1);var seed=xor(maskedSeed,mgf(maskedDb,hLen));var db=xor(maskedDb,mgf(seed,k-hLen-1));if(compare(iHash,db.slice(0,hLen))){throw new Error('decryption error');}var i=hLen;while(db[i]===0){i++;}if(db[i++]!==1){throw new Error('decryption error');}return db.slice(i);}function pkcs1(key,msg,reverse){var p1=msg.slice(0,2);var i=2;var status=0;while(msg[i++]!==0){if(i>=msg.length){status++;break;}}var ps=msg.slice(2,i-1);var p2=msg.slice(i-1,i);if(p1.toString('hex')!=='0002'&&!reverse||p1.toString('hex')!=='0001'&&reverse){status++;}if(ps.length<8){status++;}if(status){throw new Error('decryption error');}return msg.slice(i);}function compare(a,b){a=new Buffer(a);b=new Buffer(b);var dif=0;var len=a.length;if(a.length!==b.length){dif++;len=Math.min(a.length,b.length);}var i=-1;while(++i<len){dif+=a[i]^b[i];}return dif;}}).call(this,require("buffer").Buffer);},{"./mgf":246,"./withPublic":288,"./xor":289,"bn.js":247,"browserify-rsa":248,"buffer":95,"create-hash":223,"parse-asn1":252}],287:[function(require,module,exports){(function(Buffer){var parseKeys=require('parse-asn1');var randomBytes=require('randombytes');var createHash=require('create-hash');var mgf=require('./mgf');var xor=require('./xor');var bn=require('bn.js');var withPublic=require('./withPublic');var crt=require('browserify-rsa');var constants={RSA_PKCS1_OAEP_PADDING:4,RSA_PKCS1_PADDIN:1,RSA_NO_PADDING:3};module.exports=function publicEncrypt(public_key,msg,reverse){var padding;if(public_key.padding){padding=public_key.padding;}else if(reverse){padding=1;}else{padding=4;}var key=parseKeys(public_key);var paddedMsg;if(padding===4){paddedMsg=oaep(key,msg);}else if(padding===1){paddedMsg=pkcs1(key,msg,reverse);}else if(padding===3){paddedMsg=new bn(msg);if(paddedMsg.cmp(key.modulus)>=0){throw new Error('data too long for modulus');}}else{throw new Error('unknown padding');}if(reverse){return crt(paddedMsg,key);}else{return withPublic(paddedMsg,key);}};function oaep(key,msg){var k=key.modulus.byteLength();var mLen=msg.length;var iHash=createHash('sha1').update(new Buffer('')).digest();var hLen=iHash.length;var hLen2=2*hLen;if(mLen>k-hLen2-2){throw new Error('message too long');}var ps=new Buffer(k-mLen-hLen2-2);ps.fill(0);var dblen=k-hLen-1;var seed=randomBytes(hLen);var maskedDb=xor(Buffer.concat([iHash,ps,new Buffer([1]),msg],dblen),mgf(seed,dblen));var maskedSeed=xor(seed,mgf(maskedDb,hLen));return new bn(Buffer.concat([new Buffer([0]),maskedSeed,maskedDb],k));}function pkcs1(key,msg,reverse){var mLen=msg.length;var k=key.modulus.byteLength();if(mLen>k-11){throw new Error('message too long');}var ps;if(reverse){ps=new Buffer(k-mLen-3);ps.fill(0xff);}else{ps=nonZero(k-mLen-3);}return new bn(Buffer.concat([new Buffer([0,reverse?1:2]),ps,new Buffer([0]),msg],k));}function nonZero(len,crypto){var out=new Buffer(len);var i=0;var cache=randomBytes(len*2);var cur=0;var num;while(i<len){if(cur===cache.length){cache=randomBytes(len*2);cur=0;}num=cache[cur++];if(num){out[i++]=num;}}return out;}}).call(this,require("buffer").Buffer);},{"./mgf":246,"./withPublic":288,"./xor":289,"bn.js":247,"browserify-rsa":248,"buffer":95,"create-hash":223,"parse-asn1":252,"randombytes":290}],288:[function(require,module,exports){(function(Buffer){var bn=require('bn.js');function withPublic(paddedMsg,key){return new Buffer(paddedMsg.toRed(bn.mont(key.modulus)).redPow(new bn(key.publicExponent)).fromRed().toArray());}module.exports=withPublic;}).call(this,require("buffer").Buffer);},{"bn.js":247,"buffer":95}],289:[function(require,module,exports){module.exports=function xor(a,b){var len=a.length;var i=-1;while(++i<len){a[i]^=b[i];}return a;};},{}],290:[function(require,module,exports){(function(process,global,Buffer){'use strict';function oldBrowser(){throw new Error('secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11');}var crypto=global.crypto||global.msCrypto;if(crypto&&crypto.getRandomValues){module.exports=randomBytes;}else{module.exports=oldBrowser;}function randomBytes(size,cb){// phantomjs needs to throw
if(size>65536)throw new Error('requested too many random bytes');// in case browserify  isn't using the Uint8Array version
var rawBytes=new global.Uint8Array(size);// This will not work in older browsers.
// See https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues
crypto.getRandomValues(rawBytes);// phantomjs doesn't like a buffer being passed here
var bytes=new Buffer(rawBytes.buffer);if(typeof cb==='function'){return process.nextTick(function(){cb(null,bytes);});}return bytes;}}).call(this,require('_process'),typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},require("buffer").Buffer);},{"_process":295,"buffer":95}],291:[function(require,module,exports){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
function EventEmitter(){this._events=this._events||{};this._maxListeners=this._maxListeners||undefined;}module.exports=EventEmitter;// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter=EventEmitter;EventEmitter.prototype._events=undefined;EventEmitter.prototype._maxListeners=undefined;// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners=10;// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners=function(n){if(!isNumber(n)||n<0||isNaN(n))throw TypeError('n must be a positive number');this._maxListeners=n;return this;};EventEmitter.prototype.emit=function(type){var er,handler,len,args,i,listeners;if(!this._events)this._events={};// If there is no 'error' event listener then throw.
if(type==='error'){if(!this._events.error||isObject(this._events.error)&&!this._events.error.length){er=arguments[1];if(er instanceof Error){throw er;// Unhandled 'error' event
}throw TypeError('Uncaught, unspecified "error" event.');}}handler=this._events[type];if(isUndefined(handler))return false;if(isFunction(handler)){switch(arguments.length){// fast cases
case 1:handler.call(this);break;case 2:handler.call(this,arguments[1]);break;case 3:handler.call(this,arguments[1],arguments[2]);break;// slower
default:args=Array.prototype.slice.call(arguments,1);handler.apply(this,args);}}else if(isObject(handler)){args=Array.prototype.slice.call(arguments,1);listeners=handler.slice();len=listeners.length;for(i=0;i<len;i++)listeners[i].apply(this,args);}return true;};EventEmitter.prototype.addListener=function(type,listener){var m;if(!isFunction(listener))throw TypeError('listener must be a function');if(!this._events)this._events={};// To avoid recursion in the case that type === "newListener"! Before
// adding it to the listeners, first emit "newListener".
if(this._events.newListener)this.emit('newListener',type,isFunction(listener.listener)?listener.listener:listener);if(!this._events[type])// Optimize the case of one listener. Don't need the extra array object.
this._events[type]=listener;else if(isObject(this._events[type]))// If we've already got an array, just append.
this._events[type].push(listener);else// Adding the second element, need to change to array.
this._events[type]=[this._events[type],listener];// Check for listener leak
if(isObject(this._events[type])&&!this._events[type].warned){if(!isUndefined(this._maxListeners)){m=this._maxListeners;}else{m=EventEmitter.defaultMaxListeners;}if(m&&m>0&&this._events[type].length>m){this._events[type].warned=true;console.error('(node) warning: possible EventEmitter memory '+'leak detected. %d listeners added. '+'Use emitter.setMaxListeners() to increase limit.',this._events[type].length);if(typeof console.trace==='function'){// not supported in IE 10
console.trace();}}}return this;};EventEmitter.prototype.on=EventEmitter.prototype.addListener;EventEmitter.prototype.once=function(type,listener){if(!isFunction(listener))throw TypeError('listener must be a function');var fired=false;function g(){this.removeListener(type,g);if(!fired){fired=true;listener.apply(this,arguments);}}g.listener=listener;this.on(type,g);return this;};// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener=function(type,listener){var list,position,length,i;if(!isFunction(listener))throw TypeError('listener must be a function');if(!this._events||!this._events[type])return this;list=this._events[type];length=list.length;position=-1;if(list===listener||isFunction(list.listener)&&list.listener===listener){delete this._events[type];if(this._events.removeListener)this.emit('removeListener',type,listener);}else if(isObject(list)){for(i=length;i-->0;){if(list[i]===listener||list[i].listener&&list[i].listener===listener){position=i;break;}}if(position<0)return this;if(list.length===1){list.length=0;delete this._events[type];}else{list.splice(position,1);}if(this._events.removeListener)this.emit('removeListener',type,listener);}return this;};EventEmitter.prototype.removeAllListeners=function(type){var key,listeners;if(!this._events)return this;// not listening for removeListener, no need to emit
if(!this._events.removeListener){if(arguments.length===0)this._events={};else if(this._events[type])delete this._events[type];return this;}// emit removeListener for all listeners on all events
if(arguments.length===0){for(key in this._events){if(key==='removeListener')continue;this.removeAllListeners(key);}this.removeAllListeners('removeListener');this._events={};return this;}listeners=this._events[type];if(isFunction(listeners)){this.removeListener(type,listeners);}else if(listeners){// LIFO order
while(listeners.length)this.removeListener(type,listeners[listeners.length-1]);}delete this._events[type];return this;};EventEmitter.prototype.listeners=function(type){var ret;if(!this._events||!this._events[type])ret=[];else if(isFunction(this._events[type]))ret=[this._events[type]];else ret=this._events[type].slice();return ret;};EventEmitter.prototype.listenerCount=function(type){if(this._events){var evlistener=this._events[type];if(isFunction(evlistener))return 1;else if(evlistener)return evlistener.length;}return 0;};EventEmitter.listenerCount=function(emitter,type){return emitter.listenerCount(type);};function isFunction(arg){return typeof arg==='function';}function isNumber(arg){return typeof arg==='number';}function isObject(arg){return typeof arg==='object'&&arg!==null;}function isUndefined(arg){return arg===void 0;}},{}],292:[function(require,module,exports){if(typeof Object.create==='function'){// implementation from standard node.js 'util' module
module.exports=function inherits(ctor,superCtor){ctor.super_=superCtor;ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:false,writable:true,configurable:true}});};}else{// old school shim for old browsers
module.exports=function inherits(ctor,superCtor){ctor.super_=superCtor;var TempCtor=function(){};TempCtor.prototype=superCtor.prototype;ctor.prototype=new TempCtor();ctor.prototype.constructor=ctor;};}},{}],293:[function(require,module,exports){/**
 * Determine if an object is Buffer
 *
 * Author:   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * License:  MIT
 *
 * `npm install is-buffer`
 */module.exports=function(obj){return!!(obj!=null&&(obj._isBuffer||// For Safari 5-7 (missing Object.prototype.constructor)
obj.constructor&&typeof obj.constructor.isBuffer==='function'&&obj.constructor.isBuffer(obj)));};},{}],294:[function(require,module,exports){module.exports=Array.isArray||function(arr){return Object.prototype.toString.call(arr)=='[object Array]';};},{}],295:[function(require,module,exports){// shim for using process in browser
var process=module.exports={};var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return;}var timeout=setTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}queueIndex=-1;len=queue.length;}currentQueue=null;draining=false;clearTimeout(timeout);}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){setTimeout(drainQueue,0);}};// v8 likes predictible objects
function Item(fun,array){this.fun=fun;this.array=array;}Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version='';// empty string to avoid regexp issues
process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.binding=function(name){throw new Error('process.binding is not supported');};process.cwd=function(){return'/';};process.chdir=function(dir){throw new Error('process.chdir is not supported');};process.umask=function(){return 0;};},{}],296:[function(require,module,exports){module.exports=require("./lib/_stream_duplex.js");},{"./lib/_stream_duplex.js":297}],297:[function(require,module,exports){// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
'use strict';/*<replacement>*/var objectKeys=Object.keys||function(obj){var keys=[];for(var key in obj)keys.push(key);return keys;};/*</replacement>*/module.exports=Duplex;/*<replacement>*/var processNextTick=require('process-nextick-args');/*</replacement>*//*<replacement>*/var util=require('core-util-is');util.inherits=require('inherits');/*</replacement>*/var Readable=require('./_stream_readable');var Writable=require('./_stream_writable');util.inherits(Duplex,Readable);var keys=objectKeys(Writable.prototype);for(var v=0;v<keys.length;v++){var method=keys[v];if(!Duplex.prototype[method])Duplex.prototype[method]=Writable.prototype[method];}function Duplex(options){if(!(this instanceof Duplex))return new Duplex(options);Readable.call(this,options);Writable.call(this,options);if(options&&options.readable===false)this.readable=false;if(options&&options.writable===false)this.writable=false;this.allowHalfOpen=true;if(options&&options.allowHalfOpen===false)this.allowHalfOpen=false;this.once('end',onend);}// the no-half-open enforcer
function onend(){// if we allow half-open state, or if the writable side ended,
// then we're ok.
if(this.allowHalfOpen||this._writableState.ended)return;// no more data can be written.
// But allow more writes to happen in this tick.
processNextTick(onEndNT,this);}function onEndNT(self){self.end();}function forEach(xs,f){for(var i=0,l=xs.length;i<l;i++){f(xs[i],i);}}},{"./_stream_readable":299,"./_stream_writable":301,"core-util-is":302,"inherits":292,"process-nextick-args":303}],298:[function(require,module,exports){// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.
'use strict';module.exports=PassThrough;var Transform=require('./_stream_transform');/*<replacement>*/var util=require('core-util-is');util.inherits=require('inherits');/*</replacement>*/util.inherits(PassThrough,Transform);function PassThrough(options){if(!(this instanceof PassThrough))return new PassThrough(options);Transform.call(this,options);}PassThrough.prototype._transform=function(chunk,encoding,cb){cb(null,chunk);};},{"./_stream_transform":300,"core-util-is":302,"inherits":292}],299:[function(require,module,exports){(function(process){'use strict';module.exports=Readable;/*<replacement>*/var processNextTick=require('process-nextick-args');/*</replacement>*//*<replacement>*/var isArray=require('isarray');/*</replacement>*//*<replacement>*/var Buffer=require('buffer').Buffer;/*</replacement>*/Readable.ReadableState=ReadableState;var EE=require('events');/*<replacement>*/var EElistenerCount=function(emitter,type){return emitter.listeners(type).length;};/*</replacement>*//*<replacement>*/var Stream;(function(){try{Stream=require('st'+'ream');}catch(_){}finally{if(!Stream)Stream=require('events').EventEmitter;}})();/*</replacement>*/var Buffer=require('buffer').Buffer;/*<replacement>*/var util=require('core-util-is');util.inherits=require('inherits');/*</replacement>*//*<replacement>*/var debugUtil=require('util');var debug;if(debugUtil&&debugUtil.debuglog){debug=debugUtil.debuglog('stream');}else{debug=function(){};}/*</replacement>*/var StringDecoder;util.inherits(Readable,Stream);var Duplex;function ReadableState(options,stream){Duplex=Duplex||require('./_stream_duplex');options=options||{};// object stream flag. Used to make read(n) ignore n and to
// make all the buffer merging and length checks go away
this.objectMode=!!options.objectMode;if(stream instanceof Duplex)this.objectMode=this.objectMode||!!options.readableObjectMode;// the point at which it stops calling _read() to fill the buffer
// Note: 0 is a valid value, means "don't call _read preemptively ever"
var hwm=options.highWaterMark;var defaultHwm=this.objectMode?16:16*1024;this.highWaterMark=hwm||hwm===0?hwm:defaultHwm;// cast to ints.
this.highWaterMark=~~this.highWaterMark;this.buffer=[];this.length=0;this.pipes=null;this.pipesCount=0;this.flowing=null;this.ended=false;this.endEmitted=false;this.reading=false;// a flag to be able to tell if the onwrite cb is called immediately,
// or on a later tick.  We set this to true at first, because any
// actions that shouldn't happen until "later" should generally also
// not happen before the first write call.
this.sync=true;// whenever we return null, then we set a flag to say
// that we're awaiting a 'readable' event emission.
this.needReadable=false;this.emittedReadable=false;this.readableListening=false;// Crypto is kind of old and crusty.  Historically, its default string
// encoding is 'binary' so we have to make this configurable.
// Everything else in the universe uses 'utf8', though.
this.defaultEncoding=options.defaultEncoding||'utf8';// when piping, we only care about 'readable' events that happen
// after read()ing all the bytes and not getting any pushback.
this.ranOut=false;// the number of writers that are awaiting a drain event in .pipe()s
this.awaitDrain=0;// if true, a maybeReadMore has been scheduled
this.readingMore=false;this.decoder=null;this.encoding=null;if(options.encoding){if(!StringDecoder)StringDecoder=require('string_decoder/').StringDecoder;this.decoder=new StringDecoder(options.encoding);this.encoding=options.encoding;}}var Duplex;function Readable(options){Duplex=Duplex||require('./_stream_duplex');if(!(this instanceof Readable))return new Readable(options);this._readableState=new ReadableState(options,this);// legacy
this.readable=true;if(options&&typeof options.read==='function')this._read=options.read;Stream.call(this);}// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push=function(chunk,encoding){var state=this._readableState;if(!state.objectMode&&typeof chunk==='string'){encoding=encoding||state.defaultEncoding;if(encoding!==state.encoding){chunk=new Buffer(chunk,encoding);encoding='';}}return readableAddChunk(this,state,chunk,encoding,false);};// Unshift should *always* be something directly out of read()
Readable.prototype.unshift=function(chunk){var state=this._readableState;return readableAddChunk(this,state,chunk,'',true);};Readable.prototype.isPaused=function(){return this._readableState.flowing===false;};function readableAddChunk(stream,state,chunk,encoding,addToFront){var er=chunkInvalid(state,chunk);if(er){stream.emit('error',er);}else if(chunk===null){state.reading=false;onEofChunk(stream,state);}else if(state.objectMode||chunk&&chunk.length>0){if(state.ended&&!addToFront){var e=new Error('stream.push() after EOF');stream.emit('error',e);}else if(state.endEmitted&&addToFront){var e=new Error('stream.unshift() after end event');stream.emit('error',e);}else{if(state.decoder&&!addToFront&&!encoding)chunk=state.decoder.write(chunk);if(!addToFront)state.reading=false;// if we want the data now, just emit it.
if(state.flowing&&state.length===0&&!state.sync){stream.emit('data',chunk);stream.read(0);}else{// update the buffer info.
state.length+=state.objectMode?1:chunk.length;if(addToFront)state.buffer.unshift(chunk);else state.buffer.push(chunk);if(state.needReadable)emitReadable(stream);}maybeReadMore(stream,state);}}else if(!addToFront){state.reading=false;}return needMoreData(state);}// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state){return!state.ended&&(state.needReadable||state.length<state.highWaterMark||state.length===0);}// backwards compatibility.
Readable.prototype.setEncoding=function(enc){if(!StringDecoder)StringDecoder=require('string_decoder/').StringDecoder;this._readableState.decoder=new StringDecoder(enc);this._readableState.encoding=enc;return this;};// Don't raise the hwm > 8MB
var MAX_HWM=0x800000;function computeNewHighWaterMark(n){if(n>=MAX_HWM){n=MAX_HWM;}else{// Get the next highest power of 2
n--;n|=n>>>1;n|=n>>>2;n|=n>>>4;n|=n>>>8;n|=n>>>16;n++;}return n;}function howMuchToRead(n,state){if(state.length===0&&state.ended)return 0;if(state.objectMode)return n===0?0:1;if(n===null||isNaN(n)){// only flow one buffer at a time
if(state.flowing&&state.buffer.length)return state.buffer[0].length;else return state.length;}if(n<=0)return 0;// If we're asking for more than the target buffer level,
// then raise the water mark.  Bump up to the next highest
// power of 2, to prevent increasing it excessively in tiny
// amounts.
if(n>state.highWaterMark)state.highWaterMark=computeNewHighWaterMark(n);// don't have that much.  return null, unless we've ended.
if(n>state.length){if(!state.ended){state.needReadable=true;return 0;}else{return state.length;}}return n;}// you can override either this method, or the async _read(n) below.
Readable.prototype.read=function(n){debug('read',n);var state=this._readableState;var nOrig=n;if(typeof n!=='number'||n>0)state.emittedReadable=false;// if we're doing read(0) to trigger a readable event, but we
// already have a bunch of data in the buffer, then just trigger
// the 'readable' event and move on.
if(n===0&&state.needReadable&&(state.length>=state.highWaterMark||state.ended)){debug('read: emitReadable',state.length,state.ended);if(state.length===0&&state.ended)endReadable(this);else emitReadable(this);return null;}n=howMuchToRead(n,state);// if we've ended, and we're now clear, then finish it up.
if(n===0&&state.ended){if(state.length===0)endReadable(this);return null;}// All the actual chunk generation logic needs to be
// *below* the call to _read.  The reason is that in certain
// synthetic stream cases, such as passthrough streams, _read
// may be a completely synchronous operation which may change
// the state of the read buffer, providing enough data when
// before there was *not* enough.
//
// So, the steps are:
// 1. Figure out what the state of things will be after we do
// a read from the buffer.
//
// 2. If that resulting state will trigger a _read, then call _read.
// Note that this may be asynchronous, or synchronous.  Yes, it is
// deeply ugly to write APIs this way, but that still doesn't mean
// that the Readable class should behave improperly, as streams are
// designed to be sync/async agnostic.
// Take note if the _read call is sync or async (ie, if the read call
// has returned yet), so that we know whether or not it's safe to emit
// 'readable' etc.
//
// 3. Actually pull the requested chunks out of the buffer and return.
// if we need a readable event, then we need to do some reading.
var doRead=state.needReadable;debug('need readable',doRead);// if we currently have less than the highWaterMark, then also read some
if(state.length===0||state.length-n<state.highWaterMark){doRead=true;debug('length less than watermark',doRead);}// however, if we've ended, then there's no point, and if we're already
// reading, then it's unnecessary.
if(state.ended||state.reading){doRead=false;debug('reading or ended',doRead);}if(doRead){debug('do read');state.reading=true;state.sync=true;// if the length is currently zero, then we *need* a readable event.
if(state.length===0)state.needReadable=true;// call internal read method
this._read(state.highWaterMark);state.sync=false;}// If _read pushed data synchronously, then `reading` will be false,
// and we need to re-evaluate how much data we can return to the user.
if(doRead&&!state.reading)n=howMuchToRead(nOrig,state);var ret;if(n>0)ret=fromList(n,state);else ret=null;if(ret===null){state.needReadable=true;n=0;}state.length-=n;// If we have nothing in the buffer, then we want to know
// as soon as we *do* get something into the buffer.
if(state.length===0&&!state.ended)state.needReadable=true;// If we tried to read() past the EOF, then emit end on the next tick.
if(nOrig!==n&&state.ended&&state.length===0)endReadable(this);if(ret!==null)this.emit('data',ret);return ret;};function chunkInvalid(state,chunk){var er=null;if(!Buffer.isBuffer(chunk)&&typeof chunk!=='string'&&chunk!==null&&chunk!==undefined&&!state.objectMode){er=new TypeError('Invalid non-string/buffer chunk');}return er;}function onEofChunk(stream,state){if(state.ended)return;if(state.decoder){var chunk=state.decoder.end();if(chunk&&chunk.length){state.buffer.push(chunk);state.length+=state.objectMode?1:chunk.length;}}state.ended=true;// emit 'readable' now to make sure it gets picked up.
emitReadable(stream);}// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream){var state=stream._readableState;state.needReadable=false;if(!state.emittedReadable){debug('emitReadable',state.flowing);state.emittedReadable=true;if(state.sync)processNextTick(emitReadable_,stream);else emitReadable_(stream);}}function emitReadable_(stream){debug('emit readable');stream.emit('readable');flow(stream);}// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream,state){if(!state.readingMore){state.readingMore=true;processNextTick(maybeReadMore_,stream,state);}}function maybeReadMore_(stream,state){var len=state.length;while(!state.reading&&!state.flowing&&!state.ended&&state.length<state.highWaterMark){debug('maybeReadMore read 0');stream.read(0);if(len===state.length)// didn't get any data, stop spinning.
break;else len=state.length;}state.readingMore=false;}// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read=function(n){this.emit('error',new Error('not implemented'));};Readable.prototype.pipe=function(dest,pipeOpts){var src=this;var state=this._readableState;switch(state.pipesCount){case 0:state.pipes=dest;break;case 1:state.pipes=[state.pipes,dest];break;default:state.pipes.push(dest);break;}state.pipesCount+=1;debug('pipe count=%d opts=%j',state.pipesCount,pipeOpts);var doEnd=(!pipeOpts||pipeOpts.end!==false)&&dest!==process.stdout&&dest!==process.stderr;var endFn=doEnd?onend:cleanup;if(state.endEmitted)processNextTick(endFn);else src.once('end',endFn);dest.on('unpipe',onunpipe);function onunpipe(readable){debug('onunpipe');if(readable===src){cleanup();}}function onend(){debug('onend');dest.end();}// when the dest drains, it reduces the awaitDrain counter
// on the source.  This would be more elegant with a .once()
// handler in flow(), but adding and removing repeatedly is
// too slow.
var ondrain=pipeOnDrain(src);dest.on('drain',ondrain);var cleanedUp=false;function cleanup(){debug('cleanup');// cleanup event handlers once the pipe is broken
dest.removeListener('close',onclose);dest.removeListener('finish',onfinish);dest.removeListener('drain',ondrain);dest.removeListener('error',onerror);dest.removeListener('unpipe',onunpipe);src.removeListener('end',onend);src.removeListener('end',cleanup);src.removeListener('data',ondata);cleanedUp=true;// if the reader is waiting for a drain event from this
// specific writer, then it would cause it to never start
// flowing again.
// So, if this is awaiting a drain, then we just call it now.
// If we don't know, then assume that we are waiting for one.
if(state.awaitDrain&&(!dest._writableState||dest._writableState.needDrain))ondrain();}src.on('data',ondata);function ondata(chunk){debug('ondata');var ret=dest.write(chunk);if(false===ret){// If the user unpiped during `dest.write()`, it is possible
// to get stuck in a permanently paused state if that write
// also returned false.
if(state.pipesCount===1&&state.pipes[0]===dest&&src.listenerCount('data')===1&&!cleanedUp){debug('false write response, pause',src._readableState.awaitDrain);src._readableState.awaitDrain++;}src.pause();}}// if the dest has an error, then stop piping into it.
// however, don't suppress the throwing behavior for this.
function onerror(er){debug('onerror',er);unpipe();dest.removeListener('error',onerror);if(EElistenerCount(dest,'error')===0)dest.emit('error',er);}// This is a brutally ugly hack to make sure that our error handler
// is attached before any userland ones.  NEVER DO THIS.
if(!dest._events||!dest._events.error)dest.on('error',onerror);else if(isArray(dest._events.error))dest._events.error.unshift(onerror);else dest._events.error=[onerror,dest._events.error];// Both close and finish should trigger unpipe, but only once.
function onclose(){dest.removeListener('finish',onfinish);unpipe();}dest.once('close',onclose);function onfinish(){debug('onfinish');dest.removeListener('close',onclose);unpipe();}dest.once('finish',onfinish);function unpipe(){debug('unpipe');src.unpipe(dest);}// tell the dest that it's being piped to
dest.emit('pipe',src);// start the flow if it hasn't been started already.
if(!state.flowing){debug('pipe resume');src.resume();}return dest;};function pipeOnDrain(src){return function(){var state=src._readableState;debug('pipeOnDrain',state.awaitDrain);if(state.awaitDrain)state.awaitDrain--;if(state.awaitDrain===0&&EElistenerCount(src,'data')){state.flowing=true;flow(src);}};}Readable.prototype.unpipe=function(dest){var state=this._readableState;// if we're not piping anywhere, then do nothing.
if(state.pipesCount===0)return this;// just one destination.  most common case.
if(state.pipesCount===1){// passed in one, but it's not the right one.
if(dest&&dest!==state.pipes)return this;if(!dest)dest=state.pipes;// got a match.
state.pipes=null;state.pipesCount=0;state.flowing=false;if(dest)dest.emit('unpipe',this);return this;}// slow case. multiple pipe destinations.
if(!dest){// remove all.
var dests=state.pipes;var len=state.pipesCount;state.pipes=null;state.pipesCount=0;state.flowing=false;for(var i=0;i<len;i++)dests[i].emit('unpipe',this);return this;}// try to find the right one.
var i=indexOf(state.pipes,dest);if(i===-1)return this;state.pipes.splice(i,1);state.pipesCount-=1;if(state.pipesCount===1)state.pipes=state.pipes[0];dest.emit('unpipe',this);return this;};// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on=function(ev,fn){var res=Stream.prototype.on.call(this,ev,fn);// If listening to data, and it has not explicitly been paused,
// then call resume to start the flow of data on the next tick.
if(ev==='data'&&false!==this._readableState.flowing){this.resume();}if(ev==='readable'&&this.readable){var state=this._readableState;if(!state.readableListening){state.readableListening=true;state.emittedReadable=false;state.needReadable=true;if(!state.reading){processNextTick(nReadingNextTick,this);}else if(state.length){emitReadable(this,state);}}}return res;};Readable.prototype.addListener=Readable.prototype.on;function nReadingNextTick(self){debug('readable nexttick read 0');self.read(0);}// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume=function(){var state=this._readableState;if(!state.flowing){debug('resume');state.flowing=true;resume(this,state);}return this;};function resume(stream,state){if(!state.resumeScheduled){state.resumeScheduled=true;processNextTick(resume_,stream,state);}}function resume_(stream,state){if(!state.reading){debug('resume read 0');stream.read(0);}state.resumeScheduled=false;stream.emit('resume');flow(stream);if(state.flowing&&!state.reading)stream.read(0);}Readable.prototype.pause=function(){debug('call pause flowing=%j',this._readableState.flowing);if(false!==this._readableState.flowing){debug('pause');this._readableState.flowing=false;this.emit('pause');}return this;};function flow(stream){var state=stream._readableState;debug('flow',state.flowing);if(state.flowing){do{var chunk=stream.read();}while(null!==chunk&&state.flowing);}}// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap=function(stream){var state=this._readableState;var paused=false;var self=this;stream.on('end',function(){debug('wrapped end');if(state.decoder&&!state.ended){var chunk=state.decoder.end();if(chunk&&chunk.length)self.push(chunk);}self.push(null);});stream.on('data',function(chunk){debug('wrapped data');if(state.decoder)chunk=state.decoder.write(chunk);// don't skip over falsy values in objectMode
if(state.objectMode&&(chunk===null||chunk===undefined))return;else if(!state.objectMode&&(!chunk||!chunk.length))return;var ret=self.push(chunk);if(!ret){paused=true;stream.pause();}});// proxy all the other methods.
// important when wrapping filters and duplexes.
for(var i in stream){if(this[i]===undefined&&typeof stream[i]==='function'){this[i]=function(method){return function(){return stream[method].apply(stream,arguments);};}(i);}}// proxy certain important events.
var events=['error','close','destroy','pause','resume'];forEach(events,function(ev){stream.on(ev,self.emit.bind(self,ev));});// when we try to consume some more bytes, simply unpause the
// underlying stream.
self._read=function(n){debug('wrapped _read',n);if(paused){paused=false;stream.resume();}};return self;};// exposed for testing purposes only.
Readable._fromList=fromList;// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
function fromList(n,state){var list=state.buffer;var length=state.length;var stringMode=!!state.decoder;var objectMode=!!state.objectMode;var ret;// nothing in the list, definitely empty.
if(list.length===0)return null;if(length===0)ret=null;else if(objectMode)ret=list.shift();else if(!n||n>=length){// read it all, truncate the array.
if(stringMode)ret=list.join('');else if(list.length===1)ret=list[0];else ret=Buffer.concat(list,length);list.length=0;}else{// read just some of it.
if(n<list[0].length){// just take a part of the first list item.
// slice is the same for buffers and strings.
var buf=list[0];ret=buf.slice(0,n);list[0]=buf.slice(n);}else if(n===list[0].length){// first list is a perfect match
ret=list.shift();}else{// complex case.
// we have enough to cover it, but it spans past the first buffer.
if(stringMode)ret='';else ret=new Buffer(n);var c=0;for(var i=0,l=list.length;i<l&&c<n;i++){var buf=list[0];var cpy=Math.min(n-c,buf.length);if(stringMode)ret+=buf.slice(0,cpy);else buf.copy(ret,c,0,cpy);if(cpy<buf.length)list[0]=buf.slice(cpy);else list.shift();c+=cpy;}}}return ret;}function endReadable(stream){var state=stream._readableState;// If we get here before consuming all the bytes, then that is a
// bug in node.  Should never happen.
if(state.length>0)throw new Error('endReadable called on non-empty stream');if(!state.endEmitted){state.ended=true;processNextTick(endReadableNT,state,stream);}}function endReadableNT(state,stream){// Check that we didn't get one last unshift.
if(!state.endEmitted&&state.length===0){state.endEmitted=true;stream.readable=false;stream.emit('end');}}function forEach(xs,f){for(var i=0,l=xs.length;i<l;i++){f(xs[i],i);}}function indexOf(xs,x){for(var i=0,l=xs.length;i<l;i++){if(xs[i]===x)return i;}return-1;}}).call(this,require('_process'));},{"./_stream_duplex":297,"_process":295,"buffer":95,"core-util-is":302,"events":291,"inherits":292,"isarray":294,"process-nextick-args":303,"string_decoder/":310,"util":94}],300:[function(require,module,exports){// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.
'use strict';module.exports=Transform;var Duplex=require('./_stream_duplex');/*<replacement>*/var util=require('core-util-is');util.inherits=require('inherits');/*</replacement>*/util.inherits(Transform,Duplex);function TransformState(stream){this.afterTransform=function(er,data){return afterTransform(stream,er,data);};this.needTransform=false;this.transforming=false;this.writecb=null;this.writechunk=null;}function afterTransform(stream,er,data){var ts=stream._transformState;ts.transforming=false;var cb=ts.writecb;if(!cb)return stream.emit('error',new Error('no writecb in Transform class'));ts.writechunk=null;ts.writecb=null;if(data!==null&&data!==undefined)stream.push(data);if(cb)cb(er);var rs=stream._readableState;rs.reading=false;if(rs.needReadable||rs.length<rs.highWaterMark){stream._read(rs.highWaterMark);}}function Transform(options){if(!(this instanceof Transform))return new Transform(options);Duplex.call(this,options);this._transformState=new TransformState(this);// when the writable side finishes, then flush out anything remaining.
var stream=this;// start out asking for a readable event once data is transformed.
this._readableState.needReadable=true;// we have implemented the _read method, and done the other things
// that Readable wants before the first _read call, so unset the
// sync guard flag.
this._readableState.sync=false;if(options){if(typeof options.transform==='function')this._transform=options.transform;if(typeof options.flush==='function')this._flush=options.flush;}this.once('prefinish',function(){if(typeof this._flush==='function')this._flush(function(er){done(stream,er);});else done(stream);});}Transform.prototype.push=function(chunk,encoding){this._transformState.needTransform=false;return Duplex.prototype.push.call(this,chunk,encoding);};// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform=function(chunk,encoding,cb){throw new Error('not implemented');};Transform.prototype._write=function(chunk,encoding,cb){var ts=this._transformState;ts.writecb=cb;ts.writechunk=chunk;ts.writeencoding=encoding;if(!ts.transforming){var rs=this._readableState;if(ts.needTransform||rs.needReadable||rs.length<rs.highWaterMark)this._read(rs.highWaterMark);}};// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read=function(n){var ts=this._transformState;if(ts.writechunk!==null&&ts.writecb&&!ts.transforming){ts.transforming=true;this._transform(ts.writechunk,ts.writeencoding,ts.afterTransform);}else{// mark that we need a transform, so that any data that comes in
// will get processed, now that we've asked for it.
ts.needTransform=true;}};function done(stream,er){if(er)return stream.emit('error',er);// if there's nothing in the write buffer, then that means
// that nothing more will ever be provided
var ws=stream._writableState;var ts=stream._transformState;if(ws.length)throw new Error('calling transform done when ws.length != 0');if(ts.transforming)throw new Error('calling transform done when still transforming');return stream.push(null);}},{"./_stream_duplex":297,"core-util-is":302,"inherits":292}],301:[function(require,module,exports){// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
'use strict';module.exports=Writable;/*<replacement>*/var processNextTick=require('process-nextick-args');/*</replacement>*//*<replacement>*/var Buffer=require('buffer').Buffer;/*</replacement>*/Writable.WritableState=WritableState;/*<replacement>*/var util=require('core-util-is');util.inherits=require('inherits');/*</replacement>*//*<replacement>*/var internalUtil={deprecate:require('util-deprecate')};/*</replacement>*//*<replacement>*/var Stream;(function(){try{Stream=require('st'+'ream');}catch(_){}finally{if(!Stream)Stream=require('events').EventEmitter;}})();/*</replacement>*/var Buffer=require('buffer').Buffer;util.inherits(Writable,Stream);function nop(){}function WriteReq(chunk,encoding,cb){this.chunk=chunk;this.encoding=encoding;this.callback=cb;this.next=null;}var Duplex;function WritableState(options,stream){Duplex=Duplex||require('./_stream_duplex');options=options||{};// object stream flag to indicate whether or not this stream
// contains buffers or objects.
this.objectMode=!!options.objectMode;if(stream instanceof Duplex)this.objectMode=this.objectMode||!!options.writableObjectMode;// the point at which write() starts returning false
// Note: 0 is a valid value, means that we always return false if
// the entire buffer is not flushed immediately on write()
var hwm=options.highWaterMark;var defaultHwm=this.objectMode?16:16*1024;this.highWaterMark=hwm||hwm===0?hwm:defaultHwm;// cast to ints.
this.highWaterMark=~~this.highWaterMark;this.needDrain=false;// at the start of calling end()
this.ending=false;// when end() has been called, and returned
this.ended=false;// when 'finish' is emitted
this.finished=false;// should we decode strings into buffers before passing to _write?
// this is here so that some node-core streams can optimize string
// handling at a lower level.
var noDecode=options.decodeStrings===false;this.decodeStrings=!noDecode;// Crypto is kind of old and crusty.  Historically, its default string
// encoding is 'binary' so we have to make this configurable.
// Everything else in the universe uses 'utf8', though.
this.defaultEncoding=options.defaultEncoding||'utf8';// not an actual buffer we keep track of, but a measurement
// of how much we're waiting to get pushed to some underlying
// socket or file.
this.length=0;// a flag to see when we're in the middle of a write.
this.writing=false;// when true all writes will be buffered until .uncork() call
this.corked=0;// a flag to be able to tell if the onwrite cb is called immediately,
// or on a later tick.  We set this to true at first, because any
// actions that shouldn't happen until "later" should generally also
// not happen before the first write call.
this.sync=true;// a flag to know if we're processing previously buffered items, which
// may call the _write() callback in the same tick, so that we don't
// end up in an overlapped onwrite situation.
this.bufferProcessing=false;// the callback that's passed to _write(chunk,cb)
this.onwrite=function(er){onwrite(stream,er);};// the callback that the user supplies to write(chunk,encoding,cb)
this.writecb=null;// the amount that is being written when _write is called.
this.writelen=0;this.bufferedRequest=null;this.lastBufferedRequest=null;// number of pending user-supplied write callbacks
// this must be 0 before 'finish' can be emitted
this.pendingcb=0;// emit prefinish if the only thing we're waiting for is _write cbs
// This is relevant for synchronous Transform streams
this.prefinished=false;// True if the error was already emitted and should not be thrown again
this.errorEmitted=false;}WritableState.prototype.getBuffer=function writableStateGetBuffer(){var current=this.bufferedRequest;var out=[];while(current){out.push(current);current=current.next;}return out;};(function(){try{Object.defineProperty(WritableState.prototype,'buffer',{get:internalUtil.deprecate(function(){return this.getBuffer();},'_writableState.buffer is deprecated. Use _writableState.getBuffer '+'instead.')});}catch(_){}})();var Duplex;function Writable(options){Duplex=Duplex||require('./_stream_duplex');// Writable ctor is applied to Duplexes, though they're not
// instanceof Writable, they're instanceof Readable.
if(!(this instanceof Writable)&&!(this instanceof Duplex))return new Writable(options);this._writableState=new WritableState(options,this);// legacy.
this.writable=true;if(options){if(typeof options.write==='function')this._write=options.write;if(typeof options.writev==='function')this._writev=options.writev;}Stream.call(this);}// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe=function(){this.emit('error',new Error('Cannot pipe. Not readable.'));};function writeAfterEnd(stream,cb){var er=new Error('write after end');// TODO: defer error events consistently everywhere, not just the cb
stream.emit('error',er);processNextTick(cb,er);}// If we get something that is not a buffer, string, null, or undefined,
// and we're not in objectMode, then that's an error.
// Otherwise stream chunks are all considered to be of length=1, and the
// watermarks determine how many objects to keep in the buffer, rather than
// how many bytes or characters.
function validChunk(stream,state,chunk,cb){var valid=true;if(!Buffer.isBuffer(chunk)&&typeof chunk!=='string'&&chunk!==null&&chunk!==undefined&&!state.objectMode){var er=new TypeError('Invalid non-string/buffer chunk');stream.emit('error',er);processNextTick(cb,er);valid=false;}return valid;}Writable.prototype.write=function(chunk,encoding,cb){var state=this._writableState;var ret=false;if(typeof encoding==='function'){cb=encoding;encoding=null;}if(Buffer.isBuffer(chunk))encoding='buffer';else if(!encoding)encoding=state.defaultEncoding;if(typeof cb!=='function')cb=nop;if(state.ended)writeAfterEnd(this,cb);else if(validChunk(this,state,chunk,cb)){state.pendingcb++;ret=writeOrBuffer(this,state,chunk,encoding,cb);}return ret;};Writable.prototype.cork=function(){var state=this._writableState;state.corked++;};Writable.prototype.uncork=function(){var state=this._writableState;if(state.corked){state.corked--;if(!state.writing&&!state.corked&&!state.finished&&!state.bufferProcessing&&state.bufferedRequest)clearBuffer(this,state);}};Writable.prototype.setDefaultEncoding=function setDefaultEncoding(encoding){// node::ParseEncoding() requires lower case.
if(typeof encoding==='string')encoding=encoding.toLowerCase();if(!(['hex','utf8','utf-8','ascii','binary','base64','ucs2','ucs-2','utf16le','utf-16le','raw'].indexOf((encoding+'').toLowerCase())>-1))throw new TypeError('Unknown encoding: '+encoding);this._writableState.defaultEncoding=encoding;};function decodeChunk(state,chunk,encoding){if(!state.objectMode&&state.decodeStrings!==false&&typeof chunk==='string'){chunk=new Buffer(chunk,encoding);}return chunk;}// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream,state,chunk,encoding,cb){chunk=decodeChunk(state,chunk,encoding);if(Buffer.isBuffer(chunk))encoding='buffer';var len=state.objectMode?1:chunk.length;state.length+=len;var ret=state.length<state.highWaterMark;// we must ensure that previous needDrain will not be reset to false.
if(!ret)state.needDrain=true;if(state.writing||state.corked){var last=state.lastBufferedRequest;state.lastBufferedRequest=new WriteReq(chunk,encoding,cb);if(last){last.next=state.lastBufferedRequest;}else{state.bufferedRequest=state.lastBufferedRequest;}}else{doWrite(stream,state,false,len,chunk,encoding,cb);}return ret;}function doWrite(stream,state,writev,len,chunk,encoding,cb){state.writelen=len;state.writecb=cb;state.writing=true;state.sync=true;if(writev)stream._writev(chunk,state.onwrite);else stream._write(chunk,encoding,state.onwrite);state.sync=false;}function onwriteError(stream,state,sync,er,cb){--state.pendingcb;if(sync)processNextTick(cb,er);else cb(er);stream._writableState.errorEmitted=true;stream.emit('error',er);}function onwriteStateUpdate(state){state.writing=false;state.writecb=null;state.length-=state.writelen;state.writelen=0;}function onwrite(stream,er){var state=stream._writableState;var sync=state.sync;var cb=state.writecb;onwriteStateUpdate(state);if(er)onwriteError(stream,state,sync,er,cb);else{// Check if we're actually ready to finish, but don't emit yet
var finished=needFinish(state);if(!finished&&!state.corked&&!state.bufferProcessing&&state.bufferedRequest){clearBuffer(stream,state);}if(sync){processNextTick(afterWrite,stream,state,finished,cb);}else{afterWrite(stream,state,finished,cb);}}}function afterWrite(stream,state,finished,cb){if(!finished)onwriteDrain(stream,state);state.pendingcb--;cb();finishMaybe(stream,state);}// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream,state){if(state.length===0&&state.needDrain){state.needDrain=false;stream.emit('drain');}}// if there's something in the buffer waiting, then process it
function clearBuffer(stream,state){state.bufferProcessing=true;var entry=state.bufferedRequest;if(stream._writev&&entry&&entry.next){// Fast case, write everything using _writev()
var buffer=[];var cbs=[];while(entry){cbs.push(entry.callback);buffer.push(entry);entry=entry.next;}// count the one we are adding, as well.
// TODO(isaacs) clean this up
state.pendingcb++;state.lastBufferedRequest=null;doWrite(stream,state,true,state.length,buffer,'',function(err){for(var i=0;i<cbs.length;i++){state.pendingcb--;cbs[i](err);}});// Clear buffer
}else{// Slow case, write chunks one-by-one
while(entry){var chunk=entry.chunk;var encoding=entry.encoding;var cb=entry.callback;var len=state.objectMode?1:chunk.length;doWrite(stream,state,false,len,chunk,encoding,cb);entry=entry.next;// if we didn't call the onwrite immediately, then
// it means that we need to wait until it does.
// also, that means that the chunk and cb are currently
// being processed, so move the buffer counter past them.
if(state.writing){break;}}if(entry===null)state.lastBufferedRequest=null;}state.bufferedRequest=entry;state.bufferProcessing=false;}Writable.prototype._write=function(chunk,encoding,cb){cb(new Error('not implemented'));};Writable.prototype._writev=null;Writable.prototype.end=function(chunk,encoding,cb){var state=this._writableState;if(typeof chunk==='function'){cb=chunk;chunk=null;encoding=null;}else if(typeof encoding==='function'){cb=encoding;encoding=null;}if(chunk!==null&&chunk!==undefined)this.write(chunk,encoding);// .end() fully uncorks
if(state.corked){state.corked=1;this.uncork();}// ignore unnecessary end() calls.
if(!state.ending&&!state.finished)endWritable(this,state,cb);};function needFinish(state){return state.ending&&state.length===0&&state.bufferedRequest===null&&!state.finished&&!state.writing;}function prefinish(stream,state){if(!state.prefinished){state.prefinished=true;stream.emit('prefinish');}}function finishMaybe(stream,state){var need=needFinish(state);if(need){if(state.pendingcb===0){prefinish(stream,state);state.finished=true;stream.emit('finish');}else{prefinish(stream,state);}}return need;}function endWritable(stream,state,cb){state.ending=true;finishMaybe(stream,state);if(cb){if(state.finished)processNextTick(cb);else stream.once('finish',cb);}state.ended=true;}},{"./_stream_duplex":297,"buffer":95,"core-util-is":302,"events":291,"inherits":292,"process-nextick-args":303,"util-deprecate":304}],302:[function(require,module,exports){(function(Buffer){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(arg){if(Array.isArray){return Array.isArray(arg);}return objectToString(arg)==='[object Array]';}exports.isArray=isArray;function isBoolean(arg){return typeof arg==='boolean';}exports.isBoolean=isBoolean;function isNull(arg){return arg===null;}exports.isNull=isNull;function isNullOrUndefined(arg){return arg==null;}exports.isNullOrUndefined=isNullOrUndefined;function isNumber(arg){return typeof arg==='number';}exports.isNumber=isNumber;function isString(arg){return typeof arg==='string';}exports.isString=isString;function isSymbol(arg){return typeof arg==='symbol';}exports.isSymbol=isSymbol;function isUndefined(arg){return arg===void 0;}exports.isUndefined=isUndefined;function isRegExp(re){return objectToString(re)==='[object RegExp]';}exports.isRegExp=isRegExp;function isObject(arg){return typeof arg==='object'&&arg!==null;}exports.isObject=isObject;function isDate(d){return objectToString(d)==='[object Date]';}exports.isDate=isDate;function isError(e){return objectToString(e)==='[object Error]'||e instanceof Error;}exports.isError=isError;function isFunction(arg){return typeof arg==='function';}exports.isFunction=isFunction;function isPrimitive(arg){return arg===null||typeof arg==='boolean'||typeof arg==='number'||typeof arg==='string'||typeof arg==='symbol'||// ES6 symbol
typeof arg==='undefined';}exports.isPrimitive=isPrimitive;exports.isBuffer=Buffer.isBuffer;function objectToString(o){return Object.prototype.toString.call(o);}}).call(this,{"isBuffer":require("../../../../insert-module-globals/node_modules/is-buffer/index.js")});},{"../../../../insert-module-globals/node_modules/is-buffer/index.js":293}],303:[function(require,module,exports){(function(process){'use strict';if(!process.version||process.version.indexOf('v0.')===0||process.version.indexOf('v1.')===0&&process.version.indexOf('v1.8.')!==0){module.exports=nextTick;}else{module.exports=process.nextTick;}function nextTick(fn){var args=new Array(arguments.length-1);var i=0;while(i<args.length){args[i++]=arguments[i];}process.nextTick(function afterTick(){fn.apply(null,args);});}}).call(this,require('_process'));},{"_process":295}],304:[function(require,module,exports){(function(global){/**
 * Module exports.
 */module.exports=deprecate;/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */function deprecate(fn,msg){if(config('noDeprecation')){return fn;}var warned=false;function deprecated(){if(!warned){if(config('throwDeprecation')){throw new Error(msg);}else if(config('traceDeprecation')){console.trace(msg);}else{console.warn(msg);}warned=true;}return fn.apply(this,arguments);}return deprecated;}/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */function config(name){// accessing global.localStorage can trigger a DOMException in sandboxed iframes
try{if(!global.localStorage)return false;}catch(_){return false;}var val=global.localStorage[name];if(null==val)return false;return String(val).toLowerCase()==='true';}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{}],305:[function(require,module,exports){module.exports=require("./lib/_stream_passthrough.js");},{"./lib/_stream_passthrough.js":298}],306:[function(require,module,exports){var Stream=function(){try{return require('st'+'ream');// hack to fix a circular dependency issue when used with browserify
}catch(_){}}();exports=module.exports=require('./lib/_stream_readable.js');exports.Stream=Stream||exports;exports.Readable=exports;exports.Writable=require('./lib/_stream_writable.js');exports.Duplex=require('./lib/_stream_duplex.js');exports.Transform=require('./lib/_stream_transform.js');exports.PassThrough=require('./lib/_stream_passthrough.js');},{"./lib/_stream_duplex.js":297,"./lib/_stream_passthrough.js":298,"./lib/_stream_readable.js":299,"./lib/_stream_transform.js":300,"./lib/_stream_writable.js":301}],307:[function(require,module,exports){module.exports=require("./lib/_stream_transform.js");},{"./lib/_stream_transform.js":300}],308:[function(require,module,exports){module.exports=require("./lib/_stream_writable.js");},{"./lib/_stream_writable.js":301}],309:[function(require,module,exports){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
module.exports=Stream;var EE=require('events').EventEmitter;var inherits=require('inherits');inherits(Stream,EE);Stream.Readable=require('readable-stream/readable.js');Stream.Writable=require('readable-stream/writable.js');Stream.Duplex=require('readable-stream/duplex.js');Stream.Transform=require('readable-stream/transform.js');Stream.PassThrough=require('readable-stream/passthrough.js');// Backwards-compat with node 0.4.x
Stream.Stream=Stream;// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.
function Stream(){EE.call(this);}Stream.prototype.pipe=function(dest,options){var source=this;function ondata(chunk){if(dest.writable){if(false===dest.write(chunk)&&source.pause){source.pause();}}}source.on('data',ondata);function ondrain(){if(source.readable&&source.resume){source.resume();}}dest.on('drain',ondrain);// If the 'end' option is not supplied, dest.end() will be called when
// source gets the 'end' or 'close' events.  Only dest.end() once.
if(!dest._isStdio&&(!options||options.end!==false)){source.on('end',onend);source.on('close',onclose);}var didOnEnd=false;function onend(){if(didOnEnd)return;didOnEnd=true;dest.end();}function onclose(){if(didOnEnd)return;didOnEnd=true;if(typeof dest.destroy==='function')dest.destroy();}// don't leave dangling pipes when there are errors.
function onerror(er){cleanup();if(EE.listenerCount(this,'error')===0){throw er;// Unhandled stream error in pipe.
}}source.on('error',onerror);dest.on('error',onerror);// remove all the event listeners that were added.
function cleanup(){source.removeListener('data',ondata);dest.removeListener('drain',ondrain);source.removeListener('end',onend);source.removeListener('close',onclose);source.removeListener('error',onerror);dest.removeListener('error',onerror);source.removeListener('end',cleanup);source.removeListener('close',cleanup);dest.removeListener('close',cleanup);}source.on('end',cleanup);source.on('close',cleanup);dest.on('close',cleanup);dest.emit('pipe',source);// Allow for unix-like usage: A.pipe(B).pipe(C)
return dest;};},{"events":291,"inherits":292,"readable-stream/duplex.js":296,"readable-stream/passthrough.js":305,"readable-stream/readable.js":306,"readable-stream/transform.js":307,"readable-stream/writable.js":308}],310:[function(require,module,exports){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var Buffer=require('buffer').Buffer;var isBufferEncoding=Buffer.isEncoding||function(encoding){switch(encoding&&encoding.toLowerCase()){case'hex':case'utf8':case'utf-8':case'ascii':case'binary':case'base64':case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':case'raw':return true;default:return false;}};function assertEncoding(encoding){if(encoding&&!isBufferEncoding(encoding)){throw new Error('Unknown encoding: '+encoding);}}// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters. CESU-8 is handled as part of the UTF-8 encoding.
//
// @TODO Handling all encodings inside a single object makes it very difficult
// to reason about this code, so it should be split up in the future.
// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
// points as used by CESU-8.
var StringDecoder=exports.StringDecoder=function(encoding){this.encoding=(encoding||'utf8').toLowerCase().replace(/[-_]/,'');assertEncoding(encoding);switch(this.encoding){case'utf8':// CESU-8 represents each of Surrogate Pair by 3-bytes
this.surrogateSize=3;break;case'ucs2':case'utf16le':// UTF-16 represents each of Surrogate Pair by 2-bytes
this.surrogateSize=2;this.detectIncompleteChar=utf16DetectIncompleteChar;break;case'base64':// Base-64 stores 3 bytes in 4 chars, and pads the remainder.
this.surrogateSize=3;this.detectIncompleteChar=base64DetectIncompleteChar;break;default:this.write=passThroughWrite;return;}// Enough space to store all bytes of a single character. UTF-8 needs 4
// bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
this.charBuffer=new Buffer(6);// Number of bytes received for the current incomplete multi-byte character.
this.charReceived=0;// Number of bytes expected for the current incomplete multi-byte character.
this.charLength=0;};// write decodes the given buffer and returns it as JS string that is
// guaranteed to not contain any partial multi-byte characters. Any partial
// character found at the end of the buffer is buffered up, and will be
// returned when calling write again with the remaining bytes.
//
// Note: Converting a Buffer containing an orphan surrogate to a String
// currently works, but converting a String to a Buffer (via `new Buffer`, or
// Buffer#write) will replace incomplete surrogates with the unicode
// replacement character. See https://codereview.chromium.org/121173009/ .
StringDecoder.prototype.write=function(buffer){var charStr='';// if our last write ended with an incomplete multibyte character
while(this.charLength){// determine how many remaining bytes this buffer has to offer for this char
var available=buffer.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:buffer.length;// add the new bytes to the char buffer
buffer.copy(this.charBuffer,this.charReceived,0,available);this.charReceived+=available;if(this.charReceived<this.charLength){// still not enough chars in this buffer? wait for more ...
return'';}// remove bytes belonging to the current character from the buffer
buffer=buffer.slice(available,buffer.length);// get the character that was split
charStr=this.charBuffer.slice(0,this.charLength).toString(this.encoding);// CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
var charCode=charStr.charCodeAt(charStr.length-1);if(charCode>=0xD800&&charCode<=0xDBFF){this.charLength+=this.surrogateSize;charStr='';continue;}this.charReceived=this.charLength=0;// if there are no more bytes in this buffer, just emit our char
if(buffer.length===0){return charStr;}break;}// determine and set charLength / charReceived
this.detectIncompleteChar(buffer);var end=buffer.length;if(this.charLength){// buffer the incomplete character bytes we got
buffer.copy(this.charBuffer,0,buffer.length-this.charReceived,end);end-=this.charReceived;}charStr+=buffer.toString(this.encoding,0,end);var end=charStr.length-1;var charCode=charStr.charCodeAt(end);// CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
if(charCode>=0xD800&&charCode<=0xDBFF){var size=this.surrogateSize;this.charLength+=size;this.charReceived+=size;this.charBuffer.copy(this.charBuffer,size,0,size);buffer.copy(this.charBuffer,0,0,size);return charStr.substring(0,end);}// or just emit the charStr
return charStr;};// detectIncompleteChar determines if there is an incomplete UTF-8 character at
// the end of the given buffer. If so, it sets this.charLength to the byte
// length that character, and sets this.charReceived to the number of bytes
// that are available for this character.
StringDecoder.prototype.detectIncompleteChar=function(buffer){// determine how many bytes we have to check at the end of this buffer
var i=buffer.length>=3?3:buffer.length;// Figure out if one of the last i bytes of our buffer announces an
// incomplete char.
for(;i>0;i--){var c=buffer[buffer.length-i];// See http://en.wikipedia.org/wiki/UTF-8#Description
// 110XXXXX
if(i==1&&c>>5==0x06){this.charLength=2;break;}// 1110XXXX
if(i<=2&&c>>4==0x0E){this.charLength=3;break;}// 11110XXX
if(i<=3&&c>>3==0x1E){this.charLength=4;break;}}this.charReceived=i;};StringDecoder.prototype.end=function(buffer){var res='';if(buffer&&buffer.length)res=this.write(buffer);if(this.charReceived){var cr=this.charReceived;var buf=this.charBuffer;var enc=this.encoding;res+=buf.slice(0,cr).toString(enc);}return res;};function passThroughWrite(buffer){return buffer.toString(this.encoding);}function utf16DetectIncompleteChar(buffer){this.charReceived=buffer.length%2;this.charLength=this.charReceived?2:0;}function base64DetectIncompleteChar(buffer){this.charReceived=buffer.length%3;this.charLength=this.charReceived?3:0;}},{"buffer":95}],311:[function(require,module,exports){var indexOf=require('indexof');var Object_keys=function(obj){if(Object.keys)return Object.keys(obj);else{var res=[];for(var key in obj)res.push(key);return res;}};var forEach=function(xs,fn){if(xs.forEach)return xs.forEach(fn);else for(var i=0;i<xs.length;i++){fn(xs[i],i,xs);}};var defineProp=function(){try{Object.defineProperty({},'_',{});return function(obj,name,value){Object.defineProperty(obj,name,{writable:true,enumerable:false,configurable:true,value:value});};}catch(e){return function(obj,name,value){obj[name]=value;};}}();var globals=['Array','Boolean','Date','Error','EvalError','Function','Infinity','JSON','Math','NaN','Number','Object','RangeError','ReferenceError','RegExp','String','SyntaxError','TypeError','URIError','decodeURI','decodeURIComponent','encodeURI','encodeURIComponent','escape','eval','isFinite','isNaN','parseFloat','parseInt','undefined','unescape'];function Context(){}Context.prototype={};var Script=exports.Script=function NodeScript(code){if(!(this instanceof Script))return new Script(code);this.code=code;};Script.prototype.runInContext=function(context){if(!(context instanceof Context)){throw new TypeError("needs a 'context' argument.");}var iframe=document.createElement('iframe');if(!iframe.style)iframe.style={};iframe.style.display='none';document.body.appendChild(iframe);var win=iframe.contentWindow;var wEval=win.eval,wExecScript=win.execScript;if(!wEval&&wExecScript){// win.eval() magically appears when this is called in IE:
wExecScript.call(win,'null');wEval=win.eval;}forEach(Object_keys(context),function(key){win[key]=context[key];});forEach(globals,function(key){if(context[key]){win[key]=context[key];}});var winKeys=Object_keys(win);var res=wEval.call(win,this.code);forEach(Object_keys(win),function(key){// Avoid copying circular objects like `top` and `window` by only
// updating existing context properties or new properties in the `win`
// that was only introduced after the eval.
if(key in context||indexOf(winKeys,key)===-1){context[key]=win[key];}});forEach(globals,function(key){if(!(key in context)){defineProp(context,key,win[key]);}});document.body.removeChild(iframe);return res;};Script.prototype.runInThisContext=function(){return eval(this.code);// maybe...
};Script.prototype.runInNewContext=function(context){var ctx=Script.createContext(context);var res=this.runInContext(ctx);forEach(Object_keys(ctx),function(key){context[key]=ctx[key];});return res;};forEach(Object_keys(Script.prototype),function(name){exports[name]=Script[name]=function(code){var s=Script(code);return s[name].apply(s,[].slice.call(arguments,1));};});exports.createScript=function(code){return exports.Script(code);};exports.createContext=Script.createContext=function(context){var copy=new Context();if(typeof context==='object'){forEach(Object_keys(context),function(key){copy[key]=context[key];});}return copy;};},{"indexof":312}],312:[function(require,module,exports){var indexOf=[].indexOf;module.exports=function(arr,obj){if(indexOf)return arr.indexOf(obj);for(var i=0;i<arr.length;++i){if(arr[i]===obj)return i;}return-1;};},{}]},{},[2])(2);});
