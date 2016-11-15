console.log("Test");

function date () {
	$('#date-picker').datepicker();

};

date();

$('#submit').on('click', function() {


	console.log($('#date-picker').val());

})
