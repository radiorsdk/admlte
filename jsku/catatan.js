$(document).ready(function(){
	var data = "data/catatan";
	$('#tabel-catatan').load(data);

	$(document).on('click','#edit-catatan',function(e){
		e.preventDefault();
		$("#modal-edit-catatan").modal('show');
		$.post('halaman/form/edit-catatan.php',
			{id:$(this).attr('data-id')},
			function(html){
				$("#data-edit-catatan").html(html);
			}   
		);
	});
	
	
	$("#form-edit-catatan").submit(function(e) {
		e.preventDefault();
		
		var dataform = $("#form-edit-catatan").serialize();
		$.ajax({
			url: "update/catatan",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				if (hasil.hasil === "sukses") {
					$('#modal-edit-catatan').modal('hide');
					$("#isi_catatan").val('');
					$('#tabel-catatan').load(data);
					$('#Sukses').modal();
					document.getElementById("form-edit-catatan").reset();
				} else {
					$('#modal-edit').modal('hide');
					$('#Gagal').modal();
				}
			}
		});
	});
	

});