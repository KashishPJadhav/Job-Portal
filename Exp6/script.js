document.getElementById('voterForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    // Retrieving form values
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim(); // New phone number field
    const aadhaar = document.getElementById('aadhaar').value.trim();
    const address = document.getElementById('address').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    // Validation checks
    let errors = [];

    // Name Validation
    if (name === "") {
        errors.push("Name is required.");
    }

    // Age Validation (should be at least 18)
    if (age === "" || isNaN(age) || parseInt(age) < 18) {
        errors.push("You must be at least 18 years old to register.");
    }

    // Date of Birth Validation
    if (!dob) {
        errors.push("Please select your date of birth.");
    }

    // Email Validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
        errors.push("Please enter a valid email address.");
    }

    // Phone Number Validation (must be 10 digits)
    const phonePattern = /^\d{10}$/;
    if (!phone.match(phonePattern)) {
        errors.push("Phone number must be a 10-digit numeric value.");
    }

    // Aadhaar Validation (must be exactly 12 digits)
    const aadhaarPattern = /^\d{12}$/;
    if (!aadhaar.match(aadhaarPattern)) {
        errors.push("Aadhaar Card number must be a 12-digit number.");
    }

    // Address Validation
    if (address === "") {
        errors.push("Address is required.");
    }

    // Gender Validation
    if (!gender) {
        errors.push("Please select your gender.");
    }

    // Birthdate and Age Cross-Validation
    if (dob) {
        const birthDate = new Date(dob);
        const currentDate = new Date();
        let calculatedAge = currentDate.getFullYear() - birthDate.getFullYear();
        const monthDifference = currentDate.getMonth() - birthDate.getMonth();

        // Adjust if birthday hasn't occurred this year yet
        if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
            calculatedAge--;
        }

        // Ensure age field matches calculated age
        if (calculatedAge !== parseInt(age)) {
            errors.push(`The age provided (${age}) does not match the date of birth. Your calculated age is ${calculatedAge}.`);
        }
    }

    // If any errors, show alert with all errors
    if (errors.length > 0) {
        alert(errors.join("\n"));  // Show all errors in an alert box
    } else {
        // If no errors, show success message in a window alert
        alert(
            `✅ Registration Successful!\n\n` +
            `📌 Name: ${name}\n` +
            `📌 Age: ${age}\n` +
            `📌 Date of Birth: ${dob}\n` +
            `📌 Email: ${email}\n` +
            `📌 Phone: ${phone}\n` + // Now including the phone number
            `📌 Aadhaar: ${aadhaar}\n` +
            `📌 Address: ${address}\n` +
            `📌 Gender: ${gender}`
        );
    }
});
