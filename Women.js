document.getElementById('safety-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const details = document.getElementById('details').value;

    // For demonstration purposes, we'll just log the data
    console.log('Name:', name);
    console.log('Location:', location);
    console.log('Details:', details);

    // You might send this data to a server or use it in another way
});

function initMap() {
    // Create a map centered on a specific location (latitude, longitude)
    const mapOptions = {
        center: { lat: 40.7128, lng: -74.0060 }, // Example coordinates (New York)
        zoom: 12
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Add a marker for demonstration purposes
    const marker = new google.maps.Marker({
        position: { lat: 40.7128, lng: -74.0060 },
        map: map,
        title: 'Safe Location'
    });
}

// Load the Google Maps API
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD7OPwxPo4mFDDcja-wAzgn8chLLScJFfs&callback=initMap`;
script.async = true;
document.head.appendChild(script);
