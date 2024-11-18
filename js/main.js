const main = document.getElementById("main-product");
const small = document.getElementsByClassName("small-img");

for (let i = 0; i < small.length; i++) {
    small[i].onclick = function () {
        main.src = small[i].src;
    };
}
