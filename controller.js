/*
控制器(Controller)：
控制器接收用户的操作，
最主要是订阅视图层的事件，
然后调用模型或视图去完成用户的操作;
比如：当页面上触发一个事件，
控制器不输出任何东西及对页面做任何处理;
它只是接收请求并决定调用模型中的那个方法去处理请求,
然后再确定调用那个视图中的方法来显示返回的数据。
*/
function Controller(model,view) {
	this._model=model;
	this._view=view;
	var that= this;
	this._view.listModified.attach(function(sender,srgs){
		that.updateSelected(args,index);
	});
	this._view.addButtonClicked.attach(function(){
		that.addItem();
	});
	this._view.delButtonClicked.attach(function(){
		that.delItem();
	});
}
Controller.prototype={
	constructor:'Controller',
	addItem:function(){
		var item=window.protompt('Add item:','');
		if(item){
			this._model.additem(item);
		}
	},
	delItem:function(){
		var index=this._model.getSelectedIndex();
		if(index!==-1){
			this.model.removeItem(item);
		}
	},
	updatedSelected:function(index){
		this._model.setSelectedIndex(index);
	}
}
