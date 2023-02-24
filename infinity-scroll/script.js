// Unsplash API
const count = 10;
const apiKey = 'API_KEY_HERE';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const photosArray = await response.json();
    console.log(photosArray);
  } catch (error) {
    // Catch Error Here
  }
}

// On Load
getPhotos();
