$(document).ready(function(){ // Ketika halaman sudah siap (sudah selesai di load)

		$(".ubah").click(function(e) {
			kd_produk = this.id;
				$.ajax({
					url: "hlm_adm/data-pemeriksaan-edit.php",
					type: "GET",
					data : {id: kd_produk,},
					success: function (ajaxData){
					$("#Edit-Pemeriksaan").html(ajaxData);
					}
				});

			});
});




