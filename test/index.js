var miniEmit = require('../lib/minievent');
var should = require('should');
describe('index',function(){
	function test(){}
	function test2(){}
	var test3 = {};
	it('should be ok',function(done){
		miniEmit(test);
		test.on('addName',function(err,data){
			data.should.have.property('name','navy');
			done(err)
		});
		test.emit('addName',null,{name:'navy'});
	});
	it('should be ok',function(done){
		miniEmit(test2);
		test2.on('addName',function(err,data){
			data.should.have.property('name','navy2');
			done(err)
		});
		test2.emit('addName',null,{name:'navy2'});
	});
	it('should be ok',function(done){
		miniEmit(test3);
		test3.on('addName',function(err,data){
			data.should.have.property('name','navy3');
			done(err);
		});
		test3.emit('addName',null,{name:'navy3'});
	});
	it('should be ok',function(done){
		var test4 = {};
		miniEmit(test4);
		test4.on('addName',function(data){
			data.should.have.property('name','navy3');
			done();
		});
		test4.emit('addName',{name:'navy3'});
	})
})