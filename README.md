# 事件扩展工具库

## frontend & nodejs mini event emit

## Example

Nodejs demo

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

Browser demo

```html
<script type="text/javascript" src='./lib/minievent'></script>
```
```js
var obj = {a:1,b:1};
minievent(obj);
obj.on('test',function(data){
	//data->'ok'
});
obj.emit('test','ok');
obj.off('test');
```