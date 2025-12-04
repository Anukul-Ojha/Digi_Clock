const worldCities = [
            { name: 'newYork', timezone: 'America/New_York' },
            { name: 'london', timezone: 'Europe/London' },
            { name: 'tokyo', timezone: 'Asia/Tokyo' },
            { name: 'dubai', timezone: 'Asia/Dubai' },
            { name: 'sydney', timezone: 'Australia/Sydney' },
            { name: 'paris', timezone: 'Europe/Paris' }
        ];

        function updateClock() {
            const now = new Date();
            
            // Update local time
            const localTime = now.toLocaleTimeString('en-US', { 
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            
            const localDate = now.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            document.getElementById('localTime').textContent = localTime;
            document.getElementById('localDate').textContent = localDate;
            
            // Update world clocks
            worldCities.forEach(city => {
                const time = now.toLocaleTimeString('en-US', {
                    timeZone: city.timezone,
                    hour12: false,
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                });
                
                const date = now.toLocaleDateString('en-US', {
                    timeZone: city.timezone,
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                });
                
                document.getElementById(city.name + 'Time').textContent = time;
                document.getElementById(city.name + 'Date').textContent = date;
            });
        }

        // Update clock immediately and then every second
        updateClock();
        setInterval(updateClock, 1000);