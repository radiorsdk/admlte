$(document).ready(function(){
	$("#tHKAda").hide();
	$("#eHKAda").hide();
	var data = "data/hak-akses";
	$('#tabel-hak-akses').load(data);
		$("#form-tambah-hak-akses").submit(function(e) {
		e.preventDefault();
		
		var dataform = $("#form-tambah-hak-akses").serialize();
		$.ajax({
			url: "input/hak-akses",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				if (hasil.hasil === "sukses") {
					$('#modal-tambah-hak-akses').modal('hide');
					$("#tHKAda").hide();
					$('#tabel-hak-akses').load(data);
					$('#Sukses').modal();
					document.getElementById("form-tambah-hak-akses").reset();
				} else if (hasil.hasil === "hak_akses_ada") {
					$("#tHKAda").show();
					return false;
				} else {
					$('#modal-tambah-hak-akses').modal('hide');
					$('#Gagal').modal();
					return false;
				}
			}
		});
	});
	

	$(document).on('click','#edit-hak-akses',function(e){
		e.preventDefault();
		$("#eHKAda").hide();
		$("#modal-edit-hak-akses").modal('show');
		$.post('halaman/form/edit-hak-akses.php',
			{id:$(this).attr('data-id')},
			function(html){
				$("#data-edit-hak-akses").html(html);
			}   
		);
	});
	
	
	$("#form-edit-hak-akses").submit(function(e) {
		e.preventDefault();
		
		var dataform = $("#form-edit-hak-akses").serialize();
		$.ajax({
			url: "update/hak-akses",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				if (hasil.hasil === "sukses") {
					$("#eHKAda").hide();
					$('#modal-edit-hak-akses').modal('hide');
					$('#tabel-hak-akses').load(data);
					$('#Sukses').modal();
					document.getElementById("form-edit-hak-akses").reset();
				} else if (hasil.hasil === "hak_akses_ada") {
					$("#eHKAda").show();
					return false;
				} else {
					$('#modal-edit-hak-akses').modal('hide');
					$('#Gagal').modal();
					return false;
				}
			}
		});
	});
	
	$(document).on('click','#hapus-hak-akses',function(e){
		e.preventDefault();
		var kode = $(this).attr('data-id');
		$('#confirm-delete').modal('show');
		$(document).on('click','.btn-ok',function(e){
			$.post('delete/hak-akses',{id:kode},function(result){
			var hasil = JSON.parse(result);
			if (hasil.hasil === "sukses") {
					$('#confirm-delete').modal('hide');
					$('#hSukses').modal('show');
					$('#tabel-hak-akses').load(data);
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