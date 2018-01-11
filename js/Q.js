$(function(){
	$(document).on("click","a[href=#],.prevClick",function(e){
		e.preventDefault();
	});
	
	$('#navTop').on('shown.bs.collapse',function(){
	 	$('<div class="modal-backdrop fade show" id="dropSideNav"></div>').appendTo('body');
	});
	$('#navTop').on('hidden.bs.collapse',function(){
	 	$('#dropSideNav').remove();
	});

	$(document).on('click','#dropSideNav,#navMain',function(){
		$('#navTop').collapse('hide');
	});
	
	
	
});//END Doc ready