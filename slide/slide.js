// const listImage = document.querySelector('.list-images')
// const imgs = document.getElementsByTagName('img')
// const btnLeft = document.querySelector('.btn-left')
// const btnRight = document.querySelector('.btn-right')
// const length = imgs.length
// let current = 0

// const handleChangeSlide = ()=>{
//     if(current == length -1){
//         current = 0
//         let width = imgs[0].offsetWidth
//         listImage.style.transform = `translateX(0px)`
//         document.querySelector('.active').classList.remove('active')
//         document.querySelector('.index-item-'+ current).classList.add('active')
//     } else{
//         current ++
//         let width = imgs[0].offsetWidth
//         listImage.style.transform = `translateX(${width * -1 * current}px)`
//         document.querySelector('.active').classList.remove('active')
//         document.querySelector('.index-item-'+ current).classList.add('active')
//     }
// }

// let handleTimeChangeSlide = setInterval(handleChangeSlide, 8000)

// btnRight.addEventListener('click', ()=>{
//     clearInterval(handleTimeChangeSlide)
//     handleChangeSlide()
//     handleTimeChangeSlide = setInterval(handleChangeSlide, 8000)
// })

// btnLeft.addEventListener('click', ()=> {
//     clearInterval(handleTimeChangeSlide)
//     if(current == 0){
//         current = length -1
//         let width = imgs[0].offsetWidth
//         listImage.style.transform = `translateX(${width * -1 * current}px)`
//         document.querySelector('.active').classList.remove('active')
//         document.querySelector('.index-item-'+ current).classList.add('active')
//     } else{
//         current --
//         let width = imgs[0].offsetWidth
//         listImage.style.transform = `translateX(${width * -1 * current}px)`
//         document.querySelector('.active').classList.remove('active')
//         document.querySelector('.index-item-'+ current).classList.add('active')
//     }
//     handleTimeChangeSlide = setInterval(handleChangeSlide, 8000)
// })

let slideIndex = 1;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          let i;
          let slides = document.getElementsByClassName("mySlides");
          let dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}    
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
        }