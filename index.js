let timer;
let isRunning = false;
let seconds = 0;
let records = [];

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStop').innerText = 'Démarrer';
    } else {
        timer = setInterval(updateDisplay, 1000);
        document.getElementById('startStop').innerText = 'Arrêter';
    }
    isRunning = !isRunning;
}

function updateDisplay() {
    seconds++;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    document.getElementById('display').innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(secs)}`;
}

function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}

function reset() {
    clearInterval(timer);
    seconds = 0;
    isRunning = false;
    document.getElementById('display').innerText = '00:00:00';
    document.getElementById('startStop').innerText = 'Démarrer';
    clearRecords();
}

function record() {
    const recordTime = document.getElementById('display').innerText;
    records.push(recordTime);

    const recordsList = document.getElementById('records');
    const listItem = document.createElement('li');
    listItem.innerText = recordTime;
    recordsList.appendChild(listItem);
}

function clearRecords() {
    records = [];
    const recordsList = document.getElementById('records');
    recordsList.innerHTML = '';
}
let alarmInterval;
let alarmTimer;

function setAlarm() {
    const intervalInput = document.getElementById('alarmInterval');
    const intervalValue = parseInt(intervalInput.value);

    if (!isNaN(intervalValue) && intervalValue > 0) {
        if (alarmTimer) {
            clearInterval(alarmTimer);
        }

        alarmInterval = intervalValue;
        alarmTimer = setInterval(() => {
            alert('Alarme !');
        }, alarmInterval * 1000);

        alert(`Alarme définie pour chaque ${alarmInterval} secondes.`);
    } else {
        alert('Veuillez entrer un intervalle valide en secondes.');
    }
}