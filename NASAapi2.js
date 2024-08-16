const apiKey = 'YOUR_API_KEY';  // Replace with your NASA API key
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

document.addEventListener('DOMContentLoaded', () => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('title').textContent = data.title;
            document.getElementById('image').src = data.url;
            document.getElementById('description').textContent = data.explanation;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
