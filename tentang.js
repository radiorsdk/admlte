$(document).ready(function(){
	var data = "data/tentang";
	$('#tabel-tentang').load(data);

	$(document).on('click','#edit-tentang',function(e){
		e.preventDefault();
		$("#modal-edit-tentang").modal('show');
		$.post('halaman/form/edit-tentang.php',
			{id:$(this).attr('data-id')},
			function(html){
				$("#data-edit-tentang").html(html);
			}   
		);
	});
	
	
	$("#form-edit-tentang").submit(function(e) {
		e.preventDefault();
		
		var dataform = $("#form-edit-tentang").serialize();
		$.ajax({
			url: "update/tentang",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				if (hasil.hasil === "sukses") {
					$('#modal-edit-tentang').modal('hide');
					$('#tabel-tentang').load(data);
					$('#Sukses').modal();
					document.getElementById("form-edit-tentang").reset();
				} else {
					$('#modal-edit').modal('hide');
					$('#Gagal').modal();
				}
			}
		});
	});
	

});