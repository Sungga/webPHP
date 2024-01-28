document.addEventListener("DOMContentLoaded", function() {
    // ----------------<< setting an hien thanh cong cu >>----------------
    let itemTops = document.querySelectorAll('.list-product__left--item-top');

    itemTops.forEach(function(itemTop, index) {
        itemTop.addEventListener("click", function() {
            let itemBottom = itemTop.nextElementSibling; // lay phan tu ke tiep

            // toggle hien thi/an itemBottom
            if (itemBottom.style.display === 'flex') {
                itemBottom.style.display = 'none';
                itemTop.querySelector('p:last-child').style.display = 'none'; // hien thi dau "-"
                itemTop.querySelector('p:nth-child(2)').style.display = 'block'; // an dau "+"
            } else {
                itemBottom.style.display = 'flex';
                itemTop.querySelector('p:last-child').style.display = 'block'; // an dau "-"
                itemTop.querySelector('p:nth-child(2)').style.display = 'none'; // hien thi dau "+"
            }
        });
    });


    // ---------------<< setting thanh truot muc gia >>-------------------
    let range = document.getElementById('myRange');
    let rangeValue = document.getElementById('rangeValue');

    range.addEventListener('input', function() {
        rangeValue.textContent = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(range.value);
    });


    // -----------------<< setting hien thi chon size khi an vao gio hang >>--------------------
    let cartItems = document.querySelectorAll('.list-product__product--cart');

    cartItems.forEach(cartItem => {
    cartItem.addEventListener('click', function() {
        // Lấy phần tử cartSize tương ứng (trong cùng một container hoặc có cách xác định phù hợp)
        let relatedCartSize = this.closest('.list-product__product--cart').querySelector('.list-product__product--size');

        // Kiểm tra trạng thái hiện tại của cartSize và đảo ngược giá trị display
        if (relatedCartSize.style.visibility === 'inherit') {
            relatedCartSize.style.visibility = 'hidden';
            relatedCartSize.style.opacity = '0';
        } else {
            relatedCartSize.style.opacity = '1';
            relatedCartSize.style.visibility = 'inherit';
        }
    });
    });

});
