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

            console.log(elem.children('.products__price'));
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

    document.querySelectorAll('.description__info .description__button .description__button__add').forEach(function (elem) {
        elem.addEventListener('click', function (event) {
            event.preventDefault();
            let parent = elem.parentElement.parentElement;

            let product = {
                product__name: parent.querySelector(".description__info__nombre").innerHTML,
                product__price: parent.querySelector(".description__info__price").innerHTML,
                
            };

            shoppingCart.push(product);
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
            console.log(shoppingCart);
            shoppingCart__render();
        });
    });
    // localStorage.setItem('shoppingCart', null);

    var valor = 0; 
    shoppingCart.forEach(function(elem){
        var h = document.createElement('h1');
        var h3 = document.createElement('h3');
        h3.innerText = elem.product__price;
        h.innerText = elem.product__name;
        valor += parseInt(elem.product__price);

        document.querySelector('.ejemplo').appendChild(h);
        document.querySelector('.ejemplo').appendChild(h3);
    });

    h2 = document.createElement('h2');
    h2.innerText = valor;
    document.querySelector('.ejemplo').appendChild(h2);
});