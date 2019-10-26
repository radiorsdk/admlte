var $ = jQuery;
$(document).ready(function(){
var err = "Tidak ada koneksi internet";	
function setCookie(cname,cvalue,exdays) {
var d = new Date();
d.setTime(d.getTime() + (exdays*24*60*60*1000));
var expires = "expires=" + d.toGMTString();
document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
var data = "data/jadwal-pasien-rad";
date = new Date();
tanggal = ("0" + date.getDate()).slice(-2);
bulan = ("0" + (date.getMonth() + 1)).slice(-2)
tahun = date.getFullYear();
var tgl_skrg = tahun+"-"+bulan+"-"+tanggal;

	$("#form-tambah-jadwal-manual-rad").submit(function(e) {
		e.preventDefault();
		var dataform = $("#form-tambah-jadwal-manual-rad").serialize();
		$(".btnLoad").button("loading");
		$.ajax({
			url: "input/jadwal-pasien-manual-rad",
			type: "post",
			data: dataform,
			success: function(result) {
				$(".btnLoad").button("reset");
				var hasil = JSON.parse(result);
				var ket_tambahanM = [];  
					if (hasil.hasil === "sukses") {
					$('#modal-tambah-jadwal-manual-rad').modal('hide');
					$('#kd_ruang').val(null).trigger('change');
                    $('#tmkd_pemeriksaan1').val(null).trigger('change');
                    $('#tmkd_dokter').val(null).trigger('change');
					$('#tabel-jadwal-rad').load(data);
					$('#Sukses').modal();
					document.getElementById("form-tambah-jadwal-manual-rad").reset();
					setTimeout(function(){
					setCookie("tgl_skrg", tgl_skrg, 30);
					}, 5000);
				} else if (hasil.hasil === "data_ada") {
					$('#modal-tambah-jadwal-manual-rad').modal('hide');
					$('#Ada').modal();
				} else {
					$('#modal-tambah-jadwal-manual-rad').modal('hide');
					$('#Gagal').modal();
				}
					
			},
      error: function ( response, status, xhr ) {
      	$(".btnLoad").button("reset");
        if ( status == "error" ) { alert(err); }
      }
		});

	});
	
	$(document).on('click','#edit-jadwal-manual-rad',function(e){
		e.preventDefault();
		$.post('halaman/form/edit-jadwal-manual-rad.php',
			{id:$(this).attr('data-id')},
			function (html) {
				$("#modal-edit-jadwal-manual-rad").modal('show');
				 	$("#data-edit-jadwal-manual-rad").html(html);
			})
			.fail(function(response) {
				$("#noInternet").modal('show');
		});   
	});

	
	$("#form-edit-jadwal-manual-rad").submit(function(e) {
		e.preventDefault();
		var dataform = $("#form-edit-jadwal-manual-rad").serialize();
		$(".btnLoad").button("loading");
		$.ajax({
			url: "update/jadwal-pasien-manual-rad",
			type: "post",
			data: dataform,
			success: function(result) {
				$(".btnLoad").button("reset");
				var hasil = JSON.parse(result);
				var hobi = [];  
					if (hasil.hasil === "sukses") {
					$('#modal-edit-jadwal-manual-rad').modal('hide');
					$('#tabel-jadwal-rad').load(data);
					$('#Sukses').modal();
					document.getElementById("form-edit-jadwal-manual-rad").reset();
					setTimeout(function(){
					setCookie("tgl_skrg", tgl_skrg, 30);
					}, 5000);
				}  else {
					$('#modal-edit-jadwal-manual-rad').modal('hide');
					$('#Gagal').modal();
				}
					
			},
      error: function ( response, status, xhr ) {
      	$(".btnLoad").button("reset");
        if ( status == "error" ) { alert(err); }
      }
		});
	});
	
	
	$(document).on('click','#hapus-jadwal-manual-rad',function(e){
		e.preventDefault();
		var kode = $(this).attr('data-id');
		$('#confirm-delete').modal('show');
		$(document).on('click','.btn-ok',function(e){
			$.post('delete/jadwal-pasien-rad',{id:kode},function(result){
			var hasil = JSON.parse(result);
			if (hasil.hasil === "sukses") {
					$('#confirm-delete').modal('hide');
					$('#hSukses').modal('show');
					$('#tabel-jadwal-rad').load(data);
					setTimeout(function(){
					setCookie("tgl_skrg", tgl_skrg, 30);
					}, 5000);
				} else {
					$('#confirm-delete').modal('hide');
					$('#hGagal').modal('show');
				}
			}

		)
			.fail(function(response) {
				$('#confirm-delete').modal('hide');
				$("#noInternet").modal('show');
		});
		});	
	});


	$("#form-tambah-jadwal-otomatis-rad").submit(function(e) {
		e.preventDefault();
		var dataform = $("#form-tambah-jadwal-otomatis-rad").serialize();
		$(".btnLoad").button("loading");
		$.ajax({
			url: "input/jadwal-pasien-otomatis-rad",
			type: "post",
			data: dataform,
			success: function(result) {
				$(".btnLoad").button("reset");
				var hasil = JSON.parse(result);
				var ket_tambahanM = [];  
					if (hasil.hasil === "sukses") {
					$('#modal-tambah-jadwal-otomatis-rad').modal('hide');
					$('#kd_ruang').val(null).trigger('change');
                    $('#tokd_pemeriksaan1').val(null).trigger('change');
                    $('#tokd_dokter').val(null).trigger('change');
					$('#tabel-jadwal-rad').load(data);
					$('#Sukses').modal();
					document.getElementById("form-tambah-jadwal-otomatis-rad").reset();
					setTimeout(function(){
					setCookie("tgl_skrg", tgl_skrg, 30);
					}, 5000);
				} else if (hasil.hasil === "data_ada") {
					$('#modal-tambah-jadwal-otomatis-rad').modal('hide');
					$('#Ada').modal();
				} else {
					$('#modal-tambah-jadwal-otomatis-rad').modal('hide');
					$('#Gagal').modal();
				}
					
			},
      error: function ( response, status, xhr ) {
      	$(".btnLoad").button("reset");
        if ( status == "error" ) { alert(err); }
      }
		});

	});
	
	$(document).on('click','#edit-jadwal-otomatis-rad',function(e){
		e.preventDefault();
		$.post('halaman/form/edit-jadwal-otomatis-rad.php',
			{id:$(this).attr('data-id')},
		function (html) {
				$("#modal-edit-jadwal-otomatis-rad").modal('show');
				$("#data-edit-jadwal-otomatis-rad").html(html);
			})
			.fail(function(response) {
				$("#noInternet").modal('show');
		});
	});

	
	$("#form-edit-jadwal-otomatis-rad").submit(function(e) {
		e.preventDefault();
		var dataform = $("#form-edit-jadwal-otomatis-rad").serialize();
		$(".btnLoad").button("loading");
		$.ajax({
			url: "update/jadwal-pasien-otomatis-rad",
			type: "post",
			data: dataform,
			success: function(result) {
				$(".btnLoad").button("reset");
				var hasil = JSON.parse(result);
				var hobi = [];  
					if (hasil.hasil === "sukses") {
					$('#modal-edit-jadwal-otomatis-rad').modal('hide');
					$('#tabel-jadwal-rad').load(data);
					$('#Sukses').modal();
					document.getElementById("form-edit-jadwal-otomatis-rad").reset();
					setTimeout(function(){
					setCookie("tgl_skrg", tgl_skrg, 30);
					}, 5000);
				}  else {
					$('#modal-edit-jadwal-otomatis-rad').modal('hide');
					$('#Gagal').modal();
				}
					
			},
      error: function ( response, status, xhr ) {
      	$(".btnLoad").button("reset");
        if ( status == "error" ) { alert(err); }
      }
		});
	});
	
	
	$(document).on('click','#hapus-jadwal-otomatis-rad',function(e){
		e.preventDefault();
		var kode = $(this).attr('data-id');
		$('#confirm-delete').modal('show');
		$(document).on('click','.btn-ok',function(e){
			$.post('delete/jadwal-pasien-rad',{id:kode},function(result){
			var hasil = JSON.parse(result);
			if (hasil.hasil === "sukses") {
					$('#confirm-delete').modal('hide');
					$('#hSukses').modal('show');
					$('#tabel-jadwal-rad').load(data);
					setTimeout(function(){
					setCookie("tgl_skrg", tgl_skrg, 30);
					}, 5000);
				} else {
					$('#confirm-delete').modal('hide');
					$('#hGagal').modal('show');
				}
			}

		)
			.fail(function(response) {
				$("#noInternet").modal('show');
		});
		});	
	});

});