function checkConflict() {
    let existingStart = 10;
    let existingEnd = 12;
    let start = parseInt(document.getElementById("start").value);
    let end = parseInt(document.getElementById("end").value);

    if (!start || !end) {
        document.getElementById("conflictResult").innerHTML = "Enter valid time.";
        return;
    }

    if ((start < existingEnd) && (end > existingStart)) {
        document.getElementById("conflictResult").innerHTML =
            "❌ Conflict Detected";
    } else {
        document.getElementById("conflictResult").innerHTML =
            "✅ Booking Approved";
    }
}

function calculatePrice() {
    let base = 500;
    let demand = parseFloat(document.getElementById("demand").value) || 0;
    let peak = document.getElementById("peak").checked ? 1.5 : 1;
    let exam = document.getElementById("exam").checked ? 1.8 : 1;

    let finalPrice = base * (1 + demand) * peak * exam;

    document.getElementById("priceResult").innerHTML =
        "₹ " + finalPrice.toFixed(2);
}

function calculateCoins() {
    let value = document.getElementById("action").value;
    document.getElementById("coinResult").innerHTML =
        "Coins Earned: " + value;
}

function calculateUtilization() {
    let booked = parseInt(document.getElementById("booked").value);
    let total = parseInt(document.getElementById("total").value);

    if (!booked || !total) {
        document.getElementById("utilResult").innerHTML = "Enter valid values.";
        return;
    }

    let rate = (booked / total) * 100;

    document.getElementById("utilResult").innerHTML =
        rate.toFixed(2) + "% Utilization";
}
