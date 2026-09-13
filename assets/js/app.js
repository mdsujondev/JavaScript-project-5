let images = document.querySelectorAll(".img img");
let activeImg = document.querySelector(".active_img");
let activeImgSrc = document.querySelector(".active_img img");
let closeBtn = document.querySelector(".close");
let rightBtn = document.querySelector(".right");
let leftBtn = document.querySelector(".left");

images.forEach((el, index) => {
  // img active add

  el.addEventListener("click", function () {
    activeImg.classList.add("active");
    // index ++
    activeImgSrc.src = images[index].src
    
    rightBtn.addEventListener("click", function () {
        
        if(index < images.length - 1){
            index++
            
        }else{
            index = 0
        }
        activeImgSrc.src = images[index].src
        
        console.log(index);
        

    });
    
  });
});

// img close
closeBtn.addEventListener("click", function () {
  activeImg.classList.remove("active");
});
console.log(images[2]);