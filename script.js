// script.js
function uploadImage() {
 const fileInput = document.getElementById('fileInput');
 const file = fileInput.files[0];
 
 if (file) {
     const reader = new FileReader();
     reader.onload = function(e) {
         document.getElementById('uploadedImage').src = e.target.result;
         document.getElementById('resultText').value = "Image uploaded successfully!";
         switchToPage2();
     }
     reader.readAsDataURL(file);
 } else {
     alert('Please select an image to upload.');
 }
}

function switchToPage2() {
 document.getElementById('page1').style.display = 'none';
 document.getElementById('page2').style.display = 'block';
}

function goBack() {
 document.getElementById('page2').style.display = 'none';
 document.getElementById('page1').style.display = 'block';
}

function refreshPage() {
 document.getElementById('fileInput').value = '';
 document.getElementById('uploadedImage').src = '';
 document.getElementById('resultText').value = '';
 goBack();
}
