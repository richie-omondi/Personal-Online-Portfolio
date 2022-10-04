AOS.init();

AOS.init({
  
 
  offset: 120, 
  delay: 0, 
  duration: 700, 
  easing: 'ease', 
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom', 

});

document.querySelector('button').addEventListener('click', (e)=>{
  e.preventDefault();
  const contactForm = document.querySelector('#form');
  const name = document.querySelector('[name="name"]');
  const email = document.querySelector('[name="email"]');
  const subject = document.querySelector('[name="subject"]');
  const content = document.querySelector('[name="content"]');
  // validation before sending the data
  if(name.value.length===0 || name.value.length===0 || name.value.length===0){
    alert('please fill the inputs')
  }else{
    let data = new FormData(contactForm);  
    fetch("_url_here", { method: "POST", body: data });
    alert('Thank you. your form was submited');
    contactForm.reset()
  }
})