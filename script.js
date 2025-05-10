// Toggle subbab & materi
function toggleMateri(id) {
  const target = document.getElementById(id);

  if (target) {
    // Toggle konten subbab yang dipilih
    target.style.display = target.style.display === "block" ? "none" : "block";
  }
}

// Sembunyikan semua materi saat awal load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".materi-item-content").forEach((item) => {
    item.style.display = "none"; // Menyembunyikan seluruh subbab
  });
});
