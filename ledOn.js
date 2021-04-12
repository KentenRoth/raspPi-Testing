// This will turn an LED on for 5 seconds.
// I am using GPIO pin number 2
// I have a wire from GPIO pin 2 into a-10 on the breadboard
// I have a wire from GPIO pin gnd into the right side negative slot 2
// LED LONG leg is in e-10 and SHORT leg in f-10
// I have a resistor in j-10 and the negative

var Gpio = require('onoff').Gpio; // Using the onoff package
var LED = new Gpio(2, 'out'); // sets what GPIO pin is being used, and if it is getting or sending data

turnOn = () => {
	//LED is the GPIO variable I set
	// writeSync() allows me to set a value (1 or 0) for the LED.  1 = on and 0 = off
	LED.writeSync(1);
};

turnOff = () => {
	// The light is on so now we run this to turn the light off
	// by changing the LED value with writeSync to 0 it turns the LED off
	LED.writeSync(0);
	LED.unexport(); //Shuts the pin down so it can be used again without being reinitialized
};

turnOn(); // Runs the code to turn the light on
setTimeout(turnOff, 5000); // after 5 seconds this code will run to turn the light off
