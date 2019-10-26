$(document).ready(function(){
	var data = "data/verifikasi-pemeriksaan-rad";
	$('#tabel-verifikasi-pemeriksaan-rad').load(data);



	$(document).on('click','#bverifikasi-pemeriksaan-rad',function(e){
		e.preventDefault();
		$("#modal-verifikasi-pemeriksaan-rad").modal('show');
		$.post('halaman/form/verifikasi-pemeriksaan-rad.php',
			{id:$(this).attr('data-id')},
			function(html){
				$("#data-verifikasi-pemeriksaan-rad").html(html);
			}   
		);
	});
	
	
	$("#form-verifikasi-pemeriksaan-rad").submit(function(e) {
		e.preventDefault();
		
		var dataform = $("#form-verifikasi-pemeriksaan-rad").serialize();
		$.ajax({
			url: "input/verifikasi-pemeriksaan-rad",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				if (hasil.hasil === "sukses") {
					$('#modal-verifikasi-pemeriksaan-rad').modal('hide');
					$("#no_rm").val('');
					$("#ver_pasien").val('');
					$("#tgl_tindakan").val('');
					$('#tabel-verifikasi-pemeriksaan-rad').load(data);
					$('#Sukses').modal();
					document.getElementById("form-verifikasi-pemeriksaan-rad").reset();
				} else if (hasil.hasil === "petugas_sama") {
					$("#PetugasSama").show();
					return false;
				} else {
					$('#modal-verifikasi-pemeriksaan-rad').modal('hide');
					$('#Gagal').modal();
					return false;
				}
			}
		});
	});
	


});