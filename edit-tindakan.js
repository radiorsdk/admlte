$(document).ready(function () {

  // Kita sembunyikan dulu untuk loadingnya
  $("#eloading").hide();
  //$("#esubkat").hide(); 

  $("#ekategori").change(function(){ // Ketika user mengganti atau memilih data kategori
  	$("#kat_lama").hide(); // Sembunyikan dulu combobox subkat nya
    $("#esubkat").hide(); // Sembunyikan dulu combobox subkat nya
    $("#eloading").show(); // Tampilkan loadingnya
  
    $.ajax({
      type: "GET", // Method pengiriman data bisa dengan GET atau POST
      url: "hlm_adm/option_subkat.php", // Isi dengan url/path file php yang dituju
      data: {ekategori : $("#ekategori").val()}, // data yang akan dikirim ke file yang dituju
      dataType: "json",
      beforeSend: function(e) {
        if(e && e.overrideMimeType) {
          e.overrideMimeType("application/json;charset=UTF-8");
        }
      },
      success: function(response){ // Ketika proses pengiriman berhasil
        setTimeout(function(){
          $("#eloading").hide(); // Sembunyikan loadingnya

          // set isi dari combobox subkat
          // lalu munculkan kembali combobox subkatnya
          $("#esubkat").html(response.data_subkat).show();
        }, 3000);
      },
      error: function (xhr, ajaxOptions, thrownError) { // Ketika ada error
        alert(thrownError); // Munculkan alert error
      }
    });
    });



 });
