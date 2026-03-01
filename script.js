// ================= THEME TOGGLE =================
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    themeToggle.classList.toggle("active");
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
});

// ================= MODE TOGGLE =================
const modeToggle = document.getElementById("modeToggle");

modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");

    const isAuto = modeToggle.classList.contains("active");
    socket.emit("mode_change", { auto: isAuto });
});

// ================= PUMP CONTROL =================
const pumpButton = document.getElementById("pumpButton");
let pumpOn = false;

pumpButton.addEventListener("click", () => {
    pumpOn = !pumpOn;

    pumpButton.textContent = pumpOn ? "Turn Pump OFF" : "Turn Pump ON";
    pumpButton.className = pumpOn ? "pump-on" : "pump-off";

    socket.emit("pump_control", { state: pumpOn });
});

// ================= WEBSOCKET =================
const socket = io("http://localhost:5000");

socket.on("connect", () => {
    console.log("Connected to server");
});

// Live sensor update
socket.on("sensor_update", (data) => {
    document.getElementById("moisture").innerText = data.moisture + "%";
    document.getElementById("temperature").innerText = data.temperature + "°C";
    document.getElementById("humidity").innerText = data.humidity + "%";
    document.getElementById("aiStatus").innerText = data.ai_decision;

    waterChart.data.datasets[0].data.push(data.water_usage);
    powerChart.data.datasets[0].data.push(data.power_usage);

    waterChart.update();
    powerChart.update();
});

// ================= CHARTS =================
const waterChart = new Chart(document.getElementById("waterChart"), {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Water (L)',
            data: [],
            borderColor: '#00c853',
            tension: 0.4
        }]
    }
});

const powerChart = new Chart(document.getElementById("powerChart"), {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Power (W)',
            data: [],
            borderColor: '#ff9800',
            tension: 0.4
        }]
    }
});
