<<<<<<< HEAD
# 🌤️ Weather App

A beautiful, modern weather application built with HTML, CSS, and JavaScript that fetches real-time weather data from the OpenWeatherMap API.

## ✨ Features

- **Real-time Weather Data**: Get current weather information for any city worldwide
- **Modern UI/UX**: Beautiful gradient design with glassmorphism effects
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Weather Icons**: Dynamic emoji icons based on weather conditions
- **Detailed Information**: Temperature, feels like, humidity, wind speed, and pressure
- **Search Functionality**: Search by city name with Enter key support
- **Loading States**: Smooth loading animations and error handling

## 🚀 Live Demo

[Add your GitHub Pages link here after deployment]

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript (ES6+)**: Async/await, fetch API, DOM manipulation
- **OpenWeatherMap API**: Weather data provider

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Get API Key**
   - Sign up at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up)
   - Get your free API key from the dashboard
   - Wait 2-4 hours for API key activation

3. **Configure API Key**
   - Open `script.js`
   - Replace `'YOUR_API_KEY_HERE'` with your actual API key
   ```javascript
   const apiKey = 'your_actual_api_key_here';
   ```

4. **Run the Application**
   - Open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

## 📱 Usage

1. Enter a city name in the search box
2. Click "Search" or press Enter
3. View the current weather information including:
   - Temperature (°C)
   - Weather description
   - Feels like temperature
   - Humidity percentage
   - Wind speed
   - Atmospheric pressure

## 🎨 Features Breakdown

### Design Features
- **Gradient Background**: Beautiful purple gradient theme
- **Glassmorphism**: Semi-transparent cards with backdrop blur
- **Smooth Animations**: Hover effects and transitions
- **Weather Icons**: Dynamic emoji icons (☀️, 🌧️, ❄️, etc.)

### Technical Features
- **API Integration**: Real-time weather data from OpenWeatherMap
- **Error Handling**: Graceful error messages for invalid cities/API issues
- **Responsive Grid**: Weather details displayed in a clean grid layout
- **Loading States**: Spinner animation during API calls

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `style.css`:
```css
/* Main gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Accent colors */
color: #667eea;
```

### Adding More Weather Data
Modify the `displayWeather()` function in `script.js` to include additional weather information from the API response.

## 📄 API Reference

This app uses the [OpenWeatherMap Current Weather API](https://openweathermap.org/api):

- **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Parameters**: 
  - `q`: City name
  - `appid`: Your API key
  - `units`: metric (for Celsius)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- Weather icons inspired by various weather apps
- Design inspiration from modern web applications

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Note**: Remember to keep your API key secure and never commit it to version control. Consider using environment variables for production deployments. 
=======
# weather-
>>>>>>> 7a2618078de97e21a4338fa0d9b216d8666bb5d9
