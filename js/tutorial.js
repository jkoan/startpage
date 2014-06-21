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
function check_settings() {
  	var json = getCookie('index')
  	settings = JSON.parse(json)
  	
}

function checkinit() {
    var init=getCookie("init");
    if (init == "") {
        $('#step_1').modal('show');
    }
    else{
    	var index=getCookie("index");
    	json_index = JSON.parse(index);
    }
}
function loadSecondScript(src) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    $("head").append(script);
}
function step_1() {
	$('#step_1').modal({backdrop:false});
	setCookie("init","ok",365);
	$('#step_2').modal({backdrop:false});
}

function step_2() {
	setCookie("init","ok",365);
}
function step_3() {
	var json = {
		"rss" : true,
		"google" : true
	}
	var s_json = JSON.stringify(json)
	setCookie("index",s_json,365);
}

function show_settings(){
	if(settings.rss == true){
		$('#rss_on').addClass('active')
	}
	else{
		$('#rss_off').addClass('active')
	}
	if(settings.google == true){
		$('#google_on').addClass('active')
	}
	else{
		$('#google_off').addClass('active')
	}

	$('#settings').modal('show')
}

function save_settings() {
  if($('#rss_on').hasClass('active')){
  	settings.rss = true
  }
  if($('#rss_off').hasClass('active')){
  	settings.rss = false
  }
  if($('#google_on').hasClass('active')){
  	settings.rss = true
  }
  if($('#google_off').hasClass('active')){
  	settings.rss = false
  }
  
  var s_json = JSON.stringify(settings)
  setCookie("index",s_json,365);
}
