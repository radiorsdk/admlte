$(document).ready(function(){ // Ketika halaman sudah siap (sudah selesai di load)
  // Kita sembunyikan dulu untuk loadingnya
  $("#emloading").hide();
  $("#emkd_pemeriksaan").change(function(){ // Ketika user mengganti atau memilih data kategori
    $("#emloading").show(); // Tampilkan loadingnya
    $("#emkd_tind").hide(); // Sembunyikan dulu combobox subkat nya
    jQuery("#emkd_tind").select2().next().hide();

  
    $.ajax({
      type: "POST", // Method pengiriman data bisa dengan GET atau POST
      url: "modul/option-tindakan.php", // Isi dengan url/path file php yang dituju
      data: {kd_pemeriksaan : $("#emkd_pemeriksaan").val()}, // data yang akan dikirim ke file yang dituju
      dataType: "json",
      beforeSend: function(e) {
        if(e && e.overrideMimeType) {
          e.overrideMimeType("application/json;charset=UTF-8");
        }
      },
      success: function(response){ // Ketika proses pengiriman berhasil
        
          $("#emloading").hide(); // Sembunyikan loadingnya
          jQuery("#emkd_tind").select2().next().show();
          // set isi dari combobox subkat
          // lalu munculkan kembali combobox subkatnya
          $("#emkd_tind").html(response.data_tind).show();
        
      },
      error: function (xhr, ajaxOptions, thrownError) { // Ketika ada error
        alert(thrownError); // Munculkan alert error
      }
    });
    });
});