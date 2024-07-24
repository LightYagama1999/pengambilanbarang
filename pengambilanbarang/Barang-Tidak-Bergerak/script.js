// upload File dan Data
function UploadFile() {
    var reader = new FileReader();
    var file = document.getElementById("attach").files[0];
    reader.onload = function () {
        document.getElementById("fileContent").value = reader.result;
        document.getElementById("filename").value = file.name;
        document.getElementById("uploadForm").submit();
        document.getElementById("uploadForm").reset(); // Reset formulir setelah dikirim
    };
    reader.readAsDataURL(file);
}


// hilangkan nama kode barang
const kodeBarangSelect = document.getElementById('kode_barang');
  const A1 = document.getElementById('A1');
  const B1 = document.getElementById('B1');
  const C1 = document.getElementById('C1');
  const D1 = document.getElementById('D1');
  const E1 = document.getElementById('E1');
  const A2 = document.getElementById('A2');
  const B2 = document.getElementById('B2');
  const C2 = document.getElementById('C2');
  const D2 = document.getElementById('D2');
  const E2 = document.getElementById('E2');

  // Sembunyikan awalnya
  A1.style.display = 'none';
  B1.style.display = 'none';
  C1.style.display = 'none';
  D1.style.display = 'none';
  E1.style.display = 'none';
  A2.style.display = 'none';
  B2.style.display = 'none';
  C2.style.display = 'none';
  D2.style.display = 'none';
  E2.style.display = 'none';

  kodeBarangSelect.addEventListener('change', function() {
    if (kodeBarangSelect.value === 'A1') {
      A1.style.display = 'block';
      B1.style.display = 'none';
      C1.style.display = 'none';
      D1.style.display = 'none';
      E1.style.display = 'none';
      A2.style.display = 'block';
      B2.style.display = 'none';
      C2.style.display = 'none';
      D2.style.display = 'none';
      E2.style.display = 'none';     
    } else if (kodeBarangSelect.value === 'B1') {
        A1.style.display = 'none';
        B1.style.display = 'block';
        C1.style.display = 'none';
        D1.style.display = 'none';
        E1.style.display = 'none';
        A2.style.display = 'none';
        B2.style.display = 'block';
        C2.style.display = 'none';
        D2.style.display = 'none';
        E2.style.display = 'none';
    } else if (kodeBarangSelect.value === 'C1') {
        A1.style.display = 'none';
        B1.style.display = 'none';
        C1.style.display = 'block';
        D1.style.display = 'none';
        E1.style.display = 'none';
        A2.style.display = 'none';
        B2.style.display = 'none';
        C2.style.display = 'block';
        D2.style.display = 'none';
        E2.style.display = 'none';
    } else if (kodeBarangSelect.value === 'D1') {
        A1.style.display = 'none';
        B1.style.display = 'none';
        C1.style.display = 'none';
        D1.style.display = 'block';
        E1.style.display = 'none';
        A2.style.display = 'none';
        B2.style.display = 'none';
        C2.style.display = 'none';
        D2.style.display = 'block';
        E2.style.display = 'none';
    } else if (kodeBarangSelect.value === 'E1') {
      A1.style.display = 'none';
      B1.style.display = 'none';
      C1.style.display = 'none';
      D1.style.display = 'none';
      E1.style.display = 'block';
      A2.style.display = 'none';
      B2.style.display = 'none';
      C2.style.display = 'none';
      D2.style.display = 'none';
      E2.style.display = 'block';
    } else {
        A1.style.display = 'none';
        B1.style.display = 'none';
        C1.style.display = 'none';
        D1.style.display = 'none';
        E1.style.display = 'none';
        A2.style.display = 'none';
        B2.style.display = 'none';
        C2.style.display = 'none';
        D2.style.display = 'none';
        E2.style.display = 'none';
    }
  });
