// Toggle Pump
const pumpButton = document.getElementById("pumpButton");
let pumpOn = false;

pumpButton.addEventListener("click", () => {
    pumpOn = !pumpOn;

    if (pumpOn) {
        pumpButton.textContent = "Turn Pump OFF";
        pumpButton.classList.remove("pump-off");
        pumpButton.classList.add("pump-on");
    } else {
        pumpButton.textContent = "Turn Pump ON";
        pumpButton.classList.remove("pump-on");
        pumpButton.classList.add("pump-off");
    }

    // Send to Flask backend
    fetch("/api/pump", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ state: pumpOn })
    });
});

// Example Chart Data
const waterChart = new Chart(document.getElementById('waterChart'), {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Water (L)',
            data: [12, 19, 8, 15, 10, 14, 20],
            borderColor: '#00ffcc',
            tension: 0.4
        }]
    }
});

const powerChart = new Chart(document.getElementById('powerChart'), {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Power (W)',
            data: [50, 60, 45, 70, 55, 65, 80],
            borderColor: '#ff9800',
            tension: 0.4
        }]
    }
});

// Simulated Weather
document.getElementById("weatherCondition").innerText = "Partly Cloudy";
document.getElementById("rainProbability").innerText = "Rain Probability: 30%";

// Simulated Sensor Data
setInterval(() => {
    document.getElementById("moisture").innerText = 
        Math.floor(Math.random() * 100) + "%";

    document.getElementById("temperature").innerText = 
        (20 + Math.random() * 10).toFixed(1) + "°C";

    document.getElementById("humidity").innerText = 
        Math.floor(Math.random() * 100) + "%";

    document.getElementById("aiStatus").innerText =
        Math.random() > 0.5 ? "Irrigation Required" : "No Irrigation Needed";

}, 3000);
