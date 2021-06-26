function footToMeter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputMeters").innerHTML = 0.305 * valNum;
}

function meterToFoot(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFeet").innerHTML = 3.279 * valNum;
}