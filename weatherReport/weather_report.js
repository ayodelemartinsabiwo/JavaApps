
function showweatherDetails(event) {
    //prevents the default behavior of an event, such as form submission, within a function
    event.preventDefault()

    const city = document.getElementById('city').value;
    const apiKey = '122171f72cf5d5ee5fe5de1fd3558b6f'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    const apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    //Use fetch api method to fetch details related to city which user will enter in the input box provided in the HTMl file.
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // const currentTime = new Date().toLocaleTimeString()//Format current time
            // const currentDate = new Date().toLocaleDateString()
            const weatherInfo = document.getElementById('weatherInfo');

            // Get the time zone of the city
            const timeZone = data.timezone; // Assuming the API provides the timezone offset in seconds

            // Create a date object with the correct offset, and subtract one hour
            const cityDate = new Date(Date.now() + timeZone * 1000); // to minus an hour include "- 3600000" (3600000ms = 1 hour) after 10000

            // Format the date and time for the specific location
            const options = {
                timeZone: 'UTC', // Use UTC to prevent any automatic adjustments
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            };
            const formatter = new Intl.DateTimeFormat('en-US', options);
            const localDateTime = formatter.format(cityDate);


            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
            <p>Temprature: ${data.main.temp} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Local Date and Time: ${localDateTime}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p class='mt-5' style="background-color: rgb(255, 25, 25); color: white; border-radius: 8px; padding: 15px; width: 50vh"'>Failed to fetch weather. Please try again.</p>`;
            // weatherInfo.innerHTML = `<button class='btn btn-info btn-lg'>Failed to fetch weather. Please try again.</button>`;
        });


        fetch(apiUrl2)
        .then(response => response.json())
        .then(data => {
            // const currentTime = new Date().toLocaleTimeString()//Format current time
            // const currentDate = new Date().toLocaleDateString()
            const weatherInfo = document.getElementById('weatherInfo');

            // Get the time zone of the city
            const timeZone = data.timezone; // Assuming the API provides the timezone offset in seconds

            // Create a date object with the correct offset, and subtract one hour
            const cityDate = new Date(Date.now() + timeZone * 1000); // to minus an hour include "- 3600000" (3600000ms = 1 hour) after 10000

            // Format the date and time for the specific location
            const options = {
                timeZone: 'UTC', // Use UTC to prevent any automatic adjustments
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            };
            const formatter = new Intl.DateTimeFormat('en-US', options);
            const localDateTime2 = formatter.format(cityDate);


            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
            <p>Temprature: ${data.main.temp} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Local Date and Time: ${localDateTime2}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p class='mt-5' style="background-color: rgb(255, 25, 25); color: white; border-radius: 8px; padding: 15px; width: 50vh"'>Failed to fetch weather. Please try again.</p>`;
            // weatherInfo.innerHTML = `<button class='btn btn-info btn-lg'>Failed to fetch weather. Please try again.</button>`;
        });


};

//attaches an event listener to the 'weatherForm' element, listening for a 'submit'
//event and triggering the showweatherDetails function upon form submission,
//enabling customized handling or manipulation of the form's behavior.
document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
document.getElementById('weatherForm').addEventListener('submit2', showweatherDetails);
