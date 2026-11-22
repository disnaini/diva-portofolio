// Mengambil tombol menu dan navigasi
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

// Membuka dan menutup menu navigasi
menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

// Menutup menu setelah salah satu menu diklik
const links = document.querySelectorAll("#navMenu a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});

// Pesan di console browser
console.log("Website Portofolio Diva Nur Isnaini berhasil dibuka!");