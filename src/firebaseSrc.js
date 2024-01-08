const admin = require('firebase-admin');
const serviceAccount = require('./spacetravel-5de7a-firebase-adminsdk-70gmz-8c2a1b4c6d.json'); // Replace with the path to your service account key

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Function to add data to Firestore with an auto-generated document ID
async function addDocument(collectionName, data) {
  try {
    const docRef = await db.collection(collectionName).add(data);
    console.log(`Document added successfully with ID: ${docRef.id}`);
  } catch (error) {
    console.error('Error adding document:', error);
  }
}

// Example data to add
const exampleData = {
    Destination: "Space Interstellar Experience",
    image: "Third.png",
    availableSeats: 503,
    departureDate: "2024-02-05",
    departureStation: "Earth - New York",
    description: "To mare5 and back",
    price: "125,000$ USD",
    returnDate: "2024-03-05",
    spacecraft: "Falcon-F9",
    tripType: "oneWay"
    // ... other fields
};

// Example usage of the addDocument function
addDocument('Trips', exampleData);

// Add more functions or logic as needed for your application
