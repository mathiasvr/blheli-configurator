'use strict';

var BLUEJAY_DEFAULTS = {
	'200': {
		STARTUP_POWER:              9,
		MOTOR_DIRECTION:            1,
		COMMUTATION_TIMING:         3,
		BEEP_STRENGTH:              40,
		BEACON_STRENGTH:            80,
		BEACON_DELAY:               4,
		DEMAG_COMPENSATION:         2,
		TEMPERATURE_PROTECTION:     7,
		LOW_RPM_POWER_PROTECTION:   1,
		BRAKE_ON_STOP:              0,
		LED_CONTROL:                0,

		STARTUP_BOOST:              51,
		STARTUP_BEEP:               1,
		DITHERING:                  1,
	},
	// BLHeli_S
	'33': {
		STARTUP_POWER:              9,
		MOTOR_DIRECTION:            1,
		PROGRAMMING_BY_TX:          1,
		COMMUTATION_TIMING:         3,
		PPM_MIN_THROTTLE:           37,
		PPM_MAX_THROTTLE:           208,
		BEEP_STRENGTH:              40,
		BEACON_STRENGTH:            80,
		BEACON_DELAY:               4,
		DEMAG_COMPENSATION:         2,
		PPM_CENTER_THROTTLE:        122,
		TEMPERATURE_PROTECTION:     7,
		LOW_RPM_POWER_PROTECTION:   1,
		BRAKE_ON_STOP:              0,
		LED_CONTROL:                0
	},
};
