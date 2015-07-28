# 事件扩展工具库

## Example

```js
var miniEmit = require('minievent');
var obj = {a:1,b:1};
miniEmit(obj);
obj.on('test',function(err,data){
	//err->null,data->'ok'
});
obj.emit('test',null,'ok');
obj.off('test');
```