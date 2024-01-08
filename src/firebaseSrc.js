const admin = require('firebase-admin');
const serviceAccount = require('./spacetravel-5de7a-firebase-adminsdk-70gmz-8c2a1b4c6d.json'); // Replace with the path to your service account key

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Function to add data to Firestore
async function addDocument(collectionName, documentId, data) {
  try {
    await db.collection(collectionName).doc(documentId).set(data);
    console.log(`Document ${documentId} added successfully.`);
  } catch (error) {
    console.error('Error adding document:', error);
  }
}

// Example data to add
const exampleData = {
    DocumentID: "ThTBIVcxmcRYn6t63n0M",
    Destination: "Mars 2",
    availableSeats: 403,
    departureDate: "2024-02-05",
    departureStation: "Earth - New York",
    description: "To Mars and back",
    price: "125,000$ USD",
    returnDate: "2024-03-05",
    spacecraft: "Falcon-F9",
    tripType: "oneWay"
  // ... other fields
};

// Example usage of the addDocument function
addDocument('trips', 'ThTBIVcxmcRYn6t63n0M', exampleData);

// Add more functions or logic as needed for your application
