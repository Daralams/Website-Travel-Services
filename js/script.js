// Navbar Responsive
const button = document.querySelector('#btn')
const navbar = document.querySelector('nav ul')
button.addEventListener('click', () => {
  navbar.classList.toggle('phoneDevice')
})

// banner auto slide
let i = 0;
let images = [];
let time = 2000;

images[0] = 'assets/banner.JPG';
images[1] = 'assets/lombok.JPG';
images[2] = 'assets/gunung-fuji.JPG';
images[3] = 'assets/singapore.JPG';
images[4] = 'assets/tangkuban-parahu.JPG';

function slideImg() {
  document.slide.src = images[i];
  
  if(i < images.length - 1) {
    i++;
  }else {
    i = 0;
  }
  
  setTimeout("slideImg()", time)
}
window.onload = slideImg;


// Form validation
// event ketika btn di click
  const form = document.querySelector('#btnForm')
      form.addEventListener("click", function send(e) { 
  
        
        // Menampung variabel Nama
     const nama = document.getElementById('nama');
     const messegeName = document.getElementById('messegeName');
      // Menampung variabel email
      const email = document.getElementById('email');
      const messegeEmail = document.getElementById('messegeEmail')
      // Menampung variabel option
      const opt = document.myForm.option.value
      const err = document.querySelector('.select-box')
      
      let tampungNama = [];
      let tampungEmail = [];
      let tampungOption = [];
        
      if(nama.value === "" || nama.value == null) {
          messegeName.innerHTML = 'Harap isi karakter di kolom nama!';
          nama.style.borderColor = 'red';
        }else if(nama.value.length < 3) {
          messegeName.innerHTML = 'Nama harus 3 karakter atau lebih!';
        }else if(email.value === "" || email.value == null) {
          messegeEmail.innerHTML ='Harap isi kolom email!'
          email.style.borderColor = 'red';
        }else if(email.value.length >= 100){
          messegeEmail.innerHTML = 'Email harus 10 karakter atau kurang dari 10'
        }else if(opt === "") {
          const errOpt = document.getElementById('messegeOption').innerHTML = 'Harap isi bagian ini!'; 
          err.style.borderColor = 'red';
        }else{
          tampungNama.push(nama.value) = messegeName.join(',');
          tampungEmail.push(email.value) = messegeEmail(',');
          const errOpt = document.getElementById('messegeOption').innerHTML = ''; 
        }
        e.preventDefault();  
      });