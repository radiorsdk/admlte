$(document).ready(function(){
	$("#DataAda").hide();
	var data = "data/dokter";
	$('#tabel-dokter').load(data);

		$("#form-tambah-dokter").submit(function(e) {
		e.preventDefault();
		
		var dataform = $("#form-tambah-dokter").serialize();
		$.ajax({
			url: "input/dokter",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				if (hasil.hasil === "sukses") {
					$('#modal-tambah-dokter').modal('hide');
					$("#nm_dokter").val('');
					$("#inisial").val('');
					$("#status").val('');
					$('#tabel-dokter').load(data);
					$('#Sukses').modal();
					document.getElementById("form-tambah-dokter").reset();
				} else if (hasil.hasil === "dokter_ada") {
					$("#DataAda").show();
					return false;
				} else {
					$('#modal-tambah-dokter').modal('hide');
					$('#Gagal').modal();
					return false;
				}
			}
		});
	});
	

	$(document).on('click','#edit-dokter',function(e){
		e.preventDefault();
		$("#modal-edit-dokter").modal('show');
		$.post('halaman/form/edit-dokter.php',
			{id:$(this).attr('data-id')},
			function(html){
				$("#data-edit-dokter").html(html);
			}   
		);
	});
	
	
	$("#form-edit-dokter").submit(function(e) {
		e.preventDefault();
		
		var dataform = $("#form-edit-dokter").serialize();
		$.ajax({
			url: "update/dokter",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				if (hasil.hasil === "sukses") {
					$('#modal-edit-dokter').modal('hide');
					$("#nm_dokter").val('');
					$("#inisial").val('');
					$("#status").val('');
					$('#tabel-dokter').load(data);
					$('#Sukses').modal();
					document.getElementById("form-edit-dokter").reset();
				} else {
					$('#modal-edit-dokter').modal('hide');
					$('#Gagal').modal();
					return false;
				}
			}
		});
	});
	
	$(document).on('click','#hapus-dokter',function(e){
		e.preventDefault();
		var kode = $(this).attr('data-id');
		$('#confirm-delete').modal('show');
		$(document).on('click','.btn-ok',function(e){
			$.post('delete/dokter',{id:kode},function(result){
			var hasil = JSON.parse(result);
			if (hasil.hasil === "sukses") {
					$('#confirm-delete').modal('hide');
					$('#hSukses').modal('show');
					$('#tabel-dokter').load(data);
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