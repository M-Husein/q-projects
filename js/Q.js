function copy(){
  var toCopy = $(".toCopy"); //document.querySelector("#input");
  toCopy.select();
  document.execCommand("copy");
}
function notifCopy(){
  $.notify({
    message:"Paste Everywhere"
  },{
		element:'body',
    type:"bg-black",
    allow_dismiss:true,
    newest_on_top:true,
    timer:150,
    placement:{
      from:"bottom",
      align:"center"
    },
    animate:{
      enter:"animated fadeInDown",
      exit:"animated fadeOutUp"
    },
    template:'<div data-notify="container" class="bootstrap-notify-container alert alert-dismissible {0} ' + (true ? "p-r-35" : "") + '" role="alert">' +
      '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
      '<span data-notify="icon"></span> ' +
      '<span data-notify="title">{1}</span> ' +
      '<span data-notify="message">{2}</span>' +
      '<div class="progress" data-notify="progressbar">' +
      '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div>' +
      '</div>' +
      '<a href="{3}" target="{4}" data-notify="url"></a>' +
      '</div>'
  });
}
//document.querySelector("#copy").addEventListener("click",copy);
$(document).on("click",".copyTxt",function(e){
	copy();
	notifCopy();
});

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
