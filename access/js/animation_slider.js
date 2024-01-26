// --------------------------------------------< chuyen doi slide >------------------------------------------------------------
let sliderImg = document.querySelectorAll('.slider__container img');
let sliderDot = document.querySelector('.slider__dot');

// tao so luong dot tuong duong voi so luong slide
function createSliderDots() {
    let arrHtml = new Array;
    arrHtml.push('<div class="slider__dot--item focus"></div>');
    for (let i = 1; i < sliderImg.length; i++) {
        arrHtml.push('<div class="slider__dot--item"></div>');
    }
    let html = arrHtml.join('');
    sliderDot.innerHTML = html;
}
createSliderDots();

// ham set mau cho dot
let sliderDotItem = document.querySelectorAll('.slider__dot--item');
function setColorDot(indexShow) {
    sliderDotItem.forEach(function(item, indexDot) {
        item.classList.remove('focus');

        if(indexDot == indexShow) {
            item.classList.add('focus');
        }
    })
}

// ham set vi tri cho slide
function setSliderImg(indexShow) {
    sliderImg.forEach(function (img, index) {
        img.style.left = `${(index - indexShow) * 100}%`;
    });

    // set mau cho dot
    setColorDot(indexShow);
}

// sett vi tri ban dau cho slide show
let imgShow = 0;
setSliderImg(imgShow);

// khi focus vao dot thi doi vi tri slide
sliderDotItem.forEach(function(item, indexDot) {
    item.addEventListener("click", function(){
        // set mau cho dot duoc focus
        setColorDot(indexDot);
        // set anh show voi dot tuong ung
        setSliderImg(indexDot);
    });
})

// moi 5s doi slide show 1 lan
setInterval(function () {
    imgShow++;

    if (imgShow == sliderImg.length) {
        imgShow = 0;
    }

    setSliderImg(imgShow);
    console.log(imgShow);
}, 5000);
