// This is a JavaScript file
$(document).on("click","etec", function(){
    navigator.vibrate(2000);       
});
$(document).on('click','#local',function(){
    navigator.notification.beep(3);  
});


