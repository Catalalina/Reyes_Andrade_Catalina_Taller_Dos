window.addEventListener('load', function () {

    var shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    if (shoppingCart === null) {
        shoppingCart = [];
    }

    function shoppingCart__render() {
        shoppingCart.forEach(function (elem) {
            let total = 0;
            total += parseFloat(elem.product__price);
        });
        document.querySelector('.nav__cont').innerText = shoppingCart.length;
        
    }

    shoppingCart__render();

    document.querySelectorAll('.products__info .products__button').forEach(function (elem) {
        elem.addEventListener('click', function (event) {
            event.preventDefault();
            let parent = document.querySelector('.products__info');

            let product = {
                product__name: parent.querySelector(".products__title").innerHTML,
                product__price: parent.querySelector(".products__price").innerHTML,
                
            };

            shoppingCart.push(product);
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
            console.log(shoppingCart);
            shoppingCart__render();
        });
    });
});