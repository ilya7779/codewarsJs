"use strict";

function abbrevName(name){
    let arrayName = name.split(' ');
    let shortName = ''
    for (let elem of arrayName) {
        if (shortName) {
            shortName = shortName + '.' + elem.slice(0, 1);
        }
        else {
            shortName = shortName + elem.slice(0, 1);
        }
    }
    return shortName.toUpperCase();
}

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
//     The output should be two capital letters with a dot separating them.
//
//     It should look like this:
//
// Sam Harris => S.H
//
// patrick feeney => P.F