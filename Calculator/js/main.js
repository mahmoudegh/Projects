/*jslint plusplus: true*/
/*global document, event, window, location*/

/////////////////////////////// Variables //////////////////////////////////////

var inputOne = document.getElementsByClassName('screen')[0],

    inputTwo = document.getElementsByClassName('screen')[1],

    operator = document.getElementsByClassName('operator-field')[0],

    operatorButtons = document.querySelectorAll('button.operator-button'),

    buttons = document.querySelectorAll('button.number-button'),

    equal = document.getElementsByClassName("equal")[0],

    result = document.getElementsByClassName('result')[0],

    clear = document.getElementsByClassName('clear')[0],

    del = document.getElementsByClassName('del')[0],

    on_Off = document.getElementsByClassName('on-off')[0],

    allButtons = document.getElementsByTagName('button'),

    form = document.getElementsByTagName('form'),

    placeHolder = document.createAttribute('placeholder'),

    i;

////////////////////////// Repeat First Number /////////////////////////////////

function repeatFirstNumber() {

    'use strict';

    inputOne.value = inputOne.value + event.currentTarget.value;
}

for (i = 0; i < buttons.length; i++) {

    buttons[i].onclick = repeatFirstNumber;
}

////////////////////////// Repeat Seconde Number ///////////////////////////////

function repeatSecondeNumber() {

    'use strict';

    inputTwo.value = inputTwo.value + event.currentTarget.value;

    for (i = 0; i < buttons.length; i++) {

        buttons[i].onclick = repeatSecondeNumber;
    }
}


///////////////////////////////// Del First ////////////////////////////////////

function delFirst() {

    'use strict';

    inputOne.value = inputOne.value.substring(0, inputOne.value.length - 1);
}

for (i = 1; i < buttons.length; i++) {

    del.onclick = delFirst;
}

//////////////////////////////// Del Seconde ///////////////////////////////////

function delSeconde() {

    'use strict';

    inputTwo.value = inputTwo.value.substring(0, inputTwo.value.length - 1);

    for (i = 1; i < buttons.length; i++) {

        del.onclick = delSeconde;
    }
}

////////////////////////////// Show Result /////////////////////////////////////

function showResult() {

    'use strict';

    result.style.visibility = "visible";
}

//////////////////////////////// Adding ////////////////////////////////////////

operatorButtons[0].onclick = function () {

    'use strict';

    operator.value = '+';

    repeatSecondeNumber();

    delSeconde();

    result.innerHTML = "=" + (Number(inputOne.value) + Number(inputTwo.value));

    equal.onclick = function () {

        result.innerHTML = "=" + (Number(inputOne.value) + Number(inputTwo.value));

        showResult();
    };
};

///////////////////////////////// Deviding /////////////////////////////////////

operatorButtons[1].onclick = function () {

    'use strict';

    operator.value = '÷';

    repeatSecondeNumber();

    delSeconde();

    equal.onclick = function () {

        result.innerHTML = "=" + inputOne.value / inputTwo.value;

        showResult();
    };
};

////////////////////////////// Multiplying /////////////////////////////////////

operatorButtons[2].onclick = function () {

    'use strict';

    operator.value = 'x';

    repeatSecondeNumber();

    delSeconde();

    equal.onclick = function () {

        result.innerHTML = "=" + inputOne.value * inputTwo.value;

        showResult();
    };
};

///////////////////////////// Substractinging //////////////////////////////////

operatorButtons[3].onclick = function () {

    'use strict';

    operator.value = '-';

    repeatSecondeNumber();

    delSeconde();

    equal.onclick = function () {

        result.innerHTML = "=" + (inputOne.value - inputTwo.value);

        showResult();
    };
};

//////////////////////////////// Clear Screen //////////////////////////////////

function clearScreen() {

    "use strict";

    inputOne.value = '';

    inputTwo.value = '';

    operator.value = '';

    result.innerHTML = '';

    result.style.visibility = "hidden";

    for (i = 0; i < buttons.length; i++) {

        buttons[i].onclick = repeatFirstNumber;
    }

    for (i = 1; i < buttons.length; i++) {

        del.onclick = delFirst;
    }
}

clear.onclick = clearScreen;

///////////////////// Make calculator Off On Start /////////////////////////////

inputOne.setAttributeNode(placeHolder);

placeHolder.value = '';

on_Off.textContent = 'ON';

on_Off.style.backgroundColor = 'green';

on_Off.onmouseover = function () {

    'use strict';

    on_Off.style.backgroundColor = '#1d611d';
};

on_Off.onmouseleave = function () {

    'use strict';

    on_Off.style.backgroundColor = 'green';
};

for (i = 0; i < allButtons.length; i++) {

    if (i === 2) {

        continue;
    }

    allButtons[i].disabled = true;
}

///////////////////////////////////// ON ///////////////////////////////////////

function on() {

    'use strict';

    placeHolder.value = '0';

    on_Off.textContent = 'OFF';

    on_Off.onmouseover = function () {

        on_Off.style.backgroundColor = '#964444';
    };

    on_Off.onmouseleave = function () {

        on_Off.style.backgroundColor = 'red';
    };

    for (i = 0; i < allButtons.length; i++) {

        allButtons[i].disabled = false;
    }
}

/////////////////////////////////// OFF ////////////////////////////////////////

function off() {

    'use strict';

    placeHolder.value = '';

    for (i = 0; i < allButtons.length; i++) {

        if (i === 2) {

            continue;
        }

        allButtons[i].disabled = true;

        location.reload();
    }
}

/////////////////////////////////// ON/OFF /////////////////////////////////////

function switchOnOff() {

    'use strict';

    on();

    clearScreen();

    on_Off.addEventListener('click', off);
}

on_Off.onclick = switchOnOff;
