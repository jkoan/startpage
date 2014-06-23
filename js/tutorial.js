/**
 * @author jkoan@jkoan.de
 */

function step_1() {
	$('#step_1').modal('hide');
	setCookie("init","ok",365);
	$('#step_2').modal('show');
}

function step_2() {
	setCookie("init","ok",365);
}
function step_3() {
	var json = {
		"rss" : true,
		"google" : true
	};
	var s_json = JSON.stringify(json);
	setCookie("index",s_json,365);
}
