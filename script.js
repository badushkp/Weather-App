const apiKey = "Enter your apiKey here";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        // Geting the needed informations
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        // Fucntion used to featch data using api
        async function checkWeather(city) {
            const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
            
            // Display error message and hide the weather
            if(response.status ==404){
                document.querySelector(".error").style.display ="block";
                document.querySelector(".weather").style.display ="none";
            }
            else{
                
                // Converting the response to JSON format and storing it in data variable.
                var data = await response.json();
             
                // To get the data in the Console
                // console.log(data);

                // Changin all the fields in the Html Page from the data we get
                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c";
                document.querySelector(".humidity").innerHTML = data.main.humidity+" %";
                document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";

                // Check the weather to update the weather-image
                if (data.weather[0].main == "Clouds"){
                    weatherIcon.src = "images/clouds.png";
                }
                else if (data.weather[0].main == "Clear"){
                    weatherIcon.src = "images/clear.png";
                }
                else if (data.weather[0].main == "Rain"){
                    weatherIcon.src = "images/rain.png";
                }
                else if (data.weather[0].main == "Drizzle"){
                    weatherIcon.src = "images/drizzle.png";
                }
                else if(data.weather[0].main == "Mist"){
                    weatherIcon.src = "images/mist.png";
                }
                else if(data.weather[0].main == "Snow"){
                    weatherIcon.src = "images/snow.png";
                }
                else{
                    weatherIcon.src = "images/humidity.png";
                }
            
            // Display weather when there is weather and hide the error
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display ="none";

            }
        }

        // To get the city name
        searchBtn.addEventListener("click",() =>{
            checkWeather(searchBox.value);
        });
