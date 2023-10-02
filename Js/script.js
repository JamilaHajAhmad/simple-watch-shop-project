var allProducts = document.querySelectorAll(".product-item")
var productNames = document.querySelectorAll(".product-item h4")
var divForContent = document.querySelector(".products-names-container")
var button = document.querySelector(".btn")
var totalPrice = 0

allProducts.forEach(function(item) {
    item.onclick = function() {
        divForContent.innerHTML += item.querySelector("h4").textContent + '<br>'
        totalPrice += +(item.getAttribute("price"))
    
    if(divForContent.innerHTML != "") {
       divForContent.style.display = "block"
       divForContent.style.animationPlayState = "running" 
       button.style.display = "block"
       button.style.animationPlayState = "running"
    }
}
})

button.onclick = function() {
    button.innerHTML = totalPrice
}