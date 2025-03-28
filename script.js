function sendPin() {
    const pin = document.getElementById("pinInput").value.trim();
    if (!pin) {
        alert("Bitte PIN eingeben");
        return;
    }

    fetch("https://makeinsta.duckdns.org/webhook/f509f076-8d11-4deb-92c3-776e4ffd19b3", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.status === "ok") {
            document.getElementById("modal").style.display = "none";
            // Optional: Show success message
            alert("PIN korrekt ✅");
        } else {
            alert("PIN falsch ❌");
        }
    })
    .catch(error => {
        console.error("Fehler:", error);
        alert("Fehler beim Senden des PINs");
        // Make sure modal stays open on error
    });
}
