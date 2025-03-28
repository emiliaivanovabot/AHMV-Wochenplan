// Pop-up öffnen
function showModal() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = "block";
        console.log("Modal opened"); // Debugging
    } else {
        console.error("Modal element not found"); // Debugging
    }
}

// Pop-up schließen wenn außerhalb geklickt wird
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
        console.log("Modal closed"); // Debugging
    }
}

// PIN senden
function sendPin() {
    const pin = document.getElementById("pinInput").value.trim();
    console.log("Sending PIN:", pin); // Debugging

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
        console.log("Response received:", response); // Debugging
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log("Data received:", data); // Debugging
        if (data.status === "ok") {
            document.getElementById("modal").style.display = "none";
            alert("PIN korrekt ✅");
        } else {
            alert("PIN falsch ❌");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Fehler beim Senden des PINs");
    });
}
