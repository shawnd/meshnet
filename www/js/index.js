// Controller
var deviceList = [];

var app = {
    initialize: function() {
    	this.bindEvents();
    },
    bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.refreshDeviceList();
    },
    refreshDeviceList: function() {
    	// scan for all devices
    	setInterval(function(){
    		ble.scan([], 5, app.onDiscoverDevice, app.onError);
    	}, 10000); //90 second scan
    },
    onDiscoverDevice: function(device) {
    	var stored = false;
    	for(current in deviceList){
    		if(deviceList[current].id == device.id){
    			stored = true;
    		}
    	}
    	if(stored == false){
	    	deviceList[device.id] = device;
	    	console.log(deviceList[device.id]);
	        alert("FOUND: " + device.name + " " + deviceList[device.id].id);
	    }
    },
    onError: function(error){
    	console.log("ERROR: " + error);
    	//possibly send error to server via api for debugging/error logging purposes
    }
};
