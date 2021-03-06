// DOMContentLoaded is fired once the document has been loaded and parsed,
// but without waiting for other external resources to load (css/images/etc)
// That makes the app more responsive and perceived as faster.
// https://developer.mozilla.org/Web/Reference/Events/DOMContentLoaded
window.addEventListener('DOMContentLoaded', function() {
 
var battery = navigator.battery || navigator.mozBattery;

if (battery) {
    // This works in Firefox
document.querySelector('#level').textContent = battery.level * 100 + '%';
document.querySelector('#charging').textContent =  battery.charging;
document.querySelector('#dischargingTime').textContent = battery.dischargingTime;
document.querySelector('#chargingTime').textContent = battery.chargingTime;
} else if (navigator.getBattery) {
    // This works in Google Chrome
    navigator.getBattery().then(function(battery) {
document.querySelector('#level').textContent = battery.level * 100 + '%';
document.querySelector('#charging').textContent =  battery.charging;
document.querySelector('#dischargingTime').textContent = battery.dischargingTime;
document.querySelector('#chargingTime').textContent = battery.chargingTime;
    });
}


   

});


function chrome(){
}
