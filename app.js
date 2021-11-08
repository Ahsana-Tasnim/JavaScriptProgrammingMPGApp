/**
 * Ahsana Tasnim
 * MPG App
 */
let errors = [];

const isValidNumeric = function(value) {
    value = parseFloat(value);
    return !isNaN(value);
}

const txtMiles = document.getElementById('txtMiles');
const txtGallons = document.getElementById('txtGallons');
const calculateButton = document.getElementById('btnCalculate');
const elmTarget = document.getElementById('answer');

calculateButton.addEventListener('click', calculateButtonHandler);

function calculateButtonHandler(){
    const milesTravelled = txtMiles.value;
    const gallonsConsumed = txtGallons.value;

    const answer = calculateMPG(milesTravelled, gallonsConsumed);
    let markUp = '';

    if(errors.length == 0) {
        markUp = `<p>Miles travelled: ${milesTravelled} Gallons Consumed: ${gallonsConsumed} MPG: ${answer}</p>`;
    }else{
        markUp = `<ul style = 'color:red;>`

        errors.forEach(err=>{
            markUp += `<li>${err}</li>`;
        });
        markUp += `</ul>`;
    }

    elmTarget.innerHTML = markUp;
}

function calculateMPG(milesTravelled, gallonsConsumed){
    errors = [];

    if(!isValidNumeric(milesTravelled) || milesTravelled == 0){
        errors.push('Miles travelled is not valid');
    }

    if(!isValidNumeric(gallonsConsumed) || gallonsConsumed == 0) {
        errors.push('Gallons consumed is not valid');
    }

    let mpg = milesTravelled/gallonsConsumed;
    mpg = parseInt(mpg);
    return mpg;
}