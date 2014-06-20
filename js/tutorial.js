function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function checkCookie() {
    var init=getCookie("init");
    if (init == "") {
        $('#step_1').modal('show');
    }
    else{
    	
    }
}
function step_1() {
	setCookie("init","ok",365);
	$('#step_1').modal('hide');
	$('#step_2').modal('show');
}

function step_2() {
  
}
function step_3() {
  
}