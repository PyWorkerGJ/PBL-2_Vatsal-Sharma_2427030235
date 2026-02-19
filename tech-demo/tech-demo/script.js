function checkConflict() {
    let existingStart = 10;
    let existingEnd = 12;
    let start = parseInt(document.getElementById("start").value);
    let end = parseInt(document.getElementById("end").value);

    if ((start < existingEnd) && (end > existingStart)) {
        document.getElementById("conflictResult").innerText =
            "❌ Conflict Detected";
    } else {
        document.getElementById("conflictResult").innerText =
            "✅ Booking Approved";
    }
}

function calculatePrice() {
    let base = 500;
    let demand = parseFloat(document.getElementById("demand").value) || 0;
    let peak = document.getElementById("peak").checked ? 1.5 : 1;
    let exam = document.getElementById("exam").checked ? 1.8 : 1;

    let finalPrice = base * (1 + demand) * peak * exam;

    document.getElementById("priceResult").innerText =
        "Final Price: ₹" + finalPrice.toFixed(2);
}

function calculateCoins() {
    let value = document.getElementById("action").value;
    document.getElementById("coinResult").innerText =
        "Coins Earned: " + value;
}

function calculateUtilization() {
    let booked = parseInt(document.getElementById("booked").value);
    let total = parseInt(document.getElementById("total").value);

    let rate = (booked / total) * 100;
    document.getElementById("utilResult").innerText =
        "Utilization Rate: " + rate.toFixed(2) + "%";
}
