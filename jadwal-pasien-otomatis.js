var $ = jQuery;
$(document).ready(function(){
function setCookie(cname,cvalue,exdays) {
var d = new Date();
d.setTime(d.getTime() + (exdays*24*60*60*1000));
var expires = "expires=" + d.toGMTString();
document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
var data = "data/jadwal-pasien";
date = new Date();
tanggal = ("0" + date.getDate()).slice(-2);
bulan = ("0" + (date.getMonth() + 1)).slice(-2)
tahun = date.getFullYear();
var tgl_skrg = tahun+"-"+bulan+"-"+tanggal;
	$("#form-tambah-jadwal-otomatis").submit(function(e) {
		e.preventDefault();
		var dataform = $("#form-tambah-jadwal-otomatis").serialize();

		$.ajax({
			url: "input/jadwal-pasien-otomatis",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				var ket_tambahanO = [];  
					if (hasil.hasil === "sukses") {
                    $("#toloading").hide();
					$('#kd_ruang').val(null).trigger('change');
                    $('#tokd_pemeriksaan').val(null).trigger('change');
                    $('#tokd_tind').val(null).trigger('change');
                    //$("#tokd_tind").hide(); 
                    //jQuery("#tokd_tind").select2().next().hide();
                    $('#modal-tambah-jadwal-otomatis').modal('hide');
					$('#tabel-jadwal').load(data);
					$('#Sukses').modal();
					document.getElementById("form-tambah-jadwal-otomatis").reset();
					setTimeout(function(){
					setCookie("tgl_skrg", tgl_skrg, 30);
					}, 5000);
				} else if (hasil.hasil === "data_ada") {
					$('#modal-tambah-jadwal-otomatis').modal('hide');
					$('#Ada').modal();
				}  else if (hasil.hasil === "penuh") {
					$('#modal-tambah-jadwal-otomatis').modal('hide');
					$('#Penuh').modal();
				} else {
					$('#modal-tambah-jadwal-otomatis').modal('hide');
					$('#Gagal').modal();
				}
					
			}
		});

	});
	
	$(document).on('click','#edit-jadwal-otomatis',function(e){
		e.preventDefault();
		$("#modal-edit-jadwal-otomatis").modal('show');
		$.post('halaman/form/edit-jadwal-otomatis.php',
			{id:$(this).attr('data-id')},
			function(html){
				$("#data-edit-jadwal-otomatis").html(html);
			}   
		);
	});
	
	
	$("#form-edit-jadwal-otomatis").submit(function(e) {
		e.preventDefault();
		var dataform = $("#form-edit-jadwal-otomatis").serialize();

		$.ajax({
			url: "update/jadwal-pasien-otomatis",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				var ket_tambahanO = []; 
					if (hasil.hasil === "sukses") {
					$('#modal-edit-jadwal-otomatis').modal('hide');
					$('#tabel-jadwal').load(data);
					$('#Sukses').modal();
					document.getElementById("form-edit-jadwal-otomatis").reset();
					setTimeout(function(){
					setCookie("tgl_skrg", tgl_skrg, 30);
					}, 5000);
				} else if (hasil.hasil === "data_ada") {
					$('#modal-edit-jadwal-otomatis').modal('hide');
					$('#Ada').modal();
				} else if (hasil.hasil === "penuh") {
					$('#modal-edit-jadwal-otomatis').modal('hide');
					$('#Penuh').modal();
				}else {
					$('#modal-edit-jadwal-otomatis').modal('hide');
					$('#Gagal').modal();
				}
					
			}
		});
	});
	
	
	$(document).on('click','#hapus-jadwal-otomatis',function(e){
		e.preventDefault();
		var kode = $(this).attr('data-id');
		$('#confirm-delete').modal('show');
		$(document).on('click','.btn-ok',function(e){
			$.post('delete/jadwal-pasien',{id:kode},function(result){
			var hasil = JSON.parse(result);
			if (hasil.hasil === "sukses") {
					$('#confirm-delete').modal('hide');
					$('#hSukses').modal('show');
					$('#tabel-jadwal').load(data);
					setTimeout(function(){
					setCookie("tgl_skrg", tgl_skrg, 30);
					}, 5000);
				} else {
					$('#confirm-delete').modal('hide');
					$('#hGagal').modal('show');
				}
			}

		);
		});	
	});

$('.btnLoad').on('click', function() {
    var $this = $(this);
  $this.button('loading');
    setTimeout(function() {
       $this.button('reset');
   }, 8000);
});


});