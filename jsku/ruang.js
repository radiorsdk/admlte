$(document).ready(function(){
	var data = "data/ruang";
	$('#tabel-ruang').load(data);
		$("#form-tambah-ruang").submit(function(e) {
		e.preventDefault();
		$(".btnLoad").button("loading");
		var dataform = $("#form-tambah-ruang").serialize();
		$.ajax({
			url: "input/ruang",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				$(".btnLoad").button("reset");
				if (hasil.hasil === "sukses") {
					$('#modal-tambah-ruang').modal('hide');
					$("#nm_ruang").val('');
					$('#tabel-ruang').load(data);
					alertNotify("Sukses : ","Berhasil menyimpan data !","fa fa-check","success");
					document.getElementById("form-tambah-ruang").reset();
				} else if (hasil.hasil === "data_ada") {
					alertNotify("Info : ","Data ada !","fa fa-info-circle","info");
					return false;
				} else if(hasil.hasil === "sesi_habis"){
					$('#modal-tambah-ruang').modal('hide');
					$("#sesiHabis").modal();
					setTimeout(function(){
					window.location=('keluar');
					}, 2000);
				} else {
					alertNotify("Error : ","Gagal menyimpan data !","fa fa-close","danger");
					return false;
				}
			},
      error: function ( response, status, xhr ) {
      	$(".btnLoad").button("reset");
        if ( status == "error" ) { 
				alertNotify("Error : ","Tidak ada koneksi internet!","fa fa-close","danger");
        	 }
      }
		});
	});
	

	$(document).on('click','#edit-ruang',function(e){
		e.preventDefault();
		$.post('halaman/form/edit-ruang.php',
			{id:$(this).attr('data-id')},
			function(html){
				$("#modal-edit-ruang").modal('show');
				$("#data-edit-ruang").html(html);
			}   
		)
		.fail(function(response) {
				alertNotify("Error : ","Tidak ada koneksi internet!","fa fa-close","danger");
		});   
	});
	
	
	$("#form-edit-ruang").submit(function(e) {
		e.preventDefault();
		$(".btnLoad").button("loading");
		var dataform = $("#form-edit-ruang").serialize();
		$.ajax({
			url: "update/ruang",
			type: "post",
			data: dataform,
			success: function(result) {
				$(".btnLoad").button("reset");
				var hasil = JSON.parse(result);
				if (hasil.hasil === "sukses") {
					$('#modal-edit-ruang').modal('hide');
					$("#nm_ruang").val('');
					$('#tabel-ruang').load(data);
					alertNotify("Sukses : ","Berhasil mengupdate data !","fa fa-check","success");
					document.getElementById("form-edit-ruang").reset();
				}  else if (hasil.hasil === "data_ada") {
					alertNotify("Info : ","Data ada !","fa fa-info-circle","info");
					return false;
				} else if(hasil.hasil === "sesi_habis"){
					$('#modal-edit-ruang').modal('hide');
					$("#sesiHabis").modal();
					setTimeout(function(){
					window.location=('keluar');
					}, 2000);
				} else {
					alertNotify("Error : ","Gagal mengupdate data !","fa fa-close","danger");
					return false;
				}
			},
      error: function ( response, status, xhr ) {
      	$(".btnLoad").button("reset");
        if ( status == "error" ) {
        	alertNotify("Error : ","Tidak ada koneksi internet!","fa fa-close","danger");
        }
      }
		});
	});
	
	$(document).on('click','#hapus-ruang',function(e){
		e.preventDefault();
		$(".btnLoad").button("reset");
		var kode = $(this).attr('data-id');
		$('#confirm-delete').modal('show');
		$(document).on('click','.btn-ok',function(e){
			$(".btnLoad").button("loading");
			$.post('delete/ruang',{id:kode},function(result){
			var hasil = JSON.parse(result);
			if (hasil.hasil === "sukses") {
					$('#confirm-delete').modal('hide');
					alertNotify("Sukses : ","Berhasil menghapus data !","fa fa-check","success");
					$('#tabel-ruang').load(data);
				} else if(hasil.hasil === "sesi_habis"){
					$('#confirm-delete').modal('hide');
					$("#sesiHabis").modal();
					setTimeout(function(){
					window.location=('keluar');
					}, 2000);
				} else {
					$('#confirm-delete').modal('hide');
					alertNotify("Error : ","Gagal menghapus data !","fa fa-close","danger");
				}
			}

		)
			.fail(function(response) {
				$('#confirm-delete').modal('hide');
				alertNotify("Error : ","Tidak ada koneksi internet!","fa fa-close","danger");
		});   
		});	
	});

});