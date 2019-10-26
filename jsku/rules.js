var $ = jQuery;
$(document).ready(function(){
	var data = "data/rules";
	$('#tabel-rules').load(data);

	$(document).on('click','#edit-rules',function(e){
		e.preventDefault();
		$("#modal-edit-rules").modal('show');
		$.post('halaman/form/edit-rules.php',
			{id:$(this).attr('data-id')},
			function(html){
				$("#data-edit-rules").html(html);
			}   
		);
	});
	
	
	$("#form-edit-rules").submit(function(e) {
		e.preventDefault();
		var dataform = $("#form-edit-rules").serialize();

		$.ajax({
			url: "update/rules",
			type: "post",
			data: dataform,
			success: function(result) {
				var hasil = JSON.parse(result); 
					if (hasil.hasil === "sukses") {
					$('#modal-edit-rules').modal('hide');
					$('#tabel-rules').load(data);
					$('#Sukses').modal();
				} else {
					$('#modal-edit-rules').modal('hide');
					$('#Gagal').modal();
				}
					
			}
		});
	});
	

});