
var productDetails = JSON.parse(localStorage.getItem("details"))

// console.log(productDetails[productDetails.length-1])

// console.log("prem")

var bagData = JSON.parse(localStorage.getItem("bagItems")) || []

document.querySelector("#img").src=productDetails[productDetails.length-1].img_url


document.querySelector("#head").innerText = productDetails[productDetails.length-1].name

document.querySelector("#hdetail").innerText = productDetails[productDetails.length-1].detail

document.querySelector("#price").innerText = productDetails[productDetails.length-1].price

document.querySelector("#rat").innerText = productDetails[productDetails.length-1].rating.trim().split(" ")[0]




document.querySelector("#buy").addEventListener("click",addToBag)


function addToBag(){

    // console.log("prem")
bagData.push(productDetails[productDetails.length-1])
console.log(bagData)

localStorage.setItem("bagItems",JSON.stringify(bagData))

window.location.href = "bag.html"

}