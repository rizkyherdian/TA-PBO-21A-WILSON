      // inisialiasi variabel komponen
      let txt_nama = document.querySelector("#txt_nama");
      let txt_npm = document.querySelector("#txt_no");
      let txt_email = document.querySelector("#txt_email");
      let txt_password = document.querySelector("#txt_password");


            //  buat arrow function agar isi data hanya dapat diisi huruf dan spasi
            const keyText = (event) => {
        if (
          (event.key >= "a" && event.key <= "z") ||
          (event.key >= "A" && event.key <= "Z") ||
          event.which == 32
        ) {
          return true;
        } else {
          return false;
        }
      };

      //  buat arrow function agar isi data hanya dapat diisi angka
      const keyNumber = (event) => {
        if (event.key >= "0" && event.key <= "9") {
          return true;
        } else {
          return false;
        }
      };

        // Fungsi untuk validasi input email
  function validateEmailInput(input) {
    // Hapus karakter yang tidak sesuai dari nilai input
    input.value = input.value.replace(/[^a-zA-Z0-9.@]/g, '');
  }

      //  buat arrow function agar dapat berpindah ke komponen lain
      const keyEnter = (event, component) => {
        if (event.key == "Enter") {
          component.focus();
        }
      };

      // buat event "keypress" (kejadian saat menekan dan menahan tombol tertentu)
      // panggil fungsi "keyNumber" agar "txt_no" hanya dapat diisi angka
      txt_no.addEventListener(
        "keypress",
        (event) => (event.returnValue = keyNumber(event))
      );

      // buat event "keypress" (kejadian saat menekan dan menahan tombol tertentu)
      // panggil fungsi "keyText" agar "txt_nama" hanya dapat diisi huruf dan spasi
      txt_nama.addEventListener(
        "keypress",
        (event) => (event.returnValue = keyText(event))
      );

      // buat field pada kata sandi saat di ketik menampilkan bintang(Sensor)
      function displayPassword(input) {
        const passwordField = document.getElementById('txt_password');
        const passwordValue = passwordField.value;
        const maskedPassword = '*'.repeat(passwordValue.length);
        input.value = maskedPassword;
      }

      // buat event "keyup" (kejadian saat berhenti menekan (melepas) tombol tertentu)
      // panggil fungsi "keyEnter" agar dapat berpindah dari komponen "txt_npm" ke "txt_nama"
      txt_nama.addEventListener("keyup", (event) => keyEnter(event, txt_no));
      txt_no.addEventListener("keyup", (event) => keyEnter(event, txt_email));
      txt_email.addEventListener("keyup", (event) => keyEnter(event, txt_password));
      txt_password.addEventListener("keyup", (event) => keyEnter(event, txt_gender));

      
       // Fungsi untuk menyimpan data
  function saveHandler(event) {
    event.preventDefault(); 
    // Menghentikan aksi default formulir (refresh halaman)

    // Validasi apakah semua komponen terisi
    if (txt_nama.value.trim() === '' || txt_no.value.trim() === '' || txt_email.value.trim() === '') {
      alert("Semua komponen harus diisi sebelum menyimpan!");
      return;
    }

    window.location.href = "login.html";
  }


      function deleteHandler(event) {
    event.preventDefault(); // Menghentikan aksi default formulir (refresh halaman)

    // Tempatkan logika penghapusan atau tindakan lainnya di sini
    var userConfirmed = confirm("Apakah anda yakin ingin menghapus?");

    if (userConfirmed) {
      location.reload(); // Fungsi untuk merefresh halaman
    } else {
      // Jika pengguna membatalkan hapus, tambahkan logika sesuai kebutuhan
      alert("Penghapusan dibatalkan.");
    }
  }

  function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Password baru dan konfirmasi password baru harus sama!");
        return false;
    }

    return true;
}