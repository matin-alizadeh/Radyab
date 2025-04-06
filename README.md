# 📍 Radyab: GPS Tracker Frontend Interface

**Radyab** is a modern, RTL-friendly frontend interface for a GPS tracking system that integrates with the [Neshan Map API](https://platform.neshan.org/). Built with Bootstrap RTL v5.3.2 and Persian typography in mind, it provides a responsive, user-friendly interface for viewing real-time tracker data.

## 🚀 Quick Start

1. Clone or download the project repository.
2. Obtain a free API Key from [Neshan Map Platform](https://platform.neshan.org/).
3. Open the file `js/app.js` and insert your API Key in the designated spot:

```js
  key: "[insert_your_api_key]",
```
4. Open index.html in your browser to view the app.


## 🌟 Features

- 🗺️ Interactive Map: Displays a dynamic map powered by Neshan for location tracking.

- 🧭 Live GPS Data: Shows the number of visible satellites and remaining battery of the tracker device.

- 🌙 Dark Mode Support: Easily toggle between light and dark themes for better accessibility.

- ⚙️ Settings Modal: User settings and controls are organized within a clean and intuitive modal dialog.

- 🌐 RTL Support: Designed specifically for right-to-left languages using Bootstrap RTL v5.3.2.

- 🅰️ Vazir Font Integration: Crisp and legible Persian typography through the Vazir font.

- 📱 Responsive Design: Fully responsive layout for mobile, tablet, and desktop screens.

- 🛡️ Lightweight & Fast: Minimal external dependencies ensure quick load times.

- 🧩 Modular JavaScript: Code is organized for easy customization and expansion.


## 📁 Project Structure
```pgsql
📦 Radyab/
├── css/
├── fonts/
├── js/
│   └── app.js      # Main Javascript File
├── index.html      # Main HTML File
├── style.css       # Main CSS File
└── README.md

```


## 🔐 Neshan Map API Key

To activate map functionality, you must obtain an API Key from the [Neshan Platform](https://platform.neshan.org/).
Paste the key into the `js/app.js` file as shown in the Quick Start section above.


## 📦 Dependencies
- [Bootstrap RTL v5.3.2](https://getbootstrap.com/)
- [Neshan Map API](https://platform.neshan.org/)
- [Vazir Font](https://github.com/rastikerdar/vazir-font)


## 📜 License
This project is licensed under the MIT License.
Feel free to use, modify, and distribute it for your own projects.