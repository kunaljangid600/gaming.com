var mainimage = document.querySelector('#toprow2');
var bgchangeImages = document.querySelectorAll('.bgchange');

for (var i = 0; i < bgchangeImages.length; i++) {
    bgchangeImages[i].addEventListener(
        'mouseenter',
        function () {
            mainimage.style.backgroundImage = `url(${this.src})`
        }

    )
}
// var mainimgs =document.querySelector('.some-fig2');
// console.log(mainimgs.src);
// function changimgs(element){
//     console.log(element.src);
//     mainimgs.src=element.src;
// }