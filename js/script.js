let link = document.querySelector(".hotel-search");
let searchPopup = document.querySelector(".modal-show");
let form = searchPopup.querySelector("form");
let checkIn = searchPopup.querySelector("[name=check-in]");
let checkOut = searchPopup.querySelector("[name=check-out]");
let numberOfAdults = searchPopup.querySelector("[name=number-of-adults]");
let numberOfKids = searchPopup.querySelector("[name=number-of-kids]");

searchPopup.classList.remove("modal-show");
searchPopup.classList.add("modal-search-form");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  searchPopup.classList.toggle("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!checkIn.value || !checkOut.value || !numberOfAdults.value || !numberOfKids.value) {
    evt.preventDefault();
    searchPopup.classList.remove("modal-error");
    searchPopup.offsetWidth = searchPopup.offsetWidth;
    searchPopup.classList.add("modal-error");
    console.log("Заполните все поля формы");
    }
});
