/* Custom filtering function which will search data in column four between two values */
$.fn.dataTable.ext.search.push(
	function(settings,data,dataIndex){
		var min = parseInt($('#filterTable option:selected').val(),10);
		var max = parseInt($('#filterTable option:selected').data('filterto'),10);
		
		var td2 = data[1];
		var tdReplace = td2.replace(/,/g,"");
		
		var fromRange = parseFloat(tdReplace) || 0; // use data for the fromRange column | data[2]) || 0

		if((isNaN(min) && isNaN(max)) || (isNaN( min ) && fromRange <= max) || (min <= fromRange && isNaN(max)) || (min <= fromRange && fromRange <= max)){
			return true;
		}
		return false;
	}
);