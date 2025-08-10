function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        alert("Nomor berhasil disalin!");
    }, function(err) {
        alert("Gagal menyalin nomor!");
    });
}