  // Prevent form submission and handle WhatsApp redirection
  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Stop the form from refreshing the page

    // Fetch input values
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check if fields are filled
    if (!name || !message) {
      alert("Please fill in all fields!");
      return;
    }

    // Construct WhatsApp API link
    const phone = "08036987709"; // Replace with your WhatsApp number
    const whatsappLink = `https://wa.me/${phone}?text=Hello,%20my%20name%20is%20${encodeURIComponent(name)}.%20${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.location.href = whatsappLink; // Use location.href instead of window.open
  });