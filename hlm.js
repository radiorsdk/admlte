 $(document).ready(function(){
      $('.halaman').click(function(){
      document.getElementById("tombol");
      tombol.classList.remove("sidebar-open");
      var menu = $(this).attr('id');
      var datamenu = $(this).attr('data-id');
      if(menu == "dasboard"){
      document.cookie = "hlm=dasboard";
      $('.konten-halaman').load('halaman/dasboard',function(){}).hide().fadeIn('slow');
      }else if(menu == "tentang"){
      document.cookie = "hlm=tentang";
      $('.konten-halaman').load('halaman/tentang',function(){}).hide().fadeIn('slow');
      }else if(menu == "riwayat-pemeriksaan"){
      document.cookie = "hlm=riwayat-pemeriksaan";
      $('.konten-halaman').load('halaman/riwayat-pemeriksaan',function(){}).hide().fadeIn('slow');
      }else if(menu == "data-tentang"){
      document.cookie = "hlm=data-tentang";
      $('.konten-halaman').load('halaman/data-tentang',function(){}).hide().fadeIn('slow');
      }else if(menu == "data-catatan"){
      document.cookie = "hlm=data-catatan";
      $('.konten-halaman').load('halaman/data-catatan',function(){}).hide().fadeIn('slow');
      }else if(menu == "kalender"){
      document.cookie = "hlm=kalender";
      $('.konten-halaman').load('halaman/kalender',function(){}).hide().fadeIn('slow');
      }else if(menu == "data-kalender"){
      document.cookie = "hlm=data-kalender";
      $('.konten-halaman').load('halaman/data-kalender',function(){}).hide().fadeIn('slow');
      }else if(menu == "data-user"){
      document.cookie = "hlm=data-user";
      $('.konten-halaman').load('halaman/data-user',function(){}).hide().fadeIn('slow');
      }else if(menu == "data-ruang"){
      document.cookie = "hlm=data-ruang";
      $('.konten-halaman').load('halaman/data-ruang',function(){}).hide().fadeIn('slow');
      }else if(menu == "data-pemeriksaan-tindakan"){
      document.cookie = "hlm=data-pemeriksaan-tindakan";
      $('.konten-halaman').load('halaman/data-pemeriksaan-tindakan',function(){}).hide().fadeIn('slow');
      }else if(menu == "jadwal-pasien" && datamenu == "terbaru"){
      document.cookie = "hlm=data-jadwal-pasien";
      document.cookie = "pem=terbaru";
      $('.konten-halaman').load('halaman/data-jadwal-pasien',function(){}).hide().fadeIn('slow');
      }else if(menu == "jadwal-pasien" && datamenu == "msct"){
      document.cookie = "hlm=data-jadwal-pasien";
      document.cookie = "pem=2";
      $('.konten-halaman').load('halaman/data-jadwal-pasien',function(){}).hide().fadeIn('slow');
      }else if(menu == "jadwal-pasien" && datamenu == "usg"){
      $('.konten-halaman').load('halaman/data-jadwal-pasien',function(){}).hide().fadeIn('slow');
      document.cookie = "hlm=data-jadwal-pasien";
      document.cookie = "pem=1";
      }else if(menu == "jadwal-pasien" && datamenu == "konven"){
      $('.konten-halaman').load('halaman/data-jadwal-pasien',function(){}).hide().fadeIn('slow');
      document.cookie = "hlm=data-jadwal-pasien";
      document.cookie = "pem=5";
      }else if(menu == "jadwal-pasien" && datamenu == "c-arm"){
      $('.konten-halaman').load('halaman/data-jadwal-pasien',function(){}).hide().fadeIn('slow');
      document.cookie = "hlm=data-jadwal-pasien";
      document.cookie = "pem=4";
      }else if(menu == "jadwal-pasien" && datamenu == "mri"){
      $('.konten-halaman').load('halaman/data-jadwal-pasien',function(){}).hide().fadeIn('slow');
      document.cookie = "hlm=data-jadwal-pasien";
      document.cookie = "pem=3";
      }else if(menu == "lap-jadwal-pasien" && datamenu == "irna"){
      document.cookie = "hlm=data-lap-jadwal-pasien";
      document.cookie = "pem=6";
      $('.konten-halaman').load('halaman/data-lap-jadwal-pasien',function(){}).hide().fadeIn('slow');
      }else if(menu == "lap-jadwal-pasien" && datamenu == "irja"){
      document.cookie = "hlm=data-lap-jadwal-pasien";
      document.cookie = "pem=7";
      $('.konten-halaman').load('halaman/data-lap-jadwal-pasien',function(){}).hide().fadeIn('slow');
      }else if(menu == "lap-jadwal-pasien" && datamenu == "msct"){
      document.cookie = "hlm=data-lap-jadwal-pasien";
      document.cookie = "pem=2";
      $('.konten-halaman').load('halaman/data-lap-jadwal-pasien',function(){}).hide().fadeIn('slow');
      }else if(menu == "lap-jadwal-pasien" && datamenu == "usg"){
      $('.konten-halaman').load('halaman/data-lap-jadwal-pasien',function(){}).hide().fadeIn('slow');
      document.cookie = "hlm=data-lap-jadwal-pasien";
      document.cookie = "pem=1";
      }else if(menu == "lap-jadwal-pasien" && datamenu == "konven"){
      $('.konten-halaman').load('halaman/data-lap-jadwal-pasien',function(){}).hide().fadeIn('slow');
      document.cookie = "hlm=data-lap-jadwal-pasien";
      document.cookie = "pem=5";
      }else if(menu == "lap-jadwal-pasien" && datamenu == "c-arm"){
      $('.konten-halaman').load('halaman/data-lap-jadwal-pasien',function(){}).hide().fadeIn('slow');
      document.cookie = "hlm=data-lap-jadwal-pasien";
      document.cookie = "pem=4";
      }else if(menu == "lap-jadwal-pasien" && datamenu == "mri"){
      $('.konten-halaman').load('halaman/data-lap-jadwal-pasien',function(){}).hide().fadeIn('slow');
      document.cookie = "hlm=data-lap-jadwal-pasien";
      document.cookie = "pem=3";
      }else if(menu == "data-rules" && datamenu == "usg"){
      document.cookie = "hlm=data-rules";
      document.cookie = "pem=1";
      $('.konten-halaman').load('halaman/data-rules',function(){}).hide().fadeIn('slow');
      }else if(menu == "data-rules" && datamenu == "msct"){
      $('.konten-halaman').load('halaman/data-rules',function(){}).hide().fadeIn('slow');
      document.cookie = "hlm=data-rules";
      document.cookie = "pem=2";
      }else if(menu == "data-rules" && datamenu == "mri"){
      $('.konten-halaman').load('halaman/data-rules',function(){}).hide().fadeIn('slow');
      document.cookie = "hlm=data-rules";
      document.cookie = "pem=3";
      }
      });
      
      function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
      c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
      }
      }
      return "";
      }
      
      var hlm = getCookie("hlm");
      if (hlm == "dasboard") {
      $('.konten-halaman').load('halaman/dasboard',function(){}).hide().fadeIn('slow');
      }else if (hlm == "riwayat-pemeriksaan") {
      $('.konten-halaman').load('halaman/riwayat-pemeriksaan',function(){}).hide().fadeIn('slow');
      }else if (hlm == "tentang") {
      $('.konten-halaman').load('halaman/tentang',function(){}).hide().fadeIn('slow');
      }else if (hlm == "data-tentang") {
      $('.konten-halaman').load('halaman/data-tentang',function(){}).hide().fadeIn('slow');
      }else if (hlm == "data-user") {
      $('.konten-halaman').load('halaman/data-user',function(){}).hide().fadeIn('slow');
      }else if (hlm == "data-ruang") {
      $('.konten-halaman').load('halaman/data-ruang',function(){}).hide().fadeIn('slow');
      }else if (hlm == "data-pemeriksaan-tindakan") {
      $('.konten-halaman').load('halaman/data-pemeriksaan-tindakan',function(){}).hide().fadeIn('slow');
      }else if (hlm == "data-pemeriksaan-tindakan") {
      $('.konten-halaman').load('halaman/data-pemeriksaan-tindakan',function(){}).hide().fadeIn('slow');
      }else if (hlm == "data-jadwal-pasien") {
      $('.konten-halaman').load('halaman/data-jadwal-pasien',function(){}).hide().fadeIn('slow');
      }else if (hlm == "data-lap-jadwal-pasien") {
      $('.konten-halaman').load('halaman/data-lap-jadwal-pasien',function(){}).hide().fadeIn('slow');
      }else if (hlm == "data-catatan") {
      $('.konten-halaman').load('halaman/data-catatan',function(){}).hide().fadeIn('slow');
      }else if (hlm == "kalender") {
      $('.konten-halaman').load('halaman/kalender',function(){}).hide().fadeIn('slow');
      }else if (hlm == "data-kalender") {
      $('.konten-halaman').load('halaman/data-kalender',function(){}).hide().fadeIn('slow');
      }else if (hlm == "data-rules") {
      $('.konten-halaman').load('halaman/data-rules',function(){}).hide().fadeIn('slow');
      } else {
      $('.konten-halaman').load('halaman/dasboard',function(){}).hide().fadeIn('slow');
      }
      });