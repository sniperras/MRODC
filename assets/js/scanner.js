// assets/js/scanner.js — Quagga2 for 1D barcodes (FAN No)

let _quaggaRunning = false;
let _scanTargetField = null;

function startScan(fieldName) {
  if (_quaggaRunning) return; // guard against double-click

  _scanTargetField = fieldName;
  const modal = document.getElementById("scanModal");
  const reader = document.getElementById("qrReader");

  reader.innerHTML = "";
  modal.classList.add("active");
  document.body.classList.add("modal-open");

  Quagga.init(
    {
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: reader,
        constraints: {
          facingMode: "environment",
          width: { min: 640, ideal: 800, max: 1280 },
          height: { min: 480, ideal: 600, max: 720 },
        },
      },
      locator: {
        patchSize: "small",
        halfSample: false,
      },
      numOfWorkers: navigator.hardwareConcurrency || 2,
      frequency: 10,
      decoder: {
        readers: ["code_128_reader"],
      },
      locate: true,
    },
    function (err) {
      if (err) {
        console.error("Quagga init error:", err);
        alert("Could not start scanner: " + err);
        stopScan();
        return;
      }
      Quagga.start();
      _quaggaRunning = true;
    },
  );

  Quagga.onDetected(function (result) {
    if (!result || !result.codeResult || !result.codeResult.code) return;
    const code = result.codeResult.code.trim();
    if (!code) return;

    const input = document.querySelector(`[name="${_scanTargetField}"]`);
    if (input) {
      input.value = code;
      if (input.hasAttribute("data-upper")) {
        input.value = input.value.toUpperCase();
      }
    }

    const video = document.querySelector("#qrReader video");
    if (video) video.style.outline = "4px solid #10b981";

    setTimeout(stopScan, 200);
  });
}

function stopScan() {
  const modal = document.getElementById("scanModal");
  const reader = document.getElementById("qrReader");

  if (_quaggaRunning) {
    try {
      Quagga.stop();
    } catch (e) {
      /* already stopped */
    }
    Quagga.offDetected();
    _quaggaRunning = false;
  }
  reader.innerHTML = "";
  modal.classList.remove("active");
  document.body.classList.remove("modal-open");
  _scanTargetField = null;
}
