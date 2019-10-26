$(document).ready(function(){ // Ketika halaman sudah siap (sudah selesai di load)
  // Kita sembunyikan dulu untuk loadingnya
  $("#tloading").hide();
  $("#tsubkat").hide(); 

  $("#tkategori").change(function(){ // Ketika user mengganti atau memilih data kategori
    $("#tsubkat").hide(); // Sembunyikan dulu combobox subkat nya
    $("#tloading").show(); // Tampilkan loadingnya
  
    $.ajax({
      type: "GET", // Method pengiriman data bisa dengan GET atau POST
      url: "hlm_adm/option_subkat2.php", // Isi dengan url/path file php yang dituju
      data: {tkategori : $("#tkategori").val()}, // data yang akan dikirim ke file yang dituju
      dataType: "json",
      beforeSend: function(e) {
        if(e && e.overrideMimeType) {
          e.overrideMimeType("application/json;charset=UTF-8");
        }
      },
      success: function(response){ // Ketika proses pengiriman berhasil
        setTimeout(function(){
          $("#tloading").hide(); // Sembunyikan loadingnya

          // set isi dari combobox subkat
          // lalu munculkan kembali combobox subkatnya
          $("#tsubkat").html(response.data_subkat).show();
        }, 3000);
      },
      error: function (xhr, ajaxOptions, thrownError) { // Ketika ada error
        alert(thrownError); // Munculkan alert error
      }
    });
    });
});