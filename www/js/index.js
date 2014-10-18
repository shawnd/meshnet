// Controller
var deviceList;
var app = {
    initialize: function() {
    	deviceList = $("#deviceList");
    	this.bindEvents();
    	alert("STARTED");
    },
    bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.refreshDeviceList();
        alert("ready");
    },
    refreshDeviceList: function() {
    	// scan for all devices
        ble.scan([], 5, app.onDiscoverDevice, app.onError);
    },
    onDiscoverDevice: function(device) {
        alert("FOUND: " + device.id);
    },
    onError: function(error){
    	alert("ERROR: " + error);
    }
};
