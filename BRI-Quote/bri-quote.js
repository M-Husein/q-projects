var dataKurs = [
  {"kurs":"USD","beli":13510,"jual":13610},
	{"kurs":"AUD","beli":10464,"jual":10632},
	{"kurs":"CHF","beli":13656,"jual":13855},
	{"kurs":"EUR","beli":16029,"jual":16251}
];

$(function(){
	
	$("#btnCalculateRate").on("click",function(e){
		var tp = $("#fromCur").val(),calc,
				selFromCur = $("#selectFromCur").val();
		
		switch(selFromCur){
			case "USD":
				calc = tp * dataKurs[0].beli;
				break;
			case "AUD":
				calc = tp * dataKurs[1].beli;
				break;
			case "CHF":
				calc = tp * dataKurs[2].beli;
				break;
			case "EUR":
				calc = tp * dataKurs[3].beli;
				//break;
		}
		if(selFromCur.length > 0 || selFromCur !== ""){
			$("#toCur").val(calc.toLocaleString('id-ID'));
		}else{
			$("#toCur").val("");
		}
	});
	
});//END doc ready