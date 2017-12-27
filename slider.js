var buttonBack = document.querySelector ('.back');
var buttonNext = document.querySelector ('.next');

var arrayOfImages = document.querySelectorAll (".pictures img");

var i = 0;

buttonBack.addEventListener('click', function () {
    arrayOfImages[i].className = "";;
    i--;
    if(i < 0) {
        i = arrayOfImages.length - 1;
    }
    arrayOfImages[i].className = "showed";;
});
buttonNext.addEventListener('click', function () {
    arrayOfImages[i].className = "";
    i++;
    if(i >= arrayOfImages.length) {
        i = 0;
    }
    arrayOfImages[i].className = "showed";
});

