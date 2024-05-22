document.addEventListener('DOMContentLoaded', () => {
    const savedStartTime = localStorage.getItem('startTime') || '08:00';
    const savedEndTime = localStorage.getItem('endTime') || '15:30';

    setInterval(() => {
        updateProgressBar(savedStartTime, savedEndTime);
    }, 10000); // Update every 10 seconds

    // Initial update
    updateProgressBar(savedStartTime, savedEndTime);
});

function updateProgressBar(startTime, endTime) {
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');

    const currentTime = new Date();
    const start = new Date(currentTime);
    const end = new Date(currentTime);

    const [startHours, startMinutes] = startTime.split(':').map(Number);
    const [endHours, endMinutes] = endTime.split(':').map(Number);

    start.setHours(startHours, startMinutes, 0, 0);
    end.setHours(endHours, endMinutes, 0, 0);

    if (currentTime < start) {
        progressBar.style.width = '0%';
        progressText.textContent = '0%';
    } else if (currentTime > end) {
        progressBar.style.width = '100%';
        progressText.textContent = '100%';
    } else {
        const totalDuration = end - start;
        const elapsedDuration = currentTime - start;
        const progressPercentage = (elapsedDuration / totalDuration) * 100;

        progressBar.style.width = `${progressPercentage}%`;
        progressText.textContent = `${progressPercentage.toFixed(2)}%`;
    }
}
