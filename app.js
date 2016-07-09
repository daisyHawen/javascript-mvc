$(function(){
	var model=new Model(['PHP','Javasrcipt']),
	view=new View(model,{
		'list':$('#list'),
		'addButton':$('#plusBtn'),
		'delButton':$('#minusBtn')
	}),
	controller=new Controller(model,view);
	view.show();
});
