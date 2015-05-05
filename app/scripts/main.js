$(function() {
	$(document).foundation();
	
	var leet = new Leet();
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
	
});