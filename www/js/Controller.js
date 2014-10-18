// Controller
$(document).ready(function(){
	console.log("ready");
	menu.toggle();

	ble.scan([], 5, function(device) {
	    console.log(JSON.stringify(device));
	    setTimeout(function(){
	    	menu.toggle();
	    }, 5000);
	}, function(device){
		menu.toggle();
	});
});
