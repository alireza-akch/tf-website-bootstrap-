
// Modal

var modalEle = document.querySelector(".modal");
var modalImage = document.querySelector(".modalImage");
Array.from(document.querySelectorAll("#ImgThumbnail")).forEach(item => {
   item.addEventListener("click", event => {
      modalEle.style.display = "block";
      modalImage.src = event.target.src;
   });
});
document.querySelector(".btn-close").addEventListener("click", () => {
   modalEle.style.display = "none";
});




function googleTranslateElementInit() {
   new google.translate.TranslateElement({pageLanguage: 'fa'}, 'google_translate_element');
   }