// assets/js/scanner.js
let html5QrCode = null;

/**
 * Starts the camera scanner. Target field passed by the caller (default 'fan_no').
 * Uses a WIDE, SHORT scan box appropriate for 1D barcodes (Code128 etc.).
 */
function startScan(targetField) {
  window._scanTarget = targetField || "fan_no";

  const modal = document.getElementById("scanModal");
  if (!modal) return;
  modal.style.display = "flex";

  // Restrict formats to 1D barcodes only
  const formatsToSupport = [
    Html5QrcodeSupportedFormats.CODE_128,
    Html5QrcodeSupportedFormats.CODE_39,
    Html5QrcodeSupportedFormats.CODE_93,
    Html5QrcodeSupportedFormats.EAN_13,
    Html5QrcodeSupportedFormats.EAN_8,
    Html5QrcodeSupportedFormats.UPC_A,
    Html5QrcodeSupportedFormats.UPC_E,
    Html5QrcodeSupportedFormats.ITF,
  ];

  html5QrCode = new Html5Qrcode("qrReader", {
    formatsToSupport: formatsToSupport,
    verbose: false,
  });

  html5QrCode
    .start(
      { facingMode: "environment" },
      {
        fps: 10,
        // Wide horizontal box (≈4:1 aspect) — matches a 1D barcode's shape
        qrbox: function (viewfinderWidth, viewfinderHeight) {
          const w = Math.floor(viewfinderWidth * 0.9);
          const h = Math.floor(w / 4);
          return { width: w, height: h };
        },
        aspectRatio: 1.777,
        experimentalFeatures: {
          useBarCodeDetectorIfSupported: true,
        },
      },
      function (decodedText) {
        // Try to grab a 16-digit FAN from the scanned string
        const match = decodedText.match(/\d{16}/);
        if (match) {
          const field = document.getElementById(window._scanTarget || "fan_no");
          if (field) field.value = match[0];
          stopScan();
        }
      },
      function () {
        /* per-frame miss, ignore */
      },
    )
    .catch(function (err) {
      alert("Camera error: " + err);
      stopScan();
    });
}

function stopScan() {
  if (html5QrCode) {
    html5QrCode
      .stop()
      .then(function () {
        html5QrCode.clear();
      })
      .catch(function () {});
    html5QrCode = null;
  }
  const modal = document.getElementById("scanModal");
  if (modal) modal.style.display = "none";
}

// ------- Small UI helpers -------

document.addEventListener("DOMContentLoaded", function () {
  // Enforce numeric-only FAN input
  const fanField = document.getElementById("fan_no");
  if (fanField) {
    fanField.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, "").slice(0, 16);
    });
  }

  // Live-uppercase any text field marked with data-upper
  document.querySelectorAll("input[data-upper]").forEach(function (el) {
    el.addEventListener("input", function (e) {
      const pos = e.target.selectionStart;
      e.target.value = e.target.value.toUpperCase();
      e.target.setSelectionRange(pos, pos);
    });
  });
});
