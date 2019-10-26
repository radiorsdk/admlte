$(document).ready(function(){ // Ketika halaman sudah siap (sudah selesai di load)

		$(".ubah_kat").click(function(e) {
			kd_kat = this.id;
				$.ajax({
					url: "hlm_adm/data-kat-edit.php",
					type: "GET",
					data : {id: kd_kat,},
					success: function (ajaxData){
					$("#Edit-Kategori").html(ajaxData);
					}
				});

			});

		$(".ubah_sub").click(function(e) {
			kd_sub = this.id;
				$.ajax({
					url: "hlm_adm/data-subkat-edit.php",
					type: "GET",
					data : {id: kd_sub,},
					success: function (ajaxData){
					$("#Edit-Subkat").html(ajaxData);
					}
				});

			});

});




