// This is the starting point.  I am going to slowly start adding code as I learn.
// Currently I have no idea if anything I type in here will even work.

var Gpio = require('onoff').Gpio;
var ads1x15 = require('node-ads1x15'); // This also needs the 'CoffeeScript' module
var ads1115 = new ads1x15(1); // Sets what chip I am using (ADS1115)

// Moisture sensors
var mSensor1 = 0;
var mSensor2 = 1;
var mSensor3 = 2;
var mSensor4 = 3;

var testsPerSecond = '250'; // 250 is default according to the documentation
var programGain = '4096';

// Water motors.  This goes to the relay
var wMotor1 = new Gpio(19, 'out');
var wMotor2 = new Gpio(16, 'out');
var wMotor3 = new Gpio(26, 'out');
var wMotor4 = new Gpio(20, 'out');

// I need to check to see rough ideas of what the number ranges should be
// This will be done after a few experiments.
var highMoisture = 0; // This will be a loww number.  Numbers below this will trigger a default sensor
var lowMoisture = 0; // Numbers above this will trigger the water numbers

readMoistureSensor1 = () => {
	if (!ads1115.busy) {
		ads1115.readADCSingleEnded(
			mSensor1,
			programGain,
			testsPerSecond,
			function (err, data) {
				if (err) {
					throw err;
				}
				console.log(data);
			}
		);
	}
};
