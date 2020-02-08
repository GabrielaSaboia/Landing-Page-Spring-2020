//slide show
var i = 0; //start of slideshow

var images = [];
var time = 3000;

//image list

images[0] = 'images/image1.jpg';
images[1] = 'images/image2.jpg';
images[2] = 'images/image3.jpg';
images[3] = 'images/image4.jpg';
images[4] = 'images/image5.jpg';
images[5] = 'images/image6.jpg';
images[6] = 'images/image7.jpg';

//change image

function changeImg() {
    document.slide.src = images[i];

    if(i < images.length -1){
        i++;
    } else{
        i = 0;
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;