$(document).ready(function(){
   
    $('.upload-img').click(function () {
       $('#modal-btn').click();
    })
    
    $('.card-img-top').click(function () {
       $('#modal-btn2').click();
    })
  
    //listens for the click to add image
    $('#uploadButton').click(function(e){
      e.preventDefault()	
      e.stopPropagation()
      $('#fileElem').click()
    })
      //listens for when the file is in local memeory
     $('#fileElem').change(function(e){
       let uploadedFile = this.files[0]; 
       previewFile(uploadedFile);
     })
     //preview file before upload
     async function previewFile(file) {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = function() {
        let img = document.createElement('img');
        img.src = reader.result;
        let element = document.getElementById('uploadButton');
        $(element).html(img);
      }
    }
  })
  