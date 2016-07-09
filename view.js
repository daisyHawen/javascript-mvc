/*视图(View)：
视图层最主要的是监听模型层上的数据改变，并且实时的更新html页面。
当然也包括一些事件的注册或者ajax请求操作(发布事件),都是放在视图层来完成*/

/*
 下面是观察者模式类,它又叫发布---订阅模式;它定义了对象间的一种一对多的关系，
  让多个观察者对象同时监听某一个主题对象，当一个对象发生改变时，所有依赖于它的对象都将得到通知。
*/
function Event(observer) {
	this._observer=observer;
	this._listener=[];
}
Event.prototype={
	constructor:'Event',
	attach:fucntion(listeners){
		this._listener.push(listeners);
	},
	notify:function(objs){
		for(var i= 0,ilen=this._listeners.length;i){
			this._listeners[i](this._observer,objs);
		}
	}
}

/*
 * 视图显示模型数据，并触发UI事件。
 */
 function View(model,elements){
 	this._model=model;
 	this._elements=elements;
 	this.listModified=new Event(this);
 	this.addButtonClicked=new Event(this);
 	this.delButtonClicked= new Event(this);
 	var that =this;
 	//绑定模型监听器
 	this._model.itemRemoved.attach(function(){
 		that.rebuildList();
 	});
 	this._model.itemAdd.attch(function(){
 		that.rebuildList();
 	});
 	//将监听器绑定到HTML控件上
 	this._elements.list.change(function(e){
 		that.listModified.notify({index:e.target.selectedIndex});
 	});
 	this._elements.addButton.click(function(e){
 		that.addButtonClicked.notify();
 	});
 	this._elements.delButton.click(function(e){
 		that.delButtonClicked.notify();
 	});
 }
 View.prototype={
 	constructor:'View',
 	show:fucntion(){
 		this.rebuildList();
 	},
 	rebuildList:function(){
 		var list=this._elements.list,
 		items,
 		key;
 		list.html('');
 		items=this._model.getItems();
 		for(key in items){
 			if(items.hasOwnProperty(key)){
 				list.append("+ item[key]+");
 			}
 		}
 		this._model.setSelectedIndex(-1);
 	}
 };

 