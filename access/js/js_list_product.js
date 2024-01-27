document.addEventListener("DOMContentLoaded", function() {
    // ----------------<< setting an hien thanh cong cu >>----------------
    var itemTops = document.querySelectorAll('.list-product__left--item-top');

    itemTops.forEach(function(itemTop, index) {
        itemTop.addEventListener("click", function() {
            var itemBottom = itemTop.nextElementSibling; // lay phan tu ke tiep

            // toggle hien thi/an itemBottom
            if (itemBottom.style.display === 'flex') {
                itemBottom.style.display = 'none';
                itemTop.querySelector('p:last-child').style.display = 'block'; // hien thi dau "-"
                itemTop.querySelector('p:nth-child(2)').style.display = 'none'; // an dau "+"
            } else {
                itemBottom.style.display = 'flex';
                itemTop.querySelector('p:last-child').style.display = 'none'; // an dau "-"
                itemTop.querySelector('p:nth-child(2)').style.display = 'block'; // hien thi dau "+"
            }
        });
    });

    // ---------------<< setting thanh truot muc gia >>-------------------
    var range = document.getElementById('myRange');
    var rangeValue = document.getElementById('rangeValue');

    range.addEventListener('input', function() {
        rangeValue.textContent = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(range.value);
    });
});
