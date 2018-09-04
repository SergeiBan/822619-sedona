
var link = document.querySelector(.search-btn);
var popup = document.querySelector(.search__form);

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
})