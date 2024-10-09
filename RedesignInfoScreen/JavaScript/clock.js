function startClock() {
    const months = ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'];

    //cordinates for Copenhagen (Open-Meteo API is retarded and doesnt use city names, instead cordinates)
    const latitude = 55.6761;
    const longitude = 12.5683;

    const breakTimes = [
        { start: "09:30", end: "10:00" },
        { start: "11:30", end: "12:00" },
        { start: "13:30", end: "13:50" }
    ];

    //add zero if number is 1 digit, example: "02"
    function formatTime(number) {
        return number < 10 ? '0' + number : number;
    }

    //function to get ISO week number
    function getWeekNumber(date) {
        const oneJan = new Date(date.getFullYear(), 0, 1);
        const days = Math.floor((date - oneJan) / (24 * 60 * 60 * 1000));
        const weekNumber = Math.ceil((days + oneJan.getDay() + 1) / 7);
        return weekNumber;
    }

    //function to fetch from Open-Meteo API
    function fetchTemperature() {
        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

        return fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                //access the temp from api response
                const temp = Math.round(data.current_weather.temperature);
                return `${temp}°C`;
            })
            .catch(error => {
                console.error('Error fetching temperature:', error);
                return 'N/A';
            });
    }

    function getBreakCountdown(now) {
        const currentTime = `${formatTime(now.getHours())}:${formatTime(now.getMinutes())}`;

        for (const breakTime of breakTimes) {
            const start = breakTime.start;
            const end = breakTime.end;

            if (currentTime >= start && currentTime < end) {
                const [endHour, endMinute] = end.split(':').map(Number);
                const endDateTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), endHour, endMinute);
                const countdownMs = endDateTime - now;

                //calculate countdown
                const minutes = Math.floor((countdownMs / 1000 / 60) % 60);
                const seconds = Math.floor((countdownMs / 1000) % 60);
                return `Pause: ${formatTime(minutes)}:${formatTime(seconds)}`;
            }
        }
        return null; 
    }

    async function updateClockAndDate() {
        const timeElement = document.querySelector(".time h1");
        const dateElement = document.querySelector(".time .date p");
        const weekElement = document.querySelector(".time .date .week");

        const now = new Date();
        
        //get time
        const hours = formatTime(now.getHours());
        const minutes = formatTime(now.getMinutes());
        const seconds = formatTime(now.getSeconds());

        //check if break, and get countdown if needed
        const breakCountdown = getBreakCountdown(now);
        if (breakCountdown) {
            //if break => show countdown
            timeElement.textContent = breakCountdown;
            timeElement.classList.add("break-font");
            timeElement.classList.remove("time-font");
        } else {
            //else => normal time
            timeElement.textContent = `${hours}:${minutes}:${seconds}`;
            timeElement.classList.remove("break-font");
            timeElement.classList.add("time-font");
        }

        //get the current date in Danish format
        const day = now.getDate();
        const monthName = months[now.getMonth()];
        const year = now.getFullYear();
        const weekNumber = getWeekNumber(now); 

        const temperature = await fetchTemperature();

        // write date and week
        dateElement.textContent = `${day}. ${monthName} ${year} - ${temperature}`;
        weekElement.textContent = `Uge ${weekNumber}`;
    }

    //initial call
    updateClockAndDate();

    //update clock every second - clock is 1 second behind
    setInterval(updateClockAndDate, 1000);
}

//start
window.onload = startClock;
