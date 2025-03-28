// Pop-up öffnen
function showModal() {
    document.getElementById("modal").style.display = "block";
  }
  
  // Pop-up schließen, wenn außerhalb geklickt wird
  window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
  
  // PIN senden an n8n Webhook
  function sendPin() {
    const pin = document.getElementById("pinInput").value.trim();
    if (!pin) {
      alert("Bitte PIN eingeben");
      return;
    }
  
    fetch("https://makeinsta.duckdns.org/webhook/f509f076-8d11-4deb-92c3-776e4ffd19b3", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ pin })
    })
    .then(() => {
      alert("PIN gesendet: " + pin);
      document.getElementById("modal").style.display = "none";
    })
    .catch(error => {
      alert("Fehler beim Senden des PINs");
      console.error(error);
    });
  }
  
