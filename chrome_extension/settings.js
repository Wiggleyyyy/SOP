document.addEventListener('DOMContentLoaded', () => {
    const startTimeInput = document.getElementById('start_time');
    const endTimeInput = document.getElementById('end_time');
    const applyTimesButton = document.getElementById('apply_times');

    const currentDay = new Date().getDay();
    if (currentDay === 5) { // Check if today is Friday (5)
        endTimeInput.value = '14:30';
    } else {
        endTimeInput.value = '15:30';
    }

    // Load saved settings if they exist
    const savedStartTime = localStorage.getItem('startTime') || '08:00';
    const savedEndTime = localStorage.getItem('endTime') || endTimeInput.value;

    startTimeInput.value = savedStartTime;
    endTimeInput.value = savedEndTime;

    applyTimesButton.addEventListener('click', () => {
        const startTime = startTimeInput.value;
        const endTime = endTimeInput.value;

        localStorage.setItem('startTime', startTime);
        localStorage.setItem('endTime', endTime);

        // Redirect to popup.html
        window.location.href = './popup.html';
    });
});
