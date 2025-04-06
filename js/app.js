// Map
const myMap = new L.Map("map", {
  key: "[insert_your_api_key]",
  maptype: "neshan",
  poi: false,
  traffic: false,
  center: [35.68552446830495, 51.453638265676744],
  zoom: 15,
});
L.marker([35.68552446830495, 51.453638265676744]).addTo(myMap);
myMap.setMapType("neshan");

// Dark Mode
const darkModeButton = document.getElementById("darkModeCheckBox");
darkModeButton.addEventListener("change", function () {
  if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
    document.documentElement.setAttribute("data-bs-theme", "light");
    myMap.setMapType("neshan");
  } else {
    document.documentElement.setAttribute("data-bs-theme", "dark");
    myMap.setMapType("standard-night");
  }
});

//Enable Bootstrap Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
