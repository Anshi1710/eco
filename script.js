document.getElementById("waitlist-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let email = document.getElementById("email").value;

    // Send email using Formspree (Replace 'your_formspree_id' with real ID)
    fetch("https://formspree.io/f/xldjggke", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email })
    }).then(response => {
        if (response.ok) {
            alert("You've been added to the waitlist!");
            document.getElementById("waitlist-form").reset();
        } else {
            alert("Error joining the waitlist. Try again.");
        }
    });
});