const buttonMail= document.querySelector('#mail');
const formWrapper = document.querySelector('#contact');
const book = document.querySelector('.book');
const closeBtn= document.querySelector('#contact-close');
function clickMail(){
  buttonMail.addEventListener('click', ()=>{
    book.classList.toggle('active');
  })
}
closeBtn.addEventListener('click', ()=>{book.classList.remove('active');
})
clickMail();