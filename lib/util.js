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
	isString:function(str){
		return util.isType(str,'String');
	},
	isBoolean:function(flag){
		return util.isType(flag,'Boolean');
	},
	isType:function(obj,type){
		return Object.prototype.toString.call(obj) === '[object '+type+']';
	},
	isEmpty:function(obj){
		if(!obj){
			return true;
		}
		if(util.isArray(obj) && obj.length === 0){
			return true;
		}
		if(util.isObject(obj) && Object.keys(obj).length === 0){
			return true;
		}
		return false;
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
		if((util.isFunction(source) || util.isObject(source)) && util.isObject(destination)){
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
module.exports = util;