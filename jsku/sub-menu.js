$(document).ready(function(){
	$("#tSubMenuAda").hide();
	$("#eSubMenuAda").hide();
	var data = "data/sub-menu";
	$('#tabel-sub-menu').load(data);
		$("#form-tambah-sub-menu").submit(function(e) {
		e.preventDefault();
		
		var dataform = $("#form-tambah-sub-menu").serialize();
		$.ajax({
			url: "input/sub-menu",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				if (hasil.hasil === "sukses") {
					$('#modal-tambah-sub-menu').modal('hide');
					$("#tSubMenuAda").hide();
					$('#tabel-sub-menu').load(data);
					$('#Sukses').modal();
					document.getElementById("form-tambah-sub-menu").reset();
				} else if (hasil.hasil === "sub_menu_ada") {
					$("#tSubMenuAda").show();
					return false;
				} else {
					$('#modal-tambah-sub-menu').modal('hide');
					$('#Gagal').modal();
					return false;
				}
			}
		});
	});
	

	$(document).on('click','#edit-sub-menu',function(e){
		e.preventDefault();
		$("#eSubMenuAda").hide();
		$("#modal-edit-sub-menu").modal('show');
		$.post('halaman/form/edit-sub-menu.php',
			{id:$(this).attr('data-id')},
			function(html){
				$("#data-edit-sub-menu").html(html);
			}   
		);
	});
	
	
	$("#form-edit-sub-menu").submit(function(e) {
		e.preventDefault();
		
		var dataform = $("#form-edit-sub-menu").serialize();
		$.ajax({
			url: "update/sub-menu",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				if (hasil.hasil === "sukses") {
					$("#eSubMenuAda").hide();
					$('#modal-edit-sub-menu').modal('hide');
					$('#tabel-sub-menu').load(data);
					$('#Sukses').modal();
					document.getElementById("form-edit-sub-menu").reset();
				} else if (hasil.hasil === "sub_menu_ada") {
					$("#eSubMenuAda").show();
					return false;
				} else {
					$('#modal-edit-sub-menu').modal('hide');
					$('#Gagal').modal();
					return false;
				}
			}
		});
	});
	
	$(document).on('click','#hapus-sub-menu',function(e){
		e.preventDefault();
		var kode = $(this).attr('data-id');
		$('#confirm-delete').modal('show');
		$(document).on('click','.btn-ok',function(e){
			$.post('delete/sub-menu',{id:kode},function(result){
			var hasil = JSON.parse(result);
			if (hasil.hasil === "sukses") {
					$('#confirm-delete').modal('hide');
					$('#hSukses').modal('show');
					$('#tabel-sub-menu').load(data);
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