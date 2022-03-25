
const modal = document.getElementById('myModal');

const img = document.querySelectorAll('img');
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

img.forEach((el, index) => {
  el.addEventListener('click', () => {
    modal.style.display = "block";
    modalImg.src = el.src;
    captionText.textContent = index + 1;
  });
});

span = document.getElementsByClassName("close");
modal.addEventListener('click', e => {
  if(e.target.classList.contains('close') || e.target.classList.contains('modal')) {
      modal.style.display = "none";
  };
});