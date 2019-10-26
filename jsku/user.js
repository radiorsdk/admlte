$(document).ready(function(){
	$("#popUser").hide();
	$("#popPass2").hide();
	var data = "data/user";
	$('#tabel-user').load(data);

		$("#form-tambah-user").submit(function(e) {
		e.preventDefault();
		
		var dataform = $("#form-tambah-user").serialize();
		$.ajax({
			url: "input/user",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				if (hasil.hasil === "sukses") {
					$('#modal-tambah-user').modal('hide');
					$("#nm_usr").val('');
					$("#username").val('');
					$("#password").val('');
					$("#hak_akses").val('');
					$("#email").val('');
					$("#status").val('');
					$('#tabel-user').load(data);
					$('#Sukses').modal();
					document.getElementById("form-tambah-user").reset();
				} else if (hasil.hasil === "user_ada") {
					$("#popUser").show();
					return false;
				} else if (hasil.hasil === "pass_beda") {
					$("#popPass2").show();
					return false;
				}else {
					$('#modal-tambah-user').modal('hide');
					$('#Gagal').modal();
					return false;
				}
			}
		});
	});
	

	$(document).on('click','#edit-user',function(e){
		e.preventDefault();
		$("#modal-edit-user").modal('show');
		$.post('halaman/form/edit-user.php',
			{id:$(this).attr('data-id')},
			function(html){
				$("#data-edit-user").html(html);
			}   
		);
	});
	
	
	$("#form-edit-user").submit(function(e) {
		e.preventDefault();
		
		var dataform = $("#form-edit-user").serialize();
		$.ajax({
			url: "update/user",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				if (hasil.hasil === "sukses") {
					$('#modal-edit-user').modal('hide');
					$("#nm_usr").val('');
					$("#username").val('');
					$("#pass").val('');
					$("#hak_akses").val('');
					$("#email").val('');
					$("#status").val('');
					$('#tabel-user').load(data);
					$('#Sukses').modal();
					document.getElementById("form-edit-user").reset();
				} else {
					$('#modal-edit-user').modal('hide');
					$('#Gagal').modal();
					return false;
				}
			}
		});
	});
	
	$(document).on('click','#hapus-user',function(e){
		e.preventDefault();
		var kode = $(this).attr('data-id');
		$('#confirm-delete').modal('show');
		$(document).on('click','.btn-ok',function(e){
			$.post('delete/user',{id:kode},function(result){
			var hasil = JSON.parse(result);
			if (hasil.hasil === "sukses") {
					$('#confirm-delete').modal('hide');
					$('#hSukses').modal('show');
					$('#tabel-user').load(data);
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