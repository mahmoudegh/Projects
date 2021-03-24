/*jslint plusplus: true, evil: true*/
/*global console, alert, document, prompt*/

var button = document.getElementById("button-a");

button.onclick = function () {

    "use strict";

    var todayDate = new Date(),

        birthDateInput = document.getElementById("input"),

        birthDate = new Date(birthDateInput.value),

        myAgeInMilliSeconds = todayDate - birthDate;

    document.getElementById("result-a").innerHTML =
        "Your Age In Milli Seconds : " + myAgeInMilliSeconds.toFixed(3) + " MilliSecond.";

    document.getElementById("result-a").style.display = "block";
    document.getElementById("result-f").style.display = "none";
    document.getElementById("result-b").style.display = "none";
    document.getElementById("result-c").style.display = "none";
    document.getElementById("result-d").style.display = "none";
    document.getElementById("result-e").style.display = "none";
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



var button = document.getElementById("button-b");

button.onclick = function () {

    "use strict";

    var todayDate = new Date(),

        birthDateInput = document.getElementById("input"),

        birthDate = new Date(birthDateInput.value),

        myAgeInMilliSeconds = todayDate - birthDate;


    document.getElementById("result-b").innerHTML =
        "Your Age In Seconds : " + (myAgeInMilliSeconds / 1000).toFixed(3) + " Second.";

    document.getElementById("result-b").style.display = "block";
    document.getElementById("result-a").style.display = "none";
    document.getElementById("result-f").style.display = "none";
    document.getElementById("result-c").style.display = "none";
    document.getElementById("result-d").style.display = "none";
    document.getElementById("result-e").style.display = "none";
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



var button = document.getElementById("button-c");

button.onclick = function () {

    "use strict";

    var todayDate = new Date(),

        birthDateInput = document.getElementById("input"),

        birthDate = new Date(birthDateInput.value),

        myAgeInMilliSeconds = todayDate - birthDate;

    document.getElementById("result-c").innerHTML =
        "Your Age In Minutes : " + (myAgeInMilliSeconds / (1000 * 60)).toFixed(3) + " Minute.";

    document.getElementById("result-c").style.display = "block";
    document.getElementById("result-a").style.display = "none";
    document.getElementById("result-b").style.display = "none";
    document.getElementById("result-f").style.display = "none";
    document.getElementById("result-d").style.display = "none";
    document.getElementById("result-e").style.display = "none";
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



var button = document.getElementById("button-d");

button.onclick = function () {

    "use strict";

    var todayDate = new Date(),

        birthDateInput = document.getElementById("input"),

        birthDate = new Date(birthDateInput.value),

        myAgeInMilliSeconds = todayDate - birthDate;

    document.getElementById("result-d").innerHTML =
        "Your Age In Hours : " + (myAgeInMilliSeconds / (1000 * 60 * 60)).toFixed(3) + " Hour.";

    document.getElementById("result-d").style.display = "block";
    document.getElementById("result-a").style.display = "none";
    document.getElementById("result-b").style.display = "none";
    document.getElementById("result-c").style.display = "none";
    document.getElementById("result-f").style.display = "none";
    document.getElementById("result-e").style.display = "none";
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var button = document.getElementById("button-e");

button.onclick = function () {

    "use strict";

    var todayDate = new Date(),

        birthDateInput = document.getElementById("input"),

        birthDate = new Date(birthDateInput.value),

        myAgeInMilliSeconds = todayDate - birthDate;

    document.getElementById("result-e").innerHTML =
        "Your Age In Days : " + (myAgeInMilliSeconds / (1000 * 60 * 60 * 24)).toFixed(3) + " Day.";

    document.getElementById("result-e").style.display = "block";
    document.getElementById("result-a").style.display = "none";
    document.getElementById("result-b").style.display = "none";
    document.getElementById("result-c").style.display = "none";
    document.getElementById("result-d").style.display = "none";
    document.getElementById("result-f").style.display = "none";
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var button = document.getElementById("button-f");

button.onclick = function () {

    "use strict";

    var todayDate = new Date(),

        birthDateInput = document.getElementById("input"),

        birthDate = new Date(birthDateInput.value),

        myAgeInMilliSeconds = todayDate - birthDate;

    document.getElementById("result-f").innerHTML =
        "Your Age In Years : " + (myAgeInMilliSeconds / (1000 * 60 * 60 * 24 * 365)).toFixed(3) + " Year.";

    document.getElementById("result-f").style.display = "block";
    document.getElementById("result-a").style.display = "none";
    document.getElementById("result-b").style.display = "none";
    document.getElementById("result-c").style.display = "none";
    document.getElementById("result-d").style.display = "none";
    document.getElementById("result-e").style.display = "none";
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var button = document.getElementById("button-g");

button.onclick = function () {

    "use strict";

    var todayDate = new Date(),

        birthDateInput = document.getElementById("input"),

        birthDate = new Date(birthDateInput.value),

        myAgeInMilliSeconds = todayDate - birthDate;

    document.getElementById("result-a").innerHTML =
        "Your Age In Milli Seconds : " + myAgeInMilliSeconds.toFixed(3) + " MilliSecond.";

    document.getElementById("result-b").innerHTML =
        "Your Age In Seconds : " + (myAgeInMilliSeconds / 1000).toFixed(3) + " Second.";

    document.getElementById("result-c").innerHTML =
        "Your Age In Minutes : " + (myAgeInMilliSeconds / (1000 * 60)).toFixed(3) + " Minute.";

    document.getElementById("result-d").innerHTML =
        "Your Age In Hours : " + (myAgeInMilliSeconds / (1000 * 60 * 60)).toFixed(3) + " Hour.";

    document.getElementById("result-e").innerHTML =
        "Your Age In Days : " + (myAgeInMilliSeconds / (1000 * 60 * 60 * 24)).toFixed(3) + " Day.";

    document.getElementById("result-f").innerHTML =
        "Your Age In Years : " + (myAgeInMilliSeconds / (1000 * 60 * 60 * 24 * 365)).toFixed(3) + " Year.";

    document.getElementById("result-f").style.display = "block";
    document.getElementById("result-a").style.display = "block";
    document.getElementById("result-b").style.display = "block";
    document.getElementById("result-c").style.display = "block";
    document.getElementById("result-d").style.display = "block";
    document.getElementById("result-e").style.display = "block";
};






















































// ////////////////////////////////////////////////////////////////Height
