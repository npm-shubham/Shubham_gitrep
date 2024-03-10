function handlePaymentClick() {
    // Call the validation function
    if (validateForm()) {
        // If validation succeeds, route to the payment page
        window.location.href = "confirm.html";
    } else {
        // If validation fails, display error message or handle it accordingly
        console.log("Form validation failed.");
    }
}

function validateForm() {
    var fnameInput = document.getElementById("fname");
    var lnameInput = document.getElementById("lname");
    var mailInput = document.getElementById("mail");
    var pnoInput = document.getElementById("pno");
    var regionInput = document.getElementById("region");
    var fullNameInput = document.getElementById("fullname");
    var cardNumberInput = document.getElementById("cardnumber");
    var expDateInput = document.getElementById("expdate");
    var cvcInput = document.getElementById("cvc");

    // Remove existing invalid input styles
    var invalidInputs = document.querySelectorAll(".invalid-input");
    invalidInputs.forEach(function(input) {
        input.classList.remove("invalid-input");
    });

    // Validation for First Name (at least 2 characters)
    if (fname.length < 2) {
        alert("First name must be at least 2 characters long.");
        fnameInput.classList.add("invalid-input");
        return false;
    }

    // Validation for Last Name (at least 2 characters)
    if (lname.length < 2) {
        alert("Last name must be at least 2 characters long.");
        lnameInput.classList.add("invalid-input");
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var mail = mailInput.value; 
    if (!emailPattern.test(mail)) {
        alert("Please enter a valid email address.");
        mailInput.classList.add("invalid-input");
        return false;
    } else {
        mailInput.classList.remove("invalid-input");
    }

    var phonePattern = /^\d+$/;
    var pno = pnoInput.value; 

    if (!phonePattern.test(pno)) {
        alert("Phone number must contain only digits.");
        pnoInput.classList.add("invalid-input");
        return false;
    } else {
        pnoInput.classList.remove("invalid-input");
    }

    if (region === "") {
        alert("Please enter your country/region.");
        regionInput.classList.add("invalid-input");
        return false;
    }

    var fullName = fullNameInput.value.trim(); 
    if (fullName === "") {
        alert("Please enter your full name on the card.");
        fullNameInput.classList.add("invalid-input");
        return false;
    } else {
        fullNameInput.classList.remove("invalid-input");
    }

    var cardNumber = cardNumberInput.value.trim(); 
    var cardNumberRegex = /^\d{16}$/;
    if (!cardNumberRegex.test(cardNumber)) {
        alert("Please enter a valid card number.");
        cardNumberInput.classList.add("invalid-input");
        return false;
    }


    var expDate = expDateInput.value.trim(); 
    if (expDate === "") {
        alert("Please enter the card expiration date.");
        expDateInput.classList.add("invalid-input");
        return false;
    }

    var cvc = cvcInput.value.trim(); 
    var cvcRegex = /^\d{3}$/;
    if (!cvcRegex.test(cvc)) {
        alert("Please enter a valid CVC.");
        cvcInput.classList.add("invalid-input");
        return false;
    }


    return true; // Form submission allowed
}
