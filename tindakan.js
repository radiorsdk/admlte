$(document).ready(function(){
	var data = "data/tindakan";
	$('#tabel-tindakan').load(data);

		$("#form-tambah-tindakan").submit(function(e) {
		e.preventDefault();
		
		var dataform = $("#form-tambah-tindakan").serialize();
		$.ajax({
			url: "input/tindakan",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				if (hasil.hasil === "sukses") {
					$('#modal-tambah-tindakan').modal('hide');
					$("#nm_tind").val('');
					$("#kd_pemeriksaan").val('');
					$('#tabel-tindakan').load(data);
					$('#Sukses').modal();
					document.getElementById("form-tambah-tindakan").reset();
				} else {
					$('#modal-tambah-tindakan').modal('hide');
					$('#Gagal').modal();
					return false;
				}
			}
		});
	});
	

	$(document).on('click','#edit-tindakan',function(e){
		e.preventDefault();
		$("#modal-edit-tindakan").modal('show');
		$.post('halaman/form/edit-tindakan.php',
			{id:$(this).attr('data-id')},
			function(html){
				$("#data-edit-tindakan").html(html);
			}   
		);
	});
	
	
	$("#form-edit-tindakan").submit(function(e) {
		e.preventDefault();
		
		var dataform = $("#form-edit-tindakan").serialize();
		$.ajax({
			url: "update/tindakan",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				if (hasil.hasil === "sukses") {
					$('#modal-edit-tindakan').modal('hide');
					$("#nm_tind").val('');
					$('#tabel-tindakan').load(data);
					$('#Sukses').modal();
					document.getElementById("form-edit-tindakan").reset();
				} else {
					$('#modal-edit-tindakan').modal('hide');
					$('#Gagal').modal();
					return false;
				}
			}
		});
	});
	
	$(document).on('click','#hapus-tindakan',function(e){
		e.preventDefault();
		var kode = $(this).attr('data-id');
		$('#confirm-delete').modal('show');
		$(document).on('click','.btn-ok',function(e){
			$.post('delete/tindakan',{id:kode},function(result){
			var hasil = JSON.parse(result);
			if (hasil.hasil === "sukses") {
					$('#confirm-delete').modal('hide');
					$('#hSukses').modal('show');
					$('#tabel-tindakan').load(data);
				} else {
					$('#confirm-delete').modal('hide');
					$('#hGagal').modal('show');
					return false;
				}
			}

		);
		});	
	});

});