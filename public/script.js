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

// Function to fetch the job number
function fetchJobNumber() {
  const jobRef = db.ref("jobNumber");
  jobRef.get().then((snapshot) => {
    if (snapshot.exists()) {
      jobNumberElement.textContent = snapshot.val();
    } else {
      jobNumberElement.textContent = "300000"; // Default if no value exists
    }
  });
}

// Function to increment the job number
function incrementJobNumber() {
  const jobRef = db.ref("jobNumber");
  jobRef.get().then((snapshot) => {
    let currentJobNumber = snapshot.exists() ? snapshot.val() : 0;
    const newJobNumber = currentJobNumber + 1;
    jobRef.set(newJobNumber);
    jobNumberElement.textContent = newJobNumber;
  });
}

// Function to decrement the job number
function decrementJobNumber() {
  const jobRef = db.ref("jobNumber");
  jobRef.get().then((snapshot) => {
    let currentJobNumber = snapshot.exists() ? snapshot.val() : 0;
    if (currentJobNumber > 0) { // Ensure the job number doesn't go below 0
      const newJobNumber = currentJobNumber - 1;
      jobRef.set(newJobNumber);
      jobNumberElement.textContent = newJobNumber;
    }
  });
}

// Event Listener
newJobBtn.addEventListener("click", incrementJobNumber);
undoBtn.addEventListener("click", decrementJobNumber);

// Initial Fetch
fetchJobNumber();

console.log('this works');
