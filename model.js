/*模型(Model)：
模型用于封装与应用程序的业务逻辑相关的数据
以及对数据处理的方法。
模型有对数据直接访问的权利。
模型不依赖 “视图” 和 “控制器”,
 也就是说 模型它不关心页面如何显示及如何被操作.
*/
function Model(elems) {
	this._elems = elems;
	this._selectIndex = -1;
	this.itemAdd = new Event(this);
	this.selectedIndexChanged = new Event(this);
}
Model.prototype = {
	constructor: 'Model',
	getItems: function() {
		return [].concat(this._elems);
	},
	addItem: function(elem) {
		this.elems.push(elem);
		this.itemAdd.notify({
			elem: elem
		});
	},
	removeItem: function(index) {
		var item = this._elems[index];
		this._elems.splice(index, 1);
		this.itemRemoved.notify({
			elem: item
		});
		if (index === this._selectIndex) {
			this.setSelectedIndex(-1);
		}
	},
	getSelectedIndex: function() {
		return this._selectedIndex;
	},
	setSelectedIndex: function(index) {
		var previousIndex = this._selectedIndex;
		this._selectedIndex = index;
		this.selectedIndexChanged.notify({
			previous: previousIndex
		})
	}

}