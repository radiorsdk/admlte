 $(document).ready(function(){
	$(document).on('click','#edit-profil',function(e){
		e.preventDefault();
		$("#modal-edit-profil").modal('show');
		$.post('halaman/form/edit-profil.php',
			{id:$(this).attr('data-id')},
			function(html){
				$("#data-edit-profil").html(html);
			}   
		);
	});
	
	
	$("#form-edit-profil").submit(function(e) {
		e.preventDefault();
		
		var dataform = $("#form-edit-profil").serialize();
		$.ajax({
			url: "update/profil",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result);
				if (hasil.hasil === "sukses") {
					$('#modal-edit-profil').modal('hide');
					$("#nm_usr").val('');
					$("#pass").val('');
					$('#Sukses').modal();
					document.getElementById("form-edit-profil").reset();
					setTimeout(function(){
					window.location=('keluar');
					}, 2000);
				}  else if (hasil.hasil === "pass_beda") {
					$("#popPPass2").popover('show');
					return false;
				}else {
					$('#modal-edit-user').modal('hide');
					$('#Gagal').modal();
					return false;
				}
			}
		});
	});
	

});