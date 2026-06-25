// ===============================
// Student Grade Calculator
// ===============================

function calculateGrade() {

    // Get student details
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    // Get subject marks
    let sub1 = Number(document.getElementById("sub1").value);
    let sub2 = Number(document.getElementById("sub2").value);
    let sub3 = Number(document.getElementById("sub3").value);
    let sub4 = Number(document.getElementById("sub4").value);
    let sub5 = Number(document.getElementById("sub5").value);

    // Validation
    if (
        name === "" ||
        roll === "" ||
        isNaN(sub1) ||
        isNaN(sub2) ||
        isNaN(sub3) ||
        isNaN(sub4) ||
        isNaN(sub5)
    ) {
        alert("Please fill all fields.");
        return;
    }

    // Check marks range
    let marks = [sub1, sub2, sub3, sub4, sub5];

    for (let i = 0; i < marks.length; i++) {

        if (marks[i] < 0 || marks[i] > 100) {

            alert("Marks should be between 0 and 100.");

            return;
        }
    }

    // Calculate
    let total = sub1 + sub2 + sub3 + sub4 + sub5;

    let average = total / 5;

    let percentage = average;

    let grade = "";

    let status = "";

    // Grade Calculation
    if (percentage >= 90) {

        grade = "A+";

    }

    else if (percentage >= 80) {

        grade = "A";

    }

    else if (percentage >= 70) {

        grade = "B+";

    }

    else if (percentage >= 60) {

        grade = "B";

    }

    else if (percentage >= 50) {

        grade = "C";

    }

    else if (percentage >= 40) {

        grade = "D";

    }

    else {

        grade = "F";

    }

    // Pass / Fail
    if (
        sub1 >= 40 &&
        sub2 >= 40 &&
        sub3 >= 40 &&
        sub4 >= 40 &&
        sub5 >= 40
    ) {

        status = "PASS";

    }

    else {

        status = "FAIL";

    }

    // Save data in Local Storage
    localStorage.setItem("name", name);
    localStorage.setItem("roll", roll);
    localStorage.setItem("total", total);
    localStorage.setItem("average", average.toFixed(2));
    localStorage.setItem("percentage", percentage.toFixed(2));
    localStorage.setItem("grade", grade);
    localStorage.setItem("status", status);

    // Success message
    alert("Result Calculated Successfully!");

    // Open Result Page
    window.location.href = "result.html";

}

// ===============================
// Clear Result
// ===============================

function clearResult() {

    localStorage.clear();

    alert("Stored Result Cleared.");

}

// ===============================
// Print Result
// ===============================

function printResult() {

    window.print();

}

// ===============================
// Contact Form
// ===============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Thank you! Your message has been submitted.");

        contactForm.reset();

    });

}