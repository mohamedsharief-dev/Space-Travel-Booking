import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "process.env.FIREBASE_API_KEY",
  authDomain: "process.env.FIREBASE_AUTH_DOMAIN",
  projectId: "process.env.FIREBASE_PROJECT_ID",
  storageBucket: "process.env.FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "process.env.FIREBASE_MESSAGING_SENDER_ID",
  appId: "process.env.FIREBASE_APP_ID"
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
      <img class="imageitem" src="/assets/images/${trip.image}" alt="">
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
