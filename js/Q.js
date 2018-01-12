$(function(){
	$(document).on("click","a[href=#],.prevClick",function(e){
		e.preventDefault();
	});
	
	$('#navTop,#nav2').on('shown.bs.collapse',function(){
	 	$('<div class="modal-backdrop fade show" id="dropSideNav"></div>').appendTo('body');
	});
	$('#navTop,#nav2').on('hidden.bs.collapse',function(){
	 	$('#dropSideNav').remove();
	});

	$(document).on('click','#dropSideNav,#navMain,#navMore',function(){
		$('#navTop,#nav2').collapse('hide');
	});
	
	
	
});//END Doc ready
