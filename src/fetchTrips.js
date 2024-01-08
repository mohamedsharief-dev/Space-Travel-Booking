import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDjoXCuxMjt9T4SiPJCeeYR5ZeEj06TlHs",
    authDomain: "spacetravel-5de7a.firebaseapp.com",
    projectId: "spacetravel-5de7a",
    storageBucket: "spacetravel-5de7a.appspot.com",
    messagingSenderId: "837488187883",
    appId: "1:837488187883:web:55668ad1dc38157984e1ae"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to fetch data from Firestore
async function fetchTrips() {
  const tripsCollection = collection(db, 'Trips');
  const snapshot = await getDocs(tripsCollection);
  return snapshot.docs.map(doc => doc.data());
}

// Function to render data in HTML
function renderTrips(trips) {
  const gridContainer = document.querySelector('.grid-container');

  trips.forEach(trip => {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    // Create the HTML structure for each card using the trip data
    gridItem.innerHTML = `
      <img class="imageitem" src="/assets/images/First.png" alt="">
      <div class="tripContentItem">
        <h3>${trip.Destination}</h3>
        <div class="pricediv">
          <p>Per Person</p> <p style="font-weight: 800;"> ${trip.price}</p>
        </div>
        <p>${trip.description}</p>
      
      </div>
    `;

    gridContainer.appendChild(gridItem);
  });
}

// Call the functions to populate the cards when the page loads
document.addEventListener('DOMContentLoaded', async () => {
  const trips = await fetchTrips();
  renderTrips(trips);
});
