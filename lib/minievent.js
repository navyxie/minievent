(function(){
	var root = this;
	var util = {
		isFunction:function(fn){
			return util.isType(fn,'Function');
		},
		isObject:function(obj){
			return util.isType(obj,'Object');
		},
		isArray:function(arr){
			return util.isType(arr,'Array');
		},
		isType:function(obj,type){
			return Object.prototype.toString.call(obj) === '[object '+type+']';
		},
		extend:function(destination,source,deep){
			for(var key in source){
				if(source.hasOwnProperty(key) && source[key]){
					if(deep && util.isObject(source[key])){
						destination[key] = util.extend({},source[key],deep);
					}else{
						destination[key] = source[key];
					}
					
				}
			}
			return destination;
		},
		clone:function(obj,deep){
			if(!util.isObject(obj)){
				return obj;
			}
			return util.isArray(obj) ? obj.slice() : util.extend({},obj,deep);
		},
		makeArray:function(arr){
			var result = [];
			if(!(util.isArray(arr) || util.isType(arr,'Arguments'))){
				return result;
			}
			for(var i = 0 , len = arr.length ; i < len ; i++){
				result.push(arr[i]);
			}
			return result;
		},
		mixture:function(source,destination){
			if((util.isFunction(source) || util.isObject(source) || util.isArray()) && util.isObject(destination)){
				var keys = Object.keys(destination);
				for(var i = 0 , len = keys.length ; i < len ; i++){
					if(destination.hasOwnProperty(keys[i])){
						if(source[keys[i]]){
							throw new Error('source function hasOwnProperty : '+keys[i]);
						}
						source[keys[i]] = destination[keys[i]];
					}
				}
			}
			return;
		}
	}
	var index = {
		listenList:{},
		on:function(event,fn){
			this.listenList[event] ? this.listenList[event].push(fn) : this.listenList[event] = [fn];
		},
		off:function(event,fn){
			if(!(event || fn)){
				this.listenList = {};
			}
			var fnList = this.listenList[event];
			if(fnList){
				if(fn){
					for(var i = 0 , len = fnList.length ; i < len ; i++){
						if(list === fn){
							fnList.splice(index,1);
							break;
						}
					}
				}else{
					delete this.listenList[event];
				}
			}
		},
		emit:function(){
			var args = util.makeArray(arguments);
			var eType = args[0];
			var params = args.splice(0,1);
			var self = this;
			var fnList = this.listenList[eType] || [];
			for(var i = 0 , len = fnList.length ; i < len ; i++){
				fnList[i].apply(self,args);
			}
		}
	}
	function outPut(source){
		util.mixture(source,util.clone(index,true));
	}
	if (typeof exports !== 'undefined' || (typeof module !== 'undefined' && module.exports)){
		module.exports = outPut;
	}else if(typeof define === 'function' && define.amd){
		define('minievent', [], function(){
			return outPut;
		});
	}else if(typeof define === 'function' && define.cmd){
		define(function(){
			return outPut;
		})
	}else{
		root.minievent = outPut;
	}
}.call(this));