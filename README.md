HARDEEP SINGH 

Getting Started
Prerequisites
Ensure you have the following installed on your system:

Node.js (v12 or higher)
npm
You will also need an API key from OpenWeatherMap. You can get it by signing up on OpenWeatherMap.

Installation
Clone the repository:

bash
Copy code
git clone <repository_url>
Navigate to the project directory:

bash
Copy code
cd weather-app
Install dependencies:

bash
Copy code
npm install
Create a .env file at the root of the project and add your OpenWeatherMap API key:

makefile
Copy code
REACT_APP_API_KEY=your_openweathermap_api_key
Running the Application
Start the React application:

bash
Copy code
npm start
Open your browser and visit http://localhost:3000 to view the app.

How to Use
Enter the name of a city in the search box and press Enter.
The app will display the current temperature, minimum, and maximum temperatures for that city.
If the city is not found, the app will display a "No Data Found" message.
Project Structure
src/: Contains the React components, CSS, and other resources.
components/: Contains Tempapp.js, the main component of the app.
css/: Contains the style file (style.css).
video/: Contains the background video file (hi.mp4).
Environment Variables
The app relies on an API key from OpenWeatherMap. Make sure to include it in a .env file:

bash
Copy code
REACT_APP_API_KEY=your_openweathermap_api_key
API Usage
The app fetches weather data from the OpenWeatherMap API using the following URL:

bash
Copy code
http://api.openweathermap.org/data/2.5/weather?q=<city_name>&units=metric&appid=<your_api_key>
Technologies Used
React: For building the user interface
OpenWeatherMap API: For fetching weather data
CSS: For styling the application
JavaScript (ES6): For client-side logic
Video Background
The app includes a looping background video. The video file (hi.mp4) is included in the project under the src/video/ directory.

Troubleshooting
API Key Issues: Ensure that your OpenWeatherMap API key is valid and hasn't exceeded its request limit.
No Data Found: If a city is not found, verify that the city name is spelled correctly or try searching for larger cities.
License
This project is licensed under the MIT License.

Example .env File:
makefile
Copy code
REACT_APP_API_KEY=your_openweathermap_api_key
Conclusion
This weather app provides a simple and intuitive interface to check weather conditions in any city. Feel free to customize and extend the functionality as needed.






