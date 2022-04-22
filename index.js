var specs = require('./specs.js')

function getSpecs(mph, mpg) {
    console.log("solving for mileage");
    if(mpg < 0){
        console.log("no no no");
    }
    else {
        console.log("kph is " + specs.kph(mph));
        console.log("kpg is " + specs.kpg(mpg));
    }
}

getSpecs(70, 125);
getSpecs(14, 150);
