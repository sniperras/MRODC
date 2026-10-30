// assets/js/scanner.js
let html5QrCode = null;

/**
 * Starts the camera scanner and populates the FAN field.
 * Requires html5-qrcode library to be loaded.
 */
function startScan() {
  const modal = document.getElementById("scanModal");
  if (!modal) return;
  modal.style.display = "flex";

  html5QrCode = new Html5Qrcode("qrReader");
  html5QrCode
    .start(
      { facingMode: "environment" },
      { fps: 10, qrbox: { width: 250, height: 250 } },
      (decodedText) => {
        // Try to extract a 16-digit FAN from the scan (handles prefixed QR payloads)
        const match = decodedText.match(/\d{16}/);
        if (match) {
          const field = document.getElementById("fan_no");
          if (field) field.value = match[0];
          stopScan();
        }
      },
      () => {
        /* ignore per-frame decode failures */
      },
    )
    .catch((err) => {
      alert("Camera error: " + err);
      stopScan();
    });
}

/**
 * Stops the scanner and closes the modal.
 */
function stopScan() {
  if (html5QrCode) {
    html5QrCode
      .stop()
      .then(() => html5QrCode.clear())
      .catch(() => {});
    html5QrCode = null;
  }
  const modal = document.getElementById("scanModal");
  if (modal) modal.style.display = "none";
}

/**
 * Enforces 16-digit numeric input on the FAN field.
 */
document.addEventListener("DOMContentLoaded", () => {
  const fanField = document.getElementById("fan_no");
  if (fanField) {
    fanField.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, "").slice(0, 16);
    });
  }
});
