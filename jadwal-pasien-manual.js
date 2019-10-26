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
	$("#form-tambah-jadwal-manual").submit(function(e) {
		e.preventDefault();
		var dataform = $("#form-tambah-jadwal-manual").serialize();

		$.ajax({
			url: "input/jadwal-pasien-manual",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				var ket_tambahanM = [];  
					if (hasil.hasil === "sukses") {
					$('#modal-tambah-jadwal-manual').modal('hide');
                    $("#tmloading").hide();
					$('#kd_ruang').val(null).trigger('change');
                    $('#tmkd_pemeriksaan').val(null).trigger('change');
                    $("#tmkd_tind").hide(); 
                    jQuery("#tmkd_tind").select2().next().hide();
					$('#tabel-jadwal').load(data);
					$('#Sukses').modal();
					document.getElementById("form-tambah-jadwal-manual").reset();
					setTimeout(function(){
					setCookie("tgl_skrg", tgl_skrg, 30);
					}, 5000);
				} else if (hasil.hasil === "data_ada") {
					$('#modal-tambah-jadwal-manual').modal('hide');
					$('#Ada').modal();
				} else {
					$('#modal-tambah-jadwal-manual').modal('hide');
					$('#Gagal').modal();
				}
					
			}
		});

	});
	
	$(document).on('click','#edit-jadwal-manual',function(e){
		e.preventDefault();
		$("#modal-edit-jadwal-manual").modal('show');
		$.post('halaman/form/edit-jadwal-manual.php',
			{id:$(this).attr('data-id')},
			function(html){
				$("#data-edit-jadwal-manual").html(html);
			}   
		);
	});
	
	
	$("#form-edit-jadwal-manual").submit(function(e) {
		e.preventDefault();
		var dataform = $("#form-edit-jadwal-manual").serialize();

		$.ajax({
			url: "update/jadwal-pasien-manual",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				var hobi = [];  
					if (hasil.hasil === "sukses") {
					$('#modal-edit-jadwal-manual').modal('hide');
					$('#tabel-jadwal').load(data);
					$('#Sukses').modal();
					document.getElementById("form-edit-jadwal-manual").reset();
					setTimeout(function(){
					setCookie("tgl_skrg", tgl_skrg, 30);
					}, 5000);
				} else if (hasil.hasil === "data_ada") {
					$('#modal-edit-jadwal-manual').modal('hide');
					$('#Ada').modal();
				} else {
					$('#modal-edit-jadwal-manual').modal('hide');
					$('#Gagal').modal();
				}
					
			}
		});
	});
	
	
	$(document).on('click','#hapus-jadwal-manual',function(e){
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


});