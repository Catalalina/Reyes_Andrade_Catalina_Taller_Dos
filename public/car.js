window.addEventListener('load', function () {

    var shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    if (shoppingCart === null) {
        shoppingCart = [];
    }

    // var shoppingCart = [];

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

            // console.log(elem.children('.products__price'));
            let parent = elem.parentElement;

            let product = {
                product__name: parent.querySelector('h1').innerText,
                product__price: parent.querySelector('h3').innerText,
                
            };

            shoppingCart.push(product);
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
            console.log(shoppingCart);
            shoppingCart__render();
        });
    });

    document.querySelectorAll('.description__info .description__button .description__button__add').forEach(function (elem) {
        elem.addEventListener('click', function (event) {
            event.preventDefault();
            let parent = elem.parentElement.parentElement;

            let product = {
                product__name: parent.querySelector('h1').innerText,
                product__price: parent.querySelector('h3').innerText,
                
            };

            shoppingCart.push(product);
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
            console.log(shoppingCart);
            shoppingCart__render();
        });
    });
    // localStorage.setItem('shoppingCart', null);


});