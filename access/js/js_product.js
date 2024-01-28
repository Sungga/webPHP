document.addEventListener("DOMContentLoaded", function() {
    let imgSmall = document.querySelectorAll('.product__img--small-img img');

    // setting vi tri ban dau cho cac anh mo ta
    imgSmall.forEach(function(img, index) {
        img.style.top = `${index * 188}px`;
    });

    let btnUp = document.querySelector('.product__btn--up');
    let btnDown = document.querySelector('.product__btn--down');

    // bat su kien nut len de di chuyen anh len
    btnUp.addEventListener("click", function() {
        let lastImageTop = parseInt(imgSmall[imgSmall.length - 1].style.top);
        if (lastImageTop !== 564) {
            imgSmall.forEach(function(img) {
                let topOld = parseInt(img.style.top);
                img.style.top = `${topOld - 188}px`;
            });
        }
    });

    // bat su kien nut xuong de di chuyen anh xuong
    btnDown.addEventListener("click", function() {
        let firstImageTop = parseInt(imgSmall[0].style.top);
        if (firstImageTop !== 0) {
            imgSmall.forEach(function(img) {
                let topOld = parseInt(img.style.top);
                img.style.top = `${topOld + 188}px`;
            });
        }
    });

    // bat su kien click vao anh de doi anh chinh
    imgSmall.forEach(function(img, index) {
        img.addEventListener("click", function() {
            let bigImgContainer = document.querySelector('.product__img--big');
            
            // Tạo một bản sao của hình ảnh được nhấp vào
            let imgClone = img.cloneNode(true);
            
            // Xóa nội dung cũ của bigImgContainer
            bigImgContainer.innerHTML = "";
            
            // Chèn bản sao vào bigImgContainer
            bigImgContainer.appendChild(imgClone);
        })
    });
});
