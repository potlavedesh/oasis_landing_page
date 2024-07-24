document.addEventListener("DOMContentLoaded", function() {
    // JavaScript to toggle navigation menu
    document.querySelector('.nav1').addEventListener('click', function () {
        document.querySelector('nav ul').classList.toggle('active');
    });

    // JavaScript to handle form submission
    document.querySelector('.cta-button').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        // Fetching form inputs
        var location = document.querySelector('select').value;
        var date = document.querySelector('input[type="date"]').value;
        var guests = document.querySelector('input[type="number"]').value;

        // Validating inputs
        if (location === "Default") {
            alert("Please select a valid location.");
            return;
        }
        if (date === "") {
            alert("Please select a date.");
            return;
        }
        if (guests <= 0 || guests>=11) {
            alert("Please enter a valid number of guests.");
            return;
        }

        // Displaying selected options
        alert("Location: " + location + "\nDate: " + date + "\nGuests: " + guests);
    });
});