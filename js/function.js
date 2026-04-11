//vamos animar a parte do do serviços
const callModal = document.querySelector(".popup")
function animateServicos(elemento){




  
  
  const popupImg = document.querySelector("#img-popup")
  
   //pegar o src da imagem
   const valElem = elemento.getAttribute('src');
   console.log(valElem);

   popupImg.setAttribute( 'src' ,valElem);
   callModal.style.display = "flex";  //continuar a dar imagem ao pop-up
    





   
  


}
const exit = document.querySelector("#exit-btn");

exit.addEventListener('click', ()=>{

    callModal.style.display = "none";
    
})


function animateheader(){
    const animar = document.querySelectorAll(".off");
    

        animar.forEach((animation , index) =>{
          setTimeout(() => {
             animation.classList.add("active");
          }, index * 500); // 200ms de delay entre cada item
        })
        

        

    

}

const controls = document.querySelectorAll('.control');
const items = document.querySelectorAll('.item');

let currentItem = 0;
const maxItems = items.length;

// função que atualiza o slider
function updateSlider() {
    items.forEach((item, index) => {
        item.classList.remove("current-item", "prev", "next", "hidden");

        if (index === currentItem) {
            item.classList.add("current-item");
        } 
        else if (index === (currentItem - 1 + maxItems) % maxItems) {
            item.classList.add("prev");
        } 
        else if (index === (currentItem + 1) % maxItems) {
            item.classList.add("next");
        } 
        else {
            item.classList.add("hidden");
        }
    });
}

// eventos dos botões
controls.forEach(control => {
    control.addEventListener('click', (event) => {

        const direction = event.currentTarget.id;

        if (direction === "left") {
            currentItem--;
        } else {
            currentItem++;
        }

        // loop infinito
        if (currentItem >= maxItems) currentItem = 0;
        if (currentItem < 0) currentItem = maxItems - 1;

        updateSlider();
    });
});

const elements = document.querySelectorAll('.hide');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

elements.forEach((el) => observer.observe(el));

updateSlider();
animateheader();
