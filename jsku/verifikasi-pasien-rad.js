$(document).ready(function(){
	var data = "data/verifikasi-pasien-rad";
	$('#tabel-verifikasi-pasien-rad').load(data);



	$(document).on('click','#bverifikasi-pasien-rad',function(e){
		e.preventDefault();
		$("#modal-verifikasi-pasien-rad").modal('show');
		$.post('halaman/form/verifikasi-pasien-rad.php',
			{id:$(this).attr('data-id')},
			function(html){
				$("#data-verifikasi-pasien-rad").html(html);
			}   
		);
	});
	
	
	$("#form-verifikasi-pasien-rad").submit(function(e) {
		e.preventDefault();
		
		var dataform = $("#form-verifikasi-pasien-rad").serialize();
		$.ajax({
			url: "input/verifikasi-pasien-rad",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				if (hasil.hasil === "sukses") {
					$('#modal-verifikasi-pasien-rad').modal('hide');
					$("#no_rm").val('');
					$("#ver_pasien").val('');
					$("#tgl_tindakan").val('');
					$('#tabel-verifikasi-pasien-rad').load(data);
					$('#Sukses').modal();
					document.getElementById("form-verifikasi-pasien-rad").reset();
				} else {
					$('#modal-verifikasi-pasien-rad').modal('hide');
					$('#Gagal').modal();
					return false;
				}
			}
		});
	});
	


});