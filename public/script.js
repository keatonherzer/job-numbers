// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCFOjEs9CZ_viQEWkfhocmKJKRQ-LkCP5E",
  authDomain: "job-numbers-23f33.firebaseapp.com",
  databaseURL: "https://job-numbers-23f33-default-rtdb.firebaseio.com",
  projectId: "job-numbers-23f33",
  storageBucket: "job-numbers-23f33.firebasestorage.app",
  messagingSenderId: "699252939720",
  appId: "1:699252939720:web:d4114aad52b7164da8befd"
};

firebase.initializeApp(firebaseConfig);

// Firebase Database reference
const db = firebase.database();

// DOM Elements
const jobNumberElement = document.getElementById("job-number");
const newJobBtn = document.getElementById("new-job-btn");
const undoBtn = document.getElementById("undo-btn");

// Function to fetch the job number and initialize it to 700000 if missing
function fetchJobNumber() {
  const jobRef = db.ref("jobNumber");
  jobRef.get().then((snapshot) => {
    if (snapshot.exists()) {
      // Display the existing job number
      jobNumberElement.textContent = snapshot.val();
    } else {
      // Initialize the job number to 300000 if it doesn't exist
      const initialJobNumber = 700000;
      jobRef.set(initialJobNumber);
      jobNumberElement.textContent = initialJobNumber;
    }
    undoBtn.disabled = true; // Disable "Undo" button on page load
  });
}

// Function to increment the job number
function incrementJobNumber() {
  const jobRef = db.ref("jobNumber");
  jobRef.get().then((snapshot) => {
    let currentJobNumber = snapshot.exists() ? snapshot.val() : 700000; // Default to 700000 if missing
    const newJobNumber = currentJobNumber + 1;
    jobRef.set(newJobNumber);
    jobNumberElement.textContent = newJobNumber;

    // Enable the "Undo" button after incrementing
    undoBtn.disabled = false;
  });
}

// Function to decrement the job number
function decrementJobNumber() {
  const jobRef = db.ref("jobNumber");
  jobRef.get().then((snapshot) => {
    let currentJobNumber = snapshot.exists() ? snapshot.val() : 700000; // Default to 700000 if missing
    if (currentJobNumber > 700000) { // Ensure the job number doesn't go below 700000
      const newJobNumber = currentJobNumber - 1;
      jobRef.set(newJobNumber);
      jobNumberElement.textContent = newJobNumber;

      // Disable the "Undo" button again after undoing
      undoBtn.disabled = true;
    }
  });
}


// Event Listener
newJobBtn.addEventListener("click", incrementJobNumber);
undoBtn.addEventListener("click", decrementJobNumber);

// Initial Fetch
fetchJobNumber();

console.log('this works');
