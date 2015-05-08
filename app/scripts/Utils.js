function DoTable(data, rowlimit) {
	
	function letters (arr) {
		var btns = '';
		arr.forEach(function(i) {
			btns += '<kbd>' + i +'</kbd> ';
		});
				
		return btns;
	}
	var row = '', cell = 0;
	for(var l in data) {
		if(cell == 0) 
			row += '<tr>';
		row += '<td><b>' + l.toUpperCase() + '</b></td>';
		row += '<td>' + letters(data[l]) + '</td>';
		cell++;
		if(cell>=rowlimit) {
			cell = 0;
			row += '</tr>';
		}	
	}
	return row;
}