var config = {

    // Lenguage for the mirror
    language : "ko", //must also manually update locales/X.js bower component in index.html
    layout: "main",
    greeting : ["Hi", "Greetings, commander"], // An array of greetings to randomly choose from

    // Alternativly you can have greetings that appear based on the time of day
    /*
    greeting : {
       night: ["Bed?", "zZzzZz", "Time to sleep"],
       morning: ["Good Morning"],
       midday: ["Hey!", "Hello"],
       evening: ["Good evening"]
    },
    */

    // forcast.io
    forcast : {
        key : "", // Your forcast.io api key
        units : "auto" // See forcast.io documentation if you are getting the wrong units
    },
    // Philips Hue
    hue : {
        ip : "", // The IP address of your hue base
        uername : "", // The username used to control your hue
        groups : [{
            id : 0, // The group id 0 will change all the lights on the network
            name : "all"
        }, {
            id : 1,
            name : "bedroom"
        }, {
            id : 2,
            name : "kitchen"
        }]
    },
    // Calendar (An array of iCals)
    calendar: {
      icals : [], // Be sure to wrap your URLs in quotes
      maxResults: 9, // Number of calender events to display (Defaults is 9)
      maxDays: 365 // Number of days to display (Default is one year)
    },
    // Giphy
    giphy: {
      key : "" // Your Gliphy API key
    },
    overrides : {
    AUDIO_SOURCE: 'hw:1,0', // this is your microphone input. If you don't know it you can refer to this thread (http://www.voxforge.org/home/docs/faq/faq/linux-how-to-determine-your-audio-cards-or-usb-mics-maximum-sampling-rate)
    DETECTION_PERCENTAGE_START : '5%', // minimum noise percentage threshold necessary to start recording sound
    DETECTION_PERCENTAGE_END: '5%',  // minimum noise percentage threshold necessary to stop recording sound
    CLAP_AMPLITUDE_THRESHOLD: 0.7, // minimum amplitude threshold to be considered as clap
    CLAP_ENERGY_THRESHOLD: 0.3,  // maximum energy threshold to be considered as clap
    MAX_HISTORY_LENGTH: 10 // all claps are stored in history, this is its max length
	},
    traffic: {
      key : "", // Bing Maps API Key
      reload_interval : 5, // Number of minutes the information is refreshed
      // An array of tips that you would like to display travel time for
      trips : [{
        mode : "Driving", // Possibilities: Driving / Transit / Walking
        origin : "", // Start of your trip. Human readable address.
        destination : "", // Destination of your trip. Human readable address.
        name : "work", // Name of your destination ex: "work"
        /*startTime: "",
        endTime: ""*/ // Optional starttime and endtime when the traffic information should be displayed on screen. The format can be either hh:mm or hh:mm am/pm
      }]
    }
};
