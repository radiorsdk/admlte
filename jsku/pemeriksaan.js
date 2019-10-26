$(document).ready(function(){
	var data = "data/pemeriksaan";
	$('#tabel-pemeriksaan').load(data);

		$("#form-tambah-pemeriksaan").submit(function(e) {
		e.preventDefault();
		
		var dataform = $("#form-tambah-pemeriksaan").serialize();
		$.ajax({
			url: "input/pemeriksaan",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				if (hasil.hasil === "sukses") {
					$('#modal-tambah-pemeriksaan').modal('hide');
					$("#nm_pemeriksaan").val('');
					$('#tabel-pemeriksaan').load(data);
					$('#Sukses').modal();
					document.getElementById("form-tambah-pemeriksaan").reset();
				} else {
					$('#modal-tambah-pemeriksaan').modal('hide');
					$('#Gagal').modal();
				}
			}
		});
	});
	

	$(document).on('click','#edit-pemeriksaan',function(e){
		e.preventDefault();
		$("#modal-edit-pemeriksaan").modal('show');
		$.post('halaman/form/edit-pemeriksaan.php',
			{id:$(this).attr('data-id')},
			function(html){
				$("#data-edit-pemeriksaan").html(html);
			}   
		);
	});
	
	
	$("#form-edit-pemeriksaan").submit(function(e) {
		e.preventDefault();
		
		var dataform = $("#form-edit-pemeriksaan").serialize();
		$.ajax({
			url: "update/pemeriksaan",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				if (hasil.hasil === "sukses") {
					$('#modal-edit-pemeriksaan').modal('hide');
					$("#nm_pemeriksaan").val('');
					$('#tabel-pemeriksaan').load(data);
					$('#Sukses').modal();
					document.getElementById("form-edit-pemeriksaan").reset();
				} else {
					$('#modal-edit-pemeriksaan').modal('hide');
					$('#Gagal').modal();
				}
			}
		});
	});
	
	$(document).on('click','#hapus-pemeriksaan',function(e){
		e.preventDefault();
		var kode = $(this).attr('data-id');
		$('#confirm-delete').modal('show');
		$(document).on('click','.btn-ok',function(e){
			$.post('delete/pemeriksaan',{id:kode},function(result){
			var hasil = JSON.parse(result);
			if (hasil.hasil === "sukses") {
					$('#confirm-delete').modal('hide');
					$('#hSukses').modal('show');
					$('#tabel-pemeriksaan').load(data);
				} else {
					$('#confirm-delete').modal('hide');
					$('#hGagal').modal('show');
				}
			}

		);
		});	
	});

});