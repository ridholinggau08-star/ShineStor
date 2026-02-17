
let failCount = parseInt(localStorage.getItem("ADMIN_FAIL") || "0");
let lockUntil = parseInt(localStorage.getItem("ADMIN_LOCK") || "0");

function now() { return Date.now(); }

function openAdmin() {
  if (now() < lockUntil) {
    alert("Admin terkunci. Coba lagi nanti.");
    return;
  }

  const savedPin = localStorage.getItem("ADMIN_PIN");

  if (!savedPin) {
    const newPin = prompt("Buat PIN Admin (min 4 digit):");
    if (newPin && newPin.length >= 4) {
      localStorage.setItem("ADMIN_PIN", newPin);
      alert("PIN berhasil dibuat");
      showAdminPanel();
    }
    return;
  }

  const inputPin = prompt("Masukkan PIN Admin:");
  if (inputPin === savedPin) {
    failCount = 0;
    localStorage.setItem("ADMIN_FAIL", "0");
    showAdminPanel();
  } else {
    failCount++;
    localStorage.setItem("ADMIN_FAIL", failCount);
    if (failCount >= 3) {
      lockUntil = now() + 10 * 60 * 1000;
      localStorage.setItem("ADMIN_LOCK", lockUntil);
      alert("Salah 3x. Admin terkunci 10 menit.");
    } else {
      alert("PIN salah");
    }
  }
}

function showAdminPanel() {
  document.getElementById("adminPanel").style.display = "block";
}

function changePin() {
  const oldPin = prompt("PIN lama:");
  const savedPin = localStorage.getItem("ADMIN_PIN");
  if (oldPin !== savedPin) {
    alert("PIN lama salah");
    return;
  }
  const newPin = prompt("PIN baru:");
  if (newPin && newPin.length >= 4) {
    localStorage.setItem("ADMIN_PIN", newPin);
    alert("PIN diubah");
  }
}
