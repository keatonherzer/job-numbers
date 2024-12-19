const appSettings = {
    databaseURL: "https://job-numbers-23f33-default-rtdb.firebaseio.com/"
}

const jobNumber = document.getElementById("job-number")
const newJobButton = document.getElementById("new-job-btn")

newJobButton.addEventListener("click", function() {
    let newJobNumber = jobNumber.value 

    const currentNumber = parseInt(jobNumber.textContent, 10);
    jobNumber.textContent = currentNumber + 1;

    console.log('new job number created')

})