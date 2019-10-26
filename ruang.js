$(document).ready(function(){
	var data = "data/ruang";
	$('#tabel-ruang').load(data);

		$("#form-tambah-ruang").submit(function(e) {
		e.preventDefault();
		
		var dataform = $("#form-tambah-ruang").serialize();
		$.ajax({
			url: "input/ruang",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				if (hasil.hasil === "sukses") {
					$('#modal-tambah-ruang').modal('hide');
					$("#nm_ruang").val('');
					$('#tabel-ruang').load(data);
					$('#Sukses').modal();
					document.getElementById("form-tambah-ruang").reset();
				} else {
					$('#modal-tambah-ruang').modal('hide');
					$('#Gagal').modal();
				}
			}
		});
	});
	

	$(document).on('click','#edit-ruang',function(e){
		e.preventDefault();
		$("#modal-edit-ruang").modal('show');
		$.post('halaman/form/edit-ruang.php',
			{id:$(this).attr('data-id')},
			function(html){
				$("#data-edit-ruang").html(html);
			}   
		);
	});
	
	
	$("#form-edit-ruang").submit(function(e) {
		e.preventDefault();
		
		var dataform = $("#form-edit-ruang").serialize();
		$.ajax({
			url: "update/ruang",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				if (hasil.hasil === "sukses") {
					$('#modal-edit-ruang').modal('hide');
					$("#nm_ruang").val('');
					$('#tabel-ruang').load(data);
					$('#Sukses').modal();
					document.getElementById("form-edit-ruang").reset();
				} else {
					$('#modal-edit').modal('hide');
					$('#Gagal').modal();
				}
			}
		});
	});
	
	$(document).on('click','#hapus-ruang',function(e){
		e.preventDefault();
		var kode = $(this).attr('data-id');
		$('#confirm-delete').modal('show');
		$(document).on('click','.btn-ok',function(e){
			$.post('delete/ruang',{id:kode},function(result){
			var hasil = JSON.parse(result);
			if (hasil.hasil === "sukses") {
					$('#confirm-delete').modal('hide');
					$('#hSukses').modal('show');
					$('#tabel-ruang').load(data);
				} else {
					$('#confirm-delete').modal('hide');
					$('#hGagal').modal('show');
				}
			}

		);
		});	
	});

});