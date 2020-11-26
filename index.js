// console.log(dpBundesland)

// land = dpBundesland.map((ld) => {
//     return ld.label
// });
// console.log(land)
var cases = document.getElementById('cases');


infected = dpBundesland.map((inf) => {
    return inf.y
});

sum = infected.reduce((ttl, num) => {
    return ttl + num
});

var total = document.getElementById('total');
total.innerText = `Österreich: ${sum}`


function checkData(path) {
    var ID = path.id;
    var FILL = path.fill;


    let infect;
    if (ID === "Wien") {
        infect = infected[0]
    } else if (ID === "Vorarlberg") {
        infect = infected[1]
    } else if (ID === "Tirol") {
        infect = infected[2]
    } else if (ID === "Steiermark") {
        infect = infected[3]
    } else if (ID === "Salzburg") {
        infect = infected[4]
    } else if (ID === "Oberösterreich") {
        infect = infected[5]
    } else if (ID === "Niederösterreich") {
        infect = infected[6]
    } else if (ID === "Kärnten") {
        infect = infected[7]
    } else if (ID === "Burgenland") {
        infect = infected[8]
    }

    var FILL = path.fill;

    var color;
    if (infect >= 200 && infect <= 700) {
        // FILL = `rgb(${171},${118},${130})`;
        color = '#c28796'
    } else if
        (infect >= 701 && infect <= 1400) {
        // FILL = `rgb(${181},${83},${106})`;
        color = '#d36d75'
    } else if
        (infect >= 1401 && infect <= 2100) {
        // FILL = `rgb(${181},${38},${62})`;
        color = '#d36d75'
    } else if
        (infect >= 2101 && infect <= 5000)
        // FILL = `rgb(${140},${13},${34})`;
        color = '#e71837'

    FILL = color;
    console.log(FILL)

    //Change color funktioniert nicht, bitte um Hint

    var cases = document.getElementById('cases');
    cases.innerText = `${ID}: ${infect}`
}


$( 'path' ).on( 'mouseover', function() { checkData(this) });

// $('path')
//     .mouseover(function () {
//         $(this).css({ fill: "#00ff00" });
//         $(cases).html(`${str}: ${infected[2]}`)
//         console.log(checkId())

//     })
//     .mouseout(function () {
//         $(this).css({ fill: "#4e4e55" })
//         $(cases).html(``)
//     })