// Computing for fare with discount option

const BASE_FARE = 50;   
const PER_KM_RATE = 15; 
const BASE_KM = 2;      

function calculateFare() {
    let distVal = document.getElementById("distance").value;
    let isDiscounted = document.getElementById("discount").checked;
    let resultDisplay = document.getElementById("result");

    let distance = parseFloat(distVal);
    
    if (isNaN(distance) || distance < 0) {
        resultDisplay.innerHTML = "Total: ₱0.00";
        return;
    }

    let totalFare = (distance <= BASE_KM) ? BASE_FARE : BASE_FARE + ((distance - BASE_KM) * PER_KM_RATE);
    
    if (isDiscounted) {
        totalFare *= 0.80; 
    }

    resultDisplay.innerHTML = "Total: ₱" + totalFare.toFixed(2);
}

function goToConfirmation() {
    window.location.href = "confirmation.html";
}