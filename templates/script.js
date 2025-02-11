document.getElementById('voterForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    // Retrieving form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const aadhaar = document.getElementById('aadhaar').value;  // New Aadhaar field

    // Validation checks
    let errors = [];

    // Name Validation
    if (!name.trim()) {
        errors.push("Name is required.");
    }

    // Age Validation
    if (age < 18) {
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

    // Address Validation
    if (!address.trim()) {
        errors.push("Address is required.");
    }

    // Gender Validation
    if (!gender) {
        errors.push("Please select your gender.");
    }

    // Aadhaar Validation
    const aadhaarPattern = /^\d{12}$/;  // Regex to match 12 digits
    if (!aadhaar.match(aadhaarPattern)) {
        errors.push("Aadhaar Card number must be a 12-digit number.");
    }

    // Birthdate and Age Validation (Ensure age matches birthdate)
    if (dob) {
        const birthDate = new Date(dob);
        const currentDate = new Date();
        const calculatedAge = currentDate.getFullYear() - birthDate.getFullYear();
        const monthDifference = currentDate.getMonth() - birthDate.getMonth();

        // Adjust age if the birthdate hasn't yet occurred this year
        if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
            calculatedAge--;
        }

        // Check if the provided age matches the calculated age
        if (calculatedAge !== parseInt(age)) {
            errors.push(`The age provided (${age}) does not match the date of birth. Your calculated age is ${calculatedAge}.`);
        }
    }

    // If any errors, show the first error message and prevent submission
    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        // If no errors, show success message
        alert(`Registration Successful! \nName: ${name} \nAge: ${age} \nDate of Birth: ${dob} \nEmail: ${email} \nAddress: ${address} \nGender: ${gender} \nAadhaar: ${aadhaar}`);
    }
});
