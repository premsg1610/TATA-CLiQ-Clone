

 var bagItems = JSON.parse(localStorage.getItem("bagItems")) 

 console.log(bagItems)
//  console.log("prem")


 document.querySelector("#img").src = bagItems[bagItems.length-1].img_url

 document.querySelector("#itemDetail").innerText = bagItems[bagItems.length-1].detail

 document.querySelector("#itemPrice").innerText = "₹ "+ bagItems[bagItems.length-1].price


 document.querySelector("#bagTotal1").innerText = "₹ "+ bagItems[bagItems.length-1].price

 document.querySelector("#bagTotal2").innerText = "₹ "+ bagItems[bagItems.length-1].price

//  document.querySelector("#bagTotal3").innerText = "₹ "+ bagItems[bagItems.length-1].price
document.querySelector("#bagTotal4").innerText = "₹ "+ bagItems[bagItems.length-1].price


document.querySelector("#btn1").addEventListener("click",myfunction);
    function myfunction(){
        window.location.href="checkout.html";
    }

document.querySelector("#delet").addEventListener("click",removeItem);

    function removeItem(){
        // console.log(elem,index)
        // cartData.splice(index,1)
        // console.log(cartData)
        // localStorage.setItem("cart",JSON.stringify(cartData))

    document.querySelector("#maincontainer").style.display = "none"

    document.querySelector("#emptyBox").style.display = "block"
        // if we click remove item then it will remove but show only when we refresh our page
        // to fix this we use this function:
        // window.location.reload()

    }

//  bagItems.map(function(elem){

//     var productBox = document.createElement("div")
//     productBox.setAttribute("id","productbox")

//     var imageBox =  document.createElement("div")
//     imageBox.setAttribute("id","productimg")

//     var img = document.createElement("img")
//     img.src = elem.img_url


//     var productDetails = document.createElement("div")
//     var p1 = document.createElement("p")
//     p1.innerText = elem.detail
//     p1.setAttribute("id","itemDetail")

//     var p2 = document.createElement("p")
//     p2.innerText = elem.price
//     p2.setAttribute("id","itemPrice")

//     productDetails.append(p1,p2)


//     imageBox.append(img)

//     productBox.append(imageBox,productDetails)

//     document.querySelector("#itemsContainer").append(productBox)
//  })