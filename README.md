###weui弹出框插件

>使用方法

1、引入weui.min.css和本js插件

2、如下操作

```js
var confirm=new weuiConfirm();//声明弹出框；
confirm.show({title:'弹出框标题',content:'弹出框内容',cancel:'取消按钮文字',confirm:'确认按钮文字',ck:function(){//点击确认后的回调函数}})//显示弹出框
confirm.hide()//隐藏弹出框 点击弹出框的取消按钮也可以隐藏弹出框

```

>使用注意事项

1、本插件采用的单例模式