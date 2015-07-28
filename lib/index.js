var util = require('./util');
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
module.exports = outPut;