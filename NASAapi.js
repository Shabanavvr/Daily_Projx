const apiKey = 'DEMO_KEY';  // Replace 'DEMO_KEY' with your actual NASA API key
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        document.getElementById('title').textContent = data.title;
        document.getElementById('image').src = data.url;
        document.getElementById('description').textContent = data.explanation;
    })
    .catch(error => {
        console.log('Error:', error);
    });
