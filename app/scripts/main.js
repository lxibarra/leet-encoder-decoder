/// <reference path="../../typings/jquery/jquery.d.ts"/>
$(function() {
	$(document).foundation();
	
	LeetTables.forEach(function(t, i) {
		$('#tablecell').append('<option value="' + i + '">' + t.name + '</option>');
	});
	
	$('#tablecell').on('change', function () {
		leet.setLeetTable(LeetTables[$(this).val()].table);
		showTable();
	});
	
	var leet = new Leet();
	leet.setLeetTable(LeetTables[0].table);		
	var timeoutid;
	$('#normal-text').on('keyup', function() {
		$('#leet-text').val(leet.ToLeet($(this).val()));
	});
	
	$('#leet-text').on('keyup', function() {
		var context = $(this);
		clearTimeout(timeoutid);
    	timeoutid = setTimeout(function() {
        	$('#normal-text').val(leet.ToNormal(context.val())); 
		}, 1000);
	});
	
	$('#leetJson').html(JSON.stringify(LeetTables, ' ', '\t'));
	
	var showTable = function() {
		$('#leetTable tbody').html(DoTable(leet.getLeetTable(), 3));
		return this;
	};
	
	showTable();
	
	
	
});