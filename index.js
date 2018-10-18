function checkValues(flights, stepsPerStride) {
    if(flights.length === 0 || flights.length > 30 || stepsPerStride < 1 || stepsPerStride > 4) return false;
    var valFlights = flights.filter(flight => (flight > 20 || flight < 1));
    if(valFlights.length > 0) return false;

    return true;
}

function minStrides(flights, stepsPerStride) {
    var minStd = 0;
    var loadings = flights.length - 1;

    flights.forEach(function (v) {
        minStd = minStd + (Math.floor(v/stepsPerStride));

        if((v % stepsPerStride) > 0) {
            minStd++;
        }
    });

    return minStd + (2 * loadings);
}

function testApplication(flights, stepsPerStride,result) {
    if (checkValues(flights, stepsPerStride)) {
        var response = minStrides(flights, stepsPerStride);
        if(response === result ) return 'Test Ok';
        else return 'Test Error';
    } else {
        return 'Test Error';
    }
}

console.log(testApplication([17],3,6));
console.log(testApplication([17,17],3,14));
console.log(testApplication([4,9,8,11,7,20,14],2,50));

