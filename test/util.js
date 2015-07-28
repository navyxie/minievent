var util = require('../lib/util');
var should = require('should');
describe('util',function(){
	it('#mixture()',function(){
		var a = {};
		var b = {a:1,b:2};
		util.mixture(a,b);
		a.should.have.properties(['a','b']);
	});
	it('#clone()',function(){
		var a = {a:1,b:{}};
		var c = util.clone(a,true);
		c.b.d = 2;
		a.b.should.not.have.properties(['d']);
		c.should.have.properties(['a','b']);
	})
})