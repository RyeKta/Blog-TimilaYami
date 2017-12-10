$(document).ready(function(){
	$('select').material_select();
	$('.tabset').tabs();
	$('.datepicker').pickadate({
		selectMonths: true, 
		selectYears: 15 
	});
	$('.modal').modal();
});
$(".nav-opener").sideNav();
$('.profile-opener').dropdown({
	inDuration: 300,
	outDuration: 225,
	constrainWidth: true,
	gutter: 0, 
	belowOrigin: true,
	alignment: 'left',
	stopPropagation: false
});