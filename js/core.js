/**
 * @author jkoan@jkoan.de
 */

function main() {
    if (checkinit()){
        check_settings();
        
            if (settings.rss){
                rss(settings.rss_feed);
                sidebar(1);
            }
            if (settings.rss){
                
            }
            if(settings.google == true){
                $("#search_google").attr("target","_blank");
            }
            sidebar(0);
       
    }
    
}

function update_settings(){
    check_settings();
    
}

function rss (feed) {
    if (val_url(feed)){
    $('#rss').FeedEk({
        FeedUrl: feed,
        MaxCount: 10,
        ShowDesc: true,
        ShowPubDate: true,
        DescCharacterLimit: 150
        });
    }
}

function sidebar(on_off) {
    if(on_off == 1){
        $('#sidebar').removeClass('none');
        $('#main_row').removeClass('col-sm-12').addClass('col-sm-9');
    }
    else{
        $('#sidebar').addClass('none');
        $('#main_row').addClass('col-sm-12').removeClass('col-sm-9');
    }
}

function val_url(s) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(s);    
}

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
    var json = getCookie('index');
    if (json != "") {
        settings = JSON.parse(json);
    }
}

function checkinit() {
    var init=getCookie("init");
    if (init == "") {
        load_js_script("js/tutorial.js");
        $('#step_1').modal('show');
        return false;
    }
    else{
        check_settings();
    }
}

function load_js_script(src) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    $("head").append(script);
}

function show_settings(){
    check_settings();
    if(settings.rss == true){
        $('#rss_on').addClass('active');
        $('#rss_off').removeClass('active');
    }
    else{
        $('#rss_off').addClass('active');
        $('#rss_on').removeClass('active');
        
    }
    if(settings.google == true){
        $('#google_on').addClass('active');
        $('#google_off').removeClass('active');
    }
    else{
        $('#google_off').addClass('active');
        $('#google_on').removeClass('active');
    }
    if(settings.rss_feed){
        $('#rss_feed').val(settings.rss_feed);
    }
    else{
        $('#rss_feed').val('https://github.com/jkoan/startpage/commits/gh-pages.atom');
    }
    $('#modal_settings').modal('show');
}

function save_settings() {
    if ($('#rss_feed').val()) {
        settings.rss_feed = $('#rss_feed').val();
    }
    else{
        settings.rss_feed = 'https://github.com/jkoan/startpage/commits/gh-pages.atom';
    }
    if($('#rss_on').hasClass('active')){
        settings.rss = true;
        if (settings.rss_feed != "") {
            rss(settings.rss_feed);
            sidebar(1);
        };
        
    }
    if($('#rss_off').hasClass('active')){
        settings.rss = false;
        $('#rss').html('');
        sidebar(0);
    }
    if($('#google_on').hasClass('active')){
        settings.google = true;
        $("#search_google").attr("target","_blank");

    }
    if($('#google_off').hasClass('active')){
        settings.google = false;
        $("#search_google").attr("target","");
    }
    var s_json = JSON.stringify(settings);
    setCookie("index",s_json,365);
    $('#modal_settings').modal('hide');
}