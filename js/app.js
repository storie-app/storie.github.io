// Can also be included with a regular script tag
// import Typed from 'typed.js';

var options = {
    strings: [
        "I want to find better book recs",
        "I want to read with purpose",
        "I want to diversify my reading",
        "I want to be a well-rounded reader",
        "I want to support BIPOC authors",
        "I want to create a reading plan",
        "I want to read more consistently",
        "I want to track my reading growth"
    ],
    typeSpeed: 60,
    backDelay: 3e3,
    startDelay: 10,
    backSpeed: 20,
    smartBackspace: !1,
    loop: !0
};

var typed = new Typed('.quote-interactive', options);
