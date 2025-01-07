document.getElementById('transaksiForm').addEventListener('submit', function(event) {
    const namaTransaksi = document.getElementById('namaTransaksi').value;
    const jumlah = document.getElementById('jumlah').value;
    const kategori = document.getElementById('kategori').value;

    if (!namaTransaksi || !jumlah || !kategori) {
        event.preventDefault();
        alert('Semua field harus diisi!');
    } else {
        // Tambahkan logika untuk menyimpan transaksi di sini
        const daftarTransaksi = document.getElementById('daftarTransaksi');
        const row = daftarTransaksi.insertRow();
        row.insertCell(0).innerText = namaTransaksi;
        row.insertCell(1).innerText = jumlah;
        row.insertCell(2).innerText = kategori;
    }
});