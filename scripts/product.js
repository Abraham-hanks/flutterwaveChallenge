$(document).ready(function(){
  $('.modal-footer .btn-main').click(function(){
      window.location="addProduct.html"
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
