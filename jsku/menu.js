$(document).ready(function(){
	$("#tMenuAda").hide();
	$("#eMenuAda").hide();
	var data = "data/menu";
	$('#tabel-menu').load(data);
		$("#form-tambah-menu").submit(function(e) {
		e.preventDefault();
		
		var dataform = $("#form-tambah-menu").serialize();
		$.ajax({
			url: "input/menu",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				if (hasil.hasil === "sukses") {
					$('#modal-tambah-menu').modal('hide');
					$("#tMenuAda").hide();
					$('#tabel-menu').load(data);
					$('#Sukses').modal();
					document.getElementById("form-tambah-menu").reset();
				} else if (hasil.hasil === "menu_ada") {
					$("#tMenuAda").show();
					return false;
				} else {
					$('#modal-tambah-menu').modal('hide');
					$('#Gagal').modal();
					return false;
				}
			}
		});
	});
	

	$(document).on('click','#edit-menu',function(e){
		e.preventDefault();
		$("#eMenuAda").hide();
		$("#modal-edit-menu").modal('show');
		$.post('halaman/form/edit-menu.php',
			{id:$(this).attr('data-id')},
			function(html){
				$("#data-edit-menu").html(html);
			}   
		);
	});
	
	
	$("#form-edit-menu").submit(function(e) {
		e.preventDefault();
		
		var dataform = $("#form-edit-menu").serialize();
		$.ajax({
			url: "update/menu",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				if (hasil.hasil === "sukses") {
					$("#eMenuAda").hide();
					$('#modal-edit-menu').modal('hide');
					$('#tabel-menu').load(data);
					$('#Sukses').modal();
					document.getElementById("form-edit-menu").reset();
				} else if (hasil.hasil === "menu_ada") {
					$("#eMenuAda").show();
					return false;
				} else {
					$('#modal-edit-menu').modal('hide');
					$('#Gagal').modal();
					return false;
				}
			}
		});
	});
	
	$(document).on('click','#hapus-menu',function(e){
		e.preventDefault();
		var kode = $(this).attr('data-id');
		$('#confirm-delete').modal('show');
		$(document).on('click','.btn-ok',function(e){
			$.post('delete/menu',{id:kode},function(result){
			var hasil = JSON.parse(result);
			if (hasil.hasil === "sukses") {
					$('#confirm-delete').modal('hide');
					$('#hSukses').modal('show');
					$('#tabel-menu').load(data);
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