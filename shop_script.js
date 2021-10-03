var productList = [
    ['Хлеб', 30],
    ['Батон', 35],
    ['Сыр', 110],
    ['Колбаса', 200],
    ['Яица', 60],
    ['Молоко', 70],
    ['Масло', 90]
]

var clientCart = [];

var catalog = document.querySelector('.catalog');
var cart = document.querySelector('.cart');
var cartProductList = document.createElement('table');
cart.appendChild(cartProductList);

var sumText = document.createElement('p');
cart.appendChild(sumText);

for (var i = 0; i < productList.length; i++) {
    var product = document.createElement('div');
    product.className = 'product-item';

    var productInfo = document.createElement('p');
    productInfo.textContent = productList[i][0] + ', цена = ' + productList[i][1];

    var buyButton = document.createElement('button');
    buyButton.textContent = 'Купить';
    buyButton.id = 'product_' + i;
    buyButton.addEventListener('click', addToCart);

    product.appendChild(productInfo);
    product.appendChild(buyButton);

    catalog.appendChild(product);
}

function addToCart(e) {
    var productId = parseInt(e.target.id.replace('product_', ''));
    var productInCartId = clientCart.length > 0 ? getProductInCart(productId) : -1;
    if (productInCartId >= 0) {
        clientCart[productInCartId][1]++;
    }
    else {
        clientCart.push([productId, 1]);
    }
    viewSum();
}

function getProductInCart(pId) {
    var index = -1;

    for (var i = 0; i < clientCart.length; i++) {
        index = clientCart[i][0] == pId ? i : -1;
        if (index >= 0) {
            return index;
        }
    }

    return index;
}

function viewSum() {
    sum = 0;

    cartProductList.innerHTML = '';


    var th = document.createElement('tr');
    th.innerHTML = '<th>Наименование</th><th>Цена</th><th>Кол-во</th><th>Сумма</th>'

    cartProductList.appendChild(th);


    for (var i = 0; i < clientCart.length; i++) {

        var tr = document.createElement('tr');

        var productName = document.createElement('td');
        var productPrice = document.createElement('td');
        var productQuantity = document.createElement('td');
        var productSum = document.createElement('td');

        productName.textContent = productList[clientCart[i][0]][0];
        productPrice.textContent = productList[clientCart[i][0]][1];
        productQuantity.textContent = clientCart[i][1];
        var prSum = clientCart[i][1] * productList[clientCart[i][0]][1]
        productSum.textContent = prSum;
        sum += prSum;

        tr.append(productName, productPrice, productQuantity, productSum);
        cartProductList.append(tr);
    }

    sumText.innerHTML = 'ИТОГО: ' + sum;
}
