$(document).ready(function(){
	var data = "data/kalender";
	$('#tabel-kalender').load(data);

		$(document).on('click','#edit-kalender',function(e){
		e.preventDefault();
		$("#modal-edit-kalender").modal('show');
		$.post('halaman/form/edit-kalender.php',
			{id:$(this).attr('data-id')},
			function(html){
				$("#data-edit-kalender").html(html);
			}   
		);
	});
	

	
	$("#form-edit-kalender").submit(function(e) {
		e.preventDefault();
		
		var dataform = $("#form-edit-kalender").serialize();
		$.ajax({
			url: "update/kalender",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				if (hasil.hasil === "sukses") {
					$('#modal-edit-kalender').modal('hide');
					$("#nm_kalender").val('');
					$('#tabel-kalender').load(data);
					$('#Sukses').modal();
					document.getElementById("form-edit-kalender").reset();
				} else {
					$('#modal-edit').modal('hide');
					$('#Gagal').modal();
				}
			}
		});
	});
	

});