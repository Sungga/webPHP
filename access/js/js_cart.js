let quantities = document.querySelectorAll('.cart__left tr td:nth-child(4) input');
let prices = document.querySelectorAll('.cart__left tr td:nth-child(5)');
let totalSums = document.querySelectorAll('.cart__left tr td:nth-child(6)');

let tongsanpham = document.querySelector('.tongsanpham');
let tongtienhang = document.querySelector('.tongtienhang');
let thanhtien = document.querySelector('.thanhtien');

const currencyFormatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

prices.forEach(function(priceElement) {
    let price = parseFloat(priceElement.textContent.replace(/[^\d]/g, '')); // Loại bỏ tất cả các ký tự không phải số
    priceElement.textContent = currencyFormatter.format(price);
});

function updateTotal(index) {
    let quantity = parseInt(quantities[index].value);
    let price = parseFloat(prices[index].textContent.replace(/[^\d]/g, '')); // Loại bỏ tất cả các ký tự không phải số
    let totalAmount = quantity * price;
    totalSums[index].textContent = currencyFormatter.format(totalAmount);

    // tong san pham cho ben right
    let tong1 = 0;
    quantities.forEach(function(quantity, index) {
        tong1 += parseInt(quantity.value);   
    })
    tongsanpham.innerHTML = tong1;

    // tong tien hang cho ben right
    let tong2 = 0;
    totalSums.forEach(function(totalSum, index) {
        let total = parseFloat(totalSum.textContent.replace(/[^\d]/g, ''));
        tong2 += total;
    });
    tongtienhang.innerHTML = currencyFormatter.format(tong2);

    // thanh tien cho ben right
    let tong3 = tong1 * 30000 + tong2;
    thanhtien.innerHTML = currencyFormatter.format(tong3);
}

totalSums.forEach(function(total, index) {
    updateTotal(index);

    quantities[index].addEventListener('input', function() {
        updateTotal(index);
    });
});
