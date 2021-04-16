// This code will turn all 4 relays on for 5 seconds and off at the same time.

var Gpio = require('onoff');
var relay1 = new Gpio(19, 'out');
var relay2 = new Gpio(16, 'out');
var relay3 = new Gpio(26, 'out');
var relay4 = new Gpio(20, 'out');

// This will unexport the Gpio pins
unexportAll = () => {
	relay1.unexport();
	relay2.unexport();
	relay3.unexport();
	relay4.unexport();
};

// This will switch the relays on
turnOn = () => {
	relay1.writeSync(0);
	relay2.writeSync(0);
	relay3.writeSync(0);
	relay4.writeSync(0);
};

// This will switch off the relays
turnOff = () => {
	relay1.writeSync(1);
	relay2.writeSync(1);
	relay3.writeSync(1);
	relay4.writeSync(1);
	unexportAll();
};

turnOn();
setTimeout(turnOff, 5000);
